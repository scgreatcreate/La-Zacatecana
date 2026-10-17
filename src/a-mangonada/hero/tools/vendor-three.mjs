// Builds vendor/three.js: the exact three.js (r186) members this hero uses, from three/src/*, with
//  • GLSL chunks minified (comments, indentation, blank lines removed; line structure kept for the preprocessor)
//  • chunks / ShaderLib programs that no material used here can ever #include replaced by '' (the renderer only
//    resolves a chunk when a program that includes it is compiled; we only compile meshphysical/meshbasic/meshlambert)
// Re-run after upgrading three: node src/a-mangonada/hero/tools/vendor-three.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import * as esbuild from 'esbuild';

const dir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const root = path.resolve(dir, '../../..');
const shaders = path.join(root, 'node_modules/three/src/renderers/shaders');

// programs we compile: MeshPhysical/MeshStandard → meshphysical, MeshBasic → meshbasic, MeshLambert (RoomEnvironment lights)
const KEEP_PROGRAMS = ['meshphysical', 'meshbasic', 'meshlambert'];
// chunks referenced directly by JS (WebGLProgram prefix, WebGLOutput, PMREMGenerator shaders)
const KEEP_DIRECT = ['tonemapping_pars_fragment', 'colorspace_pars_fragment', 'cube_uv_reflection_fragment', 'common'];

const src = (f) => fs.readFileSync(f, 'utf8');
const includes = (code) => [...code.matchAll(/#include +<([\w\d./]+)>/g)].map((m) => m[1]);
const keep = new Set();
const visit = (name) => {
  if (keep.has(name)) return;
  const f = path.join(shaders, 'ShaderChunk', `${name}.glsl.js`);
  if (!fs.existsSync(f)) return;
  keep.add(name);
  includes(src(f)).forEach(visit);
};
for (const p of KEEP_PROGRAMS) includes(src(path.join(shaders, 'ShaderLib', `${p}.glsl.js`))).forEach(visit);
KEEP_DIRECT.forEach(visit);

// macros this scene can never define (no morphs/skinning/batching/shadows/fog/log-depth/clipping/light-AO-bump-
// normal-displacement-specular maps/iridescence/dithering/alpha-hash/anisotropy). A chunk is blanked only if its
// whole body is one #if/#ifdef block whose condition uses nothing but these macros → it compiles to nothing anyway.
const NEVER = new Set(('USE_MORPHTARGETS USE_MORPHNORMALS USE_MORPHCOLORS USE_SKINNING USE_BATCHING USE_BATCHING_COLOR ' +
  'USE_LOGDEPTHBUF USE_SHADOWMAP USE_LIGHTMAP USE_AOMAP USE_BUMPMAP USE_NORMALMAP USE_NORMALMAP_OBJECTSPACE ' +
  'USE_NORMALMAP_TANGENTSPACE USE_CLEARCOAT_NORMALMAP USE_DISPLACEMENTMAP USE_IRIDESCENCE USE_IRIDESCENCEMAP ' +
  'USE_IRIDESCENCE_THICKNESSMAP USE_FOG FOG_EXP2 DITHERING PREMULTIPLIED_ALPHA USE_ALPHAHASH USE_SPECULARMAP ' +
  'USE_ANISOTROPY USE_ANISOTROPYMAP NUM_CLIPPING_PLANES USE_TANGENT').split(' '));
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
function fullyGuardedByNever(glsl) {
  const lines = stripComments(glsl).split('\n').map((l) => l.trim()).filter(Boolean);
  if (!lines.length || !/^#if(def)?\b/.test(lines[0]) || lines[lines.length - 1] !== '#endif') return false;
  const ids = (lines[0].replace(/^#if(def)?/, '').match(/[A-Za-z_]\w*/g) || []).filter((t) => t !== 'defined');
  if (!ids.length || !ids.every((t) => NEVER.has(t))) return false;
  let depth = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/^#if/.test(lines[i])) depth++;
    else if (lines[i] === '#endif') { depth--; if (depth === 0 && i !== lines.length - 1) return false; }
  }
  return depth === 0;
}
// inner #if blocks that can only be false here (spot/rect-area/hemisphere lights, shadows, unused texture maps…)
const NEVER_BLOCK = new Set([...NEVER, ...('NUM_SPOT_LIGHTS NUM_RECT_AREA_LIGHTS NUM_HEMI_LIGHTS NUM_DIR_LIGHT_SHADOWS ' +
  'NUM_POINT_LIGHT_SHADOWS NUM_SPOT_LIGHT_SHADOWS NUM_SPOT_LIGHT_COORDS NUM_SPOT_LIGHT_MAPS NUM_SPOT_LIGHT_SHADOWS_WITHOUT_MAPS ' +
  'USE_SPECULARINTENSITYMAP USE_SPECULAR_COLORMAP USE_SHEEN_COLORMAP USE_SHEEN_ROUGHNESSMAP USE_CLEARCOATMAP ' +
  'USE_CLEARCOAT_ROUGHNESSMAP USE_TRANSMISSIONMAP USE_THICKNESSMAP USE_METALNESSMAP USE_ROUGHNESSMAP USE_DISPERSION ' +
  'USE_INSTANCING_MORPH USE_GRADIENTMAP FLAT_SHADED').split(' ')]);
const certainlyFalse = (line) => {
  const m = line.match(/^#(ifdef|if)\s+(.*)$/);
  if (!m) return false;
  const cond = m[2];
  if (/[!<=]/.test(cond)) return false;                      // only positive conditions
  if ((cond.match(/\d+/g) || []).some((n) => n !== '0')) return false;
  const ids = (cond.match(/[A-Za-z_]\w*/g) || []).filter((t) => t !== 'defined');
  return ids.length > 0 && ids.every((t) => NEVER_BLOCK.has(t)); // all atoms false → any &&/|| mix is false
};
function pruneBlocks(glsl) {
  const L = glsl.split('\n'), out = [];
  for (let i = 0; i < L.length; i++) {
    const t = L[i].trim();
    if (certainlyFalse(t)) {
      let d = 0, j = i, hasElse = false;
      for (; j < L.length; j++) {
        const u = L[j].trim();
        if (/^#if/.test(u)) d++;
        else if (/^#endif/.test(u)) { d--; if (d === 0) break; }
        else if (d === 1 && /^#(else|elif)/.test(u)) hasElse = true;
      }
      if (!hasElse && j < L.length) { pruned++; i = j; continue; }
    }
    out.push(L[i]);
  }
  return out.join('\n');
}
let pruned = 0;
const minGLSL = (s) => pruneBlocks(stripComments(s))
  .split('\n')
  .map((l) => {
    l = l.replace(/[ \t]+/g, ' ').trim();
    if (l.startsWith('#')) return l; // preprocessor lines are space-sensitive (function-like macros)
    return l.replace(/ ?([=*/<>!&|,;:?(){}\[\]]) ?/g, '$1'); // never touch + and - (a - -b must not become a--b)
  })
  .filter(Boolean)
  .join('\n');
const minTemplates = (code) => code.replace(/\/\* glsl \*\/\s*`([\s\S]*?)`/g, (_, g) => {
  if (g.includes('${')) return '`' + g + '`';
  return '`' + minGLSL(g) + '`';
});

let before = 0, after = 0, blanked = 0;
const STUBS = {
  'renderers/webxr/WebXRManager.js': `import { EventDispatcher } from '../../core/EventDispatcher.js';
class WebXRManager extends EventDispatcher {
  constructor() { super(); this.enabled = false; this.isPresenting = false; this.cameraAutoUpdate = true; }
  getEnvironmentBlendMode() {} updateCamera() {} setAnimationLoop() {} hasDepthSensing() { return false; }
  getDepthSensingMesh() { return null; } getCamera() { return null; } dispose() {}
}
export { WebXRManager };`,
  'renderers/webgl/WebGLShadowMap.js': `import { PCFShadowMap } from '../../constants.js';
function WebGLShadowMap() { this.enabled = false; this.autoUpdate = true; this.needsUpdate = false; this.type = PCFShadowMap; this.render = function () {}; }
export { WebGLShadowMap };`,
  // no morph targets / uniform-buffer groups in this scene (renderer only calls these when they exist)
  'renderers/webgl/WebGLMorphtargets.js': 'function WebGLMorphtargets() { return { update() {} }; }\nexport { WebGLMorphtargets };',
  'renderers/webgl/WebGLUniformsGroups.js': 'function WebGLUniformsGroups() { return { bind() {}, update() {}, dispose() {} }; }\nexport { WebGLUniformsGroups };',
};
// three's JSON serialisers are dead code here; drop `toJSON( … ) { … }` methods (brace-matched; build fails loudly if wrong)
let stripped = 0;
function stripToJSON(code) {
  let out = '', i = 0;
  const re = /\n\t(?:static )?toJSON\s*\([^)]*\)\s*\{/g;
  let m;
  while ((m = re.exec(code))) {
    let j = m.index + m[0].length, depth = 1;
    while (j < code.length && depth) { const ch = code[j++]; if (ch === '{') depth++; else if (ch === '}') depth--; }
    out += code.slice(i, m.index) + '\n';
    i = j; re.lastIndex = j; stripped++;
  }
  return out + code.slice(i);
}
const glslPlugin = {
  name: 'glsl-prune-minify',
  setup(b) {
    b.onLoad({ filter: /three[\\/]src[\\/](core[\\/](Object3D|BufferGeometry|BufferAttribute|InterleavedBuffer|InterleavedBufferAttribute)|materials[\\/]Material|textures[\\/](Texture|Source)|scenes[\\/]Scene|objects[\\/](InstancedMesh|Mesh)|cameras[\\/](PerspectiveCamera|Camera)|lights[\\/](Light|DirectionalLight|PointLight|LightShadow)|math[\\/]Color)\.js$/ }, (a) => {
      const code = stripToJSON(src(a.path));
      return { contents: code, loader: 'js', resolveDir: path.dirname(a.path) };
    });
    b.onLoad({ filter: /three[\\/]src[\\/]renderers[\\/](webxr[\\/]WebXRManager|webgl[\\/](WebGLShadowMap|WebGLMorphtargets|WebGLUniformsGroups))\.js$/ }, (a) => {
      const key = Object.keys(STUBS).find((k) => a.path.replace(/\\/g, '/').endsWith(k));
      return { contents: STUBS[key], loader: 'js', resolveDir: path.dirname(a.path) };
    });
    b.onLoad({ filter: /renderers[\\/]shaders[\\/](ShaderChunk|ShaderLib)[\\/][\w]+\.glsl\.js$/ }, (a) => {
      const code = src(a.path);
      before += code.length;
      const kind = /ShaderLib/.test(a.path) ? 'lib' : 'chunk';
      const name = path.basename(a.path, '.glsl.js');
      let out;
      const body = (code.match(/`([\s\S]*)`/) || [])[1] || '';
      if (kind === 'chunk' && (!keep.has(name) || fullyGuardedByNever(body))) { out = 'export default "";'; blanked++; }
      else if (kind === 'lib' && !KEEP_PROGRAMS.includes(name)) { out = 'export const vertex = "";\nexport const fragment = "";'; blanked++; }
      else out = minTemplates(code);
      after += out.length;
      return { contents: out, loader: 'js' };
    });
  },
};

const outFile = path.join(dir, 'vendor/three.js');
await esbuild.build({
  entryPoints: [path.join(dir, 'tools/three-entry.js')],
  bundle: true, format: 'esm', minify: true, target: ['es2020', 'safari15'],
  outfile: outFile, legalComments: 'none', plugins: [glslPlugin], logLevel: 'warning',
  banner: { js: '/*! three.js r186 | Copyright 2010-2025 three.js authors | SPDX-License-Identifier: MIT | subset vendored by tools/vendor-three.mjs — do not edit */' },
});
const buf = fs.readFileSync(outFile);
console.log(`vendor/three.js ${(buf.length / 1024).toFixed(1)} kB · ${(zlib.gzipSync(buf, { level: 9 }).length / 1024).toFixed(1)} kB gz · GLSL ${(before / 1024).toFixed(0)}→${(after / 1024).toFixed(0)} kB · ${keep.size} chunks kept, ${blanked} blanked, ${pruned} dead #if blocks removed, ${stripped} toJSON() removed, XR / shadow map / morph targets / UBO groups stubbed`);

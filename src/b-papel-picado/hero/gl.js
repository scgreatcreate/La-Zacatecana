// Minimal WebGL2 layer for this hero. Every material here is a custom shader, so three.js's
// WebGLRenderer (≈530 kB minified on its own) is replaced by this small renderer; three.js is still
// used for the math (Vector3 / Vector4 / Matrix4). Shaders are written GLSL1-style, the prefix maps them
// to GLSL ES 3.0 and declares the built-ins three's ShaderMaterial would provide.
import { Matrix4 } from 'three/src/math/Matrix4.js';
import { Vector3 } from 'three/src/math/Vector3.js';

const VS_PREFIX = `#version 300 es
precision highp float;
precision highp int;
#define attribute in
#define varying out
#define texture2D texture
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec3 cameraPosition;
in vec3 position;
in vec3 normal;
in vec2 uv;
`;
const FS_PREFIX = `#version 300 es
precision highp float;
precision highp int;
#define varying in
#define texture2D texture
out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;

const IDENT = new Matrix4();

// ---------------------------------------------------------------- cameras (three's Matrix4 does the math)
export class Camera {
  constructor() {
    this.position = new Vector3();
    this.target = new Vector3(0, 0, -1);
    this.up = new Vector3(0, 1, 0);
    this.proj = new Matrix4();
    this.world = new Matrix4();
    this.view = new Matrix4();
    this.viewProj = new Matrix4();
  }
  lookAt(t) { this.target.copy(t); return this; }
  update() {
    this.world.lookAt(this.position, this.target, this.up);
    this.world.setPosition(this.position);
    this.view.copy(this.world).invert();
    this.viewProj.multiplyMatrices(this.proj, this.view);
    return this;
  }
}
export class PerspCamera extends Camera {
  constructor(fov = 40, aspect = 1, near = 0.05, far = 80) { super(); Object.assign(this, { fov, aspect, near, far }); }
  update() {
    const top = this.near * Math.tan((this.fov * Math.PI) / 360), h = 2 * top, w = this.aspect * h;
    this.proj.makePerspective(-w / 2, w / 2, top, top - h, this.near, this.far);
    return super.update();
  }
  // NDC → world-space ray direction
  ray(nx, ny, outDir) {
    const inv = new Matrix4().multiplyMatrices(this.proj, this.view).invert();
    outDir.set(nx, ny, 0.5).applyMatrix4(inv).sub(this.position).normalize();
    return outDir;
  }
}
export class OrthoCamera extends Camera {
  constructor() { super(); Object.assign(this, { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 60 }); }
  update() {
    this.proj.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far);
    return super.update();
  }
}

// ---------------------------------------------------------------- geometry helpers
export function box(w, h, d, cx = 0, cy = 0, cz = 0) {
  const P = [], N = [], I = [];
  const face = (n, u, v) => {
    const o = P.length / 3;
    for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      P.push(cx + (n[0] + u[0] * a + v[0] * b) * w / 2, cy + (n[1] + u[1] * a + v[1] * b) * h / 2, cz + (n[2] + u[2] * a + v[2] * b) * d / 2);
      N.push(...n);
    }
    I.push(o, o + 1, o + 2, o, o + 2, o + 3);
  };
  face([0, 0, 1], [1, 0, 0], [0, 1, 0]); face([0, 0, -1], [-1, 0, 0], [0, 1, 0]);
  face([1, 0, 0], [0, 0, -1], [0, 1, 0]); face([-1, 0, 0], [0, 0, 1], [0, 1, 0]);
  face([0, 1, 0], [1, 0, 0], [0, 0, -1]); face([0, -1, 0], [1, 0, 0], [0, 0, 1]);
  return { position: new Float32Array(P), normal: new Float32Array(N), index: I };
}

// ---------------------------------------------------------------- renderer
export class Renderer {
  constructor(canvas) {
    const gl = canvas.getContext('webgl2', { antialias: true, alpha: false, depth: true, stencil: false, powerPreference: 'high-performance', premultipliedAlpha: false, preserveDrawingBuffer: false });
    if (!gl) throw new Error('WebGL2 unavailable');
    this.gl = gl;
    this.canvas = canvas;
    this.dpr = 1;
    this.width = 1; this.height = 1;
    this.info = { calls: 0, triangles: 0 };
    this.aniso = gl.getExtension('EXT_texture_filter_anisotropic');
    this.maxAniso = this.aniso ? gl.getParameter(this.aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;
    this.programs = new Map();
    this.state = {};
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }
  setPixelRatio(d) { this.dpr = d; }
  setSize(w, h) {
    this.width = w; this.height = h;
    this.canvas.width = Math.round(w * this.dpr);
    this.canvas.height = Math.round(h * this.dpr);
  }
  get drawingSize() { return [this.canvas.width, this.canvas.height]; }

  // ---- programs
  program(vs, fs) {
    const key = vs + '\u0000' + fs;
    let p = this.programs.get(key);
    if (p) return p;
    const gl = this.gl;
    const sh = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS) && !gl.isContextLost()) {
        const log = gl.getShaderInfoLog(s);
        throw new Error('shader: ' + log + '\n' + src.split('\n').map((l, i) => i + 1 + ': ' + l).join('\n').slice(0, 4000));
      }
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS_PREFIX + vs));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS_PREFIX + fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS) && !gl.isContextLost()) throw new Error('link: ' + gl.getProgramInfoLog(prog));
    const uniforms = [];
    const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) {
      const u = gl.getActiveUniform(prog, i);
      uniforms.push({ name: u.name.replace(/\[0\]$/, ''), type: u.type, size: u.size, loc: gl.getUniformLocation(prog, u.name), buf: null });
    }
    const attribs = {};
    const na = gl.getProgramParameter(prog, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < na; i++) { const a = gl.getActiveAttrib(prog, i); attribs[a.name] = gl.getAttribLocation(prog, a.name); }
    p = { prog, uniforms, attribs, vaos: new WeakMap() };
    this.programs.set(key, p);
    return p;
  }

  // ---- geometry: { attributes: { name: { array, size, divisor } }, index }
  geometry(def) {
    const gl = this.gl;
    const g = { attributes: {}, index: null, count: 0, instanceCount: 1, instanced: false };
    for (const [name, a] of Object.entries(def.attributes)) {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, a.array, a.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);
      g.attributes[name] = { buf, array: a.array, size: a.size, divisor: a.divisor || 0, dynamic: !!a.dynamic };
      if (a.divisor) g.instanced = true;
    }
    if (def.index) {
      const idx = def.index instanceof Uint16Array || def.index instanceof Uint32Array ? def.index : new (def.index.length > 65535 ? Uint32Array : Uint16Array)(def.index);
      g.index = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.index);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
      g.indexType = idx instanceof Uint32Array ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
      g.count = idx.length;
    } else {
      const pos = def.attributes.position;
      g.count = pos.array.length / pos.size;
    }
    g.update = (name) => {
      const a = g.attributes[name];
      gl.bindBuffer(gl.ARRAY_BUFFER, a.buf);
      gl.bufferData(gl.ARRAY_BUFFER, a.array, gl.DYNAMIC_DRAW);
    };
    return g;
  }

  vao(p, g) {
    let v = p.vaos.get(g);
    if (v) return v;
    const gl = this.gl;
    v = gl.createVertexArray();
    gl.bindVertexArray(v);
    for (const [name, loc] of Object.entries(p.attribs)) {
      const a = g.attributes[name];
      if (!a || loc < 0) continue;
      gl.bindBuffer(gl.ARRAY_BUFFER, a.buf);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, a.size, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(loc, a.divisor);
    }
    if (g.index) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.index);
    gl.bindVertexArray(null);
    p.vaos.set(g, v);
    return v;
  }

  // ---- textures
  texture(source, o = {}) {
    const gl = this.gl;
    const t = { tex: gl.createTexture(), width: source.width, height: source.height };
    gl.bindTexture(gl.TEXTURE_2D, t.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!o.flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    this.params(t, { mip: o.mip !== false, wrap: o.wrap, aniso: o.aniso || 1 });
    return t;
  }
  params(t, { mip, wrap, aniso = 1 }) {
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, t.tex);
    const w = wrap === 'repeat' ? gl.REPEAT : gl.CLAMP_TO_EDGE;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, w);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, w);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mip ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
    if (mip) gl.generateMipmap(gl.TEXTURE_2D);
    if (this.aniso && aniso > 1) gl.texParameterf(gl.TEXTURE_2D, this.aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(aniso, this.maxAniso));
    t.mip = mip;
  }
  target(w, h, o = {}) {
    const gl = this.gl;
    const t = { tex: gl.createTexture(), fbo: gl.createFramebuffer(), width: w, height: h, isTarget: true };
    gl.bindTexture(gl.TEXTURE_2D, t.tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    this.params(t, { mip: false, wrap: o.wrap });
    gl.bindFramebuffer(gl.FRAMEBUFFER, t.fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t.tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    t.wantMip = !!o.mip;
    return t;
  }
  setTarget(t) {
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, t ? t.fbo : null);
    if (t) gl.viewport(0, 0, t.width, t.height);
    else gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.cur = t || null;
  }
  finishTarget(t) {
    if (!t.wantMip) return;
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, t.tex);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    if (this.aniso) gl.texParameterf(gl.TEXTURE_2D, this.aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(4, this.maxAniso));
  }
  clear(r, g, b, a = 1) {
    const gl = this.gl;
    this.setDepthWrite(true);
    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  // ---- state
  setDepthWrite(on) { if (this.state.dw !== on) { this.gl.depthMask(on); this.state.dw = on; } }
  applyState(m) {
    const gl = this.gl, s = this.state;
    const dt = m.depthTest !== false;
    if (s.dt !== dt) { dt ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST); s.dt = dt; }
    this.setDepthWrite(m.depthWrite !== false);
    const cull = m.cull || 'none';
    if (s.cull !== cull) {
      if (cull === 'none') gl.disable(gl.CULL_FACE);
      else { gl.enable(gl.CULL_FACE); gl.cullFace(cull === 'front' ? gl.FRONT : gl.BACK); }
      s.cull = cull;
    }
    const blend = m.blend || 'none';
    if (s.blend !== blend) {
      if (blend === 'none') gl.disable(gl.BLEND);
      else if (blend === 'multiply-min') {
        // rgb: dst *= src (transmittance multiplies), alpha: min (nearest occluder distance)
        gl.enable(gl.BLEND);
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.MIN);
        gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ONE, gl.ONE);
      }
      s.blend = blend;
    }
    const a2c = !!m.a2c;
    if (s.a2c !== a2c) { a2c ? gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE) : gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE); s.a2c = a2c; }
  }

  // ---- draw one mesh: { geo, vs, fs, uniforms, depthTest, depthWrite, cull, blend, a2c, model, visible, instanceCount }
  draw(m, cam) {
    if (m.visible === false) return;
    const gl = this.gl;
    const p = m._p || (m._p = this.program(m.vs, m.fs));
    gl.useProgram(p.prog);
    this.applyState(m);
    let unit = 0;
    for (const u of p.uniforms) {
      let v;
      switch (u.name) {
        case 'projectionMatrix': v = cam.proj; break;
        case 'viewMatrix': v = cam.view; break;
        case 'modelMatrix': v = m.model || IDENT; break;
        case 'cameraPosition': v = cam.position; break;
        default: { const e = m.uniforms && m.uniforms[u.name]; v = e && e.value; }
      }
      if (v == null) continue;
      unit = this.setUniform(u, v, unit);
    }
    gl.bindVertexArray(this.vao(p, m.geo));
    const g = m.geo;
    const inst = m.instanceCount != null ? m.instanceCount : (g.instanced ? g.instanceCount : 1);
    if (inst <= 0) { gl.bindVertexArray(null); return; }
    if (g.index) {
      if (g.instanced) gl.drawElementsInstanced(gl.TRIANGLES, g.count, g.indexType, 0, inst);
      else gl.drawElements(gl.TRIANGLES, g.count, g.indexType, 0);
    } else if (g.instanced) gl.drawArraysInstanced(gl.TRIANGLES, 0, g.count, inst);
    else gl.drawArrays(gl.TRIANGLES, 0, g.count);
    gl.bindVertexArray(null);
    this.info.calls++;
    this.info.triangles += (g.count / 3) * (g.instanced ? inst : 1);
  }

  setUniform(u, v, unit) {
    const gl = this.gl;
    const flat = (n) => {
      if (v instanceof Float32Array) return v;
      if (!u.buf) u.buf = new Float32Array(n * u.size);
      const b = u.buf;
      if (Array.isArray(v) && typeof v[0] === 'object') {
        v.forEach((e, i) => { if (n >= 1) b[i * n] = e.x; if (n >= 2) b[i * n + 1] = e.y; if (n >= 3) b[i * n + 2] = e.z; if (n >= 4) b[i * n + 3] = e.w; });
      } else if (Array.isArray(v)) b.set(v.slice(0, n * u.size));
      else { b[0] = v.x; b[1] = v.y; if (n > 2) b[2] = v.z; if (n > 3) b[3] = v.w; }
      return b;
    };
    switch (u.type) {
      case gl.FLOAT: if (u.size > 1) gl.uniform1fv(u.loc, v); else gl.uniform1f(u.loc, v); break;
      case gl.FLOAT_VEC2: gl.uniform2fv(u.loc, flat(2)); break;
      case gl.FLOAT_VEC3: gl.uniform3fv(u.loc, flat(3)); break;
      case gl.FLOAT_VEC4: gl.uniform4fv(u.loc, flat(4)); break;
      case gl.FLOAT_MAT4: gl.uniformMatrix4fv(u.loc, false, v.elements || v); break;
      case gl.INT: case gl.BOOL: gl.uniform1i(u.loc, v | 0); break;
      case gl.SAMPLER_2D:
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, v.tex);
        gl.uniform1i(u.loc, unit);
        return unit + 1;
      default: break;
    }
    return unit;
  }

  dispose() {
    const ext = this.gl.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
  }
}

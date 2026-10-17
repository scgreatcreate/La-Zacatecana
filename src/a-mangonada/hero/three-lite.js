// The only door to three.js in this folder. Re-exports the vendored subset built by tools/vendor-three.mjs
// (three/src/* members + minified/pruned GLSL). Never `import … from 'three'` here — it pulls in the full build.
export * from './vendor/three.js';

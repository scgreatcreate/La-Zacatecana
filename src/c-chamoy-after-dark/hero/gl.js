// Minimal WebGL2 helpers: programs, render targets, a full-screen triangle.

export function createContext(canvas) {
  let gl = null;
  try {
    gl = canvas.getContext('webgl2', {
      alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false,
      preserveDrawingBuffer: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false,
    });
  } catch (e) { gl = null; }
  if (!gl) return null;
  const cbf = gl.getExtension('EXT_color_buffer_float');
  const cbh = cbf ? null : gl.getExtension('EXT_color_buffer_half_float');
  if (!cbf && !cbh) return null;
  gl.getExtension('OES_texture_float_linear');
  const ctx = { gl, float32: !!cbf };
  ctx.half = pickFormat(gl, gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT);
  ctx.rg = pickFormat(gl, gl.RG16F, gl.RG, gl.HALF_FLOAT) || ctx.half;
  ctx.r = pickFormat(gl, gl.R16F, gl.RED, gl.HALF_FLOAT) || ctx.half;
  ctx.f32 = cbf ? pickFormat(gl, gl.RGBA32F, gl.RGBA, gl.FLOAT) : null;
  if (!ctx.half) return null;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  ctx.vao = vao;
  ctx.emptyVao = gl.createVertexArray();
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);
  return ctx;
}

function pickFormat(gl, internal, format, type) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texImage2D(gl.TEXTURE_2D, 0, internal, 4, 4, 0, format, type, null);
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.deleteFramebuffer(fb);
  gl.deleteTexture(tex);
  return ok ? { internal, format, type } : null;
}

export function compile(ctx, vsSrc, fsSrc) {
  const { gl } = ctx;
  const sh = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS) && !gl.isContextLost()) {
      throw new Error('shader: ' + gl.getShaderInfoLog(s) + '\n' + src.split('\n').map((l, i) => i + 1 + ': ' + l).join('\n'));
    }
    return s;
  };
  const p = gl.createProgram();
  gl.attachShader(p, sh(gl.VERTEX_SHADER, vsSrc));
  gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fsSrc));
  gl.bindAttribLocation(p, 0, 'aPos');
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS) && !gl.isContextLost()) throw new Error('link: ' + gl.getProgramInfoLog(p));
  const cache = new Map();
  const loc = (n) => {
    if (!cache.has(n)) cache.set(n, gl.getUniformLocation(p, n));
    return cache.get(n);
  };
  let unit = 0;
  const prog = {
    p,
    use() { gl.useProgram(p); unit = 0; return prog; },
    f(n, ...v) { const l = loc(n); if (l) gl['uniform' + v.length + 'f'](l, ...v); return prog; },
    i(n, v) { const l = loc(n); if (l) gl.uniform1i(l, v); return prog; },
    fv(n, arr) { const l = loc(n); if (l) gl.uniform1fv(l, arr); return prog; },
    v4(n, arr) { const l = loc(n); if (l) gl.uniform4fv(l, arr); return prog; },
    t(n, tex) { const l = loc(n); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tex.tex || tex); if (l) gl.uniform1i(l, unit); unit++; return prog; },
  };
  return prog;
}

export function target(ctx, w, h, fmt, filter) {
  const { gl } = ctx;
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  const f = filter === 'nearest' ? gl.NEAREST : gl.LINEAR;
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, fmt.internal, w, h, 0, fmt.format, fmt.type, null);
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.viewport(0, 0, w, h);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { tex, fb, w, h, tx: 1 / w, ty: 1 / h, dispose() { gl.deleteTexture(tex); gl.deleteFramebuffer(fb); } };
}

export function pingpong(ctx, w, h, fmt, filter) {
  let a = target(ctx, w, h, fmt, filter);
  let b = target(ctx, w, h, fmt, filter);
  return {
    w, h, tx: 1 / w, ty: 1 / h,
    get read() { return a; },
    get write() { return b; },
    swap() { const t = a; a = b; b = t; },
    dispose() { a.dispose(); b.dispose(); },
  };
}

// draw the full-screen triangle into `t` (or the canvas when t is null)
export function draw(ctx, t) {
  const { gl } = ctx;
  if (t) { gl.bindFramebuffer(gl.FRAMEBUFFER, t.fb); gl.viewport(0, 0, t.w, t.h); }
  else { gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); }
  gl.bindVertexArray(ctx.vao);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

export function imageTexture(ctx, source, { mips = false, flip = true, premult = false } = {}) {
  const { gl } = ctx;
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flip);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premult);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mips ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  if (mips) gl.generateMipmap(gl.TEXTURE_2D);
  return { tex, dispose() { gl.deleteTexture(tex); } };
}

export function dataTexture(ctx, w, h, data, { mips = false } = {}) {
  const { gl } = ctx;
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mips ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  if (mips) gl.generateMipmap(gl.TEXTURE_2D);
  return { tex, dispose() { gl.deleteTexture(tex); } };
}

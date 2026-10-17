// Fluid + flecks + bloom + composite. Velocity is in sim texels / second.
import { compile, target, pingpong, draw, imageTexture } from './gl.js';
import * as S from './shaders.js';

export function createFluid(ctx, cfg) {
  const { gl } = ctx;
  const P = {
    copy: compile(ctx, S.VS, S.COPY),
    splat: compile(ctx, S.VS, S.SPLAT),
    advect: compile(ctx, S.VS, S.ADVECT),
    curl: compile(ctx, S.VS, S.CURL),
    visc: compile(ctx, S.VS, S.VISCOUS),
    forces: compile(ctx, S.VS, S.FORCES),
    div: compile(ctx, S.VS, S.DIVERGENCE),
    pressure: compile(ctx, S.VS, S.PRESSURE),
    grad: compile(ctx, S.VS, S.GRADIENT),
    seed: compile(ctx, S.VS, S.SEED),
    pUpdate: compile(ctx, S.VS, S.P_UPDATE),
    pDraw: compile(ctx, S.P_VS, S.P_FS),
    emit: compile(ctx, S.VS, S.B_EMIT),
    down: compile(ctx, S.VS, S.B_DOWN),
    up: compile(ctx, S.VS, S.B_UP),
    comp: compile(ctx, S.VS, S.COMPOSITE),
  };
  const st = { vel: null, dye: null, curl: null, divg: null, prs: null, parts: null, bloom: [], neon: null, bg: null };
  let dims = null;
  const pending = { vel: [], dye: [] };

  function size(area, aspect) {
    const w = Math.max(16, Math.round(Math.sqrt(area * aspect)));
    return [w, Math.max(16, Math.round(area / w))];
  }

  function resize(d) {
    const old = st.vel ? { vel: st.vel, dye: st.dye } : null;
    const aspect = d.cssW / d.cssH;
    const [sw, sh] = size(d.simArea, aspect);
    const [dw, dh] = size(d.dyeArea, aspect);
    const vel = pingpong(ctx, sw, sh, ctx.rg, 'linear');
    const dye = pingpong(ctx, dw, dh, ctx.half, 'linear');
    if (old) { // keep the liquid across resizes (resample)
      blitScaled(old.vel.read, vel.write); vel.swap();
      blitScaled(old.dye.read, dye.write); dye.swap();
      old.vel.dispose(); old.dye.dispose();
    }
    st.vel = vel; st.dye = dye;
    for (const k of ['curl', 'divg']) { if (st[k]) st[k].dispose(); st[k] = target(ctx, sw, sh, ctx.r, 'nearest'); }
    if (st.prs) st.prs.dispose();
    st.prs = pingpong(ctx, sw, sh, ctx.r, 'nearest');
    st.bloom.forEach((b) => b.dispose());
    st.bloom = [];
    let bw = Math.max(8, Math.round(d.pxW / 2)), bh = Math.max(8, Math.round(d.pxH / 2));
    for (let i = 0; i < 5; i++) { st.bloom.push(target(ctx, bw, bh, ctx.half, 'linear')); bw = Math.max(2, bw >> 1); bh = Math.max(2, bh >> 1); }
    if (!st.parts || st.parts.w !== d.particlesN) {
      if (st.parts) st.parts.dispose();
      st.parts = pingpong(ctx, d.particlesN, d.particlesN, ctx.f32 || ctx.half, 'nearest');
      initParticles(d.particlesN, d.rand);
    }
    dims = { ...d, sw, sh, dw, dh };
    return dims;
  }

  function blitScaled(src, dst, scale = [1, 1, 1, 1]) {
    P.copy.use().f('uTexel', dst.tx, dst.ty).t('uSrc', src).f('uScale', ...scale);
    draw(ctx, dst);
  }

  function initParticles(n, rand) {
    const data = new Float32Array(n * n * 4);
    for (let i = 0; i < n * n; i++) {
      data[i * 4] = rand(); data[i * 4 + 1] = rand() * 0.9;
      data[i * 4 + 2] = rand() * 6; data[i * 4 + 3] = i + 1 + rand();
    }
    for (const t of [st.parts.read, st.parts.write]) {
      gl.bindTexture(gl.TEXTURE_2D, t.tex);
      const f = ctx.f32 || ctx.half;
      if (f.type === gl.FLOAT) gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, n, n, gl.RGBA, gl.FLOAT, data);
      else {
        // half-float fallback: upload via a float32 → half conversion
        const h = new Uint16Array(data.length);
        for (let i = 0; i < data.length; i++) h[i] = toHalf(data[i]);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, n, n, gl.RGBA, gl.HALF_FLOAT, h);
      }
    }
  }

  function setNeon(canvas, rectUV) {
    if (st.neon) st.neon.dispose();
    st.neon = imageTexture(ctx, canvas, { mips: true });
    st.neonRect = rectUV;
    st.neonLod = Math.max(0, Math.log2((canvas.width / rectUV[2]) / dims.sw));
  }
  function setBackdrop(canvas) {
    if (st.bg) st.bg.dispose();
    st.bg = imageTexture(ctx, canvas, { mips: false });
  }
  function seed(canvas) {
    const t = imageTexture(ctx, canvas, { mips: false });
    P.seed.use().f('uTexel', st.dye.tx, st.dye.ty).t('uSeed', t).f('uK', 2);
    draw(ctx, st.dye.write); st.dye.swap();
    t.dispose();
  }

  // x, y in uv; rx, ry in uv-y units; value: [vx, vy] (texels/s) or premultiplied dye [r,g,b,a]
  function splat(kind, x, y, rx, ry, value, mode = 0) {
    const q = pending[kind];
    if (q.length < 12) q.push([x, y, rx, ry, value, mode]);
  }
  function flush(kind, pp, maxA) {
    const q = pending[kind];
    if (!q.length) return;
    const Pp = new Float32Array(48), V = new Float32Array(48), M = new Float32Array(12);
    q.forEach((s, i) => {
      Pp.set([s[0], s[1], s[2], s[3]], i * 4);
      const v = s[4];
      V.set([v[0], v[1], v[2] || 0, v[3] || 0], i * 4);
      M[i] = s[5];
    });
    P.splat.use().f('uTexel', pp.tx, pp.ty).t('uTarget', pp.read).f('uAspect', dims.cssW / dims.cssH)
      .i('uCount', q.length).v4('uP', Pp).v4('uV', V).fv('uM', M).f('uMaxA', maxA);
    draw(ctx, pp.write); pp.swap();
    q.length = 0;
  }

  const neonRect = (p) => { // neon texture lives in a sub-rect: remap via a tiny uniform trick in JS
    const r = st.neonRect || [0, 0, 1, 1];
    return p.f('uNeonRect', r[0], r[1], r[2], r[3]);
  };

  function step(dt, f) {
    const { vel, dye, curl, divg, prs } = st;
    gl.disable(gl.BLEND);
    flush('vel', vel, 0);
    flush('dye', dye, 3.2);
    for (let i = 0; i < 2 && f.visc > 0; i++) {
      P.visc.use().f('uTexel', vel.tx, vel.ty).t('uVelocity', vel.read).f('uA', f.visc);
      draw(ctx, vel.write); vel.swap();
    }
    P.curl.use().f('uTexel', vel.tx, vel.ty).t('uVelocity', vel.read);
    draw(ctx, curl);
    neonRect(P.forces.use().f('uTexel', vel.tx, vel.ty).t('uVelocity', vel.read).t('uCurl', curl).t('uDye', dye.read)
      .t('uNeon', st.neon).f('uNeonLod', st.neonLod || 0).f('uCurlK', f.curl).f('uDt', dt)
      .f('uGrav', f.grav).f('uDrain', f.drain).f('uDrag', f.drag).f('uPoolV', f.poolY || -1, f.poolDamp || 0));
    draw(ctx, vel.write); vel.swap();
    P.div.use().f('uTexel', vel.tx, vel.ty).t('uVelocity', vel.read);
    draw(ctx, divg);
    P.copy.use().f('uTexel', prs.tx, prs.ty).t('uSrc', prs.read).f('uScale', 0.8, 0.8, 0.8, 0.8);
    draw(ctx, prs.write); prs.swap();
    P.pressure.use().f('uTexel', prs.tx, prs.ty).t('uDivergence', divg);
    const loc = gl.getUniformLocation(P.pressure.p, 'uPressure');
    gl.uniform1i(loc, 1);
    for (let i = 0; i < f.iters; i++) {
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, prs.read.tex);
      draw(ctx, prs.write); prs.swap();
    }
    P.grad.use().f('uTexel', vel.tx, vel.ty).t('uPressure', prs.read).t('uVelocity', vel.read);
    draw(ctx, vel.write); vel.swap();
    P.advect.use().f('uTexel', vel.tx, vel.ty).t('uVelocity', vel.read).t('uSource', vel.read)
      .f('uVelTexel', vel.tx, vel.ty).f('uDt', dt).f('uDiss', f.velDiss).f('uTime', f.time).f('uPool', 0, 0, 0, 0).f('uPoolCol', 0, 0, 0)
      .t('uNeon', st.neon).f('uNeonDiss', 0);
    draw(ctx, vel.write); vel.swap();
    P.advect.use().f('uTexel', dye.tx, dye.ty).t('uVelocity', vel.read).t('uSource', dye.read)
      .f('uVelTexel', vel.tx, vel.ty).f('uDt', dt).f('uDiss', f.dyeDiss).f('uTime', f.time)
      .f('uPool', f.poolY, f.poolA, f.poolRate, f.poolY > 0 ? 1 : 0).f('uPoolCol', ...f.poolCol)
    neonRect(P.advect.t('uNeon', st.neon).f('uNeonDiss', f.neonDiss || 0));
    draw(ctx, dye.write); dye.swap();
  }

  function stepParticles(dt, f) {
    gl.disable(gl.BLEND);
    const pp = st.parts;
    P.pUpdate.use().f('uTexel', pp.tx, pp.ty).t('uState', pp.read).t('uVelocity', st.vel.read)
      .f('uVelTexel', st.vel.tx, st.vel.ty).f('uDt', dt).f('uSeedT', f.seedT).f('uPoolY', f.poolY + 0.03)
      .f('uSpawn', ...f.spawn);
    draw(ctx, pp.write); pp.swap();
  }

  function surfUniforms(p, f) {
    return p.f('uLevel', f.level).f('uTime', f.time).f('uRes', dims.pxW, dims.pxH).f('uPx', dims.dpr)
      .f('uStreamX', f.streamX).f('uMound', f.mound).f('uShiftBg', f.shiftBg || 0);
  }
  function neonUniforms(p, f) {
    return neonRect(p.t('uNeon', st.neon).f('uNeonI', ...f.neonI));
  }

  function render(f) {
    gl.disable(gl.BLEND);
    const B = st.bloom;
    // bloom (neon only) — skipped once the sign has drained away
    if (f.bloomK > 0.001) {
      neonUniforms(surfUniforms(P.emit.use().f('uTexel', B[0].tx, B[0].ty), f), f);
      draw(ctx, B[0]);
      for (let i = 1; i < B.length; i++) {
        P.down.use().f('uTexel', B[i].tx, B[i].ty).t('uSrc', B[i - 1]).f('uSrcTexel', B[i - 1].tx, B[i - 1].ty);
        draw(ctx, B[i]);
      }
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
      for (let i = B.length - 1; i > 1; i--) {
        P.up.use().f('uTexel', B[i - 1].tx, B[i - 1].ty).t('uSrc', B[i]).f('uSrcTexel', B[i].tx, B[i].ty).f('uK', 1);
        draw(ctx, B[i - 1]);
      }
      gl.disable(gl.BLEND);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, B[1].fb); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    }
    const c = P.comp.use().f('uTexel', 1 / dims.pxW, 1 / dims.pxH);
    surfUniforms(c, f);
    neonUniforms(c, f);
    c.t('uDye', st.dye.read).t('uBg', st.bg).t('uBloom', B[1])
      .f('uDyeTexel', st.dye.tx, st.dye.ty).f('uShift', f.shift).f('uBloomK', f.bloomK)
      .f('uCopy', ...f.copy).f('uCopyK', f.copyK)
      .fv('uDiv', f.div).f('uDivN', f.divN).f('uStream', ...f.stream).f('uDrip', f.drip).f('uDripS', f.dripS || 1);
    draw(ctx, null);
    // Tajín flecks
    if (f.flecks) {
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      const pd = surfUniforms(P.pDraw.use(), f);
      pd.t('uState', st.parts.read).t('uDye', st.dye.read).i('uN', st.parts.w).f('uShift', f.shift)
        .f('uPointPx', f.fleckPx).f('uGlint', f.glint);
      gl.bindVertexArray(ctx.emptyVao);
      gl.drawArrays(gl.POINTS, 0, st.parts.w * st.parts.w);
      gl.bindVertexArray(ctx.vao);
      gl.disable(gl.BLEND);
    }
  }

  function dispose() {
    for (const k of ['vel', 'dye', 'curl', 'divg', 'prs', 'parts', 'neon', 'bg']) if (st[k]) st[k].dispose();
    st.bloom.forEach((b) => b.dispose());
  }

  return { resize, setNeon, setBackdrop, seed, splat, step, stepParticles, render, dispose, get dims() { return dims; } };
}

function toHalf(v) {
  const f = new Float32Array([v]);
  const i = new Uint32Array(f.buffer)[0];
  const s = (i >> 16) & 0x8000;
  let e = ((i >> 23) & 0xff) - 112;
  let m = i & 0x7fffff;
  if (e <= 0) return s;
  if (e > 30) return s | 0x7c00;
  return s | (e << 10) | (m >> 13);
}

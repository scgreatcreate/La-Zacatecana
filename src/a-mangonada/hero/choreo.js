// Choreography: pure functions of hero progress p ∈ [0,1]. Time t only adds ambient motion on top.
import { Matrix4, Quaternion, Euler, Vector3 } from './three-lite.js';
import { seg, smooth, smoother, lerp, DEG, clamp01 } from './util.js';

export const PIN_P = 0.85; // p reached when the CSS pin ends; the rest is the un-pinned landing tail

// explode (ex) / reassemble (as) windows. Top comes off first; rebuild goes bottom-up, lid snaps last.
export const W = {
  lid:    { ex: [0.035, 0.205], as: [0.705, 0.80] },
  straw:  { ex: [0.03, 0.22], as: [0.70, 0.795] },
  band:   { ex: [0.058, 0.24], as: [0.675, 0.77] },
  tajin:  { ex: [0.082, 0.275], as: [0.645, 0.745] },
  cubes:  { ex: [0.106, 0.305], as: [0.62, 0.72] },
  sorbet: { ex: [0.13, 0.335], as: [0.595, 0.695] },
  chamoy: { ex: [0.155, 0.365], as: [0.57, 0.665] },
};
export const T = {
  copyOut: [0.012, 0.085], toApart: [0.03, 0.27], toWhole: [0.56, 0.80], land: [0.858, 0.974],
  fresh: [0.715, 0.875], callOut: [0.535, 0.572], photo: [0.962, 1.0],
  apartIn: [0.235, 0.29], apartOut: [0.53, 0.57], wholeIn: [0.665, 0.72], wholeOut: [0.83, 0.857],
};

/** travel out: machined, symmetric ease */
const out = (p, w) => smoother(seg(p, w[0], w[1]));
/** travel back: accelerates in, arrives with velocity → {f: remaining fraction, dip: overshoot pulse 0..1} */
function back(p, w) {
  const t = seg(p, w[0], w[1]);
  const u = clamp01(t / 0.78);
  const f = Math.cos(u * Math.PI * 0.5) ** 1.15;
  const v = clamp01((t - 0.78) / 0.22);
  const dip = t > 0.78 ? Math.sin(Math.PI * v) * (1 - v) ** 0.7 : 0;
  return { f, dip, t };
}
/** explodedness k ∈ [~0,1] plus snap pulse for a part */
export function k(p, name) {
  const w = W[name];
  const e = out(p, w.ex);
  const b = back(p, w.as);
  return { k: e * b.f, dip: b.dip, back: b.t };
}

// exploded targets (absolute root-space pivots) — tuned so the stack reads bottom→top:
// cup · chamoy liner · sorbet · mango ring · Tajín cloud · banderilla · lid + straw
export const POSE = {
  chamoy: { base: [0, 0.9, 0], ex: [0, 2.05, 0] },
  sorbet: { base: [0, 0.8, 0], ex: [0, 3.6, 0] },
  lid: { base: [0, 1.65, 0], ex: [0, 6.28, 0] },
  straw: { base: [0, 1.53, 0], ex: [0, 6.64, 0] },
  band: { base: [-0.2, 0.95, -0.15], baseRot: [-0.1, 0, 0.14], ex: [0.02, 5.78, 0.08], exRot: [0.18, 0.35, -1.32] },
};

const _m = new Matrix4(), _q = new Quaternion(), _qa = new Quaternion(), _qb = new Quaternion(), _e = new Euler(), _s = new Vector3(), _v = new Vector3();

export function applyPose(P, p, t, still) {
  const amb = still ? 0 : 1;
  const apart = smoother(seg(p, T.toApart[0], T.toApart[1])) * (1 - smoother(seg(p, T.toWhole[0], T.toWhole[1])));
  const bob = (i, kk) => amb * kk * 0.022 * Math.sin(t * 1.15 + i * 1.7);

  // chamoy liner
  {
    const s = k(p, 'chamoy');
    const g = P.chamoy;
    g.position.set(0, lerp(POSE.chamoy.base[1], POSE.chamoy.ex[1], s.k) - s.dip * 0.03 + bob(0, s.k), 0);
    g.rotation.y = s.k * -0.35;
  }
  // sorbet: unscrews out of the cup
  {
    const s = k(p, 'sorbet');
    const g = P.sorbet;
    g.position.set(0, lerp(POSE.sorbet.base[1], POSE.sorbet.ex[1], s.k) - s.dip * 0.035 + bob(1, s.k), 0);
    g.rotation.y = s.k * 1.25;
    const sq = 1 - 0.035 * s.dip;
    g.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq));
  }
  // lid + straw
  {
    const s = k(p, 'lid');
    const g = P.lid;
    g.position.set(0, lerp(POSE.lid.base[1], POSE.lid.ex[1], s.k) - s.dip * 0.05 + bob(2, s.k), 0);
    g.rotation.set(s.k * 0.2, s.k * 0.4, 0);
    const st = k(p, 'straw');
    const gs = P.straw;
    // straw stays threaded through the lid but slides up so the stack stays legible
    // …and on landing it sinks into the cup so the silhouette matches the real photo (no straw showing)
    const sink = 0.62 * smooth(seg(p, 0.87, 0.95));
    gs.position.set(0, lerp(POSE.straw.base[1], POSE.straw.ex[1], st.k) - st.dip * 0.05 + bob(2, st.k) - sink, 0);
    gs.rotation.set(st.k * 0.2, 0, st.k * -0.05);
  }
  // banderilla: lifts, then lays down across the stack
  {
    const s = k(p, 'band');
    const g = P.band;
    const B = POSE.band;
    g.position.set(lerp(B.base[0], B.ex[0], s.k), lerp(B.base[1], B.ex[1], s.k) - s.dip * 0.04 + bob(3, s.k), lerp(B.base[2], B.ex[2], s.k));
    _qa.setFromEuler(_e.set(B.baseRot[0], B.baseRot[1], B.baseRot[2]));
    _qb.setFromEuler(_e.set(B.exRot[0], B.exRot[1], B.exRot[2]));
    g.quaternion.slerpQuaternions(_qa, _qb, s.k);
  }
  // mango cubes (instanced, per-cube stagger) — skipped when at rest and unchanged
  const restC = p <= W.cubes.ex[0] - 0.03 || p >= W.cubes.as[1] + 0.03;
  if (!(restC && P._lastC === p)) {
    P._lastC = p;
    const w = W.cubes;
    const D = P.cubeData;
    for (let i = 0; i < D.length; i++) {
      const c = D[i];
      const e = smoother(seg(p, w.ex[0] + c.d, w.ex[1] + c.d));
      const b = back(p, [w.as[0] + c.d, w.as[1] + c.d]);
      const kk = e * b.f;
      const swirl = (1 - kk) * kk * 1.6; // arc outward instead of a straight line
      _v.set(lerp(c.a[0], c.e[0], kk), lerp(c.a[1], c.e[1], kk) - b.dip * 0.03 + bob(4 + i, kk) * 0.6, lerp(c.a[2], c.e[2], kk));
      const ca = Math.cos(swirl), sa = Math.sin(swirl);
      const x = _v.x * ca + _v.z * sa, z = -_v.x * sa + _v.z * ca;
      _v.x = x; _v.z = z;
      _qa.setFromEuler(_e.set(c.ra[0], c.ra[1], c.ra[2]));
      _qb.setFromEuler(_e.set(c.re[0], c.re[1] + t * 0.15 * amb * kk, c.re[2]));
      _q.slerpQuaternions(_qa, _qb, kk);
      _s.set(c.scale[0], c.scale[1], c.scale[2]);
      P.cubes.setMatrixAt(i, _m.compose(_v, _q, _s));
    }
    P.cubes.instanceMatrix.needsUpdate = true;
  }
  // Tajín: spirals up into a cloud — skipped when at rest and unchanged
  const restT = p <= W.tajin.ex[0] - 0.035 || p >= W.tajin.as[1] + 0.035;
  if (!(restT && P._lastT === p)) {
    P._lastT = p;
    const w = W.tajin;
    const D = P.tajinData;
    const spin = amb * t * 0.12;
    for (let i = 0; i < D.length; i++) {
      const c = D[i];
      const e = smoother(seg(p, w.ex[0] + c.d, w.ex[1] + c.d));
      const b = back(p, [w.as[0] + c.d, w.as[1] + c.d]);
      const kk = e * b.f;
      const ang = (1 - kk) * kk * 4 * c.swirl + kk * spin;
      const px = lerp(c.a[0], c.e[0], kk), pz = lerp(c.a[2], c.e[2], kk);
      const ca = Math.cos(ang), sa = Math.sin(ang);
      _v.set(px * ca + pz * sa, lerp(c.a[1], c.e[1], kk) + bob(5 + (i % 7), kk) * 0.5, -px * sa + pz * ca);
      _q.setFromEuler(_e.set(c.r[0] + kk * 2, c.r[1], c.r[2]));
      _s.set(c.s[0], c.s[1], c.s[2]);
      P.tajin.setMatrixAt(i, _m.compose(_v, _q, _s));
    }
    P.tajin.instanceMatrix.needsUpdate = true;
  }
  // the cup flinches when the lid snaps home
  {
    const s = k(p, 'lid');
    const sq = 1 - 0.022 * s.dip;
    P.cup.scale.set(1 + (1 - sq) * 0.5, sq, 1 + (1 - sq) * 0.5);
  }
  // chamoy: resting drips, then a fresh run as it all comes back together
  P.mats.linerMat.userData.u.uFresh.value = smooth(seg(p, T.fresh[0], T.fresh[1]));
  P.mats.linerMat.userData.u.uDrip.value = 1;

  // floor: contact shadow + mango-tinted caustic (only while the cup is full)
  const lift = smooth(seg(p, T.land[0], T.land[0] + 0.06));
  const sorbetIn = 1 - k(p, 'sorbet').k;
  P.mats.shadowMat.opacity = 0.34 * (1 - lift);
  P.mats.contactMat.opacity = 0.5 * (1 - lift);
  P.mats.causticMat.opacity = 0.3 * sorbetIn * (1 - lift);
  P.floor.visible = lift < 0.999;

  return { apart };
}

/** DOM opacities, all pure functions of p */
export function domState(p, narrow) {
  const fade = (a, b) => smooth(seg(p, a, b));
  // desktop: the chapter takes over the left column the moment the intro copy has gone (no dead frames);
  // phones: it waits until the lid + straw have flown past the title band
  const aIn = narrow ? T.apartIn : [0.085, 0.15];
  return {
    copy: 1 - fade(T.copyOut[0], T.copyOut[1]),
    cue: 1 - fade(0, 0.03),
    apart: fade(aIn[0], aIn[1]) * (1 - fade(T.apartOut[0], T.apartOut[1])),
    whole: fade(T.wholeIn[0], T.wholeIn[1]) * (1 - fade(T.wholeOut[0], T.wholeOut[1])),
    photo: fade(T.photo[0], T.photo[1]),
    callOut: 1 - fade(T.callOut[0], T.callOut[1]),
  };
}

/** camera shot weights */
export function shotWeights(p) {
  return {
    a: smoother(seg(p, T.toApart[0], T.toApart[1])),
    b: smoother(seg(p, T.toWhole[0], T.toWhole[1])),
    c: (() => { const x = seg(p, T.land[0], T.land[1]); return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2; })(),
  };
}

export { DEG };

(()=>{function br(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lo={duration:.5,overwrite:!1,delay:0},Cu,An,qe,Pi=1e8,Oe=1/Pi,xu=Math.PI*2,x1=xu/4,v1=0,_p=Math.sqrt,y1=Math.cos,M1=Math.sin,pn=function(t){return typeof t=="string"},rn=function(t){return typeof t=="function"},Tr=function(t){return typeof t=="number"},Nl=function(t){return typeof t>"u"},ar=function(t){return typeof t=="object"},ri=function(t){return t!==!1},Lu=function(){return typeof window<"u"},Tl=function(t){return rn(t)||pn(t)},xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,S1=/random\([^)]+\)/g,b1=/,\s*/g,lp=/(?:-?\.?\d|\.)+/gi,Ru=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pu=/[+-]=-?[.\d]+/,w1=/[^,'"\[\]\s]+/gi,T1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,rr,vu,Iu,ui={},Ll={},vp,yp=function(t){return(Ll=ia(t,ui))&&Nn},Ul=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},co=function(t,e){return!e&&console.warn(t)},Mp=function(t,e){return t&&(ui[t]=e)&&Ll&&(Ll[t]=e)||ui},ho=function(){return 0},A1={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},E1={suppressEvents:!0},Du={},Gr=[],yu={},Sp,ni={},fu={},cp=30,El=[],Nu="",Uu=function(t){var e=t[0],n,i;if(ar(e)||rn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(e););n=El[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ku(t[i],n)))||t.splice(i,1);return t},Hr=function(t){return t._gsap||Uu(Ii(t))[0]._gsap},Fu=function(t,e,n){return(n=t[e])&&rn(n)?t[e]():Nl(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},As=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},C1=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Rl=function(){var t=Gr.length,e=Gr.slice(0),n,i;for(yu={},Gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ou=function(t){return!!(t._initted||t._startAt||t.add)},bp=function(t,e,n,i){Gr.length&&!An&&Rl(),t.render(e,n,i||!!(An&&e<0&&Ou(t))),Gr.length&&!An&&Rl()},wp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(w1).length<2?e:pn(t)?t.trim():t},Tp=function(t){return t},fi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},L1=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ia=function(t,e){for(var n in e)t[n]=e[n];return t},hp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ar(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Pl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},so=function(t){var e=t.parent||Ke,n=t.keyframes?L1(Dn(t.keyframes)):fi;if(ri(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},R1=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ap=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Wr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},P1=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Mu=function(t,e,n,i){return t._startAt&&(An?t._startAt.revert(Al):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},I1=function r(t){return!t||t._ts&&r(t.parent)},up=function(t){return t._repeat?ra(t._tTime,t=t.duration()+t._rDelay)*t:0},ra=function(t,e){var n=Math.floor(t=Je(t/e));return t&&n===t?n-1:n},Il=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ol=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Oe)||0))},Bl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ol(t),n._dirty||Ss(n,t)),t},Ep=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Il(t.rawTime(),e),(!e._dur||po(0,e.totalDuration(),n)-e._tTime>Oe)&&e.render(n,!0)),Ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Oe}},sr=function(t,e,n,i){return e.parent&&Wr(e),e._start=Je((Tr(n)?n:n||t!==Ke?Ri(t,n,e):t._time)+e._delay),e._end=Je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ap(t,e,"_first","_last",t._sort?"_start":0),Su(e)||(t._recent=e),i||Ep(t,e),t._ts<0&&Bl(t,t._tTime),t},Cp=function(t,e){return(ui.ScrollTrigger||Ul("scrollTrigger",e))&&ui.ScrollTrigger.create(e,t)},Lp=function(t,e,n,i,s){if(Vu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!An&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Sp!==ii.frame)return Gr.push(t),t._lazy=[s,i],1},D1=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Su=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N1=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&D1(t)&&!(!t._initted&&Su(t))||(t._ts<0||t._dp._ts<0)&&!Su(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=po(0,t._tDur,e),h=ra(l,o),t._yoyo&&h&1&&(a=1-a),h!==ra(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||An||i||t._zTime===Oe||!e&&t._zTime){if(!t._initted&&Lp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Oe:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Mu(t,e,n,!0),t._onUpdate&&!n&&hi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Wr(t,1),!n&&!An&&(hi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},U1=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},sa=function(t,e,n,i){var s=t._repeat,a=Je(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Je(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Bl(t,t._tTime=t._tDur*o),t.parent&&Ol(t),n||Ss(t.parent,t),t},fp=function(t){return t instanceof In?Ss(t):sa(t,t._dur)},F1={_start:0,endTime:ho,totalDuration:ho},Ri=function r(t,e,n){var i=t.labels,s=t._recent||F1,a=t.duration()>=Pi?s.endTime(!1):t._dur,o,l,c;return pn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ao=function(t,e,n){var i=Tr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;a.immediateRender=ri(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ln(e[0],a,e[s+1])},Xr=function(t,e){return t||t===0?e(t):e},po=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!pn(t)||!(e=T1.exec(t))?"":e[1]},O1=function(t,e,n){return Xr(n,function(i){return po(t,e,i)})},bu=[].slice,Rp=function(t,e){return t&&ar(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ar(t[0]))&&!t.nodeType&&t!==rr},B1=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return pn(i)&&!e||Rp(i,1)?(s=n).push.apply(s,Ii(i)):n.push(i)})||n},Ii=function(t,e,n){return qe&&!e&&qe.selector?qe.selector(t):pn(t)&&!n&&(vu||!aa())?bu.call((e||Iu).querySelectorAll(t),0):Dn(t)?B1(t,n):Rp(t)?bu.call(t,0):t?[t]:[]},wu=function(t){return t=Ii(t)[0]||co("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ii(e,n.querySelectorAll?n:n===t?co("Invalid scope")||Iu.createElement("div"):t)}},Pp=function(t){return t.sort(function(){return .5-Math.random()})},Ip=function(t){if(rn(t))return t;var e=ar(t)?t:{each:t},n=bs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return pn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,p=a[_],m,b,E,y,M,A,w,x,T;if(!p){if(T=e.grid==="auto"?0:(e.grid||[1,Pi])[1],!T){for(w=-Pi;w<(w=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=a[_]=[],m=l?Math.min(T,_)*h-.5:i%T,b=T===Pi?0:l?_*d/T-.5:i/T|0,w=0,x=Pi,A=0;A<_;A++)E=A%T-m,y=b-(A/T|0),p[A]=M=c?Math.abs(c==="y"?y:E):_p(E*E+y*y),M>w&&(w=M),M<x&&(x=M);i==="random"&&Pp(p),p.max=w-x,p.min=x,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=En(e.amount||e.each)||0,n=n&&_<0?J1(n):n}return _=(p[u]-p.min)/p.max||0,Je(p.b+(n?n(_):_)*p.v)+p.u}},Tu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Tr(n)?0:En(n))}},Dp=function(t,e){var n=Dn(t),i,s;return!n&&ar(t)&&(i=n=t.radius||Pi,t.values?(t=Ii(t.values),(s=!Tr(t[0]))&&(i*=i)):t=Tu(t.increment)),Xr(e,n?rn(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Pi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||Tr(a)?h:h+En(a)}:Tu(t))},Np=function(t,e,n,i){return Xr(Dn(t)?!e:n===!0?!!(n=0):!i,function(){return Dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},k1=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},z1=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},Q1=function(t,e,n){return Fp(t,e,0,1,n)},Up=function(t,e,n){return Xr(n,function(i){return t[~~e(i)]})},V1=function r(t,e,n){var i=e-t;return Dn(t)?Up(t,r(0,t.length),e):Xr(n,function(s){return(i+(s-t)%i)%i+t})},G1=function r(t,e,n){var i=e-t,s=i*2;return Dn(t)?Up(t,r(0,t.length-1),e):Xr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},oa=function(t){return t.replace(S1,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(b1);return Np(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fp=function(t,e,n,i,s){var a=e-t,o=i-n;return Xr(s,function(l){return n+((l-t)/a*o||0)})},H1=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=pn(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Dn(t)&&!Dn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=ia(Dn(t)?[]:{},t));if(!h){for(l in e)zu.call(o,t,l,"get",e[l]);s=function(g){return Wu(g,o)||(a?t.p:t)}}}return Xr(n,s)},dp=function(t,e,n){var i=t.labels,s=Pi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hi=function(t,e,n){var i=t.vars,s=i[e],a=qe,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gr.length&&Rl(),o&&(qe=o),h=l?s.apply(c,l):s.call(c),qe=a,h},io=function(t){return Wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!An),t.progress()<1&&hi(t,"onInterrupt"),t},na,Op=[],Bp=function(t){if(t)if(t=!t.name&&t.default||t,Lu()||t.headless){var e=t.name,n=rn(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ho,render:Wu,add:zu,kill:o_,modifier:a_,rawVars:0},a={targetTest:0,get:0,getSetter:kl,aliases:{},register:0};if(aa(),t!==i){if(ni[e])return;fi(i,fi(Pl(t,s),a)),ia(i.prototype,ia(s,Pl(t,a))),ni[i.prop=e]=i,t.targetTest&&(El.push(i),Du[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Mp(e,i),t.register&&t.register(Nn,i,Xn)}else Op.push(t)},Fe=255,ro={aqua:[0,Fe,Fe],lime:[0,Fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Fe],navy:[0,0,128],white:[Fe,Fe,Fe],olive:[128,128,0],yellow:[Fe,Fe,0],orange:[Fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Fe,0,0],pink:[Fe,192,203],cyan:[0,Fe,Fe],transparent:[Fe,Fe,Fe,0]},du=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Fe+.5|0},kp=function(t,e,n){var i=t?Tr(t)?[t>>16,t>>8&Fe,t&Fe]:0:ro.black,s,a,o,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ro[t])i=ro[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Fe,i&Fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Fe,t&Fe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(lp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=du(l+1/3,s,a),i[1]=du(l,s,a),i[2]=du(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Ru),n&&i.length<4&&(i[3]=1),i}else i=t.match(lp)||ro.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Fe,a=i[1]/Fe,o=i[2]/Fe,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zp=function(t){var e=[],n=[],i=-1;return t.split(wr).forEach(function(s){var a=s.match(Ts)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},pp=function(t,e,n){var i="",s=(t+i).match(wr),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=kp(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=zp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(wr,"1").split(Ts),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(wr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ro)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),W1=/hsl[a]?\(/,Bu=function(t){var e=t.join(" "),n;if(wr.lastIndex=0,wr.test(e))return n=W1.test(e),t[1]=pp(t[1],n),t[0]=pp(t[0],n,zp(t[1])),!0},uo,ii=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function _(p){var m=r()-i,b=p===!0,E,y,M,A;if((m>t||m<0)&&(n+=m-e),i+=m,M=i-n,E=M-a,(E>0||b)&&(A=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,a+=E+(E>=s?4:s-E),y=1),b||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](M,u,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){vp&&(!vu&&Lu()&&(rr=vu=window,Iu=rr.document||{},ui.gsap=Nn,(rr.gsapVersions||(rr.gsapVersions=[])).push(Nn.version),yp(Ll||rr.GreenSockGlobals||!rr.gsap&&rr||{}),Op.forEach(Bp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},uo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),uo=0,c=ho},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,b){var E=m?function(y,M,A,w){p(y,M,A,w),d.remove(E)}:p;return d.remove(p),o[b?"unshift":"push"](E),aa(),E},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),aa=function(){return!uo&&ii.wake()},ge={},X1=/^[\d.\-M][\d.\-,\s]/,q1=/["']/g,Y1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(q1,"").trim():+c,i=l.substr(o+1).trim();return e},$1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Z1=function(t){var e=(t+"").split("("),n=ge[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Y1(e[1])]:$1(t).split(",").map(wp)):ge._CE&&X1.test(t)?ge._CE("",t):n},J1=function(t){return function(e){return 1-t(1-e)}},bs=function(t,e){return t&&(rn(t)?t:ge[t]||Z1(t))||e},Es=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Wn(t,function(o){ge[o]=ui[o]=s,ge[a=o.toLowerCase()]=n;for(var l in s)ge[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ge[o+"."+l]=s[l]}),s},Qp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/xu*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*M1((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Qp(o);return s=xu/s,l.config=function(c,h){return r(t,c,h)},l},mu=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Qp(n);return i.config=function(s){return r(t,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Es(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;Es("Elastic",pu("in"),pu("out"),pu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Es("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Es("Circ",function(r){return-(_p(1-r*r)-1)});Es("Sine",function(r){return r===1?1:-y1(r*x1)+1});Es("Back",mu("in"),mu("out"),mu());ge.SteppedEase=ge.steps=ui.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Oe;return function(o){return((i*po(0,a,o)|0)+s)*n}}};lo.ease=ge["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nu+=r+","+r+"Params,"});var ku=function(t,e){this.id=v1++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fu,this.set=e?e.getSetter:kl},fo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,sa(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),uo||ii.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bl(this,n),!s._dp||s.parent||Ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Oe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+up(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+up(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ra(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Oe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Oe?0:this._rts,this.totalTime(po(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ol(this),P1(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Oe&&(this._tTime-=Oe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Je(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&sr(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=E1);var i=An;return An=n,Ou(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ri(this,n),ri(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Oe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Oe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Oe)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=rn(n)?n:Tp,l=function(){var h=i.then;i.then=null,s&&s(),rn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){io(this)},r})();fi(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Oe,_prom:0,_ps:!1,_rts:1});var In=(function(r){gp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Ke&&sr(n.parent||Ke,br(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cp(br(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ao(0,arguments,this),this},e.from=function(i,s,a){return ao(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ao(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,so(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(i,s,Ri(this,a),1),this},e.call=function(i,s,a){return sr(this,ln.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ln(i,a,Ri(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,so(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,so(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Je(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,p,m,b,E,y,M,A,w;if(this!==Ke&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,E=this._ts,m=!E,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Je(h%p),h===l?(_=this._repeat,u=c):(M=Je(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=ra(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),A&&_&1&&(u=c-u,w=1),_!==M&&!this._lock){var x=A&&M&1,T=x===(A&&_&1);if(_<M&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Je(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=U1(this,Je(o),Je(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!M&&(hi(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){b=0,g&&(h+=this._zTime=-Oe);break}}f=g}else{f=this._last;for(var C=i<0?i:u;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||An&&Ou(f)),u!==this._time||!this._ts&&!m){b=0,g&&(h+=this._zTime=C?-Oe:Oe);break}}f=g}}if(b&&!s&&(this.pause(),b.render(u>=o?0:-Oe)._zTime=u>=o?1:-1,this._ts))return this._start=y,Ol(this),this.render(i,s,a);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(hi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Tr(s)||(s=Ri(this,s,i)),!(i instanceof fo)){if(Dn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(pn(i))return this.addLabel(i,s);if(rn(i))i=ln.delayedCall(0,i);else return this}return this!==i?sr(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ln?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return pn(i)?this.removeLabel(i):rn(i)?this.killTweensOf(i):(i.parent===this&&Fl(this,i),i===this._recent&&(this._recent=this._last),Ss(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ri(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ln.delayedCall(0,s||ho,a);return o.data="isPause",this._hasPause=1,sr(this,o,Ri(this,i))},e.removePause=function(i){var s=this._first;for(i=Ri(this,i);s;)s._start===i&&s.data==="isPause"&&Wr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Vr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Ii(i),l=this._first,c=Tr(s),h;l;)l instanceof ln?C1(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ri(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=ln.to(a,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Oe,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&sa(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,fi({startAt:{time:Ri(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),dp(this,Ri(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),dp(this,Ri(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Oe)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Je(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ss(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ss(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Pi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,sr(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Je(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;sa(a,a===Ke&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ke._ts&&(bp(Ke,Il(i,Ke)),Sp=ii.frame),ii.frame>=cp){cp+=si.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},t})(fo);fi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var K1=function(t,e,n,i,s,a,o){var l=new Xn(this._pt,t,e,0,1,Hu,null,s),c=0,h=0,d,u,f,g,_,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=oa(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),u=n.match(uu)||[];d=uu.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?As(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=uu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Pu.test(i)||m)&&(l.e=0),this._pt=l,l},zu=function(t,e,n,i,s,a,o,l,c,h){rn(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:rn(d)?c?t[e.indexOf("set")||!rn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=rn(d)?c?i_:Hp:Gu,g;if(pn(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(g=As(u,i)+(En(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Au)return!isNaN(u*i)&&i!==""?(g=new Xn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?s_:Wp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Ul(e,i),K1.call(this,t,e,u,i,f,l||si.stringFilter,c))},j1=function(t,e,n,i,s){if(rn(t)&&(t=oo(t,s,e,n,i)),!ar(t)||t.style&&t.nodeType||Dn(t)||xp(t))return pn(t)?oo(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=oo(t[o],s,e,n,i);return a},Qu=function(t,e,n,i,s,a){var o,l,c,h;if(ni[t]&&(o=new ni[t]).init(s,o.rawVars?e[t]:j1(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==na))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Vr,Au,Vu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,b=m&&m.data==="nested"?m.vars.targets:p,E=t._overwrite==="auto"&&!Cu,y=t.timeline,M=i.easeReverse||d,A,w,x,T,C,I,P,O,D,B,q,z,K;if(y&&(!u||!s)&&(s="none"),t._ease=bs(s,lo.ease),t._rEase=M&&(bs(M)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(O=p[0]?Hr(p[0]).harness:0,z=O&&i[O.prop],A=Pl(i,Du),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Al:A1),_._lazy=0),a){if(Wr(t._startAt=ln.set(p,fi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(An||!o&&!f)&&t._startAt.revert(Al),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),x=fi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ri(l),immediateRender:o,stagger:0,parent:m},A),z&&(x[O.prop]=z),Wr(t._startAt=ln.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(An?t._startAt.revert(Al):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Oe,Oe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ri(l)||l&&!g,w=0;w<p.length;w++){if(C=p[w],P=C._gsap||Uu(p)[w]._gsap,t._ptLookup[w]=B={},yu[P.id]&&Gr.length&&Rl(),q=b===p?w:b.indexOf(C),O&&(D=new O).init(C,z||A,t,q,b)!==!1&&(t._pt=T=new Xn(t._pt,C,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(Y){B[Y]=T}),D.priority&&(I=1)),!O||z)for(x in A)ni[x]&&(D=Qu(x,A,t,q,C,b))?D.priority&&(I=1):B[x]=T=zu.call(t,C,x,"get",A[x],q,b,0,i.stringFilter);t._op&&t._op[w]&&t.kill(C,t._op[w]),E&&t._pt&&(Vr=t,Ke.killTweensOf(C,B,t.globalTime(e)),K=!t.parent,Vr=0),t._pt&&l&&(yu[P.id]=1)}I&&Xu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&y.render(Pi,!0,!0)},t_=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Au=1,t.vars[e]="+=0",Vu(t,o),Au=0,l?co(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=sn(n)+En(d.e)),d.b&&(d.b=h.s+En(d.b))},e_=function(t,e){var n=t[0]?Hr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ia({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},n_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Dn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},oo=function(t,e,n,i,s){return rn(t)?t.call(e,n,i,s):pn(t)&&~t.indexOf("random(")?oa(t):t},Vp=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Gp={};Wn(Vp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Gp[r]=1});var ln=(function(r){gp(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:so(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Ke,b=(Dn(n)||xp(n)?Tr(n[0]):"length"in i)?[n]:Ii(n),E,y,M,A,w,x,T,C;if(o._targets=b.length?Uu(b):co("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||Tl(c)||Tl(h)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(E=o.timeline=new In({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:b}),E.kill(),E.parent=E._dp=br(o),E._start=0,u||Tl(c)||Tl(h)){if(A=b.length,T=u&&Ip(u),ar(u))for(w in u)~Vp.indexOf(w)&&(C||(C={}),C[w]=u[w]);for(y=0;y<A;y++)M=Pl(i,Gp),M.stagger=0,I&&(M.easeReverse=I),C&&ia(M,C),x=b[y],M.duration=+oo(c,br(o),y,x,b),M.delay=(+oo(h,br(o),y,x,b)||0)-o._delay,!u&&A===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),E.to(x,M,T?T(y,x,b):0),E._ease=ge.none;E.duration()?c=h=0:o.timeline=0}else if(g){so(fi(E.vars.defaults,{ease:"none"})),E._ease=bs(g.ease||i.ease||"none");var P=0,O,D,B;if(Dn(g))g.forEach(function(q){return E.to(b,q,">")}),E.duration();else{M={};for(w in g)w==="ease"||w==="easeEach"||n_(w,g[w],M,g.easeEach);for(w in M)for(O=M[w].sort(function(q,z){return q.t-z.t}),P=0,y=0;y<O.length;y++)D=O[y],B={ease:D.e,duration:(D.t-(y?O[y-1].t:0))/100*c},B[w]=D.v,E.to(b,B,P),P+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return f===!0&&!Cu&&(Vr=br(o),Ke.killTweensOf(b),Vr=0),sr(m,br(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Je(m._time)&&ri(d)&&I1(br(o))&&m.data!=="nested")&&(o._tTime=-Oe,o.render(Math.max(0,-h)||0)),p&&Cp(br(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Oe&&!h?l:i<Oe?0:i,u,f,g,_,p,m,b,E;if(!c)N1(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Je(d%_),d===l?(g=this._repeat,u=c):(p=Je(d/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=ra(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Je(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Lp(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var M=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(hi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Mu(this,i,s,a),hi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Mu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Wr(this,1),!s&&!(h&&!o)&&(d||o||m)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){uo||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vu(this,c),h=this._ease(c/this._dur),t_(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Bl(this,0),this.parent||Ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vr&&Vr.vars.overwrite!==!0)._first||io(this),this.parent&&a!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ii(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&R1(o,l))return s==="all"&&(this._pt=0),io(this);for(d=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},Wn(s,function(b){return _[b]=1}),s=_),s=e_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Fl(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&io(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ao(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ao(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ke.killTweensOf(i,s,a)},t})(fo);fi(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){ln[r]=function(){var t=new In,e=bu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Gu=function(t,e,n){return t[e]=n},Hp=function(t,e,n){return t[e](n)},i_=function(t,e,n,i){return t[e](i.fp,n)},r_=function(t,e,n){return t.setAttribute(e,n)},kl=function(t,e){return rn(t[e])?Hp:Nl(t[e])&&t.setAttribute?r_:Gu},Wp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},s_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Wu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},a_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},o_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},l_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Xu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Xn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wp,this.d=l||this,this.set=c||Gu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=l_,this.m=n,this.mt=s,this.tween=i},r})();Wn(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Du[r]=1});ui.TweenMax=ui.TweenLite=ln;ui.TimelineLite=ui.TimelineMax=In;Ke=new In({sortChildren:!1,defaults:lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Bu;var ws=[],Cl={},c_=[],mp=0,h_=0,gu=function(t){return(Cl[t]||c_).map(function(e){return e()})},Eu=function(){var t=Date.now(),e=[];t-mp>2&&(gu("matchMediaInit"),ws.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=rr.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),gu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mp=t,gu("matchMedia"))},Xp=(function(){function r(e,n){this.selector=n&&wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=h_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){rn(n)&&(s=i,i=n,n=rn);var a=this,o=function(){var c=qe,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=wu(s)),qe=a,d=i.apply(a,arguments),rn(d)&&a._r.push(d),qe=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===rn?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=qe;qe=null,n(this),qe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ws.length;a--;)ws[a].id===this.id&&ws.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),u_=(function(){function r(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ar(n)||(n={matches:n});var a=new Xp(0,s||this.scope),o=a.conditions={},l,c,h;qe&&!a.selector&&(a.selector=qe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=rr.matchMedia(n[c]),l&&(ws.indexOf(a)<0&&ws.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Eu):l.addEventListener("change",Eu)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Dl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Bp(i)})},timeline:function(t){return new In(t)},getTweensOf:function(t,e){return Ke.getTweensOf(t,e)},getProperty:function(t,e,n,i){pn(t)&&(t=Ii(t)[0]);var s=Hr(t||{}).get,a=n?Tp:wp;return n==="native"&&(n=""),t&&(e?a((ni[e]&&ni[e].get||s)(t,e,n,i)):function(o,l,c){return a((ni[o]&&ni[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ii(t),t.length>1){var i=t.map(function(h){return Nn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=ni[e],o=Hr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;na._pt=0,d.init(t,n?h+n:h,na,0,[t]),d.render(1,d),na._pt&&Wu(1,na)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Nn.to(t,fi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=bs(t.ease,lo.ease)),hp(lo,t||{})},config:function(t){return hp(si,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!ui[o]&&co(e+" effect requires "+o+" plugin.")}),fu[e]=function(o,l,c){return n(Ii(o),fi(l||{},s),c)},a&&(In.prototype[e]=function(o,l,c){return this.add(fu[e](o,ar(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ge[t]=bs(e)},parseEase:function(t,e){return arguments.length?bs(t,e):ge},getById:function(t){return Ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new In(t),i,s;for(n.smoothChildTiming=ri(t.smoothChildTiming),Ke.remove(n),n._dp=0,n._time=n._tTime=Ke._time,i=Ke._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&sr(n,i,i._start-i._delay),i=s;return sr(Ke,n,0),n},context:function(t,e){return t?new Xp(t,e):qe},matchMedia:function(t){return new u_(t)},matchMediaRefresh:function(){return ws.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Eu()},addEventListener:function(t,e){var n=Cl[t]||(Cl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Cl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:V1,wrapYoyo:G1,distribute:Ip,random:Np,snap:Dp,normalize:Q1,getUnit:En,clamp:O1,splitColor:kp,toArray:Ii,selector:wu,mapRange:Fp,pipe:k1,unitize:z1,interpolate:H1,shuffle:Pp},install:yp,effects:fu,ticker:ii,updateRoot:In.updateRoot,plugins:ni,globalTimeline:Ke,core:{PropTween:Xn,globals:Mp,Tween:ln,Timeline:In,Animation:fo,getCache:Hr,_removeLinkedListItem:Fl,reverting:function(){return An},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return Cu=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Dl[r]=ln[r]});ii.add(In.updateRoot);na=Dl.to({},{duration:0});var f_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},d_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=f_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},_u=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(pn(s)&&(l={},Wn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}d_(o,s)}}}},Nn=Dl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_u("roundProps",Tu),_u("modifiers"),_u("snap",Dp))||Dl;ln.version=In.version=Nn.version="3.15.0";vp=1;Lu()&&aa();var p_=ge.Power0,m_=ge.Power1,g_=ge.Power2,__=ge.Power3,x_=ge.Power4,v_=ge.Linear,y_=ge.Quad,M_=ge.Cubic,S_=ge.Quart,b_=ge.Quint,w_=ge.Strong,T_=ge.Elastic,A_=ge.Back,E_=ge.SteppedEase,C_=ge.Bounce,L_=ge.Sine,R_=ge.Expo,P_=ge.Circ;var qp,qr,ca,Ku,Ps,I_,Yp,ju,D_=function(){return typeof window<"u"},Er={},Rs=180/Math.PI,ha=Math.PI/180,la=Math.atan2,$p=1e8,tf=/([A-Z])/g,N_=/(left|right|width|margin|padding|x)/i,U_=/[\s,\(]\S/,or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},F_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},O_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},B_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},k_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},i0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},r0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},z_=function(t,e,n){return t.style[e]=n},Q_=function(t,e,n){return t.style.setProperty(e,n)},V_=function(t,e,n){return t._gsap[e]=n},G_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},H_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},W_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},je="transform",ai=je+"Origin",X_=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Er&&s){if(this.tfm=this.tfm||{},t!=="transform")t=or[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ar(i,o)}):this.tfm[t]=a.x?a[t]:Ar(i,t),t===ai&&(this.tfm.zOrigin=a.zOrigin);else return or.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(je)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,e,"")),t=je}(s||e)&&this.props.push(t,e,s[t])},s0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},q_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(tf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ju(),(!s||!s.isStart)&&!n[je]&&(s0(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},a0=function(t,e){var n={target:t,props:[],revert:q_,save:X_};return t._gsap||Nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},o0,$u=function(t,e){var n=qr.createElementNS?qr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qr.createElement(t);return n&&n.style?n:qr.createElement(t)},di=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(tf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ua(e)||e,1)||""},Zp="O,Moz,ms,Ms,Webkit".split(","),ua=function(t,e,n){var i=e||Ps,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zp[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Zp[a]:"")+t},Zu=function(){D_()&&window.document&&(qp=window,qr=qp.document,ca=qr.documentElement,Ps=$u("div")||{style:{}},I_=$u("div"),je=ua(je),ai=je+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",o0=!!ua("perspective"),ju=Nn.core.reverting,Ku=1)},Jp=function(t){var e=t.ownerSVGElement,n=$u("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ca.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ca.removeChild(n),s},Kp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},l0=function(t){var e,n;try{e=t.getBBox()}catch{e=Jp(t),n=1}return e&&(e.width||e.height)||n||(e=Jp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Kp(t,["x","cx","x1"])||0,y:+Kp(t,["y","cy","y1"])||0,width:0,height:0}:e},c0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&l0(t))},$r=function(t,e){if(e){var n=t.style,i;e in Er&&e!==ai&&(e=je),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(tf,"-$1").toLowerCase())):n.removeAttribute(e)}},Yr=function(t,e,n,i,s,a){var o=new Xn(t._pt,e,n,0,1,a?r0:i0);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},jp={deg:1,rad:1,turn:1},Y_={grid:1,flex:1},Zr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ps.style,l=N_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||jp[i]||jp[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&c0(t),(f||a==="%")&&(Er[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],sn(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qr||!_.appendChild)&&(_=qr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ii.time&&!p.uncache)return sn(s/p.width*d);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+i,g=t[h],b?t.style[e]=b:$r(t,e)}else(f||a==="%")&&!Y_[di(_,"display")]&&(o.position=di(t,"position")),_===t&&(o.position="static"),_.appendChild(Ps),g=Ps[h],_.removeChild(Ps),o.position="absolute";return l&&f&&(p=Hr(_),p.time=ii.time,p.width=_[h]),sn(u?g*s/d:g&&s?d/g*s:0)},Ar=function(t,e,n,i){var s;return Ku||Zu(),e in or&&e!=="transform"&&(e=or[e],~e.indexOf(",")&&(e=e.split(",")[0])),Er[e]&&e!=="transform"?(s=_o(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ql(di(t,ai))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zl[e]&&zl[e](t,e,n)||di(t,e)||Fu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zr(t,e,s,n)+n:s},$_=function(t,e,n,i){if(!n||n==="none"){var s=ua(e,t,1),a=s&&di(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=di(t,"borderTopColor"))}var o=new Xn(this._pt,t.style,e,0,1,Hu),l=0,c=0,h,d,u,f,g,_,p,m,b,E,y,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=di(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=di(t,e)||i,_?t.style[e]=_:$r(t,e)),h=[n,i],Bu(h),n=h[0],i=h[1],u=n.match(Ts)||[],M=i.match(Ts)||[],M.length){for(;d=Ts.exec(i);)p=d[0],b=i.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=As(f,p)+y),m=parseFloat(p),E=p.substr((m+"").length),l=Ts.lastIndex-E.length,E||(E=E||si.units[e]||y,l===i.length&&(i+=E,o.e+=E)),y!==E&&(f=Zr(t,e,_,E)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?r0:i0;return Pu.test(i)&&(o.e=0),this._pt=o,o},t0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Z_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=t0[n]||n,e[1]=t0[i]||i,e.join(" ")},J_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Er[o]&&(l=1,o=o==="transformOrigin"?ai:je),$r(n,o);l&&($r(n,je),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_o(n,1),a.uncache=1,s0(i)))}},zl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Xn(t._pt,e,n,0,0,J_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},go=[1,0,0,1,0,0],h0={},u0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},e0=function(t){var e=di(t,je);return u0(e)?go:e.substr(7).match(Ru).map(sn)},ef=function(t,e){var n=t._gsap||Hr(t),i=t.style,s=e0(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?go:s):(s===go&&!t.offsetParent&&t!==ca&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ca.appendChild(t)),s=e0(t),l?i.display=l:$r(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ca.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ju=function(t,e,n,i,s,a){var o=t._gsap,l=s||ef(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],b=l[5],E=e.split(" "),y=parseFloat(E[0])||0,M=parseFloat(E[1])||0,A,w,x,T;n?l!==go&&(w=f*p-g*_)&&(x=y*(p/w)+M*(-_/w)+(_*b-p*m)/w,T=y*(-g/w)+M*(f/w)-(f*b-g*m)/w,y=x,M=T):(A=l0(t),y=A.x+(~E[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(E[1]||E[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&o.smooth?(m=y-c,b=M-h,o.xOffset=d+(m*f+b*_)-m,o.yOffset=u+(m*g+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ai]="0px 0px",a&&(Yr(a,o,"xOrigin",c,y),Yr(a,o,"yOrigin",h,M),Yr(a,o,"xOffset",d,o.xOffset),Yr(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},_o=function(t,e){var n=t._gsap||new ku(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=di(t,ai)||"0",h,d,u,f,g,_,p,m,b,E,y,M,A,w,x,T,C,I,P,O,D,B,q,z,K,Y,L,tt,Tt,At,Rt,Qt;return h=d=u=_=p=m=b=E=y=0,f=g=1,n.svg=!!(t.getCTM&&c0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),i.scale=i.rotate=i.translate="none"),w=ef(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Ju(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,A=n.yOrigin||0,w!==go&&(I=w[0],P=w[1],O=w[2],D=w[3],h=B=w[4],d=q=w[5],w.length===6?(f=Math.sqrt(I*I+P*P),g=Math.sqrt(D*D+O*O),_=I||P?la(P,I)*Rs:0,b=O||D?la(O,D)*Rs+_:0,b&&(g*=Math.abs(Math.cos(b*ha))),n.svg&&(h-=M-(M*I+A*O),d-=A-(M*P+A*D))):(Qt=w[6],At=w[7],L=w[8],tt=w[9],Tt=w[10],Rt=w[11],h=w[12],d=w[13],u=w[14],x=la(Qt,Tt),p=x*Rs,x&&(T=Math.cos(-x),C=Math.sin(-x),z=B*T+L*C,K=q*T+tt*C,Y=Qt*T+Tt*C,L=B*-C+L*T,tt=q*-C+tt*T,Tt=Qt*-C+Tt*T,Rt=At*-C+Rt*T,B=z,q=K,Qt=Y),x=la(-O,Tt),m=x*Rs,x&&(T=Math.cos(-x),C=Math.sin(-x),z=I*T-L*C,K=P*T-tt*C,Y=O*T-Tt*C,Rt=D*C+Rt*T,I=z,P=K,O=Y),x=la(P,I),_=x*Rs,x&&(T=Math.cos(x),C=Math.sin(x),z=I*T+P*C,K=B*T+q*C,P=P*T-I*C,q=q*T-B*C,I=z,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=sn(Math.sqrt(I*I+P*P+O*O)),g=sn(Math.sqrt(q*q+Qt*Qt)),x=la(B,q),b=Math.abs(x)>2e-4?x*Rs:0,y=Rt?1/(Rt<0?-Rt:Rt):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!u0(di(t,je)),z&&t.setAttribute("transform",z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=sn(f),n.scaleY=sn(g),n.rotation=sn(_)+o,n.rotationX=sn(p)+o,n.rotationY=sn(m)+o,n.skewX=b+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ai]=Ql(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?j_:o0?f0:K_,n.uncache=0,n},Ql=function(t){return(t=t.split(" "))[0]+" "+t[1]},qu=function(t,e,n){var i=En(e);return sn(parseFloat(e)+parseFloat(Zr(t,"x",n+"px",i)))+i},K_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,f0(t,e)},Cs="0deg",mo="0px",Ls=") ",f0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,E=n.zOrigin,y="",M=m==="auto"&&t&&t!==1||m===!0;if(E&&(d!==Cs||h!==Cs)){var A=parseFloat(h)*ha,w=Math.sin(A),x=Math.cos(A),T;A=parseFloat(d)*ha,T=Math.cos(A),a=qu(b,a,w*T*-E),o=qu(b,o,-Math.sin(A)*-E),l=qu(b,l,x*T*-E+E)}p!==mo&&(y+="perspective("+p+Ls),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||a!==mo||o!==mo||l!==mo)&&(y+=l!==mo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ls),c!==Cs&&(y+="rotate("+c+Ls),h!==Cs&&(y+="rotateY("+h+Ls),d!==Cs&&(y+="rotateX("+d+Ls),(u!==Cs||f!==Cs)&&(y+="skew("+u+", "+f+Ls),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ls),b.style[je]=y||"translate(0, 0)"},j_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,E=parseFloat(a),y=parseFloat(o),M,A,w,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ha,c*=ha,M=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=ha,T=Math.tan(c-h),T=Math.sqrt(1+T*T),w*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),M*=T,A*=T)),M=sn(M),A=sn(A),w=sn(w),x=sn(x)):(M=d,x=u,A=w=0),(E&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(E=Zr(f,"x",a,"px"),y=Zr(f,"y",o,"px")),(g||_||p||m)&&(E=sn(E+g-(g*M+_*w)+p),y=sn(y+_-(g*A+_*x)+m)),(i||s)&&(T=f.getBBox(),E=sn(E+i/100*T.width),y=sn(y+s/100*T.height)),T="matrix("+M+","+A+","+w+","+x+","+E+","+y+")",f.setAttribute("transform",T),b&&(f.style[je]=T)},tx=function(t,e,n,i,s){var a=360,o=pn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Rs:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*$p)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*$p)%a-~~(c/a)*a)),t._pt=u=new Xn(t._pt,e,n,i,c,F_),u.e=h,u.u="deg",t._props.push(n),u},n0=function(t,e){for(var n in e)t[n]=e[n];return t},ex=function(t,e,n){var i=n0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[je]=e,o=_o(n,1),$r(n,je),n.setAttribute("transform",c)):(c=getComputedStyle(n)[je],a[je]=e,o=_o(n,1),a[je]=c);for(l in Er)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=En(c),g=En(h),d=f!==g?Zr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new Xn(t._pt,o,l,d,u-d,Yu),t._pt.u=g||0,t._props.push(l));n0(o,i)};Wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});zl[t>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return Ar(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var nf={name:"css",register:Zu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,p,m,b,E,y,M,A,w,x,T;Ku||Zu(),this.styles=this.styles||a0(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ni[_]&&Qu(_,e,n,i,t,s)))){if(f=typeof h,g=zl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=oa(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",wr.lastIndex=0,wr.test(c)||(p=En(c),m=En(h),m?p!==m&&(c=Zr(t,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],pn(c)&&~c.indexOf("random(")&&(c=oa(c)),En(c+"")||c==="auto"||(c+=si.units[_]||En(Ar(t,_))||""),(c+"").charAt(1)==="="&&(c=Ar(t,_))):c=Ar(t,_),u=parseFloat(c),b=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),_ in or&&(_==="autoAlpha"&&(u===1&&Ar(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,o.visibility),Yr(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=or[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Er,E){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=di(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=di(t,"perspective"),C?t.style.perspective=C:$r(t,"perspective")}d=parseFloat(h)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||_o(t,e.parseTransform),A=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new Xn(this._pt,o,je,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new Xn(this._pt,M,"scaleY",M.scaleY,(b?As(M.scaleY,b+d):d)-M.scaleY||0,Yu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(ai,0,o[ai]),h=Z_(h),M.svg?Ju(t,h,0,A,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Yr(this,M,"zOrigin",M.zOrigin,m),Yr(this,o,_,Ql(c),Ql(h)));continue}else if(_==="svgOrigin"){Ju(t,h,1,A,0,this);continue}else if(_ in h0){tx(this,M,_,u,b?As(u,b+h):h);continue}else if(_==="smoothOrigin"){Yr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){ex(this,h,t);continue}}else _ in o||(_=ua(_)||_);if(E||(d||d===0)&&(u||u===0)&&!U_.test(h)&&_ in o)p=(c+"").substr((u+"").length),d||(d=0),m=En(h)||(_ in si.units?si.units[_]:p),p!==m&&(u=Zr(t,_,c,m)),this._pt=new Xn(this._pt,E?M:o,_,u,(b?As(u,b+d):d)-u,!E&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?k_:Yu),this._pt.u=m||0,E&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=B_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=O_);else if(_ in o)$_.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,i,s);else if(_!=="parseTransform"){Ul(_,h);continue}E||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),a.push(_)}}w&&Xu(this)},render:function(t,e){if(e.tween._time||!ju())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ar,aliases:or,getSetter:function(t,e,n){var i=or[e];return i&&i.indexOf(",")<0&&(e=i),e in Er&&e!==ai&&(t._gsap.x||Ar(t,"x"))?n&&Yp===n?e==="scale"?G_:V_:(Yp=n||{})&&(e==="scale"?H_:W_):t.style&&!Nl(t.style[e])?z_:~e.indexOf("-")?Q_:kl(t,e)},core:{_removeProperty:$r,_getMatrix:ef}};Nn.utils.checkPrefix=ua;Nn.core.getStyleSaver=a0;(function(r,t,e,n){var i=Wn(r+","+t+","+e,function(s){Er[s]=1});Wn(t,function(s){si.units[s]="deg",h0[s]=1}),or[i[13]]=r+","+t,Wn(n,function(s){var a=s.split(":");or[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Nn.registerPlugin(nf);var rf=Nn.registerPlugin(nf)||Nn,vS=rf.core.Tween;function d0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function nx(r,t,e){return t&&d0(r.prototype,t),e&&d0(r,e),r}var Cn,Hl,ix,pi,Jr,Kr,da,m0,Is,pa,g0,Cr,Qi,_0,x0=function(){return Cn||typeof window<"u"&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},v0=1,fa=[],he=[],Vi=[],vo=Date.now,sf=function(t,e){return e},rx=function(){var t=pa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,he),i.push.apply(i,Vi),he=n,Vi=i,sf=function(a,o){return e[a](o)}},Rr=function(t,e){return~Vi.indexOf(t)&&Vi[Vi.indexOf(t)+1][e]},yo=function(t){return!!~g0.indexOf(t)},Yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},qn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Vl="scrollLeft",Gl="scrollTop",af=function(){return Cr&&Cr.isPressed||he.cache++},Wl=function(t,e){var n=function i(s){if(s||s===0){v0&&(pi.history.scrollRestoration="manual");var a=Cr&&Cr.isPressed;s=i.v=Math.round(s)||(Cr&&Cr.iOS?1:0),t(s),i.cacheID=he.cache,a&&sf("ss",s)}else(e||he.cache!==i.cacheID||sf("ref"))&&(i.cacheID=he.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Un={s:Vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wl(function(r){return arguments.length?pi.scrollTo(r,hn.sc()):pi.pageXOffset||Jr[Vl]||Kr[Vl]||da[Vl]||0})},hn={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Wl(function(r){return arguments.length?pi.scrollTo(Un.sc(),r):pi.pageYOffset||Jr[Gl]||Kr[Gl]||da[Gl]||0})},$n=function(t,e){return(e&&e._ctx&&e._ctx.selector||Cn.utils.toArray)(t)[0]||(typeof t=="string"&&Cn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},sx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Lr=function(t,e){var n=e.s,i=e.sc;yo(t)&&(t=Jr.scrollingElement||Kr);var s=he.indexOf(t),a=i===hn.sc?1:2;!~s&&(s=he.push(t)-1),he[s+a]||Yn(t,"scroll",af);var o=he[s+a],l=o||(he[s+a]=Wl(Rr(t,n),!0)||(yo(t)?i:Wl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Cn.getProperty(t,"scrollBehavior")==="smooth"),l},Xl=function(t,e,n){var i=t,s=t,a=vo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=vo();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,p=s,m=vo();return(g||g===0)&&g!==i&&h(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},xo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},p0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},y0=function(){pa=Cn.core.globals().ScrollTrigger,pa&&pa.core&&rx()},M0=function(t){return Cn=t||x0(),!Hl&&Cn&&typeof document<"u"&&document.body&&(pi=window,Jr=document,Kr=Jr.documentElement,da=Jr.body,g0=[pi,Jr,Kr,da],ix=Cn.utils.clamp,_0=Cn.core.context||function(){},Is="onpointerenter"in da?"pointer":"mouse",m0=an.isTouch=pi.matchMedia&&pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qi=an.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v0=0},500),Hl=1),pa||y0(),Hl};Un.op=hn;he.cache=0;var an=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Hl||M0(Cn)||console.warn("Please gsap.registerPlugin(Observer)"),pa||y0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,b=n.onDrag,E=n.onPress,y=n.onRelease,M=n.onRight,A=n.onLeft,w=n.onUp,x=n.onDown,T=n.onChangeX,C=n.onChangeY,I=n.onChange,P=n.onToggleX,O=n.onToggleY,D=n.onHover,B=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,L=n.onGestureEnd,tt=n.onWheel,Tt=n.onEnable,At=n.onDisable,Rt=n.onClick,Qt=n.scrollSpeed,$t=n.capture,Z=n.allowClicks,nt=n.lockAxis,dt=n.onLockAxis;this.target=o=$n(o)||Kr,this.vars=n,f&&(f=Cn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Qt=Qt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pi.getComputedStyle(da).lineHeight)||22);var Gt,_t,Ht,yt,wt,qt,re,V=this,ee=0,Te=0,ze=n.passive||!h&&n.passive!==!1,Xt=Lr(o,Un),xe=Lr(o,hn),F=Xt(),Ie=xe(),Yt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Qi[0]==="pointerdown",R=yo(o),v=o.ownerDocument||Jr,k=[0,0,0],G=[0,0,0],J=0,ct=function(){return J=vo()},at=function(rt,Pt){return(V.event=rt)&&f&&sx(rt.target,f)||Pt&&Yt&&rt.pointerType!=="touch"||z&&z(rt,Pt)},$=function(){V._vx.reset(),V._vy.reset(),_t.pause(),d&&d(V)},j=function(){var rt=V.deltaX=p0(k),Pt=V.deltaY=p0(G),st=Math.abs(rt)>=i,Ot=Math.abs(Pt)>=i;I&&(st||Ot)&&I(V,rt,Pt,k,G),st&&(M&&V.deltaX>0&&M(V),A&&V.deltaX<0&&A(V),T&&T(V),P&&V.deltaX<0!=ee<0&&P(V),ee=V.deltaX,k[0]=k[1]=k[2]=0),Ot&&(x&&V.deltaY>0&&x(V),w&&V.deltaY<0&&w(V),C&&C(V),O&&V.deltaY<0!=Te<0&&O(V),Te=V.deltaY,G[0]=G[1]=G[2]=0),(yt||Ht)&&(q&&q(V),Ht&&(p&&Ht===1&&p(V),b&&b(V),Ht=0),yt=!1),qt&&!(qt=!1)&&dt&&dt(V),wt&&(tt(V),wt=!1),Gt=0},pt=function(rt,Pt,st){k[st]+=rt,G[st]+=Pt,V._vx.update(rt),V._vy.update(Pt),c?Gt||(Gt=requestAnimationFrame(j)):j()},Lt=function(rt,Pt){nt&&!re&&(V.axis=re=Math.abs(rt)>Math.abs(Pt)?"x":"y",qt=!0),re!=="y"&&(k[2]+=rt,V._vx.update(rt,!0)),re!=="x"&&(G[2]+=Pt,V._vy.update(Pt,!0)),c?Gt||(Gt=requestAnimationFrame(j)):j()},mt=function(rt){if(!at(rt,1)){rt=xo(rt,h);var Pt=rt.clientX,st=rt.clientY,Ot=Pt-V.x,It=st-V.y,Kt=V.isDragging;V.x=Pt,V.y=st,(Kt||(Ot||It)&&(Math.abs(V.startX-Pt)>=s||Math.abs(V.startY-st)>=s))&&(Ht||(Ht=Kt?2:1),Kt||(V.isDragging=!0),Lt(Ot,It))}},ut=V.onPress=function(ot){at(ot,1)||ot&&ot.button||(V.axis=re=null,_t.pause(),V.isPressed=!0,ot=xo(ot),ee=Te=0,V.startX=V.x=ot.clientX,V.startY=V.y=ot.clientY,V._vx.reset(),V._vy.reset(),Yn(K?o:v,Qi[1],mt,ze,!0),V.deltaX=V.deltaY=0,E&&E(V))},lt=V.onRelease=function(ot){if(!at(ot,1)){qn(K?o:v,Qi[1],mt,!0);var rt=!isNaN(V.y-V.startY),Pt=V.isDragging,st=Pt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ot=xo(ot);!st&&rt&&(V._vx.reset(),V._vy.reset(),h&&Z&&Cn.delayedCall(.08,function(){if(vo()-J>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(v.createEvent){var It=v.createEvent("MouseEvents");It.initMouseEvent("click",!0,!0,pi,1,Ot.screenX,Ot.screenY,Ot.clientX,Ot.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(It)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Pt&&!K&&_t.restart(!0),Ht&&j(),m&&Pt&&m(V),y&&y(V,st)}},Ft=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&Y(rt,V.isDragging)},Vt=function(){return(V.isGesturing=!1)||L(V)},U=function(rt){if(!at(rt)){var Pt=Xt(),st=xe();pt((Pt-F)*Qt,(st-Ie)*Qt,1),F=Pt,Ie=st,d&&_t.restart(!0)}},ht=function(rt){if(!at(rt)){rt=xo(rt,h),tt&&(wt=!0);var Pt=(rt.deltaMode===1?l:rt.deltaMode===2?pi.innerHeight:1)*g;pt(rt.deltaX*Pt,rt.deltaY*Pt,0),d&&!K&&_t.restart(!0)}},et=function(rt){if(!at(rt)){var Pt=rt.clientX,st=rt.clientY,Ot=Pt-V.x,It=st-V.y;V.x=Pt,V.y=st,yt=!0,d&&_t.restart(!0),(Ot||It)&&Lt(Ot,It)}},ft=function(rt){V.event=rt,D(V)},xt=function(rt){V.event=rt,B(V)},it=function(rt){return at(rt)||xo(rt,h)&&Rt(V)};_t=V._dc=Cn.delayedCall(u||.25,$).pause(),V.deltaX=V.deltaY=0,V._vx=Xl(0,50,!0),V._vy=Xl(0,50,!0),V.scrollX=Xt,V.scrollY=xe,V.isDragging=V.isGesturing=V.isPressed=!1,_0(this),V.enable=function(ot){return V.isEnabled||(Yn(R?v:o,"scroll",af),a.indexOf("scroll")>=0&&Yn(R?v:o,"scroll",U,ze,$t),a.indexOf("wheel")>=0&&Yn(o,"wheel",ht,ze,$t),(a.indexOf("touch")>=0&&m0||a.indexOf("pointer")>=0)&&(Yn(o,Qi[0],ut,ze,$t),Yn(v,Qi[2],lt),Yn(v,Qi[3],lt),Z&&Yn(o,"click",ct,!0,!0),Rt&&Yn(o,"click",it),Y&&Yn(v,"gesturestart",Ft),L&&Yn(v,"gestureend",Vt),D&&Yn(o,Is+"enter",ft),B&&Yn(o,Is+"leave",xt),q&&Yn(o,Is+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=yt=Ht=!1,V._vx.reset(),V._vy.reset(),F=Xt(),Ie=xe(),ot&&ot.type&&ut(ot),Tt&&Tt(V)),V},V.disable=function(){V.isEnabled&&(fa.filter(function(ot){return ot!==V&&yo(ot.target)}).length||qn(R?v:o,"scroll",af),V.isPressed&&(V._vx.reset(),V._vy.reset(),qn(K?o:v,Qi[1],mt,!0)),qn(R?v:o,"scroll",U,$t),qn(o,"wheel",ht,$t),qn(o,Qi[0],ut,$t),qn(v,Qi[2],lt),qn(v,Qi[3],lt),qn(o,"click",ct,!0),qn(o,"click",it),qn(v,"gesturestart",Ft),qn(v,"gestureend",Vt),qn(o,Is+"enter",ft),qn(o,Is+"leave",xt),qn(o,Is+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,At&&At(V))},V.kill=V.revert=function(){V.disable();var ot=fa.indexOf(V);ot>=0&&fa.splice(ot,1),Cr===V&&(Cr=0)},fa.push(V),K&&yo(o)&&(Cr=V),V.enable(_)},nx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();an.version="3.15.0";an.create=function(r){return new an(r)};an.register=M0;an.getAll=function(){return fa.slice()};an.getById=function(r){return fa.filter(function(t){return t.vars.id===r})[0]};x0()&&Cn.registerPlugin(an);var Nt,xa,de,Pe,_i,Ae,yf,lc,No,Eo,So,ql,Fn,uc,df,Jn,S0,b0,va,k0,of,z0,Zn,pf,Q0,V0,jr,mf,Mf,ya,Sf,Co,gf,lf,Yl=1,On=Date.now,cf=On(),Ui=0,bo=0,w0=function(t,e,n){var i=gi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},T0=function(t,e){return e&&(!gi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ax=function r(){return bo&&requestAnimationFrame(r)},A0=function(){return uc=1},E0=function(){return uc=0},lr=function(t){return t},wo=function(t){return Math.round(t*1e5)/1e5||0},G0=function(){return typeof window<"u"},H0=function(){return Nt||G0()&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},Bs=function(t){return!!~yf.indexOf(t)},W0=function(t){return(t==="Height"?Sf:de["inner"+t])||_i["client"+t]||Ae["client"+t]},X0=function(t){return Rr(t,"getBoundingClientRect")||(Bs(t)?function(){return oc.width=de.innerWidth,oc.height=Sf,oc}:function(){return Pr(t)})},ox=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Rr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?W0(s):t["client"+s])||0}},lx=function(t,e){return!e||~Vi.indexOf(t)?X0(t):function(){return oc}},cr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Rr(t,n))?a()-X0(t)()[s]:Bs(t)?(_i[n]||Ae[n])-W0(i):t[n]-t["offset"+i])},$l=function(t,e){for(var n=0;n<va.length;n+=3)(!e||~e.indexOf(va[n+1]))&&t(va[n],va[n+1],va[n+2])},gi=function(t){return typeof t=="string"},Bn=function(t){return typeof t=="function"},To=function(t){return typeof t=="number"},Ds=function(t){return typeof t=="object"},Mo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ma=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ga=Math.abs,q0="left",Y0="top",bf="right",wf="bottom",Us="width",Fs="height",Lo="Right",Ro="Left",Po="Top",Io="Bottom",un="padding",Di="margin",Sa="Width",Tf="Height",mn="px",Ni=function(t){return de.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},cx=function(t){var e=Ni(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},C0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Pr=function(t,e){var n=e&&Ni(t)[df]!=="matrix(1, 0, 0, 1, 0, 0)"&&Nt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},cc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},$0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},hx=function(t){return function(e){return Nt.utils.snap($0(t),e)}},Af=function(t){var e=Nt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},ux=function(t){return function(e,n){return Af($0(t))(e,n.direction)}},Zl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Jl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},L0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kl={toggleActions:"play",anticipatePin:0},hc={top:0,left:0,center:.5,bottom:1,right:1},ic=function(t,e){if(gi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in hc?hc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},jl=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=Pe.createElement("div"),_=Bs(n)||Rr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?Ae:n.tagName==="IFRAME"?n.contentDocument.body:n,b=t.indexOf("start")!==-1,E=b?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===hn?bf:wf)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],rc(g,0,i,b),g},rc=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Sa]=1,s["border"+o+Sa]=0,s[n.p]=e+"px",Nt.set(t,s)},ue=[],_f={},Uo,R0=function(){return On()-Ui>34&&(Uo||(Uo=requestAnimationFrame(Ir)))},_a=function(){(!Zn||!Zn.isPressed||Zn.startX>Ae.clientWidth)&&(he.cache++,Zn?Uo||(Uo=requestAnimationFrame(Ir)):Ir(),Ui||zs("scrollStart"),Ui=On())},hf=function(){V0=de.innerWidth,Q0=de.innerHeight},Ao=function(t){he.cache++,(t===!0||!Fn&&!z0&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!pf||V0!==de.innerWidth||Math.abs(de.innerHeight-Q0)>de.innerHeight*.25))&&lc.restart(!0)},ks={},fx=[],Z0=function r(){return Mn(ae,"scrollEnd",r)||Ns(!0)},zs=function(t){return ks[t]&&ks[t].map(function(e){return e()})||fx},mi=[],J0=function(t){for(var e=0;e<mi.length;e+=5)(!t||mi[e+4]&&mi[e+4].query===t)&&(mi[e].style.cssText=mi[e+1],mi[e].getBBox&&mi[e].setAttribute("transform",mi[e+2]||""),mi[e+3].uncache=1)},K0=function(){return he.forEach(function(t){return Bn(t)&&++t.cacheID&&(t.rec=t())})},Ef=function(t,e){var n;for(Jn=0;Jn<ue.length;Jn++)n=ue[Jn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Co=!0,e&&J0(e),e||zs("revert")},j0=function(t,e){he.cache++,(e||!Kn)&&he.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),gi(t)&&(de.history.scrollRestoration=Mf=t)},Kn,Os=0,P0,dx=function(){if(P0!==Os){var t=P0=Os;requestAnimationFrame(function(){return t===Os&&Ns(!0)})}},tm=function(){Ae.appendChild(ya),Sf=!Zn&&ya.offsetHeight||de.innerHeight,Ae.removeChild(ya)},I0=function(t){return No(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ns=function(t,e){if(_i=Pe.documentElement,Ae=Pe.body,yf=[de,Pe,_i,Ae],Ui&&!t&&!Co){Sn(ae,"scrollEnd",Z0);return}tm(),Kn=ae.isRefreshing=!0,Co||K0();var n=zs("refreshInit");k0&&ae.sort(),e||Ef(),he.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ue.slice(0).forEach(function(i){return i.refresh()}),Co=!1,ue.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),gf=1,I0(!0),ue.forEach(function(i){var s=cr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),I0(!1),gf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),he.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),j0(Mf,1),lc.pause(),Os++,Kn=2,Ir(2),ue.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=ae.isRefreshing=!1,zs("refresh")},xf=0,sc=1,Do,Ir=function(t){if(t===2||!Kn&&!Co){ae.isUpdating=!0,Do&&Do.update(0);var e=ue.length,n=On(),i=n-cf>=50,s=e&&ue[0].scroll();if(sc=xf>s?-1:1,Kn||(xf=s),i&&(Ui&&!uc&&n-Ui>200&&(Ui=0,zs("scrollEnd")),So=cf,cf=n),sc<0){for(Jn=e;Jn-- >0;)ue[Jn]&&ue[Jn].update(0,i);sc=1}else for(Jn=0;Jn<e;Jn++)ue[Jn]&&ue[Jn].update(0,i);ae.isUpdating=!1}Uo=0},vf=[q0,Y0,wf,bf,Di+Io,Di+Lo,Di+Po,Di+Ro,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ac=vf.concat([Us,Fs,"boxSizing","max"+Sa,"max"+Tf,"position",Di,un,un+Po,un+Lo,un+Io,un+Ro]),px=function(t,e,n){Ma(n);var i=t._gsap;if(i.spacerIsNative)Ma(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},uf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=vf.length,a=e.style,o=t.style,l;s--;)l=vf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[wf]=o[bf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Us]=cc(t,Un)+mn,a[Fs]=cc(t,hn)+mn,a[un]=o[Di]=o[Y0]=o[q0]="0",Ma(i),o[Us]=o["max"+Sa]=n[Us],o[Fs]=o["max"+Tf]=n[Fs],o[un]=n[un],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},mx=/([A-Z])/g,Ma=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Nt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(mx,"-$1").toLowerCase())}},tc=function(t){for(var e=ac.length,n=t.style,i=[],s=0;s<e;s++)i.push(ac[s],n[ac[s]]);return i.t=t,i},gx=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},oc={left:0,top:0},D0=function(t,e,n,i,s,a,o,l,c,h,d,u,f,g){Bn(t)&&(t=t(l)),gi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?ic("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,b;if(f&&f.seek(0),isNaN(t)||(t=+t),To(t))f&&(t=Nt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&rc(o,n,i,!0);else{Bn(e)&&(e=e(l));var E=(t||"0").split(" "),y,M,A,w;b=$n(e,l)||Ae,y=Pr(b)||{},(!y||!y.left&&!y.top)&&Ni(b).display==="none"&&(w=b.style.display,b.style.display="block",y=Pr(b),w?b.style.display=w:b.style.removeProperty("display")),M=ic(E[0],y[i.d]),A=ic(E[1]||"0",n),t=y[i.p]-c[i.p]-h+M+s-A,o&&rc(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var x=t+n,T=a._isStart;p="scroll"+i.d2,rc(a,x,i,T&&x>20||!T&&(d?Math.max(Ae[p],_i[p]):a.parentNode[p])<=x+1),d&&(c=Pr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+mn))}return f&&b&&(p=Pr(b),f.seek(u),m=Pr(b),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},_x=/(webkit|moz|length|cssText|inset)/i,N0=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===Ae){t._stOrig=s.cssText,o=Ni(t);for(a in o)!+a&&!_x.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Nt.core.getCache(t).uncache=1,e.appendChild(t)}},em=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ec=function(t,e,n){var i={};i[e.p]="+="+n,Nt.set(t,i)},U0=function(t,e){var n=Lr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||n();var _=em(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){he.cache++,a.tween&&Ir()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Nt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Sn(t,"wheel",n.wheelHandler),ae.isTouch&&Sn(t,"touchmove",n.wheelHandler),s},ae=(function(){function r(e,n){xa||r.register(Nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bo){this.update=this.refresh=this.kill=lr;return}n=C0(gi(n)||To(n)||n.nodeType?{trigger:n}:n,Kl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,b=s.onSnapComplete,E=s.once,y=s.snap,M=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:hn,I=!d&&d!==0,P=$n(n.scroller||de),O=Nt.core.getCache(P),D=Bs(P),B=("pinType"in n?n.pinType:Rr(P,"pinType")||D&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=I&&n.toggleActions.split(" "),K="markers"in n?n.markers:Kl.markers,Y=D?0:parseFloat(Ni(P)["border"+C.p2+Sa])||0,L=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Tt=ox(P,D,C),At=lx(P,D),Rt=0,Qt=0,$t=0,Z=Lr(P,C),nt,dt,Gt,_t,Ht,yt,wt,qt,re,V,ee,Te,ze,Xt,xe,F,Ie,Yt,R,v,k,G,J,ct,at,$,j,pt,Lt,mt,ut,lt,Ft,Vt,U,ht,et,ft,xt;if(L._startClamp=L._endClamp=!1,L._dir=C,p*=45,L.scroller=P,L.scroll=w?w.time.bind(w):Z,_t=Z(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(k0=1,n.refreshPriority===-9999&&(Do=L)),O.tweenScroll=O.tweenScroll||{top:U0(P,hn),left:U0(P,Un)},L.tweenTo=nt=O.tweenScroll[C.p],L.scrubDuration=function(st){Ft=To(st)&&st,Ft?lt?lt.duration(st):lt=Nt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ft,paused:!0,onComplete:function(){return m&&m(L)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),mt=0,l||(l=i.vars.id)),y&&((!Ds(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ae.style&&Nt.set(D?[Ae,_i]:P,{scrollBehavior:"auto"}),he.forEach(function(st){return Bn(st)&&st.target===(D?Pe.scrollingElement||_i:P)&&(st.smooth=!1)}),Gt=Bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?hx(i):y.snapTo==="labelsDirectional"?ux(i):y.directional!==!1?function(st,Ot){return Af(y.snapTo)(st,On()-Qt<500?0:Ot.direction)}:Nt.utils.snap(y.snapTo),Vt=y.duration||{min:.1,max:2},Vt=Ds(Vt)?Eo(Vt.min,Vt.max):Eo(Vt,Vt),U=Nt.delayedCall(y.delay||Ft/2||.1,function(){var st=Z(),Ot=On()-Qt<500,It=nt.tween;if((Ot||Math.abs(L.getVelocity())<10)&&!It&&!uc&&Rt!==st){var Kt=(st-yt)/Xt,$e=i&&!I?i.totalProgress():Kt,oe=Ot?0:($e-ut)/(On()-So)*1e3||0,Ne=Nt.utils.clamp(-Kt,1-Kt,ga(oe/2)*oe/.185),on=Kt+(y.inertia===!1?0:Ne),Ue,Ce,vt=y,se=vt.onStart,St=vt.onInterrupt,ne=vt.onComplete;if(Ue=Gt(on,L),To(Ue)||(Ue=on),Ce=Math.max(0,Math.round(yt+Ue*Xt)),st<=wt&&st>=yt&&Ce!==st){if(It&&!It._initted&&It.data<=ga(Ce-st))return;y.inertia===!1&&(Ne=Ue-Kt),nt(Ce,{duration:Vt(ga(Math.max(ga(on-$e),ga(Ue-$e))*.185/oe/.05||0)),ease:y.ease||"power3",data:ga(Ce-st),onInterrupt:function(){return U.restart(!0)&&St&&ma(L,St)},onComplete:function(){L.update(),Rt=Z(),i&&!I&&(lt?lt.resetTo("totalProgress",Ue,i._tTime/i._tDur):i.progress(Ue)),mt=ut=i&&!I?i.totalProgress():L.progress,b&&b(L),ne&&ma(L,ne)}},st,Ne*Xt,Ce-st-Ne*Xt),se&&ma(L,se,nt.tween)}}else L.isActive&&Rt!==st&&U.restart(!0)}).pause()),l&&(_f[l]=L),u=L.trigger=$n(u||f!==!0&&f),xt=u&&u._gsap&&u._gsap.stRevert,xt&&(xt=xt(L)),f=f===!0?u:$n(f),gi(o)&&(o={targets:u,className:o}),f&&(g===!1||g===Di||(g=!g&&f.parentNode&&f.parentNode.style&&Ni(f.parentNode).display==="flex"?!1:un),L.pin=f,dt=Nt.core.getCache(f),dt.spacer?xe=dt.pinState:(A&&(A=$n(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),dt.spacerIsNative=!!A,A&&(dt.spacerState=tc(A))),dt.spacer=Yt=A||Pe.createElement("div"),Yt.classList.add("pin-spacer"),l&&Yt.classList.add("pin-spacer-"+l),dt.pinState=xe=tc(f)),n.force3D!==!1&&Nt.set(f,{force3D:!0}),L.spacer=Yt=dt.spacer,Lt=Ni(f),ct=Lt[g+C.os2],v=Nt.getProperty(f),k=Nt.quickSetter(f,C.a,mn),uf(f,Yt,Lt),Ie=tc(f)),K){Te=Ds(K)?C0(K,L0):L0,V=jl("scroller-start",l,P,C,Te,0),ee=jl("scroller-end",l,P,C,Te,0,V),R=V["offset"+C.op.d2];var it=$n(Rr(P,"content")||P);qt=this.markerStart=jl("start",l,it,C,Te,R,0,w),re=this.markerEnd=jl("end",l,it,C,Te,R,0,w),w&&(ft=Nt.quickSetter([qt,re],C.a,mn)),!B&&!(Vi.length&&Rr(P,"fixedMarkers")===!0)&&(cx(D?Ae:P),Nt.set([V,ee],{force3D:!0}),$=Nt.quickSetter(V,C.a,mn),pt=Nt.quickSetter(ee,C.a,mn))}if(w){var ot=w.vars.onUpdate,rt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),ot&&ot.apply(w,rt||[])})}if(L.previous=function(){return ue[ue.indexOf(L)-1]},L.next=function(){return ue[ue.indexOf(L)+1]},L.revert=function(st,Ot){if(!Ot)return L.kill(!0);var It=st!==!1||!L.enabled,Kt=Fn;It!==L.isReverted&&(It&&(ht=Math.max(Z(),L.scroll.rec||0),$t=L.progress,et=i&&i.progress()),qt&&[qt,re,V,ee].forEach(function($e){return $e.style.display=It?"none":"block"}),It&&(Fn=L,L.update(It)),f&&(!M||!L.isActive)&&(It?px(f,Yt,xe):uf(f,Yt,Ni(f),at)),It||L.update(It),Fn=Kt,L.isReverted=It)},L.refresh=function(st,Ot,It,Kt){if(!((Fn||!L.enabled)&&!Ot)){if(f&&st&&Ui){Sn(r,"scrollEnd",Z0);return}!Kn&&tt&&tt(L),Fn=L,nt.tween&&!It&&(nt.tween.kill(),nt.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(gt){return gt.vars.immediateRender&&gt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var $e=Tt(),oe=At(),Ne=w?w.duration():cr(P,C),on=Xt<=.01||!Xt,Ue=0,Ce=Kt||0,vt=Ds(It)?It.end:n.end,se=n.endTrigger||u,St=Ds(It)?It.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),ne=L.pinnedContainer=n.pinnedContainer&&$n(n.pinnedContainer,L),kt=u&&Math.max(0,ue.indexOf(L))||0,Le=kt,fe,Be,cn,ti,Xe,Se,Ze,Ai,S,N,X,H,W;for(K&&Ds(It)&&(H=Nt.getProperty(V,C.p),W=Nt.getProperty(ee,C.p));Le-- >0;)Se=ue[Le],Se.end||Se.refresh(0,1)||(Fn=L),Ze=Se.pin,Ze&&(Ze===u||Ze===f||Ze===ne)&&!Se.isReverted&&(N||(N=[]),N.unshift(Se),Se.revert(!0,!0)),Se!==ue[Le]&&(kt--,Le--);for(Bn(St)&&(St=St(L)),St=w0(St,"start",L),yt=D0(St,u,$e,C,Z(),qt,V,L,oe,Y,B,Ne,w,L._startClamp&&"_startClamp")||(f?-.001:0),Bn(vt)&&(vt=vt(L)),gi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(gi(St)?St.split(" ")[0]:"")+vt:(Ue=ic(vt.substr(2),$e),vt=gi(St)?St:(w?Nt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,yt):yt)+Ue,se=u)),vt=w0(vt,"end",L),wt=Math.max(yt,D0(vt||(se?"100% 0":Ne),se,$e,C,Z()+Ue,re,ee,L,oe,Y,B,Ne,w,L._endClamp&&"_endClamp"))||-.001,Ue=0,Le=kt;Le--;)Se=ue[Le]||{},Ze=Se.pin,Ze&&Se.start-Se._pinPush<=yt&&!w&&Se.end>0&&(fe=Se.end-(L._startClamp?Math.max(0,Se.start):Se.start),(Ze===u&&Se.start-Se._pinPush<yt||Ze===ne)&&isNaN(St)&&(Ue+=fe*(1-Se.progress)),Ze===f&&(Ce+=fe));if(yt+=Ue,wt+=Ue,L._startClamp&&(L._startClamp+=Ue),L._endClamp&&!Kn&&(L._endClamp=wt||-.001,wt=Math.min(wt,cr(P,C))),Xt=wt-yt||(yt-=.01)&&.001,on&&($t=Nt.utils.clamp(0,1,Nt.utils.normalize(yt,wt,ht))),L._pinPush=Ce,qt&&Ue&&(fe={},fe[C.a]="+="+Ue,ne&&(fe[C.p]="-="+Z()),Nt.set([qt,re],fe)),f&&!(gf&&L.end>=cr(P,C)))fe=Ni(f),ti=C===hn,cn=Z(),G=parseFloat(v(C.a))+Ce,!Ne&&wt>1&&(X=(D?Pe.scrollingElement||_i:P).style,X={style:X,value:X["overflow"+C.a.toUpperCase()]},D&&Ni(Ae)["overflow"+C.a.toUpperCase()]!=="scroll"&&(X.style["overflow"+C.a.toUpperCase()]="scroll")),uf(f,Yt,fe),Ie=tc(f),Be=Pr(f,!0),Ai=B&&Lr(P,ti?Un:hn)(),g?(at=[g+C.os2,Xt+Ce+mn],at.t=Yt,Le=g===un?cc(f,C)+Xt+Ce:0,Le&&(at.push(C.d,Le+mn),Yt.style.flexBasis!=="auto"&&(Yt.style.flexBasis=Le+mn)),Ma(at),ne&&ue.forEach(function(gt){gt.pin===ne&&gt.vars.pinSpacing!==!1&&(gt._subPinOffset=!0)}),B&&Z(ht)):(Le=cc(f,C),Le&&Yt.style.flexBasis!=="auto"&&(Yt.style.flexBasis=Le+mn)),B&&(Xe={top:Be.top+(ti?cn-yt:Ai)+mn,left:Be.left+(ti?Ai:cn-yt)+mn,boxSizing:"border-box",position:"fixed"},Xe[Us]=Xe["max"+Sa]=Math.ceil(Be.width)+mn,Xe[Fs]=Xe["max"+Tf]=Math.ceil(Be.height)+mn,Xe[Di]=Xe[Di+Po]=Xe[Di+Lo]=Xe[Di+Io]=Xe[Di+Ro]="0",Xe[un]=fe[un],Xe[un+Po]=fe[un+Po],Xe[un+Lo]=fe[un+Lo],Xe[un+Io]=fe[un+Io],Xe[un+Ro]=fe[un+Ro],F=gx(xe,Xe,M),Kn&&Z(0)),i?(S=i._initted,of(1),i.render(i.duration(),!0,!0),J=v(C.a)-G+Xt+Ce,j=Math.abs(Xt-J)>1,B&&j&&F.splice(F.length-2,2),i.render(0,!0,!0),S||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),of(0)):J=Xt,X&&(X.value?X.style["overflow"+C.a.toUpperCase()]=X.value:X.style.removeProperty("overflow-"+C.a));else if(u&&Z()&&!w)for(Be=u.parentNode;Be&&Be!==Ae;)Be._pinOffset&&(yt-=Be._pinOffset,wt-=Be._pinOffset),Be=Be.parentNode;N&&N.forEach(function(gt){return gt.revert(!1,!0)}),L.start=yt,L.end=wt,_t=Ht=Kn?ht:Z(),!w&&!Kn&&(_t<ht&&Z(ht),L.scroll.rec=0),L.revert(!1,!0),Qt=On(),U&&(Rt=-1,U.restart(!0)),Fn=0,i&&I&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(on||$t!==L.progress||w||_||i&&!i._initted)&&(i&&!I&&(i._initted||$t||i.vars.immediateRender!==!1)&&i.totalProgress(w&&yt<-.001&&!$t?Nt.utils.normalize(yt,wt,0):$t,!0),L.progress=on||(_t-yt)/Xt===$t?0:$t),f&&g&&(Yt._pinOffset=Math.round(L.progress*J)),lt&&lt.invalidate(),isNaN(H)||(H-=Nt.getProperty(V,C.p),W-=Nt.getProperty(ee,C.p),ec(V,C,H),ec(qt,C,H-(Kt||0)),ec(ee,C,W),ec(re,C,W-(Kt||0))),on&&!Kn&&L.update(),h&&!Kn&&!ze&&(ze=!0,h(L),ze=!1)}},L.getVelocity=function(){return(Z()-Ht)/(On()-So)*1e3||0},L.endAnimation=function(){Mo(L.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?I||Mo(i,L.direction<0,1):Mo(i,i.reversed()))},L.labelToScroll=function(st){return i&&i.labels&&(yt||L.refresh()||yt)+i.labels[st]/i.duration()*Xt||0},L.getTrailing=function(st){var Ot=ue.indexOf(L),It=L.direction>0?ue.slice(0,Ot).reverse():ue.slice(Ot+1);return(gi(st)?It.filter(function(Kt){return Kt.vars.preventOverlaps===st}):It).filter(function(Kt){return L.direction>0?Kt.end<=yt:Kt.start>=wt})},L.update=function(st,Ot,It){if(!(w&&!It&&!st)){var Kt=Kn===!0?ht:L.scroll(),$e=st?0:(Kt-yt)/Xt,oe=$e<0?0:$e>1?1:$e||0,Ne=L.progress,on,Ue,Ce,vt,se,St,ne,kt;if(Ot&&(Ht=_t,_t=w?Z():Kt,y&&(ut=mt,mt=i&&!I?i.totalProgress():oe)),p&&f&&!Fn&&!Yl&&Ui&&(!oe&&yt<Kt+(Kt-Ht)/(On()-So)*p?oe=1e-4:oe===1&&wt>Kt+(Kt-Ht)/(On()-So)*p&&(oe=.9999)),oe!==Ne&&L.enabled){if(on=L.isActive=!!oe&&oe<1,Ue=!!Ne&&Ne<1,St=on!==Ue,se=St||!!oe!=!!Ne,L.direction=oe>Ne?1:-1,L.progress=oe,se&&!Fn&&(Ce=oe&&!Ne?0:oe===1?1:Ne===1?2:3,I&&(vt=!St&&z[Ce+1]!=="none"&&z[Ce+1]||z[Ce],kt=i&&(vt==="complete"||vt==="reset"||vt in i))),T&&(St||kt)&&(kt||d||!i)&&(Bn(T)?T(L):L.getTrailing(T).forEach(function(cn){return cn.endAnimation()})),I||(lt&&!Fn&&!Yl?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",oe,i._tTime/i._tDur):(lt.vars.totalProgress=oe,lt.invalidate().restart())):i&&i.totalProgress(oe,!!(Fn&&(Qt||st)))),f){if(st&&g&&(Yt.style[g+C.os2]=ct),!B)k(wo(G+J*oe));else if(se){if(ne=!st&&oe>Ne&&wt+1>Kt&&Kt+1>=cr(P,C),M)if(!st&&(on||ne)){var Le=Pr(f,!0),fe=Kt-yt;N0(f,Ae,Le.top+(C===hn?fe:0)+mn,Le.left+(C===hn?0:fe)+mn)}else N0(f,Yt);Ma(on||ne?F:Ie),j&&oe<1&&on||k(G+(oe===1&&!ne?J:0))}}y&&!nt.tween&&!Fn&&!Yl&&U.restart(!0),o&&(St||E&&oe&&(oe<1||!lf))&&No(o.targets).forEach(function(cn){return cn.classList[on||E?"add":"remove"](o.className)}),a&&!I&&!st&&a(L),se&&!Fn?(I&&(kt&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),a&&a(L)),(St||!lf)&&(c&&St&&ma(L,c),q[Ce]&&ma(L,q[Ce]),E&&(oe===1?L.kill(!1,1):q[Ce]=0),St||(Ce=oe===1?1:3,q[Ce]&&ma(L,q[Ce]))),x&&!on&&Math.abs(L.getVelocity())>(To(x)?x:2500)&&(Mo(L.callbackAnimation),lt?lt.progress(1):Mo(i,vt==="reverse"?1:!oe,1))):I&&a&&!Fn&&a(L)}if(pt){var Be=w?Kt/w.duration()*(w._caScrollDist||0):Kt;$(Be+(V._isFlipped?1:0)),pt(Be)}ft&&ft(-Kt/w.duration()*(w._caScrollDist||0))}},L.enable=function(st,Ot){L.enabled||(L.enabled=!0,Sn(P,"resize",Ao),D||Sn(P,"scroll",_a),tt&&Sn(r,"refreshInit",tt),st!==!1&&(L.progress=$t=0,_t=Ht=Rt=Z()),Ot!==!1&&L.refresh())},L.getTween=function(st){return st&&nt?nt.tween:lt},L.setPositions=function(st,Ot,It,Kt){if(w){var $e=w.scrollTrigger,oe=w.duration(),Ne=$e.end-$e.start;st=$e.start+Ne*st/oe,Ot=$e.start+Ne*Ot/oe}L.refresh(!1,!1,{start:T0(st,It&&!!L._startClamp),end:T0(Ot,It&&!!L._endClamp)},Kt),L.update()},L.adjustPinSpacing=function(st){if(at&&st){var Ot=at.indexOf(C.d)+1;at[Ot]=parseFloat(at[Ot])+st+mn,at[1]=parseFloat(at[1])+st+mn,Ma(at)}},L.disable=function(st,Ot){if(st!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ot||lt&&lt.pause(),ht=0,dt&&(dt.uncache=1),tt&&Mn(r,"refreshInit",tt),U&&(U.pause(),nt.tween&&nt.tween.kill()&&(nt.tween=0)),!D)){for(var It=ue.length;It--;)if(ue[It].scroller===P&&ue[It]!==L)return;Mn(P,"resize",Ao),D||Mn(P,"scroll",_a)}},L.kill=function(st,Ot){L.disable(st,Ot),lt&&!Ot&&lt.kill(),l&&delete _f[l];var It=ue.indexOf(L);It>=0&&ue.splice(It,1),It===Jn&&sc>0&&Jn--,It=0,ue.forEach(function(Kt){return Kt.scroller===L.scroller&&(It=1)}),It||Kn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),Ot||i.kill()),qt&&[qt,re,V,ee].forEach(function(Kt){return Kt.parentNode&&Kt.parentNode.removeChild(Kt)}),Do===L&&(Do=0),f&&(dt&&(dt.uncache=1),It=0,ue.forEach(function(Kt){return Kt.pin===f&&It++}),It||(dt.spacer=0)),n.onKill&&n.onKill(L)},ue.push(L),L.enable(!1,!1),xt&&xt(L),i&&i.add&&!Xt){var Pt=L.update;L.update=function(){L.update=Pt,he.cache++,yt||wt||L.refresh()},Nt.delayedCall(.01,L.update),Xt=.01,yt=wt=0}else L.refresh();f&&dx()},r.register=function(n){return xa||(Nt=n||H0(),G0()&&window.document&&r.enable(),xa=bo),xa},r.defaults=function(n){if(n)for(var i in n)Kl[i]=n[i];return Kl},r.disable=function(n,i){bo=0,ue.forEach(function(a){return a[i?"kill":"disable"](n)}),Mn(de,"wheel",_a),Mn(Pe,"scroll",_a),clearInterval(ql),Mn(Pe,"touchcancel",lr),Mn(Ae,"touchstart",lr),Zl(Mn,Pe,"pointerdown,touchstart,mousedown",A0),Zl(Mn,Pe,"pointerup,touchend,mouseup",E0),lc.kill(),$l(Mn);for(var s=0;s<he.length;s+=3)Jl(Mn,he[s],he[s+1]),Jl(Mn,he[s],he[s+2])},r.enable=function(){if(de=window,Pe=document,_i=Pe.documentElement,Ae=Pe.body,Nt){if(No=Nt.utils.toArray,Eo=Nt.utils.clamp,mf=Nt.core.context||lr,of=Nt.core.suppressOverwrites||lr,Mf=de.history.scrollRestoration||"auto",xf=de.pageYOffset||0,Nt.core.globals("ScrollTrigger",r),Ae){bo=1,ya=document.createElement("div"),ya.style.height="100vh",ya.style.position="absolute",tm(),ax(),an.register(Nt),r.isTouch=an.isTouch,jr=an.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pf=an.isTouch===1,Sn(de,"wheel",_a),yf=[de,Pe,_i,Ae],Nt.matchMedia?(r.matchMedia=function(h){var d=Nt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Nt.addEventListener("matchMediaInit",function(){K0(),Ef()}),Nt.addEventListener("matchMediaRevert",function(){return J0()}),Nt.addEventListener("matchMedia",function(){Ns(0,1),zs("matchMedia")}),Nt.matchMedia().add("(orientation: portrait)",function(){return hf(),hf})):console.warn("Requires GSAP 3.11.0 or later"),hf(),Sn(Pe,"scroll",_a);var n=Ae.hasAttribute("style"),i=Ae.style,s=i.borderTopStyle,a=Nt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Pr(Ae),hn.m=Math.round(o.top+hn.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Ae.setAttribute("style",""),Ae.removeAttribute("style")),ql=setInterval(R0,250),Nt.delayedCall(.5,function(){return Yl=0}),Sn(Pe,"touchcancel",lr),Sn(Ae,"touchstart",lr),Zl(Sn,Pe,"pointerdown,touchstart,mousedown",A0),Zl(Sn,Pe,"pointerup,touchend,mouseup",E0),df=Nt.utils.checkPrefix("transform"),ac.push(df),xa=On(),lc=Nt.delayedCall(.2,Ns).pause(),va=[Pe,"visibilitychange",function(){var h=de.innerWidth,d=de.innerHeight;Pe.hidden?(S0=h,b0=d):(S0!==h||b0!==d)&&Ao()},Pe,"DOMContentLoaded",Ns,de,"load",Ns,de,"resize",Ao],$l(Sn),ue.forEach(function(h){return h.enable(0,1)}),l=0;l<he.length;l+=3)Jl(Mn,he[l],he[l+1]),Jl(Mn,he[l],he[l+2])}else if(Pe){var c=function h(){r.enable(),Pe.removeEventListener("DOMContentLoaded",h)};Pe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(lf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ql)||(ql=i)&&setInterval(R0,i),"ignoreMobileResize"in n&&(pf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($l(Mn)||$l(Sn,n.autoRefreshEvents||"none"),z0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=$n(n),a=he.indexOf(s),o=Bs(s);~a&&he.splice(a,o?6:2),i&&(o?Vi.unshift(de,i,Ae,i,_i,i):Vi.unshift(s,i))},r.clearMatchMedia=function(n){ue.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(gi(n)?$n(n):n).getBoundingClientRect(),o=a[s?Us:Fs]*i||0;return s?a.right-o>0&&a.left+o<de.innerWidth:a.bottom-o>0&&a.top+o<de.innerHeight},r.positionInViewport=function(n,i,s){gi(n)&&(n=$n(n));var a=n.getBoundingClientRect(),o=a[s?Us:Fs],l=i==null?o/2:i in hc?hc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/de.innerWidth:(a.top+l)/de.innerHeight},r.killAll=function(n){if(ue.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ks.killAll||[];ks={},i.forEach(function(s){return s()})}},r})();ae.version="3.15.0";ae.saveStyles=function(r){return r?No(r).forEach(function(t){if(t&&t.style){var e=mi.indexOf(t);e>=0&&mi.splice(e,5),mi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Nt.core.getCache(t),mf())}}):mi};ae.revert=function(r,t){return Ef(!r,t)};ae.create=function(r,t){return new ae(r,t)};ae.refresh=function(r){return r?Ao(!0):(xa||ae.register())&&Ns(!0)};ae.update=function(r){return++he.cache&&Ir(r===!0?2:0)};ae.clearScrollMemory=j0;ae.maxScroll=function(r,t){return cr(r,t?Un:hn)};ae.getScrollFunc=function(r,t){return Lr($n(r),t?Un:hn)};ae.getById=function(r){return _f[r]};ae.getAll=function(){return ue.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ae.isScrolling=function(){return!!Ui};ae.snapDirectional=Af;ae.addEventListener=function(r,t){var e=ks[r]||(ks[r]=[]);~e.indexOf(t)||e.push(t)};ae.removeEventListener=function(r,t){var e=ks[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ae.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Nt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Bn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Bn(s)&&(s=s(),Sn(ae,"refresh",function(){return s=t.batchMax()})),No(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ae.create(c))}),e};var F0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ff=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(an.isTouch?" pinch-zoom":""):"none",t===_i&&r(Ae,e)},nc={auto:1,scroll:1},xx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Nt.core.getCache(s),o=On(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ae&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nc[(l=Ni(s)).overflowY]||nc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Bs(s)&&(nc[(l=Ni(s)).overflowY]||nc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},nm=function(t,e,n,i){return an.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&xx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Sn(Pe,an.eventTypes[0],B0,!1,!0)},onDisable:function(){return Mn(Pe,an.eventTypes[0],B0,!0)}})},vx=/(input|label|select|textarea)/i,O0,B0=function(t){var e=vx.test(t.target.tagName);(e||O0)&&(t._gsapAllow=!0,O0=e)},yx=function(t){Ds(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=$n(t.target)||_i,h=Nt.core.globals().ScrollSmoother,d=h&&h.get(),u=jr&&(t.content&&$n(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Lr(c,hn),g=Lr(c,Un),_=1,p=(an.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,m=0,b=Bn(i)?function(){return i(o)}:function(){return i||2.8},E,y,M=nm(c,t.type,!0,s),A=function(){return y=!1},w=lr,x=lr,T=function(){l=cr(c,hn),x=Eo(jr?1:0,l),n&&(w=Eo(0,cr(c,Un))),E=Os},C=function(){u._gsap.y=wo(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(y){requestAnimationFrame(A);var K=wo(o.deltaY/2),Y=x(f.v-K);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var L=wo((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",u._gsap.y=L+"px",f.cacheID=he.cache,Ir()}return!0}f.offset&&C(),y=!0},P,O,D,B,q=function(){T(),P.isActive()&&P.vars.scrollY>l&&(f()>l?P.progress(1)&&f(l):P.resetTo("scrollY",l))};return u&&Nt.set(u,{y:"+=0"}),t.ignoreCheck=function(z){return jr&&z.type==="touchmove"&&I(z)||_>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){y=!1;var z=_;_=wo((de.visualViewport&&de.visualViewport.scale||1)/p),P.pause(),z!==_&&ff(c,_>1.01?!0:n?!1:"x"),O=g(),D=f(),T(),E=Os},t.onRelease=t.onGestureStart=function(z,K){if(f.offset&&C(),!K)B.restart(!0);else{he.cache++;var Y=b(),L,tt;n&&(L=g(),tt=L+Y*.05*-z.velocityX/.227,Y*=F0(g,L,tt,cr(c,Un)),P.vars.scrollX=w(tt)),L=f(),tt=L+Y*.05*-z.velocityY/.227,Y*=F0(f,L,tt,cr(c,hn)),P.vars.scrollY=x(tt),P.invalidate().duration(Y).play(.01),(jr&&P.vars.scrollY>=l||L>=l-1)&&Nt.to({},{onUpdate:q,duration:Y})}a&&a(z)},t.onWheel=function(){P._ts&&P.pause(),On()-m>1e3&&(E=0,m=On())},t.onChange=function(z,K,Y,L,tt){if(Os!==E&&T(),K&&n&&g(w(L[2]===K?O+(z.startX-z.x):g()+K-L[1])),Y){f.offset&&C();var Tt=tt[2]===Y,At=Tt?D+z.startY-z.y:f()+Y-tt[1],Rt=x(At);Tt&&At!==Rt&&(D+=Rt-At),f(Rt)}(Y||K)&&Ir()},t.onEnable=function(){ff(c,n?!1:"x"),ae.addEventListener("refresh",q),Sn(de,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),M.enable()},t.onDisable=function(){ff(c,!0),Mn(de,"resize",q),ae.removeEventListener("refresh",q),M.kill()},t.lockAxis=t.lockAxis!==!1,o=new an(t),o.iOS=jr,jr&&!f()&&f(1),jr&&Nt.ticker.add(lr),B=o._dc,P=Nt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:em(f,f(),function(){return P.pause()})},onUpdate:Ir,onComplete:B.vars.onComplete}),o};ae.sort=function(r){if(Bn(r))return ue.sort(r);var t=de.pageYOffset||0;return ae.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),ue.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ae.observe=function(r){return new an(r)};ae.normalizeScroll=function(r){if(typeof r>"u")return Zn;if(r===!0&&Zn)return Zn.enable();if(r===!1){Zn&&Zn.kill(),Zn=r;return}var t=r instanceof an?r:yx(r);return Zn&&Zn.target===t.target&&Zn.kill(),Bs(t.target)&&(Zn=t),t};ae.core={_getVelocityProp:Xl,_inputObserver:nm,_scrollers:he,_proxies:Vi,bridge:{ss:function(){Ui||zs("scrollStart"),Ui=On()},ref:function(){return Fn}}};H0()&&Nt.registerPlugin(ae);var Sm=0,nd=1,bm=2;var il=1,wm=2,Ha=3,ms=0,Rn=1,jn=2,pr=0,Wa=1,id=2,rd=3,sd=4,rl=5;var mr=100,Tm=101,Am=102,sl=103,Em=104,al=200,Ys=201,ol=202,Cm=203,ad=204,od=205,Lm=206,Rm=207,Pm=208,Im=209,Dm=210,Nm=211,Um=212,Fm=213,Om=214,Dc=0,Nc=1,Uc=2,Oa=3,Fc=4,Oc=5,Bc=6,kc=7,ld=0,Bm=1,km=2,$i=0,cd=1,hd=2,ud=3,fd=4,dd=5,pd=6,md=7;var gd=300,gs=301,$s=302,uh=303,fh=304,ll=306,as=1e3,Mi=1001,zc=1002,wn=1003,zm=1004;var cl=1005;var ke=1006,dh=1007;var bi=1008;var wi=1009,_d=1010,xd=1011,Xa=1012,ph=1013,Zi=1014,Ji=1015,Ki=1016,mh=1017,gh=1018,qa=1020,vd=35902,yd=35899,Md=1021,Sd=1022,ki=1023,ur=1026,_s=1027,bd=1028,_h=1029,xs=1030,xh=1031;var vh=1033,hl=33776,ul=33777,fl=33778,dl=33779,yh=35840,Mh=35841,Sh=35842,bh=35843,wh=36196,Th=37492,Ah=37496,Eh=37488,Ch=37489,pl=37490,Lh=37491,Rh=37808,Ph=37809,Ih=37810,Dh=37811,Nh=37812,Uh=37813,Fh=37814,Oh=37815,Bh=37816,kh=37817,zh=37818,Qh=37819,Vh=37820,Gh=37821,Hh=36492,Wh=36494,Xh=36495,qh=36283,Yh=36284,ml=36285,$h=36286;var Qo=2300,Qc=2301,Pc=2302,Zf=2303,Jf=2400,Kf=2401,jf=2402;var Qm=3200;var wd=0,Vm=1,Ti="",yi="srgb",Vo="srgb-linear",Go="linear",Ee="srgb";var Ic=7680;var Gm=519,Hm=512,Wm=513,Xm=514,Zh=515,qm=516,Ym=517,Jh=518,$m=519,Zm=35044;var Td="300 es",qi=2e3,Ho=2001;function Mx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Wo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jm(){let r=Wo("canvas");return r.style.display="block",r}var im={},Ba=null;function Ad(...r){let t="THREE."+r.shift();Ba?Ba("log",t,...r):console.log(t,...r)}function Km(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Jt(...r){r=Km(r);let t="THREE."+r.shift();if(Ba)Ba("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function jt(...r){r=Km(r);let t="THREE."+r.shift();if(Ba)Ba("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Xs(...r){let t=r.join(" ");t in im||(im[t]=!0,Jt(...r))}function jm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var tg={[Dc]:Nc,[Uc]:Bc,[Fc]:kc,[Oa]:Oc,[Nc]:Dc,[Bc]:Uc,[kc]:Fc,[Oc]:Oa},fr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cf=Math.PI/180,Vc=180/Math.PI;function gl(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function bx(r,t){return(r%t+t)%t}function Lf(r,t,e){return(1-e)*r+e*t}function Fo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pd=class Pd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pd.prototype.isVector2=!0;var we=Pd,dr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Id=class Id{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rf.copy(this).projectOnVector(t),this.sub(Rf)}reflect(t){return this.sub(Rf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Id.prototype.isVector3=!0;var Q=Id,Rf=new Q,rm=new dr,Dd=class Dd{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],E=i[4],y=i[7],M=i[2],A=i[5],w=i[8];return s[0]=a*_+o*b+l*M,s[3]=a*p+o*E+l*A,s[6]=a*m+o*y+l*w,s[1]=c*_+h*b+d*M,s[4]=c*p+h*E+d*A,s[7]=c*m+h*y+d*w,s[2]=u*_+f*b+g*M,s[5]=u*p+f*E+g*A,s[8]=u*m+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pf.makeScale(t,e)),this}rotate(t){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pf.makeRotation(-t)),this}translate(t,e){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dd.prototype.isMatrix3=!0;var te=Dd,Pf=new te,sm=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wx(){let r={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ee&&(i.r=Br(i.r),i.g=Br(i.g),i.b=Br(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(i.r=Fa(i.r),i.g=Fa(i.g),i.b=Fa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Go:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vo]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:sm,fromXYZ:am,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:sm,fromXYZ:am,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}var me=wx();function Br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ba,Gc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ba===void 0&&(ba=Wo("canvas")),ba.width=t.width,ba.height=t.height;let i=ba.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ba}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Br(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Br(e[n]/255)*255):e[n]=Br(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tx=0,ka=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=gl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(If(i[a].image)):s.push(If(i[a]))}else s=If(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function If(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var Ax=0,Df=new Q,Ln=class r extends fr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Mi,i=Mi,s=ke,a=bi,o=ki,l=wi,c=r.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=gl(),this.name="",this.source=new ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Df).x}get height(){return this.source.getSize(Df).y}get depth(){return this.source.getSize(Df).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=gd;Ln.DEFAULT_ANISOTROPY=1;var Nd=class Nd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,M=(m+1)/2,A=(h+u)/4,w=(d+_)/4,x=(g+p)/4;return E>y&&E>M?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=w/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=x/s),this.set(n,i,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nd.prototype.isVector4=!0;var He=Nd,Hc=class extends fr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ln(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ka(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Hc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xo=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends Ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var hh=class hh{constructor(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/wa.setFromMatrixColumn(t,0).length(),s=1/wa.setFromMatrixColumn(t,1).length(),a=1/wa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ex,t,Cx)}lookAt(t,e,n){let i=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ts.crossVectors(n,xi),ts.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ts.crossVectors(n,xi)),ts.normalize(),fc.crossVectors(xi,ts),i[0]=ts.x,i[4]=fc.x,i[8]=xi.x,i[1]=ts.y,i[5]=fc.y,i[9]=xi.y,i[2]=ts.z,i[6]=fc.z,i[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],E=n[7],y=n[11],M=n[15],A=i[0],w=i[4],x=i[8],T=i[12],C=i[1],I=i[5],P=i[9],O=i[13],D=i[2],B=i[6],q=i[10],z=i[14],K=i[3],Y=i[7],L=i[11],tt=i[15];return s[0]=a*A+o*C+l*D+c*K,s[4]=a*w+o*I+l*B+c*Y,s[8]=a*x+o*P+l*q+c*L,s[12]=a*T+o*O+l*z+c*tt,s[1]=h*A+d*C+u*D+f*K,s[5]=h*w+d*I+u*B+f*Y,s[9]=h*x+d*P+u*q+f*L,s[13]=h*T+d*O+u*z+f*tt,s[2]=g*A+_*C+p*D+m*K,s[6]=g*w+_*I+p*B+m*Y,s[10]=g*x+_*P+p*q+m*L,s[14]=g*T+_*O+p*z+m*tt,s[3]=b*A+E*C+y*D+M*K,s[7]=b*w+E*I+y*B+M*Y,s[11]=b*x+E*P+y*q+M*L,s[15]=b*T+E*O+y*z+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],b=l*f-c*u,E=o*f-c*d,y=o*u-l*d,M=a*f-c*h,A=a*u-l*h,w=a*d-o*h;return e*(_*b-p*E+m*y)-n*(g*b-p*M+m*A)+i*(g*E-_*M+m*w)-s*(g*y-_*A+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=e*o-n*a,E=e*l-i*a,y=e*c-s*a,M=n*l-i*o,A=n*c-s*o,w=i*c-s*l,x=h*_-d*g,T=h*p-u*g,C=h*m-f*g,I=d*p-u*_,P=d*m-f*_,O=u*m-f*p,D=b*O-E*P+y*I+M*C-A*T+w*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(o*O-l*P+c*I)*B,t[1]=(i*P-n*O-s*I)*B,t[2]=(_*w-p*A+m*M)*B,t[3]=(u*A-d*w-f*M)*B,t[4]=(l*C-a*O-c*T)*B,t[5]=(e*O-i*C+s*T)*B,t[6]=(p*y-g*w-m*E)*B,t[7]=(h*w-u*y+f*E)*B,t[8]=(a*P-o*C+c*x)*B,t[9]=(n*C-e*P-s*x)*B,t[10]=(g*A-_*y+m*b)*B,t[11]=(d*y-h*A-f*b)*B,t[12]=(o*T-a*I-l*x)*B,t[13]=(e*I-n*T+i*x)*B,t[14]=(_*E-g*M-p*b)*B,t[15]=(h*M-d*E+u*b)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,b=l*c,E=l*h,y=l*d,M=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*M,i[1]=(f+y)*M,i[2]=(g-E)*M,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(u+m))*A,i[6]=(p+b)*A,i[7]=0,i[8]=(g+E)*w,i[9]=(p-b)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=wa.set(i[0],i[1],i[2]).length(),o=wa.set(i[4],i[5],i[6]).length(),l=wa.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Gi.copy(this);let c=1/a,h=1/o,d=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=d,Gi.elements[9]*=d,Gi.elements[10]*=d,e.setFromRotationMatrix(Gi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=qi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===qi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ho)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=qi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===qi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ho)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};hh.prototype.isMatrix4=!0;var tn=hh,wa=new Q,Gi=new tn,Ex=new Q(0,0,0),Cx=new Q(1,1,1),ts=new Q,fc=new Q,xi=new Q,om=new tn,lm=new dr,os=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return om.makeRotationFromQuaternion(t),this.setFromRotationMatrix(om,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lm.setFromEuler(this),this.setFromQuaternion(lm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lx=0,cm=new Q,Ta=new dr,Dr=new tn,dc=new Q,Oo=new Q,Rx=new Q,Px=new dr,hm=new Q(1,0,0),um=new Q(0,1,0),fm=new Q(0,0,1),dm={type:"added"},Ix={type:"removed"},Aa={type:"childadded",child:null},Nf={type:"childremoved",child:null},Bi=class r extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Q,e=new os,n=new dr,i=new Q(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new te}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ta.setFromAxisAngle(t,e),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(t,e){return Ta.setFromAxisAngle(t,e),this.quaternion.premultiply(Ta),this}rotateX(t){return this.rotateOnAxis(hm,t)}rotateY(t){return this.rotateOnAxis(um,t)}rotateZ(t){return this.rotateOnAxis(fm,t)}translateOnAxis(t,e){return cm.copy(t).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hm,t)}translateY(t){return this.translateOnAxis(um,t)}translateZ(t){return this.translateOnAxis(fm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dc.copy(t):dc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Oo,dc,this.up):Dr.lookAt(dc,Oo,this.up),this.quaternion.setFromRotationMatrix(Dr),i&&(Dr.extractRotation(i.matrixWorld),Ta.setFromRotationMatrix(Dr),this.quaternion.premultiply(Ta.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dm),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ix),Nf.child=t,this.dispatchEvent(Nf),Nf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dm),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Px,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bi.DEFAULT_UP=new Q(0,1,0);Bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ws=class extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},za=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ws;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Uf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=bx(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Uf(a,s,t+1/3),this.g=Uf(a,s,t),this.b=Uf(a,s,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=yi){function n(s){s!==void 0&&parseFloat(s)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yi){let n=eg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return me.workingToColorSpace(zn.copy(this),t),Math.round(_e(zn.r*255,0,255))*65536+Math.round(_e(zn.g*255,0,255))*256+Math.round(_e(zn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(zn.copy(this),e);let n=zn.r,i=zn.g,s=zn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=yi){me.workingToColorSpace(zn.copy(this),t);let e=zn.r,n=zn.g,i=zn.b;return t!==yi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(pc);let n=Lf(es.h,pc.h,e),i=Lf(es.s,pc.s,e),s=Lf(es.l,pc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Me;Me.NAMES=eg;var ls=class extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hi=new Q,Nr=new Q,Ff=new Q,Ur=new Q,Ea=new Q,Ca=new Q,pm=new Q,Of=new Q,Bf=new Q,kf=new Q,zf=new He,Qf=new He,Vf=new He,ss=class r{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hi.subVectors(t,e),i.cross(Hi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Hi.subVectors(i,e),Nr.subVectors(n,e),Ff.subVectors(t,e);let a=Hi.dot(Hi),o=Hi.dot(Nr),l=Hi.dot(Ff),c=Nr.dot(Nr),h=Nr.dot(Ff),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ur.x),l.addScaledVector(a,Ur.y),l.addScaledVector(o,Ur.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return zf.setScalar(0),Qf.setScalar(0),Vf.setScalar(0),zf.fromBufferAttribute(t,e),Qf.fromBufferAttribute(t,n),Vf.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(zf,s.x),a.addScaledVector(Qf,s.y),a.addScaledVector(Vf,s.z),a}static isFrontFacing(t,e,n,i){return Hi.subVectors(n,e),Nr.subVectors(t,e),Hi.cross(Nr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),Hi.cross(Nr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Ea.subVectors(i,n),Ca.subVectors(s,n),Of.subVectors(t,n);let l=Ea.dot(Of),c=Ca.dot(Of);if(l<=0&&c<=0)return e.copy(n);Bf.subVectors(t,i);let h=Ea.dot(Bf),d=Ca.dot(Bf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ea,a);kf.subVectors(t,s);let f=Ea.dot(kf),g=Ca.dot(kf);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ca,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return pm.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(pm,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Ea,a).addScaledVector(Ca,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cs=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wi):Wi.fromBufferAttribute(s,a),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mc.copy(n.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),gc.subVectors(this.max,Bo),La.subVectors(t.a,Bo),Ra.subVectors(t.b,Bo),Pa.subVectors(t.c,Bo),ns.subVectors(Ra,La),is.subVectors(Pa,Ra),Qs.subVectors(La,Pa);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Qs.z,Qs.y,ns.z,0,-ns.x,is.z,0,-is.x,Qs.z,0,-Qs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Qs.y,Qs.x,0];return!Gf(e,La,Ra,Pa,gc)||(e=[1,0,0,0,1,0,0,0,1],!Gf(e,La,Ra,Pa,gc))?!1:(_c.crossVectors(ns,is),e=[_c.x,_c.y,_c.z],Gf(e,La,Ra,Pa,gc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Wi=new Q,mc=new cs,La=new Q,Ra=new Q,Pa=new Q,ns=new Q,is=new Q,Qs=new Q,Bo=new Q,gc=new Q,_c=new Q,Vs=new Q;function Gf(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vs.fromArray(r,s);let o=i.x*Math.abs(Vs.x)+i.y*Math.abs(Vs.y)+i.z*Math.abs(Vs.z),l=t.dot(Vs),c=e.dot(Vs),h=n.dot(Vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fn=new Q,xc=new we,Nx=0,en=class extends fr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zm,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fo(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fo(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fo(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),i=oi(i,this.array),s=oi(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $o=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Oi=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ux=new cs,ko=new Q,Hf=new Q,Qa=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ux.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);let e=ko.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Hf)),this.expandByPoint(ko.copy(t.center).sub(Hf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fx=0,Fi=new tn,Wf=new Bi,Ia=new Q,vi=new cs,zo=new cs,bn=new Q,Vn=class r extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mx(t)?$o:Yo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return Wf.lookAt(t),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ia).negate(),this.translate(Ia.x,Ia.y,Ia.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];zo.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(vi.min,zo.min),vi.expandByPoint(bn),bn.addVectors(vi.max,zo.max),vi.expandByPoint(bn)):(vi.expandByPoint(zo.min),vi.expandByPoint(zo.max))}vi.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)bn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(bn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bn.fromBufferAttribute(o,c),l&&(Ia.fromBufferAttribute(t,c),bn.add(Ia)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new Q,l[x]=new Q;let c=new Q,h=new Q,d=new Q,u=new we,f=new we,g=new we,_=new Q,p=new Q;function m(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(_),o[T].add(_),o[C].add(_),l[x].add(p),l[T].add(p),l[C].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let C=b[x],I=C.start,P=C.count;for(let O=I,D=I+P;O<D;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new Q,y=new Q,M=new Q,A=new Q;function w(x){M.fromBufferAttribute(i,x),A.copy(M);let T=o[x];E.copy(T),E.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(A,T);let I=y.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,I)}for(let x=0,T=b.length;x<T;++x){let C=b[x],I=C.start,P=C.count;for(let O=I,D=I+P;O<D;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,h=new Q,d=new Q;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new en(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xf=new Q,Ox=new Q,Bx=new te,Xi=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xf.subVectors(n,e).cross(Ox.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Xf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bx.getNormalMatrix(t),i=this.coplanarPoint(Xf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kx=0,qs=class extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Wa,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ic,this.stencilZFail=Ic,this.stencilZPass=Ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Or=new Q,qf=new Q,vc=new Q,yc=new Q,Xc=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Or)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Or.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Or.copy(this.origin).addScaledVector(this.direction,e),Or.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qf.copy(t).add(e).multiplyScalar(.5),vc.copy(e).sub(t).normalize(),yc.copy(this.origin).sub(qf);let s=t.distanceTo(e)*.5,a=-this.direction.dot(vc),o=yc.dot(this.direction),l=-yc.dot(vc),c=yc.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qf).addScaledVector(vc,u),f}intersectSphere(t,e){if(t.radius<0)return null;Or.subVectors(t.center,this.origin);let n=Or.dot(this.direction),i=Or.dot(Or)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Or)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,b=n.y-a.y,E=n.z-a.z,y=Math.abs(l),M=Math.abs(c),A=Math.abs(h),w,x,T,C,I,P,O,D,B,q,z,K;if(y>=M&&y>=A?(T=l,P=d,B=g,K=m,l>=0?(w=c,x=h,C=u,I=f,O=_,D=p,q=b,z=E):(w=h,x=c,C=f,I=u,O=p,D=_,q=E,z=b)):M>=A?(T=c,P=u,B=_,K=b,c>=0?(w=h,x=l,C=f,I=d,O=p,D=g,q=E,z=m):(w=l,x=h,C=d,I=f,O=g,D=p,q=m,z=E)):(T=h,P=f,B=p,K=E,h>=0?(w=l,x=c,C=d,I=u,O=g,D=_,q=m,z=b):(w=c,x=l,C=u,I=d,O=_,D=g,q=b,z=m)),T===0)return null;let Y=w/T,L=x/T,tt=1/T,Tt=C-Y*P,At=I-L*P,Rt=O-Y*B,Qt=D-L*B,$t=q-Y*K,Z=z-L*K,nt=$t*Qt-Z*Rt,dt=Tt*Z-At*$t,Gt=Rt*At-Qt*Tt;if(i){if(nt<0||dt<0||Gt<0)return null}else if((nt<0||dt<0||Gt<0)&&(nt>0||dt>0||Gt>0))return null;let _t=nt+dt+Gt;if(_t===0)return null;let Ht=tt*(nt*P+dt*B+Gt*K);return(_t>0?Ht<0:Ht>0)?null:this.at(Ht/_t,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zo=class extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mm=new tn,Gs=new Xc,Mc=new Qa,gm=new Q,Sc=new Q,bc=new Q,wc=new Q,Yf=new Q,Tc=new Q,_m=new Q,Ac=new Q,Ye=class extends Bi{constructor(t=new Vn,e=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Yf.fromBufferAttribute(d,t),a?Tc.addScaledVector(Yf,h):Tc.addScaledVector(Yf.sub(e),h))}e.add(Tc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mc.copy(n.boundingSphere),Mc.applyMatrix4(s),Gs.copy(t.ray).recast(t.near),!(Mc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Mc,gm)===null||Gs.origin.distanceToSquared(gm)>(t.far-t.near)**2))&&(mm.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(mm),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gs)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,M=E;y<M;y+=3){let A=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);i=Ec(this,m,t,n,c,h,d,A,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);i=Ec(this,a,t,n,c,h,d,b,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,M=E;y<M;y+=3){let A=y,w=y+1,x=y+2;i=Ec(this,m,t,n,c,h,d,A,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,E=p+1,y=p+2;i=Ec(this,a,t,n,c,h,d,b,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function zx(r,t,e,n,i,s,a,o){let l;if(t.side===Rn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ms,o),l===null)return null;Ac.copy(o),Ac.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ac);return c<e.near||c>e.far?null:{distance:c,point:Ac.clone(),object:r}}function Ec(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Sc),r.getVertexPosition(l,bc),r.getVertexPosition(c,wc);let h=zx(r,t,e,n,Sc,bc,wc,_m);if(h){let d=new Q;ss.getBarycoord(_m,Sc,bc,wc,d),i&&(h.uv=ss.getInterpolatedAttribute(i,o,l,c,d,new we)),s&&(h.uv1=ss.getInterpolatedAttribute(s,o,l,c,d,new we)),a&&(h.normal=ss.getInterpolatedAttribute(a,o,l,c,d,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Q,materialIndex:0};ss.getNormal(Sc,bc,wc,u.normal),h.face=u,h.barycoord=d}return h}var qc=class extends Ln{constructor(t=null,e=1,n=1,i,s,a,o,l,c=wn,h=wn,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=class extends en{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Hs=new Qa,Qx=new we(.5,.5),Cc=new Q,Jo=class{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qi,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],b=s[12],E=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-a,f-h,m-g,M-b).normalize(),i[1].setComponents(c+a,f+h,m+g,M+b).normalize(),i[2].setComponents(c+o,f+d,m+_,M+E).normalize(),i[3].setComponents(c-o,f-d,m-_,M-E).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,m-p,M-y).normalize();else if(i[4].setComponents(c-l,f-u,m-p,M-y).normalize(),e===qi)i[5].setComponents(c+l,f+u,m+p,M+y).normalize();else if(e===Ho)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);let e=Qx.distanceTo(t.center);return Hs.radius=.7071067811865476+e,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cc.x=i.normal.x>0?t.max.x:t.min.x,Cc.y=i.normal.y>0?t.max.y:t.min.y,Cc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ko=class extends Ln{constructor(t=[],e=gs,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends Ln{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends Ln{constructor(t,e,n=Zi,i,s,a,o=wn,l=wn,c,h=ur,d=1){if(h!==ur&&h!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ka(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yc=class extends hs{constructor(t,e=Zi,n=gs,i,s,a=wn,o=wn,l,c=ur){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jo=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kr=class r extends Vn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(h,3)),this.setAttribute("uv",new Oi(d,2));function g(_,p,m,b,E,y,M,A,w,x,T){let C=y/w,I=M/x,P=y/2,O=M/2,D=A/2,B=w+1,q=x+1,z=0,K=0,Y=new Q;for(let L=0;L<q;L++){let tt=L*I-O;for(let Tt=0;Tt<B;Tt++){let At=Tt*C-P;Y[_]=At*b,Y[p]=tt*E,Y[m]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Tt/w),d.push(1-L/x),z+=1}}for(let L=0;L<x;L++)for(let tt=0;tt<w;tt++){let Tt=u+tt+B*L,At=u+tt+B*(L+1),Rt=u+(tt+1)+B*(L+1),Qt=u+(tt+1)+B*L;l.push(Tt,At,Qt),l.push(At,Rt,Qt),K+=6}o.addGroup(f,K,T),f+=K,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var tl=class r extends Vn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let E=0;E<c;E++){let y=E*d-s;g.push(y,-b,0),_.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let E=b+c*m,y=b+c*(m+1),M=b+1+c*(m+1),A=b+1+c*m;f.push(E,y,A),f.push(y,M,A)}this.setIndex(f),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(_,3)),this.setAttribute("uv",new Oi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Zs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(xm(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(xm(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Gn(r){let t={};for(let e=0;e<r.length;e++){let n=Zs(r[e]);for(let i in n)t[i]=n[i]}return t}function xm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Vx(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ed(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var ng={clone:Zs,merge:Gn},Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Vx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(i.value);break;case"v2":this.uniforms[n].value=new we().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new He().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new tn().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$c=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Zc=class extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jc=class extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Da(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function $f(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kc=class extends us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kf:s=t,o=2*e-n;break;case jf:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kf:a=t,l=2*n-e;break;case jf:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,b=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let M=0;M!==o;++M)s[M]=m*a[h+M]+b*a[c+M]+E*a[l+M]+y*a[d+M];return s}},jc=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},th=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},eh=class extends us{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*u+g*2,b=d[m],E=d[m+1],y=t*u+g*2,M=h[y],A=h[y+1],w=Xx(n,e,b,M,i);s[g]=ig(w,_,E,A,p)}return s}};function ig(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Wx(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Xx(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=ig(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=Wx(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Si=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Da(e,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Da(t.times,Array),values:Da(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),$f(t.settings)&&(n.settings={inTangents:Da(t.settings.inTangents,Array),outTangents:Da(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new eh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qo:e=this.InterpolantFactoryMethodDiscrete;break;case Qc:e=this.InterpolantFactoryMethodLinear;break;case Pc:e=this.InterpolantFactoryMethodSmooth;break;case Zf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return Pc;case this.InterpolantFactoryMethodBezier:return Zf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;$f(this.settings)&&(vm(this.settings.inTangents,t),vm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Sx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pc,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,$f(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function vm(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Qc;var fs=class extends Si{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Qo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}};nh.prototype.ValueTypeName="color";var ih=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}};ih.prototype.ValueTypeName="number";var rh=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)dr.slerpFlat(s,0,a,c-o,a,c,l);return s}},el=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rh(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Si{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Qo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}};sh.prototype.ValueTypeName="vector";var ah=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rg=new ah,oh=class{constructor(t){this.manager=t!==void 0?t:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};oh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lc=new Q,Rc=new dr,hr=new Q,nl=class extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lc,Rc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Rc,hr.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lc,Rc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Rc,hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new Q,ym=new we,Mm=new we,Qn=class extends nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(Cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,ym,Mm),e.subVectors(Mm,ym)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ps=class extends nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ga=class extends Vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Na=-90,Ua=1,lh=class extends Bi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qn(Na,Ua,t,e);i.layers=this.layers,this.add(i);let s=new Qn(Na,Ua,t,e);s.layers=this.layers,this.add(s);let a=new Qn(Na,Ua,t,e);a.layers=this.layers,this.add(a);let o=new Qn(Na,Ua,t,e);o.layers=this.layers,this.add(o);let l=new Qn(Na,Ua,t,e);l.layers=this.layers,this.add(l);let c=new Qn(Na,Ua,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ch=class extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cd="\\[\\]\\.:\\/",qx=new RegExp("["+Cd+"]","g"),Ld="[^"+Cd+"]",Yx="[^"+Cd.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",Ld),Zx=/(WCOD+)?/.source.replace("WCOD",Yx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ld),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ld),jx=new RegExp("^"+$x+Zx+Jx+Kx+"$"),t2=["material","materials","bones","map"],td=class{constructor(t,e,n){let i=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(t){let e=jx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);t2.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=td;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wS=new Float32Array(1);var Ud=class Ud{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Ud.prototype.isMatrix2=!0;var ed=Ud;function Rd(r,t,e,n){let i=e2(n);switch(e){case Md:return r*t;case bd:return r*t/i.components*i.byteLength;case _h:return r*t/i.components*i.byteLength;case xs:return r*t*2/i.components*i.byteLength;case xh:return r*t*2/i.components*i.byteLength;case Sd:return r*t*3/i.components*i.byteLength;case ki:return r*t*4/i.components*i.byteLength;case vh:return r*t*4/i.components*i.byteLength;case hl:case ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fl:case dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:case bh:return Math.max(r,16)*Math.max(t,8)/4;case yh:case Sh:return Math.max(r,8)*Math.max(t,8)/2;case wh:case Th:case Eh:case Ch:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ah:case pl:case Lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hh:case Wh:case Xh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qh:case Yh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ml:case $h:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e2(r){switch(r){case wi:case _d:return{byteLength:1,components:1};case Xa:case xd:case Ki:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Zi:case ph:case Ji:return{byteLength:4,components:1};case vd:case yd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ag(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function i2(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var r2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,E2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N2="gl_FragColor = linearToOutputTexel( gl_FragColor );",U2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Z2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,by=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ty=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:r2,alphahash_pars_fragment:s2,alphamap_fragment:a2,alphamap_pars_fragment:o2,alphatest_fragment:l2,alphatest_pars_fragment:c2,aomap_fragment:h2,aomap_pars_fragment:u2,batching_pars_vertex:f2,batching_vertex:d2,begin_vertex:p2,beginnormal_vertex:m2,bsdfs:g2,iridescence_fragment:_2,bumpmap_pars_fragment:x2,clipping_planes_fragment:v2,clipping_planes_pars_fragment:y2,clipping_planes_pars_vertex:M2,clipping_planes_vertex:S2,color_fragment:b2,color_pars_fragment:w2,color_pars_vertex:T2,color_vertex:A2,common:E2,cube_uv_reflection_fragment:C2,defaultnormal_vertex:L2,displacementmap_pars_vertex:R2,displacementmap_vertex:P2,emissivemap_fragment:I2,emissivemap_pars_fragment:D2,colorspace_fragment:N2,colorspace_pars_fragment:U2,envmap_fragment:F2,envmap_common_pars_fragment:O2,envmap_pars_fragment:B2,envmap_pars_vertex:k2,envmap_physical_pars_fragment:Z2,envmap_vertex:z2,fog_vertex:Q2,fog_pars_vertex:V2,fog_fragment:G2,fog_pars_fragment:H2,gradientmap_pars_fragment:W2,lightmap_pars_fragment:X2,lights_lambert_fragment:q2,lights_lambert_pars_fragment:Y2,lights_pars_begin:$2,lights_toon_fragment:J2,lights_toon_pars_fragment:K2,lights_phong_fragment:j2,lights_phong_pars_fragment:tv,lights_physical_fragment:ev,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:rv,lights_fragment_end:sv,lightprobes_pars_fragment:av,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:fv,map_particle_fragment:dv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:_v,morphcolor_vertex:xv,morphnormal_vertex:vv,morphtarget_pars_vertex:yv,morphtarget_vertex:Mv,normal_fragment_begin:Sv,normal_fragment_maps:bv,normal_pars_fragment:wv,normal_pars_vertex:Tv,normal_vertex:Av,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Pv,opaque_fragment:Iv,packing:Dv,premultiplied_alpha_fragment:Nv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Qv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Gv,skinbase_vertex:Hv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:$v,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:Kv,transmission_pars_fragment:jv,uv_pars_fragment:ty,uv_pars_vertex:ey,uv_vertex:ny,worldpos_vertex:iy,background_vert:ry,background_frag:sy,backgroundCube_vert:ay,backgroundCube_frag:oy,cube_vert:ly,cube_frag:cy,depth_vert:hy,depth_frag:uy,distance_vert:fy,distance_frag:dy,equirect_vert:py,equirect_frag:my,linedashed_vert:gy,linedashed_frag:_y,meshbasic_vert:xy,meshbasic_frag:vy,meshlambert_vert:yy,meshlambert_frag:My,meshmatcap_vert:Sy,meshmatcap_frag:by,meshnormal_vert:wy,meshnormal_frag:Ty,meshphong_vert:Ay,meshphong_frag:Ey,meshphysical_vert:Cy,meshphysical_frag:Ly,meshtoon_vert:Ry,meshtoon_frag:Py,points_vert:Iy,points_frag:Dy,shadow_vert:Ny,shadow_frag:Uy,sprite_vert:Fy,sprite_frag:Oy},bt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},_r={basic:{uniforms:Gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Gn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Gn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Gn([bt.points,bt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Gn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Gn([bt.common,bt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Gn([bt.sprite,bt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Gn([bt.common,bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Gn([bt.lights,bt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};_r.physical={uniforms:Gn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Kh={r:0,b:0,g:0},By=new tn,Eg=new te;Eg.set(-1,0,0,0,1,0,0,0,1);function ky(r,t,e,n,i,s){let a=new Me(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(b){let E=!1,y=f(b);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===ll)?(c===void 0&&(c=new Ye(new kr(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Zs(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eg),c.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ye(new tl(2,2),new We({name:"BackgroundMaterial",uniforms:Zs(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(Kh,Ed(r)),e.buffers.color.setClear(Kh.r,Kh.g,Kh.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:_,dispose:m}}function zy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(I,P,O,D,B){let q=!1,z=d(I,D,O,P);s!==z&&(s=z,c(s.object)),q=f(I,D,O,B),q&&g(I,D,O,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(I,P,O,D),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,P,O,D){let B=D.wireframe===!0,q=n[P.id];q===void 0&&(q={},n[P.id]=q);let z=I.isInstancedMesh===!0?I.id:0,K=q[z];K===void 0&&(K={},q[z]=K);let Y=K[O.id];Y===void 0&&(Y={},K[O.id]=Y);let L=Y[B];return L===void 0&&(L=u(l()),Y[B]=L),L}function u(I){let P=[],O=[],D=[];for(let B=0;B<e;B++)P[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,P,O,D){let B=s.attributes,q=P.attributes,z=0,K=O.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=B[Y],Tt=q[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function g(I,P,O,D){let B={},q=P.attributes,z=0,K=O.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=q[Y];tt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),B[Y]=Tt,z++}s.attributes=B,s.attributesNum=z,s.index=D}function _(){let I=s.newAttributes;for(let P=0,O=I.length;P<O;P++)I[P]=0}function p(I){m(I,0)}function m(I,P){let O=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;O[I]=1,D[I]===0&&(r.enableVertexAttribArray(I),D[I]=1),B[I]!==P&&(r.vertexAttribDivisor(I,P),B[I]=P)}function b(){let I=s.newAttributes,P=s.enabledAttributes;for(let O=0,D=P.length;O<D;O++)P[O]!==I[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function E(I,P,O,D,B,q,z){z===!0?r.vertexAttribIPointer(I,P,O,B,q):r.vertexAttribPointer(I,P,O,D,B,q)}function y(I,P,O,D){_();let B=D.attributes,q=O.getAttributes(),z=P.defaultAttributeValues;for(let K in q){let Y=q[K];if(Y.location>=0){let L=B[K];if(L===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),L!==void 0){let tt=L.normalized,Tt=L.itemSize,At=t.get(L);if(At===void 0)continue;let Rt=At.buffer,Qt=At.type,$t=At.bytesPerElement,Z=Qt===r.INT||Qt===r.UNSIGNED_INT||L.gpuType===ph;if(L.isInterleavedBufferAttribute){let nt=L.data,dt=nt.stride,Gt=L.offset;if(nt.isInstancedInterleavedBuffer){for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t,nt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let _t=0;_t<Y.locationSize;_t++)p(Y.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let _t=0;_t<Y.locationSize;_t++)E(Y.location+_t,Tt/Y.locationSize,Qt,tt,dt*$t,(Gt+Tt/Y.locationSize*_t)*$t,Z)}else{if(L.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt,L.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let nt=0;nt<Y.locationSize;nt++)E(Y.location+nt,Tt/Y.locationSize,Qt,tt,Tt*$t,Tt/Y.locationSize*nt*$t,Z)}}else if(z!==void 0){let tt=z[K];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(Y.location,tt);break;case 3:r.vertexAttrib3fv(Y.location,tt);break;case 4:r.vertexAttrib4fv(Y.location,tt);break;default:r.vertexAttrib1fv(Y.location,tt)}}}}b()}function M(){T();for(let I in n){let P=n[I];for(let O in P){let D=P[O];for(let B in D){let q=D[B];for(let z in q)h(q[z].object),delete q[z];delete D[B]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let O in P){let D=P[O];for(let B in D){let q=D[B];for(let z in q)h(q[z].object),delete q[z];delete D[B]}}delete n[I.id]}function w(I){for(let P in n){let O=n[P];for(let D in O){let B=O[D];if(B[I.id]===void 0)continue;let q=B[I.id];for(let z in q)h(q[z].object),delete q[z];delete B[I.id]}}}function x(I){for(let P in n){let O=n[P],D=I.isInstancedMesh===!0?I.id:0,B=O[D];if(B!==void 0){for(let q in B){let z=B[q];for(let K in z)h(z[K].object),delete z[K];delete B[q]}delete O[D],Object.keys(O).length===0&&delete n[P]}}}function T(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Qy(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Vy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==ki&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==wi&&w!==Ji&&!x&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:M,samples:A}}function Gy(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Xi,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let b=s?0:n,E=b*4,y=m.clippingState||null;l.value=y,y=h(g,u,E,f);for(let M=0;M!==E;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var $a=4,Hy=6,Wy=20,Xy=256,_l=new ps,sg=new Me,Fd=null,Od=0,Bd=0,kd=!1,qy=new Q,Js=new Q,tu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=qy}=s;Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,Od,Bd),this._renderer.xr.enabled=kd,t.scissorTest=!1,Ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ki,format:ki,colorSpace:Vo,depthBuffer:!1},i=ag(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yy(s)),this._blurMaterial=Zy(s,t,e),this._ggxMaterial=$y(s,t,e)}return i}_compileMaterial(t){let e=new Ye(new Vn,t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,n,i,s){let l=new Qn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sg),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new kr,new Zo({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(sg),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let M=this._cubeSize;Ya(i,y*M,E>2?M:0,M,M),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gs||t.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ya(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_l)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-$a?n-g+$a:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ya(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,_l),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ya(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,_l)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-$a?i-this._lodMax+$a:0),u=4*(this._cubeSize-h);Ya(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,_l)}};function Yy(r){let t=[],e=[],n=r,i=r-$a+1+Hy;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let b=m%3*2/3-1,E=m>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];g.set(y,f*u*m);for(let M=0;M<u;M++){let A=h[M*2]*2-1,w=h[M*2+1]*2-1;m===0?Js.set(1,w,A):m===1?Js.set(-A,1,-w):m===2?Js.set(-A,w,1):m===3?Js.set(-1,w,-A):m===4?Js.set(-A,-1,w):Js.set(A,w,-1),Js.toArray(_,(m*u+M)*f)}}let p=new Vn;p.setAttribute("position",new en(g,f)),p.setAttribute("outputDirection",new en(_,f)),e.push(new Ye(p,null)),n>$a&&n--}return{lodMeshes:e,sizeLods:t}}function ag(r,t,e){let n=new gn(r,t,e);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $y(r,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Zy(r,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:Wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function og(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function lg(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eu=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ko(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kr(5,5,5),s=new We({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:pr});s.uniforms.tEquirect.value=e;let a=new Ye(i,s),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=ke),new lh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function Jy(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===uh||f===fh)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new eu(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===uh||f===fh,_=f===gs||f===$s;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new tu(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return g&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new tu(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===uh?u.mapping=gs:f===fh&&(u.mapping=$s),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ky(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xs("WebGLRenderer: "+n+" extension not supported."),i}}}function jy(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){let M=b[E+0],A=b[E+1],w=b[E+2];u.push(M,A,A,w,w,M)}}else{let b=g.array;_=g.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let M=E+0,A=E+1,w=E+2;u.push(M,A,A,w,w,M)}}let p=new(g.count>=65535?$o:Yo)(u,1);p.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function t3(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function e3(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function n3(r,t,e){let n=new WeakMap,i=new He;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*M*4*d),w=new Xo(A,y,M,d);w.type=Ji,w.needsUpdate=!0;let x=E*4;for(let C=0;C<d;C++){let I=p[C],P=m[C],O=b[C],D=y*M*4*C;for(let B=0;B<I.count;B++){let q=B*x;f===!0&&(i.fromBufferAttribute(I,B),A[D+q+0]=i.x,A[D+q+1]=i.y,A[D+q+2]=i.z,A[D+q+3]=0),g===!0&&(i.fromBufferAttribute(P,B),A[D+q+4]=i.x,A[D+q+5]=i.y,A[D+q+6]=i.z,A[D+q+7]=0),_===!0&&(i.fromBufferAttribute(O,B),A[D+q+8]=i.x,A[D+q+9]=i.y,A[D+q+10]=i.z,A[D+q+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:w,size:new we(y,M)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function i3(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var r3={[cd]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[ud]:"CINEON_TONE_MAPPING",[fd]:"ACES_FILMIC_TONE_MAPPING",[pd]:"AGX_TONE_MAPPING",[md]:"NEUTRAL_TONE_MAPPING",[dd]:"CUSTOM_TONE_MAPPING"};function s3(r,t,e,n,i,s){let a=new gn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Vn;c.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Oi([0,2,0,0,2,0],2));let h=new $c({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(c,h),u=new ps(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,b=[],E=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let A=0;A<b.length;A++){let w=b[A];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){b=y,E=b.length>0&&b[0].isRenderPass===!0;let M=a.width,A=a.height;b.length>0&&o===null&&(o=new gn(M,A,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),l=new gn(M,A,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let x=b[w];x.setSize&&x.setSize(M,A)}},this.begin=function(y,M){if(_||y.toneMapping===$i&&b.length===0)return!1;if(m=M,M!==null){let A=M.width,w=M.height;(a.width!==A||a.height!==w)&&this.setSize(A,w)}return E===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=$i,!0},this.hasRenderPass=function(){return E},this.end=function(y,M){y.toneMapping=p,_=!0;let A=a,w=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,w,A,M),T.needsSwap!==!1&&(A=w,w=w===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},me.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");let x=r3[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(m),y.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cg=new Ln,Vd=new hs(1,1),Lg=new Xo,Rg=new Wc,Pg=new Ko,cg=[],hg=[],ug=new Float32Array(16),fg=new Float32Array(9),dg=new Float32Array(4);function Ja(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=cg[i];if(s===void 0&&(s=new Float32Array(i),cg[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function _n(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ru(r,t){let e=hg[t];e===void 0&&(e=new Int32Array(t),hg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function a3(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function o3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;r.uniform2fv(this.addr,t),xn(e,t)}}function l3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;r.uniform3fv(this.addr,t),xn(e,t)}}function c3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;r.uniform4fv(this.addr,t),xn(e,t)}}function h3(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;dg.set(n),r.uniformMatrix2fv(this.addr,!1,dg),xn(e,n)}}function u3(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;fg.set(n),r.uniformMatrix3fv(this.addr,!1,fg),xn(e,n)}}function f3(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;ug.set(n),r.uniformMatrix4fv(this.addr,!1,ug),xn(e,n)}}function d3(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function p3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;r.uniform2iv(this.addr,t),xn(e,t)}}function m3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;r.uniform3iv(this.addr,t),xn(e,t)}}function g3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;r.uniform4iv(this.addr,t),xn(e,t)}}function _3(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function x3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;r.uniform2uiv(this.addr,t),xn(e,t)}}function v3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;r.uniform3uiv(this.addr,t),xn(e,t)}}function y3(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;r.uniform4uiv(this.addr,t),xn(e,t)}}function M3(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vd.compareFunction=e.isReversedDepthBuffer()?Jh:Zh,s=Vd):s=Cg,e.setTexture2D(t||s,i)}function S3(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rg,i)}function b3(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pg,i)}function w3(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lg,i)}function T3(r){switch(r){case 5126:return a3;case 35664:return o3;case 35665:return l3;case 35666:return c3;case 35674:return h3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return _3;case 36294:return x3;case 36295:return v3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return M3;case 35679:case 36299:case 36307:return S3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return w3}}function A3(r,t){r.uniform1fv(this.addr,t)}function E3(r,t){let e=Ja(t,this.size,2);r.uniform2fv(this.addr,e)}function C3(r,t){let e=Ja(t,this.size,3);r.uniform3fv(this.addr,e)}function L3(r,t){let e=Ja(t,this.size,4);r.uniform4fv(this.addr,e)}function R3(r,t){let e=Ja(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function P3(r,t){let e=Ja(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function I3(r,t){let e=Ja(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function D3(r,t){r.uniform1iv(this.addr,t)}function N3(r,t){r.uniform2iv(this.addr,t)}function U3(r,t){r.uniform3iv(this.addr,t)}function F3(r,t){r.uniform4iv(this.addr,t)}function O3(r,t){r.uniform1uiv(this.addr,t)}function B3(r,t){r.uniform2uiv(this.addr,t)}function k3(r,t){r.uniform3uiv(this.addr,t)}function z3(r,t){r.uniform4uiv(this.addr,t)}function Q3(r,t,e){let n=this.cache,i=t.length,s=ru(e,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Vd:a=Cg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function V3(r,t,e){let n=this.cache,i=t.length,s=ru(e,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Rg,s[a])}function G3(r,t,e){let n=this.cache,i=t.length,s=ru(e,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Pg,s[a])}function H3(r,t,e){let n=this.cache,i=t.length,s=ru(e,i);_n(n,s)||(r.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Lg,s[a])}function W3(r){switch(r){case 5126:return A3;case 35664:return E3;case 35665:return C3;case 35666:return L3;case 35674:return R3;case 35675:return P3;case 35676:return I3;case 5124:case 35670:return D3;case 35667:case 35671:return N3;case 35668:case 35672:return U3;case 35669:case 35673:return F3;case 5125:return O3;case 36294:return B3;case 36295:return k3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return V3;case 35680:case 36300:case 36308:case 36293:return G3;case 36289:case 36303:case 36311:case 36292:return H3}}var Gd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T3(e.type)}},Hd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W3(e.type)}},Wd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},zd=/(\w+)(\])?(\[|\.)?/g;function pg(r,t){r.seq.push(t),r.map[t.id]=t}function X3(r,t,e){let n=r.name,i=n.length;for(zd.lastIndex=0;;){let s=zd.exec(n),a=zd.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pg(e,c===void 0?new Gd(o,r,t):new Hd(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Wd(o),pg(e,d)),e=d}}}var Za=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);X3(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function mg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var q3=37297,Y3=0;function $3(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var gg=new te;function Z3(r){me._getMatrix(gg,me.workingColorSpace,r);let t=`mat3( ${gg.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case Go:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _g(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+$3(r.getShaderSource(t),o)}else return s}function J3(r,t){let e=Z3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var K3={[cd]:"Linear",[hd]:"Reinhard",[ud]:"Cineon",[fd]:"ACESFilmic",[pd]:"AgX",[md]:"Neutral",[dd]:"Custom"};function j3(r,t){let e=K3[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jh=new Q;function tM(){me.getLuminanceCoefficients(jh);let r=jh.x.toFixed(4),t=jh.y.toFixed(4),e=jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function nM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function vl(r){return r!==""}function xg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(r){return r.replace(rM,aM)}var sM=new Map;function aM(r,t){let e=ce[t];if(e===void 0){let n=sM.get(t);if(n!==void 0)e=ce[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xd(e)}var oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(r){return r.replace(oM,lM)}function lM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var cM={[il]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function hM(r){return cM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uM={[gs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function fM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var dM={[$s]:"ENVMAP_MODE_REFRACTION"};function pM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mM={[ld]:"ENVMAP_BLENDING_MULTIPLY",[Bm]:"ENVMAP_BLENDING_MIX",[km]:"ENVMAP_BLENDING_ADD"};function gM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":mM[r.combine]||"ENVMAP_BLENDING_NONE"}function _M(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=hM(e),c=fM(e),h=pM(e),d=gM(e),u=_M(e),f=eM(e),g=nM(s),_=i.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vl).join(`
`),m.length>0&&(m+=`
`)):(p=[Mg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),m=[Mg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?ce.tonemapping_pars_fragment:"",e.toneMapping!==$i?j3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,J3("linearToOutputTexel",e.outputColorSpace),tM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vl).join(`
`)),a=Xd(a),a=xg(a,e),a=vg(a,e),o=Xd(o),o=xg(o,e),o=vg(o,e),a=yg(a),o=yg(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=b+p+a,y=b+m+o,M=mg(i,i.VERTEX_SHADER,E),A=mg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(M)||"",D=i.getShaderInfoLog(A)||"",B=P.trim(),q=O.trim(),z=D.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,A);else{let L=_g(i,M,"vertex"),tt=_g(i,A,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+L+`
`+tt)}else B!==""?Jt("WebGLProgram: Program Info Log:",B):(q===""||z==="")&&(Y=!1);Y&&(I.diagnostics={runnable:K,programLog:B,vertexShader:{log:q,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(M),i.deleteShader(A),x=new Za(i,_),T=iM(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,q3)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y3++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}var vM=0,qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yd(t),e.set(t,n)),n}},Yd=class{constructor(t){this.id=vM++,this.code=t,this.usedTimes=0}};function yM(r){return r===xs||r===pl||r===ml}function MM(r,t,e,n,i,s){let a=new qo,o=new qd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,I,P,O){let D=I.fog,B=P.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||q,z),Y=K&&K.mapping===ll?K.image.height:null,L=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Tt=tt!==void 0?tt.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let Rt,Qt,$t,Z;if(L){let Pt=_r[L];Rt=Pt.vertexShader,Qt=Pt.fragmentShader}else{Rt=x.vertexShader,Qt=x.fragmentShader;let Pt=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,Pt,st),$t=Pt.id,Z=st.id}let nt=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Gt=P.isInstancedMesh===!0,_t=P.isBatchedMesh===!0,Ht=!!x.map,yt=!!x.matcap,wt=!!K,qt=!!x.aoMap,re=!!x.lightMap,V=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,Te=!!x.displacementMap,ze=!!x.emissiveMap,Xt=!!x.metalnessMap,xe=!!x.roughnessMap,F=x.anisotropy>0,Ie=x.clearcoat>0,Yt=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,G=x.transmission>0,J=F&&!!x.anisotropyMap,ct=Ie&&!!x.clearcoatMap,at=Ie&&!!x.clearcoatNormalMap,$=Ie&&!!x.clearcoatRoughnessMap,j=v&&!!x.iridescenceMap,pt=v&&!!x.iridescenceThicknessMap,Lt=k&&!!x.sheenColorMap,mt=k&&!!x.sheenRoughnessMap,ut=!!x.specularMap,lt=!!x.specularColorMap,Ft=!!x.specularIntensityMap,Vt=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,ht=!!x.gradientMap,et=!!x.alphaMap,ft=x.alphaTest>0,xt=!!x.alphaHash,it=!!x.extensions,ot=$i;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ot=r.toneMapping);let rt={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Rt,fragmentShader:Qt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:_t,batchingColor:_t&&P._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&P.instanceColor!==null,instancingMorph:Gt&&P.morphTexture!==null,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:yt,envMap:wt,envMapMode:wt&&K.mapping,envMapCubeUVHeight:Y,aoMap:qt,lightMap:re,bumpMap:V,normalMap:ee,displacementMap:Te,emissiveMap:ze,normalMapObjectSpace:ee&&x.normalMapType===Vm,normalMapTangentSpace:ee&&x.normalMapType===wd,packedNormalMap:ee&&x.normalMapType===wd&&yM(x.normalMap.format),metalnessMap:Xt,roughnessMap:xe,anisotropy:F,anisotropyMap:J,clearcoat:Ie,clearcoatMap:ct,clearcoatNormalMap:at,clearcoatRoughnessMap:$,dispersion:Yt,retroreflection:R,iridescence:v,iridescenceMap:j,iridescenceThicknessMap:pt,sheen:k,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:ut,specularColorMap:lt,specularIntensityMap:Ft,transmission:G,transmissionMap:Vt,thicknessMap:U,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Wa&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:ft,alphaHash:xt,combine:x.combine,mapUv:Ht&&g(x.map.channel),aoMapUv:qt&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:ee&&g(x.normalMap.channel),displacementMapUv:Te&&g(x.displacementMap.channel),emissiveMapUv:ze&&g(x.emissiveMap.channel),metalnessMapUv:Xt&&g(x.metalnessMap.channel),roughnessMapUv:xe&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ft&&g(x.specularIntensityMap.channel),transmissionMapUv:Vt&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:et&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Ht||et),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===Ee,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===Ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(T,x),b(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=f[x.type],C;if(T){let I=_r[T];C=ng.clone(I.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new xM(r,T,x,i),c.push(C),h.set(T,C)),C}function M(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:w}}function SM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Sg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let b=r[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=p,b.group=m),t++,b}function l(u,f,g,_,p,m,b){b.reversedDepth===!0&&(p=-p);let E=o(u,f,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):e.push(E)}function c(u,f,g,_,p,m){let b=o(u,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||bM),n.length>1&&n.sort(f||Sg),i.length>1&&i.sort(f||Sg)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function wM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new bg,r.set(n,[a])):i>=s.length?(a=new bg,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function TM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Me};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=e,e}}}function AM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var EM=0;function CM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function LM(r){let t=new TM,e=AM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);let i=new Q,s=new tn,a=new tn;function o(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,E=0,y=0,M=0,A=0,w=0,x=0,T=0,C=0;c.sort(CM);for(let P=0,O=c.length;P<O;P++){let D=c[P],B=D.color,q=D.intensity,z=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],q);C++}else if(D.isSunLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let L=D.shadow,tt=e.get(D);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=K;let Tt=L.getViewportCount();for(let At=0;At<Tt;At++)n.sunShadowMatrix[_+At]=L.getMatrix(At),n.sunShadowCascade[_+At]=L._cascadeData[At];_+=Tt,g++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let L=D.shadow,tt=e.get(D);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=Y,p++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[b]=Y;let L=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,L.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=L.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=K,w++}b++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=Y,E++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let L=D.shadow,tt=e.get(D);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,tt.shadowCameraNear=L.camera.near,tt.shadowCameraFar=L.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=D.shadow.matrix,A++}n.point[m]=Y,m++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(q),Y.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[y]=Y,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==E||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=b,I.rectAreaLength=E,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=C,n.version=EM++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let y=c[b];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function wg(r){let t=new LM(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function RM(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new wg(r),t.set(i,[o])):s>=a.length?(o=new wg(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DM=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],NM=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Tg=new tn,xl=new Q,Qd=new Q;function UM(r,t,e){let n=new Jo,i=new we,s=new we,a=new He,o=new Zc,l=new Jc,c={},h=e.maxTextureSize,d={[ms]:Rn,[Rn]:ms,[jn]:jn},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:PM,fragmentShader:IM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Vn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let m=this.type;this.render=function(A,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===wm&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),P=r.state;P.setBlending(pr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=m!==this.type;O&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=A.length;D<B;D++){let q=A[D],z=q.shadow;if(z===void 0){Jt("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let K=z.getFrameExtents();i.multiply(K),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,z.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ha){if(q.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gn(i.x,i.y,{format:xs,type:Ki,minFilter:ke,magFilter:ke,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new hs(i.x,i.y,Ji),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=ur,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else q.isPointLight?(z.map=new eu(i.x),z.map.depthTexture=new Yc(i.x,Zi)):(z.map=new gn(i.x,i.y),z.map.depthTexture=new hs(i.x,i.y,Zi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=ur,this.type===il?(z.map.depthTexture.compareFunction=Y?Jh:Zh,z.map.depthTexture.minFilter=ke,z.map.depthTexture.magFilter=ke):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let L=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,x);for(let tt=0;tt<L;tt++){let Tt=z.getCamera(tt);if(q.isPointLight){let At=z.camera,Rt=z.matrix,Qt=q.distance||At.far;Qt!==At.far&&(At.far=Qt,At.updateProjectionMatrix()),xl.setFromMatrixPosition(q.matrixWorld),At.position.copy(xl),Qd.copy(At.position),Qd.add(DM[tt]),At.up.copy(NM[tt]),At.lookAt(Qd),At.updateMatrixWorld(),Rt.makeTranslation(-xl.x,-xl.y,-xl.z),Tg.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Tg,At.coordinateSystem,At.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(z.map),r.clear());let At=z.getViewport(tt);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),P.viewport(a)}n=z.getFrustum(tt),y(w,x,Tt,q,this.type)}z.isPointLightShadow!==!0&&this.type===Ha&&b(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,C,I)};function b(A,w){let x=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new gn(i.x,i.y,{format:xs,type:Ki}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,x,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function E(A,w,x,T){let C=null,I=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=C.uuid,O=w.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let B=D[O];B===void 0&&(B=C.clone(),D[O]=B,w.addEventListener("dispose",M)),C=B}if(C.visible=w.visible,C.wireframe=w.wireframe,T===Ha?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=r.properties.get(C);P.light=x}return C}function y(A,w,x,T,C){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Ha)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let O=t.update(A),D=A.material;if(Array.isArray(D)){let B=O.groups;for(let q=0,z=B.length;q<z;q++){let K=B[q],Y=D[K.materialIndex];if(Y&&Y.visible){let L=E(A,Y,T,C);A.onBeforeShadow(r,A,w,x,O,L,K),r.renderBufferDirect(x,null,O,L,A,K),A.onAfterShadow(r,A,w,x,O,L,K)}}}else if(D.visible){let B=E(A,D,T,C);A.onBeforeShadow(r,A,w,x,O,B,null),r.renderBufferDirect(x,null,O,B,A,null),A.onAfterShadow(r,A,w,x,O,B,null)}}let P=A.children;for(let O=0,D=P.length;O<D;O++)y(P[O],w,x,T,C)}function M(A){A.target.removeEventListener("dispose",M);for(let x in c){let T=c[x],C=A.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function FM(r,t){function e(){let U=!1,ht=new He,et=null,ft=new He(0,0,0,0);return{setMask:function(xt){et!==xt&&!U&&(r.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){U=xt},setClear:function(xt,it,ot,rt,Pt){Pt===!0&&(xt*=rt,it*=rt,ot*=rt),ht.set(xt,it,ot,rt),ft.equals(ht)===!1&&(r.clearColor(xt,it,ot,rt),ft.copy(ht))},reset:function(){U=!1,et=null,ft.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,et=null,ft=null,xt=null;return{setReversed:function(it){if(ht!==it){let ot=t.get("EXT_clip_control");it?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let rt=xt;xt=null,this.setClear(rt)}},getReversed:function(){return ht},setTest:function(it){it?nt(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(it){et!==it&&!U&&(r.depthMask(it),et=it)},setFunc:function(it){if(ht&&(it=tg[it]),ft!==it){switch(it){case Dc:r.depthFunc(r.NEVER);break;case Nc:r.depthFunc(r.ALWAYS);break;case Uc:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case Fc:r.depthFunc(r.EQUAL);break;case Oc:r.depthFunc(r.GEQUAL);break;case Bc:r.depthFunc(r.GREATER);break;case kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=it}},setLocked:function(it){U=it},setClear:function(it){xt!==it&&(xt=it,ht&&(it=1-it),r.clearDepth(it))},reset:function(){U=!1,et=null,ft=null,xt=null,ht=!1}}}function i(){let U=!1,ht=null,et=null,ft=null,xt=null,it=null,ot=null,rt=null,Pt=null;return{setTest:function(st){U||(st?nt(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(st){ht!==st&&!U&&(r.stencilMask(st),ht=st)},setFunc:function(st,Ot,It){(et!==st||ft!==Ot||xt!==It)&&(r.stencilFunc(st,Ot,It),et=st,ft=Ot,xt=It)},setOp:function(st,Ot,It){(it!==st||ot!==Ot||rt!==It)&&(r.stencilOp(st,Ot,It),it=st,ot=Ot,rt=It)},setLocked:function(st){U=st},setClear:function(st){Pt!==st&&(r.clearStencil(st),Pt=st)},reset:function(){U=!1,ht=null,et=null,ft=null,xt=null,it=null,ot=null,rt=null,Pt=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,E=null,y=null,M=null,A=null,w=null,x=new Me(0,0,0),T=0,C=!1,I=null,P=null,O=null,D=null,B=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let L=null,tt={},Tt=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Rt=new He().fromArray(Tt),Qt=new He().fromArray(At);function $t(U,ht,et,ft){let xt=new Uint8Array(4),it=r.createTexture();r.bindTexture(U,it),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<et;ot++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ht+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return it}let Z={};Z[r.TEXTURE_2D]=$t(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=$t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=$t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=$t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(Oa),V(!1),ee(nd),nt(r.CULL_FACE),qt(pr);function nt(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function dt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Gt(U,ht){return u[U]!==ht?(r.bindFramebuffer(U,ht),u[U]=ht,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function _t(U,ht){let et=g,ft=!1;if(U){et=f.get(ht),et===void 0&&(et=[],f.set(ht,et));let xt=U.textures;if(et.length!==xt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,ot=xt.length;it<ot;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=xt.length,ft=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,ft=!0);ft&&r.drawBuffers(et)}function Ht(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let yt={[mr]:r.FUNC_ADD,[Tm]:r.FUNC_SUBTRACT,[Am]:r.FUNC_REVERSE_SUBTRACT};yt[sl]=r.MIN,yt[Em]=r.MAX;let wt={[al]:r.ZERO,[Ys]:r.ONE,[ol]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[Dm]:r.SRC_ALPHA_SATURATE,[Pm]:r.DST_COLOR,[Lm]:r.DST_ALPHA,[Cm]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[Im]:r.ONE_MINUS_DST_COLOR,[Rm]:r.ONE_MINUS_DST_ALPHA,[Nm]:r.CONSTANT_COLOR,[Um]:r.ONE_MINUS_CONSTANT_COLOR,[Fm]:r.CONSTANT_ALPHA,[Om]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(U,ht,et,ft,xt,it,ot,rt,Pt,st){if(U===pr){p===!0&&(dt(r.BLEND),p=!1);return}if(p===!1&&(nt(r.BLEND),p=!0),U!==rl){if(U!==m||st!==C){if((b!==mr||M!==mr)&&(r.blendEquation(r.FUNC_ADD),b=mr,M=mr),st)switch(U){case Wa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case id:r.blendFunc(r.ONE,r.ONE);break;case rd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:jt("WebGLState: Invalid blending: ",U);break}else switch(U){case Wa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case id:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rd:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sd:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",U);break}E=null,y=null,A=null,w=null,x.set(0,0,0),T=0,m=U,C=st}return}xt=xt||ht,it=it||et,ot=ot||ft,(ht!==b||xt!==M)&&(r.blendEquationSeparate(yt[ht],yt[xt]),b=ht,M=xt),(et!==E||ft!==y||it!==A||ot!==w)&&(r.blendFuncSeparate(wt[et],wt[ft],wt[it],wt[ot]),E=et,y=ft,A=it,w=ot),(rt.equals(x)===!1||Pt!==T)&&(r.blendColor(rt.r,rt.g,rt.b,Pt),x.copy(rt),T=Pt),m=U,C=!1}function re(U,ht){U.side===jn?dt(r.CULL_FACE):nt(r.CULL_FACE);let et=U.side===Rn;ht&&(et=!et),V(et),U.blending===Wa&&U.transparent===!1?qt(pr):qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(U){I!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),I=U)}function ee(U){U!==Sm?(nt(r.CULL_FACE),U!==P&&(U===nd?r.cullFace(r.BACK):U===bm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),P=U}function Te(U){U!==O&&(z&&r.lineWidth(U),O=U)}function ze(U,ht,et){U?(nt(r.POLYGON_OFFSET_FILL),(D!==ht||B!==et)&&(D=ht,B=et,a.getReversed()&&(ht=-ht),r.polygonOffset(ht,et))):dt(r.POLYGON_OFFSET_FILL)}function Xt(U){U?nt(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function xe(U){U===void 0&&(U=r.TEXTURE0+q-1),L!==U&&(r.activeTexture(U),L=U)}function F(U,ht,et){et===void 0&&(L===null?et=r.TEXTURE0+q-1:et=L);let ft=tt[et];ft===void 0&&(ft={type:void 0,texture:void 0},tt[et]=ft),(ft.type!==U||ft.texture!==ht)&&(L!==et&&(r.activeTexture(et),L=et),r.bindTexture(U,ht||Z[U]),ft.type=U,ft.texture=ht)}function Ie(){let U=tt[L];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Yt(){try{r.compressedTexImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function v(){try{r.texSubImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function k(){try{r.texSubImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function ct(){try{r.texStorage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function at(){try{r.texStorage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function $(){try{r.texImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function j(){try{r.texImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function pt(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Lt(U,ht){d[U]!==ht&&(r.pixelStorei(U,ht),d[U]=ht)}function mt(U){Rt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function ut(U){Qt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Qt.copy(U))}function lt(U,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let ft=et.get(U);ft===void 0&&(ft=r.getUniformBlockIndex(ht,U.name),et.set(U,ft))}function Ft(U,ht){let ft=c.get(ht).get(U);l.get(ht)!==ft&&(r.uniformBlockBinding(ht,ft,U.__bindingPointIndex),l.set(ht,ft))}function Vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},L=null,tt={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,E=null,y=null,M=null,A=null,w=null,x=new Me(0,0,0),T=0,C=!1,I=null,P=null,O=null,D=null,B=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Qt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:dt,bindFramebuffer:Gt,drawBuffers:_t,useProgram:Ht,setBlending:qt,setMaterial:re,setFlipSided:V,setCullFace:ee,setLineWidth:Te,setPolygonOffset:ze,setScissorTest:Xt,activeTexture:xe,bindTexture:F,unbindTexture:Ie,compressedTexImage2D:Yt,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Lt,getParameter:pt,updateUBOMapping:lt,uniformBlockBinding:Ft,texStorage2D:ct,texStorage3D:at,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:mt,viewport:ut,reset:Vt}}function OM(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):Wo("canvas")}function p(R,v,k){let G=1,J=Yt(R);if((J.width>k||J.height>k)&&(G=k/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(G*J.width),at=Math.floor(G*J.height);u===void 0&&(u=_(ct,at));let $=v?_(ct,at):u;return $.width=ct,$.height=at,$.getContext("2d").drawImage(R,0,0,ct,at),Jt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ct+"x"+at+")."),$}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function b(R){r.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,v,k,G,J,ct=!1){if(R!==null){if(r[R]!==void 0)return r[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8),k===r.UNSIGNED_SHORT&&at&&($=at.R16_EXT),k===r.SHORT&&at&&($=at.R16_SNORM_EXT)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),v===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8),k===r.UNSIGNED_SHORT&&at&&($=at.RG16_EXT),k===r.SHORT&&at&&($=at.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),v===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),v===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),v===r.RGB&&(k===r.UNSIGNED_SHORT&&at&&($=at.RGB16_EXT),k===r.SHORT&&at&&($=at.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),v===r.RGBA){let j=ct?Go:me.getTransfer(J);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=j===Ee?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&at&&($=at.RGBA16_EXT),k===r.SHORT&&at&&($=at.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(R,v){let k;return R?v===null||v===Zi||v===qa?k=r.DEPTH24_STENCIL8:v===Ji?k=r.DEPTH32F_STENCIL8:v===Xa&&(k=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zi||v===qa?k=r.DEPTH_COMPONENT24:v===Ji?k=r.DEPTH_COMPONENT32F:v===Xa&&(k=r.DEPTH_COMPONENT16),k}function A(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){let v=R.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){let v=R.target;v.removeEventListener("dispose",x),I(v)}function T(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,G=f.get(k);if(G){let J=G[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(G).length===0&&f.delete(k)}n.remove(R)}function C(R){let v=n.get(R);r.deleteTexture(v.__webglTexture);let k=R.source,G=f.get(k);delete G[v.__cacheKey],a.memory.textures--}function I(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let J=0;J<v.__webglFramebuffer[G].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[G][J]);else r.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)r.deleteFramebuffer(v.__webglFramebuffer[G]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let G=0,J=k.length;G<J;G++){let ct=n.get(k[G]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(k[G])}n.remove(R)}let P=0;function O(){P=0}function D(){return P}function B(R){P=R}function q(){let R=P;return R>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function z(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function K(R,v){let k=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let G=R.image;if(G===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function Y(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){dt(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function L(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){dt(k,R,v);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function tt(R,v){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Gt(k,R,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}let Tt={[as]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[zc]:r.MIRRORED_REPEAT},At={[wn]:r.NEAREST,[zm]:r.NEAREST_MIPMAP_NEAREST,[cl]:r.NEAREST_MIPMAP_LINEAR,[ke]:r.LINEAR,[dh]:r.LINEAR_MIPMAP_NEAREST,[bi]:r.LINEAR_MIPMAP_LINEAR},Rt={[Hm]:r.NEVER,[$m]:r.ALWAYS,[Wm]:r.LESS,[Zh]:r.LEQUAL,[Xm]:r.EQUAL,[Jh]:r.GEQUAL,[qm]:r.GREATER,[Ym]:r.NOTEQUAL};function Qt(R,v){if(v.type===Ji&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===dh||v.magFilter===cl||v.magFilter===bi||v.minFilter===ke||v.minFilter===dh||v.minFilter===cl||v.minFilter===bi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Tt[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Tt[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Tt[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,At[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==cl&&v.minFilter!==bi||v.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));let G=v.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let ct=z(v);if(ct!==R.__cacheKey){J[ct]===void 0&&(J[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[ct].usedTimes++;let at=J[R.__cacheKey];at!==void 0&&(J[R.__cacheKey].usedTimes--,at.usedTimes===0&&C(v)),R.__cacheKey=ct,R.__webglTexture=J[ct].texture}return k}function Z(R,v,k){return Math.floor(Math.floor(R/k)/v)}function nt(R,v,k,G){let ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,k,G,v.data);else{ct.sort((Lt,mt)=>Lt.start-mt.start);let at=0;for(let Lt=1;Lt<ct.length;Lt++){let mt=ct[at],ut=ct[Lt],lt=mt.start+mt.count,Ft=Z(ut.start,v.width,4),Vt=Z(mt.start,v.width,4);ut.start<=lt+1&&Ft===Vt&&Z(ut.start+ut.count-1,v.width,4)===Ft?mt.count=Math.max(mt.count,ut.start+ut.count-mt.start):(++at,ct[at]=ut)}ct.length=at+1;let $=e.getParameter(r.UNPACK_ROW_LENGTH),j=e.getParameter(r.UNPACK_SKIP_PIXELS),pt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Lt=0,mt=ct.length;Lt<mt;Lt++){let ut=ct[Lt],lt=Math.floor(ut.start/4),Ft=Math.ceil(ut.count/4),Vt=lt%v.width,U=Math.floor(lt/v.width),ht=Ft,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,Vt,U,ht,et,k,G,v.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,$),e.pixelStorei(r.UNPACK_SKIP_PIXELS,j),e.pixelStorei(r.UNPACK_SKIP_ROWS,pt)}}function dt(R,v,k){let G=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=r.TEXTURE_3D);let J=$t(R,v),ct=v.source;e.bindTexture(G,R.__webglTexture,r.TEXTURE0+k);let at=n.get(ct);if(ct.version!==at.__version||J===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=me.getPrimaries(me.workingColorSpace),ft=v.colorSpace===Ti?null:me.getPrimaries(v.colorSpace),xt=v.colorSpace===Ti||et===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let j=p(v.image,!1,i.maxTextureSize);j=Ie(v,j);let pt=s.convert(v.format,v.colorSpace),Lt=s.convert(v.type),mt=y(v.internalFormat,pt,Lt,v.normalized,v.colorSpace,v.isVideoTexture);Qt(G,v);let ut,lt=v.mipmaps,Ft=v.isVideoTexture!==!0,Vt=at.__version===void 0||J===!0,U=ct.dataReady,ht=A(v,j);if(v.isDepthTexture)mt=M(v.format===_s,v.type),Vt&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,mt,j.width,j.height):e.texImage2D(r.TEXTURE_2D,0,mt,j.width,j.height,0,pt,Lt,null));else if(v.isDataTexture)if(lt.length>0){Ft&&Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,lt[0].width,lt[0].height);for(let et=0,ft=lt.length;et<ft;et++)ut=lt[et],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Lt,ut.data):e.texImage2D(r.TEXTURE_2D,et,mt,ut.width,ut.height,0,pt,Lt,ut.data);v.generateMipmaps=!1}else Ft?(Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,j.width,j.height),U&&nt(v,j,pt,Lt)):e.texImage2D(r.TEXTURE_2D,0,mt,j.width,j.height,0,pt,Lt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,mt,lt[0].width,lt[0].height,j.depth);for(let et=0,ft=lt.length;et<ft;et++)if(ut=lt[et],v.format!==ki)if(pt!==null)if(Ft){if(U)if(v.layerUpdates.size>0){let xt=Rd(ut.width,ut.height,v.format,v.type);for(let it of v.layerUpdates){let ot=ut.data.subarray(it*xt/ut.data.BYTES_PER_ELEMENT,(it+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,ut.width,ut.height,1,pt,ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,j.depth,pt,ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,mt,ut.width,ut.height,j.depth,0,ut.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,j.depth,pt,Lt,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,mt,ut.width,ut.height,j.depth,0,pt,Lt,ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ft&&Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,lt[0].width,lt[0].height);for(let et=0,ft=lt.length;et<ft;et++)ut=lt[et],v.format!==ki?pt!==null?Ft?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,et,mt,ut.width,ut.height,0,ut.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Lt,ut.data):e.texImage2D(r.TEXTURE_2D,et,mt,ut.width,ut.height,0,pt,Lt,ut.data)}else if(v.isDataArrayTexture)if(Ft){if(Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,mt,j.width,j.height,j.depth),U)if(v.layerUpdates.size>0){let et=Rd(j.width,j.height,v.format,v.type);for(let ft of v.layerUpdates){let xt=j.data.subarray(ft*et/j.data.BYTES_PER_ELEMENT,(ft+1)*et/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,j.width,j.height,1,pt,Lt,xt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Lt,j.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,j.width,j.height,j.depth,0,pt,Lt,j.data);else if(v.isData3DTexture)Ft?(Vt&&e.texStorage3D(r.TEXTURE_3D,ht,mt,j.width,j.height,j.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Lt,j.data)):e.texImage3D(r.TEXTURE_3D,0,mt,j.width,j.height,j.depth,0,pt,Lt,j.data);else if(v.isFramebufferTexture){if(Vt)if(Ft)e.texStorage2D(r.TEXTURE_2D,ht,mt,j.width,j.height);else{let et=j.width,ft=j.height;for(let xt=0;xt<ht;xt++)e.texImage2D(r.TEXTURE_2D,xt,mt,et,ft,0,pt,Lt,null),et>>=1,ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),j.parentNode!==et){et.appendChild(j),d.add(v),et.onpaint=ft=>{let xt=ft.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let xt=r.RGBA,it=r.RGBA,ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,it,ot,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Ft&&Vt){let et=Yt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ht,mt,et.width,et.height)}for(let et=0,ft=lt.length;et<ft;et++)ut=lt[et],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt,Lt,ut):e.texImage2D(r.TEXTURE_2D,et,mt,pt,Lt,ut);v.generateMipmaps=!1}else if(Ft){if(Vt){let et=Yt(j);e.texStorage2D(r.TEXTURE_2D,ht,mt,et.width,et.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Lt,j)}else e.texImage2D(r.TEXTURE_2D,0,mt,pt,Lt,j);m(v)&&b(G),at.__version=ct.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Gt(R,v,k){if(v.image.length!==6)return;let G=$t(R,v),J=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);let ct=n.get(J);if(J.version!==ct.__version||G===!0){e.activeTexture(r.TEXTURE0+k);let at=me.getPrimaries(me.workingColorSpace),$=v.colorSpace===Ti?null:me.getPrimaries(v.colorSpace),j=v.colorSpace===Ti||at===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pt=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!pt&&!Lt?mt[it]=p(v.image[it],!0,i.maxCubemapSize):mt[it]=Lt?v.image[it].image:v.image[it],mt[it]=Ie(v,mt[it]);let ut=mt[0],lt=s.convert(v.format,v.colorSpace),Ft=s.convert(v.type),Vt=y(v.internalFormat,lt,Ft,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,ht=ct.__version===void 0||G===!0,et=J.dataReady,ft=A(v,ut);Qt(r.TEXTURE_CUBE_MAP,v);let xt;if(pt){U&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Vt,ut.width,ut.height);for(let it=0;it<6;it++){xt=mt[it].mipmaps;for(let ot=0;ot<xt.length;ot++){let rt=xt[ot];v.format!==ki?lt!==null?U?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,Vt,rt.width,rt.height,0,rt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,Ft,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,Vt,rt.width,rt.height,0,lt,Ft,rt.data)}}}else{if(xt=v.mipmaps,U&&ht){xt.length>0&&ft++;let it=Yt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){U?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,lt,Ft,mt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,mt[it].width,mt[it].height,0,lt,Ft,mt[it].data);for(let ot=0;ot<xt.length;ot++){let Pt=xt[ot].image[it].image;U?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,Pt.width,Pt.height,lt,Ft,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,Vt,Pt.width,Pt.height,0,lt,Ft,Pt.data)}}else{U?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Ft,mt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,lt,Ft,mt[it]);for(let ot=0;ot<xt.length;ot++){let rt=xt[ot];U?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,lt,Ft,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,Vt,lt,Ft,rt.image[it])}}}m(v)&&b(r.TEXTURE_CUBE_MAP),ct.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _t(R,v,k,G,J,ct){let at=s.convert(k.format,k.colorSpace),$=s.convert(k.type),j=y(k.internalFormat,at,$,k.normalized,k.colorSpace),pt=n.get(v),Lt=n.get(k);if(Lt.__renderTarget=v,!pt.__hasExternalTextures){let mt=Math.max(1,v.width>>ct),ut=Math.max(1,v.height>>ct);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,ct,j,mt,ut,v.depth,0,at,$,null):e.texImage2D(J,ct,j,mt,ut,0,at,$,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,J,Lt.__webglTexture,0,Xt(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,J,Lt.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(R,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){let G=v.depthTexture,J=G&&G.isDepthTexture?G.type:null,ct=M(v.stencilBuffer,J),at=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt(v),ct,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt(v),ct,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ct,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,R)}else{let G=v.textures;for(let J=0;J<G.length;J++){let ct=G[J],at=s.convert(ct.format,ct.colorSpace),$=s.convert(ct.type),j=y(ct.internalFormat,at,$,ct.normalized,ct.colorSpace);xe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt(v),j,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt(v),j,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(R,v,k){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Qt(r.TEXTURE_CUBE_MAP,v.depthTexture);let pt=s.convert(v.depthTexture.format),Lt=s.convert(v.depthTexture.type),mt;v.depthTexture.format===ur?mt=r.DEPTH_COMPONENT24:v.depthTexture.format===_s&&(mt=r.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,mt,v.width,v.height,0,pt,Lt,null)}}else K(v.depthTexture,0);let ct=J.__webglTexture,at=Xt(v),$=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,j=v.depthTexture.format===_s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===ur)xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ct,0);else if(v.depthTexture.format===_s)xe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=G}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)yt(v.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?yt(v.__webglFramebuffer[0],R,0):yt(v.__webglFramebuffer,R,0)}else if(k){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=r.createRenderbuffer(),Ht(v.__webglDepthbuffer[G],R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ct)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ht(v.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(R,v,k){let G=n.get(R);v!==void 0&&_t(G.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&wt(R)}function re(R){let v=R.texture,k=n.get(R),G=n.get(v);R.addEventListener("dispose",x);let J=R.textures,ct=R.isWebGLCubeRenderTarget===!0,at=J.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=v.version,a.memory.textures++),ct){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<v.mipmaps.length;j++)k.__webglFramebuffer[$][j]=r.createFramebuffer()}else k.__webglFramebuffer[$]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[$]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(at)for(let $=0,j=J.length;$<j;$++){let pt=n.get(J[$]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let j=J[$];k.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let pt=s.convert(j.format,j.colorSpace),Lt=s.convert(j.type),mt=y(j.internalFormat,pt,Lt,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ut=Xt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,mt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,k.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Qt(r.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)_t(k.__webglFramebuffer[$][j],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else _t(k.__webglFramebuffer[$],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(v)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let $=0,j=J.length;$<j;$++){let pt=J[$],Lt=n.get(pt),mt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,Lt.__webglTexture),Qt(mt,pt),_t(k.__webglFramebuffer,R,pt,r.COLOR_ATTACHMENT0+$,mt,0),m(pt)&&b(mt)}e.unbindTexture()}else{let $=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),Qt($,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)_t(k.__webglFramebuffer[j],R,v,r.COLOR_ATTACHMENT0,$,j);else _t(k.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,$,0);m(v)&&b($),e.unbindTexture()}R.depthBuffer&&wt(R)}function V(R){let v=R.textures;for(let k=0,G=v.length;k<G;k++){let J=v[k];if(m(J)){let ct=E(R),at=n.get(J).__webglTexture;e.bindTexture(ct,at),b(ct),e.unbindTexture()}}}let ee=[],Te=[];function ze(R){if(R.samples>0){if(xe(R)===!1){let v=R.textures,k=R.width,G=R.height,J=r.COLOR_BUFFER_BIT,ct=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(R),$=v.length>1;if($)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);let Lt=n.get(v[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Lt,0)}r.blitFramebuffer(0,0,k,G,0,0,k,G,J,r.NEAREST),l===!0&&(ee.length=0,Te.length=0,ee.push(r.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ee.push(ct),Te.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);let Lt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Xt(R){return Math.min(i.maxSamples,R.samples)}function xe(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ie(R,v){let k=R.colorSpace,G=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Vo&&k!==Ti&&(me.getTransfer(k)===Ee?(G!==ki||J!==wi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),v}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=tt,this.rebindTextures=qt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function BM(r,t){function e(n,i=Ti){let s,a=me.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===mh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===_d)return r.BYTE;if(n===xd)return r.SHORT;if(n===Xa)return r.UNSIGNED_SHORT;if(n===ph)return r.INT;if(n===Zi)return r.UNSIGNED_INT;if(n===Ji)return r.FLOAT;if(n===Ki)return r.HALF_FLOAT;if(n===Md)return r.ALPHA;if(n===Sd)return r.RGB;if(n===ki)return r.RGBA;if(n===ur)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===bd)return r.RED;if(n===_h)return r.RED_INTEGER;if(n===xs)return r.RG;if(n===xh)return r.RG_INTEGER;if(n===vh)return r.RGBA_INTEGER;if(n===hl||n===ul||n===fl||n===dl)if(a===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yh||n===Mh||n===Sh||n===bh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wh||n===Th||n===Ah||n===Eh||n===Ch||n===pl||n===Lh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wh||n===Th)return a===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ah)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eh)return s.COMPRESSED_R11_EAC;if(n===Ch)return s.COMPRESSED_SIGNED_R11_EAC;if(n===pl)return s.COMPRESSED_RG11_EAC;if(n===Lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rh||n===Ph||n===Ih||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===Qh||n===Vh||n===Gh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ph)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hh||n===Wh||n===Xh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Hh)return a===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Yh||n===ml||n===$h)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===qh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:kM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new tl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zd=class extends fr{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new $d,m={},b=e.getContextAttributes(),E=null,y=null,M=[],A=[],w=new we,x=null,T=null,C=new Qn;C.viewport=new He;let I=new Qn;I.viewport=new He;let P=[C,I],O=new ch,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=M[Z];return nt===void 0&&(nt=new za,M[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=M[Z];return nt===void 0&&(nt=new za,M[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=M[Z];return nt===void 0&&(nt=new za,M[Z]=nt),nt.getHandSpace()};function q(Z){let nt=A.indexOf(Z.inputSource);if(nt===-1)return;let dt=M[nt];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,c||a),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<M.length;Z++){let nt=A[Z];nt!==null&&(A[Z]=null,M[Z].disconnect(nt))}D=null,B=null,p.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Gt=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=b.stencil?_s:ur,Gt=b.stencil?qa:Zi);let Ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new gn(u.textureWidth,u.textureHeight,{format:ki,type:wi,depthTexture:new hs(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new gn(f.framebufferWidth,f.framebufferHeight,{format:ki,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Z){for(let nt=0;nt<Z.removed.length;nt++){let dt=Z.removed[nt],Gt=A.indexOf(dt);Gt>=0&&(A[Gt]=null,M[Gt].disconnect(dt))}for(let nt=0;nt<Z.added.length;nt++){let dt=Z.added[nt],Gt=A.indexOf(dt);if(Gt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=A.length){A.push(dt),Gt=Ht;break}else if(A[Ht]===null){A[Ht]=dt,Gt=Ht;break}if(Gt===-1)break}let _t=M[Gt];_t&&_t.connect(dt)}}let Y=new Q,L=new Q;function tt(Z,nt,dt){Y.setFromMatrixPosition(nt.matrixWorld),L.setFromMatrixPosition(dt.matrixWorld);let Gt=Y.distanceTo(L),_t=nt.projectionMatrix.elements,Ht=dt.projectionMatrix.elements,yt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),qt=(_t[9]+1)/_t[5],re=(_t[9]-1)/_t[5],V=(_t[8]-1)/_t[0],ee=(Ht[8]+1)/Ht[0],Te=yt*V,ze=yt*ee,Xt=Gt/(-V+ee),xe=Xt*-V;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xe),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let F=yt+Xt,Ie=wt+Xt,Yt=Te-xe,R=ze+(Gt-xe),v=qt*wt/Ie*F,k=re*wt/Ie*F;Z.projectionMatrix.makePerspective(Yt,R,v,k,F,Ie),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Tt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let nt=Z.near,dt=Z.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(dt=p.depthFar)),O.near=I.near=C.near=nt,O.far=I.far=C.far=dt,(D!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Gt=Z.parent,_t=O.cameras;Tt(O,Gt);for(let Ht=0;Ht<_t.length;Ht++)Tt(_t[Ht],Gt);_t.length===2?tt(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),At(Z,O,Gt)};function At(Z,nt,dt){dt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let Rt=null;function Qt(Z,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Gt=!1;dt.length!==O.cameras.length&&(O.cameras.length=0,Gt=!0);for(let wt=0;wt<dt.length;wt++){let qt=dt[wt],re=null;if(f!==null)re=f.getViewport(qt);else{let ee=d.getViewSubImage(u,qt);re=ee.viewport,wt===0&&(t.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(y))}let V=P[wt];V===void 0&&(V=new Qn,V.layers.enable(wt),V.viewport=new He,P[wt]=V),V.matrix.fromArray(qt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(qt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(re.x,re.y,re.width,re.height),wt===0&&(O.matrix.copy(V.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Gt===!0&&O.cameras.push(V)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let wt=d.getDepthInformation(dt[0]);wt&&wt.isValid&&wt.texture&&p.init(wt,i.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let wt=0;wt<dt.length;wt++){let qt=dt[wt].camera;if(qt){let re=m[qt];re||(re=new jo,m[qt]=re);let V=d.getCameraImage(qt);re.sourceTexture=V}}}}for(let dt=0;dt<M.length;dt++){let Gt=A[dt],_t=M[dt];Gt!==null&&_t!==void 0&&_t.update(Gt,nt,c||a)}Rt&&Rt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let $t=new Ag;$t.setAnimationLoop(Qt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}},QM=new tn,Ig=new te;Ig.set(-1,0,0,0,1,0,0,0,1);function VM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ed(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),E=b.envMap,y=b.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ig),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function GM(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let A=M.program;n.uniformBlockBinding(y,A)}function c(y,M){let A=i[y.id];A===void 0&&(p(y),A=h(y),i[y.id]=A,y.addEventListener("dispose",b));let w=M.program;n.updateUBOMapping(y,w);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let M=d();y.__bindingPointIndex=M;let A=r.createBuffer(),w=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,w,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=i[y.id],A=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,T=A.length;x<T;x++){let C=A[x];if(Array.isArray(C))for(let I=0,P=C.length;I<P;I++)f(C[I],x,I,w);else f(C,x,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,A,w){if(_(y,M,A,w)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let P=T[I],O=m(P);g(P,y.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,A){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,A)}function _(y,M,A,w){let x=y.value,T=M+"_"+A;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let C=w[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(y){let M=y.uniforms,A=0,w=16;for(let T=0,C=M.length;T<C;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let P=0,O=I.length;P<O;P++){let D=I[P],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,z=B.length;q<z;q++){let K=B[q],Y=m(K),L=A%w,tt=L%Y.boundary,Tt=L+tt;A+=tt,Tt!==0&&w-Tt<Y.storage&&(A+=w-Tt),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=Y.storage}}}let x=A%w;return x>0&&(A+=w-x),y.__size=A,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",y),M}function b(y){let M=y.target;M.removeEventListener("dispose",b);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function E(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:E}}var HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gr=null;function WM(){return gr===null&&(gr=new qc(HM,16,16,xs,Ki),gr.name="DFG_LUT",gr.minFilter=ke,gr.magFilter=ke,gr.wrapS=Mi,gr.wrapT=Mi,gr.generateMipmaps=!1,gr.needsUpdate=!0),gr}var nu=class{constructor(t={}){let{canvas:e=Jm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([vh,xh,_h]),m=new Set([wi,Zi,Xa,qa,mh,gh]),b=new Uint32Array(4),E=new Int32Array(4),y=new Q,M=null,A=null,w=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,P=null,O=null,D=null,B=null;this._outputColorSpace=yi;let q=0,z=0,K=null,Y=-1,L=null,tt=new He,Tt=new He,At=null,Rt=new Me(0),Qt=0,$t=e.width,Z=e.height,nt=1,dt=null,Gt=null,_t=new He(0,0,$t,Z),Ht=new He(0,0,$t,Z),yt=!1,wt=new Jo,qt=!1,re=!1,V=new tn,ee=new Q,Te=new He,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function xe(){return K===null?nt:1}let F=n;function Ie(S,N){return e.getContext(S,N)}let Yt,R,v,k,G,J,ct,at,$,j,pt,Lt,mt,ut,lt,Ft,Vt,U,ht,et,ft,xt,it;try{let S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),F===null){let N="webgl2";if(F=Ie(N,S),F===null)throw Ie(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(S){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),jt("WebGLRenderer: "+S.message),S}function ot(){Yt=new Ky(F),Yt.init(),ft=new BM(F,Yt),R=new Vy(F,Yt,t,ft),v=new FM(F,Yt),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),k=new e3(F),G=new SM,J=new OM(F,Yt,v,G,R,ft,k),ct=new Jy(C),at=new i2(F),xt=new zy(F,at),$=new jy(F,at,k,xt),j=new i3(F,$,at,xt,k),U=new n3(F,R,J),lt=new Gy(G),pt=new MM(C,ct,Yt,R,xt,lt),Lt=new VM(C,G),mt=new wM,ut=new RM(Yt),Vt=new ky(C,ct,v,j,g,l),Ft=new UM(C,j,R),it=new GM(F,k,R,v),ht=new Qy(F,Yt,k),et=new t3(F,Yt,k),k.programs=pt.programs,C.capabilities=R,C.extensions=Yt,C.properties=G,C.renderLists=mt,C.shadowMap=Ft,C.state=v,C.info=k}_!==wi&&(T=new s3(_,e.width,e.height,o,i,s));let rt=new Zd(C,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Yt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Yt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize($t,Z,!1))},this.getSize=function(S){return S.set($t,Z)},this.setSize=function(S,N,X=!0){if(rt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=S,Z=N,e.width=Math.floor(S*nt),e.height=Math.floor(N*nt),X===!0&&(e.style.width=S+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($t*nt,Z*nt).floor()},this.setDrawingBufferSize=function(S,N,X){$t=S,Z=N,nt=X,e.width=Math.floor(S*X),e.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===wi){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,N,X,H){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,N,X,H),v.viewport(tt.copy(_t).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,N,X,H){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,N,X,H),v.scissor(Tt.copy(Ht).multiplyScalar(nt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(S){v.setScissorTest(yt=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){Gt=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let H=0;if(S){let W=!1;if(K!==null){let gt=K.texture.format;W=p.has(gt)}if(W){let gt=K.texture.type,Et=m.has(gt),Mt=Vt.getClearColor(),Ut=Vt.getClearAlpha(),Bt=Mt.r,ie=Mt.g,le=Mt.b;Et?(b[0]=Bt,b[1]=ie,b[2]=le,b[3]=Ut,F.clearBufferuiv(F.COLOR,0,b)):(E[0]=Bt,E[1]=ie,E[2]=le,E[3]=Ut,F.clearBufferiv(F.COLOR,0,E))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Vt.dispose(),mt.dispose(),ut.dispose(),G.dispose(),ct.dispose(),j.dispose(),xt.dispose(),it.dispose(),pt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ue),rt.removeEventListener("sessionend",Ce),vt.stop()};function Pt(S){S.preventDefault(),Ad("WebGLRenderer: Context Lost."),I=!0}function st(){Ad("WebGLRenderer: Context Restored."),I=!1;let S=k.autoReset,N=Ft.enabled,X=Ft.autoUpdate,H=Ft.needsUpdate,W=Ft.type;ot(),k.autoReset=S,Ft.enabled=N,Ft.autoUpdate=X,Ft.needsUpdate=H,Ft.type=W}function Ot(S){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){let N=S.target;N.removeEventListener("dispose",It),Kt(N)}function Kt(S){$e(S),G.remove(S)}function $e(S){let N=G.get(S).programs;N!==void 0&&(N.forEach(function(X){pt.releaseProgram(X)}),S.isShaderMaterial&&pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,H,W,gt){N===null&&(N=ze);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=Xe(S,N,X,H,W);v.setMaterial(H,Et);let Ut=X.index,Bt=1;if(H.wireframe===!0){if(Ut=$.getWireframeAttribute(X),Ut===void 0)return;Bt=2}let ie=X.drawRange,le=X.attributes.position,Dt=ie.start*Bt,ve=(ie.start+ie.count)*Bt;gt!==null&&(Dt=Math.max(Dt,gt.start*Bt),ve=Math.min(ve,(gt.start+gt.count)*Bt)),Ut!==null?(Dt=Math.max(Dt,0),ve=Math.min(ve,Ut.count)):le!=null&&(Dt=Math.max(Dt,0),ve=Math.min(ve,le.count));let Qe=ve-Dt;if(Qe<0||Qe===1/0)return;xt.setup(W,H,Mt,X,Ut);let De,ye=ht;if(Ut!==null&&(De=at.get(Ut),ye=et,ye.setIndex(De)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*xe()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(W.isLine){let vn=H.linewidth;vn===void 0&&(vn=1),v.setLineWidth(vn*xe()),W.isLineSegments?ye.setMode(F.LINES):W.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else W.isPoints?ye.setMode(F.POINTS):W.isSprite&&ye.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let vn=W._multiDrawStarts,Ct=W._multiDrawCounts,yn=W._multiDrawCount,pe=Ut?at.get(Ut).bytesPerElement:1,Hn=G.get(H).currentProgram.getUniforms();for(let Ei=0;Ei<yn;Ei++)Hn.setValue(F,"_gl_DrawID",Ei),ye.render(vn[Ei]/pe,Ct[Ei])}else if(W.isInstancedMesh)ye.renderInstances(Dt,Qe,W.count);else if(X.isInstancedBufferGeometry){let vn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ct=Math.min(X.instanceCount,vn);ye.renderInstances(Dt,Qe,Ct)}else ye.render(Dt,Qe)};function oe(S,N,X,H){P!==null&&S.isNodeMaterial&&P.setObject(H,S),qt===!0&&lt.setState(S,X,!1),S.transparent===!0&&S.side===jn&&S.forceSinglePass===!1?(S.side=Rn,S.needsUpdate=!0,fe(S,N,H),S.side=ms,S.needsUpdate=!0,fe(S,N,H),S.side=jn):fe(S,N,H)}this.compile=function(S,N,X=null){X===null&&(X=S),P!==null&&P.renderStart(S,N,X),A=ut.get(X),A.init(N),x.push(A),X.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),S!==X&&S.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),P!==null&&P.updateLights(A.state.lightsArray),re=this.localClippingEnabled,qt=lt.init(this.clippingPlanes,re),qt===!0&&lt.setGlobalState(this.clippingPlanes,N),P!==null&&Ft.render(A.state.shadowsArray,X,N);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let Mt=gt[Et];oe(Mt,X,N,W),H.add(Mt)}else oe(gt,X,N,W),H.add(gt)}),A=x.pop(),P!==null&&P.renderEnd(),H},this.compileAsync=function(S,N,X=null){let H=this.compile(S,N,X);return new Promise(W=>{function gt(){if(H.forEach(function(Et){let Ut=G.get(Et).currentProgram;(Ut===void 0||Ut.isReady())&&H.delete(Et)}),H.size===0){W(S);return}setTimeout(gt,10)}Yt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ne=null;function on(S){Ne&&Ne(S)}function Ue(){vt.stop()}function Ce(){vt.start()}let vt=new Ag;vt.setAnimationLoop(on),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(S){Ne=S,rt.setAnimationLoop(S),S===null?vt.stop():vt.start()},rt.addEventListener("sessionstart",Ue),rt.addEventListener("sessionend",Ce),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(S,N);let X=rt.enabled===!0&&rt.isPresenting===!0,H=T!==null&&(K===null||X)&&T.begin(C,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,K),A=ut.get(S,x.length),A.init(N),A.state.textureUnits=J.getTextureUnits(),x.push(A),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),wt.setFromProjectionMatrix(V,qi,N.reversedDepth),re=this.localClippingEnabled,qt=lt.init(this.clippingPlanes,re),M=mt.get(S,w.length),M.init(),w.push(M),rt.enabled===!0&&rt.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&se(Et,N,-1/0,C.sortObjects)}se(S,N,0,C.sortObjects),M.finish(),P!==null&&P.updateLights(A.state.lightsArray),C.sortObjects===!0&&M.sort(dt,Gt),Xt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Xt&&Vt.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&lt.beginShadows();let W=A.state.shadowsArray;if(Ft.render(W,S,N),qt===!0&&lt.endShadows(),(H&&T.hasRenderPass())===!1){let Et=M.opaque,Mt=M.transmissive;if(A.setupLights(),N.isArrayCamera){let Ut=N.cameras;if(Mt.length>0)for(let Bt=0,ie=Ut.length;Bt<ie;Bt++){let le=Ut[Bt];ne(Et,Mt,S,le)}Xt&&Vt.render(S);for(let Bt=0,ie=Ut.length;Bt<ie;Bt++){let le=Ut[Bt];St(M,S,le,le.viewport)}}else Mt.length>0&&ne(Et,Mt,S,N),Xt&&Vt.render(S),St(M,S,N)}K!==null&&z===0&&(J.updateMultisampleRenderTarget(K),J.updateRenderTargetMipmap(K)),H&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),xt.resetDefaultState(),Y=-1,L=null,x.pop(),x.length>0?(A=x[x.length-1],J.setTextureUnits(A.state.textureUnits),qt===!0&&lt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,P!==null&&P.renderEnd()};function se(S,N,X,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(wt)){H&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);let Et=j.update(S),Mt=S.material;Mt.visible&&M.push(S,Et,Mt,X,Te.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(wt))){let Et=j.update(S),Mt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Te.copy(Et.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(Mt)){let Ut=Et.groups;for(let Bt=0,ie=Ut.length;Bt<ie;Bt++){let le=Ut[Bt],Dt=Mt[le.materialIndex];Dt&&Dt.visible&&M.push(S,Et,Dt,X,Te.z,le,N)}}else Mt.visible&&M.push(S,Et,Mt,X,Te.z,null,N)}}let gt=S.children;for(let Et=0,Mt=gt.length;Et<Mt;Et++)se(gt[Et],N,X,H)}function St(S,N,X,H){let{opaque:W,transmissive:gt,transparent:Et}=S;A.setupLightsView(X),qt===!0&&lt.setGlobalState(C.clippingPlanes,X),H&&v.viewport(tt.copy(H)),W.length>0&&kt(W,N,X),gt.length>0&&kt(gt,N,X),Et.length>0&&kt(Et,N,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ne(S,N,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Dt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new gn(1,1,{generateMipmaps:!0,type:Dt?Ki:wi,minFilter:bi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let gt=A.state.transmissionRenderTarget[H.id],Et=H.viewport||tt;gt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let Mt=C.getRenderTarget(),Ut=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(Rt),Qt=C.getClearAlpha(),Qt<1&&C.setClearColor(16777215,.5),C.clear(),Xt&&Vt.render(X);let ie=C.toneMapping;C.toneMapping=$i;let le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),qt===!0&&lt.setGlobalState(C.clippingPlanes,H),kt(S,X,H),J.updateMultisampleRenderTarget(gt),J.updateRenderTargetMipmap(gt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ve=0,Qe=N.length;ve<Qe;ve++){let De=N[ve],{object:ye,geometry:vn,material:Ct,group:yn}=De;if(Ct.side===jn&&ye.layers.test(H.layers)){let pe=Ct.side;Ct.side=Rn,Ct.needsUpdate=!0,Le(ye,X,H,vn,Ct,yn),Ct.side=pe,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(J.updateMultisampleRenderTarget(gt),J.updateRenderTargetMipmap(gt))}C.setRenderTarget(Mt,Ut,Bt),C.setClearColor(Rt,Qt),le!==void 0&&(H.viewport=le),C.toneMapping=ie}function kt(S,N,X){let H=N.isScene===!0?N.overrideMaterial:null;for(let W=0,gt=S.length;W<gt;W++){let Et=S[W],{object:Mt,geometry:Ut,group:Bt}=Et,ie=Et.material;ie.allowOverride===!0&&H!==null&&(ie=H),Mt.layers.test(X.layers)&&Le(Mt,N,X,Ut,ie,Bt)}}function Le(S,N,X,H,W,gt){P!==null&&W.isNodeMaterial&&P.setObject(S,W),S.onBeforeRender(C,N,X,H,W,gt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(C,N,X,H,S,gt),W.transparent===!0&&W.side===jn&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,C.renderBufferDirect(X,N,H,W,S,gt),W.side=ms,W.needsUpdate=!0,C.renderBufferDirect(X,N,H,W,S,gt),W.side=jn):C.renderBufferDirect(X,N,H,W,S,gt),S.onAfterRender(C,N,X,H,W,gt)}function fe(S,N,X){N.isScene!==!0&&(N=ze);let H=G.get(S),W=A.state.lights,gt=A.state.shadowsArray,Et=W.state.version,Mt=pt.getParameters(S,W.state,gt,N,X,A.state.lightProbeGridArray),Ut=pt.getProgramCacheKey(Mt),Bt=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ct.get(S.envMap||H.environment,ie),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",It),Bt=new Map,H.programs=Bt);let le=Bt.get(Ut);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===Et)return cn(S,Mt),le}else Mt.uniforms=pt.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,X,Mt),S.onBeforeCompile(Mt,C),le=pt.acquireProgram(Mt,Ut),Bt.set(Ut,le),H.uniforms=Mt.uniforms;let Dt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=lt.uniform),cn(S,Mt),H.needsLights=Ze(S),H.lightsStateVersion=Et,H.needsLights&&(Dt.ambientLightColor.value=W.state.ambient,Dt.lightProbe.value=W.state.probe,Dt.sunLights.value=W.state.sun,Dt.sunLightShadows.value=W.state.sunShadow,Dt.directionalLights.value=W.state.directional,Dt.directionalLightShadows.value=W.state.directionalShadow,Dt.spotLights.value=W.state.spot,Dt.spotLightShadows.value=W.state.spotShadow,Dt.rectAreaLights.value=W.state.rectArea,Dt.ltc_1.value=W.state.rectAreaLTC1,Dt.ltc_2.value=W.state.rectAreaLTC2,Dt.pointLights.value=W.state.point,Dt.pointLightShadows.value=W.state.pointShadow,Dt.hemisphereLights.value=W.state.hemi,Dt.sunShadowMatrix.value=W.state.sunShadowMatrix,Dt.sunShadowCascade.value=W.state.sunShadowCascade,Dt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Dt.spotLightMatrix.value=W.state.spotLightMatrix,Dt.spotLightMap.value=W.state.spotLightMap,Dt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=le,H.uniformsList=null,le}function Be(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Za.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function cn(S,N){let X=G.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function ti(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,H=S.length;X<H;X++){let W=S[X];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Xe(S,N,X,H,W){N.isScene!==!0&&(N=ze),J.resetTextureUnits();let gt=N.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,Mt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:me.workingColorSpace,Ut=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Bt=ct.get(H.envMap||Et,Ut),ie=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,le=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!X.morphAttributes.position,ve=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color,De=$i;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(De=C.toneMapping);let ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vn=ye!==void 0?ye.length:0,Ct=G.get(H),yn=A.state.lights;if(qt===!0&&(re===!0||S!==L)){let Wt=S===L&&H.id===Y;lt.setState(H,S,Wt)}let pe=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==yn.state.version||Ct.outputColorSpace!==Mt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Bt||H.fog===!0&&Ct.fog!==gt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==le||Ct.morphTargets!==Dt||Ct.morphNormals!==ve||Ct.morphColors!==Qe||Ct.toneMapping!==De||Ct.morphTargetsCount!==vn||!!Ct.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Ct.__version=H.version);let Hn=Ct.currentProgram;pe===!0&&(Hn=fe(H,N,W),P&&H.isNodeMaterial&&P.onUpdateProgram(H,Hn,Ct));let Ei=!1,Ci=!1,tr=!1,be=Hn.getUniforms(),Ve=Ct.uniforms;if(v.useProgram(Hn.program)&&(Ei=!0,Ci=!0,tr=!0),H.id!==Y&&(Y=H.id,Ci=!0),Ct.needsLights){let Wt=ti(A.state.lightProbeGridArray,W);Ct.lightProbeGrid!==Wt&&(Ct.lightProbeGrid=Wt,Ci=!0)}if(Ei||L!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),be.setValue(F,"projectionMatrix",S.projectionMatrix),be.setValue(F,"viewMatrix",S.matrixWorldInverse);let nn=be.map.cameraPosition;nn!==void 0&&nn.setValue(F,ee.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&be.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),L!==S&&(L=S,Ci=!0,tr=!0)}if(Ct.needsLights&&(yn.state.sunShadowMap.length>0&&be.setValue(F,"sunShadowMap",yn.state.sunShadowMap,J),yn.state.directionalShadowMap.length>0&&be.setValue(F,"directionalShadowMap",yn.state.directionalShadowMap,J),yn.state.spotShadowMap.length>0&&be.setValue(F,"spotShadowMap",yn.state.spotShadowMap,J),yn.state.pointShadowMap.length>0&&be.setValue(F,"pointShadowMap",yn.state.pointShadowMap,J)),W.isSkinnedMesh){be.setOptional(F,W,"bindMatrix"),be.setOptional(F,W,"bindMatrixInverse");let Wt=W.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),be.setValue(F,"boneTexture",Wt.boneTexture,J))}W.isBatchedMesh&&(be.setOptional(F,W,"batchingTexture"),be.setValue(F,"batchingTexture",W._matricesTexture,J),be.setOptional(F,W,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",W._indirectTexture,J),be.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",W._colorsTexture,J));let Zt=X.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&U.update(W,X,Hn),(Ci||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,be.setValue(F,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Ve.envMapIntensity.value=N.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=WM()),Ci){if(be.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&Se(Ve,tr),gt&&H.fog===!0&&Lt.refreshFogUniforms(Ve,gt),Lt.refreshMaterialUniforms(Ve,H,nt,Z,A.state.transmissionRenderTarget[S.id]),Ct.needsLights&&Ct.lightProbeGrid){let Wt=Ct.lightProbeGrid;Ve.probesSH.value=Wt.texture,Ve.probesMin.value.copy(Wt.boundingBox.min),Ve.probesMax.value.copy(Wt.boundingBox.max),Ve.probesResolution.value.copy(Wt.resolution)}Za.upload(F,Be(Ct),Ve,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Za.upload(F,Be(Ct),Ve,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&be.setValue(F,"center",W.center),be.setValue(F,"modelViewMatrix",W.modelViewMatrix),be.setValue(F,"normalMatrix",W.normalMatrix),be.setValue(F,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Wt=H.uniformsGroups;for(let nn=0,Re=Wt.length;nn<Re;nn++){let Pn=Wt[nn];it.update(Pn,Hn),it.bind(Pn,Hn)}}return Hn}function Se(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ze(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,N,X){let H=G.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=N,G.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let X=G.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){K=S,q=N,z=X;let H=null,W=!1,gt=!1;if(S){let Mt=G.get(S);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),tt.copy(S.viewport),Tt.copy(S.scissor),At=S.scissorTest,v.viewport(tt),v.scissor(Tt),v.setScissorTest(At),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(Mt.__hasExternalTextures)J.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ie=S.depthTexture;if(Mt.__boundDepthTexture!==ie){if(ie!==null&&G.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);let Bt=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?H=Bt[N][X]:H=Bt[N],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?H=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[X]:H=Bt,tt.copy(S.viewport),Tt.copy(S.scissor),At=S.scissorTest}else tt.copy(_t).multiplyScalar(nt).floor(),Tt.copy(Ht).multiplyScalar(nt).floor(),At=yt;if(X!==0&&(H=O),v.bindFramebuffer(F.FRAMEBUFFER,H)&&v.drawBuffers(S,H),v.viewport(tt),v.scissor(Tt),v.setScissorTest(At),W){let Mt=G.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,X)}else if(gt){let Mt=N;for(let Ut=0;Ut<S.textures.length;Ut++){let Bt=G.get(S.textures[Ut]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,X,Mt)}}else if(S!==null&&X!==0){let Mt=G.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,X)}Y=-1};function Ai(S){let N=G.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=R.textureFormatReadable(S.format),N.__typeReadable=R.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,X,H,W,gt,Et,Mt=0){if(!(S&&S.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){v.bindFramebuffer(F.FRAMEBUFFER,Ut);try{let Bt=S.textures[Mt],ie=Bt.format,le=Bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Dt=Ai(Bt);if(Dt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&X>=0&&X<=S.height-W&&F.readPixels(N,X,H,W,ft.convert(ie),ft.convert(le),gt)}finally{let Bt=K!==null?G.get(K).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,H,W,gt,Et,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut)if(N>=0&&N<=S.width-H&&X>=0&&X<=S.height-W){v.bindFramebuffer(F.FRAMEBUFFER,Ut);let Bt=S.textures[Mt],ie=Bt.format,le=Bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Dt=Ai(Bt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ve),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(N,X,H,W,ft.convert(ie),ft.convert(le),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Qe=K!==null?G.get(K).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Qe);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jm(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ve),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ve),F.deleteSync(De),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){let H=Math.pow(2,-X),W=Math.floor(S.image.width*H),gt=Math.floor(S.image.height*H),Et=N!==null?N.x:0,Mt=N!==null?N.y:0;J.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Et,Mt,W,gt),v.unbindTexture()},this.copyTextureToTexture=function(S,N,X=null,H=null,W=0,gt=0){let Et,Mt,Ut,Bt,ie,le,Dt,ve,Qe,De=S.isCompressedTexture?S.mipmaps[gt]:S.image;if(X!==null)Et=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Ut=X.isBox3?X.max.z-X.min.z:1,Bt=X.min.x,ie=X.min.y,le=X.isBox3?X.min.z:0;else{let Ve=Math.pow(2,-W);Et=Math.floor(De.width*Ve),Mt=Math.floor(De.height*Ve),S.isDataArrayTexture?Ut=De.depth:S.isData3DTexture?Ut=Math.floor(De.depth*Ve):Ut=1,Bt=0,ie=0,le=0}H!==null?(Dt=H.x,ve=H.y,Qe=H.z):(Dt=0,ve=0,Qe=0);let ye=ft.convert(N.format),vn=ft.convert(N.type),Ct;N.isData3DTexture?(J.setTexture3D(N,0),Ct=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Ct=F.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Ct=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let yn=v.getParameter(F.UNPACK_ROW_LENGTH),pe=v.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=v.getParameter(F.UNPACK_SKIP_PIXELS),Ei=v.getParameter(F.UNPACK_SKIP_ROWS),Ci=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,De.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),v.pixelStorei(F.UNPACK_SKIP_ROWS,ie),v.pixelStorei(F.UNPACK_SKIP_IMAGES,le);let tr=S.isDataArrayTexture||S.isData3DTexture,be=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Ve=G.get(S),Zt=G.get(N),Wt=G.get(Ve.__renderTarget),nn=G.get(Zt.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,Wt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Re=0;Re<Ut;Re++)tr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(S).__webglTexture,W,le+Re),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(N).__webglTexture,gt,Qe+Re)),F.blitFramebuffer(Bt,ie,Et,Mt,Dt,ve,Et,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||G.has(S)){let Ve=G.get(S),Zt=G.get(N);v.bindFramebuffer(F.READ_FRAMEBUFFER,D),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Wt=0;Wt<Ut;Wt++)tr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,W,le+Wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ve.__webglTexture,W),be?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,gt,Qe+Wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,gt),W!==0?F.blitFramebuffer(Bt,ie,Et,Mt,Dt,ve,Et,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):be?F.copyTexSubImage3D(Ct,gt,Dt,ve,Qe+Wt,Bt,ie,Et,Mt):F.copyTexSubImage2D(Ct,gt,Dt,ve,Bt,ie,Et,Mt);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else be?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ct,gt,Dt,ve,Qe,Et,Mt,Ut,ye,vn,De.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,gt,Dt,ve,Qe,Et,Mt,Ut,ye,De.data):F.texSubImage3D(Ct,gt,Dt,ve,Qe,Et,Mt,Ut,ye,vn,De):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Dt,ve,Et,Mt,ye,vn,De.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Dt,ve,De.width,De.height,ye,De.data):F.texSubImage2D(F.TEXTURE_2D,gt,Dt,ve,Et,Mt,ye,vn,De);v.pixelStorei(F.UNPACK_ROW_LENGTH,yn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),v.pixelStorei(F.UNPACK_SKIP_ROWS,Ei),v.pixelStorei(F.UNPACK_SKIP_IMAGES,Ci),gt===0&&N.generateMipmaps&&F.generateMipmap(Ct),v.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,z=0,K=null,v.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Ka=`
vec3 toLin(vec3 c){ return pow(max(c, 0.0), vec3(2.2)); }
vec3 toSRGB(vec3 c){ return pow(max(c, 0.0), vec3(1.0/2.2)); }
float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 x){
  vec2 i = floor(x), f = fract(x); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), u.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), u.x), u.y);
}
// soft shoulder on the brightest channel: highlights roll off without bleaching the hue
vec3 shoulder(vec3 c){
  float l = max(max(c.r, c.g), c.b);
  float l2 = l / (1.0 + max(l - 0.8, 0.0) * 1.5);
  return c * (l2 / max(l, 1e-4));
}
`,Dg=`
attribute vec2 iT;      // t0,t1 along the half-string curve
attribute vec4 iTile;   // atlas rect (u0, v0, du, dv)
attribute vec3 iCol;    // tissue colour (linear)
attribute vec4 iMisc;   // x string index, y seed, z flag height (m), w flag width (m)
uniform vec3 uA[10];
uniform vec3 uC[10];
uniform vec3 uE[10];
uniform float uFl[10];
uniform float uLv[10];
uniform float uGa[10];
uniform float uTime;
uniform float uWind;
uniform vec3 uPtrO;
uniform vec3 uPtrD;
uniform float uPtrAmt;
uniform float uPtrR;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;

vec3 bez(int s, float t){ float r = 1.0 - t; return r*r*uA[s] + 2.0*r*t*uC[s] + t*t*uE[s]; }

vec3 bezD(int s, float t){ return 2.0*(1.0-t)*(uC[s]-uA[s]) + 2.0*t*(uE[s]-uC[s]); }
// a flag is a rigid sheet hung at its centre on the cord; its top edge follows the cord's slope but
// pivots toward level (uLv) so it never shears. When a half is gathered (uGa) the sheets overlap like
// a drawn curtain, fanned slightly in depth (sheets nearer the centre in front).
vec3 flagTop(int s, float u){
  float tc = 0.5 * (iT.x + iT.y);
  vec3 c = bez(s, tc);
  vec3 tg = bezD(s, tc);
  tg = normalize(tg + vec3(1e-5, 0.0, 0.0));
  tg *= tg.x < 0.0 ? -1.0 : 1.0;
  vec3 dir = normalize(mix(tg, vec3(1.0, 0.0, 0.0), uLv[s]));
  vec3 p = c + dir * ((u - 0.5) * iMisc.w);
  p.z += uGa[s] * tc * 0.16;
  return p;
}

vec3 flagPos(vec2 uv, int s){
  vec3 top = flagTop(s, uv.x);
  float h = iMisc.z;
  float v = uv.y;
  float w = pow(v, 1.25);
  float ph = iMisc.y * 6.2831853;
  float fl = uFl[s] * uWind;
  float T = uTime;
  // pendulum swing about the string, a slow drift plus quicker gusts
  float sw = fl * (0.12*sin(T*1.05 + ph) + 0.055*sin(T*2.2 + ph*1.9) + 0.025*sin(T*4.1 + ph*3.3));
  // pointer: a puff of air that pushes nearby flags back toward the wall
  vec3 rest = top - vec3(0.0, v*h, 0.0);
  vec3 dl = rest - uPtrO;
  vec3 perp = dl - uPtrD * dot(dl, uPtrD);
  float dd = length(perp);
  float k = uPtrAmt * exp(-dd*dd / (uPtrR*uPtrR));
  sw -= k * 0.95;
  vec3 hang = vec3(0.0, -cos(sw), sin(sw));
  vec3 p = top + hang * (v*h);
  // travelling ripples of thin tissue
  float rip = sin(uv.x*3.3 + T*2.9 + ph) * sin(v*2.7 - T*2.3 + ph*0.7)
            + 0.55*sin(uv.x*6.5 - T*4.3 + ph*2.3 + v*3.4)
            + 0.35*sin(uv.x*11.0 + v*7.0 - T*6.1 + ph);
  p.z += rip * 0.05 * h * (0.6 + fl) * w;
  p.x += (sin(T*1.6 + ph*1.3 + v*2.2) * 0.035 * fl + (perp.x / (dd + 1e-3)) * k * 0.4) * h * w;
  p.y += abs(rip) * 0.012 * h * fl * w;
  return p;
}
`,Ng=`
${Dg}
varying vec3 vN;
varying vec3 vW;
void main(){
  int s = int(iMisc.x + 0.5);
  vec2 uv = position.xy;
  vec3 p = flagPos(uv, s);
  vec3 px = flagPos(uv + vec2(0.03, 0.0), s);
  vec3 py = flagPos(uv + vec2(0.0, 0.03), s);
  vN = normalize(cross(py - p, px - p));
  vUV = uv; vTile = iTile; vCol = iCol; vMisc = iMisc; vW = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Ug=`
${Ka}
uniform sampler2D uAtlas;
uniform vec3 uL;
uniform vec3 uKey;
uniform vec3 uSky;
uniform float uHeader;
uniform vec2 uRes;
uniform float uVig;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;
varying vec3 vN;
varying vec3 vW;
void main(){
  vec2 auv = vTile.xy + vUV * vTile.zw;
  float m = texture2D(uAtlas, auv).r;
  float aa = max(fwidth(m) * 0.75, 0.02);
  float cov = smoothstep(0.5 - aa, 0.5 + aa, m);
  if (cov < 0.02) discard;
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  float seed = vMisc.y * 37.0;
  // crinkle: tissue was folded to be cut \u2014 a vertical centre crease, two cross creases, plus noise
  float cx = vUV.x - 0.5;
  float crease = sign(cx) * exp(-abs(cx) * 34.0) * 0.22;
  float cy1 = vUV.y - 0.36, cy2 = vUV.y - 0.68;
  float creaseY = sign(cy1) * exp(-abs(cy1) * 40.0) * 0.12 + sign(cy2) * exp(-abs(cy2) * 40.0) * 0.1;
  vec2 q = vUV * vec2(6.0, 7.5) + seed;
  float n1 = vnoise(q), n2 = vnoise(q * 2.7 + 3.1);
  vec3 bump = vec3(crease + (n1 - 0.5) * 0.35 + (n2 - 0.5) * 0.18, creaseY + (vnoise(q + 9.0) - 0.5) * 0.35, 0.0);
  N = normalize(N + bump);
  // fibres: long thin streaks
  float fib = vnoise(vec2(vUV.x * 160.0 + seed, vUV.y * 18.0)) * 0.6 + vnoise(vec2(vUV.x * 60.0, vUV.y * 240.0 + seed)) * 0.4;
  vec3 base = vCol * (0.93 + 0.12 * fib);
  float ndl = max(dot(N, uL), 0.0);
  float back = max(dot(-N, uL), 0.0);
  // light passing through thin tissue: brighter and more saturated than reflected light
  vec3 trans = pow(vCol, vec3(1.35)) * (0.42 + 0.9 * back) + vCol * 0.05;
  vec3 col = base * (uKey * (0.32 + 0.68 * ndl) * 0.72 + uSky * 0.42) + trans * 0.55;
  // folded header: two layers of paper \u2014 denser, a soft fold shadow at its lower edge
  float hdr = 1.0 - smoothstep(uHeader - 0.004, uHeader + 0.004, vUV.y);
  col *= mix(1.0, 0.86, hdr);
  col *= 1.0 - 0.28 * exp(-pow((vUV.y - uHeader) * 90.0, 2.0));
  // freshly cut edges catch light
  float edge = 1.0 - smoothstep(0.5, 0.9, m);
  col = mix(col, col * 1.18 + 0.025, edge * 0.5);
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(shoulder(col)), cov);
}`,Fg=`
${Dg}
varying float vD;
void main(){
  int s = int(iMisc.x + 0.5);
  vec3 p = flagPos(position.xy, s);
  vUV = position.xy; vTile = iTile; vCol = iCol; vMisc = iMisc;
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = s >= 8 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Og=`
uniform sampler2D uAtlas;
uniform float uHeader;
varying vec2 vUV;
varying vec4 vTile;
varying vec3 vCol;
varying vec4 vMisc;
varying float vD;
void main(){
  float m = texture2D(uAtlas, vTile.xy + vUV * vTile.zw).r;
  float cov = smoothstep(0.32, 0.68, m);
  if (cov < 0.01) discard;
  // tissue transmits its own hue strongly; doubled header transmits less
  vec3 tr = pow(vCol, vec3(0.88)) * 0.9 + 0.02;
  float hdr = 1.0 - step(uHeader, vUV.y);
  tr = mix(tr, tr * tr * 1.05, hdr);
  gl_FragColor = vec4(mix(vec3(1.0), tr, cov), vD);
}`,Bg=`
uniform vec3 uA[10];
uniform vec3 uC[10];
uniform vec3 uE[10];
uniform float uW;
uniform vec3 uView; // for the light pass: direction to the light
uniform float uUseView;
vec3 bez(int s, float t){ float r = 1.0 - t; return r*r*uA[s] + 2.0*r*t*uC[s] + t*t*uE[s]; }
vec3 bezD(int s, float t){ return 2.0*(1.0-t)*(uC[s]-uA[s]) + 2.0*t*(uE[s]-uC[s]); }
vec3 cordPos(out float side){
  int s = int(position.z + 0.5);
  float t = position.x;
  side = position.y;
  vec3 p = bez(s, t);
  vec3 tg = normalize(bezD(s, t) + vec3(1e-5, 0.0, 0.0));
  vec3 vd = uUseView > 0.5 ? uView : normalize(cameraPosition - p);
  vec3 sd = normalize(cross(tg, vd));
  p += sd * side * uW;
  p.z -= 0.004;
  return p;
}
`,kg=`
${Bg}
varying float vSide;
varying vec3 vW;
void main(){
  float side;
  vec3 p = cordPos(side);
  vSide = side; vW = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,zg=`
${Ka}
uniform vec3 uKey;
uniform vec3 uSky;
varying float vSide;
varying vec3 vW;
void main(){
  // twisted cotton: a round profile with a faint twist
  float r = 1.0 - vSide * vSide;
  float tw = 0.85 + 0.15 * sin(vW.x * 900.0 + vSide * 3.0);
  vec3 c = toLin(vec3(0.93, 0.89, 0.82)) * (uKey * 0.55 * (0.4 + 0.6 * r) + uSky * 0.35) * tw;
  gl_FragColor = vec4(toSRGB(c), 1.0);
}`,Qg=`
${Bg}
varying float vD;
void main(){
  float side;
  vec3 p = cordPos(side);
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = position.z > 7.5 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Vg=`
varying float vD;
void main(){ gl_FragColor = vec4(vec3(0.42, 0.4, 0.38), vD); }`,Jd=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Gg=`
uniform sampler2D uTex;
uniform vec2 uDir;
varying vec2 vUv;
void main(){
  // 13-tap gaussian (linear-sampled offsets)
  vec4 c = texture2D(uTex, vUv) * 0.1964825501511404;
  c += texture2D(uTex, vUv + uDir * 1.411764705882353) * 0.2969069646728344;
  c += texture2D(uTex, vUv - uDir * 1.411764705882353) * 0.2969069646728344;
  c += texture2D(uTex, vUv + uDir * 3.2941176470588234) * 0.09447039785044732;
  c += texture2D(uTex, vUv - uDir * 3.2941176470588234) * 0.09447039785044732;
  c += texture2D(uTex, vUv + uDir * 5.176470588235294) * 0.010381362401148057;
  c += texture2D(uTex, vUv - uDir * 5.176470588235294) * 0.010381362401148057;
  gl_FragColor = c;
}`,Hg=`
varying vec2 vUv;
float hashP(vec2 c, vec2 P){ c = mod(c, P); vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnP(vec2 x, vec2 P){
  vec2 i = floor(x), f = fract(x); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hashP(i,P), hashP(i+vec2(1,0),P), u.x), mix(hashP(i+vec2(0,1),P), hashP(i+vec2(1,1),P), u.x), u.y);
}
float fbmP(vec2 x, vec2 P, int oct){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 7; i++){ if (i >= oct) break; s += a * vnP(x, P); x *= 2.0; P *= 2.0; a *= 0.5; }
  return s;
}
float cellsP(vec2 x, vec2 P, float density, float rMin, float rMax){
  vec2 i = floor(x), f = fract(x); float best = 0.0;
  for (int y = -1; y <= 1; y++) for (int xx = -1; xx <= 1; xx++){
    vec2 g = vec2(float(xx), float(y));
    vec2 c = i + g;
    float h = hashP(c, P);
    if (h > density) continue;
    vec2 o = vec2(hashP(c + 17.0, P), hashP(c + 41.0, P));
    float r = mix(rMin, rMax, hashP(c + 73.0, P));
    float d = length(g + o - f);
    best = max(best, 1.0 - smoothstep(r * 0.55, r, d));
  }
  return best;
}
void main(){
  vec2 uv = vUv;
  // flow banding typical of ignimbrite (cantera): stretched noise
  float mott = fbmP(uv * vec2(3.0, 6.0) + vec2(0.0, fbmP(uv * 4.0, vec2(4.0), 3) * 0.6), vec2(3.0, 6.0), 5);
  float grain = fbmP(uv * 48.0, vec2(48.0), 4);
  float pores = cellsP(uv * 110.0, vec2(110.0), 0.3, 0.1, 0.3);
  pores = max(pores, cellsP(uv * 34.0 + 0.5, vec2(34.0), 0.08, 0.06, 0.16) * 0.8);
  float clasts = cellsP(uv * 70.0 + 0.25, vec2(70.0), 0.18, 0.1, 0.3) * smoothstep(0.45, 0.75, vnP(uv * 9.0, vec2(9.0)));
  gl_FragColor = vec4(mott, grain, pores, clasts);
}`,yl=`
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vNo = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Kd=`
${Ka}
uniform sampler2D uStone;
uniform sampler2D uShA;
uniform sampler2D uShB;
uniform mat4 uLightVP;
uniform vec3 uL;
uniform vec3 uKey;
uniform vec3 uSky;
uniform vec3 uBounce;
uniform vec4 uWin;     // x centre, y sill, y springline, half width
uniform vec4 uSill;    // half width, thickness, protrusion, wall depth
uniform vec3 uAlb;     // base albedo (linear)
uniform vec2 uRes;
uniform float uVig;
uniform float uShOn;
uniform float uSoft;
uniform float uIsJamb;
varying vec3 vW;
varying vec3 vNo;

float sdOpening(vec2 p){
  vec2 q = p - vec2(uWin.x, uWin.z);
  float dRect = max(max(abs(q.x) - uWin.w, uWin.y - p.y), q.y);
  float dDisk = max(length(q) - uWin.w, -q.y);
  return min(dRect, dDisk);
}

// relief + ids. returns vec4(height, blockHash, band(0/1), jointAO)
vec4 masonry(vec2 p){
  float d = sdOpening(p);
  vec2 q = p - vec2(uWin.x, uWin.z);
  float h = 0.0, id = 0.0, band = 0.0, joint = 1.0;
  // quoins / voussoirs: alternating long/short dressed stones around the opening
  float bw; float je;
  if (q.y > 0.0) {
    float th = atan(q.y, q.x);
    float n = 13.0;
    float a = th / 3.14159265 * n;
    float k = floor(a);
    bw = (abs(k - 6.0) < 0.5) ? 0.5 : 0.33;
    je = min(fract(a), 1.0 - fract(a)) * 3.14159265 / n * length(q);
    id = k + 50.0;
  } else {
    float yy = p.y - uWin.y;
    float k = floor(yy / 0.42);
    bw = mod(k, 2.0) < 0.5 ? 0.30 : 0.44;
    float fy = fract(yy / 0.42) * 0.42;
    je = min(fy, 0.42 - fy);
    id = k + 20.0 + step(0.0, q.x) * 7.0;
  }
  if (d < bw && d > -0.001) {
    band = 1.0;
    je = min(je, bw - d);
    // archivolt profile: a bead at the arris, a fillet groove, flat dressed face
    float bead = smoothstep(0.012, 0.03, d) * (1.0 - smoothstep(0.05, 0.07, d));
    float groove = exp(-pow((d - 0.11) / 0.012, 2.0));
    h = 0.75 + bead * 0.35 - groove * 0.4;
    if (q.y > 0.0 && bw > 0.45) h += 0.25; // keystone stands proud
  } else {
    // ashlar coursing
    float ch = 0.48;
    float row = floor(p.y / ch);
    float L = mix(0.78, 1.32, hash11(row * 1.73 + 3.0));
    float off = hash11(row * 3.11 + 1.0) * L;
    float col = floor((p.x + off) / L);
    vec2 lp = vec2(fract((p.x + off) / L) * L, fract(p.y / ch) * ch);
    je = min(min(lp.x, L - lp.x), min(lp.y, ch - lp.y));
    if (d > 0.0) je = min(je, d - bw);
    id = hash21(vec2(col, row));
    h = 0.6;
  }
  // impost moulding at the springline
  if (abs(p.y - uWin.z + 0.06) < 0.07 && abs(q.x) < uWin.w + 0.56) {
    float t = 1.0 - abs(p.y - uWin.z + 0.06) / 0.07;
    h = max(h, 0.8 + 0.25 * smoothstep(0.0, 0.5, t));
    band = 1.0;
    je = min(je, min(abs(p.y - uWin.z + 0.13), abs(p.y - uWin.z + 0.0)) + 0.004);
  }
  float face = smoothstep(0.003, 0.018, je);
  joint = mix(0.62, 1.0, smoothstep(0.0, 0.022, je));
  return vec4(h * face, id, band, joint);
}

float heightAt(vec2 p, vec2 suv){
  vec4 m = masonry(p);
  vec4 st = texture2D(uStone, suv);
  return m.x + (st.g - 0.5) * 0.34 - st.b * 0.2;
}

void main(){
  vec3 Ng = normalize(vNo);
  vec2 p; vec2 suv;
  if (uIsJamb > 0.5) {
    // reveal / sill: map the surface to stone space by its dominant axis
    if (abs(Ng.x) > 0.5) p = vec2(vW.z * 1.0 + 31.0, vW.y);
    else if (abs(Ng.y) > 0.5) p = vec2(vW.x, vW.z + 17.0);
    else p = vW.xy;
  } else {
    p = vW.xy;
    if (sdOpening(p) < 0.0) discard;
  }
  suv = p / 2.7;
  vec4 m = (uIsJamb > 0.5) ? vec4(0.75, 7.0, 1.0, 1.0) : masonry(p);
  vec4 st = texture2D(uStone, suv);
  vec4 st2 = texture2D(uStone, p / 9.3 + vec2(0.31, 0.57));
  // normal from relief (3 taps)
  vec3 N = Ng;
  if (uIsJamb < 0.5) {
    float e = 0.006;
    float h0 = heightAt(p, suv);
    float hx = heightAt(p + vec2(e, 0.0), (p + vec2(e, 0.0)) / 2.7);
    float hy = heightAt(p + vec2(0.0, e), (p + vec2(0.0, e)) / 2.7);
    N = normalize(vec3(-(hx - h0) / e * 0.02, -(hy - h0) / e * 0.02, 1.0));
  } else {
    float h0 = (st.g - 0.5) * 0.22 - st.b * 0.35;
    N = normalize(Ng + (vec3(dFdx(h0), dFdy(h0), 0.0)) * 0.0);
  }
  // cantera palette: per-block tint, flow mottling, pores and pale clasts
  float bh = fract(m.y * 7.31);
  vec3 c0 = toLin(vec3(0.85, 0.60, 0.62));
  vec3 cWarm = toLin(vec3(0.87, 0.62, 0.56));
  vec3 cMauve = toLin(vec3(0.80, 0.57, 0.62));
  vec3 cPale = toLin(vec3(0.90, 0.71, 0.70));
  vec3 alb = c0;
  alb = mix(alb, cWarm, smoothstep(0.6, 1.0, bh) * 0.55);
  alb = mix(alb, cMauve, smoothstep(0.4, 0.0, bh) * 0.5);
  alb = mix(alb, cPale, m.z * 0.4 + smoothstep(0.35, 0.65, bh) * 0.15);
  alb *= 0.84 + 0.32 * (st.r * 0.5 + st2.r * 0.5);
  alb *= 0.93 + 0.14 * fract(m.y * 13.7);
  // weathering: soft darker blooms and pale salt bloom that differ block to block
  float wth = vnoise(p * 1.7 + m.y * 31.0);
  alb *= mix(1.0, 0.86, smoothstep(0.62, 0.9, wth) * step(0.45, fract(m.y * 5.3)));
  alb = mix(alb, alb * 1.08 + 0.015, smoothstep(0.7, 0.95, vnoise(p * 3.1 - m.y * 17.0)) * 0.6);
  alb = mix(alb, alb * toLin(vec3(0.66, 0.48, 0.52)), st.b * 0.7);
  alb = mix(alb, toLin(vec3(0.97, 0.87, 0.83)), st.a * 0.32);
  alb *= uAlb;
  // weathering: a little darker toward the ground
  alb *= mix(0.86, 1.0, smoothstep(-0.5, 2.2, vW.y));

  // colour transmitted through the papel picado (projective lookup from the key light)
  vec3 T = vec3(1.0);
  if (uShOn > 0.5) {
    vec4 lp = uLightVP * vec4(vW, 1.0);
    vec2 s = lp.xy * 0.5 + 0.5;
    float inside = step(0.002, s.x) * step(s.x, 0.998) * step(0.002, s.y) * step(s.y, 0.998);
    vec4 a = texture2D(uShA, s);
    vec4 b = texture2D(uShB, s);
    // occluder distance: from the crisp map where there is tissue, else from the blurred one
    float zEst = a.a < 0.999 ? a.a : b.a;
    float w = smoothstep(0.04, 0.42, zEst) * 0.8 + uSoft;
    vec3 TT = mix(a.rgb, b.rgb, clamp(w, 0.0, 1.0));
    // light through dyed tissue reads richer than a plain multiply: push its saturation a little
    float lt = dot(TT, vec3(0.3, 0.5, 0.2));
    TT = max(mix(vec3(lt), TT, 1.35), 0.0);
    T = mix(vec3(1.0), TT, inside);
  }
  // sill shadow on the wall below it
  float sh = 1.0;
  if (uIsJamb < 0.5) {
    float yb = uWin.y - uSill.y;
    if (vW.y < yb) {
      float t = (yb - vW.y) / uL.y;
      float z = uL.z * t;
      float x = vW.x + uL.x * t - uWin.x;
      sh = 1.0 - (1.0 - smoothstep(uSill.z - 0.03, uSill.z + 0.03, z)) * (1.0 - smoothstep(uSill.x - 0.03, uSill.x + 0.03, abs(x)));
    }
  } else {
    // inside the reveal: the fa\xE7ade edge shades the jambs (cheap: by depth and facing)
    float depth = clamp(-vW.z / uSill.w, 0.0, 1.0);
    sh = mix(1.0, 0.75, depth);
  }
  float ndl = max(dot(N, uL), 0.0);
  vec3 amb = uSky * (0.62 + 0.38 * N.y) + uBounce * (0.5 - 0.5 * N.y);
  if (uIsJamb > 0.5) amb += uKey * 0.2 * (1.0 - ndl);
  // coloured light on pink stone goes muddy if multiplied straight; let the tinted part see a more neutral stone
  float tint = 1.0 - min(min(T.r, T.g), T.b);
  vec3 albD = mix(alb, vec3(dot(alb, vec3(0.3, 0.55, 0.15))) * 1.12, 0.5 * tint);
  vec3 col = albD * uKey * ndl * T * sh + alb * amb * m.w;
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(shoulder(col)), 1.0);
}`,Wg=`
${Ka}
uniform sampler2D uMark;
uniform vec4 uMarkRect;  // x0, y0, w, h on the back wall (world)
uniform vec3 uMin;
uniform vec3 uMax;
uniform vec3 uYellow;
uniform vec3 uPinkWall;
uniform vec3 uWhite;
uniform float uExpo;
uniform vec2 uRes;
uniform float uVig;
uniform float uWainscot;
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec3 n = -normalize(vNo); // BackSide box: inward normal
  vec3 col;
  float dx0 = vW.x - uMin.x, dx1 = uMax.x - vW.x, dy0 = vW.y - uMin.y, dy1 = uMax.y - vW.y, dz0 = vW.z - uMin.z;
  float ao = 1.0;
  float paint = 0.97 + 0.03 * vnoise(vW.xy * 30.0);
  if (n.z > 0.5) {
    // the sunflower logo wall
    col = uYellow * paint;
    float wash = exp(-pow((vW.x - (uMin.x + uMax.x) * 0.5) / 3.2, 2.0)) * smoothstep(uMin.y, uMax.y, vW.y + 0.6);
    col *= 0.84 + 0.16 * wash;
    // recessed downlights graze the wall in soft scallops
    float sc = 0.0;
    for (int i = -2; i <= 2; i++) {
      float lx = (uMin.x + uMax.x) * 0.5 + float(i) * 1.55;
      float dxl = vW.x - lx;
      float yTopS = uMax.y - 0.28 - dxl * dxl * 1.9;
      sc += smoothstep(yTopS + 0.05, yTopS - 0.5, vW.y) * exp(-dxl * dxl * 1.1) * smoothstep(-0.4, 1.4, vW.y);
    }
    col *= 0.9 + 0.22 * sc;
    vec2 mu = (vW.xy - uMarkRect.xy) / uMarkRect.zw;
    if (mu.x > 0.0 && mu.x < 1.0 && mu.y > 0.0 && mu.y < 1.0) {
      vec4 mk = texture2D(uMark, mu);
      // painted-on decal, a whisper of shadow below the white outline
      vec4 sh = texture2D(uMark, mu + vec2(-0.002, 0.03));
      col *= 1.0 - sh.a * 0.12;
      col = mix(col, toLin(mk.rgb) * (0.94 + 0.08 * wash), mk.a);
    }
    ao *= smoothstep(-0.1, 0.9, min(dx0, dx1)) * 0.25 + 0.75;
    ao *= smoothstep(-0.1, 0.7, dy1) * 0.2 + 0.8;
  } else if (n.y > 0.5) {
    // grey wood-look plank floor
    float plank = floor(vW.x / 0.19);
    float tone = hash11(plank * 1.3);
    float seam = smoothstep(0.0, 0.006, abs(fract(vW.x / 0.19) - 0.5) * 0.19 - 0.09);
    col = toLin(vec3(0.47, 0.45, 0.44)) * (0.85 + 0.25 * tone) * (0.92 + 0.08 * vnoise(vec2(vW.x * 4.0, vW.z * 40.0)));
    col *= mix(0.7, 1.0, seam);
    ao *= smoothstep(-0.2, 1.2, min(min(dx0, dx1), dz0)) * 0.35 + 0.65;
  } else if (n.y < -0.5) {
    // drop ceiling with tiles and a couple of light panels
    vec2 g = vW.xz / 0.61;
    vec2 fg = abs(fract(g) - 0.5);
    float grid = smoothstep(0.47, 0.49, max(fg.x, fg.y));
    col = uWhite * 0.86 * (1.0 - grid * 0.18);
    vec2 cell = floor(g);
    if (mod(cell.x, 4.0) == 1.0 && mod(cell.y, 3.0) == 1.0) col = vec3(1.25, 1.22, 1.15);
  } else {
    // side walls: pink wainscot + white above (their real wall language)
    col = vW.y < uWainscot ? uPinkWall : uWhite;
    if (vW.y < 0.1) col = toLin(vec3(0.12, 0.1, 0.1));
    col *= paint;
    ao *= smoothstep(-0.1, 1.0, min(dz0, uMax.z - vW.z)) * 0.3 + 0.7;
  }
  ao *= smoothstep(-0.1, 0.5, min(dy0, dy1)) * 0.25 + 0.75;
  col *= ao * uExpo;
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`,Xg=`
${Ka}
uniform vec3 uPink;
uniform vec3 uTop;
uniform float uH;
uniform float uExpo;
uniform vec2 uRes;
uniform float uVig;
uniform float uFlat;
uniform vec4 uProd[4];  // x, z, radius x, radius z
uniform float uProdOn;
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec3 n = normalize(vNo);
  vec3 col;
  if (n.y > 0.5) {
    // white quartz-look top
    col = uTop * (0.92 + 0.06 * vnoise(vW.xz * 18.0));
    float occ = 0.0;
    for (int i = 0; i < 4; i++) {
      vec2 d = (vW.xz - uProd[i].xy) / uProd[i].zw;
      occ = max(occ, exp(-dot(d, d) * 2.2));
    }
    col *= 1.0 - 0.45 * occ * uProdOn;
  } else {
    col = uPink;
    float y = vW.y;
    if (y > uH - 0.035) col = uTop * 0.93;                                   // slab edge
    else col *= 1.0 - 0.22 * exp(-pow((uH - 0.035 - y) / 0.03, 2.0));       // shadow under the lip
    if (y < 0.12) col = toLin(vec3(0.13, 0.11, 0.12));                       // kick plate
    if (n.z < 0.5) col *= 0.88;                                              // ends
  }
  col *= mix(uExpo, 1.0, uFlat);
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * (1.0 - uFlat) * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`,qg=`
attribute vec4 iRect;   // atlas rect (u0, v0 from top, du, dv)
attribute vec4 iPos;    // x, base y, z, height
attribute float iAsp;   // width / height
varying vec2 vUv;
void main(){
  vec2 c = position.xy;  // (0..1, 0..1)
  vec3 p = vec3(iPos.x + (c.x - 0.5) * iPos.w * iAsp, iPos.y + c.y * iPos.w, iPos.z);
  vUv = vec2(iRect.x + c.x * iRect.z, iRect.y + (1.0 - c.y) * iRect.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Yg=`
${Ka}
uniform sampler2D uTex;
uniform float uExpo;
uniform float uFade;
varying vec2 vUv;
void main(){
  vec4 t = texture2D(uTex, vUv);
  float a = smoothstep(0.35, 0.65, t.a) * uFade;
  if (a < 0.02) discard;
  vec3 c = toLin(t.rgb) * (0.96 * uExpo + 0.06);
  gl_FragColor = vec4(toSRGB(c), a);
}`;var $g={L:{d:"M40-59L40-59L40-681Q40-702 141.5-702Q243-702 243-681L243-681L243-191L397-191Q415-191 422-144L422-144Q425-121 425-97Q425-73 422-48L422-48Q414 0 396 0L396 0L88 0Q66 0 53-18Q40-36 40-59",x0:40,y0:-702,x1:425,y1:0},A:{d:"M520 2L520 2Q433 2 426-26L426-26L393-155L234-155L205-31Q199 0 109 0L109 0Q61 0 38-5.5Q15-11 15-14L15-14L192-691Q192-699 329-699Q466-699 466-691L466-691L639-13Q639-6 593-2Q547 2 520 2M313-489L259-282L364-282L319-489L313-489",x0:15,y0:-699,x1:639,y1:2},Z:{d:"M275-518L76-518Q59-518 52-564L52-564Q49-583 49-606Q49-629 54-654L54-654Q63-700 84-700L84-700L454-700Q515-700 533-589L533-589Q537-565 537-554L537-554L303-199L486-199Q487-199 488-199L488-199Q510-199 519-151L519-151Q523-128 523-103Q523-78 517-50L517-50Q506 0 483 0L483 0L94 0Q85 0 61.5-60.5Q38-121 38-136Q38-151 41-155L41-155L275-518",x0:38,y0:-700,x1:537,y1:0},C:{d:"M336-709Q409-709 464.5-688.5Q520-668 520-633Q520-598 493.5-546.5Q467-495 449-495L449-495Q444-495 437.5-500.5Q431-506 407.5-512.5Q384-519 367-519L367-519Q309-519 273.5-478Q238-437 238-352.5Q238-268 274.5-227Q311-186 367-186L367-186Q390-186 418.5-192.5Q447-199 459-211L459-211Q461-213 467-213Q473-213 489.5-190.5Q506-168 520-131.5Q534-95 534-75L534-75Q534-36 474-13Q414 10 332 10L332 10Q200 10 115-83Q30-176 30-345.5Q30-515 117.5-612Q205-709 336-709L336-709",x0:30,y0:-709,x1:534,y1:10},T:{d:"M351-518L351-16Q351 4 252 4Q153 4 153-16L153-16L153-518L33-518Q16-518 9-564L9-564Q6-586 6-609Q6-632 9-654L9-654Q16-700 33-700L33-700L468-700Q485-700 492-654L492-654Q495-632 495-609Q495-586 492-564L492-564Q485-518 468-518L468-518L351-518",x0:6,y0:-700,x1:495,y1:4},E:{d:"M246-422L375-422Q394-422 394-352L394-352Q394-331 389.5-302.5Q385-274 373-274L373-274L246-274L246-174L430-174Q447-174 453-130L453-130Q456-111 456-89.5Q456-68 450-34Q444 0 430 0L430 0L88 0Q50 0 50-31L50-31L50-674Q50-700 73-700L73-700L431-700Q452-700 452-611.5Q452-523 431-523L431-523L246-523L246-422",x0:50,y0:-700,x1:456,y1:0},N:{d:"M598-681L598-22Q598-1 504-1Q410-1 402-16L402-16L235-328L235-17Q235 1 142.5 1Q50 1 50-17L50-17L50-686Q50-701 129-701L129-701Q160-701 201.5-695.5Q243-690 252-675L252-675L412-367L412-681Q412-700 505-700Q598-700 598-681L598-681",x0:50,y0:-701,x1:598,y1:1}};var dn=320,ji=400,zr=4,Ml=4,Zg=30/ji,zi={cone:0,strawberry:1,elote:2,chile:3,cactus:4,zacatecas:5,dalia:6,paleta:7,L:8,A:9,Z:10,C:11,T:12,E:13,N:14},zt=r=>Math.round(r*10)/10;function qM(r,t,e,n,i,s,a){let o="";for(let l=t-(i-n);l<e+(i-n);l+=s)o+=`M${l} ${n}L${l+(i-n)*.62} ${i}M${l+(i-n)*.62} ${n}L${l} ${i}`;return`<path clip-path="url(#${r})" d="${o}" stroke-width="${a}"/>`}function YM(r){let t={};{let e="M51 106C46 82 70 66 100 68C130 66 154 82 149 106Z",n="M56 104L144 104L100 197Z",i="M48 106";for(let s=0;s<8;s++)i+="q6.5 -9 13 0";t.cone={halo:`<circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${e}"/><path d="${n}"/>`,defs:`<clipPath id="ck-cone"><path d="${n}"/></clipPath>`,cut:`<path d="M100 12Q103 1 114 -4" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
        <circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${e}"/><path d="${n}"/>`,bridge:`<path d="M71 74Q100 90 129 74" stroke-width="5"/><path d="${i}" stroke-width="5.5"/>
        ${qM("ck-cone",40,160,104,200,15,4)}
        <path d="M70 58Q72 38 90 31" stroke-width="4"/><path d="M60 98Q66 84 82 80" stroke-width="4"/>
        <path d="M104 30Q109 22 106 14" stroke-width="3"/>`}}{let e="M100 193C60 179 32 141 36 105C38 81 58 67 80 69C90 70 96 73 100 75C104 73 110 70 120 69C142 67 162 81 164 105C168 141 140 179 100 193Z",n="";for(let s=84;s<196;s+=17)for(let a=40;a<166;a+=20){let o=a+(Math.round((s-84)/17)%2?10:0);n+=`<ellipse cx="${o}" cy="${s}" rx="2.9" ry="4.4"/>`}let i="";for(let s=-120;s<220;s+=20)i+=`M${s} 70L${s+130} 200`;t.strawberry={halo:`<path d="${e}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/><circle cx="108" cy="20" r="8"/>`,defs:`<clipPath id="ck-straw"><path d="${e}"/></clipPath>`,cut:`<path d="${e}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/>
        <path d="M100 40Q101 22 113 11" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,bridge:`<path d="M64 76Q100 88 136 76" stroke-width="5"/>
        <g clip-path="url(#ck-straw)"><path d="${i}" stroke-width="1.6"/><g fill="#fff" stroke="none">${n}</g></g>
        <path d="M100 74L82 46M100 74L100 38M100 74L118 46" stroke-width="2.6"/>`}}{let e="M100 8C126 8 134 42 133 80C132 112 124 132 100 134C76 132 68 112 67 80C66 42 74 8 100 8Z",n="M100 146C68 142 42 118 34 74C52 102 70 114 96 122Z",i="M100 146C132 142 158 118 166 74C148 102 130 114 104 122Z",s="";for(let a=19;a<134;a+=11)s+=`M60 ${zt(a)}H140`;for(let a=0;a<4;a++)s+=`M${zt(80.5+a*13)} 4V136`;t.elote={rot:-8,halo:`<path d="${e}"/><path d="${n}"/><path d="${i}"/><path d="M92 132H108V199H92Z"/>`,defs:`<clipPath id="ck-cob"><path transform="rotate(-8 100 100)" d="${e}"/></clipPath>`,cut:`<path d="${e}"/><path d="${n}"/><path d="${i}"/><path d="M92 136H108V199H92Z"/>`,bridge:`<path clip-path="url(#ck-cob)" transform="rotate(8 100 100)" d="${s}" stroke-width="3.3"/>
        <path d="M94 136C70 130 52 112 42 88M106 136C130 130 148 112 158 88" stroke-width="3"/>
        <path d="M70 116Q100 140 130 116" stroke-width="4.5"/><path d="M86 137H114" stroke-width="4"/>`}}{let e="M120 50C143 56 151 86 141 114C129 150 99 176 58 192C50 195 45 187 52 181C84 158 102 130 106 100C109 80 104 64 94 56C104 49 112 48 120 50Z";t.chile={halo:`<path d="${e}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/><circle cx="128" cy="14" r="10"/>`,cut:`<path d="${e}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/>
        <path d="M114 42C112 25 120 12 137 8" fill="none" stroke="#000" stroke-width="7" stroke-linecap="round"/>`,bridge:`<path d="M129 66C136 94 126 126 98 153" stroke-width="4.5"/><path d="M84 60C104 64 122 60 137 51" stroke-width="4"/>
        <path d="M116 158C104 168 86 178 70 184" stroke-width="2.6"/>`}}{let e=i=>`<path d="M86 124H64Q54 124 54 114V82" fill="none" stroke="#000" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M114 100H138Q148 100 148 90V60" fill="none" stroke="#000" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"/>`,n="";for(let i=0;i<6;i++){let s=i/6*Math.PI*2;n+=`<ellipse cx="${zt(100+Math.cos(s)*8)}" cy="${zt(18+Math.sin(s)*8)}" rx="5.2" ry="3.4" transform="rotate(${zt(s*180/Math.PI)} ${zt(100+Math.cos(s)*8)} ${zt(18+Math.sin(s)*8)})"/>`}t.cactus={halo:`<rect x="83" y="28" width="34" height="158" rx="17"/>${e(24).replace(/#000/g,"#fff")}<circle cx="100" cy="18" r="14"/><path d="M34 190Q68 178 100 186T166 184" fill="none" stroke="#fff" stroke-width="8"/>`,cut:`<rect x="83" y="30" width="34" height="156" rx="17"/>${e(24)}${n}
        <path d="M34 191Q68 181 100 188T166 186" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,bridge:`<path d="M93 42V178M107 42V178" stroke-width="3.2"/><path d="M84 124H64Q54 124 54 114V84M116 100H138Q148 100 148 90V62" stroke-width="3"/>
        <path d="M84 31H116" stroke-width="3.6"/><circle cx="100" cy="18" r="3.2" fill="#fff" stroke="none"/>`}}{let e=r.match(/-?\d+(\.\d+)?/g).map(Number),n=1e9,i=1e9,s=-1e9,a=-1e9;for(let f=0;f+1<e.length;f+=2)n=Math.min(n,e[f]),s=Math.max(s,e[f]),i=Math.min(i,e[f+1]),a=Math.max(a,e[f+1]);let o=186/Math.max(s-n,a-i),l=100-(n+s)/2*o,c=100-(i+a)/2*o,h=f=>`<g transform="translate(${zt(l)} ${zt(c)}) scale(${o.toFixed(4)})">${f}</g>`,d=f=>(f/o).toFixed(1),u=`<path d="${r}"/>`;t.zacatecas={halo:h(u),defs:`<clipPath id="ck-zac"><path transform="translate(${zt(l)} ${zt(c)}) scale(${o.toFixed(4)})" d="${r}"/></clipPath>`,cut:h(`${u}<path d="${r}" fill="none" stroke="#fff" stroke-width="${d(17)}" stroke-linejoin="round"/>
        <path d="${r}" fill="none" stroke="#000" stroke-width="${d(8)}" stroke-linejoin="round"/>`),bridge:`<g clip-path="url(#ck-zac)"><path d="M20 70C60 60 80 96 120 84S170 70 190 90M10 132C50 120 70 150 110 140S160 128 190 146" stroke-width="3.2"/></g>
        <path d="M118 128l5 -9 5 9 -5 9z" fill="#fff" stroke="none"/>`}}{let e="",n="";for(let i=0;i<12;i++){let s=i/12*360;e+=`<ellipse cx="100" cy="56" rx="10" ry="29" transform="rotate(${s} 100 100)"/>`,n+=`<ellipse cx="100" cy="78" rx="6.5" ry="13" transform="rotate(${s+15} 100 100)"/>`}t.dalia={halo:'<circle cx="100" cy="100" r="76"/>',cut:`${e}${n}<circle cx="100" cy="100" r="11"/>`,bridge:'<circle cx="100" cy="100" r="5" fill="#fff" stroke="none"/>'}}{let e="M72 46C72 26 84 16 100 16C116 16 128 26 128 46V148H72Z",n="";for(let i=36;i<160;i+=18)n+=`M60 ${i+14}L140 ${i-10}`;t.paleta={halo:`<path d="${e}"/><rect x="91" y="146" width="18" height="52" rx="8"/>`,defs:`<clipPath id="ck-pal"><path d="${e}"/></clipPath>`,cut:`<path d="${e}"/><rect x="91" y="150" width="18" height="48" rx="8"/>`,bridge:`<g clip-path="url(#ck-pal)"><path d="${n}" stroke-width="4"/></g><path d="M66 149H134" stroke-width="5"/>
        <circle cx="129" cy="24" r="13" fill="#fff" stroke="none"/><circle cx="117" cy="17" r="7" fill="#fff" stroke="none"/>`}}return t}function $M(r){let t=[...String(r||"").matchAll(/\sd\s*=\s*"([^"]+)"/g)].map(e=>e[1]);return t.length?t.join(" "):"M318 92C430 96 512 170 590 176C690 292 846 368 870 520C900 660 772 742 694 884C548 856 476 740 330 700C286 560 160 470 168 318C146 172 318 92 318 92Z"}function ZM(r){let t=ji-26,e=`M0 0H${dn}V${t}`;if(r==="scallop"){let i=dn/12;for(let s=0;s<12;s++)e+=`A${zt(i/2)} ${zt(i/2)} 0 0 1 ${zt(dn-(s+1)*i)} ${t}`}else if(r==="picos"){let i=dn/10;for(let s=0;s<10;s++)e+=`L${zt(dn-(s+.5)*i)} ${ji-1}L${zt(dn-(s+1)*i)} ${t}`}else{let i=dn/16;for(let s=0;s<16;s++)e+=`L${zt(dn-(s+.5)*i)} ${ji-8}L${zt(dn-(s+1)*i)} ${t}`}return e+"Z"}function Jg(r,t,e,n,i,s){let a="",o=0;for(let l=e;l<=i;l+=s*.87,o++)for(let c=t+(o%2?s/2:0);c<=n;c+=s){let h=zt(c),d=zt(l);if(r==="dots")a+=`<circle cx="${h}" cy="${d}" r="${zt(s*.19)}"/>`;else if(r==="diamonds"){let u=s*.24;a+=`<path d="M${h} ${zt(l-u)}l${zt(u*.75)} ${zt(u)} ${zt(-u*.75)} ${zt(u)} ${zt(-u*.75)} ${zt(-u)}z"/>`}else if(r==="petals"){let u=s*.17;a+=`<ellipse cx="${h}" cy="${zt(l-u)}" rx="${zt(u*.48)}" ry="${zt(u*.85)}"/><ellipse cx="${h}" cy="${zt(l+u)}" rx="${zt(u*.48)}" ry="${zt(u*.85)}"/><ellipse cx="${zt(c-u)}" cy="${d}" rx="${zt(u*.85)}" ry="${zt(u*.48)}"/><ellipse cx="${zt(c+u)}" cy="${d}" rx="${zt(u*.85)}" ry="${zt(u*.48)}"/>`}else if(r==="stars"){let u=s*.27,f=u*.3;a+=`<path d="M${h} ${zt(l-u)}L${zt(c+f)} ${zt(l-f)}L${zt(c+u)} ${d}L${zt(c+f)} ${zt(l+f)}L${h} ${zt(l+u)}L${zt(c-f)} ${zt(l+f)}L${zt(c-u)} ${d}L${zt(c-f)} ${zt(l-f)}Z"/>`}}return a}function JM(r,t,e,n,i){let s="";if(r==="scallop")for(let a=t+12;a<=n-10;a+=17)s+=`<path d="M${zt(a-6.5)} ${e+8}a6.5 6.5 0 0 0 13 0z"/>`,s+=`<path d="M${zt(a-6.5)} ${i-8}a6.5 6.5 0 0 1 13 0z"/>`;else if(r==="diamonds"){for(let a=t+12;a<=n-8;a+=16)s+=`<path d="M${a} ${e+5}l4 5 -4 5 -4 -5z"/><path d="M${a} ${i-15}l4 5 -4 5 -4 -5z"/>`;for(let a=e+26;a<=i-22;a+=16)s+=`<path d="M${t+10} ${a-5}l4 5 -4 5 -4 -5z"/><path d="M${n-10} ${a-5}l4 5 -4 5 -4 -5z"/>`}else for(let a=t+10;a<=n-8;a+=13)s+=`<circle cx="${a}" cy="${e+9}" r="3"/><circle cx="${a}" cy="${i-9}" r="3"/>`;return s}function Kg(r,t){let i=dn-16,s=ji-46,a="";for(let l=14;l<=dn-12;l+=15)a+=`<circle cx="${l}" cy="40" r="3.1"/>`;a+=`<rect x="16" y="52" width="${i-16}" height="${s-52}" rx="3" fill="none" stroke="#000" stroke-width="5" stroke-dasharray="28 8"/>`,a+=JM(t,16,52,i,s);let o=ji-26;if(r!=="picos")for(let l=20;l<=dn-18;l+=20)a+=`<path d="M${l} ${o-15}l5 7 -5 7 -5 -7z"/>`;else for(let l=16;l<=dn-14;l+=32)a+=`<circle cx="${l}" cy="${o-8}" r="3.6"/>`;return a}var jg=34,su=72,t1=dn-34,au=ji-64;function KM(r,t){let e=dn/2,n=(su+au)/2+2,i=t.scale||1.3,s=`translate(${zt(e-100*i)} ${zt(n-100*i)}) scale(${i})${r.rot?` rotate(${r.rot} 100 100)`:""}`;return`${Kg(t.edge,t.border)}
    <g fill="#000">${Jg(t.lattice,jg+6,su+6,t1-6,au-4,t.sp||25)}</g>
    <g transform="${s}">
      <g fill="#fff" stroke="#fff" stroke-width="${t.halo||15}" stroke-linejoin="round">${r.halo}</g>
      <g fill="#000">${r.cut}</g>
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">${r.bridge}</g>
    </g>`}function jM(r,t){let e=$g[r],n=.305,i=dn/2,s=(su+au)/2+4,a=i-(e.x0+e.x1)/2*n,o=s-(e.y0+e.y1)/2*n,l=r==="A"?'<path d="M316 -478V-730" stroke="#fff" stroke-width="17"/>':"";return`${Kg(t.edge,t.border)}
    <g fill="#000">${Jg("dots",jg+4,su+6,t1-4,au-2,22)}</g>
    <g transform="translate(${zt(a)} ${zt(o)}) scale(${n})">
      <path d="${e.d}" fill="#fff" stroke="#fff" stroke-width="78" stroke-linejoin="round"/>
      <path d="${e.d}" fill="#000"/>${l}
    </g>`}function tS(r){let t=YM($M(r)),e=dn*zr,n=ji*Ml,i=[{edge:"zigzag",border:"scallop",lattice:"dots"},{edge:"scallop",border:"diamonds",lattice:"petals",sp:26},{edge:"picos",border:"dots",lattice:"diamonds"},{edge:"zigzag",border:"diamonds",lattice:"stars",sp:25},{edge:"scallop",border:"scallop",lattice:"diamonds"},{edge:"picos",border:"scallop",lattice:"dots",scale:1.24},{edge:"zigzag",border:"dots",lattice:"petals",sp:27,scale:1.2},{edge:"scallop",border:"dots",lattice:"stars",sp:25}],s="",a="",o=(l,c)=>{let h=l%zr*dn,d=Math.floor(l/zr)*ji;return`<g transform="translate(${h} ${d})"><path d="${ZM(c.edge)}" fill="#fff"/>${c.svg}</g>`};return["cone","strawberry","elote","chile","cactus","zacatecas","dalia","paleta"].forEach((l,c)=>{t[l].defs&&(s+=t[l].defs),a+=o(zi[l],{edge:i[c].edge,svg:KM(t[l],i[c])})}),"LAZCTEN".split("").forEach((l,c)=>{let h={edge:["zigzag","scallop","picos"][c%3],border:["diamonds","scallop","dots"][c%3]};a+=o(zi[l],{edge:h.edge,svg:jM(l,h)})}),`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${n}" viewBox="0 0 ${e} ${n}"><defs>${s}</defs><rect width="${e}" height="${n}" fill="#000"/>${a}</svg>`}function e1(r,t=1){let e=tS(r),n=dn*zr*t,i=ji*Ml*t;return new Promise((s,a)=>{let o=URL.createObjectURL(new Blob([e],{type:"image/svg+xml"})),l=new Image;l.decoding="async",l.onload=()=>{let c=document.createElement("canvas");c.width=n,c.height=i,c.getContext("2d").drawImage(l,0,0,n,i),URL.revokeObjectURL(o),s(c)},l.onerror=c=>{URL.revokeObjectURL(o),a(c)},l.src=o})}function n1(r){let t=r%zr,e=Math.floor(r/zr),n=1.5/(dn*zr),i=1.5/(ji*Ml);return[t/zr+n,e/Ml+i,1/zr-2*n,1/Ml-2*i]}var i1=[{name:"Fresas con crema",h:.2,aspect:1.2201,uv:[.00354,.0125,.33707,.975]},{name:"Mangonada",h:.34,aspect:.7671,uv:[.3477,.0125,.21192,.975]},{name:"Esquite con Hot Cheetos",h:.24,aspect:.9872,uv:[.56671,.0125,.27273,.975]},{name:"Sandifresa",h:.36,aspect:.5427,uv:[.84652,.0125,.14994,.975]}];var r1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>Zacatecas state outline</title><path d="M860.0 174.0 L855.3 190.5 L851.6 195.8 L836.6 204.4 L830.8 210.2 L800.7 259.1 L778.1 299.4 L759.8 306.8 L732.1 337.2 L713.2 351.3 L688.3 365.4 L681.8 371.9 L675.1 385.3 L661.7 388.5 L654.4 393.5 L647.8 399.7 L625.8 428.3 L612.0 439.3 L604.2 444.0 L595.7 446.1 L592.1 444.4 L593.1 434.9 L590.8 432.6 L579.9 432.9 L576.9 439.5 L571.6 461.1 L569.1 463.9 L559.7 463.1 L557.6 467.3 L557.5 471.6 L564.9 477.4 L567.1 481.0 L572.2 500.6 L571.7 510.5 L566.7 521.6 L567.5 526.8 L587.4 568.7 L614.4 595.2 L628.7 601.8 L635.3 610.2 L645.4 628.1 L657.5 642.5 L662.3 645.3 L668.1 645.9 L682.3 637.3 L695.2 635.1 L704.7 615.5 L710.8 611.7 L744.9 610.3 L749.2 611.5 L752.4 614.7 L762.8 638.9 L763.3 643.6 L750.3 653.4 L746.9 660.9 L746.7 665.7 L755.7 695.9 L757.9 726.7 L717.7 781.7 L716.0 773.8 L705.9 772.8 L696.6 761.7 L685.1 754.7 L672.9 755.8 L667.6 754.5 L650.9 742.3 L639.1 727.3 L623.3 718.8 L620.9 713.2 L621.6 690.4 L619.3 684.8 L615.6 682.9 L607.0 682.8 L602.9 681.1 L595.9 674.1 L591.9 674.3 L589.4 672.0 L587.5 665.2 L584.9 662.8 L575.6 667.1 L572.0 663.9 L562.6 644.5 L559.1 642.5 L548.1 657.7 L541.5 658.8 L535.9 665.1 L525.3 665.9 L520.7 675.9 L517.8 677.5 L491.4 677.8 L484.5 681.0 L480.0 688.0 L480.7 691.7 L485.9 698.7 L485.0 704.5 L478.4 715.0 L466.1 728.8 L446.0 761.2 L443.4 770.2 L443.0 779.6 L444.9 788.2 L449.4 793.7 L462.7 802.3 L458.2 823.5 L457.8 829.3 L459.5 833.7 L472.9 840.5 L484.4 840.9 L487.4 842.5 L488.7 850.1 L486.0 860.6 L477.6 880.5 L475.3 883.0 L466.9 886.7 L461.0 893.8 L459.9 901.1 L457.3 903.5 L452.9 904.0 L454.0 895.7 L451.5 893.1 L448.0 893.9 L436.8 903.5 L430.9 906.3 L424.6 907.6 L408.5 904.3 L404.2 905.0 L401.9 910.0 L403.7 952.8 L401.2 959.4 L396.4 960.0 L385.4 952.9 L373.5 954.2 L365.8 951.7 L334.9 934.1 L317.8 933.1 L309.0 925.6 L287.7 925.2 L284.8 922.7 L282.4 912.5 L279.1 910.3 L274.7 911.3 L262.0 918.6 L259.8 918.4 L259.2 915.5 L259.9 903.0 L266.6 895.8 L268.4 887.5 L267.9 875.4 L262.5 852.2 L276.4 860.5 L281.0 860.7 L284.7 858.1 L291.7 844.7 L306.6 835.4 L306.1 805.1 L301.9 793.1 L305.1 787.0 L331.0 762.1 L346.0 758.9 L354.0 749.5 L359.2 748.8 L371.3 751.3 L378.6 749.1 L381.3 746.6 L386.8 733.6 L395.0 729.6 L396.4 724.2 L395.8 718.4 L386.9 714.9 L387.3 707.4 L394.8 705.6 L399.2 699.9 L405.3 686.1 L404.3 679.0 L402.1 677.9 L394.4 679.7 L392.4 672.4 L389.8 670.9 L374.5 674.3 L375.4 661.3 L362.9 652.9 L336.8 630.9 L325.7 654.7 L331.5 658.2 L332.7 662.3 L339.3 664.2 L339.7 668.4 L333.1 672.9 L330.9 677.9 L329.8 688.5 L321.4 692.3 L312.9 716.1 L310.6 718.5 L308.6 714.5 L306.5 713.5 L296.3 712.4 L286.6 720.0 L281.4 721.1 L278.1 720.1 L273.9 715.7 L277.0 692.8 L273.0 674.4 L283.6 639.1 L288.1 635.8 L288.4 629.2 L287.8 627.4 L280.8 625.0 L282.0 617.3 L280.8 614.9 L267.0 614.2 L263.7 610.9 L256.9 621.4 L238.2 706.2 L232.4 695.0 L230.4 682.4 L230.6 669.4 L235.2 658.8 L235.3 655.0 L230.9 645.4 L230.9 642.0 L237.9 636.6 L239.0 633.4 L238.3 619.4 L246.6 612.4 L249.9 607.0 L253.3 582.3 L211.2 574.1 L209.4 618.1 L211.1 622.2 L222.8 633.1 L217.6 663.8 L201.7 667.9 L180.7 669.6 L140.0 687.2 L164.8 602.6 L168.9 496.9 L171.3 488.5 L178.4 484.5 L180.2 481.5 L186.5 422.6 L217.5 400.1 L219.9 396.6 L221.8 383.7 L224.7 377.4 L228.9 374.9 L233.6 376.2 L238.1 381.4 L242.0 382.6 L246.8 373.4 L247.4 368.8 L245.1 363.2 L234.9 356.0 L232.7 350.7 L237.7 341.7 L238.3 333.3 L229.0 322.1 L227.4 316.8 L240.8 312.3 L239.8 299.3 L241.0 288.7 L239.3 284.3 L241.5 281.1 L275.6 263.9 L292.0 237.9 L294.7 235.7 L305.1 233.6 L307.3 224.1 L309.8 222.2 L325.2 221.4 L328.5 219.6 L331.6 205.1 L337.2 199.8 L355.4 192.2 L362.7 190.5 L454.4 208.6 L463.4 208.7 L517.7 197.3 L518.0 116.2 L515.7 107.8 L493.6 79.0 L481.7 59.3 L485.4 53.8 L492.9 49.8 L578.0 40.0 L647.7 60.1 L651.5 63.8 L661.5 84.7 L666.9 90.7 L674.2 95.0 L682.4 97.2 L693.5 97.1 L703.3 103.2 L706.0 111.0 L706.6 120.0 L690.2 115.8 L693.1 124.7 L697.8 131.1 L733.9 132.2 L754.0 113.1 L754.5 118.9 L770.3 116.4 L777.2 117.6 L784.3 122.3 L789.9 128.8 L794.5 136.2 L799.8 150.8 L804.9 157.0 L812.6 162.3 L821.2 165.6 L828.9 166.1 L840.2 163.6 Z"/></svg>
`;var s1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1087 230" role="img" aria-labelledby="t">
<title id="t">La Zacatecana \u2014 Ice cream &amp; Mex Snacks</title>
<g stroke="#fff" stroke-width="14" stroke-linejoin="round" fill="#fff"><g><path transform="translate(56.42 112)" d="M24.51 1.15L-18.37 1.15Q-24.13 1.15-26.56-0.58Q-28.99-2.30-29.50-5.06Q-30.02-7.81-30.02-10.62L-30.02-76.80Q-30.02-79.62-29.50-82.30Q-28.99-84.99-26.56-86.72Q-24.13-88.45-18.24-88.45Q-12.35-88.45-9.98-86.72Q-7.62-84.99-7.10-82.30Q-6.59-79.62-6.59-76.67L-6.59-18.82L24.64-18.82Q27.07-18.82 29.31-18.43Q31.55-18.05 33.02-15.94Q34.50-13.82 34.50-8.83Q34.50-3.97 32.96-1.86Q31.42 0.26 29.18 0.70Q26.94 1.15 24.51 1.15"/><path transform="translate(126.48 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(226.48 112)" d="M24.70 1.41L-24.83 1.41Q-29.70 1.41-33.09-1.98Q-36.48-5.38-36.48-10.50Q-36.48-12.29-36.10-13.76Q-35.71-15.23-34.82-16.26L0.77-65.54L-24.32-65.54Q-27.14-65.54-29.95-65.98Q-32.77-66.43-34.62-68.80Q-36.48-71.17-36.48-76.80Q-36.48-82.69-34.75-85.12Q-33.02-87.55-30.27-88.06Q-27.52-88.58-24.70-88.58L23.17-88.58Q28.03-88.58 31.42-85.12Q34.82-81.66 34.82-76.54Q34.82-74.75 34.43-73.28Q34.05-71.81 33.15-70.78L-2.43-21.50L24.96-21.50Q27.78-21.50 30.40-20.99Q33.02-20.48 34.75-18.11Q36.48-15.74 36.48-10.24Q36.48-4.48 34.75-2.05Q33.02 0.38 30.34 0.90Q27.65 1.41 24.70 1.41"/><path transform="translate(298.40 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(364.24 112)" d="M4.54 1.79Q-0.70 1.79-6.53-0.32Q-12.35-2.43-17.47-6.59Q-22.59-10.75-25.79-17.02Q-28.99-23.30-28.99-31.62Q-28.99-39.81-25.79-46.02Q-22.59-52.22-17.54-56.32Q-12.48-60.42-6.66-62.53Q-0.83-64.64 4.29-64.64Q9.15-64.64 12.74-63.62Q16.32-62.59 18.62-61.38Q20.93-60.16 21.95-59.52Q24.51-57.98 26.75-56Q28.99-54.02 28.99-50.69Q28.99-49.02 28.35-47.30Q27.71-45.57 26.30-43.39Q21.70-36.35 17.09-36.35Q15.04-36.35 13.50-37.06Q11.97-37.76 10.69-38.66Q9.41-39.55 7.94-40.26Q6.46-40.96 4.29-40.96Q1.73-40.96-0.45-39.68Q-2.62-38.40-3.90-36.29Q-5.18-34.18-5.18-31.49Q-5.18-28.80-3.90-26.62Q-2.62-24.45-0.51-23.17Q1.60-21.89 4.03-21.89Q5.82-21.89 7.04-22.27Q8.26-22.66 8.90-23.10Q9.54-23.55 9.66-23.55Q11.46-24.58 13.06-25.47Q14.66-26.37 16.32-26.37Q18.50-26.37 20.80-24.77Q23.10-23.17 25.92-19.58Q28.61-16.26 28.93-13.38Q29.25-10.50 27.46-8Q25.66-5.50 21.95-3.20Q21.57-2.94 19.33-1.73Q17.09-0.51 13.38 0.64Q9.66 1.79 4.54 1.79"/><path transform="translate(430.08 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(491.18 112)" d="M11.20 1.15Q4.42 1.15-0.58-0.38Q-5.57-1.92-8.83-5.12Q-12.10-8.32-13.70-13.18Q-15.30-18.05-15.30-24.58L-15.30-40.83L-18.50-40.83Q-22.85-41.09-24.51-43.65Q-26.18-46.21-26.18-52.10Q-26.18-57.60-24.13-60.35Q-22.08-63.10-17.98-63.10L-15.30-63.10L-15.30-74.24Q-15.30-77.18-14.78-79.68Q-14.27-82.18-11.84-83.78Q-9.41-85.38-3.65-85.38Q1.98-85.38 4.42-83.65Q6.85-81.92 7.36-79.23Q7.87-76.54 7.87-73.73L7.87-63.49L14.66-63.74Q17.47-63.74 20.10-63.23Q22.72-62.72 24.45-60.29Q26.18-57.86 26.18-51.97Q26.18-46.59 24.45-44.16Q22.72-41.73 20.10-41.09Q17.47-40.45 14.53-40.45L7.87-40.58L7.87-25.73Q7.87-24.32 8.06-23.36Q8.26-22.40 8.64-21.89Q9.02-21.38 9.66-21.12Q10.30-20.86 11.33-20.86Q14.66-20.86 17.28-20.35Q19.90-19.84 21.38-17.66Q22.85-15.49 22.85-10.37Q22.85-4.61 21.06-2.18Q19.26 0.26 16.58 0.70Q13.89 1.15 11.20 1.15"/><path transform="translate(550.88 112)" d="M2.62 2.56Q-6.98 2.56-13.63-0.58Q-20.29-3.71-24.38-8.77Q-28.48-13.82-30.40-19.71Q-32.32-25.60-32.32-31.10Q-32.32-41.22-27.84-48.90Q-23.36-56.58-15.42-60.93Q-7.49-65.28 2.75-65.28Q10.69-65.28 16.32-62.72Q21.95-60.16 25.47-56.19Q28.99-52.22 30.66-47.74Q32.32-43.26 32.32-39.42Q32.32-32.13 28.74-28.29Q25.15-24.45 19.52-24.45L-7.74-24.45Q-7.23-22.40-5.63-20.93Q-4.03-19.46-1.60-18.62Q0.83-17.79 3.65-17.79Q6.46-17.79 8.64-18.11Q10.82-18.43 12.42-18.94Q14.02-19.46 15.36-19.97Q16.70-20.48 17.79-20.80Q18.88-21.12 19.90-21.12Q22.21-21.12 24.13-19.58Q26.05-18.05 27.58-14.98Q28.48-13.31 28.86-11.84Q29.25-10.37 29.25-9.09Q29.25-5.25 26.11-2.69Q22.98-0.13 17.09 1.22Q11.20 2.56 2.62 2.56M-7.74-36.48L6.59-36.48Q8.38-36.48 9.22-37.25Q10.05-38.02 10.05-39.55Q10.05-41.22 9.09-42.37Q8.13-43.52 6.46-44.10Q4.80-44.67 2.50-44.67Q-0.58-44.67-2.88-43.46Q-5.18-42.24-6.40-40.38Q-7.62-38.53-7.74-36.48"/><path transform="translate(615.31 112)" d="M4.54 1.79Q-0.70 1.79-6.53-0.32Q-12.35-2.43-17.47-6.59Q-22.59-10.75-25.79-17.02Q-28.99-23.30-28.99-31.62Q-28.99-39.81-25.79-46.02Q-22.59-52.22-17.54-56.32Q-12.48-60.42-6.66-62.53Q-0.83-64.64 4.29-64.64Q9.15-64.64 12.74-63.62Q16.32-62.59 18.62-61.38Q20.93-60.16 21.95-59.52Q24.51-57.98 26.75-56Q28.99-54.02 28.99-50.69Q28.99-49.02 28.35-47.30Q27.71-45.57 26.30-43.39Q21.70-36.35 17.09-36.35Q15.04-36.35 13.50-37.06Q11.97-37.76 10.69-38.66Q9.41-39.55 7.94-40.26Q6.46-40.96 4.29-40.96Q1.73-40.96-0.45-39.68Q-2.62-38.40-3.90-36.29Q-5.18-34.18-5.18-31.49Q-5.18-28.80-3.90-26.62Q-2.62-24.45-0.51-23.17Q1.60-21.89 4.03-21.89Q5.82-21.89 7.04-22.27Q8.26-22.66 8.90-23.10Q9.54-23.55 9.66-23.55Q11.46-24.58 13.06-25.47Q14.66-26.37 16.32-26.37Q18.50-26.37 20.80-24.77Q23.10-23.17 25.92-19.58Q28.61-16.26 28.93-13.38Q29.25-10.50 27.46-8Q25.66-5.50 21.95-3.20Q21.57-2.94 19.33-1.73Q17.09-0.51 13.38 0.64Q9.66 1.79 4.54 1.79"/><path transform="translate(681.15 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(751.02 112)" d="M-20.86 1.02Q-26.62 1.02-29.06-0.70Q-31.49-2.43-31.94-5.12Q-32.38-7.81-32.38-10.62L-32.38-52.74Q-32.38-55.55-31.87-58.11Q-31.36-60.67-28.93-62.27Q-26.50-63.87-20.74-63.87Q-15.49-63.87-13.12-62.53Q-10.75-61.18-10.11-59.26Q-9.47-57.47-9.47-55.94Q-9.22-56.45-8.83-56.83Q-7.30-58.75-4.67-60.35Q-2.05-61.95 0.96-62.91Q3.97-63.87 6.66-63.87Q13.06-63.87 17.92-61.44Q22.78-59.01 26.05-54.59Q29.31-50.18 30.98-44.29Q32.64-38.40 32.64-31.49L32.64-10.50Q32.64-7.68 32.13-4.99Q31.62-2.30 29.25-0.64Q26.88 1.02 20.99 1.02Q15.10 1.02 12.67-0.70Q10.24-2.43 9.73-5.12Q9.22-7.81 9.22-10.62L9.22-31.49Q9.22-34.43 8.13-36.48Q7.04-38.53 5.06-39.62Q3.07-40.70 0.13-40.70Q-2.69-40.70-4.80-39.55Q-6.91-38.40-8.06-36.35Q-9.22-34.30-9.22-31.49L-9.22-10.50Q-9.22-7.68-9.73-4.99Q-10.24-2.30-12.61-0.64Q-14.98 1.02-20.86 1.02"/><path transform="translate(820.90 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/></g></g><g fill="#C2185B"><path transform="translate(56.42 112)" d="M24.51 1.15L-18.37 1.15Q-24.13 1.15-26.56-0.58Q-28.99-2.30-29.50-5.06Q-30.02-7.81-30.02-10.62L-30.02-76.80Q-30.02-79.62-29.50-82.30Q-28.99-84.99-26.56-86.72Q-24.13-88.45-18.24-88.45Q-12.35-88.45-9.98-86.72Q-7.62-84.99-7.10-82.30Q-6.59-79.62-6.59-76.67L-6.59-18.82L24.64-18.82Q27.07-18.82 29.31-18.43Q31.55-18.05 33.02-15.94Q34.50-13.82 34.50-8.83Q34.50-3.97 32.96-1.86Q31.42 0.26 29.18 0.70Q26.94 1.15 24.51 1.15"/><path transform="translate(126.48 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(226.48 112)" d="M24.70 1.41L-24.83 1.41Q-29.70 1.41-33.09-1.98Q-36.48-5.38-36.48-10.50Q-36.48-12.29-36.10-13.76Q-35.71-15.23-34.82-16.26L0.77-65.54L-24.32-65.54Q-27.14-65.54-29.95-65.98Q-32.77-66.43-34.62-68.80Q-36.48-71.17-36.48-76.80Q-36.48-82.69-34.75-85.12Q-33.02-87.55-30.27-88.06Q-27.52-88.58-24.70-88.58L23.17-88.58Q28.03-88.58 31.42-85.12Q34.82-81.66 34.82-76.54Q34.82-74.75 34.43-73.28Q34.05-71.81 33.15-70.78L-2.43-21.50L24.96-21.50Q27.78-21.50 30.40-20.99Q33.02-20.48 34.75-18.11Q36.48-15.74 36.48-10.24Q36.48-4.48 34.75-2.05Q33.02 0.38 30.34 0.90Q27.65 1.41 24.70 1.41"/><path transform="translate(298.40 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(364.24 112)" d="M4.54 1.79Q-0.70 1.79-6.53-0.32Q-12.35-2.43-17.47-6.59Q-22.59-10.75-25.79-17.02Q-28.99-23.30-28.99-31.62Q-28.99-39.81-25.79-46.02Q-22.59-52.22-17.54-56.32Q-12.48-60.42-6.66-62.53Q-0.83-64.64 4.29-64.64Q9.15-64.64 12.74-63.62Q16.32-62.59 18.62-61.38Q20.93-60.16 21.95-59.52Q24.51-57.98 26.75-56Q28.99-54.02 28.99-50.69Q28.99-49.02 28.35-47.30Q27.71-45.57 26.30-43.39Q21.70-36.35 17.09-36.35Q15.04-36.35 13.50-37.06Q11.97-37.76 10.69-38.66Q9.41-39.55 7.94-40.26Q6.46-40.96 4.29-40.96Q1.73-40.96-0.45-39.68Q-2.62-38.40-3.90-36.29Q-5.18-34.18-5.18-31.49Q-5.18-28.80-3.90-26.62Q-2.62-24.45-0.51-23.17Q1.60-21.89 4.03-21.89Q5.82-21.89 7.04-22.27Q8.26-22.66 8.90-23.10Q9.54-23.55 9.66-23.55Q11.46-24.58 13.06-25.47Q14.66-26.37 16.32-26.37Q18.50-26.37 20.80-24.77Q23.10-23.17 25.92-19.58Q28.61-16.26 28.93-13.38Q29.25-10.50 27.46-8Q25.66-5.50 21.95-3.20Q21.57-2.94 19.33-1.73Q17.09-0.51 13.38 0.64Q9.66 1.79 4.54 1.79"/><path transform="translate(430.08 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(491.18 112)" d="M11.20 1.15Q4.42 1.15-0.58-0.38Q-5.57-1.92-8.83-5.12Q-12.10-8.32-13.70-13.18Q-15.30-18.05-15.30-24.58L-15.30-40.83L-18.50-40.83Q-22.85-41.09-24.51-43.65Q-26.18-46.21-26.18-52.10Q-26.18-57.60-24.13-60.35Q-22.08-63.10-17.98-63.10L-15.30-63.10L-15.30-74.24Q-15.30-77.18-14.78-79.68Q-14.27-82.18-11.84-83.78Q-9.41-85.38-3.65-85.38Q1.98-85.38 4.42-83.65Q6.85-81.92 7.36-79.23Q7.87-76.54 7.87-73.73L7.87-63.49L14.66-63.74Q17.47-63.74 20.10-63.23Q22.72-62.72 24.45-60.29Q26.18-57.86 26.18-51.97Q26.18-46.59 24.45-44.16Q22.72-41.73 20.10-41.09Q17.47-40.45 14.53-40.45L7.87-40.58L7.87-25.73Q7.87-24.32 8.06-23.36Q8.26-22.40 8.64-21.89Q9.02-21.38 9.66-21.12Q10.30-20.86 11.33-20.86Q14.66-20.86 17.28-20.35Q19.90-19.84 21.38-17.66Q22.85-15.49 22.85-10.37Q22.85-4.61 21.06-2.18Q19.26 0.26 16.58 0.70Q13.89 1.15 11.20 1.15"/><path transform="translate(550.88 112)" d="M2.62 2.56Q-6.98 2.56-13.63-0.58Q-20.29-3.71-24.38-8.77Q-28.48-13.82-30.40-19.71Q-32.32-25.60-32.32-31.10Q-32.32-41.22-27.84-48.90Q-23.36-56.58-15.42-60.93Q-7.49-65.28 2.75-65.28Q10.69-65.28 16.32-62.72Q21.95-60.16 25.47-56.19Q28.99-52.22 30.66-47.74Q32.32-43.26 32.32-39.42Q32.32-32.13 28.74-28.29Q25.15-24.45 19.52-24.45L-7.74-24.45Q-7.23-22.40-5.63-20.93Q-4.03-19.46-1.60-18.62Q0.83-17.79 3.65-17.79Q6.46-17.79 8.64-18.11Q10.82-18.43 12.42-18.94Q14.02-19.46 15.36-19.97Q16.70-20.48 17.79-20.80Q18.88-21.12 19.90-21.12Q22.21-21.12 24.13-19.58Q26.05-18.05 27.58-14.98Q28.48-13.31 28.86-11.84Q29.25-10.37 29.25-9.09Q29.25-5.25 26.11-2.69Q22.98-0.13 17.09 1.22Q11.20 2.56 2.62 2.56M-7.74-36.48L6.59-36.48Q8.38-36.48 9.22-37.25Q10.05-38.02 10.05-39.55Q10.05-41.22 9.09-42.37Q8.13-43.52 6.46-44.10Q4.80-44.67 2.50-44.67Q-0.58-44.67-2.88-43.46Q-5.18-42.24-6.40-40.38Q-7.62-38.53-7.74-36.48"/><path transform="translate(615.31 112)" d="M4.54 1.79Q-0.70 1.79-6.53-0.32Q-12.35-2.43-17.47-6.59Q-22.59-10.75-25.79-17.02Q-28.99-23.30-28.99-31.62Q-28.99-39.81-25.79-46.02Q-22.59-52.22-17.54-56.32Q-12.48-60.42-6.66-62.53Q-0.83-64.64 4.29-64.64Q9.15-64.64 12.74-63.62Q16.32-62.59 18.62-61.38Q20.93-60.16 21.95-59.52Q24.51-57.98 26.75-56Q28.99-54.02 28.99-50.69Q28.99-49.02 28.35-47.30Q27.71-45.57 26.30-43.39Q21.70-36.35 17.09-36.35Q15.04-36.35 13.50-37.06Q11.97-37.76 10.69-38.66Q9.41-39.55 7.94-40.26Q6.46-40.96 4.29-40.96Q1.73-40.96-0.45-39.68Q-2.62-38.40-3.90-36.29Q-5.18-34.18-5.18-31.49Q-5.18-28.80-3.90-26.62Q-2.62-24.45-0.51-23.17Q1.60-21.89 4.03-21.89Q5.82-21.89 7.04-22.27Q8.26-22.66 8.90-23.10Q9.54-23.55 9.66-23.55Q11.46-24.58 13.06-25.47Q14.66-26.37 16.32-26.37Q18.50-26.37 20.80-24.77Q23.10-23.17 25.92-19.58Q28.61-16.26 28.93-13.38Q29.25-10.50 27.46-8Q25.66-5.50 21.95-3.20Q21.57-2.94 19.33-1.73Q17.09-0.51 13.38 0.64Q9.66 1.79 4.54 1.79"/><path transform="translate(681.15 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/><path transform="translate(751.02 112)" d="M-20.86 1.02Q-26.62 1.02-29.06-0.70Q-31.49-2.43-31.94-5.12Q-32.38-7.81-32.38-10.62L-32.38-52.74Q-32.38-55.55-31.87-58.11Q-31.36-60.67-28.93-62.27Q-26.50-63.87-20.74-63.87Q-15.49-63.87-13.12-62.53Q-10.75-61.18-10.11-59.26Q-9.47-57.47-9.47-55.94Q-9.22-56.45-8.83-56.83Q-7.30-58.75-4.67-60.35Q-2.05-61.95 0.96-62.91Q3.97-63.87 6.66-63.87Q13.06-63.87 17.92-61.44Q22.78-59.01 26.05-54.59Q29.31-50.18 30.98-44.29Q32.64-38.40 32.64-31.49L32.64-10.50Q32.64-7.68 32.13-4.99Q31.62-2.30 29.25-0.64Q26.88 1.02 20.99 1.02Q15.10 1.02 12.67-0.70Q10.24-2.43 9.73-5.12Q9.22-7.81 9.22-10.62L9.22-31.49Q9.22-34.43 8.13-36.48Q7.04-38.53 5.06-39.62Q3.07-40.70 0.13-40.70Q-2.69-40.70-4.80-39.55Q-6.91-38.40-8.06-36.35Q-9.22-34.30-9.22-31.49L-9.22-10.50Q-9.22-7.68-9.73-4.99Q-10.24-2.30-12.61-0.64Q-14.98 1.02-20.86 1.02"/><path transform="translate(820.90 112)" d="M20.16 0.90Q14.40 0.90 11.71-1.02Q9.79-2.30 9.28-3.84Q8.90-3.46 8.38-3.07Q6.46-1.54 3.39-0.32Q0.32 0.90-4.16 0.90Q-9.92 0.90-15.23-1.73Q-20.54-4.35-24.70-8.96Q-28.86-13.57-31.30-19.39Q-33.73-25.22-33.73-31.62Q-33.73-37.89-31.30-43.65Q-28.86-49.41-24.64-53.95Q-20.42-58.50-15.17-61.12Q-9.92-63.74-4.16-63.74Q0.19-63.74 3.20-62.46Q6.21-61.18 8.13-59.65Q8.77-59.14 9.28-58.62Q9.66-60.67 11.84-62.08Q14.53-63.87 20.29-63.87Q26.05-63.87 28.42-62.14Q30.78-60.42 31.30-57.73Q31.81-55.04 31.81-52.22L31.81-10.62Q31.81-7.81 31.30-5.12Q30.78-2.43 28.42-0.77Q26.05 0.90 20.16 0.90M-0.96-22.27Q1.47-22.27 3.46-23.55Q5.44-24.83 6.66-26.94Q7.87-29.06 7.87-31.49Q7.87-34.05 6.66-36.10Q5.44-38.14 3.39-39.42Q1.34-40.70-1.22-40.70Q-3.78-40.70-5.89-39.42Q-8-38.14-9.28-36.03Q-10.56-33.92-10.56-31.36Q-10.56-28.93-9.22-26.88Q-7.87-24.83-5.70-23.55Q-3.52-22.27-0.96-22.27"/></g>
<rect x="172.9" y="138" width="530.7" height="60" rx="30" fill="#fff" stroke="#C2185B" stroke-width="4"/>
<g transform="translate(194.9 182)"><g fill="#C2185B"><path transform="translate(4.93 0)" d="M0 0.44Q-1.23 0.44-1.80 0.07Q-2.38-0.31-2.51-0.92Q-2.64-1.54-2.64-2.29L-2.64-27.68Q-2.64-28.38-2.49-29Q-2.33-29.61-1.78-29.96Q-1.23-30.32 0.04-30.32Q1.28-30.32 1.83-29.96Q2.38-29.61 2.53-29Q2.68-28.38 2.68-27.63L2.68-2.24Q2.68-1.50 2.53-0.90Q2.38-0.31 1.80 0.07Q1.23 0.44 0 0.44"/><path transform="translate(21.51 0)" d="M1.61 0.53Q-0.51 0.53-2.51-0.20Q-4.51-0.92-6.12-2.33Q-7.72-3.74-8.67-5.79Q-9.61-7.83-9.61-10.43Q-9.61-13.02-8.67-15.05Q-7.72-17.07-6.14-18.48Q-4.55-19.89-2.57-20.64Q-0.59-21.38 1.52-21.38Q3.06-21.38 4.44-20.94Q5.83-20.50 6.84-19.89Q7.85-19.27 8.29-18.66Q8.87-18.13 9.26-17.64Q9.66-17.16 9.53-16.46Q9.39-16.02 9.13-15.64Q8.87-15.27 8.47-14.87Q7.41-13.68 6.40-13.99Q5.83-14.30 5.26-14.65Q4.69-15 4.09-15.33Q3.50-15.66 2.88-15.88Q2.27-16.10 1.52-16.10Q-0.15-16.10-1.45-15.38Q-2.75-14.65-3.48-13.38Q-4.20-12.10-4.20-10.43Q-4.20-8.76-3.48-7.46Q-2.75-6.16-1.47-5.43Q-0.20-4.71 1.43-4.71Q2.22-4.71 2.95-4.91Q3.67-5.10 4.25-5.43Q4.82-5.76 5.17-6.12Q5.65-6.42 6.05-6.69Q6.45-6.95 6.89-6.95Q7.41-6.95 7.92-6.58Q8.43-6.20 9.04-5.41Q9.61-4.75 9.68-4.14Q9.75-3.52 9.42-2.95Q9.09-2.38 8.34-1.89Q7.81-1.36 6.78-0.81Q5.74-0.26 4.40 0.13Q3.06 0.53 1.61 0.53"/><path transform="translate(45.02 0)" d="M0.90 0.70Q-1.96 0.70-4.09-0.22Q-6.23-1.14-7.66-2.75Q-9.09-4.36-9.81-6.36Q-10.54-8.36-10.54-10.52Q-10.54-13.68-9.09-16.15Q-7.63-18.61-5.06-20.02Q-2.49-21.43 0.86-21.43Q3.23-21.43 5.04-20.68Q6.84-19.93 8.05-18.72Q9.26-17.51 9.90-16.06Q10.54-14.61 10.54-13.24Q10.54-10.91 9.42-9.86Q8.29-8.80 6.62-8.80L-4.99-8.80Q-4.95-7.30-4.05-6.20Q-3.15-5.10-1.76-4.51Q-0.37-3.92 1.08-3.92Q2.18-3.92 3.04-4.05Q3.89-4.18 4.51-4.38Q5.13-4.58 5.59-4.80Q6.05-5.02 6.45-5.19Q6.84-5.37 7.19-5.41Q7.68-5.46 8.16-5.19Q8.65-4.93 8.95-4.27Q9.22-3.83 9.33-3.45Q9.44-3.08 9.44-2.73Q9.44-1.85 8.38-1.08Q7.33-0.31 5.41 0.20Q3.50 0.70 0.90 0.70M-4.99-11.92L4.03-11.92Q4.77-11.92 5.17-12.17Q5.57-12.41 5.57-13.20Q5.57-14.21 4.95-15.03Q4.33-15.84 3.28-16.30Q2.22-16.76 0.81-16.76Q-0.81-16.76-2.13-16.13Q-3.45-15.49-4.22-14.39Q-4.99-13.29-4.99-11.92"/><path transform="translate(79.95 0)" d="M1.61 0.53Q-0.51 0.53-2.51-0.20Q-4.51-0.92-6.12-2.33Q-7.72-3.74-8.67-5.79Q-9.61-7.83-9.61-10.43Q-9.61-13.02-8.67-15.05Q-7.72-17.07-6.14-18.48Q-4.55-19.89-2.57-20.64Q-0.59-21.38 1.52-21.38Q3.06-21.38 4.44-20.94Q5.83-20.50 6.84-19.89Q7.85-19.27 8.29-18.66Q8.87-18.13 9.26-17.64Q9.66-17.16 9.53-16.46Q9.39-16.02 9.13-15.64Q8.87-15.27 8.47-14.87Q7.41-13.68 6.40-13.99Q5.83-14.30 5.26-14.65Q4.69-15 4.09-15.33Q3.50-15.66 2.88-15.88Q2.27-16.10 1.52-16.10Q-0.15-16.10-1.45-15.38Q-2.75-14.65-3.48-13.38Q-4.20-12.10-4.20-10.43Q-4.20-8.76-3.48-7.46Q-2.75-6.16-1.47-5.43Q-0.20-4.71 1.43-4.71Q2.22-4.71 2.95-4.91Q3.67-5.10 4.25-5.43Q4.82-5.76 5.17-6.12Q5.65-6.42 6.05-6.69Q6.45-6.95 6.89-6.95Q7.41-6.95 7.92-6.58Q8.43-6.20 9.04-5.41Q9.61-4.75 9.68-4.14Q9.75-3.52 9.42-2.95Q9.09-2.38 8.34-1.89Q7.81-1.36 6.78-0.81Q5.74-0.26 4.40 0.13Q3.06 0.53 1.61 0.53"/><path transform="translate(100.73 0)" d="M-4.25 0.44Q-5.43 0.44-5.98 0.07Q-6.53-0.31-6.67-0.92Q-6.80-1.54-6.80-2.29L-6.80-18.61Q-6.80-19.40-6.67-20Q-6.53-20.59-5.98-20.92Q-5.43-21.25-4.20-21.25Q-3.01-21.25-2.46-20.94Q-1.91-20.64-1.76-20.17Q-1.61-19.71-1.61-19.27L-1.96-18.48Q-1.74-18.83-1.34-19.34Q-0.95-19.84-0.29-20.35Q0.37-20.86 1.30-21.19Q2.22-21.52 3.50-21.52Q4.03-21.52 4.62-21.41Q5.21-21.30 5.81-21.10Q6.40-20.90 6.89-20.59Q7.37-20.28 7.63-19.87Q7.90-19.45 7.90-18.92Q7.90-17.51 7.19-16.54Q6.49-15.58 5.52-15.58Q4.86-15.58 4.55-15.71Q4.25-15.84 4.05-16.02Q3.85-16.19 3.48-16.32Q3.10-16.46 2.31-16.46Q1.65-16.46 0.97-16.24Q0.29-16.02-0.29-15.58Q-0.86-15.14-1.21-14.45Q-1.56-13.77-1.56-12.89L-1.56-2.20Q-1.56-1.45-1.69-0.86Q-1.83-0.26-2.40 0.09Q-2.97 0.44-4.25 0.44"/><path transform="translate(122.22 0)" d="M0.90 0.70Q-1.96 0.70-4.09-0.22Q-6.23-1.14-7.66-2.75Q-9.09-4.36-9.81-6.36Q-10.54-8.36-10.54-10.52Q-10.54-13.68-9.09-16.15Q-7.63-18.61-5.06-20.02Q-2.49-21.43 0.86-21.43Q3.23-21.43 5.04-20.68Q6.84-19.93 8.05-18.72Q9.26-17.51 9.90-16.06Q10.54-14.61 10.54-13.24Q10.54-10.91 9.42-9.86Q8.29-8.80 6.62-8.80L-4.99-8.80Q-4.95-7.30-4.05-6.20Q-3.15-5.10-1.76-4.51Q-0.37-3.92 1.08-3.92Q2.18-3.92 3.04-4.05Q3.89-4.18 4.51-4.38Q5.13-4.58 5.59-4.80Q6.05-5.02 6.45-5.19Q6.84-5.37 7.19-5.41Q7.68-5.46 8.16-5.19Q8.65-4.93 8.95-4.27Q9.22-3.83 9.33-3.45Q9.44-3.08 9.44-2.73Q9.44-1.85 8.38-1.08Q7.33-0.31 5.41 0.20Q3.50 0.70 0.90 0.70M-4.99-11.92L4.03-11.92Q4.77-11.92 5.17-12.17Q5.57-12.41 5.57-13.20Q5.57-14.21 4.95-15.03Q4.33-15.84 3.28-16.30Q2.22-16.76 0.81-16.76Q-0.81-16.76-2.13-16.13Q-3.45-15.49-4.22-14.39Q-4.99-13.29-4.99-11.92"/><path transform="translate(147.09 0)" d="M7.81 0.35Q6.53 0.35 5.92-0.13Q5.30-0.62 5.30-1.45L5.61-2.90Q5.26-2.33 4.42-1.56Q3.59-0.79 2.22-0.20Q0.86 0.40-1.08 0.40Q-3.15 0.40-4.97-0.46Q-6.80-1.32-8.18-2.84Q-9.57-4.36-10.38-6.31Q-11.20-8.27-11.20-10.52Q-11.20-12.67-10.38-14.59Q-9.57-16.50-8.16-18Q-6.75-19.49-4.93-20.35Q-3.10-21.21-1.08-21.21Q0.73-21.21 1.98-20.72Q3.23-20.24 4.11-19.51Q4.99-18.79 5.57-18L5.30-19.27Q5.30-20.24 5.92-20.75Q6.53-21.25 7.85-21.25Q9.09-21.25 9.61-20.88Q10.14-20.50 10.27-19.87Q10.41-19.23 10.41-18.44L10.41-2.33Q10.41-1.58 10.27-0.97Q10.14-0.35 9.59 0Q9.04 0.35 7.81 0.35M-0.29-4.75Q1.21-4.75 2.40-5.50Q3.59-6.25 4.31-7.55Q5.04-8.84 5.04-10.43Q5.04-12.14 4.29-13.42Q3.54-14.70 2.33-15.42Q1.12-16.15-0.37-16.15Q-2-16.15-3.28-15.38Q-4.55-14.61-5.28-13.31Q-6.01-12.01-6.01-10.38Q-6.01-8.80-5.26-7.52Q-4.51-6.25-3.21-5.50Q-1.91-4.75-0.29-4.75"/><path transform="translate(178.02 0)" d="M-13.07 0.40Q-14.26 0.40-14.81 0.04Q-15.36-0.31-15.49-0.92Q-15.62-1.54-15.62-2.24L-15.62-18.70Q-15.62-19.40-15.49-19.98Q-15.36-20.55-14.78-20.90Q-14.21-21.25-12.98-21.25Q-11.70-21.25-11.11-20.72Q-10.52-20.20-10.52-19.05L-10.91-17.82Q-10.69-18.30-10.16-18.88Q-9.64-19.45-8.87-20.02Q-8.10-20.59-7.13-20.94Q-6.16-21.30-5.10-21.30Q-3.65-21.30-2.44-20.81Q-1.23-20.33-0.29-19.40Q0.66-18.48 1.36-17.16Q2.11-18.30 3.04-19.25Q3.96-20.20 5.19-20.75Q6.42-21.30 7.96-21.30Q10.52-21.30 12.25-20.02Q13.99-18.74 14.89-16.39Q15.80-14.04 15.80-10.78L15.80-2.24Q15.80-1.50 15.64-0.90Q15.49-0.31 14.94 0.04Q14.39 0.40 13.16 0.40Q11.92 0.40 11.35 0.02Q10.78-0.35 10.65-0.95Q10.52-1.54 10.52-2.29L10.52-10.82Q10.52-12.45 10.12-13.64Q9.72-14.83 8.95-15.49Q8.18-16.15 6.95-16.15Q5.63-16.15 4.69-15.51Q3.74-14.87 3.21-13.68Q2.68-12.50 2.68-10.78L2.68-2.20Q2.68-1.45 2.46-0.81Q2.24-0.18 1.61 0.15Q0.97 0.48-0.22 0.40Q-1.32 0.35-1.83-0.04Q-2.33-0.44-2.44-1.03Q-2.55-1.63-2.55-2.29L-2.55-10.82Q-2.55-12.45-2.95-13.66Q-3.34-14.87-4.11-15.51Q-4.88-16.15-6.16-16.15Q-7.52-16.15-8.47-15.44Q-9.42-14.74-9.90-13.55Q-10.38-12.36-10.38-10.82L-10.38-2.20Q-10.38-1.50-10.54-0.88Q-10.69-0.26-11.24 0.07Q-11.79 0.40-13.07 0.40"/><path transform="translate(223.39 0)" d="M-4.42 0.62Q-7.63 0.62-9.86-0.37Q-12.08-1.36-13.22-3.28Q-14.37-5.19-14.37-7.92Q-14.37-9.37-13.77-10.82Q-13.18-12.28-11.99-13.71Q-10.80-15.14-9.09-16.50Q-9.70-17.78-10.14-19.01Q-10.58-20.24-10.82-21.43Q-11.07-22.62-11.07-23.72Q-11.07-26.14-10.03-27.83Q-9-29.52-7.04-30.43Q-5.08-31.33-2.31-31.33Q0.02-31.33 1.74-30.49Q3.45-29.66 4.38-28.09Q5.30-26.53 5.30-24.42Q5.30-23.23 4.69-22.09Q4.07-20.94 2.99-19.80Q1.91-18.66 0.51-17.51Q-0.90-16.37-2.53-15.14Q-1.52-13.68-0.42-12.36Q0.68-11.04 1.83-9.97Q2.97-8.89 4.07-8.05Q5.39-9.24 5.94-10.32Q6.49-11.40 6.71-12.45Q6.84-13.20 7.52-13.62Q8.21-14.04 9.57-14.04Q10.63-14.04 11.11-13.73Q11.59-13.42 11.75-12.98Q11.90-12.54 11.86-12.10Q11.77-10.52 10.87-8.91Q9.97-7.30 8.38-5.68Q8.87-5.54 9.24-5.43Q9.61-5.32 10.12-5.26Q10.63-5.19 11.37-5.19Q12.65-5.19 13.22-4.62Q13.79-4.05 13.79-2.73Q13.79-1.10 13.27-0.53Q12.74 0.04 11.33 0.04Q10.10 0.04 8.84-0.15Q7.59-0.35 6.36-0.77Q5.13-1.19 3.85-1.89Q2.62-1.10 1.23-0.55Q-0.15 0-1.58 0.31Q-3.01 0.62-4.42 0.62M-4.33-4.22Q-3.23-4.22-2.24-4.47Q-1.25-4.71-0.59-5.15Q-1.25-5.76-2-6.51Q-2.75-7.26-3.54-8.16Q-4.33-9.06-5.08-10.01Q-5.83-10.96-6.53-11.97Q-7.19-11.35-7.66-10.82Q-8.12-10.30-8.40-9.83Q-8.69-9.37-8.82-8.91Q-8.95-8.45-8.95-7.96Q-8.95-6.78-8.40-5.94Q-7.85-5.10-6.82-4.66Q-5.79-4.22-4.33-4.22M-4.86-19.32Q-3.63-20.20-2.64-20.97Q-1.65-21.74-0.99-22.37Q-0.33-23.01 0.02-23.54Q0.37-24.07 0.37-24.51Q0.37-25.70-0.40-26.40Q-1.17-27.10-2.44-27.10Q-3.59-27.10-4.42-26.73Q-5.26-26.36-5.70-25.67Q-6.14-24.99-6.14-24.02Q-6.14-23.41-6.01-22.70Q-5.87-22-5.59-21.19Q-5.30-20.37-4.86-19.32"/><path transform="translate(268.90 0)" d="M-12.98 0.40Q-14.12 0.40-14.70 0.04Q-15.27-0.31-15.42-0.92Q-15.58-1.54-15.58-2.29L-15.58-27.68Q-15.58-28.38-15.42-28.97Q-15.27-29.57-14.70-29.94Q-14.12-30.32-12.89-30.32Q-11.97-30.32-11.51-30.21Q-11.04-30.10-10.78-29.90Q-10.52-29.70-10.25-29.39L0-15.09L10.25-29.44Q10.56-29.79 10.87-29.96Q11.18-30.14 11.66-30.23Q12.14-30.32 12.94-30.32Q14.12-30.32 14.70-29.94Q15.27-29.57 15.42-28.95Q15.58-28.34 15.58-27.59L15.58-2.20Q15.58-1.54 15.42-0.92Q15.27-0.31 14.70 0.04Q14.12 0.40 12.89 0.40Q11.70 0.40 11.13 0.02Q10.56-0.35 10.41-0.97Q10.25-1.58 10.25-2.29L10.25-21.16L2.24-9.59Q2.11-9.42 1.85-9.13Q1.58-8.84 1.14-8.62Q0.70-8.40-0.04-8.40Q-0.75-8.40-1.19-8.62Q-1.63-8.84-1.87-9.11Q-2.11-9.37-2.33-9.64L-10.30-21.16L-10.30-2.20Q-10.30-1.54-10.45-0.92Q-10.60-0.31-11.18 0.04Q-11.75 0.40-12.98 0.40"/><path transform="translate(299.30 0)" d="M0.90 0.70Q-1.96 0.70-4.09-0.22Q-6.23-1.14-7.66-2.75Q-9.09-4.36-9.81-6.36Q-10.54-8.36-10.54-10.52Q-10.54-13.68-9.09-16.15Q-7.63-18.61-5.06-20.02Q-2.49-21.43 0.86-21.43Q3.23-21.43 5.04-20.68Q6.84-19.93 8.05-18.72Q9.26-17.51 9.90-16.06Q10.54-14.61 10.54-13.24Q10.54-10.91 9.42-9.86Q8.29-8.80 6.62-8.80L-4.99-8.80Q-4.95-7.30-4.05-6.20Q-3.15-5.10-1.76-4.51Q-0.37-3.92 1.08-3.92Q2.18-3.92 3.04-4.05Q3.89-4.18 4.51-4.38Q5.13-4.58 5.59-4.80Q6.05-5.02 6.45-5.19Q6.84-5.37 7.19-5.41Q7.68-5.46 8.16-5.19Q8.65-4.93 8.95-4.27Q9.22-3.83 9.33-3.45Q9.44-3.08 9.44-2.73Q9.44-1.85 8.38-1.08Q7.33-0.31 5.41 0.20Q3.50 0.70 0.90 0.70M-4.99-11.92L4.03-11.92Q4.77-11.92 5.17-12.17Q5.57-12.41 5.57-13.20Q5.57-14.21 4.95-15.03Q4.33-15.84 3.28-16.30Q2.22-16.76 0.81-16.76Q-0.81-16.76-2.13-16.13Q-3.45-15.49-4.22-14.39Q-4.99-13.29-4.99-11.92"/><path transform="translate(322.85 0)" d="M8.78-20.64Q9.61-19.89 9.86-19.32Q10.10-18.74 9.86-18.15Q9.61-17.56 8.87-16.72L3.41-10.38L8.82-4.14Q9.57-3.34 9.83-2.73Q10.10-2.11 9.88-1.56Q9.66-1.01 8.82-0.26Q8.07 0.40 7.52 0.59Q6.97 0.79 6.42 0.51Q5.87 0.22 5.08-0.57L0.02-6.47L-5.08-0.57Q-5.83 0.22-6.40 0.51Q-6.97 0.79-7.52 0.57Q-8.07 0.35-8.82-0.26Q-9.57-1.01-9.83-1.56Q-10.10-2.11-9.81-2.73Q-9.53-3.34-8.82-4.14L-3.41-10.38L-8.87-16.72Q-9.57-17.51-9.83-18.13Q-10.10-18.74-9.83-19.34Q-9.57-19.93-8.78-20.64Q-8.03-21.30-7.48-21.47Q-6.93-21.65-6.38-21.36Q-5.83-21.08-5.13-20.28L0.02-14.34L5.13-20.28Q6.23-21.47 6.95-21.56Q7.68-21.65 8.78-20.64"/><path transform="translate(358.06 0)" d="M-0.18 0.84Q-2.16 0.84-3.76 0.35Q-5.37-0.13-6.58-0.88Q-7.79-1.63-8.62-2.42Q-9.46-3.21-9.86-3.87Q-10.43-4.66-10.60-5.28Q-10.78-5.90-10.49-6.49Q-10.21-7.08-9.42-7.74Q-8.62-8.45-7.94-8.47Q-7.26-8.49-6.62-8.05Q-5.98-7.61-5.37-6.82Q-4.31-5.41-2.99-4.82Q-1.67-4.22-0.35-4.22Q1.36-4.22 2.64-4.69Q3.92-5.15 4.64-6.07Q5.37-7 5.37-8.45Q5.37-9.64 4.64-10.41Q3.92-11.18 2.73-11.73Q1.54-12.28 0.07-12.74Q-1.41-13.20-2.90-13.77Q-3.96-14.12-5.02-14.63Q-6.07-15.14-6.97-15.80Q-7.88-16.46-8.56-17.36Q-9.24-18.26-9.64-19.45Q-10.03-20.64-10.03-22.22Q-10.03-24.73-8.80-26.64Q-7.57-28.56-5.37-29.68Q-3.17-30.80-0.35-30.80Q1.45-30.80 2.88-30.47Q4.31-30.14 5.35-29.63Q6.38-29.13 7.06-28.62Q7.74-28.12 8.05-27.76Q9.06-26.75 9.17-26.07Q9.28-25.39 8.36-24.24Q7.44-23.06 6.58-22.95Q5.72-22.84 4.66-23.63Q3.96-24.38 3.26-24.84Q2.55-25.30 1.69-25.52Q0.84-25.74-0.40-25.74Q-1.28-25.74-2.09-25.50Q-2.90-25.26-3.48-24.79Q-4.05-24.33-4.38-23.67Q-4.71-23.01-4.71-22.18Q-4.71-21.03-4.07-20.31Q-3.43-19.58-2.33-19.12Q-1.23-18.66 0.13-18.26Q1.50-17.86 2.90-17.42Q4.36-16.94 5.76-16.28Q7.17-15.62 8.27-14.63Q9.37-13.64 10.03-12.17Q10.69-10.69 10.69-8.58Q10.69-6.16 9.77-4.36Q8.84-2.55 7.26-1.41Q5.68-0.26 3.74 0.29Q1.80 0.84-0.18 0.84"/><path transform="translate(382.98 0)" d="M-7.44 0.40Q-8.62 0.40-9.17 0.02Q-9.72-0.35-9.86-0.95Q-9.99-1.54-9.99-2.29L-9.99-18.74Q-9.99-19.45-9.86-20.02Q-9.72-20.59-9.15-20.92Q-8.58-21.25-7.39-21.25Q-6.34-21.25-5.81-20.99Q-5.28-20.72-5.10-20.33Q-4.93-19.93-4.91-19.54Q-4.88-19.14-4.84-18.92L-5.02-17.51Q-4.75-18.22-4.14-18.88Q-3.52-19.54-2.64-20.09Q-1.76-20.64-0.73-20.97Q0.31-21.30 1.41-21.30Q3.48-21.30 5.10-20.55Q6.73-19.80 7.90-18.44Q9.06-17.07 9.68-15.20Q10.30-13.33 10.30-11L10.30-2.24Q10.30-1.50 10.14-0.90Q9.99-0.31 9.46 0.04Q8.93 0.40 7.66 0.40Q6.42 0.40 5.85 0.02Q5.28-0.35 5.15-0.95Q5.02-1.54 5.02-2.29L5.02-11.04Q5.02-12.63 4.47-13.77Q3.92-14.92 2.88-15.53Q1.85-16.15 0.26-16.15Q-1.28-16.15-2.42-15.51Q-3.56-14.87-4.18-13.73Q-4.80-12.58-4.80-11.04L-4.80-2.24Q-4.80-1.50-4.93-0.90Q-5.06-0.31-5.61 0.04Q-6.16 0.40-7.44 0.40"/><path transform="translate(408.32 0)" d="M7.81 0.35Q6.53 0.35 5.92-0.13Q5.30-0.62 5.30-1.45L5.61-2.90Q5.26-2.33 4.42-1.56Q3.59-0.79 2.22-0.20Q0.86 0.40-1.08 0.40Q-3.15 0.40-4.97-0.46Q-6.80-1.32-8.18-2.84Q-9.57-4.36-10.38-6.31Q-11.20-8.27-11.20-10.52Q-11.20-12.67-10.38-14.59Q-9.57-16.50-8.16-18Q-6.75-19.49-4.93-20.35Q-3.10-21.21-1.08-21.21Q0.73-21.21 1.98-20.72Q3.23-20.24 4.11-19.51Q4.99-18.79 5.57-18L5.30-19.27Q5.30-20.24 5.92-20.75Q6.53-21.25 7.85-21.25Q9.09-21.25 9.61-20.88Q10.14-20.50 10.27-19.87Q10.41-19.23 10.41-18.44L10.41-2.33Q10.41-1.58 10.27-0.97Q10.14-0.35 9.59 0Q9.04 0.35 7.81 0.35M-0.29-4.75Q1.21-4.75 2.40-5.50Q3.59-6.25 4.31-7.55Q5.04-8.84 5.04-10.43Q5.04-12.14 4.29-13.42Q3.54-14.70 2.33-15.42Q1.12-16.15-0.37-16.15Q-2-16.15-3.28-15.38Q-4.55-14.61-5.28-13.31Q-6.01-12.01-6.01-10.38Q-6.01-8.80-5.26-7.52Q-4.51-6.25-3.21-5.50Q-1.91-4.75-0.29-4.75"/><path transform="translate(432.49 0)" d="M1.61 0.53Q-0.51 0.53-2.51-0.20Q-4.51-0.92-6.12-2.33Q-7.72-3.74-8.67-5.79Q-9.61-7.83-9.61-10.43Q-9.61-13.02-8.67-15.05Q-7.72-17.07-6.14-18.48Q-4.55-19.89-2.57-20.64Q-0.59-21.38 1.52-21.38Q3.06-21.38 4.44-20.94Q5.83-20.50 6.84-19.89Q7.85-19.27 8.29-18.66Q8.87-18.13 9.26-17.64Q9.66-17.16 9.53-16.46Q9.39-16.02 9.13-15.64Q8.87-15.27 8.47-14.87Q7.41-13.68 6.40-13.99Q5.83-14.30 5.26-14.65Q4.69-15 4.09-15.33Q3.50-15.66 2.88-15.88Q2.27-16.10 1.52-16.10Q-0.15-16.10-1.45-15.38Q-2.75-14.65-3.48-13.38Q-4.20-12.10-4.20-10.43Q-4.20-8.76-3.48-7.46Q-2.75-6.16-1.47-5.43Q-0.20-4.71 1.43-4.71Q2.22-4.71 2.95-4.91Q3.67-5.10 4.25-5.43Q4.82-5.76 5.17-6.12Q5.65-6.42 6.05-6.69Q6.45-6.95 6.89-6.95Q7.41-6.95 7.92-6.58Q8.43-6.20 9.04-5.41Q9.61-4.75 9.68-4.14Q9.75-3.52 9.42-2.95Q9.09-2.38 8.34-1.89Q7.81-1.36 6.78-0.81Q5.74-0.26 4.40 0.13Q3.06 0.53 1.61 0.53"/><path transform="translate(455.08 0)" d="M0.55-10.65L8.60-4.31Q9.75-3.34 9.81-2.51Q9.88-1.67 8.91-0.57Q8.16 0.26 7.59 0.53Q7.02 0.79 6.45 0.55Q5.87 0.31 5.08-0.35L-3.32-7.44L-3.32-2.20Q-3.32-1.50-3.48-0.88Q-3.63-0.26-4.18 0.09Q-4.73 0.44-5.96 0.44Q-7.19 0.44-7.74 0.07Q-8.29-0.31-8.43-0.92Q-8.56-1.54-8.56-2.24L-8.56-28.51Q-8.56-29.26-8.40-29.85Q-8.25-30.45-7.70-30.82Q-7.15-31.20-5.92-31.20Q-4.69-31.20-4.16-30.82Q-3.63-30.45-3.48-29.85Q-3.32-29.26-3.32-28.47L-3.32-14.04L2.75-19.93Q3.45-20.59 4.07-20.83Q4.69-21.08 5.28-20.88Q5.87-20.68 6.53-19.93Q7.63-18.74 7.59-17.97Q7.55-17.20 6.49-16.15"/><path transform="translate(476.61 0)" d="M-0.29 0.70Q-1.43 0.70-2.71 0.46Q-3.98 0.22-5.17-0.24Q-6.36-0.70-7.22-1.34Q-8.07-1.98-8.29-2.77Q-8.47-3.21-8.43-3.63Q-8.38-4.05-8.16-4.51Q-7.94-4.97-7.50-5.46Q-7.11-5.94-6.69-6.01Q-6.27-6.07-5.61-5.72Q-5.04-5.50-4.36-5.15Q-3.67-4.80-2.95-4.44Q-2.22-4.09-1.45-3.87Q-0.68-3.65 0.07-3.65Q1.69-3.65 2.66-4.20Q3.63-4.75 3.63-5.76Q3.63-6.34 3.32-6.78Q3.01-7.22 2.51-7.50Q2-7.79 1.32-8.03Q0.64-8.27-0.13-8.47Q-0.90-8.67-1.74-8.93Q-2.84-9.24-3.94-9.68Q-5.04-10.12-5.90-10.82Q-6.75-11.53-7.28-12.58Q-7.81-13.64-7.81-15.22Q-7.81-17.20-6.86-18.59Q-5.92-19.98-4.11-20.72Q-2.31-21.47 0.24-21.47Q1.12-21.47 1.94-21.34Q2.75-21.21 3.52-20.97Q4.29-20.72 5.02-20.37Q5.74-20.02 6.40-19.58Q7.50-18.96 7.55-18.15Q7.59-17.34 6.93-16.41Q6.45-15.80 5.96-15.55Q5.48-15.31 4.95-15.53Q4.25-15.88 3.43-16.30Q2.62-16.72 1.76-17.03Q0.90-17.34-0.02-17.34Q-0.90-17.34-1.61-17.07Q-2.31-16.81-2.66-16.32Q-3.01-15.84-3.01-15.18Q-3.01-14.56-2.66-14.17Q-2.31-13.77-1.74-13.51Q-1.17-13.24-0.37-13.05Q0.42-12.85 1.30-12.67Q2.53-12.41 3.81-12.01Q5.08-11.62 6.16-10.91Q7.24-10.21 7.90-9.04Q8.56-7.88 8.56-6.03Q8.56-2.82 6.20-1.06Q3.85 0.70-0.29 0.70"/></g></g>
<g transform="translate(876.5 -6) scale(0.72)">
  <g transform="translate(6 18) scale(0.30)"><path fill="#F9D3DC" d="M860.0 174.0 L855.3 190.5 L851.6 195.8 L836.6 204.4 L830.8 210.2 L800.7 259.1 L778.1 299.4 L759.8 306.8 L732.1 337.2 L713.2 351.3 L688.3 365.4 L681.8 371.9 L675.1 385.3 L661.7 388.5 L654.4 393.5 L647.8 399.7 L625.8 428.3 L612.0 439.3 L604.2 444.0 L595.7 446.1 L592.1 444.4 L593.1 434.9 L590.8 432.6 L579.9 432.9 L576.9 439.5 L571.6 461.1 L569.1 463.9 L559.7 463.1 L557.6 467.3 L557.5 471.6 L564.9 477.4 L567.1 481.0 L572.2 500.6 L571.7 510.5 L566.7 521.6 L567.5 526.8 L587.4 568.7 L614.4 595.2 L628.7 601.8 L635.3 610.2 L645.4 628.1 L657.5 642.5 L662.3 645.3 L668.1 645.9 L682.3 637.3 L695.2 635.1 L704.7 615.5 L710.8 611.7 L744.9 610.3 L749.2 611.5 L752.4 614.7 L762.8 638.9 L763.3 643.6 L750.3 653.4 L746.9 660.9 L746.7 665.7 L755.7 695.9 L757.9 726.7 L717.7 781.7 L716.0 773.8 L705.9 772.8 L696.6 761.7 L685.1 754.7 L672.9 755.8 L667.6 754.5 L650.9 742.3 L639.1 727.3 L623.3 718.8 L620.9 713.2 L621.6 690.4 L619.3 684.8 L615.6 682.9 L607.0 682.8 L602.9 681.1 L595.9 674.1 L591.9 674.3 L589.4 672.0 L587.5 665.2 L584.9 662.8 L575.6 667.1 L572.0 663.9 L562.6 644.5 L559.1 642.5 L548.1 657.7 L541.5 658.8 L535.9 665.1 L525.3 665.9 L520.7 675.9 L517.8 677.5 L491.4 677.8 L484.5 681.0 L480.0 688.0 L480.7 691.7 L485.9 698.7 L485.0 704.5 L478.4 715.0 L466.1 728.8 L446.0 761.2 L443.4 770.2 L443.0 779.6 L444.9 788.2 L449.4 793.7 L462.7 802.3 L458.2 823.5 L457.8 829.3 L459.5 833.7 L472.9 840.5 L484.4 840.9 L487.4 842.5 L488.7 850.1 L486.0 860.6 L477.6 880.5 L475.3 883.0 L466.9 886.7 L461.0 893.8 L459.9 901.1 L457.3 903.5 L452.9 904.0 L454.0 895.7 L451.5 893.1 L448.0 893.9 L436.8 903.5 L430.9 906.3 L424.6 907.6 L408.5 904.3 L404.2 905.0 L401.9 910.0 L403.7 952.8 L401.2 959.4 L396.4 960.0 L385.4 952.9 L373.5 954.2 L365.8 951.7 L334.9 934.1 L317.8 933.1 L309.0 925.6 L287.7 925.2 L284.8 922.7 L282.4 912.5 L279.1 910.3 L274.7 911.3 L262.0 918.6 L259.8 918.4 L259.2 915.5 L259.9 903.0 L266.6 895.8 L268.4 887.5 L267.9 875.4 L262.5 852.2 L276.4 860.5 L281.0 860.7 L284.7 858.1 L291.7 844.7 L306.6 835.4 L306.1 805.1 L301.9 793.1 L305.1 787.0 L331.0 762.1 L346.0 758.9 L354.0 749.5 L359.2 748.8 L371.3 751.3 L378.6 749.1 L381.3 746.6 L386.8 733.6 L395.0 729.6 L396.4 724.2 L395.8 718.4 L386.9 714.9 L387.3 707.4 L394.8 705.6 L399.2 699.9 L405.3 686.1 L404.3 679.0 L402.1 677.9 L394.4 679.7 L392.4 672.4 L389.8 670.9 L374.5 674.3 L375.4 661.3 L362.9 652.9 L336.8 630.9 L325.7 654.7 L331.5 658.2 L332.7 662.3 L339.3 664.2 L339.7 668.4 L333.1 672.9 L330.9 677.9 L329.8 688.5 L321.4 692.3 L312.9 716.1 L310.6 718.5 L308.6 714.5 L306.5 713.5 L296.3 712.4 L286.6 720.0 L281.4 721.1 L278.1 720.1 L273.9 715.7 L277.0 692.8 L273.0 674.4 L283.6 639.1 L288.1 635.8 L288.4 629.2 L287.8 627.4 L280.8 625.0 L282.0 617.3 L280.8 614.9 L267.0 614.2 L263.7 610.9 L256.9 621.4 L238.2 706.2 L232.4 695.0 L230.4 682.4 L230.6 669.4 L235.2 658.8 L235.3 655.0 L230.9 645.4 L230.9 642.0 L237.9 636.6 L239.0 633.4 L238.3 619.4 L246.6 612.4 L249.9 607.0 L253.3 582.3 L211.2 574.1 L209.4 618.1 L211.1 622.2 L222.8 633.1 L217.6 663.8 L201.7 667.9 L180.7 669.6 L140.0 687.2 L164.8 602.6 L168.9 496.9 L171.3 488.5 L178.4 484.5 L180.2 481.5 L186.5 422.6 L217.5 400.1 L219.9 396.6 L221.8 383.7 L224.7 377.4 L228.9 374.9 L233.6 376.2 L238.1 381.4 L242.0 382.6 L246.8 373.4 L247.4 368.8 L245.1 363.2 L234.9 356.0 L232.7 350.7 L237.7 341.7 L238.3 333.3 L229.0 322.1 L227.4 316.8 L240.8 312.3 L239.8 299.3 L241.0 288.7 L239.3 284.3 L241.5 281.1 L275.6 263.9 L292.0 237.9 L294.7 235.7 L305.1 233.6 L307.3 224.1 L309.8 222.2 L325.2 221.4 L328.5 219.6 L331.6 205.1 L337.2 199.8 L355.4 192.2 L362.7 190.5 L454.4 208.6 L463.4 208.7 L517.7 197.3 L518.0 116.2 L515.7 107.8 L493.6 79.0 L481.7 59.3 L485.4 53.8 L492.9 49.8 L578.0 40.0 L647.7 60.1 L651.5 63.8 L661.5 84.7 L666.9 90.7 L674.2 95.0 L682.4 97.2 L693.5 97.1 L703.3 103.2 L706.0 111.0 L706.6 120.0 L690.2 115.8 L693.1 124.7 L697.8 131.1 L733.9 132.2 L754.0 113.1 L754.5 118.9 L770.3 116.4 L777.2 117.6 L784.3 122.3 L789.9 128.8 L794.5 136.2 L799.8 150.8 L804.9 157.0 L812.6 162.3 L821.2 165.6 L828.9 166.1 L840.2 163.6 Z"/></g>
  
    <g transform="translate(54 0) scale(1 1)">
      <path fill="#3E9E4F" d="M-11 236 V140 a11 11 0 0 1 22 0 V236 Z"/>
      <path fill="#3E9E4F" d="M-11 196 H-26 a9 9 0 0 1 -9 -9 V160 a7 7 0 0 1 14 0 V182 H-11 Z"/>
      <path fill="#3E9E4F" d="M11 182 H23 V168 a7 7 0 0 1 14 0 V184 a9 9 0 0 1 -9 9 H11 Z"/>
      <path stroke="#62BF6E" stroke-width="2.4" stroke-linecap="round" fill="none" d="M-4 146 V230 M4 146 V230"/>
    </g>
    <g transform="translate(246 0) scale(-1 1)">
      <path fill="#3E9E4F" d="M-11 236 V140 a11 11 0 0 1 22 0 V236 Z"/>
      <path fill="#3E9E4F" d="M-11 196 H-26 a9 9 0 0 1 -9 -9 V160 a7 7 0 0 1 14 0 V182 H-11 Z"/>
      <path fill="#3E9E4F" d="M11 182 H23 V168 a7 7 0 0 1 14 0 V184 a9 9 0 0 1 -9 9 H11 Z"/>
      <path stroke="#62BF6E" stroke-width="2.4" stroke-linecap="round" fill="none" d="M-4 146 V230 M4 146 V230"/>
    </g>
  <g fill="#EE7FA6"><circle cx="78" cy="236" r="12"/><circle cx="96" cy="236" r="12"/><circle cx="114" cy="236" r="12"/><circle cx="132" cy="236" r="12"/><circle cx="150" cy="236" r="12"/><circle cx="168" cy="236" r="12"/><circle cx="186" cy="236" r="12"/><circle cx="204" cy="236" r="12"/><circle cx="222" cy="236" r="12"/></g>
  <path fill="#D95C8A" opacity=".35" d="M70 236 h160 v6 H70z"/>
  <!-- wafer roll -->
  <g transform="rotate(24 176 120)"><rect x="168" y="62" width="16" height="84" rx="4" fill="#E2A85C"/>
    <path stroke="#C4863A" stroke-width="2" d="M168 76 h16 M168 92 h16 M168 108 h16 M168 124 h16"/></g>
  <!-- scoops -->
  <path fill="#6B3A23" d="M88 170 c-6 -34 22 -58 52 -54 c28 4 40 30 32 54 Z"/>
  <path fill="#8C5235" opacity=".7" d="M104 140 c6 -10 18 -14 28 -12 c-12 4 -20 10 -24 20 Z"/>
  <path fill="#F48FB1" d="M140 170 c-4 -32 20 -52 46 -48 c26 4 38 28 28 48 Z"/>
  <path fill="#F9B6CB" d="M156 138 c6 -8 16 -10 24 -8 c-10 4 -16 8 -20 16 Z"/>
  <!-- cherry -->
  <path stroke="#5B7F2A" stroke-width="3" fill="none" stroke-linecap="round" d="M152 104 c2 -14 8 -22 16 -26"/>
  <circle cx="150" cy="114" r="13" fill="#D3203A"/><circle cx="145" cy="109" r="4" fill="#fff" opacity=".7"/>
  <!-- waffle basket -->
  <path fill="#E9B36A" d="M78 166 h144 l-18 66 h-108 Z"/>
  <clipPath id="bk"><path d="M78 166 h144 l-18 66 h-108 Z"/></clipPath>
  <g clip-path="url(#bk)" stroke="#C4863A" stroke-width="2.6"><path d="M-16 168 l48 64"/><path d="M32 168 l-48 64"/><path d="M0 168 l48 64"/><path d="M48 168 l-48 64"/><path d="M16 168 l48 64"/><path d="M64 168 l-48 64"/><path d="M32 168 l48 64"/><path d="M80 168 l-48 64"/><path d="M48 168 l48 64"/><path d="M96 168 l-48 64"/><path d="M64 168 l48 64"/><path d="M112 168 l-48 64"/><path d="M80 168 l48 64"/><path d="M128 168 l-48 64"/><path d="M96 168 l48 64"/><path d="M144 168 l-48 64"/><path d="M112 168 l48 64"/><path d="M160 168 l-48 64"/><path d="M128 168 l48 64"/><path d="M176 168 l-48 64"/><path d="M144 168 l48 64"/><path d="M192 168 l-48 64"/><path d="M160 168 l48 64"/><path d="M208 168 l-48 64"/><path d="M176 168 l48 64"/><path d="M224 168 l-48 64"/><path d="M192 168 l48 64"/><path d="M240 168 l-48 64"/><path d="M208 168 l48 64"/><path d="M256 168 l-48 64"/></g>
  <path fill="#E9B36A" stroke="#C4863A" stroke-width="2" d="M72 168 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 q8 -12 16 0 v6 h-144 Z"/>
  </g>
</svg>
`;var ea=10,ja=160,Ks={magenta:"#D6246E",sunflower:"#F7C815",green:"#2E9E5B",pink:"#F0567A",mango:"#F39A1E",cream:"#FFF6E8",chamoy:"#A3182E",yellowWall:"#F2C418",counter:"#E87FA4",cantera:"#E7A9AE",pinkWall:"#EC8DB0",white:"#F6F1EA",top:"#F4F1EC"},rS=r=>[1,3,5].map(t=>parseInt(r.slice(t,t+2),16)/255),js=r=>rS(r).map(t=>Math.pow(t,2.2)),Qr=r=>new Q(r[0],r[1],r[2]),a1=["magenta","sunflower","green","pink","mango","cream","magenta","green","sunflower","chamoy","mango","pink"],o1=["magenta","green","mango","chamoy","green","magenta","mango"],to=[zi.cone,zi.strawberry,zi.elote,zi.chile,zi.cactus,zi.zacatecas,zi.dalia,zi.paleta],ou=new Q(-.36,.5,.79).normalize(),l1=[1,.92,.8].map(r=>r*1.5),c1=[.6,.68,.86].map(r=>r*.34),h1=[.55,.36,.34].map(r=>r*.2),jd=r=>Math.min(1,Math.max(0,r)),ta=(r,t,e)=>r+(t-r)*e,Sl=r=>(r=jd(r),r*r*(3-2*r)),sS=r=>(r=jd(r),r*r*r*(r*(r*6-15)+10)),vs=(r,t,e)=>jd((r-t)/(e-t));function u1(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function aS(r,t,e){return new Promise((n,i)=>{let s=URL.createObjectURL(new Blob([r],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let o=document.createElement("canvas");o.width=t,o.height=e,o.getContext("2d").drawImage(a,0,0,t,e),URL.revokeObjectURL(s),n(o)},a.onerror=o=>{URL.revokeObjectURL(s),i(o)},a.src=s})}function oS(){let r=document.createElement("canvas");r.width=2048,r.height=434;let t=r.getContext("2d");return t.font='700 230px Fredoka, "Lilita One", system-ui, sans-serif',t.textBaseline="middle",t.lineJoin="round",t.lineWidth=28,t.strokeStyle="#fff",t.strokeText("La Zacatecana",60,200),t.fillStyle="#C2185B",t.fillText("La Zacatecana",60,200),r}function lS(r,t){let e=[],n=[];for(let s=0;s<=t;s++)for(let a=0;a<=r;a++)e.push(a/r,s/t,0);for(let s=0;s<t;s++)for(let a=0;a<r;a++){let o=s*(r+1)+a,l=o+1,c=o+r+1,h=c+1;n.push(o,c,l,l,c,h)}let i=new Ga;return i.setAttribute("position",new en(new Float32Array(e),3)),i.setIndex(n),i}function cS(r){let t=[],e=[];for(let i=0;i<ea;i++){let s=t.length/3;for(let a=0;a<=r;a++)t.push(a/r,-1,i,a/r,1,i);for(let a=0;a<r;a++){let o=s+a*2;e.push(o,o+2,o+1,o+1,o+2,o+3)}}let n=new Vn;return n.setAttribute("position",new en(new Float32Array(t),3)),n.setIndex(e),n}function hS(r,t,e,n,i){let s=[],a=[],o=[],l=(E,y,M,A,w)=>{let x=s.length/3;s.push(...E,...y,...M,...A);for(let T=0;T<4;T++)a.push(...w);o.push(x,x+1,x+2,x,x+2,x+3)},c=[];c.push([-r,t]),c.push([-r,e]);let h=28;for(let E=1;E<h;E++){let y=Math.PI-E/h*Math.PI;c.push([Math.cos(y)*r,e+Math.sin(y)*r])}c.push([r,e]),c.push([r,t]);for(let E=0;E<c.length-1;E++){let[y,M]=c[E],[A,w]=c[E+1],x=-(w-M),T=A-y,C=Math.hypot(x,T);x/=C,T/=C,l([y,M,0],[y,M,-n],[A,w,-n],[A,w,0],[-x,-T,0])}let{hx:d,th:u,pr:f}=i,g=t-u,_=t,p=-n,m=f;l([-d,_,m],[d,_,m],[d,_,p],[-d,_,p],[0,1,0]),l([-d,g,m],[d,g,m],[d,_,m],[-d,_,m],[0,0,1]),l([-d,g,p],[d,g,p],[d,g,m],[-d,g,m],[0,-1,0]),l([-d,g,p],[-d,g,m],[-d,_,m],[-d,_,p],[-1,0,0]),l([d,g,m],[d,g,p],[d,_,p],[d,_,m],[1,0,0]);let b=new Vn;return b.setAttribute("position",new en(new Float32Array(s),3)),b.setAttribute("normal",new en(new Float32Array(a),3)),b.setIndex(o),b}async function f1({canvas:r,stage:t,getCopyRect:e,phone:n,assetBase:i="assets/"}){let s=new nu({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});s.autoClear=!0,s.info.autoReset=!1,s.outputColorSpace="srgb-linear";let a=s.getContext(),o=s.capabilities.getMaxAnisotropy(),[l,c]=await Promise.all([e1(r1),aS(s1,2048,Math.round(2048*230/1087)).catch(()=>oS())]),h=new Va(l);h.flipY=!1,h.colorSpace=Ti,h.minFilter=bi,h.magFilter=ke,h.anisotropy=Math.min(8,o),h.generateMipmaps=!0;let d=new Va(c);d.colorSpace=Ti,d.anisotropy=Math.min(8,o),d.minFilter=bi;let u=new gn(1024,1024,{generateMipmaps:!0,minFilter:bi,magFilter:ke,wrapS:as,wrapT:as,depthBuffer:!1});u.texture.wrapS=u.texture.wrapT=as,u.texture.anisotropy=Math.min(4,o);let f=new Vn;f.setAttribute("position",new en(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),f.setAttribute("uv",new en(new Float32Array([0,0,2,0,0,2]),2));let g=new ps(-1,1,1,-1,0,1),_=new ls,p=new Ye(f,new We({vertexShader:Jd,fragmentShader:Hg,depthTest:!1,depthWrite:!1}));p.frustumCulled=!1,_.add(p),s.setRenderTarget(u),s.render(_,g),s.setRenderTarget(null),p.material.dispose();let m=n?[1024,1024]:[2048,1280],b=new gn(m[0],m[1],{depthBuffer:!1,minFilter:ke,magFilter:ke,wrapS:Mi,wrapT:Mi}),E=new gn(m[0]/2,m[1]/2,{depthBuffer:!1,minFilter:ke,magFilter:ke}),y=new gn(m[0]/2,m[1]/2,{depthBuffer:!1,minFilter:ke,magFilter:ke}),M=new ps(-5,5,5,-5,.1,60),A=new tn,w={uA:{value:Array.from({length:ea},()=>new Q)},uC:{value:Array.from({length:ea},()=>new Q)},uE:{value:Array.from({length:ea},()=>new Q)},uFl:{value:new Float32Array(ea).fill(1)},uLv:{value:new Float32Array(ea).fill(.3)},uGa:{value:new Float32Array(ea).fill(0)},uTime:{value:0},uWind:{value:1},uPtrO:{value:new Q(0,0,50)},uPtrD:{value:new Q(0,0,-1)},uPtrAmt:{value:0},uPtrR:{value:.5},uAtlas:{value:h},uHeader:{value:Zg},uL:{value:ou.clone()},uKey:{value:Qr(l1)},uSky:{value:Qr(c1)},uBounce:{value:Qr(h1)},uRes:{value:[1,1]},uVig:{value:.32}},x=lS(n?10:12,n?13:16),T=new Yi(new Float32Array(ja*2),2),C=new Yi(new Float32Array(ja*4),4),I=new Yi(new Float32Array(ja*3),3),P=new Yi(new Float32Array(ja*4),4);x.setAttribute("iT",T),x.setAttribute("iTile",C),x.setAttribute("iCol",I),x.setAttribute("iMisc",P),x.instanceCount=0;let O=new We({uniforms:w,vertexShader:Ng,fragmentShader:Ug,side:jn,alphaToCoverage:!0,transparent:!1}),D=new Ye(x,O);D.frustumCulled=!1;let B=new We({uniforms:w,vertexShader:Fg,fragmentShader:Og,side:jn,depthTest:!1,depthWrite:!1,transparent:!0,blending:rl,blendEquation:mr,blendSrc:al,blendDst:ol,blendEquationAlpha:sl,blendSrcAlpha:Ys,blendDstAlpha:Ys}),q=new Ye(x,B);q.frustumCulled=!1;let z=cS(48),K={...w,uW:{value:.006},uView:{value:ou.clone()},uUseView:{value:0}},Y=new We({uniforms:K,vertexShader:kg,fragmentShader:zg,side:jn}),L=new Ye(z,Y);L.frustumCulled=!1;let tt={...K,uUseView:{value:1},uW:{value:.006}},Tt=new We({uniforms:tt,vertexShader:Qg,fragmentShader:Vg,side:jn,depthTest:!1,depthWrite:!1,transparent:!0,blending:rl,blendEquation:mr,blendSrc:al,blendDst:ol,blendEquationAlpha:sl,blendSrcAlpha:Ys,blendDstAlpha:Ys}),At=new Ye(z,Tt);At.frustumCulled=!1;let Rt={hw:1,hRect:1.25,ySill:1.05,depth:.45};Rt.ySpring=Rt.ySill+Rt.hRect;let Qt={hx:Rt.hw+.16,th:.12,pr:.15},$t=(()=>{let vt=js(Ks.cantera),se=[.85,.6,.62].map(ne=>Math.pow(ne,2.2)),St=ou.z;return vt.map((ne,kt)=>ne/(se[kt]*(l1[kt]*St+c1[kt]*.62+h1[kt]*.5)))})(),Z={...w,uStone:{value:u.texture},uShA:{value:b.texture},uShB:{value:y.texture},uLightVP:{value:A},uWin:{value:[0,Rt.ySill,Rt.ySpring,Rt.hw]},uSill:{value:[Qt.hx,Qt.th,Qt.pr,Rt.depth]},uAlb:{value:Qr($t)},uShOn:{value:1},uSoft:{value:.04},uIsJamb:{value:0}},nt=new We({uniforms:Z,vertexShader:yl,fragmentShader:Kd}),dt=new Vn;dt.setAttribute("position",new en(new Float32Array([-40,-30,0,40,-30,0,40,40,0,-40,40,0]),3)),dt.setAttribute("normal",new en(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),3)),dt.setIndex([0,1,2,0,2,3]);let Gt=new Ye(dt,nt);Gt.frustumCulled=!1;let _t=new We({uniforms:{...Z,uIsJamb:{value:1}},vertexShader:yl,fragmentShader:Kd}),Ht=new Ye(hS(Rt.hw,Rt.ySill,Rt.ySpring,Rt.depth,Qt),_t),yt={x0:-3.8,x1:3.8,y0:0,y1:3.6,z0:-5.6,z1:-Rt.depth},wt={x0:-2.3,x1:2.3,h:1.02,zf:yt.z0+1.6,depth:.65},qt={uMark:{value:d},uMarkRect:{value:[-1,1.6,2,.4]},uMin:{value:new Q(yt.x0,yt.y0,yt.z0)},uMax:{value:new Q(yt.x1,yt.y1,yt.z1)},uYellow:{value:Qr(js(Ks.yellowWall))},uPinkWall:{value:Qr(js(Ks.pinkWall))},uWhite:{value:Qr(js(Ks.white))},uExpo:{value:.85},uRes:w.uRes,uVig:w.uVig,uWainscot:{value:1.3}},re=new kr(yt.x1-yt.x0,yt.y1-yt.y0,yt.z1-yt.z0);re.translate((yt.x0+yt.x1)/2,(yt.y0+yt.y1)/2,(yt.z0+yt.z1)/2);let V=new Ye(re,new We({uniforms:qt,vertexShader:yl,fragmentShader:Wg,side:Rn})),ee={uPink:{value:Qr(js(Ks.counter))},uTop:{value:Qr(js(Ks.top))},uH:{value:wt.h},uExpo:qt.uExpo,uRes:w.uRes,uVig:w.uVig,uFlat:{value:0},uProd:{value:Array.from({length:4},()=>new He(0,0,1,1))},uProdOn:{value:0}},Te=new kr(wt.x1-wt.x0,wt.h,wt.depth);Te.translate((wt.x0+wt.x1)/2,wt.h/2,wt.zf-wt.depth/2);let ze=new Ye(Te,new We({uniforms:ee,vertexShader:yl,fragmentShader:Xg})),Xt=new Ga;Xt.setAttribute("position",new en(new Float32Array([0,0,0,1,0,0,1,1,0,0,1,0]),3)),Xt.setIndex([0,1,2,0,2,3]);let xe=new Yi(new Float32Array(16),4),F=new Yi(new Float32Array(16),4),Ie=new Yi(new Float32Array(4),1);Xt.setAttribute("iRect",xe),Xt.setAttribute("iPos",F),Xt.setAttribute("iAsp",Ie),Xt.instanceCount=0;let Yt={uTex:{value:null},uExpo:qt.uExpo,uFade:{value:0}},R=new Ye(Xt,new We({uniforms:Yt,vertexShader:qg,fragmentShader:Yg,alphaToCoverage:!0}));R.frustumCulled=!1,R.visible=!1;{let vt=new Image;vt.decoding="async",vt.onload=()=>{let se=new Ln(vt);se.flipY=!1,se.colorSpace=Ti,se.anisotropy=Math.min(4,o),se.minFilter=bi,se.needsUpdate=!0,Yt.uTex.value=se,R.visible=!0,Yt.uFade.value=1,ee.uProdOn.value=1},vt.src=i+"products.webp"}let v=new ls;v.add(V,ze,R,Gt,Ht,D,L);let k=new ls;k.add(q,At);let G={uTex:{value:b.texture},uDir:{value:[1/m[0],0]}},J=new Ye(f,new We({uniforms:G,vertexShader:Jd,fragmentShader:Gg,depthTest:!1,depthWrite:!1}));J.frustumCulled=!1;let ct=new ls;ct.add(J);let at=new Qn(40,1,.05,80),$=null,j=[];function pt(vt,se){let St=vt/se,ne=e?e():null,kt=St<.9,Le=kt?50:36,fe=kt?50:38,Be=Math.tan(Le*Math.PI/360),cn,ti,Xe;if(kt)cn=.54,ti=.5,Xe=ne?Math.min(.7,(ne.top-34)/se):.62;else{cn=Math.min(.3,.34/St);let Zt=ne?ne.right/vt:.46;ti=Math.min(.8,Zt+(1-Zt)*.5),Xe=ne?Math.min(.93,ne.bottom/se):.9}let Se=2*Rt.hw/cn,Ze=Se/St,Ai=Ze/(2*Be),S=-(ti-.5)*Se,N=Rt.ySill-(.5-Xe)*Ze,X=Math.tan(fe*Math.PI/360),H=kt?.62:.63,W=kt?1.9:2.6,gt=wt.h+(H-.5)*2*W*X,Et=wt.zf+W,Mt=Et-yt.z0,Bt=gt+(.5-(kt?.305:.31))*2*Mt*X,ie=Math.min(2.5,(kt?.86:.5)*2*Mt*X*St),le=ie*230/1087;qt.uMarkRect.value=[-ie/2,Bt-le/2,ie,le];let Dt=kt?[{yl:.085,yr:.15,dip:.022,z:.3},{yl:.175,yr:.105,dip:.022,z:.5},{yl:.235,yr:.25,dip:.03,z:.7},{yl:.325,yr:.325,dip:.028,z:.9}]:[{yl:.1,yr:.13,dip:.06,z:.3},{yl:.2,yr:.17,dip:.06,z:.55},{yl:.3,yr:.3,dip:.055,z:.85}],ve=kt?vt/4.3:Math.max(80,Math.min(124,vt*.07));j.length=0;let Qe=[],De=["dalia","L","A","zacatecas","Z","A","C","A","T","E","C","A","N","A","dalia"],ye=kt?De.slice(1,14):De,vn=0,Ct=0,yn=Zt=>mt(Math.sin(Zt*127.1+311.7)*43758.5453);function pe({x0:Zt,z:Wt,yM:nn,b:Re,k:Pn,Wd:Tn,st:ei,lift:Li,kinds:xr,pitch:ys,fwid:vr,fh:tp,interior:Ms}){for(let yr of[-1,1]){let er=yr*Tn,eo=nn+Re*er+Pn*er*er,hu=Re+2*Pn*er,bl=new Q(Zt+er,eo,Wt),no=new Q(Zt,nn,Wt),Mr=new Q(Zt+er/2,eo-hu*(er/2),Wt),nr=96,Sr=[0],ir=Lt(bl,Mr,no,1),ep=0;for(let li=1;li<=nr;li++){let ci=Lt(bl,Mr,no,1-li/nr);ep+=ci.distanceTo(ir),ir=ci,Sr.push(ep)}let np=li=>{for(let ci=1;ci<=nr;ci++)if(Sr[ci]>=li){let wl=(li-Sr[ci-1])/(Sr[ci]-Sr[ci-1]);return 1-(ci-1+wl)/nr}return 0},m1=j.length;j.push({side:yr,A0:bl,C0:Mr,E0:no,Wd:Tn,hv:Tn/1.3,z:Wt,lift:Li,st:ei,interior:!!Ms}),xr(yr).forEach((li,ci)=>{let wl=(ci+.5)*ys,ip=np(wl-vr/2),rp=np(wl+vr/2),sp=Math.min(ip,rp),ap=Math.max(ip,rp),op=typeof li=="string"&&li.length===1,g1=typeof li=="number"?li:zi[li],_1=op?null:a1[vn++%a1.length];Qe.push({t0:yr<0?sp:ap,t1:yr<0?ap:sp,tile:g1,hs:m1,fh:tp,fw:vr,isLetter:op,colName:_1,kind:li,side:yr,e:ci})})}}for(Dt.forEach((Zt,Wt)=>{let nn=(Ai-Zt.z)/Ai,Re=Se*nn/2,Pn=Mr=>N+(.5-Mr)*Ze*nn,Tn=Pn(Zt.yl),ei=Pn(Zt.yr),Li=(Tn+ei)/2-Zt.dip*Ze*nn,xr=(ei-Tn)/(2*Re),ys=((Tn+ei)/2-Li)/(Re*Re),vr=Wt===Dt.length-1,Ms=(vr?Math.min(ve*(kt?1:.95),vt*(kt?.975:.93)/ye.length):ve*(1-Wt*.05))/vt*Se*nn,yr=Ms*(vr?.9:.85),er=yr*1.25,eo=vr?Math.ceil(ye.length/2):0,hu=S+(vr&&ye.length%2?Ms/2:0),no=N+Ze*nn/2-Math.min(Tn,ei)+er*1.4+.5;pe({x0:hu,z:Zt.z,yM:Li,b:xr,k:ys,Wd:Re*1.3,st:(Dt.length-1-Wt)*.05,lift:no,pitch:Ms,fwid:yr,fh:er,kinds:Mr=>{let nr=[];if(vr){nr.push(...Mr<0?ye.slice(0,eo).reverse():ye.slice(eo));let Sr=Math.ceil(Re/Ms)+1-nr.length;for(let ir=0;ir<Sr;ir++)nr.push(to[(ir*3+(Mr>0?1:4))%to.length])}else{let Sr=Math.ceil(Re/Ms)+1;for(let ir=0;ir<Sr;ir++)nr.push(to[Math.floor(yn(Wt*31+ir*7+(Mr>0?3:0))*to.length)])}return nr}})});j.length<8;)j.push({unused:!0});{let Zt=yt.z0+.45,Wt=Et-Zt,nn=gt+(.5-.085)*2*Wt*X,Re=Wt*X*St+.2,Pn=kt?.24:.25,Tn=kt?.12:.08;pe({x0:0,z:Zt,yM:nn-Tn,b:0,k:Tn/(Re*Re),Wd:Re*1.15,st:2,lift:0,pitch:Pn,fwid:Pn*.86,fh:Pn*.86*1.25,interior:!0,kinds:ei=>{let Li=Math.ceil(Re/Pn)+1,xr=[];for(let ys=0;ys<Li;ys++)xr.push(to[(ys*3+(ei>0?5:1))%to.length]);return xr}})}Qe.filter(Zt=>Zt.isLetter).sort((Zt,Wt)=>Zt.side*(Zt.e+.5)-Wt.side*(Wt.e+.5)).forEach(Zt=>{Zt.colName=o1[Ct++%o1.length]}),Qe.forEach((Zt,Wt)=>{Wt>=ja||(T.array[Wt*2]=Zt.t0,T.array[Wt*2+1]=Zt.t1,C.array.set(n1(Zt.tile),Wt*4),I.array.set(js(Ks[Zt.colName]),Wt*3),P.array.set([Zt.hs,yn(Wt*3.7+1.3),Zt.fh,Zt.fw],Wt*4))}),x.instanceCount=Math.min(ja,Qe.length),T.needsUpdate=C.needsUpdate=I.needsUpdate=P.needsUpdate=!0;{let Zt=kt?[1,2,3]:[1,0,2,3],Wt=wt.zf-.2,Re=2*(Et-Wt)*X*St*(kt?.68:.56),Pn=kt?.82:1.05;Zt.forEach((Tn,ei)=>{let Li=i1[Tn],xr=Zt.length===1?0:-Re/2+Re*ei/(Zt.length-1);xe.array.set(Li.uv,ei*4),F.array.set([xr,wt.h-.004,Wt,Li.h*Pn],ei*4),Ie.array[ei]=Li.aspect,ee.uProd.value[ei].set(xr,Wt+.01,Li.h*Pn*Li.aspect*.42,.07)});for(let Tn=Zt.length;Tn<4;Tn++)ee.uProd.value[Tn].set(99,99,.01,.01);Xt.instanceCount=Zt.length,xe.needsUpdate=F.needsUpdate=Ie.needsUpdate=!0}$={W:vt,H:se,a:St,portrait:kt,fov0:Le,fov1:fe,D:Ai,cx:S,cy:N,visW:Se,visH:Ze,ycam1:gt,zcam1:Et,yWinMid:Rt.ySill+.85},w.uPtrR.value=Se*.07,K.uW.value=Math.max(.0035,Se*.0011);let Hn=new Q(S,N,0);M.position.copy(Hn).addScaledVector(ou,20),M.up.set(0,1,0),M.lookAt(Hn),M.updateMatrixWorld();let Ei=M.matrixWorldInverse,Ci=1e9,tr=-1e9,be=1e9,Ve=-1e9;for(let[Zt,Wt,nn]of[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,1,1.3],[1,1,1.3]]){let Re=new Q(S+Zt*Se*.6,N+Wt*Ze*.6,nn).applyMatrix4(Ei);Ci=Math.min(Ci,Re.x),tr=Math.max(tr,Re.x),be=Math.min(be,Re.y),Ve=Math.max(Ve,Re.y)}M.left=Ci,M.right=tr,M.top=Ve,M.bottom=be,M.updateProjectionMatrix(),A.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse)}function Lt(vt,se,St,ne){let kt=1-ne;return new Q().addScaledVector(vt,kt*kt).addScaledVector(se,2*kt*ne).addScaledVector(St,ne*ne)}function mt(vt){return vt-Math.floor(vt)}let ut=new Q,lt=new Q,Ft=(vt,se,St,ne,kt,Le)=>{let fe=1-kt;return Le.set(0,0,0).addScaledVector(vt,fe*fe*fe).addScaledVector(se,3*fe*fe*kt).addScaledVector(St,3*fe*kt*kt).addScaledVector(ne,kt*kt*kt)},Vt=new Q,U=new Q,ht=new Q,et=new Q,ft=new Q,xt=new Q,it=new Q,ot=new Q;function rt(vt){j.forEach((St,ne)=>{let kt=w.uA.value[ne],Le=w.uC.value[ne],fe=w.uE.value[ne];if(St.unused){kt.set(0,-50,0),Le.set(0,-50,0),fe.set(0,-50,0);return}if(St.interior){kt.copy(St.A0),Le.copy(St.C0),fe.copy(St.E0),w.uFl.value[ne]=.8,w.uLv.value[ne]=.25,w.uGa.value[ne]=0;return}let Be=vs(vt,St.st,St.st+.5),cn=Sl(vs(Be,0,.75)),ti=Sl(vs(Be,.35,1));kt.set(St.A0.x+St.side*St.hv*.15*ti,St.A0.y+St.lift*ti,St.z),fe.set(St.E0.x+St.side*St.hv*1.02*cn,St.E0.y+(St.A0.y-St.E0.y)*.55*cn+St.lift*1.05*ti,St.z);let Xe=(St.A0.x+St.E0.x)/2,Se=(St.A0.y+St.E0.y)/2,Ze=1-.7*cn;Le.set((kt.x+fe.x)/2+(St.C0.x-Xe)*Ze,(kt.y+fe.y)/2+(St.C0.y-Se)*Ze,St.z+.28*Math.sin(Math.PI*Be));let Ai=Math.sin(Math.PI*Math.min(1,Be*1.25));w.uFl.value[ne]=1+2.1*Ai,w.uLv.value[ne]=.25+.5*cn,w.uGa.value[ne]=cn});let se=sS(vs(vt,.04,.97));Vt.set($.cx,$.cy,$.D),U.set(ta($.cx,0,.5),ta($.cy,$.yWinMid,.7),$.D*.6),ht.set(0,$.yWinMid-.1,-.7),et.set(0,$.ycam1,$.zcam1),Ft(Vt,U,ht,et,se,at.position),ft.set($.cx,$.cy,0),xt.set(ta($.cx,0,.8),ta($.cy,$.yWinMid,.8),-1.5),it.set(0,$.yWinMid-.15,yt.z0),ot.set(0,$.ycam1,yt.z0),Ft(ft,xt,it,ot,se,ut),ut.y+=Math.sin(Math.PI*vs(vt,0,.32))*.5,at.lookAt(ut),at.fov=ta($.fov0,$.fov1,se),at.updateProjectionMatrix(),qt.uExpo.value=ta(.8,1,Sl(vs(vt,.45,.8))),ee.uFlat.value=Sl(vs(vt,.85,1)),w.uVig.value=ta(.32,.18,Sl(vs(vt,.5,1))),$e=vt<.64}let Pt=0,st=0,Ot=1;function It(vt){let se=Math.max(1,t.clientWidth),St=Math.max(1,t.clientHeight);return!vt&&se===Pt&&Math.abs(St-st)<160?!1:(Pt=se,st=St,Ot=Math.min(window.devicePixelRatio||1,n?1.5:2),s.setPixelRatio(Ot),s.setSize(Pt,st,!1),at.aspect=Pt/st,w.uRes.value=[Pt*Ot,st*Ot],pt(Pt,st),!0)}let Kt=0,$e=!0;function oe(vt){Kt=vt}function Ne(vt){s.info.reset(),w.uTime.value=vt,rt(Kt),$e?(s.setClearColor(16777215,1),s.setRenderTarget(b),s.clear(),s.render(k,M),G.uTex.value=b.texture,G.uDir.value=[1/m[0],0],s.setRenderTarget(E),s.render(ct,g),G.uTex.value=E.texture,G.uDir.value=[0,1/m[1]],s.setRenderTarget(y),s.render(ct,g),Z.uShOn.value=1):Z.uShOn.value=0,s.setRenderTarget(null),s.setClearColor(15182254,1),s.render(v,at)}let on=new Q;function Ue(vt,se,St){on.set(vt,se,.5).unproject(at),w.uPtrO.value.copy(at.position),w.uPtrD.value.copy(on.sub(at.position).normalize()),w.uPtrAmt.value=St}function Ce(vt){w.uWind.value=vt}return It(!0),{renderer:s,resize:It,render:Ne,setP:oe,setPointerRay:Ue,setWind:Ce,info:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,flags:x.instanceCount,dpr:Ot,size:[Pt,st],shadow:m}),dispose(){s.dispose(),[h,d,u,b,E,y].forEach(vt=>vt.dispose())},get layout(){return $}}}var p1=r=>Math.min(1,Math.max(0,r)),lu=r=>(r=p1(r),r*r*(3-2*r)),cu=(r,t,e)=>p1((r-t)/(e-t));function d1(){let r=document.querySelector(".hero--b[data-hero]");if(!r||r.__heroB)return;r.__heroB=!0;let t=r.querySelector(".hero-stage"),e=r.querySelector(".hero-b__gl"),n=r.querySelector(".hero-b__copy"),i=r.querySelector(".hero-b__outro"),s=r.querySelector(".hero-b__seam"),a=new URLSearchParams(location.search),o=a.has("freeze"),l=matchMedia("(prefers-reduced-motion: reduce)"),c=matchMedia("(max-width: 719px)").matches||matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<720,h={p:0,target:0,ready:!1,static:!1};window.__heroB=h;let d=null,u=null,f=0;function g(I){h.static=I||!0,cancelAnimationFrame(f),f=0;let P=r.getBoundingClientRect().top+window.scrollY,O=r.offsetHeight,D=window.scrollY;r.classList.add("is-static"),r.classList.remove("is-gl"),u&&(u.kill(),u=null);let B=O-r.offsetHeight;if(B>0&&D>P&&window.scrollTo(0,D>P+O-innerHeight?D-B:P),window.ScrollTrigger&&ae.refresh(),d){try{d.dispose()}catch{}d=null}}if(l.matches||a.has("static")||!e||!u1()){g(l.matches?"reduced-motion":"no-webgl");return}function _(I){let P=1-lu(cu(I,.03,.17));if(n.style.opacity=P.toFixed(3),n.style.transform=`translate3d(0, ${(-56*lu(cu(I,.02,.2))).toFixed(1)}px, 0)`,n.style.visibility=P<.01?"hidden":"visible",i){let O=lu(cu(I,.86,.97));i.style.opacity=O.toFixed(3),i.style.transform=`translate3d(0, ${((1-O)*22).toFixed(1)}px, 0)`,i.style.visibility=O<.01?"hidden":"visible",i.toggleAttribute("aria-hidden",O<.5)}s&&(s.style.opacity=lu(cu(I,.88,1)).toFixed(3))}let p={x:0,y:0,on:!1,amt:0,speed:0,last:0,lx:0,ly:0,touch:0},m=1,b=0;t.addEventListener("pointermove",I=>{let P=t.getBoundingClientRect(),O=(I.clientX-P.left)/P.width*2-1,D=-((I.clientY-P.top)/P.height*2-1),B=performance.now(),q=Math.max(8,B-p.last),z=Math.hypot(I.clientX-p.lx,I.clientY-p.ly);p.speed=Math.min(1,p.speed*.5+z/q*.25),p.last=B,p.lx=I.clientX,p.ly=I.clientY,p.x=O,p.y=D,p.on=!0,I.pointerType==="touch"&&(p.touch=1)},{passive:!0}),t.addEventListener("pointerdown",I=>{if(I.pointerType!=="touch")return;let P=t.getBoundingClientRect();p.x=(I.clientX-P.left)/P.width*2-1,p.y=-((I.clientY-P.top)/P.height*2-1),p.on=!0,p.touch=1,p.speed=.8},{passive:!0}),t.addEventListener("pointerleave",()=>{p.on=!1},{passive:!0}),rf.registerPlugin(ae),ae.config({ignoreMobileResize:!0});let E=!1,y=!0,M=!document.hidden,A=0,w=0;function x(I){if(f=0,!E||!d)return;let P=Math.min(.05,A?(I-A)/1e3:.016);A=I;let O=1-Math.exp(-P*11);h.p+=(h.target-h.p)*O,Math.abs(h.target-h.p)<1e-4&&(h.p=h.target),b*=Math.exp(-P*2.2);let D=1+Math.min(1.6,Math.abs(b)/1600);m+=(D-m)*(1-Math.exp(-P*3)),p.speed*=Math.exp(-P*3.5),p.touch*=Math.exp(-P*1.6);let B=p.on?p.touch>.05?.9*p.touch:.3+.9*p.speed:0;p.amt+=(B-p.amt)*(1-Math.exp(-P*6)),w=o?2:w+P,d.setP(h.p),d.setWind(o?1:m),d.render(w),o||d.setPointerRay(p.x,p.y,p.amt),_(h.p),h.ready||(h.ready=!0,r.classList.add("is-gl")),f=requestAnimationFrame(x)}function T(){let I=y&&M&&!!d&&!h.static;I&&!E?(E=!0,A=0,f=requestAnimationFrame(x)):!I&&E&&(E=!1,cancelAnimationFrame(f),f=0)}h.settled=()=>h.ready&&Math.abs(h.target-h.p)<1e-4,h.info=()=>d?d.info():null,e.addEventListener("webglcontextlost",I=>{I.preventDefault(),g("context-lost")},!1),f1({canvas:e,stage:t,phone:c,getCopyRect:()=>{if(!n)return null;let I=t.getBoundingClientRect(),P=n.getBoundingClientRect(),O=n.style.transform;n.style.transform="none";let D=n.getBoundingClientRect();return n.style.transform=O,{left:D.left-I.left,right:D.right-I.left,top:D.top-I.top,bottom:D.bottom-I.top,width:P.width}},assetBase:r.dataset.assetBase||"assets/"}).then(I=>{if(d=I,h.static){I.dispose(),d=null;return}u=ae.create({trigger:r,start:"top top",end:"bottom bottom",onUpdate:O=>{h.target=O.progress,b=O.getVelocity()},onRefresh:O=>{h.target=O.progress}}),h.target=u.progress,h.p=(a.has("p"),h.target),new IntersectionObserver(O=>{y=O[0].isIntersecting,T()},{rootMargin:"64px"}).observe(r),document.addEventListener("visibilitychange",()=>{M=!document.hidden,T()});let P=0;window.addEventListener("resize",()=>{clearTimeout(P),P=setTimeout(()=>{d&&d.resize()&&ae.refresh()},120)}),l.addEventListener&&l.addEventListener("change",O=>{O.matches&&g("reduced-motion")}),T()}).catch(I=>{console.warn("[hero-b] falling back to static frame:",I),g("init-failed")})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d1,{once:!0}):d1();})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

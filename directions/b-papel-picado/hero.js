(()=>{function er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ts={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ea={duration:.5,overwrite:!1,delay:0},Yh,Mn,Ge,di=1e8,Ne=1/di,Bh=Math.PI*2,ag=Bh/4,og=0,_d=Math.sqrt,lg=Math.cos,cg=Math.sin,An=function(t){return typeof t=="string"},je=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},xd=function(t){return typeof t>"u"},Vi=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},$h=function(){return typeof window<"u"},Go=function(t){return je(t)||An(t)},vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,hg=/random\([^)]+\)/g,ug=/,\s*/g,ld=/(?:-?\.?\d|\.)+/gi,fg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yd=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ph=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dg=/[+-]=-?[.\d]+/,pg=/[^,'"\[\]\s]+/gi,mg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,zi,kh,Zh,jn={},qo={},Md,Sd=function(t){return(qo=As(t,jn))&&ir},bd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ca=function(t,e){return!e&&console.warn(t)},wd=function(t,e){return t&&(jn[t]=e)&&qo&&(qo[t]=e)||jn},La=function(){return 0},gg={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},_g={suppressEvents:!0},Jh={},Mr=[],zh={},Td,fi={},Ih={},cd=30,Wo=[],Kh="",jh=function(t){var e=t[0],n,i;if(Vi(e)||je(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Wo.length;i--&&!Wo[i].targetTest(e););n=Wo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Wg(t[i],n)))||t.splice(i,1);return t},ba=function(t){return t._gsap||jh(pi(t))[0]._gsap},xg=function(t,e,n){return(n=t[e])&&je(n)?t[e]():xd(n)&&t.getAttribute&&t.getAttribute(e)||n},rr=function(t,e){return(t=t.split(",")).forEach(e)||t},vg=function(t){return Math.round(t*1e5)/1e5||0},qe=function(t){return Math.round(t*1e7)/1e7||0},Ad=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},yg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Yo=function(){var t=Mr.length,e=Mr.slice(0),n,i;for(zh={},Mr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tu=function(t){return!!(t._initted||t._startAt||t.add)},Ed=function(t,e,n,i){Mr.length&&!Mn&&Yo(),t.render(e,n,i||!!(Mn&&e<0&&tu(t))),Mr.length&&!Mn&&Yo()},Cd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(pg).length<2?e:An(t)?t.trim():t},Ld=function(t){return t},ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Mg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},As=function(t,e){for(var n in e)t[n]=e[n];return t},hd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},$o=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wa=function(t){var e=t.parent||Ye,n=t.keyframes?Mg(Tn(t.keyframes)):ti;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Sg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Rd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ko=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Sr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},bg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Qh=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(Ho):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},wg=function r(t){return!t||t._ts&&r(t.parent)},ud=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t=qe(t/e));return t&&n===t?n-1:n},Zo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},jo=function(t){return t._end=qe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ne)||0))},tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=qe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),jo(t),n._dirty||Yr(n,t)),t},Pd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Zo(t.rawTime(),e),(!e._dur||Ia(0,e.totalDuration(),n)-e._tTime>Ne)&&e.render(n,!0)),Yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ne}},Qi=function(t,e,n,i){return e.parent&&Sr(e),e._start=qe((nr(n)?n:n||t!==Ye?ui(t,n,e):t._time)+e._delay),e._end=qe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Rd(t,e,"_first","_last",t._sort?"_start":0),Vh(e)||(t._recent=e),i||Pd(t,e),t._ts<0&&tl(t,t._tTime),t},Id=function(t,e){return(jn.ScrollTrigger||bd("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},Dd=function(t,e,n,i,s){if(iu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Td!==Ti.frame)return Mr.push(t),t._lazy=[s,i],1},Tg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Vh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ag=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Tg(t)&&!(!t._initted&&Vh(t))||(t._ts<0||t._dp._ts<0)&&!Vh(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Ia(0,t._tDur,e),h=Es(l,o),t._yoyo&&h&1&&(a=1-a),h!==Es(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Mn||i||t._zTime===Ne||!e&&t._zTime){if(!t._initted&&Dd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ne:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Qh(t,e,n,!0),t._onUpdate&&!n&&Kn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Sr(t,1),!n&&!Mn&&(Kn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Eg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Cs=function(t,e,n,i){var s=t._repeat,a=qe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:qe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&tl(t,t._tTime=t._tDur*o),t.parent&&jo(t),n||Yr(t.parent,t),t},fd=function(t){return t instanceof qn?Yr(t):Cs(t,t._dur)},Cg={_start:0,endTime:La,totalDuration:La},ui=function r(t,e,n){var i=t.labels,s=t._recent||Cg,a=t.duration()>=di?s.endTime(!1):t._dur,o,l,c;return An(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ta=function(t,e,n){var i=nr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;a.immediateRender=Yn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new an(e[0],a,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},Ia=function(t,e,n){return n<t?t:n>e?e:n},br=function(t,e){return!An(t)||!(e=mg.exec(t))?"":e[1]},Lg=function(t,e,n){return wr(n,function(i){return Ia(t,e,i)})},Gh=[].slice,Nd=function(t,e){return t&&Vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vi(t[0]))&&!t.nodeType&&t!==zi},Rg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return An(i)&&!e||Nd(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(t,e,n){return Ge&&!e&&Ge.selector?Ge.selector(t):An(t)&&!n&&(kh||!Ls())?Gh.call((e||Zh).querySelectorAll(t),0):Tn(t)?Rg(t,n):Nd(t)?Gh.call(t,0):t?[t]:[]},Hh=function(t){return t=pi(t)[0]||Ca("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pi(e,n.querySelectorAll?n:n===t?Ca("Invalid scope")||Zh.createElement("div"):t)}},Ud=function(t){return t.sort(function(){return .5-Math.random()})},Fd=function(t){if(je(t))return t;var e=Vi(t)?t:{each:t},n=$r(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return An(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var v=(g||e).length,p=a[v],m,w,L,y,S,b,T,x,A;if(!p){if(A=e.grid==="auto"?0:(e.grid||[1,di])[1],!A){for(T=-di;T<(T=g[A++].getBoundingClientRect().left)&&A<v;);A<v&&A--}for(p=a[v]=[],m=l?Math.min(A,v)*h-.5:i%A,w=A===di?0:l?v*d/A-.5:i/A|0,T=0,x=di,b=0;b<v;b++)L=b%A-m,y=w-(b/A|0),p[b]=S=c?Math.abs(c==="y"?y:L):_d(L*L+y*y),S>T&&(T=S),S<x&&(x=S);i==="random"&&Ud(p),p.max=T-x,p.min=x,p.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(A>v?v-1:c?c==="y"?v/A:A:Math.max(A,v/A))||0)*(i==="edges"?-1:1),p.b=v<0?s-v:s,p.u=br(e.amount||e.each)||0,n=n&&v<0?Hg(n):n}return v=(p[u]-p.min)/p.max||0,qe(p.b+(n?n(v):v)*p.v)+p.u}},Wh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=qe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(nr(n)?0:br(n))}},Od=function(t,e){var n=Tn(t),i,s;return!n&&Vi(t)&&(i=n=t.radius||di,t.values?(t=pi(t.values),(s=!nr(t[0]))&&(i*=i)):t=Wh(t.increment)),wr(e,n?je(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=di,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||nr(a)?h:h+br(a)}:Wh(t))},Bd=function(t,e,n,i){return wr(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Pg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Ig=function(t,e){return function(n){return t(parseFloat(n))+(e||br(n))}},Dg=function(t,e,n){return zd(t,e,0,1,n)},kd=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},Ng=function r(t,e,n){var i=e-t;return Tn(t)?kd(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},Ug=function r(t,e,n){var i=e-t,s=i*2;return Tn(t)?kd(t,r(0,t.length-1),e):wr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},eu=function(t){return t.replace(hg,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ug);return Bd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},zd=function(t,e,n,i,s){var a=e-t,o=i-n;return wr(s,function(l){return n+((l-t)/a*o||0)})},Fg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=An(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var v=Math.min(u,~~g);return h[v](g-v)},n=e}else i||(t=As(Tn(t)?[]:{},t));if(!h){for(l in e)nu.call(o,t,l,"get",e[l]);s=function(g){return su(g,o)||(a?t.p:t)}}}return wr(n,s)},dd=function(t,e,n){var i=t.labels,s=di,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(t,e,n){var i=t.vars,s=i[e],a=Ge,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Mr.length&&Yo(),o&&(Ge=o),h=l?s.apply(c,l):s.call(c),Ge=a,h},Ma=function(t){return Sr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&Kn(t,"onInterrupt"),t},bs,Qd=[],Vd=function(t){if(t)if(t=!t.name&&t.default||t,$h()||t.headless){var e=t.name,n=je(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:La,render:su,add:nu,kill:i1,modifier:n1,rawVars:0},a={targetTest:0,get:0,getSetter:$d,aliases:{},register:0};if(Ls(),t!==i){if(fi[e])return;ti(i,ti($o(t,s),a)),As(i.prototype,As(s,$o(t,a))),fi[i.prop=e]=i,t.targetTest&&(Wo.push(i),Jh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wd(e,i),t.register&&t.register(ir,i,Rs)}else Qd.push(t)},De=255,Sa={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},Dh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*De+.5|0},Gd=function(t,e,n){var i=t?nr(t)?[t>>16,t>>8&De,t&De]:0:Sa.black,s,a,o,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Sa[t])i=Sa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&De,i&De,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&De,t&De]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ld),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Dh(l+1/3,s,a),i[1]=Dh(l,s,a),i[2]=Dh(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(fg),n&&i.length<4&&(i[3]=1),i}else i=t.match(ld)||Sa.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/De,a=i[1]/De,o=i[2]/De,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Hd=function(t){var e=[],n=[],i=-1;return t.split(ws).forEach(function(s){var a=s.match(yd)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},pd=function(t,e,n){var i="",s=(t+i).match(ws),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Gd(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Hd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ws,"1").split(yd),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ws),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ws=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Sa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Og=/hsl[a]?\(/,Bg=function(t){var e=t.join(" "),n;if(ws.lastIndex=0,ws.test(e))return n=Og.test(e),t[1]=pd(t[1],n),t[0]=pd(t[0],n,Hd(t[1])),!0},Ra,Ti=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function v(p){var m=r()-i,w=p===!0,L,y,S,b;if((m>t||m<0)&&(n+=m-e),i+=m,S=i-n,L=S-a,(L>0||w)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=L+(L>=s?4:s-L),y=1),w||(l=c(v)),y)for(f=0;f<o.length;f++)o[f](S,u,b,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Md&&(!kh&&$h()&&(zi=kh=window,Zh=zi.document||{},jn.gsap=ir,(zi.gsapVersions||(zi.gsapVersions=[])).push(ir.version),Sd(qo||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Qd.forEach(Vd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ra=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ra=0,c=La},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,w){var L=m?function(y,S,b,T){p(y,S,b,T),d.remove(L)}:p;return d.remove(p),o[w?"unshift":"push"](L),Ls(),L},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Ls=function(){return!Ra&&Ti.wake()},me={},kg=/^[\d.\-M][\d.\-,\s]/,zg=/["']/g,Qg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(zg,"").trim():+c,i=l.substr(o+1).trim();return e},Vg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Gg=function(t){var e=(t+"").split("("),n=me[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Qg(e[1])]:Vg(t).split(",").map(Cd)):me._CE&&kg.test(t)?me._CE("",t):n},Hg=function(t){return function(e){return 1-t(1-e)}},$r=function(t,e){return t&&(je(t)?t:me[t]||Gg(t))||e},Jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return rr(t,function(o){me[o]=jn[o]=s,me[a=o.toLowerCase()]=n;for(var l in s)me[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=me[o+"."+l]=s[l]}),s},Wd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Bh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*cg((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Wd(o);return s=Bh/s,l.config=function(c,h){return r(t,c,h)},l},Uh=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Wd(n);return i.config=function(s){return r(t,s)},i};rr("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});me.Linear.easeNone=me.none=me.Linear.easeIn;Jr("Elastic",Nh("in"),Nh("out"),Nh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Jr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(_d(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-lg(r*ag)+1});Jr("Back",Uh("in"),Uh("out"),Uh());me.SteppedEase=me.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ne;return function(o){return((i*Ia(0,a,o)|0)+s)*n}}};Ea.ease=me["quad.out"];rr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kh+=r+","+r+"Params,"});var Wg=function(t,e){this.id=og++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xg,this.set=e?e.getSetter:$d},Pa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Cs(this,+e.duration,1,1),this.data=e.data,Ge&&(this._ctx=Ge,Ge.data.push(this)),Ra||Ti.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,n),!s._dp||s.parent||Pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ne||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ed(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ne?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ne?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),jo(this),bg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ne&&(this._tTime-=Ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=qe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_g);var i=Mn;return Mn=n,tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ui(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Ne),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ne)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=je(n)?n:Ld,l=function(){var h=i.then;i.then=null,s&&s(),je(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ma(this)},r})();ti(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ne,_prom:0,_ps:!1,_rts:1});var qn=(function(r){gd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Ye&&Qi(n.parent||Ye,er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Id(er(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ta(0,arguments,this),this},e.from=function(i,s,a){return Ta(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ta(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new an(i,s,ui(this,a),1),this},e.call=function(i,s,a){return Qi(this,an.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new an(i,a,ui(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,wa(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,wa(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:qe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,v,p,m,w,L,y,S,b,T;if(this!==Ye&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,L=this._ts,m=!L,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=qe(h%p),h===l?(v=this._repeat,u=c):(S=qe(h/p),v=~~S,v&&v===S&&(u=c,v--),u>c&&(u=c)),S=Es(this._tTime,p),!o&&this._tTime&&S!==v&&this._tTime-S*p-this._dur<=0&&(S=v),b&&v&1&&(u=c-u,T=1),v!==S&&!this._lock){var x=b&&S&1,A=x===(b&&v&1);if(v<S&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(T?0:qe(v*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=v),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Eg(this,qe(o),qe(u)),w&&(h-=u-(u=w._start))),this._tTime=h,this._time=u,this._act=!!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(Kn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=-Ne);break}}f=g}else{f=this._last;for(var R=i<0?i:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||Mn&&tu(f)),u!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=R?-Ne:Ne);break}}f=g}}if(w&&!s&&(this.pause(),w.render(u>=o?0:-Ne)._zTime=u>=o?1:-1,this._ts))return this._start=y,jo(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Kn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(nr(s)||(s=ui(this,s,i)),!(i instanceof Pa)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(An(i))return this.addLabel(i,s);if(je(i))i=an.delayedCall(0,i);else return this}return this!==i?Qi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof an?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return An(i)?this.removeLabel(i):je(i)?this.killTweensOf(i):(i.parent===this&&Ko(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qe(Ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=an.delayedCall(0,s||La,a);return o.data="isPause",this._hasPause=1,Qi(this,o,ui(this,i))},e.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)yr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=pi(i),l=this._first,c=nr(s),h;l;)l instanceof an?yg(l._targets,o)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=ui(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=an.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ne,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Cs(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ti({startAt:{time:ui(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),dd(this,ui(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),dd(this,ui(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ne)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=qe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Yr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=di,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=qe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Cs(a,a===Ye&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ye._ts&&(Ed(Ye,Zo(i,Ye)),Td=Ti.frame),Ti.frame>=cd){cd+=Ts.autoSleep||120;var s=Ye._first;if((!s||!s._ts)&&Ts.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},t})(Pa);ti(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xg=function(t,e,n,i,s,a,o){var l=new Rs(this._pt,t,e,0,1,e1,null,s),c=0,h=0,d,u,f,g,v,p,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=eu(i)),a&&(w=[n,i],a(w,t,e),n=w[0],i=w[1]),u=n.match(Ph)||[];d=Ph.exec(i);)g=d[0],v=i.substring(c,d.index),f?f=(f+1)%5:v.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:p,c:g.charAt(1)==="="?Ad(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Ph.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(dg.test(i)||m)&&(l.e=0),this._pt=l,l},nu=function(t,e,n,i,s,a,o,l,c,h){je(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:je(d)?c?t[e.indexOf("set")||!je(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=je(d)?c?Kg:Yd:ru,g;if(An(i)&&(~i.indexOf("random(")&&(i=eu(i)),i.charAt(1)==="="&&(g=Ad(u,i)+(br(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Xh)return!isNaN(u*i)&&i!==""?(g=new Rs(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?t1:Zd,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&bd(e,i),Xg.call(this,t,e,u,i,f,l||Ts.stringFilter,c))},qg=function(t,e,n,i,s){if(je(t)&&(t=Aa(t,s,e,n,i)),!Vi(t)||t.style&&t.nodeType||Tn(t)||vd(t))return An(t)?Aa(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Aa(t[o],s,e,n,i);return a},Yg=function(t,e,n,i,s,a){var o,l,c,h;if(fi[t]&&(o=new fi[t]).init(s,o.rawVars?e[t]:qg(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Rs(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==bs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},yr,Xh,iu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,v=t._startAt,p=t._targets,m=t.parent,w=m&&m.data==="nested"?m.vars.targets:p,L=t._overwrite==="auto"&&!Yh,y=t.timeline,S=i.easeReverse||d,b,T,x,A,R,I,P,O,D,k,$,G,et;if(y&&(!u||!s)&&(s="none"),t._ease=$r(s,Ea.ease),t._rEase=S&&($r(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(O=p[0]?ba(p[0]).harness:0,G=O&&i[O.prop],b=$o(i,Jh),v&&(v._zTime<0&&v.progress(1),e<0&&h&&o&&!f?v.render(-1,!0):v.revert(h&&g?Ho:gg),v._lazy=0),a){if(Sr(t._startAt=an.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!o&&!f)&&t._startAt.revert(Ho),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!v){if(e&&(o=!1),x=ti({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Yn(l),immediateRender:o,stagger:0,parent:m},b),G&&(x[O.prop]=G),Sr(t._startAt=an.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(Ho):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ne,Ne);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Yn(l)||l&&!g,T=0;T<p.length;T++){if(R=p[T],P=R._gsap||jh(p)[T]._gsap,t._ptLookup[T]=k={},zh[P.id]&&Mr.length&&Yo(),$=w===p?T:w.indexOf(R),O&&(D=new O).init(R,G||b,t,$,w)!==!1&&(t._pt=A=new Rs(t._pt,R,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(q){k[q]=A}),D.priority&&(I=1)),!O||G)for(x in b)fi[x]&&(D=Yg(x,b,t,$,R,w))?D.priority&&(I=1):k[x]=A=nu.call(t,R,x,"get",b[x],$,w,0,i.stringFilter);t._op&&t._op[T]&&t.kill(R,t._op[T]),L&&t._pt&&(yr=t,Ye.killTweensOf(R,k,t.globalTime(e)),et=!t.parent,yr=0),t._pt&&l&&(zh[P.id]=1)}I&&s1(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,u&&e<=0&&y.render(di,!0,!0)},$g=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Xh=1,t.vars[e]="+=0",iu(t,o),Xh=0,l?Ca(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=vg(n)+br(d.e)),d.b&&(d.b=h.s+br(d.b))},Zg=function(t,e){var n=t[0]?ba(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=As({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Jg=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Tn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Aa=function(t,e,n,i,s){return je(t)?t.call(e,n,i,s):An(t)&&~t.indexOf("random(")?eu(t):t},Xd=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qd={};rr(Xd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return qd[r]=1});var an=(function(r){gd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wa(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,v=l.defaults,p=l.scrollTrigger,m=i.parent||Ye,w=(Tn(n)||vd(n)?nr(n[0]):"length"in i)?[n]:pi(n),L,y,S,b,T,x,A,R;if(o._targets=w.length?jh(w):Ca("GSAP target "+n+" not found. https://gsap.com",!Ts.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||Go(c)||Go(h)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(L=o.timeline=new qn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:w}),L.kill(),L.parent=L._dp=er(o),L._start=0,u||Go(c)||Go(h)){if(b=w.length,A=u&&Fd(u),Vi(u))for(T in u)~Xd.indexOf(T)&&(R||(R={}),R[T]=u[T]);for(y=0;y<b;y++)S=$o(i,qd),S.stagger=0,I&&(S.easeReverse=I),R&&As(S,R),x=w[y],S.duration=+Aa(c,er(o),y,x,w),S.delay=(+Aa(h,er(o),y,x,w)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),L.to(x,S,A?A(y,x,w):0),L._ease=me.none;L.duration()?c=h=0:o.timeline=0}else if(g){wa(ti(L.vars.defaults,{ease:"none"})),L._ease=$r(g.ease||i.ease||"none");var P=0,O,D,k;if(Tn(g))g.forEach(function($){return L.to(w,$,">")}),L.duration();else{S={};for(T in g)T==="ease"||T==="easeEach"||Jg(T,g[T],S,g.easeEach);for(T in S)for(O=S[T].sort(function($,G){return $.t-G.t}),P=0,y=0;y<O.length;y++)D=O[y],k={ease:D.e,duration:(D.t-(y?O[y-1].t:0))/100*c},k[T]=D.v,L.to(w,k,P),P+=k.duration;L.duration()<c&&L.to({},{duration:c-L.duration()})}}c||o.duration(c=L.duration())}else o.timeline=0;return f===!0&&!Yh&&(yr=er(o),Ye.killTweensOf(w),yr=0),Qi(m,er(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===qe(m._time)&&Yn(d)&&wg(er(o))&&m.data!=="nested")&&(o._tTime=-Ne,o.render(Math.max(0,-h)||0)),p&&Id(er(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ne&&!h?l:i<Ne?0:i,u,f,g,v,p,m,w,L;if(!c)Ag(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,L=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,s,a);if(u=qe(d%v),d===l?(g=this._repeat,u=c):(p=qe(d/v),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Es(this._tTime,v),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==v&&this._initted&&(this._lock=a=1,this.render(qe(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(Dd(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(Kn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;L&&L.render(i<0?i:L._dur*L._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Qh(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Qh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Sr(this,1),!s&&!(h&&!o)&&(d||o||m)&&(Kn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ra||Ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||iu(this,c),h=this._ease(c/this._dur),$g(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(tl(this,0),this.parent||Rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||Ma(this),this.parent&&a!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?pi(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,v,p,m;if((!s||s==="all")&&Sg(o,l))return s==="all"&&(this._pt=0),Ma(this);for(d=this._op=this._op||[],s!=="all"&&(An(s)&&(v={},rr(s,function(w){return v[w]=1}),s=v),s=Zg(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(v in g)p=u&&u[v],p&&((!("kill"in p.d)||p.d.kill(v)===!0)&&Ko(this,p,"_pt"),delete u[v]),f!=="all"&&(f[v]=1)}return this._initted&&!this._pt&&h&&Ma(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ta(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ta(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ye.killTweensOf(i,s,a)},t})(Pa);ti(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rr("staggerTo,staggerFrom,staggerFromTo",function(r){an[r]=function(){var t=new qn,e=Gh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ru=function(t,e,n){return t[e]=n},Yd=function(t,e,n){return t[e](n)},Kg=function(t,e,n,i){return t[e](i.fp,n)},jg=function(t,e,n){return t.setAttribute(e,n)},$d=function(t,e){return je(t[e])?Yd:xd(t[e])&&t.setAttribute?jg:ru},Zd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},t1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},e1=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},su=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},n1=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},i1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ko(this,e,"_pt"):e.dep||(n=1),e=i;return!n},r1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},s1=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Rs=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Zd,this.d=l||this,this.set=c||ru,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=r1,this.m=n,this.mt=s,this.tween=i},r})();rr(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Jh[r]=1});jn.TweenMax=jn.TweenLite=an;jn.TimelineLite=jn.TimelineMax=qn;Ye=new qn({sortChildren:!1,defaults:Ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ts.stringFilter=Bg;var Zr=[],Xo={},a1=[],md=0,o1=0,Fh=function(t){return(Xo[t]||a1).map(function(e){return e()})},qh=function(){var t=Date.now(),e=[];t-md>2&&(Fh("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Fh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),md=t,Fh("matchMedia"))},Jd=(function(){function r(e,n){this.selector=n&&Hh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=o1++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){je(n)&&(s=i,i=n,n=je);var a=this,o=function(){var c=Ge,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hh(s)),Ge=a,d=i.apply(a,arguments),je(d)&&a._r.push(d),Ge=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===je?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ge;Ge=null,n(this),Ge=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof an&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof an)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Zr.length;a--;)Zr[a].id===this.id&&Zr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),l1=(function(){function r(e){this.contexts=[],this.scope=e,Ge&&Ge.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Vi(n)||(n={matches:n});var a=new Jd(0,s||this.scope),o=a.conditions={},l,c,h;Ge&&!a.selector&&(a.selector=Ge.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=zi.matchMedia(n[c]),l&&(Zr.indexOf(a)<0&&Zr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Jo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Vd(i)})},timeline:function(t){return new qn(t)},getTweensOf:function(t,e){return Ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){An(t)&&(t=pi(t)[0]);var s=ba(t||{}).get,a=n?Ld:Cd;return n==="native"&&(n=""),t&&(e?a((fi[e]&&fi[e].get||s)(t,e,n,i)):function(o,l,c){return a((fi[o]&&fi[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=pi(t),t.length>1){var i=t.map(function(h){return ir.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=fi[e],o=ba(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;bs._pt=0,d.init(t,n?h+n:h,bs,0,[t]),d.render(1,d),bs._pt&&su(1,bs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=ir.to(t,ti((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$r(t.ease,Ea.ease)),hd(Ea,t||{})},config:function(t){return hd(Ts,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!fi[o]&&!jn[o]&&Ca(e+" effect requires "+o+" plugin.")}),Ih[e]=function(o,l,c){return n(pi(o),ti(l||{},s),c)},a&&(qn.prototype[e]=function(o,l,c){return this.add(Ih[e](o,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){me[t]=$r(e)},parseEase:function(t,e){return arguments.length?$r(t,e):me},getById:function(t){return Ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qn(t),i,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Ye.remove(n),n._dp=0,n._time=n._tTime=Ye._time,i=Ye._first;i;)s=i._next,(e||!(!i._dur&&i instanceof an&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=s;return Qi(Ye,n,0),n},context:function(t,e){return t?new Jd(t,e):Ge},matchMedia:function(t){return new l1(t)},matchMediaRefresh:function(){return Zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qh()},addEventListener:function(t,e){var n=Xo[t]||(Xo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ng,wrapYoyo:Ug,distribute:Fd,random:Bd,snap:Od,normalize:Dg,getUnit:br,clamp:Lg,splitColor:Gd,toArray:pi,selector:Hh,mapRange:zd,pipe:Pg,unitize:Ig,interpolate:Fg,shuffle:Ud},install:Sd,effects:Ih,ticker:Ti,updateRoot:qn.updateRoot,plugins:fi,globalTimeline:Ye,core:{PropTween:Rs,globals:wd,Tween:an,Timeline:qn,Animation:Pa,getCache:ba,_removeLinkedListItem:Ko,reverting:function(){return Mn},context:function(t){return t&&Ge&&(Ge.data.push(t),t._ctx=Ge),Ge},suppressOverwrites:function(t){return Yh=t}}};rr("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jo[r]=an[r]});Ti.add(qn.updateRoot);bs=Jo.to({},{duration:0});var c1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},h1=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=c1(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Oh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(An(s)&&(l={},rr(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}h1(o,s)}}}},ir=Jo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oh("roundProps",Wh),Oh("modifiers"),Oh("snap",Od))||Jo;an.version=qn.version=ir.version="3.15.0";Md=1;$h()&&Ls();var y3=me.Power0,M3=me.Power1,S3=me.Power2,b3=me.Power3,w3=me.Power4,T3=me.Linear,A3=me.Quad,E3=me.Cubic,C3=me.Quart,L3=me.Quint,R3=me.Strong,P3=me.Elastic,I3=me.Back,D3=me.SteppedEase,N3=me.Bounce,U3=me.Sine,F3=me.Expo,O3=me.Circ;function Kd(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function u1(r,t,e){return t&&Kd(r.prototype,t),e&&Kd(r,e),r}var Sn,il,f1,ei,Tr,Ar,Is,tp,Kr,Ds,ep,sr,Ai,np,ip=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},rp=1,Ps=[],he=[],Ei=[],Na=Date.now,au=function(t,e){return e},d1=function(){var t=Ds.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,he),i.push.apply(i,Ei),he=n,Ei=i,au=function(a,o){return e[a](o)}},or=function(t,e){return~Ei.indexOf(t)&&Ei[Ei.indexOf(t)+1][e]},Ua=function(t){return!!~ep.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},On=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},el="scrollLeft",nl="scrollTop",ou=function(){return sr&&sr.isPressed||he.cache++},rl=function(t,e){var n=function i(s){if(s||s===0){rp&&(ei.history.scrollRestoration="manual");var a=sr&&sr.isPressed;s=i.v=Math.round(s)||(sr&&sr.iOS?1:0),t(s),i.cacheID=he.cache,a&&au("ss",s)}else(e||he.cache!==i.cacheID||au("ref"))&&(i.cacheID=he.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},En={s:el,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rl(function(r){return arguments.length?ei.scrollTo(r,on.sc()):ei.pageXOffset||Tr[el]||Ar[el]||Is[el]||0})},on={s:nl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:rl(function(r){return arguments.length?ei.scrollTo(En.sc(),r):ei.pageYOffset||Tr[nl]||Ar[nl]||Is[nl]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Sn.utils.toArray)(t)[0]||(typeof t=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},p1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ar=function(t,e){var n=e.s,i=e.sc;Ua(t)&&(t=Tr.scrollingElement||Ar);var s=he.indexOf(t),a=i===on.sc?1:2;!~s&&(s=he.push(t)-1),he[s+a]||Bn(t,"scroll",ou);var o=he[s+a],l=o||(he[s+a]=rl(or(t,n),!0)||(Ua(t)?i:rl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Sn.getProperty(t,"scrollBehavior")==="smooth"),l},sl=function(t,e,n){var i=t,s=t,a=Na(),o=a,l=e||50,c=Math.max(500,l*3),h=function(g,v){var p=Na();v||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var v=o,p=s,m=Na();return(g||g===0)&&g!==i&&h(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-v)*1e3};return{update:h,reset:d,getVelocity:u}},Da=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},jd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sp=function(){Ds=Sn.core.globals().ScrollTrigger,Ds&&Ds.core&&d1()},ap=function(t){return Sn=t||ip(),!il&&Sn&&typeof document<"u"&&document.body&&(ei=window,Tr=document,Ar=Tr.documentElement,Is=Tr.body,ep=[ei,Tr,Ar,Is],f1=Sn.utils.clamp,np=Sn.core.context||function(){},Kr="onpointerenter"in Is?"pointer":"mouse",tp=tn.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=tn.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rp=0},500),il=1),Ds||sp(),il};En.op=on;he.cache=0;var tn=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){il||ap(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ds||sp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,v=n.event,p=n.onDragStart,m=n.onDragEnd,w=n.onDrag,L=n.onPress,y=n.onRelease,S=n.onRight,b=n.onLeft,T=n.onUp,x=n.onDown,A=n.onChangeX,R=n.onChangeY,I=n.onChange,P=n.onToggleX,O=n.onToggleY,D=n.onHover,k=n.onHoverEnd,$=n.onMove,G=n.ignoreCheck,et=n.isNormalizer,q=n.onGestureStart,C=n.onGestureEnd,nt=n.onWheel,It=n.onEnable,At=n.onDisable,Qt=n.onClick,Yt=n.scrollSpeed,qt=n.capture,Y=n.allowClicks,j=n.lockAxis,gt=n.onLockAxis;this.target=o=kn(o)||Ar,this.vars=n,f&&(f=Sn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Yt=Yt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(Is).lineHeight)||22);var Vt,xt,Gt,Mt,bt,Wt,te,Q=this,re=0,Se=0,Be=n.passive||!h&&n.passive!==!1,$t=ar(o,En),_e=ar(o,on),F=$t(),Re=_e(),Xt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ai[0]==="pointerdown",E=Ua(o),_=o.ownerDocument||Tr,B=[0,0,0],H=[0,0,0],Z=0,ct=function(){return Z=Na()},at=function(rt,Ut){return(Q.event=rt)&&f&&p1(rt.target,f)||Ut&&Xt&&rt.pointerType!=="touch"||G&&G(rt,Ut)},K=function(){Q._vx.reset(),Q._vy.reset(),xt.pause(),d&&d(Q)},tt=function(){var rt=Q.deltaX=jd(B),Ut=Q.deltaY=jd(H),st=Math.abs(rt)>=i,zt=Math.abs(Ut)>=i;I&&(st||zt)&&I(Q,rt,Ut,B,H),st&&(S&&Q.deltaX>0&&S(Q),b&&Q.deltaX<0&&b(Q),A&&A(Q),P&&Q.deltaX<0!=re<0&&P(Q),re=Q.deltaX,B[0]=B[1]=B[2]=0),zt&&(x&&Q.deltaY>0&&x(Q),T&&Q.deltaY<0&&T(Q),R&&R(Q),O&&Q.deltaY<0!=Se<0&&O(Q),Se=Q.deltaY,H[0]=H[1]=H[2]=0),(Mt||Gt)&&($&&$(Q),Gt&&(p&&Gt===1&&p(Q),w&&w(Q),Gt=0),Mt=!1),Wt&&!(Wt=!1)&&gt&&gt(Q),bt&&(nt(Q),bt=!1),Vt=0},dt=function(rt,Ut,st){B[st]+=rt,H[st]+=Ut,Q._vx.update(rt),Q._vy.update(Ut),c?Vt||(Vt=requestAnimationFrame(tt)):tt()},Et=function(rt,Ut){j&&!te&&(Q.axis=te=Math.abs(rt)>Math.abs(Ut)?"x":"y",Wt=!0),te!=="y"&&(B[2]+=rt,Q._vx.update(rt,!0)),te!=="x"&&(H[2]+=Ut,Q._vy.update(Ut,!0)),c?Vt||(Vt=requestAnimationFrame(tt)):tt()},pt=function(rt){if(!at(rt,1)){rt=Da(rt,h);var Ut=rt.clientX,st=rt.clientY,zt=Ut-Q.x,Ct=st-Q.y,vt=Q.isDragging;Q.x=Ut,Q.y=st,(vt||(zt||Ct)&&(Math.abs(Q.startX-Ut)>=s||Math.abs(Q.startY-st)>=s))&&(Gt||(Gt=vt?2:1),vt||(Q.isDragging=!0),Et(zt,Ct))}},ft=Q.onPress=function(ot){at(ot,1)||ot&&ot.button||(Q.axis=te=null,xt.pause(),Q.isPressed=!0,ot=Da(ot),re=Se=0,Q.startX=Q.x=ot.clientX,Q.startY=Q.y=ot.clientY,Q._vx.reset(),Q._vy.reset(),Bn(et?o:_,Ai[1],pt,Be,!0),Q.deltaX=Q.deltaY=0,L&&L(Q))},lt=Q.onRelease=function(ot){if(!at(ot,1)){On(et?o:_,Ai[1],pt,!0);var rt=!isNaN(Q.y-Q.startY),Ut=Q.isDragging,st=Ut&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),zt=Da(ot);!st&&rt&&(Q._vx.reset(),Q._vy.reset(),h&&Y&&Sn.delayedCall(.08,function(){if(Na()-Z>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(_.createEvent){var Ct=_.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,ei,1,zt.screenX,zt.screenY,zt.clientX,zt.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(Ct)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,d&&Ut&&!et&&xt.restart(!0),Gt&&tt(),m&&Ut&&m(Q),y&&y(Q,st)}},Dt=function(rt){return rt.touches&&rt.touches.length>1&&(Q.isGesturing=!0)&&q(rt,Q.isDragging)},kt=function(){return(Q.isGesturing=!1)||C(Q)},U=function(rt){if(!at(rt)){var Ut=$t(),st=_e();dt((Ut-F)*Yt,(st-Re)*Yt,1),F=Ut,Re=st,d&&xt.restart(!0)}},ut=function(rt){if(!at(rt)){rt=Da(rt,h),nt&&(bt=!0);var Ut=(rt.deltaMode===1?l:rt.deltaMode===2?ei.innerHeight:1)*g;dt(rt.deltaX*Ut,rt.deltaY*Ut,0),d&&!et&&xt.restart(!0)}},J=function(rt){if(!at(rt)){var Ut=rt.clientX,st=rt.clientY,zt=Ut-Q.x,Ct=st-Q.y;Q.x=Ut,Q.y=st,Mt=!0,d&&xt.restart(!0),(zt||Ct)&&Et(zt,Ct)}},ht=function(rt){Q.event=rt,D(Q)},mt=function(rt){Q.event=rt,k(Q)},it=function(rt){return at(rt)||Da(rt,h)&&Qt(Q)};xt=Q._dc=Sn.delayedCall(u||.25,K).pause(),Q.deltaX=Q.deltaY=0,Q._vx=sl(0,50,!0),Q._vy=sl(0,50,!0),Q.scrollX=$t,Q.scrollY=_e,Q.isDragging=Q.isGesturing=Q.isPressed=!1,np(this),Q.enable=function(ot){return Q.isEnabled||(Bn(E?_:o,"scroll",ou),a.indexOf("scroll")>=0&&Bn(E?_:o,"scroll",U,Be,qt),a.indexOf("wheel")>=0&&Bn(o,"wheel",ut,Be,qt),(a.indexOf("touch")>=0&&tp||a.indexOf("pointer")>=0)&&(Bn(o,Ai[0],ft,Be,qt),Bn(_,Ai[2],lt),Bn(_,Ai[3],lt),Y&&Bn(o,"click",ct,!0,!0),Qt&&Bn(o,"click",it),q&&Bn(_,"gesturestart",Dt),C&&Bn(_,"gestureend",kt),D&&Bn(o,Kr+"enter",ht),k&&Bn(o,Kr+"leave",mt),$&&Bn(o,Kr+"move",J)),Q.isEnabled=!0,Q.isDragging=Q.isGesturing=Q.isPressed=Mt=Gt=!1,Q._vx.reset(),Q._vy.reset(),F=$t(),Re=_e(),ot&&ot.type&&ft(ot),It&&It(Q)),Q},Q.disable=function(){Q.isEnabled&&(Ps.filter(function(ot){return ot!==Q&&Ua(ot.target)}).length||On(E?_:o,"scroll",ou),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),On(et?o:_,Ai[1],pt,!0)),On(E?_:o,"scroll",U,qt),On(o,"wheel",ut,qt),On(o,Ai[0],ft,qt),On(_,Ai[2],lt),On(_,Ai[3],lt),On(o,"click",ct,!0),On(o,"click",it),On(_,"gesturestart",Dt),On(_,"gestureend",kt),On(o,Kr+"enter",ht),On(o,Kr+"leave",mt),On(o,Kr+"move",J),Q.isEnabled=Q.isPressed=Q.isDragging=!1,At&&At(Q))},Q.kill=Q.revert=function(){Q.disable();var ot=Ps.indexOf(Q);ot>=0&&Ps.splice(ot,1),sr===Q&&(sr=0)},Ps.push(Q),et&&Ua(o)&&(sr=Q),Q.enable(v)},u1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();tn.version="3.15.0";tn.create=function(r){return new tn(r)};tn.register=ap;tn.getAll=function(){return Ps.slice()};tn.getById=function(r){return Ps.filter(function(t){return t.vars.id===r})[0]};ip()&&Sn.registerPlugin(tn);var Pt,Os,fe,Le,ri,Ae,Mu,Ml,$a,Va,Oa,al,Cn,wl,pu,Qn,op,lp,Bs,wp,lu,Tp,zn,mu,Ap,Ep,Er,gu,Su,ks,bu,Ga,_u,cu,ol=1,Ln=Date.now,hu=Ln(),_i=0,Ba=0,cp=function(t,e,n){var i=ii(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},hp=function(t,e){return e&&(!ii(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},m1=function r(){return Ba&&requestAnimationFrame(r)},up=function(){return wl=1},fp=function(){return wl=0},Gi=function(t){return t},ka=function(t){return Math.round(t*1e5)/1e5||0},Cp=function(){return typeof window<"u"},Lp=function(){return Pt||Cp()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},rs=function(t){return!!~Mu.indexOf(t)},Rp=function(t){return(t==="Height"?bu:fe["inner"+t])||ri["client"+t]||Ae["client"+t]},Pp=function(t){return or(t,"getBoundingClientRect")||(rs(t)?function(){return yl.width=fe.innerWidth,yl.height=bu,yl}:function(){return lr(t)})},g1=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=or(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Rp(s):t["client"+s])||0}},_1=function(t,e){return!e||~Ei.indexOf(t)?Pp(t):function(){return yl}},Hi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=or(t,n))?a()-Pp(t)()[s]:rs(t)?(ri[n]||Ae[n])-Rp(i):t[n]-t["offset"+i])},ll=function(t,e){for(var n=0;n<Bs.length;n+=3)(!e||~e.indexOf(Bs[n+1]))&&t(Bs[n],Bs[n+1],Bs[n+2])},ii=function(t){return typeof t=="string"},Rn=function(t){return typeof t=="function"},za=function(t){return typeof t=="number"},jr=function(t){return typeof t=="object"},Fa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ns=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Us=Math.abs,Ip="left",Dp="top",wu="right",Tu="bottom",es="width",ns="height",Ha="Right",Wa="Left",Xa="Top",qa="Bottom",ln="padding",mi="margin",Qs="Width",Au="Height",fn="px",gi=function(t){return fe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},x1=function(t){var e=gi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},lr=function(t,e){var n=e&&gi(t)[pu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Np=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},v1=function(t){return function(e){return Pt.utils.snap(Np(t),e)}},Eu=function(t){var e=Pt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},y1=function(t){return function(e,n){return Eu(Np(t))(e,n.direction)}},cl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},hl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ul={toggleActions:"play",anticipatePin:0},bl={top:0,left:0,center:.5,bottom:1,right:1},gl=function(t,e){if(ii(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in bl?bl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},fl=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=Le.createElement("div"),v=rs(n)||or(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=v?Ae:n.tagName==="IFRAME"?n.contentDocument.body:n,w=t.indexOf("start")!==-1,L=w?c:h,y="border-color:"+L+";font-size:"+d+";color:"+L+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&v?"fixed;":"absolute;"),(p||l||!v)&&(y+=(i===on?wu:Tu)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],_l(g,0,i,w),g},_l=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Qs]=1,s["border"+o+Qs]=0,s[n.p]=e+"px",Pt.set(t,s)},ue=[],xu={},Za,mp=function(){return Ln()-_i>34&&(Za||(Za=requestAnimationFrame(cr)))},Fs=function(){(!zn||!zn.isPressed||zn.startX>Ae.clientWidth)&&(he.cache++,zn?Za||(Za=requestAnimationFrame(cr)):cr(),_i||as("scrollStart"),_i=Ln())},uu=function(){Ep=fe.innerWidth,Ap=fe.innerHeight},Qa=function(t){he.cache++,(t===!0||!Cn&&!Tp&&!Le.fullscreenElement&&!Le.webkitFullscreenElement&&(!mu||Ep!==fe.innerWidth||Math.abs(fe.innerHeight-Ap)>fe.innerHeight*.25))&&Ml.restart(!0)},ss={},M1=[],Up=function r(){return gn(ie,"scrollEnd",r)||ts(!0)},as=function(t){return ss[t]&&ss[t].map(function(e){return e()})||M1},ni=[],Fp=function(t){for(var e=0;e<ni.length;e+=5)(!t||ni[e+4]&&ni[e+4].query===t)&&(ni[e].style.cssText=ni[e+1],ni[e].getBBox&&ni[e].setAttribute("transform",ni[e+2]||""),ni[e+3].uncache=1)},Op=function(){return he.forEach(function(t){return Rn(t)&&++t.cacheID&&(t.rec=t())})},Cu=function(t,e){var n;for(Qn=0;Qn<ue.length;Qn++)n=ue[Qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ga=!0,e&&Fp(e),e||as("revert")},Bp=function(t,e){he.cache++,(e||!Vn)&&he.forEach(function(n){return Rn(n)&&n.cacheID++&&(n.rec=0)}),ii(t)&&(fe.history.scrollRestoration=Su=t)},Vn,is=0,gp,S1=function(){if(gp!==is){var t=gp=is;requestAnimationFrame(function(){return t===is&&ts(!0)})}},kp=function(){Ae.appendChild(ks),bu=!zn&&ks.offsetHeight||fe.innerHeight,Ae.removeChild(ks)},_p=function(t){return $a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ts=function(t,e){if(ri=Le.documentElement,Ae=Le.body,Mu=[fe,Le,ri,Ae],_i&&!t&&!Ga){_n(ie,"scrollEnd",Up);return}kp(),Vn=ie.isRefreshing=!0,Ga||Op();var n=as("refreshInit");wp&&ie.sort(),e||Cu(),he.forEach(function(i){Rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ue.slice(0).forEach(function(i){return i.refresh()}),Ga=!1,ue.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),_u=1,_p(!0),ue.forEach(function(i){var s=Hi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_p(!1),_u=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),he.forEach(function(i){Rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bp(Su,1),Ml.pause(),is++,Vn=2,cr(2),ue.forEach(function(i){return Rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Vn=ie.isRefreshing=!1,as("refresh")},vu=0,xl=1,Ya,cr=function(t){if(t===2||!Vn&&!Ga){ie.isUpdating=!0,Ya&&Ya.update(0);var e=ue.length,n=Ln(),i=n-hu>=50,s=e&&ue[0].scroll();if(xl=vu>s?-1:1,Vn||(vu=s),i&&(_i&&!wl&&n-_i>200&&(_i=0,as("scrollEnd")),Oa=hu,hu=n),xl<0){for(Qn=e;Qn-- >0;)ue[Qn]&&ue[Qn].update(0,i);xl=1}else for(Qn=0;Qn<e;Qn++)ue[Qn]&&ue[Qn].update(0,i);ie.isUpdating=!1}Za=0},yu=[Ip,Dp,Tu,wu,mi+qa,mi+Ha,mi+Xa,mi+Wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vl=yu.concat([es,ns,"boxSizing","max"+Qs,"max"+Au,"position",mi,ln,ln+Xa,ln+Ha,ln+qa,ln+Wa]),b1=function(t,e,n){zs(n);var i=t._gsap;if(i.spacerIsNative)zs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},fu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=yu.length,a=e.style,o=t.style,l;s--;)l=yu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Tu]=o[wu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[es]=Sl(t,En)+fn,a[ns]=Sl(t,on)+fn,a[ln]=o[mi]=o[Dp]=o[Ip]="0",zs(i),o[es]=o["max"+Qs]=n[es],o[ns]=o["max"+Au]=n[ns],o[ln]=n[ln],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},w1=/([A-Z])/g,zs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(w1,"-$1").toLowerCase())}},dl=function(t){for(var e=vl.length,n=t.style,i=[],s=0;s<e;s++)i.push(vl[s],n[vl[s]]);return i.t=t,i},T1=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},yl={left:0,top:0},xp=function(t,e,n,i,s,a,o,l,c,h,d,u,f,g){Rn(t)&&(t=t(l)),ii(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?gl("0"+t.substr(3),n):0));var v=f?f.time():0,p,m,w;if(f&&f.seek(0),isNaN(t)||(t=+t),za(t))f&&(t=Pt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&_l(o,n,i,!0);else{Rn(e)&&(e=e(l));var L=(t||"0").split(" "),y,S,b,T;w=kn(e,l)||Ae,y=lr(w)||{},(!y||!y.left&&!y.top)&&gi(w).display==="none"&&(T=w.style.display,w.style.display="block",y=lr(w),T?w.style.display=T:w.style.removeProperty("display")),S=gl(L[0],y[i.d]),b=gl(L[1]||"0",n),t=y[i.p]-c[i.p]-h+S+s-b,o&&_l(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var x=t+n,A=a._isStart;p="scroll"+i.d2,_l(a,x,i,A&&x>20||!A&&(d?Math.max(Ae[p],ri[p]):a.parentNode[p])<=x+1),d&&(c=lr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+fn))}return f&&w&&(p=lr(w),f.seek(u),m=lr(w),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(v),f?t:Math.round(t)},A1=/(webkit|moz|length|cssText|inset)/i,vp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===Ae){t._stOrig=s.cssText,o=gi(t);for(a in o)!+a&&!A1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},zp=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},pl=function(t,e,n){var i={};i[e.p]="+="+n,Pt.set(t,i)},yp=function(t,e){var n=ar(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||n();var v=zp(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){he.cache++,a.tween&&cr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Pt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(t,"wheel",n.wheelHandler),ie.isTouch&&_n(t,"touchmove",n.wheelHandler),s},ie=(function(){function r(e,n){Os||r.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=Gi;return}n=dp(ii(n)||za(n)||n.nodeType?{trigger:n}:n,ul);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,L=s.once,y=s.snap,S=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,A=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:on,I=!d&&d!==0,P=kn(n.scroller||fe),O=Pt.core.getCache(P),D=rs(P),k=("pinType"in n?n.pinType:or(P,"pinType")||D&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=I&&n.toggleActions.split(" "),et="markers"in n?n.markers:ul.markers,q=D?0:parseFloat(gi(P)["border"+R.p2+Qs])||0,C=this,nt=n.onRefreshInit&&function(){return n.onRefreshInit(C)},It=g1(P,D,R),At=_1(P,D),Qt=0,Yt=0,qt=0,Y=ar(P,R),j,gt,Vt,xt,Gt,Mt,bt,Wt,te,Q,re,Se,Be,$t,_e,F,Re,Xt,E,_,B,H,Z,ct,at,K,tt,dt,Et,pt,ft,lt,Dt,kt,U,ut,J,ht,mt;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=P,C.scroll=T?T.time.bind(T):Y,xt=Y(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(wp=1,n.refreshPriority===-9999&&(Ya=C)),O.tweenScroll=O.tweenScroll||{top:yp(P,on),left:yp(P,En)},C.tweenTo=j=O.tweenScroll[R.p],C.scrubDuration=function(st){Dt=za(st)&&st,Dt?lt?lt.duration(st):lt=Pt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Dt,paused:!0,onComplete:function(){return m&&m(C)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),pt=0,l||(l=i.vars.id)),y&&((!jr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ae.style&&Pt.set(D?[Ae,ri]:P,{scrollBehavior:"auto"}),he.forEach(function(st){return Rn(st)&&st.target===(D?Le.scrollingElement||ri:P)&&(st.smooth=!1)}),Vt=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?v1(i):y.snapTo==="labelsDirectional"?y1(i):y.directional!==!1?function(st,zt){return Eu(y.snapTo)(st,Ln()-Yt<500?0:zt.direction)}:Pt.utils.snap(y.snapTo),kt=y.duration||{min:.1,max:2},kt=jr(kt)?Va(kt.min,kt.max):Va(kt,kt),U=Pt.delayedCall(y.delay||Dt/2||.1,function(){var st=Y(),zt=Ln()-Yt<500,Ct=j.tween;if((zt||Math.abs(C.getVelocity())<10)&&!Ct&&!wl&&Qt!==st){var vt=(st-Mt)/$t,se=i&&!I?i.totalProgress():vt,Ot=zt?0:(se-ft)/(Ln()-Oa)*1e3||0,Nt=Pt.utils.clamp(-vt,1-vt,Us(Ot/2)*Ot/.185),Ht=vt+(y.inertia===!1?0:Nt),de,ce,ae=y,We=ae.onStart,ye=ae.onInterrupt,ze=ae.onComplete;if(de=Vt(Ht,C),za(de)||(de=Ht),ce=Math.max(0,Math.round(Mt+de*$t)),st<=bt&&st>=Mt&&ce!==st){if(Ct&&!Ct._initted&&Ct.data<=Us(ce-st))return;y.inertia===!1&&(Nt=de-vt),j(ce,{duration:kt(Us(Math.max(Us(Ht-se),Us(de-se))*.185/Ot/.05||0)),ease:y.ease||"power3",data:Us(ce-st),onInterrupt:function(){return U.restart(!0)&&ye&&Ns(C,ye)},onComplete:function(){C.update(),Qt=Y(),i&&!I&&(lt?lt.resetTo("totalProgress",de,i._tTime/i._tDur):i.progress(de)),pt=ft=i&&!I?i.totalProgress():C.progress,w&&w(C),ze&&Ns(C,ze)}},st,Nt*$t,ce-st-Nt*$t),We&&Ns(C,We,j.tween)}}else C.isActive&&Qt!==st&&U.restart(!0)}).pause()),l&&(xu[l]=C),u=C.trigger=kn(u||f!==!0&&f),mt=u&&u._gsap&&u._gsap.stRevert,mt&&(mt=mt(C)),f=f===!0?u:kn(f),ii(o)&&(o={targets:u,className:o}),f&&(g===!1||g===mi||(g=!g&&f.parentNode&&f.parentNode.style&&gi(f.parentNode).display==="flex"?!1:ln),C.pin=f,gt=Pt.core.getCache(f),gt.spacer?_e=gt.pinState:(b&&(b=kn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),gt.spacerIsNative=!!b,b&&(gt.spacerState=dl(b))),gt.spacer=Xt=b||Le.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),gt.pinState=_e=dl(f)),n.force3D!==!1&&Pt.set(f,{force3D:!0}),C.spacer=Xt=gt.spacer,Et=gi(f),ct=Et[g+R.os2],_=Pt.getProperty(f),B=Pt.quickSetter(f,R.a,fn),fu(f,Xt,Et),Re=dl(f)),et){Se=jr(et)?dp(et,pp):pp,Q=fl("scroller-start",l,P,R,Se,0),re=fl("scroller-end",l,P,R,Se,0,Q),E=Q["offset"+R.op.d2];var it=kn(or(P,"content")||P);Wt=this.markerStart=fl("start",l,it,R,Se,E,0,T),te=this.markerEnd=fl("end",l,it,R,Se,E,0,T),T&&(ht=Pt.quickSetter([Wt,te],R.a,fn)),!k&&!(Ei.length&&or(P,"fixedMarkers")===!0)&&(x1(D?Ae:P),Pt.set([Q,re],{force3D:!0}),K=Pt.quickSetter(Q,R.a,fn),dt=Pt.quickSetter(re,R.a,fn))}if(T){var ot=T.vars.onUpdate,rt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),ot&&ot.apply(T,rt||[])})}if(C.previous=function(){return ue[ue.indexOf(C)-1]},C.next=function(){return ue[ue.indexOf(C)+1]},C.revert=function(st,zt){if(!zt)return C.kill(!0);var Ct=st!==!1||!C.enabled,vt=Cn;Ct!==C.isReverted&&(Ct&&(ut=Math.max(Y(),C.scroll.rec||0),qt=C.progress,J=i&&i.progress()),Wt&&[Wt,te,Q,re].forEach(function(se){return se.style.display=Ct?"none":"block"}),Ct&&(Cn=C,C.update(Ct)),f&&(!S||!C.isActive)&&(Ct?b1(f,Xt,_e):fu(f,Xt,gi(f),at)),Ct||C.update(Ct),Cn=vt,C.isReverted=Ct)},C.refresh=function(st,zt,Ct,vt){if(!((Cn||!C.enabled)&&!zt)){if(f&&st&&_i){_n(r,"scrollEnd",Up);return}!Vn&&nt&&nt(C),Cn=C,j.tween&&!Ct&&(j.tween.kill(),j.tween=0),lt&&lt.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(_t){return _t.vars.immediateRender&&_t.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var se=It(),Ot=At(),Nt=T?T.duration():Hi(P,R),Ht=$t<=.01||!$t,de=0,ce=vt||0,ae=jr(Ct)?Ct.end:n.end,We=n.endTrigger||u,ye=jr(Ct)?Ct.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),ze=C.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,C),Ue=u&&Math.max(0,ue.indexOf(C))||0,Pe=Ue,Fe,Qe,wn,ji,rn,Xe,Fn,Bi,M,N,X,V,W;for(et&&jr(Ct)&&(V=Pt.getProperty(Q,R.p),W=Pt.getProperty(re,R.p));Pe-- >0;)Xe=ue[Pe],Xe.end||Xe.refresh(0,1)||(Cn=C),Fn=Xe.pin,Fn&&(Fn===u||Fn===f||Fn===ze)&&!Xe.isReverted&&(N||(N=[]),N.unshift(Xe),Xe.revert(!0,!0)),Xe!==ue[Pe]&&(Ue--,Pe--);for(Rn(ye)&&(ye=ye(C)),ye=cp(ye,"start",C),Mt=xp(ye,u,se,R,Y(),Wt,Q,C,Ot,q,k,Nt,T,C._startClamp&&"_startClamp")||(f?-.001:0),Rn(ae)&&(ae=ae(C)),ii(ae)&&!ae.indexOf("+=")&&(~ae.indexOf(" ")?ae=(ii(ye)?ye.split(" ")[0]:"")+ae:(de=gl(ae.substr(2),se),ae=ii(ye)?ye:(T?Pt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Mt):Mt)+de,We=u)),ae=cp(ae,"end",C),bt=Math.max(Mt,xp(ae||(We?"100% 0":Nt),We,se,R,Y()+de,te,re,C,Ot,q,k,Nt,T,C._endClamp&&"_endClamp"))||-.001,de=0,Pe=Ue;Pe--;)Xe=ue[Pe]||{},Fn=Xe.pin,Fn&&Xe.start-Xe._pinPush<=Mt&&!T&&Xe.end>0&&(Fe=Xe.end-(C._startClamp?Math.max(0,Xe.start):Xe.start),(Fn===u&&Xe.start-Xe._pinPush<Mt||Fn===ze)&&isNaN(ye)&&(de+=Fe*(1-Xe.progress)),Fn===f&&(ce+=Fe));if(Mt+=de,bt+=de,C._startClamp&&(C._startClamp+=de),C._endClamp&&!Vn&&(C._endClamp=bt||-.001,bt=Math.min(bt,Hi(P,R))),$t=bt-Mt||(Mt-=.01)&&.001,Ht&&(qt=Pt.utils.clamp(0,1,Pt.utils.normalize(Mt,bt,ut))),C._pinPush=ce,Wt&&de&&(Fe={},Fe[R.a]="+="+de,ze&&(Fe[R.p]="-="+Y()),Pt.set([Wt,te],Fe)),f&&!(_u&&C.end>=Hi(P,R)))Fe=gi(f),ji=R===on,wn=Y(),H=parseFloat(_(R.a))+ce,!Nt&&bt>1&&(X=(D?Le.scrollingElement||ri:P).style,X={style:X,value:X["overflow"+R.a.toUpperCase()]},D&&gi(Ae)["overflow"+R.a.toUpperCase()]!=="scroll"&&(X.style["overflow"+R.a.toUpperCase()]="scroll")),fu(f,Xt,Fe),Re=dl(f),Qe=lr(f,!0),Bi=k&&ar(P,ji?En:on)(),g?(at=[g+R.os2,$t+ce+fn],at.t=Xt,Pe=g===ln?Sl(f,R)+$t+ce:0,Pe&&(at.push(R.d,Pe+fn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Pe+fn)),zs(at),ze&&ue.forEach(function(_t){_t.pin===ze&&_t.vars.pinSpacing!==!1&&(_t._subPinOffset=!0)}),k&&Y(ut)):(Pe=Sl(f,R),Pe&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Pe+fn)),k&&(rn={top:Qe.top+(ji?wn-Mt:Bi)+fn,left:Qe.left+(ji?Bi:wn-Mt)+fn,boxSizing:"border-box",position:"fixed"},rn[es]=rn["max"+Qs]=Math.ceil(Qe.width)+fn,rn[ns]=rn["max"+Au]=Math.ceil(Qe.height)+fn,rn[mi]=rn[mi+Xa]=rn[mi+Ha]=rn[mi+qa]=rn[mi+Wa]="0",rn[ln]=Fe[ln],rn[ln+Xa]=Fe[ln+Xa],rn[ln+Ha]=Fe[ln+Ha],rn[ln+qa]=Fe[ln+qa],rn[ln+Wa]=Fe[ln+Wa],F=T1(_e,rn,S),Vn&&Y(0)),i?(M=i._initted,lu(1),i.render(i.duration(),!0,!0),Z=_(R.a)-H+$t+ce,tt=Math.abs($t-Z)>1,k&&tt&&F.splice(F.length-2,2),i.render(0,!0,!0),M||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lu(0)):Z=$t,X&&(X.value?X.style["overflow"+R.a.toUpperCase()]=X.value:X.style.removeProperty("overflow-"+R.a));else if(u&&Y()&&!T)for(Qe=u.parentNode;Qe&&Qe!==Ae;)Qe._pinOffset&&(Mt-=Qe._pinOffset,bt-=Qe._pinOffset),Qe=Qe.parentNode;N&&N.forEach(function(_t){return _t.revert(!1,!0)}),C.start=Mt,C.end=bt,xt=Gt=Vn?ut:Y(),!T&&!Vn&&(xt<ut&&Y(ut),C.scroll.rec=0),C.revert(!1,!0),Yt=Ln(),U&&(Qt=-1,U.restart(!0)),Cn=0,i&&I&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Ht||qt!==C.progress||T||v||i&&!i._initted)&&(i&&!I&&(i._initted||qt||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Mt<-.001&&!qt?Pt.utils.normalize(Mt,bt,0):qt,!0),C.progress=Ht||(xt-Mt)/$t===qt?0:qt),f&&g&&(Xt._pinOffset=Math.round(C.progress*Z)),lt&&lt.invalidate(),isNaN(V)||(V-=Pt.getProperty(Q,R.p),W-=Pt.getProperty(re,R.p),pl(Q,R,V),pl(Wt,R,V-(vt||0)),pl(re,R,W),pl(te,R,W-(vt||0))),Ht&&!Vn&&C.update(),h&&!Vn&&!Be&&(Be=!0,h(C),Be=!1)}},C.getVelocity=function(){return(Y()-Gt)/(Ln()-Oa)*1e3||0},C.endAnimation=function(){Fa(C.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?I||Fa(i,C.direction<0,1):Fa(i,i.reversed()))},C.labelToScroll=function(st){return i&&i.labels&&(Mt||C.refresh()||Mt)+i.labels[st]/i.duration()*$t||0},C.getTrailing=function(st){var zt=ue.indexOf(C),Ct=C.direction>0?ue.slice(0,zt).reverse():ue.slice(zt+1);return(ii(st)?Ct.filter(function(vt){return vt.vars.preventOverlaps===st}):Ct).filter(function(vt){return C.direction>0?vt.end<=Mt:vt.start>=bt})},C.update=function(st,zt,Ct){if(!(T&&!Ct&&!st)){var vt=Vn===!0?ut:C.scroll(),se=st?0:(vt-Mt)/$t,Ot=se<0?0:se>1?1:se||0,Nt=C.progress,Ht,de,ce,ae,We,ye,ze,Ue;if(zt&&(Gt=xt,xt=T?Y():vt,y&&(ft=pt,pt=i&&!I?i.totalProgress():Ot)),p&&f&&!Cn&&!ol&&_i&&(!Ot&&Mt<vt+(vt-Gt)/(Ln()-Oa)*p?Ot=1e-4:Ot===1&&bt>vt+(vt-Gt)/(Ln()-Oa)*p&&(Ot=.9999)),Ot!==Nt&&C.enabled){if(Ht=C.isActive=!!Ot&&Ot<1,de=!!Nt&&Nt<1,ye=Ht!==de,We=ye||!!Ot!=!!Nt,C.direction=Ot>Nt?1:-1,C.progress=Ot,We&&!Cn&&(ce=Ot&&!Nt?0:Ot===1?1:Nt===1?2:3,I&&(ae=!ye&&G[ce+1]!=="none"&&G[ce+1]||G[ce],Ue=i&&(ae==="complete"||ae==="reset"||ae in i))),A&&(ye||Ue)&&(Ue||d||!i)&&(Rn(A)?A(C):C.getTrailing(A).forEach(function(wn){return wn.endAnimation()})),I||(lt&&!Cn&&!ol?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",Ot,i._tTime/i._tDur):(lt.vars.totalProgress=Ot,lt.invalidate().restart())):i&&i.totalProgress(Ot,!!(Cn&&(Yt||st)))),f){if(st&&g&&(Xt.style[g+R.os2]=ct),!k)B(ka(H+Z*Ot));else if(We){if(ze=!st&&Ot>Nt&&bt+1>vt&&vt+1>=Hi(P,R),S)if(!st&&(Ht||ze)){var Pe=lr(f,!0),Fe=vt-Mt;vp(f,Ae,Pe.top+(R===on?Fe:0)+fn,Pe.left+(R===on?0:Fe)+fn)}else vp(f,Xt);zs(Ht||ze?F:Re),tt&&Ot<1&&Ht||B(H+(Ot===1&&!ze?Z:0))}}y&&!j.tween&&!Cn&&!ol&&U.restart(!0),o&&(ye||L&&Ot&&(Ot<1||!cu))&&$a(o.targets).forEach(function(wn){return wn.classList[Ht||L?"add":"remove"](o.className)}),a&&!I&&!st&&a(C),We&&!Cn?(I&&(Ue&&(ae==="complete"?i.pause().totalProgress(1):ae==="reset"?i.restart(!0).pause():ae==="restart"?i.restart(!0):i[ae]()),a&&a(C)),(ye||!cu)&&(c&&ye&&Ns(C,c),$[ce]&&Ns(C,$[ce]),L&&(Ot===1?C.kill(!1,1):$[ce]=0),ye||(ce=Ot===1?1:3,$[ce]&&Ns(C,$[ce]))),x&&!Ht&&Math.abs(C.getVelocity())>(za(x)?x:2500)&&(Fa(C.callbackAnimation),lt?lt.progress(1):Fa(i,ae==="reverse"?1:!Ot,1))):I&&a&&!Cn&&a(C)}if(dt){var Qe=T?vt/T.duration()*(T._caScrollDist||0):vt;K(Qe+(Q._isFlipped?1:0)),dt(Qe)}ht&&ht(-vt/T.duration()*(T._caScrollDist||0))}},C.enable=function(st,zt){C.enabled||(C.enabled=!0,_n(P,"resize",Qa),D||_n(P,"scroll",Fs),nt&&_n(r,"refreshInit",nt),st!==!1&&(C.progress=qt=0,xt=Gt=Qt=Y()),zt!==!1&&C.refresh())},C.getTween=function(st){return st&&j?j.tween:lt},C.setPositions=function(st,zt,Ct,vt){if(T){var se=T.scrollTrigger,Ot=T.duration(),Nt=se.end-se.start;st=se.start+Nt*st/Ot,zt=se.start+Nt*zt/Ot}C.refresh(!1,!1,{start:hp(st,Ct&&!!C._startClamp),end:hp(zt,Ct&&!!C._endClamp)},vt),C.update()},C.adjustPinSpacing=function(st){if(at&&st){var zt=at.indexOf(R.d)+1;at[zt]=parseFloat(at[zt])+st+fn,at[1]=parseFloat(at[1])+st+fn,zs(at)}},C.disable=function(st,zt){if(st!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,zt||lt&&lt.pause(),ut=0,gt&&(gt.uncache=1),nt&&gn(r,"refreshInit",nt),U&&(U.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!D)){for(var Ct=ue.length;Ct--;)if(ue[Ct].scroller===P&&ue[Ct]!==C)return;gn(P,"resize",Qa),D||gn(P,"scroll",Fs)}},C.kill=function(st,zt){C.disable(st,zt),lt&&!zt&&lt.kill(),l&&delete xu[l];var Ct=ue.indexOf(C);Ct>=0&&ue.splice(Ct,1),Ct===Qn&&xl>0&&Qn--,Ct=0,ue.forEach(function(vt){return vt.scroller===C.scroller&&(Ct=1)}),Ct||Vn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),zt||i.kill()),Wt&&[Wt,te,Q,re].forEach(function(vt){return vt.parentNode&&vt.parentNode.removeChild(vt)}),Ya===C&&(Ya=0),f&&(gt&&(gt.uncache=1),Ct=0,ue.forEach(function(vt){return vt.pin===f&&Ct++}),Ct||(gt.spacer=0)),n.onKill&&n.onKill(C)},ue.push(C),C.enable(!1,!1),mt&&mt(C),i&&i.add&&!$t){var Ut=C.update;C.update=function(){C.update=Ut,he.cache++,Mt||bt||C.refresh()},Pt.delayedCall(.01,C.update),$t=.01,Mt=bt=0}else C.refresh();f&&S1()},r.register=function(n){return Os||(Pt=n||Lp(),Cp()&&window.document&&r.enable(),Os=Ba),Os},r.defaults=function(n){if(n)for(var i in n)ul[i]=n[i];return ul},r.disable=function(n,i){Ba=0,ue.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(fe,"wheel",Fs),gn(Le,"scroll",Fs),clearInterval(al),gn(Le,"touchcancel",Gi),gn(Ae,"touchstart",Gi),cl(gn,Le,"pointerdown,touchstart,mousedown",up),cl(gn,Le,"pointerup,touchend,mouseup",fp),Ml.kill(),ll(gn);for(var s=0;s<he.length;s+=3)hl(gn,he[s],he[s+1]),hl(gn,he[s],he[s+2])},r.enable=function(){if(fe=window,Le=document,ri=Le.documentElement,Ae=Le.body,Pt){if($a=Pt.utils.toArray,Va=Pt.utils.clamp,gu=Pt.core.context||Gi,lu=Pt.core.suppressOverwrites||Gi,Su=fe.history.scrollRestoration||"auto",vu=fe.pageYOffset||0,Pt.core.globals("ScrollTrigger",r),Ae){Ba=1,ks=document.createElement("div"),ks.style.height="100vh",ks.style.position="absolute",kp(),m1(),tn.register(Pt),r.isTouch=tn.isTouch,Er=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mu=tn.isTouch===1,_n(fe,"wheel",Fs),Mu=[fe,Le,ri,Ae],Pt.matchMedia?(r.matchMedia=function(h){var d=Pt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Pt.addEventListener("matchMediaInit",function(){Op(),Cu()}),Pt.addEventListener("matchMediaRevert",function(){return Fp()}),Pt.addEventListener("matchMedia",function(){ts(0,1),as("matchMedia")}),Pt.matchMedia().add("(orientation: portrait)",function(){return uu(),uu})):console.warn("Requires GSAP 3.11.0 or later"),uu(),_n(Le,"scroll",Fs);var n=Ae.hasAttribute("style"),i=Ae.style,s=i.borderTopStyle,a=Pt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=lr(Ae),on.m=Math.round(o.top+on.sc())||0,En.m=Math.round(o.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Ae.setAttribute("style",""),Ae.removeAttribute("style")),al=setInterval(mp,250),Pt.delayedCall(.5,function(){return ol=0}),_n(Le,"touchcancel",Gi),_n(Ae,"touchstart",Gi),cl(_n,Le,"pointerdown,touchstart,mousedown",up),cl(_n,Le,"pointerup,touchend,mouseup",fp),pu=Pt.utils.checkPrefix("transform"),vl.push(pu),Os=Ln(),Ml=Pt.delayedCall(.2,ts).pause(),Bs=[Le,"visibilitychange",function(){var h=fe.innerWidth,d=fe.innerHeight;Le.hidden?(op=h,lp=d):(op!==h||lp!==d)&&Qa()},Le,"DOMContentLoaded",ts,fe,"load",ts,fe,"resize",Qa],ll(_n),ue.forEach(function(h){return h.enable(0,1)}),l=0;l<he.length;l+=3)hl(gn,he[l],he[l+1]),hl(gn,he[l],he[l+2])}else if(Le){var c=function h(){r.enable(),Le.removeEventListener("DOMContentLoaded",h)};Le.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(cu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(al)||(al=i)&&setInterval(mp,i),"ignoreMobileResize"in n&&(mu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ll(gn)||ll(_n,n.autoRefreshEvents||"none"),Tp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),a=he.indexOf(s),o=rs(s);~a&&he.splice(a,o?6:2),i&&(o?Ei.unshift(fe,i,Ae,i,ri,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){ue.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ii(n)?kn(n):n).getBoundingClientRect(),o=a[s?es:ns]*i||0;return s?a.right-o>0&&a.left+o<fe.innerWidth:a.bottom-o>0&&a.top+o<fe.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=kn(n));var a=n.getBoundingClientRect(),o=a[s?es:ns],l=i==null?o/2:i in bl?bl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/fe.innerWidth:(a.top+l)/fe.innerHeight},r.killAll=function(n){if(ue.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();ie.version="3.15.0";ie.saveStyles=function(r){return r?$a(r).forEach(function(t){if(t&&t.style){var e=ni.indexOf(t);e>=0&&ni.splice(e,5),ni.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),gu())}}):ni};ie.revert=function(r,t){return Cu(!r,t)};ie.create=function(r,t){return new ie(r,t)};ie.refresh=function(r){return r?Qa(!0):(Os||ie.register())&&ts(!0)};ie.update=function(r){return++he.cache&&cr(r===!0?2:0)};ie.clearScrollMemory=Bp;ie.maxScroll=function(r,t){return Hi(r,t?En:on)};ie.getScrollFunc=function(r,t){return ar(kn(r),t?En:on)};ie.getById=function(r){return xu[r]};ie.getAll=function(){return ue.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!_i};ie.snapDirectional=Eu;ie.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Pt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Rn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Rn(s)&&(s=s(),_n(ie,"refresh",function(){return s=t.batchMax()})),$a(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ie.create(c))}),e};var Mp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},du=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(tn.isTouch?" pinch-zoom":""):"none",t===ri&&r(Ae,e)},ml={auto:1,scroll:1},E1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Pt.core.getCache(s),o=Ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ae&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ml[(l=gi(s)).overflowY]||ml[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!rs(s)&&(ml[(l=gi(s)).overflowY]||ml[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Qp=function(t,e,n,i){return tn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&E1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(Le,tn.eventTypes[0],bp,!1,!0)},onDisable:function(){return gn(Le,tn.eventTypes[0],bp,!0)}})},C1=/(input|label|select|textarea)/i,Sp,bp=function(t){var e=C1.test(t.target.tagName);(e||Sp)&&(t._gsapAllow=!0,Sp=e)},L1=function(t){jr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=kn(t.target)||ri,h=Pt.core.globals().ScrollSmoother,d=h&&h.get(),u=Er&&(t.content&&kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ar(c,on),g=ar(c,En),v=1,p=(tn.isTouch&&fe.visualViewport?fe.visualViewport.scale*fe.visualViewport.width:fe.outerWidth)/fe.innerWidth,m=0,w=Rn(i)?function(){return i(o)}:function(){return i||2.8},L,y,S=Qp(c,t.type,!0,s),b=function(){return y=!1},T=Gi,x=Gi,A=function(){l=Hi(c,on),x=Va(Er?1:0,l),n&&(T=Va(0,Hi(c,En))),L=is},R=function(){u._gsap.y=ka(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(y){requestAnimationFrame(b);var et=ka(o.deltaY/2),q=x(f.v-et);if(u&&q!==f.v+f.offset){f.offset=q-f.v;var C=ka((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=he.cache,cr()}return!0}f.offset&&R(),y=!0},P,O,D,k,$=function(){A(),P.isActive()&&P.vars.scrollY>l&&(f()>l?P.progress(1)&&f(l):P.resetTo("scrollY",l))};return u&&Pt.set(u,{y:"+=0"}),t.ignoreCheck=function(G){return Er&&G.type==="touchmove"&&I(G)||v>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){y=!1;var G=v;v=ka((fe.visualViewport&&fe.visualViewport.scale||1)/p),P.pause(),G!==v&&du(c,v>1.01?!0:n?!1:"x"),O=g(),D=f(),A(),L=is},t.onRelease=t.onGestureStart=function(G,et){if(f.offset&&R(),!et)k.restart(!0);else{he.cache++;var q=w(),C,nt;n&&(C=g(),nt=C+q*.05*-G.velocityX/.227,q*=Mp(g,C,nt,Hi(c,En)),P.vars.scrollX=T(nt)),C=f(),nt=C+q*.05*-G.velocityY/.227,q*=Mp(f,C,nt,Hi(c,on)),P.vars.scrollY=x(nt),P.invalidate().duration(q).play(.01),(Er&&P.vars.scrollY>=l||C>=l-1)&&Pt.to({},{onUpdate:$,duration:q})}a&&a(G)},t.onWheel=function(){P._ts&&P.pause(),Ln()-m>1e3&&(L=0,m=Ln())},t.onChange=function(G,et,q,C,nt){if(is!==L&&A(),et&&n&&g(T(C[2]===et?O+(G.startX-G.x):g()+et-C[1])),q){f.offset&&R();var It=nt[2]===q,At=It?D+G.startY-G.y:f()+q-nt[1],Qt=x(At);It&&At!==Qt&&(D+=Qt-At),f(Qt)}(q||et)&&cr()},t.onEnable=function(){du(c,n?!1:"x"),ie.addEventListener("refresh",$),_n(fe,"resize",$),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},t.onDisable=function(){du(c,!0),gn(fe,"resize",$),ie.removeEventListener("refresh",$),S.kill()},t.lockAxis=t.lockAxis!==!1,o=new tn(t),o.iOS=Er,Er&&!f()&&f(1),Er&&Pt.ticker.add(Gi),k=o._dc,P=Pt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zp(f,f(),function(){return P.pause()})},onUpdate:cr,onComplete:k.vars.onComplete}),o};ie.sort=function(r){if(Rn(r))return ue.sort(r);var t=fe.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+fe.innerHeight}),ue.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(r){return new tn(r)};ie.normalizeScroll=function(r){if(typeof r>"u")return zn;if(r===!0&&zn)return zn.enable();if(r===!1){zn&&zn.kill(),zn=r;return}var t=r instanceof tn?r:L1(r);return zn&&zn.target===t.target&&zn.kill(),rs(t.target)&&(zn=t),t};ie.core={_getVelocityProp:sl,_inputObserver:Qp,_scrollers:he,_proxies:Ei,bridge:{ss:function(){_i||as("scrollStart"),_i=Ln()},ref:function(){return Cn}}};Lp()&&Pt.registerPlugin(ie);var o0=0,rf=1,l0=2;var yo=1,c0=2,la=3,Hr=0,bn=1,Hn=2,$i=0,ca=1,sf=2,af=3,of=4,Mo=5;var Zi=100,h0=101,u0=102,So=103,f0=104,bo=200,ps=201,wo=202,d0=203,lf=204,cf=205,p0=206,m0=207,g0=208,_0=209,x0=210,v0=211,y0=212,M0=213,S0=214,Xl=0,ql=1,Yl=2,na=3,$l=4,Zl=5,Jl=6,Kl=7,hf=0,b0=1,w0=2,Di=0,uf=1,ff=2,df=3,pf=4,mf=5,gf=6,_f=7;var xf=300,Wr=301,ms=302,wc=303,Tc=304,To=306,Nr=1e3,li=1001,jl=1002,vn=1003,T0=1004;var Ao=1005;var Oe=1006,Ac=1007;var Mi=1008;var hi=1009,vf=1010,yf=1011,ha=1012,Ec=1013,Ni=1014,Ui=1015,Fi=1016,Cc=1017,Lc=1018,ua=1020,Mf=35902,Sf=35899,bf=1021,wf=1022,Si=1023,Xi=1026,Xr=1027,Tf=1028,Rc=1029,qr=1030,Pc=1031;var Ic=1033,Eo=33776,Co=33777,Lo=33778,Ro=33779,Dc=35840,Nc=35841,Uc=35842,Fc=35843,Oc=36196,Bc=37492,kc=37496,zc=37488,Qc=37489,Po=37490,Vc=37491,Gc=37808,Hc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,$c=37814,Zc=37815,Jc=37816,Kc=37817,jc=37818,th=37819,eh=37820,nh=37821,ih=36492,rh=36494,sh=36495,ah=36283,oh=36284,Io=36285,lh=36286;var no=2300,tc=2301,Hl=2302,Ju=2303,Ku=2400,ju=2401,tf=2402;var A0=3200;var Af=0,E0=1,bi="",oi="srgb",io="srgb-linear",ro="linear",Ee="srgb";var Wl=7680;var C0=519,L0=512,R0=513,P0=514,ch=515,I0=516,D0=517,hh=518,N0=519,U0=35044;var Ef="300 es",Ii=2e3,so=2001;function R1(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function P1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function F0(){let r=ao("canvas");return r.style.display="block",r}var Vp={},ia=null;function Cf(...r){let t="THREE."+r.shift();ia?ia("log",t,...r):console.log(t,...r)}function O0(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Jt(...r){r=O0(r);let t="THREE."+r.shift();if(ia)ia("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Kt(...r){r=O0(r);let t="THREE."+r.shift();if(ia)ia("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function fs(...r){let t=r.join(" ");t in Vp||(Vp[t]=!0,Jt(...r))}function B0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var k0={[Xl]:ql,[Yl]:Jl,[$l]:Kl,[na]:Zl,[ql]:Xl,[Jl]:Yl,[Kl]:$l,[Zl]:na},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lu=Math.PI/180,ec=180/Math.PI;function Do(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ge(r,t,e){return Math.max(t,Math.min(e,r))}function I1(r,t){return(r%t+t)%t}function Ru(r,t,e){return(1-e)*r+e*t}function Ja(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Df=class Df{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;var Me=Df,Yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let w=Math.acos(p),L=Math.sin(w);m=Math.sin(m*w)/L,o=Math.sin(o*w)/L,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nf=class Nf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pu.copy(this).projectOnVector(t),this.sub(Pu)}reflect(t){return this.sub(Pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nf.prototype.isVector3=!0;var z=Nf,Pu=new z,Gp=new Yi,Uf=class Uf{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],w=i[1],L=i[4],y=i[7],S=i[2],b=i[5],T=i[8];return s[0]=a*v+o*w+l*S,s[3]=a*p+o*L+l*b,s[6]=a*m+o*y+l*T,s[1]=c*v+h*w+d*S,s[4]=c*p+h*L+d*b,s[7]=c*m+h*y+d*T,s[2]=u*v+f*w+g*S,s[5]=u*p+f*L+g*b,s[8]=u*m+f*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;var jt=Uf,Iu=new jt,Hp=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D1(){let r={enabled:!0,workingColorSpace:io,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ee&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(i.r=ea(i.r),i.g=ea(i.g),i.b=ea(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?ro:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[io]:{primaries:t,whitePoint:n,transfer:ro,toXYZ:Hp,fromXYZ:Wp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Hp,fromXYZ:Wp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}var pe=D1();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ea(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Vs,nc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=ao("canvas")),Vs.width=t.width,Vs.height=t.height;let i=Vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},N1=0,ra=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Do(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Du(i[a].image)):s.push(Du(i[a]))}else s=Du(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Du(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var U1=0,Nu=new z,Gn=class r extends qi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=li,i=li,s=Oe,a=Mi,o=Si,l=hi,c=r.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Do(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nu).x}get height(){return this.source.getSize(Nu).y}get depth(){return this.source.getSize(Nu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=xf;Gn.DEFAULT_ANISOTROPY=1;var Ff=class Ff{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,y=(f+1)/2,S=(m+1)/2,b=(h+u)/4,T=(d+v)/4,x=(g+p)/4;return L>y&&L>S?L<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(L),i=b/n,s=T/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=x/s),this.set(n,i,s,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ff.prototype.isVector4=!0;var Ze=Ff,ic=class extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Gn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ra(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oo=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bc=class bc{constructor(t,e,n,i,s,a,o,l,c,h,d,u,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,v,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Gs.setFromMatrixColumn(t,0).length(),s=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F1,t,O1)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Cr.crossVectors(n,si),Cr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Cr.crossVectors(n,si)),Cr.normalize(),Tl.crossVectors(si,Cr),i[0]=Cr.x,i[4]=Tl.x,i[8]=si.x,i[1]=Cr.y,i[5]=Tl.y,i[9]=si.y,i[2]=Cr.z,i[6]=Tl.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],w=n[3],L=n[7],y=n[11],S=n[15],b=i[0],T=i[4],x=i[8],A=i[12],R=i[1],I=i[5],P=i[9],O=i[13],D=i[2],k=i[6],$=i[10],G=i[14],et=i[3],q=i[7],C=i[11],nt=i[15];return s[0]=a*b+o*R+l*D+c*et,s[4]=a*T+o*I+l*k+c*q,s[8]=a*x+o*P+l*$+c*C,s[12]=a*A+o*O+l*G+c*nt,s[1]=h*b+d*R+u*D+f*et,s[5]=h*T+d*I+u*k+f*q,s[9]=h*x+d*P+u*$+f*C,s[13]=h*A+d*O+u*G+f*nt,s[2]=g*b+v*R+p*D+m*et,s[6]=g*T+v*I+p*k+m*q,s[10]=g*x+v*P+p*$+m*C,s[14]=g*A+v*O+p*G+m*nt,s[3]=w*b+L*R+y*D+S*et,s[7]=w*T+L*I+y*k+S*q,s[11]=w*x+L*P+y*$+S*C,s[15]=w*A+L*O+y*G+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],w=l*f-c*u,L=o*f-c*d,y=o*u-l*d,S=a*f-c*h,b=a*u-l*h,T=a*d-o*h;return e*(v*w-p*L+m*y)-n*(g*w-p*S+m*b)+i*(g*L-v*S+m*T)-s*(g*y-v*b+p*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],w=e*o-n*a,L=e*l-i*a,y=e*c-s*a,S=n*l-i*o,b=n*c-s*o,T=i*c-s*l,x=h*v-d*g,A=h*p-u*g,R=h*m-f*g,I=d*p-u*v,P=d*m-f*v,O=u*m-f*p,D=w*O-L*P+y*I+S*R-b*A+T*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(o*O-l*P+c*I)*k,t[1]=(i*P-n*O-s*I)*k,t[2]=(v*T-p*b+m*S)*k,t[3]=(u*b-d*T-f*S)*k,t[4]=(l*R-a*O-c*A)*k,t[5]=(e*O-i*R+s*A)*k,t[6]=(p*y-g*T-m*L)*k,t[7]=(h*T-u*y+f*L)*k,t[8]=(a*P-o*R+c*x)*k,t[9]=(n*R-e*P-s*x)*k,t[10]=(g*b-v*y+m*w)*k,t[11]=(d*y-h*b-f*w)*k,t[12]=(o*A-a*I-l*x)*k,t[13]=(e*I-n*A+i*x)*k,t[14]=(v*L-g*S-p*w)*k,t[15]=(h*S-d*L+u*w)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,v=a*h,p=a*d,m=o*d,w=l*c,L=l*h,y=l*d,S=n.x,b=n.y,T=n.z;return i[0]=(1-(v+m))*S,i[1]=(f+y)*S,i[2]=(g-L)*S,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+m))*b,i[6]=(p+w)*b,i[7]=0,i[8]=(g+L)*T,i[9]=(p-w)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Gs.set(i[0],i[1],i[2]).length(),o=Gs.set(i[4],i[5],i[6]).length(),l=Gs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ci.copy(this);let c=1/a,h=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Ii,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===Ii)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===so)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ii,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===Ii)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===so)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bc.prototype.isMatrix4=!0;var $e=bc,Gs=new z,Ci=new $e,F1=new z(0,0,0),O1=new z(1,1,1),Cr=new z,Tl=new z,si=new z,Xp=new $e,qp=new Yi,Ur=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qp.setFromEuler(this),this.setFromQuaternion(qp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B1=0,Yp=new z,Hs=new Yi,hr=new $e,Al=new z,Ka=new z,k1=new z,z1=new Yi,$p=new z(1,0,0),Zp=new z(0,1,0),Jp=new z(0,0,1),Kp={type:"added"},Q1={type:"removed"},Ws={type:"childadded",child:null},Uu={type:"childremoved",child:null},yi=class r extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new z,e=new Ur,n=new Yi,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new jt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis($p,t)}rotateY(t){return this.rotateOnAxis(Zp,t)}rotateZ(t){return this.rotateOnAxis(Jp,t)}translateOnAxis(t,e){return Yp.copy(t).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($p,t)}translateY(t){return this.translateOnAxis(Zp,t)}translateZ(t){return this.translateOnAxis(Jp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Al.copy(t):Al.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Ka,Al,this.up):hr.lookAt(Al,Ka,this.up),this.quaternion.setFromRotationMatrix(hr),i&&(hr.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(hr),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kp),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Q1),Uu.child=t,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kp),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,t,k1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yi.DEFAULT_UP=new z(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=class extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}},V1={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},El={h:0,s:0,l:0};function Fu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=I1(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Fu(a,s,t+1/3),this.g=Fu(a,s,t),this.b=Fu(a,s,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=oi){function n(s){s!==void 0&&parseFloat(s)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){let n=z0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=ea(t.r),this.g=ea(t.g),this.b=ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return pe.workingToColorSpace(In.copy(this),t),Math.round(ge(In.r*255,0,255))*65536+Math.round(ge(In.g*255,0,255))*256+Math.round(ge(In.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(In.copy(this),e);let n=In.r,i=In.g,s=In.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=oi){pe.workingToColorSpace(In.copy(this),t);let e=In.r,n=In.g,i=In.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+e,Lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Lr),t.getHSL(El);let n=Ru(Lr.h,El.h,e),i=Ru(Lr.s,El.s,e),s=Ru(Lr.l,El.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new ve;ve.NAMES=z0;var Fr=class extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new z,ur=new z,Ou=new z,fr=new z,Xs=new z,qs=new z,jp=new z,Bu=new z,ku=new z,zu=new z,Qu=new Ze,Vu=new Ze,Gu=new Ze,Dr=class r{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),ur.subVectors(n,e),Ou.subVectors(t,e);let a=Li.dot(Li),o=Li.dot(ur),l=Li.dot(Ou),c=ur.dot(ur),h=ur.dot(Ou),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(a,fr.y),l.addScaledVector(o,fr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Qu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Qu.fromBufferAttribute(t,e),Vu.fromBufferAttribute(t,n),Gu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(Vu,s.y),a.addScaledVector(Gu,s.z),a}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),ur.subVectors(t,e),Li.cross(ur).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Li.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Xs.subVectors(i,n),qs.subVectors(s,n),Bu.subVectors(t,n);let l=Xs.dot(Bu),c=qs.dot(Bu);if(l<=0&&c<=0)return e.copy(n);ku.subVectors(t,i);let h=Xs.dot(ku),d=qs.dot(ku);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);zu.subVectors(t,s);let f=Xs.dot(zu),g=qs.dot(zu);if(g>=0&&f<=g)return e.copy(s);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qs,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return jp.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(jp,o);let m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Or=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ja),Ll.subVectors(this.max,ja),Ys.subVectors(t.a,ja),$s.subVectors(t.b,ja),Zs.subVectors(t.c,ja),Rr.subVectors($s,Ys),Pr.subVectors(Zs,$s),os.subVectors(Ys,Zs);let e=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-os.z,os.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,os.z,0,-os.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-os.y,os.x,0];return!Hu(e,Ys,$s,Zs,Ll)||(e=[1,0,0,0,1,0,0,0,1],!Hu(e,Ys,$s,Zs,Ll))?!1:(Rl.crossVectors(Rr,Pr),e=[Rl.x,Rl.y,Rl.z],Hu(e,Ys,$s,Zs,Ll))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},dr=[new z,new z,new z,new z,new z,new z,new z,new z],Ri=new z,Cl=new Or,Ys=new z,$s=new z,Zs=new z,Rr=new z,Pr=new z,os=new z,ja=new z,Ll=new z,Rl=new z,ls=new z;function Hu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ls.fromArray(r,s);let o=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cn=new z,Pl=new Me,G1=0,en=class extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=U0,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pl.fromBufferAttribute(this,e),Pl.applyMatrix3(t),this.setXY(e,Pl.x,Pl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ja(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ja(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ja(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ja(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ja(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var co=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ho=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var vi=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},H1=new Or,to=new z,Wu=new z,aa=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):H1.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Wu)),this.expandByPoint(to.copy(t.center).sub(Wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},W1=0,xi=new $e,Xu=new yi,Js=new z,ai=new Or,eo=new Or,xn=new z,Nn=class r extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(R1(t)?ho:co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return Xu.lookAt(t),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ai.min,eo.min),ai.expandByPoint(xn),xn.addVectors(ai.max,eo.max),ai.expandByPoint(xn)):(ai.expandByPoint(eo.min),ai.expandByPoint(eo.max))}ai.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)xn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(t,c),xn.add(Js)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new z,l[x]=new z;let c=new z,h=new z,d=new z,u=new Me,f=new Me,g=new Me,v=new z,p=new z;function m(x,A,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(v),o[A].add(v),o[R].add(v),l[x].add(p),l[A].add(p),l[R].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let x=0,A=w.length;x<A;++x){let R=w[x],I=R.start,P=R.count;for(let O=I,D=I+P;O<D;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let L=new z,y=new z,S=new z,b=new z;function T(x){S.fromBufferAttribute(i,x),b.copy(S);let A=o[x];L.copy(A),L.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(b,A);let I=y.dot(l[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,I)}for(let x=0,A=w.length;x<A;++x){let R=w[x],I=R.start,P=R.count;for(let O=I,D=I+P;O<D;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new en(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qu=new z,X1=new z,q1=new jt,Pi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=qu.subVectors(n,e).cross(X1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(qu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||q1.getNormalMatrix(t),i=this.coplanarPoint(qu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Y1=0,ds=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=ca,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pr=new z,Yu=new z,Il=new z,Dl=new z,sc=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pr.copy(this.origin).addScaledVector(this.direction,e),pr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yu.copy(t).add(e).multiplyScalar(.5),Il.copy(e).sub(t).normalize(),Dl.copy(this.origin).sub(Yu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Il),o=Dl.dot(this.direction),l=-Dl.dot(Il),c=Dl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Yu).addScaledVector(Il,u),f}intersectSphere(t,e){if(t.radius<0)return null;pr.subVectors(t.center,this.origin);let n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,w=n.y-a.y,L=n.z-a.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(h),T,x,A,R,I,P,O,D,k,$,G,et;if(y>=S&&y>=b?(A=l,P=d,k=g,et=m,l>=0?(T=c,x=h,R=u,I=f,O=v,D=p,$=w,G=L):(T=h,x=c,R=f,I=u,O=p,D=v,$=L,G=w)):S>=b?(A=c,P=u,k=v,et=w,c>=0?(T=h,x=l,R=f,I=d,O=p,D=g,$=L,G=m):(T=l,x=h,R=d,I=f,O=g,D=p,$=m,G=L)):(A=h,P=f,k=p,et=L,h>=0?(T=l,x=c,R=d,I=u,O=g,D=v,$=m,G=w):(T=c,x=l,R=u,I=d,O=v,D=g,$=w,G=m)),A===0)return null;let q=T/A,C=x/A,nt=1/A,It=R-q*P,At=I-C*P,Qt=O-q*k,Yt=D-C*k,qt=$-q*et,Y=G-C*et,j=qt*Yt-Y*Qt,gt=It*Y-At*qt,Vt=Qt*At-Yt*It;if(i){if(j<0||gt<0||Vt<0)return null}else if((j<0||gt<0||Vt<0)&&(j>0||gt>0||Vt>0))return null;let xt=j+gt+Vt;if(xt===0)return null;let Gt=nt*(j*P+gt*k+Vt*et);return(xt>0?Gt<0:Gt>0)?null:this.at(Gt/xt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},uo=class extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},t0=new $e,cs=new sc,Nl=new aa,e0=new z,Ul=new z,Fl=new z,Ol=new z,$u=new z,Bl=new z,n0=new z,kl=new z,Je=class extends yi{constructor(t=new Nn,e=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&($u.fromBufferAttribute(d,t),a?Bl.addScaledVector($u,h):Bl.addScaledVector($u.sub(e),h))}e.add(Bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),cs.copy(t.ray).recast(t.near),!(Nl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Nl,e0)===null||cs.origin.distanceToSquared(e0)>(t.far-t.near)**2))&&(t0.copy(s).invert(),cs.copy(t.ray).applyMatrix4(t0),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),L=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,S=L;y<S;y+=3){let b=o.getX(y),T=o.getX(y+1),x=o.getX(y+2);i=zl(this,m,t,n,c,h,d,b,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let w=o.getX(p),L=o.getX(p+1),y=o.getX(p+2);i=zl(this,a,t,n,c,h,d,w,L,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),L=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,S=L;y<S;y+=3){let b=y,T=y+1,x=y+2;i=zl(this,m,t,n,c,h,d,b,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let w=p,L=p+1,y=p+2;i=zl(this,a,t,n,c,h,d,w,L,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function $1(r,t,e,n,i,s,a,o){let l;if(t.side===bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Hr,o),l===null)return null;kl.copy(o),kl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(kl);return c<e.near||c>e.far?null:{distance:c,point:kl.clone(),object:r}}function zl(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ul),r.getVertexPosition(l,Fl),r.getVertexPosition(c,Ol);let h=$1(r,t,e,n,Ul,Fl,Ol,n0);if(h){let d=new z;Dr.getBarycoord(n0,Ul,Fl,Ol,d),i&&(h.uv=Dr.getInterpolatedAttribute(i,o,l,c,d,new Me)),s&&(h.uv1=Dr.getInterpolatedAttribute(s,o,l,c,d,new Me)),a&&(h.normal=Dr.getInterpolatedAttribute(a,o,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};Dr.getNormal(Ul,Fl,Ol,u.normal),h.face=u,h.barycoord=d}return h}var ac=class extends Gn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=vn,h=vn,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends en{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var hs=new aa,Z1=new Me(.5,.5),Ql=new z,fo=class{constructor(t=new Pi,e=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],v=s[9],p=s[10],m=s[11],w=s[12],L=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,f-h,m-g,S-w).normalize(),i[1].setComponents(c+a,f+h,m+g,S+w).normalize(),i[2].setComponents(c+o,f+d,m+v,S+L).normalize(),i[3].setComponents(c-o,f-d,m-v,S-L).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,m-p,S-y).normalize();else if(i[4].setComponents(c-l,f-u,m-p,S-y).normalize(),e===Ii)i[5].setComponents(c+l,f+u,m+p,S+y).normalize();else if(e===so)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=Z1.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ql.x=i.normal.x>0?t.max.x:t.min.x,Ql.y=i.normal.y>0?t.max.y:t.min.y,Ql.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var po=class extends Gn{constructor(t=[],e=Wr,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oa=class extends Gn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kr=class extends Gn{constructor(t,e,n=Ni,i,s,a,o=vn,l=vn,c,h=Xi,d=1){if(h!==Xi&&h!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oc=class extends kr{constructor(t,e=Ni,n=Wr,i,s,a=vn,o=vn,l,c=Xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},gr=class r extends Nn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(h,3)),this.setAttribute("uv",new vi(d,2));function g(v,p,m,w,L,y,S,b,T,x,A){let R=y/T,I=S/x,P=y/2,O=S/2,D=b/2,k=T+1,$=x+1,G=0,et=0,q=new z;for(let C=0;C<$;C++){let nt=C*I-O;for(let It=0;It<k;It++){let At=It*R-P;q[v]=At*w,q[p]=nt*L,q[m]=D,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[m]=b>0?1:-1,h.push(q.x,q.y,q.z),d.push(It/T),d.push(1-C/x),G+=1}}for(let C=0;C<x;C++)for(let nt=0;nt<T;nt++){let It=u+nt+k*C,At=u+nt+k*(C+1),Qt=u+(nt+1)+k*(C+1),Yt=u+(nt+1)+k*C;l.push(It,At,Yt),l.push(At,Qt,Yt),et+=6}o.addGroup(f,et,A),f+=et,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var go=class r extends Nn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let w=m*u-a;for(let L=0;L<c;L++){let y=L*d-s;g.push(y,-w,0),v.push(0,0,1),p.push(L/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let L=w+c*m,y=w+c*(m+1),S=w+1+c*(m+1),b=w+1+c*m;f.push(L,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(v,3)),this.setAttribute("uv",new vi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function gs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(i0(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(i0(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Un(r){let t={};for(let e=0;e<r.length;e++){let n=gs(r[e]);for(let i in n)t[i]=n[i]}return t}function i0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function J1(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Lf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Q0={clone:gs,merge:Un},K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=J1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lc=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cc=class extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hc=class extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ks(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Zu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var zr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uc=class extends zr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ju:s=t,o=2*e-n;break;case tf:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:a=t,l=2*n-e;break;case tf:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,m=-u*p+2*u*v-u*g,w=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,L=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+w*a[c+S]+L*a[l+S]+y*a[d+S];return s}},fc=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},dc=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pc=class extends zr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),v=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*v+a[l+p]*g;return s}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*u+g*2,w=d[m],L=d[m+1],y=t*u+g*2,S=h[y],b=h[y+1],T=e_(n,e,w,S,i);s[g]=V0(T,v,L,b,p)}return s}};function V0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function t_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function e_(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=V0(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=t_(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ci=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Zu(t.settings)&&(n.settings={inTangents:Ks(t.settings.inTangents,Array),outTangents:Ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case Hl:e=this.InterpolantFactoryMethodSmooth;break;case Ju:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Hl;case this.InterpolantFactoryMethodBezier:return Ju}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Zu(this.settings)&&(r0(this.settings.inTangents,t),r0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&P1(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Zu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function r0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=tc;var Qr=class extends ci{constructor(t,e,n){super(t,e,n)}};Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=no;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};mc.prototype.ValueTypeName="color";var gc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};gc.prototype.ValueTypeName="number";var _c=class extends zr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yi.slerpFlat(s,0,a,c-o,a,c,l);return s}},_o=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends ci{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=no;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};xc.prototype.ValueTypeName="vector";var vc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},G0=new vc,yc=class{constructor(t){this.manager=t!==void 0?t:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vl=new z,Gl=new Yi,Wi=new z,xo=class extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vl,Gl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vl,Gl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new z,s0=new Me,a0=new Me,Dn=class extends xo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z)}getViewSize(t,e){return this.getViewBounds(t,s0,a0),e.subVectors(a0,s0)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gr=class extends xo{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var vo=class extends Nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var js=-90,ta=1,Mc=class extends yi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dn(js,ta,t,e);i.layers=this.layers,this.add(i);let s=new Dn(js,ta,t,e);s.layers=this.layers,this.add(s);let a=new Dn(js,ta,t,e);a.layers=this.layers,this.add(a);let o=new Dn(js,ta,t,e);o.layers=this.layers,this.add(o);let l=new Dn(js,ta,t,e);l.layers=this.layers,this.add(l);let c=new Dn(js,ta,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sc=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Rf="\\[\\]\\.:\\/",n_=new RegExp("["+Rf+"]","g"),Pf="[^"+Rf+"]",i_="[^"+Rf.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Pf),s_=/(WCOD+)?/.source.replace("WCOD",i_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),l_=new RegExp("^"+r_+s_+a_+o_+"$"),c_=["material","materials","bones","map"],ef=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);c_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=ef;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V3=new Float32Array(1);var Of=class Of{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Of.prototype.isMatrix2=!0;var nf=Of;function If(r,t,e,n){let i=h_(n);switch(e){case bf:return r*t;case Tf:return r*t/i.components*i.byteLength;case Rc:return r*t/i.components*i.byteLength;case qr:return r*t*2/i.components*i.byteLength;case Pc:return r*t*2/i.components*i.byteLength;case wf:return r*t*3/i.components*i.byteLength;case Si:return r*t*4/i.components*i.byteLength;case Ic:return r*t*4/i.components*i.byteLength;case Eo:case Co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Fc:return Math.max(r,16)*Math.max(t,8)/4;case Dc:case Uc:return Math.max(r,8)*Math.max(t,8)/2;case Oc:case Bc:case zc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kc:case Po:case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case jc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ih:case rh:case sh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ah:case oh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Io:case lh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h_(r){switch(r){case hi:case vf:return{byteLength:1,components:1};case ha:case yf:case Fi:return{byteLength:2,components:1};case Cc:case Lc:return{byteLength:2,components:4};case Ni:case Ec:case Ui:return{byteLength:4,components:1};case Mf:case Sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function um(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function f_(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A_=`#ifdef USE_IRIDESCENCE
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
#endif`,E_=`#ifdef USE_BUMPMAP
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F_=`#define PI 3.141592653589793
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
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
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
#endif`,ux=`uniform sampler2D dfgLUT;
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
}`,fx=`
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n2=`#ifdef USE_SKINNING
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
#endif`,i2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#ifdef USE_TRANSMISSION
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p2=`uniform sampler2D t2D;
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`#include <common>
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
}`,y2=`#if DEPTH_PACKING == 3200
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
}`,M2=`#define DISTANCE
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
}`,S2=`#define DISTANCE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`uniform float scale;
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
}`,A2=`uniform vec3 diffuse;
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
}`,E2=`#include <common>
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
}`,C2=`uniform vec3 diffuse;
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
}`,L2=`#define LAMBERT
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
}`,R2=`#define LAMBERT
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
}`,P2=`#define MATCAP
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
}`,I2=`#define MATCAP
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
}`,D2=`#define NORMAL
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
}`,N2=`#define NORMAL
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
}`,U2=`#define PHONG
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
}`,F2=`#define PHONG
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
}`,O2=`#define STANDARD
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
}`,B2=`#define STANDARD
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
}`,k2=`#define TOON
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
}`,z2=`#define TOON
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
}`,Q2=`uniform float size;
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
}`,V2=`uniform vec3 diffuse;
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
}`,G2=`#include <common>
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
}`,H2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,X2=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:d_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:__,alphatest_pars_fragment:x_,aomap_fragment:v_,aomap_pars_fragment:y_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:b_,beginnormal_vertex:w_,bsdfs:T_,iridescence_fragment:A_,bumpmap_pars_fragment:E_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:P_,color_fragment:I_,color_pars_fragment:D_,color_pars_vertex:N_,color_vertex:U_,common:F_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:B_,displacementmap_pars_vertex:k_,displacementmap_vertex:z_,emissivemap_fragment:Q_,emissivemap_pars_fragment:V_,colorspace_fragment:G_,colorspace_pars_fragment:H_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:sx,envmap_vertex:$_,fog_vertex:Z_,fog_pars_vertex:J_,fog_fragment:K_,fog_pars_fragment:j_,gradientmap_pars_fragment:tx,lightmap_pars_fragment:ex,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:ox,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:hx,lights_physical_pars_fragment:ux,lights_fragment_begin:fx,lights_fragment_maps:dx,lights_fragment_end:px,lightprobes_pars_fragment:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:bx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:Ax,morphcolor_vertex:Ex,morphnormal_vertex:Cx,morphtarget_pars_vertex:Lx,morphtarget_vertex:Rx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Dx,normal_pars_vertex:Nx,normal_vertex:Ux,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:zx,opaque_fragment:Qx,packing:Vx,premultiplied_alpha_fragment:Gx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:$x,shadowmap_pars_vertex:Zx,shadowmap_vertex:Jx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:t2,skinning_vertex:e2,skinnormal_vertex:n2,specularmap_fragment:i2,specularmap_pars_fragment:r2,tonemapping_fragment:s2,tonemapping_pars_fragment:a2,transmission_fragment:o2,transmission_pars_fragment:l2,uv_pars_fragment:c2,uv_pars_vertex:h2,uv_vertex:u2,worldpos_vertex:f2,background_vert:d2,background_frag:p2,backgroundCube_vert:m2,backgroundCube_frag:g2,cube_vert:_2,cube_frag:x2,depth_vert:v2,depth_frag:y2,distance_vert:M2,distance_frag:S2,equirect_vert:b2,equirect_frag:w2,linedashed_vert:T2,linedashed_frag:A2,meshbasic_vert:E2,meshbasic_frag:C2,meshlambert_vert:L2,meshlambert_frag:R2,meshmatcap_vert:P2,meshmatcap_frag:I2,meshnormal_vert:D2,meshnormal_frag:N2,meshphong_vert:U2,meshphong_frag:F2,meshphysical_vert:O2,meshphysical_frag:B2,meshtoon_vert:k2,meshtoon_frag:z2,points_vert:Q2,points_frag:V2,shadow_vert:G2,shadow_frag:H2,sprite_vert:W2,sprite_frag:X2},St={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ki={basic:{uniforms:Un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ve(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([St.points,St.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([St.common,St.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([St.sprite,St.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Un([St.common,St.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Un([St.lights,St.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ki.physical={uniforms:Un([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var uh={r:0,b:0,g:0},q2=new $e,fm=new jt;fm.set(-1,0,0,0,1,0,0,0,1);function Y2(r,t,e,n,i,s){let a=new ve(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){let y=w.backgroundBlurriness>0;L=t.get(L,y)}return L}function g(w){let L=!1,y=f(w);y===null?p(a,o):y&&y.isColor&&(p(y,1),L=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(w,L){let y=f(L);y&&(y.isCubeTexture||y.mapping===To)?(c===void 0&&(c=new Je(new gr(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:gs(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q2.makeRotationFromEuler(L.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fm),c.material.toneMapped=pe.getTransfer(y.colorSpace)!==Ee,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new go(2,2),new He({name:"BackgroundMaterial",uniforms:gs(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,L){w.getRGB(uh,Lf(r)),e.buffers.color.setClear(uh.r,uh.g,uh.b,L,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,L=1){a.set(w),o=L,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:g,addToRenderList:v,dispose:m}}function $2(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(I,P,O,D,k){let $=!1,G=d(I,D,O,P);s!==G&&(s=G,c(s.object)),$=f(I,D,O,k),$&&g(I,D,O,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(I,P,O,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,P,O,D){let k=D.wireframe===!0,$=n[P.id];$===void 0&&($={},n[P.id]=$);let G=I.isInstancedMesh===!0?I.id:0,et=$[G];et===void 0&&(et={},$[G]=et);let q=et[O.id];q===void 0&&(q={},et[O.id]=q);let C=q[k];return C===void 0&&(C=u(l()),q[k]=C),C}function u(I){let P=[],O=[],D=[];for(let k=0;k<e;k++)P[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,P,O,D){let k=s.attributes,$=P.attributes,G=0,et=O.getAttributes();for(let q in et)if(et[q].location>=0){let nt=k[q],It=$[q];if(It===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(It=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(It=I.instanceColor)),nt===void 0||nt.attribute!==It||It&&nt.data!==It.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function g(I,P,O,D){let k={},$=P.attributes,G=0,et=O.getAttributes();for(let q in et)if(et[q].location>=0){let nt=$[q];nt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));let It={};It.attribute=nt,nt&&nt.data&&(It.data=nt.data),k[q]=It,G++}s.attributes=k,s.attributesNum=G,s.index=D}function v(){let I=s.newAttributes;for(let P=0,O=I.length;P<O;P++)I[P]=0}function p(I){m(I,0)}function m(I,P){let O=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;O[I]=1,D[I]===0&&(r.enableVertexAttribArray(I),D[I]=1),k[I]!==P&&(r.vertexAttribDivisor(I,P),k[I]=P)}function w(){let I=s.newAttributes,P=s.enabledAttributes;for(let O=0,D=P.length;O<D;O++)P[O]!==I[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function L(I,P,O,D,k,$,G){G===!0?r.vertexAttribIPointer(I,P,O,k,$):r.vertexAttribPointer(I,P,O,D,k,$)}function y(I,P,O,D){v();let k=D.attributes,$=O.getAttributes(),G=P.defaultAttributeValues;for(let et in $){let q=$[et];if(q.location>=0){let C=k[et];if(C===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(C=I.instanceColor)),C!==void 0){let nt=C.normalized,It=C.itemSize,At=t.get(C);if(At===void 0)continue;let Qt=At.buffer,Yt=At.type,qt=At.bytesPerElement,Y=Yt===r.INT||Yt===r.UNSIGNED_INT||C.gpuType===Ec;if(C.isInterleavedBufferAttribute){let j=C.data,gt=j.stride,Vt=C.offset;if(j.isInstancedInterleavedBuffer){for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<q.locationSize;xt++)p(q.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let xt=0;xt<q.locationSize;xt++)L(q.location+xt,It/q.locationSize,Yt,nt,gt*qt,(Vt+It/q.locationSize*xt)*qt,Y)}else{if(C.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)m(q.location+j,C.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let j=0;j<q.locationSize;j++)p(q.location+j);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let j=0;j<q.locationSize;j++)L(q.location+j,It/q.locationSize,Yt,nt,It*qt,It/q.locationSize*j*qt,Y)}}else if(G!==void 0){let nt=G[et];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(q.location,nt);break;case 3:r.vertexAttrib3fv(q.location,nt);break;case 4:r.vertexAttrib4fv(q.location,nt);break;default:r.vertexAttrib1fv(q.location,nt)}}}}w()}function S(){A();for(let I in n){let P=n[I];for(let O in P){let D=P[O];for(let k in D){let $=D[k];for(let G in $)h($[G].object),delete $[G];delete D[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let O in P){let D=P[O];for(let k in D){let $=D[k];for(let G in $)h($[G].object),delete $[G];delete D[k]}}delete n[I.id]}function T(I){for(let P in n){let O=n[P];for(let D in O){let k=O[D];if(k[I.id]===void 0)continue;let $=k[I.id];for(let G in $)h($[G].object),delete $[G];delete k[I.id]}}}function x(I){for(let P in n){let O=n[P],D=I.isInstancedMesh===!0?I.id:0,k=O[D];if(k!==void 0){for(let $ in k){let G=k[$];for(let et in G)h(G[et].object),delete G[et];delete k[$]}delete O[D],Object.keys(O).length===0&&delete n[P]}}}function A(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Z2(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function J2(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Si&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hi&&T!==Ui&&!x&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:y,maxSamples:S,samples:b}}function K2(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Pi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let w=s?0:n,L=w*4,y=m.clippingState||null;l.value=y,y=h(g,u,L,f);for(let S=0;S!==L;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let L=0,y=f;L!==v;++L,y+=4)a.copy(d[L]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var da=4,j2=6,tv=20,ev=256,No=new Gr,H0=new ve,Bf=null,kf=0,zf=0,Qf=!1,nv=new z,_s=new z,dh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=nv}=s;Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bf,kf,zf),this._renderer.xr.enabled=Qf,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wr||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Fi,format:Si,colorSpace:io,depthBuffer:!1},i=W0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iv(s)),this._blurMaterial=sv(s,t,e),this._ggxMaterial=rv(s,t,e)}return i}_compileMaterial(t){let e=new Je(new Nn,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,i,s){let l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(H0),d.toneMapping=Di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new gr,new uo({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,m=!0):(p.color.copy(H0),m=!0);for(let L=0;L<6;L++){let y=L%3;y===0?(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[L],s.y,s.z)):y===1?(l.up.set(0,0,c[L]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[L],s.z)):(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[L]));let S=this._cubeSize;fa(i,y*S,L>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Wr||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X0());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,No)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-da?n-g+da:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,fa(s,p,m,3*v,2*v),i.setRenderTarget(s),i.render(o,No),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,fa(t,p,m,3*v,2*v),i.setRenderTarget(t),i.render(o,No)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-da?i-this._lodMax+da:0),u=4*(this._cubeSize-h);fa(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,No)}};function iv(r){let t=[],e=[],n=r,i=r-da+1+j2;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let m=0;m<d;m++){let w=m%3*2/3-1,L=m>2?0:-1,y=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];g.set(y,f*u*m);for(let S=0;S<u;S++){let b=h[S*2]*2-1,T=h[S*2+1]*2-1;m===0?_s.set(1,T,b):m===1?_s.set(-b,1,-T):m===2?_s.set(-b,T,1):m===3?_s.set(-1,T,-b):m===4?_s.set(-b,-1,T):_s.set(b,T,-1),_s.toArray(v,(m*u+S)*f)}}let p=new Nn;p.setAttribute("position",new en(g,f)),p.setAttribute("outputDirection",new en(v,f)),e.push(new Je(p,null)),n>da&&n--}return{lodMeshes:e,sizeLods:t}}function W0(r,t,e){let n=new dn(r,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rv(r,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function sv(r,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:tv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function X0(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function q0(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ph=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=e;let a=new Je(i,s),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Oe),new Mc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function av(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===wc||f===Tc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new ph(g.height);return v.fromEquirectangularTexture(r,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===wc||f===Tc,v=f===Wr||f===ms;if(g||v){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new dh(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let w=u.image;return g&&w&&w.height>0||v&&w&&l(w)?(n===null&&(n=new dh(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===wc?u.mapping=Wr:f===Tc&&(u.mapping=ms),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ov(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&fs("WebGLRenderer: "+n+" extension not supported."),i}}}function lv(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let w=f.array;v=f.version;for(let L=0,y=w.length;L<y;L+=3){let S=w[L+0],b=w[L+1],T=w[L+2];u.push(S,b,b,T,T,S)}}else{let w=g.array;v=g.version;for(let L=0,y=w.length/3-1;L<y;L+=3){let S=L+0,b=L+1,T=L+2;u.push(S,b,b,T,T,S)}}let p=new(g.count>=65535?ho:co)(u,1);p.version=v;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function uv(r,t,e){let n=new WeakMap,i=new Ze;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],L=0;f===!0&&(L=1),g===!0&&(L=2),v===!0&&(L=3);let y=o.attributes.position.count*L,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*d),T=new oo(b,y,S,d);T.type=Ui,T.needsUpdate=!0;let x=L*4;for(let R=0;R<d;R++){let I=p[R],P=m[R],O=w[R],D=y*S*4*R;for(let k=0;k<I.count;k++){let $=k*x;f===!0&&(i.fromBufferAttribute(I,k),b[D+$+0]=i.x,b[D+$+1]=i.y,b[D+$+2]=i.z,b[D+$+3]=0),g===!0&&(i.fromBufferAttribute(P,k),b[D+$+4]=i.x,b[D+$+5]=i.y,b[D+$+6]=i.z,b[D+$+7]=0),v===!0&&(i.fromBufferAttribute(O,k),b[D+$+8]=i.x,b[D+$+9]=i.y,b[D+$+10]=i.z,b[D+$+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Me(y,S)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function fv(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var dv={[uf]:"LINEAR_TONE_MAPPING",[ff]:"REINHARD_TONE_MAPPING",[df]:"CINEON_TONE_MAPPING",[pf]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[_f]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};function pv(r,t,e,n,i,s){let a=new dn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Nn;c.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vi([0,2,0,0,2,0],2));let h=new lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Je(c,h),u=new Gr(-1,1,1,-1,0,1),f=null,g=null,v=!1,p,m=null,w=[],L=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<w.length;b++){let T=w[b];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){w=y,L=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new dn(S,b,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new dn(S,b,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<w.length;T++){let x=w[T];x.setSize&&x.setSize(S,b)}},this.begin=function(y,S){if(v||y.toneMapping===Di&&w.length===0)return!1;if(m=S,S!==null){let b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return L===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return L},this.end=function(y,S){y.toneMapping=p,v=!0;let b=a,T=o;for(let x=0;x<w.length;x++){let A=w[x];A.enabled!==!1&&(A.render(y,T,b,S),A.needsSwap!==!1&&(b=T,T=T===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},pe.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");let x=dv[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(d,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var dm=new Gn,Hf=new kr(1,1),pm=new oo,mm=new rc,gm=new po,Y0=[],$0=[],Z0=new Float32Array(16),J0=new Float32Array(9),K0=new Float32Array(4);function ma(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Y0[i];if(s===void 0&&(s=new Float32Array(i),Y0[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function pn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function mn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function _h(r,t){let e=$0[t];e===void 0&&(e=new Int32Array(t),$0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function mv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2fv(this.addr,t),mn(e,t)}}function _v(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;r.uniform3fv(this.addr,t),mn(e,t)}}function xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4fv(this.addr,t),mn(e,t)}}function vv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;K0.set(n),r.uniformMatrix2fv(this.addr,!1,K0),mn(e,n)}}function yv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;J0.set(n),r.uniformMatrix3fv(this.addr,!1,J0),mn(e,n)}}function Mv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Z0.set(n),r.uniformMatrix4fv(this.addr,!1,Z0),mn(e,n)}}function Sv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2iv(this.addr,t),mn(e,t)}}function wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3iv(this.addr,t),mn(e,t)}}function Tv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4iv(this.addr,t),mn(e,t)}}function Av(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ev(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2uiv(this.addr,t),mn(e,t)}}function Cv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3uiv(this.addr,t),mn(e,t)}}function Lv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4uiv(this.addr,t),mn(e,t)}}function Rv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Hf.compareFunction=e.isReversedDepthBuffer()?hh:ch,s=Hf):s=dm,e.setTexture2D(t||s,i)}function Pv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mm,i)}function Iv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gm,i)}function Dv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pm,i)}function Nv(r){switch(r){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return xv;case 35674:return vv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Ev;case 36295:return Cv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Uv(r,t){r.uniform1fv(this.addr,t)}function Fv(r,t){let e=ma(t,this.size,2);r.uniform2fv(this.addr,e)}function Ov(r,t){let e=ma(t,this.size,3);r.uniform3fv(this.addr,e)}function Bv(r,t){let e=ma(t,this.size,4);r.uniform4fv(this.addr,e)}function kv(r,t){let e=ma(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zv(r,t){let e=ma(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qv(r,t){let e=ma(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Vv(r,t){r.uniform1iv(this.addr,t)}function Gv(r,t){r.uniform2iv(this.addr,t)}function Hv(r,t){r.uniform3iv(this.addr,t)}function Wv(r,t){r.uniform4iv(this.addr,t)}function Xv(r,t){r.uniform1uiv(this.addr,t)}function qv(r,t){r.uniform2uiv(this.addr,t)}function Yv(r,t){r.uniform3uiv(this.addr,t)}function $v(r,t){r.uniform4uiv(this.addr,t)}function Zv(r,t,e){let n=this.cache,i=t.length,s=_h(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Hf:a=dm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Jv(r,t,e){let n=this.cache,i=t.length,s=_h(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mm,s[a])}function Kv(r,t,e){let n=this.cache,i=t.length,s=_h(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gm,s[a])}function jv(r,t,e){let n=this.cache,i=t.length,s=_h(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pm,s[a])}function ty(r){switch(r){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return Bv;case 35674:return kv;case 35675:return zv;case 35676:return Qv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Hv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return jv}}var Wf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}},Xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ty(e.type)}},qf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Vf=/(\w+)(\])?(\[|\.)?/g;function j0(r,t){r.seq.push(t),r.map[t.id]=t}function ey(r,t,e){let n=r.name,i=n.length;for(Vf.lastIndex=0;;){let s=Vf.exec(n),a=Vf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){j0(e,c===void 0?new Wf(o,r,t):new Xf(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new qf(o),j0(e,d)),e=d}}}var pa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ey(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function tm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ny=37297,iy=0;function ry(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var em=new jt;function sy(r){pe._getMatrix(em,pe.workingColorSpace,r);let t=`mat3( ${em.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case ro:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function nm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ry(r.getShaderSource(t),o)}else return s}function ay(r,t){let e=sy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var oy={[uf]:"Linear",[ff]:"Reinhard",[df]:"Cineon",[pf]:"ACESFilmic",[gf]:"AgX",[_f]:"Neutral",[mf]:"Custom"};function ly(r,t){let e=oy[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fh=new z;function cy(){pe.getLuminanceCoefficients(fh);let r=fh.x.toFixed(4),t=fh.y.toFixed(4),e=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function uy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Fo(r){return r!==""}function im(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(r){return r.replace(dy,my)}var py=new Map;function my(r,t){let e=le[t];if(e===void 0){let n=py.get(t);if(n!==void 0)e=le[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yf(e)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(r){return r.replace(gy,_y)}function _y(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function am(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var xy={[yo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function vy(r){return xy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yy={[Wr]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function My(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sy={[ms]:"ENVMAP_MODE_REFRACTION"};function by(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Sy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wy={[hf]:"ENVMAP_BLENDING_MULTIPLY",[b0]:"ENVMAP_BLENDING_MIX",[w0]:"ENVMAP_BLENDING_ADD"};function Ty(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wy[r.combine]||"ENVMAP_BLENDING_NONE"}function Ay(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ey(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=vy(e),c=My(e),h=by(e),d=Ty(e),u=Ay(e),f=hy(e),g=uy(s),v=i.createProgram(),p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fo).join(`
`),m.length>0&&(m+=`
`)):(p=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),m=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?le.tonemapping_pars_fragment:"",e.toneMapping!==Di?ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),a=Yf(a),a=im(a,e),a=rm(a,e),o=Yf(o),o=im(o,e),o=rm(o,e),a=sm(a),o=sm(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let L=w+p+a,y=w+m+o,S=tm(i,i.VERTEX_SHADER,L),b=tm(i,i.FRAGMENT_SHADER,y);i.attachShader(v,S),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(I){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(v)||"",O=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(b)||"",k=P.trim(),$=O.trim(),G=D.trim(),et=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,S,b);else{let C=nm(i,S,"vertex"),nt=nm(i,b,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+C+`
`+nt)}else k!==""?Jt("WebGLProgram: Program Info Log:",k):($===""||G==="")&&(q=!1);q&&(I.diagnostics={runnable:et,programLog:k,vertexShader:{log:$,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(S),i.deleteShader(b),x=new pa(i,v),A=fy(i,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(v,ny)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Cy=0,$f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zf(t),e.set(t,n)),n}},Zf=class{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}};function Ly(r){return r===qr||r===Po||r===Io}function Ry(r,t,e,n,i,s){let a=new lo,o=new $f,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,R,I,P,O){let D=I.fog,k=P.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,et=t.get(x.envMap||$,G),q=et&&et.mapping===To?et.image.height:null,C=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,It=nt!==void 0?nt.length:0,At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let Qt,Yt,qt,Y;if(C){let Ut=Ki[C];Qt=Ut.vertexShader,Yt=Ut.fragmentShader}else{Qt=x.vertexShader,Yt=x.fragmentShader;let Ut=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,Ut,st),qt=Ut.id,Y=st.id}let j=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Vt=P.isInstancedMesh===!0,xt=P.isBatchedMesh===!0,Gt=!!x.map,Mt=!!x.matcap,bt=!!et,Wt=!!x.aoMap,te=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,Se=!!x.displacementMap,Be=!!x.emissiveMap,$t=!!x.metalnessMap,_e=!!x.roughnessMap,F=x.anisotropy>0,Re=x.clearcoat>0,Xt=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,H=x.transmission>0,Z=F&&!!x.anisotropyMap,ct=Re&&!!x.clearcoatMap,at=Re&&!!x.clearcoatNormalMap,K=Re&&!!x.clearcoatRoughnessMap,tt=_&&!!x.iridescenceMap,dt=_&&!!x.iridescenceThicknessMap,Et=B&&!!x.sheenColorMap,pt=B&&!!x.sheenRoughnessMap,ft=!!x.specularMap,lt=!!x.specularColorMap,Dt=!!x.specularIntensityMap,kt=H&&!!x.transmissionMap,U=H&&!!x.thicknessMap,ut=!!x.gradientMap,J=!!x.alphaMap,ht=x.alphaTest>0,mt=!!x.alphaHash,it=!!x.extensions,ot=Di;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ot=r.toneMapping);let rt={shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:Yt,defines:x.defines,customVertexShaderID:qt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&P._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&P.instanceColor!==null,instancingMorph:Vt&&P.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:Mt,envMap:bt,envMapMode:bt&&et.mapping,envMapCubeUVHeight:q,aoMap:Wt,lightMap:te,bumpMap:Q,normalMap:re,displacementMap:Se,emissiveMap:Be,normalMapObjectSpace:re&&x.normalMapType===E0,normalMapTangentSpace:re&&x.normalMapType===Af,packedNormalMap:re&&x.normalMapType===Af&&Ly(x.normalMap.format),metalnessMap:$t,roughnessMap:_e,anisotropy:F,anisotropyMap:Z,clearcoat:Re,clearcoatMap:ct,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:Xt,retroreflection:E,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Et,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:lt,specularIntensityMap:Dt,transmission:H,transmissionMap:kt,thicknessMap:U,gradientMap:ut,opaque:x.transparent===!1&&x.blending===ca&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:mt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:Wt&&g(x.aoMap.channel),lightMapUv:te&&g(x.lightMap.channel),bumpMapUv:Q&&g(x.bumpMap.channel),normalMapUv:re&&g(x.normalMap.channel),displacementMapUv:Se&&g(x.displacementMap.channel),emissiveMapUv:Be&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:_e&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(x.sheenRoughnessMap.channel),specularMapUv:ft&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Dt&&g(x.specularIntensityMap.channel),transmissionMapUv:kt&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:J&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||F),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(Gt||J),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===Ee,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===Ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(A,x),w(A,x),A.push(r.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function w(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){let A=f[x.type],R;if(A){let I=Ki[A];R=Q0.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new Ey(r,A,x,i),c.push(R),h.set(A,R)),R}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:L,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:T}}function Py(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Iy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function om(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function lm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,p,m){let w=r[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},r[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=a(u),w.groupOrder=v,w.renderOrder=u.renderOrder,w.z=p,w.group=m),t++,w}function l(u,f,g,v,p,m,w){w.reversedDepth===!0&&(p=-p);let L=o(u,f,g,v,p,m);g.transmission>0?n.push(L):g.transparent===!0?i.push(L):e.push(L)}function c(u,f,g,v,p,m){let w=o(u,f,g,v,p,m);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||Iy),n.length>1&&n.sort(f||om),i.length>1&&i.sort(f||om)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Dy(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new lm,r.set(n,[a])):i>=s.length?(a=new lm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ny(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new ve};break;case"SpotLight":e={position:new z,direction:new z,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Uy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Fy=0;function Oy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function By(r){let t=new Ny,e=Uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new $e,a=new $e;function o(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,w=0,L=0,y=0,S=0,b=0,T=0,x=0,A=0,R=0;c.sort(Oy);for(let P=0,O=c.length;P<O;P++){let D=c[P],k=D.color,$=D.intensity,G=D.distance,et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qr?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*$,d+=k.g*$,u+=k.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],$);R++}else if(D.isSunLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,nt=e.get(D);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=et;let It=C.getViewportCount();for(let At=0;At<It;At++)n.sunShadowMatrix[v+At]=C.getMatrix(At),n.sunShadowCascade[v+At]=C._cascadeData[At];v+=It,g++}n.sun[f]=q,f++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,nt=e.get(D);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=q,p++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=G,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[w]=q;let C=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,C.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[w]=C.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,n.spotShadow[w]=nt,n.spotShadowMap[w]=et,T++}w++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(k).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[L]=q,L++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let C=D.shadow,nt=e.get(D);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,nt.shadowCameraNear=C.camera.near,nt.shadowCameraFar=C.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=q,m++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[y]=q,y++}}L>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==w||I.rectAreaLength!==L||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==T||I.numSpotMaps!==x||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=w,n.rectArea.length=L,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=w,I.rectAreaLength=L,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=T,I.numSpotMaps=x,I.numLightProbes=R,n.version=Fy++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let w=0,L=c.length;w<L;w++){let y=c[w];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function cm(r){let t=new By(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ky(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new cm(r),t.set(i,[o])):s>=a.length?(o=new cm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`,Vy=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Gy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],hm=new $e,Uo=new z,Gf=new z;function Hy(r,t,e){let n=new fo,i=new Me,s=new Me,a=new Ze,o=new cc,l=new hc,c={},h=e.maxTextureSize,d={[Hr]:bn,[bn]:Hr,[Hn]:Hn},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:zy,fragmentShader:Qy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Nn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let m=this.type;this.render=function(b,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===c0&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let A=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),P=r.state;P.setBlending($i),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=m!==this.type;O&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){let $=b[D],G=$.shadow;if(G===void 0){Jt("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let et=G.getFrameExtents();i.multiply(et),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,G.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===la){if($.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dn(i.x,i.y,{format:qr,type:Fi,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new kr(i.x,i.y,Ui),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=Xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vn,G.map.depthTexture.magFilter=vn}else $.isPointLight?(G.map=new ph(i.x),G.map.depthTexture=new oc(i.x,Ni)):(G.map=new dn(i.x,i.y),G.map.depthTexture=new kr(i.x,i.y,Ni)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=Xi,this.type===yo?(G.map.depthTexture.compareFunction=q?hh:ch,G.map.depthTexture.minFilter=Oe,G.map.depthTexture.magFilter=Oe):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vn,G.map.depthTexture.magFilter=vn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let C=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,x);for(let nt=0;nt<C;nt++){let It=G.getCamera(nt);if($.isPointLight){let At=G.camera,Qt=G.matrix,Yt=$.distance||At.far;Yt!==At.far&&(At.far=Yt,At.updateProjectionMatrix()),Uo.setFromMatrixPosition($.matrixWorld),At.position.copy(Uo),Gf.copy(At.position),Gf.add(Vy[nt]),At.up.copy(Gy[nt]),At.lookAt(Gf),At.updateMatrixWorld(),Qt.makeTranslation(-Uo.x,-Uo.y,-Uo.z),hm.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),G._frustum.setFromProjectionMatrix(hm,At.coordinateSystem,At.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(G.map),r.clear());let At=G.getViewport(nt);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),P.viewport(a)}n=G.getFrustum(nt),y(T,x,It,$,this.type)}G.isPointLightShadow!==!0&&this.type===la&&w(G,x),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(A,R,I)};function w(b,T){let x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new dn(i.x,i.y,{format:qr,type:Fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,x,f,v,null)}function L(b,T,x,A){let R=null,I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=R.uuid,O=T.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let k=D[O];k===void 0&&(k=R.clone(),D[O]=k,T.addEventListener("dispose",S)),R=k}if(R.visible=T.visible,R.wireframe=T.wireframe,A===la?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=r.properties.get(R);P.light=x}return R}function y(b,T,x,A,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===la)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let O=t.update(b),D=b.material;if(Array.isArray(D)){let k=O.groups;for(let $=0,G=k.length;$<G;$++){let et=k[$],q=D[et.materialIndex];if(q&&q.visible){let C=L(b,q,A,R);b.onBeforeShadow(r,b,T,x,O,C,et),r.renderBufferDirect(x,null,O,C,b,et),b.onAfterShadow(r,b,T,x,O,C,et)}}}else if(D.visible){let k=L(b,D,A,R);b.onBeforeShadow(r,b,T,x,O,k,null),r.renderBufferDirect(x,null,O,k,b,null),b.onAfterShadow(r,b,T,x,O,k,null)}}let P=b.children;for(let O=0,D=P.length;O<D;O++)y(P[O],T,x,A,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],R=b.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function Wy(r,t){function e(){let U=!1,ut=new Ze,J=null,ht=new Ze(0,0,0,0);return{setMask:function(mt){J!==mt&&!U&&(r.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){U=mt},setClear:function(mt,it,ot,rt,Ut){Ut===!0&&(mt*=rt,it*=rt,ot*=rt),ut.set(mt,it,ot,rt),ht.equals(ut)===!1&&(r.clearColor(mt,it,ot,rt),ht.copy(ut))},reset:function(){U=!1,J=null,ht.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,J=null,ht=null,mt=null;return{setReversed:function(it){if(ut!==it){let ot=t.get("EXT_clip_control");it?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let rt=mt;mt=null,this.setClear(rt)}},getReversed:function(){return ut},setTest:function(it){it?j(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(it){J!==it&&!U&&(r.depthMask(it),J=it)},setFunc:function(it){if(ut&&(it=k0[it]),ht!==it){switch(it){case Xl:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case Yl:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case Zl:r.depthFunc(r.GEQUAL);break;case Jl:r.depthFunc(r.GREATER);break;case Kl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ht=it}},setLocked:function(it){U=it},setClear:function(it){mt!==it&&(mt=it,ut&&(it=1-it),r.clearDepth(it))},reset:function(){U=!1,J=null,ht=null,mt=null,ut=!1}}}function i(){let U=!1,ut=null,J=null,ht=null,mt=null,it=null,ot=null,rt=null,Ut=null;return{setTest:function(st){U||(st?j(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(st){ut!==st&&!U&&(r.stencilMask(st),ut=st)},setFunc:function(st,zt,Ct){(J!==st||ht!==zt||mt!==Ct)&&(r.stencilFunc(st,zt,Ct),J=st,ht=zt,mt=Ct)},setOp:function(st,zt,Ct){(it!==st||ot!==zt||rt!==Ct)&&(r.stencilOp(st,zt,Ct),it=st,ot=zt,rt=Ct)},setLocked:function(st){U=st},setClear:function(st){Ut!==st&&(r.clearStencil(st),Ut=st)},reset:function(){U=!1,ut=null,J=null,ht=null,mt=null,it=null,ot=null,rt=null,Ut=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,w=null,L=null,y=null,S=null,b=null,T=null,x=new ve(0,0,0),A=0,R=!1,I=null,P=null,O=null,D=null,k=null,$=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=et>=2);let C=null,nt={},It=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Qt=new Ze().fromArray(It),Yt=new Ze().fromArray(At);function qt(U,ut,J,ht){let mt=new Uint8Array(4),it=r.createTexture();r.bindTexture(U,it),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<J;ot++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(ut+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return it}let Y={};Y[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc(na),Q(!1),re(rf),j(r.CULL_FACE),Wt($i);function j(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function gt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Vt(U,ut){return u[U]!==ut?(r.bindFramebuffer(U,ut),u[U]=ut,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function xt(U,ut){let J=g,ht=!1;if(U){J=f.get(ut),J===void 0&&(J=[],f.set(ut,J));let mt=U.textures;if(J.length!==mt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let it=0,ot=mt.length;it<ot;it++)J[it]=r.COLOR_ATTACHMENT0+it;J.length=mt.length,ht=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ht=!0);ht&&r.drawBuffers(J)}function Gt(U){return v!==U?(r.useProgram(U),v=U,!0):!1}let Mt={[Zi]:r.FUNC_ADD,[h0]:r.FUNC_SUBTRACT,[u0]:r.FUNC_REVERSE_SUBTRACT};Mt[So]=r.MIN,Mt[f0]=r.MAX;let bt={[bo]:r.ZERO,[ps]:r.ONE,[wo]:r.SRC_COLOR,[lf]:r.SRC_ALPHA,[x0]:r.SRC_ALPHA_SATURATE,[g0]:r.DST_COLOR,[p0]:r.DST_ALPHA,[d0]:r.ONE_MINUS_SRC_COLOR,[cf]:r.ONE_MINUS_SRC_ALPHA,[_0]:r.ONE_MINUS_DST_COLOR,[m0]:r.ONE_MINUS_DST_ALPHA,[v0]:r.CONSTANT_COLOR,[y0]:r.ONE_MINUS_CONSTANT_COLOR,[M0]:r.CONSTANT_ALPHA,[S0]:r.ONE_MINUS_CONSTANT_ALPHA};function Wt(U,ut,J,ht,mt,it,ot,rt,Ut,st){if(U===$i){p===!0&&(gt(r.BLEND),p=!1);return}if(p===!1&&(j(r.BLEND),p=!0),U!==Mo){if(U!==m||st!==R){if((w!==Zi||S!==Zi)&&(r.blendEquation(r.FUNC_ADD),w=Zi,S=Zi),st)switch(U){case ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFunc(r.ONE,r.ONE);break;case af:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Kt("WebGLState: Invalid blending: ",U);break}else switch(U){case ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case af:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case of:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",U);break}L=null,y=null,b=null,T=null,x.set(0,0,0),A=0,m=U,R=st}return}mt=mt||ut,it=it||J,ot=ot||ht,(ut!==w||mt!==S)&&(r.blendEquationSeparate(Mt[ut],Mt[mt]),w=ut,S=mt),(J!==L||ht!==y||it!==b||ot!==T)&&(r.blendFuncSeparate(bt[J],bt[ht],bt[it],bt[ot]),L=J,y=ht,b=it,T=ot),(rt.equals(x)===!1||Ut!==A)&&(r.blendColor(rt.r,rt.g,rt.b,Ut),x.copy(rt),A=Ut),m=U,R=!1}function te(U,ut){U.side===Hn?gt(r.CULL_FACE):j(r.CULL_FACE);let J=U.side===bn;ut&&(J=!J),Q(J),U.blending===ca&&U.transparent===!1?Wt($i):Wt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){I!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),I=U)}function re(U){U!==o0?(j(r.CULL_FACE),U!==P&&(U===rf?r.cullFace(r.BACK):U===l0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),P=U}function Se(U){U!==O&&(G&&r.lineWidth(U),O=U)}function Be(U,ut,J){U?(j(r.POLYGON_OFFSET_FILL),(D!==ut||k!==J)&&(D=ut,k=J,a.getReversed()&&(ut=-ut),r.polygonOffset(ut,J))):gt(r.POLYGON_OFFSET_FILL)}function $t(U){U?j(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function _e(U){U===void 0&&(U=r.TEXTURE0+$-1),C!==U&&(r.activeTexture(U),C=U)}function F(U,ut,J){J===void 0&&(C===null?J=r.TEXTURE0+$-1:J=C);let ht=nt[J];ht===void 0&&(ht={type:void 0,texture:void 0},nt[J]=ht),(ht.type!==U||ht.texture!==ut)&&(C!==J&&(r.activeTexture(J),C=J),r.bindTexture(U,ut||Y[U]),ht.type=U,ht.texture=ut)}function Re(){let U=nt[C];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Xt(){try{r.compressedTexImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function E(){try{r.compressedTexImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function _(){try{r.texSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function B(){try{r.texSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function ct(){try{r.texStorage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function at(){try{r.texStorage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function K(){try{r.texImage2D(...arguments)}catch(U){Kt("WebGLState:",U)}}function tt(){try{r.texImage3D(...arguments)}catch(U){Kt("WebGLState:",U)}}function dt(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Et(U,ut){d[U]!==ut&&(r.pixelStorei(U,ut),d[U]=ut)}function pt(U){Qt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function ft(U){Yt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function lt(U,ut){let J=c.get(ut);J===void 0&&(J=new WeakMap,c.set(ut,J));let ht=J.get(U);ht===void 0&&(ht=r.getUniformBlockIndex(ut,U.name),J.set(U,ht))}function Dt(U,ut){let ht=c.get(ut).get(U);l.get(ut)!==ht&&(r.uniformBlockBinding(ut,ht,U.__bindingPointIndex),l.set(ut,ht))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,nt={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,w=null,L=null,y=null,S=null,b=null,T=null,x=new ve(0,0,0),A=0,R=!1,I=null,P=null,O=null,D=null,k=null,Qt.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:gt,bindFramebuffer:Vt,drawBuffers:xt,useProgram:Gt,setBlending:Wt,setMaterial:te,setFlipSided:Q,setCullFace:re,setLineWidth:Se,setPolygonOffset:Be,setScissorTest:$t,activeTexture:_e,bindTexture:F,unbindTexture:Re,compressedTexImage2D:Xt,compressedTexImage3D:E,texImage2D:K,texImage3D:tt,pixelStorei:Et,getParameter:dt,updateUBOMapping:lt,uniformBlockBinding:Dt,texStorage2D:ct,texStorage3D:at,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:pt,viewport:ft,reset:kt}}function Xy(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return g?new OffscreenCanvas(E,_):ao("canvas")}function p(E,_,B){let H=1,Z=Xt(E);if((Z.width>B||Z.height>B)&&(H=B/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ct=Math.floor(H*Z.width),at=Math.floor(H*Z.height);u===void 0&&(u=v(ct,at));let K=_?v(ct,at):u;return K.width=ct,K.height=at,K.getContext("2d").drawImage(E,0,0,ct,at),Jt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ct+"x"+at+")."),K}else return"data"in E&&Jt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function w(E){r.generateMipmap(E)}function L(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(E,_,B,H,Z,ct=!1){if(E!==null){if(r[E]!==void 0)return r[E];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at;H&&(at=t.get("EXT_texture_norm16"),at||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8),B===r.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),B===r.SHORT&&at&&(K=at.R16_SNORM_EXT)),_===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),_===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8),B===r.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),B===r.SHORT&&at&&(K=at.RG16_SNORM_EXT)),_===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),_===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),_===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),_===r.RGB&&(B===r.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),B===r.SHORT&&at&&(K=at.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),_===r.RGBA){let tt=ct?ro:pe.getTransfer(Z);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=tt===Ee?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),B===r.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(E,_){let B;return E?_===null||_===Ni||_===ua?B=r.DEPTH24_STENCIL8:_===Ui?B=r.DEPTH32F_STENCIL8:_===ha&&(B=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===ua?B=r.DEPTH_COMPONENT24:_===Ui?B=r.DEPTH_COMPONENT32F:_===ha&&(B=r.DEPTH_COMPONENT16),B}function b(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==vn&&E.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){let _=E.target;_.removeEventListener("dispose",T),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),I(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let B=E.source,H=f.get(B);if(H){let Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(E),Object.keys(H).length===0&&f.delete(B)}n.remove(E)}function R(E){let _=n.get(E);r.deleteTexture(_.__webglTexture);let B=E.source,H=f.get(B);delete H[_.__cacheKey],a.memory.textures--}function I(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)r.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else r.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)r.deleteFramebuffer(_.__webglFramebuffer[H]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=E.textures;for(let H=0,Z=B.length;H<Z;H++){let ct=n.get(B[H]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(E)}let P=0;function O(){P=0}function D(){return P}function k(E){P=E}function $(){let E=P;return E>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function G(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function et(E,_){let B=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let H=E.image;if(H===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+_)}function q(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){gt(B,E,_);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+_)}function C(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){gt(B,E,_);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+_)}function nt(E,_){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Vt(B,E,_);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+_)}let It={[Nr]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[jl]:r.MIRRORED_REPEAT},At={[vn]:r.NEAREST,[T0]:r.NEAREST_MIPMAP_NEAREST,[Ao]:r.NEAREST_MIPMAP_LINEAR,[Oe]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Mi]:r.LINEAR_MIPMAP_LINEAR},Qt={[L0]:r.NEVER,[N0]:r.ALWAYS,[R0]:r.LESS,[ch]:r.LEQUAL,[P0]:r.EQUAL,[hh]:r.GEQUAL,[I0]:r.GREATER,[D0]:r.NOTEQUAL};function Yt(E,_){if(_.type===Ui&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Ac||_.magFilter===Ao||_.magFilter===Mi||_.minFilter===Oe||_.minFilter===Ac||_.minFilter===Ao||_.minFilter===Mi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,It[_.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,It[_.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,It[_.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,At[_.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,Qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==Ao&&_.minFilter!==Mi||_.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qt(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));let H=_.source,Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));let ct=G(_);if(ct!==E.__cacheKey){Z[ct]===void 0&&(Z[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ct].usedTimes++;let at=Z[E.__cacheKey];at!==void 0&&(Z[E.__cacheKey].usedTimes--,at.usedTimes===0&&R(_)),E.__cacheKey=ct,E.__webglTexture=Z[ct].texture}return B}function Y(E,_,B){return Math.floor(Math.floor(E/B)/_)}function j(E,_,B,H){let ct=E.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,B,H,_.data);else{ct.sort((Et,pt)=>Et.start-pt.start);let at=0;for(let Et=1;Et<ct.length;Et++){let pt=ct[at],ft=ct[Et],lt=pt.start+pt.count,Dt=Y(ft.start,_.width,4),kt=Y(pt.start,_.width,4);ft.start<=lt+1&&Dt===kt&&Y(ft.start+ft.count-1,_.width,4)===Dt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++at,ct[at]=ft)}ct.length=at+1;let K=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),dt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Et=0,pt=ct.length;Et<pt;Et++){let ft=ct[Et],lt=Math.floor(ft.start/4),Dt=Math.ceil(ft.count/4),kt=lt%_.width,U=Math.floor(lt/_.width),ut=Dt,J=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,kt,U,ut,J,B,H,_.data)}E.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,K),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}}function gt(E,_,B){let H=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=r.TEXTURE_3D);let Z=qt(E,_),ct=_.source;e.bindTexture(H,E.__webglTexture,r.TEXTURE0+B);let at=n.get(ct);if(ct.version!==at.__version||Z===!0){if(e.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let J=pe.getPrimaries(pe.workingColorSpace),ht=_.colorSpace===bi?null:pe.getPrimaries(_.colorSpace),mt=_.colorSpace===bi||J===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=p(_.image,!1,i.maxTextureSize);tt=Re(_,tt);let dt=s.convert(_.format,_.colorSpace),Et=s.convert(_.type),pt=y(_.internalFormat,dt,Et,_.normalized,_.colorSpace,_.isVideoTexture);Yt(H,_);let ft,lt=_.mipmaps,Dt=_.isVideoTexture!==!0,kt=at.__version===void 0||Z===!0,U=ct.dataReady,ut=b(_,tt);if(_.isDepthTexture)pt=S(_.format===Xr,_.type),kt&&(Dt?e.texStorage2D(r.TEXTURE_2D,1,pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,pt,tt.width,tt.height,0,dt,Et,null));else if(_.isDataTexture)if(lt.length>0){Dt&&kt&&e.texStorage2D(r.TEXTURE_2D,ut,pt,lt[0].width,lt[0].height);for(let J=0,ht=lt.length;J<ht;J++)ft=lt[J],Dt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(r.TEXTURE_2D,J,pt,ft.width,ft.height,0,dt,Et,ft.data);_.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(r.TEXTURE_2D,ut,pt,tt.width,tt.height),U&&j(_,tt,dt,Et)):e.texImage2D(r.TEXTURE_2D,0,pt,tt.width,tt.height,0,dt,Et,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,pt,lt[0].width,lt[0].height,tt.depth);for(let J=0,ht=lt.length;J<ht;J++)if(ft=lt[J],_.format!==Si)if(dt!==null)if(Dt){if(U)if(_.layerUpdates.size>0){let mt=If(ft.width,ft.height,_.format,_.type);for(let it of _.layerUpdates){let ot=ft.data.subarray(it*mt/ft.data.BYTES_PER_ELEMENT,(it+1)*mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,it,ft.width,ft.height,1,dt,ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,pt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,tt.depth,dt,Et,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,pt,ft.width,ft.height,tt.depth,0,dt,Et,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Dt&&kt&&e.texStorage2D(r.TEXTURE_2D,ut,pt,lt[0].width,lt[0].height);for(let J=0,ht=lt.length;J<ht;J++)ft=lt[J],_.format!==Si?dt!==null?Dt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,J,pt,ft.width,ft.height,0,ft.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(r.TEXTURE_2D,J,pt,ft.width,ft.height,0,dt,Et,ft.data)}else if(_.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,pt,tt.width,tt.height,tt.depth),U)if(_.layerUpdates.size>0){let J=If(tt.width,tt.height,_.format,_.type);for(let ht of _.layerUpdates){let mt=tt.data.subarray(ht*J/tt.data.BYTES_PER_ELEMENT,(ht+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,tt.width,tt.height,1,dt,Et,mt)}_.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(_.isData3DTexture)Dt?(kt&&e.texStorage3D(r.TEXTURE_3D,ut,pt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)):e.texImage3D(r.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(_.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(r.TEXTURE_2D,ut,pt,tt.width,tt.height);else{let J=tt.width,ht=tt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(r.TEXTURE_2D,mt,pt,J,ht,0,dt,Et,null),J>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in r){let J=r.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),tt.parentNode!==J){J.appendChild(tt),d.add(_),J.onpaint=ht=>{let mt=ht.changedElements;for(let it of d)mt.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let mt=r.RGBA,it=r.RGBA,ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,mt,it,ot,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Dt&&kt){let J=Xt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ut,pt,J.width,J.height)}for(let J=0,ht=lt.length;J<ht;J++)ft=lt[J],Dt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,dt,Et,ft):e.texImage2D(r.TEXTURE_2D,J,pt,dt,Et,ft);_.generateMipmaps=!1}else if(Dt){if(kt){let J=Xt(tt);e.texStorage2D(r.TEXTURE_2D,ut,pt,J.width,J.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,Et,tt)}else e.texImage2D(r.TEXTURE_2D,0,pt,dt,Et,tt);m(_)&&w(H),at.__version=ct.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Vt(E,_,B){if(_.image.length!==6)return;let H=qt(E,_),Z=_.source;e.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);let ct=n.get(Z);if(Z.version!==ct.__version||H===!0){e.activeTexture(r.TEXTURE0+B);let at=pe.getPrimaries(pe.workingColorSpace),K=_.colorSpace===bi?null:pe.getPrimaries(_.colorSpace),tt=_.colorSpace===bi||at===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Et=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!dt&&!Et?pt[it]=p(_.image[it],!0,i.maxCubemapSize):pt[it]=Et?_.image[it].image:_.image[it],pt[it]=Re(_,pt[it]);let ft=pt[0],lt=s.convert(_.format,_.colorSpace),Dt=s.convert(_.type),kt=y(_.internalFormat,lt,Dt,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ut=ct.__version===void 0||H===!0,J=Z.dataReady,ht=b(_,ft);Yt(r.TEXTURE_CUBE_MAP,_);let mt;if(dt){U&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,kt,ft.width,ft.height);for(let it=0;it<6;it++){mt=pt[it].mipmaps;for(let ot=0;ot<mt.length;ot++){let rt=mt[ot];_.format!==Si?lt!==null?U?J&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,kt,rt.width,rt.height,0,rt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,Dt,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,kt,rt.width,rt.height,0,lt,Dt,rt.data)}}}else{if(mt=_.mipmaps,U&&ut){mt.length>0&&ht++;let it=Xt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,kt,it.width,it.height)}for(let it=0;it<6;it++)if(Et){U?J&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,lt,Dt,pt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,pt[it].width,pt[it].height,0,lt,Dt,pt[it].data);for(let ot=0;ot<mt.length;ot++){let Ut=mt[ot].image[it].image;U?J&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,Ut.width,Ut.height,lt,Dt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,kt,Ut.width,Ut.height,0,lt,Dt,Ut.data)}}else{U?J&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Dt,pt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,lt,Dt,pt[it]);for(let ot=0;ot<mt.length;ot++){let rt=mt[ot];U?J&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,lt,Dt,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,kt,lt,Dt,rt.image[it])}}}m(_)&&w(r.TEXTURE_CUBE_MAP),ct.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,B,H,Z,ct){let at=s.convert(B.format,B.colorSpace),K=s.convert(B.type),tt=y(B.internalFormat,at,K,B.normalized,B.colorSpace),dt=n.get(_),Et=n.get(B);if(Et.__renderTarget=_,!dt.__hasExternalTextures){let pt=Math.max(1,_.width>>ct),ft=Math.max(1,_.height>>ct);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,ct,tt,pt,ft,_.depth,0,at,K,null):e.texImage2D(Z,ct,tt,pt,ft,0,at,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,E),_e(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,Z,Et.__webglTexture,0,$t(_)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,Z,Et.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(E,_,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),_.depthBuffer){let H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,ct=S(_.stencilBuffer,Z),at=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_e(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(_),ct,_.width,_.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(_),ct,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ct,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,E)}else{let H=_.textures;for(let Z=0;Z<H.length;Z++){let ct=H[Z],at=s.convert(ct.format,ct.colorSpace),K=s.convert(ct.type),tt=y(ct.internalFormat,at,K,ct.normalized,ct.colorSpace);_e(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(_),tt,_.width,_.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(_),tt,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,tt,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(E,_,B){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Yt(r.TEXTURE_CUBE_MAP,_.depthTexture);let dt=s.convert(_.depthTexture.format),Et=s.convert(_.depthTexture.type),pt;_.depthTexture.format===Xi?pt=r.DEPTH_COMPONENT24:_.depthTexture.format===Xr&&(pt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,_.width,_.height,0,dt,Et,null)}}else et(_.depthTexture,0);let ct=Z.__webglTexture,at=$t(_),K=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,tt=_.depthTexture.format===Xr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xi)_e(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,K,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,tt,K,ct,0);else if(_.depthTexture.format===Xr)_e(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,K,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,tt,K,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(E){let _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let H=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)Mt(_.__webglFramebuffer[H],E,H);else{let H=E.texture.mipmaps;H&&H.length>0?Mt(_.__webglFramebuffer[0],E,0):Mt(_.__webglFramebuffer,E,0)}else if(B){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=r.createRenderbuffer(),Gt(_.__webglDepthbuffer[H],E,!1);else{let Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ct)}}else{let H=E.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),Gt(_.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(E,_,B){let H=n.get(E);_!==void 0&&xt(H.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&bt(E)}function te(E){let _=E.texture,B=n.get(E),H=n.get(_);E.addEventListener("dispose",x);let Z=E.textures,ct=E.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=_.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let tt=0;tt<_.mipmaps.length;tt++)B.__webglFramebuffer[K][tt]=r.createFramebuffer()}else B.__webglFramebuffer[K]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)B.__webglFramebuffer[K]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(at)for(let K=0,tt=Z.length;K<tt;K++){let dt=n.get(Z[K]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&_e(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let tt=Z[K];B.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let dt=s.convert(tt.format,tt.colorSpace),Et=s.convert(tt.type),pt=y(tt.internalFormat,dt,Et,tt.normalized,tt.colorSpace,E.isXRRenderTarget===!0),ft=$t(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,pt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,B.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Yt(r.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)xt(B.__webglFramebuffer[K][tt],E,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else xt(B.__webglFramebuffer[K],E,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&w(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,tt=Z.length;K<tt;K++){let dt=Z[K],Et=n.get(dt),pt=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pt=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Et.__webglTexture),Yt(pt,dt),xt(B.__webglFramebuffer,E,dt,r.COLOR_ATTACHMENT0+K,pt,0),m(dt)&&w(pt)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Yt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)xt(B.__webglFramebuffer[tt],E,_,r.COLOR_ATTACHMENT0,K,tt);else xt(B.__webglFramebuffer,E,_,r.COLOR_ATTACHMENT0,K,0);m(_)&&w(K),e.unbindTexture()}E.depthBuffer&&bt(E)}function Q(E){let _=E.textures;for(let B=0,H=_.length;B<H;B++){let Z=_[B];if(m(Z)){let ct=L(E),at=n.get(Z).__webglTexture;e.bindTexture(ct,at),w(ct),e.unbindTexture()}}}let re=[],Se=[];function Be(E){if(E.samples>0){if(_e(E)===!1){let _=E.textures,B=E.width,H=E.height,Z=r.COLOR_BUFFER_BIT,ct=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(E),K=_.length>1;if(K)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let tt=E.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);let Et=n.get(_[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,B,H,0,0,B,H,Z,r.NEAREST),l===!0&&(re.length=0,Se.length=0,re.push(r.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(re.push(ct),Se.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);let Et=n.get(_[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function $t(E){return Math.min(i.maxSamples,E.samples)}function _e(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Re(E,_){let B=E.colorSpace,H=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==io&&B!==bi&&(pe.getTransfer(B)===Ee?(H!==Si||Z!==hi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",B)),_}function Xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=q,this.setTexture3D=C,this.setTextureCube=nt,this.rebindTextures=Wt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qy(r,t){function e(n,i=bi){let s,a=pe.getTransfer(i);if(n===hi)return r.UNSIGNED_BYTE;if(n===Cc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===vf)return r.BYTE;if(n===yf)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===Ec)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===bf)return r.ALPHA;if(n===wf)return r.RGB;if(n===Si)return r.RGBA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Xr)return r.DEPTH_STENCIL;if(n===Tf)return r.RED;if(n===Rc)return r.RED_INTEGER;if(n===qr)return r.RG;if(n===Pc)return r.RG_INTEGER;if(n===Ic)return r.RGBA_INTEGER;if(n===Eo||n===Co||n===Lo||n===Ro)if(a===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===kc||n===zc||n===Qc||n===Po||n===Vc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===Bc)return a===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return s.COMPRESSED_R11_EAC;if(n===Qc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return s.COMPRESSED_RG11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Jc||n===Kc||n===jc||n===th||n===eh||n===nh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ih||n===rh||n===sh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ih)return a===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===oh||n===Io||n===lh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ah)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ua?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,Jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:Yy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends qi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Jf,m={},w=e.getContextAttributes(),L=null,y=null,S=[],b=[],T=new Me,x=null,A=null,R=new Dn;R.viewport=new Ze;let I=new Dn;I.viewport=new Ze;let P=[R,I],O=new Sc,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=S[Y];return j===void 0&&(j=new sa,S[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=S[Y];return j===void 0&&(j=new sa,S[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=S[Y];return j===void 0&&(j=new sa,S[Y]=j),j.getHandSpace()};function $(Y){let j=b.indexOf(Y.inputSource);if(j===-1)return;let gt=S[j];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",et);for(let Y=0;Y<S.length;Y++){let j=b[Y];j!==null&&(b[Y]=null,S[Y].disconnect(j))}D=null,k=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(L),f=null,u=null,d=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(L=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",G),i.addEventListener("inputsourceschange",et),w.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Vt=null,xt=null;w.depth&&(xt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=w.stencil?Xr:Xi,Vt=w.stencil?ua:Ni);let Gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new dn(u.textureWidth,u.textureHeight,{format:Si,type:hi,depthTexture:new kr(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:Si,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(Y){for(let j=0;j<Y.removed.length;j++){let gt=Y.removed[j],Vt=b.indexOf(gt);Vt>=0&&(b[Vt]=null,S[Vt].disconnect(gt))}for(let j=0;j<Y.added.length;j++){let gt=Y.added[j],Vt=b.indexOf(gt);if(Vt===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=b.length){b.push(gt),Vt=Gt;break}else if(b[Gt]===null){b[Gt]=gt,Vt=Gt;break}if(Vt===-1)break}let xt=S[Vt];xt&&xt.connect(gt)}}let q=new z,C=new z;function nt(Y,j,gt){q.setFromMatrixPosition(j.matrixWorld),C.setFromMatrixPosition(gt.matrixWorld);let Vt=q.distanceTo(C),xt=j.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,Mt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),Wt=(xt[9]+1)/xt[5],te=(xt[9]-1)/xt[5],Q=(xt[8]-1)/xt[0],re=(Gt[8]+1)/Gt[0],Se=Mt*Q,Be=Mt*re,$t=Vt/(-Q+re),_e=$t*-Q;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ($t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let F=Mt+$t,Re=bt+$t,Xt=Se-_e,E=Be+(Vt-_e),_=Wt*bt/Re*F,B=te*bt/Re*F;Y.projectionMatrix.makePerspective(Xt,E,_,B,F,Re),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function It(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,gt=Y.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),O.near=I.near=R.near=j,O.far=I.far=R.far=gt,(D!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Vt=Y.parent,xt=O.cameras;It(O,Vt);for(let Gt=0;Gt<xt.length;Gt++)It(xt[Gt],Vt);xt.length===2?nt(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),At(Y,O,Vt)};function At(Y,j,gt){gt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ec*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let Qt=null;function Yt(Y,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Vt=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Vt=!0);for(let bt=0;bt<gt.length;bt++){let Wt=gt[bt],te=null;if(f!==null)te=f.getViewport(Wt);else{let re=d.getViewSubImage(u,Wt);te=re.viewport,bt===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Q=P[bt];Q===void 0&&(Q=new Dn,Q.layers.enable(bt),Q.viewport=new Ze,P[bt]=Q),Q.matrix.fromArray(Wt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Wt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),bt===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Vt===!0&&O.cameras.push(Q)}let xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let bt=d.getDepthInformation(gt[0]);bt&&bt.isValid&&bt.texture&&p.init(bt,i.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let bt=0;bt<gt.length;bt++){let Wt=gt[bt].camera;if(Wt){let te=m[Wt];te||(te=new mo,m[Wt]=te);let Q=d.getCameraImage(Wt);te.sourceTexture=Q}}}}for(let gt=0;gt<S.length;gt++){let Vt=b[gt],xt=S[gt];Vt!==null&&xt!==void 0&&xt.update(Vt,j,c||a)}Qt&&Qt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let qt=new um;qt.setAnimationLoop(Yt),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}},Zy=new $e,_m=new jt;_m.set(-1,0,0,0,1,0,0,0,1);function Jy(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Lf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,w,L,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,w,L):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=t.get(m),L=w.envMap,y=w.envMapRotation;L&&(p.envMap.value=L,p.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(y)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(_m),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,L){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=L*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ky(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=i[y.id];b===void 0&&(p(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",w));let T=S.program;n.updateUBOMapping(y,T);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let S=d();y.__bindingPointIndex=S;let b=r.createBuffer(),T=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,T,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],b=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,A=b.length;x<A;x++){let R=b[x];if(Array.isArray(R))for(let I=0,P=R.length;I<P;I++)f(R[I],x,I,T);else f(R,x,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,b,T){if(v(y,S,b,T)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){let P=A[I],O=m(P);g(P,y.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function v(y,S,b,T){let x=y.value,A=S+"_"+b;if(T[A]===void 0)return typeof x=="number"||typeof x=="boolean"?T[A]=x:ArrayBuffer.isView(x)?T[A]=x.slice():T[A]=x.clone(),!0;{let R=T[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let S=y.uniforms,b=0,T=16;for(let A=0,R=S.length;A<R;A++){let I=Array.isArray(S[A])?S[A]:[S[A]];for(let P=0,O=I.length;P<O;P++){let D=I[P],k=Array.isArray(D.value)?D.value:[D.value];for(let $=0,G=k.length;$<G;$++){let et=k[$],q=m(et),C=b%T,nt=C%q.boundary,It=C+nt;b+=nt,It!==0&&T-It<q.storage&&(b+=T-It),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=q.storage}}}let x=b%T;return x>0&&(b+=T-x),y.__size=b,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",y),S}function w(y){let S=y.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function L(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:L}}var jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function t3(){return Ji===null&&(Ji=new ac(jy,16,16,qr,Fi),Ji.name="DFG_LUT",Ji.minFilter=Oe,Ji.magFilter=Oe,Ji.wrapS=li,Ji.wrapT=li,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var mh=class{constructor(t={}){let{canvas:e=F0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Ic,Pc,Rc]),m=new Set([hi,Ni,ha,ua,Cc,Lc]),w=new Uint32Array(4),L=new Int32Array(4),y=new z,S=null,b=null,T=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,P=null,O=null,D=null,k=null;this._outputColorSpace=oi;let $=0,G=0,et=null,q=-1,C=null,nt=new Ze,It=new Ze,At=null,Qt=new ve(0),Yt=0,qt=e.width,Y=e.height,j=1,gt=null,Vt=null,xt=new Ze(0,0,qt,Y),Gt=new Ze(0,0,qt,Y),Mt=!1,bt=new fo,Wt=!1,te=!1,Q=new $e,re=new z,Se=new Ze,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function _e(){return et===null?j:1}let F=n;function Re(M,N){return e.getContext(M,N)}let Xt,E,_,B,H,Z,ct,at,K,tt,dt,Et,pt,ft,lt,Dt,kt,U,ut,J,ht,mt,it;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",zt,!1),F===null){let N="webgl2";if(F=Re(N,M),F===null)throw Re(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(M){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),Kt("WebGLRenderer: "+M.message),M}function ot(){Xt=new ov(F),Xt.init(),ht=new qy(F,Xt),E=new J2(F,Xt,t,ht),_=new Wy(F,Xt),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),O=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),B=new hv(F),H=new Py,Z=new Xy(F,Xt,_,H,E,ht,B),ct=new av(R),at=new f_(F),mt=new $2(F,at),K=new lv(F,at,B,mt),tt=new fv(F,K,at,mt,B),U=new uv(F,E,Z),lt=new K2(H),dt=new Ry(R,ct,Xt,E,mt,lt),Et=new Jy(R,H),pt=new Dy,ft=new ky(Xt),kt=new Y2(R,ct,_,tt,g,l),Dt=new Hy(R,tt,E),it=new Ky(F,B,E,_),ut=new Z2(F,Xt,B),J=new cv(F,Xt,B),B.programs=dt.programs,R.capabilities=E,R.extensions=Xt,R.properties=H,R.renderLists=pt,R.shadowMap=Dt,R.state=_,R.info=B}v!==hi&&(A=new pv(v,e.width,e.height,o,i,s));let rt=new Kf(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(qt,Y,!1))},this.getSize=function(M){return M.set(qt,Y)},this.setSize=function(M,N,X=!0){if(rt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=M,Y=N,e.width=Math.floor(M*j),e.height=Math.floor(N*j),X===!0&&(e.style.width=M+"px",e.style.height=N+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(qt*j,Y*j).floor()},this.setDrawingBufferSize=function(M,N,X){qt=M,Y=N,j=X,e.width=Math.floor(M*X),e.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(v===hi){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(nt)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,N,X,V){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,N,X,V),_.viewport(nt.copy(xt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,N,X,V){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,N,X,V),_.scissor(It.copy(Gt).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(M){_.setScissorTest(Mt=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let V=0;if(M){let W=!1;if(et!==null){let _t=et.texture.format;W=p.has(_t)}if(W){let _t=et.texture.type,Tt=m.has(_t),yt=kt.getClearColor(),Lt=kt.getClearAlpha(),Ft=yt.r,ne=yt.g,oe=yt.b;Tt?(w[0]=Ft,w[1]=ne,w[2]=oe,w[3]=Lt,F.clearBufferuiv(F.COLOR,0,w)):(L[0]=Ft,L[1]=ne,L[2]=oe,L[3]=Lt,F.clearBufferiv(F.COLOR,0,L))}else V|=F.COLOR_BUFFER_BIT}N&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),kt.dispose(),pt.dispose(),ft.dispose(),H.dispose(),ct.dispose(),tt.dispose(),mt.dispose(),it.dispose(),dt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",de),rt.removeEventListener("sessionend",ce),ae.stop()};function Ut(M){M.preventDefault(),Cf("WebGLRenderer: Context Lost."),I=!0}function st(){Cf("WebGLRenderer: Context Restored."),I=!1;let M=B.autoReset,N=Dt.enabled,X=Dt.autoUpdate,V=Dt.needsUpdate,W=Dt.type;ot(),B.autoReset=M,Dt.enabled=N,Dt.autoUpdate=X,Dt.needsUpdate=V,Dt.type=W}function zt(M){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ct(M){let N=M.target;N.removeEventListener("dispose",Ct),vt(N)}function vt(M){se(M),H.remove(M)}function se(M){let N=H.get(M).programs;N!==void 0&&(N.forEach(function(X){dt.releaseProgram(X)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,V,W,_t){N===null&&(N=Be);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=rn(M,N,X,V,W);_.setMaterial(V,Tt);let Lt=X.index,Ft=1;if(V.wireframe===!0){if(Lt=K.getWireframeAttribute(X),Lt===void 0)return;Ft=2}let ne=X.drawRange,oe=X.attributes.position,Rt=ne.start*Ft,xe=(ne.start+ne.count)*Ft;_t!==null&&(Rt=Math.max(Rt,_t.start*Ft),xe=Math.min(xe,(_t.start+_t.count)*Ft)),Lt!==null?(Rt=Math.max(Rt,0),xe=Math.min(xe,Lt.count)):oe!=null&&(Rt=Math.max(Rt,0),xe=Math.min(xe,oe.count));let Ke=xe-Rt;if(Ke<0||Ke===1/0)return;mt.setup(W,V,yt,X,Lt);let Ce,be=ut;if(Lt!==null&&(Ce=at.get(Lt),be=J,be.setIndex(Ce)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*_e()),be.setMode(F.LINES)):be.setMode(F.TRIANGLES);else if(W.isLine){let sn=V.linewidth;sn===void 0&&(sn=1),_.setLineWidth(sn*_e()),W.isLineSegments?be.setMode(F.LINES):W.isLineLoop?be.setMode(F.LINE_LOOP):be.setMode(F.LINE_STRIP)}else W.isPoints?be.setMode(F.POINTS):W.isSprite&&be.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))be.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let sn=W._multiDrawStarts,wt=W._multiDrawCounts,ee=W._multiDrawCount,Zt=Lt?at.get(Lt).bytesPerElement:1,nn=H.get(V).currentProgram.getUniforms();for(let Ve=0;Ve<ee;Ve++)nn.setValue(F,"_gl_DrawID",Ve),be.render(sn[Ve]/Zt,wt[Ve])}else if(W.isInstancedMesh)be.renderInstances(Rt,Ke,W.count);else if(X.isInstancedBufferGeometry){let sn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,sn);be.renderInstances(Rt,Ke,wt)}else be.render(Rt,Ke)};function Ot(M,N,X,V){P!==null&&M.isNodeMaterial&&P.setObject(V,M),Wt===!0&&lt.setState(M,X,!1),M.transparent===!0&&M.side===Hn&&M.forceSinglePass===!1?(M.side=bn,M.needsUpdate=!0,Fe(M,N,V),M.side=Hr,M.needsUpdate=!0,Fe(M,N,V),M.side=Hn):Fe(M,N,V)}this.compile=function(M,N,X=null){X===null&&(X=M),P!==null&&P.renderStart(M,N,X),b=ft.get(X),b.init(N),x.push(b),X.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),M!==X&&M.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),te=this.localClippingEnabled,Wt=lt.init(this.clippingPlanes,te),Wt===!0&&lt.setGlobalState(this.clippingPlanes,N),P!==null&&Dt.render(b.state.shadowsArray,X,N);let V=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _t=W.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){let yt=_t[Tt];Ot(yt,X,N,W),V.add(yt)}else Ot(_t,X,N,W),V.add(_t)}),b=x.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(M,N,X=null){let V=this.compile(M,N,X);return new Promise(W=>{function _t(){if(V.forEach(function(Tt){let Lt=H.get(Tt).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(Tt)}),V.size===0){W(M);return}setTimeout(_t,10)}Xt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Nt=null;function Ht(M){Nt&&Nt(M)}function de(){ae.stop()}function ce(){ae.start()}let ae=new um;ae.setAnimationLoop(Ht),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(M){Nt=M,rt.setAnimationLoop(M),M===null?ae.stop():ae.start()},rt.addEventListener("sessionstart",de),rt.addEventListener("sessionend",ce),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(M,N);let X=rt.enabled===!0&&rt.isPresenting===!0,V=A!==null&&(et===null||X)&&A.begin(R,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,N,et),b=ft.get(M,x.length),b.init(N),b.state.textureUnits=Z.getTextureUnits(),x.push(b),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),bt.setFromProjectionMatrix(Q,Ii,N.reversedDepth),te=this.localClippingEnabled,Wt=lt.init(this.clippingPlanes,te),S=pt.get(M,T.length),S.init(),T.push(S),rt.enabled===!0&&rt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&We(Tt,N,-1/0,R.sortObjects)}We(M,N,0,R.sortObjects),S.finish(),P!==null&&P.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(gt,Vt),$t=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,$t&&kt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&lt.beginShadows();let W=b.state.shadowsArray;if(Dt.render(W,M,N),Wt===!0&&lt.endShadows(),(V&&A.hasRenderPass())===!1){let Tt=S.opaque,yt=S.transmissive;if(b.setupLights(),N.isArrayCamera){let Lt=N.cameras;if(yt.length>0)for(let Ft=0,ne=Lt.length;Ft<ne;Ft++){let oe=Lt[Ft];ze(Tt,yt,M,oe)}$t&&kt.render(M);for(let Ft=0,ne=Lt.length;Ft<ne;Ft++){let oe=Lt[Ft];ye(S,M,oe,oe.viewport)}}else yt.length>0&&ze(Tt,yt,M,N),$t&&kt.render(M),ye(S,M,N)}et!==null&&G===0&&(Z.updateMultisampleRenderTarget(et),Z.updateRenderTargetMipmap(et)),V&&A.end(R),M.isScene===!0&&M.onAfterRender(R,M,N),mt.resetDefaultState(),q=-1,C=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),Wt===!0&&lt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,P!==null&&P.renderEnd()};function We(M,N,X,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(bt)){V&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let Tt=tt.update(M),yt=M.material;yt.visible&&S.push(M,Tt,yt,X,Se.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(bt))){let Tt=tt.update(M),yt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Se.copy(Tt.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){let Lt=Tt.groups;for(let Ft=0,ne=Lt.length;Ft<ne;Ft++){let oe=Lt[Ft],Rt=yt[oe.materialIndex];Rt&&Rt.visible&&S.push(M,Tt,Rt,X,Se.z,oe,N)}}else yt.visible&&S.push(M,Tt,yt,X,Se.z,null,N)}}let _t=M.children;for(let Tt=0,yt=_t.length;Tt<yt;Tt++)We(_t[Tt],N,X,V)}function ye(M,N,X,V){let{opaque:W,transmissive:_t,transparent:Tt}=M;b.setupLightsView(X),Wt===!0&&lt.setGlobalState(R.clippingPlanes,X),V&&_.viewport(nt.copy(V)),W.length>0&&Ue(W,N,X),_t.length>0&&Ue(_t,N,X),Tt.length>0&&Ue(Tt,N,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ze(M,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Rt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new dn(1,1,{generateMipmaps:!0,type:Rt?Fi:hi,minFilter:Mi,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let _t=b.state.transmissionRenderTarget[V.id],Tt=V.viewport||nt;_t.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Qt),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),$t&&kt.render(X);let ne=R.toneMapping;R.toneMapping=Di;let oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Wt===!0&&lt.setGlobalState(R.clippingPlanes,V),Ue(M,X,V),Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let xe=0,Ke=N.length;xe<Ke;xe++){let Ce=N[xe],{object:be,geometry:sn,material:wt,group:ee}=Ce;if(wt.side===Hn&&be.layers.test(V.layers)){let Zt=wt.side;wt.side=bn,wt.needsUpdate=!0,Pe(be,X,V,sn,wt,ee),wt.side=Zt,wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t))}R.setRenderTarget(yt,Lt,Ft),R.setClearColor(Qt,Yt),oe!==void 0&&(V.viewport=oe),R.toneMapping=ne}function Ue(M,N,X){let V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,_t=M.length;W<_t;W++){let Tt=M[W],{object:yt,geometry:Lt,group:Ft}=Tt,ne=Tt.material;ne.allowOverride===!0&&V!==null&&(ne=V),yt.layers.test(X.layers)&&Pe(yt,N,X,Lt,ne,Ft)}}function Pe(M,N,X,V,W,_t){P!==null&&W.isNodeMaterial&&P.setObject(M,W),M.onBeforeRender(R,N,X,V,W,_t),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(R,N,X,V,M,_t),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,R.renderBufferDirect(X,N,V,W,M,_t),W.side=Hr,W.needsUpdate=!0,R.renderBufferDirect(X,N,V,W,M,_t),W.side=Hn):R.renderBufferDirect(X,N,V,W,M,_t),M.onAfterRender(R,N,X,V,W,_t)}function Fe(M,N,X){N.isScene!==!0&&(N=Be);let V=H.get(M),W=b.state.lights,_t=b.state.shadowsArray,Tt=W.state.version,yt=dt.getParameters(M,W.state,_t,N,X,b.state.lightProbeGridArray),Lt=dt.getProgramCacheKey(yt),Ft=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ct.get(M.envMap||V.environment,ne),V.envMapRotation=V.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Ct),Ft=new Map,V.programs=Ft);let oe=Ft.get(Lt);if(oe!==void 0){if(V.currentProgram===oe&&V.lightsStateVersion===Tt)return wn(M,yt),oe}else yt.uniforms=dt.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,X,yt),M.onBeforeCompile(yt,R),oe=dt.acquireProgram(yt,Lt),Ft.set(Lt,oe),V.uniforms=yt.uniforms;let Rt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),wn(M,yt),V.needsLights=Fn(M),V.lightsStateVersion=Tt,V.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=oe,V.uniformsList=null,oe}function Qe(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=pa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function wn(M,N){let X=H.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function ji(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,V=M.length;X<V;X++){let W=M[X];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function rn(M,N,X,V,W){N.isScene!==!0&&(N=Be),Z.resetTextureUnits();let _t=N.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,yt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ft=ct.get(V.envMap||Tt,Lt),ne=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,oe=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!X.morphAttributes.position,xe=!!X.morphAttributes.normal,Ke=!!X.morphAttributes.color,Ce=Di;V.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ce=R.toneMapping);let be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,sn=be!==void 0?be.length:0,wt=H.get(V),ee=b.state.lights;if(Wt===!0&&(te===!0||M!==C)){let Te=M===C&&V.id===q;lt.setState(V,M,Te)}let Zt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ee.state.version||wt.outputColorSpace!==yt||W.isBatchedMesh&&wt.batching===!1||!W.isBatchedMesh&&wt.batching===!0||W.isBatchedMesh&&wt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&wt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&wt.instancing===!1||!W.isInstancedMesh&&wt.instancing===!0||W.isSkinnedMesh&&wt.skinning===!1||!W.isSkinnedMesh&&wt.skinning===!0||W.isInstancedMesh&&wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&wt.instancingMorph===!1&&W.morphTexture!==null||wt.envMap!==Ft||V.fog===!0&&wt.fog!==_t||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==lt.numPlanes||wt.numIntersection!==lt.numIntersection)||wt.vertexAlphas!==ne||wt.vertexTangents!==oe||wt.morphTargets!==Rt||wt.morphNormals!==xe||wt.morphColors!==Ke||wt.toneMapping!==Ce||wt.morphTargetsCount!==sn||!!wt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,wt.__version=V.version);let nn=wt.currentProgram;Zt===!0&&(nn=Fe(V,N,W),P&&V.isNodeMaterial&&P.onUpdateProgram(V,nn,wt));let Ve=!1,Zn=!1,vr=!1,we=nn.getUniforms(),Ie=wt.uniforms;if(_.useProgram(nn.program)&&(Ve=!0,Zn=!0,vr=!0),V.id!==q&&(q=V.id,Zn=!0),wt.needsLights){let Te=ji(b.state.lightProbeGridArray,W);wt.lightProbeGrid!==Te&&(wt.lightProbeGrid=Te,Zn=!0)}if(Ve||C!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),we.setValue(F,"projectionMatrix",M.projectionMatrix),we.setValue(F,"viewMatrix",M.matrixWorldInverse);let Wn=we.map.cameraPosition;Wn!==void 0&&Wn.setValue(F,re.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&we.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&we.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),C!==M&&(C=M,Zn=!0,vr=!0)}if(wt.needsLights&&(ee.state.sunShadowMap.length>0&&we.setValue(F,"sunShadowMap",ee.state.sunShadowMap,Z),ee.state.directionalShadowMap.length>0&&we.setValue(F,"directionalShadowMap",ee.state.directionalShadowMap,Z),ee.state.spotShadowMap.length>0&&we.setValue(F,"spotShadowMap",ee.state.spotShadowMap,Z),ee.state.pointShadowMap.length>0&&we.setValue(F,"pointShadowMap",ee.state.pointShadowMap,Z)),W.isSkinnedMesh){we.setOptional(F,W,"bindMatrix"),we.setOptional(F,W,"bindMatrixInverse");let Te=W.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),we.setValue(F,"boneTexture",Te.boneTexture,Z))}W.isBatchedMesh&&(we.setOptional(F,W,"batchingTexture"),we.setValue(F,"batchingTexture",W._matricesTexture,Z),we.setOptional(F,W,"batchingIdTexture"),we.setValue(F,"batchingIdTexture",W._indirectTexture,Z),we.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(F,"batchingColorTexture",W._colorsTexture,Z));let tr=X.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&U.update(W,X,nn),(Zn||wt.receiveShadow!==W.receiveShadow)&&(wt.receiveShadow=W.receiveShadow,we.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ie.envMapIntensity.value=N.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=t3()),Zn){if(we.setValue(F,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&Xe(Ie,vr),_t&&V.fog===!0&&Et.refreshFogUniforms(Ie,_t),Et.refreshMaterialUniforms(Ie,V,j,Y,b.state.transmissionRenderTarget[M.id]),wt.needsLights&&wt.lightProbeGrid){let Te=wt.lightProbeGrid;Ie.probesSH.value=Te.texture,Ie.probesMin.value.copy(Te.boundingBox.min),Ie.probesMax.value.copy(Te.boundingBox.max),Ie.probesResolution.value.copy(Te.resolution)}pa.upload(F,Qe(wt),Ie,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pa.upload(F,Qe(wt),Ie,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&we.setValue(F,"center",W.center),we.setValue(F,"modelViewMatrix",W.modelViewMatrix),we.setValue(F,"normalMatrix",W.normalMatrix),we.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Te=V.uniformsGroups;for(let Wn=0,Jn=Te.length;Wn<Jn;Wn++){let wh=Te[Wn];it.update(wh,nn),it.bind(wh,nn)}}return nn}function Xe(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Fn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,N,X){let V=H.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=N,H.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let X=H.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,X=0){et=M,$=N,G=X;let V=null,W=!1,_t=!1;if(M){let yt=H.get(M);if(yt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),nt.copy(M.viewport),It.copy(M.scissor),At=M.scissorTest,_.viewport(nt),_.scissor(It),_.setScissorTest(At),q=-1;return}else if(yt.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(yt.__hasExternalTextures)Z.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ne=M.depthTexture;if(yt.__boundDepthTexture!==ne){if(ne!==null&&H.has(ne)&&(M.width!==ne.image.width||M.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(_t=!0);let Ft=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?V=Ft[N][X]:V=Ft[N],W=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?V=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[X]:V=Ft,nt.copy(M.viewport),It.copy(M.scissor),At=M.scissorTest}else nt.copy(xt).multiplyScalar(j).floor(),It.copy(Gt).multiplyScalar(j).floor(),At=Mt;if(X!==0&&(V=O),_.bindFramebuffer(F.FRAMEBUFFER,V)&&_.drawBuffers(M,V),_.viewport(nt),_.scissor(It),_.setScissorTest(At),W){let yt=H.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,X)}else if(_t){let yt=N;for(let Lt=0;Lt<M.textures.length;Lt++){let Ft=H.get(M.textures[Lt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,X,yt)}}else if(M!==null&&X!==0){let yt=H.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,X)}q=-1};function Bi(M){let N=H.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=E.textureFormatReadable(M.format),N.__typeReadable=E.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,X,V,W,_t,Tt,yt=0){if(!(M&&M.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){_.bindFramebuffer(F.FRAMEBUFFER,Lt);try{let Ft=M.textures[yt],ne=Ft.format,oe=Ft.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=Bi(Ft);if(Rt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&X>=0&&X<=M.height-W&&F.readPixels(N,X,V,W,ht.convert(ne),ht.convert(oe),_t)}finally{let Ft=et!==null?H.get(et).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,V,W,_t,Tt,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt)if(N>=0&&N<=M.width-V&&X>=0&&X<=M.height-W){_.bindFramebuffer(F.FRAMEBUFFER,Lt);let Ft=M.textures[yt],ne=Ft.format,oe=Ft.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=Bi(Ft);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(N,X,V,W,ht.convert(ne),ht.convert(oe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ke=et!==null?H.get(et).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Ke);let Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await B0(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(xe),F.deleteSync(Ce),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){let V=Math.pow(2,-X),W=Math.floor(M.image.width*V),_t=Math.floor(M.image.height*V),Tt=N!==null?N.x:0,yt=N!==null?N.y:0;Z.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Tt,yt,W,_t),_.unbindTexture()},this.copyTextureToTexture=function(M,N,X=null,V=null,W=0,_t=0){let Tt,yt,Lt,Ft,ne,oe,Rt,xe,Ke,Ce=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(X!==null)Tt=X.max.x-X.min.x,yt=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,ne=X.min.y,oe=X.isBox3?X.min.z:0;else{let Ie=Math.pow(2,-W);Tt=Math.floor(Ce.width*Ie),yt=Math.floor(Ce.height*Ie),M.isDataArrayTexture?Lt=Ce.depth:M.isData3DTexture?Lt=Math.floor(Ce.depth*Ie):Lt=1,Ft=0,ne=0,oe=0}V!==null?(Rt=V.x,xe=V.y,Ke=V.z):(Rt=0,xe=0,Ke=0);let be=ht.convert(N.format),sn=ht.convert(N.type),wt;N.isData3DTexture?(Z.setTexture3D(N,0),wt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),wt=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),wt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let ee=_.getParameter(F.UNPACK_ROW_LENGTH),Zt=_.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(F.UNPACK_SKIP_PIXELS),Ve=_.getParameter(F.UNPACK_SKIP_ROWS),Zn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ce.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ce.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),_.pixelStorei(F.UNPACK_SKIP_ROWS,ne),_.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);let vr=M.isDataArrayTexture||M.isData3DTexture,we=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Ie=H.get(M),tr=H.get(N),Te=H.get(Ie.__renderTarget),Wn=H.get(tr.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,Te.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Jn=0;Jn<Lt;Jn++)vr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(M).__webglTexture,W,oe+Jn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(N).__webglTexture,_t,Ke+Jn)),F.blitFramebuffer(Ft,ne,Tt,yt,Rt,xe,Tt,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||H.has(M)){let Ie=H.get(M),tr=H.get(N);_.bindFramebuffer(F.READ_FRAMEBUFFER,D),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Te=0;Te<Lt;Te++)vr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,W,oe+Te):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,W),we?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tr.__webglTexture,_t,Ke+Te):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tr.__webglTexture,_t),W!==0?F.blitFramebuffer(Ft,ne,Tt,yt,Rt,xe,Tt,yt,F.COLOR_BUFFER_BIT,F.NEAREST):we?F.copyTexSubImage3D(wt,_t,Rt,xe,Ke+Te,Ft,ne,Tt,yt):F.copyTexSubImage2D(wt,_t,Rt,xe,Ft,ne,Tt,yt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else we?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(wt,_t,Rt,xe,Ke,Tt,yt,Lt,be,sn,Ce.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,_t,Rt,xe,Ke,Tt,yt,Lt,be,Ce.data):F.texSubImage3D(wt,_t,Rt,xe,Ke,Tt,yt,Lt,be,sn,Ce):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Rt,xe,Tt,yt,be,sn,Ce.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Rt,xe,Ce.width,Ce.height,be,Ce.data):F.texSubImage2D(F.TEXTURE_2D,_t,Rt,xe,Tt,yt,be,sn,Ce);_.pixelStorei(F.UNPACK_ROW_LENGTH,ee),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),_.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),_t===0&&N.generateMipmaps&&F.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){$=0,G=0,et=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Oo=`
vec3 toLin(vec3 c){ return pow(max(c, 0.0), vec3(2.2)); }
vec3 toSRGB(vec3 c){ return pow(max(c, 0.0), vec3(1.0/2.2)); }
float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 x){
  vec2 i = floor(x), f = fract(x); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), u.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), u.x), u.y);
}
// soft shoulder so the sunlit wall never clips harshly
vec3 shoulder(vec3 c){ return c / (1.0 + max(c - 0.82, 0.0) * 1.6); }
`,xm=`
attribute vec2 iT;      // t0,t1 along the half-string curve
attribute vec4 iTile;   // atlas rect (u0, v0, du, dv)
attribute vec3 iCol;    // tissue colour (linear)
attribute vec4 iMisc;   // x string index, y seed, z flag height (m), w kind (0 motif, 1 letter)
uniform vec3 uA[8];
uniform vec3 uC[8];
uniform vec3 uE[8];
uniform float uFl[8];
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

vec3 flagPos(vec2 uv, int s){
  float t = mix(iT.x, iT.y, uv.x);
  vec3 top = bez(s, t);
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
`,vm=`
${xm}
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
}`,ym=`
${Oo}
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
}`,Mm=`
${xm}
varying float vD;
void main(){
  int s = int(iMisc.x + 0.5);
  vec3 p = flagPos(position.xy, s);
  vUV = position.xy; vTile = iTile; vCol = iCol; vMisc = iMisc;
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Sm=`
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
  vec3 tr = pow(vCol, vec3(0.72)) * 0.8 + 0.03;
  float hdr = 1.0 - step(uHeader, vUV.y);
  tr = mix(tr, tr * tr * 1.05, hdr);
  gl_FragColor = vec4(mix(vec3(1.0), tr, cov), vD);
}`,bm=`
uniform vec3 uA[8];
uniform vec3 uC[8];
uniform vec3 uE[8];
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
`,wm=`
${bm}
varying float vSide;
varying vec3 vW;
void main(){
  float side;
  vec3 p = cordPos(side);
  vSide = side; vW = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Tm=`
${Oo}
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
}`,Am=`
${bm}
varying float vD;
void main(){
  float side;
  vec3 p = cordPos(side);
  vD = clamp(p.z / 3.2, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Em=`
varying float vD;
void main(){ gl_FragColor = vec4(vec3(0.42, 0.4, 0.38), vD); }`,jf=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Cm=`
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
}`,Lm=`
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
  float pores = cellsP(uv * 90.0, vec2(90.0), 0.38, 0.12, 0.36);
  pores = max(pores, cellsP(uv * 34.0 + 0.5, vec2(34.0), 0.16, 0.08, 0.22) );
  float clasts = cellsP(uv * 60.0 + 0.25, vec2(60.0), 0.3, 0.12, 0.4) * smoothstep(0.35, 0.7, vnP(uv * 12.0, vec2(12.0)));
  gl_FragColor = vec4(mott, grain, pores, clasts);
}`,Bo=`
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vNo = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,td=`
${Oo}
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
    float ch = 0.42;
    float row = floor(p.y / ch);
    float L = mix(0.62, 1.02, hash11(row * 1.73 + 3.0));
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
  float face = smoothstep(0.004, 0.024, je);
  joint = mix(0.55, 1.0, smoothstep(0.0, 0.03, je));
  return vec4(h * face, id, band, joint);
}

float heightAt(vec2 p, vec2 suv){
  vec4 m = masonry(p);
  vec4 st = texture2D(uStone, suv);
  return m.x + (st.g - 0.5) * 0.22 - st.b * 0.35;
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
    N = normalize(vec3(-(hx - h0) / e * 0.016, -(hy - h0) / e * 0.016, 1.0));
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
  alb = mix(alb, cWarm, smoothstep(0.55, 1.0, bh) * 0.8);
  alb = mix(alb, cMauve, smoothstep(0.45, 0.0, bh) * 0.7);
  alb = mix(alb, cPale, m.z * 0.45);
  alb *= 0.9 + 0.2 * (st.r * 0.6 + st2.r * 0.4);
  alb = mix(alb, alb * toLin(vec3(0.62, 0.42, 0.45)), st.b * 0.85);
  alb = mix(alb, toLin(vec3(0.97, 0.88, 0.84)), st.a * 0.55);
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
    float far = b.a;
    vec3 TT = mix(a.rgb, b.rgb, clamp(uSoft + far * 1.1, 0.0, 1.0));
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
  vec3 col = alb * (uKey * ndl * T * sh + amb * m.w);
  vec2 sp = gl_FragCoord.xy / uRes - 0.5;
  col *= 1.0 - uVig * dot(sp, sp);
  gl_FragColor = vec4(toSRGB(shoulder(col)), 1.0);
}`,Rm=`
${Oo}
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
    col *= 0.86 + 0.2 * wash;
    vec2 mu = (vW.xy - uMarkRect.xy) / uMarkRect.zw;
    if (mu.x > 0.0 && mu.x < 1.0 && mu.y > 0.0 && mu.y < 1.0) {
      vec4 mk = texture2D(uMark, vec2(mu.x, 1.0 - mu.y));
      // painted-on decal, a whisper of shadow below the white outline
      vec4 sh = texture2D(uMark, vec2(mu.x - 0.002, 1.0 - mu.y + 0.012));
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
}`,Pm=`
${Oo}
uniform vec3 uPink;
uniform vec3 uTop;
uniform float uH;
uniform float uExpo;
uniform vec2 uRes;
uniform float uVig;
uniform float uFlat;
varying vec3 vW;
varying vec3 vNo;
void main(){
  vec3 n = normalize(vNo);
  vec3 col;
  if (n.y > 0.5) {
    // white quartz-look top
    col = uTop * (0.92 + 0.06 * vnoise(vW.xz * 18.0));
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
}`;var Im={L:{d:"M40-59L40-59L40-681Q40-702 141.5-702Q243-702 243-681L243-681L243-191L397-191Q415-191 422-144L422-144Q425-121 425-97Q425-73 422-48L422-48Q414 0 396 0L396 0L88 0Q66 0 53-18Q40-36 40-59",x0:40,y0:-702,x1:425,y1:0},A:{d:"M520 2L520 2Q433 2 426-26L426-26L393-155L234-155L205-31Q199 0 109 0L109 0Q61 0 38-5.5Q15-11 15-14L15-14L192-691Q192-699 329-699Q466-699 466-691L466-691L639-13Q639-6 593-2Q547 2 520 2M313-489L259-282L364-282L319-489L313-489",x0:15,y0:-699,x1:639,y1:2},Z:{d:"M275-518L76-518Q59-518 52-564L52-564Q49-583 49-606Q49-629 54-654L54-654Q63-700 84-700L84-700L454-700Q515-700 533-589L533-589Q537-565 537-554L537-554L303-199L486-199Q487-199 488-199L488-199Q510-199 519-151L519-151Q523-128 523-103Q523-78 517-50L517-50Q506 0 483 0L483 0L94 0Q85 0 61.5-60.5Q38-121 38-136Q38-151 41-155L41-155L275-518",x0:38,y0:-700,x1:537,y1:0},C:{d:"M336-709Q409-709 464.5-688.5Q520-668 520-633Q520-598 493.5-546.5Q467-495 449-495L449-495Q444-495 437.5-500.5Q431-506 407.5-512.5Q384-519 367-519L367-519Q309-519 273.5-478Q238-437 238-352.5Q238-268 274.5-227Q311-186 367-186L367-186Q390-186 418.5-192.5Q447-199 459-211L459-211Q461-213 467-213Q473-213 489.5-190.5Q506-168 520-131.5Q534-95 534-75L534-75Q534-36 474-13Q414 10 332 10L332 10Q200 10 115-83Q30-176 30-345.5Q30-515 117.5-612Q205-709 336-709L336-709",x0:30,y0:-709,x1:534,y1:10},T:{d:"M351-518L351-16Q351 4 252 4Q153 4 153-16L153-16L153-518L33-518Q16-518 9-564L9-564Q6-586 6-609Q6-632 9-654L9-654Q16-700 33-700L33-700L468-700Q485-700 492-654L492-654Q495-632 495-609Q495-586 492-564L492-564Q485-518 468-518L468-518L351-518",x0:6,y0:-700,x1:495,y1:4},E:{d:"M246-422L375-422Q394-422 394-352L394-352Q394-331 389.5-302.5Q385-274 373-274L373-274L246-274L246-174L430-174Q447-174 453-130L453-130Q456-111 456-89.5Q456-68 450-34Q444 0 430 0L430 0L88 0Q50 0 50-31L50-31L50-674Q50-700 73-700L73-700L431-700Q452-700 452-611.5Q452-523 431-523L431-523L246-523L246-422",x0:50,y0:-700,x1:456,y1:0},N:{d:"M598-681L598-22Q598-1 504-1Q410-1 402-16L402-16L235-328L235-17Q235 1 142.5 1Q50 1 50-17L50-17L50-686Q50-701 129-701L129-701Q160-701 201.5-695.5Q243-690 252-675L252-675L412-367L412-681Q412-700 505-700Q598-700 598-681L598-681",x0:50,y0:-701,x1:598,y1:1}};var hn=320,Oi=400,_r=4,ko=4,Dm=30/Oi,wi={cone:0,strawberry:1,elote:2,chile:3,cactus:4,zacatecas:5,dalia:6,paleta:7,L:8,A:9,Z:10,C:11,T:12,E:13,N:14},Bt=r=>Math.round(r*10)/10;function n3(r,t,e,n,i,s,a){let o="";for(let l=t-(i-n);l<e+(i-n);l+=s)o+=`M${l} ${n}L${l+(i-n)*.62} ${i}M${l+(i-n)*.62} ${n}L${l} ${i}`;return`<path clip-path="url(#${r})" d="${o}" stroke-width="${a}"/>`}function i3(r){let t={};{let e="M51 106C46 82 70 66 100 68C130 66 154 82 149 106Z",n="M56 104L144 104L100 197Z",i="M48 106";for(let s=0;s<8;s++)i+="q6.5 -9 13 0";t.cone={halo:`<circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${e}"/><path d="${n}"/>`,defs:`<clipPath id="ck-cone"><path d="${n}"/></clipPath>`,cut:`<path d="M100 12Q103 1 114 -4" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
        <circle cx="100" cy="21" r="10"/><circle cx="100" cy="56" r="30"/><path d="${e}"/><path d="${n}"/>`,bridge:`<path d="M71 74Q100 90 129 74" stroke-width="5"/><path d="${i}" stroke-width="5.5"/>
        ${n3("ck-cone",40,160,104,200,15,4)}
        <path d="M70 58Q72 38 90 31" stroke-width="4"/><path d="M60 98Q66 84 82 80" stroke-width="4"/>
        <path d="M104 30Q109 22 106 14" stroke-width="3"/>`}}{let e="M100 193C60 179 32 141 36 105C38 81 58 67 80 69C90 70 96 73 100 75C104 73 110 70 120 69C142 67 162 81 164 105C168 141 140 179 100 193Z",n="";for(let s=84;s<196;s+=17)for(let a=40;a<166;a+=20){let o=a+(Math.round((s-84)/17)%2?10:0);n+=`<ellipse cx="${o}" cy="${s}" rx="2.9" ry="4.4"/>`}let i="";for(let s=-120;s<220;s+=20)i+=`M${s} 70L${s+130} 200`;t.strawberry={halo:`<path d="${e}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/><circle cx="108" cy="20" r="8"/>`,defs:`<clipPath id="ck-straw"><path d="${e}"/></clipPath>`,cut:`<path d="${e}"/><path d="M100 78L68 60L88 58L80 38L96 51L100 30L104 51L120 38L112 58L132 60Z"/>
        <path d="M100 40Q101 22 113 11" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,bridge:`<path d="M64 76Q100 88 136 76" stroke-width="5"/>
        <g clip-path="url(#ck-straw)"><path d="${i}" stroke-width="1.6"/><g fill="#fff" stroke="none">${n}</g></g>
        <path d="M100 74L82 46M100 74L100 38M100 74L118 46" stroke-width="2.6"/>`}}{let e="M100 8C126 8 134 42 133 80C132 112 124 132 100 134C76 132 68 112 67 80C66 42 74 8 100 8Z",n="M100 146C68 142 42 118 34 74C52 102 70 114 96 122Z",i="M100 146C132 142 158 118 166 74C148 102 130 114 104 122Z",s="";for(let a=19;a<134;a+=11)s+=`M60 ${Bt(a)}H140`;for(let a=0;a<4;a++)s+=`M${Bt(80.5+a*13)} 4V136`;t.elote={rot:-8,halo:`<path d="${e}"/><path d="${n}"/><path d="${i}"/><path d="M92 132H108V199H92Z"/>`,defs:`<clipPath id="ck-cob"><path transform="rotate(-8 100 100)" d="${e}"/></clipPath>`,cut:`<path d="${e}"/><path d="${n}"/><path d="${i}"/><path d="M92 136H108V199H92Z"/>`,bridge:`<path clip-path="url(#ck-cob)" transform="rotate(8 100 100)" d="${s}" stroke-width="3.3"/>
        <path d="M94 136C70 130 52 112 42 88M106 136C130 130 148 112 158 88" stroke-width="3"/>
        <path d="M70 116Q100 140 130 116" stroke-width="4.5"/><path d="M86 137H114" stroke-width="4"/>`}}{let e="M120 50C143 56 151 86 141 114C129 150 99 176 58 192C50 195 45 187 52 181C84 158 102 130 106 100C109 80 104 64 94 56C104 49 112 48 120 50Z";t.chile={halo:`<path d="${e}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/><circle cx="128" cy="14" r="10"/>`,cut:`<path d="${e}"/><path d="M86 58C92 41 116 34 134 47C127 58 110 60 86 58Z"/>
        <path d="M114 42C112 25 120 12 137 8" fill="none" stroke="#000" stroke-width="7" stroke-linecap="round"/>`,bridge:`<path d="M129 66C136 94 126 126 98 153" stroke-width="4.5"/><path d="M84 60C104 64 122 60 137 51" stroke-width="4"/>
        <path d="M116 158C104 168 86 178 70 184" stroke-width="2.6"/>`}}{let e=i=>`<path d="M86 124H64Q54 124 54 114V82" fill="none" stroke="#000" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M114 100H138Q148 100 148 90V60" fill="none" stroke="#000" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round"/>`,n="";for(let i=0;i<6;i++){let s=i/6*Math.PI*2;n+=`<ellipse cx="${Bt(100+Math.cos(s)*8)}" cy="${Bt(18+Math.sin(s)*8)}" rx="5.2" ry="3.4" transform="rotate(${Bt(s*180/Math.PI)} ${Bt(100+Math.cos(s)*8)} ${Bt(18+Math.sin(s)*8)})"/>`}t.cactus={halo:`<rect x="83" y="28" width="34" height="158" rx="17"/>${e(24).replace(/#000/g,"#fff")}<circle cx="100" cy="18" r="14"/><path d="M34 190Q68 178 100 186T166 184" fill="none" stroke="#fff" stroke-width="8"/>`,cut:`<rect x="83" y="30" width="34" height="156" rx="17"/>${e(24)}${n}
        <path d="M34 191Q68 181 100 188T166 186" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>`,bridge:`<path d="M93 42V178M107 42V178" stroke-width="3.2"/><path d="M84 124H64Q54 124 54 114V84M116 100H138Q148 100 148 90V62" stroke-width="3"/>
        <path d="M84 31H116" stroke-width="3.6"/><circle cx="100" cy="18" r="3.2" fill="#fff" stroke="none"/>`}}{let e=r.match(/-?\d+(\.\d+)?/g).map(Number),n=1e9,i=1e9,s=-1e9,a=-1e9;for(let f=0;f+1<e.length;f+=2)n=Math.min(n,e[f]),s=Math.max(s,e[f]),i=Math.min(i,e[f+1]),a=Math.max(a,e[f+1]);let o=186/Math.max(s-n,a-i),l=100-(n+s)/2*o,c=100-(i+a)/2*o,h=f=>`<g transform="translate(${Bt(l)} ${Bt(c)}) scale(${o.toFixed(4)})">${f}</g>`,d=f=>(f/o).toFixed(1),u=`<path d="${r}"/>`;t.zacatecas={halo:h(u),defs:`<clipPath id="ck-zac"><path transform="translate(${Bt(l)} ${Bt(c)}) scale(${o.toFixed(4)})" d="${r}"/></clipPath>`,cut:h(`${u}<path d="${r}" fill="none" stroke="#fff" stroke-width="${d(17)}" stroke-linejoin="round"/>
        <path d="${r}" fill="none" stroke="#000" stroke-width="${d(8)}" stroke-linejoin="round"/>`),bridge:`<g clip-path="url(#ck-zac)"><path d="M20 70C60 60 80 96 120 84S170 70 190 90M10 132C50 120 70 150 110 140S160 128 190 146" stroke-width="3.2"/></g>
        <path d="M118 128l5 -9 5 9 -5 9z" fill="#fff" stroke="none"/>`}}{let e="",n="";for(let i=0;i<12;i++){let s=i/12*360;e+=`<ellipse cx="100" cy="56" rx="10" ry="29" transform="rotate(${s} 100 100)"/>`,n+=`<ellipse cx="100" cy="78" rx="6.5" ry="13" transform="rotate(${s+15} 100 100)"/>`}t.dalia={halo:'<circle cx="100" cy="100" r="76"/>',cut:`${e}${n}<circle cx="100" cy="100" r="11"/>`,bridge:'<circle cx="100" cy="100" r="5" fill="#fff" stroke="none"/>'}}{let e="M72 46C72 26 84 16 100 16C116 16 128 26 128 46V148H72Z",n="";for(let i=36;i<160;i+=18)n+=`M60 ${i+14}L140 ${i-10}`;t.paleta={halo:`<path d="${e}"/><rect x="91" y="146" width="18" height="52" rx="8"/>`,defs:`<clipPath id="ck-pal"><path d="${e}"/></clipPath>`,cut:`<path d="${e}"/><rect x="91" y="150" width="18" height="48" rx="8"/>`,bridge:`<g clip-path="url(#ck-pal)"><path d="${n}" stroke-width="4"/></g><path d="M66 149H134" stroke-width="5"/>
        <circle cx="129" cy="24" r="13" fill="#fff" stroke="none"/><circle cx="117" cy="17" r="7" fill="#fff" stroke="none"/>`}}return t}function r3(r){let t=[...String(r||"").matchAll(/\sd\s*=\s*"([^"]+)"/g)].map(e=>e[1]);return t.length?t.join(" "):"M318 92C430 96 512 170 590 176C690 292 846 368 870 520C900 660 772 742 694 884C548 856 476 740 330 700C286 560 160 470 168 318C146 172 318 92 318 92Z"}function s3(r){let t=Oi-26,e=`M0 0H${hn}V${t}`;if(r==="scallop"){let i=hn/12;for(let s=0;s<12;s++)e+=`A${Bt(i/2)} ${Bt(i/2)} 0 0 1 ${Bt(hn-(s+1)*i)} ${t}`}else if(r==="picos"){let i=hn/10;for(let s=0;s<10;s++)e+=`L${Bt(hn-(s+.5)*i)} ${Oi-1}L${Bt(hn-(s+1)*i)} ${t}`}else{let i=hn/16;for(let s=0;s<16;s++)e+=`L${Bt(hn-(s+.5)*i)} ${Oi-8}L${Bt(hn-(s+1)*i)} ${t}`}return e+"Z"}function Nm(r,t,e,n,i,s){let a="",o=0;for(let l=e;l<=i;l+=s*.87,o++)for(let c=t+(o%2?s/2:0);c<=n;c+=s){let h=Bt(c),d=Bt(l);if(r==="dots")a+=`<circle cx="${h}" cy="${d}" r="${Bt(s*.19)}"/>`;else if(r==="diamonds"){let u=s*.24;a+=`<path d="M${h} ${Bt(l-u)}l${Bt(u*.75)} ${Bt(u)} ${Bt(-u*.75)} ${Bt(u)} ${Bt(-u*.75)} ${Bt(-u)}z"/>`}else if(r==="petals"){let u=s*.17;a+=`<ellipse cx="${h}" cy="${Bt(l-u)}" rx="${Bt(u*.48)}" ry="${Bt(u*.85)}"/><ellipse cx="${h}" cy="${Bt(l+u)}" rx="${Bt(u*.48)}" ry="${Bt(u*.85)}"/><ellipse cx="${Bt(c-u)}" cy="${d}" rx="${Bt(u*.85)}" ry="${Bt(u*.48)}"/><ellipse cx="${Bt(c+u)}" cy="${d}" rx="${Bt(u*.85)}" ry="${Bt(u*.48)}"/>`}else if(r==="stars"){let u=s*.27,f=u*.3;a+=`<path d="M${h} ${Bt(l-u)}L${Bt(c+f)} ${Bt(l-f)}L${Bt(c+u)} ${d}L${Bt(c+f)} ${Bt(l+f)}L${h} ${Bt(l+u)}L${Bt(c-f)} ${Bt(l+f)}L${Bt(c-u)} ${d}L${Bt(c-f)} ${Bt(l-f)}Z"/>`}}return a}function a3(r,t,e,n,i){let s="";if(r==="scallop")for(let a=t+12;a<=n-10;a+=17)s+=`<path d="M${Bt(a-6.5)} ${e+8}a6.5 6.5 0 0 0 13 0z"/>`,s+=`<path d="M${Bt(a-6.5)} ${i-8}a6.5 6.5 0 0 1 13 0z"/>`;else if(r==="diamonds"){for(let a=t+12;a<=n-8;a+=16)s+=`<path d="M${a} ${e+5}l4 5 -4 5 -4 -5z"/><path d="M${a} ${i-15}l4 5 -4 5 -4 -5z"/>`;for(let a=e+26;a<=i-22;a+=16)s+=`<path d="M${t+10} ${a-5}l4 5 -4 5 -4 -5z"/><path d="M${n-10} ${a-5}l4 5 -4 5 -4 -5z"/>`}else for(let a=t+10;a<=n-8;a+=13)s+=`<circle cx="${a}" cy="${e+9}" r="3"/><circle cx="${a}" cy="${i-9}" r="3"/>`;return s}function Um(r,t){let i=hn-16,s=Oi-46,a="";for(let l=14;l<=hn-12;l+=15)a+=`<circle cx="${l}" cy="40" r="3.1"/>`;a+=`<rect x="16" y="52" width="${i-16}" height="${s-52}" rx="3" fill="none" stroke="#000" stroke-width="5" stroke-dasharray="28 8"/>`,a+=a3(t,16,52,i,s);let o=Oi-26;if(r!=="picos")for(let l=20;l<=hn-18;l+=20)a+=`<path d="M${l} ${o-15}l5 7 -5 7 -5 -7z"/>`;else for(let l=16;l<=hn-14;l+=32)a+=`<circle cx="${l}" cy="${o-8}" r="3.6"/>`;return a}var Fm=34,xh=72,Om=hn-34,vh=Oi-64;function o3(r,t){let e=hn/2,n=(xh+vh)/2+2,i=t.scale||1.3,s=`translate(${Bt(e-100*i)} ${Bt(n-100*i)}) scale(${i})${r.rot?` rotate(${r.rot} 100 100)`:""}`;return`${Um(t.edge,t.border)}
    <g fill="#000">${Nm(t.lattice,Fm+6,xh+6,Om-6,vh-4,t.sp||25)}</g>
    <g transform="${s}">
      <g fill="#fff" stroke="#fff" stroke-width="${t.halo||15}" stroke-linejoin="round">${r.halo}</g>
      <g fill="#000">${r.cut}</g>
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">${r.bridge}</g>
    </g>`}function l3(r,t){let e=Im[r],n=.305,i=hn/2,s=(xh+vh)/2+4,a=i-(e.x0+e.x1)/2*n,o=s-(e.y0+e.y1)/2*n,l=r==="A"?'<path d="M316 -478V-730" stroke="#fff" stroke-width="17"/>':"";return`${Um(t.edge,t.border)}
    <g fill="#000">${Nm("dots",Fm+4,xh+6,Om-4,vh-2,22)}</g>
    <g transform="translate(${Bt(a)} ${Bt(o)}) scale(${n})">
      <path d="${e.d}" fill="#fff" stroke="#fff" stroke-width="78" stroke-linejoin="round"/>
      <path d="${e.d}" fill="#000"/>${l}
    </g>`}function c3(r){let t=i3(r3(r)),e=hn*_r,n=Oi*ko,i=[{edge:"zigzag",border:"scallop",lattice:"dots"},{edge:"scallop",border:"diamonds",lattice:"petals",sp:26},{edge:"picos",border:"dots",lattice:"diamonds"},{edge:"zigzag",border:"diamonds",lattice:"stars",sp:25},{edge:"scallop",border:"scallop",lattice:"diamonds"},{edge:"picos",border:"scallop",lattice:"dots",scale:1.24},{edge:"zigzag",border:"dots",lattice:"petals",sp:27,scale:1.2},{edge:"scallop",border:"dots",lattice:"stars",sp:25}],s="",a="",o=(l,c)=>{let h=l%_r*hn,d=Math.floor(l/_r)*Oi;return`<g transform="translate(${h} ${d})"><path d="${s3(c.edge)}" fill="#fff"/>${c.svg}</g>`};return["cone","strawberry","elote","chile","cactus","zacatecas","dalia","paleta"].forEach((l,c)=>{t[l].defs&&(s+=t[l].defs),a+=o(wi[l],{edge:i[c].edge,svg:o3(t[l],i[c])})}),"LAZCTEN".split("").forEach((l,c)=>{let h={edge:["zigzag","scallop","picos"][c%3],border:["diamonds","scallop","dots"][c%3]};a+=o(wi[l],{edge:h.edge,svg:l3(l,h)})}),`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${n}" viewBox="0 0 ${e} ${n}"><defs>${s}</defs><rect width="${e}" height="${n}" fill="#000"/>${a}</svg>`}function Bm(r,t=1){let e=c3(r),n=hn*_r*t,i=Oi*ko*t;return new Promise((s,a)=>{let o=URL.createObjectURL(new Blob([e],{type:"image/svg+xml"})),l=new Image;l.decoding="async",l.onload=()=>{let c=document.createElement("canvas");c.width=n,c.height=i,c.getContext("2d").drawImage(l,0,0,n,i),URL.revokeObjectURL(o),s(c)},l.onerror=c=>{URL.revokeObjectURL(o),a(c)},l.src=o})}function km(r){let t=r%_r,e=Math.floor(r/_r),n=1.5/(hn*_r),i=1.5/(Oi*ko);return[t/_r+n,e/ko+i,1/_r-2*n,1/ko-2*i]}var zm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>Zacatecas state outline</title><path d="M860.0 174.0 L855.3 190.5 L851.6 195.8 L836.6 204.4 L830.8 210.2 L800.7 259.1 L778.1 299.4 L759.8 306.8 L732.1 337.2 L713.2 351.3 L688.3 365.4 L681.8 371.9 L675.1 385.3 L661.7 388.5 L654.4 393.5 L647.8 399.7 L625.8 428.3 L612.0 439.3 L604.2 444.0 L595.7 446.1 L592.1 444.4 L593.1 434.9 L590.8 432.6 L579.9 432.9 L576.9 439.5 L571.6 461.1 L569.1 463.9 L559.7 463.1 L557.6 467.3 L557.5 471.6 L564.9 477.4 L567.1 481.0 L572.2 500.6 L571.7 510.5 L566.7 521.6 L567.5 526.8 L587.4 568.7 L614.4 595.2 L628.7 601.8 L635.3 610.2 L645.4 628.1 L657.5 642.5 L662.3 645.3 L668.1 645.9 L682.3 637.3 L695.2 635.1 L704.7 615.5 L710.8 611.7 L744.9 610.3 L749.2 611.5 L752.4 614.7 L762.8 638.9 L763.3 643.6 L750.3 653.4 L746.9 660.9 L746.7 665.7 L755.7 695.9 L757.9 726.7 L717.7 781.7 L716.0 773.8 L705.9 772.8 L696.6 761.7 L685.1 754.7 L672.9 755.8 L667.6 754.5 L650.9 742.3 L639.1 727.3 L623.3 718.8 L620.9 713.2 L621.6 690.4 L619.3 684.8 L615.6 682.9 L607.0 682.8 L602.9 681.1 L595.9 674.1 L591.9 674.3 L589.4 672.0 L587.5 665.2 L584.9 662.8 L575.6 667.1 L572.0 663.9 L562.6 644.5 L559.1 642.5 L548.1 657.7 L541.5 658.8 L535.9 665.1 L525.3 665.9 L520.7 675.9 L517.8 677.5 L491.4 677.8 L484.5 681.0 L480.0 688.0 L480.7 691.7 L485.9 698.7 L485.0 704.5 L478.4 715.0 L466.1 728.8 L446.0 761.2 L443.4 770.2 L443.0 779.6 L444.9 788.2 L449.4 793.7 L462.7 802.3 L458.2 823.5 L457.8 829.3 L459.5 833.7 L472.9 840.5 L484.4 840.9 L487.4 842.5 L488.7 850.1 L486.0 860.6 L477.6 880.5 L475.3 883.0 L466.9 886.7 L461.0 893.8 L459.9 901.1 L457.3 903.5 L452.9 904.0 L454.0 895.7 L451.5 893.1 L448.0 893.9 L436.8 903.5 L430.9 906.3 L424.6 907.6 L408.5 904.3 L404.2 905.0 L401.9 910.0 L403.7 952.8 L401.2 959.4 L396.4 960.0 L385.4 952.9 L373.5 954.2 L365.8 951.7 L334.9 934.1 L317.8 933.1 L309.0 925.6 L287.7 925.2 L284.8 922.7 L282.4 912.5 L279.1 910.3 L274.7 911.3 L262.0 918.6 L259.8 918.4 L259.2 915.5 L259.9 903.0 L266.6 895.8 L268.4 887.5 L267.9 875.4 L262.5 852.2 L276.4 860.5 L281.0 860.7 L284.7 858.1 L291.7 844.7 L306.6 835.4 L306.1 805.1 L301.9 793.1 L305.1 787.0 L331.0 762.1 L346.0 758.9 L354.0 749.5 L359.2 748.8 L371.3 751.3 L378.6 749.1 L381.3 746.6 L386.8 733.6 L395.0 729.6 L396.4 724.2 L395.8 718.4 L386.9 714.9 L387.3 707.4 L394.8 705.6 L399.2 699.9 L405.3 686.1 L404.3 679.0 L402.1 677.9 L394.4 679.7 L392.4 672.4 L389.8 670.9 L374.5 674.3 L375.4 661.3 L362.9 652.9 L336.8 630.9 L325.7 654.7 L331.5 658.2 L332.7 662.3 L339.3 664.2 L339.7 668.4 L333.1 672.9 L330.9 677.9 L329.8 688.5 L321.4 692.3 L312.9 716.1 L310.6 718.5 L308.6 714.5 L306.5 713.5 L296.3 712.4 L286.6 720.0 L281.4 721.1 L278.1 720.1 L273.9 715.7 L277.0 692.8 L273.0 674.4 L283.6 639.1 L288.1 635.8 L288.4 629.2 L287.8 627.4 L280.8 625.0 L282.0 617.3 L280.8 614.9 L267.0 614.2 L263.7 610.9 L256.9 621.4 L238.2 706.2 L232.4 695.0 L230.4 682.4 L230.6 669.4 L235.2 658.8 L235.3 655.0 L230.9 645.4 L230.9 642.0 L237.9 636.6 L239.0 633.4 L238.3 619.4 L246.6 612.4 L249.9 607.0 L253.3 582.3 L211.2 574.1 L209.4 618.1 L211.1 622.2 L222.8 633.1 L217.6 663.8 L201.7 667.9 L180.7 669.6 L140.0 687.2 L164.8 602.6 L168.9 496.9 L171.3 488.5 L178.4 484.5 L180.2 481.5 L186.5 422.6 L217.5 400.1 L219.9 396.6 L221.8 383.7 L224.7 377.4 L228.9 374.9 L233.6 376.2 L238.1 381.4 L242.0 382.6 L246.8 373.4 L247.4 368.8 L245.1 363.2 L234.9 356.0 L232.7 350.7 L237.7 341.7 L238.3 333.3 L229.0 322.1 L227.4 316.8 L240.8 312.3 L239.8 299.3 L241.0 288.7 L239.3 284.3 L241.5 281.1 L275.6 263.9 L292.0 237.9 L294.7 235.7 L305.1 233.6 L307.3 224.1 L309.8 222.2 L325.2 221.4 L328.5 219.6 L331.6 205.1 L337.2 199.8 L355.4 192.2 L362.7 190.5 L454.4 208.6 L463.4 208.7 L517.7 197.3 L518.0 116.2 L515.7 107.8 L493.6 79.0 L481.7 59.3 L485.4 53.8 L492.9 49.8 L578.0 40.0 L647.7 60.1 L651.5 63.8 L661.5 84.7 L666.9 90.7 L674.2 95.0 L682.4 97.2 L693.5 97.1 L703.3 103.2 L706.0 111.0 L706.6 120.0 L690.2 115.8 L693.1 124.7 L697.8 131.1 L733.9 132.2 L754.0 113.1 L754.5 118.9 L770.3 116.4 L777.2 117.6 L784.3 122.3 L789.9 128.8 L794.5 136.2 L799.8 150.8 L804.9 157.0 L812.6 162.3 L821.2 165.6 L828.9 166.1 L840.2 163.6 Z"/></svg>
`;var Qm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1087 230" role="img" aria-labelledby="t">
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
`;var zo=8,ga=160,xs={magenta:"#D6246E",sunflower:"#F7C815",green:"#2E9E5B",pink:"#F0567A",mango:"#F39A1E",cream:"#FFF6E8",chamoy:"#A3182E",yellowWall:"#F2C418",counter:"#E87FA4",cantera:"#E7A9AE",pinkWall:"#EC8DB0",white:"#F6F1EA",top:"#F4F1EC"},d3=r=>[1,3,5].map(t=>parseInt(r.slice(t,t+2),16)/255),vs=r=>d3(r).map(t=>Math.pow(t,2.2)),xr=r=>new z(r[0],r[1],r[2]),Vm=["magenta","sunflower","green","pink","mango","cream","magenta","green","sunflower","chamoy","mango","pink"],Gm=["magenta","green","mango","chamoy","green","magenta","mango"],yh=[wi.cone,wi.strawberry,wi.elote,wi.chile,wi.cactus,wi.zacatecas,wi.dalia,wi.paleta],Mh=new z(-.42,.58,.7).normalize(),Hm=[1,.93,.82].map(r=>r*1.25),Wm=[.62,.7,.85].map(r=>r*.42),Xm=[.55,.36,.34].map(r=>r*.2),nd=r=>Math.min(1,Math.max(0,r)),ys=(r,t,e)=>r+(t-r)*e,ed=r=>(r=nd(r),r*r*(3-2*r)),qm=r=>(r=nd(r),r*r*r*(r*(r*6-15)+10)),_a=(r,t,e)=>nd((r-t)/(e-t));function Ym(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function p3(r,t,e){return new Promise((n,i)=>{let s=URL.createObjectURL(new Blob([r],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let o=document.createElement("canvas");o.width=t,o.height=e,o.getContext("2d").drawImage(a,0,0,t,e),URL.revokeObjectURL(s),n(o)},a.onerror=o=>{URL.revokeObjectURL(s),i(o)},a.src=s})}function m3(){let r=document.createElement("canvas");r.width=2048,r.height=434;let t=r.getContext("2d");return t.font='700 230px Fredoka, "Lilita One", system-ui, sans-serif',t.textBaseline="middle",t.lineJoin="round",t.lineWidth=28,t.strokeStyle="#fff",t.strokeText("La Zacatecana",60,200),t.fillStyle="#C2185B",t.fillText("La Zacatecana",60,200),r}function g3(r,t){let e=[],n=[];for(let s=0;s<=t;s++)for(let a=0;a<=r;a++)e.push(a/r,s/t,0);for(let s=0;s<t;s++)for(let a=0;a<r;a++){let o=s*(r+1)+a,l=o+1,c=o+r+1,h=c+1;n.push(o,c,l,l,c,h)}let i=new vo;return i.setAttribute("position",new en(new Float32Array(e),3)),i.setIndex(n),i}function _3(r){let t=[],e=[];for(let i=0;i<zo;i++){let s=t.length/3;for(let a=0;a<=r;a++)t.push(a/r,-1,i,a/r,1,i);for(let a=0;a<r;a++){let o=s+a*2;e.push(o,o+2,o+1,o+1,o+2,o+3)}}let n=new Nn;return n.setAttribute("position",new en(new Float32Array(t),3)),n.setIndex(e),n}function x3(r,t,e,n,i){let s=[],a=[],o=[],l=(L,y,S,b,T)=>{let x=s.length/3;s.push(...L,...y,...S,...b);for(let A=0;A<4;A++)a.push(...T);o.push(x,x+1,x+2,x,x+2,x+3)},c=[];c.push([-r,t]),c.push([-r,e]);let h=28;for(let L=1;L<h;L++){let y=Math.PI-L/h*Math.PI;c.push([Math.cos(y)*r,e+Math.sin(y)*r])}c.push([r,e]),c.push([r,t]);for(let L=0;L<c.length-1;L++){let[y,S]=c[L],[b,T]=c[L+1],x=-(T-S),A=b-y,R=Math.hypot(x,A);x/=R,A/=R,l([y,S,0],[y,S,-n],[b,T,-n],[b,T,0],[-x,-A,0])}let{hx:d,th:u,pr:f}=i,g=t-u,v=t,p=-n,m=f;l([-d,v,m],[d,v,m],[d,v,p],[-d,v,p],[0,1,0]),l([-d,g,m],[d,g,m],[d,v,m],[-d,v,m],[0,0,1]),l([-d,g,p],[d,g,p],[d,g,m],[-d,g,m],[0,-1,0]),l([-d,g,p],[-d,g,m],[-d,v,m],[-d,v,p],[-1,0,0]),l([d,g,m],[d,g,p],[d,v,p],[d,v,m],[1,0,0]);let w=new Nn;return w.setAttribute("position",new en(new Float32Array(s),3)),w.setAttribute("normal",new en(new Float32Array(a),3)),w.setIndex(o),w}async function $m({canvas:r,stage:t,getCopyRect:e,phone:n,debug:i={}}){let s=new mh({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});s.autoClear=!0,s.info.autoReset=!1,s.outputColorSpace="srgb-linear";let a=s.getContext(),o=s.capabilities.getMaxAnisotropy(),[l,c]=await Promise.all([Bm(zm),p3(Qm,2048,Math.round(2048*230/1087)).catch(()=>m3())]),h=new oa(l);h.flipY=!1,h.colorSpace=bi,h.minFilter=Mi,h.magFilter=Oe,h.anisotropy=Math.min(8,o),h.generateMipmaps=!0;let d=new oa(c);d.colorSpace=bi,d.anisotropy=Math.min(8,o),d.minFilter=Mi;let u=new dn(1024,1024,{generateMipmaps:!0,minFilter:Mi,magFilter:Oe,wrapS:Nr,wrapT:Nr,depthBuffer:!1});u.texture.wrapS=u.texture.wrapT=Nr,u.texture.anisotropy=Math.min(4,o);let f=new Nn;f.setAttribute("position",new en(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),f.setAttribute("uv",new en(new Float32Array([0,0,2,0,0,2]),2));let g=new Gr(-1,1,1,-1,0,1),v=new Fr,p=new Je(f,new He({vertexShader:jf,fragmentShader:Lm,depthTest:!1,depthWrite:!1}));p.frustumCulled=!1,v.add(p),s.setRenderTarget(u),s.render(v,g),s.setRenderTarget(null),p.material.dispose();let m=n?[1024,1024]:[2048,1280],w=new dn(m[0],m[1],{depthBuffer:!1,minFilter:Oe,magFilter:Oe,wrapS:li,wrapT:li}),L=new dn(m[0]/2,m[1]/2,{depthBuffer:!1,minFilter:Oe,magFilter:Oe}),y=new dn(m[0]/2,m[1]/2,{depthBuffer:!1,minFilter:Oe,magFilter:Oe}),S=new Gr(-5,5,5,-5,.1,60),b=new $e,T={uA:{value:Array.from({length:zo},()=>new z)},uC:{value:Array.from({length:zo},()=>new z)},uE:{value:Array.from({length:zo},()=>new z)},uFl:{value:new Float32Array(zo).fill(1)},uTime:{value:0},uWind:{value:1},uPtrO:{value:new z(0,0,50)},uPtrD:{value:new z(0,0,-1)},uPtrAmt:{value:0},uPtrR:{value:.5},uAtlas:{value:h},uHeader:{value:Dm},uL:{value:Mh.clone()},uKey:{value:xr(Hm)},uSky:{value:xr(Wm)},uBounce:{value:xr(Xm)},uRes:{value:[1,1]},uVig:{value:.32}},x=g3(n?10:12,n?13:16),A=new Br(new Float32Array(ga*2),2),R=new Br(new Float32Array(ga*4),4),I=new Br(new Float32Array(ga*3),3),P=new Br(new Float32Array(ga*4),4);x.setAttribute("iT",A),x.setAttribute("iTile",R),x.setAttribute("iCol",I),x.setAttribute("iMisc",P),x.instanceCount=0;let O=new He({uniforms:T,vertexShader:vm,fragmentShader:ym,side:Hn,alphaToCoverage:!0,transparent:!1}),D=new Je(x,O);D.frustumCulled=!1;let k=new He({uniforms:T,vertexShader:Mm,fragmentShader:Sm,side:Hn,depthTest:!1,depthWrite:!1,transparent:!0,blending:Mo,blendEquation:Zi,blendSrc:bo,blendDst:wo,blendEquationAlpha:So,blendSrcAlpha:ps,blendDstAlpha:ps}),$=new Je(x,k);$.frustumCulled=!1;let G=_3(48),et={...T,uW:{value:.006},uView:{value:Mh.clone()},uUseView:{value:0}},q=new He({uniforms:et,vertexShader:wm,fragmentShader:Tm,side:Hn}),C=new Je(G,q);C.frustumCulled=!1;let nt={...et,uUseView:{value:1},uW:{value:.006}},It=new He({uniforms:nt,vertexShader:Am,fragmentShader:Em,side:Hn,depthTest:!1,depthWrite:!1,transparent:!0,blending:Mo,blendEquation:Zi,blendSrc:bo,blendDst:wo,blendEquationAlpha:So,blendSrcAlpha:ps,blendDstAlpha:ps}),At=new Je(G,It);At.frustumCulled=!1;let Qt={hw:1,hRect:1.25,ySill:1.05,depth:.45};Qt.ySpring=Qt.ySill+Qt.hRect;let Yt={hx:Qt.hw+.16,th:.12,pr:.15},qt=(()=>{let vt=vs(xs.cantera),se=[.85,.6,.62].map(Nt=>Math.pow(Nt,2.2)),Ot=Mh.z;return vt.map((Nt,Ht)=>Nt/(se[Ht]*(Hm[Ht]*Ot+Wm[Ht]*.62+Xm[Ht]*.5)))})(),Y={...T,uStone:{value:u.texture},uShA:{value:w.texture},uShB:{value:y.texture},uLightVP:{value:b},uWin:{value:[0,Qt.ySill,Qt.ySpring,Qt.hw]},uSill:{value:[Yt.hx,Yt.th,Yt.pr,Qt.depth]},uAlb:{value:xr(qt)},uShOn:{value:1},uSoft:{value:.18},uIsJamb:{value:0}},j=new He({uniforms:Y,vertexShader:Bo,fragmentShader:td}),gt=new Nn;gt.setAttribute("position",new en(new Float32Array([-40,-30,0,40,-30,0,40,40,0,-40,40,0]),3)),gt.setAttribute("normal",new en(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),3)),gt.setIndex([0,1,2,0,2,3]);let Vt=new Je(gt,j);Vt.frustumCulled=!1;let xt=new He({uniforms:{...Y,uIsJamb:{value:1}},vertexShader:Bo,fragmentShader:td}),Gt=new Je(x3(Qt.hw,Qt.ySill,Qt.ySpring,Qt.depth,Yt),xt),Mt={x0:-3.8,x1:3.8,y0:0,y1:3.6,z0:-5.6,z1:-Qt.depth},bt={x0:-2.3,x1:2.3,h:1.02,zf:Mt.z0+1.6,depth:.65},Wt={uMark:{value:d},uMarkRect:{value:[-1,1.6,2,.4]},uMin:{value:new z(Mt.x0,Mt.y0,Mt.z0)},uMax:{value:new z(Mt.x1,Mt.y1,Mt.z1)},uYellow:{value:xr(vs(xs.yellowWall))},uPinkWall:{value:xr(vs(xs.pinkWall))},uWhite:{value:xr(vs(xs.white))},uExpo:{value:.85},uRes:T.uRes,uVig:T.uVig,uWainscot:{value:1.3}},te=new gr(Mt.x1-Mt.x0,Mt.y1-Mt.y0,Mt.z1-Mt.z0);te.translate((Mt.x0+Mt.x1)/2,(Mt.y0+Mt.y1)/2,(Mt.z0+Mt.z1)/2);let Q=new Je(te,new He({uniforms:Wt,vertexShader:Bo,fragmentShader:Rm,side:bn})),re={uPink:{value:xr(vs(xs.counter))},uTop:{value:xr(vs(xs.top))},uH:{value:bt.h},uExpo:Wt.uExpo,uRes:T.uRes,uVig:T.uVig,uFlat:{value:0}},Se=new gr(bt.x1-bt.x0,bt.h,bt.depth);Se.translate((bt.x0+bt.x1)/2,bt.h/2,bt.zf-bt.depth/2);let Be=new Je(Se,new He({uniforms:re,vertexShader:Bo,fragmentShader:Pm})),$t=new Fr;$t.add(Q,Be,Vt,Gt,D,C);let _e=new Fr;_e.add($,At);let F={uTex:{value:w.texture},uDir:{value:[1/m[0],0]}},Re=new Je(f,new He({uniforms:F,vertexShader:jf,fragmentShader:Cm,depthTest:!1,depthWrite:!1}));Re.frustumCulled=!1;let Xt=new Fr;Xt.add(Re);let E=new Dn(40,1,.05,80),_=null,B=[];function H(vt,se){let Ot=vt/se,Nt=e?e():null,Ht=Ot<.9,de=Ht?50:36,ce=Ht?50:38,ae=Math.tan(de*Math.PI/360),We,ye,ze;if(Ht)We=.54,ye=.5,ze=Nt?Math.min(.7,(Nt.top-14)/se):.64;else{We=Math.min(.3,.34/Ot);let ee=Nt?Nt.right/vt:.46;ye=Math.min(.8,ee+(1-ee)*.5),ze=Nt?Math.min(.93,Nt.bottom/se):.9}let Ue=2*Qt.hw/We,Pe=Ue/Ot,Fe=Pe/(2*ae),Qe=-(ye-.5)*Ue,wn=Qt.ySill-(.5-ze)*Pe,ji=Ht?[.08,.155,.23,.305]:[.09,.18,.27,.35],rn=Ht?.03:.045,Xe=[.35,.6,.85,1.1],Fn=Ht?vt/4.4:Math.max(84,Math.min(132,vt*.078));B.length=0;let Bi=[],M=["dalia","L","A","zacatecas","Z","A","C","A","T","E","C","A","N","A","dalia"],N=Ht?M.slice(1,14):M,X=0;for(let ee=0;ee<4;ee++){let Zt=Xe[ee],nn=(Fe-Zt)/Fe,Ve=Ue*nn/2,Zn=Xn=>wn+(.5-Xn)*Pe*nn,vr=Zn(ji[ee]),we=Zn(ji[ee]+rn),Ie=Ve*1.3,Te=(vr-we)/(Ve*Ve)*Ie*Ie,Wn=we+Te,Jn=ee===3,xa=(Jn?Math.min(Fn*(Ht?1:.92),vt*(Ht?.975:.93)/N.length):Fn*(1-ee*.04))/vt*Ue*nn,Th=xa*(Jn?.9:.86),id=Th*1.25,Ah=Jn?Math.ceil(N.length/2):0,Qo=Qe+(Jn&&N.length%2?xa/2:0),Km=wn+Pe*nn/2-Wn+id*1.6+.6,jm=[.1,.07,.04,.01][ee];for(let Xn of[-1,1]){let Eh=new z(Qo+Xn*Ie,Wn,Zt),Ch=new z(Qo,Wn-Te,Zt),Lh=new z(Qo+Xn*Ie/2,Wn-Te,Zt),Vo=96,va=[0],rd=Z(Eh,Lh,Ch,1),sd=0;for(let yn=1;yn<=Vo;yn++){let un=Z(Eh,Lh,Ch,1-yn/Vo);sd+=un.distanceTo(rd),rd=un,va.push(sd)}let ad=yn=>{for(let un=1;un<=Vo;un++)if(va[un]>=yn){let Ms=(yn-va[un-1])/(va[un]-va[un-1]);return 1-(un-1+Ms)/Vo}return 0},tg=B.length;B.push({i:ee,side:Xn,A0:Eh,C0:Lh,E0:Ch,S:Te,Wd:Ie,z:Zt,lift:Km,x0:Qo,Y:Wn,st:jm,hv:Ve});let ya=[];if(Jn){let yn=N.slice(0,Ah).reverse(),un=N.slice(Ah);ya.push(...Xn<0?yn:un);let Ms=Math.ceil(Ve/xa)+1-ya.length;for(let ki=0;ki<Ms;ki++)ya.push(yh[(ki*3+(Xn>0?1:4))%yh.length])}else{let yn=Math.ceil(Ve/xa)+1;for(let un=0;un<yn;un++)ya.push(yh[(un*5+ee*3+(Xn>0?2:0))%yh.length])}let eg=(Jn&&N.length%2,0);ya.forEach((yn,un)=>{let Ms=(un+.5)*xa+eg,ki=ad(Ms-Th/2),Ss=ad(Ms+Th/2),ng=typeof yn=="number"?yn:wi[yn],od=typeof yn=="string"&&yn.length===1,Rh;if(od){let sg=N.indexOf(yn)+(Xn>0?Ah:0)+un;Rh=Gm[sg%Gm.length]}else Rh=Vm[X++%Vm.length];let ig=Xn<0?Ss:ki,rg=Xn<0?ki:Ss;Bi.push({ta:(Xn<0,Math.min(ki,Ss)),tb:(Xn<0,Math.max(ki,Ss)),side:Xn,tile:ng,col:vs(xs[Rh]),hs:tg,fh:id,isLetter:od,ta2:ig,tb2:rg})})}}Bi.forEach((ee,Zt)=>{if(Zt>=ga)return;let nn=ee.side<0?ee.ta:ee.tb,Ve=ee.side<0?ee.tb:ee.ta;A.array[Zt*2]=nn,A.array[Zt*2+1]=Ve;let Zn=km(ee.tile);R.array.set(Zn,Zt*4),I.array.set(ee.col,Zt*3),P.array.set([ee.hs,ct(Math.sin(Zt*91.7+3.1)*4375.5),ee.fh,ee.isLetter?1:0],Zt*4)}),x.instanceCount=Math.min(ga,Bi.length),A.needsUpdate=R.needsUpdate=I.needsUpdate=P.needsUpdate=!0;let V=Math.tan(ce*Math.PI/360),W=Ht?.6:.62,_t=Ht?1.9:2.6,Tt=bt.h+(W-.5)*2*_t*V,yt=bt.zf+_t,Lt=yt-Mt.z0,ne=Tt+(.5-(Ht?.31:.33))*2*Lt*V,oe=Math.min(2.5,(Ht?.86:.5)*2*Lt*V*Ot),Rt=oe*230/1087;Wt.uMarkRect.value=[-oe/2,ne-Rt/2,oe,Rt],_={W:vt,H:se,a:Ot,portrait:Ht,fov0:de,fov1:ce,D:Fe,cx:Qe,cy:wn,visW:Ue,visH:Pe,ycam1:Tt,zcam1:yt,yWinMid:Qt.ySill+.85},T.uPtrR.value=Ue*.07,et.uW.value=Math.max(.0035,Ue*.0011);let xe=new z(Qe,wn,0);S.position.copy(xe).addScaledVector(Mh,20),S.up.set(0,1,0),S.lookAt(xe),S.updateMatrixWorld();let Ke=S.matrixWorldInverse,Ce=1e9,be=-1e9,sn=1e9,wt=-1e9;for(let[ee,Zt,nn]of[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,1,1.3],[1,1,1.3]]){let Ve=new z(Qe+ee*Ue*.6,wn+Zt*Pe*.6,nn).applyMatrix4(Ke);Ce=Math.min(Ce,Ve.x),be=Math.max(be,Ve.x),sn=Math.min(sn,Ve.y),wt=Math.max(wt,Ve.y)}S.left=Ce,S.right=be,S.top=wt,S.bottom=sn,S.updateProjectionMatrix(),b.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse)}function Z(vt,se,Ot,Nt){let Ht=1-Nt;return new z().addScaledVector(vt,Ht*Ht).addScaledVector(se,2*Ht*Nt).addScaledVector(Ot,Nt*Nt)}function ct(vt){return vt-Math.floor(vt)}let at=new z,K=new z,tt=(vt,se,Ot,Nt,Ht,de)=>{let ce=1-Ht;return de.set(0,0,0).addScaledVector(vt,ce*ce*ce).addScaledVector(se,3*ce*ce*Ht).addScaledVector(Ot,3*ce*Ht*Ht).addScaledVector(Nt,Ht*Ht*Ht)},dt=new z,Et=new z,pt=new z,ft=new z,lt=new z,Dt=new z,kt=new z,U=new z;function ut(vt){B.forEach((Nt,Ht)=>{let de=qm(_a(vt,Nt.st,Nt.st+.34)),ce=1-Math.pow(1-de,1.6),ae=Math.pow(de,1.25),We=T.uA.value[Ht],ye=T.uC.value[Ht],ze=T.uE.value[Ht];We.set(Nt.A0.x+Nt.side*Nt.Wd*.1*ae,Nt.A0.y+Nt.lift*ae,Nt.z),ze.set(Nt.x0+Nt.side*Nt.Wd*.72*ce,Nt.E0.y+(Nt.S+Nt.lift*1.15)*ae,Nt.z);let Ue=Nt.S/2*(1-.5*de)+Nt.S*.35*Math.sin(Math.PI*de);ye.set((We.x+ze.x)/2,(We.y+ze.y)/2-Ue,Nt.z+.35*Math.sin(Math.PI*de)),T.uFl.value[Ht]=1+1.9*Math.sin(Math.PI*de)});let se=qm(_a(vt,.03,.97));dt.set(_.cx,_.cy,_.D),Et.set(ys(_.cx,0,.55),ys(_.cy,_.yWinMid,.75),_.D*.32),pt.set(0,_.yWinMid-.1,-.7),ft.set(0,_.ycam1,_.zcam1),tt(dt,Et,pt,ft,se,E.position),lt.set(_.cx,_.cy,0),Dt.set(ys(_.cx,0,.8),ys(_.cy,_.yWinMid,.8),-1.5),kt.set(0,_.yWinMid-.15,Mt.z0),U.set(0,_.ycam1,Mt.z0),tt(lt,Dt,kt,U,se,at),at.y+=Math.sin(Math.PI*_a(vt,0,.32))*.5,E.lookAt(at),E.fov=ys(_.fov0,_.fov1,se),E.updateProjectionMatrix(),Wt.uExpo.value=ys(.8,1,ed(_a(vt,.45,.8))),re.uFlat.value=ed(_a(vt,.85,1)),T.uVig.value=ys(.32,.18,ed(_a(vt,.5,1)));let Ot=vt<.62;D.visible=C.visible=Ot}let J=0,ht=0,mt=1;function it(vt){let se=Math.max(1,t.clientWidth),Ot=Math.max(1,t.clientHeight);return!vt&&se===J&&Math.abs(Ot-ht)<160?!1:(J=se,ht=Ot,mt=Math.min(window.devicePixelRatio||1,n?1.5:2),s.setPixelRatio(mt),s.setSize(J,ht,!1),E.aspect=J/ht,T.uRes.value=[J*mt,ht*mt],H(J,ht),!0)}let ot=0;function rt(vt){ot=vt}function Ut(vt){s.info.reset(),T.uTime.value=vt,ut(ot),D.visible?(s.setClearColor(16777215,1),s.setRenderTarget(w),s.clear(),s.render(_e,S),F.uTex.value=w.texture,F.uDir.value=[2.2/m[0],0],s.setRenderTarget(L),s.render(Xt,g),F.uTex.value=L.texture,F.uDir.value=[0,2.2/m[1]],s.setRenderTarget(y),s.render(Xt,g),Y.uShOn.value=1):Y.uShOn.value=0,s.setRenderTarget(null),s.setClearColor(15182254,1),s.render($t,E)}let st=new z;function zt(vt,se,Ot){st.set(vt,se,.5).unproject(E),T.uPtrO.value.copy(E.position),T.uPtrD.value.copy(st.sub(E.position).normalize()),T.uPtrAmt.value=Ot}function Ct(vt){T.uWind.value=vt}return it(!0),{renderer:s,resize:it,render:Ut,setP:rt,setPointerRay:zt,setWind:Ct,info:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,flags:x.instanceCount,dpr:mt,size:[J,ht],shadow:m}),dispose(){s.dispose(),[h,d,u,w,L,y].forEach(vt=>vt.dispose())},get layout(){return _}}}var Jm=r=>Math.min(1,Math.max(0,r)),Sh=r=>(r=Jm(r),r*r*(3-2*r)),bh=(r,t,e)=>Jm((r-t)/(e-t));function Zm(){let r=document.querySelector(".hero--b[data-hero]");if(!r||r.__heroB)return;r.__heroB=!0;let t=r.querySelector(".hero-stage"),e=r.querySelector(".hero-b__gl"),n=r.querySelector(".hero-b__copy"),i=r.querySelector(".hero-b__outro"),s=r.querySelector(".hero-b__seam"),a=new URLSearchParams(location.search),o=a.has("freeze"),l=matchMedia("(prefers-reduced-motion: reduce)"),c=matchMedia("(max-width: 719px)").matches||matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<720,h={p:0,target:0,ready:!1,static:!1};window.__heroB=h;let d=null,u=null,f=0;function g(I){h.static=I||!0,cancelAnimationFrame(f),f=0;let P=r.getBoundingClientRect().top+window.scrollY,O=r.offsetHeight,D=window.scrollY;r.classList.add("is-static"),r.classList.remove("is-gl"),u&&(u.kill(),u=null);let k=O-r.offsetHeight;if(k>0&&D>P&&window.scrollTo(0,D>P+O-innerHeight?D-k:P),window.ScrollTrigger&&ie.refresh(),d){try{d.dispose()}catch{}d=null}}if(l.matches||a.has("static")||!e||!Ym()){g(l.matches?"reduced-motion":"no-webgl");return}function v(I){let P=1-Sh(bh(I,.03,.17));if(n.style.opacity=P.toFixed(3),n.style.transform=`translate3d(0, ${(-56*Sh(bh(I,.02,.2))).toFixed(1)}px, 0)`,n.style.visibility=P<.01?"hidden":"",i){let O=Sh(bh(I,.86,.97));i.style.opacity=O.toFixed(3),i.style.transform=`translate3d(0, ${((1-O)*22).toFixed(1)}px, 0)`,i.style.visibility=O<.01?"hidden":"",i.toggleAttribute("aria-hidden",O<.5)}s&&(s.style.opacity=Sh(bh(I,.88,1)).toFixed(3))}let p={x:0,y:0,on:!1,amt:0,speed:0,last:0,lx:0,ly:0,touch:0},m=1,w=0;t.addEventListener("pointermove",I=>{let P=t.getBoundingClientRect(),O=(I.clientX-P.left)/P.width*2-1,D=-((I.clientY-P.top)/P.height*2-1),k=performance.now(),$=Math.max(8,k-p.last),G=Math.hypot(I.clientX-p.lx,I.clientY-p.ly);p.speed=Math.min(1,p.speed*.5+G/$*.25),p.last=k,p.lx=I.clientX,p.ly=I.clientY,p.x=O,p.y=D,p.on=!0,I.pointerType==="touch"&&(p.touch=1)},{passive:!0}),t.addEventListener("pointerdown",I=>{if(I.pointerType!=="touch")return;let P=t.getBoundingClientRect();p.x=(I.clientX-P.left)/P.width*2-1,p.y=-((I.clientY-P.top)/P.height*2-1),p.on=!0,p.touch=1,p.speed=.8},{passive:!0}),t.addEventListener("pointerleave",()=>{p.on=!1},{passive:!0}),ir.registerPlugin(ie),ie.config({ignoreMobileResize:!0});let L=!1,y=!0,S=!document.hidden,b=0,T=0;function x(I){if(f=0,!L||!d)return;let P=Math.min(.05,b?(I-b)/1e3:.016);b=I;let O=1-Math.exp(-P*11);h.p+=(h.target-h.p)*O,Math.abs(h.target-h.p)<1e-4&&(h.p=h.target),w*=Math.exp(-P*2.2);let D=1+Math.min(1.6,Math.abs(w)/1600);m+=(D-m)*(1-Math.exp(-P*3)),p.speed*=Math.exp(-P*3.5),p.touch*=Math.exp(-P*1.6);let k=p.on?p.touch>.05?.9*p.touch:.3+.9*p.speed:0;p.amt+=(k-p.amt)*(1-Math.exp(-P*6)),T=o?2:T+P,d.setP(h.p),d.setWind(o?1:m),d.render(T),o||d.setPointerRay(p.x,p.y,p.amt),v(h.p),h.ready||(h.ready=!0,r.classList.add("is-gl")),f=requestAnimationFrame(x)}function A(){let I=y&&S&&!!d&&!h.static;I&&!L?(L=!0,b=0,f=requestAnimationFrame(x)):!I&&L&&(L=!1,cancelAnimationFrame(f),f=0)}h.settled=()=>h.ready&&Math.abs(h.target-h.p)<1e-4,h.info=()=>d?d.info():null,e.addEventListener("webglcontextlost",I=>{I.preventDefault(),g("context-lost")},!1),$m({canvas:e,stage:t,phone:c,getCopyRect:()=>{if(!n)return null;let I=t.getBoundingClientRect(),P=n.getBoundingClientRect(),O=n.style.transform;n.style.transform="none";let D=n.getBoundingClientRect();return n.style.transform=O,{left:D.left-I.left,right:D.right-I.left,top:D.top-I.top,bottom:D.bottom-I.top,width:P.width}}}).then(I=>{if(d=I,h.static){I.dispose(),d=null;return}u=ie.create({trigger:r,start:"top top",end:"bottom bottom",onUpdate:O=>{h.target=O.progress,w=O.getVelocity()},onRefresh:O=>{h.target=O.progress}}),h.target=u.progress,h.p=(a.has("p"),h.target),new IntersectionObserver(O=>{y=O[0].isIntersecting,A()},{rootMargin:"64px"}).observe(r),document.addEventListener("visibilitychange",()=>{S=!document.hidden,A()});let P=0;window.addEventListener("resize",()=>{clearTimeout(P),P=setTimeout(()=>{d&&d.resize()&&ie.refresh()},120)}),l.addEventListener&&l.addEventListener("change",O=>{O.matches&&g("reduced-motion")}),A()}).catch(I=>{console.warn("[hero-b] falling back to static frame:",I),g("init-failed")})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zm,{once:!0}):Zm();})();
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

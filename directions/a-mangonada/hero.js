(()=>{var Ip=0,Yu=1,Lp=2;var Eo=1,Dp=2,xa=3,Yr=0,gn=1,Jn=2,Ji=0,va=1,Ao=2,Zu=3,Ju=4,Np=5;var ys=100,Up=101,Fp=102,Op=103,Bp=104,zp=200,kp=201,Vp=202,Gp=203,$u=204,Ku=205,Hp=206,Qp=207,Wp=208,Xp=209,qp=210,Yp=211,Zp=212,Jp=213,$p=214,ql=0,Yl=1,Zl=2,ca=3,Jl=4,$l=5,Kl=6,jl=7,Ec=0,Kp=1,jp=2,Fi=0,ju=1,tf=2,ef=3,nf=4,rf=5,sf=6,Co=7;var af=300,Zr=301,Ms=302,Ac=303,Cc=304,Ro=306,tc=1e3,Qi=1001,ec=1002,hn=1003,tm=1004;var Po=1005;var nn=1006,Rc=1007;var $i=1008;var $n=1009,of=1010,lf=1011,ya=1012,Pc=1013,Oi=1014,Mi=1015,Bi=1016,Ic=1017,Lc=1018,Ma=1020,cf=35902,hf=35899,uf=1021,ff=1022,Si=1023,Wi=1026,Jr=1027,Dc=1028,Nc=1029,$r=1030,Uc=1031;var Fc=1033,Io=33776,Lo=33777,Do=33778,No=33779,Oc=35840,Bc=35841,zc=35842,kc=35843,Vc=36196,Gc=37492,Hc=37496,Qc=37488,Wc=37489,Uo=37490,Xc=37491,qc=37808,Yc=37809,Zc=37810,Jc=37811,$c=37812,Kc=37813,jc=37814,th=37815,eh=37816,nh=37817,ih=37818,rh=37819,sh=37820,ah=37821,oh=36492,lh=36494,ch=36495,hh=36283,uh=36284,Fo=36285,fh=36286;var oo=2300,nc=2301,Wl=2302,ku=2303,Vu=2400,Gu=2401,Hu=2402;var em=3200;var Oo=0,nm=1,xr="",Fn="srgb",lo="srgb-linear",co="linear",Me="srgb";var Xl=7680;var im=519,rm=512,sm=513,am=514,dh=515,om=516,lm=517,ph=518,cm=519,hm=35044,mh=35048;var df="300 es",Ni=2e3,ha=2001;function r_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function s_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function um(){let r=ho("canvas");return r.style.display="block",r}var lp={},ua=null;function pf(...r){let t="THREE."+r.shift();ua?ua("log",t,...r):console.log(t,...r)}function fm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Zt(...r){r=fm(r);let t="THREE."+r.shift();if(ua)ua("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function $t(...r){r=fm(r);let t="THREE."+r.shift();if(ua)ua("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function gs(...r){let t=r.join(" ");t in lp||(lp[t]=!0,Zt(...r))}function dm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var pm={[ql]:Yl,[Zl]:Kl,[Jl]:jl,[ca]:$l,[Yl]:ql,[Kl]:Zl,[jl]:Jl,[$l]:ca},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _u=Math.PI/180,ic=180/Math.PI;function Bo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ue(r,t,e){return Math.max(t,Math.min(e,r))}function a_(r,t){return(r%t+t)%t}function xu(r,t,e){return(1-e)*r+e*t}function to(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vf=class vf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vf.prototype.isVector2=!0;var Yt=vf,Yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yf=class yf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vu.copy(this).projectOnVector(t),this.sub(vu)}reflect(t){return this.sub(vu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yf.prototype.isVector3=!0;var H=yf,vu=new H,cp=new Yn,Mf=class Mf{constructor(t,e,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],A=i[4],v=i[7],S=i[2],b=i[5],T=i[8];return s[0]=a*_+o*M+c*S,s[3]=a*p+o*A+c*b,s[6]=a*m+o*v+c*T,s[1]=l*_+h*M+d*S,s[4]=l*p+h*A+d*b,s[7]=l*m+h*v+d*T,s[2]=u*_+f*M+g*S,s[5]=u*p+f*A+g*b,s[8]=u*m+f*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,f=l*s-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mf.prototype.isMatrix3=!0;var jt=Mf,yu=new jt,hp=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){let r={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Me&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(i.r=la(i.r),i.g=la(i.g),i.b=la(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?co:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[lo]:{primaries:t,whitePoint:n,transfer:co,toXYZ:hp,fromXYZ:up,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:hp,fromXYZ:up,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}var de=o_();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function la(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ys,rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ys===void 0&&(Ys=ho("canvas")),Ys.width=t.width,Ys.height=t.height;let i=Ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l_=0,fa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Mu(i[a].image)):s.push(Mu(i[a]))}else s=Mu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Mu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var c_=0,Su=new H,On=class r extends Xi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Qi,i=Qi,s=nn,a=$i,o=Si,c=$n,l=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Bo(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=af;On.DEFAULT_ANISOTROPY=1;var Sf=class Sf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,v=(f+1)/2,S=(m+1)/2,b=(h+u)/4,T=(d+_)/4,x=(g+p)/4;return A>v&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=T/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=x/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;var Fe=Sf,sc=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new On(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new fa(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tc=class Tc{constructor(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p)}set(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Zs.setFromMatrixColumn(t,0).length(),s=1/Zs.setFromMatrixColumn(t,1).length(),a=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h_,t,u_)}lookAt(t,e,n){let i=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ur.crossVectors(n,ii),Ur.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ur.crossVectors(n,ii)),Ur.normalize(),Tl.crossVectors(ii,Ur),i[0]=Ur.x,i[4]=Tl.x,i[8]=ii.x,i[1]=Ur.y,i[5]=Tl.y,i[9]=ii.y,i[2]=Ur.z,i[6]=Tl.z,i[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],A=n[7],v=n[11],S=n[15],b=i[0],T=i[4],x=i[8],w=i[12],R=i[1],D=i[5],L=i[9],N=i[13],C=i[2],B=i[6],Q=i[10],G=i[14],K=i[3],Y=i[7],I=i[11],tt=i[15];return s[0]=a*b+o*R+c*C+l*K,s[4]=a*T+o*D+c*B+l*Y,s[8]=a*x+o*L+c*Q+l*I,s[12]=a*w+o*N+c*G+l*tt,s[1]=h*b+d*R+u*C+f*K,s[5]=h*T+d*D+u*B+f*Y,s[9]=h*x+d*L+u*Q+f*I,s[13]=h*w+d*N+u*G+f*tt,s[2]=g*b+_*R+p*C+m*K,s[6]=g*T+_*D+p*B+m*Y,s[10]=g*x+_*L+p*Q+m*I,s[14]=g*w+_*N+p*G+m*tt,s[3]=M*b+A*R+v*C+S*K,s[7]=M*T+A*D+v*B+S*Y,s[11]=M*x+A*L+v*Q+S*I,s[15]=M*w+A*N+v*G+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],M=c*f-l*u,A=o*f-l*d,v=o*u-c*d,S=a*f-l*h,b=a*u-c*h,T=a*d-o*h;return e*(_*M-p*A+m*v)-n*(g*M-p*S+m*b)+i*(g*A-_*S+m*T)-s*(g*v-_*b+p*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=e*o-n*a,A=e*c-i*a,v=e*l-s*a,S=n*c-i*o,b=n*l-s*o,T=i*l-s*c,x=h*_-d*g,w=h*p-u*g,R=h*m-f*g,D=d*p-u*_,L=d*m-f*_,N=u*m-f*p,C=M*N-A*L+v*D+S*R-b*w+T*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return t[0]=(o*N-c*L+l*D)*B,t[1]=(i*L-n*N-s*D)*B,t[2]=(_*T-p*b+m*S)*B,t[3]=(u*b-d*T-f*S)*B,t[4]=(c*R-a*N-l*w)*B,t[5]=(e*N-i*R+s*w)*B,t[6]=(p*v-g*T-m*A)*B,t[7]=(h*T-u*v+f*A)*B,t[8]=(a*L-o*R+l*x)*B,t[9]=(n*R-e*L-s*x)*B,t[10]=(g*b-_*v+m*M)*B,t[11]=(d*v-h*b-f*M)*B,t[12]=(o*w-a*D-c*x)*B,t[13]=(e*D-n*w+i*x)*B,t[14]=(_*A-g*S-p*M)*B,t[15]=(h*S-d*A+u*M)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,M=c*l,A=c*h,v=c*d,S=n.x,b=n.y,T=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+v)*S,i[2]=(g-A)*S,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+m))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(g+A)*T,i[9]=(p-M)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Zs.set(i[0],i[1],i[2]).length(),o=Zs.set(i[4],i[5],i[6]).length(),c=Zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Pi.copy(this);let l=1/a,h=1/o,d=1/c;return Pi.elements[0]*=l,Pi.elements[1]*=l,Pi.elements[2]*=l,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=d,Pi.elements[9]*=d,Pi.elements[10]*=d,e.setFromRotationMatrix(Pi),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,s,a,o=Ni,c=!1){let l=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Ni)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ha)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ni,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Ni)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ha)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Tc.prototype.isMatrix4=!0;var Se=Tc,Zs=new H,Pi=new Se,h_=new H(0,0,0),u_=new H(1,1,1),Ur=new H,Tl=new H,ii=new H,fp=new Se,dp=new Yn,yi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dp.setFromEuler(this),this.setFromQuaternion(dp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f_=0,pp=new H,Js=new Yn,cr=new Se,El=new H,eo=new H,d_=new H,p_=new Yn,mp=new H(1,0,0),gp=new H(0,1,0),_p=new H(0,0,1),xp={type:"added"},m_={type:"removed"},$s={type:"childadded",child:null},bu={type:"childremoved",child:null},mn=class r extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new H,e=new yi,n=new Yn,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(mp,t)}rotateY(t){return this.rotateOnAxis(gp,t)}rotateZ(t){return this.rotateOnAxis(_p,t)}translateOnAxis(t,e){return pp.copy(t).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mp,t)}translateY(t){return this.translateOnAxis(gp,t)}translateZ(t){return this.translateOnAxis(_p,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?El.copy(t):El.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(eo,El,this.up):cr.lookAt(El,eo,this.up),this.quaternion.setFromRotationMatrix(cr),i&&(cr.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(cr),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xp),$s.child=t,this.dispatchEvent($s),$s.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m_),bu.child=t,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xp),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,d_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,p_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new H(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},g_={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function wu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=a_(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=wu(a,s,t+1/3),this.g=wu(a,s,t),this.b=wu(a,s,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return de.workingToColorSpace(bn.copy(this),t),Math.round(ue(bn.r*255,0,255))*65536+Math.round(ue(bn.g*255,0,255))*256+Math.round(ue(bn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Fn){de.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(Al);let n=xu(Fr.h,Al.h,e),i=xu(Fr.s,Al.s,e),s=xu(Fr.l,Al.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ct;Ct.NAMES=mm;var _s=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ii=new H,hr=new H,Tu=new H,ur=new H,Ks=new H,js=new H,vp=new H,Eu=new H,Au=new H,Cu=new H,Ru=new Fe,Pu=new Fe,Iu=new Fe,kr=class r{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ii.subVectors(t,e),i.cross(Ii);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ii.subVectors(i,e),hr.subVectors(n,e),Tu.subVectors(t,e);let a=Ii.dot(Ii),o=Ii.dot(hr),c=Ii.dot(Tu),l=hr.dot(hr),h=hr.dot(Tu),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,ur)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ur.x),c.addScaledVector(a,ur.y),c.addScaledVector(o,ur.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Ru.setScalar(0),Pu.setScalar(0),Iu.setScalar(0),Ru.fromBufferAttribute(t,e),Pu.fromBufferAttribute(t,n),Iu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ru,s.x),a.addScaledVector(Pu,s.y),a.addScaledVector(Iu,s.z),a}static isFrontFacing(t,e,n,i){return Ii.subVectors(n,e),hr.subVectors(t,e),Ii.cross(hr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ii.cross(hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Ks.subVectors(i,n),js.subVectors(s,n),Eu.subVectors(t,n);let c=Ks.dot(Eu),l=js.dot(Eu);if(c<=0&&l<=0)return e.copy(n);Au.subVectors(t,i);let h=Ks.dot(Au),d=js.dot(Au);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ks,a);Cu.subVectors(t,s);let f=Ks.dot(Cu),g=js.dot(Cu);if(g>=0&&f<=g)return e.copy(s);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(js,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return vp.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(vp,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Ks,a).addScaledVector(js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qi=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Li):Li.fromBufferAttribute(s,a),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Rl.subVectors(this.max,no),ta.subVectors(t.a,no),ea.subVectors(t.b,no),na.subVectors(t.c,no),Or.subVectors(ea,ta),Br.subVectors(na,ea),fs.subVectors(ta,na);let e=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-fs.z,fs.y,Or.z,0,-Or.x,Br.z,0,-Br.x,fs.z,0,-fs.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-fs.y,fs.x,0];return!Lu(e,ta,ea,na,Rl)||(e=[1,0,0,0,1,0,0,0,1],!Lu(e,ta,ea,na,Rl))?!1:(Pl.crossVectors(Or,Br),e=[Pl.x,Pl.y,Pl.z],Lu(e,ta,ea,na,Rl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fr=[new H,new H,new H,new H,new H,new H,new H,new H],Li=new H,Cl=new qi,ta=new H,ea=new H,na=new H,Or=new H,Br=new H,fs=new H,no=new H,Rl=new H,Pl=new H,ds=new H;function Lu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ds.fromArray(r,s);let o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ke=new H,Il=new Yt,__=0,si=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Il.fromBufferAttribute(this,e),Il.applyMatrix3(t),this.setXY(e,Il.x,Il.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=to(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=to(e,this.array)),e}setX(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=to(e,this.array)),e}setY(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=to(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=to(e,this.array)),e}setW(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends si{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends si{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends si{constructor(t,e,n){super(new Float32Array(t),e,n)}},x_=new qi,io=new H,Du=new H,Vr=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):x_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);let e=io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Du.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Du)),this.expandByPoint(io.copy(t.center).sub(Du))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},v_=0,vi=new Se,Nu=new mn,ia=new H,ri=new qi,ro=new qi,cn=new H,Bn=class r extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r_(t)?mo:po)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return Nu.lookAt(t),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ri.min,ro.min),ri.expandByPoint(cn),cn.addVectors(ri.max,ro.max),ri.expandByPoint(cn)):(ri.expandByPoint(ro.min),ri.expandByPoint(ro.max))}ri.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)cn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)cn.fromBufferAttribute(o,l),c&&(ia.fromBufferAttribute(t,l),cn.add(ia)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new H,c[x]=new H;let l=new H,h=new H,d=new H,u=new Yt,f=new Yt,g=new Yt,_=new H,p=new H;function m(x,w,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(_),o[w].add(_),o[R].add(_),c[x].add(p),c[w].add(p),c[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,w=M.length;x<w;++x){let R=M[x],D=R.start,L=R.count;for(let N=D,C=D+L;N<C;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new H,v=new H,S=new H,b=new H;function T(x){S.fromBufferAttribute(i,x),b.copy(S);let w=o[x];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(b,w);let D=v.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,w=M.length;x<w;++x){let R=M[x],D=R.start,L=R.count;for(let N=D,C=D+L;N<C;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new H,s=new H,a=new H,o=new H,c=new H,l=new H,h=new H,d=new H;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new si(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Uu=new H,y_=new H,M_=new jt,Di=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Uu.subVectors(n,e).cross(y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Uu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||M_.getNormalMatrix(t),i=this.coplanarPoint(Uu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},S_=0,mr=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=va,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Ku,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Di().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var dr=new H,Fu=new H,Ll=new H,Dl=new H,oc=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dr.copy(this.origin).addScaledVector(this.direction,e),dr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fu.copy(t).add(e).multiplyScalar(.5),Ll.copy(e).sub(t).normalize(),Dl.copy(this.origin).sub(Fu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Ll),o=Dl.dot(this.direction),c=-Dl.dot(Ll),l=Dl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fu).addScaledVector(Ll,u),f}intersectSphere(t,e){if(t.radius<0)return null;dr.subVectors(t.center,this.origin);let n=dr.dot(this.direction),i=dr.dot(dr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(c),S=Math.abs(l),b=Math.abs(h),T,x,w,R,D,L,N,C,B,Q,G,K;if(v>=S&&v>=b?(w=c,L=d,B=g,K=m,c>=0?(T=l,x=h,R=u,D=f,N=_,C=p,Q=M,G=A):(T=h,x=l,R=f,D=u,N=p,C=_,Q=A,G=M)):S>=b?(w=l,L=u,B=_,K=M,l>=0?(T=h,x=c,R=f,D=d,N=p,C=g,Q=A,G=m):(T=c,x=h,R=d,D=f,N=g,C=p,Q=m,G=A)):(w=h,L=f,B=p,K=A,h>=0?(T=c,x=l,R=d,D=u,N=g,C=_,Q=m,G=M):(T=l,x=c,R=u,D=d,N=_,C=g,Q=M,G=m)),w===0)return null;let Y=T/w,I=x/w,tt=1/w,Mt=R-Y*L,Tt=D-I*L,Ot=N-Y*B,Ht=C-I*B,Wt=Q-Y*K,J=G-I*K,nt=Wt*Ht-J*Ot,xt=Mt*J-Tt*Wt,Bt=Ot*Tt-Ht*Mt;if(i){if(nt<0||xt<0||Bt<0)return null}else if((nt<0||xt<0||Bt<0)&&(nt>0||xt>0||Bt>0))return null;let pt=nt+xt+Bt;if(pt===0)return null;let kt=tt*(nt*L+xt*B+Bt*K);return(pt>0?kt<0:kt>0)?null:this.at(kt/pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gr=class extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yp=new Se,ps=new oc,Nl=new Vr,Mp=new H,Ul=new H,Fl=new H,Ol=new H,Ou=new H,Bl=new H,Sp=new H,zl=new H,ge=class extends mn{constructor(t=new Bn,e=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Bl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Ou.fromBufferAttribute(d,t),a?Bl.addScaledVector(Ou,h):Bl.addScaledVector(Ou.sub(e),h))}e.add(Bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),ps.copy(t.ray).recast(t.near),!(Nl.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Nl,Mp)===null||ps.origin.distanceToSquared(Mp)>(t.far-t.near)**2))&&(yp.copy(s).invert(),ps.copy(t.ray).applyMatrix4(yp),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let b=o.getX(v),T=o.getX(v+1),x=o.getX(v+2);i=kl(this,m,t,n,l,h,d,b,T,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=kl(this,a,t,n,l,h,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let b=v,T=v+1,x=v+2;i=kl(this,m,t,n,l,h,d,b,T,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,A=p+1,v=p+2;i=kl(this,a,t,n,l,h,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function b_(r,t,e,n,i,s,a,o){let c;if(t.side===gn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Yr,o),c===null)return null;zl.copy(o),zl.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(zl);return l<e.near||l>e.far?null:{distance:l,point:zl.clone(),object:r}}function kl(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Ul),r.getVertexPosition(c,Fl),r.getVertexPosition(l,Ol);let h=b_(r,t,e,n,Ul,Fl,Ol,Sp);if(h){let d=new H;kr.getBarycoord(Sp,Ul,Fl,Ol,d),i&&(h.uv=kr.getInterpolatedAttribute(i,o,c,l,d,new Yt)),s&&(h.uv1=kr.getInterpolatedAttribute(s,o,c,l,d,new Yt)),a&&(h.normal=kr.getInterpolatedAttribute(a,o,c,l,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};kr.getNormal(Ul,Fl,Ol,u.normal),h.face=u,h.barycoord=d}return h}var go=class extends On{constructor(t=null,e=1,n=1,i,s,a,o,c,l=hn,h=hn,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class extends si{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ra=new Se,bp=new Se,Vl=[],wp=new qi,w_=new Se,so=new ge,ao=new Vr,Gr=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,w_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ra),wp.copy(t.boundingBox).applyMatrix4(ra),this.boundingBox.union(wp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ra),ao.copy(t.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),t.ray.intersectsSphere(ao)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ra),bp.multiplyMatrices(n,ra),so.matrixWorld=bp,so.raycast(t,Vl);for(let a=0,o=Vl.length;a<o;a++){let c=Vl[a];c.instanceId=s,c.object=this,e.push(c)}Vl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(i*this.count),i,this.count,Dc,Mi));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Vr,T_=new Yt(.5,.5),Gl=new H,pa=class{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],M=s[12],A=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-a,f-h,m-g,S-M).normalize(),i[1].setComponents(l+a,f+h,m+g,S+M).normalize(),i[2].setComponents(l+o,f+d,m+_,S+A).normalize(),i[3].setComponents(l-o,f-d,m-_,S-A).normalize(),n)i[4].setComponents(c,u,p,v).normalize(),i[5].setComponents(l-c,f-u,m-p,S-v).normalize();else if(i[4].setComponents(l-c,f-u,m-p,S-v).normalize(),e===Ni)i[5].setComponents(l+c,f+u,m+p,S+v).normalize();else if(e===ha)i[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=T_.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Gl.x=i.normal.x>0?t.max.x:t.min.x,Gl.y=i.normal.y>0?t.max.y:t.min.y,Gl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _o=class extends On{constructor(t=[],e=Zr,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ma=class extends On{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hr=class extends On{constructor(t,e,n=Oi,i,s,a,o=hn,c=hn,l,h=Wi,d=1){if(h!==Wi&&h!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lc=class extends Hr{constructor(t,e=Oi,n=Zr,i,s,a=hn,o=hn,c,l=Wi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xo=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class r extends Bn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function g(_,p,m,M,A,v,S,b,T,x,w){let R=v/T,D=S/x,L=v/2,N=S/2,C=b/2,B=T+1,Q=x+1,G=0,K=0,Y=new H;for(let I=0;I<Q;I++){let tt=I*D-N;for(let Mt=0;Mt<B;Mt++){let Tt=Mt*R-L;Y[_]=Tt*M,Y[p]=tt*A,Y[m]=C,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Mt/T),d.push(1-I/x),G+=1}}for(let I=0;I<x;I++)for(let tt=0;tt<T;tt++){let Mt=u+tt+B*I,Tt=u+tt+B*(I+1),Ot=u+(tt+1)+B*(I+1),Ht=u+(tt+1)+B*I;c.push(Mt,Tt,Ht),c.push(Tt,Ot,Ht),K+=6}o.addGroup(f,K,w),f+=K,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ga=class r extends Bn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function M(){let v=new H,S=new H,b=0,T=(e-t)/n;for(let x=0;x<=s;x++){let w=[],R=x/s,D=R*(e-t)+t;for(let L=0;L<=i;L++){let N=L/i,C=N*c+o,B=Math.sin(C),Q=Math.cos(C);S.x=D*B,S.y=-R*n+p,S.z=D*Q,d.push(S.x,S.y,S.z),v.set(B,T,Q).normalize(),u.push(v.x,v.y,v.z),f.push(N,1-R),w.push(g++)}_.push(w)}for(let x=0;x<i;x++)for(let w=0;w<s;w++){let R=_[w][x],D=_[w+1][x],L=_[w+1][x+1],N=_[w][x+1];(t>0||w!==0)&&(h.push(R,D,N),b+=3),(e>0||w!==s-1)&&(h.push(D,L,N),b+=3)}l.addGroup(m,b,0),m+=b}function A(v){let S=g,b=new Yt,T=new H,x=0,w=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let L=0;L<=i;L++){let C=L/i*c+o,B=Math.cos(C),Q=Math.sin(C);T.x=w*Q,T.y=p*R,T.z=w*B,d.push(T.x,T.y,T.z),u.push(0,R,0),b.x=B*.5+.5,b.y=Q*.5*R+.5,f.push(b.x,b.y),g++}for(let L=0;L<i;L++){let N=S+L,C=D+L;v===!0?h.push(C,C+1,N):h.push(C+1,C,N),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cc=class r extends Bn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new H,v=new H,S=new H;for(let b=0;b<e.length;b+=3)f(e[b+0],A),f(e[b+1],v),f(e[b+2],S),c(A,v,S,M)}function c(M,A,v,S){let b=S+1,T=[];for(let x=0;x<=b;x++){T[x]=[];let w=M.clone().lerp(v,x/b),R=A.clone().lerp(v,x/b),D=b-x;for(let L=0;L<=D;L++)L===0&&x===b?T[x][L]=w:T[x][L]=w.clone().lerp(R,L/D)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){let R=Math.floor(w/2);w%2===0?(u(T[x][R+1]),u(T[x+1][R]),u(T[x][R])):(u(T[x][R+1]),u(T[x+1][R+1]),u(T[x+1][R]))}}function l(M){let A=new H;for(let v=0;v<s.length;v+=3)A.x=s[v+0],A.y=s[v+1],A.z=s[v+2],A.normalize().multiplyScalar(M),s[v+0]=A.x,s[v+1]=A.y,s[v+2]=A.z}function h(){let M=new H;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];let v=p(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;a.push(v,1-S)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],v=a[M+2],S=a[M+4],b=Math.max(A,v,S),T=Math.min(A,v,S);b>.9&&T<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,A){let v=M*3;A.x=t[v+0],A.y=t[v+1],A.z=t[v+2]}function g(){let M=new H,A=new H,v=new H,S=new H,b=new Yt,T=new Yt,x=new Yt;for(let w=0,R=0;w<s.length;w+=9,R+=6){M.set(s[w+0],s[w+1],s[w+2]),A.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),b.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),S.copy(M).add(A).add(v).divideScalar(3);let D=p(S);_(b,R+0,M,D),_(T,R+2,A,D),_(x,R+4,v,D)}}function _(M,A,v,S){S<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=S/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Qr=class r extends Bn{constructor(t=[new Yt(0,-.5),new Yt(.5,0),new Yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ue(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,d=new H,u=new Yt,f=new H,g=new H,_=new H,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){let A=n+M*h*i,v=Math.sin(A),S=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*S,a.push(d.x,d.y,d.z),u.x=M/e,u.y=b/(t.length-1),o.push(u.x,u.y);let T=c[3*b+0]*v,x=c[3*b+1],w=c[3*b+0]*S;l.push(T,x,w)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let v=A+M*t.length,S=v,b=v+t.length,T=v+t.length+1,x=v+1;s.push(S,b,x),s.push(T,x,b)}this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},vo=class r extends cc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},_r=class r extends Bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let A=0;A<l;A++){let v=A*d-s;g.push(v,-M,0),_.push(0,0,1),p.push(A/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let A=M+l*m,v=M+l*(m+1),S=M+1+l*(m+1),b=M+1+l*m;f.push(A,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ss(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Tp(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Tp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(r){let t={};for(let e=0;e<r.length;e++){let n=Ss(r[e]);for(let i in n)t[i]=n[i]}return t}function Tp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function E_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var gm={clone:Ss,merge:wn},A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=E_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hc=class extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zi=class extends mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ui=class extends Zi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var yo=class extends mr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Ec,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uc=class extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Bu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Wr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gu:s=t,o=2*e-n;break;case Hu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gu:a=t,c=2*n-e;break;case Hu:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+M*a[l+S]+A*a[c+S]+v*a[d+S];return s}},pc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},mc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gc=class extends Wr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[l+p]*_+a[c+p]*g;return s}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[l+g],p=a[c+g],m=f*u+g*2,M=d[m],A=d[m+1],v=t*u+g*2,S=h[v],b=h[v+1],T=P_(n,e,M,S,i);s[g]=_m(T,_,A,b,p)}return s}};function _m(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function R_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function P_(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=_m(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let c=R_(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var oi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Bu(t.settings)&&(n.settings={inTangents:sa(t.settings.inTangents,Array),outTangents:sa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case nc:e=this.InterpolantFactoryMethodLinear;break;case Wl:e=this.InterpolantFactoryMethodSmooth;break;case ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Bu(this.settings)&&(Ep(this.settings.inTangents,t),Ep(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$t("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){$t("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&s_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){$t("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wl,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Bu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ep(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=nc;var Xr=class extends oi{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=oo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}};_c.prototype.ValueTypeName="color";var xc=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}};xc.prototype.ValueTypeName="number";var vc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Yn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Mo=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends oi{constructor(t,e,n){super(t,e,n)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=oo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends oi{constructor(t,e,n,i){super(t,e,n,i)}};yc.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new Mc,Sc=class{constructor(t){this.manager=t!==void 0?t:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var zu=new Se,Ap=new H,Cp=new H,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ap.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ap),Cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===ha||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(zu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hl=new H,Ql=new Yn,Hi=new H,wo=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hl,Ql,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Ql,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hl,Ql,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Ql,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zr=new H,Rp=new Yt,Pp=new Yt,dn=class extends wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,Rp,Pp),e.subVectors(Pp,Rp)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_u*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qu=class extends bo{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},To=class extends So{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},_a=class extends wo{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wu=class extends bo{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var aa=-90,oa=1,bc=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(aa,oa,t,e);i.layers=this.layers,this.add(i);let s=new dn(aa,oa,t,e);s.layers=this.layers,this.add(s);let a=new dn(aa,oa,t,e);a.layers=this.layers,this.add(a);let o=new dn(aa,oa,t,e);o.layers=this.layers,this.add(o);let c=new dn(aa,oa,t,e);c.layers=this.layers,this.add(c);let l=new dn(aa,oa,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gf="\\[\\]\\.:\\/",I_=new RegExp("["+gf+"]","g"),_f="[^"+gf+"]",L_="[^"+gf.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",_f),N_=/(WCOD+)?/.source.replace("WCOD",L_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),F_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),O_=new RegExp("^"+D_+N_+U_+F_+"$"),B_=["material","materials","bones","map"],Xu=class{constructor(t,e,n){let i=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(t){let e=O_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);B_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Xu;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xb=new Float32Array(1);var bf=class bf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};bf.prototype.isMatrix2=!0;var qu=bf;function xf(r,t,e,n){let i=z_(n);switch(e){case uf:return r*t;case Dc:return r*t/i.components*i.byteLength;case Nc:return r*t/i.components*i.byteLength;case $r:return r*t*2/i.components*i.byteLength;case Uc:return r*t*2/i.components*i.byteLength;case ff:return r*t*3/i.components*i.byteLength;case Si:return r*t*4/i.components*i.byteLength;case Fc:return r*t*4/i.components*i.byteLength;case Io:case Lo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Do:case No:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bc:case kc:return Math.max(r,16)*Math.max(t,8)/4;case Oc:case zc:return Math.max(r,8)*Math.max(t,8)/2;case Vc:case Gc:case Qc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Uo:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oh:case lh:case ch:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hh:case uh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fo:case fh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(r){switch(r){case $n:case of:return{byteLength:1,components:1};case ya:case lf:case Bi:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case Oi:case Pc:case Mi:return{byteLength:4,components:1};case cf:case hf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function km(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function V_(r){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ex=`#ifdef USE_IRIDESCENCE
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
#endif`,nx=`#ifdef USE_BUMPMAP
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ux=`#define PI 3.141592653589793
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
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dx=`vec3 transformedNormal = objectNormal;
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
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rx=`#ifdef USE_GRADIENTMAP
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
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,kx=`uniform sampler2D dfgLUT;
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
}`,Vx=`
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,J1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,lv=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,uv=`#define PHONG
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
}`,fv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,pv=`#define TOON
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
}`,mv=`#define TOON
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
}`,gv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,vv=`uniform vec3 color;
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
}`,yv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:G_,alphahash_pars_fragment:H_,alphamap_fragment:Q_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:q_,aomap_fragment:Y_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:$_,begin_vertex:K_,beginnormal_vertex:j_,bsdfs:tx,iridescence_fragment:ex,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:sx,clipping_planes_vertex:ax,color_fragment:ox,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:hx,common:ux,cube_uv_reflection_fragment:fx,defaultnormal_vertex:dx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:_x,colorspace_fragment:xx,colorspace_pars_fragment:vx,envmap_fragment:yx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Sx,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Nx,envmap_vertex:wx,fog_vertex:Tx,fog_pars_vertex:Ex,fog_fragment:Ax,fog_pars_fragment:Cx,gradientmap_pars_fragment:Rx,lightmap_pars_fragment:Px,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Lx,lights_pars_begin:Dx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Bx,lights_physical_fragment:zx,lights_physical_pars_fragment:kx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Hx,lightprobes_pars_fragment:Qx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:Zx,map_pars_fragment:Jx,map_particle_fragment:$x,map_particle_pars_fragment:Kx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:t1,morphinstance_vertex:e1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:a1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:h1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:_1,premultiplied_alpha_fragment:x1,project_vertex:v1,dithering_fragment:y1,dithering_pars_fragment:M1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:w1,shadowmap_pars_vertex:T1,shadowmap_vertex:E1,shadowmask_pars_fragment:A1,skinbase_vertex:C1,skinning_pars_vertex:R1,skinning_vertex:P1,skinnormal_vertex:I1,specularmap_fragment:L1,specularmap_pars_fragment:D1,tonemapping_fragment:N1,tonemapping_pars_fragment:U1,transmission_fragment:F1,transmission_pars_fragment:O1,uv_pars_fragment:B1,uv_pars_vertex:z1,uv_vertex:k1,worldpos_vertex:V1,background_vert:G1,background_frag:H1,backgroundCube_vert:Q1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:q1,depth_vert:Y1,depth_frag:Z1,distance_vert:J1,distance_frag:$1,equirect_vert:K1,equirect_frag:j1,linedashed_vert:tv,linedashed_frag:ev,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:rv,meshlambert_frag:sv,meshmatcap_vert:av,meshmatcap_frag:ov,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:hv,meshphong_frag:uv,meshphysical_vert:fv,meshphysical_frag:dv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:xv,shadow_frag:vv,sprite_vert:yv,sprite_frag:Mv},bt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ji={basic:{uniforms:wn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:wn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:wn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:wn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:wn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:wn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:wn([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:wn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:wn([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:wn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:wn([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:wn([bt.common,bt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:wn([bt.lights,bt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ji.physical={uniforms:wn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var gh={r:0,b:0,g:0},Sv=new Se,Vm=new jt;Vm.set(-1,0,0,0,1,0,0,0,1);function bv(r,t,e,n,i,s){let a=new Ct(0),o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(M){let A=!1,v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Ro)?(l===void 0&&(l=new ge(new Yi(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ss(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vm),l.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ge(new _r(2,2),new ai({name:"BackgroundMaterial",uniforms:Ss(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(gh,mf(r)),e.buffers.color.setClear(gh.r,gh.g,gh.b,A,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function wv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(D,L,N,C,B){let Q=!1,G=d(D,C,N,L);s!==G&&(s=G,l(s.object)),Q=f(D,C,N,B),Q&&g(D,C,N,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(D,L,N,C),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,L,N,C){let B=C.wireframe===!0,Q=n[L.id];Q===void 0&&(Q={},n[L.id]=Q);let G=D.isInstancedMesh===!0?D.id:0,K=Q[G];K===void 0&&(K={},Q[G]=K);let Y=K[N.id];Y===void 0&&(Y={},K[N.id]=Y);let I=Y[B];return I===void 0&&(I=u(c()),Y[B]=I),I}function u(D){let L=[],N=[],C=[];for(let B=0;B<e;B++)L[B]=0,N[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,L,N,C){let B=s.attributes,Q=L.attributes,G=0,K=N.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=B[Y],Mt=Q[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;G++}return s.attributesNum!==G||s.index!==C}function g(D,L,N,C){let B={},Q=L.attributes,G=0,K=N.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=Q[Y];tt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),B[Y]=Mt,G++}s.attributes=B,s.attributesNum=G,s.index=C}function _(){let D=s.newAttributes;for(let L=0,N=D.length;L<N;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){let N=s.newAttributes,C=s.enabledAttributes,B=s.attributeDivisors;N[D]=1,C[D]===0&&(r.enableVertexAttribArray(D),C[D]=1),B[D]!==L&&(r.vertexAttribDivisor(D,L),B[D]=L)}function M(){let D=s.newAttributes,L=s.enabledAttributes;for(let N=0,C=L.length;N<C;N++)L[N]!==D[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function A(D,L,N,C,B,Q,G){G===!0?r.vertexAttribIPointer(D,L,N,B,Q):r.vertexAttribPointer(D,L,N,C,B,Q)}function v(D,L,N,C){_();let B=C.attributes,Q=N.getAttributes(),G=L.defaultAttributeValues;for(let K in Q){let Y=Q[K];if(Y.location>=0){let I=B[K];if(I===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){let tt=I.normalized,Mt=I.itemSize,Tt=t.get(I);if(Tt===void 0)continue;let Ot=Tt.buffer,Ht=Tt.type,Wt=Tt.bytesPerElement,J=Ht===r.INT||Ht===r.UNSIGNED_INT||I.gpuType===Pc;if(I.isInterleavedBufferAttribute){let nt=I.data,xt=nt.stride,Bt=I.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<Y.locationSize;pt++)m(Y.location+pt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<Y.locationSize;pt++)p(Y.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let pt=0;pt<Y.locationSize;pt++)A(Y.location+pt,Mt/Y.locationSize,Ht,tt,xt*Wt,(Bt+Mt/Y.locationSize*pt)*Wt,J)}else{if(I.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt,I.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let nt=0;nt<Y.locationSize;nt++)A(Y.location+nt,Mt/Y.locationSize,Ht,tt,Mt*Wt,Mt/Y.locationSize*nt*Wt,J)}}else if(G!==void 0){let tt=G[K];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(Y.location,tt);break;case 3:r.vertexAttrib3fv(Y.location,tt);break;case 4:r.vertexAttrib4fv(Y.location,tt);break;default:r.vertexAttrib1fv(Y.location,tt)}}}}M()}function S(){w();for(let D in n){let L=n[D];for(let N in L){let C=L[N];for(let B in C){let Q=C[B];for(let G in Q)h(Q[G].object),delete Q[G];delete C[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let N in L){let C=L[N];for(let B in C){let Q=C[B];for(let G in Q)h(Q[G].object),delete Q[G];delete C[B]}}delete n[D.id]}function T(D){for(let L in n){let N=n[L];for(let C in N){let B=N[C];if(B[D.id]===void 0)continue;let Q=B[D.id];for(let G in Q)h(Q[G].object),delete Q[G];delete B[D.id]}}}function x(D){for(let L in n){let N=n[L],C=D.isInstancedMesh===!0?D.id:0,B=N[C];if(B!==void 0){for(let Q in B){let G=B[Q];for(let K in G)h(G[K].object),delete G[K];delete B[Q]}delete N[C],Object.keys(N).length===0&&delete n[L]}}}function w(){R(),a=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Tv(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ev(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Si&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==$n&&T!==Mi&&!x&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:b}}function Av(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Di,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let M=s?0:n,A=M*4,v=m.clippingState||null;c.value=v,v=h(g,u,A,f);for(let S=0;S!==A;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var ba=4,Cv=6,Rv=20,Pv=256,zo=new _a,vm=new Ct,wf=null,Tf=0,Ef=0,Af=!1,Iv=new H,bs=new H,Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=Iv}=s;wf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wf,Tf,Ef),this._renderer.xr.enabled=Af,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zr||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Bi,format:Si,colorSpace:lo,depthBuffer:!1},i=ym(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lv(s)),this._blurMaterial=Nv(s,t,e),this._ggxMaterial=Dv(s,t,e)}return i}_compileMaterial(t){let e=new ge(new Bn,t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,i,s){let c=new dn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vm),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Yi,new gr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(vm),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;Sa(i,v*S,A>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Zr||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Sa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-ba?n-g+ba:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Sa(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,zo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Sa(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,zo)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ba?i-this._lodMax+ba:0),u=4*(this._cubeSize-h);Sa(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,zo)}};function Lv(r){let t=[],e=[],n=r,i=r-ba+1+Cv;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(v,f*u*m);for(let S=0;S<u;S++){let b=h[S*2]*2-1,T=h[S*2+1]*2-1;m===0?bs.set(1,T,b):m===1?bs.set(-b,1,-T):m===2?bs.set(-b,T,1):m===3?bs.set(-1,T,-b):m===4?bs.set(-b,-1,T):bs.set(b,T,-1),bs.toArray(_,(m*u+S)*f)}}let p=new Bn;p.setAttribute("position",new si(g,f)),p.setAttribute("outputDirection",new si(_,f)),e.push(new ge(p,null)),n>ba&&n--}return{lodMeshes:e,sizeLods:t}}function ym(r,t,e){let n=new Zn(r,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Dv(r,t,e){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nv(r,t,e){return new ai({name:"SphericalGaussianBlur",defines:{SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Mm(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Sm(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xh=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ji});s.uniforms.tEquirect.value=e;let a=new ge(i,s),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=nn),new bc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function Uv(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ac||f===Cc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new xh(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ac||f===Cc,_=f===Zr||f===Ms;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ta(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new Ta(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ac?u.mapping=Zr:f===Cc&&(u.mapping=Ms),u}function c(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Fv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function Ov(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,v=M.length;A<v;A+=3){let S=M[A+0],b=M[A+1],T=M[A+2];u.push(S,b,b,T,T,S)}}else{let M=g.array;_=g.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let S=A+0,b=A+1,T=A+2;u.push(S,b,b,T,T,S)}}let p=new(g.count>=65535?mo:po)(u,1);p.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Bv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function zv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kv(r,t,e){let n=new WeakMap,i=new Fe;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*d),T=new uo(b,v,S,d);T.type=Mi,T.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let D=p[R],L=m[R],N=M[R],C=v*S*4*R;for(let B=0;B<D.count;B++){let Q=B*x;f===!0&&(i.fromBufferAttribute(D,B),b[C+Q+0]=i.x,b[C+Q+1]=i.y,b[C+Q+2]=i.z,b[C+Q+3]=0),g===!0&&(i.fromBufferAttribute(L,B),b[C+Q+4]=i.x,b[C+Q+5]=i.y,b[C+Q+6]=i.z,b[C+Q+7]=0),_===!0&&(i.fromBufferAttribute(N,B),b[C+Q+8]=i.x,b[C+Q+9]=i.y,b[C+Q+10]=i.z,b[C+Q+11]=N.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Yt(v,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Vv(r,t,e,n,i){let s=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Gv={[ju]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[nf]:"ACES_FILMIC_TONE_MAPPING",[sf]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[rf]:"CUSTOM_TONE_MAPPING"};function Hv(r,t,e,n,i,s){let a=new Zn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Bn;l.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let h=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ge(l,h),u=new _a(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,M=[],A=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let b=0;b<M.length;b++){let T=M[b];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let S=a.width,b=a.height;M.length>0&&o===null&&(o=new Zn(S,b,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),c=new Zn(S,b,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){let x=M[T];x.setSize&&x.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===Fi&&M.length===0)return!1;if(m=S,S!==null){let b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Fi,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=p,_=!0;let b=a,T=o;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(v,T,b,S),w.needsSwap!==!1&&(b=T,T=T===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},de.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let x=Gv[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Gm=new On,Pf=new Hr(1,1),Hm=new uo,Qm=new ac,Wm=new _o,bm=[],wm=[],Tm=new Float32Array(16),Em=new Float32Array(9),Am=new Float32Array(4);function Ea(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=bm[i];if(s===void 0&&(s=new Float32Array(i),bm[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Mh(r,t){let e=wm[t];e===void 0&&(e=new Int32Array(t),wm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Qv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function Xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function Yv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Am.set(n),r.uniformMatrix2fv(this.addr,!1,Am),sn(e,n)}}function Zv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Em.set(n),r.uniformMatrix3fv(this.addr,!1,Em),sn(e,n)}}function Jv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Tm.set(n),r.uniformMatrix4fv(this.addr,!1,Tm),sn(e,n)}}function $v(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function ey(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ny(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function iy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function sy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pf.compareFunction=e.isReversedDepthBuffer()?ph:dh,s=Pf):s=Gm,e.setTexture2D(t||s,i)}function ay(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qm,i)}function oy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wm,i)}function ly(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hm,i)}function cy(r){switch(r){case 5126:return Qv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return Kv;case 35668:case 35672:return jv;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(r,t){r.uniform1fv(this.addr,t)}function uy(r,t){let e=Ea(t,this.size,2);r.uniform2fv(this.addr,e)}function fy(r,t){let e=Ea(t,this.size,3);r.uniform3fv(this.addr,e)}function dy(r,t){let e=Ea(t,this.size,4);r.uniform4fv(this.addr,e)}function py(r,t){let e=Ea(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function my(r,t){let e=Ea(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function gy(r,t){let e=Ea(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _y(r,t){r.uniform1iv(this.addr,t)}function xy(r,t){r.uniform2iv(this.addr,t)}function vy(r,t){r.uniform3iv(this.addr,t)}function yy(r,t){r.uniform4iv(this.addr,t)}function My(r,t){r.uniform1uiv(this.addr,t)}function Sy(r,t){r.uniform2uiv(this.addr,t)}function by(r,t){r.uniform3uiv(this.addr,t)}function wy(r,t){r.uniform4uiv(this.addr,t)}function Ty(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Pf:a=Gm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Ey(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qm,s[a])}function Ay(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wm,s[a])}function Cy(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hm,s[a])}function Ry(r){switch(r){case 5126:return hy;case 35664:return uy;case 35665:return fy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return My;case 36294:return Sy;case 36295:return by;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Cy}}var If=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}},Lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ry(e.type)}},Df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function Cm(r,t){r.seq.push(t),r.map[t.id]=t}function Py(r,t,e){let n=r.name,i=n.length;for(Cf.lastIndex=0;;){let s=Cf.exec(n),a=Cf.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Cm(e,l===void 0?new If(o,r,t):new Lf(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Df(o),Cm(e,d)),e=d}}}var wa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Py(o,c,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Rm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Iy=37297,Ly=0;function Dy(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pm=new jt;function Ny(r){de._getMatrix(Pm,de.workingColorSpace,r);let t=`mat3( ${Pm.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(r)){case co:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Im(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Dy(r.getShaderSource(t),o)}else return s}function Uy(r,t){let e=Ny(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fy={[ju]:"Linear",[tf]:"Reinhard",[ef]:"Cineon",[nf]:"ACESFilmic",[sf]:"AgX",[Co]:"Neutral",[rf]:"Custom"};function Oy(r,t){let e=Fy[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _h=new H;function By(){de.getLuminanceCoefficients(_h);let r=_h.x.toFixed(4),t=_h.y.toFixed(4),e=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function ky(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Vo(r){return r!==""}function Lm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(r){return r.replace(Gy,Qy)}var Hy=new Map;function Qy(r,t){let e=re[t];if(e===void 0){let n=Hy.get(t);if(n!==void 0)e=re[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nf(e)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(r){return r.replace(Wy,Xy)}function Xy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Um(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var qy={[Eo]:"SHADOWMAP_TYPE_PCF",[xa]:"SHADOWMAP_TYPE_VSM"};function Yy(r){return qy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zy={[Zr]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function Jy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Zy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var $y={[Ms]:"ENVMAP_MODE_REFRACTION"};function Ky(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jy={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[jp]:"ENVMAP_BLENDING_ADD"};function tM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jy[r.combine]||"ENVMAP_BLENDING_NONE"}function eM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function nM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Yy(e),l=Jy(e),h=Ky(e),d=tM(e),u=eM(e),f=zy(e),g=ky(s),_=i.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`)):(p=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),m=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?re.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Uy("linearToOutputTexel",e.outputColorSpace),By(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),a=Nf(a),a=Lm(a,e),a=Dm(a,e),o=Nf(o),o=Lm(o,e),o=Dm(o,e),a=Nm(a),o=Nm(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+p+a,v=M+m+o,S=Rm(i,i.VERTEX_SHADER,A),b=Rm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(S)||"",C=i.getShaderInfoLog(b)||"",B=L.trim(),Q=N.trim(),G=C.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{let I=Im(i,S,"vertex"),tt=Im(i,b,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+I+`
`+tt)}else B!==""?Zt("WebGLProgram: Program Info Log:",B):(Q===""||G==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:B,vertexShader:{log:Q,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(S),i.deleteShader(b),x=new wa(i,_),w=Vy(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,Iy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ly++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var iM=0,Uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ff(t),e.set(t,n)),n}},Ff=class{constructor(t){this.id=iM++,this.code=t,this.usedTimes=0}};function rM(r){return r===$r||r===Uo||r===Fo}function sM(r,t,e,n,i,s){let a=new fo,o=new Uf,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,w,R,D,L,N){let C=D.fog,B=L.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||Q,G),Y=K&&K.mapping===Ro?K.image.height:null,I=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=tt!==void 0?tt.length:0,Tt=0;B.morphAttributes.position!==void 0&&(Tt=1),B.morphAttributes.normal!==void 0&&(Tt=2),B.morphAttributes.color!==void 0&&(Tt=3);let Ot,Ht,Wt,J;if(I){let zt=ji[I];Ot=zt.vertexShader,Ht=zt.fragmentShader}else{Ot=x.vertexShader,Ht=x.fragmentShader;let zt=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,zt,lt),Wt=zt.id,J=lt.id}let nt=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,kt=!!x.map,Vt=!!x.matcap,Rt=!!K,Xt=!!x.aoMap,St=!!x.lightMap,z=!!x.bumpMap&&x.wireframe===!1,qt=!!x.normalMap,Kt=!!x.displacementMap,ce=!!x.emissiveMap,Lt=!!x.metalnessMap,te=!!x.roughnessMap,F=x.anisotropy>0,pe=x.clearcoat>0,Qt=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,V=x.sheen>0,W=x.transmission>0,$=F&&!!x.anisotropyMap,mt=pe&&!!x.clearcoatMap,ht=pe&&!!x.clearcoatNormalMap,it=pe&&!!x.clearcoatRoughnessMap,st=y&&!!x.iridescenceMap,vt=y&&!!x.iridescenceThicknessMap,Dt=V&&!!x.sheenColorMap,k=V&&!!x.sheenRoughnessMap,rt=!!x.specularMap,et=!!x.specularColorMap,_t=!!x.specularIntensityMap,ft=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,ut=!!x.gradientMap,j=!!x.alphaMap,dt=x.alphaTest>0,gt=!!x.alphaHash,at=!!x.extensions,ct=Fi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ct=r.toneMapping);let ot={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Ht,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Vt,envMap:Rt,envMapMode:Rt&&K.mapping,envMapCubeUVHeight:Y,aoMap:Xt,lightMap:St,bumpMap:z,normalMap:qt,displacementMap:Kt,emissiveMap:ce,normalMapObjectSpace:qt&&x.normalMapType===nm,normalMapTangentSpace:qt&&x.normalMapType===Oo,packedNormalMap:qt&&x.normalMapType===Oo&&rM(x.normalMap.format),metalnessMap:Lt,roughnessMap:te,anisotropy:F,anisotropyMap:$,clearcoat:pe,clearcoatMap:mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:it,dispersion:Qt,retroreflection:P,iridescence:y,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:V,sheenColorMap:Dt,sheenRoughnessMap:k,specularMap:rt,specularColorMap:et,specularIntensityMap:_t,transmission:W,transmissionMap:ft,thicknessMap:U,gradientMap:ut,opaque:x.transparent===!1&&x.blending===va&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:dt,alphaHash:gt,combine:x.combine,mapUv:kt&&g(x.map.channel),aoMapUv:Xt&&g(x.aoMap.channel),lightMapUv:St&&g(x.lightMap.channel),bumpMapUv:z&&g(x.bumpMap.channel),normalMapUv:qt&&g(x.normalMap.channel),displacementMapUv:Kt&&g(x.displacementMap.channel),emissiveMapUv:ce&&g(x.emissiveMap.channel),metalnessMapUv:Lt&&g(x.metalnessMap.channel),roughnessMapUv:te&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:k&&g(x.sheenRoughnessMap.channel),specularMapUv:rt&&g(x.specularMap.channel),specularColorMapUv:et&&g(x.specularColorMap.channel),specularIntensityMapUv:_t&&g(x.specularIntensityMap.channel),transmissionMapUv:ft&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(kt||j),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:ce&&x.emissiveMap.isVideoTexture===!0&&de.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(w,x),M(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=f[x.type],R;if(w){let D=ji[w];R=gm.clone(D.uniforms)}else R=x.uniforms;return R}function v(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new nM(r,w,x,i),l.push(R),h.set(w,R)),R}function S(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function aM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function oM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Om(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function c(u,f,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let A=o(u,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function l(u,f,g,_,p,m){let M=o(u,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||oM),n.length>1&&n.sort(f||Fm),i.length>1&&i.sort(f||Fm)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function lM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Om,r.set(n,[a])):i>=s.length?(a=new Om,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function cM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Ct};break;case"SpotLight":e={position:new H,direction:new H,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function hM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var uM=0;function fM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function dM(r){let t=new cM,e=hM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let i=new H,s=new Se,a=new Se;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,A=0,v=0,S=0,b=0,T=0,x=0,w=0,R=0;l.sort(fM);for(let L=0,N=l.length;L<N;L++){let C=l[L],B=C.color,Q=C.intensity,G=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===$r?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*Q,d+=B.g*Q,u+=B.b*Q;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],Q);R++}else if(C.isSunLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,tt=e.get(C);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=K;let Mt=I.getViewportCount();for(let Tt=0;Tt<Mt;Tt++)n.sunShadowMatrix[_+Tt]=I.getMatrix(Tt),n.sunShadowCascade[_+Tt]=I._cascadeData[Tt];_+=Mt,g++}n.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,tt=e.get(C);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=Y,p++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(Q),Y.distance=G,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[M]=Y;let I=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,I.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[M]=I.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=K,T++}M++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy(B).multiplyScalar(Q),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=Y,A++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let I=C.shadow,tt=e.get(C);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,tt.shadowCameraNear=I.camera.near,tt.shadowCameraFar=I.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=C.shadow.matrix,b++}n.point[m]=Y,m++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(Q),Y.groundColor.copy(C.groundColor).multiplyScalar(Q),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=x,D.numLightProbes=R,n.version=uM++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let v=l[M];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Bm(r){let t=new dM(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function pM(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Bm(r),t.set(i,[o])):s>=a.length?(o=new Bm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`,_M=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],xM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],zm=new Se,ko=new H,Rf=new H;function vM(r,t,e){let n=new pa,i=new Yt,s=new Yt,a=new Fe,o=new uc,c=new fc,l={},h=e.maxTextureSize,d={[Yr]:gn,[gn]:Yr,[Jn]:Jn},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Bn;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ge(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let m=this.type;this.render=function(b,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Dp&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);let w=r.getRenderTarget(),R=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ji),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=m!==this.type;N&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=b.length;C<B;C++){let Q=b[C],G=Q.shadow;if(G===void 0){Zt("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let K=G.getFrameExtents();i.multiply(K),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,G.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xa){if(Q.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zn(i.x,i.y,{format:$r,type:Bi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new Hr(i.x,i.y,Mi),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=Wi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn}else Q.isPointLight?(G.map=new xh(i.x),G.map.depthTexture=new lc(i.x,Oi)):(G.map=new Zn(i.x,i.y),G.map.depthTexture=new Hr(i.x,i.y,Oi)),G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=Wi,this.type===Eo?(G.map.depthTexture.compareFunction=Y?ph:dh,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let I=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Q.isPointLight!==!0&&G.updateMatrices(Q,x);for(let tt=0;tt<I;tt++){let Mt=G.getCamera(tt);if(Q.isPointLight){let Tt=G.camera,Ot=G.matrix,Ht=Q.distance||Tt.far;Ht!==Tt.far&&(Tt.far=Ht,Tt.updateProjectionMatrix()),ko.setFromMatrixPosition(Q.matrixWorld),Tt.position.copy(ko),Rf.copy(Tt.position),Rf.add(_M[tt]),Tt.up.copy(xM[tt]),Tt.lookAt(Rf),Tt.updateMatrixWorld(),Ot.makeTranslation(-ko.x,-ko.y,-ko.z),zm.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(zm,Tt.coordinateSystem,Tt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(G.map),r.clear());let Tt=G.getViewport(tt);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),L.viewport(a)}n=G.getFrustum(tt),v(T,x,Mt,Q,this.type)}G.isPointLightShadow!==!0&&this.type===xa&&M(G,x),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,R,D)};function M(b,T){let x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Zn(i.x,i.y,{format:$r,type:Bi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,x,f,_,null)}function A(b,T,x,w){let R=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,N=T.uuid,C=l[L];C===void 0&&(C={},l[L]=C);let B=C[N];B===void 0&&(B=R.clone(),C[N]=B,T.addEventListener("dispose",S)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,w===xa?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=r.properties.get(R);L.light=x}return R}function v(b,T,x,w,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===xa)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let N=t.update(b),C=b.material;if(Array.isArray(C)){let B=N.groups;for(let Q=0,G=B.length;Q<G;Q++){let K=B[Q],Y=C[K.materialIndex];if(Y&&Y.visible){let I=A(b,Y,w,R);b.onBeforeShadow(r,b,T,x,N,I,K),r.renderBufferDirect(x,null,N,I,b,K),b.onAfterShadow(r,b,T,x,N,I,K)}}}else if(C.visible){let B=A(b,C,w,R);b.onBeforeShadow(r,b,T,x,N,B,null),r.renderBufferDirect(x,null,N,B,b,null),b.onAfterShadow(r,b,T,x,N,B,null)}}let L=b.children;for(let N=0,C=L.length;N<C;N++)v(L[N],T,x,w,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in l){let w=l[x],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function yM(r,t){function e(){let U=!1,ut=new Fe,j=null,dt=new Fe(0,0,0,0);return{setMask:function(gt){j!==gt&&!U&&(r.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){U=gt},setClear:function(gt,at,ct,ot,zt){zt===!0&&(gt*=ot,at*=ot,ct*=ot),ut.set(gt,at,ct,ot),dt.equals(ut)===!1&&(r.clearColor(gt,at,ct,ot),dt.copy(ut))},reset:function(){U=!1,j=null,dt.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,j=null,dt=null,gt=null;return{setReversed:function(at){if(ut!==at){let ct=t.get("EXT_clip_control");at?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),ut=at;let ot=gt;gt=null,this.setClear(ot)}},getReversed:function(){return ut},setTest:function(at){at?nt(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(at){j!==at&&!U&&(r.depthMask(at),j=at)},setFunc:function(at){if(ut&&(at=pm[at]),dt!==at){switch(at){case ql:r.depthFunc(r.NEVER);break;case Yl:r.depthFunc(r.ALWAYS);break;case Zl:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case Jl:r.depthFunc(r.EQUAL);break;case $l:r.depthFunc(r.GEQUAL);break;case Kl:r.depthFunc(r.GREATER);break;case jl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=at}},setLocked:function(at){U=at},setClear:function(at){gt!==at&&(gt=at,ut&&(at=1-at),r.clearDepth(at))},reset:function(){U=!1,j=null,dt=null,gt=null,ut=!1}}}function i(){let U=!1,ut=null,j=null,dt=null,gt=null,at=null,ct=null,ot=null,zt=null;return{setTest:function(lt){U||(lt?nt(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(lt){ut!==lt&&!U&&(r.stencilMask(lt),ut=lt)},setFunc:function(lt,Et,Pt){(j!==lt||dt!==Et||gt!==Pt)&&(r.stencilFunc(lt,Et,Pt),j=lt,dt=Et,gt=Pt)},setOp:function(lt,Et,Pt){(at!==lt||ct!==Et||ot!==Pt)&&(r.stencilOp(lt,Et,Pt),at=lt,ct=Et,ot=Pt)},setLocked:function(lt){U=lt},setClear:function(lt){zt!==lt&&(r.clearStencil(lt),zt=lt)},reset:function(){U=!1,ut=null,j=null,dt=null,gt=null,at=null,ct=null,ot=null,zt=null}}}let s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,S=null,b=null,T=null,x=new Ct(0,0,0),w=0,R=!1,D=null,L=null,N=null,C=null,B=null,Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=K>=2);let I=null,tt={},Mt=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Ot=new Fe().fromArray(Mt),Ht=new Fe().fromArray(Tt);function Wt(U,ut,j,dt){let gt=new Uint8Array(4),at=r.createTexture();r.bindTexture(U,at),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<j;ct++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(ut+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return at}let J={};J[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(ca),z(!1),qt(Yu),nt(r.CULL_FACE),Xt(Ji);function nt(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function xt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Bt(U,ut){return u[U]!==ut?(r.bindFramebuffer(U,ut),u[U]=ut,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function pt(U,ut){let j=g,dt=!1;if(U){j=f.get(ut),j===void 0&&(j=[],f.set(ut,j));let gt=U.textures;if(j.length!==gt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let at=0,ct=gt.length;at<ct;at++)j[at]=r.COLOR_ATTACHMENT0+at;j.length=gt.length,dt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,dt=!0);dt&&r.drawBuffers(j)}function kt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let Vt={[ys]:r.FUNC_ADD,[Up]:r.FUNC_SUBTRACT,[Fp]:r.FUNC_REVERSE_SUBTRACT};Vt[Op]=r.MIN,Vt[Bp]=r.MAX;let Rt={[zp]:r.ZERO,[kp]:r.ONE,[Vp]:r.SRC_COLOR,[$u]:r.SRC_ALPHA,[qp]:r.SRC_ALPHA_SATURATE,[Wp]:r.DST_COLOR,[Hp]:r.DST_ALPHA,[Gp]:r.ONE_MINUS_SRC_COLOR,[Ku]:r.ONE_MINUS_SRC_ALPHA,[Xp]:r.ONE_MINUS_DST_COLOR,[Qp]:r.ONE_MINUS_DST_ALPHA,[Yp]:r.CONSTANT_COLOR,[Zp]:r.ONE_MINUS_CONSTANT_COLOR,[Jp]:r.CONSTANT_ALPHA,[$p]:r.ONE_MINUS_CONSTANT_ALPHA};function Xt(U,ut,j,dt,gt,at,ct,ot,zt,lt){if(U===Ji){p===!0&&(xt(r.BLEND),p=!1);return}if(p===!1&&(nt(r.BLEND),p=!0),U!==Np){if(U!==m||lt!==R){if((M!==ys||S!==ys)&&(r.blendEquation(r.FUNC_ADD),M=ys,S=ys),lt)switch(U){case va:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ao:r.blendFunc(r.ONE,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ju:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",U);break}else switch(U){case va:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ao:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Zu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ju:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",U);break}A=null,v=null,b=null,T=null,x.set(0,0,0),w=0,m=U,R=lt}return}gt=gt||ut,at=at||j,ct=ct||dt,(ut!==M||gt!==S)&&(r.blendEquationSeparate(Vt[ut],Vt[gt]),M=ut,S=gt),(j!==A||dt!==v||at!==b||ct!==T)&&(r.blendFuncSeparate(Rt[j],Rt[dt],Rt[at],Rt[ct]),A=j,v=dt,b=at,T=ct),(ot.equals(x)===!1||zt!==w)&&(r.blendColor(ot.r,ot.g,ot.b,zt),x.copy(ot),w=zt),m=U,R=!1}function St(U,ut){U.side===Jn?xt(r.CULL_FACE):nt(r.CULL_FACE);let j=U.side===gn;ut&&(j=!j),z(j),U.blending===va&&U.transparent===!1?Xt(Ji):Xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function z(U){D!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),D=U)}function qt(U){U!==Ip?(nt(r.CULL_FACE),U!==L&&(U===Yu?r.cullFace(r.BACK):U===Lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),L=U}function Kt(U){U!==N&&(G&&r.lineWidth(U),N=U)}function ce(U,ut,j){U?(nt(r.POLYGON_OFFSET_FILL),(C!==ut||B!==j)&&(C=ut,B=j,a.getReversed()&&(ut=-ut),r.polygonOffset(ut,j))):xt(r.POLYGON_OFFSET_FILL)}function Lt(U){U?nt(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function te(U){U===void 0&&(U=r.TEXTURE0+Q-1),I!==U&&(r.activeTexture(U),I=U)}function F(U,ut,j){j===void 0&&(I===null?j=r.TEXTURE0+Q-1:j=I);let dt=tt[j];dt===void 0&&(dt={type:void 0,texture:void 0},tt[j]=dt),(dt.type!==U||dt.texture!==ut)&&(I!==j&&(r.activeTexture(j),I=j),r.bindTexture(U,ut||J[U]),dt.type=U,dt.texture=ut)}function pe(){let U=tt[I];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Qt(){try{r.compressedTexImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function y(){try{r.texSubImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function V(){try{r.texSubImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function mt(){try{r.texStorage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function ht(){try{r.texStorage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function it(){try{r.texImage2D(...arguments)}catch(U){$t("WebGLState:",U)}}function st(){try{r.texImage3D(...arguments)}catch(U){$t("WebGLState:",U)}}function vt(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Dt(U,ut){d[U]!==ut&&(r.pixelStorei(U,ut),d[U]=ut)}function k(U){Ot.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function rt(U){Ht.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ht.copy(U))}function et(U,ut){let j=l.get(ut);j===void 0&&(j=new WeakMap,l.set(ut,j));let dt=j.get(U);dt===void 0&&(dt=r.getUniformBlockIndex(ut,U.name),j.set(U,dt))}function _t(U,ut){let dt=l.get(ut).get(U);c.get(ut)!==dt&&(r.uniformBlockBinding(ut,dt,U.__bindingPointIndex),c.set(ut,dt))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},I=null,tt={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,S=null,b=null,T=null,x=new Ct(0,0,0),w=0,R=!1,D=null,L=null,N=null,C=null,B=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:xt,bindFramebuffer:Bt,drawBuffers:pt,useProgram:kt,setBlending:Xt,setMaterial:St,setFlipSided:z,setCullFace:qt,setLineWidth:Kt,setPolygonOffset:ce,setScissorTest:Lt,activeTexture:te,bindTexture:F,unbindTexture:pe,compressedTexImage2D:Qt,compressedTexImage3D:P,texImage2D:it,texImage3D:st,pixelStorei:Dt,getParameter:vt,updateUBOMapping:et,uniformBlockBinding:_t,texStorage2D:mt,texStorage3D:ht,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:k,viewport:rt,reset:ft}}function MM(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return g?new OffscreenCanvas(P,y):ho("canvas")}function p(P,y,V){let W=1,$=Qt(P);if(($.width>V||$.height>V)&&(W=V/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let mt=Math.floor(W*$.width),ht=Math.floor(W*$.height);u===void 0&&(u=_(mt,ht));let it=y?_(mt,ht):u;return it.width=mt,it.height=ht,it.getContext("2d").drawImage(P,0,0,mt,ht),Zt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+mt+"x"+ht+")."),it}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,y,V,W,$,mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht;W&&(ht=t.get("EXT_texture_norm16"),ht||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=y;if(y===r.RED&&(V===r.FLOAT&&(it=r.R32F),V===r.HALF_FLOAT&&(it=r.R16F),V===r.UNSIGNED_BYTE&&(it=r.R8),V===r.UNSIGNED_SHORT&&ht&&(it=ht.R16_EXT),V===r.SHORT&&ht&&(it=ht.R16_SNORM_EXT)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(it=r.R8UI),V===r.UNSIGNED_SHORT&&(it=r.R16UI),V===r.UNSIGNED_INT&&(it=r.R32UI),V===r.BYTE&&(it=r.R8I),V===r.SHORT&&(it=r.R16I),V===r.INT&&(it=r.R32I)),y===r.RG&&(V===r.FLOAT&&(it=r.RG32F),V===r.HALF_FLOAT&&(it=r.RG16F),V===r.UNSIGNED_BYTE&&(it=r.RG8),V===r.UNSIGNED_SHORT&&ht&&(it=ht.RG16_EXT),V===r.SHORT&&ht&&(it=ht.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(it=r.RG8UI),V===r.UNSIGNED_SHORT&&(it=r.RG16UI),V===r.UNSIGNED_INT&&(it=r.RG32UI),V===r.BYTE&&(it=r.RG8I),V===r.SHORT&&(it=r.RG16I),V===r.INT&&(it=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(it=r.RGB8UI),V===r.UNSIGNED_SHORT&&(it=r.RGB16UI),V===r.UNSIGNED_INT&&(it=r.RGB32UI),V===r.BYTE&&(it=r.RGB8I),V===r.SHORT&&(it=r.RGB16I),V===r.INT&&(it=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(it=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(it=r.RGBA16UI),V===r.UNSIGNED_INT&&(it=r.RGBA32UI),V===r.BYTE&&(it=r.RGBA8I),V===r.SHORT&&(it=r.RGBA16I),V===r.INT&&(it=r.RGBA32I)),y===r.RGB&&(V===r.UNSIGNED_SHORT&&ht&&(it=ht.RGB16_EXT),V===r.SHORT&&ht&&(it=ht.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(it=r.R11F_G11F_B10F)),y===r.RGBA){let st=mt?co:de.getTransfer($);V===r.FLOAT&&(it=r.RGBA32F),V===r.HALF_FLOAT&&(it=r.RGBA16F),V===r.UNSIGNED_BYTE&&(it=st===Me?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ht&&(it=ht.RGBA16_EXT),V===r.SHORT&&ht&&(it=ht.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(P,y){let V;return P?y===null||y===Oi||y===Ma?V=r.DEPTH24_STENCIL8:y===Mi?V=r.DEPTH32F_STENCIL8:y===ya&&(V=r.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===Ma?V=r.DEPTH_COMPONENT24:y===Mi?V=r.DEPTH_COMPONENT32F:y===ya&&(V=r.DEPTH_COMPONENT16),V}function b(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){let y=P.target;y.removeEventListener("dispose",T),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),D(y)}function w(P){let y=n.get(P);if(y.__webglInit===void 0)return;let V=P.source,W=f.get(V);if(W){let $=W[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(P),Object.keys(W).length===0&&f.delete(V)}n.remove(P)}function R(P){let y=n.get(P);r.deleteTexture(y.__webglTexture);let V=P.source,W=f.get(V);delete W[y.__cacheKey],a.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let $=0;$<y.__webglFramebuffer[W].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[W][$]);else r.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)r.deleteFramebuffer(y.__webglFramebuffer[W]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=P.textures;for(let W=0,$=V.length;W<$;W++){let mt=n.get(V[W]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(V[W])}n.remove(P)}let L=0;function N(){L=0}function C(){return L}function B(P){L=P}function Q(){let P=L;return P>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function G(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){let V=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let W=P.image;if(W===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function Y(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){xt(V,P,y);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function I(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){xt(V,P,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function tt(P,y){let V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){Bt(V,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}let Mt={[tc]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[ec]:r.MIRRORED_REPEAT},Tt={[hn]:r.NEAREST,[tm]:r.NEAREST_MIPMAP_NEAREST,[Po]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Rc]:r.LINEAR_MIPMAP_NEAREST,[$i]:r.LINEAR_MIPMAP_LINEAR},Ot={[rm]:r.NEVER,[cm]:r.ALWAYS,[sm]:r.LESS,[dh]:r.LEQUAL,[am]:r.EQUAL,[ph]:r.GEQUAL,[om]:r.GREATER,[lm]:r.NOTEQUAL};function Ht(P,y){if(y.type===Mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Rc||y.magFilter===Po||y.magFilter===$i||y.minFilter===nn||y.minFilter===Rc||y.minFilter===Po||y.minFilter===$i)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Mt[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Mt[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Mt[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Tt[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==Po&&y.minFilter!==$i||y.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));let W=y.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let mt=G(y);if(mt!==P.__cacheKey){$[mt]===void 0&&($[mt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),$[mt].usedTimes++;let ht=$[P.__cacheKey];ht!==void 0&&($[P.__cacheKey].usedTimes--,ht.usedTimes===0&&R(y)),P.__cacheKey=mt,P.__webglTexture=$[mt].texture}return V}function J(P,y,V){return Math.floor(Math.floor(P/V)/y)}function nt(P,y,V,W){let mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,V,W,y.data);else{mt.sort((Dt,k)=>Dt.start-k.start);let ht=0;for(let Dt=1;Dt<mt.length;Dt++){let k=mt[ht],rt=mt[Dt],et=k.start+k.count,_t=J(rt.start,y.width,4),ft=J(k.start,y.width,4);rt.start<=et+1&&_t===ft&&J(rt.start+rt.count-1,y.width,4)===_t?k.count=Math.max(k.count,rt.start+rt.count-k.start):(++ht,mt[ht]=rt)}mt.length=ht+1;let it=e.getParameter(r.UNPACK_ROW_LENGTH),st=e.getParameter(r.UNPACK_SKIP_PIXELS),vt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Dt=0,k=mt.length;Dt<k;Dt++){let rt=mt[Dt],et=Math.floor(rt.start/4),_t=Math.ceil(rt.count/4),ft=et%y.width,U=Math.floor(et/y.width),ut=_t,j=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,ft,U,ut,j,V,W,y.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,it),e.pixelStorei(r.UNPACK_SKIP_PIXELS,st),e.pixelStorei(r.UNPACK_SKIP_ROWS,vt)}}function xt(P,y,V){let W=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=r.TEXTURE_3D);let $=Wt(P,y),mt=y.source;e.bindTexture(W,P.__webglTexture,r.TEXTURE0+V);let ht=n.get(mt);if(mt.version!==ht.__version||$===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let j=de.getPrimaries(de.workingColorSpace),dt=y.colorSpace===xr?null:de.getPrimaries(y.colorSpace),gt=y.colorSpace===xr||j===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let st=p(y.image,!1,i.maxTextureSize);st=pe(y,st);let vt=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type),k=v(y.internalFormat,vt,Dt,y.normalized,y.colorSpace,y.isVideoTexture);Ht(W,y);let rt,et=y.mipmaps,_t=y.isVideoTexture!==!0,ft=ht.__version===void 0||$===!0,U=mt.dataReady,ut=b(y,st);if(y.isDepthTexture)k=S(y.format===Jr,y.type),ft&&(_t?e.texStorage2D(r.TEXTURE_2D,1,k,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,k,st.width,st.height,0,vt,Dt,null));else if(y.isDataTexture)if(et.length>0){_t&&ft&&e.texStorage2D(r.TEXTURE_2D,ut,k,et[0].width,et[0].height);for(let j=0,dt=et.length;j<dt;j++)rt=et[j],_t?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,rt.width,rt.height,vt,Dt,rt.data):e.texImage2D(r.TEXTURE_2D,j,k,rt.width,rt.height,0,vt,Dt,rt.data);y.generateMipmaps=!1}else _t?(ft&&e.texStorage2D(r.TEXTURE_2D,ut,k,st.width,st.height),U&&nt(y,st,vt,Dt)):e.texImage2D(r.TEXTURE_2D,0,k,st.width,st.height,0,vt,Dt,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){_t&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,k,et[0].width,et[0].height,st.depth);for(let j=0,dt=et.length;j<dt;j++)if(rt=et[j],y.format!==Si)if(vt!==null)if(_t){if(U)if(y.layerUpdates.size>0){let gt=xf(rt.width,rt.height,y.format,y.type);for(let at of y.layerUpdates){let ct=rt.data.subarray(at*gt/rt.data.BYTES_PER_ELEMENT,(at+1)*gt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,at,rt.width,rt.height,1,vt,ct)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,rt.width,rt.height,st.depth,vt,rt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,k,rt.width,rt.height,st.depth,0,rt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,rt.width,rt.height,st.depth,vt,Dt,rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,k,rt.width,rt.height,st.depth,0,vt,Dt,rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{_t&&ft&&e.texStorage2D(r.TEXTURE_2D,ut,k,et[0].width,et[0].height);for(let j=0,dt=et.length;j<dt;j++)rt=et[j],y.format!==Si?vt!==null?_t?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,rt.width,rt.height,vt,rt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,k,rt.width,rt.height,0,rt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,rt.width,rt.height,vt,Dt,rt.data):e.texImage2D(r.TEXTURE_2D,j,k,rt.width,rt.height,0,vt,Dt,rt.data)}else if(y.isDataArrayTexture)if(_t){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,k,st.width,st.height,st.depth),U)if(y.layerUpdates.size>0){let j=xf(st.width,st.height,y.format,y.type);for(let dt of y.layerUpdates){let gt=st.data.subarray(dt*j/st.data.BYTES_PER_ELEMENT,(dt+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,dt,st.width,st.height,1,vt,Dt,gt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Dt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,k,st.width,st.height,st.depth,0,vt,Dt,st.data);else if(y.isData3DTexture)_t?(ft&&e.texStorage3D(r.TEXTURE_3D,ut,k,st.width,st.height,st.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Dt,st.data)):e.texImage3D(r.TEXTURE_3D,0,k,st.width,st.height,st.depth,0,vt,Dt,st.data);else if(y.isFramebufferTexture){if(ft)if(_t)e.texStorage2D(r.TEXTURE_2D,ut,k,st.width,st.height);else{let j=st.width,dt=st.height;for(let gt=0;gt<ut;gt++)e.texImage2D(r.TEXTURE_2D,gt,k,j,dt,0,vt,Dt,null),j>>=1,dt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let j=r.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),st.parentNode!==j){j.appendChild(st),d.add(y),j.onpaint=dt=>{let gt=dt.changedElements;for(let at of d)gt.includes(at.image)&&(at.needsUpdate=!0)},j.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,st);else{let gt=r.RGBA,at=r.RGBA,ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,gt,at,ct,st)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(_t&&ft){let j=Qt(et[0]);e.texStorage2D(r.TEXTURE_2D,ut,k,j.width,j.height)}for(let j=0,dt=et.length;j<dt;j++)rt=et[j],_t?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,vt,Dt,rt):e.texImage2D(r.TEXTURE_2D,j,k,vt,Dt,rt);y.generateMipmaps=!1}else if(_t){if(ft){let j=Qt(st);e.texStorage2D(r.TEXTURE_2D,ut,k,j.width,j.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Dt,st)}else e.texImage2D(r.TEXTURE_2D,0,k,vt,Dt,st);m(y)&&M(W),ht.__version=mt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Bt(P,y,V){if(y.image.length!==6)return;let W=Wt(P,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);let mt=n.get($);if($.version!==mt.__version||W===!0){e.activeTexture(r.TEXTURE0+V);let ht=de.getPrimaries(de.workingColorSpace),it=y.colorSpace===xr?null:de.getPrimaries(y.colorSpace),st=y.colorSpace===xr||ht===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=y.isCompressedTexture||y.image[0].isCompressedTexture,Dt=y.image[0]&&y.image[0].isDataTexture,k=[];for(let at=0;at<6;at++)!vt&&!Dt?k[at]=p(y.image[at],!0,i.maxCubemapSize):k[at]=Dt?y.image[at].image:y.image[at],k[at]=pe(y,k[at]);let rt=k[0],et=s.convert(y.format,y.colorSpace),_t=s.convert(y.type),ft=v(y.internalFormat,et,_t,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ut=mt.__version===void 0||W===!0,j=$.dataReady,dt=b(y,rt);Ht(r.TEXTURE_CUBE_MAP,y);let gt;if(vt){U&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ft,rt.width,rt.height);for(let at=0;at<6;at++){gt=k[at].mipmaps;for(let ct=0;ct<gt.length;ct++){let ot=gt[ct];y.format!==Si?et!==null?U?j&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct,0,0,ot.width,ot.height,et,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct,ft,ot.width,ot.height,0,ot.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct,0,0,ot.width,ot.height,et,_t,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct,ft,ot.width,ot.height,0,et,_t,ot.data)}}}else{if(gt=y.mipmaps,U&&ut){gt.length>0&&dt++;let at=Qt(k[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ft,at.width,at.height)}for(let at=0;at<6;at++)if(Dt){U?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,k[at].width,k[at].height,et,_t,k[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,k[at].width,k[at].height,0,et,_t,k[at].data);for(let ct=0;ct<gt.length;ct++){let zt=gt[ct].image[at].image;U?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct+1,0,0,zt.width,zt.height,et,_t,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct+1,ft,zt.width,zt.height,0,et,_t,zt.data)}}else{U?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et,_t,k[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,et,_t,k[at]);for(let ct=0;ct<gt.length;ct++){let ot=gt[ct];U?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct+1,0,0,et,_t,ot.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct+1,ft,et,_t,ot.image[at])}}}m(y)&&M(r.TEXTURE_CUBE_MAP),mt.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function pt(P,y,V,W,$,mt){let ht=s.convert(V.format,V.colorSpace),it=s.convert(V.type),st=v(V.internalFormat,ht,it,V.normalized,V.colorSpace),vt=n.get(y),Dt=n.get(V);if(Dt.__renderTarget=y,!vt.__hasExternalTextures){let k=Math.max(1,y.width>>mt),rt=Math.max(1,y.height>>mt);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,mt,st,k,rt,y.depth,0,ht,it,null):e.texImage2D($,mt,st,k,rt,0,ht,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,$,Dt.__webglTexture,0,Lt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,$,Dt.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(P,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){let W=y.depthTexture,$=W&&W.isDepthTexture?W.type:null,mt=S(y.stencilBuffer,$),ht=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;te(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(y),mt,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(y),mt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,mt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,P)}else{let W=y.textures;for(let $=0;$<W.length;$++){let mt=W[$],ht=s.convert(mt.format,mt.colorSpace),it=s.convert(mt.type),st=v(mt.internalFormat,ht,it,mt.normalized,mt.colorSpace);te(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt(y),st,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt(y),st,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,st,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(P,y,V){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,y.depthTexture);let vt=s.convert(y.depthTexture.format),Dt=s.convert(y.depthTexture.type),k;y.depthTexture.format===Wi?k=r.DEPTH_COMPONENT24:y.depthTexture.format===Jr&&(k=r.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,k,y.width,y.height,0,vt,Dt,null)}}else K(y.depthTexture,0);let mt=$.__webglTexture,ht=Lt(y),it=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,st=y.depthTexture.format===Jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Wi)te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,st,it,mt,0);else if(y.depthTexture.format===Jr)te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,st,it,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(P){let y=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=W}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)Vt(y.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Vt(y.__webglFramebuffer[0],P,0):Vt(y.__webglFramebuffer,P,0)}else if(V){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=r.createRenderbuffer(),kt(y.__webglDepthbuffer[W],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,mt)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),kt(y.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,mt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(P,y,V){let W=n.get(P);y!==void 0&&pt(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Rt(P)}function St(P){let y=P.texture,V=n.get(P),W=n.get(y);P.addEventListener("dispose",x);let $=P.textures,mt=P.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=y.version,a.memory.textures++),mt){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let st=0;st<y.mipmaps.length;st++)V.__webglFramebuffer[it][st]=r.createFramebuffer()}else V.__webglFramebuffer[it]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)V.__webglFramebuffer[it]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ht)for(let it=0,st=$.length;it<st;it++){let vt=n.get($[it]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&te(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let st=$[it];V.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let vt=s.convert(st.format,st.colorSpace),Dt=s.convert(st.type),k=v(st.internalFormat,vt,Dt,st.normalized,st.colorSpace,P.isXRRenderTarget===!0),rt=Lt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,k,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,V.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)pt(V.__webglFramebuffer[it][st],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else pt(V.__webglFramebuffer[it],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let it=0,st=$.length;it<st;it++){let vt=$[it],Dt=n.get(vt),k=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(k=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(k,Dt.__webglTexture),Ht(k,vt),pt(V.__webglFramebuffer,P,vt,r.COLOR_ATTACHMENT0+it,k,0),m(vt)&&M(k)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,W.__webglTexture),Ht(it,y),y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)pt(V.__webglFramebuffer[st],P,y,r.COLOR_ATTACHMENT0,it,st);else pt(V.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,it,0);m(y)&&M(it),e.unbindTexture()}P.depthBuffer&&Rt(P)}function z(P){let y=P.textures;for(let V=0,W=y.length;V<W;V++){let $=y[V];if(m($)){let mt=A(P),ht=n.get($).__webglTexture;e.bindTexture(mt,ht),M(mt),e.unbindTexture()}}}let qt=[],Kt=[];function ce(P){if(P.samples>0){if(te(P)===!1){let y=P.textures,V=P.width,W=P.height,$=r.COLOR_BUFFER_BIT,mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(P),it=y.length>1;if(it)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let st=P.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let Dt=n.get(y[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,V,W,0,0,V,W,$,r.NEAREST),c===!0&&(qt.length=0,Kt.length=0,qt.push(r.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(qt.push(mt),Kt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let Dt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Lt(P){return Math.min(i.maxSamples,P.samples)}function te(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function pe(P,y){let V=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==lo&&V!==xr&&(de.getTransfer(V)===Me?(W!==Si||$!==$n)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",V)),y}function Qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=I,this.setTextureCube=tt,this.rebindTextures=Xt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function SM(r,t){function e(n,i=xr){let s,a=de.getTransfer(i);if(n===$n)return r.UNSIGNED_BYTE;if(n===Ic)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===of)return r.BYTE;if(n===lf)return r.SHORT;if(n===ya)return r.UNSIGNED_SHORT;if(n===Pc)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===uf)return r.ALPHA;if(n===ff)return r.RGB;if(n===Si)return r.RGBA;if(n===Wi)return r.DEPTH_COMPONENT;if(n===Jr)return r.DEPTH_STENCIL;if(n===Dc)return r.RED;if(n===Nc)return r.RED_INTEGER;if(n===$r)return r.RG;if(n===Uc)return r.RG_INTEGER;if(n===Fc)return r.RGBA_INTEGER;if(n===Io||n===Lo||n===Do||n===No)if(a===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===zc||n===kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Gc||n===Hc||n===Qc||n===Wc||n===Uo||n===Xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Gc)return a===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qc)return s.COMPRESSED_R11_EAC;if(n===Wc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return s.COMPRESSED_RG11_EAC;if(n===Xc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc||n===jc||n===th||n===eh||n===nh||n===ih||n===rh||n===sh||n===ah)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sh)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ah)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===lh||n===ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oh)return a===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===uh||n===Fo||n===fh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
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

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ai({vertexShader:bM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends Xi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Of,m={},M=e.getContextAttributes(),A=null,v=null,S=[],b=[],T=new Yt,x=null,w=null,R=new dn;R.viewport=new Fe;let D=new dn;D.viewport=new Fe;let L=[R,D],N=new wc,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=S[J];return nt===void 0&&(nt=new da,S[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=S[J];return nt===void 0&&(nt=new da,S[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=S[J];return nt===void 0&&(nt=new da,S[J]=nt),nt.getHandSpace()};function Q(J){let nt=b.indexOf(J.inputSource);if(nt===-1)return;let xt=S[nt];xt!==void 0&&(xt.update(J.inputSource,J.frame,l||a),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){let nt=b[J];nt!==null&&(b[J]=null,S[J].disconnect(nt))}C=null,B=null,p.reset();for(let J in m)delete m[J];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,v=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Bt=null,pt=null;M.depth&&(pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=M.stencil?Jr:Wi,Bt=M.stencil?Ma:Oi);let kt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(kt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Zn(u.textureWidth,u.textureHeight,{format:Si,type:$n,depthTexture:new Hr(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Si,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let nt=0;nt<J.removed.length;nt++){let xt=J.removed[nt],Bt=b.indexOf(xt);Bt>=0&&(b[Bt]=null,S[Bt].disconnect(xt))}for(let nt=0;nt<J.added.length;nt++){let xt=J.added[nt],Bt=b.indexOf(xt);if(Bt===-1){for(let kt=0;kt<S.length;kt++)if(kt>=b.length){b.push(xt),Bt=kt;break}else if(b[kt]===null){b[kt]=xt,Bt=kt;break}if(Bt===-1)break}let pt=S[Bt];pt&&pt.connect(xt)}}let Y=new H,I=new H;function tt(J,nt,xt){Y.setFromMatrixPosition(nt.matrixWorld),I.setFromMatrixPosition(xt.matrixWorld);let Bt=Y.distanceTo(I),pt=nt.projectionMatrix.elements,kt=xt.projectionMatrix.elements,Vt=pt[14]/(pt[10]-1),Rt=pt[14]/(pt[10]+1),Xt=(pt[9]+1)/pt[5],St=(pt[9]-1)/pt[5],z=(pt[8]-1)/pt[0],qt=(kt[8]+1)/kt[0],Kt=Vt*z,ce=Vt*qt,Lt=Bt/(-z+qt),te=Lt*-z;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(te),J.translateZ(Lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let F=Vt+Lt,pe=Rt+Lt,Qt=Kt-te,P=ce+(Bt-te),y=Xt*Rt/pe*F,V=St*Rt/pe*F;J.projectionMatrix.makePerspective(Qt,P,y,V,F,pe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,xt=J.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),N.near=D.near=R.near=nt,N.far=D.far=R.far=xt,(C!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,B=N.far),N.layers.mask=J.layers.mask|6,R.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let Bt=J.parent,pt=N.cameras;Mt(N,Bt);for(let kt=0;kt<pt.length;kt++)Mt(pt[kt],Bt);pt.length===2?tt(N,R,D):N.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Tt(J,N,Bt)};function Tt(J,nt,xt){xt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ic*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(J){return m[J]};let Ot=null;function Ht(J,nt){if(h=nt.getViewerPose(l||a),g=nt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Bt=!1;xt.length!==N.cameras.length&&(N.cameras.length=0,Bt=!0);for(let Rt=0;Rt<xt.length;Rt++){let Xt=xt[Rt],St=null;if(f!==null)St=f.getViewport(Xt);else{let qt=d.getViewSubImage(u,Xt);St=qt.viewport,Rt===0&&(t.setRenderTargetTextures(v,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(v))}let z=L[Rt];z===void 0&&(z=new dn,z.layers.enable(Rt),z.viewport=new Fe,L[Rt]=z),z.matrix.fromArray(Xt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Xt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(St.x,St.y,St.width,St.height),Rt===0&&(N.matrix.copy(z.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Bt===!0&&N.cameras.push(z)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Rt=d.getDepthInformation(xt[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,i.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<xt.length;Rt++){let Xt=xt[Rt].camera;if(Xt){let St=m[Xt];St||(St=new xo,m[Xt]=St);let z=d.getCameraImage(Xt);St.sourceTexture=z}}}}for(let xt=0;xt<S.length;xt++){let Bt=b[xt],pt=S[xt];Bt!==null&&pt!==void 0&&pt.update(Bt,nt,l||a)}Ot&&Ot(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Wt=new km;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function(J){Ot=J},this.dispose=function(){}}},TM=new Se,Xm=new jt;Xm.set(-1,0,0,0,1,0,0,0,1);function EM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),A=M.envMap,v=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(TM.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AM(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function l(v,S){let b=i[v.id];b===void 0&&(p(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));let T=S.program;n.updateUBOMapping(v,T);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let b=r.createBuffer(),T=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,T,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],b=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,w=b.length;x<w;x++){let R=b[x];if(Array.isArray(R))for(let D=0,L=R.length;D<L;D++)f(R[D],x,D,T);else f(R,x,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,b,T){if(_(v,S,b,T)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let D=0;D<w.length;D++){let L=w[D],N=m(L);g(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,T){let x=v.value,w=S+"_"+b;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let R=T[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(v){let S=v.uniforms,b=0,T=16;for(let w=0,R=S.length;w<R;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,N=D.length;L<N;L++){let C=D[L],B=Array.isArray(C.value)?C.value:[C.value];for(let Q=0,G=B.length;Q<G;Q++){let K=B[Q],Y=m(K),I=b%T,tt=I%Y.boundary,Mt=I+tt;b+=tt,Mt!==0&&T-Mt<Y.storage&&(b+=T-Mt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=Y.storage}}}let x=b%T;return x>0&&(b+=T-x),v.__size=b,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:A}}var CM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function RM(){return Ki===null&&(Ki=new go(CM,16,16,$r,Bi),Ki.name="DFG_LUT",Ki.minFilter=nn,Ki.magFilter=nn,Ki.wrapS=Qi,Ki.wrapT=Qi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var vh=class{constructor(t={}){let{canvas:e=um(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Fc,Uc,Nc]),m=new Set([$n,Oi,ya,Ma,Ic,Lc]),M=new Uint32Array(4),A=new Int32Array(4),v=new H,S=null,b=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,L=null,N=null,C=null,B=null;this._outputColorSpace=Fn;let Q=0,G=0,K=null,Y=-1,I=null,tt=new Fe,Mt=new Fe,Tt=null,Ot=new Ct(0),Ht=0,Wt=e.width,J=e.height,nt=1,xt=null,Bt=null,pt=new Fe(0,0,Wt,J),kt=new Fe(0,0,Wt,J),Vt=!1,Rt=new pa,Xt=!1,St=!1,z=new Se,qt=new H,Kt=new Fe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function te(){return K===null?nt:1}let F=n;function pe(E,O){return e.getContext(E,O)}let Qt,P,y,V,W,$,mt,ht,it,st,vt,Dt,k,rt,et,_t,ft,U,ut,j,dt,gt,at;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),F===null){let O="webgl2";if(F=pe(O,E),F===null)throw pe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(E){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),$t("WebGLRenderer: "+E.message),E}function ct(){Qt=new Fv(F),Qt.init(),dt=new SM(F,Qt),P=new Ev(F,Qt,t,dt),y=new yM(F,Qt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),N=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),V=new zv(F),W=new aM,$=new MM(F,Qt,y,W,P,dt,V),mt=new Uv(R),ht=new V_(F),gt=new wv(F,ht),it=new Ov(F,ht,V,gt),st=new Vv(F,it,ht,gt,V),U=new kv(F,P,$),et=new Av(W),vt=new sM(R,mt,Qt,P,gt,et),Dt=new EM(R,W),k=new lM,rt=new pM(Qt),ft=new bv(R,mt,y,st,g,c),_t=new vM(R,st,P),at=new AM(F,V,P,y),ut=new Tv(F,Qt,V),j=new Bv(F,Qt,V),V.programs=vt.programs,R.capabilities=P,R.extensions=Qt,R.properties=W,R.renderLists=k,R.shadowMap=_t,R.state=y,R.info=V}_!==$n&&(w=new Hv(_,e.width,e.height,o,i,s));let ot=new Bf(R,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(Wt,J,!1))},this.getSize=function(E){return E.set(Wt,J)},this.setSize=function(E,O,Z=!0){if(ot.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=E,J=O,e.width=Math.floor(E*nt),e.height=Math.floor(O*nt),Z===!0&&(e.style.width=E+"px",e.style.height=O+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Wt*nt,J*nt).floor()},this.setDrawingBufferSize=function(E,O,Z){Wt=E,J=O,nt=Z,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===$n){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,O,Z,X){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,Z,X),y.viewport(tt.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,O,Z,X){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,O,Z,X),y.scissor(Mt.copy(kt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){y.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){xt=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Z=!0){let X=0;if(E){let q=!1;if(K!==null){let yt=K.texture.format;q=p.has(yt)}if(q){let yt=K.texture.type,It=m.has(yt),wt=ft.getClearColor(),Ut=ft.getClearAlpha(),Gt=wt.r,ie=wt.g,he=wt.b;It?(M[0]=Gt,M[1]=ie,M[2]=he,M[3]=Ut,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=Gt,A[1]=ie,A[2]=he,A[3]=Ut,F.clearBufferiv(F.COLOR,0,A))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ft.dispose(),k.dispose(),rt.dispose(),W.dispose(),mt.dispose(),st.dispose(),gt.dispose(),at.dispose(),vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",we),ot.removeEventListener("sessionend",ve),oe.stop()};function zt(E){E.preventDefault(),pf("WebGLRenderer: Context Lost."),D=!0}function lt(){pf("WebGLRenderer: Context Restored."),D=!1;let E=V.autoReset,O=_t.enabled,Z=_t.autoUpdate,X=_t.needsUpdate,q=_t.type;ct(),V.autoReset=E,_t.enabled=O,_t.autoUpdate=Z,_t.needsUpdate=X,_t.type=q}function Et(E){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pt(E){let O=E.target;O.removeEventListener("dispose",Pt),Jt(O)}function Jt(E){We(E),W.remove(E)}function We(E){let O=W.get(E).programs;O!==void 0&&(O.forEach(function(Z){vt.releaseProgram(Z)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Z,X,q,yt){O===null&&(O=ce);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=ln(E,O,Z,X,q);y.setMaterial(X,It);let Ut=Z.index,Gt=1;if(X.wireframe===!0){if(Ut=it.getWireframeAttribute(Z),Ut===void 0)return;Gt=2}let ie=Z.drawRange,he=Z.attributes.position,Ft=ie.start*Gt,ye=(ie.start+ie.count)*Gt;yt!==null&&(Ft=Math.max(Ft,yt.start*Gt),ye=Math.min(ye,(yt.start+yt.count)*Gt)),Ut!==null?(Ft=Math.max(Ft,0),ye=Math.min(ye,Ut.count)):he!=null&&(Ft=Math.max(Ft,0),ye=Math.min(ye,he.count));let $e=ye-Ft;if($e<0||$e===1/0)return;gt.setup(q,X,wt,Z,Ut);let De,Ce=ut;if(Ut!==null&&(De=ht.get(Ut),Ce=j,Ce.setIndex(De)),q.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*te()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(q.isLine){let Mn=X.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*te()),q.isLineSegments?Ce.setMode(F.LINES):q.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else q.isPoints?Ce.setMode(F.POINTS):q.isSprite&&Ce.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Mn=q._multiDrawStarts,At=q._multiDrawCounts,Un=q._multiDrawCount,_e=Ut?ht.get(Ut).bytesPerElement:1,xi=W.get(X).currentProgram.getUniforms();for(let Gi=0;Gi<Un;Gi++)xi.setValue(F,"_gl_DrawID",Gi),Ce.render(Mn[Gi]/_e,At[Gi])}else if(q.isInstancedMesh)Ce.renderInstances(Ft,$e,q.count);else if(Z.isInstancedBufferGeometry){let Mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,At=Math.min(Z.instanceCount,Mn);Ce.renderInstances(Ft,$e,At)}else Ce.render(Ft,$e)};function ne(E,O,Z,X){L!==null&&E.isNodeMaterial&&L.setObject(X,E),Xt===!0&&et.setState(E,Z,!1),E.transparent===!0&&E.side===Jn&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Ve(E,O,X),E.side=Yr,E.needsUpdate=!0,Ve(E,O,X),E.side=Jn):Ve(E,O,X)}this.compile=function(E,O,Z=null){Z===null&&(Z=E),L!==null&&L.renderStart(E,O,Z),b=rt.get(Z),b.init(O),x.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==Z&&E.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),St=this.localClippingEnabled,Xt=et.init(this.clippingPlanes,St),Xt===!0&&et.setGlobalState(this.clippingPlanes,O),L!==null&&_t.render(b.state.shadowsArray,Z,O);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let yt=q.material;if(yt)if(Array.isArray(yt))for(let It=0;It<yt.length;It++){let wt=yt[It];ne(wt,Z,O,q),X.add(wt)}else ne(yt,Z,O,q),X.add(yt)}),b=x.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(E,O,Z=null){let X=this.compile(E,O,Z);return new Promise(q=>{function yt(){if(X.forEach(function(It){let Ut=W.get(It).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(It)}),X.size===0){q(E);return}setTimeout(yt,10)}Qt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let fe=null;function Xe(E){fe&&fe(E)}function we(){oe.stop()}function ve(){oe.start()}let oe=new km;oe.setAnimationLoop(Xe),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(E){fe=E,ot.setAnimationLoop(E),E===null?oe.stop():oe.start()},ot.addEventListener("sessionstart",we),ot.addEventListener("sessionend",ve),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,O);let Z=ot.enabled===!0&&ot.isPresenting===!0,X=w!==null&&(K===null||Z)&&w.begin(R,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,K),b=rt.get(E,x.length),b.init(O),b.state.textureUnits=$.getTextureUnits(),x.push(b),z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Rt.setFromProjectionMatrix(z,Ni,O.reversedDepth),St=this.localClippingEnabled,Xt=et.init(this.clippingPlanes,St),S=k.get(E,T.length),S.init(),T.push(S),ot.enabled===!0&&ot.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&Dn(It,O,-1/0,R.sortObjects)}Dn(E,O,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(xt,Bt),Lt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Lt&&ft.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&et.beginShadows();let q=b.state.shadowsArray;if(_t.render(q,E,O),Xt===!0&&et.endShadows(),(X&&w.hasRenderPass())===!1){let It=S.opaque,wt=S.transmissive;if(b.setupLights(),O.isArrayCamera){let Ut=O.cameras;if(wt.length>0)for(let Gt=0,ie=Ut.length;Gt<ie;Gt++){let he=Ut[Gt];yn(It,wt,E,he)}Lt&&ft.render(E);for(let Gt=0,ie=Ut.length;Gt<ie;Gt++){let he=Ut[Gt];Ie(S,E,he,he.viewport)}}else wt.length>0&&yn(It,wt,E,O),Lt&&ft.render(E),Ie(S,E,O)}K!==null&&G===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),X&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),gt.resetDefaultState(),Y=-1,I=null,x.pop(),x.length>0?(b=x[x.length-1],$.setTextureUnits(b.state.textureUnits),Xt===!0&&et.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,L!==null&&L.renderEnd()};function Dn(E,O,Z,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Rt)){X&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);let It=st.update(E),wt=E.material;wt.visible&&S.push(E,It,wt,Z,Kt.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Rt))){let It=st.update(E),wt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Kt.copy(It.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(z)),Array.isArray(wt)){let Ut=It.groups;for(let Gt=0,ie=Ut.length;Gt<ie;Gt++){let he=Ut[Gt],Ft=wt[he.materialIndex];Ft&&Ft.visible&&S.push(E,It,Ft,Z,Kt.z,he,O)}}else wt.visible&&S.push(E,It,wt,Z,Kt.z,null,O)}}let yt=E.children;for(let It=0,wt=yt.length;It<wt;It++)Dn(yt[It],O,Z,X)}function Ie(E,O,Z,X){let{opaque:q,transmissive:yt,transparent:It}=E;b.setupLightsView(Z),Xt===!0&&et.setGlobalState(R.clippingPlanes,Z),X&&y.viewport(tt.copy(X)),q.length>0&&Nn(q,O,Z),yt.length>0&&Nn(yt,O,Z),It.length>0&&Nn(It,O,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yn(E,O,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let Ft=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new Zn(1,1,{generateMipmaps:!0,type:Ft?Bi:$n,minFilter:$i,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let yt=b.state.transmissionRenderTarget[X.id],It=X.viewport||tt;yt.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),Ut=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(Ot),Ht=R.getClearAlpha(),Ht<1&&R.setClearColor(16777215,.5),R.clear(),Lt&&ft.render(Z);let ie=R.toneMapping;R.toneMapping=Fi;let he=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),Xt===!0&&et.setGlobalState(R.clippingPlanes,X),Nn(E,Z,X),$.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ye=0,$e=O.length;ye<$e;ye++){let De=O[ye],{object:Ce,geometry:Mn,material:At,group:Un}=De;if(At.side===Jn&&Ce.layers.test(X.layers)){let _e=At.side;At.side=gn,At.needsUpdate=!0,Je(Ce,Z,X,Mn,At,Un),At.side=_e,At.needsUpdate=!0,Ft=!0}}Ft===!0&&($.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt))}R.setRenderTarget(wt,Ut,Gt),R.setClearColor(Ot,Ht),he!==void 0&&(X.viewport=he),R.toneMapping=ie}function Nn(E,O,Z){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,yt=E.length;q<yt;q++){let It=E[q],{object:wt,geometry:Ut,group:Gt}=It,ie=It.material;ie.allowOverride===!0&&X!==null&&(ie=X),wt.layers.test(Z.layers)&&Je(wt,O,Z,Ut,ie,Gt)}}function Je(E,O,Z,X,q,yt){L!==null&&q.isNodeMaterial&&L.setObject(E,q),E.onBeforeRender(R,O,Z,X,q,yt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,O,Z,X,E,yt),q.transparent===!0&&q.side===Jn&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,E,yt),q.side=Yr,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,E,yt),q.side=Jn):R.renderBufferDirect(Z,O,X,q,E,yt),E.onAfterRender(R,O,Z,X,q,yt)}function Ve(E,O,Z){O.isScene!==!0&&(O=ce);let X=W.get(E),q=b.state.lights,yt=b.state.shadowsArray,It=q.state.version,wt=vt.getParameters(E,q.state,yt,O,Z,b.state.lightProbeGridArray),Ut=vt.getProgramCacheKey(wt),Gt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=mt.get(E.envMap||X.environment,ie),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Pt),Gt=new Map,X.programs=Gt);let he=Gt.get(Ut);if(he!==void 0){if(X.currentProgram===he&&X.lightsStateVersion===It)return Vi(E,wt),he}else wt.uniforms=vt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Z,wt),E.onBeforeCompile(wt,R),he=vt.acquireProgram(wt,Ut),Gt.set(Ut,he),X.uniforms=wt.uniforms;let Ft=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=et.uniform),Vi(E,wt),X.needsLights=_i(E),X.lightsStateVersion=It,X.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.sunLights.value=q.state.sun,Ft.sunLightShadows.value=q.state.sunShadow,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.sunShadowMatrix.value=q.state.sunShadowMatrix,Ft.sunShadowCascade.value=q.state.sunShadowCascade,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=he,X.uniformsList=null,he}function en(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=wa.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Vi(E,O){let Z=W.get(E);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Qs(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Z=0,X=E.length;Z<X;Z++){let q=E[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function ln(E,O,Z,X,q){O.isScene!==!0&&(O=ce),$.resetTextureUnits();let yt=O.fog,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,wt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:de.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Gt=mt.get(X.envMap||It,Ut),ie=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,he=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!Z.morphAttributes.position,ye=!!Z.morphAttributes.normal,$e=!!Z.morphAttributes.color,De=Fi;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(De=R.toneMapping);let Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mn=Ce!==void 0?Ce.length:0,At=W.get(X),Un=b.state.lights;if(Xt===!0&&(St===!0||E!==I)){let Le=E===I&&X.id===Y;et.setState(X,E,Le)}let _e=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Un.state.version||At.outputColorSpace!==wt||q.isBatchedMesh&&At.batching===!1||!q.isBatchedMesh&&At.batching===!0||q.isBatchedMesh&&At.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&At.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&At.instancing===!1||!q.isInstancedMesh&&At.instancing===!0||q.isSkinnedMesh&&At.skinning===!1||!q.isSkinnedMesh&&At.skinning===!0||q.isInstancedMesh&&At.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&At.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&At.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&At.instancingMorph===!1&&q.morphTexture!==null||At.envMap!==Gt||X.fog===!0&&At.fog!==yt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==ie||At.vertexTangents!==he||At.morphTargets!==Ft||At.morphNormals!==ye||At.morphColors!==$e||At.toneMapping!==De||At.morphTargetsCount!==Mn||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,At.__version=X.version);let xi=At.currentProgram;_e===!0&&(xi=Ve(X,O,q),L&&X.isNodeMaterial&&L.onUpdateProgram(X,xi,At));let Gi=!1,Lr=!1,Xs=!1,Ee=xi.getUniforms(),Ye=At.uniforms;if(y.useProgram(xi.program)&&(Gi=!0,Lr=!0,Xs=!0),X.id!==Y&&(Y=X.id,Lr=!0),At.needsLights){let Le=Qs(b.state.lightProbeGridArray,q);At.lightProbeGrid!==Le&&(At.lightProbeGrid=Le,Lr=!0)}if(Gi||I!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(F,"projectionMatrix",E.projectionMatrix),Ee.setValue(F,"viewMatrix",E.matrixWorldInverse);let Nr=Ee.map.cameraPosition;Nr!==void 0&&Nr.setValue(F,qt.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Lr=!0,Xs=!0)}if(At.needsLights&&(Un.state.sunShadowMap.length>0&&Ee.setValue(F,"sunShadowMap",Un.state.sunShadowMap,$),Un.state.directionalShadowMap.length>0&&Ee.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,$),Un.state.spotShadowMap.length>0&&Ee.setValue(F,"spotShadowMap",Un.state.spotShadowMap,$),Un.state.pointShadowMap.length>0&&Ee.setValue(F,"pointShadowMap",Un.state.pointShadowMap,$)),q.isSkinnedMesh){Ee.setOptional(F,q,"bindMatrix"),Ee.setOptional(F,q,"bindMatrixInverse");let Le=q.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ee.setValue(F,"boneTexture",Le.boneTexture,$))}q.isBatchedMesh&&(Ee.setOptional(F,q,"batchingTexture"),Ee.setValue(F,"batchingTexture",q._matricesTexture,$),Ee.setOptional(F,q,"batchingIdTexture"),Ee.setValue(F,"batchingIdTexture",q._indirectTexture,$),Ee.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ee.setValue(F,"batchingColorTexture",q._colorsTexture,$));let Dr=Z.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&U.update(q,Z,xi),(Lr||At.receiveShadow!==q.receiveShadow)&&(At.receiveShadow=q.receiveShadow,Ee.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(Ye.envMapIntensity.value=O.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=RM()),Lr){if(Ee.setValue(F,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&qe(Ye,Xs),yt&&X.fog===!0&&Dt.refreshFogUniforms(Ye,yt),Dt.refreshMaterialUniforms(Ye,X,nt,J,b.state.transmissionRenderTarget[E.id]),At.needsLights&&At.lightProbeGrid){let Le=At.lightProbeGrid;Ye.probesSH.value=Le.texture,Ye.probesMin.value.copy(Le.boundingBox.min),Ye.probesMax.value.copy(Le.boundingBox.max),Ye.probesResolution.value.copy(Le.resolution)}wa.upload(F,en(At),Ye,$)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wa.upload(F,en(At),Ye,$),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(F,"center",q.center),Ee.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ee.setValue(F,"normalMatrix",q.normalMatrix),Ee.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Le=X.uniformsGroups;for(let Nr=0,qs=Le.length;Nr<qs;Nr++){let op=Le[Nr];at.update(op,xi),at.bind(op,xi)}}return xi}function qe(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function _i(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,O,Z){let X=W.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=O,W.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Z=W.get(E);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Z=0){K=E,Q=O,G=Z;let X=null,q=!1,yt=!1;if(E){let wt=W.get(E);if(wt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,wt.__webglFramebuffer),tt.copy(E.viewport),Mt.copy(E.scissor),Tt=E.scissorTest,y.viewport(tt),y.scissor(Mt),y.setScissorTest(Tt),Y=-1;return}else if(wt.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(wt.__hasExternalTextures)$.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ie=E.depthTexture;if(wt.__boundDepthTexture!==ie){if(ie!==null&&W.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(yt=!0);let Gt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?X=Gt[O][Z]:X=Gt[O],q=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?X=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?X=Gt[Z]:X=Gt,tt.copy(E.viewport),Mt.copy(E.scissor),Tt=E.scissorTest}else tt.copy(pt).multiplyScalar(nt).floor(),Mt.copy(kt).multiplyScalar(nt).floor(),Tt=Vt;if(Z!==0&&(X=N),y.bindFramebuffer(F.FRAMEBUFFER,X)&&y.drawBuffers(E,X),y.viewport(tt),y.scissor(Mt),y.setScissorTest(Tt),q){let wt=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,Z)}else if(yt){let wt=O;for(let Ut=0;Ut<E.textures.length;Ut++){let Gt=W.get(E.textures[Ut]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ut,Gt.__webglTexture,Z,wt)}}else if(E!==null&&Z!==0){let wt=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,Z)}Y=-1};function Ws(E){let O=W.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=P.textureFormatReadable(E.format),O.__typeReadable=P.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Z,X,q,yt,It,wt=0){if(!(E&&E.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){y.bindFramebuffer(F.FRAMEBUFFER,Ut);try{let Gt=E.textures[wt],ie=Gt.format,he=Gt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Ft=Ws(Gt);if(Ft.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&Z>=0&&Z<=E.height-q&&F.readPixels(O,Z,X,q,dt.convert(ie),dt.convert(he),yt)}finally{let Gt=K!==null?W.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,O,Z,X,q,yt,It,wt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(O>=0&&O<=E.width-X&&Z>=0&&Z<=E.height-q){y.bindFramebuffer(F.FRAMEBUFFER,Ut);let Gt=E.textures[wt],ie=Gt.format,he=Gt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Ft=Ws(Gt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(O,Z,X,q,dt.convert(ie),dt.convert(he),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $e=K!==null?W.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,$e);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dm(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ye),F.deleteSync(De),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(E.image.width*X),yt=Math.floor(E.image.height*X),It=O!==null?O.x:0,wt=O!==null?O.y:0;$.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,It,wt,q,yt),y.unbindTexture()},this.copyTextureToTexture=function(E,O,Z=null,X=null,q=0,yt=0){let It,wt,Ut,Gt,ie,he,Ft,ye,$e,De=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(Z!==null)It=Z.max.x-Z.min.x,wt=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,Gt=Z.min.x,ie=Z.min.y,he=Z.isBox3?Z.min.z:0;else{let Ye=Math.pow(2,-q);It=Math.floor(De.width*Ye),wt=Math.floor(De.height*Ye),E.isDataArrayTexture?Ut=De.depth:E.isData3DTexture?Ut=Math.floor(De.depth*Ye):Ut=1,Gt=0,ie=0,he=0}X!==null?(Ft=X.x,ye=X.y,$e=X.z):(Ft=0,ye=0,$e=0);let Ce=dt.convert(O.format),Mn=dt.convert(O.type),At;O.isData3DTexture?($.setTexture3D(O,0),At=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),At=F.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),At=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Un=y.getParameter(F.UNPACK_ROW_LENGTH),_e=y.getParameter(F.UNPACK_IMAGE_HEIGHT),xi=y.getParameter(F.UNPACK_SKIP_PIXELS),Gi=y.getParameter(F.UNPACK_SKIP_ROWS),Lr=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,De.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),y.pixelStorei(F.UNPACK_SKIP_ROWS,ie),y.pixelStorei(F.UNPACK_SKIP_IMAGES,he);let Xs=E.isDataArrayTexture||E.isData3DTexture,Ee=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Ye=W.get(E),Dr=W.get(O),Le=W.get(Ye.__renderTarget),Nr=W.get(Dr.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Le.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let qs=0;qs<Ut;qs++)Xs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(E).__webglTexture,q,he+qs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(O).__webglTexture,yt,$e+qs)),F.blitFramebuffer(Gt,ie,It,wt,Ft,ye,It,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||W.has(E)){let Ye=W.get(E),Dr=W.get(O);y.bindFramebuffer(F.READ_FRAMEBUFFER,C),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Le=0;Le<Ut;Le++)Xs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,q,he+Le):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,q),Ee?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dr.__webglTexture,yt,$e+Le):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dr.__webglTexture,yt),q!==0?F.blitFramebuffer(Gt,ie,It,wt,Ft,ye,It,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Ee?F.copyTexSubImage3D(At,yt,Ft,ye,$e+Le,Gt,ie,It,wt):F.copyTexSubImage2D(At,yt,Ft,ye,Gt,ie,It,wt);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(At,yt,Ft,ye,$e,It,wt,Ut,Ce,Mn,De.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(At,yt,Ft,ye,$e,It,wt,Ut,Ce,De.data):F.texSubImage3D(At,yt,Ft,ye,$e,It,wt,Ut,Ce,Mn,De):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,Ft,ye,It,wt,Ce,Mn,De.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,Ft,ye,De.width,De.height,Ce,De.data):F.texSubImage2D(F.TEXTURE_2D,yt,Ft,ye,It,wt,Ce,Mn,De);y.pixelStorei(F.UNPACK_ROW_LENGTH,Un),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),y.pixelStorei(F.UNPACK_SKIP_PIXELS,xi),y.pixelStorei(F.UNPACK_SKIP_ROWS,Gi),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Lr),yt===0&&O.generateMipmaps&&F.generateMipmap(At),y.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Q=0,G=0,K=null,y.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Sh=class extends _s{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Yi;t.deleteAttribute("uv");let e=new Zi({side:gn}),n=new Zi,i=new To(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new ge(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Gr(t,n,6),o=new mn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ge(t,Aa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ge(t,Aa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ge(t,Aa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ge(t,Aa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ge(t,Aa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ge(t,Aa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Aa(r){return new yo({color:0,emissive:16777215,emissiveIntensity:r})}function vr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function e0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qo={duration:.5,overwrite:!1,delay:0},nd,_n,Oe,wi=1e8,Pe=1/wi,Xf=Math.PI*2,PM=Xf/4,IM=0,n0=Math.sqrt,LM=Math.cos,DM=Math.sin,an=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},Mr=function(t){return typeof t=="number"},Lh=function(t){return typeof t>"u"},nr=function(t){return typeof t=="object"},ti=function(t){return t!==!1},id=function(){return typeof window<"u"},bh=function(t){return Ge(t)||an(t)},i0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,NM=/random\([^)]+\)/g,UM=/,\s*/g,qm=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,FM=/[^,'"\[\]\s]+/gi,OM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,tr,qf,ad,ci={},Ah={},r0,s0=function(t){return(Ah=Ra(t,ci))&&An},Dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Yo=function(t,e){return!e&&console.warn(t)},a0=function(t,e){return t&&(ci[t]=e)&&Ah&&(Ah[t]=e)||ci},Zo=function(){return 0},BM={suppressEvents:!0,isStart:!0,kill:!1},wh={suppressEvents:!0,kill:!1},zM={suppressEvents:!0},od={},jr=[],Yf={},o0,Kn={},kf={},Ym=30,Th=[],ld="",cd=function(t){var e=t[0],n,i;if(nr(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Th.length;i--&&!Th[i].targetTest(e););n=Th[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dd(t[i],n)))||t.splice(i,1);return t},ts=function(t){return t._gsap||cd(Ti(t))[0]._gsap},hd=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():Lh(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},Cs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ch=function(){var t=jr.length,e=jr.slice(0),n,i;for(Yf={},jr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ud=function(t){return!!(t._initted||t._startAt||t.add)},l0=function(t,e,n,i){jr.length&&!_n&&Ch(),t.render(e,n,i||!!(_n&&e<0&&ud(t))),jr.length&&!_n&&Ch()},c0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(FM).length<2?e:an(t)?t.trim():t},h0=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},VM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ra=function(t,e){for(var n in e)t[n]=e[n];return t},Zm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=nr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Rh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qo=function(t){var e=t.parent||ze,n=t.keyframes?VM(En(t.keyframes)):hi;if(ti(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},u0=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Nh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},es=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},HM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Zf=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(wh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},QM=function r(t){return!t||t._ts&&r(t.parent)},Jm=function(t){return t._repeat?Pa(t._tTime,t=t.duration()+t._rDelay)*t:0},Pa=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},Ph=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Uh=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Pe)||0))},Fh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Uh(t),n._dirty||ws(n,t)),t},f0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ph(t.rawTime(),e),(!e._dur||Ko(0,e.totalDuration(),n)-e._tTime>Pe)&&e.render(n,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Pe}},er=function(t,e,n,i){return e.parent&&es(e),e._start=Be((Mr(n)?n:n||t!==ze?bi(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),u0(t,e,"_first","_last",t._sort?"_start":0),Jf(e)||(t._recent=e),i||f0(t,e),t._ts<0&&Fh(t,t._tTime),t},d0=function(t,e){return(ci.ScrollTrigger||Dh("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},p0=function(t,e,n,i,s){if(gd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&o0!==jn.frame)return jr.push(t),t._lazy=[s,i],1},WM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Jf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},XM=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&WM(t)&&!(!t._initted&&Jf(t))||(t._ts<0||t._dp._ts<0)&&!Jf(t))?0:1,o=t._rDelay,c=0,l,h,d;if(o&&t._repeat&&(c=Ko(0,t._tDur,e),h=Pa(c,o),t._yoyo&&h&1&&(a=1-a),h!==Pa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||_n||i||t._zTime===Pe||!e&&t._zTime){if(!t._initted&&p0(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?Pe:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Zf(t,e,n,!0),t._onUpdate&&!n&&li(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&li(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&es(t,1),!n&&!_n&&(li(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ia=function(t,e,n,i){var s=t._repeat,a=Be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Be(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Fh(t,t._tTime=t._tDur*o),t.parent&&Uh(t),n||ws(t.parent,t),t},$m=function(t){return t instanceof Tn?ws(t):Ia(t,t._dur)},YM={_start:0,endTime:Zo,totalDuration:Zo},bi=function r(t,e,n){var i=t.labels,s=t._recent||YM,a=t.duration()>=wi?s.endTime(!1):t._dur,o,c,l;return an(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(En(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Wo=function(t,e,n){var i=Mr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ti(c.vars.inherit)&&c.parent;a.immediateRender=ti(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ze(e[0],a,e[s+1])},ns=function(t,e){return t||t===0?e(t):e},Ko=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!an(t)||!(e=OM.exec(t))?"":e[1]},ZM=function(t,e,n){return ns(n,function(i){return Ko(t,e,i)})},$f=[].slice,m0=function(t,e){return t&&nr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&nr(t[0]))&&!t.nodeType&&t!==tr},JM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return an(i)&&!e||m0(i,1)?(s=n).push.apply(s,Ti(i)):n.push(i)})||n},Ti=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):an(t)&&!n&&(qf||!La())?$f.call((e||ad).querySelectorAll(t),0):En(t)?JM(t,n):m0(t)?$f.call(t,0):t?[t]:[]},Kf=function(t){return t=Ti(t)[0]||Yo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ti(e,n.querySelectorAll?n:n===t?Yo("Invalid scope")||ad.createElement("div"):t)}},g0=function(t){return t.sort(function(){return .5-Math.random()})},_0=function(t){if(Ge(t))return t;var e=nr(t)?t:{each:t},n=Ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,d=i;return an(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,p=a[_],m,M,A,v,S,b,T,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,wi])[1],!w){for(T=-wi;T<(T=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=c?Math.min(w,_)*h-.5:i%w,M=w===wi?0:c?_*d/w-.5:i/w|0,T=0,x=wi,b=0;b<_;b++)A=b%w-m,v=M-(b/w|0),p[b]=S=l?Math.abs(l==="y"?v:A):n0(A*A+v*v),S>T&&(T=S),S<x&&(x=S);i==="random"&&g0(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:l?l==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=xn(e.amount||e.each)||0,n=n&&_<0?cS(n):n}return _=(p[u]-p.min)/p.max||0,Be(p.b+(n?n(_):_)*p.v)+p.u}},jf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Mr(n)?0:xn(n))}},x0=function(t,e){var n=En(t),i,s;return!n&&nr(t)&&(i=n=t.radius||wi,t.values?(t=Ti(t.values),(s=!Mr(t[0]))&&(i*=i)):t=jf(t.increment)),ns(e,n?Ge(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=wi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-c,u=u*u+f*f):u=Math.abs(t[d]-o),u<l&&(l=u,h=d);return h=!i||l<=i?t[h]:a,s||h===a||Mr(a)?h:h+xn(a)}:jf(t))},v0=function(t,e,n,i){return ns(En(t)?!e:n===!0?!!(n=0):!i,function(){return En(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},$M=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},KM=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},jM=function(t,e,n){return M0(t,e,0,1,n)},y0=function(t,e,n){return ns(n,function(i){return t[~~e(i)]})},tS=function r(t,e,n){var i=e-t;return En(t)?y0(t,r(0,t.length),e):ns(n,function(s){return(i+(s-t)%i)%i+t})},eS=function r(t,e,n){var i=e-t,s=i*2;return En(t)?y0(t,r(0,t.length-1),e):ns(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Da=function(t){return t.replace(NM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(UM);return v0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},M0=function(t,e,n,i,s){var a=e-t,o=i-n;return ns(s,function(c){return n+((c-t)/a*o||0)})},nS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=an(t),o={},c,l,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(En(t)&&!En(e)){for(h=[],d=t.length,u=d-2,l=1;l<d;l++)h.push(r(t[l-1],t[l]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Ra(En(t)?[]:{},t));if(!h){for(c in e)pd.call(o,t,c,"get",e[c]);s=function(g){return vd(g,o)||(a?t.p:t)}}}return ns(n,s)},Km=function(t,e,n){var i=t.labels,s=wi,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},li=function(t,e,n){var i=t.vars,s=i[e],a=Oe,o=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&jr.length&&Ch(),o&&(Oe=o),h=c?s.apply(l,c):s.call(l),Oe=a,h},Go=function(t){return es(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&li(t,"onInterrupt"),t},Ca,S0=[],b0=function(t){if(t)if(t=!t.name&&t.default||t,id()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Zo,render:vd,add:pd,kill:vS,modifier:xS,rawVars:0},a={targetTest:0,get:0,getSetter:Oh,aliases:{},register:0};if(La(),t!==i){if(Kn[e])return;hi(i,hi(Rh(t,s),a)),Ra(i.prototype,Ra(s,Rh(t,a))),Kn[i.prop=e]=i,t.targetTest&&(Th.push(i),od[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}a0(e,i),t.register&&t.register(An,i,kn)}else S0.push(t)},Re=255,Ho={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Vf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},w0=function(t,e,n){var i=t?Mr(t)?[t>>16,t>>8&Re,t&Re]:0:Ho.black,s,a,o,c,l,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ho[t])i=Ho[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(qm),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Vf(c+1/3,s,a),i[1]=Vf(c,s,a),i[2]=Vf(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(rd),n&&i.length<4&&(i[3]=1),i}else i=t.match(qm)||Ho.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Re,a=i[1]/Re,o=i[2]/Re,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?c=l=0:(f=d-u,l=h>.5?f/(2-d-u):f/(d+u),c=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},T0=function(t){var e=[],n=[],i=-1;return t.split(yr).forEach(function(s){var a=s.match(As)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},jm=function(t,e,n){var i="",s=(t+i).match(yr),a=e?"hsla(":"rgba(",o=0,c,l,h,d;if(!s)return t;if(s=s.map(function(u){return(u=w0(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=T0(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(yr,"1").split(As),d=l.length-1;o<d;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(yr),d=l.length-1;o<d;o++)i+=l[o]+s[o];return i+l[d]},yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ho)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),iS=/hsl[a]?\(/,fd=function(t){var e=t.join(" "),n;if(yr.lastIndex=0,yr.test(e))return n=iS.test(e),t[1]=jm(t[1],n),t[0]=jm(t[0],n,T0(t[1])),!0},Jo,jn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,d,u,f,g=function _(p){var m=r()-i,M=p===!0,A,v,S,b;if((m>t||m<0)&&(n+=m-e),i+=m,S=i-n,A=S-a,(A>0||M)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=A+(A>=s?4:s-A),v=1),M||(c=l(_)),v)for(f=0;f<o.length;f++)o[f](S,u,b,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){r0&&(!qf&&id()&&(tr=qf=window,ad=tr.document||{},ci.gsap=An,(tr.gsapVersions||(tr.gsapVersions=[])).push(An.version),s0(Ah||tr.GreenSockGlobals||!tr.gsap&&tr||{}),S0.forEach(b0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Jo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Jo=0,l=Zo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,M){var A=m?function(v,S,b,T){p(v,S,b,T),d.remove(A)}:p;return d.remove(p),o[M?"unshift":"push"](A),La(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),La=function(){return!Jo&&jn.wake()},me={},rS=/^[\d.\-M][\d.\-,\s]/,sS=/["']/g,aS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(sS,"").trim():+l,i=c.substr(o+1).trim();return e},oS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lS=function(t){var e=(t+"").split("("),n=me[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[aS(e[1])]:oS(t).split(",").map(c0)):me._CE&&rS.test(t)?me._CE("",t):n},cS=function(t){return function(e){return 1-t(1-e)}},Ts=function(t,e){return t&&(Ge(t)?t:me[t]||lS(t))||e},Rs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return zn(t,function(o){me[o]=ci[o]=s,me[a=o.toLowerCase()]=n;for(var c in s)me[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=me[o+"."+c]=s[c]}),s},E0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Xf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*DM((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:E0(o);return s=Xf/s,c.config=function(l,h){return r(t,l,h)},c},Hf=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:E0(n);return i.config=function(s){return r(t,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Rs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});me.Linear.easeNone=me.none=me.Linear.easeIn;Rs("Elastic",Gf("in"),Gf("out"),Gf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rs("Circ",function(r){return-(n0(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-LM(r*PM)+1});Rs("Back",Hf("in"),Hf("out"),Hf());me.SteppedEase=me.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Pe;return function(o){return((i*Ko(0,a,o)|0)+s)*n}}};qo.ease=me["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ld+=r+","+r+"Params,"});var dd=function(t,e){this.id=IM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:hd,this.set=e?e.getSetter:Oh},$o=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ia(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),Jo||jn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(La(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fh(this,n),!s._dp||s.parent||f0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&er(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),l0(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Pa(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ph(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pe?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Uh(this),HM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(La(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&er(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ph(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zM);var i=_n;return _n=n,ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$m(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$m(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(bi(this,n),ti(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ti(i)),this._dur||(this._zTime=-Pe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pe)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ge(n)?n:h0,c=function(){var h=i.then;i.then=null,s&&s(),Ge(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Go(this)},r})();hi($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){e0(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ti(n.sortChildren),ze&&er(n.parent||ze,vr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&d0(vr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Wo(0,arguments,this),this},e.from=function(i,s,a){return Wo(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Wo(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ze(i,s,bi(this,a),1),this},e.call=function(i,s,a){return er(this,Ze.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Ze(i,a,bi(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,Qo(a).immediateRender=ti(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},e.staggerFromTo=function(i,s,a,o,c,l,h,d){return o.startAt=a,Qo(o).immediateRender=ti(o.immediateRender),this.staggerTo(i,s,o,c,l,h,d)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Be(i),d=this._zTime<0!=i<0&&(this._initted||!l),u,f,g,_,p,m,M,A,v,S,b,T;if(this!==ze&&h>c&&i>=0&&(h=c),h!==this._tTime||a||d){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,A=this._ts,m=!A,d&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Be(h%p),h===c?(_=this._repeat,u=l):(S=Be(h/p),_=~~S,_&&_===S&&(u=l,_--),u>l&&(u=l)),S=Pa(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),b&&_&1&&(u=l-u,T=1),_!==S&&!this._lock){var x=b&&S&1,w=x===(b&&_&1);if(_<S&&(x=!x),o=x?0:h%l?l:h,this._lock=1,this.render(o||(T?0:Be(_*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=qM(this,Be(o),Be(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!S&&(li(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=-Pe);break}}f=g}else{f=this._last;for(var R=i<0?i:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||_n&&ud(f)),u!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=R?-Pe:Pe);break}}f=g}}if(M&&!s&&(this.pause(),M.render(u>=o?0:-Pe)._zTime=u>=o?1:-1,this._ts))return this._start=v,Uh(this),this.render(i,s,a);this._onUpdate&&!s&&li(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&es(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(li(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Mr(s)||(s=bi(this,s,i)),!(i instanceof $o)){if(En(i))return i.forEach(function(o){return a.add(o,s)}),this;if(an(i))return this.addLabel(i,s);if(Ge(i))i=Ze.delayedCall(0,i);else return this}return this!==i?er(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-wi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ze?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return an(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&Nh(this,i),i===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ze.delayedCall(0,s||Zo,a);return o.data="isPause",this._hasPause=1,er(this,o,bi(this,i))},e.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&es(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Kr!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Ti(i),c=this._first,l=Mr(s),h;c;)c instanceof Ze?kM(c._targets,o)&&(l?(!Kr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),c=s,l=c.startAt,h=c.onStart,d=c.onStartParams,u=c.immediateRender,f,g=Ze.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Pe,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Ia(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,hi({startAt:{time:bi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Km(this,bi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Km(this,bi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pe)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Be(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return ws(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=wi,l,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,er(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Be(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Ia(a,a===ze&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ze._ts&&(l0(ze,Ph(i,ze)),o0=jn.frame),jn.frame>=Ym){Ym+=ei.autoSleep||120;var s=ze._first;if((!s||!s._ts)&&ei.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},t})($o);hi(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hS=function(t,e,n,i,s,a,o){var c=new kn(this._pt,t,e,0,1,xd,null,s),l=0,h=0,d,u,f,g,_,p,m,M;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Da(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),u=n.match(zf)||[];d=zf.exec(i);)g=d[0],_=i.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Cs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=zf.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(sd.test(i)||m)&&(c.e=0),this._pt=c,c},pd=function(t,e,n,i,s,a,o,c,l,h){Ge(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:Ge(d)?l?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,f=Ge(d)?l?mS:R0:_d,g;if(an(i)&&(~i.indexOf("random(")&&(i=Da(i)),i.charAt(1)==="="&&(g=Cs(u,i)+(xn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||td)return!isNaN(u*i)&&i!==""?(g=new kn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?_S:P0,0,f),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Dh(e,i),hS.call(this,t,e,u,i,f,c||ei.stringFilter,l))},uS=function(t,e,n,i,s){if(Ge(t)&&(t=Xo(t,s,e,n,i)),!nr(t)||t.style&&t.nodeType||En(t)||i0(t))return an(t)?Xo(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Xo(t[o],s,e,n,i);return a},md=function(t,e,n,i,s,a){var o,c,l,h;if(Kn[t]&&(o=new Kn[t]).init(s,o.rawVars?e[t]:uS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new kn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ca))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Kr,td,gd=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!nd,v=t.timeline,S=i.easeReverse||d,b,T,x,w,R,D,L,N,C,B,Q,G,K;if(v&&(!u||!s)&&(s="none"),t._ease=Ts(s,qo.ease),t._rEase=S&&(Ts(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(N=p[0]?ts(p[0]).harness:0,G=N&&i[N.prop],b=Rh(i,od),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?wh:BM),_._lazy=0),a){if(es(t._startAt=Ze.set(p,hi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ti(c),startAt:null,delay:0,onUpdate:l&&function(){return li(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!o&&!f)&&t._startAt.revert(wh),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),x=hi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ti(c),immediateRender:o,stagger:0,parent:m},b),G&&(x[N.prop]=G),es(t._startAt=Ze.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(wh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Pe,Pe);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&ti(c)||c&&!g,T=0;T<p.length;T++){if(R=p[T],L=R._gsap||cd(p)[T]._gsap,t._ptLookup[T]=B={},Yf[L.id]&&jr.length&&Ch(),Q=M===p?T:M.indexOf(R),N&&(C=new N).init(R,G||b,t,Q,M)!==!1&&(t._pt=w=new kn(t._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(Y){B[Y]=w}),C.priority&&(D=1)),!N||G)for(x in b)Kn[x]&&(C=md(x,b,t,Q,R,M))?C.priority&&(D=1):B[x]=w=pd.call(t,R,x,"get",b[x],Q,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(R,t._op[T]),A&&t._pt&&(Kr=t,ze.killTweensOf(R,B,t.globalTime(e)),K=!t.parent,Kr=0),t._pt&&c&&(Yf[L.id]=1)}D&&yd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(wi,!0,!0)},fS=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return td=1,t.vars[e]="+=0",gd(t,o),td=0,c?Yo(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(f=l.length;f--;)d=l[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+xn(d.e)),d.b&&(d.b=h.s+xn(d.b))},dS=function(t,e){var n=t[0]?ts(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Ra({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},pS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(En(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Xo=function(t,e,n,i,s){return Ge(t)?t.call(e,n,i,s):an(t)&&~t.indexOf("random(")?Da(t):t},A0=ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",C0={};zn(A0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return C0[r]=1});var Ze=(function(r){e0(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qo(i))||this;var c=o.vars,l=c.duration,h=c.delay,d=c.immediateRender,u=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=i.parent||ze,M=(En(n)||i0(n)?Mr(n[0]):"length"in i)?[n]:Ti(n),A,v,S,b,T,x,w,R;if(o._targets=M.length?cd(M):Yo("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||bh(l)||bh(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Tn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),A.kill(),A.parent=A._dp=vr(o),A._start=0,u||bh(l)||bh(h)){if(b=M.length,w=u&&_0(u),nr(u))for(T in u)~A0.indexOf(T)&&(R||(R={}),R[T]=u[T]);for(v=0;v<b;v++)S=Rh(i,C0),S.stagger=0,D&&(S.easeReverse=D),R&&Ra(S,R),x=M[v],S.duration=+Xo(l,vr(o),v,x,M),S.delay=(+Xo(h,vr(o),v,x,M)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),A.to(x,S,w?w(v,x,M):0),A._ease=me.none;A.duration()?l=h=0:o.timeline=0}else if(g){Qo(hi(A.vars.defaults,{ease:"none"})),A._ease=Ts(g.ease||i.ease||"none");var L=0,N,C,B;if(En(g))g.forEach(function(Q){return A.to(M,Q,">")}),A.duration();else{S={};for(T in g)T==="ease"||T==="easeEach"||pS(T,g[T],S,g.easeEach);for(T in S)for(N=S[T].sort(function(Q,G){return Q.t-G.t}),L=0,v=0;v<N.length;v++)C=N[v],B={ease:C.e,duration:(C.t-(v?N[v-1].t:0))/100*l},B[T]=C.v,A.to(M,B,L),L+=B.duration;A.duration()<l&&A.to({},{duration:l-A.duration()})}}l||o.duration(l=A.duration())}else o.timeline=0;return f===!0&&!nd&&(Kr=vr(o),ze.killTweensOf(M),Kr=0),er(m,vr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!l&&!g&&o._start===Be(m._time)&&ti(d)&&QM(vr(o))&&m.data!=="nested")&&(o._tTime=-Pe,o.render(Math.max(0,-h)||0)),p&&d0(vr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,d=i>c-Pe&&!h?c:i<Pe?0:i,u,f,g,_,p,m,M,A;if(!l)XM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Be(d%_),d===c?(g=this._repeat,u=l):(p=Be(d/_),g=~~p,g&&g===p?(u=l,g--):u>l&&(u=l)),m=this._yoyo&&g&1,m&&(u=l-u),p=Pa(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Be(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(p0(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var S=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/l);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Zf(this,i,s,a),li(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Zf(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&es(this,1),!s&&!(h&&!o)&&(d||o||m)&&(li(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){Jo||jn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gd(this,l),h=this._ease(l/this._dur),fS(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(Fh(this,0),this.parent||u0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kr&&Kr.vars.overwrite!==!0)._first||Go(this),this.parent&&a!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Ti(i):o,l=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&GM(o,c))return s==="all"&&(this._pt=0),Go(this);for(d=this._op=this._op||[],s!=="all"&&(an(s)&&(_={},zn(s,function(M){return _[M]=1}),s=_),s=dS(o,s)),m=o.length;m--;)if(~c.indexOf(o[m])){u=l[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Nh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Go(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Wo(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Wo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ze.killTweensOf(i,s,a)},t})($o);hi(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){Ze[r]=function(){var t=new Tn,e=$f.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var _d=function(t,e,n){return t[e]=n},R0=function(t,e,n){return t[e](n)},mS=function(t,e,n,i){return t[e](i.fp,n)},gS=function(t,e,n){return t.setAttribute(e,n)},Oh=function(t,e){return Ge(t[e])?R0:Lh(t[e])&&t.setAttribute?gS:_d},P0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_S=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},vd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},xS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},vS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Nh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},yd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},kn=(function(){function r(e,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||P0,this.d=c||this,this.set=l||_d,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yS,this.m=n,this.mt=s,this.tween=i},r})();zn(ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return od[r]=1});ci.TweenMax=ci.TweenLite=Ze;ci.TimelineLite=ci.TimelineMax=Tn;ze=new Tn({sortChildren:!1,defaults:qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=fd;var Es=[],Eh={},MS=[],t0=0,SS=0,Qf=function(t){return(Eh[t]||MS).map(function(e){return e()})},ed=function(){var t=Date.now(),e=[];t-t0>2&&(Qf("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=tr.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Qf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),t0=t,Qf("matchMedia"))},I0=(function(){function r(e,n){this.selector=n&&Kf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=SS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ge(n)&&(s=i,i=n,n=Ge);var a=this,o=function(){var l=Oe,h=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Kf(s)),Oe=a,d=i.apply(a,arguments),Ge(d)&&a._r.push(d),Oe=l,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Ge?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=Oe;Oe=null,n(this),Oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ze)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Es.length;a--;)Es[a].id===this.id&&Es.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),bS=(function(){function r(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){nr(n)||(n={matches:n});var a=new I0(0,s||this.scope),o=a.conditions={},c,l,h;Oe&&!a.selector&&(a.selector=Oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=tr.matchMedia(n[l]),c&&(Es.indexOf(a)<0&&Es.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(ed):c.addEventListener("change",ed)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ih={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return b0(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=Ti(t)[0]);var s=ts(t||{}).get,a=n?h0:c0;return n==="native"&&(n=""),t&&(e?a((Kn[e]&&Kn[e].get||s)(t,e,n,i)):function(o,c,l){return a((Kn[o]&&Kn[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=Ti(t),t.length>1){var i=t.map(function(h){return An.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Kn[e],o=ts(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var d=new a;Ca._pt=0,d.init(t,n?h+n:h,Ca,0,[t]),d.render(1,d),Ca._pt&&vd(1,Ca)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=An.to(t,hi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ts(t.ease,qo.ease)),Zm(qo,t||{})},config:function(t){return Zm(ei,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Kn[o]&&!ci[o]&&Yo(e+" effect requires "+o+" plugin.")}),kf[e]=function(o,c,l){return n(Ti(o),hi(c||{},s),l)},a&&(Tn.prototype[e]=function(o,c,l){return this.add(kf[e](o,nr(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){me[t]=Ts(e)},parseEase:function(t,e){return arguments.length?Ts(t,e):me},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=ti(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&er(n,i,i._start-i._delay),i=s;return er(ze,n,0),n},context:function(t,e){return t?new I0(t,e):Oe},matchMedia:function(t){return new bS(t)},matchMediaRefresh:function(){return Es.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ed()},addEventListener:function(t,e){var n=Eh[t]||(Eh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Eh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tS,wrapYoyo:eS,distribute:_0,random:v0,snap:x0,normalize:jM,getUnit:xn,clamp:ZM,splitColor:w0,toArray:Ti,selector:Kf,mapRange:M0,pipe:$M,unitize:KM,interpolate:nS,shuffle:g0},install:s0,effects:kf,ticker:jn,updateRoot:Tn.updateRoot,plugins:Kn,globalTimeline:ze,core:{PropTween:kn,globals:a0,Tween:Ze,Timeline:Tn,Animation:$o,getCache:ts,_removeLinkedListItem:Nh,reverting:function(){return _n},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return nd=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ih[r]=Ze[r]});jn.add(Tn.updateRoot);Ca=Ih.to({},{duration:0});var wS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},TS=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=wS(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Wf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(an(s)&&(c={},zn(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}TS(o,s)}}}},An=Ih.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wf("roundProps",jf),Wf("modifiers"),Wf("snap",x0))||Ih;Ze.version=Tn.version=An.version="3.15.0";r0=1;id()&&La();var ES=me.Power0,AS=me.Power1,CS=me.Power2,RS=me.Power3,PS=me.Power4,IS=me.Linear,LS=me.Quad,DS=me.Cubic,NS=me.Quart,US=me.Quint,FS=me.Strong,OS=me.Elastic,BS=me.Back,zS=me.SteppedEase,kS=me.Bounce,VS=me.Sine,GS=me.Expo,HS=me.Circ;var L0,is,Ua,Ed,Ds,QS,D0,Ad,WS=function(){return typeof window<"u"},br={},Ls=180/Math.PI,Fa=Math.PI/180,Na=Math.atan2,N0=1e8,Cd=/([A-Z])/g,XS=/(left|right|width|margin|padding|x)/i,qS=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},JS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$S=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},G0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},H0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},KS=function(t,e,n){return t.style[e]=n},jS=function(t,e,n){return t.style.setProperty(e,n)},tb=function(t,e,n){return t._gsap[e]=n},eb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},nb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ib=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ke="transform",ni=ke+"Origin",rb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in br&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ir[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Sr(i,o)}):this.tfm[t]=a.x?a[t]:Sr(i,t),t===ni&&(this.tfm.zOrigin=a.zOrigin);else return ir.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ke)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ni,e,"")),t=ke}(s||e)&&this.props.push(t,e,s[t])},Q0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},sb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Cd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ad(),(!s||!s.isStart)&&!n[ke]&&(Q0(n),i.zOrigin&&n[ni]&&(n[ni]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},W0=function(t,e){var n={target:t,props:[],revert:sb,save:rb};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},X0,bd=function(t,e){var n=is.createElementNS?is.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):is.createElement(t);return n&&n.style?n:is.createElement(t)},ui=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Cd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Oa(e)||e,1)||""},U0="O,Moz,ms,Ms,Webkit".split(","),Oa=function(t,e,n){var i=e||Ds,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(U0[a]+t in s););return a<0?null:(a===3?"ms":a>=0?U0[a]:"")+t},wd=function(){WS()&&window.document&&(L0=window,is=L0.document,Ua=is.documentElement,Ds=bd("div")||{style:{}},QS=bd("div"),ke=Oa(ke),ni=ke+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",X0=!!Oa("perspective"),Ad=An.core.reverting,Ed=1)},F0=function(t){var e=t.ownerSVGElement,n=bd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ua.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ua.removeChild(n),s},O0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},q0=function(t){var e,n;try{e=t.getBBox()}catch{e=F0(t),n=1}return e&&(e.width||e.height)||n||(e=F0(t)),e&&!e.width&&!e.x&&!e.y?{x:+O0(t,["x","cx","x1"])||0,y:+O0(t,["y","cy","y1"])||0,width:0,height:0}:e},Y0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&q0(t))},ss=function(t,e){if(e){var n=t.style,i;e in br&&e!==ni&&(e=ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Cd,"-$1").toLowerCase())):n.removeAttribute(e)}},rs=function(t,e,n,i,s,a){var o=new kn(t._pt,e,n,0,1,a?H0:G0);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},B0={deg:1,rad:1,turn:1},ab={grid:1,flex:1},as=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ds.style,c=XS.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||B0[i]||B0[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&Y0(t),(f||a==="%")&&(br[e]||~e.indexOf("adius")))return g=m?t.getBBox()[c?"width":"height"]:t[h],He(f?s/g*d:s/100*g);if(o[c?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===is||!_.appendChild)&&(_=is.body),p=_._gsap,p&&f&&p.width&&c&&p.time===jn.time&&!p.uncache)return He(s/p.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,g=t[h],M?t.style[e]=M:ss(t,e)}else(f||a==="%")&&!ab[ui(_,"display")]&&(o.position=ui(t,"position")),_===t&&(o.position="static"),_.appendChild(Ds),g=Ds[h],_.removeChild(Ds),o.position="absolute";return c&&f&&(p=ts(_),p.time=jn.time,p.width=_[h]),He(u?g*s/d:g&&s?d/g*s:0)},Sr=function(t,e,n,i){var s;return Ed||wd(),e in ir&&e!=="transform"&&(e=ir[e],~e.indexOf(",")&&(e=e.split(",")[0])),br[e]&&e!=="transform"?(s=el(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:zh(ui(t,ni))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bh[e]&&Bh[e](t,e,n)||ui(t,e)||hd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?as(t,e,s,n)+n:s},ob=function(t,e,n,i){if(!n||n==="none"){var s=Oa(e,t,1),a=s&&ui(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var o=new kn(this._pt,t.style,e,0,1,xd),c=0,l=0,h,d,u,f,g,_,p,m,M,A,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ui(t,e)||i,_?t.style[e]=_:ss(t,e)),h=[n,i],fd(h),n=h[0],i=h[1],u=n.match(As)||[],S=i.match(As)||[],S.length){for(;d=As.exec(i);)p=d[0],M=i.substring(c,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=u[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Cs(f,p)+v),m=parseFloat(p),A=p.substr((m+"").length),c=As.lastIndex-A.length,A||(A=A||ei.units[e]||v,c===i.length&&(i+=A,o.e+=A)),v!==A&&(f=as(t,e,_,A)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?H0:G0;return sd.test(i)&&(o.e=0),this._pt=o,o},z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=z0[n]||n,e[1]=z0[i]||i,e.join(" ")},cb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],br[o]&&(c=1,o=o==="transformOrigin"?ni:ke),ss(n,o);c&&(ss(n,ke),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",el(n,1),a.uncache=1,Q0(i)))}},Bh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new kn(t._pt,e,n,0,0,cb);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},tl=[1,0,0,1,0,0],Z0={},J0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},k0=function(t){var e=ui(t,ke);return J0(e)?tl:e.substr(7).match(rd).map(He)},Rd=function(t,e){var n=t._gsap||ts(t),i=t.style,s=k0(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?tl:s):(s===tl&&!t.offsetParent&&t!==Ua&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Ua.appendChild(t)),s=k0(t),c?i.display=c:ss(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ua.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Td=function(t,e,n,i,s,a){var o=t._gsap,c=s||Rd(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],M=c[5],A=e.split(" "),v=parseFloat(A[0])||0,S=parseFloat(A[1])||0,b,T,x,w;n?c!==tl&&(T=f*p-g*_)&&(x=v*(p/T)+S*(-_/T)+(_*M-p*m)/T,w=v*(-g/T)+S*(f/T)-(f*M-g*m)/T,v=x,S=w):(b=q0(t),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),S=b.y+(~(A[1]||A[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(m=v-l,M=S-h,o.xOffset=d+(m*f+M*_)-m,o.yOffset=u+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ni]="0px 0px",a&&(rs(a,o,"xOrigin",l,v),rs(a,o,"yOrigin",h,S),rs(a,o,"xOffset",d,o.xOffset),rs(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},el=function(t,e){var n=t._gsap||new dd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=ui(t,ni)||"0",h,d,u,f,g,_,p,m,M,A,v,S,b,T,x,w,R,D,L,N,C,B,Q,G,K,Y,I,tt,Mt,Tt,Ot,Ht;return h=d=u=_=p=m=M=A=v=0,f=g=1,n.svg=!!(t.getCTM&&Y0(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ke]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ke]!=="none"?c[ke]:"")),i.scale=i.rotate=i.translate="none"),T=Rd(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Td(t,G||l,!!G||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,b=n.yOrigin||0,T!==tl&&(D=T[0],L=T[1],N=T[2],C=T[3],h=B=T[4],d=Q=T[5],T.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(C*C+N*N),_=D||L?Na(L,D)*Ls:0,M=N||C?Na(N,C)*Ls+_:0,M&&(g*=Math.abs(Math.cos(M*Fa))),n.svg&&(h-=S-(S*D+b*N),d-=b-(S*L+b*C))):(Ht=T[6],Tt=T[7],I=T[8],tt=T[9],Mt=T[10],Ot=T[11],h=T[12],d=T[13],u=T[14],x=Na(Ht,Mt),p=x*Ls,x&&(w=Math.cos(-x),R=Math.sin(-x),G=B*w+I*R,K=Q*w+tt*R,Y=Ht*w+Mt*R,I=B*-R+I*w,tt=Q*-R+tt*w,Mt=Ht*-R+Mt*w,Ot=Tt*-R+Ot*w,B=G,Q=K,Ht=Y),x=Na(-N,Mt),m=x*Ls,x&&(w=Math.cos(-x),R=Math.sin(-x),G=D*w-I*R,K=L*w-tt*R,Y=N*w-Mt*R,Ot=C*R+Ot*w,D=G,L=K,N=Y),x=Na(L,D),_=x*Ls,x&&(w=Math.cos(x),R=Math.sin(x),G=D*w+L*R,K=B*w+Q*R,L=L*w-D*R,Q=Q*w-B*R,D=G,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=He(Math.sqrt(D*D+L*L+N*N)),g=He(Math.sqrt(Q*Q+Ht*Ht)),x=Na(B,Q),M=Math.abs(x)>2e-4?x*Ls:0,v=Ot?1/(Ot<0?-Ot:Ot):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!J0(ui(t,ke)),G&&t.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=He(f),n.scaleY=He(g),n.rotation=He(_)+o,n.rotationX=He(p)+o,n.rotationY=He(m)+o,n.skewX=M+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ni]=zh(l)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?ub:X0?$0:hb,n.uncache=0,n},zh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Md=function(t,e,n){var i=xn(e);return He(parseFloat(e)+parseFloat(as(t,"x",n+"px",i)))+i},hb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$0(t,e)},Ps="0deg",jo="0px",Is=") ",$0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,A=n.zOrigin,v="",S=m==="auto"&&t&&t!==1||m===!0;if(A&&(d!==Ps||h!==Ps)){var b=parseFloat(h)*Fa,T=Math.sin(b),x=Math.cos(b),w;b=parseFloat(d)*Fa,w=Math.cos(b),a=Md(M,a,T*w*-A),o=Md(M,o,-Math.sin(b)*-A),c=Md(M,c,x*w*-A+A)}p!==jo&&(v+="perspective("+p+Is),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||a!==jo||o!==jo||c!==jo)&&(v+=c!==jo||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Is),l!==Ps&&(v+="rotate("+l+Is),h!==Ps&&(v+="rotateY("+h+Is),d!==Ps&&(v+="rotateX("+d+Is),(u!==Ps||f!==Ps)&&(v+="skew("+u+", "+f+Is),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Is),M.style[ke]=v||"translate(0, 0)"},ub=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,A=parseFloat(a),v=parseFloat(o),S,b,T,x,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Fa,l*=Fa,S=Math.cos(c)*d,b=Math.sin(c)*d,T=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(h*=Fa,w=Math.tan(l-h),w=Math.sqrt(1+w*w),T*=w,x*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,b*=w)),S=He(S),b=He(b),T=He(T),x=He(x)):(S=d,x=u,b=T=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=as(f,"x",a,"px"),v=as(f,"y",o,"px")),(g||_||p||m)&&(A=He(A+g-(g*S+_*T)+p),v=He(v+_-(g*b+_*x)+m)),(i||s)&&(w=f.getBBox(),A=He(A+i/100*w.width),v=He(v+s/100*w.height)),w="matrix("+S+","+b+","+T+","+x+","+A+","+v+")",f.setAttribute("transform",w),M&&(f.style[ke]=w)},fb=function(t,e,n,i,s){var a=360,o=an(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ls:1),l=c-i,h=i+l+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*N0)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*N0)%a-~~(l/a)*a)),t._pt=u=new kn(t._pt,e,n,i,l,YS),u.e=h,u.u="deg",t._props.push(n),u},V0=function(t,e){for(var n in e)t[n]=e[n];return t},db=function(t,e,n){var i=V0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,d,u,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[ke]=e,o=el(n,1),ss(n,ke),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ke],a[ke]=e,o=el(n,1),a[ke]=l);for(c in br)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=xn(l),g=xn(h),d=f!==g?as(n,c,l,g):parseFloat(l),u=parseFloat(h),t._pt=new kn(t._pt,o,c,d,u-d,Sd),t._pt.u=g||0,t._props.push(c));V0(o,i)};zn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Bh[t>1?"border"+r:r]=function(o,c,l,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return Sr(o,g,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,d)}});var Pd={name:"css",register:wd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,h,d,u,f,g,_,p,m,M,A,v,S,b,T,x,w;Ed||wd(),this.styles=this.styles||W0(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Kn[_]&&md(_,e,n,i,t,s)))){if(f=typeof h,g=Bh[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Da(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",yr.lastIndex=0,yr.test(l)||(p=xn(l),m=xn(h),m?p!==m&&(l=as(t,_,l,m)+m):p&&(h+=p)),this.add(o,"setProperty",l,h,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,s):c[_],an(l)&&~l.indexOf("random(")&&(l=Da(l)),xn(l+"")||l==="auto"||(l+=ei.units[_]||xn(Sr(t,_))||""),(l+"").charAt(1)==="="&&(l=Sr(t,_))):l=Sr(t,_),u=parseFloat(l),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in ir&&(_==="autoAlpha"&&(u===1&&Sr(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,o.visibility),rs(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ir[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in br,A){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ui(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=ui(t,"perspective"),R?t.style.perspective=R:ss(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||el(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new kn(this._pt,o,ke,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new kn(this._pt,S,"scaleY",S.scaleY,(M?Cs(S.scaleY,M+d):d)-S.scaleY||0,Sd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(ni,0,o[ni]),h=lb(h),S.svg?Td(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&rs(this,S,"zOrigin",S.zOrigin,m),rs(this,o,_,zh(l),zh(h)));continue}else if(_==="svgOrigin"){Td(t,h,1,b,0,this);continue}else if(_ in Z0){fb(this,S,_,u,M?Cs(u,M+h):h);continue}else if(_==="smoothOrigin"){rs(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){db(this,h,t);continue}}else _ in o||(_=Oa(_)||_);if(A||(d||d===0)&&(u||u===0)&&!qS.test(h)&&_ in o)p=(l+"").substr((u+"").length),d||(d=0),m=xn(h)||(_ in ei.units?ei.units[_]:p),p!==m&&(u=as(t,_,l,m)),this._pt=new kn(this._pt,A?S:o,_,u,(M?Cs(u,M+d):d)-u,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?$S:Sd),this._pt.u=m||0,A&&w!==h?(this._pt.b=l,this._pt.e=w,this._pt.r=JS):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=ZS);else if(_ in o)ob.call(this,t,_,l,M?M+h:h);else if(_ in t)this.add(t,_,l||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Dh(_,h);continue}A||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,l||t[_])),a.push(_)}}T&&yd(this)},render:function(t,e){if(e.tween._time||!Ad())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Sr,aliases:ir,getSetter:function(t,e,n){var i=ir[e];return i&&i.indexOf(",")<0&&(e=i),e in br&&e!==ni&&(t._gsap.x||Sr(t,"x"))?n&&D0===n?e==="scale"?eb:tb:(D0=n||{})&&(e==="scale"?nb:ib):t.style&&!Lh(t.style[e])?KS:~e.indexOf("-")?jS:Oh(t,e)},core:{_removeProperty:ss,_getMatrix:Rd}};An.utils.checkPrefix=Oa;An.core.getStyleSaver=W0;(function(r,t,e,n){var i=zn(r+","+t+","+e,function(s){br[s]=1});zn(t,function(s){ei.units[s]="deg",Z0[s]=1}),ir[i[13]]=r+","+t,zn(n,function(s){var a=s.split(":");ir[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ei.units[r]="px"});An.registerPlugin(Pd);var Id=An.registerPlugin(Pd)||An,LE=Id.core.Tween;function K0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function pb(r,t,e){return t&&K0(r.prototype,t),e&&K0(r,e),r}var vn,Gh,mb,fi,os,ls,za,tg,Ns,ka,eg,wr,zi,ng,ig=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},rg=1,Ba=[],se=[],ki=[],il=Date.now,Ld=function(t,e){return e},gb=function(){var t=ka.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,ki),se=n,ki=i,Ld=function(a,o){return e[a](o)}},Er=function(t,e){return~ki.indexOf(t)&&ki[ki.indexOf(t)+1][e]},rl=function(t){return!!~eg.indexOf(t)},Gn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},kh="scrollLeft",Vh="scrollTop",Dd=function(){return wr&&wr.isPressed||se.cache++},Hh=function(t,e){var n=function i(s){if(s||s===0){rg&&(fi.history.scrollRestoration="manual");var a=wr&&wr.isPressed;s=i.v=Math.round(s)||(wr&&wr.iOS?1:0),t(s),i.cacheID=se.cache,a&&Ld("ss",s)}else(e||se.cache!==i.cacheID||Ld("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Cn={s:kh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hh(function(r){return arguments.length?fi.scrollTo(r,je.sc()):fi.pageXOffset||os[kh]||ls[kh]||za[kh]||0})},je={s:Vh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:Hh(function(r){return arguments.length?fi.scrollTo(Cn.sc(),r):fi.pageYOffset||os[Vh]||ls[Vh]||za[Vh]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},_b=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Tr=function(t,e){var n=e.s,i=e.sc;rl(t)&&(t=os.scrollingElement||ls);var s=se.indexOf(t),a=i===je.sc?1:2;!~s&&(s=se.push(t)-1),se[s+a]||Gn(t,"scroll",Dd);var o=se[s+a],c=o||(se[s+a]=Hh(Er(t,n),!0)||(rl(t)?i:Hh(function(l){return arguments.length?t[n]=l:t[n]})));return c.target=t,o||(c.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),c},Qh=function(t,e,n){var i=t,s=t,a=il(),o=a,c=e||50,l=Math.max(500,c*3),h=function(g,_){var p=il();_||p-a>c?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,p=s,m=il();return(g||g===0)&&g!==i&&h(g),a===o||m-o>l?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},nl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},j0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sg=function(){ka=vn.core.globals().ScrollTrigger,ka&&ka.core&&gb()},ag=function(t){return vn=t||ig(),!Gh&&vn&&typeof document<"u"&&document.body&&(fi=window,os=document,ls=os.documentElement,za=os.body,eg=[fi,os,ls,za],mb=vn.utils.clamp,ng=vn.core.context||function(){},Ns="onpointerenter"in za?"pointer":"mouse",tg=Qe.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zi=Qe.eventTypes=("ontouchstart"in ls?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ls?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rg=0},500),Gh=1),ka||sg(),Gh};Cn.op=je;se.cache=0;var Qe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Gh||ag(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ka||sg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,A=n.onPress,v=n.onRelease,S=n.onRight,b=n.onLeft,T=n.onUp,x=n.onDown,w=n.onChangeX,R=n.onChangeY,D=n.onChange,L=n.onToggleX,N=n.onToggleY,C=n.onHover,B=n.onHoverEnd,Q=n.onMove,G=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,I=n.onGestureEnd,tt=n.onWheel,Mt=n.onEnable,Tt=n.onDisable,Ot=n.onClick,Ht=n.scrollSpeed,Wt=n.capture,J=n.allowClicks,nt=n.lockAxis,xt=n.onLockAxis;this.target=o=Hn(o)||ls,this.vars=n,f&&(f=vn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ht=Ht||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(fi.getComputedStyle(za).lineHeight)||22);var Bt,pt,kt,Vt,Rt,Xt,St,z=this,qt=0,Kt=0,ce=n.passive||!h&&n.passive!==!1,Lt=Tr(o,Cn),te=Tr(o,je),F=Lt(),pe=te(),Qt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&zi[0]==="pointerdown",P=rl(o),y=o.ownerDocument||os,V=[0,0,0],W=[0,0,0],$=0,mt=function(){return $=il()},ht=function(ot,zt){return(z.event=ot)&&f&&_b(ot.target,f)||zt&&Qt&&ot.pointerType!=="touch"||G&&G(ot,zt)},it=function(){z._vx.reset(),z._vy.reset(),pt.pause(),d&&d(z)},st=function(){var ot=z.deltaX=j0(V),zt=z.deltaY=j0(W),lt=Math.abs(ot)>=i,Et=Math.abs(zt)>=i;D&&(lt||Et)&&D(z,ot,zt,V,W),lt&&(S&&z.deltaX>0&&S(z),b&&z.deltaX<0&&b(z),w&&w(z),L&&z.deltaX<0!=qt<0&&L(z),qt=z.deltaX,V[0]=V[1]=V[2]=0),Et&&(x&&z.deltaY>0&&x(z),T&&z.deltaY<0&&T(z),R&&R(z),N&&z.deltaY<0!=Kt<0&&N(z),Kt=z.deltaY,W[0]=W[1]=W[2]=0),(Vt||kt)&&(Q&&Q(z),kt&&(p&&kt===1&&p(z),M&&M(z),kt=0),Vt=!1),Xt&&!(Xt=!1)&&xt&&xt(z),Rt&&(tt(z),Rt=!1),Bt=0},vt=function(ot,zt,lt){V[lt]+=ot,W[lt]+=zt,z._vx.update(ot),z._vy.update(zt),l?Bt||(Bt=requestAnimationFrame(st)):st()},Dt=function(ot,zt){nt&&!St&&(z.axis=St=Math.abs(ot)>Math.abs(zt)?"x":"y",Xt=!0),St!=="y"&&(V[2]+=ot,z._vx.update(ot,!0)),St!=="x"&&(W[2]+=zt,z._vy.update(zt,!0)),l?Bt||(Bt=requestAnimationFrame(st)):st()},k=function(ot){if(!ht(ot,1)){ot=nl(ot,h);var zt=ot.clientX,lt=ot.clientY,Et=zt-z.x,Pt=lt-z.y,Jt=z.isDragging;z.x=zt,z.y=lt,(Jt||(Et||Pt)&&(Math.abs(z.startX-zt)>=s||Math.abs(z.startY-lt)>=s))&&(kt||(kt=Jt?2:1),Jt||(z.isDragging=!0),Dt(Et,Pt))}},rt=z.onPress=function(ct){ht(ct,1)||ct&&ct.button||(z.axis=St=null,pt.pause(),z.isPressed=!0,ct=nl(ct),qt=Kt=0,z.startX=z.x=ct.clientX,z.startY=z.y=ct.clientY,z._vx.reset(),z._vy.reset(),Gn(K?o:y,zi[1],k,ce,!0),z.deltaX=z.deltaY=0,A&&A(z))},et=z.onRelease=function(ct){if(!ht(ct,1)){Vn(K?o:y,zi[1],k,!0);var ot=!isNaN(z.y-z.startY),zt=z.isDragging,lt=zt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Et=nl(ct);!lt&&ot&&(z._vx.reset(),z._vy.reset(),h&&J&&vn.delayedCall(.08,function(){if(il()-$>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(y.createEvent){var Pt=y.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,fi,1,Et.screenX,Et.screenY,Et.clientX,Et.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(Pt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&zt&&!K&&pt.restart(!0),kt&&st(),m&&zt&&m(z),v&&v(z,lt)}},_t=function(ot){return ot.touches&&ot.touches.length>1&&(z.isGesturing=!0)&&Y(ot,z.isDragging)},ft=function(){return(z.isGesturing=!1)||I(z)},U=function(ot){if(!ht(ot)){var zt=Lt(),lt=te();vt((zt-F)*Ht,(lt-pe)*Ht,1),F=zt,pe=lt,d&&pt.restart(!0)}},ut=function(ot){if(!ht(ot)){ot=nl(ot,h),tt&&(Rt=!0);var zt=(ot.deltaMode===1?c:ot.deltaMode===2?fi.innerHeight:1)*g;vt(ot.deltaX*zt,ot.deltaY*zt,0),d&&!K&&pt.restart(!0)}},j=function(ot){if(!ht(ot)){var zt=ot.clientX,lt=ot.clientY,Et=zt-z.x,Pt=lt-z.y;z.x=zt,z.y=lt,Vt=!0,d&&pt.restart(!0),(Et||Pt)&&Dt(Et,Pt)}},dt=function(ot){z.event=ot,C(z)},gt=function(ot){z.event=ot,B(z)},at=function(ot){return ht(ot)||nl(ot,h)&&Ot(z)};pt=z._dc=vn.delayedCall(u||.25,it).pause(),z.deltaX=z.deltaY=0,z._vx=Qh(0,50,!0),z._vy=Qh(0,50,!0),z.scrollX=Lt,z.scrollY=te,z.isDragging=z.isGesturing=z.isPressed=!1,ng(this),z.enable=function(ct){return z.isEnabled||(Gn(P?y:o,"scroll",Dd),a.indexOf("scroll")>=0&&Gn(P?y:o,"scroll",U,ce,Wt),a.indexOf("wheel")>=0&&Gn(o,"wheel",ut,ce,Wt),(a.indexOf("touch")>=0&&tg||a.indexOf("pointer")>=0)&&(Gn(o,zi[0],rt,ce,Wt),Gn(y,zi[2],et),Gn(y,zi[3],et),J&&Gn(o,"click",mt,!0,!0),Ot&&Gn(o,"click",at),Y&&Gn(y,"gesturestart",_t),I&&Gn(y,"gestureend",ft),C&&Gn(o,Ns+"enter",dt),B&&Gn(o,Ns+"leave",gt),Q&&Gn(o,Ns+"move",j)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Vt=kt=!1,z._vx.reset(),z._vy.reset(),F=Lt(),pe=te(),ct&&ct.type&&rt(ct),Mt&&Mt(z)),z},z.disable=function(){z.isEnabled&&(Ba.filter(function(ct){return ct!==z&&rl(ct.target)}).length||Vn(P?y:o,"scroll",Dd),z.isPressed&&(z._vx.reset(),z._vy.reset(),Vn(K?o:y,zi[1],k,!0)),Vn(P?y:o,"scroll",U,Wt),Vn(o,"wheel",ut,Wt),Vn(o,zi[0],rt,Wt),Vn(y,zi[2],et),Vn(y,zi[3],et),Vn(o,"click",mt,!0),Vn(o,"click",at),Vn(y,"gesturestart",_t),Vn(y,"gestureend",ft),Vn(o,Ns+"enter",dt),Vn(o,Ns+"leave",gt),Vn(o,Ns+"move",j),z.isEnabled=z.isPressed=z.isDragging=!1,Tt&&Tt(z))},z.kill=z.revert=function(){z.disable();var ct=Ba.indexOf(z);ct>=0&&Ba.splice(ct,1),wr===z&&(wr=0)},Ba.push(z),K&&rl(o)&&(wr=z),z.enable(_)},pb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Qe.version="3.15.0";Qe.create=function(r){return new Qe(r)};Qe.register=ag;Qe.getAll=function(){return Ba.slice()};Qe.getById=function(r){return Ba.filter(function(t){return t.vars.id===r})[0]};ig()&&vn.registerPlugin(Qe);var Nt,Qa,le,Te,mi,be,qd,au,xl,ul,al,Wh,Rn,cu,kd,Wn,og,lg,Wa,wg,Nd,Tg,Qn,Vd,Eg,Ag,cs,Gd,Yd,Xa,Zd,fl,Hd,Ud,Xh=1,Pn=Date.now,Fd=Pn(),Ci=0,ol=0,cg=function(t,e,n){var i=pi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},hg=function(t,e){return e&&(!pi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},xb=function r(){return ol&&requestAnimationFrame(r)},ug=function(){return cu=1},fg=function(){return cu=0},rr=function(t){return t},ll=function(t){return Math.round(t*1e5)/1e5||0},Cg=function(){return typeof window<"u"},Rg=function(){return Nt||Cg()&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},ks=function(t){return!!~qd.indexOf(t)},Pg=function(t){return(t==="Height"?Zd:le["inner"+t])||mi["client"+t]||be["client"+t]},Ig=function(t){return Er(t,"getBoundingClientRect")||(ks(t)?function(){return su.width=le.innerWidth,su.height=Zd,su}:function(){return Ar(t)})},vb=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Er(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Pg(s):t["client"+s])||0}},yb=function(t,e){return!e||~ki.indexOf(t)?Ig(t):function(){return su}},sr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Er(t,n))?a()-Ig(t)()[s]:ks(t)?(mi[n]||be[n])-Pg(i):t[n]-t["offset"+i])},qh=function(t,e){for(var n=0;n<Wa.length;n+=3)(!e||~e.indexOf(Wa[n+1]))&&t(Wa[n],Wa[n+1],Wa[n+2])},pi=function(t){return typeof t=="string"},In=function(t){return typeof t=="function"},cl=function(t){return typeof t=="number"},Us=function(t){return typeof t=="object"},sl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Va=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ga=Math.abs,Lg="left",Dg="top",Jd="right",$d="bottom",Os="width",Bs="height",dl="Right",pl="Left",ml="Top",gl="Bottom",tn="padding",Ei="margin",Ya="Width",Kd="Height",on="px",Ai=function(t){return le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Mb=function(t){var e=Ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ar=function(t,e){var n=e&&Ai(t)[kd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Nt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ou=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ng=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Sb=function(t){return function(e){return Nt.utils.snap(Ng(t),e)}},jd=function(t){var e=Nt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},bb=function(t){return function(e,n){return jd(Ng(t))(e,n.direction)}},Yh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jh={toggleActions:"play",anticipatePin:0},lu={top:0,left:0,center:.5,bottom:1,right:1},eu=function(t,e){if(pi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in lu?lu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},$h=function(t,e,n,i,s,a,o,c){var l=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=Te.createElement("div"),_=ks(n)||Er(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?be:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,A=M?l:h,v="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||c)&&_?"fixed;":"absolute;"),(p||c||!_)&&(v+=(i===je?Jd:$d)+":"+(a+parseFloat(u))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],nu(g,0,i,M),g},nu=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ya]=1,s["border"+o+Ya]=0,s[n.p]=e+"px",Nt.set(t,s)},ae=[],Qd={},vl,mg=function(){return Pn()-Ci>34&&(vl||(vl=requestAnimationFrame(Cr)))},Ha=function(){(!Qn||!Qn.isPressed||Qn.startX>be.clientWidth)&&(se.cache++,Qn?vl||(vl=requestAnimationFrame(Cr)):Cr(),Ci||Gs("scrollStart"),Ci=Pn())},Od=function(){Ag=le.innerWidth,Eg=le.innerHeight},hl=function(t){se.cache++,(t===!0||!Rn&&!Tg&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Vd||Ag!==le.innerWidth||Math.abs(le.innerHeight-Eg)>le.innerHeight*.25))&&au.restart(!0)},Vs={},wb=[],Ug=function r(){return un(ee,"scrollEnd",r)||Fs(!0)},Gs=function(t){return Vs[t]&&Vs[t].map(function(e){return e()})||wb},di=[],Fg=function(t){for(var e=0;e<di.length;e+=5)(!t||di[e+4]&&di[e+4].query===t)&&(di[e].style.cssText=di[e+1],di[e].getBBox&&di[e].setAttribute("transform",di[e+2]||""),di[e+3].uncache=1)},Og=function(){return se.forEach(function(t){return In(t)&&++t.cacheID&&(t.rec=t())})},tp=function(t,e){var n;for(Wn=0;Wn<ae.length;Wn++)n=ae[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));fl=!0,e&&Fg(e),e||Gs("revert")},Bg=function(t,e){se.cache++,(e||!Xn)&&se.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),pi(t)&&(le.history.scrollRestoration=Yd=t)},Xn,zs=0,gg,Tb=function(){if(gg!==zs){var t=gg=zs;requestAnimationFrame(function(){return t===zs&&Fs(!0)})}},zg=function(){be.appendChild(Xa),Zd=!Qn&&Xa.offsetHeight||le.innerHeight,be.removeChild(Xa)},_g=function(t){return xl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fs=function(t,e){if(mi=Te.documentElement,be=Te.body,qd=[le,Te,mi,be],Ci&&!t&&!fl){fn(ee,"scrollEnd",Ug);return}zg(),Xn=ee.isRefreshing=!0,fl||Og();var n=Gs("refreshInit");wg&&ee.sort(),e||tp(),se.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),fl=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Hd=1,_g(!0),ae.forEach(function(i){var s=sr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_g(!1),Hd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bg(Yd,1),au.pause(),zs++,Xn=2,Cr(2),ae.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=ee.isRefreshing=!1,Gs("refresh")},Wd=0,iu=1,_l,Cr=function(t){if(t===2||!Xn&&!fl){ee.isUpdating=!0,_l&&_l.update(0);var e=ae.length,n=Pn(),i=n-Fd>=50,s=e&&ae[0].scroll();if(iu=Wd>s?-1:1,Xn||(Wd=s),i&&(Ci&&!cu&&n-Ci>200&&(Ci=0,Gs("scrollEnd")),al=Fd,Fd=n),iu<0){for(Wn=e;Wn-- >0;)ae[Wn]&&ae[Wn].update(0,i);iu=1}else for(Wn=0;Wn<e;Wn++)ae[Wn]&&ae[Wn].update(0,i);ee.isUpdating=!1}vl=0},Xd=[Lg,Dg,$d,Jd,Ei+gl,Ei+dl,Ei+ml,Ei+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ru=Xd.concat([Os,Bs,"boxSizing","max"+Ya,"max"+Kd,"position",Ei,tn,tn+ml,tn+dl,tn+gl,tn+pl]),Eb=function(t,e,n){qa(n);var i=t._gsap;if(i.spacerIsNative)qa(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Bd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Xd.length,a=e.style,o=t.style,c;s--;)c=Xd[s],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[$d]=o[Jd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Os]=ou(t,Cn)+on,a[Bs]=ou(t,je)+on,a[tn]=o[Ei]=o[Dg]=o[Lg]="0",qa(i),o[Os]=o["max"+Ya]=n[Os],o[Bs]=o["max"+Kd]=n[Bs],o[tn]=n[tn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ab=/([A-Z])/g,qa=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Nt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Ab,"-$1").toLowerCase())}},Kh=function(t){for(var e=ru.length,n=t.style,i=[],s=0;s<e;s++)i.push(ru[s],n[ru[s]]);return i.t=t,i},Cb=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},su={left:0,top:0},xg=function(t,e,n,i,s,a,o,c,l,h,d,u,f,g){In(t)&&(t=t(c)),pi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?eu("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),cl(t))f&&(t=Nt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&nu(o,n,i,!0);else{In(e)&&(e=e(c));var A=(t||"0").split(" "),v,S,b,T;M=Hn(e,c)||be,v=Ar(M)||{},(!v||!v.left&&!v.top)&&Ai(M).display==="none"&&(T=M.style.display,M.style.display="block",v=Ar(M),T?M.style.display=T:M.style.removeProperty("display")),S=eu(A[0],v[i.d]),b=eu(A[1]||"0",n),t=v[i.p]-l[i.p]-h+S+s-b,o&&nu(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(c[g]=t||-.001,t<0&&(t=0)),a){var x=t+n,w=a._isStart;p="scroll"+i.d2,nu(a,x,i,w&&x>20||!w&&(d?Math.max(be[p],mi[p]):a.parentNode[p])<=x+1),d&&(l=Ar(o),d&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+on))}return f&&M&&(p=Ar(M),f.seek(u),m=Ar(M),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Rb=/(webkit|moz|length|cssText|inset)/i,vg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===be){t._stOrig=s.cssText,o=Ai(t);for(a in o)!+a&&!Rb.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Nt.core.getCache(t).uncache=1,e.appendChild(t)}},kg=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},jh=function(t,e,n){var i={};i[e.p]="+="+n,Nt.set(t,i)},yg=function(t,e){var n=Tr(t,e),i="_scroll"+e.p2,s=function a(o,c,l,h,d){var u=a.tween,f=c.onComplete,g={};l=l||n();var _=kg(n,l,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-l,u&&u.kill(),c[i]=o,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+h*u.ratio+d*u.ratio*u.ratio)},c.onUpdate=function(){se.cache++,a.tween&&Cr()},c.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Nt.to(t,c),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(t,"wheel",n.wheelHandler),ee.isTouch&&fn(t,"touchmove",n.wheelHandler),s},ee=(function(){function r(e,n){Qa||r.register(Nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Gd(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ol){this.update=this.refresh=this.kill=rr;return}n=dg(pi(n)||cl(n)||n.nodeType?{trigger:n}:n,Jh);var s=n,a=s.onUpdate,o=s.toggleClass,c=s.id,l=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,A=s.once,v=s.snap,S=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:je,D=!d&&d!==0,L=Hn(n.scroller||le),N=Nt.core.getCache(L),C=ks(L),B=("pinType"in n?n.pinType:Er(L,"pinType")||C&&"fixed")==="fixed",Q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:Jh.markers,Y=C?0:parseFloat(Ai(L)["border"+R.p2+Ya])||0,I=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Mt=vb(L,C,R),Tt=yb(L,C),Ot=0,Ht=0,Wt=0,J=Tr(L,R),nt,xt,Bt,pt,kt,Vt,Rt,Xt,St,z,qt,Kt,ce,Lt,te,F,pe,Qt,P,y,V,W,$,mt,ht,it,st,vt,Dt,k,rt,et,_t,ft,U,ut,j,dt,gt;if(I._startClamp=I._endClamp=!1,I._dir=R,p*=45,I.scroller=L,I.scroll=T?T.time.bind(T):J,pt=J(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(wg=1,n.refreshPriority===-9999&&(_l=I)),N.tweenScroll=N.tweenScroll||{top:yg(L,je),left:yg(L,Cn)},I.tweenTo=nt=N.tweenScroll[R.p],I.scrubDuration=function(lt){_t=cl(lt)&&lt,_t?et?et.duration(lt):et=Nt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_t,paused:!0,onComplete:function(){return m&&m(I)}}):(et&&et.progress(1).kill(),et=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),k=0,c||(c=i.vars.id)),v&&((!Us(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in be.style&&Nt.set(C?[be,mi]:L,{scrollBehavior:"auto"}),se.forEach(function(lt){return In(lt)&&lt.target===(C?Te.scrollingElement||mi:L)&&(lt.smooth=!1)}),Bt=In(v.snapTo)?v.snapTo:v.snapTo==="labels"?Sb(i):v.snapTo==="labelsDirectional"?bb(i):v.directional!==!1?function(lt,Et){return jd(v.snapTo)(lt,Pn()-Ht<500?0:Et.direction)}:Nt.utils.snap(v.snapTo),ft=v.duration||{min:.1,max:2},ft=Us(ft)?ul(ft.min,ft.max):ul(ft,ft),U=Nt.delayedCall(v.delay||_t/2||.1,function(){var lt=J(),Et=Pn()-Ht<500,Pt=nt.tween;if((Et||Math.abs(I.getVelocity())<10)&&!Pt&&!cu&&Ot!==lt){var Jt=(lt-Vt)/Lt,We=i&&!D?i.totalProgress():Jt,ne=Et?0:(We-rt)/(Pn()-al)*1e3||0,fe=Nt.utils.clamp(-Jt,1-Jt,Ga(ne/2)*ne/.185),Xe=Jt+(v.inertia===!1?0:fe),we,ve,oe=v,Dn=oe.onStart,Ie=oe.onInterrupt,yn=oe.onComplete;if(we=Bt(Xe,I),cl(we)||(we=Xe),ve=Math.max(0,Math.round(Vt+we*Lt)),lt<=Rt&&lt>=Vt&&ve!==lt){if(Pt&&!Pt._initted&&Pt.data<=Ga(ve-lt))return;v.inertia===!1&&(fe=we-Jt),nt(ve,{duration:ft(Ga(Math.max(Ga(Xe-We),Ga(we-We))*.185/ne/.05||0)),ease:v.ease||"power3",data:Ga(ve-lt),onInterrupt:function(){return U.restart(!0)&&Ie&&Va(I,Ie)},onComplete:function(){I.update(),Ot=J(),i&&!D&&(et?et.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),k=rt=i&&!D?i.totalProgress():I.progress,M&&M(I),yn&&Va(I,yn)}},lt,fe*Lt,ve-lt-fe*Lt),Dn&&Va(I,Dn,nt.tween)}}else I.isActive&&Ot!==lt&&U.restart(!0)}).pause()),c&&(Qd[c]=I),u=I.trigger=Hn(u||f!==!0&&f),gt=u&&u._gsap&&u._gsap.stRevert,gt&&(gt=gt(I)),f=f===!0?u:Hn(f),pi(o)&&(o={targets:u,className:o}),f&&(g===!1||g===Ei||(g=!g&&f.parentNode&&f.parentNode.style&&Ai(f.parentNode).display==="flex"?!1:tn),I.pin=f,xt=Nt.core.getCache(f),xt.spacer?te=xt.pinState:(b&&(b=Hn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),xt.spacerIsNative=!!b,b&&(xt.spacerState=Kh(b))),xt.spacer=Qt=b||Te.createElement("div"),Qt.classList.add("pin-spacer"),c&&Qt.classList.add("pin-spacer-"+c),xt.pinState=te=Kh(f)),n.force3D!==!1&&Nt.set(f,{force3D:!0}),I.spacer=Qt=xt.spacer,Dt=Ai(f),mt=Dt[g+R.os2],y=Nt.getProperty(f),V=Nt.quickSetter(f,R.a,on),Bd(f,Qt,Dt),pe=Kh(f)),K){Kt=Us(K)?dg(K,pg):pg,z=$h("scroller-start",c,L,R,Kt,0),qt=$h("scroller-end",c,L,R,Kt,0,z),P=z["offset"+R.op.d2];var at=Hn(Er(L,"content")||L);Xt=this.markerStart=$h("start",c,at,R,Kt,P,0,T),St=this.markerEnd=$h("end",c,at,R,Kt,P,0,T),T&&(dt=Nt.quickSetter([Xt,St],R.a,on)),!B&&!(ki.length&&Er(L,"fixedMarkers")===!0)&&(Mb(C?be:L),Nt.set([z,qt],{force3D:!0}),it=Nt.quickSetter(z,R.a,on),vt=Nt.quickSetter(qt,R.a,on))}if(T){var ct=T.vars.onUpdate,ot=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),ct&&ct.apply(T,ot||[])})}if(I.previous=function(){return ae[ae.indexOf(I)-1]},I.next=function(){return ae[ae.indexOf(I)+1]},I.revert=function(lt,Et){if(!Et)return I.kill(!0);var Pt=lt!==!1||!I.enabled,Jt=Rn;Pt!==I.isReverted&&(Pt&&(ut=Math.max(J(),I.scroll.rec||0),Wt=I.progress,j=i&&i.progress()),Xt&&[Xt,St,z,qt].forEach(function(We){return We.style.display=Pt?"none":"block"}),Pt&&(Rn=I,I.update(Pt)),f&&(!S||!I.isActive)&&(Pt?Eb(f,Qt,te):Bd(f,Qt,Ai(f),ht)),Pt||I.update(Pt),Rn=Jt,I.isReverted=Pt)},I.refresh=function(lt,Et,Pt,Jt){if(!((Rn||!I.enabled)&&!Et)){if(f&&lt&&Ci){fn(r,"scrollEnd",Ug);return}!Xn&&tt&&tt(I),Rn=I,nt.tween&&!Pt&&(nt.tween.kill(),nt.tween=0),et&&et.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(yt){return yt.vars.immediateRender&&yt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var We=Mt(),ne=Tt(),fe=T?T.duration():sr(L,R),Xe=Lt<=.01||!Lt,we=0,ve=Jt||0,oe=Us(Pt)?Pt.end:n.end,Dn=n.endTrigger||u,Ie=Us(Pt)?Pt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=I.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,I),Nn=u&&Math.max(0,ae.indexOf(I))||0,Je=Nn,Ve,en,Vi,Qs,ln,qe,_i,Ws,E,O,Z,X,q;for(K&&Us(Pt)&&(X=Nt.getProperty(z,R.p),q=Nt.getProperty(qt,R.p));Je-- >0;)qe=ae[Je],qe.end||qe.refresh(0,1)||(Rn=I),_i=qe.pin,_i&&(_i===u||_i===f||_i===yn)&&!qe.isReverted&&(O||(O=[]),O.unshift(qe),qe.revert(!0,!0)),qe!==ae[Je]&&(Nn--,Je--);for(In(Ie)&&(Ie=Ie(I)),Ie=cg(Ie,"start",I),Vt=xg(Ie,u,We,R,J(),Xt,z,I,ne,Y,B,fe,T,I._startClamp&&"_startClamp")||(f?-.001:0),In(oe)&&(oe=oe(I)),pi(oe)&&!oe.indexOf("+=")&&(~oe.indexOf(" ")?oe=(pi(Ie)?Ie.split(" ")[0]:"")+oe:(we=eu(oe.substr(2),We),oe=pi(Ie)?Ie:(T?Nt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Vt):Vt)+we,Dn=u)),oe=cg(oe,"end",I),Rt=Math.max(Vt,xg(oe||(Dn?"100% 0":fe),Dn,We,R,J()+we,St,qt,I,ne,Y,B,fe,T,I._endClamp&&"_endClamp"))||-.001,we=0,Je=Nn;Je--;)qe=ae[Je]||{},_i=qe.pin,_i&&qe.start-qe._pinPush<=Vt&&!T&&qe.end>0&&(Ve=qe.end-(I._startClamp?Math.max(0,qe.start):qe.start),(_i===u&&qe.start-qe._pinPush<Vt||_i===yn)&&isNaN(Ie)&&(we+=Ve*(1-qe.progress)),_i===f&&(ve+=Ve));if(Vt+=we,Rt+=we,I._startClamp&&(I._startClamp+=we),I._endClamp&&!Xn&&(I._endClamp=Rt||-.001,Rt=Math.min(Rt,sr(L,R))),Lt=Rt-Vt||(Vt-=.01)&&.001,Xe&&(Wt=Nt.utils.clamp(0,1,Nt.utils.normalize(Vt,Rt,ut))),I._pinPush=ve,Xt&&we&&(Ve={},Ve[R.a]="+="+we,yn&&(Ve[R.p]="-="+J()),Nt.set([Xt,St],Ve)),f&&!(Hd&&I.end>=sr(L,R)))Ve=Ai(f),Qs=R===je,Vi=J(),W=parseFloat(y(R.a))+ve,!fe&&Rt>1&&(Z=(C?Te.scrollingElement||mi:L).style,Z={style:Z,value:Z["overflow"+R.a.toUpperCase()]},C&&Ai(be)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+R.a.toUpperCase()]="scroll")),Bd(f,Qt,Ve),pe=Kh(f),en=Ar(f,!0),Ws=B&&Tr(L,Qs?Cn:je)(),g?(ht=[g+R.os2,Lt+ve+on],ht.t=Qt,Je=g===tn?ou(f,R)+Lt+ve:0,Je&&(ht.push(R.d,Je+on),Qt.style.flexBasis!=="auto"&&(Qt.style.flexBasis=Je+on)),qa(ht),yn&&ae.forEach(function(yt){yt.pin===yn&&yt.vars.pinSpacing!==!1&&(yt._subPinOffset=!0)}),B&&J(ut)):(Je=ou(f,R),Je&&Qt.style.flexBasis!=="auto"&&(Qt.style.flexBasis=Je+on)),B&&(ln={top:en.top+(Qs?Vi-Vt:Ws)+on,left:en.left+(Qs?Ws:Vi-Vt)+on,boxSizing:"border-box",position:"fixed"},ln[Os]=ln["max"+Ya]=Math.ceil(en.width)+on,ln[Bs]=ln["max"+Kd]=Math.ceil(en.height)+on,ln[Ei]=ln[Ei+ml]=ln[Ei+dl]=ln[Ei+gl]=ln[Ei+pl]="0",ln[tn]=Ve[tn],ln[tn+ml]=Ve[tn+ml],ln[tn+dl]=Ve[tn+dl],ln[tn+gl]=Ve[tn+gl],ln[tn+pl]=Ve[tn+pl],F=Cb(te,ln,S),Xn&&J(0)),i?(E=i._initted,Nd(1),i.render(i.duration(),!0,!0),$=y(R.a)-W+Lt+ve,st=Math.abs(Lt-$)>1,B&&st&&F.splice(F.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Nd(0)):$=Lt,Z&&(Z.value?Z.style["overflow"+R.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+R.a));else if(u&&J()&&!T)for(en=u.parentNode;en&&en!==be;)en._pinOffset&&(Vt-=en._pinOffset,Rt-=en._pinOffset),en=en.parentNode;O&&O.forEach(function(yt){return yt.revert(!1,!0)}),I.start=Vt,I.end=Rt,pt=kt=Xn?ut:J(),!T&&!Xn&&(pt<ut&&J(ut),I.scroll.rec=0),I.revert(!1,!0),Ht=Pn(),U&&(Ot=-1,U.restart(!0)),Rn=0,i&&D&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Xe||Wt!==I.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||Wt||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Vt<-.001&&!Wt?Nt.utils.normalize(Vt,Rt,0):Wt,!0),I.progress=Xe||(pt-Vt)/Lt===Wt?0:Wt),f&&g&&(Qt._pinOffset=Math.round(I.progress*$)),et&&et.invalidate(),isNaN(X)||(X-=Nt.getProperty(z,R.p),q-=Nt.getProperty(qt,R.p),jh(z,R,X),jh(Xt,R,X-(Jt||0)),jh(qt,R,q),jh(St,R,q-(Jt||0))),Xe&&!Xn&&I.update(),h&&!Xn&&!ce&&(ce=!0,h(I),ce=!1)}},I.getVelocity=function(){return(J()-kt)/(Pn()-al)*1e3||0},I.endAnimation=function(){sl(I.callbackAnimation),i&&(et?et.progress(1):i.paused()?D||sl(i,I.direction<0,1):sl(i,i.reversed()))},I.labelToScroll=function(lt){return i&&i.labels&&(Vt||I.refresh()||Vt)+i.labels[lt]/i.duration()*Lt||0},I.getTrailing=function(lt){var Et=ae.indexOf(I),Pt=I.direction>0?ae.slice(0,Et).reverse():ae.slice(Et+1);return(pi(lt)?Pt.filter(function(Jt){return Jt.vars.preventOverlaps===lt}):Pt).filter(function(Jt){return I.direction>0?Jt.end<=Vt:Jt.start>=Rt})},I.update=function(lt,Et,Pt){if(!(T&&!Pt&&!lt)){var Jt=Xn===!0?ut:I.scroll(),We=lt?0:(Jt-Vt)/Lt,ne=We<0?0:We>1?1:We||0,fe=I.progress,Xe,we,ve,oe,Dn,Ie,yn,Nn;if(Et&&(kt=pt,pt=T?J():Jt,v&&(rt=k,k=i&&!D?i.totalProgress():ne)),p&&f&&!Rn&&!Xh&&Ci&&(!ne&&Vt<Jt+(Jt-kt)/(Pn()-al)*p?ne=1e-4:ne===1&&Rt>Jt+(Jt-kt)/(Pn()-al)*p&&(ne=.9999)),ne!==fe&&I.enabled){if(Xe=I.isActive=!!ne&&ne<1,we=!!fe&&fe<1,Ie=Xe!==we,Dn=Ie||!!ne!=!!fe,I.direction=ne>fe?1:-1,I.progress=ne,Dn&&!Rn&&(ve=ne&&!fe?0:ne===1?1:fe===1?2:3,D&&(oe=!Ie&&G[ve+1]!=="none"&&G[ve+1]||G[ve],Nn=i&&(oe==="complete"||oe==="reset"||oe in i))),w&&(Ie||Nn)&&(Nn||d||!i)&&(In(w)?w(I):I.getTrailing(w).forEach(function(Vi){return Vi.endAnimation()})),D||(et&&!Rn&&!Xh?(et._dp._time-et._start!==et._time&&et.render(et._dp._time-et._start),et.resetTo?et.resetTo("totalProgress",ne,i._tTime/i._tDur):(et.vars.totalProgress=ne,et.invalidate().restart())):i&&i.totalProgress(ne,!!(Rn&&(Ht||lt)))),f){if(lt&&g&&(Qt.style[g+R.os2]=mt),!B)V(ll(W+$*ne));else if(Dn){if(yn=!lt&&ne>fe&&Rt+1>Jt&&Jt+1>=sr(L,R),S)if(!lt&&(Xe||yn)){var Je=Ar(f,!0),Ve=Jt-Vt;vg(f,be,Je.top+(R===je?Ve:0)+on,Je.left+(R===je?0:Ve)+on)}else vg(f,Qt);qa(Xe||yn?F:pe),st&&ne<1&&Xe||V(W+(ne===1&&!yn?$:0))}}v&&!nt.tween&&!Rn&&!Xh&&U.restart(!0),o&&(Ie||A&&ne&&(ne<1||!Ud))&&xl(o.targets).forEach(function(Vi){return Vi.classList[Xe||A?"add":"remove"](o.className)}),a&&!D&&!lt&&a(I),Dn&&!Rn?(D&&(Nn&&(oe==="complete"?i.pause().totalProgress(1):oe==="reset"?i.restart(!0).pause():oe==="restart"?i.restart(!0):i[oe]()),a&&a(I)),(Ie||!Ud)&&(l&&Ie&&Va(I,l),Q[ve]&&Va(I,Q[ve]),A&&(ne===1?I.kill(!1,1):Q[ve]=0),Ie||(ve=ne===1?1:3,Q[ve]&&Va(I,Q[ve]))),x&&!Xe&&Math.abs(I.getVelocity())>(cl(x)?x:2500)&&(sl(I.callbackAnimation),et?et.progress(1):sl(i,oe==="reverse"?1:!ne,1))):D&&a&&!Rn&&a(I)}if(vt){var en=T?Jt/T.duration()*(T._caScrollDist||0):Jt;it(en+(z._isFlipped?1:0)),vt(en)}dt&&dt(-Jt/T.duration()*(T._caScrollDist||0))}},I.enable=function(lt,Et){I.enabled||(I.enabled=!0,fn(L,"resize",hl),C||fn(L,"scroll",Ha),tt&&fn(r,"refreshInit",tt),lt!==!1&&(I.progress=Wt=0,pt=kt=Ot=J()),Et!==!1&&I.refresh())},I.getTween=function(lt){return lt&&nt?nt.tween:et},I.setPositions=function(lt,Et,Pt,Jt){if(T){var We=T.scrollTrigger,ne=T.duration(),fe=We.end-We.start;lt=We.start+fe*lt/ne,Et=We.start+fe*Et/ne}I.refresh(!1,!1,{start:hg(lt,Pt&&!!I._startClamp),end:hg(Et,Pt&&!!I._endClamp)},Jt),I.update()},I.adjustPinSpacing=function(lt){if(ht&&lt){var Et=ht.indexOf(R.d)+1;ht[Et]=parseFloat(ht[Et])+lt+on,ht[1]=parseFloat(ht[1])+lt+on,qa(ht)}},I.disable=function(lt,Et){if(lt!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Et||et&&et.pause(),ut=0,xt&&(xt.uncache=1),tt&&un(r,"refreshInit",tt),U&&(U.pause(),nt.tween&&nt.tween.kill()&&(nt.tween=0)),!C)){for(var Pt=ae.length;Pt--;)if(ae[Pt].scroller===L&&ae[Pt]!==I)return;un(L,"resize",hl),C||un(L,"scroll",Ha)}},I.kill=function(lt,Et){I.disable(lt,Et),et&&!Et&&et.kill(),c&&delete Qd[c];var Pt=ae.indexOf(I);Pt>=0&&ae.splice(Pt,1),Pt===Wn&&iu>0&&Wn--,Pt=0,ae.forEach(function(Jt){return Jt.scroller===I.scroller&&(Pt=1)}),Pt||Xn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,lt&&i.revert({kill:!1}),Et||i.kill()),Xt&&[Xt,St,z,qt].forEach(function(Jt){return Jt.parentNode&&Jt.parentNode.removeChild(Jt)}),_l===I&&(_l=0),f&&(xt&&(xt.uncache=1),Pt=0,ae.forEach(function(Jt){return Jt.pin===f&&Pt++}),Pt||(xt.spacer=0)),n.onKill&&n.onKill(I)},ae.push(I),I.enable(!1,!1),gt&&gt(I),i&&i.add&&!Lt){var zt=I.update;I.update=function(){I.update=zt,se.cache++,Vt||Rt||I.refresh()},Nt.delayedCall(.01,I.update),Lt=.01,Vt=Rt=0}else I.refresh();f&&Tb()},r.register=function(n){return Qa||(Nt=n||Rg(),Cg()&&window.document&&r.enable(),Qa=ol),Qa},r.defaults=function(n){if(n)for(var i in n)Jh[i]=n[i];return Jh},r.disable=function(n,i){ol=0,ae.forEach(function(a){return a[i?"kill":"disable"](n)}),un(le,"wheel",Ha),un(Te,"scroll",Ha),clearInterval(Wh),un(Te,"touchcancel",rr),un(be,"touchstart",rr),Yh(un,Te,"pointerdown,touchstart,mousedown",ug),Yh(un,Te,"pointerup,touchend,mouseup",fg),au.kill(),qh(un);for(var s=0;s<se.length;s+=3)Zh(un,se[s],se[s+1]),Zh(un,se[s],se[s+2])},r.enable=function(){if(le=window,Te=document,mi=Te.documentElement,be=Te.body,Nt){if(xl=Nt.utils.toArray,ul=Nt.utils.clamp,Gd=Nt.core.context||rr,Nd=Nt.core.suppressOverwrites||rr,Yd=le.history.scrollRestoration||"auto",Wd=le.pageYOffset||0,Nt.core.globals("ScrollTrigger",r),be){ol=1,Xa=document.createElement("div"),Xa.style.height="100vh",Xa.style.position="absolute",zg(),xb(),Qe.register(Nt),r.isTouch=Qe.isTouch,cs=Qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vd=Qe.isTouch===1,fn(le,"wheel",Ha),qd=[le,Te,mi,be],Nt.matchMedia?(r.matchMedia=function(h){var d=Nt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Nt.addEventListener("matchMediaInit",function(){Og(),tp()}),Nt.addEventListener("matchMediaRevert",function(){return Fg()}),Nt.addEventListener("matchMedia",function(){Fs(0,1),Gs("matchMedia")}),Nt.matchMedia().add("(orientation: portrait)",function(){return Od(),Od})):console.warn("Requires GSAP 3.11.0 or later"),Od(),fn(Te,"scroll",Ha);var n=be.hasAttribute("style"),i=be.style,s=i.borderTopStyle,a=Nt.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ar(be),je.m=Math.round(o.top+je.sc())||0,Cn.m=Math.round(o.left+Cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),Wh=setInterval(mg,250),Nt.delayedCall(.5,function(){return Xh=0}),fn(Te,"touchcancel",rr),fn(be,"touchstart",rr),Yh(fn,Te,"pointerdown,touchstart,mousedown",ug),Yh(fn,Te,"pointerup,touchend,mouseup",fg),kd=Nt.utils.checkPrefix("transform"),ru.push(kd),Qa=Pn(),au=Nt.delayedCall(.2,Fs).pause(),Wa=[Te,"visibilitychange",function(){var h=le.innerWidth,d=le.innerHeight;Te.hidden?(og=h,lg=d):(og!==h||lg!==d)&&hl()},Te,"DOMContentLoaded",Fs,le,"load",Fs,le,"resize",hl],qh(fn),ae.forEach(function(h){return h.enable(0,1)}),c=0;c<se.length;c+=3)Zh(un,se[c],se[c+1]),Zh(un,se[c],se[c+2])}else if(Te){var l=function h(){r.enable(),Te.removeEventListener("DOMContentLoaded",h)};Te.addEventListener("DOMContentLoaded",l)}}},r.config=function(n){"limitCallbacks"in n&&(Ud=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wh)||(Wh=i)&&setInterval(mg,i),"ignoreMobileResize"in n&&(Vd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qh(un)||qh(fn,n.autoRefreshEvents||"none"),Tg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),a=se.indexOf(s),o=ks(s);~a&&se.splice(a,o?6:2),i&&(o?ki.unshift(le,i,be,i,mi,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(pi(n)?Hn(n):n).getBoundingClientRect(),o=a[s?Os:Bs]*i||0;return s?a.right-o>0&&a.left+o<le.innerWidth:a.bottom-o>0&&a.top+o<le.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=Hn(n));var a=n.getBoundingClientRect(),o=a[s?Os:Bs],c=i==null?o/2:i in lu?lu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+c)/le.innerWidth:(a.top+c)/le.innerHeight},r.killAll=function(n){if(ae.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vs.killAll||[];Vs={},i.forEach(function(s){return s()})}},r})();ee.version="3.15.0";ee.saveStyles=function(r){return r?xl(r).forEach(function(t){if(t&&t.style){var e=di.indexOf(t);e>=0&&di.splice(e,5),di.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Nt.core.getCache(t),Gd())}}):di};ee.revert=function(r,t){return tp(!r,t)};ee.create=function(r,t){return new ee(r,t)};ee.refresh=function(r){return r?hl(!0):(Qa||ee.register())&&Fs(!0)};ee.update=function(r){return++se.cache&&Cr(r===!0?2:0)};ee.clearScrollMemory=Bg;ee.maxScroll=function(r,t){return sr(r,t?Cn:je)};ee.getScrollFunc=function(r,t){return Tr(Hn(r),t?Cn:je)};ee.getById=function(r){return Qd[r]};ee.getAll=function(){return ae.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!Ci};ee.snapDirectional=jd;ee.addEventListener=function(r,t){var e=Vs[r]||(Vs[r]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(r,t){var e=Vs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(l,h){var d=[],u=[],f=Nt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&In(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return In(s)&&(s=s(),fn(ee,"refresh",function(){return s=t.batchMax()})),xl(r).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,e.push(ee.create(l))}),e};var Mg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},zd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Qe.isTouch?" pinch-zoom":""):"none",t===mi&&r(be,e)},tu={auto:1,scroll:1},Pb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Nt.core.getCache(s),o=Pn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==be&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(tu[(c=Ai(s)).overflowY]||tu[c.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ks(s)&&(tu[(c=Ai(s)).overflowY]||tu[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vg=function(t,e,n,i){return Qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Pb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Te,Qe.eventTypes[0],bg,!1,!0)},onDisable:function(){return un(Te,Qe.eventTypes[0],bg,!0)}})},Ib=/(input|label|select|textarea)/i,Sg,bg=function(t){var e=Ib.test(t.target.tagName);(e||Sg)&&(t._gsapAllow=!0,Sg=e)},Lb=function(t){Us(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,c,l=Hn(t.target)||mi,h=Nt.core.globals().ScrollSmoother,d=h&&h.get(),u=cs&&(t.content&&Hn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Tr(l,je),g=Tr(l,Cn),_=1,p=(Qe.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,m=0,M=In(i)?function(){return i(o)}:function(){return i||2.8},A,v,S=Vg(l,t.type,!0,s),b=function(){return v=!1},T=rr,x=rr,w=function(){c=sr(l,je),x=ul(cs?1:0,c),n&&(T=ul(0,sr(l,Cn))),A=zs},R=function(){u._gsap.y=ll(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(b);var K=ll(o.deltaY/2),Y=x(f.v-K);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var I=ll((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",u._gsap.y=I+"px",f.cacheID=se.cache,Cr()}return!0}f.offset&&R(),v=!0},L,N,C,B,Q=function(){w(),L.isActive()&&L.vars.scrollY>c&&(f()>c?L.progress(1)&&f(c):L.resetTo("scrollY",c))};return u&&Nt.set(u,{y:"+=0"}),t.ignoreCheck=function(G){return cs&&G.type==="touchmove"&&D(G)||_>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){v=!1;var G=_;_=ll((le.visualViewport&&le.visualViewport.scale||1)/p),L.pause(),G!==_&&zd(l,_>1.01?!0:n?!1:"x"),N=g(),C=f(),w(),A=zs},t.onRelease=t.onGestureStart=function(G,K){if(f.offset&&R(),!K)B.restart(!0);else{se.cache++;var Y=M(),I,tt;n&&(I=g(),tt=I+Y*.05*-G.velocityX/.227,Y*=Mg(g,I,tt,sr(l,Cn)),L.vars.scrollX=T(tt)),I=f(),tt=I+Y*.05*-G.velocityY/.227,Y*=Mg(f,I,tt,sr(l,je)),L.vars.scrollY=x(tt),L.invalidate().duration(Y).play(.01),(cs&&L.vars.scrollY>=c||I>=c-1)&&Nt.to({},{onUpdate:Q,duration:Y})}a&&a(G)},t.onWheel=function(){L._ts&&L.pause(),Pn()-m>1e3&&(A=0,m=Pn())},t.onChange=function(G,K,Y,I,tt){if(zs!==A&&w(),K&&n&&g(T(I[2]===K?N+(G.startX-G.x):g()+K-I[1])),Y){f.offset&&R();var Mt=tt[2]===Y,Tt=Mt?C+G.startY-G.y:f()+Y-tt[1],Ot=x(Tt);Mt&&Tt!==Ot&&(C+=Ot-Tt),f(Ot)}(Y||K)&&Cr()},t.onEnable=function(){zd(l,n?!1:"x"),ee.addEventListener("refresh",Q),fn(le,"resize",Q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},t.onDisable=function(){zd(l,!0),un(le,"resize",Q),ee.removeEventListener("refresh",Q),S.kill()},t.lockAxis=t.lockAxis!==!1,o=new Qe(t),o.iOS=cs,cs&&!f()&&f(1),cs&&Nt.ticker.add(rr),B=o._dc,L=Nt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:kg(f,f(),function(){return L.pause()})},onUpdate:Cr,onComplete:B.vars.onComplete}),o};ee.sort=function(r){if(In(r))return ae.sort(r);var t=le.pageYOffset||0;return ee.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),ae.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ee.observe=function(r){return new Qe(r)};ee.normalizeScroll=function(r){if(typeof r>"u")return Qn;if(r===!0&&Qn)return Qn.enable();if(r===!1){Qn&&Qn.kill(),Qn=r;return}var t=r instanceof Qe?r:Lb(r);return Qn&&Qn.target===t.target&&Qn.kill(),ks(t.target)&&(Qn=t),t};ee.core={_getVelocityProp:Qh,_inputObserver:Vg,_scrollers:se,_proxies:ki,bridge:{ss:function(){Ci||Gs("scrollStart"),Ci=Pn()},ref:function(){return Rn}}};Rg()&&Nt.registerPlugin(ee);var yl=new H;function Ri(r,t,e,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;yl.copy(t),yl[n]=0,yl.normalize();let l=.5*a/(a+o),h=1-yl.angleTo(r)/c;return Math.sign(yl[e])===1?h*l:o/(a+o)+l+l*(1-h)}var hu=class r extends Yi{constructor(t=1,e=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new H,l=new H,h=new H(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new H,p=.5/a;for(let m=0,M=0;m<d.length;m+=3,M+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*s,d[m+1]=h.y*Math.sign(c.y)+l.y*s,d[m+2]=h.z*Math.sign(c.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[M+0]=Ri(_,l,"z","y",s,n),f[M+1]=1-Ri(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),f[M+0]=1-Ri(_,l,"z","y",s,n),f[M+1]=1-Ri(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),f[M+0]=1-Ri(_,l,"x","z",s,t),f[M+1]=Ri(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),f[M+0]=1-Ri(_,l,"x","z",s,t),f[M+1]=1-Ri(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),f[M+0]=1-Ri(_,l,"x","y",s,t),f[M+1]=1-Ri(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),f[M+0]=Ri(_,l,"x","y",s,t),f[M+1]=1-Ri(_,l,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var uu=`
float zHash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float zNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(zHash13(i), zHash13(i + vec3(1,0,0)), f.x), mix(zHash13(i + vec3(0,1,0)), zHash13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(zHash13(i + vec3(0,0,1)), zHash13(i + vec3(1,0,1)), f.x), mix(zHash13(i + vec3(0,1,1)), zHash13(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float zFbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * zNoise(p); p *= 2.03; a *= 0.5; } return s / 0.9375; }
`;function Za(r,t,e){return r.onBeforeCompile=n=>{Object.assign(n.uniforms,t.uniforms||{});let i=n.vertexShader,s=n.fragmentShader;t.vertexHead&&(i=i.replace("#include <common>",`#include <common>
${t.vertexHead}`)),t.fragmentHead&&(s=s.replace("#include <common>",`#include <common>
${t.fragmentHead}`));for(let[a,o]of Object.entries(t.vertex||{}))i=i.replace(`#include <${a}>`,`#include <${a}>
${o}`);for(let[a,o]of Object.entries(t.fragment||{}))s=s.replace(`#include <${a}>`,`#include <${a}>
${o}`);for(let[a,o]of Object.entries(t.replaceFragment||{}))s=s.replace(`#include <${a}>`,o);n.vertexShader=i,n.fragmentShader=s},r.customProgramCacheKey=()=>e,r}var Gg=`
#ifdef USE_TRANSMISSION
  material.transmission = transmission;
  material.transmissionAlpha = 1.0;
  material.thickness = thickness;
  material.attenuationDistance = attenuationDistance;
  material.attenuationColor = attenuationColor;
  vec3 tPos = vWorldPosition;
  vec3 tV = normalize( cameraPosition - tPos );
  vec3 tN = transformNormalByInverseViewMatrix( normal, viewMatrix );
  vec3 tRay = getVolumeTransmissionRay( tN, tV, material.thickness, material.ior, modelMatrix );
  vec4 tNdc = projectionMatrix * viewMatrix * vec4( tPos + tRay, 1.0 );
  vec2 tUv = ( tNdc.xy / tNdc.w + 1.0 ) * 0.5;
  vec4 tS = getTransmissionSample( tUv, material.roughness, material.ior );
  float tCov = clamp( ( tS.a - 0.5 ) * 2.0, 0.0, 1.0 );
  vec3 tPremul = max( tS.rgb - ( 1.0 - tCov ), 0.0 );
  vec3 tF = EnvironmentBRDF( tN, tV, material.specularColorBlended, material.specularF90, material.roughness );
  float tFres = pow( 1.0 - saturate( abs( dot( tN, tV ) ) ), 3.0 );
  float tHaze = uHaze + uEdgeHaze * tFres;
  vec3 tCol = ( 1.0 - tF ) * material.diffuseContribution * tPremul * volumeAttenuation( length( tRay ), material.attenuationColor, material.attenuationDistance );
  material.transmissionAlpha = mix( 1.0, clamp( tCov + tHaze, 0.0, 1.0 ), material.transmission );
  totalDiffuse = mix( totalDiffuse, tCol + tHaze * uHazeColor, material.transmission );
#endif
`,Hg=`
#ifdef FLIP_SIDED
  gl_FragColor = vec4( gl_FragColor.rgb + ( 1.0 - gl_FragColor.a ), 0.5 + 0.5 * gl_FragColor.a );
#endif
`;var ep={title:{d:"M64 105L14 105Q7 105 4 103Q1 101 1 98Q0 95 0 91L0 14Q0 11 1 7Q1 4 4 2Q7 0 14 0Q21 0 23 2Q26 4 27 7Q27 11 27 14L27 82L64 82Q67 82 70 82Q72 83 74 85Q76 88 76 93Q76 99 74 102Q72 104 69 105Q67 105 64 105M142 105Q135 105 132 103Q130 101 129 99Q129 100 128 100Q126 102 122 103Q119 105 113 105Q107 105 100 102Q94 99 89 93Q84 88 81 81Q79 74 79 67Q79 59 81 53Q84 46 89 41Q94 35 100 32Q107 29 113 29Q118 29 122 31Q125 32 128 34Q128 35 129 35Q129 33 132 31Q135 29 142 29Q149 29 151 31Q154 33 155 36Q155 39 155 43L155 91Q155 95 155 98Q154 101 151 103Q149 105 142 105M117 78Q120 78 122 76Q125 75 126 72Q127 70 127 67Q127 64 126 62Q125 59 122 58Q120 56 117 56Q114 56 111 58Q109 59 107 62Q106 64 106 67Q106 70 107 72Q109 75 111 76Q114 78 117 78M266 105L208 105Q202 105 198 101Q194 98 194 92Q194 89 195 88Q195 86 196 85L238 27L208 27Q205 27 202 26Q199 26 196 23Q194 20 194 14Q194 7 196 4Q198 1 202 1Q205 0 208 0L264 0Q270 0 274 4Q278 8 278 14Q278 16 277 18Q277 20 276 21L234 79L266 79Q270 79 273 79Q276 80 278 83Q280 85 280 92Q280 99 278 101Q276 104 273 105Q269 105 266 105M346 105Q339 105 336 103Q334 101 333 99Q333 100 332 100Q330 102 326 103Q322 105 317 105Q310 105 304 102Q298 99 293 93Q288 88 285 81Q283 74 283 67Q283 59 285 53Q288 46 293 41Q298 35 304 32Q310 29 317 29Q322 29 326 31Q329 32 332 34Q332 35 333 35Q333 33 336 31Q339 29 346 29Q353 29 355 31Q358 33 359 36Q359 39 359 43L359 91Q359 95 359 98Q358 101 355 103Q353 105 346 105M321 78Q324 78 326 76Q328 75 330 72Q331 70 331 67Q331 64 330 62Q328 59 326 58Q324 56 321 56Q318 56 315 58Q313 59 311 62Q310 64 310 67Q310 70 311 72Q313 75 315 76Q318 78 321 78M405 106Q399 106 392 103Q386 101 380 96Q374 91 370 84Q366 77 366 67Q366 57 370 50Q374 43 380 38Q386 33 392 31Q399 28 405 28Q411 28 415 29Q419 30 422 32Q425 33 426 34Q429 36 431 38Q434 41 434 44Q434 46 433 48Q433 50 431 53Q426 61 420 61Q418 61 416 60Q414 60 413 59Q411 57 409 57Q408 56 405 56Q402 56 400 57Q397 59 396 61Q394 64 394 67Q394 70 396 73Q397 75 400 77Q402 78 405 78Q407 78 408 78Q410 77 411 77Q411 76 411 76Q414 75 415 74Q417 73 419 73Q422 73 425 75Q427 77 431 81Q434 85 434 88Q434 92 432 94Q430 97 426 100Q425 100 423 102Q420 103 416 105Q411 106 405 106M502 105Q495 105 492 103Q490 101 489 99Q489 100 488 100Q486 102 482 103Q478 105 473 105Q466 105 460 102Q454 99 449 93Q444 88 441 81Q439 74 439 67Q439 59 441 53Q444 46 449 41Q454 35 460 32Q466 29 473 29Q478 29 482 31Q485 32 488 34Q488 35 489 35Q489 33 492 31Q495 29 502 29Q509 29 511 31Q514 33 515 36Q515 39 515 43L515 91Q515 95 515 98Q514 101 511 103Q509 105 502 105M477 78Q480 78 482 76Q484 75 486 72Q487 70 487 67Q487 64 486 62Q484 59 482 58Q480 56 477 56Q474 56 471 58Q469 59 467 62Q466 64 466 67Q466 70 467 72Q469 75 471 76Q474 78 477 78M564 105Q556 105 550 103Q544 102 540 98Q536 94 535 88Q533 83 533 75L533 56L529 56Q524 56 522 53Q520 50 520 43Q520 36 522 33Q525 30 530 30L533 30L533 17Q533 13 533 10Q534 8 537 6Q540 4 546 4Q553 4 556 6Q559 8 559 11Q560 14 560 17L560 29L568 29Q571 29 574 30Q577 30 579 33Q581 36 581 43Q581 49 579 52Q577 55 574 56Q571 56 568 56L560 56L560 74Q560 75 560 76Q560 78 561 78Q561 79 562 79Q563 79 564 79Q568 79 571 80Q574 81 576 83Q577 86 577 92Q577 98 575 101Q573 104 570 105Q567 105 564 105M624 107Q613 107 605 103Q598 99 593 94Q588 88 586 81Q584 74 584 67Q584 56 589 47Q594 38 603 32Q613 27 625 27Q634 27 641 30Q647 33 651 38Q655 43 657 48Q659 53 659 58Q659 66 655 71Q651 75 644 75L612 75Q613 78 615 79Q617 81 620 82Q622 83 626 83Q629 83 632 83Q634 82 636 82Q638 81 639 80Q641 80 642 79Q644 79 645 79Q647 79 650 81Q652 83 654 86Q655 88 655 90Q656 92 656 93Q656 98 652 101Q648 104 641 105Q635 107 624 107M612 61L629 61Q631 61 632 60Q633 59 633 57Q633 56 632 54Q631 53 629 52Q627 51 624 51Q621 51 618 53Q615 54 614 56Q612 59 612 61M703 106Q697 106 690 103Q683 101 677 96Q671 91 668 84Q664 77 664 67Q664 57 668 50Q671 43 677 38Q683 33 690 31Q697 28 703 28Q708 28 713 29Q717 30 720 32Q722 33 723 34Q726 36 729 38Q732 41 732 44Q732 46 731 48Q730 50 729 53Q723 61 718 61Q715 61 714 60Q712 60 710 59Q709 57 707 57Q705 56 703 56Q700 56 697 57Q695 59 693 61Q692 64 692 67Q692 70 693 73Q695 75 697 77Q700 78 702 78Q705 78 706 78Q707 77 708 77Q709 76 709 76Q711 75 713 74Q715 73 717 73Q719 73 722 75Q725 77 728 81Q731 85 732 88Q732 92 730 94Q728 97 723 100Q723 100 720 102Q718 103 713 105Q709 106 703 106M799 105Q793 105 789 103Q787 101 787 99Q786 100 786 100Q783 102 780 103Q776 105 771 105Q764 105 758 102Q752 99 747 93Q742 88 739 81Q736 74 736 67Q736 59 739 53Q742 46 747 41Q752 35 758 32Q764 29 771 29Q776 29 779 31Q783 32 785 34Q786 35 787 35Q787 33 790 31Q793 29 800 29Q806 29 809 31Q812 33 812 36Q813 39 813 43L813 91Q813 95 812 98Q812 101 809 103Q806 105 799 105M775 78Q777 78 780 76Q782 75 784 72Q785 70 785 67Q785 64 784 62Q782 59 780 58Q777 56 774 56Q771 56 769 58Q766 59 765 62Q763 64 763 67Q763 70 765 72Q767 75 769 76Q772 78 775 78M834 105Q827 105 824 103Q822 101 821 98Q821 95 821 91L821 42Q821 39 821 36Q822 33 825 31Q827 29 834 29Q840 29 843 31Q846 32 847 34Q847 36 847 38Q848 38 848 37Q850 35 853 33Q856 31 860 30Q863 29 866 29Q874 29 879 32Q885 35 889 40Q893 45 895 52Q897 59 897 67L897 92Q897 95 896 98Q896 101 893 103Q890 105 883 105Q876 105 873 103Q870 101 870 98Q869 95 869 91L869 67Q869 63 868 61Q867 59 864 57Q862 56 859 56Q855 56 853 57Q850 59 849 61Q848 64 848 67L848 92Q848 95 847 98Q846 101 844 103Q841 105 834 105M965 105Q958 105 955 103Q953 101 952 99Q952 100 951 100Q949 102 945 103Q942 105 936 105Q930 105 923 102Q917 99 912 93Q907 88 905 81Q902 74 902 67Q902 59 905 53Q907 46 912 41Q917 35 923 32Q930 29 936 29Q941 29 945 31Q948 32 951 34Q951 35 952 35Q953 33 955 31Q958 29 965 29Q972 29 974 31Q977 33 978 36Q978 39 978 43L978 91Q978 95 978 98Q977 101 974 103Q972 105 965 105M940 78Q943 78 945 76Q948 75 949 72Q950 70 950 67Q950 64 949 62Q948 59 945 58Q943 56 940 56Q937 56 934 58Q932 59 930 62Q929 64 929 67Q929 70 930 72Q932 75 935 76Q937 78 940 78",w:978,h:107,baseline:104},sub:{d:"M9 108Q5 108 3 107Q1 106 0 104Q0 102 0 99L0 12Q0 10 1 8Q1 6 3 5Q5 3 9 3Q13 3 15 5Q17 6 18 8Q18 10 18 13L18 99Q18 102 18 104Q17 106 15 107Q13 108 9 108M71 109Q64 109 57 106Q50 104 44 99Q39 94 36 87Q33 80 33 71Q33 62 36 56Q39 49 44 44Q50 39 57 36Q63 34 71 34Q76 34 80 35Q85 37 89 39Q92 41 94 43Q96 45 97 47Q98 48 98 51Q97 52 96 53Q96 55 94 56Q91 60 87 59Q85 58 83 57Q81 56 79 55Q77 53 75 53Q73 52 71 52Q65 52 60 54Q56 57 53 61Q51 66 51 71Q51 77 53 81Q56 86 60 88Q65 91 70 91Q73 91 75 90Q78 89 80 88Q82 87 83 86Q85 85 86 84Q87 83 89 83Q91 83 92 84Q94 86 96 88Q98 91 98 93Q99 95 97 97Q96 99 94 100Q92 102 88 104Q85 106 80 107Q76 109 71 109M148 109Q139 109 131 106Q124 103 119 97Q114 92 112 85Q109 78 109 71Q109 60 114 52Q119 43 128 39Q137 34 148 34Q156 34 162 36Q169 39 173 43Q177 47 179 52Q181 57 181 62Q181 70 177 73Q174 77 168 77L128 77Q128 82 131 86Q135 89 139 91Q144 93 149 93Q153 93 156 93Q159 93 161 92Q163 91 164 90Q166 90 167 89Q169 89 170 88Q171 88 173 89Q175 90 176 92Q177 94 177 95Q177 96 177 98Q177 101 174 103Q170 106 164 107Q157 109 148 109M128 66L159 66Q162 66 163 65Q164 65 164 62Q164 58 162 56Q160 53 156 51Q153 50 148 50Q143 50 138 52Q134 54 131 58Q128 62 128 66M269 109Q262 109 255 106Q249 104 243 99Q238 94 234 87Q231 80 231 71Q231 62 234 56Q238 49 243 44Q248 39 255 36Q262 34 269 34Q274 34 279 35Q284 37 287 39Q291 41 292 43Q294 45 295 47Q297 48 296 51Q296 52 295 53Q294 55 293 56Q289 60 286 59Q284 58 282 57Q280 56 278 55Q276 53 274 53Q272 52 269 52Q263 52 259 54Q255 57 252 61Q250 66 250 71Q250 77 252 81Q255 86 259 88Q263 91 269 91Q272 91 274 90Q276 89 278 88Q280 87 282 86Q283 85 285 84Q286 83 287 83Q289 83 291 84Q293 86 295 88Q297 91 297 93Q297 95 296 97Q295 99 292 100Q291 102 287 104Q283 106 279 107Q274 109 269 109M320 108Q316 108 314 107Q312 106 312 104Q311 102 311 99L311 43Q311 41 312 39Q312 37 314 35Q316 34 320 34Q324 34 326 35Q328 36 329 38Q329 40 329 41L328 44Q329 43 330 41Q331 39 334 37Q336 36 339 35Q342 33 347 33Q348 33 350 34Q352 34 354 35Q356 36 358 37Q360 38 361 39Q362 41 362 42Q362 47 359 50Q357 54 353 54Q351 54 350 53Q349 53 348 52Q348 52 346 51Q345 51 342 51Q340 51 338 51Q336 52 334 54Q332 55 330 58Q329 60 329 63L329 99Q329 102 329 104Q328 106 326 107Q324 108 320 108M411 109Q401 109 394 106Q386 103 382 97Q377 92 374 85Q372 78 372 71Q372 60 377 52Q382 43 390 39Q399 34 411 34Q419 34 425 36Q431 39 435 43Q439 47 441 52Q444 57 444 62Q444 70 440 73Q436 77 430 77L391 77Q391 82 394 86Q397 89 402 91Q406 93 411 93Q415 93 418 93Q421 93 423 92Q425 91 427 90Q428 90 430 89Q431 89 432 88Q434 88 435 89Q437 90 438 92Q439 94 439 95Q440 96 440 98Q440 101 436 103Q433 106 426 107Q420 109 411 109M391 66L421 66Q424 66 425 65Q427 65 427 62Q427 58 425 56Q422 53 419 51Q415 50 410 50Q405 50 400 52Q396 54 393 58Q391 62 391 66M519 108Q515 108 512 106Q510 105 510 102L511 97Q510 99 507 101Q504 104 500 106Q495 108 489 108Q482 108 475 105Q469 102 464 97Q460 92 457 85Q454 79 454 71Q454 64 457 57Q460 51 464 45Q469 40 475 37Q482 35 489 35Q495 35 499 36Q503 38 506 40Q509 43 511 45L510 41Q510 38 512 36Q515 34 519 34Q523 34 525 36Q527 37 527 39Q528 41 528 44L528 99Q528 101 527 104Q527 106 525 107Q523 108 519 108M491 91Q496 91 500 88Q504 86 507 81Q509 77 509 71Q509 65 507 61Q504 57 500 54Q496 52 491 52Q485 52 481 54Q477 57 474 61Q472 66 472 71Q472 77 474 81Q477 86 481 88Q486 91 491 91M553 108Q549 108 547 107Q545 106 545 104Q544 102 544 99L544 43Q544 41 545 39Q545 37 547 36Q549 34 553 34Q558 34 560 36Q562 38 562 42L560 46Q561 44 563 42Q565 41 567 39Q570 37 573 35Q576 34 580 34Q585 34 589 36Q593 38 596 41Q600 44 602 48Q605 44 608 41Q611 38 615 36Q619 34 625 34Q633 34 639 39Q645 43 648 51Q651 59 651 70L651 99Q651 102 651 104Q650 106 648 107Q647 108 642 108Q638 108 636 107Q634 106 634 104Q633 102 633 99L633 70Q633 64 632 60Q631 56 628 54Q625 52 621 52Q617 52 613 54Q610 56 608 60Q607 64 607 70L607 99Q607 102 606 104Q605 106 603 107Q601 108 597 108Q593 108 591 107Q590 105 589 103Q589 101 589 99L589 70Q589 64 587 60Q586 56 583 54Q581 52 576 52Q572 52 569 54Q565 57 564 61Q562 65 562 70L562 99Q562 102 562 104Q561 106 559 107Q557 108 553 108M737 109Q726 109 718 106Q711 102 707 96Q703 89 703 80Q703 75 705 70Q707 65 711 60Q715 55 721 51Q719 46 717 42Q716 38 715 34Q714 30 714 26Q714 18 718 12Q721 6 728 3Q734 0 744 0Q752 0 758 3Q764 6 767 11Q770 16 770 24Q770 28 768 32Q766 35 762 39Q758 43 753 47Q749 51 743 55Q747 60 750 65Q754 69 758 73Q762 77 766 79Q770 75 772 72Q774 68 775 64Q775 62 777 60Q780 59 784 59Q788 59 790 60Q791 61 792 63Q792 64 792 66Q792 71 789 76Q786 82 780 87Q782 88 783 88Q785 89 786 89Q788 89 791 89Q795 89 797 91Q799 93 799 98Q799 103 797 105Q795 107 790 107Q786 107 782 106Q778 106 773 104Q769 103 765 100Q761 103 756 105Q751 107 746 108Q741 109 737 109M737 92Q741 92 744 92Q747 91 750 89Q747 87 745 85Q742 82 740 79Q737 76 734 73Q732 69 729 66Q727 68 726 70Q724 72 723 73Q722 75 722 76Q721 78 721 80Q721 84 723 87Q725 89 728 91Q732 92 737 92M735 41Q739 38 743 35Q746 33 748 31Q751 28 752 27Q753 25 753 23Q753 19 750 17Q748 14 743 14Q740 14 737 16Q734 17 732 19Q731 22 731 25Q731 27 731 29Q732 32 733 35Q734 37 735 41M862 108Q858 108 856 107Q854 106 854 104Q853 102 853 99L853 12Q853 10 854 8Q854 6 856 5Q858 3 863 3Q866 3 867 4Q869 4 870 5Q871 6 872 7L906 55L941 6Q942 5 944 5Q945 4 946 4Q948 3 951 3Q955 3 957 5Q959 6 959 8Q960 10 960 13L960 99Q960 102 959 104Q959 106 957 107Q955 108 950 108Q946 108 944 107Q942 106 942 104Q941 101 941 99L941 35L914 74Q914 75 913 76Q912 77 910 77Q909 78 906 78Q904 78 902 77Q901 77 900 76Q899 75 899 74L871 35L871 99Q871 102 871 104Q870 106 868 107Q866 108 862 108M1013 109Q1003 109 996 106Q989 103 984 97Q979 92 976 85Q974 78 974 71Q974 60 979 52Q984 43 993 39Q1001 34 1013 34Q1021 34 1027 36Q1033 39 1037 43Q1041 47 1044 52Q1046 57 1046 62Q1046 70 1042 73Q1038 77 1032 77L993 77Q993 82 996 86Q999 89 1004 91Q1009 93 1014 93Q1017 93 1020 93Q1023 93 1025 92Q1027 91 1029 90Q1031 90 1032 89Q1033 89 1034 88Q1036 88 1038 89Q1039 90 1040 92Q1041 94 1042 95Q1042 96 1042 98Q1042 101 1038 103Q1035 106 1028 107Q1022 109 1013 109M993 66L1024 66Q1026 66 1028 65Q1029 65 1029 62Q1029 58 1027 56Q1025 53 1021 51Q1017 50 1013 50Q1007 50 1003 52Q998 54 995 58Q993 62 993 66M1120 36Q1123 39 1124 41Q1124 43 1124 45Q1123 47 1120 50L1102 71L1120 93Q1123 95 1124 98Q1124 100 1124 101Q1123 103 1120 106Q1118 108 1116 109Q1114 110 1112 109Q1110 108 1107 105L1090 85L1073 105Q1070 108 1068 109Q1066 110 1064 109Q1062 108 1060 106Q1057 103 1056 101Q1056 100 1057 98Q1058 95 1060 93L1078 71L1060 50Q1057 47 1056 45Q1056 43 1056 41Q1057 39 1060 36Q1063 34 1064 34Q1066 33 1068 34Q1070 35 1073 38L1090 58L1107 38Q1111 34 1114 33Q1116 33 1120 36M1209 110Q1202 110 1197 108Q1191 106 1187 104Q1183 101 1180 99Q1177 96 1176 94Q1174 91 1173 89Q1173 87 1174 85Q1175 83 1178 80Q1180 78 1183 78Q1185 78 1187 79Q1189 81 1191 84Q1195 88 1199 90Q1204 92 1208 92Q1214 92 1219 91Q1223 89 1225 86Q1228 83 1228 78Q1228 74 1225 71Q1223 69 1219 67Q1215 65 1210 63Q1205 62 1200 60Q1196 59 1193 57Q1189 55 1186 53Q1183 51 1180 48Q1178 45 1177 41Q1175 36 1175 31Q1175 23 1180 16Q1184 9 1191 6Q1199 2 1208 2Q1215 2 1219 3Q1224 4 1228 6Q1231 8 1234 9Q1236 11 1237 12Q1241 16 1241 18Q1241 20 1238 24Q1235 28 1232 29Q1229 29 1226 26Q1223 24 1221 22Q1218 21 1215 20Q1212 19 1208 19Q1205 19 1202 20Q1200 21 1198 22Q1196 24 1195 26Q1194 28 1194 31Q1194 35 1196 38Q1198 40 1202 42Q1205 43 1210 45Q1215 46 1220 47Q1224 49 1229 51Q1234 54 1238 57Q1242 60 1244 65Q1246 70 1246 78Q1246 86 1243 92Q1240 98 1234 102Q1229 106 1222 108Q1216 110 1209 110M1269 108Q1265 108 1263 107Q1261 106 1261 104Q1260 102 1260 99L1260 43Q1260 41 1261 39Q1261 37 1263 35Q1265 34 1269 34Q1273 34 1275 35Q1276 36 1277 38Q1278 39 1278 40Q1278 42 1278 42L1277 47Q1278 45 1280 42Q1282 40 1285 38Q1288 36 1292 35Q1295 34 1299 34Q1306 34 1312 37Q1317 39 1321 44Q1325 49 1327 55Q1329 61 1329 69L1329 99Q1329 102 1329 104Q1328 106 1327 107Q1325 108 1320 108Q1316 108 1314 107Q1312 106 1312 104Q1311 102 1311 99L1311 69Q1311 64 1310 60Q1308 56 1304 54Q1301 52 1295 52Q1290 52 1286 54Q1282 56 1280 60Q1278 64 1278 69L1278 99Q1278 102 1278 104Q1277 106 1275 107Q1273 108 1269 108M1407 108Q1403 108 1401 106Q1399 105 1399 102L1400 97Q1398 99 1396 101Q1393 104 1388 106Q1383 108 1377 108Q1370 108 1364 105Q1357 102 1353 97Q1348 92 1345 85Q1342 79 1342 71Q1342 64 1345 57Q1348 51 1353 45Q1358 40 1364 37Q1370 35 1377 35Q1383 35 1387 36Q1392 38 1395 40Q1398 43 1400 45L1399 41Q1399 38 1401 36Q1403 34 1407 34Q1412 34 1413 36Q1415 37 1416 39Q1416 41 1416 44L1416 99Q1416 101 1416 104Q1415 106 1413 107Q1411 108 1407 108M1380 91Q1385 91 1389 88Q1393 86 1395 81Q1398 77 1398 71Q1398 65 1395 61Q1393 57 1388 54Q1384 52 1379 52Q1374 52 1369 54Q1365 57 1363 61Q1360 66 1360 71Q1360 77 1363 81Q1365 86 1370 88Q1374 91 1380 91M1468 109Q1461 109 1454 106Q1447 104 1442 99Q1436 94 1433 87Q1430 80 1430 71Q1430 62 1433 56Q1436 49 1442 44Q1447 39 1454 36Q1461 34 1468 34Q1473 34 1478 35Q1483 37 1486 39Q1490 41 1491 43Q1493 45 1494 47Q1496 48 1495 51Q1495 52 1494 53Q1493 55 1492 56Q1488 60 1485 59Q1483 58 1481 57Q1479 56 1477 55Q1475 53 1473 53Q1470 52 1468 52Q1462 52 1458 54Q1453 57 1451 61Q1448 66 1448 71Q1448 77 1451 81Q1453 86 1458 88Q1462 91 1468 91Q1470 91 1473 90Q1475 89 1477 88Q1479 87 1480 86Q1482 85 1483 84Q1485 83 1486 83Q1488 83 1490 84Q1491 86 1494 88Q1496 91 1496 93Q1496 95 1495 97Q1494 99 1491 100Q1489 102 1486 104Q1482 106 1478 107Q1473 109 1468 109M1541 71L1569 92Q1573 95 1573 98Q1573 101 1570 105Q1567 108 1565 109Q1563 110 1562 109Q1560 108 1557 106L1528 81L1528 99Q1528 102 1528 104Q1527 106 1525 107Q1523 108 1519 108Q1515 108 1513 107Q1511 106 1511 104Q1510 102 1510 99L1510 10Q1510 7 1511 5Q1511 3 1513 2Q1515 0 1519 0Q1524 0 1525 2Q1527 3 1528 5Q1528 7 1528 10L1528 59L1549 39Q1551 37 1553 36Q1556 35 1558 36Q1560 36 1562 39Q1566 43 1565 46Q1565 48 1562 52L1541 71M1612 109Q1608 109 1604 108Q1599 108 1595 106Q1591 104 1588 102Q1585 100 1584 97Q1584 96 1584 94Q1584 93 1585 91Q1586 90 1587 88Q1589 87 1590 86Q1591 86 1594 87Q1596 88 1598 89Q1600 90 1603 92Q1605 93 1608 94Q1610 94 1613 94Q1619 94 1622 92Q1625 91 1625 87Q1625 85 1624 84Q1623 82 1621 81Q1620 80 1617 79Q1615 79 1612 78Q1610 77 1607 76Q1603 75 1599 74Q1596 72 1593 70Q1590 68 1588 64Q1586 60 1586 55Q1586 48 1589 43Q1593 39 1599 36Q1605 34 1614 34Q1617 34 1619 34Q1622 35 1625 35Q1627 36 1630 37Q1632 39 1635 40Q1638 42 1638 45Q1639 48 1636 51Q1635 53 1633 54Q1631 55 1630 54Q1627 53 1624 51Q1622 50 1619 49Q1616 48 1613 48Q1610 48 1607 49Q1605 50 1604 51Q1602 53 1602 55Q1602 57 1604 59Q1605 60 1607 61Q1609 62 1611 62Q1614 63 1617 64Q1621 65 1626 66Q1630 67 1634 70Q1637 72 1640 76Q1642 80 1642 86Q1642 97 1634 103Q1626 109 1612 109",w:1642,h:110,baseline:107}};var np=2048/600;function Qg(r=8,t=2048){let e=Math.round(t/np),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.clearRect(0,0,t,e);let s="#E0261D",a=ep.title,o=ep.sub,c=t*.74/a.w,l=(t-a.w*c)/2,h=e*.12;i.save(),i.translate(l,h),i.scale(c,c),i.fillStyle=s,i.fill(new Path2D(a.d)),i.restore();let d=t*.6/o.w,u=l+a.w*c*.22,f=h+a.h*c+e*.06;i.save(),i.translate(u,f),i.scale(d,d),i.fillStyle=s,i.fill(new Path2D(o.d)),i.restore();let g=new ma(n);return g.colorSpace=Fn,g.anisotropy=Math.min(8,r),g.minFilter=$i,g.magFilter=nn,g.generateMipmaps=!0,g}function ip(r,t=256){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,t,t);let i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[s,a]of r){let o=Math.round(a*255);i.addColorStop(s,`rgb(${o},${o},${o})`)}return n.fillStyle=i,n.fillRect(0,0,t,t),new ma(e)}var ar=r=>r<0?0:r>1?1:r,xe=(r,t,e)=>r+(t-r)*e,Ln=(r,t,e)=>ar((r-t)/(e-t)),gi=r=>r*r*(3-2*r),hs=r=>r*r*r*(r*(r*6-15)+10);var Rr=Math.PI/180;function Wg(r){let t=r>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Db(r,t,e){let n=r*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Ml(r,t,e){let n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),a=r-n,o=t-i,c=e-s,l=gi(a),h=gi(o),d=gi(c),u=(m,M,A)=>Db(n+m,i+M,s+A),f=xe(u(0,0,0),u(1,0,0),l),g=xe(u(0,1,0),u(1,1,0),l),_=xe(u(0,0,1),u(1,0,1),l),p=xe(u(0,1,1),u(1,1,1),l);return xe(xe(f,g,h),xe(_,p,h),d)}function rp(r,t,e,n=4){let i=.5,s=0,a=0;for(let o=0;o<n;o++)s+=i*Ml(r,t,e),a+=i,r*=2.03,t*=2.03,e*=2.03,i*=.5;return s/a}var Sl={y0:.03,y1:1.575,rb:.45,rt:.615,rim:1.61,lidTop:1.69},bl=r=>xe(Sl.rb,Sl.rt,(r-Sl.y0)/(Sl.y1-Sl.y0)),Ja=r=>bl(r)-.016,or={mango:new Ct("#F39A1E"),mangoDeep:new Ct("#E87E0C"),cream:new Ct("#FFD98F"),chamoy:new Ct("#7E1420"),chamoyHi:new Ct("#B5261F"),tajin:new Ct("#D9432B")};function qg(r,t,e,n=0){let i=(r+1)*t,s=new Float32Array(i*3),a=n?new Float32Array(i*n):null,o={x:0,y:0,z:0,e:[0,0,0,0]};for(let d=0;d<=r;d++)for(let u=0;u<t;u++){e(d/r,u/t*Math.PI*2,o);let f=d*t+u;if(s[f*3]=o.x,s[f*3+1]=o.y,s[f*3+2]=o.z,a)for(let g=0;g<n;g++)a[f*n+g]=o.e[g]}let c=[];for(let d=0;d<r;d++)for(let u=0;u<t;u++){let f=d*t+u,g=d*t+(u+1)%t,_=(d+1)*t+u,p=(d+1)*t+(u+1)%t;c.push(f,g,_,g,p,_)}let l=new Bn;l.setIndex(c),l.setAttribute("position",new Ue(s,3)),a&&l.setAttribute("aExtra",new Ue(a,n)),l.computeVertexNormals();let h=l.attributes.normal;for(let[d,u]of[[0,-1],[r,1]])if(Math.hypot(s[d*t*3],s[d*t*3+2])<1e-4)for(let g=0;g<t;g++)h.setXYZ(d*t+g,0,u,0);return l}function Yg(r){let t=[0];for(let n=1;n<r.length;n++)t.push(t[n-1]+Math.hypot(r[n][0]-r[n-1][0],r[n][1]-r[n-1][1]));let e=t[t.length-1];return{total:e,at(n,i){let s=n*e,a=1;for(;a<t.length-1&&t[a]<s;)a++;let o=(s-t[a-1])/(t[a]-t[a-1]||1),c=r[a-1],l=r[a];i.r=xe(c[0],l[0],o),i.y=xe(c[1],l[1],o);let h=l[0]-c[0],d=l[1]-c[1],u=Math.hypot(h,d)||1;return i.nr=d/u,i.ny=-h/u,i.L=s,i}}}function Xg(r,t){let e=new Ui({color:16777215,metalness:0,roughness:.06,transmission:1,thickness:r,ior:1.57,specularIntensity:1,envMapIntensity:1.35,side:Jn,attenuationColor:new Ct("#fff3ee"),attenuationDistance:2.5});return e.userData.u={uHaze:{value:.012},uEdgeHaze:{value:.2},uHazeColor:{value:new Ct(1,.97,.98)}},Za(e,{uniforms:e.userData.u,fragmentHead:"uniform float uHaze; uniform float uEdgeHaze; uniform vec3 uHazeColor;",replaceFragment:{transmission_fragment:Gg},fragment:{opaque_fragment:Hg}},t)}function Nb(r){let t=[],e=(a,o)=>t.push(new Yt(a,o));e(0,.03),e(.2,.03),e(.31,.028),e(.348,.022),e(.372,.009),e(.394,.001),e(.42,.0015),e(.44,.008),e(.4485,.026);for(let a of[.06,.4,.8,1.2,1.37,1.385,1.395,1.405,1.415,1.43,1.5,1.556])e(bl(a)+.006*Math.exp(-(((a-1.4)/.013)**2)),a);let n=.628,i=1.592,s=.0175;for(let a of[1,.82,.62,.42,.22,.02,-.2,-.42,-.62,-.78])e(n+s*Math.cos(a*Math.PI),i+s*Math.sin(a*Math.PI));return new Qr(t,r)}function Ub(r){let t=[],e=(n,i)=>t.push(new Yt(n,i));return e(.648,1.566),e(.652,1.585),e(.6565,1.603),e(.654,1.619),e(.646,1.629),e(.632,1.634),e(.605,1.636),e(.58,1.638),e(.566,1.643),e(.556,1.656),e(.548,1.669),e(.535,1.677),e(.5,1.68),e(.32,1.681),e(.14,1.681),e(.1,1.683),e(.083,1.692),e(.07,1.697),e(.06,1.69),e(.054,1.674),e(.052,1.662),new Qr(t.reverse(),r)}function Fb(r,t){let s=[[0,.07]];for(let h=1;h<=6;h++)s.push([xe(0,Ja(.07)-.05,h/6),.07]);for(let h=1;h<=6;h++){let d=h/6*Math.PI/2;s.push([Ja(.07+.05)-.05*Math.cos(d),.07+.05*Math.sin(d)])}for(let h=1;h<=24;h++){let d=xe(.12000000000000001,1.31,h/24);s.push([Ja(d),d])}let a=Ja(1.31);for(let h=1;h<=30;h++){let d=h/30*Math.PI/2;s.push([a*Math.cos(d),1.31+(1.585-1.31)*Math.sin(d)])}let o=Yg(s),c=.235,l={};return qg(r,t,(h,d,u)=>{o.at(h,l);let f=l.L/c-d/(Math.PI*2),g=f-Math.floor(f),_=Math.sqrt(Math.max(0,1-(2*g-1)**2)),p=gi(ar((l.L-.18)/.22)),m=gi(ar(l.r/.12)),M=p*m,A=Math.sin(d),v=Math.cos(d),S=l.r*A,b=l.r*v,T=rp(S*3.2+7,l.y*3.2,b*3.2,3),x=M*(.058*(Math.pow(_,.55)-1)+.009*Math.cos(9*d+13*l.L)*_);x+=.016*(T-.5)*(.4+.6*M);let w=Math.max(0,l.r+l.nr*x);u.x=w*A,u.z=w*v,u.y=l.y+l.ny*x;let R=Math.floor(f),D=Ml(R*1.7+.3,Math.cos(d)*1.4+3,Math.sin(d)*1.4+g*1.2);u.e[0]=(1-_)*M,u.e[1]=D,u.e[2]=ar((l.y-.07)/(1.585-.07)),u.e[3]=T},4)}function Ob(){let r=new Ui({color:16777215,roughness:.55,sheen:.7,sheenColor:new Ct("#ffd49a"),sheenRoughness:.55,envMapIntensity:.9}),t={uMango:{value:or.mango},uMangoDeep:{value:or.mangoDeep},uCream:{value:or.cream},uChamoy:{value:or.chamoy},uTajin:{value:or.tajin}};return Za(r,{uniforms:t,vertexHead:"attribute vec4 aExtra; varying vec4 vSorb; varying vec3 vObj;",vertex:{begin_vertex:"vSorb = aExtra; vObj = position;"},fragmentHead:`${uu}
varying vec4 vSorb; varying vec3 vObj; uniform vec3 uMango, uMangoDeep, uCream, uChamoy, uTajin; float zGroove;`,fragment:{color_fragment:`
        float nA = zFbm(vObj * 5.0);
        vec3 sc = mix(uMango, uMangoDeep, smoothstep(0.3, 0.8, nA) * 0.8);
        sc = mix(sc, uCream, smoothstep(0.58, 0.82, vSorb.y) * (0.55 + 0.4 * nA));
        zGroove = smoothstep(0.42, 0.86, vSorb.x);
        sc = mix(sc, uChamoy * (0.8 + 0.4 * nA), zGroove);
        float fl = smoothstep(0.78, 0.84, zNoise(vObj * 62.0)) * (0.25 + 0.75 * max(zGroove, smoothstep(0.75, 1.0, vSorb.z)));
        sc = mix(sc, uTajin * 0.85, fl * 0.9);
        diffuseColor.rgb = sc;`,roughnessmap_fragment:"roughnessFactor = mix(0.58, 0.14, zGroove) + (zNoise(vObj * 40.0) - 0.5) * 0.16;",emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * 0.07 * (1.0 - zGroove);"}},"zaca-sorbet")}var fu={y0:.2,y1:1.592};function Bb(r){let t=[];for(let e=0;e<=18;e++){let n=xe(fu.y0,fu.y1,e/18);t.push(new Yt(bl(n)-.0085,n))}return new Qr(t,r)}function zb(){let r=new Ui({color:16777215,roughness:.2,clearcoat:1,clearcoatRoughness:.06,side:Jn,alphaTest:.5,alphaToCoverage:!0,sheen:.3,sheenColor:new Ct("#ff6a4a"),envMapIntensity:1.1});r.userData.u={uDrip:{value:1},uFresh:{value:0},uChamoy:{value:or.chamoy},uChamoyHi:{value:or.chamoyHi},uTajin:{value:or.tajin}};let t=(fu.y1-fu.y0).toFixed(4);return Za(r,{uniforms:r.userData.u,vertexHead:"varying vec2 vLUv; varying vec3 vObj;",vertex:{begin_vertex:"vLUv = uv; vObj = position;"},fragmentHead:`${uu}
      varying vec2 vLUv; varying vec3 vObj; uniform float uDrip, uFresh; uniform vec3 uChamoy, uChamoyHi, uTajin;
      float zSmin(float a, float b, float k){ float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }
      float zChamoy(vec2 uv){
        const float C = 3.77; const float N = 18.0;
        float Y = (1.0 - uv.y) * ${t};
        float tau = 6.2831853 * uv.x;
        float band = 0.07 + 0.026 * sin(tau * 3.0 + 0.7) + 0.018 * sin(tau * 7.0 + 2.1) + 0.01 * sin(tau * 13.0 + 0.3);
        float d = Y - band;
        float cell = floor(uv.x * N);
        for (int k = -1; k <= 1; k++) {
          float c = mod(cell + float(k) + N, N);
          float h1 = zHash13(vec3(c, 1.7, 3.1)), h2 = zHash13(vec3(c, 5.3, 1.9)), h3 = zHash13(vec3(c, 9.1, 7.7));
          float cx = (c + 0.25 + 0.5 * h1) / N;
          float dx = (fract(uv.x - cx + 0.5) - 0.5) * C;
          float w = 0.017 + 0.017 * h2;
          float fresh = (c == 0.0 || c == 2.0 || c == 16.0) ? 1.0 : 0.0;
          float L = (h3 > 0.22 ? (0.05 + 0.6 * h3 * h3) : 0.0) * uDrip + fresh * uFresh * (0.42 + 0.25 * h2);
          float yEnd = band + L;
          float t = clamp(Y / max(yEnd, 0.001), 0.0, 1.0);
          float dSeg = length(vec2(dx, Y - clamp(Y, 0.0, yEnd))) - w * (0.7 + 0.3 * t);
          float dBulb = length(vec2(dx, (Y - yEnd) * 0.85)) - w * 1.3;
          d = zSmin(d, min(dSeg, dBulb), 0.03);
        }
        return d;
      }
      float zEdge;`,fragment:{color_fragment:`
        float cd = zChamoy(vLUv);
        diffuseColor.a = clamp(0.5 - cd / max(fwidth(cd), 1e-4), 0.0, 1.0);
        zEdge = smoothstep(-0.03, 0.0, cd);
        float nC = zFbm(vObj * 9.0);
        vec3 cc = mix(uChamoy * (0.85 + 0.3 * nC), uChamoyHi, zEdge * 0.7);
        float fl = smoothstep(0.8, 0.86, zNoise(vObj * 70.0));
        diffuseColor.rgb = mix(cc, uTajin * 0.8, fl * 0.7);`,emissivemap_fragment:"totalEmissiveRadiance += uChamoyHi * 0.05 * zEdge;"}},"zaca-liner")}var $a={len:1.18,r:.064,stick:.24};function kb(r,t){let e=$a.len/2,n=$a.r,i=[];for(let c=0;c<=8;c++){let l=-Math.PI/2+c/8*Math.PI/2;i.push([n*Math.cos(l),-e+n+n*Math.sin(l)])}for(let c=1;c<20;c++)i.push([n,xe(-e+n,e-n,c/20)]);for(let c=0;c<=8;c++){let l=c/8*Math.PI/2;i.push([n*Math.cos(l),e-n+n*Math.sin(l)])}let s=Yg(i),a={};return qg(r,t,(c,l,h)=>{s.at(c,a);let d=Math.sin(l),u=Math.cos(l),f=a.r*d,g=a.r*u,_=rp(f*14+3,a.y*14,g*14,3),p=Ml(f*5+1,a.y*4.5,g*5),m=n*(.34*(_-.5)+.22*(p-.5))*(a.r/n),M=a.r+a.nr*m;h.x=M*d,h.z=M*u,h.y=a.y+a.ny*m;let A=Ml(f*60,a.y*60,g*60);h.e[0]=_,h.e[1]=A,h.e[2]=p},3)}function Vb(){let r=new Ui({color:16777215,roughness:.62,clearcoat:.35,clearcoatRoughness:.45,sheen:.5,sheenColor:new Ct("#c8452e"),sheenRoughness:.7});return Za(r,{vertexHead:"attribute vec3 aExtra; varying vec3 vBand;",vertex:{begin_vertex:"vBand = aExtra;"},fragmentHead:"varying vec3 vBand;",fragment:{color_fragment:`
        vec3 bc = mix(vec3(0.20, 0.035, 0.02), vec3(0.36, 0.07, 0.035), vBand.x);
        bc = mix(bc, vec3(0.62, 0.12, 0.05), smoothstep(0.72, 0.8, vBand.y));
        bc = mix(bc, vec3(0.09, 0.015, 0.01), smoothstep(0.3, 0.05, vBand.z) * 0.6);
        diffuseColor.rgb = bc;`,roughnessmap_fragment:"roughnessFactor = mix(0.75, 0.32, smoothstep(0.55, 0.85, vBand.x));"}},"zaca-band")}function Zg({phone:r,maxAniso:t}){let e=r?.72:1,n={},i=new pn,s=new pn,a=Xg(.16,"zaca-cup"),o=new ge(Nb(r?72:96),a);o.renderOrder=2,s.add(o);let c=.27,l=.37,h=bl(l+c/2),d=c*np/h,u=[];for(let St=0;St<=6;St++){let z=l+c*St/6;u.push(new Yt(bl(z)+.0022,z))}let f=Qg(t,r?1536:2048),g=new ge(new Qr(u,48,.17-d/2,d),new Zi({map:f,emissiveMap:f,emissive:new Ct("#ffffff"),emissiveIntensity:.22,transparent:!0,roughness:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));g.renderOrder=3,s.add(g);let _=ip([[0,1],[.35,.62],[.7,.16],[1,0]]),p=ip([[0,1],[.45,.7],[.8,.12],[1,0]]),m=new gr({color:new Ct("#6b1e3a"),alphaMap:_,transparent:!0,depthWrite:!1,opacity:.34}),M=new gr({color:new Ct("#4a0f26"),alphaMap:p,transparent:!0,depthWrite:!1,opacity:.5}),A=new ge(new _r(2.6,2.6),m);A.rotation.x=-Math.PI/2,A.position.set(.12,.001,-.05),A.scale.set(1.15,.9,1);let v=new ge(new _r(1.2,1.2),M);v.rotation.x=-Math.PI/2,v.position.y=.002;let S=new gr({color:new Ct("#ff9a2a"),alphaMap:_,transparent:!0,depthWrite:!1,blending:Ao,opacity:0}),b=new ge(new _r(1.5,1.5),S);b.rotation.x=-Math.PI/2,b.position.set(-.55,.003,.45),b.scale.set(1.2,.75,1),A.renderOrder=v.renderOrder=b.renderOrder=1;let T=new pn;T.add(A,v,b),i.add(T),i.add(s),n.cup=s,n.floor=T;let x=zb(),w=new pn,R=new ge(Bb(r?72:96),x);R.position.y=-.9,w.add(R),w.position.y=.9,i.add(w),n.chamoy=w;let D=new pn,L=new ge(Fb(Math.round(170*e),Math.round(144*e)),Ob());L.position.y=-.8,D.add(L),D.position.y=.8,i.add(D),n.sorbet=D,n.sorbetMesh=L;let N=Wg(19),C=r?26:34,B=new Ui({color:16777215,roughness:.3,clearcoat:.7,clearcoatRoughness:.2,sheen:.45,sheenColor:new Ct("#ffc46b"),sheenRoughness:.45});Za(B,{uniforms:{uChamoy:{value:or.chamoy},uTajin:{value:or.tajin}},vertexHead:"attribute float aCoat; varying float vCoat; varying vec3 vCL;",vertex:{begin_vertex:"vCoat = aCoat; vCL = position;"},fragmentHead:`${uu}
varying float vCoat; varying vec3 vCL; uniform vec3 uChamoy, uTajin;`,fragment:{color_fragment:`
        float fib = zNoise(vCL * vec3(3.0, 24.0, 3.0) + vCoat * 9.0);
        diffuseColor.rgb *= 0.86 + 0.26 * fib;
        float ct = vCoat * smoothstep(0.42, 0.62, zNoise(vCL * 3.5 + vCoat * 13.0) + vCL.y * 0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, uChamoy * 1.1, ct * 0.9);
        float fl = smoothstep(0.8, 0.86, zNoise(vCL * 30.0 + 4.0)) * (0.35 + 0.65 * vCoat);
        diffuseColor.rgb = mix(diffuseColor.rgb, uTajin * 0.85, fl);`,emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * 0.1;"}},"zaca-cube");let Q=new hu(1,1,1,2,.17),G=new Float32Array(C),K=new Gr(Q,B,C);K.instanceMatrix.setUsage(mh);let Y=["#F7A21B","#F59A0E","#F9B235","#F28A10","#FDBB45","#F6A825"].map(St=>new Ct(St)),I=[];for(let St=0;St<C;St++){let z=.15+N()*.06,qt=[z*(.9+N()*.2),z*(.85+N()*.2),z*(.9+N()*.2)],Kt,ce,Lt,te=N()*Math.PI*2;if(St<C*.42){let P=Math.sqrt(N())*.42;ce=1.45+N()*.1-P*.18,Kt=Math.sin(te)*P,Lt=Math.cos(te)*P}else if(St<C*.8){ce=.3+N()*1;let P=Ja(ce)-z*.55;Kt=Math.sin(te)*P,Lt=Math.cos(te)*P}else{ce=.3+N()*1;let P=N()*.25;Kt=Math.sin(te)*P,Lt=Math.cos(te)*P}let F=St%3===0?.3:.62,pe=St/C*Math.PI*2*2+N()*.25,Qt=[Math.sin(pe)*(F+N()*.08),4.02+(N()-.5)*.22+(F<.4?.08:0),Math.cos(pe)*(F+N()*.08)];I.push({a:[Kt,ce,Lt],e:Qt,scale:qt,ra:[N()*6,N()*6,N()*6],re:[N()*.6-.3,N()*6,N()*.6-.3],d:(N()-.5)*.05}),K.setColorAt(St,Y[St%Y.length]),G[St]=St<C*.42?.65+N()*.35:N()*.5}Q.setAttribute("aCoat",new xs(G,1)),K.userData.coat=G,i.add(K),n.cubes=K,n.cubeData=I;let tt=r?650:1100,Mt=new vo(1,0),Tt=new Zi({color:16777215,roughness:.78,envMapIntensity:.8}),Ot=new Gr(Mt,Tt,tt);Ot.instanceMatrix.setUsage(mh);let Ht=["#D9432B","#C9361F","#E85A33","#A82A1C","#F0703E","#B8301E"].map(St=>new Ct(St)),Wt=[];for(let St=0;St<tt;St++){let z=.0075+N()*.0095,qt,Kt=N()*Math.PI*2;if(St<tt*.75){let F=Math.sqrt(N())*.5,pe=1.31+(1.585-1.31)*Math.sqrt(Math.max(0,1-(F/.585)**2));qt=[Math.sin(Kt)*F,pe+.012+N()*.02,Math.cos(Kt)*F]}else{let F=1.42+N()*.15,pe=Ja(F)-.02-N()*.03;qt=[Math.sin(Kt)*pe,F,Math.cos(Kt)*pe]}let ce=Math.pow(N(),.6)*.88,Lt=N()*Math.PI*2,te=[Math.sin(Lt)*ce,4.5+(N()-.5)*.12*(1.2-ce),Math.cos(Lt)*ce];Wt.push({a:qt,e:te,s:[z*(.7+N()*.6),z*(.45+N()*.4),z*(.7+N()*.6)],r:[N()*6,N()*6,N()*6],d:(N()-.5)*.06,swirl:.8+N()*1.4}),Ot.setColorAt(St,Ht[Math.floor(N()*Ht.length)])}i.add(Ot),n.tajin=Ot,n.tajinData=Wt;let J=new pn,nt=new pn,xt=new ge(kb(Math.round(90*e),Math.round(40*e)),Vb()),Bt=new ge(new ga(.02,.022,$a.stick+.1,12,1),new Ui({color:new Ct("#E9D3A6"),roughness:.7,sheen:.2}));Bt.position.y=-$a.len/2-$a.stick/2+.05,nt.add(xt,Bt),J.add(nt),i.add(J),n.band=J;let pt=new pn,kt=Xg(.1,"zaca-lid"),Vt=new ge(Ub(r?72:96),kt);Vt.renderOrder=4,Vt.position.y=-1.65,pt.add(Vt),pt.position.y=1.65,i.add(pt),n.lid=pt;let Rt=new pn,Xt=new ge(new ga(.041,.041,1.26,24,1,!0),new Ui({color:new Ct("#C2185B"),roughness:.22,clearcoat:1,clearcoatRoughness:.08,side:Jn}));return Rt.add(Xt),Rt.position.y=1.53,i.add(Rt),n.straw=Rt,n.mats={cupMat:a,lidMat:kt,linerMat:x,causticMat:S,shadowMat:m,contactMat:M},n.root=i,n.BAND=$a,n}var us=.85,Ir={lid:{ex:[.04,.25],as:[.705,.8]},straw:{ex:[.035,.27],as:[.7,.795]},band:{ex:[.07,.29],as:[.675,.77]},tajin:{ex:[.1,.34],as:[.645,.745]},cubes:{ex:[.13,.37],as:[.62,.72]},sorbet:{ex:[.16,.42],as:[.595,.695]},chamoy:{ex:[.19,.46],as:[.57,.665]}},Ae={copyOut:[.012,.085],toApart:[.03,.31],toWhole:[.56,.8],land:[.858,1],fresh:[.715,.875],callOut:[.535,.572],photo:[.955,1],apartIn:[.2,.27],apartOut:[.53,.57],wholeIn:[.665,.72],wholeOut:[.83,.857]},Gb=(r,t)=>hs(Ln(r,t[0],t[1]));function sp(r,t){let e=Ln(r,t[0],t[1]),n=ar(e/.78),i=Math.cos(n*Math.PI*.5)**1.15,s=ar((e-.78)/.22),a=e>.78?Math.sin(Math.PI*s)*(1-s)**.7:0;return{f:i,dip:a,t:e}}function Hs(r,t){let e=Ir[t],n=Gb(r,e.ex),i=sp(r,e.as);return{k:n*i.f,dip:i.dip,back:i.t}}var Pr={chamoy:{base:[0,.9,0],ex:[0,1.9,0]},sorbet:{base:[0,.8,0],ex:[0,2.82,0]},lid:{base:[0,1.65,0],ex:[0,5.52,0]},straw:{base:[0,1.53,0],ex:[0,5.9,0]},band:{base:[-.2,.95,-.15],baseRot:[-.1,0,.14],ex:[.02,4.98,.08],exRot:[.18,.35,-1.32]}},Jg=new Se,du=new Yn,pu=new Yn,mu=new Yn,wl=new yi,gu=new H,lr=new H;function ap(r,t,e,n){let i=n?0:1,s=hs(Ln(t,Ae.toApart[0],Ae.toApart[1]))*(1-hs(Ln(t,Ae.toWhole[0],Ae.toWhole[1]))),a=(l,h)=>i*h*.022*Math.sin(e*1.15+l*1.7);{let l=Hs(t,"chamoy"),h=r.chamoy;h.position.set(0,xe(Pr.chamoy.base[1],Pr.chamoy.ex[1],l.k)-l.dip*.03+a(0,l.k),0),h.rotation.y=l.k*-.35}{let l=Hs(t,"sorbet"),h=r.sorbet;h.position.set(0,xe(Pr.sorbet.base[1],Pr.sorbet.ex[1],l.k)-l.dip*.035+a(1,l.k),0),h.rotation.y=l.k*1.25;let d=1-.035*l.dip;h.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d))}{let l=Hs(t,"lid"),h=r.lid;h.position.set(0,xe(Pr.lid.base[1],Pr.lid.ex[1],l.k)-l.dip*.05+a(2,l.k),0),h.rotation.set(l.k*.2,l.k*.4,0);let d=Hs(t,"straw"),u=r.straw;u.position.set(0,xe(Pr.straw.base[1],Pr.straw.ex[1],d.k)-d.dip*.05+a(2,d.k),0),u.rotation.set(d.k*.2,0,d.k*-.05)}{let l=Hs(t,"band"),h=r.band,d=Pr.band;h.position.set(xe(d.base[0],d.ex[0],l.k),xe(d.base[1],d.ex[1],l.k)-l.dip*.04+a(3,l.k),xe(d.base[2],d.ex[2],l.k)),pu.setFromEuler(wl.set(d.baseRot[0],d.baseRot[1],d.baseRot[2])),mu.setFromEuler(wl.set(d.exRot[0],d.exRot[1],d.exRot[2])),h.quaternion.slerpQuaternions(pu,mu,l.k)}{let l=Ir.cubes,h=r.cubeData;for(let d=0;d<h.length;d++){let u=h[d],f=hs(Ln(t,l.ex[0]+u.d,l.ex[1]+u.d)),g=sp(t,[l.as[0]+u.d,l.as[1]+u.d]),_=f*g.f,p=(1-_)*_*1.6;lr.set(xe(u.a[0],u.e[0],_),xe(u.a[1],u.e[1],_)-g.dip*.03+a(4+d,_)*.6,xe(u.a[2],u.e[2],_));let m=Math.cos(p),M=Math.sin(p),A=lr.x*m+lr.z*M,v=-lr.x*M+lr.z*m;lr.x=A,lr.z=v,pu.setFromEuler(wl.set(u.ra[0],u.ra[1],u.ra[2])),mu.setFromEuler(wl.set(u.re[0],u.re[1]+e*.15*i*_,u.re[2])),du.slerpQuaternions(pu,mu,_),gu.set(u.scale[0],u.scale[1],u.scale[2]),r.cubes.setMatrixAt(d,Jg.compose(lr,du,gu))}r.cubes.instanceMatrix.needsUpdate=!0}{let l=Ir.tajin,h=r.tajinData,d=i*e*.12;for(let u=0;u<h.length;u++){let f=h[u],g=hs(Ln(t,l.ex[0]+f.d,l.ex[1]+f.d)),_=sp(t,[l.as[0]+f.d,l.as[1]+f.d]),p=g*_.f,m=(1-p)*p*4*f.swirl+p*d,M=xe(f.a[0],f.e[0],p),A=xe(f.a[2],f.e[2],p),v=Math.cos(m),S=Math.sin(m);lr.set(M*v+A*S,xe(f.a[1],f.e[1],p)+a(5+u%7,p)*.5,-M*S+A*v),du.setFromEuler(wl.set(f.r[0]+p*2,f.r[1],f.r[2])),gu.set(f.s[0],f.s[1],f.s[2]),r.tajin.setMatrixAt(u,Jg.compose(lr,du,gu))}r.tajin.instanceMatrix.needsUpdate=!0}{let h=1-.022*Hs(t,"lid").dip;r.cup.scale.set(1+(1-h)*.5,h,1+(1-h)*.5)}r.mats.linerMat.userData.u.uFresh.value=gi(Ln(t,Ae.fresh[0],Ae.fresh[1])),r.mats.linerMat.userData.u.uDrip.value=1;let o=gi(Ln(t,Ae.land[0],Ae.land[0]+.06)),c=1-Hs(t,"sorbet").k;return r.mats.shadowMat.opacity=.34*(1-o),r.mats.contactMat.opacity=.5*(1-o),r.mats.causticMat.opacity=.3*c*(1-o),r.floor.visible=o<.999,{apart:s}}function $g(r){let t=(e,n)=>gi(Ln(r,e,n));return{copy:1-t(Ae.copyOut[0],Ae.copyOut[1]),cue:1-t(0,.03),apart:t(Ae.apartIn[0],Ae.apartIn[1])*(1-t(Ae.apartOut[0],Ae.apartOut[1])),whole:t(Ae.wholeIn[0],Ae.wholeIn[1])*(1-t(Ae.wholeOut[0],Ae.wholeOut[1])),photo:t(Ae.photo[0],Ae.photo[1]),callOut:1-t(Ae.callOut[0],Ae.callOut[1])}}function Kg(r){return{a:hs(Ln(r,Ae.toApart[0],Ae.toApart[1])),b:hs(Ln(r,Ae.toWhole[0],Ae.toWhole[1])),c:(()=>{let t=Ln(r,Ae.land[0],Ae.land[1]);return t<.5?4*t*t*t:1-(-2*t+2)**3/2})()}}var jg="http://www.w3.org/2000/svg";function t_(r){let t=r.querySelector(".hero-callouts"),n=t.querySelector("svg").querySelector("g"),i=[...t.querySelectorAll(".hero-callout")].map(l=>{let h=document.createElementNS(jg,"path");h.setAttribute("pathLength","1"),h.setAttribute("stroke-dasharray","1 1");let d=document.createElementNS(jg,"circle");return d.setAttribute("r","3.25"),n.append(h,d),{el:l,part:l.dataset.part,path:h,dot:d,w:0,h:0,last:""}}),s=Object.fromEntries(i.map(l=>[l.part,l]));function a(){for(let l of i)l.w=l.el.offsetWidth,l.h=l.el.offsetHeight}let o=!0;function c(l,h,d){let u=i.filter(p=>l[p.part]&&l[p.part].a>.002);if(!u.length){if(o){for(let p of i)p.el.style.opacity="0",p.path.style.opacity="0",p.dot.style.opacity="0",p.last="";t.style.visibility="hidden",o=!1}return}o||(t.style.visibility="",o=!0);let f=u.map(p=>({it:p,A:l[p.part],y:l[p.part].y})).sort((p,m)=>p.y-m.y),g=10;for(let p=1;p<f.length;p++){let m=f[p-1].y+(f[p-1].it.h+f[p].it.h)/2+g;f[p].y<m&&(f[p].y=m)}let _=f[f.length-1];if(_.y+_.it.h/2>d[1]){_.y=d[1]-_.it.h/2;for(let p=f.length-2;p>=0;p--){let m=f[p+1].y-(f[p+1].it.h+f[p].it.h)/2-g;f[p].y>m&&(f[p].y=m)}}if(f[0].y-f[0].it.h/2<d[0]){f[0].y=d[0]+f[0].it.h/2;for(let p=1;p<f.length;p++){let m=f[p-1].y+(f[p-1].it.h+f[p].it.h)/2+g;f[p].y<m&&(f[p].y=m)}}for(let p of i)!u.includes(p)&&p.last&&(p.el.style.opacity="0",p.path.style.opacity="0",p.dot.style.opacity="0",p.last="");for(let{it:p,A:m,y:M}of f){let A=Math.round(m.x)+.5,v=Math.round(m.y)+.5,S=Math.round(h),b=Math.round(M)+.5,T=Math.max(A+10,S-34),x=`M${A} ${v}L${T} ${v}L${Math.max(T,S-14)} ${b}L${S-8} ${b}`,w=Math.max(0,Math.min(1,(m.d-.45)/.55)),R=`${x}|${m.a.toFixed(3)}|${m.d.toFixed(3)}`;R!==p.last&&(p.last=R,p.path.setAttribute("d",x),p.path.setAttribute("stroke-dashoffset",(1-m.d).toFixed(4)),p.path.style.opacity=m.a.toFixed(3),p.dot.setAttribute("cx",A),p.dot.setAttribute("cy",v),p.dot.style.opacity=(m.a*Math.min(1,m.d*4)).toFixed(3),p.el.style.opacity=(m.a*w).toFixed(3),p.el.style.transform=`translate3d(${S+Math.round((1-w)*10)}px, ${Math.round(M-p.h/2)}px, 0)`)}}return{items:i,byPart:s,measure:a,update:c,layer:t}}var i_=22,Hb=Math.tan(i_*Rr/2),e_=2.74,Ka=[0,1.07,0],ja={D:7.6,az:0,el:9*Rr};function n_(){let r=document.querySelector(".hero--a[data-hero]");if(!r||r.__zacaA)return;r.__zacaA=!0;let t=window.__HERO_A_POSTER__||null,e=!!window.__HERO_A_STILL__||!!t,n=a=>{r.classList.add("is-static"),r.classList.remove("is-live","is-done"),r.dataset.heroState=`static:${a}`};if(!t&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return n("reduced-motion");let i=r.querySelector(".hero-gl"),s=null;try{s=i.getContext("webgl2",{antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t})}catch{s=null}if(!s)return n("no-webgl");try{Wb(r,i,s,t,e,n)}catch(a){console.error("[hero-a]",a),n("error")}}function Qb(r){r.traverse(t=>{if(!t.isMesh)return;let e=t.material;e.side===1?e.color=new Ct("#f6cdd8"):e.isMeshBasicMaterial&&t.position.x>14?e.color.setRGB(1,.78,.2).multiplyScalar(22):e.isMeshBasicMaterial&&t.position.z>14&&e.color.setRGB(1,.94,.95).multiplyScalar(40)})}function Wb(r,t,e,n,i,s){let a=r.querySelector(".hero-stage"),o=r.querySelector(".hero-cup"),c=r.querySelector(".hero-copy"),l=r.querySelector(".hero-cue"),h=r.querySelector(".hero-chapter--apart"),d=r.querySelector(".hero-chapter--together"),u=window.matchMedia("(max-width: 719px)"),g=(n?"hi":u.matches||Math.min(screen.width,screen.height)<600?"phone":"hi")==="phone",_=window.matchMedia("(hover: none)").matches,p=new vh({canvas:t,context:e,antialias:!0,alpha:!0,premultipliedAlpha:!0});p.setClearColor(0,0),p.toneMapping=Co,p.toneMappingExposure=1,p.transmissionResolutionScale=g?.6:.8,p.setPixelRatio(n?1:Math.min(window.devicePixelRatio||1,g?1.5:2));let m=new _s,M=new Ta(p),A=new Sh;Qb(A),m.environment=M.fromScene(A,.035).texture,A.traverse(k=>{k.isMesh&&(k.geometry.dispose(),k.material.dispose())}),M.dispose();let v=new vs(new Ct("#ffe08a"),1.5);v.position.set(3.2,4.5,2.6);let S=new vs(new Ct("#ffd6e2"),.55);S.position.set(-4,1.8,2.5);let b=new vs(new Ct("#ffffff"),.9);b.position.set(-1.5,3.5,-4),m.add(v,S,b);let T=Zg({phone:g,maxAniso:p.capabilities.getMaxAnisotropy()});m.add(T.root);let x=new dn(i_,1,.1,100);x.updateProjectionMatrix();let w=x.projectionMatrix.clone(),R=new Se,D=new H;function L(k,rt,et){D.set(k.tx,k.ty,k.tz);let _t=Math.cos(k.el);x.position.set(D.x+k.D*Math.sin(k.az)*_t,D.y+k.D*Math.sin(k.el),D.z+k.D*Math.cos(k.az)*_t),x.lookAt(D),x.updateMatrixWorld();let ft=k.scale*2*k.D*Hb;R.set(ft/rt,0,0,k.cx/rt*2-1,0,ft/et,0,1-k.cy/et*2,0,0,1,0,0,0,0,1),x.projectionMatrix.copy(w).premultiply(R),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}let N=(k,rt,et)=>{let _t={};for(let ft of Object.keys(k))_t[ft]=xe(k[ft],rt[ft],et);return _t};if(n){let k=n.w,rt=n.h;t.style.cssText=`position:fixed;left:0;top:0;width:${k}px;height:${rt}px;visibility:visible;z-index:9999;background:transparent`,p.setSize(k,rt,!1),ap(T,0,0,!0),L({cx:k/2,cy:rt/2,scale:rt/e_,D:ja.D,tx:Ka[0],ty:Ka[1],tz:Ka[2],az:ja.az,el:ja.el},k,rt),p.render(m,x),p.render(m,x),window.__HERO_A_POSTER_DATA__=t.toDataURL("image/png");return}let C={vw:1,vh:1,cw:1,ch:1,sectionTop:0,pinDist:1,pinEnd:1,endScroll:2,stageH:1,top:64,bottom:0,cup:{x:0,y:0,w:1,h:1},slot:null,img:null,fit:"contain",hasSlot:!1};function B(){let k=window.scrollY;C.vw=window.innerWidth,C.vh=window.innerHeight;let rt=r.getBoundingClientRect();C.sectionTop=rt.top+k,C.stageH=a.offsetHeight,C.pinDist=Math.max(1,r.offsetHeight-C.stageH),C.pinEnd=C.sectionTop+C.pinDist;let et=getComputedStyle(r);C.top=parseFloat(et.getPropertyValue("--a-top"))||64,C.bottom=parseFloat(et.getPropertyValue("--a-bottom"))||0;let _t=a.getBoundingClientRect(),ft=o.getBoundingClientRect();C.cup={x:ft.left-_t.left,y:ft.top-_t.top,w:ft.width,h:ft.height},C.slot=document.querySelector('[data-flip-target="mangonada"] .flip-slot'),C.img=C.slot?C.slot.querySelector("img"):null,C.hasSlot=!!C.slot,C.img&&(C.fit=getComputedStyle(C.img).objectFit||"fill");let U=Math.max(0,document.documentElement.scrollHeight-C.vh);if(C.hasSlot){let ut=C.slot.getBoundingClientRect(),j=ut.top+k+ut.height/2-C.vh*(u.matches?.47:.5);C.endScroll=Math.min(U,Math.max(C.pinEnd+C.vh*.3,j))}else C.endScroll=Math.min(U,C.pinEnd+C.vh*.5);C.endScroll=Math.max(C.endScroll,C.pinEnd+1)}let Q=k=>k<=C.sectionTop?0:k<=C.pinEnd?us*(k-C.sectionTop)/C.pinDist:Math.min(1,us+(1-us)*(k-C.pinEnd)/(C.endScroll-C.pinEnd)),G=k=>k<=us?C.sectionTop+k/us*C.pinDist:C.pinEnd+(k-us)/(1-us)*(C.endScroll-C.pinEnd),K=k=>k<C.sectionTop?C.sectionTop-k:k<=C.pinEnd?0:C.pinEnd-k,Y=k=>({cx:C.cup.x+C.cup.w/2,cy:k+C.cup.y+C.cup.h/2,scale:C.cup.h/e_,D:ja.D,tx:Ka[0],ty:Ka[1],tz:Ka[2],az:ja.az,el:ja.el}),I=7.15;function tt(k){let rt=C.vw<720,et=C.top+(rt?70:22),ft=C.stageH-(rt?C.bottom+6:22)-et;return{cx:rt?C.vw*.33:C.vw*.52,cy:k+et+ft/2,scale:ft/I,D:13,tx:0,ty:3.22,tz:0,az:32*Rr,el:15*Rr}}function Mt(k){let rt=C.vw<720,et=C.top+(rt?84:30),ft=C.stageH-(rt?C.bottom+18:34)-et;return{cx:rt?C.vw*.5:C.vw*.63,cy:k+et+ft*.5,scale:ft*.94/2.95,D:8.2,tx:0,ty:1.05,tz:0,az:-5*Rr,el:10*Rr}}let Tt={D:9,az:0,el:12*Rr,tx:0,ty:.85,tz:0},Ot=(()=>{L({cx:0,cy:0,scale:1,...Tt},2,2);let k=1e9,rt=-1e9,et=1e9,_t=-1e9;for(let ft=0;ft<24;ft++){let U=ft/24*Math.PI*2;for(let ut of[new H(Math.sin(U)*.656,1.69,Math.cos(U)*.656),new H(Math.sin(U)*.45,0,Math.cos(U)*.45)]){ut.project(x);let j=ut.x+1,dt=1-ut.y;k=Math.min(k,j),rt=Math.max(rt,j),et=Math.min(et,dt),_t=Math.max(_t,dt)}}return{x0:k,x1:rt,y0:et,y1:_t}})();function Ht(){let k=C.slot.getBoundingClientRect(),rt=C.img&&C.img.naturalWidth||1074,et=C.img&&C.img.naturalHeight||1400,_t=k.width,ft=k.height;if(C.img&&(C.fit==="contain"||C.fit==="scale-down"||C.fit==="cover")){let U=C.fit==="cover"?Math.max(k.width/rt,k.height/et):Math.min(k.width/rt,k.height/et);_t=rt*U,ft=et*U}else C.img||(ft=k.height*.92,_t=ft*.77);return{x:k.left+(k.width-_t)/2,y:k.top+(k.height-ft)/2,w:_t,h:ft}}function Wt(){let k=Ht(),rt=k.h*.995/(Ot.y1-Ot.y0),et=(Ot.x0+Ot.x1)/2*rt,_t=(Ot.y0+Ot.y1)/2*rt;return{cx:k.x+k.w*.5-et,cy:k.y+k.h*.5-_t,scale:rt,...Tt}}let J=0,nt=0;function xt(k){let rt=t.clientWidth||window.innerWidth,et=t.clientHeight||window.innerHeight;(k||rt!==J||Math.abs(et-nt)>=160)&&(J=rt,nt=et,p.setSize(rt,et,!1)),C.cw=rt,C.ch=et}let Bt=t_(r),pt=new H,kt=new H;function Vt(k){return k.project(x),{x:(k.x+1)/2*C.cw,y:(1-k.y)/2*C.ch}}let Rt=[{part:"chamoy",obj:()=>T.chamoy,off:[0,.6,0],r:.6,win:Ir.chamoy},{part:"sorbet",obj:()=>T.sorbet,off:[0,.28,0],r:.6,win:Ir.sorbet},{part:"mango",obj:null,at:[0,4.02,0],r:.7,win:Ir.cubes},{part:"tajin",obj:null,at:[0,4.5,0],r:.84,win:Ir.tajin},{part:"banderilla",obj:()=>T.band,local:[0,.46,0],win:Ir.band}],Xt=new Map,St=(k,rt,et)=>{let _t=k,ft=Xt.get(_t);ft||(ft={},Xt.set(_t,ft)),ft[rt]!==et&&(ft[rt]=et,k.style[rt]=et)},z={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",k=>{k.pointerType==="mouse"&&(z.tx=k.clientX/window.innerWidth*2-1,z.ty=k.clientY/window.innerHeight*2-1)},{passive:!0});let qt=0,Kt=0,ce=-1,Lt=-1,te=!1,F=!document.hidden,pe=!0,Qt=!1,P={calls:0,triangles:0,frameMs:0};function y(k){let rt=Kt?Math.min(.05,(k-Kt)/1e3):.016666666666666666;Kt=k,ce<0&&(ce=k);let et=i?0:(k-ce)/1e3,_t=window.scrollY,ft=Q(_t);Lt<0||i?Lt=ft:(Lt+=(ft-Lt)*(1-Math.exp(-rt*11)),Math.abs(ft-Lt)<2e-4&&(Lt=ft));let U=Lt,ut=performance.now(),j=K(_t),dt=Kg(U),gt=N(Y(j),tt(j),dt.a);gt=N(gt,Mt(j),dt.b),dt.c>0&&(gt=N(gt,C.hasSlot?Wt():{...Mt(j),scale:Mt(j).scale*.6},dt.c));let at=1-gi(Ln(U,.84,.95)),ct=1-Math.exp(-rt*3.5);z.x+=(z.tx-z.x)*ct,z.y+=(z.ty-z.y)*ct;let ot=_&&!i?Math.sin(et*.32):0;gt.az+=(z.x*.16+ot*.09)*at,gt.el+=(z.y*.07+(_&&!i?Math.sin(et*.21+1)*.025:0))*at,L(gt,C.cw,C.ch),ap(T,U,et,i);let zt=ar(dt.a*(1-dt.b)),lt=(i?0:1)*xe(1,.3,zt)*at;T.root.rotation.y=lt*.34*Math.sin(et*.42);let Et=$g(U);St(c,"opacity",Et.copy.toFixed(3)),St(c,"transform",`translate3d(0, ${(-28*(1-Et.copy)).toFixed(1)}px, 0)`),St(c,"visibility",Et.copy<.01?"hidden":""),l&&St(l,"opacity",Et.cue.toFixed(3)),St(h,"opacity",Et.apart.toFixed(3)),St(h,"visibility",Et.apart<.01?"hidden":"visible"),St(d,"opacity",Et.whole.toFixed(3)),St(d,"visibility",Et.whole<.01?"hidden":"visible"),C.img&&St(C.img,"opacity",C.hasSlot?Et.photo.toFixed(3):""),St(t,"opacity",(1-Et.photo).toFixed(3));let Pt=ft>=1&&Lt>=1;r.classList.toggle("is-done",Pt);let Jt={};if(Et.callOut>0&&zt>.2){kt.setFromMatrixColumn(x.matrixWorld,0).normalize(),T.root.updateMatrixWorld();for(let fe of Rt){let Xe=fe.win.ex[1],we=gi(Ln(U,Xe-.06,Xe+.03)),ve=we>0?Math.min(1,we*3)*Et.callOut:0;if(ve<=0)continue;fe.local?pt.set(...fe.local).applyMatrix4(fe.obj().matrixWorld):(fe.obj?pt.copy(fe.obj().position).add(D.set(...fe.off)).applyMatrix4(T.root.matrixWorld):pt.set(...fe.at).applyMatrix4(T.root.matrixWorld),pt.addScaledVector(kt,fe.r));let oe=Vt(pt);Jt[fe.part]={x:oe.x,y:oe.y,a:ve,d:we}}}let ne=C.vw<720?Math.min(C.vw-152,gt.cx+.98*gt.scale+14):gt.cx+1.18*gt.scale+34;Bt.update(Jt,ne,[C.top+12,C.vh-C.bottom-12]),Pt||(p.render(m,x),P.calls=p.info.render.calls,P.triangles=p.info.render.triangles),P.frameMs=performance.now()-ut,P.p=U}function V(){if(te||!F)return!1;let k=Q(window.scrollY);return(pe||k<1)&&(k<1||Lt<1)}function W(k){if(qt=0,!V()){Qt&&y(k),Kt=0;return}y(k),qt=requestAnimationFrame(W)}function $(){!qt&&Qt&&!te&&(qt=requestAnimationFrame(W))}Id.registerPlugin(ee),ee.config({ignoreMobileResize:!0});let mt=ee.create({trigger:r,start:"top top",end:()=>(B(),C.endScroll),invalidateOnRefresh:!0,onUpdate:$,onToggle:$,onRefresh:()=>{xt(!1),Bt.measure(),$()}});window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",()=>{xt(!1),$()},{passive:!0}),document.addEventListener("visibilitychange",()=>{F=!document.hidden,Kt=0,$()}),new IntersectionObserver(k=>{pe=k[0].isIntersecting,$()},{rootMargin:"0px 0px 40% 0px"}).observe(r);let it=new ResizeObserver(()=>ee.refresh()),st=document.querySelector('[data-flip-target="mangonada"]');st&&it.observe(st.closest("section")||st),t.addEventListener("webglcontextlost",k=>{k.preventDefault(),te=!0,qt&&cancelAnimationFrame(qt),qt=0;let rt=window.scrollY,et=rt>C.pinEnd,_t=rt>C.sectionTop&&!et;C.img&&(C.img.style.opacity=""),mt.kill(),s("context-lost"),et?window.scrollTo(0,rt-C.pinDist):_t&&window.scrollTo(0,C.sectionTop)}),B(),xt(!0),Bt.measure();let vt=()=>{te||(y(performance.now()),requestAnimationFrame(()=>{r.classList.add("is-live"),r.dataset.heroState="live",Qt=!0,Kt=0,$()}))};(p.compileAsync?p.compileAsync(m,x).catch(()=>{}):Promise.resolve()).then(vt),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{Bt.measure()}),window.__heroA={info:()=>({...P,programs:p.info.programs?p.info.programs.length:0,geometries:p.info.memory.geometries,textures:p.info.memory.textures}),scrollForP:k=>(B(),G(k)),p:()=>Lt,layout:()=>({...C,slot:!!C.slot,img:!!C.img})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n_,{once:!0}):n_();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

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
*/

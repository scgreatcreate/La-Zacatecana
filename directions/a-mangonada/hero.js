(()=>{var Ip=0,Zu=1,Lp=2;var Ao=1,Dp=2,va=3,Yr=0,vn=1,Jn=2,ji=0,ya=1,Co=2,$u=3,Ju=4,Np=5;var ys=100,Up=101,Fp=102,Op=103,Bp=104,zp=200,kp=201,Vp=202,Gp=203,Ku=204,ju=205,Hp=206,Qp=207,Wp=208,Xp=209,qp=210,Yp=211,Zp=212,$p=213,Jp=214,ql=0,Yl=1,Zl=2,ha=3,$l=4,Jl=5,Kl=6,jl=7,Ec=0,Kp=1,jp=2,zi=0,tf=1,ef=2,nf=3,rf=4,sf=5,af=6,Ro=7;var of=300,Zr=301,Ms=302,Ac=303,Cc=304,Po=306,tc=1e3,Yi=1001,ec=1002,dn=1003,tm=1004;var Io=1005;var rn=1006,Rc=1007;var tr=1008;var Kn=1009,lf=1010,cf=1011,Ma=1012,Pc=1013,ki=1014,wi=1015,Vi=1016,Ic=1017,Lc=1018,Sa=1020,hf=35902,uf=35899,ff=1021,df=1022,Ti=1023,Zi=1026,$r=1027,Dc=1028,Nc=1029,Jr=1030,Uc=1031;var Fc=1033,Lo=33776,Do=33777,No=33778,Uo=33779,Oc=35840,Bc=35841,zc=35842,kc=35843,Vc=36196,Gc=37492,Hc=37496,Qc=37488,Wc=37489,Fo=37490,Xc=37491,qc=37808,Yc=37809,Zc=37810,$c=37811,Jc=37812,Kc=37813,jc=37814,th=37815,eh=37816,nh=37817,ih=37818,rh=37819,sh=37820,ah=37821,oh=36492,lh=36494,ch=36495,hh=36283,uh=36284,Oo=36285,fh=36286;var lo=2300,nc=2301,Wl=2302,Vu=2303,Gu=2400,Hu=2401,Qu=2402;var em=3200;var Bo=0,nm=1,vr="",Fn="srgb",co="srgb-linear",ho="linear",ye="srgb";var Xl=7680;var im=519,rm=512,sm=513,am=514,dh=515,om=516,lm=517,ph=518,cm=519,hm=35044,mh=35048;var pf="300 es",Oi=2e3,ua=2001;function a_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function o_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function uo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function um(){let r=uo("canvas");return r.style.display="block",r}var lp={},fa=null;function mf(...r){let t="THREE."+r.shift();fa?fa("log",t,...r):console.log(t,...r)}function fm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function $t(...r){r=fm(r);let t="THREE."+r.shift();if(fa)fa("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Jt(...r){r=fm(r);let t="THREE."+r.shift();if(fa)fa("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function gs(...r){let t=r.join(" ");t in lp||(lp[t]=!0,$t(...r))}function dm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var pm={[ql]:Yl,[Zl]:Kl,[$l]:jl,[ha]:Jl,[Yl]:ql,[Kl]:Zl,[jl]:$l,[Jl]:ha},$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xu=Math.PI/180,ic=180/Math.PI;function zo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function de(r,t,e){return Math.max(t,Math.min(e,r))}function l_(r,t){return(r%t+t)%t}function vu(r,t,e){return(1-e)*r+e*t}function eo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yf=class yf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yf.prototype.isVector2=!0;var Yt=yf,Zn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),A=Math.sin(y);m=Math.sin(m*y)/A,o=Math.sin(o*y)/A,c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mf=class Mf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yu.copy(this).projectOnVector(t),this.sub(yu)}reflect(t){return this.sub(yu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mf.prototype.isVector3=!0;var G=Mf,yu=new G,cp=new Zn,Sf=class Sf{constructor(t,e,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],A=i[4],v=i[7],S=i[2],b=i[5],T=i[8];return s[0]=a*_+o*y+c*S,s[3]=a*p+o*A+c*b,s[6]=a*m+o*v+c*T,s[1]=l*_+h*y+d*S,s[4]=l*p+h*A+d*b,s[7]=l*m+h*v+d*T,s[2]=u*_+f*y+g*S,s[5]=u*p+f*A+g*b,s[8]=u*m+f*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,f=l*s-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mu.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mu.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sf.prototype.isMatrix3=!0;var te=Sf,Mu=new te,hp=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c_(){let r={enabled:!0,workingColorSpace:co,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ye&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(i.r=ca(i.r),i.g=ca(i.g),i.b=ca(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[co]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:hp,fromXYZ:up,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:hp,fromXYZ:up,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}var me=c_();function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Zs,rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zs===void 0&&(Zs=uo("canvas")),Zs.width=t.width,Zs.height=t.height;let i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gr(e[n]/255)*255):e[n]=gr(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},h_=0,da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Su(i[a].image)):s.push(Su(i[a]))}else s=Su(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Su(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var u_=0,bu=new G,On=class r extends $i{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yi,i=Yi,s=rn,a=tr,o=Ti,c=Kn,l=r.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=zo(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=of;On.DEFAULT_ANISOTROPY=1;var bf=class bf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,v=(f+1)/2,S=(m+1)/2,b=(h+u)/4,T=(d+_)/4,x=(g+p)/4;return A>v&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=T/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=x/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bf.prototype.isVector4=!0;var ze=bf,sc=class extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new On(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new da(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tc=class Tc{constructor(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p)}set(t,e,n,i,s,a,o,c,l,h,d,u,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/$s.setFromMatrixColumn(t,0).length(),s=1/$s.setFromMatrixColumn(t,1).length(),a=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f_,t,d_)}lookAt(t,e,n){let i=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ur.crossVectors(n,ri),Ur.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ur.crossVectors(n,ri)),Ur.normalize(),Tl.crossVectors(ri,Ur),i[0]=Ur.x,i[4]=Tl.x,i[8]=ri.x,i[1]=Ur.y,i[5]=Tl.y,i[9]=ri.y,i[2]=Ur.z,i[6]=Tl.z,i[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],A=n[7],v=n[11],S=n[15],b=i[0],T=i[4],x=i[8],w=i[12],R=i[1],N=i[5],D=i[9],U=i[13],C=i[2],B=i[6],W=i[10],k=i[14],K=i[3],Y=i[7],L=i[11],tt=i[15];return s[0]=a*b+o*R+c*C+l*K,s[4]=a*T+o*N+c*B+l*Y,s[8]=a*x+o*D+c*W+l*L,s[12]=a*w+o*U+c*k+l*tt,s[1]=h*b+d*R+u*C+f*K,s[5]=h*T+d*N+u*B+f*Y,s[9]=h*x+d*D+u*W+f*L,s[13]=h*w+d*U+u*k+f*tt,s[2]=g*b+_*R+p*C+m*K,s[6]=g*T+_*N+p*B+m*Y,s[10]=g*x+_*D+p*W+m*L,s[14]=g*w+_*U+p*k+m*tt,s[3]=y*b+A*R+v*C+S*K,s[7]=y*T+A*N+v*B+S*Y,s[11]=y*x+A*D+v*W+S*L,s[15]=y*w+A*U+v*k+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],y=c*f-l*u,A=o*f-l*d,v=o*u-c*d,S=a*f-l*h,b=a*u-c*h,T=a*d-o*h;return e*(_*y-p*A+m*v)-n*(g*y-p*S+m*b)+i*(g*A-_*S+m*T)-s*(g*v-_*b+p*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=e*o-n*a,A=e*c-i*a,v=e*l-s*a,S=n*c-i*o,b=n*l-s*o,T=i*l-s*c,x=h*_-d*g,w=h*p-u*g,R=h*m-f*g,N=d*p-u*_,D=d*m-f*_,U=u*m-f*p,C=y*U-A*D+v*N+S*R-b*w+T*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return t[0]=(o*U-c*D+l*N)*B,t[1]=(i*D-n*U-s*N)*B,t[2]=(_*T-p*b+m*S)*B,t[3]=(u*b-d*T-f*S)*B,t[4]=(c*R-a*U-l*w)*B,t[5]=(e*U-i*R+s*w)*B,t[6]=(p*v-g*T-m*A)*B,t[7]=(h*T-u*v+f*A)*B,t[8]=(a*D-o*R+l*x)*B,t[9]=(n*R-e*D-s*x)*B,t[10]=(g*b-_*v+m*y)*B,t[11]=(d*v-h*b-f*y)*B,t[12]=(o*w-a*N-c*x)*B,t[13]=(e*N-n*w+i*x)*B,t[14]=(_*A-g*S-p*y)*B,t[15]=(h*S-d*A+u*y)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,y=c*l,A=c*h,v=c*d,S=n.x,b=n.y,T=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+v)*S,i[2]=(g-A)*S,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+A)*T,i[9]=(p-y)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=$s.set(i[0],i[1],i[2]).length(),o=$s.set(i[4],i[5],i[6]).length(),c=$s.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Di.copy(this);let l=1/a,h=1/o,d=1/c;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,s,a,o=Oi,c=!1){let l=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Oi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ua)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Oi,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Oi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ua)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Tc.prototype.isMatrix4=!0;var Me=Tc,$s=new G,Di=new Me,f_=new G(0,0,0),d_=new G(1,1,1),Ur=new G,Tl=new G,ri=new G,fp=new Me,dp=new Zn,Mi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dp.setFromEuler(this),this.setFromQuaternion(dp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p_=0,pp=new G,Js=new Zn,ur=new Me,El=new G,no=new G,m_=new G,g_=new Zn,mp=new G(1,0,0),gp=new G(0,1,0),_p=new G(0,0,1),xp={type:"added"},__={type:"removed"},Ks={type:"childadded",child:null},wu={type:"childremoved",child:null},xn=class r extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new G,e=new Mi,n=new Zn,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new te}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(mp,t)}rotateY(t){return this.rotateOnAxis(gp,t)}rotateZ(t){return this.rotateOnAxis(_p,t)}translateOnAxis(t,e){return pp.copy(t).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mp,t)}translateY(t){return this.translateOnAxis(gp,t)}translateZ(t){return this.translateOnAxis(_p,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?El.copy(t):El.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(no,El,this.up):ur.lookAt(El,no,this.up),this.quaternion.setFromRotationMatrix(ur),i&&(ur.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(ur),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xp),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(__),wu.child=t,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xp),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,m_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,g_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new G(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},x_={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Tu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=l_(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Tu(a,s,t+1/3),this.g=Tu(a,s,t),this.b=Tu(a,s,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return me.workingToColorSpace(En.copy(this),t),Math.round(de(En.r*255,0,255))*65536+Math.round(de(En.g*255,0,255))*256+Math.round(de(En.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(En.copy(this),e);let n=En.r,i=En.g,s=En.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Fn){me.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,i=En.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(Al);let n=vu(Fr.h,Al.h,e),i=vu(Fr.s,Al.s,e),s=vu(Fr.l,Al.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Et;Et.NAMES=mm;var _s=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new G,fr=new G,Eu=new G,dr=new G,js=new G,ta=new G,vp=new G,Au=new G,Cu=new G,Ru=new G,Pu=new ze,Iu=new ze,Lu=new ze,kr=class r{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ni.subVectors(t,e),i.cross(Ni);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ni.subVectors(i,e),fr.subVectors(n,e),Eu.subVectors(t,e);let a=Ni.dot(Ni),o=Ni.dot(fr),c=Ni.dot(Eu),l=fr.dot(fr),h=fr.dot(Eu),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,dr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dr.x),c.addScaledVector(a,dr.y),c.addScaledVector(o,dr.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Pu.setScalar(0),Iu.setScalar(0),Lu.setScalar(0),Pu.fromBufferAttribute(t,e),Iu.fromBufferAttribute(t,n),Lu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Pu,s.x),a.addScaledVector(Iu,s.y),a.addScaledVector(Lu,s.z),a}static isFrontFacing(t,e,n,i){return Ni.subVectors(n,e),fr.subVectors(t,e),Ni.cross(fr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ni.cross(fr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;js.subVectors(i,n),ta.subVectors(s,n),Au.subVectors(t,n);let c=js.dot(Au),l=ta.dot(Au);if(c<=0&&l<=0)return e.copy(n);Cu.subVectors(t,i);let h=js.dot(Cu),d=ta.dot(Cu);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(js,a);Ru.subVectors(t,s);let f=js.dot(Ru),g=ta.dot(Ru);if(g>=0&&f<=g)return e.copy(s);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ta,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return vp.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(vp,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(js,a).addScaledVector(ta,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(s,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),Rl.subVectors(this.max,io),ea.subVectors(t.a,io),na.subVectors(t.b,io),ia.subVectors(t.c,io),Or.subVectors(na,ea),Br.subVectors(ia,na),fs.subVectors(ea,ia);let e=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-fs.z,fs.y,Or.z,0,-Or.x,Br.z,0,-Br.x,fs.z,0,-fs.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-fs.y,fs.x,0];return!Du(e,ea,na,ia,Rl)||(e=[1,0,0,0,1,0,0,0,1],!Du(e,ea,na,ia,Rl))?!1:(Pl.crossVectors(Or,Br),e=[Pl.x,Pl.y,Pl.z],Du(e,ea,na,ia,Rl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pr=[new G,new G,new G,new G,new G,new G,new G,new G],Ui=new G,Cl=new Ji,ea=new G,na=new G,ia=new G,Or=new G,Br=new G,fs=new G,io=new G,Rl=new G,Pl=new G,ds=new G;function Du(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ds.fromArray(r,s);let o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var tn=new G,Il=new Yt,v_=0,ai=class extends $i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hm,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Il.fromBufferAttribute(this,e),Il.applyMatrix3(t),this.setXY(e,Il.x,Il.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var mo=class extends ai{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var go=class extends ai{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Be=class extends ai{constructor(t,e,n){super(new Float32Array(t),e,n)}},y_=new Ji,ro=new G,Nu=new G,Vr=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):y_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ro,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Nu)),this.expandByPoint(ro.copy(t.center).sub(Nu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},M_=0,yi=new Me,Uu=new xn,ra=new G,si=new Ji,so=new Ji,fn=new G,Bn=class r extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a_(t)?go:mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Uu.lookAt(t),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];so.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(si.min,so.min),si.expandByPoint(fn),fn.addVectors(si.max,so.max),si.expandByPoint(fn)):(si.expandByPoint(so.min),si.expandByPoint(so.max))}si.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)fn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fn.fromBufferAttribute(o,l),c&&(ra.fromBufferAttribute(t,l),fn.add(ra)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ai(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new G,c[x]=new G;let l=new G,h=new G,d=new G,u=new Yt,f=new Yt,g=new Yt,_=new G,p=new G;function m(x,w,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[x].add(_),o[w].add(_),o[R].add(_),c[x].add(p),c[w].add(p),c[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,w=y.length;x<w;++x){let R=y[x],N=R.start,D=R.count;for(let U=N,C=N+D;U<C;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let A=new G,v=new G,S=new G,b=new G;function T(x){S.fromBufferAttribute(i,x),b.copy(S);let w=o[x];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(b,w);let N=v.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,N)}for(let x=0,w=y.length;x<w;++x){let R=y[x],N=R.start,D=R.count;for(let U=N,C=N+D;U<C;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new G,s=new G,a=new G,o=new G,c=new G,l=new G,h=new G,d=new G;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new ai(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fu=new G,S_=new G,b_=new te,Fi=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Fu.subVectors(n,e).cross(S_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Fu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||b_.getNormalMatrix(t),i=this.coplanarPoint(Fu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w_=0,_r=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ya,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=ju,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mr=new G,Ou=new G,Ll=new G,Dl=new G,oc=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mr.copy(this.origin).addScaledVector(this.direction,e),mr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ou.copy(t).add(e).multiplyScalar(.5),Ll.copy(e).sub(t).normalize(),Dl.copy(this.origin).sub(Ou);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Ll),o=Dl.dot(this.direction),c=-Dl.dot(Ll),l=Dl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ou).addScaledVector(Ll,u),f}intersectSphere(t,e){if(t.radius<0)return null;mr.subVectors(t.center,this.origin);let n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,y=n.y-a.y,A=n.z-a.z,v=Math.abs(c),S=Math.abs(l),b=Math.abs(h),T,x,w,R,N,D,U,C,B,W,k,K;if(v>=S&&v>=b?(w=c,D=d,B=g,K=m,c>=0?(T=l,x=h,R=u,N=f,U=_,C=p,W=y,k=A):(T=h,x=l,R=f,N=u,U=p,C=_,W=A,k=y)):S>=b?(w=l,D=u,B=_,K=y,l>=0?(T=h,x=c,R=f,N=d,U=p,C=g,W=A,k=m):(T=c,x=h,R=d,N=f,U=g,C=p,W=m,k=A)):(w=h,D=f,B=p,K=A,h>=0?(T=c,x=l,R=d,N=u,U=g,C=_,W=m,k=y):(T=l,x=c,R=u,N=d,U=_,C=g,W=y,k=m)),w===0)return null;let Y=T/w,L=x/w,tt=1/w,vt=R-Y*D,wt=N-L*D,Ot=U-Y*B,Ht=C-L*B,kt=W-Y*K,$=k-L*K,it=kt*Ht-$*Ot,_t=vt*$-wt*kt,Vt=Ot*wt-Ht*vt;if(i){if(it<0||_t<0||Vt<0)return null}else if((it<0||_t<0||Vt<0)&&(it>0||_t>0||Vt>0))return null;let dt=it+_t+Vt;if(dt===0)return null;let Bt=tt*(it*D+_t*B+Vt*K);return(dt>0?Bt<0:Bt>0)?null:this.at(Bt/dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yp=new Me,ps=new oc,Nl=new Vr,Mp=new G,Ul=new G,Fl=new G,Ol=new G,Bu=new G,Bl=new G,Sp=new G,zl=new G,pe=class extends xn{constructor(t=new Bn,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Bl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Bu.fromBufferAttribute(d,t),a?Bl.addScaledVector(Bu,h):Bl.addScaledVector(Bu.sub(e),h))}e.add(Bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),ps.copy(t.ray).recast(t.near),!(Nl.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Nl,Mp)===null||ps.origin.distanceToSquared(Mp)>(t.far-t.near)**2))&&(yp.copy(s).invert(),ps.copy(t.ray).applyMatrix4(yp),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=A;v<S;v+=3){let b=o.getX(v),T=o.getX(v+1),x=o.getX(v+2);i=kl(this,m,t,n,l,h,d,b,T,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let y=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=kl(this,a,t,n,l,h,d,y,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,S=A;v<S;v+=3){let b=v,T=v+1,x=v+2;i=kl(this,m,t,n,l,h,d,b,T,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let y=p,A=p+1,v=p+2;i=kl(this,a,t,n,l,h,d,y,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function T_(r,t,e,n,i,s,a,o){let c;if(t.side===vn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Yr,o),c===null)return null;zl.copy(o),zl.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(zl);return l<e.near||l>e.far?null:{distance:l,point:zl.clone(),object:r}}function kl(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Ul),r.getVertexPosition(c,Fl),r.getVertexPosition(l,Ol);let h=T_(r,t,e,n,Ul,Fl,Ol,Sp);if(h){let d=new G;kr.getBarycoord(Sp,Ul,Fl,Ol,d),i&&(h.uv=kr.getInterpolatedAttribute(i,o,c,l,d,new Yt)),s&&(h.uv1=kr.getInterpolatedAttribute(s,o,c,l,d,new Yt)),a&&(h.normal=kr.getInterpolatedAttribute(a,o,c,l,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new G,materialIndex:0};kr.getNormal(Ul,Fl,Ol,u.normal),h.face=u,h.barycoord=d}return h}var _o=class extends On{constructor(t=null,e=1,n=1,i,s,a,o,c,l=dn,h=dn,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class extends ai{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sa=new Me,bp=new Me,Vl=[],wp=new Ji,E_=new Me,ao=new pe,oo=new Vr,Gr=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,E_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),wp.copy(t.boundingBox).applyMatrix4(sa),this.boundingBox.union(wp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),oo.copy(t.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,sa),bp.multiplyMatrices(n,sa),ao.matrixWorld=bp,ao.raycast(t,Vl);for(let a=0,o=Vl.length;a<o;a++){let c=Vl[a];c.instanceId=s,c.object=this,e.push(c)}Vl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(i*this.count),i,this.count,Dc,wi));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Vr,A_=new Yt(.5,.5),Gl=new G,ma=class{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],A=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-a,f-h,m-g,S-y).normalize(),i[1].setComponents(l+a,f+h,m+g,S+y).normalize(),i[2].setComponents(l+o,f+d,m+_,S+A).normalize(),i[3].setComponents(l-o,f-d,m-_,S-A).normalize(),n)i[4].setComponents(c,u,p,v).normalize(),i[5].setComponents(l-c,f-u,m-p,S-v).normalize();else if(i[4].setComponents(l-c,f-u,m-p,S-v).normalize(),e===Oi)i[5].setComponents(l+c,f+u,m+p,S+v).normalize();else if(e===ua)i[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=A_.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Gl.x=i.normal.x>0?t.max.x:t.min.x,Gl.y=i.normal.y>0?t.max.y:t.min.y,Gl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends On{constructor(t=[],e=Zr,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ga=class extends On{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hr=class extends On{constructor(t,e,n=ki,i,s,a,o=dn,c=dn,l,h=Zi,d=1){if(h!==Zi&&h!==$r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lc=class extends Hr{constructor(t,e=ki,n=Zr,i,s,a=dn,o=dn,c,l=Zi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vo=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bi=class r extends Bn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2));function g(_,p,m,y,A,v,S,b,T,x,w){let R=v/T,N=S/x,D=v/2,U=S/2,C=b/2,B=T+1,W=x+1,k=0,K=0,Y=new G;for(let L=0;L<W;L++){let tt=L*N-U;for(let vt=0;vt<B;vt++){let wt=vt*R-D;Y[_]=wt*y,Y[p]=tt*A,Y[m]=C,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(vt/T),d.push(1-L/x),k+=1}}for(let L=0;L<x;L++)for(let tt=0;tt<T;tt++){let vt=u+tt+B*L,wt=u+tt+B*(L+1),Ot=u+(tt+1)+B*(L+1),Ht=u+(tt+1)+B*L;c.push(vt,wt,Ht),c.push(wt,Ot,Ht),K+=6}o.addGroup(f,K,w),f+=K,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _a=class r extends Bn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;y(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function y(){let v=new G,S=new G,b=0,T=(e-t)/n;for(let x=0;x<=s;x++){let w=[],R=x/s,N=R*(e-t)+t;for(let D=0;D<=i;D++){let U=D/i,C=U*c+o,B=Math.sin(C),W=Math.cos(C);S.x=N*B,S.y=-R*n+p,S.z=N*W,d.push(S.x,S.y,S.z),v.set(B,T,W).normalize(),u.push(v.x,v.y,v.z),f.push(U,1-R),w.push(g++)}_.push(w)}for(let x=0;x<i;x++)for(let w=0;w<s;w++){let R=_[w][x],N=_[w+1][x],D=_[w+1][x+1],U=_[w][x+1];(t>0||w!==0)&&(h.push(R,N,U),b+=3),(e>0||w!==s-1)&&(h.push(N,D,U),b+=3)}l.addGroup(m,b,0),m+=b}function A(v){let S=g,b=new Yt,T=new G,x=0,w=v===!0?t:e,R=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;let N=g;for(let D=0;D<=i;D++){let C=D/i*c+o,B=Math.cos(C),W=Math.sin(C);T.x=w*W,T.y=p*R,T.z=w*B,d.push(T.x,T.y,T.z),u.push(0,R,0),b.x=B*.5+.5,b.y=W*.5*R+.5,f.push(b.x,b.y),g++}for(let D=0;D<i;D++){let U=S+D,C=N+D;v===!0?h.push(C,C+1,U):h.push(C+1,C,U),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cc=class r extends Bn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let A=new G,v=new G,S=new G;for(let b=0;b<e.length;b+=3)f(e[b+0],A),f(e[b+1],v),f(e[b+2],S),c(A,v,S,y)}function c(y,A,v,S){let b=S+1,T=[];for(let x=0;x<=b;x++){T[x]=[];let w=y.clone().lerp(v,x/b),R=A.clone().lerp(v,x/b),N=b-x;for(let D=0;D<=N;D++)D===0&&x===b?T[x][D]=w:T[x][D]=w.clone().lerp(R,D/N)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){let R=Math.floor(w/2);w%2===0?(u(T[x][R+1]),u(T[x+1][R]),u(T[x][R])):(u(T[x][R+1]),u(T[x+1][R+1]),u(T[x+1][R]))}}function l(y){let A=new G;for(let v=0;v<s.length;v+=3)A.x=s[v+0],A.y=s[v+1],A.z=s[v+2],A.normalize().multiplyScalar(y),s[v+0]=A.x,s[v+1]=A.y,s[v+2]=A.z}function h(){let y=new G;for(let A=0;A<s.length;A+=3){y.x=s[A+0],y.y=s[A+1],y.z=s[A+2];let v=p(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;a.push(v,1-S)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let A=a[y+0],v=a[y+2],S=a[y+4],b=Math.max(A,v,S),T=Math.min(A,v,S);b>.9&&T<.1&&(A<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,A){let v=y*3;A.x=t[v+0],A.y=t[v+1],A.z=t[v+2]}function g(){let y=new G,A=new G,v=new G,S=new G,b=new Yt,T=new Yt,x=new Yt;for(let w=0,R=0;w<s.length;w+=9,R+=6){y.set(s[w+0],s[w+1],s[w+2]),A.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),b.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),S.copy(y).add(A).add(v).divideScalar(3);let N=p(S);_(b,R+0,y,N),_(T,R+2,A,N),_(x,R+4,v,N)}}function _(y,A,v,S){S<0&&y.x===1&&(a[A]=y.x-1),v.x===0&&v.z===0&&(a[A]=S/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Qr=class r extends Bn{constructor(t=[new Yt(0,-.5),new Yt(.5,0),new Yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=de(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,d=new G,u=new Yt,f=new G,g=new G,_=new G,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){let A=n+y*h*i,v=Math.sin(A),S=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*S,a.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),o.push(u.x,u.y);let T=c[3*b+0]*v,x=c[3*b+1],w=c[3*b+0]*S;l.push(T,x,w)}}for(let y=0;y<e;y++)for(let A=0;A<t.length-1;A++){let v=A+y*t.length,S=v,b=v+t.length,T=v+t.length+1,x=v+1;s.push(S,b,x),s.push(T,x,b)}this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},yo=class r extends cc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},xr=class r extends Bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let y=m*u-a;for(let A=0;A<l;A++){let v=A*d-s;g.push(v,-y,0),_.push(0,0,1),p.push(A/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let A=y+l*m,v=y+l*(m+1),S=y+1+l*(m+1),b=y+1+l*m;f.push(A,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ss(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Tp(i))i.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Tp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function An(r){let t={};for(let e=0;e<r.length;e++){let n=Ss(r[e]);for(let i in n)t[i]=n[i]}return t}function Tp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function C_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function gf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var gm={clone:Ss,merge:An},R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=C_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(i.value);break;case"v2":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hc=class extends oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ki=class extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bi=class extends Ki{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Mo=class extends _r{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ec,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uc=class extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function aa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Wr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gu,endingEnd:Gu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hu:s=t,o=2*e-n;break;case Qu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hu:a=t,c=2*n-e;break;case Qu:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+y*a[l+S]+A*a[c+S]+v*a[d+S];return s}},pc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},mc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gc=class extends Wr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[l+p]*_+a[c+p]*g;return s}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[l+g],p=a[c+g],m=f*u+g*2,y=d[m],A=d[m+1],v=t*u+g*2,S=h[v],b=h[v+1],T=L_(n,e,y,S,i);s[g]=_m(T,_,A,b,p)}return s}};function _m(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function I_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function L_(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=_m(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let c=I_(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var li=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=aa(e,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:aa(t.times,Array),values:aa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),zu(t.settings)&&(n.settings={inTangents:aa(t.settings.inTangents,Array),outTangents:aa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case nc:e=this.InterpolantFactoryMethodLinear;break;case Wl:e=this.InterpolantFactoryMethodSmooth;break;case Vu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return Vu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;zu(this.settings)&&(Ep(this.settings.inTangents,t),Ep(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&o_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wl,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,zu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ep(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=nc;var Xr=class extends li{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=lo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};_c.prototype.ValueTypeName="color";var xc=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};xc.prototype.ValueTypeName="number";var vc=class extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Zn.slerpFlat(s,0,a,l-o,a,l,c);return s}},So=class extends li{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends li{constructor(t,e,n){super(t,e,n)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=lo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};yc.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new Mc,Sc=class{constructor(t){this.manager=t!==void 0?t:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var ku=new Me,Ap=new G,Cp=new G,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ap.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ap),Cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===ua||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hl=new G,Ql=new Zn,qi=new G,To=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hl,Ql,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Ql,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hl,Ql,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Ql,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zr=new G,Rp=new Yt,Pp=new Yt,gn=class extends To{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,Rp,Pp),e.subVectors(Pp,Rp)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wu=class extends wo{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends bo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xa=class extends To{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xu=class extends wo{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Xu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var oa=-90,la=1,bc=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gn(oa,la,t,e);i.layers=this.layers,this.add(i);let s=new gn(oa,la,t,e);s.layers=this.layers,this.add(s);let a=new gn(oa,la,t,e);a.layers=this.layers,this.add(a);let o=new gn(oa,la,t,e);o.layers=this.layers,this.add(o);let c=new gn(oa,la,t,e);c.layers=this.layers,this.add(c);let l=new gn(oa,la,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wc=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var _f="\\[\\]\\.:\\/",D_=new RegExp("["+_f+"]","g"),xf="[^"+_f+"]",N_="[^"+_f.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",xf),F_=/(WCOD+)?/.source.replace("WCOD",N_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),z_=new RegExp("^"+U_+F_+O_+B_+"$"),k_=["material","materials","bones","map"],qu=class{constructor(t,e,n){let i=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(D_,"")}static parseTrackName(t){let e=z_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);k_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=qu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yb=new Float32Array(1);var wf=class wf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};wf.prototype.isMatrix2=!0;var Yu=wf;function vf(r,t,e,n){let i=V_(n);switch(e){case ff:return r*t;case Dc:return r*t/i.components*i.byteLength;case Nc:return r*t/i.components*i.byteLength;case Jr:return r*t*2/i.components*i.byteLength;case Uc:return r*t*2/i.components*i.byteLength;case df:return r*t*3/i.components*i.byteLength;case Ti:return r*t*4/i.components*i.byteLength;case Fc:return r*t*4/i.components*i.byteLength;case Lo:case Do:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bc:case kc:return Math.max(r,16)*Math.max(t,8)/4;case Oc:case zc:return Math.max(r,8)*Math.max(t,8)/2;case Vc:case Gc:case Qc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Fo:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oh:case lh:case ch:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hh:case uh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Oo:case fh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V_(r){switch(r){case Kn:case lf:return{byteLength:1,components:1};case Ma:case cf:case Vi:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case ki:case Pc:case wi:return{byteLength:4,components:1};case hf:case uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function km(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function H_(r){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
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
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
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
#endif`,J_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
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
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ix=`#ifdef USE_IRIDESCENCE
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
#endif`,rx=`#ifdef USE_BUMPMAP
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
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dx=`#define PI 3.141592653589793
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
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mx=`vec3 transformedNormal = objectNormal;
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
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
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
#endif`,Gx=`uniform sampler2D dfgLUT;
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
}`,Hx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t1=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
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
}`,J1=`#if DEPTH_PACKING == 3200
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
}`,K1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,ov=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,_v=`#define TOON
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
}`,xv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Q_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:q_,alphatest_fragment:Y_,alphatest_pars_fragment:Z_,aomap_fragment:$_,aomap_pars_fragment:J_,batching_pars_vertex:K_,batching_vertex:j_,begin_vertex:tx,beginnormal_vertex:ex,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:ox,clipping_planes_vertex:lx,color_fragment:cx,color_pars_fragment:hx,color_pars_vertex:ux,color_vertex:fx,common:dx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:gx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:vx,colorspace_fragment:yx,colorspace_pars_fragment:Mx,envmap_fragment:Sx,envmap_common_pars_fragment:bx,envmap_pars_fragment:wx,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Fx,envmap_vertex:Ex,fog_vertex:Ax,fog_pars_vertex:Cx,fog_fragment:Rx,fog_pars_fragment:Px,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Lx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Nx,lights_pars_begin:Ux,lights_toon_fragment:Ox,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:kx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Hx,lights_fragment_maps:Qx,lights_fragment_end:Wx,lightprobes_pars_fragment:Xx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:$x,map_fragment:Jx,map_pars_fragment:Kx,map_particle_fragment:jx,map_particle_pars_fragment:t1,metalnessmap_fragment:e1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:a1,morphtarget_vertex:o1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:h1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:_1,opaque_fragment:x1,packing:v1,premultiplied_alpha_fragment:y1,project_vertex:M1,dithering_fragment:S1,dithering_pars_fragment:b1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:A1,shadowmap_vertex:C1,shadowmask_pars_fragment:R1,skinbase_vertex:P1,skinning_pars_vertex:I1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:N1,specularmap_pars_fragment:U1,tonemapping_fragment:F1,tonemapping_pars_fragment:O1,transmission_fragment:B1,transmission_pars_fragment:z1,uv_pars_fragment:k1,uv_pars_vertex:V1,uv_vertex:G1,worldpos_vertex:H1,background_vert:Q1,background_frag:W1,backgroundCube_vert:X1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:Z1,depth_vert:$1,depth_frag:J1,distance_vert:K1,distance_frag:j1,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:av,meshlambert_frag:ov,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:fv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:xv,points_frag:vv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:bv},yt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},nr={basic:{uniforms:An([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:An([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:An([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:An([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:An([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Et(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:An([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:An([yt.points,yt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:An([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:An([yt.common,yt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:An([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:An([yt.sprite,yt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:An([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:An([yt.lights,yt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};nr.physical={uniforms:An([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var gh={r:0,b:0,g:0},wv=new Me,Vm=new te;Vm.set(-1,0,0,0,1,0,0,0,1);function Tv(r,t,e,n,i,s){let a=new Et(0),o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){let v=y.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(y){let A=!1,v=f(y);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Po)?(l===void 0&&(l=new pe(new bi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ss(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vm),l.material.toneMapped=me.getTransfer(v.colorSpace)!==ye,(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pe(new xr(2,2),new oi({name:"BackgroundMaterial",uniforms:Ss(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,A){y.getRGB(gh,gf(r)),e.buffers.color.setClear(gh.r,gh.g,gh.b,A,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Ev(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(N,D,U,C,B){let W=!1,k=d(N,C,U,D);s!==k&&(s=k,l(s.object)),W=f(N,C,U,B),W&&g(N,C,U,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(N,D,U,C),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,D,U,C){let B=C.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let k=N.isInstancedMesh===!0?N.id:0,K=W[k];K===void 0&&(K={},W[k]=K);let Y=K[U.id];Y===void 0&&(Y={},K[U.id]=Y);let L=Y[B];return L===void 0&&(L=u(c()),Y[B]=L),L}function u(N){let D=[],U=[],C=[];for(let B=0;B<e;B++)D[B]=0,U[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,D,U,C){let B=s.attributes,W=D.attributes,k=0,K=U.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=B[Y],vt=W[Y];if(vt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;k++}return s.attributesNum!==k||s.index!==C}function g(N,D,U,C){let B={},W=D.attributes,k=0,K=U.getAttributes();for(let Y in K)if(K[Y].location>=0){let tt=W[Y];tt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),B[Y]=vt,k++}s.attributes=B,s.attributesNum=k,s.index=C}function _(){let N=s.newAttributes;for(let D=0,U=N.length;D<U;D++)N[D]=0}function p(N){m(N,0)}function m(N,D){let U=s.newAttributes,C=s.enabledAttributes,B=s.attributeDivisors;U[N]=1,C[N]===0&&(r.enableVertexAttribArray(N),C[N]=1),B[N]!==D&&(r.vertexAttribDivisor(N,D),B[N]=D)}function y(){let N=s.newAttributes,D=s.enabledAttributes;for(let U=0,C=D.length;U<C;U++)D[U]!==N[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function A(N,D,U,C,B,W,k){k===!0?r.vertexAttribIPointer(N,D,U,B,W):r.vertexAttribPointer(N,D,U,C,B,W)}function v(N,D,U,C){_();let B=C.attributes,W=U.getAttributes(),k=D.defaultAttributeValues;for(let K in W){let Y=W[K];if(Y.location>=0){let L=B[K];if(L===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),L!==void 0){let tt=L.normalized,vt=L.itemSize,wt=t.get(L);if(wt===void 0)continue;let Ot=wt.buffer,Ht=wt.type,kt=wt.bytesPerElement,$=Ht===r.INT||Ht===r.UNSIGNED_INT||L.gpuType===Pc;if(L.isInterleavedBufferAttribute){let it=L.data,_t=it.stride,Vt=L.offset;if(it.isInstancedInterleavedBuffer){for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt,it.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let dt=0;dt<Y.locationSize;dt++)A(Y.location+dt,vt/Y.locationSize,Ht,tt,_t*kt,(Vt+vt/Y.locationSize*dt)*kt,$)}else{if(L.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)m(Y.location+it,L.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let it=0;it<Y.locationSize;it++)p(Y.location+it);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let it=0;it<Y.locationSize;it++)A(Y.location+it,vt/Y.locationSize,Ht,tt,vt*kt,vt/Y.locationSize*it*kt,$)}}else if(k!==void 0){let tt=k[K];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(Y.location,tt);break;case 3:r.vertexAttrib3fv(Y.location,tt);break;case 4:r.vertexAttrib4fv(Y.location,tt);break;default:r.vertexAttrib1fv(Y.location,tt)}}}}y()}function S(){w();for(let N in n){let D=n[N];for(let U in D){let C=D[U];for(let B in C){let W=C[B];for(let k in W)h(W[k].object),delete W[k];delete C[B]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let U in D){let C=D[U];for(let B in C){let W=C[B];for(let k in W)h(W[k].object),delete W[k];delete C[B]}}delete n[N.id]}function T(N){for(let D in n){let U=n[D];for(let C in U){let B=U[C];if(B[N.id]===void 0)continue;let W=B[N.id];for(let k in W)h(W[k].object),delete W[k];delete B[N.id]}}}function x(N){for(let D in n){let U=n[D],C=N.isInstancedMesh===!0?N.id:0,B=U[C];if(B!==void 0){for(let W in B){let k=B[W];for(let K in k)h(k[K].object),delete k[K];delete B[W]}delete U[C],Object.keys(U).length===0&&delete n[D]}}}function w(){R(),a=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Av(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Ti&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Kn&&T!==wi&&!x&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&($t("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:b}}function Rv(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Fi,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let y=s?0:n,A=y*4,v=m.clippingState||null;c.value=v,v=h(g,u,A,f);for(let S=0;S!==A;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(d[A]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var wa=4,Pv=6,Iv=20,Lv=256,ko=new xa,vm=new Et,Tf=null,Ef=0,Af=0,Cf=!1,Dv=new G,bs=new G,Ea=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=Dv}=s;Tf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tf,Ef,Af),this._renderer.xr.enabled=Cf,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zr||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Vi,format:Ti,colorSpace:co,depthBuffer:!1},i=ym(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nv(s)),this._blurMaterial=Fv(s,t,e),this._ggxMaterial=Uv(s,t,e)}return i}_compileMaterial(t){let e=new pe(new Bn,t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,i,s){let c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vm),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new bi,new Si({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(vm),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;ba(i,v*S,A>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Zr||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;ba(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-wa?n-g+wa:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ba(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,ko),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ba(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,ko)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-wa?i-this._lodMax+wa:0),u=4*(this._cubeSize-h);ba(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,ko)}};function Nv(r){let t=[],e=[],n=r,i=r-wa+1+Pv;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,A=m>2?0:-1,v=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];g.set(v,f*u*m);for(let S=0;S<u;S++){let b=h[S*2]*2-1,T=h[S*2+1]*2-1;m===0?bs.set(1,T,b):m===1?bs.set(-b,1,-T):m===2?bs.set(-b,T,1):m===3?bs.set(-1,T,-b):m===4?bs.set(-b,-1,T):bs.set(b,T,-1),bs.toArray(_,(m*u+S)*f)}}let p=new Bn;p.setAttribute("position",new ai(g,f)),p.setAttribute("outputDirection",new ai(_,f)),e.push(new pe(p,null)),n>wa&&n--}return{lodMeshes:e,sizeLods:t}}function ym(r,t,e){let n=new $n(r,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Uv(r,t,e){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Fv(r,t,e){return new oi({name:"SphericalGaussianBlur",defines:{SAMPLES:Iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Mm(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Sm(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xh=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ji});s.uniforms.tEquirect.value=e;let a=new pe(i,s),o=e.minFilter;return e.minFilter===tr&&(e.minFilter=rn),new bc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function Ov(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ac||f===Cc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new xh(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ac||f===Cc,_=f===Zr||f===Ms;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ea(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Ea(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ac?u.mapping=Zr:f===Cc&&(u.mapping=Ms),u}function c(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Bv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function zv(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let A=0,v=y.length;A<v;A+=3){let S=y[A+0],b=y[A+1],T=y[A+2];u.push(S,b,b,T,T,S)}}else{let y=g.array;_=g.version;for(let A=0,v=y.length/3-1;A<v;A+=3){let S=A+0,b=A+1,T=A+2;u.push(S,b,b,T,T,S)}}let p=new(g.count>=65535?go:mo)(u,1);p.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function kv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gv(r,t,e){let n=new WeakMap,i=new ze;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*d),T=new fo(b,v,S,d);T.type=wi,T.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let N=p[R],D=m[R],U=y[R],C=v*S*4*R;for(let B=0;B<N.count;B++){let W=B*x;f===!0&&(i.fromBufferAttribute(N,B),b[C+W+0]=i.x,b[C+W+1]=i.y,b[C+W+2]=i.z,b[C+W+3]=0),g===!0&&(i.fromBufferAttribute(D,B),b[C+W+4]=i.x,b[C+W+5]=i.y,b[C+W+6]=i.z,b[C+W+7]=0),_===!0&&(i.fromBufferAttribute(U,B),b[C+W+8]=i.x,b[C+W+9]=i.y,b[C+W+10]=i.z,b[C+W+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Yt(v,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Hv(r,t,e,n,i){let s=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Qv={[tf]:"LINEAR_TONE_MAPPING",[ef]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[af]:"AGX_TONE_MAPPING",[Ro]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function Wv(r,t,e,n,i,s){let a=new $n(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Bn;l.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Be([0,2,0,0,2,0],2));let h=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pe(l,h),u=new xa(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,y=[],A=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let b=0;b<y.length;b++){let T=y[b];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){y=v,A=y.length>0&&y[0].isRenderPass===!0;let S=a.width,b=a.height;y.length>0&&o===null&&(o=new $n(S,b,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),c=new $n(S,b,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let x=y[T];x.setSize&&x.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===zi&&y.length===0)return!1;if(m=S,S!==null){let b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=zi,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=p,_=!0;let b=a,T=o;for(let x=0;x<y.length;x++){let w=y[x];w.enabled!==!1&&(w.render(v,T,b,S),w.needsSwap!==!1&&(b=T,T=T===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},me.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let x=Qv[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Gm=new On,If=new Hr(1,1),Hm=new fo,Qm=new ac,Wm=new xo,bm=[],wm=[],Tm=new Float32Array(16),Em=new Float32Array(9),Am=new Float32Array(4);function Aa(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=bm[i];if(s===void 0&&(s=new Float32Array(i),bm[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function an(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Mh(r,t){let e=wm[t];e===void 0&&(e=new Int32Array(t),wm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Xv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),an(e,t)}}function Yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),an(e,t)}}function Zv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),an(e,t)}}function $v(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;Am.set(n),r.uniformMatrix2fv(this.addr,!1,Am),an(e,n)}}function Jv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;Em.set(n),r.uniformMatrix3fv(this.addr,!1,Em),an(e,n)}}function Kv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;Tm.set(n),r.uniformMatrix4fv(this.addr,!1,Tm),an(e,n)}}function jv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),an(e,t)}}function ey(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),an(e,t)}}function ny(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),an(e,t)}}function iy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),an(e,t)}}function sy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),an(e,t)}}function ay(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),an(e,t)}}function oy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(If.compareFunction=e.isReversedDepthBuffer()?ph:dh,s=If):s=Gm,e.setTexture2D(t||s,i)}function ly(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qm,i)}function cy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wm,i)}function hy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hm,i)}function uy(r){switch(r){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Zv;case 35674:return $v;case 35675:return Jv;case 35676:return Kv;case 5124:case 35670:return jv;case 35667:case 35671:return ty;case 35668:case 35672:return ey;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return ry;case 36295:return sy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}function fy(r,t){r.uniform1fv(this.addr,t)}function dy(r,t){let e=Aa(t,this.size,2);r.uniform2fv(this.addr,e)}function py(r,t){let e=Aa(t,this.size,3);r.uniform3fv(this.addr,e)}function my(r,t){let e=Aa(t,this.size,4);r.uniform4fv(this.addr,e)}function gy(r,t){let e=Aa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function _y(r,t){let e=Aa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xy(r,t){let e=Aa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vy(r,t){r.uniform1iv(this.addr,t)}function yy(r,t){r.uniform2iv(this.addr,t)}function My(r,t){r.uniform3iv(this.addr,t)}function Sy(r,t){r.uniform4iv(this.addr,t)}function by(r,t){r.uniform1uiv(this.addr,t)}function wy(r,t){r.uniform2uiv(this.addr,t)}function Ty(r,t){r.uniform3uiv(this.addr,t)}function Ey(r,t){r.uniform4uiv(this.addr,t)}function Ay(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=If:a=Gm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Cy(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qm,s[a])}function Ry(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wm,s[a])}function Py(r,t,e){let n=this.cache,i=t.length,s=Mh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hm,s[a])}function Iy(r){switch(r){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return vy;case 35667:case 35671:return yy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return wy;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}var Lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uy(e.type)}},Df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iy(e.type)}},Nf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function Cm(r,t){r.seq.push(t),r.map[t.id]=t}function Ly(r,t,e){let n=r.name,i=n.length;for(Rf.lastIndex=0;;){let s=Rf.exec(n),a=Rf.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Cm(e,l===void 0?new Lf(o,r,t):new Df(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Nf(o),Cm(e,d)),e=d}}}var Ta=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Ly(o,c,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Rm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Dy=37297,Ny=0;function Uy(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pm=new te;function Fy(r){me._getMatrix(Pm,me.workingColorSpace,r);let t=`mat3( ${Pm.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case ho:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Im(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Uy(r.getShaderSource(t),o)}else return s}function Oy(r,t){let e=Fy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var By={[tf]:"Linear",[ef]:"Reinhard",[nf]:"Cineon",[rf]:"ACESFilmic",[af]:"AgX",[Ro]:"Neutral",[sf]:"Custom"};function zy(r,t){let e=By[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _h=new G;function ky(){me.getLuminanceCoefficients(_h);let r=_h.x.toFixed(4),t=_h.y.toFixed(4),e=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Gy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Go(r){return r!==""}function Lm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(r){return r.replace(Qy,Xy)}var Wy=new Map;function Xy(r,t){let e=ae[t];if(e===void 0){let n=Wy.get(t);if(n!==void 0)e=ae[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uf(e)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(r){return r.replace(qy,Yy)}function Yy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Um(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var Zy={[Ao]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function $y(r){return Zy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jy={[Zr]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function Ky(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Jy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var jy={[Ms]:"ENVMAP_MODE_REFRACTION"};function tM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eM={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[jp]:"ENVMAP_BLENDING_ADD"};function nM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eM[r.combine]||"ENVMAP_BLENDING_NONE"}function iM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=$y(e),l=Ky(e),h=tM(e),d=nM(e),u=iM(e),f=Vy(e),g=Gy(s),_=i.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`)):(p=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),m=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?ae.tonemapping_pars_fragment:"",e.toneMapping!==zi?zy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Oy("linearToOutputTexel",e.outputColorSpace),ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),a=Uf(a),a=Lm(a,e),a=Dm(a,e),o=Uf(o),o=Lm(o,e),o=Dm(o,e),a=Nm(a),o=Nm(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=y+p+a,v=y+m+o,S=Rm(i,i.VERTEX_SHADER,A),b=Rm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(N){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(S)||"",C=i.getShaderInfoLog(b)||"",B=D.trim(),W=U.trim(),k=C.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{let L=Im(i,S,"vertex"),tt=Im(i,b,"fragment");Jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+L+`
`+tt)}else B!==""?$t("WebGLProgram: Program Info Log:",B):(W===""||k==="")&&(Y=!1);Y&&(N.diagnostics={runnable:K,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(S),i.deleteShader(b),x=new Ta(i,_),w=Hy(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,Dy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ny++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var sM=0,Ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Of(t),e.set(t,n)),n}},Of=class{constructor(t){this.id=sM++,this.code=t,this.usedTimes=0}};function aM(r){return r===Jr||r===Fo||r===Oo}function oM(r,t,e,n,i,s){let a=new po,o=new Ff,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,w,R,N,D,U){let C=N.fog,B=D.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||W,k),Y=K&&K.mapping===Po?K.image.height:null,L=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=tt!==void 0?tt.length:0,wt=0;B.morphAttributes.position!==void 0&&(wt=1),B.morphAttributes.normal!==void 0&&(wt=2),B.morphAttributes.color!==void 0&&(wt=3);let Ot,Ht,kt,$;if(L){let Mt=nr[L];Ot=Mt.vertexShader,Ht=Mt.fragmentShader}else{Ot=x.vertexShader,Ht=x.fragmentShader;let Mt=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,Mt,ot),kt=Mt.id,$=ot.id}let it=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,dt=D.isBatchedMesh===!0,Bt=!!x.map,Nt=!!x.matcap,Tt=!!K,qt=!!x.aoMap,Ct=!!x.lightMap,V=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,Zt=!!x.displacementMap,ee=!!x.emissiveMap,Dt=!!x.metalnessMap,jt=!!x.roughnessMap,F=x.anisotropy>0,ne=x.clearcoat>0,Qt=x.dispersion>0,I=x.retroreflectivity>0,M=x.iridescence>0,z=x.sheen>0,Q=x.transmission>0,j=F&&!!x.anisotropyMap,ft=ne&&!!x.clearcoatMap,ht=ne&&!!x.clearcoatNormalMap,nt=ne&&!!x.clearcoatRoughnessMap,et=M&&!!x.iridescenceMap,gt=M&&!!x.iridescenceThicknessMap,Pt=z&&!!x.sheenColorMap,pt=z&&!!x.sheenRoughnessMap,mt=!!x.specularMap,ut=!!x.specularColorMap,zt=!!x.specularIntensityMap,Wt=Q&&!!x.transmissionMap,P=Q&&!!x.thicknessMap,J=!!x.gradientMap,H=!!x.alphaMap,lt=x.alphaTest>0,st=!!x.alphaHash,rt=!!x.extensions,ct=zi;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ct=r.toneMapping);let at={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Ht,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:dt,batchingColor:dt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:Nt,envMap:Tt,envMapMode:Tt&&K.mapping,envMapCubeUVHeight:Y,aoMap:qt,lightMap:Ct,bumpMap:V,normalMap:Kt,displacementMap:Zt,emissiveMap:ee,normalMapObjectSpace:Kt&&x.normalMapType===nm,normalMapTangentSpace:Kt&&x.normalMapType===Bo,packedNormalMap:Kt&&x.normalMapType===Bo&&aM(x.normalMap.format),metalnessMap:Dt,roughnessMap:jt,anisotropy:F,anisotropyMap:j,clearcoat:ne,clearcoatMap:ft,clearcoatNormalMap:ht,clearcoatRoughnessMap:nt,dispersion:Qt,retroreflection:I,iridescence:M,iridescenceMap:et,iridescenceThicknessMap:gt,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:pt,specularMap:mt,specularColorMap:ut,specularIntensityMap:zt,transmission:Q,transmissionMap:Wt,thicknessMap:P,gradientMap:J,opaque:x.transparent===!1&&x.blending===ya&&x.alphaToCoverage===!1,alphaMap:H,alphaTest:lt,alphaHash:st,combine:x.combine,mapUv:Bt&&g(x.map.channel),aoMapUv:qt&&g(x.aoMap.channel),lightMapUv:Ct&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:Kt&&g(x.normalMap.channel),displacementMapUv:Zt&&g(x.displacementMap.channel),emissiveMapUv:ee&&g(x.emissiveMap.channel),metalnessMapUv:Dt&&g(x.metalnessMap.channel),roughnessMapUv:jt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ft&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(x.sheenRoughnessMap.channel),specularMapUv:mt&&g(x.specularMap.channel),specularColorMapUv:ut&&g(x.specularColorMap.channel),specularIntensityMapUv:zt&&g(x.specularIntensityMap.channel),transmissionMapUv:Wt&&g(x.transmissionMap.channel),thicknessMapUv:P&&g(x.thicknessMap.channel),alphaMapUv:H&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Kt||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Bt||H),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:wt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ee&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(w,x),y(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=f[x.type],R;if(w){let N=nr[w];R=gm.clone(N.uniforms)}else R=x.uniforms;return R}function v(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new rM(r,w,x,i),l.push(R),h.set(w,R)),R}function S(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function lM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function cM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Om(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let y=r[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function c(u,f,g,_,p,m,y){y.reversedDepth===!0&&(p=-p);let A=o(u,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function l(u,f,g,_,p,m){let y=o(u,f,g,_,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||cM),n.length>1&&n.sort(f||Fm),i.length>1&&i.sort(f||Fm)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function hM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Om,r.set(n,[a])):i>=s.length?(a=new Om,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function uM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Et};break;case"SpotLight":e={position:new G,direction:new G,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function fM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var dM=0;function pM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function mM(r){let t=new uM,e=fM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let i=new G,s=new Me,a=new Me;function o(l){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,A=0,v=0,S=0,b=0,T=0,x=0,w=0,R=0;l.sort(pM);for(let D=0,U=l.length;D<U;D++){let C=l[D],B=C.color,W=C.intensity,k=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Jr?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*W,d+=B.g*W,u+=B.b*W;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],W);R++}else if(C.isSunLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let L=C.shadow,tt=e.get(C);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=K;let vt=L.getViewportCount();for(let wt=0;wt<vt;wt++)n.sunShadowMatrix[_+wt]=L.getMatrix(wt),n.sunShadowCascade[_+wt]=L._cascadeData[wt];_+=vt,g++}n.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let L=C.shadow,tt=e.get(C);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=Y,p++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(W),Y.distance=k,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[y]=Y;let L=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,L.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=L.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,n.spotShadow[y]=tt,n.spotShadowMap[y]=K,T++}y++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy(B).multiplyScalar(W),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=Y,A++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let L=C.shadow,tt=e.get(C);tt.shadowIntensity=L.intensity,tt.shadowBias=L.bias,tt.shadowNormalBias=L.normalBias,tt.shadowRadius=L.radius,tt.shadowMapSize=L.mapSize,tt.shadowCameraNear=L.camera.near,tt.shadowCameraFar=L.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=C.shadow.matrix,b++}n.point[m]=Y,m++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(W),Y.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==y||N.rectAreaLength!==A||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==b||N.numSpotShadows!==T||N.numSpotMaps!==x||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=y,N.rectAreaLength=A,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=b,N.numSpotShadows=T,N.numSpotMaps=x,N.numLightProbes=R,n.version=dM++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){let v=l[y];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Bm(r){let t=new mM(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function gM(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Bm(r),t.set(i,[o])):s>=a.length?(o=new Bm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
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
}`,vM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],yM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],zm=new Me,Vo=new G,Pf=new G;function MM(r,t,e){let n=new ma,i=new Yt,s=new Yt,a=new ze,o=new uc,c=new fc,l={},h=e.maxTextureSize,d={[Yr]:vn,[vn]:Yr,[Jn]:Jn},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:_M,fragmentShader:xM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Bn;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let m=this.type;this.render=function(b,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Dp&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let w=r.getRenderTarget(),R=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ji),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=m!==this.type;U&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=b.length;C<B;C++){let W=b[C],k=W.shadow;if(k===void 0){$t("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,k.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===va){if(W.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $n(i.x,i.y,{format:Jr,type:Vi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Hr(i.x,i.y,wi),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Zi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn}else W.isPointLight?(k.map=new xh(i.x),k.map.depthTexture=new lc(i.x,ki)):(k.map=new $n(i.x,i.y),k.map.depthTexture=new Hr(i.x,i.y,ki)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Zi,this.type===Ao?(k.map.depthTexture.compareFunction=Y?ph:dh,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let L=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();W.isPointLight!==!0&&k.updateMatrices(W,x);for(let tt=0;tt<L;tt++){let vt=k.getCamera(tt);if(W.isPointLight){let wt=k.camera,Ot=k.matrix,Ht=W.distance||wt.far;Ht!==wt.far&&(wt.far=Ht,wt.updateProjectionMatrix()),Vo.setFromMatrixPosition(W.matrixWorld),wt.position.copy(Vo),Pf.copy(wt.position),Pf.add(vM[tt]),wt.up.copy(yM[tt]),wt.lookAt(Pf),wt.updateMatrixWorld(),Ot.makeTranslation(-Vo.x,-Vo.y,-Vo.z),zm.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(zm,wt.coordinateSystem,wt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(k.map),r.clear());let wt=k.getViewport(tt);a.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),D.viewport(a)}n=k.getFrustum(tt),v(T,x,vt,W,this.type)}k.isPointLightShadow!==!0&&this.type===va&&y(k,x),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,R,N)};function y(b,T){let x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new $n(i.x,i.y,{format:Jr,type:Vi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,x,f,_,null)}function A(b,T,x,w){let R=null,N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=R.uuid,U=T.uuid,C=l[D];C===void 0&&(C={},l[D]=C);let B=C[U];B===void 0&&(B=R.clone(),C[U]=B,T.addEventListener("dispose",S)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,w===va?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=r.properties.get(R);D.light=x}return R}function v(b,T,x,w,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===va)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let U=t.update(b),C=b.material;if(Array.isArray(C)){let B=U.groups;for(let W=0,k=B.length;W<k;W++){let K=B[W],Y=C[K.materialIndex];if(Y&&Y.visible){let L=A(b,Y,w,R);b.onBeforeShadow(r,b,T,x,U,L,K),r.renderBufferDirect(x,null,U,L,b,K),b.onAfterShadow(r,b,T,x,U,L,K)}}}else if(C.visible){let B=A(b,C,w,R);b.onBeforeShadow(r,b,T,x,U,B,null),r.renderBufferDirect(x,null,U,B,b,null),b.onAfterShadow(r,b,T,x,U,B,null)}}let D=b.children;for(let U=0,C=D.length;U<C;U++)v(D[U],T,x,w,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in l){let w=l[x],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function SM(r,t){function e(){let P=!1,J=new ze,H=null,lt=new ze(0,0,0,0);return{setMask:function(st){H!==st&&!P&&(r.colorMask(st,st,st,st),H=st)},setLocked:function(st){P=st},setClear:function(st,rt,ct,at,Mt){Mt===!0&&(st*=at,rt*=at,ct*=at),J.set(st,rt,ct,at),lt.equals(J)===!1&&(r.clearColor(st,rt,ct,at),lt.copy(J))},reset:function(){P=!1,H=null,lt.set(-1,0,0,0)}}}function n(){let P=!1,J=!1,H=null,lt=null,st=null;return{setReversed:function(rt){if(J!==rt){let ct=t.get("EXT_clip_control");rt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),J=rt;let at=st;st=null,this.setClear(at)}},getReversed:function(){return J},setTest:function(rt){rt?it(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(rt){H!==rt&&!P&&(r.depthMask(rt),H=rt)},setFunc:function(rt){if(J&&(rt=pm[rt]),lt!==rt){switch(rt){case ql:r.depthFunc(r.NEVER);break;case Yl:r.depthFunc(r.ALWAYS);break;case Zl:r.depthFunc(r.LESS);break;case ha:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case Jl:r.depthFunc(r.GEQUAL);break;case Kl:r.depthFunc(r.GREATER);break;case jl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=rt}},setLocked:function(rt){P=rt},setClear:function(rt){st!==rt&&(st=rt,J&&(rt=1-rt),r.clearDepth(rt))},reset:function(){P=!1,H=null,lt=null,st=null,J=!1}}}function i(){let P=!1,J=null,H=null,lt=null,st=null,rt=null,ct=null,at=null,Mt=null;return{setTest:function(ot){P||(ot?it(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(ot){J!==ot&&!P&&(r.stencilMask(ot),J=ot)},setFunc:function(ot,It,St){(H!==ot||lt!==It||st!==St)&&(r.stencilFunc(ot,It,St),H=ot,lt=It,st=St)},setOp:function(ot,It,St){(rt!==ot||ct!==It||at!==St)&&(r.stencilOp(ot,It,St),rt=ot,ct=It,at=St)},setLocked:function(ot){P=ot},setClear:function(ot){Mt!==ot&&(r.clearStencil(ot),Mt=ot)},reset:function(){P=!1,J=null,H=null,lt=null,st=null,rt=null,ct=null,at=null,Mt=null}}}let s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,y=null,A=null,v=null,S=null,b=null,T=null,x=new Et(0,0,0),w=0,R=!1,N=null,D=null,U=null,C=null,B=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=K>=2);let L=null,tt={},vt=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),Ot=new ze().fromArray(vt),Ht=new ze().fromArray(wt);function kt(P,J,H,lt){let st=new Uint8Array(4),rt=r.createTexture();r.bindTexture(P,rt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<H;ct++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(J+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return rt}let $={};$[r.TEXTURE_2D]=kt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=kt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=kt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=kt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(ha),V(!1),Kt(Zu),it(r.CULL_FACE),qt(ji);function it(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function _t(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Vt(P,J){return u[P]!==J?(r.bindFramebuffer(P,J),u[P]=J,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=J),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=J),!0):!1}function dt(P,J){let H=g,lt=!1;if(P){H=f.get(J),H===void 0&&(H=[],f.set(J,H));let st=P.textures;if(H.length!==st.length||H[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,ct=st.length;rt<ct;rt++)H[rt]=r.COLOR_ATTACHMENT0+rt;H.length=st.length,lt=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,lt=!0);lt&&r.drawBuffers(H)}function Bt(P){return _!==P?(r.useProgram(P),_=P,!0):!1}let Nt={[ys]:r.FUNC_ADD,[Up]:r.FUNC_SUBTRACT,[Fp]:r.FUNC_REVERSE_SUBTRACT};Nt[Op]=r.MIN,Nt[Bp]=r.MAX;let Tt={[zp]:r.ZERO,[kp]:r.ONE,[Vp]:r.SRC_COLOR,[Ku]:r.SRC_ALPHA,[qp]:r.SRC_ALPHA_SATURATE,[Wp]:r.DST_COLOR,[Hp]:r.DST_ALPHA,[Gp]:r.ONE_MINUS_SRC_COLOR,[ju]:r.ONE_MINUS_SRC_ALPHA,[Xp]:r.ONE_MINUS_DST_COLOR,[Qp]:r.ONE_MINUS_DST_ALPHA,[Yp]:r.CONSTANT_COLOR,[Zp]:r.ONE_MINUS_CONSTANT_COLOR,[$p]:r.CONSTANT_ALPHA,[Jp]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(P,J,H,lt,st,rt,ct,at,Mt,ot){if(P===ji){p===!0&&(_t(r.BLEND),p=!1);return}if(p===!1&&(it(r.BLEND),p=!0),P!==Np){if(P!==m||ot!==R){if((y!==ys||S!==ys)&&(r.blendEquation(r.FUNC_ADD),y=ys,S=ys),ot)switch(P){case ya:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Co:r.blendFunc(r.ONE,r.ONE);break;case $u:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ju:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Jt("WebGLState: Invalid blending: ",P);break}else switch(P){case ya:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $u:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ju:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",P);break}A=null,v=null,b=null,T=null,x.set(0,0,0),w=0,m=P,R=ot}return}st=st||J,rt=rt||H,ct=ct||lt,(J!==y||st!==S)&&(r.blendEquationSeparate(Nt[J],Nt[st]),y=J,S=st),(H!==A||lt!==v||rt!==b||ct!==T)&&(r.blendFuncSeparate(Tt[H],Tt[lt],Tt[rt],Tt[ct]),A=H,v=lt,b=rt,T=ct),(at.equals(x)===!1||Mt!==w)&&(r.blendColor(at.r,at.g,at.b,Mt),x.copy(at),w=Mt),m=P,R=!1}function Ct(P,J){P.side===Jn?_t(r.CULL_FACE):it(r.CULL_FACE);let H=P.side===vn;J&&(H=!H),V(H),P.blending===ya&&P.transparent===!1?qt(ji):qt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);let lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(P){N!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),N=P)}function Kt(P){P!==Ip?(it(r.CULL_FACE),P!==D&&(P===Zu?r.cullFace(r.BACK):P===Lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),D=P}function Zt(P){P!==U&&(k&&r.lineWidth(P),U=P)}function ee(P,J,H){P?(it(r.POLYGON_OFFSET_FILL),(C!==J||B!==H)&&(C=J,B=H,a.getReversed()&&(J=-J),r.polygonOffset(J,H))):_t(r.POLYGON_OFFSET_FILL)}function Dt(P){P?it(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function jt(P){P===void 0&&(P=r.TEXTURE0+W-1),L!==P&&(r.activeTexture(P),L=P)}function F(P,J,H){H===void 0&&(L===null?H=r.TEXTURE0+W-1:H=L);let lt=tt[H];lt===void 0&&(lt={type:void 0,texture:void 0},tt[H]=lt),(lt.type!==P||lt.texture!==J)&&(L!==H&&(r.activeTexture(H),L=H),r.bindTexture(P,J||$[P]),lt.type=P,lt.texture=J)}function ne(){let P=tt[L];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Qt(){try{r.compressedTexImage2D(...arguments)}catch(P){Jt("WebGLState:",P)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(P){Jt("WebGLState:",P)}}function M(){try{r.texSubImage2D(...arguments)}catch(P){Jt("WebGLState:",P)}}function z(){try{r.texSubImage3D(...arguments)}catch(P){Jt("WebGLState:",P)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(P){Jt("WebGLState:",P)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(P){Jt("WebGLState:",P)}}function ft(){try{r.texStorage2D(...arguments)}catch(P){Jt("WebGLState:",P)}}function ht(){try{r.texStorage3D(...arguments)}catch(P){Jt("WebGLState:",P)}}function nt(){try{r.texImage2D(...arguments)}catch(P){Jt("WebGLState:",P)}}function et(){try{r.texImage3D(...arguments)}catch(P){Jt("WebGLState:",P)}}function gt(P){return d[P]!==void 0?d[P]:r.getParameter(P)}function Pt(P,J){d[P]!==J&&(r.pixelStorei(P,J),d[P]=J)}function pt(P){Ot.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Ot.copy(P))}function mt(P){Ht.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Ht.copy(P))}function ut(P,J){let H=l.get(J);H===void 0&&(H=new WeakMap,l.set(J,H));let lt=H.get(P);lt===void 0&&(lt=r.getUniformBlockIndex(J,P.name),H.set(P,lt))}function zt(P,J){let lt=l.get(J).get(P);c.get(J)!==lt&&(r.uniformBlockBinding(J,lt,P.__bindingPointIndex),c.set(J,lt))}function Wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},L=null,tt={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,y=null,A=null,v=null,S=null,b=null,T=null,x=new Et(0,0,0),w=0,R=!1,N=null,D=null,U=null,C=null,B=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:_t,bindFramebuffer:Vt,drawBuffers:dt,useProgram:Bt,setBlending:qt,setMaterial:Ct,setFlipSided:V,setCullFace:Kt,setLineWidth:Zt,setPolygonOffset:ee,setScissorTest:Dt,activeTexture:jt,bindTexture:F,unbindTexture:ne,compressedTexImage2D:Qt,compressedTexImage3D:I,texImage2D:nt,texImage3D:et,pixelStorei:Pt,getParameter:gt,updateUBOMapping:ut,uniformBlockBinding:zt,texStorage2D:ft,texStorage3D:ht,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:Q,compressedTexSubImage3D:j,scissor:pt,viewport:mt,reset:Wt}}function bM(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,M){return g?new OffscreenCanvas(I,M):uo("canvas")}function p(I,M,z){let Q=1,j=Qt(I);if((j.width>z||j.height>z)&&(Q=z/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ft=Math.floor(Q*j.width),ht=Math.floor(Q*j.height);u===void 0&&(u=_(ft,ht));let nt=M?_(ft,ht):u;return nt.width=ft,nt.height=ht,nt.getContext("2d").drawImage(I,0,0,ft,ht),$t("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+ht+")."),nt}else return"data"in I&&$t("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps}function y(I){r.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(I,M,z,Q,j,ft=!1){if(I!==null){if(r[I]!==void 0)return r[I];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht;Q&&(ht=t.get("EXT_texture_norm16"),ht||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=M;if(M===r.RED&&(z===r.FLOAT&&(nt=r.R32F),z===r.HALF_FLOAT&&(nt=r.R16F),z===r.UNSIGNED_BYTE&&(nt=r.R8),z===r.UNSIGNED_SHORT&&ht&&(nt=ht.R16_EXT),z===r.SHORT&&ht&&(nt=ht.R16_SNORM_EXT)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(nt=r.R8UI),z===r.UNSIGNED_SHORT&&(nt=r.R16UI),z===r.UNSIGNED_INT&&(nt=r.R32UI),z===r.BYTE&&(nt=r.R8I),z===r.SHORT&&(nt=r.R16I),z===r.INT&&(nt=r.R32I)),M===r.RG&&(z===r.FLOAT&&(nt=r.RG32F),z===r.HALF_FLOAT&&(nt=r.RG16F),z===r.UNSIGNED_BYTE&&(nt=r.RG8),z===r.UNSIGNED_SHORT&&ht&&(nt=ht.RG16_EXT),z===r.SHORT&&ht&&(nt=ht.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(nt=r.RG8UI),z===r.UNSIGNED_SHORT&&(nt=r.RG16UI),z===r.UNSIGNED_INT&&(nt=r.RG32UI),z===r.BYTE&&(nt=r.RG8I),z===r.SHORT&&(nt=r.RG16I),z===r.INT&&(nt=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),z===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),z===r.UNSIGNED_INT&&(nt=r.RGB32UI),z===r.BYTE&&(nt=r.RGB8I),z===r.SHORT&&(nt=r.RGB16I),z===r.INT&&(nt=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),z===r.UNSIGNED_INT&&(nt=r.RGBA32UI),z===r.BYTE&&(nt=r.RGBA8I),z===r.SHORT&&(nt=r.RGBA16I),z===r.INT&&(nt=r.RGBA32I)),M===r.RGB&&(z===r.UNSIGNED_SHORT&&ht&&(nt=ht.RGB16_EXT),z===r.SHORT&&ht&&(nt=ht.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(nt=r.R11F_G11F_B10F)),M===r.RGBA){let et=ft?ho:me.getTransfer(j);z===r.FLOAT&&(nt=r.RGBA32F),z===r.HALF_FLOAT&&(nt=r.RGBA16F),z===r.UNSIGNED_BYTE&&(nt=et===ye?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ht&&(nt=ht.RGBA16_EXT),z===r.SHORT&&ht&&(nt=ht.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function S(I,M){let z;return I?M===null||M===ki||M===Sa?z=r.DEPTH24_STENCIL8:M===wi?z=r.DEPTH32F_STENCIL8:M===Ma&&(z=r.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===Sa?z=r.DEPTH_COMPONENT24:M===wi?z=r.DEPTH_COMPONENT32F:M===Ma&&(z=r.DEPTH_COMPONENT16),z}function b(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function T(I){let M=I.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function x(I){let M=I.target;M.removeEventListener("dispose",x),N(M)}function w(I){let M=n.get(I);if(M.__webglInit===void 0)return;let z=I.source,Q=f.get(z);if(Q){let j=Q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(I),Object.keys(Q).length===0&&f.delete(z)}n.remove(I)}function R(I){let M=n.get(I);r.deleteTexture(M.__webglTexture);let z=I.source,Q=f.get(z);delete Q[M.__cacheKey],a.memory.textures--}function N(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let j=0;j<M.__webglFramebuffer[Q].length;j++)r.deleteFramebuffer(M.__webglFramebuffer[Q][j]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=I.textures;for(let Q=0,j=z.length;Q<j;Q++){let ft=n.get(z[Q]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(z[Q])}n.remove(I)}let D=0;function U(){D=0}function C(){return D}function B(I){D=I}function W(){let I=D;return I>=i.maxTextures&&$t("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function k(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function K(I,M){let z=n.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let Q=I.image;if(Q===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,I,M);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function Y(I,M){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){_t(z,I,M);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function L(I,M){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){_t(z,I,M);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function tt(I,M){let z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){Vt(z,I,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}let vt={[tc]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[ec]:r.MIRRORED_REPEAT},wt={[dn]:r.NEAREST,[tm]:r.NEAREST_MIPMAP_NEAREST,[Io]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Rc]:r.LINEAR_MIPMAP_NEAREST,[tr]:r.LINEAR_MIPMAP_LINEAR},Ot={[rm]:r.NEVER,[cm]:r.ALWAYS,[sm]:r.LESS,[dh]:r.LEQUAL,[am]:r.EQUAL,[ph]:r.GEQUAL,[om]:r.GREATER,[lm]:r.NOTEQUAL};function Ht(I,M){if(M.type===wi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Rc||M.magFilter===Io||M.magFilter===tr||M.minFilter===rn||M.minFilter===Rc||M.minFilter===Io||M.minFilter===tr)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,vt[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,vt[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,vt[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,wt[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,wt[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==Io&&M.minFilter!==tr||M.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function kt(I,M){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",T));let Q=M.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let ft=k(M);if(ft!==I.__cacheKey){j[ft]===void 0&&(j[ft]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ft].usedTimes++;let ht=j[I.__cacheKey];ht!==void 0&&(j[I.__cacheKey].usedTimes--,ht.usedTimes===0&&R(M)),I.__cacheKey=ft,I.__webglTexture=j[ft].texture}return z}function $(I,M,z){return Math.floor(Math.floor(I/z)/M)}function it(I,M,z,Q){let ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,z,Q,M.data);else{ft.sort((Pt,pt)=>Pt.start-pt.start);let ht=0;for(let Pt=1;Pt<ft.length;Pt++){let pt=ft[ht],mt=ft[Pt],ut=pt.start+pt.count,zt=$(mt.start,M.width,4),Wt=$(pt.start,M.width,4);mt.start<=ut+1&&zt===Wt&&$(mt.start+mt.count-1,M.width,4)===zt?pt.count=Math.max(pt.count,mt.start+mt.count-pt.start):(++ht,ft[ht]=mt)}ft.length=ht+1;let nt=e.getParameter(r.UNPACK_ROW_LENGTH),et=e.getParameter(r.UNPACK_SKIP_PIXELS),gt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Pt=0,pt=ft.length;Pt<pt;Pt++){let mt=ft[Pt],ut=Math.floor(mt.start/4),zt=Math.ceil(mt.count/4),Wt=ut%M.width,P=Math.floor(ut/M.width),J=zt,H=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(r.UNPACK_SKIP_ROWS,P),e.texSubImage2D(r.TEXTURE_2D,0,Wt,P,J,H,z,Q,M.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,nt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,et),e.pixelStorei(r.UNPACK_SKIP_ROWS,gt)}}function _t(I,M,z){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);let j=kt(I,M),ft=M.source;e.bindTexture(Q,I.__webglTexture,r.TEXTURE0+z);let ht=n.get(ft);if(ft.version!==ht.__version||j===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let H=me.getPrimaries(me.workingColorSpace),lt=M.colorSpace===vr?null:me.getPrimaries(M.colorSpace),st=M.colorSpace===vr||H===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let et=p(M.image,!1,i.maxTextureSize);et=ne(M,et);let gt=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type),pt=v(M.internalFormat,gt,Pt,M.normalized,M.colorSpace,M.isVideoTexture);Ht(Q,M);let mt,ut=M.mipmaps,zt=M.isVideoTexture!==!0,Wt=ht.__version===void 0||j===!0,P=ft.dataReady,J=b(M,et);if(M.isDepthTexture)pt=S(M.format===$r,M.type),Wt&&(zt?e.texStorage2D(r.TEXTURE_2D,1,pt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,pt,et.width,et.height,0,gt,Pt,null));else if(M.isDataTexture)if(ut.length>0){zt&&Wt&&e.texStorage2D(r.TEXTURE_2D,J,pt,ut[0].width,ut[0].height);for(let H=0,lt=ut.length;H<lt;H++)mt=ut[H],zt?P&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,gt,Pt,mt.data):e.texImage2D(r.TEXTURE_2D,H,pt,mt.width,mt.height,0,gt,Pt,mt.data);M.generateMipmaps=!1}else zt?(Wt&&e.texStorage2D(r.TEXTURE_2D,J,pt,et.width,et.height),P&&it(M,et,gt,Pt)):e.texImage2D(r.TEXTURE_2D,0,pt,et.width,et.height,0,gt,Pt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&Wt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,J,pt,ut[0].width,ut[0].height,et.depth);for(let H=0,lt=ut.length;H<lt;H++)if(mt=ut[H],M.format!==Ti)if(gt!==null)if(zt){if(P)if(M.layerUpdates.size>0){let st=vf(mt.width,mt.height,M.format,M.type);for(let rt of M.layerUpdates){let ct=mt.data.subarray(rt*st/mt.data.BYTES_PER_ELEMENT,(rt+1)*st/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,rt,mt.width,mt.height,1,gt,ct)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,et.depth,gt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,pt,mt.width,mt.height,et.depth,0,mt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,et.depth,gt,Pt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,H,pt,mt.width,mt.height,et.depth,0,gt,Pt,mt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{zt&&Wt&&e.texStorage2D(r.TEXTURE_2D,J,pt,ut[0].width,ut[0].height);for(let H=0,lt=ut.length;H<lt;H++)mt=ut[H],M.format!==Ti?gt!==null?zt?P&&e.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,H,pt,mt.width,mt.height,0,mt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,mt.width,mt.height,gt,Pt,mt.data):e.texImage2D(r.TEXTURE_2D,H,pt,mt.width,mt.height,0,gt,Pt,mt.data)}else if(M.isDataArrayTexture)if(zt){if(Wt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,J,pt,et.width,et.height,et.depth),P)if(M.layerUpdates.size>0){let H=vf(et.width,et.height,M.format,M.type);for(let lt of M.layerUpdates){let st=et.data.subarray(lt*H/et.data.BYTES_PER_ELEMENT,(lt+1)*H/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,et.width,et.height,1,gt,Pt,st)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Pt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,et.width,et.height,et.depth,0,gt,Pt,et.data);else if(M.isData3DTexture)zt?(Wt&&e.texStorage3D(r.TEXTURE_3D,J,pt,et.width,et.height,et.depth),P&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Pt,et.data)):e.texImage3D(r.TEXTURE_3D,0,pt,et.width,et.height,et.depth,0,gt,Pt,et.data);else if(M.isFramebufferTexture){if(Wt)if(zt)e.texStorage2D(r.TEXTURE_2D,J,pt,et.width,et.height);else{let H=et.width,lt=et.height;for(let st=0;st<J;st++)e.texImage2D(r.TEXTURE_2D,st,pt,H,lt,0,gt,Pt,null),H>>=1,lt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let H=r.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),et.parentNode!==H){H.appendChild(et),d.add(M),H.onpaint=lt=>{let st=lt.changedElements;for(let rt of d)st.includes(rt.image)&&(rt.needsUpdate=!0)},H.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{let st=r.RGBA,rt=r.RGBA,ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,st,rt,ct,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(zt&&Wt){let H=Qt(ut[0]);e.texStorage2D(r.TEXTURE_2D,J,pt,H.width,H.height)}for(let H=0,lt=ut.length;H<lt;H++)mt=ut[H],zt?P&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,gt,Pt,mt):e.texImage2D(r.TEXTURE_2D,H,pt,gt,Pt,mt);M.generateMipmaps=!1}else if(zt){if(Wt){let H=Qt(et);e.texStorage2D(r.TEXTURE_2D,J,pt,H.width,H.height)}P&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Pt,et)}else e.texImage2D(r.TEXTURE_2D,0,pt,gt,Pt,et);m(M)&&y(Q),ht.__version=ft.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Vt(I,M,z){if(M.image.length!==6)return;let Q=kt(I,M),j=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+z);let ft=n.get(j);if(j.version!==ft.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);let ht=me.getPrimaries(me.workingColorSpace),nt=M.colorSpace===vr?null:me.getPrimaries(M.colorSpace),et=M.colorSpace===vr||ht===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let gt=M.isCompressedTexture||M.image[0].isCompressedTexture,Pt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!gt&&!Pt?pt[rt]=p(M.image[rt],!0,i.maxCubemapSize):pt[rt]=Pt?M.image[rt].image:M.image[rt],pt[rt]=ne(M,pt[rt]);let mt=pt[0],ut=s.convert(M.format,M.colorSpace),zt=s.convert(M.type),Wt=v(M.internalFormat,ut,zt,M.normalized,M.colorSpace),P=M.isVideoTexture!==!0,J=ft.__version===void 0||Q===!0,H=j.dataReady,lt=b(M,mt);Ht(r.TEXTURE_CUBE_MAP,M);let st;if(gt){P&&J&&e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Wt,mt.width,mt.height);for(let rt=0;rt<6;rt++){st=pt[rt].mipmaps;for(let ct=0;ct<st.length;ct++){let at=st[ct];M.format!==Ti?ut!==null?P?H&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct,0,0,at.width,at.height,ut,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct,Wt,at.width,at.height,0,at.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct,0,0,at.width,at.height,ut,zt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct,Wt,at.width,at.height,0,ut,zt,at.data)}}}else{if(st=M.mipmaps,P&&J){st.length>0&&lt++;let rt=Qt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Pt){P?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,ut,zt,pt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,pt[rt].width,pt[rt].height,0,ut,zt,pt[rt].data);for(let ct=0;ct<st.length;ct++){let Mt=st[ct].image[rt].image;P?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct+1,0,0,Mt.width,Mt.height,ut,zt,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct+1,Wt,Mt.width,Mt.height,0,ut,zt,Mt.data)}}else{P?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ut,zt,pt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,ut,zt,pt[rt]);for(let ct=0;ct<st.length;ct++){let at=st[ct];P?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct+1,0,0,ut,zt,at.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct+1,Wt,ut,zt,at.image[rt])}}}m(M)&&y(r.TEXTURE_CUBE_MAP),ft.__version=j.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function dt(I,M,z,Q,j,ft){let ht=s.convert(z.format,z.colorSpace),nt=s.convert(z.type),et=v(z.internalFormat,ht,nt,z.normalized,z.colorSpace),gt=n.get(M),Pt=n.get(z);if(Pt.__renderTarget=M,!gt.__hasExternalTextures){let pt=Math.max(1,M.width>>ft),mt=Math.max(1,M.height>>ft);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,et,pt,mt,M.depth,0,ht,nt,null):e.texImage2D(j,ft,et,pt,mt,0,ht,nt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),jt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,Pt.__webglTexture,0,Dt(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,Pt.__webglTexture,ft),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(I,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){let Q=M.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,ft=S(M.stencilBuffer,j),ht=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),ft,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),ft,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ft,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,I)}else{let Q=M.textures;for(let j=0;j<Q.length;j++){let ft=Q[j],ht=s.convert(ft.format,ft.colorSpace),nt=s.convert(ft.type),et=v(ft.internalFormat,ht,nt,ft.normalized,ft.colorSpace);jt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),et,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),et,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,et,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(I,M,z){let Q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,M.depthTexture);let gt=s.convert(M.depthTexture.format),Pt=s.convert(M.depthTexture.type),pt;M.depthTexture.format===Zi?pt=r.DEPTH_COMPONENT24:M.depthTexture.format===$r&&(pt=r.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pt,M.width,M.height,0,gt,Pt,null)}}else K(M.depthTexture,0);let ft=j.__webglTexture,ht=Dt(M),nt=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,et=M.depthTexture.format===$r?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)jt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,nt,ft,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,et,nt,ft,0);else if(M.depthTexture.format===$r)jt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,nt,ft,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,et,nt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(I){let M=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Q}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let Q=0;Q<6;Q++)Nt(M.__webglFramebuffer[Q],I,Q);else{let Q=I.texture.mipmaps;Q&&Q.length>0?Nt(M.__webglFramebuffer[0],I,0):Nt(M.__webglFramebuffer,I,0)}else if(z){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=r.createRenderbuffer(),Bt(M.__webglDepthbuffer[Q],I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ft)}}else{let Q=I.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Bt(M.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ft)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(I,M,z){let Q=n.get(I);M!==void 0&&dt(Q.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Tt(I)}function Ct(I){let M=I.texture,z=n.get(I),Q=n.get(M);I.addEventListener("dispose",x);let j=I.textures,ft=I.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[nt]=[];for(let et=0;et<M.mipmaps.length;et++)z.__webglFramebuffer[nt][et]=r.createFramebuffer()}else z.__webglFramebuffer[nt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let nt=0;nt<M.mipmaps.length;nt++)z.__webglFramebuffer[nt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ht)for(let nt=0,et=j.length;nt<et;nt++){let gt=n.get(j[nt]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&jt(I)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let nt=0;nt<j.length;nt++){let et=j[nt];z.__webglColorRenderbuffer[nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[nt]);let gt=s.convert(et.format,et.colorSpace),Pt=s.convert(et.type),pt=v(et.internalFormat,gt,Pt,et.normalized,et.colorSpace,I.isXRRenderTarget===!0),mt=Dt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,pt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,z.__webglColorRenderbuffer[nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,M);for(let nt=0;nt<6;nt++)if(M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)dt(z.__webglFramebuffer[nt][et],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,et);else dt(z.__webglFramebuffer[nt],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(M)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let nt=0,et=j.length;nt<et;nt++){let gt=j[nt],Pt=n.get(gt),pt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Pt.__webglTexture),Ht(pt,gt),dt(z.__webglFramebuffer,I,gt,r.COLOR_ATTACHMENT0+nt,pt,0),m(gt)&&y(pt)}e.unbindTexture()}else{let nt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(nt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(nt,Q.__webglTexture),Ht(nt,M),M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)dt(z.__webglFramebuffer[et],I,M,r.COLOR_ATTACHMENT0,nt,et);else dt(z.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,nt,0);m(M)&&y(nt),e.unbindTexture()}I.depthBuffer&&Tt(I)}function V(I){let M=I.textures;for(let z=0,Q=M.length;z<Q;z++){let j=M[z];if(m(j)){let ft=A(I),ht=n.get(j).__webglTexture;e.bindTexture(ft,ht),y(ft),e.unbindTexture()}}}let Kt=[],Zt=[];function ee(I){if(I.samples>0){if(jt(I)===!1){let M=I.textures,z=I.width,Q=I.height,j=r.COLOR_BUFFER_BIT,ft=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(I),nt=M.length>1;if(nt)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=I.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let Pt=n.get(M[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pt,0)}r.blitFramebuffer(0,0,z,Q,0,0,z,Q,j,r.NEAREST),c===!0&&(Kt.length=0,Zt.length=0,Kt.push(r.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Kt.push(ft),Zt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),nt)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let Pt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Dt(I){return Math.min(i.maxSamples,I.samples)}function jt(I){let M=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(I){let M=a.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function ne(I,M){let z=I.colorSpace,Q=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==co&&z!==vr&&(me.getTransfer(z)===ye?(Q!==Ti||j!==Kn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",z)),M}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=tt,this.rebindTextures=qt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wM(r,t){function e(n,i=vr){let s,a=me.getTransfer(i);if(n===Kn)return r.UNSIGNED_BYTE;if(n===Ic)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lf)return r.BYTE;if(n===cf)return r.SHORT;if(n===Ma)return r.UNSIGNED_SHORT;if(n===Pc)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Vi)return r.HALF_FLOAT;if(n===ff)return r.ALPHA;if(n===df)return r.RGB;if(n===Ti)return r.RGBA;if(n===Zi)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Dc)return r.RED;if(n===Nc)return r.RED_INTEGER;if(n===Jr)return r.RG;if(n===Uc)return r.RG_INTEGER;if(n===Fc)return r.RGBA_INTEGER;if(n===Lo||n===Do||n===No||n===Uo)if(a===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===zc||n===kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Gc||n===Hc||n===Qc||n===Wc||n===Fo||n===Xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Gc)return a===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qc)return s.COMPRESSED_R11_EAC;if(n===Wc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fo)return s.COMPRESSED_RG11_EAC;if(n===Xc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===th||n===eh||n===nh||n===ih||n===rh||n===sh||n===ah)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sh)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ah)return a===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===lh||n===ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oh)return a===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===uh||n===Oo||n===fh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var TM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
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

}`,Bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new oi({vertexShader:TM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zf=class extends $i{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Bf,m={},y=e.getContextAttributes(),A=null,v=null,S=[],b=[],T=new Yt,x=null,w=null,R=new gn;R.viewport=new ze;let N=new gn;N.viewport=new ze;let D=[R,N],U=new wc,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=S[$];return it===void 0&&(it=new pa,S[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=S[$];return it===void 0&&(it=new pa,S[$]=it),it.getGripSpace()},this.getHand=function($){let it=S[$];return it===void 0&&(it=new pa,S[$]=it),it.getHandSpace()};function W($){let it=b.indexOf($.inputSource);if(it===-1)return;let _t=S[it];_t!==void 0&&(_t.update($.inputSource,$.frame,l||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let $=0;$<S.length;$++){let it=b[$];it!==null&&(b[$]=null,S[$].disconnect(it))}C=null,B=null,p.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Vt=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?$r:Zi,Vt=y.stencil?Sa:ki);let Bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new $n(u.textureWidth,u.textureHeight,{format:Ti,type:Kn,depthTexture:new Hr(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $n(f.framebufferWidth,f.framebufferHeight,{format:Ti,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K($){for(let it=0;it<$.removed.length;it++){let _t=$.removed[it],Vt=b.indexOf(_t);Vt>=0&&(b[Vt]=null,S[Vt].disconnect(_t))}for(let it=0;it<$.added.length;it++){let _t=$.added[it],Vt=b.indexOf(_t);if(Vt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=b.length){b.push(_t),Vt=Bt;break}else if(b[Bt]===null){b[Bt]=_t,Vt=Bt;break}if(Vt===-1)break}let dt=S[Vt];dt&&dt.connect(_t)}}let Y=new G,L=new G;function tt($,it,_t){Y.setFromMatrixPosition(it.matrixWorld),L.setFromMatrixPosition(_t.matrixWorld);let Vt=Y.distanceTo(L),dt=it.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,Nt=dt[14]/(dt[10]-1),Tt=dt[14]/(dt[10]+1),qt=(dt[9]+1)/dt[5],Ct=(dt[9]-1)/dt[5],V=(dt[8]-1)/dt[0],Kt=(Bt[8]+1)/Bt[0],Zt=Nt*V,ee=Nt*Kt,Dt=Vt/(-V+Kt),jt=Dt*-V;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(jt),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),dt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let F=Nt+Dt,ne=Tt+Dt,Qt=Zt-jt,I=ee+(Vt-jt),M=qt*Tt/ne*F,z=Ct*Tt/ne*F;$.projectionMatrix.makePerspective(Qt,I,M,z,F,ne),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function vt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let it=$.near,_t=$.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),U.near=N.near=R.near=it,U.far=N.far=R.far=_t,(C!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,B=U.far),U.layers.mask=$.layers.mask|6,R.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Vt=$.parent,dt=U.cameras;vt(U,Vt);for(let Bt=0;Bt<dt.length;Bt++)vt(dt[Bt],Vt);dt.length===2?tt(U,R,N):U.projectionMatrix.copy(R.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),wt($,U,Vt)};function wt($,it,_t){_t===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ic*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Ot=null;function Ht($,it){if(h=it.getViewerPose(l||a),g=it,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Vt=!1;_t.length!==U.cameras.length&&(U.cameras.length=0,Vt=!0);for(let Tt=0;Tt<_t.length;Tt++){let qt=_t[Tt],Ct=null;if(f!==null)Ct=f.getViewport(qt);else{let Kt=d.getViewSubImage(u,qt);Ct=Kt.viewport,Tt===0&&(t.setRenderTargetTextures(v,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(v))}let V=D[Tt];V===void 0&&(V=new gn,V.layers.enable(Tt),V.viewport=new ze,D[Tt]=V),V.matrix.fromArray(qt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(qt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Tt===0&&(U.matrix.copy(V.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Vt===!0&&U.cameras.push(V)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Tt=d.getDepthInformation(_t[0]);Tt&&Tt.isValid&&Tt.texture&&p.init(Tt,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Tt=0;Tt<_t.length;Tt++){let qt=_t[Tt].camera;if(qt){let Ct=m[qt];Ct||(Ct=new vo,m[qt]=Ct);let V=d.getCameraImage(qt);Ct.sourceTexture=V}}}}for(let _t=0;_t<S.length;_t++){let Vt=b[_t],dt=S[_t];Vt!==null&&dt!==void 0&&dt.update(Vt,it,l||a)}Ot&&Ot($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let kt=new km;kt.setAnimationLoop(Ht),this.setAnimationLoop=function($){Ot=$},this.dispose=function(){}}},AM=new Me,Xm=new te;Xm.set(-1,0,0,0,1,0,0,0,1);function CM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,gf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),A=y.envMap,v=y.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function RM(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function l(v,S){let b=i[v.id];b===void 0&&(p(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",y));let T=S.program;n.updateUBOMapping(v,T);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let b=r.createBuffer(),T=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,T,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],b=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,w=b.length;x<w;x++){let R=b[x];if(Array.isArray(R))for(let N=0,D=R.length;N<D;N++)f(R[N],x,N,T);else f(R,x,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,b,T){if(_(v,S,b,T)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let D=w[N],U=m(D);g(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,T){let x=v.value,w=S+"_"+b;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let R=T[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(v){let S=v.uniforms,b=0,T=16;for(let w=0,R=S.length;w<R;w++){let N=Array.isArray(S[w])?S[w]:[S[w]];for(let D=0,U=N.length;D<U;D++){let C=N[D],B=Array.isArray(C.value)?C.value:[C.value];for(let W=0,k=B.length;W<k;W++){let K=B[W],Y=m(K),L=b%T,tt=L%Y.boundary,vt=L+tt;b+=tt,vt!==0&&T-vt<Y.storage&&(b+=T-vt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=Y.storage}}}let x=b%T;return x>0&&(b+=T-x),v.__size=b,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:A}}var PM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),er=null;function IM(){return er===null&&(er=new _o(PM,16,16,Jr,Vi),er.name="DFG_LUT",er.minFilter=rn,er.magFilter=rn,er.wrapS=Yi,er.wrapT=Yi,er.generateMipmaps=!1,er.needsUpdate=!0),er}var vh=class{constructor(t={}){let{canvas:e=um(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Kn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Fc,Uc,Nc]),m=new Set([Kn,ki,Ma,Sa,Ic,Lc]),y=new Uint32Array(4),A=new Int32Array(4),v=new G,S=null,b=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,D=null,U=null,C=null,B=null;this._outputColorSpace=Fn;let W=0,k=0,K=null,Y=-1,L=null,tt=new ze,vt=new ze,wt=null,Ot=new Et(0),Ht=0,kt=e.width,$=e.height,it=1,_t=null,Vt=null,dt=new ze(0,0,kt,$),Bt=new ze(0,0,kt,$),Nt=!1,Tt=new ma,qt=!1,Ct=!1,V=new Me,Kt=new G,Zt=new ze,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function jt(){return K===null?it:1}let F=n;function ne(E,O){return e.getContext(E,O)}let Qt,I,M,z,Q,j,ft,ht,nt,et,gt,Pt,pt,mt,ut,zt,Wt,P,J,H,lt,st,rt;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",It,!1),F===null){let O="webgl2";if(F=ne(O,E),F===null)throw ne(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(E){throw e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Jt("WebGLRenderer: "+E.message),E}function ct(){Qt=new Bv(F),Qt.init(),lt=new wM(F,Qt),I=new Cv(F,Qt,t,lt),M=new SM(F,Qt),I.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),U=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),z=new Vv(F),Q=new lM,j=new bM(F,Qt,M,Q,I,lt,z),ft=new Ov(R),ht=new H_(F),st=new Ev(F,ht),nt=new zv(F,ht,z,st),et=new Hv(F,nt,ht,st,z),P=new Gv(F,I,j),ut=new Rv(Q),gt=new oM(R,ft,Qt,I,st,ut),Pt=new CM(R,Q),pt=new hM,mt=new gM(Qt),Wt=new Tv(R,ft,M,et,g,c),zt=new MM(R,et,I),rt=new RM(F,z,I,M),J=new Av(F,Qt,z),H=new kv(F,Qt,z),z.programs=gt.programs,R.capabilities=I,R.extensions=Qt,R.properties=Q,R.renderLists=pt,R.shadowMap=zt,R.state=M,R.info=z}_!==Kn&&(w=new Wv(_,e.width,e.height,o,i,s));let at=new zf(R,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(kt,$,!1))},this.getSize=function(E){return E.set(kt,$)},this.setSize=function(E,O,Z=!0){if(at.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=E,$=O,e.width=Math.floor(E*it),e.height=Math.floor(O*it),Z===!0&&(e.style.width=E+"px",e.style.height=O+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(kt*it,$*it).floor()},this.setDrawingBufferSize=function(E,O,Z){kt=E,$=O,it=Z,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===Kn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,O,Z,X){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,O,Z,X),M.viewport(tt.copy(dt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(Bt)},this.setScissor=function(E,O,Z,X){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,O,Z,X),M.scissor(vt.copy(Bt).multiplyScalar(it).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){M.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Z=!0){let X=0;if(E){let q=!1;if(K!==null){let xt=K.texture.format;q=p.has(xt)}if(q){let xt=K.texture.type,Rt=m.has(xt),bt=Wt.getClearColor(),Ut=Wt.getClearAlpha(),Gt=bt.r,se=bt.g,fe=bt.b;Rt?(y[0]=Gt,y[1]=se,y[2]=fe,y[3]=Ut,F.clearBufferuiv(F.COLOR,0,y)):(A[0]=Gt,A[1]=se,A[2]=fe,A[3]=Ut,F.clearBufferiv(F.COLOR,0,A))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Wt.dispose(),pt.dispose(),mt.dispose(),Q.dispose(),ft.dispose(),et.dispose(),st.dispose(),rt.dispose(),gt.dispose(),at.dispose(),at.removeEventListener("sessionstart",we),at.removeEventListener("sessionend",Te),ue.stop()};function Mt(E){E.preventDefault(),mf("WebGLRenderer: Context Lost."),N=!0}function ot(){mf("WebGLRenderer: Context Restored."),N=!1;let E=z.autoReset,O=zt.enabled,Z=zt.autoUpdate,X=zt.needsUpdate,q=zt.type;ct(),z.autoReset=E,zt.enabled=O,zt.autoUpdate=Z,zt.needsUpdate=X,zt.type=q}function It(E){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function St(E){let O=E.target;O.removeEventListener("dispose",St),Xt(O)}function Xt(E){Ve(E),Q.remove(E)}function Ve(E){let O=Q.get(E).programs;O!==void 0&&(O.forEach(function(Z){gt.releaseProgram(Z)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Z,X,q,xt){O===null&&(O=ee);let Rt=q.isMesh&&q.matrixWorld.determinantAffine()<0,bt=un(E,O,Z,X,q);M.setMaterial(X,Rt);let Ut=Z.index,Gt=1;if(X.wireframe===!0){if(Ut=nt.getWireframeAttribute(Z),Ut===void 0)return;Gt=2}let se=Z.drawRange,fe=Z.attributes.position,Ft=se.start*Gt,ve=(se.start+se.count)*Gt;xt!==null&&(Ft=Math.max(Ft,xt.start*Gt),ve=Math.min(ve,(xt.start+xt.count)*Gt)),Ut!==null?(Ft=Math.max(Ft,0),ve=Math.min(ve,Ut.count)):fe!=null&&(Ft=Math.max(Ft,0),ve=Math.min(ve,fe.count));let je=ve-Ft;if(je<0||je===1/0)return;st.setup(q,X,bt,Z,Ut);let Ue,Pe=J;if(Ut!==null&&(Ue=ht.get(Ut),Pe=H,Pe.setIndex(Ue)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*jt()),Pe.setMode(F.LINES)):Pe.setMode(F.TRIANGLES);else if(q.isLine){let wn=X.linewidth;wn===void 0&&(wn=1),M.setLineWidth(wn*jt()),q.isLineSegments?Pe.setMode(F.LINES):q.isLineLoop?Pe.setMode(F.LINE_LOOP):Pe.setMode(F.LINE_STRIP)}else q.isPoints?Pe.setMode(F.POINTS):q.isSprite&&Pe.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let wn=q._multiDrawStarts,At=q._multiDrawCounts,Un=q._multiDrawCount,_e=Ut?ht.get(Ut).bytesPerElement:1,vi=Q.get(X).currentProgram.getUniforms();for(let Xi=0;Xi<Un;Xi++)vi.setValue(F,"_gl_DrawID",Xi),Pe.render(wn[Xi]/_e,At[Xi])}else if(q.isInstancedMesh)Pe.renderInstances(Ft,je,q.count);else if(Z.isInstancedBufferGeometry){let wn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,At=Math.min(Z.instanceCount,wn);Pe.renderInstances(Ft,je,At)}else Pe.render(Ft,je)};function re(E,O,Z,X){D!==null&&E.isNodeMaterial&&D.setObject(X,E),qt===!0&&ut.setState(E,Z,!1),E.transparent===!0&&E.side===Jn&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,Ne(E,O,X),E.side=Yr,E.needsUpdate=!0,Ne(E,O,X),E.side=Jn):Ne(E,O,X)}this.compile=function(E,O,Z=null){Z===null&&(Z=E),D!==null&&D.renderStart(E,O,Z),b=mt.get(Z),b.init(O),x.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==Z&&E.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ct=this.localClippingEnabled,qt=ut.init(this.clippingPlanes,Ct),qt===!0&&ut.setGlobalState(this.clippingPlanes,O),D!==null&&zt.render(b.state.shadowsArray,Z,O);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let xt=q.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){let bt=xt[Rt];re(bt,Z,O,q),X.add(bt)}else re(xt,Z,O,q),X.add(xt)}),b=x.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(E,O,Z=null){let X=this.compile(E,O,Z);return new Promise(q=>{function xt(){if(X.forEach(function(Rt){let Ut=Q.get(Rt).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(Rt)}),X.size===0){q(E);return}setTimeout(xt,10)}Qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ce=null;function Ze(E){ce&&ce(E)}function we(){ue.stop()}function Te(){ue.start()}let ue=new km;ue.setAnimationLoop(Ze),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(E){ce=E,at.setAnimationLoop(E),E===null?ue.stop():ue.start()},at.addEventListener("sessionstart",we),at.addEventListener("sessionend",Te),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(E,O);let Z=at.enabled===!0&&at.isPresenting===!0,X=w!==null&&(K===null||Z)&&w.begin(R,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,K),b=mt.get(E,x.length),b.init(O),b.state.textureUnits=j.getTextureUnits(),x.push(b),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Tt.setFromProjectionMatrix(V,Oi,O.reversedDepth),Ct=this.localClippingEnabled,qt=ut.init(this.clippingPlanes,Ct),S=pt.get(E,T.length),S.init(),T.push(S),at.enabled===!0&&at.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&cn(Rt,O,-1/0,R.sortObjects)}cn(E,O,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(_t,Vt),Dt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Dt&&Wt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&ut.beginShadows();let q=b.state.shadowsArray;if(zt.render(q,E,O),qt===!0&&ut.endShadows(),(X&&w.hasRenderPass())===!1){let Rt=S.opaque,bt=S.transmissive;if(b.setupLights(),O.isArrayCamera){let Ut=O.cameras;if(bt.length>0)for(let Gt=0,se=Ut.length;Gt<se;Gt++){let fe=Ut[Gt];Re(Rt,bt,E,fe)}Dt&&Wt.render(E);for(let Gt=0,se=Ut.length;Gt<se;Gt++){let fe=Ut[Gt];Ee(S,E,fe,fe.viewport)}}else bt.length>0&&Re(Rt,bt,E,O),Dt&&Wt.render(E),Ee(S,E,O)}K!==null&&k===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),X&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),st.resetDefaultState(),Y=-1,L=null,x.pop(),x.length>0?(b=x[x.length-1],j.setTextureUnits(b.state.textureUnits),qt===!0&&ut.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,D!==null&&D.renderEnd()};function cn(E,O,Z,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Tt)){X&&Zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);let Rt=et.update(E),bt=E.material;bt.visible&&S.push(E,Rt,bt,Z,Zt.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Tt))){let Rt=et.update(E),bt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Zt.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Zt.copy(Rt.boundingSphere.center)),Zt.applyMatrix4(E.matrixWorld).applyMatrix4(V)),Array.isArray(bt)){let Ut=Rt.groups;for(let Gt=0,se=Ut.length;Gt<se;Gt++){let fe=Ut[Gt],Ft=bt[fe.materialIndex];Ft&&Ft.visible&&S.push(E,Rt,Ft,Z,Zt.z,fe,O)}}else bt.visible&&S.push(E,Rt,bt,Z,Zt.z,null,O)}}let xt=E.children;for(let Rt=0,bt=xt.length;Rt<bt;Rt++)cn(xt[Rt],O,Z,X)}function Ee(E,O,Z,X){let{opaque:q,transmissive:xt,transparent:Rt}=E;b.setupLightsView(Z),qt===!0&&ut.setGlobalState(R.clippingPlanes,Z),X&&M.viewport(tt.copy(X)),q.length>0&&hn(q,O,Z),xt.length>0&&hn(xt,O,Z),Rt.length>0&&hn(Rt,O,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Re(E,O,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let Ft=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new $n(1,1,{generateMipmaps:!0,type:Ft?Vi:Kn,minFilter:tr,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let xt=b.state.transmissionRenderTarget[X.id],Rt=X.viewport||tt;xt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Ut=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(Ot),Ht=R.getClearAlpha(),Ht<1&&R.setClearColor(16777215,.5),R.clear(),Dt&&Wt.render(Z);let se=R.toneMapping;R.toneMapping=zi;let fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),qt===!0&&ut.setGlobalState(R.clippingPlanes,X),hn(E,Z,X),j.updateMultisampleRenderTarget(xt),j.updateRenderTargetMipmap(xt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ve=0,je=O.length;ve<je;ve++){let Ue=O[ve],{object:Pe,geometry:wn,material:At,group:Un}=Ue;if(At.side===Jn&&Pe.layers.test(X.layers)){let _e=At.side;At.side=vn,At.needsUpdate=!0,Oe(Pe,Z,X,wn,At,Un),At.side=_e,At.needsUpdate=!0,Ft=!0}}Ft===!0&&(j.updateMultisampleRenderTarget(xt),j.updateRenderTargetMipmap(xt))}R.setRenderTarget(bt,Ut,Gt),R.setClearColor(Ot,Ht),fe!==void 0&&(X.viewport=fe),R.toneMapping=se}function hn(E,O,Z){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,xt=E.length;q<xt;q++){let Rt=E[q],{object:bt,geometry:Ut,group:Gt}=Rt,se=Rt.material;se.allowOverride===!0&&X!==null&&(se=X),bt.layers.test(Z.layers)&&Oe(bt,O,Z,Ut,se,Gt)}}function Oe(E,O,Z,X,q,xt){D!==null&&q.isNodeMaterial&&D.setObject(E,q),E.onBeforeRender(R,O,Z,X,q,xt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(R,O,Z,X,E,xt),q.transparent===!0&&q.side===Jn&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,E,xt),q.side=Yr,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,E,xt),q.side=Jn):R.renderBufferDirect(Z,O,X,q,E,xt),E.onAfterRender(R,O,Z,X,q,xt)}function Ne(E,O,Z){O.isScene!==!0&&(O=ee);let X=Q.get(E),q=b.state.lights,xt=b.state.shadowsArray,Rt=q.state.version,bt=gt.getParameters(E,q.state,xt,O,Z,b.state.lightProbeGridArray),Ut=gt.getProgramCacheKey(bt),Gt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ft.get(E.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",St),Gt=new Map,X.programs=Gt);let fe=Gt.get(Ut);if(fe!==void 0){if(X.currentProgram===fe&&X.lightsStateVersion===Rt)return Wi(E,bt),fe}else bt.uniforms=gt.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Z,bt),E.onBeforeCompile(bt,R),fe=gt.acquireProgram(bt,Ut),Gt.set(Ut,fe),X.uniforms=bt.uniforms;let Ft=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=ut.uniform),Wi(E,bt),X.needsLights=xi(E),X.lightsStateVersion=Rt,X.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.sunLights.value=q.state.sun,Ft.sunLightShadows.value=q.state.sunShadow,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.sunShadowMatrix.value=q.state.sunShadowMatrix,Ft.sunShadowCascade.value=q.state.sunShadowCascade,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=fe,X.uniformsList=null,fe}function We(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ta.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Wi(E,O){let Z=Q.get(E);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Ws(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Z=0,X=E.length;Z<X;Z++){let q=E[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function un(E,O,Z,X,q){O.isScene!==!0&&(O=ee),j.resetTextureUnits();let xt=O.fog,Rt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,bt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:me.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Gt=ft.get(X.envMap||Rt,Ut),se=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,fe=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!Z.morphAttributes.position,ve=!!Z.morphAttributes.normal,je=!!Z.morphAttributes.color,Ue=zi;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ue=R.toneMapping);let Pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wn=Pe!==void 0?Pe.length:0,At=Q.get(X),Un=b.state.lights;if(qt===!0&&(Ct===!0||E!==L)){let De=E===L&&X.id===Y;ut.setState(X,E,De)}let _e=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Un.state.version||At.outputColorSpace!==bt||q.isBatchedMesh&&At.batching===!1||!q.isBatchedMesh&&At.batching===!0||q.isBatchedMesh&&At.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&At.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&At.instancing===!1||!q.isInstancedMesh&&At.instancing===!0||q.isSkinnedMesh&&At.skinning===!1||!q.isSkinnedMesh&&At.skinning===!0||q.isInstancedMesh&&At.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&At.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&At.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&At.instancingMorph===!1&&q.morphTexture!==null||At.envMap!==Gt||X.fog===!0&&At.fog!==xt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ut.numPlanes||At.numIntersection!==ut.numIntersection)||At.vertexAlphas!==se||At.vertexTangents!==fe||At.morphTargets!==Ft||At.morphNormals!==ve||At.morphColors!==je||At.toneMapping!==Ue||At.morphTargetsCount!==wn||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,At.__version=X.version);let vi=At.currentProgram;_e===!0&&(vi=Ne(X,O,q),D&&X.isNodeMaterial&&D.onUpdateProgram(X,vi,At));let Xi=!1,Lr=!1,qs=!1,Ae=vi.getUniforms(),Je=At.uniforms;if(M.useProgram(vi.program)&&(Xi=!0,Lr=!0,qs=!0),X.id!==Y&&(Y=X.id,Lr=!0),At.needsLights){let De=Ws(b.state.lightProbeGridArray,q);At.lightProbeGrid!==De&&(At.lightProbeGrid=De,Lr=!0)}if(Xi||L!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ae.setValue(F,"projectionMatrix",E.projectionMatrix),Ae.setValue(F,"viewMatrix",E.matrixWorldInverse);let Nr=Ae.map.cameraPosition;Nr!==void 0&&Nr.setValue(F,Kt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Ae.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),L!==E&&(L=E,Lr=!0,qs=!0)}if(At.needsLights&&(Un.state.sunShadowMap.length>0&&Ae.setValue(F,"sunShadowMap",Un.state.sunShadowMap,j),Un.state.directionalShadowMap.length>0&&Ae.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,j),Un.state.spotShadowMap.length>0&&Ae.setValue(F,"spotShadowMap",Un.state.spotShadowMap,j),Un.state.pointShadowMap.length>0&&Ae.setValue(F,"pointShadowMap",Un.state.pointShadowMap,j)),q.isSkinnedMesh){Ae.setOptional(F,q,"bindMatrix"),Ae.setOptional(F,q,"bindMatrixInverse");let De=q.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ae.setValue(F,"boneTexture",De.boneTexture,j))}q.isBatchedMesh&&(Ae.setOptional(F,q,"batchingTexture"),Ae.setValue(F,"batchingTexture",q._matricesTexture,j),Ae.setOptional(F,q,"batchingIdTexture"),Ae.setValue(F,"batchingIdTexture",q._indirectTexture,j),Ae.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ae.setValue(F,"batchingColorTexture",q._colorsTexture,j));let Dr=Z.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&P.update(q,Z,vi),(Lr||At.receiveShadow!==q.receiveShadow)&&(At.receiveShadow=q.receiveShadow,Ae.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=IM()),Lr){if(Ae.setValue(F,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&$e(Je,qs),xt&&X.fog===!0&&Pt.refreshFogUniforms(Je,xt),Pt.refreshMaterialUniforms(Je,X,it,$,b.state.transmissionRenderTarget[E.id]),At.needsLights&&At.lightProbeGrid){let De=At.lightProbeGrid;Je.probesSH.value=De.texture,Je.probesMin.value.copy(De.boundingBox.min),Je.probesMax.value.copy(De.boundingBox.max),Je.probesResolution.value.copy(De.resolution)}Ta.upload(F,We(At),Je,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ta.upload(F,We(At),Je,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(F,"center",q.center),Ae.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ae.setValue(F,"normalMatrix",q.normalMatrix),Ae.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let De=X.uniformsGroups;for(let Nr=0,Ys=De.length;Nr<Ys;Nr++){let op=De[Nr];rt.update(op,vi),rt.bind(op,vi)}}return vi}function $e(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function xi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,O,Z){let X=Q.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Q.get(E.texture).__webglTexture=O,Q.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Z=Q.get(E);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Z=0){K=E,W=O,k=Z;let X=null,q=!1,xt=!1;if(E){let bt=Q.get(E);if(bt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,bt.__webglFramebuffer),tt.copy(E.viewport),vt.copy(E.scissor),wt=E.scissorTest,M.viewport(tt),M.scissor(vt),M.setScissorTest(wt),Y=-1;return}else if(bt.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(bt.__hasExternalTextures)j.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(bt.__boundDepthTexture!==se){if(se!==null&&Q.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(xt=!0);let Gt=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?X=Gt[O][Z]:X=Gt[O],q=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?X=Q.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?X=Gt[Z]:X=Gt,tt.copy(E.viewport),vt.copy(E.scissor),wt=E.scissorTest}else tt.copy(dt).multiplyScalar(it).floor(),vt.copy(Bt).multiplyScalar(it).floor(),wt=Nt;if(Z!==0&&(X=U),M.bindFramebuffer(F.FRAMEBUFFER,X)&&M.drawBuffers(E,X),M.viewport(tt),M.scissor(vt),M.setScissorTest(wt),q){let bt=Q.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,Z)}else if(xt){let bt=O;for(let Ut=0;Ut<E.textures.length;Ut++){let Gt=Q.get(E.textures[Ut]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ut,Gt.__webglTexture,Z,bt)}}else if(E!==null&&Z!==0){let bt=Q.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,Z)}Y=-1};function Xs(E){let O=Q.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=I.textureFormatReadable(E.format),O.__typeReadable=I.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Z,X,q,xt,Rt,bt=0){if(!(E&&E.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){M.bindFramebuffer(F.FRAMEBUFFER,Ut);try{let Gt=E.textures[bt],se=Gt.format,fe=Gt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Ft=Xs(Gt);if(Ft.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&Z>=0&&Z<=E.height-q&&F.readPixels(O,Z,X,q,lt.convert(se),lt.convert(fe),xt)}finally{let Gt=K!==null?Q.get(K).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,O,Z,X,q,xt,Rt,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut)if(O>=0&&O<=E.width-X&&Z>=0&&Z<=E.height-q){M.bindFramebuffer(F.FRAMEBUFFER,Ut);let Gt=E.textures[bt],se=Gt.format,fe=Gt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Ft=Xs(Gt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ve),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(O,Z,X,q,lt.convert(se),lt.convert(fe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let je=K!==null?Q.get(K).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,je);let Ue=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dm(F,Ue,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ve),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ve),F.deleteSync(Ue),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(E.image.width*X),xt=Math.floor(E.image.height*X),Rt=O!==null?O.x:0,bt=O!==null?O.y:0;j.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Rt,bt,q,xt),M.unbindTexture()},this.copyTextureToTexture=function(E,O,Z=null,X=null,q=0,xt=0){let Rt,bt,Ut,Gt,se,fe,Ft,ve,je,Ue=E.isCompressedTexture?E.mipmaps[xt]:E.image;if(Z!==null)Rt=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,Gt=Z.min.x,se=Z.min.y,fe=Z.isBox3?Z.min.z:0;else{let Je=Math.pow(2,-q);Rt=Math.floor(Ue.width*Je),bt=Math.floor(Ue.height*Je),E.isDataArrayTexture?Ut=Ue.depth:E.isData3DTexture?Ut=Math.floor(Ue.depth*Je):Ut=1,Gt=0,se=0,fe=0}X!==null?(Ft=X.x,ve=X.y,je=X.z):(Ft=0,ve=0,je=0);let Pe=lt.convert(O.format),wn=lt.convert(O.type),At;O.isData3DTexture?(j.setTexture3D(O,0),At=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),At=F.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),At=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Un=M.getParameter(F.UNPACK_ROW_LENGTH),_e=M.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=M.getParameter(F.UNPACK_SKIP_PIXELS),Xi=M.getParameter(F.UNPACK_SKIP_ROWS),Lr=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),M.pixelStorei(F.UNPACK_SKIP_ROWS,se),M.pixelStorei(F.UNPACK_SKIP_IMAGES,fe);let qs=E.isDataArrayTexture||E.isData3DTexture,Ae=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Je=Q.get(E),Dr=Q.get(O),De=Q.get(Je.__renderTarget),Nr=Q.get(Dr.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,De.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Ys=0;Ys<Ut;Ys++)qs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(E).__webglTexture,q,fe+Ys),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(O).__webglTexture,xt,je+Ys)),F.blitFramebuffer(Gt,se,Rt,bt,Ft,ve,Rt,bt,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Q.has(E)){let Je=Q.get(E),Dr=Q.get(O);M.bindFramebuffer(F.READ_FRAMEBUFFER,C),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let De=0;De<Ut;De++)qs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,q,fe+De):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,q),Ae?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dr.__webglTexture,xt,je+De):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dr.__webglTexture,xt),q!==0?F.blitFramebuffer(Gt,se,Rt,bt,Ft,ve,Rt,bt,F.COLOR_BUFFER_BIT,F.NEAREST):Ae?F.copyTexSubImage3D(At,xt,Ft,ve,je+De,Gt,se,Rt,bt):F.copyTexSubImage2D(At,xt,Ft,ve,Gt,se,Rt,bt);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ae?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(At,xt,Ft,ve,je,Rt,bt,Ut,Pe,wn,Ue.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(At,xt,Ft,ve,je,Rt,bt,Ut,Pe,Ue.data):F.texSubImage3D(At,xt,Ft,ve,je,Rt,bt,Ut,Pe,wn,Ue):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Ft,ve,Rt,bt,Pe,wn,Ue.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Ft,ve,Ue.width,Ue.height,Pe,Ue.data):F.texSubImage2D(F.TEXTURE_2D,xt,Ft,ve,Rt,bt,Pe,wn,Ue);M.pixelStorei(F.UNPACK_ROW_LENGTH,Un),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),M.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),M.pixelStorei(F.UNPACK_SKIP_ROWS,Xi),M.pixelStorei(F.UNPACK_SKIP_IMAGES,Lr),xt===0&&O.generateMipmaps&&F.generateMipmap(At),M.unbindTexture()},this.initRenderTarget=function(E){Q.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){W=0,k=0,K=null,M.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Sh=class extends _s{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new bi;t.deleteAttribute("uv");let e=new Ki({side:vn}),n=new Ki,i=new Eo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new pe(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Gr(t,n,6),o=new xn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new pe(t,Ca(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new pe(t,Ca(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new pe(t,Ca(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new pe(t,Ca(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new pe(t,Ca(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new pe(t,Ca(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ca(r){return new Mo({color:0,emissive:16777215,emissiveIntensity:r})}function yr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function e0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yo={duration:.5,overwrite:!1,delay:0},id,yn,ke,Ai=1e8,Le=1/Ai,qf=Math.PI*2,LM=qf/4,DM=0,n0=Math.sqrt,NM=Math.cos,UM=Math.sin,on=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},Sr=function(t){return typeof t=="number"},Lh=function(t){return typeof t>"u"},sr=function(t){return typeof t=="object"},ei=function(t){return t!==!1},rd=function(){return typeof window<"u"},bh=function(t){return Xe(t)||on(t)},i0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,FM=/random\([^)]+\)/g,OM=/,\s*/g,qm=/(?:-?\.?\d|\.)+/gi,sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,BM=/[^,'"\[\]\s]+/gi,zM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,ir,Yf,od,hi={},Ah={},r0,s0=function(t){return(Ah=Pa(t,hi))&&Pn},Dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zo=function(t,e){return!e&&console.warn(t)},a0=function(t,e){return t&&(hi[t]=e)&&Ah&&(Ah[t]=e)||hi},$o=function(){return 0},kM={suppressEvents:!0,isStart:!0,kill:!1},wh={suppressEvents:!0,kill:!1},VM={suppressEvents:!0},ld={},jr=[],Zf={},o0,jn={},Vf={},Ym=30,Th=[],cd="",hd=function(t){var e=t[0],n,i;if(sr(e)||Xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Th.length;i--&&!Th[i].targetTest(e););n=Th[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new pd(t[i],n)))||t.splice(i,1);return t},ts=function(t){return t._gsap||hd(Ci(t))[0]._gsap},ud=function(t,e,n){return(n=t[e])&&Xe(n)?t[e]():Lh(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},qe=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Cs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},GM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ch=function(){var t=jr.length,e=jr.slice(0),n,i;for(Zf={},jr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fd=function(t){return!!(t._initted||t._startAt||t.add)},l0=function(t,e,n,i){jr.length&&!yn&&Ch(),t.render(e,n,i||!!(yn&&e<0&&fd(t))),jr.length&&!yn&&Ch()},c0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(BM).length<2?e:on(t)?t.trim():t},h0=function(t){return t},ui=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},HM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Pa=function(t,e){for(var n in e)t[n]=e[n];return t},Zm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=sr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Rh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Wo=function(t){var e=t.parent||He,n=t.keyframes?HM(Rn(t.keyframes)):ui;if(ei(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},QM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},u0=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Nh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},es=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},WM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$f=function(t,e,n,i){return t._startAt&&(yn?t._startAt.revert(wh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},XM=function r(t){return!t||t._ts&&r(t.parent)},$m=function(t){return t._repeat?Ia(t._tTime,t=t.duration()+t._rDelay)*t:0},Ia=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Ph=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Uh=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Le)||0))},Fh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Uh(t),n._dirty||ws(n,t)),t},f0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ph(t.rawTime(),e),(!e._dur||jo(0,e.totalDuration(),n)-e._tTime>Le)&&e.render(n,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Le}},rr=function(t,e,n,i){return e.parent&&es(e),e._start=Ge((Sr(n)?n:n||t!==He?Ei(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),u0(t,e,"_first","_last",t._sort?"_start":0),Jf(e)||(t._recent=e),i||f0(t,e),t._ts<0&&Fh(t,t._tTime),t},d0=function(t,e){return(hi.ScrollTrigger||Dh("scrollTrigger",e))&&hi.ScrollTrigger.create(e,t)},p0=function(t,e,n,i,s){if(_d(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!yn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&o0!==ti.frame)return jr.push(t),t._lazy=[s,i],1},qM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Jf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YM=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&qM(t)&&!(!t._initted&&Jf(t))||(t._ts<0||t._dp._ts<0)&&!Jf(t))?0:1,o=t._rDelay,c=0,l,h,d;if(o&&t._repeat&&(c=jo(0,t._tDur,e),h=Ia(c,o),t._yoyo&&h&1&&(a=1-a),h!==Ia(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||yn||i||t._zTime===Le||!e&&t._zTime){if(!t._initted&&p0(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?Le:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&$f(t,e,n,!0),t._onUpdate&&!n&&ci(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&es(t,1),!n&&!yn&&(ci(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ZM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},La=function(t,e,n,i){var s=t._repeat,a=Ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ge(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Fh(t,t._tTime=t._tDur*o),t.parent&&Uh(t),n||ws(t.parent,t),t},Jm=function(t){return t instanceof Cn?ws(t):La(t,t._dur)},$M={_start:0,endTime:$o,totalDuration:$o},Ei=function r(t,e,n){var i=t.labels,s=t._recent||$M,a=t.duration()>=Ai?s.endTime(!1):t._dur,o,c,l;return on(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Rn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Xo=function(t,e,n){var i=Sr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ei(c.vars.inherit)&&c.parent;a.immediateRender=ei(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ke(e[0],a,e[s+1])},ns=function(t,e){return t||t===0?e(t):e},jo=function(t,e,n){return n<t?t:n>e?e:n},Mn=function(t,e){return!on(t)||!(e=zM.exec(t))?"":e[1]},JM=function(t,e,n){return ns(n,function(i){return jo(t,e,i)})},Kf=[].slice,m0=function(t,e){return t&&sr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&sr(t[0]))&&!t.nodeType&&t!==ir},KM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return on(i)&&!e||m0(i,1)?(s=n).push.apply(s,Ci(i)):n.push(i)})||n},Ci=function(t,e,n){return ke&&!e&&ke.selector?ke.selector(t):on(t)&&!n&&(Yf||!Da())?Kf.call((e||od).querySelectorAll(t),0):Rn(t)?KM(t,n):m0(t)?Kf.call(t,0):t?[t]:[]},jf=function(t){return t=Ci(t)[0]||Zo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ci(e,n.querySelectorAll?n:n===t?Zo("Invalid scope")||od.createElement("div"):t)}},g0=function(t){return t.sort(function(){return .5-Math.random()})},_0=function(t){if(Xe(t))return t;var e=sr(t)?t:{each:t},n=Ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,d=i;return on(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,p=a[_],m,y,A,v,S,b,T,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ai])[1],!w){for(T=-Ai;T<(T=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=c?Math.min(w,_)*h-.5:i%w,y=w===Ai?0:c?_*d/w-.5:i/w|0,T=0,x=Ai,b=0;b<_;b++)A=b%w-m,v=y-(b/w|0),p[b]=S=l?Math.abs(l==="y"?v:A):n0(A*A+v*v),S>T&&(T=S),S<x&&(x=S);i==="random"&&g0(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:l?l==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Mn(e.amount||e.each)||0,n=n&&_<0?uS(n):n}return _=(p[u]-p.min)/p.max||0,Ge(p.b+(n?n(_):_)*p.v)+p.u}},td=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Sr(n)?0:Mn(n))}},x0=function(t,e){var n=Rn(t),i,s;return!n&&sr(t)&&(i=n=t.radius||Ai,t.values?(t=Ci(t.values),(s=!Sr(t[0]))&&(i*=i)):t=td(t.increment)),ns(e,n?Xe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Ai,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-c,u=u*u+f*f):u=Math.abs(t[d]-o),u<l&&(l=u,h=d);return h=!i||l<=i?t[h]:a,s||h===a||Sr(a)?h:h+Mn(a)}:td(t))},v0=function(t,e,n,i){return ns(Rn(t)?!e:n===!0?!!(n=0):!i,function(){return Rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},jM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},tS=function(t,e){return function(n){return t(parseFloat(n))+(e||Mn(n))}},eS=function(t,e,n){return M0(t,e,0,1,n)},y0=function(t,e,n){return ns(n,function(i){return t[~~e(i)]})},nS=function r(t,e,n){var i=e-t;return Rn(t)?y0(t,r(0,t.length),e):ns(n,function(s){return(i+(s-t)%i)%i+t})},iS=function r(t,e,n){var i=e-t,s=i*2;return Rn(t)?y0(t,r(0,t.length-1),e):ns(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Na=function(t){return t.replace(FM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(OM);return v0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},M0=function(t,e,n,i,s){var a=e-t,o=i-n;return ns(s,function(c){return n+((c-t)/a*o||0)})},rS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=on(t),o={},c,l,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Rn(t)&&!Rn(e)){for(h=[],d=t.length,u=d-2,l=1;l<d;l++)h.push(r(t[l-1],t[l]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Pa(Rn(t)?[]:{},t));if(!h){for(c in e)md.call(o,t,c,"get",e[c]);s=function(g){return yd(g,o)||(a?t.p:t)}}}return ns(n,s)},Km=function(t,e,n){var i=t.labels,s=Ai,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},ci=function(t,e,n){var i=t.vars,s=i[e],a=ke,o=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&jr.length&&Ch(),o&&(ke=o),h=c?s.apply(l,c):s.call(l),ke=a,h},Ho=function(t){return es(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yn),t.progress()<1&&ci(t,"onInterrupt"),t},Ra,S0=[],b0=function(t){if(t)if(t=!t.name&&t.default||t,rd()||t.headless){var e=t.name,n=Xe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$o,render:yd,add:md,kill:MS,modifier:yS,rawVars:0},a={targetTest:0,get:0,getSetter:Oh,aliases:{},register:0};if(Da(),t!==i){if(jn[e])return;ui(i,ui(Rh(t,s),a)),Pa(i.prototype,Pa(s,Rh(t,a))),jn[i.prop=e]=i,t.targetTest&&(Th.push(i),ld[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}a0(e,i),t.register&&t.register(Pn,i,kn)}else S0.push(t)},Ie=255,Qo={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Gf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ie+.5|0},w0=function(t,e,n){var i=t?Sr(t)?[t>>16,t>>8&Ie,t&Ie]:0:Qo.black,s,a,o,c,l,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qo[t])i=Qo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ie,i&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(qm),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Gf(c+1/3,s,a),i[1]=Gf(c,s,a),i[2]=Gf(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(sd),n&&i.length<4&&(i[3]=1),i}else i=t.match(qm)||Qo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ie,a=i[1]/Ie,o=i[2]/Ie,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?c=l=0:(f=d-u,l=h>.5?f/(2-d-u):f/(d+u),c=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},T0=function(t){var e=[],n=[],i=-1;return t.split(Mr).forEach(function(s){var a=s.match(As)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},jm=function(t,e,n){var i="",s=(t+i).match(Mr),a=e?"hsla(":"rgba(",o=0,c,l,h,d;if(!s)return t;if(s=s.map(function(u){return(u=w0(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=T0(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Mr,"1").split(As),d=l.length-1;o<d;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Mr),d=l.length-1;o<d;o++)i+=l[o]+s[o];return i+l[d]},Mr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),sS=/hsl[a]?\(/,dd=function(t){var e=t.join(" "),n;if(Mr.lastIndex=0,Mr.test(e))return n=sS.test(e),t[1]=jm(t[1],n),t[0]=jm(t[0],n,T0(t[1])),!0},Jo,ti=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,d,u,f,g=function _(p){var m=r()-i,y=p===!0,A,v,S,b;if((m>t||m<0)&&(n+=m-e),i+=m,S=i-n,A=S-a,(A>0||y)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=A+(A>=s?4:s-A),v=1),y||(c=l(_)),v)for(f=0;f<o.length;f++)o[f](S,u,b,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){r0&&(!Yf&&rd()&&(ir=Yf=window,od=ir.document||{},hi.gsap=Pn,(ir.gsapVersions||(ir.gsapVersions=[])).push(Pn.version),s0(Ah||ir.GreenSockGlobals||!ir.gsap&&ir||{}),S0.forEach(b0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Jo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Jo=0,l=$o},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,y){var A=m?function(v,S,b,T){p(v,S,b,T),d.remove(A)}:p;return d.remove(p),o[y?"unshift":"push"](A),Da(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Da=function(){return!Jo&&ti.wake()},ge={},aS=/^[\d.\-M][\d.\-,\s]/,oS=/["']/g,lS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(oS,"").trim():+l,i=c.substr(o+1).trim();return e},cS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hS=function(t){var e=(t+"").split("("),n=ge[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[lS(e[1])]:cS(t).split(",").map(c0)):ge._CE&&aS.test(t)?ge._CE("",t):n},uS=function(t){return function(e){return 1-t(1-e)}},Ts=function(t,e){return t&&(Xe(t)?t:ge[t]||hS(t))||e},Rs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return zn(t,function(o){ge[o]=hi[o]=s,ge[a=o.toLowerCase()]=n;for(var c in s)ge[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ge[o+"."+c]=s[c]}),s},E0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Hf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/qf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*UM((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:E0(o);return s=qf/s,c.config=function(l,h){return r(t,l,h)},c},Qf=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:E0(n);return i.config=function(s){return r(t,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Rs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;Rs("Elastic",Hf("in"),Hf("out"),Hf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rs("Circ",function(r){return-(n0(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-NM(r*LM)+1});Rs("Back",Qf("in"),Qf("out"),Qf());ge.SteppedEase=ge.steps=hi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Le;return function(o){return((i*jo(0,a,o)|0)+s)*n}}};Yo.ease=ge["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return cd+=r+","+r+"Params,"});var pd=function(t,e){this.id=DM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ud,this.set=e?e.getSetter:Oh},Ko=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,La(this,+e.duration,1,1),this.data=e.data,ke&&(this._ctx=ke,ke.data.push(this)),Jo||ti.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,La(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Da(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fh(this,n),!s._dp||s.parent||f0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Le||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),l0(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$m(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$m(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ia(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Le?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ph(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Le?0:this._rts,this.totalTime(jo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Uh(this),WM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Le&&(this._tTime-=Le)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rr(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ph(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=VM);var i=yn;return yn=n,fd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ei(this,n),ei(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ei(i)),this._dur||(this._zTime=-Le),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Le,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Le)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Xe(n)?n:h0,c=function(){var h=i.then;i.then=null,s&&s(),Xe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Ho(this)},r})();ui(Ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Le,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){e0(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),He&&rr(n.parent||He,yr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&d0(yr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Xo(0,arguments,this),this},e.from=function(i,s,a){return Xo(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Xo(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ke(i,s,Ei(this,a),1),this},e.call=function(i,s,a){return rr(this,Ke.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Ke(i,a,Ei(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,Wo(a).immediateRender=ei(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},e.staggerFromTo=function(i,s,a,o,c,l,h,d){return o.startAt=a,Wo(o).immediateRender=ei(o.immediateRender),this.staggerTo(i,s,o,c,l,h,d)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Ge(i),d=this._zTime<0!=i<0&&(this._initted||!l),u,f,g,_,p,m,y,A,v,S,b,T;if(this!==He&&h>c&&i>=0&&(h=c),h!==this._tTime||a||d){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,A=this._ts,m=!A,d&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Ge(h%p),h===c?(_=this._repeat,u=l):(S=Ge(h/p),_=~~S,_&&_===S&&(u=l,_--),u>l&&(u=l)),S=Ia(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),b&&_&1&&(u=l-u,T=1),_!==S&&!this._lock){var x=b&&S&1,w=x===(b&&_&1);if(_<S&&(x=!x),o=x?0:h%l?l:h,this._lock=1,this.render(o||(T?0:Ge(_*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ZM(this,Ge(o),Ge(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!S&&(ci(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Le);break}}f=g}else{f=this._last;for(var R=i<0?i:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||yn&&fd(f)),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=R?-Le:Le);break}}f=g}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-Le)._zTime=u>=o?1:-1,this._ts))return this._start=v,Uh(this),this.render(i,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&es(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(ci(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Sr(s)||(s=Ei(this,s,i)),!(i instanceof Ko)){if(Rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(on(i))return this.addLabel(i,s);if(Xe(i))i=Ke.delayedCall(0,i);else return this}return this!==i?rr(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ai);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ke?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return on(i)?this.removeLabel(i):Xe(i)?this.killTweensOf(i):(i.parent===this&&Nh(this,i),i===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ke.delayedCall(0,s||$o,a);return o.data="isPause",this._hasPause=1,rr(this,o,Ei(this,i))},e.removePause=function(i){var s=this._first;for(i=Ei(this,i);s;)s._start===i&&s.data==="isPause"&&es(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Kr!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Ci(i),c=this._first,l=Sr(s),h;c;)c instanceof Ke?GM(c._targets,o)&&(l?(!Kr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ei(a,i),c=s,l=c.startAt,h=c.onStart,d=c.onStartParams,u=c.immediateRender,f,g=Ke.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Le,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&La(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:Ei(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Km(this,Ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Km(this,Ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Le)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Ge(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return ws(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=Ai,l,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,rr(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ge(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;La(a,a===He&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(He._ts&&(l0(He,Ph(i,He)),o0=ti.frame),ti.frame>=Ym){Ym+=ni.autoSleep||120;var s=He._first;if((!s||!s._ts)&&ni.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},t})(Ko);ui(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var fS=function(t,e,n,i,s,a,o){var c=new kn(this._pt,t,e,0,1,vd,null,s),l=0,h=0,d,u,f,g,_,p,m,y;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Na(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),u=n.match(kf)||[];d=kf.exec(i);)g=d[0],_=i.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Cs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=kf.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(ad.test(i)||m)&&(c.e=0),this._pt=c,c},md=function(t,e,n,i,s,a,o,c,l,h){Xe(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:Xe(d)?l?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,f=Xe(d)?l?_S:R0:xd,g;if(on(i)&&(~i.indexOf("random(")&&(i=Na(i)),i.charAt(1)==="="&&(g=Cs(u,i)+(Mn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||ed)return!isNaN(u*i)&&i!==""?(g=new kn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?vS:P0,0,f),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Dh(e,i),fS.call(this,t,e,u,i,f,c||ni.stringFilter,l))},dS=function(t,e,n,i,s){if(Xe(t)&&(t=qo(t,s,e,n,i)),!sr(t)||t.style&&t.nodeType||Rn(t)||i0(t))return on(t)?qo(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=qo(t[o],s,e,n,i);return a},gd=function(t,e,n,i,s,a){var o,c,l,h;if(jn[t]&&(o=new jn[t]).init(s,o.rawVars?e[t]:dS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new kn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ra))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Kr,ed,_d=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!id,v=t.timeline,S=i.easeReverse||d,b,T,x,w,R,N,D,U,C,B,W,k,K;if(v&&(!u||!s)&&(s="none"),t._ease=Ts(s,Yo.ease),t._rEase=S&&(Ts(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(U=p[0]?ts(p[0]).harness:0,k=U&&i[U.prop],b=Rh(i,ld),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?wh:kM),_._lazy=0),a){if(es(t._startAt=Ke.set(p,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ei(c),startAt:null,delay:0,onUpdate:l&&function(){return ci(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn||!o&&!f)&&t._startAt.revert(wh),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),x=ui({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ei(c),immediateRender:o,stagger:0,parent:m},b),k&&(x[U.prop]=k),es(t._startAt=Ke.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn?t._startAt.revert(wh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Le,Le);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&ei(c)||c&&!g,T=0;T<p.length;T++){if(R=p[T],D=R._gsap||hd(p)[T]._gsap,t._ptLookup[T]=B={},Zf[D.id]&&jr.length&&Ch(),W=y===p?T:y.indexOf(R),U&&(C=new U).init(R,k||b,t,W,y)!==!1&&(t._pt=w=new kn(t._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(Y){B[Y]=w}),C.priority&&(N=1)),!U||k)for(x in b)jn[x]&&(C=gd(x,b,t,W,R,y))?C.priority&&(N=1):B[x]=w=md.call(t,R,x,"get",b[x],W,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(R,t._op[T]),A&&t._pt&&(Kr=t,He.killTweensOf(R,B,t.globalTime(e)),K=!t.parent,Kr=0),t._pt&&c&&(Zf[D.id]=1)}N&&Md(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(Ai,!0,!0)},pS=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ed=1,t.vars[e]="+=0",_d(t,o),ed=0,c?Zo(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(f=l.length;f--;)d=l[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=qe(n)+Mn(d.e)),d.b&&(d.b=h.s+Mn(d.b))},mS=function(t,e){var n=t[0]?ts(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Pa({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},gS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Rn(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},qo=function(t,e,n,i,s){return Xe(t)?t.call(e,n,i,s):on(t)&&~t.indexOf("random(")?Na(t):t},A0=cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",C0={};zn(A0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return C0[r]=1});var Ke=(function(r){e0(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Wo(i))||this;var c=o.vars,l=c.duration,h=c.delay,d=c.immediateRender,u=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=i.parent||He,y=(Rn(n)||i0(n)?Sr(n[0]):"length"in i)?[n]:Ci(n),A,v,S,b,T,x,w,R;if(o._targets=y.length?hd(y):Zo("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||bh(l)||bh(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Cn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),A.kill(),A.parent=A._dp=yr(o),A._start=0,u||bh(l)||bh(h)){if(b=y.length,w=u&&_0(u),sr(u))for(T in u)~A0.indexOf(T)&&(R||(R={}),R[T]=u[T]);for(v=0;v<b;v++)S=Rh(i,C0),S.stagger=0,N&&(S.easeReverse=N),R&&Pa(S,R),x=y[v],S.duration=+qo(l,yr(o),v,x,y),S.delay=(+qo(h,yr(o),v,x,y)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),A.to(x,S,w?w(v,x,y):0),A._ease=ge.none;A.duration()?l=h=0:o.timeline=0}else if(g){Wo(ui(A.vars.defaults,{ease:"none"})),A._ease=Ts(g.ease||i.ease||"none");var D=0,U,C,B;if(Rn(g))g.forEach(function(W){return A.to(y,W,">")}),A.duration();else{S={};for(T in g)T==="ease"||T==="easeEach"||gS(T,g[T],S,g.easeEach);for(T in S)for(U=S[T].sort(function(W,k){return W.t-k.t}),D=0,v=0;v<U.length;v++)C=U[v],B={ease:C.e,duration:(C.t-(v?U[v-1].t:0))/100*l},B[T]=C.v,A.to(y,B,D),D+=B.duration;A.duration()<l&&A.to({},{duration:l-A.duration()})}}l||o.duration(l=A.duration())}else o.timeline=0;return f===!0&&!id&&(Kr=yr(o),He.killTweensOf(y),Kr=0),rr(m,yr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!l&&!g&&o._start===Ge(m._time)&&ei(d)&&XM(yr(o))&&m.data!=="nested")&&(o._tTime=-Le,o.render(Math.max(0,-h)||0)),p&&d0(yr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,d=i>c-Le&&!h?c:i<Le?0:i,u,f,g,_,p,m,y,A;if(!l)YM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ge(d%_),d===c?(g=this._repeat,u=l):(p=Ge(d/_),g=~~p,g&&g===p?(u=l,g--):u>l&&(u=l)),m=this._yoyo&&g&1,m&&(u=l-u),p=Ia(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Ge(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(p0(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var S=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/l);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ci(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&$f(this,i,s,a),ci(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&$f(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&es(this,1),!s&&!(h&&!o)&&(d||o||m)&&(ci(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){Jo||ti.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||_d(this,l),h=this._ease(l/this._dur),pS(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(Fh(this,0),this.parent||u0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kr&&Kr.vars.overwrite!==!0)._first||Ho(this),this.parent&&a!==this.timeline.totalDuration()&&La(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Ci(i):o,l=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&QM(o,c))return s==="all"&&(this._pt=0),Ho(this);for(d=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},zn(s,function(y){return _[y]=1}),s=_),s=mS(o,s)),m=o.length;m--;)if(~c.indexOf(o[m])){u=l[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Nh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ho(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Xo(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Xo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return He.killTweensOf(i,s,a)},t})(Ko);ui(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){Ke[r]=function(){var t=new Cn,e=Kf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var xd=function(t,e,n){return t[e]=n},R0=function(t,e,n){return t[e](n)},_S=function(t,e,n,i){return t[e](i.fp,n)},xS=function(t,e,n){return t.setAttribute(e,n)},Oh=function(t,e){return Xe(t[e])?R0:Lh(t[e])&&t.setAttribute?xS:xd},P0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},vd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},yd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},yS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},MS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Nh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},SS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Md=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},kn=(function(){function r(e,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||P0,this.d=c||this,this.set=l||xd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=SS,this.m=n,this.mt=s,this.tween=i},r})();zn(cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ld[r]=1});hi.TweenMax=hi.TweenLite=Ke;hi.TimelineLite=hi.TimelineMax=Cn;He=new Cn({sortChildren:!1,defaults:Yo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=dd;var Es=[],Eh={},bS=[],t0=0,wS=0,Wf=function(t){return(Eh[t]||bS).map(function(e){return e()})},nd=function(){var t=Date.now(),e=[];t-t0>2&&(Wf("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=ir.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Wf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),t0=t,Wf("matchMedia"))},I0=(function(){function r(e,n){this.selector=n&&jf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Xe(n)&&(s=i,i=n,n=Xe);var a=this,o=function(){var l=ke,h=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=jf(s)),ke=a,d=i.apply(a,arguments),Xe(d)&&a._r.push(d),ke=l,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Xe?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=ke;ke=null,n(this),ke=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Cn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ke)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Es.length;a--;)Es[a].id===this.id&&Es.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),TS=(function(){function r(e){this.contexts=[],this.scope=e,ke&&ke.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){sr(n)||(n={matches:n});var a=new I0(0,s||this.scope),o=a.conditions={},c,l,h;ke&&!a.selector&&(a.selector=ke.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=ir.matchMedia(n[l]),c&&(Es.indexOf(a)<0&&Es.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(nd):c.addEventListener("change",nd)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ih={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return b0(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return He.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=Ci(t)[0]);var s=ts(t||{}).get,a=n?h0:c0;return n==="native"&&(n=""),t&&(e?a((jn[e]&&jn[e].get||s)(t,e,n,i)):function(o,c,l){return a((jn[o]&&jn[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=Ci(t),t.length>1){var i=t.map(function(h){return Pn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=jn[e],o=ts(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var d=new a;Ra._pt=0,d.init(t,n?h+n:h,Ra,0,[t]),d.render(1,d),Ra._pt&&yd(1,Ra)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,ui((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return He.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ts(t.ease,Yo.ease)),Zm(Yo,t||{})},config:function(t){return Zm(ni,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!jn[o]&&!hi[o]&&Zo(e+" effect requires "+o+" plugin.")}),Vf[e]=function(o,c,l){return n(Ci(o),ui(c||{},s),l)},a&&(Cn.prototype[e]=function(o,c,l){return this.add(Vf[e](o,sr(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){ge[t]=Ts(e)},parseEase:function(t,e){return arguments.length?Ts(t,e):ge},getById:function(t){return He.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,s;for(n.smoothChildTiming=ei(t.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&rr(n,i,i._start-i._delay),i=s;return rr(He,n,0),n},context:function(t,e){return t?new I0(t,e):ke},matchMedia:function(t){return new TS(t)},matchMediaRefresh:function(){return Es.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||nd()},addEventListener:function(t,e){var n=Eh[t]||(Eh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Eh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:nS,wrapYoyo:iS,distribute:_0,random:v0,snap:x0,normalize:eS,getUnit:Mn,clamp:JM,splitColor:w0,toArray:Ci,selector:jf,mapRange:M0,pipe:jM,unitize:tS,interpolate:rS,shuffle:g0},install:s0,effects:Vf,ticker:ti,updateRoot:Cn.updateRoot,plugins:jn,globalTimeline:He,core:{PropTween:kn,globals:a0,Tween:Ke,Timeline:Cn,Animation:Ko,getCache:ts,_removeLinkedListItem:Nh,reverting:function(){return yn},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return id=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ih[r]=Ke[r]});ti.add(Cn.updateRoot);Ra=Ih.to({},{duration:0});var ES=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},AS=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ES(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Xf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(on(s)&&(c={},zn(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}AS(o,s)}}}},Pn=Ih.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xf("roundProps",td),Xf("modifiers"),Xf("snap",x0))||Ih;Ke.version=Cn.version=Pn.version="3.15.0";r0=1;rd()&&Da();var CS=ge.Power0,RS=ge.Power1,PS=ge.Power2,IS=ge.Power3,LS=ge.Power4,DS=ge.Linear,NS=ge.Quad,US=ge.Cubic,FS=ge.Quart,OS=ge.Quint,BS=ge.Strong,zS=ge.Elastic,kS=ge.Back,VS=ge.SteppedEase,GS=ge.Bounce,HS=ge.Sine,QS=ge.Expo,WS=ge.Circ;var L0,is,Fa,Ad,Ds,XS,D0,Cd,qS=function(){return typeof window<"u"},wr={},Ls=180/Math.PI,Oa=Math.PI/180,Ua=Math.atan2,N0=1e8,Rd=/([A-Z])/g,YS=/(left|right|width|margin|padding|x)/i,ZS=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$S=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},G0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},H0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tb=function(t,e,n){return t.style[e]=n},eb=function(t,e,n){return t.style.setProperty(e,n)},nb=function(t,e,n){return t._gsap[e]=n},ib=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},rb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},sb=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Qe="transform",ii=Qe+"Origin",ab=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in wr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ar[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=br(i,o)}):this.tfm[t]=a.x?a[t]:br(i,t),t===ii&&(this.tfm.zOrigin=a.zOrigin);else return ar.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Qe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,e,"")),t=Qe}(s||e)&&this.props.push(t,e,s[t])},Q0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ob=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!n[Qe]&&(Q0(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},W0=function(t,e){var n={target:t,props:[],revert:ob,save:ab};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},X0,wd=function(t,e){var n=is.createElementNS?is.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):is.createElement(t);return n&&n.style?n:is.createElement(t)},fi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Rd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ba(e)||e,1)||""},U0="O,Moz,ms,Ms,Webkit".split(","),Ba=function(t,e,n){var i=e||Ds,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(U0[a]+t in s););return a<0?null:(a===3?"ms":a>=0?U0[a]:"")+t},Td=function(){qS()&&window.document&&(L0=window,is=L0.document,Fa=is.documentElement,Ds=wd("div")||{style:{}},XS=wd("div"),Qe=Ba(Qe),ii=Qe+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",X0=!!Ba("perspective"),Cd=Pn.core.reverting,Ad=1)},F0=function(t){var e=t.ownerSVGElement,n=wd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fa.removeChild(n),s},O0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},q0=function(t){var e,n;try{e=t.getBBox()}catch{e=F0(t),n=1}return e&&(e.width||e.height)||n||(e=F0(t)),e&&!e.width&&!e.x&&!e.y?{x:+O0(t,["x","cx","x1"])||0,y:+O0(t,["y","cy","y1"])||0,width:0,height:0}:e},Y0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&q0(t))},ss=function(t,e){if(e){var n=t.style,i;e in wr&&e!==ii&&(e=Qe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(e)}},rs=function(t,e,n,i,s,a){var o=new kn(t._pt,e,n,0,1,a?H0:G0);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},B0={deg:1,rad:1,turn:1},lb={grid:1,flex:1},as=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ds.style,c=YS.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||B0[i]||B0[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&Y0(t),(f||a==="%")&&(wr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[c?"width":"height"]:t[h],qe(f?s/g*d:s/100*g);if(o[c?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===is||!_.appendChild)&&(_=is.body),p=_._gsap,p&&f&&p.width&&c&&p.time===ti.time&&!p.uncache)return qe(s/p.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,g=t[h],y?t.style[e]=y:ss(t,e)}else(f||a==="%")&&!lb[fi(_,"display")]&&(o.position=fi(t,"position")),_===t&&(o.position="static"),_.appendChild(Ds),g=Ds[h],_.removeChild(Ds),o.position="absolute";return c&&f&&(p=ts(_),p.time=ti.time,p.width=_[h]),qe(u?g*s/d:g&&s?d/g*s:0)},br=function(t,e,n,i){var s;return Ad||Td(),e in ar&&e!=="transform"&&(e=ar[e],~e.indexOf(",")&&(e=e.split(",")[0])),wr[e]&&e!=="transform"?(s=nl(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:zh(fi(t,ii))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bh[e]&&Bh[e](t,e,n)||fi(t,e)||ud(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?as(t,e,s,n)+n:s},cb=function(t,e,n,i){if(!n||n==="none"){var s=Ba(e,t,1),a=s&&fi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=fi(t,"borderTopColor"))}var o=new kn(this._pt,t.style,e,0,1,vd),c=0,l=0,h,d,u,f,g,_,p,m,y,A,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=fi(t,e)||i,_?t.style[e]=_:ss(t,e)),h=[n,i],dd(h),n=h[0],i=h[1],u=n.match(As)||[],S=i.match(As)||[],S.length){for(;d=As.exec(i);)p=d[0],y=i.substring(c,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=u[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Cs(f,p)+v),m=parseFloat(p),A=p.substr((m+"").length),c=As.lastIndex-A.length,A||(A=A||ni.units[e]||v,c===i.length&&(i+=A,o.e+=A)),v!==A&&(f=as(t,e,_,A)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?H0:G0;return ad.test(i)&&(o.e=0),this._pt=o,o},z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=z0[n]||n,e[1]=z0[i]||i,e.join(" ")},ub=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],wr[o]&&(c=1,o=o==="transformOrigin"?ii:Qe),ss(n,o);c&&(ss(n,Qe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",nl(n,1),a.uncache=1,Q0(i)))}},Bh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new kn(t._pt,e,n,0,0,ub);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},el=[1,0,0,1,0,0],Z0={},$0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},k0=function(t){var e=fi(t,Qe);return $0(e)?el:e.substr(7).match(sd).map(qe)},Pd=function(t,e){var n=t._gsap||ts(t),i=t.style,s=k0(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!t.offsetParent&&t!==Fa&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Fa.appendChild(t)),s=k0(t),c?i.display=c:ss(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Fa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ed=function(t,e,n,i,s,a){var o=t._gsap,c=s||Pd(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],y=c[5],A=e.split(" "),v=parseFloat(A[0])||0,S=parseFloat(A[1])||0,b,T,x,w;n?c!==el&&(T=f*p-g*_)&&(x=v*(p/T)+S*(-_/T)+(_*y-p*m)/T,w=v*(-g/T)+S*(f/T)-(f*y-g*m)/T,v=x,S=w):(b=q0(t),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),S=b.y+(~(A[1]||A[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(m=v-l,y=S-h,o.xOffset=d+(m*f+y*_)-m,o.yOffset=u+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ii]="0px 0px",a&&(rs(a,o,"xOrigin",l,v),rs(a,o,"yOrigin",h,S),rs(a,o,"xOffset",d,o.xOffset),rs(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},nl=function(t,e){var n=t._gsap||new pd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=fi(t,ii)||"0",h,d,u,f,g,_,p,m,y,A,v,S,b,T,x,w,R,N,D,U,C,B,W,k,K,Y,L,tt,vt,wt,Ot,Ht;return h=d=u=_=p=m=y=A=v=0,f=g=1,n.svg=!!(t.getCTM&&Y0(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Qe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Qe]!=="none"?c[Qe]:"")),i.scale=i.rotate=i.translate="none"),T=Pd(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Ed(t,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,b=n.yOrigin||0,T!==el&&(N=T[0],D=T[1],U=T[2],C=T[3],h=B=T[4],d=W=T[5],T.length===6?(f=Math.sqrt(N*N+D*D),g=Math.sqrt(C*C+U*U),_=N||D?Ua(D,N)*Ls:0,y=U||C?Ua(U,C)*Ls+_:0,y&&(g*=Math.abs(Math.cos(y*Oa))),n.svg&&(h-=S-(S*N+b*U),d-=b-(S*D+b*C))):(Ht=T[6],wt=T[7],L=T[8],tt=T[9],vt=T[10],Ot=T[11],h=T[12],d=T[13],u=T[14],x=Ua(Ht,vt),p=x*Ls,x&&(w=Math.cos(-x),R=Math.sin(-x),k=B*w+L*R,K=W*w+tt*R,Y=Ht*w+vt*R,L=B*-R+L*w,tt=W*-R+tt*w,vt=Ht*-R+vt*w,Ot=wt*-R+Ot*w,B=k,W=K,Ht=Y),x=Ua(-U,vt),m=x*Ls,x&&(w=Math.cos(-x),R=Math.sin(-x),k=N*w-L*R,K=D*w-tt*R,Y=U*w-vt*R,Ot=C*R+Ot*w,N=k,D=K,U=Y),x=Ua(D,N),_=x*Ls,x&&(w=Math.cos(x),R=Math.sin(x),k=N*w+D*R,K=B*w+W*R,D=D*w-N*R,W=W*w-B*R,N=k,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=qe(Math.sqrt(N*N+D*D+U*U)),g=qe(Math.sqrt(W*W+Ht*Ht)),x=Ua(B,W),y=Math.abs(x)>2e-4?x*Ls:0,v=Ot?1/(Ot<0?-Ot:Ot):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$0(fi(t,Qe)),k&&t.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=qe(f),n.scaleY=qe(g),n.rotation=qe(_)+o,n.rotationX=qe(p)+o,n.rotationY=qe(m)+o,n.skewX=y+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ii]=zh(l)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?db:X0?J0:fb,n.uncache=0,n},zh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sd=function(t,e,n){var i=Mn(e);return qe(parseFloat(e)+parseFloat(as(t,"x",n+"px",i)))+i},fb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,J0(t,e)},Ps="0deg",tl="0px",Is=") ",J0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,A=n.zOrigin,v="",S=m==="auto"&&t&&t!==1||m===!0;if(A&&(d!==Ps||h!==Ps)){var b=parseFloat(h)*Oa,T=Math.sin(b),x=Math.cos(b),w;b=parseFloat(d)*Oa,w=Math.cos(b),a=Sd(y,a,T*w*-A),o=Sd(y,o,-Math.sin(b)*-A),c=Sd(y,c,x*w*-A+A)}p!==tl&&(v+="perspective("+p+Is),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||a!==tl||o!==tl||c!==tl)&&(v+=c!==tl||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Is),l!==Ps&&(v+="rotate("+l+Is),h!==Ps&&(v+="rotateY("+h+Is),d!==Ps&&(v+="rotateX("+d+Is),(u!==Ps||f!==Ps)&&(v+="skew("+u+", "+f+Is),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Is),y.style[Qe]=v||"translate(0, 0)"},db=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,A=parseFloat(a),v=parseFloat(o),S,b,T,x,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Oa,l*=Oa,S=Math.cos(c)*d,b=Math.sin(c)*d,T=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(h*=Oa,w=Math.tan(l-h),w=Math.sqrt(1+w*w),T*=w,x*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,b*=w)),S=qe(S),b=qe(b),T=qe(T),x=qe(x)):(S=d,x=u,b=T=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=as(f,"x",a,"px"),v=as(f,"y",o,"px")),(g||_||p||m)&&(A=qe(A+g-(g*S+_*T)+p),v=qe(v+_-(g*b+_*x)+m)),(i||s)&&(w=f.getBBox(),A=qe(A+i/100*w.width),v=qe(v+s/100*w.height)),w="matrix("+S+","+b+","+T+","+x+","+A+","+v+")",f.setAttribute("transform",w),y&&(f.style[Qe]=w)},pb=function(t,e,n,i,s){var a=360,o=on(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ls:1),l=c-i,h=i+l+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*N0)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*N0)%a-~~(l/a)*a)),t._pt=u=new kn(t._pt,e,n,i,l,$S),u.e=h,u.u="deg",t._props.push(n),u},V0=function(t,e){for(var n in e)t[n]=e[n];return t},mb=function(t,e,n){var i=V0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,d,u,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qe]=e,o=nl(n,1),ss(n,Qe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Qe],a[Qe]=e,o=nl(n,1),a[Qe]=l);for(c in wr)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=Mn(l),g=Mn(h),d=f!==g?as(n,c,l,g):parseFloat(l),u=parseFloat(h),t._pt=new kn(t._pt,o,c,d,u-d,bd),t._pt.u=g||0,t._props.push(c));V0(o,i)};zn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Bh[t>1?"border"+r:r]=function(o,c,l,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return br(o,g,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,d)}});var Id={name:"css",register:Td,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,h,d,u,f,g,_,p,m,y,A,v,S,b,T,x,w;Ad||Td(),this.styles=this.styles||W0(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(jn[_]&&gd(_,e,n,i,t,s)))){if(f=typeof h,g=Bh[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Na(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Mr.lastIndex=0,Mr.test(l)||(p=Mn(l),m=Mn(h),m?p!==m&&(l=as(t,_,l,m)+m):p&&(h+=p)),this.add(o,"setProperty",l,h,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,s):c[_],on(l)&&~l.indexOf("random(")&&(l=Na(l)),Mn(l+"")||l==="auto"||(l+=ni.units[_]||Mn(br(t,_))||""),(l+"").charAt(1)==="="&&(l=br(t,_))):l=br(t,_),u=parseFloat(l),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in ar&&(_==="autoAlpha"&&(u===1&&br(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,o.visibility),rs(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ar[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in wr,A){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=fi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=fi(t,"perspective"),R?t.style.perspective=R:ss(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||nl(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new kn(this._pt,o,Qe,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new kn(this._pt,S,"scaleY",S.scaleY,(y?Cs(S.scaleY,y+d):d)-S.scaleY||0,bd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(ii,0,o[ii]),h=hb(h),S.svg?Ed(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&rs(this,S,"zOrigin",S.zOrigin,m),rs(this,o,_,zh(l),zh(h)));continue}else if(_==="svgOrigin"){Ed(t,h,1,b,0,this);continue}else if(_ in Z0){pb(this,S,_,u,y?Cs(u,y+h):h);continue}else if(_==="smoothOrigin"){rs(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){mb(this,h,t);continue}}else _ in o||(_=Ba(_)||_);if(A||(d||d===0)&&(u||u===0)&&!ZS.test(h)&&_ in o)p=(l+"").substr((u+"").length),d||(d=0),m=Mn(h)||(_ in ni.units?ni.units[_]:p),p!==m&&(u=as(t,_,l,m)),this._pt=new kn(this._pt,A?S:o,_,u,(y?Cs(u,y+d):d)-u,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?jS:bd),this._pt.u=m||0,A&&w!==h?(this._pt.b=l,this._pt.e=w,this._pt.r=KS):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=JS);else if(_ in o)cb.call(this,t,_,l,y?y+h:h);else if(_ in t)this.add(t,_,l||t[_],y?y+h:h,i,s);else if(_!=="parseTransform"){Dh(_,h);continue}A||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,l||t[_])),a.push(_)}}T&&Md(this)},render:function(t,e){if(e.tween._time||!Cd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:br,aliases:ar,getSetter:function(t,e,n){var i=ar[e];return i&&i.indexOf(",")<0&&(e=i),e in wr&&e!==ii&&(t._gsap.x||br(t,"x"))?n&&D0===n?e==="scale"?ib:nb:(D0=n||{})&&(e==="scale"?rb:sb):t.style&&!Lh(t.style[e])?tb:~e.indexOf("-")?eb:Oh(t,e)},core:{_removeProperty:ss,_getMatrix:Pd}};Pn.utils.checkPrefix=Ba;Pn.core.getStyleSaver=W0;(function(r,t,e,n){var i=zn(r+","+t+","+e,function(s){wr[s]=1});zn(t,function(s){ni.units[s]="deg",Z0[s]=1}),ar[i[13]]=r+","+t,zn(n,function(s){var a=s.split(":");ar[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Pn.registerPlugin(Id);var Ld=Pn.registerPlugin(Id)||Pn,NE=Ld.core.Tween;function K0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gb(r,t,e){return t&&K0(r.prototype,t),e&&K0(r,e),r}var Sn,Gh,_b,di,os,ls,ka,tg,Ns,Va,eg,Tr,Gi,ng,ig=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},rg=1,za=[],oe=[],Hi=[],rl=Date.now,Dd=function(t,e){return e},xb=function(){var t=Va.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Hi),oe=n,Hi=i,Dd=function(a,o){return e[a](o)}},Ar=function(t,e){return~Hi.indexOf(t)&&Hi[Hi.indexOf(t)+1][e]},sl=function(t){return!!~eg.indexOf(t)},Gn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},kh="scrollLeft",Vh="scrollTop",Nd=function(){return Tr&&Tr.isPressed||oe.cache++},Hh=function(t,e){var n=function i(s){if(s||s===0){rg&&(di.history.scrollRestoration="manual");var a=Tr&&Tr.isPressed;s=i.v=Math.round(s)||(Tr&&Tr.iOS?1:0),t(s),i.cacheID=oe.cache,a&&Dd("ss",s)}else(e||oe.cache!==i.cacheID||Dd("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},In={s:kh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hh(function(r){return arguments.length?di.scrollTo(r,en.sc()):di.pageXOffset||os[kh]||ls[kh]||ka[kh]||0})},en={s:Vh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Hh(function(r){return arguments.length?di.scrollTo(In.sc(),r):di.pageYOffset||os[Vh]||ls[Vh]||ka[Vh]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Sn.utils.toArray)(t)[0]||(typeof t=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},vb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Er=function(t,e){var n=e.s,i=e.sc;sl(t)&&(t=os.scrollingElement||ls);var s=oe.indexOf(t),a=i===en.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+a]||Gn(t,"scroll",Nd);var o=oe[s+a],c=o||(oe[s+a]=Hh(Ar(t,n),!0)||(sl(t)?i:Hh(function(l){return arguments.length?t[n]=l:t[n]})));return c.target=t,o||(c.smooth=Sn.getProperty(t,"scrollBehavior")==="smooth"),c},Qh=function(t,e,n){var i=t,s=t,a=rl(),o=a,c=e||50,l=Math.max(500,c*3),h=function(g,_){var p=rl();_||p-a>c?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,p=s,m=rl();return(g||g===0)&&g!==i&&h(g),a===o||m-o>l?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},il=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},j0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sg=function(){Va=Sn.core.globals().ScrollTrigger,Va&&Va.core&&xb()},ag=function(t){return Sn=t||ig(),!Gh&&Sn&&typeof document<"u"&&document.body&&(di=window,os=document,ls=os.documentElement,ka=os.body,eg=[di,os,ls,ka],_b=Sn.utils.clamp,ng=Sn.core.context||function(){},Ns="onpointerenter"in ka?"pointer":"mouse",tg=Ye.isTouch=di.matchMedia&&di.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in di||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gi=Ye.eventTypes=("ontouchstart"in ls?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ls?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rg=0},500),Gh=1),Va||sg(),Gh};In.op=en;oe.cache=0;var Ye=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Gh||ag(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),Va||sg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,A=n.onPress,v=n.onRelease,S=n.onRight,b=n.onLeft,T=n.onUp,x=n.onDown,w=n.onChangeX,R=n.onChangeY,N=n.onChange,D=n.onToggleX,U=n.onToggleY,C=n.onHover,B=n.onHoverEnd,W=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,L=n.onGestureEnd,tt=n.onWheel,vt=n.onEnable,wt=n.onDisable,Ot=n.onClick,Ht=n.scrollSpeed,kt=n.capture,$=n.allowClicks,it=n.lockAxis,_t=n.onLockAxis;this.target=o=Hn(o)||ls,this.vars=n,f&&(f=Sn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ht=Ht||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(di.getComputedStyle(ka).lineHeight)||22);var Vt,dt,Bt,Nt,Tt,qt,Ct,V=this,Kt=0,Zt=0,ee=n.passive||!h&&n.passive!==!1,Dt=Er(o,In),jt=Er(o,en),F=Dt(),ne=jt(),Qt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Gi[0]==="pointerdown",I=sl(o),M=o.ownerDocument||os,z=[0,0,0],Q=[0,0,0],j=0,ft=function(){return j=rl()},ht=function(at,Mt){return(V.event=at)&&f&&vb(at.target,f)||Mt&&Qt&&at.pointerType!=="touch"||k&&k(at,Mt)},nt=function(){V._vx.reset(),V._vy.reset(),dt.pause(),d&&d(V)},et=function(){var at=V.deltaX=j0(z),Mt=V.deltaY=j0(Q),ot=Math.abs(at)>=i,It=Math.abs(Mt)>=i;N&&(ot||It)&&N(V,at,Mt,z,Q),ot&&(S&&V.deltaX>0&&S(V),b&&V.deltaX<0&&b(V),w&&w(V),D&&V.deltaX<0!=Kt<0&&D(V),Kt=V.deltaX,z[0]=z[1]=z[2]=0),It&&(x&&V.deltaY>0&&x(V),T&&V.deltaY<0&&T(V),R&&R(V),U&&V.deltaY<0!=Zt<0&&U(V),Zt=V.deltaY,Q[0]=Q[1]=Q[2]=0),(Nt||Bt)&&(W&&W(V),Bt&&(p&&Bt===1&&p(V),y&&y(V),Bt=0),Nt=!1),qt&&!(qt=!1)&&_t&&_t(V),Tt&&(tt(V),Tt=!1),Vt=0},gt=function(at,Mt,ot){z[ot]+=at,Q[ot]+=Mt,V._vx.update(at),V._vy.update(Mt),l?Vt||(Vt=requestAnimationFrame(et)):et()},Pt=function(at,Mt){it&&!Ct&&(V.axis=Ct=Math.abs(at)>Math.abs(Mt)?"x":"y",qt=!0),Ct!=="y"&&(z[2]+=at,V._vx.update(at,!0)),Ct!=="x"&&(Q[2]+=Mt,V._vy.update(Mt,!0)),l?Vt||(Vt=requestAnimationFrame(et)):et()},pt=function(at){if(!ht(at,1)){at=il(at,h);var Mt=at.clientX,ot=at.clientY,It=Mt-V.x,St=ot-V.y,Xt=V.isDragging;V.x=Mt,V.y=ot,(Xt||(It||St)&&(Math.abs(V.startX-Mt)>=s||Math.abs(V.startY-ot)>=s))&&(Bt||(Bt=Xt?2:1),Xt||(V.isDragging=!0),Pt(It,St))}},mt=V.onPress=function(ct){ht(ct,1)||ct&&ct.button||(V.axis=Ct=null,dt.pause(),V.isPressed=!0,ct=il(ct),Kt=Zt=0,V.startX=V.x=ct.clientX,V.startY=V.y=ct.clientY,V._vx.reset(),V._vy.reset(),Gn(K?o:M,Gi[1],pt,ee,!0),V.deltaX=V.deltaY=0,A&&A(V))},ut=V.onRelease=function(ct){if(!ht(ct,1)){Vn(K?o:M,Gi[1],pt,!0);var at=!isNaN(V.y-V.startY),Mt=V.isDragging,ot=Mt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),It=il(ct);!ot&&at&&(V._vx.reset(),V._vy.reset(),h&&$&&Sn.delayedCall(.08,function(){if(rl()-j>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(M.createEvent){var St=M.createEvent("MouseEvents");St.initMouseEvent("click",!0,!0,di,1,It.screenX,It.screenY,It.clientX,It.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(St)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Mt&&!K&&dt.restart(!0),Bt&&et(),m&&Mt&&m(V),v&&v(V,ot)}},zt=function(at){return at.touches&&at.touches.length>1&&(V.isGesturing=!0)&&Y(at,V.isDragging)},Wt=function(){return(V.isGesturing=!1)||L(V)},P=function(at){if(!ht(at)){var Mt=Dt(),ot=jt();gt((Mt-F)*Ht,(ot-ne)*Ht,1),F=Mt,ne=ot,d&&dt.restart(!0)}},J=function(at){if(!ht(at)){at=il(at,h),tt&&(Tt=!0);var Mt=(at.deltaMode===1?c:at.deltaMode===2?di.innerHeight:1)*g;gt(at.deltaX*Mt,at.deltaY*Mt,0),d&&!K&&dt.restart(!0)}},H=function(at){if(!ht(at)){var Mt=at.clientX,ot=at.clientY,It=Mt-V.x,St=ot-V.y;V.x=Mt,V.y=ot,Nt=!0,d&&dt.restart(!0),(It||St)&&Pt(It,St)}},lt=function(at){V.event=at,C(V)},st=function(at){V.event=at,B(V)},rt=function(at){return ht(at)||il(at,h)&&Ot(V)};dt=V._dc=Sn.delayedCall(u||.25,nt).pause(),V.deltaX=V.deltaY=0,V._vx=Qh(0,50,!0),V._vy=Qh(0,50,!0),V.scrollX=Dt,V.scrollY=jt,V.isDragging=V.isGesturing=V.isPressed=!1,ng(this),V.enable=function(ct){return V.isEnabled||(Gn(I?M:o,"scroll",Nd),a.indexOf("scroll")>=0&&Gn(I?M:o,"scroll",P,ee,kt),a.indexOf("wheel")>=0&&Gn(o,"wheel",J,ee,kt),(a.indexOf("touch")>=0&&tg||a.indexOf("pointer")>=0)&&(Gn(o,Gi[0],mt,ee,kt),Gn(M,Gi[2],ut),Gn(M,Gi[3],ut),$&&Gn(o,"click",ft,!0,!0),Ot&&Gn(o,"click",rt),Y&&Gn(M,"gesturestart",zt),L&&Gn(M,"gestureend",Wt),C&&Gn(o,Ns+"enter",lt),B&&Gn(o,Ns+"leave",st),W&&Gn(o,Ns+"move",H)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Nt=Bt=!1,V._vx.reset(),V._vy.reset(),F=Dt(),ne=jt(),ct&&ct.type&&mt(ct),vt&&vt(V)),V},V.disable=function(){V.isEnabled&&(za.filter(function(ct){return ct!==V&&sl(ct.target)}).length||Vn(I?M:o,"scroll",Nd),V.isPressed&&(V._vx.reset(),V._vy.reset(),Vn(K?o:M,Gi[1],pt,!0)),Vn(I?M:o,"scroll",P,kt),Vn(o,"wheel",J,kt),Vn(o,Gi[0],mt,kt),Vn(M,Gi[2],ut),Vn(M,Gi[3],ut),Vn(o,"click",ft,!0),Vn(o,"click",rt),Vn(M,"gesturestart",zt),Vn(M,"gestureend",Wt),Vn(o,Ns+"enter",lt),Vn(o,Ns+"leave",st),Vn(o,Ns+"move",H),V.isEnabled=V.isPressed=V.isDragging=!1,wt&&wt(V))},V.kill=V.revert=function(){V.disable();var ct=za.indexOf(V);ct>=0&&za.splice(ct,1),Tr===V&&(Tr=0)},za.push(V),K&&sl(o)&&(Tr=V),V.enable(_)},gb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ye.version="3.15.0";Ye.create=function(r){return new Ye(r)};Ye.register=ag;Ye.getAll=function(){return za.slice()};Ye.getById=function(r){return za.filter(function(t){return t.vars.id===r})[0]};ig()&&Sn.registerPlugin(Ye);var Lt,Wa,he,be,gi,Se,Yd,au,vl,fl,ol,Wh,Ln,cu,Vd,Wn,og,lg,Xa,wg,Ud,Tg,Qn,Gd,Eg,Ag,cs,Hd,Zd,qa,$d,dl,Qd,Fd,Xh=1,Dn=Date.now,Od=Dn(),Ii=0,ll=0,cg=function(t,e,n){var i=mi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},hg=function(t,e){return e&&(!mi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},yb=function r(){return ll&&requestAnimationFrame(r)},ug=function(){return cu=1},fg=function(){return cu=0},or=function(t){return t},cl=function(t){return Math.round(t*1e5)/1e5||0},Cg=function(){return typeof window<"u"},Rg=function(){return Lt||Cg()&&(Lt=window.gsap)&&Lt.registerPlugin&&Lt},ks=function(t){return!!~Yd.indexOf(t)},Pg=function(t){return(t==="Height"?$d:he["inner"+t])||gi["client"+t]||Se["client"+t]},Ig=function(t){return Ar(t,"getBoundingClientRect")||(ks(t)?function(){return su.width=he.innerWidth,su.height=$d,su}:function(){return Cr(t)})},Mb=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Ar(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Pg(s):t["client"+s])||0}},Sb=function(t,e){return!e||~Hi.indexOf(t)?Ig(t):function(){return su}},lr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Ar(t,n))?a()-Ig(t)()[s]:ks(t)?(gi[n]||Se[n])-Pg(i):t[n]-t["offset"+i])},qh=function(t,e){for(var n=0;n<Xa.length;n+=3)(!e||~e.indexOf(Xa[n+1]))&&t(Xa[n],Xa[n+1],Xa[n+2])},mi=function(t){return typeof t=="string"},Nn=function(t){return typeof t=="function"},hl=function(t){return typeof t=="number"},Us=function(t){return typeof t=="object"},al=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ga=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ha=Math.abs,Lg="left",Dg="top",Jd="right",Kd="bottom",Os="width",Bs="height",pl="Right",ml="Left",gl="Top",_l="Bottom",nn="padding",Ri="margin",Za="Width",jd="Height",ln="px",Pi=function(t){return he.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},bb=function(t){var e=Pi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Cr=function(t,e){var n=e&&Pi(t)[Vd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ou=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ng=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},wb=function(t){return function(e){return Lt.utils.snap(Ng(t),e)}},tp=function(t){var e=Lt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Tb=function(t){return function(e,n){return tp(Ng(t))(e,n.direction)}},Yh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$h={toggleActions:"play",anticipatePin:0},lu={top:0,left:0,center:.5,bottom:1,right:1},eu=function(t,e){if(mi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in lu?lu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Jh=function(t,e,n,i,s,a,o,c){var l=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=be.createElement("div"),_=ks(n)||Ar(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?Se:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,A=y?l:h,v="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||c)&&_?"fixed;":"absolute;"),(p||c||!_)&&(v+=(i===en?Jd:Kd)+":"+(a+parseFloat(u))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],nu(g,0,i,y),g},nu=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Za]=1,s["border"+o+Za]=0,s[n.p]=e+"px",Lt.set(t,s)},le=[],Wd={},yl,mg=function(){return Dn()-Ii>34&&(yl||(yl=requestAnimationFrame(Rr)))},Qa=function(){(!Qn||!Qn.isPressed||Qn.startX>Se.clientWidth)&&(oe.cache++,Qn?yl||(yl=requestAnimationFrame(Rr)):Rr(),Ii||Gs("scrollStart"),Ii=Dn())},Bd=function(){Ag=he.innerWidth,Eg=he.innerHeight},ul=function(t){oe.cache++,(t===!0||!Ln&&!Tg&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!Gd||Ag!==he.innerWidth||Math.abs(he.innerHeight-Eg)>he.innerHeight*.25))&&au.restart(!0)},Vs={},Eb=[],Ug=function r(){return pn(ie,"scrollEnd",r)||Fs(!0)},Gs=function(t){return Vs[t]&&Vs[t].map(function(e){return e()})||Eb},pi=[],Fg=function(t){for(var e=0;e<pi.length;e+=5)(!t||pi[e+4]&&pi[e+4].query===t)&&(pi[e].style.cssText=pi[e+1],pi[e].getBBox&&pi[e].setAttribute("transform",pi[e+2]||""),pi[e+3].uncache=1)},Og=function(){return oe.forEach(function(t){return Nn(t)&&++t.cacheID&&(t.rec=t())})},ep=function(t,e){var n;for(Wn=0;Wn<le.length;Wn++)n=le[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));dl=!0,e&&Fg(e),e||Gs("revert")},Bg=function(t,e){oe.cache++,(e||!Xn)&&oe.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),mi(t)&&(he.history.scrollRestoration=Zd=t)},Xn,zs=0,gg,Ab=function(){if(gg!==zs){var t=gg=zs;requestAnimationFrame(function(){return t===zs&&Fs(!0)})}},zg=function(){Se.appendChild(qa),$d=!Qn&&qa.offsetHeight||he.innerHeight,Se.removeChild(qa)},_g=function(t){return vl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fs=function(t,e){if(gi=be.documentElement,Se=be.body,Yd=[he,be,gi,Se],Ii&&!t&&!dl){mn(ie,"scrollEnd",Ug);return}zg(),Xn=ie.isRefreshing=!0,dl||Og();var n=Gs("refreshInit");wg&&ie.sort(),e||ep(),oe.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),le.slice(0).forEach(function(i){return i.refresh()}),dl=!1,le.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Qd=1,_g(!0),le.forEach(function(i){var s=lr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_g(!1),Qd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bg(Zd,1),au.pause(),zs++,Xn=2,Rr(2),le.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=ie.isRefreshing=!1,Gs("refresh")},Xd=0,iu=1,xl,Rr=function(t){if(t===2||!Xn&&!dl){ie.isUpdating=!0,xl&&xl.update(0);var e=le.length,n=Dn(),i=n-Od>=50,s=e&&le[0].scroll();if(iu=Xd>s?-1:1,Xn||(Xd=s),i&&(Ii&&!cu&&n-Ii>200&&(Ii=0,Gs("scrollEnd")),ol=Od,Od=n),iu<0){for(Wn=e;Wn-- >0;)le[Wn]&&le[Wn].update(0,i);iu=1}else for(Wn=0;Wn<e;Wn++)le[Wn]&&le[Wn].update(0,i);ie.isUpdating=!1}yl=0},qd=[Lg,Dg,Kd,Jd,Ri+_l,Ri+pl,Ri+gl,Ri+ml,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ru=qd.concat([Os,Bs,"boxSizing","max"+Za,"max"+jd,"position",Ri,nn,nn+gl,nn+pl,nn+_l,nn+ml]),Cb=function(t,e,n){Ya(n);var i=t._gsap;if(i.spacerIsNative)Ya(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},zd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=qd.length,a=e.style,o=t.style,c;s--;)c=qd[s],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Kd]=o[Jd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Os]=ou(t,In)+ln,a[Bs]=ou(t,en)+ln,a[nn]=o[Ri]=o[Dg]=o[Lg]="0",Ya(i),o[Os]=o["max"+Za]=n[Os],o[Bs]=o["max"+jd]=n[Bs],o[nn]=n[nn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Rb=/([A-Z])/g,Ya=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Lt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Rb,"-$1").toLowerCase())}},Kh=function(t){for(var e=ru.length,n=t.style,i=[],s=0;s<e;s++)i.push(ru[s],n[ru[s]]);return i.t=t,i},Pb=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},su={left:0,top:0},xg=function(t,e,n,i,s,a,o,c,l,h,d,u,f,g){Nn(t)&&(t=t(c)),mi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?eu("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,y;if(f&&f.seek(0),isNaN(t)||(t=+t),hl(t))f&&(t=Lt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&nu(o,n,i,!0);else{Nn(e)&&(e=e(c));var A=(t||"0").split(" "),v,S,b,T;y=Hn(e,c)||Se,v=Cr(y)||{},(!v||!v.left&&!v.top)&&Pi(y).display==="none"&&(T=y.style.display,y.style.display="block",v=Cr(y),T?y.style.display=T:y.style.removeProperty("display")),S=eu(A[0],v[i.d]),b=eu(A[1]||"0",n),t=v[i.p]-l[i.p]-h+S+s-b,o&&nu(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(c[g]=t||-.001,t<0&&(t=0)),a){var x=t+n,w=a._isStart;p="scroll"+i.d2,nu(a,x,i,w&&x>20||!w&&(d?Math.max(Se[p],gi[p]):a.parentNode[p])<=x+1),d&&(l=Cr(o),d&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+ln))}return f&&y&&(p=Cr(y),f.seek(u),m=Cr(y),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Ib=/(webkit|moz|length|cssText|inset)/i,vg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===Se){t._stOrig=s.cssText,o=Pi(t);for(a in o)!+a&&!Ib.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Lt.core.getCache(t).uncache=1,e.appendChild(t)}},kg=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},jh=function(t,e,n){var i={};i[e.p]="+="+n,Lt.set(t,i)},yg=function(t,e){var n=Er(t,e),i="_scroll"+e.p2,s=function a(o,c,l,h,d){var u=a.tween,f=c.onComplete,g={};l=l||n();var _=kg(n,l,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-l,u&&u.kill(),c[i]=o,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+h*u.ratio+d*u.ratio*u.ratio)},c.onUpdate=function(){oe.cache++,a.tween&&Rr()},c.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Lt.to(t,c),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(t,"wheel",n.wheelHandler),ie.isTouch&&mn(t,"touchmove",n.wheelHandler),s},ie=(function(){function r(e,n){Wa||r.register(Lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hd(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ll){this.update=this.refresh=this.kill=or;return}n=dg(mi(n)||hl(n)||n.nodeType?{trigger:n}:n,$h);var s=n,a=s.onUpdate,o=s.toggleClass,c=s.id,l=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,A=s.once,v=s.snap,S=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:en,N=!d&&d!==0,D=Hn(n.scroller||he),U=Lt.core.getCache(D),C=ks(D),B=("pinType"in n?n.pinType:Ar(D,"pinType")||C&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=N&&n.toggleActions.split(" "),K="markers"in n?n.markers:$h.markers,Y=C?0:parseFloat(Pi(D)["border"+R.p2+Za])||0,L=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(L)},vt=Mb(D,C,R),wt=Sb(D,C),Ot=0,Ht=0,kt=0,$=Er(D,R),it,_t,Vt,dt,Bt,Nt,Tt,qt,Ct,V,Kt,Zt,ee,Dt,jt,F,ne,Qt,I,M,z,Q,j,ft,ht,nt,et,gt,Pt,pt,mt,ut,zt,Wt,P,J,H,lt,st;if(L._startClamp=L._endClamp=!1,L._dir=R,p*=45,L.scroller=D,L.scroll=T?T.time.bind(T):$,dt=$(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(wg=1,n.refreshPriority===-9999&&(xl=L)),U.tweenScroll=U.tweenScroll||{top:yg(D,en),left:yg(D,In)},L.tweenTo=it=U.tweenScroll[R.p],L.scrubDuration=function(ot){zt=hl(ot)&&ot,zt?ut?ut.duration(ot):ut=Lt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:zt,paused:!0,onComplete:function(){return m&&m(L)}}):(ut&&ut.progress(1).kill(),ut=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),pt=0,c||(c=i.vars.id)),v&&((!Us(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Se.style&&Lt.set(C?[Se,gi]:D,{scrollBehavior:"auto"}),oe.forEach(function(ot){return Nn(ot)&&ot.target===(C?be.scrollingElement||gi:D)&&(ot.smooth=!1)}),Vt=Nn(v.snapTo)?v.snapTo:v.snapTo==="labels"?wb(i):v.snapTo==="labelsDirectional"?Tb(i):v.directional!==!1?function(ot,It){return tp(v.snapTo)(ot,Dn()-Ht<500?0:It.direction)}:Lt.utils.snap(v.snapTo),Wt=v.duration||{min:.1,max:2},Wt=Us(Wt)?fl(Wt.min,Wt.max):fl(Wt,Wt),P=Lt.delayedCall(v.delay||zt/2||.1,function(){var ot=$(),It=Dn()-Ht<500,St=it.tween;if((It||Math.abs(L.getVelocity())<10)&&!St&&!cu&&Ot!==ot){var Xt=(ot-Nt)/Dt,Ve=i&&!N?i.totalProgress():Xt,re=It?0:(Ve-mt)/(Dn()-ol)*1e3||0,ce=Lt.utils.clamp(-Xt,1-Xt,Ha(re/2)*re/.185),Ze=Xt+(v.inertia===!1?0:ce),we,Te,ue=v,cn=ue.onStart,Ee=ue.onInterrupt,Re=ue.onComplete;if(we=Vt(Ze,L),hl(we)||(we=Ze),Te=Math.max(0,Math.round(Nt+we*Dt)),ot<=Tt&&ot>=Nt&&Te!==ot){if(St&&!St._initted&&St.data<=Ha(Te-ot))return;v.inertia===!1&&(ce=we-Xt),it(Te,{duration:Wt(Ha(Math.max(Ha(Ze-Ve),Ha(we-Ve))*.185/re/.05||0)),ease:v.ease||"power3",data:Ha(Te-ot),onInterrupt:function(){return P.restart(!0)&&Ee&&Ga(L,Ee)},onComplete:function(){L.update(),Ot=$(),i&&!N&&(ut?ut.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),pt=mt=i&&!N?i.totalProgress():L.progress,y&&y(L),Re&&Ga(L,Re)}},ot,ce*Dt,Te-ot-ce*Dt),cn&&Ga(L,cn,it.tween)}}else L.isActive&&Ot!==ot&&P.restart(!0)}).pause()),c&&(Wd[c]=L),u=L.trigger=Hn(u||f!==!0&&f),st=u&&u._gsap&&u._gsap.stRevert,st&&(st=st(L)),f=f===!0?u:Hn(f),mi(o)&&(o={targets:u,className:o}),f&&(g===!1||g===Ri||(g=!g&&f.parentNode&&f.parentNode.style&&Pi(f.parentNode).display==="flex"?!1:nn),L.pin=f,_t=Lt.core.getCache(f),_t.spacer?jt=_t.pinState:(b&&(b=Hn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),_t.spacerIsNative=!!b,b&&(_t.spacerState=Kh(b))),_t.spacer=Qt=b||be.createElement("div"),Qt.classList.add("pin-spacer"),c&&Qt.classList.add("pin-spacer-"+c),_t.pinState=jt=Kh(f)),n.force3D!==!1&&Lt.set(f,{force3D:!0}),L.spacer=Qt=_t.spacer,Pt=Pi(f),ft=Pt[g+R.os2],M=Lt.getProperty(f),z=Lt.quickSetter(f,R.a,ln),zd(f,Qt,Pt),ne=Kh(f)),K){Zt=Us(K)?dg(K,pg):pg,V=Jh("scroller-start",c,D,R,Zt,0),Kt=Jh("scroller-end",c,D,R,Zt,0,V),I=V["offset"+R.op.d2];var rt=Hn(Ar(D,"content")||D);qt=this.markerStart=Jh("start",c,rt,R,Zt,I,0,T),Ct=this.markerEnd=Jh("end",c,rt,R,Zt,I,0,T),T&&(lt=Lt.quickSetter([qt,Ct],R.a,ln)),!B&&!(Hi.length&&Ar(D,"fixedMarkers")===!0)&&(bb(C?Se:D),Lt.set([V,Kt],{force3D:!0}),nt=Lt.quickSetter(V,R.a,ln),gt=Lt.quickSetter(Kt,R.a,ln))}if(T){var ct=T.vars.onUpdate,at=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),ct&&ct.apply(T,at||[])})}if(L.previous=function(){return le[le.indexOf(L)-1]},L.next=function(){return le[le.indexOf(L)+1]},L.revert=function(ot,It){if(!It)return L.kill(!0);var St=ot!==!1||!L.enabled,Xt=Ln;St!==L.isReverted&&(St&&(J=Math.max($(),L.scroll.rec||0),kt=L.progress,H=i&&i.progress()),qt&&[qt,Ct,V,Kt].forEach(function(Ve){return Ve.style.display=St?"none":"block"}),St&&(Ln=L,L.update(St)),f&&(!S||!L.isActive)&&(St?Cb(f,Qt,jt):zd(f,Qt,Pi(f),ht)),St||L.update(St),Ln=Xt,L.isReverted=St)},L.refresh=function(ot,It,St,Xt){if(!((Ln||!L.enabled)&&!It)){if(f&&ot&&Ii){mn(r,"scrollEnd",Ug);return}!Xn&&tt&&tt(L),Ln=L,it.tween&&!St&&(it.tween.kill(),it.tween=0),ut&&ut.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xt){return xt.vars.immediateRender&&xt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ve=vt(),re=wt(),ce=T?T.duration():lr(D,R),Ze=Dt<=.01||!Dt,we=0,Te=Xt||0,ue=Us(St)?St.end:n.end,cn=n.endTrigger||u,Ee=Us(St)?St.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Re=L.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,L),hn=u&&Math.max(0,le.indexOf(L))||0,Oe=hn,Ne,We,Wi,Ws,un,$e,xi,Xs,E,O,Z,X,q;for(K&&Us(St)&&(X=Lt.getProperty(V,R.p),q=Lt.getProperty(Kt,R.p));Oe-- >0;)$e=le[Oe],$e.end||$e.refresh(0,1)||(Ln=L),xi=$e.pin,xi&&(xi===u||xi===f||xi===Re)&&!$e.isReverted&&(O||(O=[]),O.unshift($e),$e.revert(!0,!0)),$e!==le[Oe]&&(hn--,Oe--);for(Nn(Ee)&&(Ee=Ee(L)),Ee=cg(Ee,"start",L),Nt=xg(Ee,u,Ve,R,$(),qt,V,L,re,Y,B,ce,T,L._startClamp&&"_startClamp")||(f?-.001:0),Nn(ue)&&(ue=ue(L)),mi(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(mi(Ee)?Ee.split(" ")[0]:"")+ue:(we=eu(ue.substr(2),Ve),ue=mi(Ee)?Ee:(T?Lt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Nt):Nt)+we,cn=u)),ue=cg(ue,"end",L),Tt=Math.max(Nt,xg(ue||(cn?"100% 0":ce),cn,Ve,R,$()+we,Ct,Kt,L,re,Y,B,ce,T,L._endClamp&&"_endClamp"))||-.001,we=0,Oe=hn;Oe--;)$e=le[Oe]||{},xi=$e.pin,xi&&$e.start-$e._pinPush<=Nt&&!T&&$e.end>0&&(Ne=$e.end-(L._startClamp?Math.max(0,$e.start):$e.start),(xi===u&&$e.start-$e._pinPush<Nt||xi===Re)&&isNaN(Ee)&&(we+=Ne*(1-$e.progress)),xi===f&&(Te+=Ne));if(Nt+=we,Tt+=we,L._startClamp&&(L._startClamp+=we),L._endClamp&&!Xn&&(L._endClamp=Tt||-.001,Tt=Math.min(Tt,lr(D,R))),Dt=Tt-Nt||(Nt-=.01)&&.001,Ze&&(kt=Lt.utils.clamp(0,1,Lt.utils.normalize(Nt,Tt,J))),L._pinPush=Te,qt&&we&&(Ne={},Ne[R.a]="+="+we,Re&&(Ne[R.p]="-="+$()),Lt.set([qt,Ct],Ne)),f&&!(Qd&&L.end>=lr(D,R)))Ne=Pi(f),Ws=R===en,Wi=$(),Q=parseFloat(M(R.a))+Te,!ce&&Tt>1&&(Z=(C?be.scrollingElement||gi:D).style,Z={style:Z,value:Z["overflow"+R.a.toUpperCase()]},C&&Pi(Se)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+R.a.toUpperCase()]="scroll")),zd(f,Qt,Ne),ne=Kh(f),We=Cr(f,!0),Xs=B&&Er(D,Ws?In:en)(),g?(ht=[g+R.os2,Dt+Te+ln],ht.t=Qt,Oe=g===nn?ou(f,R)+Dt+Te:0,Oe&&(ht.push(R.d,Oe+ln),Qt.style.flexBasis!=="auto"&&(Qt.style.flexBasis=Oe+ln)),Ya(ht),Re&&le.forEach(function(xt){xt.pin===Re&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),B&&$(J)):(Oe=ou(f,R),Oe&&Qt.style.flexBasis!=="auto"&&(Qt.style.flexBasis=Oe+ln)),B&&(un={top:We.top+(Ws?Wi-Nt:Xs)+ln,left:We.left+(Ws?Xs:Wi-Nt)+ln,boxSizing:"border-box",position:"fixed"},un[Os]=un["max"+Za]=Math.ceil(We.width)+ln,un[Bs]=un["max"+jd]=Math.ceil(We.height)+ln,un[Ri]=un[Ri+gl]=un[Ri+pl]=un[Ri+_l]=un[Ri+ml]="0",un[nn]=Ne[nn],un[nn+gl]=Ne[nn+gl],un[nn+pl]=Ne[nn+pl],un[nn+_l]=Ne[nn+_l],un[nn+ml]=Ne[nn+ml],F=Pb(jt,un,S),Xn&&$(0)),i?(E=i._initted,Ud(1),i.render(i.duration(),!0,!0),j=M(R.a)-Q+Dt+Te,et=Math.abs(Dt-j)>1,B&&et&&F.splice(F.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ud(0)):j=Dt,Z&&(Z.value?Z.style["overflow"+R.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+R.a));else if(u&&$()&&!T)for(We=u.parentNode;We&&We!==Se;)We._pinOffset&&(Nt-=We._pinOffset,Tt-=We._pinOffset),We=We.parentNode;O&&O.forEach(function(xt){return xt.revert(!1,!0)}),L.start=Nt,L.end=Tt,dt=Bt=Xn?J:$(),!T&&!Xn&&(dt<J&&$(J),L.scroll.rec=0),L.revert(!1,!0),Ht=Dn(),P&&(Ot=-1,P.restart(!0)),Ln=0,i&&N&&(i._initted||H)&&i.progress()!==H&&i.progress(H||0,!0).render(i.time(),!0,!0),(Ze||kt!==L.progress||T||_||i&&!i._initted)&&(i&&!N&&(i._initted||kt||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Nt<-.001&&!kt?Lt.utils.normalize(Nt,Tt,0):kt,!0),L.progress=Ze||(dt-Nt)/Dt===kt?0:kt),f&&g&&(Qt._pinOffset=Math.round(L.progress*j)),ut&&ut.invalidate(),isNaN(X)||(X-=Lt.getProperty(V,R.p),q-=Lt.getProperty(Kt,R.p),jh(V,R,X),jh(qt,R,X-(Xt||0)),jh(Kt,R,q),jh(Ct,R,q-(Xt||0))),Ze&&!Xn&&L.update(),h&&!Xn&&!ee&&(ee=!0,h(L),ee=!1)}},L.getVelocity=function(){return($()-Bt)/(Dn()-ol)*1e3||0},L.endAnimation=function(){al(L.callbackAnimation),i&&(ut?ut.progress(1):i.paused()?N||al(i,L.direction<0,1):al(i,i.reversed()))},L.labelToScroll=function(ot){return i&&i.labels&&(Nt||L.refresh()||Nt)+i.labels[ot]/i.duration()*Dt||0},L.getTrailing=function(ot){var It=le.indexOf(L),St=L.direction>0?le.slice(0,It).reverse():le.slice(It+1);return(mi(ot)?St.filter(function(Xt){return Xt.vars.preventOverlaps===ot}):St).filter(function(Xt){return L.direction>0?Xt.end<=Nt:Xt.start>=Tt})},L.update=function(ot,It,St){if(!(T&&!St&&!ot)){var Xt=Xn===!0?J:L.scroll(),Ve=ot?0:(Xt-Nt)/Dt,re=Ve<0?0:Ve>1?1:Ve||0,ce=L.progress,Ze,we,Te,ue,cn,Ee,Re,hn;if(It&&(Bt=dt,dt=T?$():Xt,v&&(mt=pt,pt=i&&!N?i.totalProgress():re)),p&&f&&!Ln&&!Xh&&Ii&&(!re&&Nt<Xt+(Xt-Bt)/(Dn()-ol)*p?re=1e-4:re===1&&Tt>Xt+(Xt-Bt)/(Dn()-ol)*p&&(re=.9999)),re!==ce&&L.enabled){if(Ze=L.isActive=!!re&&re<1,we=!!ce&&ce<1,Ee=Ze!==we,cn=Ee||!!re!=!!ce,L.direction=re>ce?1:-1,L.progress=re,cn&&!Ln&&(Te=re&&!ce?0:re===1?1:ce===1?2:3,N&&(ue=!Ee&&k[Te+1]!=="none"&&k[Te+1]||k[Te],hn=i&&(ue==="complete"||ue==="reset"||ue in i))),w&&(Ee||hn)&&(hn||d||!i)&&(Nn(w)?w(L):L.getTrailing(w).forEach(function(Wi){return Wi.endAnimation()})),N||(ut&&!Ln&&!Xh?(ut._dp._time-ut._start!==ut._time&&ut.render(ut._dp._time-ut._start),ut.resetTo?ut.resetTo("totalProgress",re,i._tTime/i._tDur):(ut.vars.totalProgress=re,ut.invalidate().restart())):i&&i.totalProgress(re,!!(Ln&&(Ht||ot)))),f){if(ot&&g&&(Qt.style[g+R.os2]=ft),!B)z(cl(Q+j*re));else if(cn){if(Re=!ot&&re>ce&&Tt+1>Xt&&Xt+1>=lr(D,R),S)if(!ot&&(Ze||Re)){var Oe=Cr(f,!0),Ne=Xt-Nt;vg(f,Se,Oe.top+(R===en?Ne:0)+ln,Oe.left+(R===en?0:Ne)+ln)}else vg(f,Qt);Ya(Ze||Re?F:ne),et&&re<1&&Ze||z(Q+(re===1&&!Re?j:0))}}v&&!it.tween&&!Ln&&!Xh&&P.restart(!0),o&&(Ee||A&&re&&(re<1||!Fd))&&vl(o.targets).forEach(function(Wi){return Wi.classList[Ze||A?"add":"remove"](o.className)}),a&&!N&&!ot&&a(L),cn&&!Ln?(N&&(hn&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),a&&a(L)),(Ee||!Fd)&&(l&&Ee&&Ga(L,l),W[Te]&&Ga(L,W[Te]),A&&(re===1?L.kill(!1,1):W[Te]=0),Ee||(Te=re===1?1:3,W[Te]&&Ga(L,W[Te]))),x&&!Ze&&Math.abs(L.getVelocity())>(hl(x)?x:2500)&&(al(L.callbackAnimation),ut?ut.progress(1):al(i,ue==="reverse"?1:!re,1))):N&&a&&!Ln&&a(L)}if(gt){var We=T?Xt/T.duration()*(T._caScrollDist||0):Xt;nt(We+(V._isFlipped?1:0)),gt(We)}lt&&lt(-Xt/T.duration()*(T._caScrollDist||0))}},L.enable=function(ot,It){L.enabled||(L.enabled=!0,mn(D,"resize",ul),C||mn(D,"scroll",Qa),tt&&mn(r,"refreshInit",tt),ot!==!1&&(L.progress=kt=0,dt=Bt=Ot=$()),It!==!1&&L.refresh())},L.getTween=function(ot){return ot&&it?it.tween:ut},L.setPositions=function(ot,It,St,Xt){if(T){var Ve=T.scrollTrigger,re=T.duration(),ce=Ve.end-Ve.start;ot=Ve.start+ce*ot/re,It=Ve.start+ce*It/re}L.refresh(!1,!1,{start:hg(ot,St&&!!L._startClamp),end:hg(It,St&&!!L._endClamp)},Xt),L.update()},L.adjustPinSpacing=function(ot){if(ht&&ot){var It=ht.indexOf(R.d)+1;ht[It]=parseFloat(ht[It])+ot+ln,ht[1]=parseFloat(ht[1])+ot+ln,Ya(ht)}},L.disable=function(ot,It){if(ot!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,It||ut&&ut.pause(),J=0,_t&&(_t.uncache=1),tt&&pn(r,"refreshInit",tt),P&&(P.pause(),it.tween&&it.tween.kill()&&(it.tween=0)),!C)){for(var St=le.length;St--;)if(le[St].scroller===D&&le[St]!==L)return;pn(D,"resize",ul),C||pn(D,"scroll",Qa)}},L.kill=function(ot,It){L.disable(ot,It),ut&&!It&&ut.kill(),c&&delete Wd[c];var St=le.indexOf(L);St>=0&&le.splice(St,1),St===Wn&&iu>0&&Wn--,St=0,le.forEach(function(Xt){return Xt.scroller===L.scroller&&(St=1)}),St||Xn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ot&&i.revert({kill:!1}),It||i.kill()),qt&&[qt,Ct,V,Kt].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),xl===L&&(xl=0),f&&(_t&&(_t.uncache=1),St=0,le.forEach(function(Xt){return Xt.pin===f&&St++}),St||(_t.spacer=0)),n.onKill&&n.onKill(L)},le.push(L),L.enable(!1,!1),st&&st(L),i&&i.add&&!Dt){var Mt=L.update;L.update=function(){L.update=Mt,oe.cache++,Nt||Tt||L.refresh()},Lt.delayedCall(.01,L.update),Dt=.01,Nt=Tt=0}else L.refresh();f&&Ab()},r.register=function(n){return Wa||(Lt=n||Rg(),Cg()&&window.document&&r.enable(),Wa=ll),Wa},r.defaults=function(n){if(n)for(var i in n)$h[i]=n[i];return $h},r.disable=function(n,i){ll=0,le.forEach(function(a){return a[i?"kill":"disable"](n)}),pn(he,"wheel",Qa),pn(be,"scroll",Qa),clearInterval(Wh),pn(be,"touchcancel",or),pn(Se,"touchstart",or),Yh(pn,be,"pointerdown,touchstart,mousedown",ug),Yh(pn,be,"pointerup,touchend,mouseup",fg),au.kill(),qh(pn);for(var s=0;s<oe.length;s+=3)Zh(pn,oe[s],oe[s+1]),Zh(pn,oe[s],oe[s+2])},r.enable=function(){if(he=window,be=document,gi=be.documentElement,Se=be.body,Lt){if(vl=Lt.utils.toArray,fl=Lt.utils.clamp,Hd=Lt.core.context||or,Ud=Lt.core.suppressOverwrites||or,Zd=he.history.scrollRestoration||"auto",Xd=he.pageYOffset||0,Lt.core.globals("ScrollTrigger",r),Se){ll=1,qa=document.createElement("div"),qa.style.height="100vh",qa.style.position="absolute",zg(),yb(),Ye.register(Lt),r.isTouch=Ye.isTouch,cs=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gd=Ye.isTouch===1,mn(he,"wheel",Qa),Yd=[he,be,gi,Se],Lt.matchMedia?(r.matchMedia=function(h){var d=Lt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Lt.addEventListener("matchMediaInit",function(){Og(),ep()}),Lt.addEventListener("matchMediaRevert",function(){return Fg()}),Lt.addEventListener("matchMedia",function(){Fs(0,1),Gs("matchMedia")}),Lt.matchMedia().add("(orientation: portrait)",function(){return Bd(),Bd})):console.warn("Requires GSAP 3.11.0 or later"),Bd(),mn(be,"scroll",Qa);var n=Se.hasAttribute("style"),i=Se.style,s=i.borderTopStyle,a=Lt.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Cr(Se),en.m=Math.round(o.top+en.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Se.setAttribute("style",""),Se.removeAttribute("style")),Wh=setInterval(mg,250),Lt.delayedCall(.5,function(){return Xh=0}),mn(be,"touchcancel",or),mn(Se,"touchstart",or),Yh(mn,be,"pointerdown,touchstart,mousedown",ug),Yh(mn,be,"pointerup,touchend,mouseup",fg),Vd=Lt.utils.checkPrefix("transform"),ru.push(Vd),Wa=Dn(),au=Lt.delayedCall(.2,Fs).pause(),Xa=[be,"visibilitychange",function(){var h=he.innerWidth,d=he.innerHeight;be.hidden?(og=h,lg=d):(og!==h||lg!==d)&&ul()},be,"DOMContentLoaded",Fs,he,"load",Fs,he,"resize",ul],qh(mn),le.forEach(function(h){return h.enable(0,1)}),c=0;c<oe.length;c+=3)Zh(pn,oe[c],oe[c+1]),Zh(pn,oe[c],oe[c+2])}else if(be){var l=function h(){r.enable(),be.removeEventListener("DOMContentLoaded",h)};be.addEventListener("DOMContentLoaded",l)}}},r.config=function(n){"limitCallbacks"in n&&(Fd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wh)||(Wh=i)&&setInterval(mg,i),"ignoreMobileResize"in n&&(Gd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qh(pn)||qh(mn,n.autoRefreshEvents||"none"),Tg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),a=oe.indexOf(s),o=ks(s);~a&&oe.splice(a,o?6:2),i&&(o?Hi.unshift(he,i,Se,i,gi,i):Hi.unshift(s,i))},r.clearMatchMedia=function(n){le.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(mi(n)?Hn(n):n).getBoundingClientRect(),o=a[s?Os:Bs]*i||0;return s?a.right-o>0&&a.left+o<he.innerWidth:a.bottom-o>0&&a.top+o<he.innerHeight},r.positionInViewport=function(n,i,s){mi(n)&&(n=Hn(n));var a=n.getBoundingClientRect(),o=a[s?Os:Bs],c=i==null?o/2:i in lu?lu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+c)/he.innerWidth:(a.top+c)/he.innerHeight},r.killAll=function(n){if(le.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vs.killAll||[];Vs={},i.forEach(function(s){return s()})}},r})();ie.version="3.15.0";ie.saveStyles=function(r){return r?vl(r).forEach(function(t){if(t&&t.style){var e=pi.indexOf(t);e>=0&&pi.splice(e,5),pi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Lt.core.getCache(t),Hd())}}):pi};ie.revert=function(r,t){return ep(!r,t)};ie.create=function(r,t){return new ie(r,t)};ie.refresh=function(r){return r?ul(!0):(Wa||ie.register())&&Fs(!0)};ie.update=function(r){return++oe.cache&&Rr(r===!0?2:0)};ie.clearScrollMemory=Bg;ie.maxScroll=function(r,t){return lr(r,t?In:en)};ie.getScrollFunc=function(r,t){return Er(Hn(r),t?In:en)};ie.getById=function(r){return Wd[r]};ie.getAll=function(){return le.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Ii};ie.snapDirectional=tp;ie.addEventListener=function(r,t){var e=Vs[r]||(Vs[r]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(r,t){var e=Vs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(l,h){var d=[],u=[],f=Lt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Nn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Nn(s)&&(s=s(),mn(ie,"refresh",function(){return s=t.batchMax()})),vl(r).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,e.push(ie.create(l))}),e};var Mg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},kd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===gi&&r(Se,e)},tu={auto:1,scroll:1},Lb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Lt.core.getCache(s),o=Dn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Se&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(tu[(c=Pi(s)).overflowY]||tu[c.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ks(s)&&(tu[(c=Pi(s)).overflowY]||tu[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vg=function(t,e,n,i){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Lb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(be,Ye.eventTypes[0],bg,!1,!0)},onDisable:function(){return pn(be,Ye.eventTypes[0],bg,!0)}})},Db=/(input|label|select|textarea)/i,Sg,bg=function(t){var e=Db.test(t.target.tagName);(e||Sg)&&(t._gsapAllow=!0,Sg=e)},Nb=function(t){Us(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,c,l=Hn(t.target)||gi,h=Lt.core.globals().ScrollSmoother,d=h&&h.get(),u=cs&&(t.content&&Hn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Er(l,en),g=Er(l,In),_=1,p=(Ye.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,m=0,y=Nn(i)?function(){return i(o)}:function(){return i||2.8},A,v,S=Vg(l,t.type,!0,s),b=function(){return v=!1},T=or,x=or,w=function(){c=lr(l,en),x=fl(cs?1:0,c),n&&(T=fl(0,lr(l,In))),A=zs},R=function(){u._gsap.y=cl(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(v){requestAnimationFrame(b);var K=cl(o.deltaY/2),Y=x(f.v-K);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var L=cl((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",u._gsap.y=L+"px",f.cacheID=oe.cache,Rr()}return!0}f.offset&&R(),v=!0},D,U,C,B,W=function(){w(),D.isActive()&&D.vars.scrollY>c&&(f()>c?D.progress(1)&&f(c):D.resetTo("scrollY",c))};return u&&Lt.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return cs&&k.type==="touchmove"&&N(k)||_>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){v=!1;var k=_;_=cl((he.visualViewport&&he.visualViewport.scale||1)/p),D.pause(),k!==_&&kd(l,_>1.01?!0:n?!1:"x"),U=g(),C=f(),w(),A=zs},t.onRelease=t.onGestureStart=function(k,K){if(f.offset&&R(),!K)B.restart(!0);else{oe.cache++;var Y=y(),L,tt;n&&(L=g(),tt=L+Y*.05*-k.velocityX/.227,Y*=Mg(g,L,tt,lr(l,In)),D.vars.scrollX=T(tt)),L=f(),tt=L+Y*.05*-k.velocityY/.227,Y*=Mg(f,L,tt,lr(l,en)),D.vars.scrollY=x(tt),D.invalidate().duration(Y).play(.01),(cs&&D.vars.scrollY>=c||L>=c-1)&&Lt.to({},{onUpdate:W,duration:Y})}a&&a(k)},t.onWheel=function(){D._ts&&D.pause(),Dn()-m>1e3&&(A=0,m=Dn())},t.onChange=function(k,K,Y,L,tt){if(zs!==A&&w(),K&&n&&g(T(L[2]===K?U+(k.startX-k.x):g()+K-L[1])),Y){f.offset&&R();var vt=tt[2]===Y,wt=vt?C+k.startY-k.y:f()+Y-tt[1],Ot=x(wt);vt&&wt!==Ot&&(C+=Ot-wt),f(Ot)}(Y||K)&&Rr()},t.onEnable=function(){kd(l,n?!1:"x"),ie.addEventListener("refresh",W),mn(he,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},t.onDisable=function(){kd(l,!0),pn(he,"resize",W),ie.removeEventListener("refresh",W),S.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ye(t),o.iOS=cs,cs&&!f()&&f(1),cs&&Lt.ticker.add(or),B=o._dc,D=Lt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:kg(f,f(),function(){return D.pause()})},onUpdate:Rr,onComplete:B.vars.onComplete}),o};ie.sort=function(r){if(Nn(r))return le.sort(r);var t=he.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+he.innerHeight}),le.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(r){return new Ye(r)};ie.normalizeScroll=function(r){if(typeof r>"u")return Qn;if(r===!0&&Qn)return Qn.enable();if(r===!1){Qn&&Qn.kill(),Qn=r;return}var t=r instanceof Ye?r:Nb(r);return Qn&&Qn.target===t.target&&Qn.kill(),ks(t.target)&&(Qn=t),t};ie.core={_getVelocityProp:Qh,_inputObserver:Vg,_scrollers:oe,_proxies:Hi,bridge:{ss:function(){Ii||Gs("scrollStart"),Ii=Dn()},ref:function(){return Ln}}};Rg()&&Lt.registerPlugin(ie);var Ml=new G;function Li(r,t,e,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;Ml.copy(t),Ml[n]=0,Ml.normalize();let l=.5*a/(a+o),h=1-Ml.angleTo(r)/c;return Math.sign(Ml[e])===1?h*l:o/(a+o)+l+l*(1-h)}var hu=class r extends bi{constructor(t=1,e=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new G,l=new G,h=new G(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new G,p=.5/a;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*s,d[m+1]=h.y*Math.sign(c.y)+l.y*s,d[m+2]=h.z*Math.sign(c.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[y+0]=Li(_,l,"z","y",s,n),f[y+1]=1-Li(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),f[y+0]=1-Li(_,l,"z","y",s,n),f[y+1]=1-Li(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),f[y+0]=1-Li(_,l,"x","z",s,t),f[y+1]=Li(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),f[y+0]=1-Li(_,l,"x","z",s,t),f[y+1]=1-Li(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),f[y+0]=1-Li(_,l,"x","y",s,t),f[y+1]=1-Li(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),f[y+0]=Li(_,l,"x","y",s,t),f[y+1]=1-Li(_,l,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var uu=`
float zHash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float zNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(zHash13(i), zHash13(i + vec3(1,0,0)), f.x), mix(zHash13(i + vec3(0,1,0)), zHash13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(zHash13(i + vec3(0,0,1)), zHash13(i + vec3(1,0,1)), f.x), mix(zHash13(i + vec3(0,1,1)), zHash13(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float zFbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++){ s += a * zNoise(p); p *= 2.03; a *= 0.5; } return s / 0.875; }
`;function $a(r,t,e){return r.onBeforeCompile=n=>{Object.assign(n.uniforms,t.uniforms||{});let i=n.vertexShader,s=n.fragmentShader;t.vertexHead&&(i=i.replace("#include <common>",`#include <common>
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
  tHaze = clamp( tHaze, 0.0, 1.0 );
  material.transmissionAlpha = mix( 1.0, clamp( tHaze + ( 1.0 - tHaze ) * tCov, 0.0, 1.0 ), material.transmission );
  totalDiffuse = mix( totalDiffuse, tHaze * uHazeColor + ( 1.0 - tHaze ) * tCol, material.transmission );
#endif
`,Hg=`
#ifdef FLIP_SIDED
  gl_FragColor = vec4( gl_FragColor.rgb + ( 1.0 - gl_FragColor.a ), 0.5 + 0.5 * gl_FragColor.a );
#endif
`,Qg=`
#ifndef FLIP_SIDED
  float zA = clamp( max( gl_FragColor.a, max( gl_FragColor.r, max( gl_FragColor.g, gl_FragColor.b ) ) ), 0.0, 1.0 );
  vec3 zC = gl_FragColor.rgb / max( zA, 1e-4 );
  #if defined( TONE_MAPPING )
    zC = toneMapping( zC );
  #endif
  gl_FragColor = vec4( linearToOutputTexel( vec4( zC, 1.0 ) ).rgb * zA, zA );
#endif
`,Wg=`
vec3 zBump( vec3 pos, vec3 n, float h ) {
  vec3 dpx = dFdx( pos ), dpy = dFdy( pos );
  float dhx = dFdx( h ), dhy = dFdy( h );
  vec3 r1 = cross( dpy, n ), r2 = cross( n, dpx );
  float det = dot( dpx, r1 );
  vec3 grad = sign( det ) * ( dhx * r1 + dhy * r2 );
  return normalize( abs( det ) * n - grad );
}
`;var np={title:{d:"M64 105L14 105Q7 105 4 103Q1 101 1 98Q0 95 0 91L0 14Q0 11 1 7Q1 4 4 2Q7 0 14 0Q21 0 23 2Q26 4 27 7Q27 11 27 14L27 82L64 82Q67 82 70 82Q72 83 74 85Q76 88 76 93Q76 99 74 102Q72 104 69 105Q67 105 64 105M142 105Q135 105 132 103Q130 101 129 99Q129 100 128 100Q126 102 122 103Q119 105 113 105Q107 105 100 102Q94 99 89 93Q84 88 81 81Q79 74 79 67Q79 59 81 53Q84 46 89 41Q94 35 100 32Q107 29 113 29Q118 29 122 31Q125 32 128 34Q128 35 129 35Q129 33 132 31Q135 29 142 29Q149 29 151 31Q154 33 155 36Q155 39 155 43L155 91Q155 95 155 98Q154 101 151 103Q149 105 142 105M117 78Q120 78 122 76Q125 75 126 72Q127 70 127 67Q127 64 126 62Q125 59 122 58Q120 56 117 56Q114 56 111 58Q109 59 107 62Q106 64 106 67Q106 70 107 72Q109 75 111 76Q114 78 117 78M266 105L208 105Q202 105 198 101Q194 98 194 92Q194 89 195 88Q195 86 196 85L238 27L208 27Q205 27 202 26Q199 26 196 23Q194 20 194 14Q194 7 196 4Q198 1 202 1Q205 0 208 0L264 0Q270 0 274 4Q278 8 278 14Q278 16 277 18Q277 20 276 21L234 79L266 79Q270 79 273 79Q276 80 278 83Q280 85 280 92Q280 99 278 101Q276 104 273 105Q269 105 266 105M346 105Q339 105 336 103Q334 101 333 99Q333 100 332 100Q330 102 326 103Q322 105 317 105Q310 105 304 102Q298 99 293 93Q288 88 285 81Q283 74 283 67Q283 59 285 53Q288 46 293 41Q298 35 304 32Q310 29 317 29Q322 29 326 31Q329 32 332 34Q332 35 333 35Q333 33 336 31Q339 29 346 29Q353 29 355 31Q358 33 359 36Q359 39 359 43L359 91Q359 95 359 98Q358 101 355 103Q353 105 346 105M321 78Q324 78 326 76Q328 75 330 72Q331 70 331 67Q331 64 330 62Q328 59 326 58Q324 56 321 56Q318 56 315 58Q313 59 311 62Q310 64 310 67Q310 70 311 72Q313 75 315 76Q318 78 321 78M405 106Q399 106 392 103Q386 101 380 96Q374 91 370 84Q366 77 366 67Q366 57 370 50Q374 43 380 38Q386 33 392 31Q399 28 405 28Q411 28 415 29Q419 30 422 32Q425 33 426 34Q429 36 431 38Q434 41 434 44Q434 46 433 48Q433 50 431 53Q426 61 420 61Q418 61 416 60Q414 60 413 59Q411 57 409 57Q408 56 405 56Q402 56 400 57Q397 59 396 61Q394 64 394 67Q394 70 396 73Q397 75 400 77Q402 78 405 78Q407 78 408 78Q410 77 411 77Q411 76 411 76Q414 75 415 74Q417 73 419 73Q422 73 425 75Q427 77 431 81Q434 85 434 88Q434 92 432 94Q430 97 426 100Q425 100 423 102Q420 103 416 105Q411 106 405 106M502 105Q495 105 492 103Q490 101 489 99Q489 100 488 100Q486 102 482 103Q478 105 473 105Q466 105 460 102Q454 99 449 93Q444 88 441 81Q439 74 439 67Q439 59 441 53Q444 46 449 41Q454 35 460 32Q466 29 473 29Q478 29 482 31Q485 32 488 34Q488 35 489 35Q489 33 492 31Q495 29 502 29Q509 29 511 31Q514 33 515 36Q515 39 515 43L515 91Q515 95 515 98Q514 101 511 103Q509 105 502 105M477 78Q480 78 482 76Q484 75 486 72Q487 70 487 67Q487 64 486 62Q484 59 482 58Q480 56 477 56Q474 56 471 58Q469 59 467 62Q466 64 466 67Q466 70 467 72Q469 75 471 76Q474 78 477 78M564 105Q556 105 550 103Q544 102 540 98Q536 94 535 88Q533 83 533 75L533 56L529 56Q524 56 522 53Q520 50 520 43Q520 36 522 33Q525 30 530 30L533 30L533 17Q533 13 533 10Q534 8 537 6Q540 4 546 4Q553 4 556 6Q559 8 559 11Q560 14 560 17L560 29L568 29Q571 29 574 30Q577 30 579 33Q581 36 581 43Q581 49 579 52Q577 55 574 56Q571 56 568 56L560 56L560 74Q560 75 560 76Q560 78 561 78Q561 79 562 79Q563 79 564 79Q568 79 571 80Q574 81 576 83Q577 86 577 92Q577 98 575 101Q573 104 570 105Q567 105 564 105M624 107Q613 107 605 103Q598 99 593 94Q588 88 586 81Q584 74 584 67Q584 56 589 47Q594 38 603 32Q613 27 625 27Q634 27 641 30Q647 33 651 38Q655 43 657 48Q659 53 659 58Q659 66 655 71Q651 75 644 75L612 75Q613 78 615 79Q617 81 620 82Q622 83 626 83Q629 83 632 83Q634 82 636 82Q638 81 639 80Q641 80 642 79Q644 79 645 79Q647 79 650 81Q652 83 654 86Q655 88 655 90Q656 92 656 93Q656 98 652 101Q648 104 641 105Q635 107 624 107M612 61L629 61Q631 61 632 60Q633 59 633 57Q633 56 632 54Q631 53 629 52Q627 51 624 51Q621 51 618 53Q615 54 614 56Q612 59 612 61M703 106Q697 106 690 103Q683 101 677 96Q671 91 668 84Q664 77 664 67Q664 57 668 50Q671 43 677 38Q683 33 690 31Q697 28 703 28Q708 28 713 29Q717 30 720 32Q722 33 723 34Q726 36 729 38Q732 41 732 44Q732 46 731 48Q730 50 729 53Q723 61 718 61Q715 61 714 60Q712 60 710 59Q709 57 707 57Q705 56 703 56Q700 56 697 57Q695 59 693 61Q692 64 692 67Q692 70 693 73Q695 75 697 77Q700 78 702 78Q705 78 706 78Q707 77 708 77Q709 76 709 76Q711 75 713 74Q715 73 717 73Q719 73 722 75Q725 77 728 81Q731 85 732 88Q732 92 730 94Q728 97 723 100Q723 100 720 102Q718 103 713 105Q709 106 703 106M799 105Q793 105 789 103Q787 101 787 99Q786 100 786 100Q783 102 780 103Q776 105 771 105Q764 105 758 102Q752 99 747 93Q742 88 739 81Q736 74 736 67Q736 59 739 53Q742 46 747 41Q752 35 758 32Q764 29 771 29Q776 29 779 31Q783 32 785 34Q786 35 787 35Q787 33 790 31Q793 29 800 29Q806 29 809 31Q812 33 812 36Q813 39 813 43L813 91Q813 95 812 98Q812 101 809 103Q806 105 799 105M775 78Q777 78 780 76Q782 75 784 72Q785 70 785 67Q785 64 784 62Q782 59 780 58Q777 56 774 56Q771 56 769 58Q766 59 765 62Q763 64 763 67Q763 70 765 72Q767 75 769 76Q772 78 775 78M834 105Q827 105 824 103Q822 101 821 98Q821 95 821 91L821 42Q821 39 821 36Q822 33 825 31Q827 29 834 29Q840 29 843 31Q846 32 847 34Q847 36 847 38Q848 38 848 37Q850 35 853 33Q856 31 860 30Q863 29 866 29Q874 29 879 32Q885 35 889 40Q893 45 895 52Q897 59 897 67L897 92Q897 95 896 98Q896 101 893 103Q890 105 883 105Q876 105 873 103Q870 101 870 98Q869 95 869 91L869 67Q869 63 868 61Q867 59 864 57Q862 56 859 56Q855 56 853 57Q850 59 849 61Q848 64 848 67L848 92Q848 95 847 98Q846 101 844 103Q841 105 834 105M965 105Q958 105 955 103Q953 101 952 99Q952 100 951 100Q949 102 945 103Q942 105 936 105Q930 105 923 102Q917 99 912 93Q907 88 905 81Q902 74 902 67Q902 59 905 53Q907 46 912 41Q917 35 923 32Q930 29 936 29Q941 29 945 31Q948 32 951 34Q951 35 952 35Q953 33 955 31Q958 29 965 29Q972 29 974 31Q977 33 978 36Q978 39 978 43L978 91Q978 95 978 98Q977 101 974 103Q972 105 965 105M940 78Q943 78 945 76Q948 75 949 72Q950 70 950 67Q950 64 949 62Q948 59 945 58Q943 56 940 56Q937 56 934 58Q932 59 930 62Q929 64 929 67Q929 70 930 72Q932 75 935 76Q937 78 940 78",w:978,h:107,baseline:104},sub:{d:"M9 108Q5 108 3 107Q1 106 0 104Q0 102 0 99L0 12Q0 10 1 8Q1 6 3 5Q5 3 9 3Q13 3 15 5Q17 6 18 8Q18 10 18 13L18 99Q18 102 18 104Q17 106 15 107Q13 108 9 108M71 109Q64 109 57 106Q50 104 44 99Q39 94 36 87Q33 80 33 71Q33 62 36 56Q39 49 44 44Q50 39 57 36Q63 34 71 34Q76 34 80 35Q85 37 89 39Q92 41 94 43Q96 45 97 47Q98 48 98 51Q97 52 96 53Q96 55 94 56Q91 60 87 59Q85 58 83 57Q81 56 79 55Q77 53 75 53Q73 52 71 52Q65 52 60 54Q56 57 53 61Q51 66 51 71Q51 77 53 81Q56 86 60 88Q65 91 70 91Q73 91 75 90Q78 89 80 88Q82 87 83 86Q85 85 86 84Q87 83 89 83Q91 83 92 84Q94 86 96 88Q98 91 98 93Q99 95 97 97Q96 99 94 100Q92 102 88 104Q85 106 80 107Q76 109 71 109M148 109Q139 109 131 106Q124 103 119 97Q114 92 112 85Q109 78 109 71Q109 60 114 52Q119 43 128 39Q137 34 148 34Q156 34 162 36Q169 39 173 43Q177 47 179 52Q181 57 181 62Q181 70 177 73Q174 77 168 77L128 77Q128 82 131 86Q135 89 139 91Q144 93 149 93Q153 93 156 93Q159 93 161 92Q163 91 164 90Q166 90 167 89Q169 89 170 88Q171 88 173 89Q175 90 176 92Q177 94 177 95Q177 96 177 98Q177 101 174 103Q170 106 164 107Q157 109 148 109M128 66L159 66Q162 66 163 65Q164 65 164 62Q164 58 162 56Q160 53 156 51Q153 50 148 50Q143 50 138 52Q134 54 131 58Q128 62 128 66M269 109Q262 109 255 106Q249 104 243 99Q238 94 234 87Q231 80 231 71Q231 62 234 56Q238 49 243 44Q248 39 255 36Q262 34 269 34Q274 34 279 35Q284 37 287 39Q291 41 292 43Q294 45 295 47Q297 48 296 51Q296 52 295 53Q294 55 293 56Q289 60 286 59Q284 58 282 57Q280 56 278 55Q276 53 274 53Q272 52 269 52Q263 52 259 54Q255 57 252 61Q250 66 250 71Q250 77 252 81Q255 86 259 88Q263 91 269 91Q272 91 274 90Q276 89 278 88Q280 87 282 86Q283 85 285 84Q286 83 287 83Q289 83 291 84Q293 86 295 88Q297 91 297 93Q297 95 296 97Q295 99 292 100Q291 102 287 104Q283 106 279 107Q274 109 269 109M320 108Q316 108 314 107Q312 106 312 104Q311 102 311 99L311 43Q311 41 312 39Q312 37 314 35Q316 34 320 34Q324 34 326 35Q328 36 329 38Q329 40 329 41L328 44Q329 43 330 41Q331 39 334 37Q336 36 339 35Q342 33 347 33Q348 33 350 34Q352 34 354 35Q356 36 358 37Q360 38 361 39Q362 41 362 42Q362 47 359 50Q357 54 353 54Q351 54 350 53Q349 53 348 52Q348 52 346 51Q345 51 342 51Q340 51 338 51Q336 52 334 54Q332 55 330 58Q329 60 329 63L329 99Q329 102 329 104Q328 106 326 107Q324 108 320 108M411 109Q401 109 394 106Q386 103 382 97Q377 92 374 85Q372 78 372 71Q372 60 377 52Q382 43 390 39Q399 34 411 34Q419 34 425 36Q431 39 435 43Q439 47 441 52Q444 57 444 62Q444 70 440 73Q436 77 430 77L391 77Q391 82 394 86Q397 89 402 91Q406 93 411 93Q415 93 418 93Q421 93 423 92Q425 91 427 90Q428 90 430 89Q431 89 432 88Q434 88 435 89Q437 90 438 92Q439 94 439 95Q440 96 440 98Q440 101 436 103Q433 106 426 107Q420 109 411 109M391 66L421 66Q424 66 425 65Q427 65 427 62Q427 58 425 56Q422 53 419 51Q415 50 410 50Q405 50 400 52Q396 54 393 58Q391 62 391 66M519 108Q515 108 512 106Q510 105 510 102L511 97Q510 99 507 101Q504 104 500 106Q495 108 489 108Q482 108 475 105Q469 102 464 97Q460 92 457 85Q454 79 454 71Q454 64 457 57Q460 51 464 45Q469 40 475 37Q482 35 489 35Q495 35 499 36Q503 38 506 40Q509 43 511 45L510 41Q510 38 512 36Q515 34 519 34Q523 34 525 36Q527 37 527 39Q528 41 528 44L528 99Q528 101 527 104Q527 106 525 107Q523 108 519 108M491 91Q496 91 500 88Q504 86 507 81Q509 77 509 71Q509 65 507 61Q504 57 500 54Q496 52 491 52Q485 52 481 54Q477 57 474 61Q472 66 472 71Q472 77 474 81Q477 86 481 88Q486 91 491 91M553 108Q549 108 547 107Q545 106 545 104Q544 102 544 99L544 43Q544 41 545 39Q545 37 547 36Q549 34 553 34Q558 34 560 36Q562 38 562 42L560 46Q561 44 563 42Q565 41 567 39Q570 37 573 35Q576 34 580 34Q585 34 589 36Q593 38 596 41Q600 44 602 48Q605 44 608 41Q611 38 615 36Q619 34 625 34Q633 34 639 39Q645 43 648 51Q651 59 651 70L651 99Q651 102 651 104Q650 106 648 107Q647 108 642 108Q638 108 636 107Q634 106 634 104Q633 102 633 99L633 70Q633 64 632 60Q631 56 628 54Q625 52 621 52Q617 52 613 54Q610 56 608 60Q607 64 607 70L607 99Q607 102 606 104Q605 106 603 107Q601 108 597 108Q593 108 591 107Q590 105 589 103Q589 101 589 99L589 70Q589 64 587 60Q586 56 583 54Q581 52 576 52Q572 52 569 54Q565 57 564 61Q562 65 562 70L562 99Q562 102 562 104Q561 106 559 107Q557 108 553 108M737 109Q726 109 718 106Q711 102 707 96Q703 89 703 80Q703 75 705 70Q707 65 711 60Q715 55 721 51Q719 46 717 42Q716 38 715 34Q714 30 714 26Q714 18 718 12Q721 6 728 3Q734 0 744 0Q752 0 758 3Q764 6 767 11Q770 16 770 24Q770 28 768 32Q766 35 762 39Q758 43 753 47Q749 51 743 55Q747 60 750 65Q754 69 758 73Q762 77 766 79Q770 75 772 72Q774 68 775 64Q775 62 777 60Q780 59 784 59Q788 59 790 60Q791 61 792 63Q792 64 792 66Q792 71 789 76Q786 82 780 87Q782 88 783 88Q785 89 786 89Q788 89 791 89Q795 89 797 91Q799 93 799 98Q799 103 797 105Q795 107 790 107Q786 107 782 106Q778 106 773 104Q769 103 765 100Q761 103 756 105Q751 107 746 108Q741 109 737 109M737 92Q741 92 744 92Q747 91 750 89Q747 87 745 85Q742 82 740 79Q737 76 734 73Q732 69 729 66Q727 68 726 70Q724 72 723 73Q722 75 722 76Q721 78 721 80Q721 84 723 87Q725 89 728 91Q732 92 737 92M735 41Q739 38 743 35Q746 33 748 31Q751 28 752 27Q753 25 753 23Q753 19 750 17Q748 14 743 14Q740 14 737 16Q734 17 732 19Q731 22 731 25Q731 27 731 29Q732 32 733 35Q734 37 735 41M862 108Q858 108 856 107Q854 106 854 104Q853 102 853 99L853 12Q853 10 854 8Q854 6 856 5Q858 3 863 3Q866 3 867 4Q869 4 870 5Q871 6 872 7L906 55L941 6Q942 5 944 5Q945 4 946 4Q948 3 951 3Q955 3 957 5Q959 6 959 8Q960 10 960 13L960 99Q960 102 959 104Q959 106 957 107Q955 108 950 108Q946 108 944 107Q942 106 942 104Q941 101 941 99L941 35L914 74Q914 75 913 76Q912 77 910 77Q909 78 906 78Q904 78 902 77Q901 77 900 76Q899 75 899 74L871 35L871 99Q871 102 871 104Q870 106 868 107Q866 108 862 108M1013 109Q1003 109 996 106Q989 103 984 97Q979 92 976 85Q974 78 974 71Q974 60 979 52Q984 43 993 39Q1001 34 1013 34Q1021 34 1027 36Q1033 39 1037 43Q1041 47 1044 52Q1046 57 1046 62Q1046 70 1042 73Q1038 77 1032 77L993 77Q993 82 996 86Q999 89 1004 91Q1009 93 1014 93Q1017 93 1020 93Q1023 93 1025 92Q1027 91 1029 90Q1031 90 1032 89Q1033 89 1034 88Q1036 88 1038 89Q1039 90 1040 92Q1041 94 1042 95Q1042 96 1042 98Q1042 101 1038 103Q1035 106 1028 107Q1022 109 1013 109M993 66L1024 66Q1026 66 1028 65Q1029 65 1029 62Q1029 58 1027 56Q1025 53 1021 51Q1017 50 1013 50Q1007 50 1003 52Q998 54 995 58Q993 62 993 66M1120 36Q1123 39 1124 41Q1124 43 1124 45Q1123 47 1120 50L1102 71L1120 93Q1123 95 1124 98Q1124 100 1124 101Q1123 103 1120 106Q1118 108 1116 109Q1114 110 1112 109Q1110 108 1107 105L1090 85L1073 105Q1070 108 1068 109Q1066 110 1064 109Q1062 108 1060 106Q1057 103 1056 101Q1056 100 1057 98Q1058 95 1060 93L1078 71L1060 50Q1057 47 1056 45Q1056 43 1056 41Q1057 39 1060 36Q1063 34 1064 34Q1066 33 1068 34Q1070 35 1073 38L1090 58L1107 38Q1111 34 1114 33Q1116 33 1120 36M1209 110Q1202 110 1197 108Q1191 106 1187 104Q1183 101 1180 99Q1177 96 1176 94Q1174 91 1173 89Q1173 87 1174 85Q1175 83 1178 80Q1180 78 1183 78Q1185 78 1187 79Q1189 81 1191 84Q1195 88 1199 90Q1204 92 1208 92Q1214 92 1219 91Q1223 89 1225 86Q1228 83 1228 78Q1228 74 1225 71Q1223 69 1219 67Q1215 65 1210 63Q1205 62 1200 60Q1196 59 1193 57Q1189 55 1186 53Q1183 51 1180 48Q1178 45 1177 41Q1175 36 1175 31Q1175 23 1180 16Q1184 9 1191 6Q1199 2 1208 2Q1215 2 1219 3Q1224 4 1228 6Q1231 8 1234 9Q1236 11 1237 12Q1241 16 1241 18Q1241 20 1238 24Q1235 28 1232 29Q1229 29 1226 26Q1223 24 1221 22Q1218 21 1215 20Q1212 19 1208 19Q1205 19 1202 20Q1200 21 1198 22Q1196 24 1195 26Q1194 28 1194 31Q1194 35 1196 38Q1198 40 1202 42Q1205 43 1210 45Q1215 46 1220 47Q1224 49 1229 51Q1234 54 1238 57Q1242 60 1244 65Q1246 70 1246 78Q1246 86 1243 92Q1240 98 1234 102Q1229 106 1222 108Q1216 110 1209 110M1269 108Q1265 108 1263 107Q1261 106 1261 104Q1260 102 1260 99L1260 43Q1260 41 1261 39Q1261 37 1263 35Q1265 34 1269 34Q1273 34 1275 35Q1276 36 1277 38Q1278 39 1278 40Q1278 42 1278 42L1277 47Q1278 45 1280 42Q1282 40 1285 38Q1288 36 1292 35Q1295 34 1299 34Q1306 34 1312 37Q1317 39 1321 44Q1325 49 1327 55Q1329 61 1329 69L1329 99Q1329 102 1329 104Q1328 106 1327 107Q1325 108 1320 108Q1316 108 1314 107Q1312 106 1312 104Q1311 102 1311 99L1311 69Q1311 64 1310 60Q1308 56 1304 54Q1301 52 1295 52Q1290 52 1286 54Q1282 56 1280 60Q1278 64 1278 69L1278 99Q1278 102 1278 104Q1277 106 1275 107Q1273 108 1269 108M1407 108Q1403 108 1401 106Q1399 105 1399 102L1400 97Q1398 99 1396 101Q1393 104 1388 106Q1383 108 1377 108Q1370 108 1364 105Q1357 102 1353 97Q1348 92 1345 85Q1342 79 1342 71Q1342 64 1345 57Q1348 51 1353 45Q1358 40 1364 37Q1370 35 1377 35Q1383 35 1387 36Q1392 38 1395 40Q1398 43 1400 45L1399 41Q1399 38 1401 36Q1403 34 1407 34Q1412 34 1413 36Q1415 37 1416 39Q1416 41 1416 44L1416 99Q1416 101 1416 104Q1415 106 1413 107Q1411 108 1407 108M1380 91Q1385 91 1389 88Q1393 86 1395 81Q1398 77 1398 71Q1398 65 1395 61Q1393 57 1388 54Q1384 52 1379 52Q1374 52 1369 54Q1365 57 1363 61Q1360 66 1360 71Q1360 77 1363 81Q1365 86 1370 88Q1374 91 1380 91M1468 109Q1461 109 1454 106Q1447 104 1442 99Q1436 94 1433 87Q1430 80 1430 71Q1430 62 1433 56Q1436 49 1442 44Q1447 39 1454 36Q1461 34 1468 34Q1473 34 1478 35Q1483 37 1486 39Q1490 41 1491 43Q1493 45 1494 47Q1496 48 1495 51Q1495 52 1494 53Q1493 55 1492 56Q1488 60 1485 59Q1483 58 1481 57Q1479 56 1477 55Q1475 53 1473 53Q1470 52 1468 52Q1462 52 1458 54Q1453 57 1451 61Q1448 66 1448 71Q1448 77 1451 81Q1453 86 1458 88Q1462 91 1468 91Q1470 91 1473 90Q1475 89 1477 88Q1479 87 1480 86Q1482 85 1483 84Q1485 83 1486 83Q1488 83 1490 84Q1491 86 1494 88Q1496 91 1496 93Q1496 95 1495 97Q1494 99 1491 100Q1489 102 1486 104Q1482 106 1478 107Q1473 109 1468 109M1541 71L1569 92Q1573 95 1573 98Q1573 101 1570 105Q1567 108 1565 109Q1563 110 1562 109Q1560 108 1557 106L1528 81L1528 99Q1528 102 1528 104Q1527 106 1525 107Q1523 108 1519 108Q1515 108 1513 107Q1511 106 1511 104Q1510 102 1510 99L1510 10Q1510 7 1511 5Q1511 3 1513 2Q1515 0 1519 0Q1524 0 1525 2Q1527 3 1528 5Q1528 7 1528 10L1528 59L1549 39Q1551 37 1553 36Q1556 35 1558 36Q1560 36 1562 39Q1566 43 1565 46Q1565 48 1562 52L1541 71M1612 109Q1608 109 1604 108Q1599 108 1595 106Q1591 104 1588 102Q1585 100 1584 97Q1584 96 1584 94Q1584 93 1585 91Q1586 90 1587 88Q1589 87 1590 86Q1591 86 1594 87Q1596 88 1598 89Q1600 90 1603 92Q1605 93 1608 94Q1610 94 1613 94Q1619 94 1622 92Q1625 91 1625 87Q1625 85 1624 84Q1623 82 1621 81Q1620 80 1617 79Q1615 79 1612 78Q1610 77 1607 76Q1603 75 1599 74Q1596 72 1593 70Q1590 68 1588 64Q1586 60 1586 55Q1586 48 1589 43Q1593 39 1599 36Q1605 34 1614 34Q1617 34 1619 34Q1622 35 1625 35Q1627 36 1630 37Q1632 39 1635 40Q1638 42 1638 45Q1639 48 1636 51Q1635 53 1633 54Q1631 55 1630 54Q1627 53 1624 51Q1622 50 1619 49Q1616 48 1613 48Q1610 48 1607 49Q1605 50 1604 51Q1602 53 1602 55Q1602 57 1604 59Q1605 60 1607 61Q1609 62 1611 62Q1614 63 1617 64Q1621 65 1626 66Q1630 67 1634 70Q1637 72 1640 76Q1642 80 1642 86Q1642 97 1634 103Q1626 109 1612 109",w:1642,h:110,baseline:107}};var ip=2048/600;function Xg(r=8,t=2048){let e=Math.round(t/ip),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.clearRect(0,0,t,e);let s="#E0261D",a=np.title,o=np.sub,c=t*.74/a.w,l=(t-a.w*c)/2,h=e*.12;i.save(),i.translate(l,h),i.scale(c,c),i.fillStyle=s,i.fill(new Path2D(a.d)),i.restore();let d=t*.6/o.w,u=l+a.w*c*.22,f=h+a.h*c+e*.06;i.save(),i.translate(u,f),i.scale(d,d),i.fillStyle=s,i.fill(new Path2D(o.d)),i.restore();let g=new ga(n);return g.colorSpace=Fn,g.anisotropy=Math.min(8,r),g.minFilter=tr,g.magFilter=rn,g.generateMipmaps=!0,g}function rp(r,t=256){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,t,t);let i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[s,a]of r){let o=Math.round(a*255);i.addColorStop(s,`rgb(${o},${o},${o})`)}return n.fillStyle=i,n.fillRect(0,0,t,t),new ga(e)}var Qi=r=>r<0?0:r>1?1:r,xe=(r,t,e)=>r+(t-r)*e,bn=(r,t,e)=>Qi((r-t)/(e-t)),qn=r=>r*r*(3-2*r),hs=r=>r*r*r*(r*(r*6-15)+10);var Pr=Math.PI/180;function qg(r){let t=r>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ub(r,t,e){let n=r*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Ja(r,t,e){let n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),a=r-n,o=t-i,c=e-s,l=qn(a),h=qn(o),d=qn(c),u=(m,y,A)=>Ub(n+m,i+y,s+A),f=xe(u(0,0,0),u(1,0,0),l),g=xe(u(0,1,0),u(1,1,0),l),_=xe(u(0,0,1),u(1,0,1),l),p=xe(u(0,1,1),u(1,1,1),l);return xe(xe(f,g,h),xe(_,p,h),d)}function fu(r,t,e,n=4){let i=.5,s=0,a=0;for(let o=0;o<n;o++)s+=i*Ja(r,t,e),a+=i,r*=2.03,t*=2.03,e*=2.03,i*=.5;return s/a}var Sl={y0:.03,y1:1.575,rb:.45,rt:.615,rim:1.61,lidTop:1.69},bl=r=>xe(Sl.rb,Sl.rt,(r-Sl.y0)/(Sl.y1-Sl.y0)),Hs=r=>bl(r)-.016,cr={mango:new Et("#F58A06"),mangoDeep:new Et("#D45604"),cream:new Et("#FFB52E"),chamoy:new Et("#560A13"),chamoyHi:new Et("#8A171B"),tajin:new Et("#C93522")};function Zg(r,t,e,n=0){let i=(r+1)*t,s=new Float32Array(i*3),a=n?new Float32Array(i*n):null,o={x:0,y:0,z:0,e:[0,0,0,0]};for(let d=0;d<=r;d++)for(let u=0;u<t;u++){e(d/r,u/t*Math.PI*2,o);let f=d*t+u;if(s[f*3]=o.x,s[f*3+1]=o.y,s[f*3+2]=o.z,a)for(let g=0;g<n;g++)a[f*n+g]=o.e[g]}let c=[];for(let d=0;d<r;d++)for(let u=0;u<t;u++){let f=d*t+u,g=d*t+(u+1)%t,_=(d+1)*t+u,p=(d+1)*t+(u+1)%t;c.push(f,g,_,g,p,_)}let l=new Bn;l.setIndex(c),l.setAttribute("position",new Be(s,3)),a&&l.setAttribute("aExtra",new Be(a,n)),l.computeVertexNormals();let h=l.attributes.normal;for(let[d,u]of[[0,-1],[r,1]])if(Math.hypot(s[d*t*3],s[d*t*3+2])<1e-4)for(let g=0;g<t;g++)h.setXYZ(d*t+g,0,u,0);return l}function $g(r){let t=[0];for(let n=1;n<r.length;n++)t.push(t[n-1]+Math.hypot(r[n][0]-r[n-1][0],r[n][1]-r[n-1][1]));let e=t[t.length-1];return{total:e,at(n,i){let s=n*e,a=1;for(;a<t.length-1&&t[a]<s;)a++;let o=(s-t[a-1])/(t[a]-t[a-1]||1),c=r[a-1],l=r[a];i.r=xe(c[0],l[0],o),i.y=xe(c[1],l[1],o);let h=l[0]-c[0],d=l[1]-c[1],u=Math.hypot(h,d)||1;return i.nr=d/u,i.ny=-h/u,i.L=s,i}}}function Yg(r,t){let e=new Bi({color:16777215,metalness:0,roughness:.06,transmission:1,thickness:r,ior:1.57,specularIntensity:1,envMapIntensity:2.6,side:Jn,attenuationColor:new Et("#fff3ee"),attenuationDistance:2.5});return e.userData.u={uHaze:{value:.05},uEdgeHaze:{value:.3},uHazeColor:{value:new Et(.42,.3,.36)}},$a(e,{uniforms:e.userData.u,fragmentHead:"uniform float uHaze; uniform float uEdgeHaze; uniform vec3 uHazeColor;",replaceFragment:{transmission_fragment:Gg,tonemapping_fragment:Qg,colorspace_fragment:""},fragment:{opaque_fragment:Hg}},t)}function Fb(r){let t=[],e=(a,o)=>t.push(new Yt(a,o));e(0,.03),e(.2,.03),e(.31,.028),e(.348,.022),e(.372,.009),e(.394,.001),e(.42,.0015),e(.44,.008),e(.4485,.026);for(let a of[.06,.4,.8,1.2,1.37,1.385,1.395,1.405,1.415,1.43,1.5,1.556])e(bl(a)+.006*Math.exp(-(((a-1.4)/.013)**2)),a);let n=.628,i=1.592,s=.0175;for(let a of[1,.82,.62,.42,.22,.02,-.2,-.42,-.62,-.78])e(n+s*Math.cos(a*Math.PI),i+s*Math.sin(a*Math.PI));return new Qr(t,r)}function Ob(r){let t=[],e=(n,i)=>t.push(new Yt(n,i));return e(.648,1.566),e(.652,1.585),e(.6565,1.603),e(.654,1.619),e(.646,1.629),e(.632,1.634),e(.605,1.636),e(.58,1.638),e(.566,1.643),e(.556,1.656),e(.548,1.669),e(.535,1.677),e(.5,1.68),e(.32,1.681),e(.14,1.681),e(.1,1.683),e(.083,1.692),e(.07,1.697),e(.06,1.69),e(.054,1.674),e(.052,1.662),new Qr(t.reverse(),r)}function Bb(r,t){let s=[[0,.07]];for(let h=1;h<=6;h++)s.push([xe(0,Hs(.07)-.05,h/6),.07]);for(let h=1;h<=6;h++){let d=h/6*Math.PI/2;s.push([Hs(.07+.05)-.05*Math.cos(d),.07+.05*Math.sin(d)])}for(let h=1;h<=24;h++){let d=xe(.12000000000000001,1.31,h/24);s.push([Hs(d)-.018,d])}let a=Hs(1.31)-.018;for(let h=1;h<=30;h++){let d=h/30*Math.PI/2;s.push([a*Math.cos(d),1.31+(1.585-1.31)*Math.sin(d)])}let o=$g(s),c=.25,l={};return Zg(r,t,(h,d,u)=>{o.at(h,l);let f=Math.sin(d),g=Math.cos(d),_=l.r*f,p=l.r*g,m=.16*Math.sin(d+.6)+.09*Math.sin(2*d+l.L*2.3)+.35*(fu(_*1.6+11,l.y*1.6,p*1.6,2)-.5),y=l.L/c-d/(Math.PI*2)+m,A=y-Math.floor(y),v=Math.sqrt(Math.max(0,1-(2*A-1)**2)),S=Math.pow(v,.7),b=qn(Qi((l.L-.16)/.22)),T=qn(Qi(l.r/.1)),x=b*T,w=fu(_*2.6+7,l.y*2.6,p*2.6,3),R=Math.cos(6*d+l.L*5.4+1.2*(w-.5)),N=Math.sign(R)*Math.pow(Math.abs(R),.65),D=x*(.034*N+.013*(S-1));D+=.028*(w-.5)*(.5+.5*x);let U=l.y+l.ny*D,C=Math.max(0,Math.min(l.r+l.nr*D,Hs(Math.min(U,1.57))-.006));u.x=C*f,u.z=C*g,u.y=U;let B=Math.floor(y),W=Ja(B*1.7+.3,Math.cos(d)*1.4+3,Math.sin(d)*1.4+A*1.2),k=Math.floor((6*d+l.L*5.4)/(Math.PI*2)+.5),K=.12+.62*Ja(k*1.31+.5,l.L*1.6,2.2);u.e[0]=qn(Qi((-R-K)/.55))*x,u.e[1]=W,u.e[2]=Qi((l.y-.07)/(1.585-.07)),u.e[3]=(1-v)*x},4)}function zb(){let r=new Bi({color:16777215,roughness:.55,specularIntensity:.38,sheen:.08,sheenColor:new Et("#ff9a20"),sheenRoughness:.5,envMapIntensity:.22}),t={uMango:{value:cr.mango},uMangoDeep:{value:cr.mangoDeep},uCream:{value:cr.cream},uChamoy:{value:cr.chamoy},uTajin:{value:cr.tajin}};return $a(r,{uniforms:t,vertexHead:"attribute vec4 aExtra; varying vec4 vSorb; varying vec3 vObj;",vertex:{begin_vertex:"vSorb = aExtra; vObj = position;"},fragmentHead:`${uu}${Wg}
varying vec4 vSorb; varying vec3 vObj; uniform vec3 uMango, uMangoDeep, uCream, uChamoy, uTajin; float zGroove;`,fragment:{color_fragment:`
        float nA = zFbm(vObj * 4.0);
        float nB = zNoise(vObj * vec3(9.0, 3.0, 9.0) + 2.0);
        vec3 sc = mix(uMango, uMangoDeep, smoothstep(0.35, 0.85, nA));
        sc *= 1.0 - 0.14 * smoothstep(0.45, 0.98, vSorb.w);
        sc = mix(sc, uCream, smoothstep(0.55, 0.85, vSorb.y) * 0.45 * smoothstep(0.25, 0.75, nB));
        zGroove = smoothstep(0.32, 0.78, vSorb.x * (0.65 + 0.7 * nB) + 0.35 * vSorb.w * smoothstep(0.55, 0.8, nA));
        sc = mix(sc, uChamoy * (0.75 + 0.5 * nA), zGroove);
        float fl = smoothstep(0.8, 0.86, zNoise(vObj * 64.0)) * (0.2 + 0.8 * max(zGroove, smoothstep(0.7, 1.0, vSorb.z)));
        sc = mix(sc, uTajin * 0.7, fl * 0.85);
        diffuseColor.rgb = sc;`,roughnessmap_fragment:"roughnessFactor = mix(0.6, 0.12, zGroove) + (zNoise(vObj * 40.0) - 0.5) * 0.18;",normal_fragment_maps:"normal = zBump(-vViewPosition, normal, (zNoise(vObj * 15.0) * 0.004 + zNoise(vObj * 70.0) * 0.0009) * (1.0 - zGroove * 0.9));",emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * 0.13 * (1.0 - zGroove);"}},"zaca-sorbet")}var du={y0:.2,y1:1.592};function kb(r){let t=[];for(let e=0;e<=18;e++){let n=xe(du.y0,du.y1,e/18);t.push(new Yt(bl(n)-.0085,n))}return new Qr(t,r)}function Vb(){let r=new Bi({color:16777215,roughness:.2,clearcoat:1,clearcoatRoughness:.06,side:Jn,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.75});r.userData.u={uDrip:{value:1},uFresh:{value:0},uChamoy:{value:cr.chamoy},uChamoyHi:{value:cr.chamoyHi},uTajin:{value:cr.tajin}};let t=(du.y1-du.y0).toFixed(4);return $a(r,{uniforms:r.userData.u,vertexHead:"varying vec2 vLUv; varying vec3 vObj;",vertex:{begin_vertex:"vLUv = uv; vObj = position;"},fragmentHead:`${uu}
      varying vec2 vLUv; varying vec3 vObj; uniform float uDrip, uFresh; uniform vec3 uChamoy, uChamoyHi, uTajin;
      float zSmin(float a, float b, float k){ float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }
      float zChamoy(vec2 uv){
        const float C = 3.77; const float N = 14.0;
        float Y = (1.0 - uv.y) * ${t};
        float tau = 6.2831853 * uv.x;
        float band = 0.12 + 0.04 * sin(tau * 3.0 + 0.7) + 0.024 * sin(tau * 7.0 + 2.1) + 0.012 * sin(tau * 13.0 + 0.3);
        float d = Y - band;
        float cell = floor(uv.x * N);
        for (int k = -1; k <= 1; k++) {
          float c = mod(cell + float(k) + N, N);
          float h1 = zHash13(vec3(c, 1.7, 3.1)), h2 = zHash13(vec3(c, 5.3, 1.9)), h3 = zHash13(vec3(c, 9.1, 7.7));
          float cx = (c + 0.25 + 0.5 * h1) / N;
          float dx = (fract(uv.x - cx + 0.5) - 0.5) * C;
          float w = 0.024 + 0.03 * h2;
          float fresh = (c == 0.0 || c == 1.0 || c == 12.0) ? 1.0 : 0.0;
          float L = (h3 > 0.15 ? (0.08 + 0.8 * pow(h3, 1.5)) : 0.0) * uDrip + fresh * uFresh * (0.45 + 0.3 * h2);
          float yEnd = band + L;
          float t = clamp(Y / max(yEnd, 0.001), 0.0, 1.0);
          float dSeg = length(vec2(dx, Y - clamp(Y, 0.0, yEnd))) - w * (0.7 + 0.3 * t);
          float dBulb = length(vec2(dx, (Y - yEnd) * 0.85)) - w * 1.3;
          d = zSmin(d, min(dSeg, dBulb), 0.06);
        }
        return d;
      }
      float zEdge;`,fragment:{color_fragment:`
        float cd = zChamoy(vLUv);
        diffuseColor.a = clamp(0.5 - cd / max(fwidth(cd), 1e-4), 0.0, 1.0);
        zEdge = smoothstep(-0.03, 0.0, cd);
        float nC = zFbm(vObj * 9.0);
        vec3 cc = mix(uChamoy * (0.8 + 0.35 * nC), uChamoyHi, zEdge * 0.45);
        float fl = smoothstep(0.8, 0.86, zNoise(vObj * 70.0));
        diffuseColor.rgb = mix(cc, uTajin * 0.8, fl * 0.7);`,emissivemap_fragment:"totalEmissiveRadiance += uChamoyHi * 0.05 * zEdge;"}},"zaca-liner")}var Ka={len:1.18,r:.064,stick:.24};function Gb(r,t){let e=Ka.len/2,n=Ka.r,i=[];for(let c=0;c<=8;c++){let l=-Math.PI/2+c/8*Math.PI/2;i.push([n*Math.cos(l),-e+n+n*Math.sin(l)])}for(let c=1;c<20;c++)i.push([n,xe(-e+n,e-n,c/20)]);for(let c=0;c<=8;c++){let l=c/8*Math.PI/2;i.push([n*Math.cos(l),e-n+n*Math.sin(l)])}let s=$g(i),a={};return Zg(r,t,(c,l,h)=>{s.at(c,a);let d=Math.sin(l),u=Math.cos(l),f=a.r*d,g=a.r*u,_=fu(f*14+3,a.y*14,g*14,3),p=Ja(f*5+1,a.y*4.5,g*5),m=n*(.34*(_-.5)+.22*(p-.5))*(a.r/n),y=a.r+a.nr*m;h.x=y*d,h.z=y*u,h.y=a.y+a.ny*m;let A=Ja(f*60,a.y*60,g*60);h.e[0]=_,h.e[1]=A,h.e[2]=p},3)}function Hb(){let r=new Bi({color:16777215,roughness:.7,clearcoat:.25,clearcoatRoughness:.5,specularIntensity:.5,sheen:.45,sheenColor:new Et("#a02818"),sheenRoughness:.8,envMapIntensity:.3});return $a(r,{vertexHead:"attribute vec3 aExtra; varying vec3 vBand;",vertex:{begin_vertex:"vBand = aExtra;"},fragmentHead:"varying vec3 vBand;",fragment:{color_fragment:`
        vec3 bc = mix(vec3(0.16, 0.022, 0.016), vec3(0.3, 0.04, 0.025), vBand.x);
        bc = mix(bc, vec3(0.58, 0.07, 0.03), smoothstep(0.66, 0.76, vBand.y));
        bc = mix(bc, vec3(0.07, 0.012, 0.01), smoothstep(0.3, 0.05, vBand.z) * 0.6);
        diffuseColor.rgb = bc;`,roughnessmap_fragment:"roughnessFactor = mix(0.75, 0.32, smoothstep(0.55, 0.85, vBand.x));"}},"zaca-band")}function Jg({phone:r,maxAniso:t}){let e=r?.72:1,n={},i=new _n,s=new _n,a=Yg(.16,"zaca-cup"),o=new pe(Fb(r?72:96),a);o.renderOrder=2,s.add(o);let c=.34,l=.35,h=bl(l+c/2),d=c*ip/h,u=[];for(let Ct=0;Ct<=6;Ct++){let V=l+c*Ct/6;u.push(new Yt(bl(V)+.0022,V))}let f=Xg(t,r?1536:2048),g=new pe(new Qr(u,48,.17-d/2,d),new Ki({map:f,emissiveMap:f,emissive:new Et("#ffffff"),emissiveIntensity:.22,transparent:!0,roughness:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));g.renderOrder=3,s.add(g);let _=rp([[0,1],[.35,.62],[.7,.16],[1,0]]),p=rp([[0,1],[.45,.7],[.8,.12],[1,0]]),m=new Si({color:new Et("#6b1e3a"),alphaMap:_,transparent:!0,depthWrite:!1,opacity:.34}),y=new Si({color:new Et("#4a0f26"),alphaMap:p,transparent:!0,depthWrite:!1,opacity:.5}),A=new pe(new xr(2.05,2.05),m);A.rotation.x=-Math.PI/2,A.position.set(.06,.001,-.05),A.scale.set(1,.85,1);let v=new pe(new xr(1.2,1.2),y);v.rotation.x=-Math.PI/2,v.position.y=.002;let S=new Si({color:new Et("#ff9a2a"),alphaMap:_,transparent:!0,depthWrite:!1,blending:Co,opacity:0}),b=new pe(new xr(1.2,1.2),S);b.rotation.x=-Math.PI/2,b.position.set(-.38,.003,.32),b.scale.set(1.1,.7,1),A.renderOrder=v.renderOrder=b.renderOrder=1;let T=new _n;T.add(A,v,b),i.add(T),i.add(s),n.cup=s,n.floor=T;let x=Vb(),w=new _n,R=new pe(kb(r?72:96),x);R.position.y=-.9,w.add(R),w.position.y=.9,i.add(w),n.chamoy=w;let N=new _n,D=new pe(Bb(Math.round(170*e),Math.round(144*e)),zb());D.position.y=-.8,N.add(D),N.position.y=.8,i.add(N),n.sorbet=N,n.sorbetMesh=D;let U=qg(19),C=r?26:34,B=new Bi({color:16777215,roughness:.3,clearcoat:.45,clearcoatRoughness:.18,specularIntensity:.6,sheen:.15,sheenColor:new Et("#ffa030"),sheenRoughness:.45,envMapIntensity:.32});$a(B,{uniforms:{uChamoy:{value:cr.chamoy},uTajin:{value:cr.tajin}},vertexHead:"attribute float aCoat; varying float vCoat; varying vec3 vCL;",vertex:{begin_vertex:"vCoat = aCoat; vCL = position;"},fragmentHead:`${uu}
varying float vCoat; varying vec3 vCL; uniform vec3 uChamoy, uTajin;`,fragment:{color_fragment:`
        float fib = zNoise(vCL * vec3(3.0, 24.0, 3.0) + vCoat * 9.0);
        diffuseColor.rgb *= 0.86 + 0.26 * fib;
        float ct = vCoat * smoothstep(0.42, 0.62, zNoise(vCL * 3.5 + vCoat * 13.0) + vCL.y * 0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, uChamoy * 1.1, ct * 0.9);
        float fl = smoothstep(0.8, 0.86, zNoise(vCL * 30.0 + 4.0)) * (0.35 + 0.65 * vCoat);
        diffuseColor.rgb = mix(diffuseColor.rgb, uTajin * 0.85, fl);`,emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * 0.1;"}},"zaca-cube");let W=new hu(1,1,1,2,.17),k=new Float32Array(C),K=new Gr(W,B,C);K.instanceMatrix.setUsage(mh);let Y=["#F59A12","#F08A0C","#F7A825","#E87C0A","#FAB232","#F39612"].map(Ct=>new Et(Ct)),L=[];for(let Ct=0;Ct<C;Ct++){let V=.15+U()*.06,Kt=[V*(.9+U()*.2),V*(.85+U()*.2),V*(.9+U()*.2)],Zt,ee,Dt,jt=U()*Math.PI*2;if(Ct<C*.42){let I=Math.sqrt(U())*.42;ee=1.45+U()*.1-I*.18,Zt=Math.sin(jt)*I,Dt=Math.cos(jt)*I}else if(Ct<C*.8){ee=.3+U()*1;let I=Hs(ee)-V*.44;Zt=Math.sin(jt)*I,Dt=Math.cos(jt)*I}else{ee=.3+U()*1;let I=U()*.25;Zt=Math.sin(jt)*I,Dt=Math.cos(jt)*I}let F=Ct%3===0?.3:.62,ne=Ct/C*Math.PI*2*2+U()*.25,Qt=[Math.sin(ne)*(F+U()*.08),4.72+(U()-.5)*.2+(F<.4?.08:0),Math.cos(ne)*(F+U()*.08)];L.push({a:[Zt,ee,Dt],e:Qt,scale:Kt,ra:[U()*6,U()*6,U()*6],re:[U()*.6-.3,U()*6,U()*.6-.3],d:(U()-.5)*.05}),K.setColorAt(Ct,Y[Ct%Y.length]),k[Ct]=Ct<C*.42?.65+U()*.35:U()*.5}W.setAttribute("aCoat",new xs(k,1)),K.userData.coat=k,i.add(K),n.cubes=K,n.cubeData=L;let tt=r?650:1100,vt=new yo(1,0),wt=new Ki({color:16777215,roughness:.78,envMapIntensity:.5}),Ot=new Gr(vt,wt,tt);Ot.instanceMatrix.setUsage(mh);let Ht=["#D9432B","#C9361F","#E85A33","#A82A1C","#F0703E","#B8301E"].map(Ct=>new Et(Ct)),kt=[];for(let Ct=0;Ct<tt;Ct++){let V=.0075+U()*.0095,Kt,Zt=U()*Math.PI*2;if(Ct<tt*.75){let F=Math.sqrt(U())*.5,ne=1.31+(1.585-1.31)*Math.sqrt(Math.max(0,1-(F/.585)**2));Kt=[Math.sin(Zt)*F,ne+.012+U()*.02,Math.cos(Zt)*F]}else{let F=1.42+U()*.15,ne=Hs(F)-.02-U()*.03;Kt=[Math.sin(Zt)*ne,F,Math.cos(Zt)*ne]}let ee=Math.pow(U(),.6)*.88,Dt=U()*Math.PI*2,jt=[Math.sin(Dt)*ee,5.28+(U()-.5)*.12*(1.2-ee),Math.cos(Dt)*ee];kt.push({a:Kt,e:jt,s:[V*(.7+U()*.6),V*(.45+U()*.4),V*(.7+U()*.6)],r:[U()*6,U()*6,U()*6],d:(U()-.5)*.06,swirl:.8+U()*1.4}),Ot.setColorAt(Ct,Ht[Math.floor(U()*Ht.length)])}i.add(Ot),n.tajin=Ot,n.tajinData=kt;let $=new _n,it=new _n,_t=new pe(Gb(Math.round(90*e),Math.round(40*e)),Hb()),Vt=new pe(new _a(.02,.022,Ka.stick+.1,12,1),new Bi({color:new Et("#E9D3A6"),roughness:.7,sheen:.2}));Vt.position.y=-Ka.len/2-Ka.stick/2+.05,it.add(_t,Vt),$.add(it),i.add($),n.band=$;let dt=new _n,Bt=Yg(.1,"zaca-lid"),Nt=new pe(Ob(r?72:96),Bt);Nt.renderOrder=4,Nt.position.y=-1.65,dt.add(Nt),dt.position.y=1.65,i.add(dt),n.lid=dt;let Tt=new _n,qt=new pe(new _a(.041,.041,1.26,24,1,!0),new Bi({color:new Et("#C2185B"),roughness:.22,clearcoat:1,clearcoatRoughness:.08,side:Jn}));return Tt.add(qt),Tt.position.y=1.53,i.add(Tt),n.straw=Tt,n.mats={cupMat:a,lidMat:Bt,linerMat:x,causticMat:S,shadowMat:m,contactMat:y},n.root=i,n.BAND=Ka,n}var us=.85,_i={lid:{ex:[.04,.25],as:[.705,.8]},straw:{ex:[.035,.27],as:[.7,.795]},band:{ex:[.07,.29],as:[.675,.77]},tajin:{ex:[.1,.34],as:[.645,.745]},cubes:{ex:[.13,.37],as:[.62,.72]},sorbet:{ex:[.16,.42],as:[.595,.695]},chamoy:{ex:[.19,.46],as:[.57,.665]}},Ce={copyOut:[.012,.085],toApart:[.03,.31],toWhole:[.56,.8],land:[.858,.974],fresh:[.715,.875],callOut:[.535,.572],photo:[.962,1],apartIn:[.27,.33],apartOut:[.53,.57],wholeIn:[.665,.72],wholeOut:[.83,.857]},Qb=(r,t)=>hs(bn(r,t[0],t[1]));function sp(r,t){let e=bn(r,t[0],t[1]),n=Qi(e/.78),i=Math.cos(n*Math.PI*.5)**1.15,s=Qi((e-.78)/.22),a=e>.78?Math.sin(Math.PI*s)*(1-s)**.7:0;return{f:i,dip:a,t:e}}function Qs(r,t){let e=_i[t],n=Qb(r,e.ex),i=sp(r,e.as);return{k:n*i.f,dip:i.dip,back:i.t}}var Ir={chamoy:{base:[0,.9,0],ex:[0,2.05,0]},sorbet:{base:[0,.8,0],ex:[0,3.6,0]},lid:{base:[0,1.65,0],ex:[0,6.28,0]},straw:{base:[0,1.53,0],ex:[0,6.64,0]},band:{base:[-.2,.95,-.15],baseRot:[-.1,0,.14],ex:[.02,5.78,.08],exRot:[.18,.35,-1.32]}},Kg=new Me,pu=new Zn,mu=new Zn,gu=new Zn,wl=new Mi,_u=new G,hr=new G;function ap(r,t,e,n){let i=n?0:1,s=hs(bn(t,Ce.toApart[0],Ce.toApart[1]))*(1-hs(bn(t,Ce.toWhole[0],Ce.toWhole[1]))),a=(d,u)=>i*u*.022*Math.sin(e*1.15+d*1.7);{let d=Qs(t,"chamoy"),u=r.chamoy;u.position.set(0,xe(Ir.chamoy.base[1],Ir.chamoy.ex[1],d.k)-d.dip*.03+a(0,d.k),0),u.rotation.y=d.k*-.35}{let d=Qs(t,"sorbet"),u=r.sorbet;u.position.set(0,xe(Ir.sorbet.base[1],Ir.sorbet.ex[1],d.k)-d.dip*.035+a(1,d.k),0),u.rotation.y=d.k*1.25;let f=1-.035*d.dip;u.scale.set(1/Math.sqrt(f),f,1/Math.sqrt(f))}{let d=Qs(t,"lid"),u=r.lid;u.position.set(0,xe(Ir.lid.base[1],Ir.lid.ex[1],d.k)-d.dip*.05+a(2,d.k),0),u.rotation.set(d.k*.2,d.k*.4,0);let f=Qs(t,"straw"),g=r.straw,_=.62*qn(bn(t,.87,.95));g.position.set(0,xe(Ir.straw.base[1],Ir.straw.ex[1],f.k)-f.dip*.05+a(2,f.k)-_,0),g.rotation.set(f.k*.2,0,f.k*-.05)}{let d=Qs(t,"band"),u=r.band,f=Ir.band;u.position.set(xe(f.base[0],f.ex[0],d.k),xe(f.base[1],f.ex[1],d.k)-d.dip*.04+a(3,d.k),xe(f.base[2],f.ex[2],d.k)),mu.setFromEuler(wl.set(f.baseRot[0],f.baseRot[1],f.baseRot[2])),gu.setFromEuler(wl.set(f.exRot[0],f.exRot[1],f.exRot[2])),u.quaternion.slerpQuaternions(mu,gu,d.k)}if(!((t<=_i.cubes.ex[0]-.03||t>=_i.cubes.as[1]+.03)&&r._lastC===t)){r._lastC=t;let d=_i.cubes,u=r.cubeData;for(let f=0;f<u.length;f++){let g=u[f],_=hs(bn(t,d.ex[0]+g.d,d.ex[1]+g.d)),p=sp(t,[d.as[0]+g.d,d.as[1]+g.d]),m=_*p.f,y=(1-m)*m*1.6;hr.set(xe(g.a[0],g.e[0],m),xe(g.a[1],g.e[1],m)-p.dip*.03+a(4+f,m)*.6,xe(g.a[2],g.e[2],m));let A=Math.cos(y),v=Math.sin(y),S=hr.x*A+hr.z*v,b=-hr.x*v+hr.z*A;hr.x=S,hr.z=b,mu.setFromEuler(wl.set(g.ra[0],g.ra[1],g.ra[2])),gu.setFromEuler(wl.set(g.re[0],g.re[1]+e*.15*i*m,g.re[2])),pu.slerpQuaternions(mu,gu,m),_u.set(g.scale[0],g.scale[1],g.scale[2]),r.cubes.setMatrixAt(f,Kg.compose(hr,pu,_u))}r.cubes.instanceMatrix.needsUpdate=!0}if(!((t<=_i.tajin.ex[0]-.035||t>=_i.tajin.as[1]+.035)&&r._lastT===t)){r._lastT=t;let d=_i.tajin,u=r.tajinData,f=i*e*.12;for(let g=0;g<u.length;g++){let _=u[g],p=hs(bn(t,d.ex[0]+_.d,d.ex[1]+_.d)),m=sp(t,[d.as[0]+_.d,d.as[1]+_.d]),y=p*m.f,A=(1-y)*y*4*_.swirl+y*f,v=xe(_.a[0],_.e[0],y),S=xe(_.a[2],_.e[2],y),b=Math.cos(A),T=Math.sin(A);hr.set(v*b+S*T,xe(_.a[1],_.e[1],y)+a(5+g%7,y)*.5,-v*T+S*b),pu.setFromEuler(wl.set(_.r[0]+y*2,_.r[1],_.r[2])),_u.set(_.s[0],_.s[1],_.s[2]),r.tajin.setMatrixAt(g,Kg.compose(hr,pu,_u))}r.tajin.instanceMatrix.needsUpdate=!0}{let u=1-.022*Qs(t,"lid").dip;r.cup.scale.set(1+(1-u)*.5,u,1+(1-u)*.5)}r.mats.linerMat.userData.u.uFresh.value=qn(bn(t,Ce.fresh[0],Ce.fresh[1])),r.mats.linerMat.userData.u.uDrip.value=1;let l=qn(bn(t,Ce.land[0],Ce.land[0]+.06)),h=1-Qs(t,"sorbet").k;return r.mats.shadowMat.opacity=.34*(1-l),r.mats.contactMat.opacity=.5*(1-l),r.mats.causticMat.opacity=.3*h*(1-l),r.floor.visible=l<.999,{apart:s}}function jg(r){let t=(e,n)=>qn(bn(r,e,n));return{copy:1-t(Ce.copyOut[0],Ce.copyOut[1]),cue:1-t(0,.03),apart:t(Ce.apartIn[0],Ce.apartIn[1])*(1-t(Ce.apartOut[0],Ce.apartOut[1])),whole:t(Ce.wholeIn[0],Ce.wholeIn[1])*(1-t(Ce.wholeOut[0],Ce.wholeOut[1])),photo:t(Ce.photo[0],Ce.photo[1]),callOut:1-t(Ce.callOut[0],Ce.callOut[1])}}function t_(r){return{a:hs(bn(r,Ce.toApart[0],Ce.toApart[1])),b:hs(bn(r,Ce.toWhole[0],Ce.toWhole[1])),c:(()=>{let t=bn(r,Ce.land[0],Ce.land[1]);return t<.5?4*t*t*t:1-(-2*t+2)**3/2})()}}var e_="http://www.w3.org/2000/svg";function n_(r){let t=r.querySelector(".hero-callouts"),n=t.querySelector("svg").querySelector("g"),i=[...t.querySelectorAll(".hero-callout")].map(l=>{let h=document.createElementNS(e_,"path");h.setAttribute("pathLength","1"),h.setAttribute("stroke-dasharray","1 1");let d=document.createElementNS(e_,"circle");return d.setAttribute("r","3.25"),n.append(h,d),{el:l,part:l.dataset.part,path:h,dot:d,w:0,h:0,last:""}}),s=Object.fromEntries(i.map(l=>[l.part,l]));function a(){for(let l of i)l.w=l.el.offsetWidth,l.h=l.el.offsetHeight}let o=!0;function c(l,h,d){let u=i.filter(p=>l[p.part]&&l[p.part].a>.002);if(!u.length){if(o){for(let p of i)p.el.style.opacity="0",p.path.style.opacity="0",p.dot.style.opacity="0",p.last="";t.style.visibility="hidden",o=!1}return}o||(t.style.visibility="",o=!0);let f=u.map(p=>({it:p,A:l[p.part],y:l[p.part].y})).sort((p,m)=>p.y-m.y),g=10;for(let p=1;p<f.length;p++){let m=f[p-1].y+(f[p-1].it.h+f[p].it.h)/2+g;f[p].y<m&&(f[p].y=m)}let _=f[f.length-1];if(_.y+_.it.h/2>d[1]){_.y=d[1]-_.it.h/2;for(let p=f.length-2;p>=0;p--){let m=f[p+1].y-(f[p+1].it.h+f[p].it.h)/2-g;f[p].y>m&&(f[p].y=m)}}if(f[0].y-f[0].it.h/2<d[0]){f[0].y=d[0]+f[0].it.h/2;for(let p=1;p<f.length;p++){let m=f[p-1].y+(f[p-1].it.h+f[p].it.h)/2+g;f[p].y<m&&(f[p].y=m)}}for(let p of i)!u.includes(p)&&p.last&&(p.el.style.opacity="0",p.path.style.opacity="0",p.dot.style.opacity="0",p.last="");for(let{it:p,A:m,y}of f){let A=Math.round(m.x)+.5,v=Math.round(m.y)+.5,S=Math.round(h),b=Math.round(y)+.5,T=Math.max(A+10,S-34),x=`M${A} ${v}L${T} ${v}L${Math.max(T,S-14)} ${b}L${S-8} ${b}`,w=Math.max(0,Math.min(1,(m.d-.45)/.55)),R=`${x}|${m.a.toFixed(3)}|${m.d.toFixed(3)}`;R!==p.last&&(p.last=R,p.path.setAttribute("d",x),p.path.setAttribute("stroke-dashoffset",(1-m.d).toFixed(4)),p.path.style.opacity=m.a.toFixed(3),p.dot.setAttribute("cx",A),p.dot.setAttribute("cy",v),p.dot.style.opacity=(m.a*Math.min(1,m.d*4)).toFixed(3),p.el.style.opacity=(m.a*w).toFixed(3),p.el.style.transform=`translate3d(${S+Math.round((1-w)*10)}px, ${Math.round(y-p.h/2)}px, 0)`)}}return{items:i,byPart:s,measure:a,update:c,layer:t}}var s_=22,Wb=Math.tan(s_*Pr/2),i_=2.74,ja=[0,1.07,0],to={D:7.6,az:0,el:9*Pr};function r_(){let r=document.querySelector(".hero--a[data-hero]");if(!r||r.__zacaA)return;r.__zacaA=!0;let t=window.__HERO_A_POSTER__||null,e=!!window.__HERO_A_STILL__||!!t,n=a=>{r.classList.add("is-static"),r.classList.remove("is-live","is-done"),r.dataset.heroState=`static:${a}`};if(!t&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return n("reduced-motion");let i=r.querySelector(".hero-gl"),s=null;try{s=i.getContext("webgl2",{antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t})}catch{s=null}if(!s)return n("no-webgl");try{qb(r,i,s,t,e,n)}catch(a){console.error("[hero-a]",a),n("error")}}function Xb(r){r.traverse(i=>{if(!i.isMesh)return;let s=i.material;s.side===1?s.color=new Et("#efe4e2"):s.isMeshBasicMaterial&&i.position.x>14?s.color.setRGB(1,.78,.2).multiplyScalar(22):s.isMeshBasicMaterial&&i.position.z>14&&s.color.setRGB(1,.94,.95).multiplyScalar(40)});let t=new bi(1,1,1),e=new Si({color:new Et("#120509")}),n=new Si({color:new Et(1,.97,.94).multiplyScalar(30)});for(let i of[-1,1]){let s=new pe(t,n);s.position.set(i*4.2,5.5,9.5),s.rotation.y=i*.42,s.scale.set(1.1,11,.1);let a=new pe(t,e);a.position.set(i*8.2,5.5,5.5),a.rotation.y=i*-.75,a.scale.set(.2,13,4.5),r.add(s,a)}}function qb(r,t,e,n,i,s){let a=r.querySelector(".hero-stage"),o=r.querySelector(".hero-cup"),c=r.querySelector(".hero-copy"),l=r.querySelector(".hero-cue"),h=r.querySelector(".hero-chapter--apart"),d=r.querySelector(".hero-chapter--together"),u=window.matchMedia("(max-width: 719px)"),g=(n?"hi":u.matches||Math.min(screen.width,screen.height)<600?"phone":"hi")==="phone",_=window.matchMedia("(hover: none)").matches,p=new vh({canvas:t,context:e,antialias:!0,alpha:!0,premultipliedAlpha:!0});p.setClearColor(0,0),p.toneMapping=Ro,p.toneMappingExposure=.96,p.transmissionResolutionScale=g?.6:.8,p.setPixelRatio(n?1:Math.min(window.devicePixelRatio||1,g?1.5:2));let m=new _s,y=new Ea(p),A=new Sh;Xb(A),m.environment=y.fromScene(A,.035).texture,m.environmentIntensity=.72,A.traverse(P=>{P.isMesh&&(P.geometry.dispose(),P.material.dispose())}),y.dispose();let v=new vs(new Et("#ffe08a"),1.5);v.position.set(3.2,4.5,2.6);let S=new vs(new Et("#ffeedd"),.4);S.position.set(-4,1.8,2.5);let b=new vs(new Et("#ffffff"),.75);b.position.set(-1.5,3.5,-4),m.add(v,S,b);let T=Jg({phone:g,maxAniso:p.capabilities.getMaxAnisotropy()});m.add(T.root);let x=new gn(s_,1,.1,100);x.updateProjectionMatrix();let w=x.projectionMatrix.clone(),R=new Me,N=new G;function D(P,J,H){N.set(P.tx,P.ty,P.tz);let lt=Math.cos(P.el);x.position.set(N.x+P.D*Math.sin(P.az)*lt,N.y+P.D*Math.sin(P.el),N.z+P.D*Math.cos(P.az)*lt),x.lookAt(N),x.updateMatrixWorld();let st=P.scale*2*P.D*Wb;R.set(st/J,0,0,P.cx/J*2-1,0,st/H,0,1-P.cy/H*2,0,0,1,0,0,0,0,1),x.projectionMatrix.copy(w).premultiply(R),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}let U=(P,J,H)=>{let lt={};for(let st of Object.keys(P))lt[st]=xe(P[st],J[st],H);return lt};if(n){let P=n.w,J=n.h;t.style.cssText=`position:fixed;left:0;top:0;width:${P}px;height:${J}px;visibility:visible;z-index:9999;background:transparent`,p.setSize(P,J,!1),ap(T,0,0,!0),D({cx:P/2,cy:J/2,scale:J/i_,D:to.D,tx:ja[0],ty:ja[1],tz:ja[2],az:to.az,el:to.el},P,J),p.render(m,x),p.render(m,x),window.__HERO_A_POSTER_DATA__=t.toDataURL("image/png");return}let C={vw:1,vh:1,cw:1,ch:1,sectionTop:0,pinDist:1,pinEnd:1,endScroll:2,stageH:1,top:64,bottom:0,cup:{x:0,y:0,w:1,h:1},slot:null,img:null,fit:"contain",hasSlot:!1};function B(){let P=window.scrollY;C.vw=window.innerWidth,C.vh=window.innerHeight;let J=r.getBoundingClientRect();C.sectionTop=J.top+P,C.stageH=a.offsetHeight,C.pinDist=Math.max(1,r.offsetHeight-C.stageH),C.pinEnd=C.sectionTop+C.pinDist;let H=getComputedStyle(r);C.top=parseFloat(H.getPropertyValue("--a-top"))||64,C.bottom=parseFloat(H.getPropertyValue("--a-bottom"))||0;let lt=a.getBoundingClientRect(),st=o.getBoundingClientRect();C.cup={x:st.left-lt.left,y:st.top-lt.top,w:st.width,h:st.height},C.slot=document.querySelector('[data-flip-target="mangonada"] .flip-slot'),C.img=C.slot?C.slot.querySelector("img"):null,C.hasSlot=!!C.slot,C.img&&(C.fit=getComputedStyle(C.img).objectFit||"fill",it());let rt=Math.max(0,document.documentElement.scrollHeight-C.vh);if(C.hasSlot){let ct=C.slot.getBoundingClientRect(),at=ct.top+P+ct.height/2-C.vh*(u.matches?.47:.5);C.endScroll=Math.min(rt,Math.max(C.pinEnd+C.vh*.3,at))}else C.endScroll=Math.min(rt,C.pinEnd+C.vh*.5);C.endScroll=Math.max(C.endScroll,C.pinEnd+1)}let W=P=>P<=C.sectionTop?0:P<=C.pinEnd?us*(P-C.sectionTop)/C.pinDist:Math.min(1,us+(1-us)*(P-C.pinEnd)/(C.endScroll-C.pinEnd)),k=P=>P<=us?C.sectionTop+P/us*C.pinDist:C.pinEnd+(P-us)/(1-us)*(C.endScroll-C.pinEnd),K=P=>P<C.sectionTop?C.sectionTop-P:P<=C.pinEnd?0:C.pinEnd-P,Y=P=>({cx:C.cup.x+C.cup.w/2,cy:P+C.cup.y+C.cup.h/2,scale:C.cup.h/i_,D:to.D,tx:ja[0],ty:ja[1],tz:ja[2],az:to.az,el:to.el}),L=8.1;function tt(P){let J=C.vw<720,H=C.top+(J?70:22),st=C.stageH-(J?C.bottom+6:22)-H;return{cx:J?C.vw*.33:C.vw*.52,cy:P+H+st/2,scale:st/L,D:14,tx:0,ty:3.5,tz:0,az:32*Pr,el:15*Pr}}function vt(P){let J=C.vw<720,H=C.top+(J?84:30),st=C.stageH-(J?C.bottom+18:34)-H;return{cx:J?C.vw*.5:C.vw*.63,cy:P+H+st*.5,scale:st*.94/2.95,D:8.2,tx:0,ty:1.05,tz:0,az:-5*Pr,el:10*Pr}}let wt={D:9,az:0,el:12*Pr,tx:0,ty:.85,tz:0},Ot=(()=>{D({cx:0,cy:0,scale:1,...wt},2,2);let P=1e9,J=-1e9,H=1e9,lt=-1e9;for(let st=0;st<24;st++){let rt=st/24*Math.PI*2;for(let ct of[new G(Math.sin(rt)*.656,1.69,Math.cos(rt)*.656),new G(Math.sin(rt)*.45,0,Math.cos(rt)*.45)]){ct.project(x);let at=ct.x+1,Mt=1-ct.y;P=Math.min(P,at),J=Math.max(J,at),H=Math.min(H,Mt),lt=Math.max(lt,Mt)}}return{x0:P,x1:J,y0:H,y1:lt}})();function Ht(){let P=(C.img||C.slot).getBoundingClientRect(),J=C.img&&C.img.naturalWidth||1074,H=C.img&&C.img.naturalHeight||1400,lt=P.width,st=P.height;if(C.img&&(C.fit==="contain"||C.fit==="scale-down"||C.fit==="cover")){let rt=C.fit==="cover"?Math.max(P.width/J,P.height/H):Math.min(P.width/J,P.height/H);lt=J*rt,st=H*rt}else C.img||(st=P.height*.92,lt=st*.77);return{x:P.left+(P.width-lt)/2,y:P.top+(P.height-st)/2,w:lt,h:st}}let kt={x0:0,y0:0,x1:1,y1:1},$="";function it(){let P=C.img&&(C.img.currentSrc||C.img.src);if(!P||P===$)return;$=P;let J=new Image;J.decoding="async",J.src=P,(J.decode?J.decode():new Promise((H,lt)=>{J.onload=H,J.onerror=lt})).then(()=>{let lt=Math.max(8,Math.round(96*J.naturalHeight/J.naturalWidth)),st=document.createElement("canvas");st.width=96,st.height=lt;let rt=st.getContext("2d",{willReadFrequently:!0});rt.drawImage(J,0,0,96,lt);let ct=rt.getImageData(0,0,96,lt).data,at=96,Mt=lt,ot=-1,It=-1;for(let St=0;St<lt;St++)for(let Xt=0;Xt<96;Xt++)ct[(St*96+Xt)*4+3]>110&&(Xt<at&&(at=Xt),Xt>ot&&(ot=Xt),St<Mt&&(Mt=St),St>It&&(It=St));ot>at&&It>Mt&&(ot-at)*(It-Mt)>96*lt*.08&&Object.assign(kt,{x0:at/96,y0:Mt/lt,x1:(ot+1)/96,y1:(It+1)/lt})}).catch(()=>{})}function _t(){let P=Ht(),J={x:P.x+P.w*kt.x0,y:P.y+P.h*kt.y0,w:P.w*(kt.x1-kt.x0),h:P.h*(kt.y1-kt.y0)},H=J.h*.995/(Ot.y1-Ot.y0),lt=(Ot.x0+Ot.x1)/2*H,st=(Ot.y0+Ot.y1)/2*H;return{cx:J.x+J.w*.5-lt,cy:J.y+J.h*.5-st,scale:H,...wt}}let Vt=0,dt=0;function Bt(P){let J=t.clientWidth||window.innerWidth,H=t.clientHeight||window.innerHeight;(P||J!==Vt||Math.abs(H-dt)>=160)&&(Vt=J,dt=H,p.setSize(J,H,!1)),C.cw=J,C.ch=H}let Nt=n_(r),Tt=new G,qt=new G;function Ct(P){return P.project(x),{x:(P.x+1)/2*C.cw,y:(1-P.y)/2*C.ch}}let V=[{part:"chamoy",obj:()=>T.chamoy,off:[0,.6,0],r:.6,win:_i.chamoy},{part:"sorbet",obj:()=>T.sorbet,off:[0,.28,0],r:.6,win:_i.sorbet},{part:"mango",obj:null,at:[0,4.72,0],r:.7,win:_i.cubes},{part:"tajin",obj:null,at:[0,5.28,0],r:.84,win:_i.tajin},{part:"banderilla",obj:()=>T.band,local:[0,.46,0],win:_i.band}],Kt=new Map,Zt=(P,J,H)=>{let lt=P,st=Kt.get(lt);st||(st={},Kt.set(lt,st)),st[J]!==H&&(st[J]=H,P.style[J]=H)},ee={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",P=>{P.pointerType==="mouse"&&(ee.tx=P.clientX/window.innerWidth*2-1,ee.ty=P.clientY/window.innerHeight*2-1)},{passive:!0});let Dt=0,jt=0,F=-1,ne=-1,Qt=!1,I=!document.hidden,M=!0,z=!1,Q={calls:0,triangles:0,frameMs:0,frames:0},j="";function ft(P){let J=jt?Math.min(.05,(P-jt)/1e3):.016666666666666666;jt=P,F<0&&(F=P);let H=i?0:(P-F)/1e3,lt=window.scrollY,st=W(lt);ne<0||i?ne=st:(ne+=(st-ne)*(1-Math.exp(-J*11)),Math.abs(st-ne)<2e-4&&(ne=st));let rt=ne,ct=performance.now(),at=K(lt),Mt=t_(rt),ot=U(Y(at),tt(at),Mt.a);ot=U(ot,vt(at),Mt.b),Mt.c>0&&(ot=U(ot,C.hasSlot?_t():{...vt(at),scale:vt(at).scale*.6},Mt.c));let It=1-qn(bn(rt,.84,.95)),St=1-Math.exp(-J*3.5);ee.x+=(ee.tx-ee.x)*St,ee.y+=(ee.ty-ee.y)*St;let Xt=_&&!i?Math.sin(H*.32):0;ot.az+=(ee.x*.16+Xt*.09)*It,ot.el+=(ee.y*.07+(_&&!i?Math.sin(H*.21+1)*.025:0))*It,D(ot,C.cw,C.ch),ap(T,rt,H,i);let Ve=Qi(Mt.a*(1-Mt.b)),re=(i?0:1)*xe(1,.3,Ve)*It;T.root.rotation.y=re*.34*Math.sin(H*.42);let ce=jg(rt);Zt(c,"opacity",ce.copy.toFixed(3)),Zt(c,"transform",`translate3d(0, ${(-28*(1-ce.copy)).toFixed(1)}px, 0)`),Zt(c,"visibility",ce.copy<.01?"hidden":""),l&&Zt(l,"opacity",ce.cue.toFixed(3)),Zt(h,"opacity",ce.apart.toFixed(3)),Zt(h,"visibility",ce.apart<.01?"hidden":"visible"),Zt(d,"opacity",ce.whole.toFixed(3)),Zt(d,"visibility",ce.whole<.01?"hidden":"visible"),C.img&&Zt(C.img,"opacity",C.hasSlot?ce.photo.toFixed(3):""),Zt(t,"opacity",(1-ce.photo).toFixed(3));let Ze=st>=1&&ne>=1;r.classList.toggle("is-done",Ze);let we={};if(ce.callOut>0&&Ve>.2){qt.setFromMatrixColumn(x.matrixWorld,0).normalize(),T.root.updateMatrixWorld();for(let Re of V){let hn=Re.win.ex[1],Oe=qn(bn(rt,hn-.06,hn+.03)),Ne=Oe>0?Math.min(1,Oe*3)*ce.callOut:0;if(Ne<=0)continue;Re.local?Tt.set(...Re.local).applyMatrix4(Re.obj().matrixWorld):(Re.obj?Tt.copy(Re.obj().position).add(N.set(...Re.off)).applyMatrix4(T.root.matrixWorld):Tt.set(...Re.at).applyMatrix4(T.root.matrixWorld),Tt.addScaledVector(qt,Re.r));let We=Ct(Tt);we[Re.part]={x:We.x,y:We.y,a:Ne,d:Oe}}}let ue=C.vw<720?Math.min(C.vw-152,ot.cx+.98*ot.scale+14):ot.cx+1.18*ot.scale+34;Nt.update(we,ue,[C.top+12,C.vh-C.bottom-12]);let cn=`${rt}|${ot.cx.toFixed(2)}|${ot.cy.toFixed(2)}|${ot.az.toFixed(5)}|${ot.el.toFixed(5)}|${C.cw}x${C.ch}`,Ee=i&&cn===j;j=cn,!Ze&&!Ee&&(p.render(m,x),Q.calls=p.info.render.calls,Q.triangles=p.info.render.triangles,Q.frames++),Q.frameMs=performance.now()-ct,Q.p=rt}function ht(){if(Qt||!I)return!1;let P=W(window.scrollY);return(M||P<1)&&(P<1||ne<1)}function nt(P){if(Dt=0,!ht()){z&&!Qt&&(ne=W(window.scrollY),ft(P)),jt=0;return}ft(P),Dt=requestAnimationFrame(nt)}function et(){!Dt&&z&&!Qt&&(Dt=requestAnimationFrame(nt))}Ld.registerPlugin(ie),ie.config({ignoreMobileResize:!0});let gt=ie.create({trigger:r,start:"top top",end:()=>(B(),C.endScroll),invalidateOnRefresh:!0,onUpdate:et,onToggle:et,onRefresh:()=>{Bt(!1),Nt.measure(),et()}});window.addEventListener("scroll",et,{passive:!0}),window.addEventListener("resize",()=>{Bt(!1),et()},{passive:!0}),document.addEventListener("visibilitychange",()=>{I=!document.hidden,jt=0,et()}),new IntersectionObserver(P=>{M=P[0].isIntersecting,et()},{rootMargin:"0px 0px 40% 0px"}).observe(r);let pt=0,mt=new ResizeObserver(()=>{clearTimeout(pt),pt=setTimeout(()=>ie.refresh(),160)}),ut=document.querySelector('[data-flip-target="mangonada"]');ut&&mt.observe(ut.closest("section")||ut),t.addEventListener("webglcontextlost",P=>{P.preventDefault(),Qt=!0,Dt&&cancelAnimationFrame(Dt),Dt=0;let J=window.scrollY,H=J>C.pinEnd,lt=J>C.sectionTop&&!H;C.img&&(C.img.style.opacity=""),gt.kill(),s("context-lost"),H?window.scrollTo(0,J-C.pinDist):lt&&window.scrollTo(0,C.sectionTop)}),B(),Bt(!0),Nt.measure();let zt=()=>{Qt||(ft(performance.now()),requestAnimationFrame(()=>{r.classList.add("is-live"),r.dataset.heroState="live",z=!0,jt=0,et()}))};(p.compileAsync?p.compileAsync(m,x).catch(()=>{}):Promise.resolve()).then(zt),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{Nt.measure()}),window.__heroA={info:()=>({...Q,programs:p.info.programs?p.info.programs.length:0,geometries:p.info.memory.geometries,textures:p.info.memory.textures}),scrollForP:P=>(B(),k(P)),p:()=>ne,running:()=>!!Dt,layout:()=>({...C,slot:!!C.slot,img:!!C.img,photoBox:{...kt}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r_,{once:!0}):r_();})();
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

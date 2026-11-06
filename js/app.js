(()=>{var qf=0,xc=1,Yf=2;var iu=1,$f=2,kn=3,oi=0,He=1,Ne=2;var si=0,fs=1,ve=2,_c=3,yc=4,Zf=5,Ei=100,Jf=101,Kf=102,vc=103,bc=104,jf=200,Qf=201,td=202,ed=203,Jo=204,Ko=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,ud=0,fd=1,dd=2,la=3,pd=4,md=5,gd=6,xd=7,kl=0,_d=1,yd=2,ri=0,vd=1,bd=2,Md=3,Sd=4,Ed=5,Td=6;var su=300,ms=301,gs=302,jo=303,Qo=304,Va=306,Pi=1e3,Mn=1001,tl=1002,$e=1003,Mc=1004;var mo=1005;var hn=1006,wd=1007;var Zs=1008;var ai=1009,Ad=1010,Rd=1011,Gl=1012,ru=1013,ni=1014,ii=1015,Js=1016,au=1017,ou=1018,Ai=1020,Cd=1021,Sn=1023,Pd=1024,Ld=1025,Ri=1026,xs=1027,Id=1028,lu=1029,Dd=1030,cu=1031,hu=1033,go=33776,xo=33777,_o=33778,yo=33779,Sc=35840,Ec=35841,Tc=35842,wc=35843,uu=36196,Ac=37492,Rc=37496,Cc=37808,Pc=37809,Lc=37810,Ic=37811,Dc=37812,Uc=37813,Nc=37814,Oc=37815,Fc=37816,Bc=37817,zc=37818,Hc=37819,kc=37820,Gc=37821,vo=36492,Vc=36494,Wc=36495,Ud=36283,Xc=36284,qc=36285,Yc=36286;var ca=2300,ha=2301,bo=2302,$c=2400,Zc=2401,Jc=2402;var fu=3e3,Ci=3001,Nd=3200,Od=3201,du=0,Fd=1,un="",ye="srgb",Wn="srgb-linear",Vl="display-p3",Wa="display-p3-linear",ua="linear",oe="srgb",fa="rec709",da="p3";var Gi=7680;var Kc=519,Bd=512,zd=513,Hd=514,pu=515,kd=516,Gd=517,Vd=518,Wd=519,el=35044;var jc="300 es",nl=1035,Vn=2e3,pa=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,Gs=Math.PI/180,Ks=180/Math.PI;function Cn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Wl(s,t){return(s%t+t)%t}function Xd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qd(s,t,e){return s!==t?(e-s)/(t-s):0}function Vs(s,t,e){return(1-e)*s+e*t}function Yd(s,t,e,n){return Vs(s,t,1-Math.exp(-e*n))}function $d(s,t=1){return t-Math.abs(Wl(s,t*2)-t)}function Zd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Kd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function jd(s,t){return s+Math.random()*(t-s)}function Qd(s){return s*(.5-Math.random())}function tp(s){s!==void 0&&(Qc=s);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(s){return s*Gs}function np(s){return s*Ks}function il(s){return(s&s-1)===0&&s!==0}function ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*x,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*x,a*c);break;case"ZYZ":s.set(l*x,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mn={DEG2RAD:Gs,RAD2DEG:Ks,generateUUID:Cn,clamp:Ue,euclideanModulo:Wl,mapLinear:Xd,inverseLerp:qd,lerp:Vs,damp:Yd,pingpong:$d,smoothstep:Zd,smootherstep:Jd,randInt:Kd,randFloat:jd,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:il,ceilPowerOfTwo:ip,floorPowerOfTwo:ma,setQuaternionFromProperEuler:sp,normalize:ee,denormalize:Rn},pt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],E=i[7],U=i[2],A=i[5],L=i[8];return r[0]=o*_+a*S+l*U,r[3]=o*m+a*y+l*A,r[6]=o*p+a*E+l*L,r[1]=c*_+h*S+u*U,r[4]=c*m+h*y+u*A,r[7]=c*p+h*E+u*L,r[2]=f*_+d*S+x*U,r[5]=f*m+d*y+x*A,r[8]=f*p+d*E+x*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=e*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new Xt;function mu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ga(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rp(){let s=ga("canvas");return s.style.display="block",s}var th={};function Ws(s){s in th||(th[s]=!0,console.warn(s))}var eh=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nh=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[Wn]:{transfer:ua,primaries:fa,toReference:s=>s,fromReference:s=>s},[ye]:{transfer:oe,primaries:fa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Wa]:{transfer:ua,primaries:da,toReference:s=>s.applyMatrix3(nh),fromReference:s=>s.applyMatrix3(eh)},[Vl]:{transfer:oe,primaries:da,toReference:s=>s.convertSRGBToLinear().applyMatrix3(nh),fromReference:s=>s.applyMatrix3(eh).convertLinearToSRGB()}},ap=new Set([Wn,Wa]),ne={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ap.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Cr[t].toReference,i=Cr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Cr[s].primaries},getTransfer:function(s){return s===un?ua:Cr[s].transfer}};function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function So(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vi,xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=ga("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},op=0,_a=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Eo(i[o].image)):r.push(Eo(i[o]))}else r=Eo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Eo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lp=0,fn=class s extends li{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mn,i=Mn,r=hn,o=Zs,a=Sn,l=ai,c=s.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Cn(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?ye:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?Ci:fu}set encoding(t){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?ye:un}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=su;fn.DEFAULT_ANISOTROPY=1;var Le=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,E=(d+1)/2,U=(p+1)/2,A=(h+f)/4,L=(u+_)/4,Y=(x+m)/4;return y>E&&y>U?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=L/n):E>U?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=Y/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=L/r,i=Y/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?ye:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rl=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let m=1-a,p=l*f+c*d+h*x+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let U=Math.sqrt(y),A=Math.atan2(U,p*S);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}let E=a*S;if(l=l*m+f*E,c=c*m+d*E,h=h*m+x*E,u=u*m+_*E,m===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new I,ih=new sn,qn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Lr.subVectors(this.max,Ds),Wi.subVectors(t.a,Ds),Xi.subVectors(t.b,Ds),qi.subVectors(t.c,Ds),Kn.subVectors(Xi,Wi),jn.subVectors(qi,Xi),yi.subVectors(Wi,qi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-yi.z,yi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,yi.z,0,-yi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-yi.y,yi.x,0];return!wo(e,Wi,Xi,qi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,Wi,Xi,qi,Lr))?!1:(Ir.crossVectors(Kn,jn),e=[Ir.x,Ir.y,Ir.z],wo(e,Wi,Xi,qi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Pr=new qn,Wi=new I,Xi=new I,qi=new I,Kn=new I,jn=new I,yi=new I,Ds=new I,Lr=new I,Ir=new I,vi=new I;function wo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vi.fromArray(s,r);let a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cp=new qn,Us=new I,Ao=new I,Yn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Ao)),this.expandByPoint(Us.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new I,Ro=new I,Dr=new I,Qn=new I,Co=new I,Ur=new I,Po=new I,_s=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ro.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Ro);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),a=Qn.dot(this.direction),l=-Qn.dot(Dr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ro).addScaledVector(Dr,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,r){Co.subVectors(e,t),Ur.subVectors(n,t),Po.crossVectors(Co,Ur);let o=this.direction.dot(Po),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(Ur.crossVectors(Qn,Ur));if(l<0)return null;let c=a*this.direction.dot(Co.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(Po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,x,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,x,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,x,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f+_*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hp,t,up)}lookAt(t,e,n){let i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(n,en),ti.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(n,en)),ti.normalize(),Nr.crossVectors(en,ti),i[0]=ti.x,i[4]=Nr.x,i[8]=en.x,i[1]=ti.y,i[5]=Nr.y,i[9]=en.y,i[2]=ti.z,i[6]=Nr.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],E=n[11],U=n[15],A=i[0],L=i[4],Y=i[8],v=i[12],g=i[1],C=i[5],Z=i[9],R=i[13],P=i[2],H=i[6],$=i[10],tt=i[14],Q=i[3],X=i[7],rt=i[11],B=i[15];return r[0]=o*A+a*g+l*P+c*Q,r[4]=o*L+a*C+l*H+c*X,r[8]=o*Y+a*Z+l*$+c*rt,r[12]=o*v+a*R+l*tt+c*B,r[1]=h*A+u*g+f*P+d*Q,r[5]=h*L+u*C+f*H+d*X,r[9]=h*Y+u*Z+f*$+d*rt,r[13]=h*v+u*R+f*tt+d*B,r[2]=x*A+_*g+m*P+p*Q,r[6]=x*L+_*C+m*H+p*X,r[10]=x*Y+_*Z+m*$+p*rt,r[14]=x*v+_*R+m*tt+p*B,r[3]=S*A+y*g+E*P+U*Q,r[7]=S*L+y*C+E*H+U*X,r[11]=S*Y+y*Z+E*$+U*rt,r[15]=S*v+y*R+E*tt+U*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],_=t[7],m=t[11],p=t[15];return x*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,y=x*f*c-h*m*c-x*l*d+o*m*d+h*l*p-o*f*p,E=h*_*c-x*u*c+x*a*d-o*_*d-h*a*p+o*u*p,U=x*u*l-h*_*l-x*a*f+o*_*f+h*a*m-o*u*m,A=e*S+n*y+i*E+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return t[0]=S*L,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*L,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*L,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*L,t[4]=y*L,t[5]=(h*m*r-x*f*r+x*i*d-e*m*d-h*i*p+e*f*p)*L,t[6]=(x*l*r-o*m*r-x*i*c+e*m*c+o*i*p-e*l*p)*L,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*L,t[8]=E*L,t[9]=(x*u*r-h*_*r-x*n*d+e*_*d+h*n*p-e*u*p)*L,t[10]=(o*_*r-x*a*r+x*n*c-e*_*c-o*n*p+e*a*p)*L,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*L,t[12]=U*L,t[13]=(h*_*i-x*u*i+x*n*f-e*_*f-h*n*m+e*u*m)*L,t[14]=(x*a*i-o*_*i-x*n*l+e*_*l+o*n*m-e*a*m)*L,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,_=o*h,m=o*u,p=a*u,S=l*c,y=l*h,E=l*u,U=n.x,A=n.y,L=n.z;return i[0]=(1-(_+p))*U,i[1]=(d+E)*U,i[2]=(x-y)*U,i[3]=0,i[4]=(d-E)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(x+y)*L,i[9]=(m-S)*L,i[10]=(1-(f+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Yi.set(i[0],i[1],i[2]).length(),o=Yi.set(i[4],i[5],i[6]).length(),a=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);let c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,x;if(a===Vn)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pa)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,x,_;if(a===Vn)x=(o+r)*u,_=-2*u;else if(a===pa)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new I,vn=new jt,hp=new I(0,0,0),up=new I(1,1,1),ti=new I,Nr=new I,en=new I,sh=new jt,rh=new sn,$n=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fp=0,ah=new I,$i=new sn,Bn=new jt,Or=new I,Ns=new I,dp=new I,pp=new sn,oh=new I(1,0,0),lh=new I(0,1,0),ch=new I(0,0,1),mp={type:"added"},gp={type:"removed"},be=class s extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new $n,n=new sn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ns,Or,this.up):Bn.lookAt(Or,Ns,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new I,zn=new I,Lo=new I,Hn=new I,Zi=new I,Ji=new I,hh=new I,Io=new I,Do=new I,Uo=new I,Fr=!1,wi=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),zn.subVectors(n,e),Lo.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(zn),l=bn.dot(Lo),c=zn.dot(zn),h=zn.dot(Lo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),zn.subVectors(t,e),bn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),bn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Zi.subVectors(i,n),Ji.subVectors(r,n),Io.subVectors(t,n);let l=Zi.dot(Io),c=Ji.dot(Io);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,i);let h=Zi.dot(Do),u=Ji.dot(Do);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);Uo.subVectors(t,r);let d=Zi.dot(Uo),x=Ji.dot(Uo);if(x>=0&&d<=x)return e.copy(r);let _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Ji,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return hh.subVectors(r,i),a=(u-h)/(u-h+(d-x)),e.copy(i).addScaledVector(hh,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Br={h:0,s:0,l:0};function No(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Wl(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ne.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ue(ze.r*255,0,255))*65536+Math.round(Ue(ze.g*255,0,255))*256+Math.round(Ue(ze.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,i=ze.g,r=ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=ye){ne.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,i=ze.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Br);let n=Vs(ei.h,Br.h,e),i=Vs(ei.s,Br.s,e),r=Vs(ei.l,Br.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new It;It.NAMES=gu;var xp=0,Pn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=fs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$t=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new I,zr=new pt,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}};var va=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var _p=0,cn=new jt,Oo=new be,Ki=new I,nn=new qn,Os=new qn,Pe=new I,ie=class s extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?ba:va)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(nn.min,Os.min),nn.expandByPoint(Pe),Pe.addVectors(nn.max,Os.max),nn.expandByPoint(Pe)):(nn.expandByPoint(Os.min),nn.expandByPoint(Os.max))}nn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Pe.add(Ki)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let g=0;g<a;g++)c[g]=new I,h[g]=new I;let u=new I,f=new I,d=new I,x=new pt,_=new pt,m=new pt,p=new I,S=new I;function y(g,C,Z){u.fromArray(i,g*3),f.fromArray(i,C*3),d.fromArray(i,Z*3),x.fromArray(o,g*2),_.fromArray(o,C*2),m.fromArray(o,Z*2),f.sub(u),d.sub(u),_.sub(x),m.sub(x);let R=1/(_.x*m.y-m.x*_.y);isFinite(R)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(R),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(R),c[g].add(p),c[C].add(p),c[Z].add(p),h[g].add(S),h[C].add(S),h[Z].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let g=0,C=E.length;g<C;++g){let Z=E[g],R=Z.start,P=Z.count;for(let H=R,$=R+P;H<$;H+=3)y(n[H+0],n[H+1],n[H+2])}let U=new I,A=new I,L=new I,Y=new I;function v(g){L.fromArray(r,g*3),Y.copy(L);let C=c[g];U.copy(C),U.sub(L.multiplyScalar(L.dot(C))).normalize(),A.crossVectors(Y,C);let R=A.dot(h[g])<0?-1:1;l[g*4]=U.x,l[g*4+1]=U.y,l[g*4+2]=U.z,l[g*4+3]=R}for(let g=0,C=E.length;g<C;++g){let Z=E[g],R=Z.start,P=Z.count;for(let H=R,$=R+P;H<$;H+=3)v(n[H+0]),v(n[H+1]),v(n[H+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uh=new jt,bi=new _s,Hr=new Yn,fh=new I,ji=new I,Qi=new I,ts=new I,Fo=new I,kr=new I,Gr=new pt,Vr=new pt,Wr=new pt,dh=new I,ph=new I,mh=new I,Xr=new I,qr=new I,Rt=class extends be{constructor(t=new ie,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fo.fromBufferAttribute(u,t),o?kr.addScaledVector(Fo,h):kr.addScaledVector(Fo.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Hr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Hr,fh)===null||bi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),bi.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,U=y;E<U;E+=3){let A=a.getX(E),L=a.getX(E+1),Y=a.getX(E+2);i=Yr(this,p,t,n,c,h,u,A,L,Y),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);i=Yr(this,o,t,n,c,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,U=y;E<U;E+=3){let A=E,L=E+1,Y=E+2;i=Yr(this,p,t,n,c,h,u,A,L,Y),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){let S=m,y=m+1,E=m+2;i=Yr(this,o,t,n,c,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function yp(s,t,e,n,i,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===oi,a),l===null)return null;qr.copy(a),qr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:s}}function Yr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ji),s.getVertexPosition(l,Qi),s.getVertexPosition(c,ts);let h=yp(s,t,e,n,ji,Qi,ts,Xr);if(h){i&&(Gr.fromBufferAttribute(i,a),Vr.fromBufferAttribute(i,l),Wr.fromBufferAttribute(i,c),h.uv=wi.getInterpolation(Xr,ji,Qi,ts,Gr,Vr,Wr,new pt)),r&&(Gr.fromBufferAttribute(r,a),Vr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,c),h.uv1=wi.getInterpolation(Xr,ji,Qi,ts,Gr,Vr,Wr,new pt),h.uv2=h.uv1),o&&(dh.fromBufferAttribute(o,a),ph.fromBufferAttribute(o,l),mh.fromBufferAttribute(o,c),h.normal=wi.getInterpolation(Xr,ji,Qi,ts,dh,ph,mh,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};wi.getNormal(ji,Qi,ts,u.normal),h.face=u}return h}var ke=class s extends ie{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function x(_,m,p,S,y,E,U,A,L,Y,v){let g=E/L,C=U/Y,Z=E/2,R=U/2,P=A/2,H=L+1,$=Y+1,tt=0,Q=0,X=new I;for(let rt=0;rt<$;rt++){let B=rt*C-R;for(let ot=0;ot<H;ot++){let W=ot*g-Z;X[_]=W*S,X[m]=B*y,X[p]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(ot/L),u.push(1-rt/Y),tt+=1}}for(let rt=0;rt<Y;rt++)for(let B=0;B<L;B++){let ot=f+B+H*rt,W=f+B+H*(rt+1),D=f+(B+1)+H*(rt+1),z=f+(B+1)+H*rt;l.push(ot,W,z),l.push(W,D,z),Q+=6}a.addGroup(d,Q,v),d+=Q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ys(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=ys(s[e]);for(let i in n)t[i]=n[i]}return t}function vp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xu(s){return s.getRenderTarget()===null?s.outputColorSpace:ne.workingColorSpace}var bp={clone:ys,merge:Ye},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ma=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ze=class extends Ma{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,al=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(es,ns,t,e);i.layers=this.layers,this.add(i);let r=new Ze(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new Ze(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new Ze(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new Ze(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ze(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Sa=class extends fn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?ye:un),this.texture=new Sa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ke(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:si});r.uniforms.tEquirect.value=e;let o=new Rt(i,r),a=e.minFilter;return e.minFilter===Zs&&(e.minFilter=hn),new al(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Bo=new I,Ep=new I,Tp=new Xt,Gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bo.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tp.getNormalMatrix(t),i=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new Yn,$r=new I,Qs=class{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],x=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,m-d,E-p).normalize(),n[1].setComponents(l+r,f+c,m+d,E+p).normalize(),n[2].setComponents(l+o,f+h,m+x,E+S).normalize(),n[3].setComponents(l-o,f-h,m-x,E-S).normalize(),n[4].setComponents(l-a,f-u,m-_,E-y).normalize(),e===Vn)n[5].setComponents(l+a,f+u,m+_,E+y).normalize();else if(e===pa)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if($r.x=i.normal.x>0?t.max.x:t.min.x,$r.y=i.normal.y>0?t.max.y:t.min.y,$r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _u(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function wp(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,x=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&x.length===0&&s.bufferSubData(u,0,f),x.length!==0){for(let _=0,m=x.length;_<m;_++){let p=x[_];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var rn=class s extends ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let y=0;y<c;y++){let E=y*u-r;x.push(E,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+c*p,E=S+c*(p+1),U=S+1+c*(p+1),A=S+1+c*p;d.push(y,E,A),d.push(E,U,A)}this.setIndex(d),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,v0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,w0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
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
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Um=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$m=`#define PHONG
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
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,rg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kt={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Op,begin_vertex:Fp,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:Hp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:$p,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:t0,emissivemap_fragment:e0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:v0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:_0,lights_pars_begin:y0,lights_toon_fragment:b0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:E0,lights_physical_fragment:T0,lights_physical_pars_fragment:w0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:D0,map_fragment:U0,map_pars_fragment:N0,map_particle_fragment:O0,map_particle_pars_fragment:F0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphcolor_vertex:H0,morphnormal_vertex:k0,morphtarget_pars_vertex:G0,morphtarget_vertex:V0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:q0,normal_pars_vertex:Y0,normal_vertex:$0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:Q0,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:_m,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:bm,uv_pars_fragment:Mm,uv_pars_vertex:Sm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:wm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Lm,depth_vert:Im,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:Om,equirect_frag:Fm,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:Hm,meshbasic_frag:km,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:$m,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},gt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},An={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new It(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new It(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};An.physical={uniforms:Ye([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Zr={r:0,b:0,g:0};function ag(s,t,e,n,i,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(m,p){let S=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),S=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Va)?(h===void 0&&(h=new Rt(new ke(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:ys(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ne.getTransfer(y.colorSpace)!==oe,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new rn(2,2),new Ge({name:"BackgroundMaterial",uniforms:ys(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Zr,xu(s)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function og(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,H,$,tt,Q){let X=!1;if(o){let rt=_(tt,$,H);c!==rt&&(c=rt,d(c.object)),X=p(P,tt,$,Q),X&&S(P,tt,$,Q)}else{let rt=H.wireframe===!0;(c.geometry!==tt.id||c.program!==$.id||c.wireframe!==rt)&&(c.geometry=tt.id,c.program=$.id,c.wireframe=rt,X=!0)}Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,Y(P,H,$,tt),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,H,$){let tt=$.wireframe===!0,Q=a[P.id];Q===void 0&&(Q={},a[P.id]=Q);let X=Q[H.id];X===void 0&&(X={},Q[H.id]=X);let rt=X[tt];return rt===void 0&&(rt=m(f()),X[tt]=rt),rt}function m(P){let H=[],$=[],tt=[];for(let Q=0;Q<i;Q++)H[Q]=0,$[Q]=0,tt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:tt,object:P,attributes:{},index:null}}function p(P,H,$,tt){let Q=c.attributes,X=H.attributes,rt=0,B=$.getAttributes();for(let ot in B)if(B[ot].location>=0){let D=Q[ot],z=X[ot];if(z===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),D===void 0||D.attribute!==z||z&&D.data!==z.data)return!0;rt++}return c.attributesNum!==rt||c.index!==tt}function S(P,H,$,tt){let Q={},X=H.attributes,rt=0,B=$.getAttributes();for(let ot in B)if(B[ot].location>=0){let D=X[ot];D===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(D=P.instanceColor));let z={};z.attribute=D,D&&D.data&&(z.data=D.data),Q[ot]=z,rt++}c.attributes=Q,c.attributesNum=rt,c.index=tt}function y(){let P=c.newAttributes;for(let H=0,$=P.length;H<$;H++)P[H]=0}function E(P){U(P,0)}function U(P,H){let $=c.newAttributes,tt=c.enabledAttributes,Q=c.attributeDivisors;$[P]=1,tt[P]===0&&(s.enableVertexAttribArray(P),tt[P]=1),Q[P]!==H&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),Q[P]=H)}function A(){let P=c.newAttributes,H=c.enabledAttributes;for(let $=0,tt=H.length;$<tt;$++)H[$]!==P[$]&&(s.disableVertexAttribArray($),H[$]=0)}function L(P,H,$,tt,Q,X,rt){rt===!0?s.vertexAttribIPointer(P,H,$,Q,X):s.vertexAttribPointer(P,H,$,tt,Q,X)}function Y(P,H,$,tt){if(n.isWebGL2===!1&&(P.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let Q=tt.attributes,X=$.getAttributes(),rt=H.defaultAttributeValues;for(let B in X){let ot=X[B];if(ot.location>=0){let W=Q[B];if(W===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let D=W.normalized,z=W.itemSize,V=e.get(W);if(V===void 0)continue;let K=V.buffer,j=V.type,N=V.bytesPerElement,k=n.isWebGL2===!0&&(j===s.INT||j===s.UNSIGNED_INT||W.gpuType===ru);if(W.isInterleavedBufferAttribute){let st=W.data,w=st.stride,lt=W.offset;if(st.isInstancedInterleavedBuffer){for(let J=0;J<ot.locationSize;J++)U(ot.location+J,st.meshPerAttribute);P.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<ot.locationSize;J++)E(ot.location+J);s.bindBuffer(s.ARRAY_BUFFER,K);for(let J=0;J<ot.locationSize;J++)L(ot.location+J,z/ot.locationSize,j,D,w*N,(lt+z/ot.locationSize*J)*N,k)}else{if(W.isInstancedBufferAttribute){for(let st=0;st<ot.locationSize;st++)U(ot.location+st,W.meshPerAttribute);P.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let st=0;st<ot.locationSize;st++)E(ot.location+st);s.bindBuffer(s.ARRAY_BUFFER,K);for(let st=0;st<ot.locationSize;st++)L(ot.location+st,z/ot.locationSize,j,D,z*N,z/ot.locationSize*st*N,k)}}else if(rt!==void 0){let D=rt[B];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(ot.location,D);break;case 3:s.vertexAttrib3fv(ot.location,D);break;case 4:s.vertexAttrib4fv(ot.location,D);break;default:s.vertexAttrib1fv(ot.location,D)}}}}A()}function v(){Z();for(let P in a){let H=a[P];for(let $ in H){let tt=H[$];for(let Q in tt)x(tt[Q].object),delete tt[Q];delete H[$]}delete a[P]}}function g(P){if(a[P.id]===void 0)return;let H=a[P.id];for(let $ in H){let tt=H[$];for(let Q in tt)x(tt[Q].object),delete tt[Q];delete H[$]}delete a[P.id]}function C(P){for(let H in a){let $=a[H];if($[P.id]===void 0)continue;let tt=$[P.id];for(let Q in tt)x(tt[Q].object),delete tt[Q];delete $[P.id]}}function Z(){R(),h=!0,c!==l&&(c=l,d(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:g,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:E,disableUnusedAttributes:A}}function lg(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,x;if(i)d=s,x="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_];e.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,E=o||t.has("OES_texture_float"),U=y&&E,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:U,maxSamples:A}}function hg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Gn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,y=S*4,E=p.clippingState||null;l.value=E,E=h(x,f,y,d);for(let U=0;U!==y;++U)E[U]=e[U];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=d;y!==_;++y,E+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ug(s){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=ms:a===Qo&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jo||a===Qo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ol(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ea=class extends Ma{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,gh=[.125,.215,.35,.446,.526,.582],Ti=20,zo=new Ea,xh=new It,Ho=null,ko=0,Go=0,Si=(1+Math.sqrt(5))/2,is=1/Si,_h=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Si,is),new I(0,Si,-is),new I(is,0,Si),new I(-is,0,Si),new I(Si,is,0),new I(-Si,is,0)],Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ho=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,ko,Go),t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Js,format:Sn,colorSpace:Wn,depthBuffer:!1},i=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=dg(r,t,e)}return i}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,i){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(xh),h.toneMapping=ri,h.autoClear=!1;let d=new $t({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),x=new Rt(new ke,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(xh),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Jr(i,S*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ms||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_h[(i-1)%_h.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);let p=[],S=0;for(let L=0;L<Ti;++L){let Y=L/_,v=Math.exp(-Y*Y/2);p.push(v),L===0?S+=v:L<m&&(S+=2*v)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;let E=this._sizeLods[i],U=3*E*(i>y-cs?i-y+cs:0),A=4*(this._cubeSize-E);Jr(e,U,A,3*E,2*E),l.setRenderTarget(e),l.render(u,zo)}};function fg(s){let t=[],e=[],n=[],i=s,r=s-cs+1+gh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-cs?l=gh[o-s+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,m=2,p=1,S=new Float32Array(_*x*d),y=new Float32Array(m*x*d),E=new Float32Array(p*x*d);for(let A=0;A<d;A++){let L=A%3*2/3-1,Y=A>2?0:-1,v=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];S.set(v,_*x*A),y.set(f,m*x*A);let g=[A,A,A,A,A,A];E.set(g,p*x*A)}let U=new ie;U.setAttribute("position",new pe(S,_)),U.setAttribute("uv",new pe(y,m)),U.setAttribute("faceIndex",new pe(E,p)),t.push(U),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(s,t,e){let n=new Xn(s,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dg(s,t,e){let n=new Float32Array(Ti),i=new I(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function vh(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function bh(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===jo||l===Qo,h=l===ms||l===gs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ta(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ta(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gg(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let y=0,E=S.length;y<E;y+=3){let U=S[y+0],A=S[y+1],L=S[y+2];f.push(U,A,A,L,L,U)}}else if(x!==void 0){let S=x.array;_=x.version;for(let y=0,E=S.length/3-1;y<E;y+=3){let U=y+0,A=y+1,L=y+2;f.push(U,A,A,L,L,U)}}else return;let m=new(mu(f)?ba:va)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xg(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,x){s.drawElements(r,x,a,d*l),e.update(x,r,1)}function u(d,x,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,a,d*l,_),e.update(x,r,_)}function f(d,x,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,a,d,0,_);let p=0;for(let S=0;S<_;S++)p+=x[S];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function _g(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yg(s,t){return s[0]-t[0]}function vg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function bg(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Le,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==x){let P=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;S===!0&&(Y=1),y===!0&&(Y=2),E===!0&&(Y=3);let v=h.attributes.position.count*Y,g=1;v>t.maxTextureSize&&(g=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*g*4*x),Z=new ya(C,v,g,x);Z.type=ii,Z.needsUpdate=!0;let R=Y*4;for(let H=0;H<x;H++){let $=U[H],tt=A[H],Q=L[H],X=v*g*4*H;for(let rt=0;rt<$.count;rt++){let B=rt*R;S===!0&&(o.fromBufferAttribute($,rt),C[X+B+0]=o.x,C[X+B+1]=o.y,C[X+B+2]=o.z,C[X+B+3]=0),y===!0&&(o.fromBufferAttribute(tt,rt),C[X+B+4]=o.x,C[X+B+5]=o.y,C[X+B+6]=o.z,C[X+B+7]=0),E===!0&&(o.fromBufferAttribute(Q,rt),C[X+B+8]=o.x,C[X+B+9]=o.y,C[X+B+10]=o.z,C[X+B+11]=Q.itemSize===4?o.w:1)}}_={count:x,texture:Z,size:new pt(v,g)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let y=0;y<d;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<d;y++){let E=x[y];E[0]=y,E[1]=f[y]}x.sort(vg);for(let y=0;y<8;y++)y<d&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(yg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let E=a[y],U=E[0],A=E[1];U!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+y)!==_[U]&&h.setAttribute("morphTarget"+y,_[U]),m&&h.getAttribute("morphNormal"+y)!==m[U]&&h.setAttribute("morphNormal"+y,m[U]),i[y]=A,p+=A):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Mg(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var wa=class extends fn{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=ni),n===void 0&&h===xs&&(n=Ai),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yu=new fn,vu=new wa(1,1);vu.compareFunction=pu;var bu=new ya,Mu=new rl,Su=new Sa,Mh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function ws(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Mh[i];if(r===void 0&&(r=new Float32Array(i),Mh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xa(s,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function Ag(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),Ae(e,n)}}function Rg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Th.set(n),s.uniformMatrix3fv(this.addr,!1,Th),Ae(e,n)}}function Cg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),Ae(e,n)}}function Pg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function Ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function Og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function Fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function Bg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?vu:yu;e.setTexture2D(t||r,i)}function zg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mu,i)}function Hg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Su,i)}function kg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bu,i)}function Gg(s){switch(s){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(s,t){s.uniform1fv(this.addr,t)}function Wg(s,t){let e=ws(t,this.size,2);s.uniform2fv(this.addr,e)}function Xg(s,t){let e=ws(t,this.size,3);s.uniform3fv(this.addr,e)}function qg(s,t){let e=ws(t,this.size,4);s.uniform4fv(this.addr,e)}function Yg(s,t){let e=ws(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $g(s,t){let e=ws(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zg(s,t){let e=ws(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jg(s,t){s.uniform1iv(this.addr,t)}function Kg(s,t){s.uniform2iv(this.addr,t)}function jg(s,t){s.uniform3iv(this.addr,t)}function Qg(s,t){s.uniform4iv(this.addr,t)}function tx(s,t){s.uniform1uiv(this.addr,t)}function ex(s,t){s.uniform2uiv(this.addr,t)}function nx(s,t){s.uniform3uiv(this.addr,t)}function ix(s,t){s.uniform4uiv(this.addr,t)}function sx(s,t,e){let n=this.cache,i=t.length,r=Xa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||yu,r[o])}function rx(s,t,e){let n=this.cache,i=t.length,r=Xa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mu,r[o])}function ax(s,t,e){let n=this.cache,i=t.length,r=Xa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Su,r[o])}function ox(s,t,e){let n=this.cache,i=t.length,r=Xa(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||bu,r[o])}function lx(s){switch(s){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}var ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lx(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function Ah(s,t){s.seq.push(t),s.map[t.id]=t}function cx(s,t,e){let n=s.name,i=n.length;for(Vo.lastIndex=0;;){let r=Vo.exec(n),o=Vo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ah(e,c===void 0?new ll(a,s,t):new cl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new hl(a),Ah(e,u)),e=u}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Rh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var hx=37297,ux=0;function fx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function dx(s){let t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s),n;switch(t===e?n="":t===da&&e===fa?n="LinearDisplayP3ToLinearSRGB":t===fa&&e===da&&(n="LinearSRGBToLinearDisplayP3"),s){case Wn:case Wa:return[n,"LinearTransferOETF"];case ye:case Vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ch(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+fx(s.getShaderSource(t),o)}else return i}function px(s,t){let e=dx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mx(s,t){let e;switch(t){case vd:e="Linear";break;case bd:e="Reinhard";break;case Md:e="OptimizedCineon";break;case Sd:e="ACESFilmic";break;case Td:e="AgX";break;case Ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function _x(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function hs(s){return s!==""}function Ph(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(s){return s.replace(vx,Mx)}var bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mx(s,t){let e=kt[t];if(e===void 0){let n=bx.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(s){return s.replace(Sx,Ex)}function Ex(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===gs&&(t="ENVMAP_MODE_REFRACTION"),t}function Rx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kl:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function Cx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Px(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tx(e),c=wx(e),h=Ax(e),u=Rx(e),f=Cx(e),d=e.isWebGL2?"":gx(e),x=xx(e),_=_x(r),m=i.createProgram(),p,S,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),S.length>0&&(S+=`
`)):(p=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),S=[d,Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?kt.tonemapping_pars_fragment:"",e.toneMapping!==ri?mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,px("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=ul(o),o=Ph(o,e),o=Lh(o,e),a=ul(a),a=Ph(a,e),a=Lh(a,e),o=Ih(o),a=Ih(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let E=y+p+o,U=y+S+a,A=Rh(i,i.VERTEX_SHADER,E),L=Rh(i,i.FRAGMENT_SHADER,U);i.attachShader(m,A),i.attachShader(m,L),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function Y(Z){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(L).trim(),$=!0,tt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,L);else{let Q=Ch(i,A,"vertex"),X=Ch(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+Q+`
`+X)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(P===""||H==="")&&(tt=!1);tt&&(Z.diagnostics={runnable:$,programLog:R,vertexShader:{log:P,prefix:p},fragmentShader:{log:H,prefix:S}})}i.deleteShader(A),i.deleteShader(L),v=new ps(i,m),g=yx(i,m)}let v;this.getUniforms=function(){return v===void 0&&Y(this),v};let g;this.getAttributes=function(){return g===void 0&&Y(this),g};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,hx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=L,this}var Lx=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dl(t),e.set(t,n)),n}},dl=class{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}};function Ix(s,t,e,n,i,r,o){let a=new js,l=new fl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,g,C,Z,R){let P=Z.fog,H=R.geometry,$=v.isMeshStandardMaterial?Z.environment:null,tt=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),Q=tt&&tt.mapping===Va?tt.image.height:null,X=x[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,B=rt!==void 0?rt.length:0,ot=0;H.morphAttributes.position!==void 0&&(ot=1),H.morphAttributes.normal!==void 0&&(ot=2),H.morphAttributes.color!==void 0&&(ot=3);let W,D,z,V;if(X){let We=An[X];W=We.vertexShader,D=We.fragmentShader}else W=v.vertexShader,D=v.fragmentShader,l.update(v),z=l.getVertexShaderID(v),V=l.getFragmentShaderID(v);let K=s.getRenderTarget(),j=R.isInstancedMesh===!0,N=R.isBatchedMesh===!0,k=!!v.map,st=!!v.matcap,w=!!tt,lt=!!v.aoMap,J=!!v.lightMap,ut=!!v.bumpMap,nt=!!v.normalMap,Mt=!!v.displacementMap,O=!!v.emissiveMap,M=!!v.metalnessMap,b=!!v.roughnessMap,G=v.anisotropy>0,ht=v.clearcoat>0,ct=v.iridescence>0,ft=v.sheen>0,Et=v.transmission>0,xt=G&&!!v.anisotropyMap,St=ht&&!!v.clearcoatMap,Ct=ht&&!!v.clearcoatNormalMap,Ft=ht&&!!v.clearcoatRoughnessMap,dt=ct&&!!v.iridescenceMap,Kt=ct&&!!v.iridescenceThicknessMap,qt=ft&&!!v.sheenColorMap,Nt=ft&&!!v.sheenRoughnessMap,At=!!v.specularMap,Tt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,Qt=Et&&!!v.transmissionMap,ge=Et&&!!v.thicknessMap,Vt=!!v.gradientMap,mt=!!v.alphaMap,F=v.alphaTest>0,_t=!!v.alphaHash,yt=!!v.extensions,Dt=!!H.attributes.uv1,Pt=!!H.attributes.uv2,se=!!H.attributes.uv3,re=ri;return v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(re=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:D,defines:v.defines,customVertexShaderID:z,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:N,instancing:j,instancingColor:j&&R.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wn,map:k,matcap:st,envMap:w,envMapMode:w&&tt.mapping,envMapCubeUVHeight:Q,aoMap:lt,lightMap:J,bumpMap:ut,normalMap:nt,displacementMap:f&&Mt,emissiveMap:O,normalMapObjectSpace:nt&&v.normalMapType===Fd,normalMapTangentSpace:nt&&v.normalMapType===du,metalnessMap:M,roughnessMap:b,anisotropy:G,anisotropyMap:xt,clearcoat:ht,clearcoatMap:St,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ft,iridescence:ct,iridescenceMap:dt,iridescenceThicknessMap:Kt,sheen:ft,sheenColorMap:qt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:Tt,specularIntensityMap:Ht,transmission:Et,transmissionMap:Qt,thicknessMap:ge,gradientMap:Vt,opaque:v.transparent===!1&&v.blending===fs,alphaMap:mt,alphaTest:F,alphaHash:_t,combine:v.combine,mapUv:k&&_(v.map.channel),aoMapUv:lt&&_(v.aoMap.channel),lightMapUv:J&&_(v.lightMap.channel),bumpMapUv:ut&&_(v.bumpMap.channel),normalMapUv:nt&&_(v.normalMap.channel),displacementMapUv:Mt&&_(v.displacementMap.channel),emissiveMapUv:O&&_(v.emissiveMap.channel),metalnessMapUv:M&&_(v.metalnessMap.channel),roughnessMapUv:b&&_(v.roughnessMap.channel),anisotropyMapUv:xt&&_(v.anisotropyMap.channel),clearcoatMapUv:St&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(v.sheenRoughnessMap.channel),specularMapUv:At&&_(v.specularMap.channel),specularColorMapUv:Tt&&_(v.specularColorMap.channel),specularIntensityMapUv:Ht&&_(v.specularIntensityMap.channel),transmissionMapUv:Qt&&_(v.transmissionMap.channel),thicknessMapUv:ge&&_(v.thicknessMap.channel),alphaMapUv:mt&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(nt||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:se,pointsUvs:R.isPoints===!0&&!!H.attributes.uv&&(k||mt),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ot,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,useLegacyLights:s._useLegacyLights,decodeVideoTexture:k&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ne,flipSided:v.side===He,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:yt&&v.extensions.derivatives===!0,extensionFragDepth:yt&&v.extensions.fragDepth===!0,extensionDrawBuffers:yt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let g=[];if(v.shaderID?g.push(v.shaderID):(g.push(v.customVertexShaderID),g.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)g.push(C),g.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(S(g,v),y(g,v),g.push(s.outputColorSpace)),g.push(v.customProgramCacheKey),g.join()}function S(v,g){v.push(g.precision),v.push(g.outputColorSpace),v.push(g.envMapMode),v.push(g.envMapCubeUVHeight),v.push(g.mapUv),v.push(g.alphaMapUv),v.push(g.lightMapUv),v.push(g.aoMapUv),v.push(g.bumpMapUv),v.push(g.normalMapUv),v.push(g.displacementMapUv),v.push(g.emissiveMapUv),v.push(g.metalnessMapUv),v.push(g.roughnessMapUv),v.push(g.anisotropyMapUv),v.push(g.clearcoatMapUv),v.push(g.clearcoatNormalMapUv),v.push(g.clearcoatRoughnessMapUv),v.push(g.iridescenceMapUv),v.push(g.iridescenceThicknessMapUv),v.push(g.sheenColorMapUv),v.push(g.sheenRoughnessMapUv),v.push(g.specularMapUv),v.push(g.specularColorMapUv),v.push(g.specularIntensityMapUv),v.push(g.transmissionMapUv),v.push(g.thicknessMapUv),v.push(g.combine),v.push(g.fogExp2),v.push(g.sizeAttenuation),v.push(g.morphTargetsCount),v.push(g.morphAttributeCount),v.push(g.numDirLights),v.push(g.numPointLights),v.push(g.numSpotLights),v.push(g.numSpotLightMaps),v.push(g.numHemiLights),v.push(g.numRectAreaLights),v.push(g.numDirLightShadows),v.push(g.numPointLightShadows),v.push(g.numSpotLightShadows),v.push(g.numSpotLightShadowsWithMaps),v.push(g.numLightProbes),v.push(g.shadowMapType),v.push(g.toneMapping),v.push(g.numClippingPlanes),v.push(g.numClipIntersection),v.push(g.depthPacking)}function y(v,g){a.disableAll(),g.isWebGL2&&a.enable(0),g.supportsVertexTextures&&a.enable(1),g.instancing&&a.enable(2),g.instancingColor&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),v.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.skinning&&a.enable(4),g.morphTargets&&a.enable(5),g.morphNormals&&a.enable(6),g.morphColors&&a.enable(7),g.premultipliedAlpha&&a.enable(8),g.shadowMapEnabled&&a.enable(9),g.useLegacyLights&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){let g=x[v.type],C;if(g){let Z=An[g];C=bp.clone(Z.uniforms)}else C=v.uniforms;return C}function U(v,g){let C;for(let Z=0,R=c.length;Z<R;Z++){let P=c[Z];if(P.cacheKey===g){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Px(s,g,v,r),c.push(C)),C}function A(v){if(--v.usedTimes===0){let g=c.indexOf(v);c[g]=c[c.length-1],c.pop(),v.destroy()}}function L(v){l.remove(v)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:U,releaseProgram:A,releaseShaderCache:L,programs:c,dispose:Y}}function Dx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ux(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,x,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,x,_,m){let p=o(u,f,d,x,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,x,_,m){let p=o(u,f,d,x,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ux),n.length>1&&n.sort(f||Uh),i.length>1&&i.sort(f||Uh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Nx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Nh,s.set(n,[o])):i>=r.length?(o=new Nh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ox(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new It};break;case"SpotLight":e={position:new I,direction:new I,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Fx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Bx=0;function zx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hx(s,t){let e=new Ox,n=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let r=new I,o=new jt,a=new jt;function l(h,u){let f=0,d=0,x=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,m=0,p=0,S=0,y=0,E=0,U=0,A=0,L=0,Y=0,v=0;h.sort(zx);let g=u===!0?Math.PI:1;for(let Z=0,R=h.length;Z<R;Z++){let P=h[Z],H=P.color,$=P.intensity,tt=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=H.r*$*g,d+=H.g*$*g,x+=H.b*$*g;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],$);v++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*g),P.castShadow){let rt=P.shadow,B=n.get(P);B.shadowBias=rt.bias,B.shadowNormalBias=rt.normalBias,B.shadowRadius=rt.radius,B.shadowMapSize=rt.mapSize,i.directionalShadow[_]=B,i.directionalShadowMap[_]=Q,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=X,_++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar($*g),X.distance=tt,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[p]=X;let rt=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,rt.updateMatrices(P),P.castShadow&&Y++),i.spotLightMatrix[p]=rt.matrix,P.castShadow){let B=n.get(P);B.shadowBias=rt.bias,B.shadowNormalBias=rt.normalBias,B.shadowRadius=rt.radius,B.shadowMapSize=rt.mapSize,i.spotShadow[p]=B,i.spotShadowMap[p]=Q,A++}p++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(H).multiplyScalar($),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=X,S++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*g),X.distance=P.distance,X.decay=P.decay,P.castShadow){let rt=P.shadow,B=n.get(P);B.shadowBias=rt.bias,B.shadowNormalBias=rt.normalBias,B.shadowRadius=rt.radius,B.shadowMapSize=rt.mapSize,B.shadowCameraNear=rt.camera.near,B.shadowCameraFar=rt.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=P.shadow.matrix,U++}i.point[m]=X,m++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar($*g),X.groundColor.copy(P.groundColor).multiplyScalar($*g),i.hemi[y]=X,y++}}S>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=x;let C=i.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==p||C.rectAreaLength!==S||C.hemiLength!==y||C.numDirectionalShadows!==E||C.numPointShadows!==U||C.numSpotShadows!==A||C.numSpotMaps!==L||C.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=A+L-Y,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=Y,i.numLightProbes=v,C.directionalLength=_,C.pointLength=m,C.spotLength=p,C.rectAreaLength=S,C.hemiLength=y,C.numDirectionalShadows=E,C.numPointShadows=U,C.numSpotShadows=A,C.numSpotMaps=L,C.numLightProbes=v,i.version=Bx++)}function c(h,u){let f=0,d=0,x=0,_=0,m=0,p=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){let E=h[S];if(E.isDirectionalLight){let U=i.directional[f];U.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),f++}else if(E.isSpotLight){let U=i.spot[x];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),x++}else if(E.isRectAreaLight){let U=i.rectArea[_];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let U=i.point[d];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let U=i.hemi[m];U.direction.setFromMatrixPosition(E.matrixWorld),U.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Oh(s,t){let e=new Hx(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kx(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Oh(s,t),e.set(r,[l])):o>=a.length?(l=new Oh(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var pl=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ml=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(s,t,e){let n=new Qs,i=new pt,r=new pt,o=new Le,a=new pl({depthPacking:Od}),l=new ml,c={},h=e.maxTextureSize,u={[oi]:He,[He]:oi,[Ne]:Ne},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Gx,fragmentShader:Vx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new ie;x.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(A,L,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=s.getRenderTarget(),g=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(si),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let R=p!==kn&&this.type===kn,P=p===kn&&this.type!==kn;for(let H=0,$=A.length;H<$;H++){let tt=A[H],Q=tt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let X=Q.getFrameExtents();if(i.multiply(X),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,Q.mapSize.y=r.y)),Q.map===null||R===!0||P===!0){let B=this.type!==kn?{minFilter:$e,magFilter:$e}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Xn(i.x,i.y,B),Q.map.texture.name=tt.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();let rt=Q.getViewportCount();for(let B=0;B<rt;B++){let ot=Q.getViewport(B);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),Z.viewport(o),Q.updateMatrices(tt,B),n=Q.getFrustum(),E(L,Y,Q.camera,tt,this.type)}Q.isPointLightShadow!==!0&&this.type===kn&&S(Q,Y),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,g,C)};function S(A,L){let Y=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(L,null,Y,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(L,null,Y,d,_,null)}function y(A,L,Y,v){let g=null,C=Y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)g=C;else if(g=Y.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let Z=g.uuid,R=L.uuid,P=c[Z];P===void 0&&(P={},c[Z]=P);let H=P[R];H===void 0&&(H=g.clone(),P[R]=H,L.addEventListener("dispose",U)),g=H}if(g.visible=L.visible,g.wireframe=L.wireframe,v===kn?g.side=L.shadowSide!==null?L.shadowSide:L.side:g.side=L.shadowSide!==null?L.shadowSide:u[L.side],g.alphaMap=L.alphaMap,g.alphaTest=L.alphaTest,g.map=L.map,g.clipShadows=L.clipShadows,g.clippingPlanes=L.clippingPlanes,g.clipIntersection=L.clipIntersection,g.displacementMap=L.displacementMap,g.displacementScale=L.displacementScale,g.displacementBias=L.displacementBias,g.wireframeLinewidth=L.wireframeLinewidth,g.linewidth=L.linewidth,Y.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let Z=s.properties.get(g);Z.light=Y}return g}function E(A,L,Y,v,g){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld);let R=t.update(A),P=A.material;if(Array.isArray(P)){let H=R.groups;for(let $=0,tt=H.length;$<tt;$++){let Q=H[$],X=P[Q.materialIndex];if(X&&X.visible){let rt=y(A,X,v,g);A.onBeforeShadow(s,A,L,Y,R,rt,Q),s.renderBufferDirect(Y,null,R,rt,A,Q),A.onAfterShadow(s,A,L,Y,R,rt,Q)}}}else if(P.visible){let H=y(A,P,v,g);A.onBeforeShadow(s,A,L,Y,R,H,null),s.renderBufferDirect(Y,null,R,H,A,null),A.onAfterShadow(s,A,L,Y,R,H,null)}}let Z=A.children;for(let R=0,P=Z.length;R<P;R++)E(Z[R],L,Y,v,g)}function U(A){A.target.removeEventListener("dispose",U);for(let Y in c){let v=c[Y],g=A.target.uuid;g in v&&(v[g].dispose(),delete v[g])}}}function Xx(s,t,e){let n=e.isWebGL2;function i(){let F=!1,_t=new Le,yt=null,Dt=new Le(0,0,0,0);return{setMask:function(Pt){yt!==Pt&&!F&&(s.colorMask(Pt,Pt,Pt,Pt),yt=Pt)},setLocked:function(Pt){F=Pt},setClear:function(Pt,se,re,Re,We){We===!0&&(Pt*=Re,se*=Re,re*=Re),_t.set(Pt,se,re,Re),Dt.equals(_t)===!1&&(s.clearColor(Pt,se,re,Re),Dt.copy(_t))},reset:function(){F=!1,yt=null,Dt.set(-1,0,0,0)}}}function r(){let F=!1,_t=null,yt=null,Dt=null;return{setTest:function(Pt){Pt?N(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(Pt){_t!==Pt&&!F&&(s.depthMask(Pt),_t=Pt)},setFunc:function(Pt){if(yt!==Pt){switch(Pt){case ud:s.depthFunc(s.NEVER);break;case fd:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Pt}},setLocked:function(Pt){F=Pt},setClear:function(Pt){Dt!==Pt&&(s.clearDepth(Pt),Dt=Pt)},reset:function(){F=!1,_t=null,yt=null,Dt=null}}}function o(){let F=!1,_t=null,yt=null,Dt=null,Pt=null,se=null,re=null,Re=null,We=null;return{setTest:function(ae){F||(ae?N(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(ae){_t!==ae&&!F&&(s.stencilMask(ae),_t=ae)},setFunc:function(ae,Xe,wn){(yt!==ae||Dt!==Xe||Pt!==wn)&&(s.stencilFunc(ae,Xe,wn),yt=ae,Dt=Xe,Pt=wn)},setOp:function(ae,Xe,wn){(se!==ae||re!==Xe||Re!==wn)&&(s.stencilOp(ae,Xe,wn),se=ae,re=Xe,Re=wn)},setLocked:function(ae){F=ae},setClear:function(ae){We!==ae&&(s.clearStencil(ae),We=ae)},reset:function(){F=!1,_t=null,yt=null,Dt=null,Pt=null,se=null,re=null,Re=null,We=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},x=new WeakMap,_=[],m=null,p=!1,S=null,y=null,E=null,U=null,A=null,L=null,Y=null,v=new It(0,0,0),g=0,C=!1,Z=null,R=null,P=null,H=null,$=null,tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,X=0,rt=s.getParameter(s.VERSION);rt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Q=X>=1):rt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Q=X>=2);let B=null,ot={},W=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),z=new Le().fromArray(W),V=new Le().fromArray(D);function K(F,_t,yt,Dt){let Pt=new Uint8Array(4),se=s.createTexture();s.bindTexture(F,se),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<yt;re++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(_t+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return se}let j={};j[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(j[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(s.DEPTH_TEST),l.setFunc(la),O(!1),M(xc),N(s.CULL_FACE),nt(si);function N(F){f[F]!==!0&&(s.enable(F),f[F]=!0)}function k(F){f[F]!==!1&&(s.disable(F),f[F]=!1)}function st(F,_t){return d[F]!==_t?(s.bindFramebuffer(F,_t),d[F]=_t,n&&(F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_t),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function w(F,_t){let yt=_,Dt=!1;if(F)if(yt=x.get(_t),yt===void 0&&(yt=[],x.set(_t,yt)),F.isWebGLMultipleRenderTargets){let Pt=F.texture;if(yt.length!==Pt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let se=0,re=Pt.length;se<re;se++)yt[se]=s.COLOR_ATTACHMENT0+se;yt.length=Pt.length,Dt=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,Dt=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function lt(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let J={[Ei]:s.FUNC_ADD,[Jf]:s.FUNC_SUBTRACT,[Kf]:s.FUNC_REVERSE_SUBTRACT};if(n)J[vc]=s.MIN,J[bc]=s.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(J[vc]=F.MIN_EXT,J[bc]=F.MAX_EXT)}let ut={[jf]:s.ZERO,[Qf]:s.ONE,[td]:s.SRC_COLOR,[Jo]:s.SRC_ALPHA,[ad]:s.SRC_ALPHA_SATURATE,[sd]:s.DST_COLOR,[nd]:s.DST_ALPHA,[ed]:s.ONE_MINUS_SRC_COLOR,[Ko]:s.ONE_MINUS_SRC_ALPHA,[rd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[od]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[hd]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(F,_t,yt,Dt,Pt,se,re,Re,We,ae){if(F===si){p===!0&&(k(s.BLEND),p=!1);return}if(p===!1&&(N(s.BLEND),p=!0),F!==Zf){if(F!==S||ae!==C){if((y!==Ei||A!==Ei)&&(s.blendEquation(s.FUNC_ADD),y=Ei,A=Ei),ae)switch(F){case fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ve:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ve:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,U=null,L=null,Y=null,v.set(0,0,0),g=0,S=F,C=ae}return}Pt=Pt||_t,se=se||yt,re=re||Dt,(_t!==y||Pt!==A)&&(s.blendEquationSeparate(J[_t],J[Pt]),y=_t,A=Pt),(yt!==E||Dt!==U||se!==L||re!==Y)&&(s.blendFuncSeparate(ut[yt],ut[Dt],ut[se],ut[re]),E=yt,U=Dt,L=se,Y=re),(Re.equals(v)===!1||We!==g)&&(s.blendColor(Re.r,Re.g,Re.b,We),v.copy(Re),g=We),S=F,C=!1}function Mt(F,_t){F.side===Ne?k(s.CULL_FACE):N(s.CULL_FACE);let yt=F.side===He;_t&&(yt=!yt),O(yt),F.blending===fs&&F.transparent===!1?nt(si):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let Dt=F.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)}function O(F){Z!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),Z=F)}function M(F){F!==qf?(N(s.CULL_FACE),F!==R&&(F===xc?s.cullFace(s.BACK):F===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),R=F}function b(F){F!==P&&(Q&&s.lineWidth(F),P=F)}function G(F,_t,yt){F?(N(s.POLYGON_OFFSET_FILL),(H!==_t||$!==yt)&&(s.polygonOffset(_t,yt),H=_t,$=yt)):k(s.POLYGON_OFFSET_FILL)}function ht(F){F?N(s.SCISSOR_TEST):k(s.SCISSOR_TEST)}function ct(F){F===void 0&&(F=s.TEXTURE0+tt-1),B!==F&&(s.activeTexture(F),B=F)}function ft(F,_t,yt){yt===void 0&&(B===null?yt=s.TEXTURE0+tt-1:yt=B);let Dt=ot[yt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ot[yt]=Dt),(Dt.type!==F||Dt.texture!==_t)&&(B!==yt&&(s.activeTexture(yt),B=yt),s.bindTexture(F,_t||j[F]),Dt.type=F,Dt.texture=_t)}function Et(){let F=ot[B];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function xt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(F){z.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),z.copy(F))}function Qt(F){V.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),V.copy(F))}function ge(F,_t){let yt=u.get(_t);yt===void 0&&(yt=new WeakMap,u.set(_t,yt));let Dt=yt.get(F);Dt===void 0&&(Dt=s.getUniformBlockIndex(_t,F.name),yt.set(F,Dt))}function Vt(F,_t){let Dt=u.get(_t).get(F);h.get(_t)!==Dt&&(s.uniformBlockBinding(_t,Dt,F.__bindingPointIndex),h.set(_t,Dt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},B=null,ot={},d={},x=new WeakMap,_=[],m=null,p=!1,S=null,y=null,E=null,U=null,A=null,L=null,Y=null,v=new It(0,0,0),g=0,C=!1,Z=null,R=null,P=null,H=null,$=null,z.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:k,bindFramebuffer:st,drawBuffers:w,useProgram:lt,setBlending:nt,setMaterial:Mt,setFlipSided:O,setCullFace:M,setLineWidth:b,setPolygonOffset:G,setScissorTest:ht,activeTexture:ct,bindTexture:ft,unbindTexture:Et,compressedTexImage2D:xt,compressedTexImage3D:St,texImage2D:At,texImage3D:Tt,updateUBOMapping:ge,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Ft,compressedTexSubImage2D:dt,compressedTexSubImage3D:Kt,scissor:Ht,viewport:Qt,reset:mt}}function qx(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,b){return d?new OffscreenCanvas(M,b):ga("canvas")}function _(M,b,G,ht){let ct=1;if((M.width>ht||M.height>ht)&&(ct=ht/Math.max(M.width,M.height)),ct<1||b===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let ft=b?ma:Math.floor,Et=ft(ct*M.width),xt=ft(ct*M.height);u===void 0&&(u=x(Et,xt));let St=G?x(Et,xt):u;return St.width=Et,St.height=xt,St.getContext("2d").drawImage(M,0,0,Et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Et+"x"+xt+")."),St}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return il(M.width)&&il(M.height)}function p(M){return a?!1:M.wrapS!==Mn||M.wrapT!==Mn||M.minFilter!==$e&&M.minFilter!==hn}function S(M,b){return M.generateMipmaps&&b&&M.minFilter!==$e&&M.minFilter!==hn}function y(M){s.generateMipmap(M)}function E(M,b,G,ht,ct=!1){if(a===!1)return b;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ft=b;if(b===s.RED&&(G===s.FLOAT&&(ft=s.R32F),G===s.HALF_FLOAT&&(ft=s.R16F),G===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ft=s.R8UI),G===s.UNSIGNED_SHORT&&(ft=s.R16UI),G===s.UNSIGNED_INT&&(ft=s.R32UI),G===s.BYTE&&(ft=s.R8I),G===s.SHORT&&(ft=s.R16I),G===s.INT&&(ft=s.R32I)),b===s.RG&&(G===s.FLOAT&&(ft=s.RG32F),G===s.HALF_FLOAT&&(ft=s.RG16F),G===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RGBA){let Et=ct?ua:ne.getTransfer(ht);G===s.FLOAT&&(ft=s.RGBA32F),G===s.HALF_FLOAT&&(ft=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ft=Et===oe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(M,b,G){return S(M,G)===!0||M.isFramebufferTexture&&M.minFilter!==$e&&M.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function A(M){return M===$e||M===Mc||M===mo?s.NEAREST:s.LINEAR}function L(M){let b=M.target;b.removeEventListener("dispose",L),v(b),b.isVideoTexture&&h.delete(b)}function Y(M){let b=M.target;b.removeEventListener("dispose",Y),C(b)}function v(M){let b=n.get(M);if(b.__webglInit===void 0)return;let G=M.source,ht=f.get(G);if(ht){let ct=ht[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&g(M),Object.keys(ht).length===0&&f.delete(G)}n.remove(M)}function g(M){let b=n.get(M);s.deleteTexture(b.__webglTexture);let G=M.source,ht=f.get(G);delete ht[b.__cacheKey],o.memory.textures--}function C(M){let b=M.texture,G=n.get(M),ht=n.get(b);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(G.__webglFramebuffer[ct]))for(let ft=0;ft<G.__webglFramebuffer[ct].length;ft++)s.deleteFramebuffer(G.__webglFramebuffer[ct][ft]);else s.deleteFramebuffer(G.__webglFramebuffer[ct]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ct])}else{if(Array.isArray(G.__webglFramebuffer))for(let ct=0;ct<G.__webglFramebuffer.length;ct++)s.deleteFramebuffer(G.__webglFramebuffer[ct]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ct=0;ct<G.__webglColorRenderbuffer.length;ct++)G.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ct]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ct=0,ft=b.length;ct<ft;ct++){let Et=n.get(b[ct]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(b[ct])}n.remove(b),n.remove(M)}let Z=0;function R(){Z=0}function P(){let M=Z;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),Z+=1,M}function H(M){let b=[];return b.push(M.wrapS),b.push(M.wrapT),b.push(M.wrapR||0),b.push(M.magFilter),b.push(M.minFilter),b.push(M.anisotropy),b.push(M.internalFormat),b.push(M.format),b.push(M.type),b.push(M.generateMipmaps),b.push(M.premultiplyAlpha),b.push(M.flipY),b.push(M.unpackAlignment),b.push(M.colorSpace),b.join()}function $(M,b){let G=n.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&G.__version!==M.version){let ht=M.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,M,b);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function tt(M,b){let G=n.get(M);if(M.version>0&&G.__version!==M.version){z(G,M,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function Q(M,b){let G=n.get(M);if(M.version>0&&G.__version!==M.version){z(G,M,b);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function X(M,b){let G=n.get(M);if(M.version>0&&G.__version!==M.version){V(G,M,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}let rt={[Pi]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[tl]:s.MIRRORED_REPEAT},B={[$e]:s.NEAREST,[Mc]:s.NEAREST_MIPMAP_NEAREST,[mo]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[wd]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},ot={[Bd]:s.NEVER,[Wd]:s.ALWAYS,[zd]:s.LESS,[pu]:s.LEQUAL,[Hd]:s.EQUAL,[Vd]:s.GEQUAL,[kd]:s.GREATER,[Gd]:s.NOTEQUAL};function W(M,b,G){if(G?(s.texParameteri(M,s.TEXTURE_WRAP_S,rt[b.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,rt[b.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,rt[b.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,B[b.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,B[b.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Mn||b.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,A(b.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==$e&&b.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===$e||b.minFilter!==mo&&b.minFilter!==Zs||b.type===ii&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Js&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(M,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function D(M,b){let G=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",L));let ht=b.source,ct=f.get(ht);ct===void 0&&(ct={},f.set(ht,ct));let ft=H(b);if(ft!==M.__cacheKey){ct[ft]===void 0&&(ct[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ct[ft].usedTimes++;let Et=ct[M.__cacheKey];Et!==void 0&&(ct[M.__cacheKey].usedTimes--,Et.usedTimes===0&&g(b)),M.__cacheKey=ft,M.__webglTexture=ct[ft].texture}return G}function z(M,b,G){let ht=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=s.TEXTURE_3D);let ct=D(M,b),ft=b.source;e.bindTexture(ht,M.__webglTexture,s.TEXTURE0+G);let Et=n.get(ft);if(ft.version!==Et.__version||ct===!0){e.activeTexture(s.TEXTURE0+G);let xt=ne.getPrimaries(ne.workingColorSpace),St=b.colorSpace===un?null:ne.getPrimaries(b.colorSpace),Ct=b.colorSpace===un||xt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Ft=p(b)&&m(b.image)===!1,dt=_(b.image,Ft,!1,i.maxTextureSize);dt=O(b,dt);let Kt=m(dt)||a,qt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type),At=E(b.internalFormat,qt,Nt,b.colorSpace,b.isVideoTexture);W(ht,b,Kt);let Tt,Ht=b.mipmaps,Qt=a&&b.isVideoTexture!==!0&&At!==uu,ge=Et.__version===void 0||ct===!0,Vt=U(b,dt,Kt);if(b.isDepthTexture)At=s.DEPTH_COMPONENT,a?b.type===ii?At=s.DEPTH_COMPONENT32F:b.type===ni?At=s.DEPTH_COMPONENT24:b.type===Ai?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:b.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ri&&At===s.DEPTH_COMPONENT&&b.type!==Gl&&b.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ni,Nt=r.convert(b.type)),b.format===xs&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,b.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ai,Nt=r.convert(b.type))),ge&&(Qt?e.texStorage2D(s.TEXTURE_2D,1,At,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,At,dt.width,dt.height,0,qt,Nt,null));else if(b.isDataTexture)if(Ht.length>0&&Kt){Qt&&ge&&e.texStorage2D(s.TEXTURE_2D,Vt,At,Ht[0].width,Ht[0].height);for(let mt=0,F=Ht.length;mt<F;mt++)Tt=Ht[mt],Qt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,qt,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,At,Tt.width,Tt.height,0,qt,Nt,Tt.data);b.generateMipmaps=!1}else Qt?(ge&&e.texStorage2D(s.TEXTURE_2D,Vt,At,dt.width,dt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,qt,Nt,dt.data)):e.texImage2D(s.TEXTURE_2D,0,At,dt.width,dt.height,0,qt,Nt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,At,Ht[0].width,Ht[0].height,dt.depth);for(let mt=0,F=Ht.length;mt<F;mt++)Tt=Ht[mt],b.format!==Sn?qt!==null?Qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,dt.depth,qt,Tt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,At,Tt.width,Tt.height,dt.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,dt.depth,qt,Nt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,At,Tt.width,Tt.height,dt.depth,0,qt,Nt,Tt.data)}else{Qt&&ge&&e.texStorage2D(s.TEXTURE_2D,Vt,At,Ht[0].width,Ht[0].height);for(let mt=0,F=Ht.length;mt<F;mt++)Tt=Ht[mt],b.format!==Sn?qt!==null?Qt?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,qt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,At,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,qt,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,At,Tt.width,Tt.height,0,qt,Nt,Tt.data)}else if(b.isDataArrayTexture)Qt?(ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,At,dt.width,dt.height,dt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,qt,Nt,dt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,dt.width,dt.height,dt.depth,0,qt,Nt,dt.data);else if(b.isData3DTexture)Qt?(ge&&e.texStorage3D(s.TEXTURE_3D,Vt,At,dt.width,dt.height,dt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,qt,Nt,dt.data)):e.texImage3D(s.TEXTURE_3D,0,At,dt.width,dt.height,dt.depth,0,qt,Nt,dt.data);else if(b.isFramebufferTexture){if(ge)if(Qt)e.texStorage2D(s.TEXTURE_2D,Vt,At,dt.width,dt.height);else{let mt=dt.width,F=dt.height;for(let _t=0;_t<Vt;_t++)e.texImage2D(s.TEXTURE_2D,_t,At,mt,F,0,qt,Nt,null),mt>>=1,F>>=1}}else if(Ht.length>0&&Kt){Qt&&ge&&e.texStorage2D(s.TEXTURE_2D,Vt,At,Ht[0].width,Ht[0].height);for(let mt=0,F=Ht.length;mt<F;mt++)Tt=Ht[mt],Qt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,qt,Nt,Tt):e.texImage2D(s.TEXTURE_2D,mt,At,qt,Nt,Tt);b.generateMipmaps=!1}else Qt?(ge&&e.texStorage2D(s.TEXTURE_2D,Vt,At,dt.width,dt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,Nt,dt)):e.texImage2D(s.TEXTURE_2D,0,At,qt,Nt,dt);S(b,Kt)&&y(ht),Et.__version=ft.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function V(M,b,G){if(b.image.length!==6)return;let ht=D(M,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+G);let ft=n.get(ct);if(ct.version!==ft.__version||ht===!0){e.activeTexture(s.TEXTURE0+G);let Et=ne.getPrimaries(ne.workingColorSpace),xt=b.colorSpace===un?null:ne.getPrimaries(b.colorSpace),St=b.colorSpace===un||Et===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,dt=[];for(let mt=0;mt<6;mt++)!Ct&&!Ft?dt[mt]=_(b.image[mt],!1,!0,i.maxCubemapSize):dt[mt]=Ft?b.image[mt].image:b.image[mt],dt[mt]=O(b,dt[mt]);let Kt=dt[0],qt=m(Kt)||a,Nt=r.convert(b.format,b.colorSpace),At=r.convert(b.type),Tt=E(b.internalFormat,Nt,At,b.colorSpace),Ht=a&&b.isVideoTexture!==!0,Qt=ft.__version===void 0||ht===!0,ge=U(b,Kt,qt);W(s.TEXTURE_CUBE_MAP,b,qt);let Vt;if(Ct){Ht&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Tt,Kt.width,Kt.height);for(let mt=0;mt<6;mt++){Vt=dt[mt].mipmaps;for(let F=0;F<Vt.length;F++){let _t=Vt[F];b.format!==Sn?Nt!==null?Ht?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,_t.width,_t.height,Nt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,Tt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,_t.width,_t.height,Nt,At,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,Tt,_t.width,_t.height,0,Nt,At,_t.data)}}}else{Vt=b.mipmaps,Ht&&Qt&&(Vt.length>0&&ge++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Tt,dt[0].width,dt[0].height));for(let mt=0;mt<6;mt++)if(Ft){Ht?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,dt[mt].width,dt[mt].height,Nt,At,dt[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,dt[mt].width,dt[mt].height,0,Nt,At,dt[mt].data);for(let F=0;F<Vt.length;F++){let yt=Vt[F].image[mt].image;Ht?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,yt.width,yt.height,Nt,At,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,Tt,yt.width,yt.height,0,Nt,At,yt.data)}}else{Ht?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Nt,At,dt[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,Nt,At,dt[mt]);for(let F=0;F<Vt.length;F++){let _t=Vt[F];Ht?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,Nt,At,_t.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,Tt,Nt,At,_t.image[mt])}}}S(b,qt)&&y(s.TEXTURE_CUBE_MAP),ft.__version=ct.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function K(M,b,G,ht,ct,ft){let Et=r.convert(G.format,G.colorSpace),xt=r.convert(G.type),St=E(G.internalFormat,Et,xt,G.colorSpace);if(!n.get(b).__hasExternalTextures){let Ft=Math.max(1,b.width>>ft),dt=Math.max(1,b.height>>ft);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,ft,St,Ft,dt,b.depth,0,Et,xt,null):e.texImage2D(ct,ft,St,Ft,dt,0,Et,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,M),nt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ct,n.get(G).__webglTexture,0,ut(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,ct,n.get(G).__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function j(M,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,M),b.depthBuffer&&!b.stencilBuffer){let ht=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||nt(b)){let ct=b.depthTexture;ct&&ct.isDepthTexture&&(ct.type===ii?ht=s.DEPTH_COMPONENT32F:ct.type===ni&&(ht=s.DEPTH_COMPONENT24));let ft=ut(b);nt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,ht,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,ht,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(b.depthBuffer&&b.stencilBuffer){let ht=ut(b);G&&nt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,b.width,b.height):nt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{let ht=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ct=0;ct<ht.length;ct++){let ft=ht[ct],Et=r.convert(ft.format,ft.colorSpace),xt=r.convert(ft.type),St=E(ft.internalFormat,Et,xt,ft.colorSpace),Ct=ut(b);G&&nt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,St,b.width,b.height):nt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,St,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,St,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function N(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let ht=n.get(b.depthTexture).__webglTexture,ct=ut(b);if(b.depthTexture.format===Ri)nt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(b.depthTexture.format===xs)nt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function k(M){let b=n.get(M),G=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");N(b.__webglFramebuffer,M)}else if(G){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]=s.createRenderbuffer(),j(b.__webglDepthbuffer[ht],M,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),j(b.__webglDepthbuffer,M,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(M,b,G){let ht=n.get(M);b!==void 0&&K(ht.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&k(M)}function w(M){let b=M.texture,G=n.get(M),ht=n.get(b);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=b.version,o.memory.textures++);let ct=M.isWebGLCubeRenderTarget===!0,ft=M.isWebGLMultipleRenderTargets===!0,Et=m(M)||a;if(ct){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[xt][St]=s.createFramebuffer()}else G.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)G.__webglFramebuffer[xt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ft)if(i.drawBuffers){let xt=M.texture;for(let St=0,Ct=xt.length;St<Ct;St++){let Ft=n.get(xt[St]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&nt(M)===!1){let xt=ft?b:[b];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<xt.length;St++){let Ct=xt[St];G.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[St]);let Ft=r.convert(Ct.format,Ct.colorSpace),dt=r.convert(Ct.type),Kt=E(Ct.internalFormat,Ft,dt,Ct.colorSpace,M.isXRRenderTarget===!0),qt=ut(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Kt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,G.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),j(G.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),W(s.TEXTURE_CUBE_MAP,b,Et);for(let xt=0;xt<6;xt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)K(G.__webglFramebuffer[xt][St],M,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else K(G.__webglFramebuffer[xt],M,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);S(b,Et)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){let xt=M.texture;for(let St=0,Ct=xt.length;St<Ct;St++){let Ft=xt[St],dt=n.get(Ft);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),W(s.TEXTURE_2D,Ft,Et),K(G.__webglFramebuffer,M,Ft,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),S(Ft,Et)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?xt=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ht.__webglTexture),W(xt,b,Et),a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)K(G.__webglFramebuffer[St],M,b,s.COLOR_ATTACHMENT0,xt,St);else K(G.__webglFramebuffer,M,b,s.COLOR_ATTACHMENT0,xt,0);S(b,Et)&&y(xt),e.unbindTexture()}M.depthBuffer&&k(M)}function lt(M){let b=m(M)||a,G=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ht=0,ct=G.length;ht<ct;ht++){let ft=G[ht];if(S(ft,b)){let Et=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xt=n.get(ft).__webglTexture;e.bindTexture(Et,xt),y(Et),e.unbindTexture()}}}function J(M){if(a&&M.samples>0&&nt(M)===!1){let b=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],G=M.width,ht=M.height,ct=s.COLOR_BUFFER_BIT,ft=[],Et=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(M),St=M.isWebGLMultipleRenderTargets===!0;if(St)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){ft.push(s.COLOR_ATTACHMENT0+Ct),M.depthBuffer&&ft.push(Et);let Ft=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Ft===!1&&(M.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),St&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Ct]),Ft===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Et]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Et])),St){let dt=n.get(b[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,G,ht,0,0,G,ht,ct,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Ct]);let Ft=n.get(b[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function ut(M){return Math.min(i.maxSamples,M.samples)}function nt(M){let b=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(M){let b=o.render.frame;h.get(M)!==b&&(h.set(M,b),M.update())}function O(M,b){let G=M.colorSpace,ht=M.format,ct=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===nl||G!==Wn&&G!==un&&(ne.getTransfer(G)===oe?a===!1?t.has("EXT_sRGB")===!0&&ht===Sn?(M.format=nl,M.minFilter=hn,M.generateMipmaps=!1):b=xa.sRGBToLinear(b):(ht!==Sn||ct!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}this.allocateTextureUnit=P,this.resetTextureUnits=R,this.setTexture2D=$,this.setTexture2DArray=tt,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=st,this.setupRenderTarget=w,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=K,this.useMultisampledRTT=nt}function Yx(s,t,e){let n=e.isWebGL2;function i(r,o=un){let a,l=ne.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===au)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ad)return s.BYTE;if(r===Rd)return s.SHORT;if(r===Gl)return s.UNSIGNED_SHORT;if(r===ru)return s.INT;if(r===ni)return s.UNSIGNED_INT;if(r===ii)return s.FLOAT;if(r===Js)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Cd)return s.ALPHA;if(r===Sn)return s.RGBA;if(r===Pd)return s.LUMINANCE;if(r===Ld)return s.LUMINANCE_ALPHA;if(r===Ri)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===nl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Id)return s.RED;if(r===lu)return s.RED_INTEGER;if(r===Dd)return s.RG;if(r===cu)return s.RG_INTEGER;if(r===hu)return s.RGBA_INTEGER;if(r===go||r===xo||r===_o||r===yo)if(l===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===Ec||r===Tc||r===wc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ac||r===Rc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ac)return l===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Rc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cc||r===Pc||r===Lc||r===Ic||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===zc||r===Hc||r===kc||r===Gc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Cc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===Vc||r===Wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vo)return l===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ud||r===Xc||r===qc||r===Yc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Xc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var gl=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},$x={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($x)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xl=class extends li{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,_=e.getContextAttributes(),m=null,p=null,S=[],y=[],E=new pt,U=null,A=new Ze;A.layers.enable(1),A.viewport=new Le;let L=new Ze;L.layers.enable(2),L.viewport=new Le;let Y=[A,L],v=new gl;v.layers.enable(1),v.layers.enable(2);let g=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let D=S[W];return D===void 0&&(D=new Xs,S[W]=D),D.getTargetRaySpace()},this.getControllerGrip=function(W){let D=S[W];return D===void 0&&(D=new Xs,S[W]=D),D.getGripSpace()},this.getHand=function(W){let D=S[W];return D===void 0&&(D=new Xs,S[W]=D),D.getHandSpace()};function Z(W){let D=y.indexOf(W.inputSource);if(D===-1)return;let z=S[D];z!==void 0&&(z.update(W.inputSource,W.frame,c||o),z.dispatchEvent({type:W.type,data:W.inputSource}))}function R(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",P);for(let W=0;W<S.length;W++){let D=y[W];D!==null&&(y[W]=null,S[W].disconnect(D))}g=null,C=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",R),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let D={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,D),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,z=null,V=null;_.depth&&(V=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=_.stencil?xs:Ri,z=_.stencil?Ai:ni);let K={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(K),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Xn(f.textureWidth,f.textureHeight,{format:Sn,type:ai,depthTexture:new wa(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let j=t.properties.get(p);j.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let D=0;D<W.removed.length;D++){let z=W.removed[D],V=y.indexOf(z);V>=0&&(y[V]=null,S[V].disconnect(z))}for(let D=0;D<W.added.length;D++){let z=W.added[D],V=y.indexOf(z);if(V===-1){for(let j=0;j<S.length;j++)if(j>=y.length){y.push(z),V=j;break}else if(y[j]===null){y[j]=z,V=j;break}if(V===-1)break}let K=S[V];K&&K.connect(z)}}let H=new I,$=new I;function tt(W,D,z){H.setFromMatrixPosition(D.matrixWorld),$.setFromMatrixPosition(z.matrixWorld);let V=H.distanceTo($),K=D.projectionMatrix.elements,j=z.projectionMatrix.elements,N=K[14]/(K[10]-1),k=K[14]/(K[10]+1),st=(K[9]+1)/K[5],w=(K[9]-1)/K[5],lt=(K[8]-1)/K[0],J=(j[8]+1)/j[0],ut=N*lt,nt=N*J,Mt=V/(-lt+J),O=Mt*-lt;D.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(O),W.translateZ(Mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let M=N+Mt,b=k+Mt,G=ut-O,ht=nt+(V-O),ct=st*k/b*M,ft=w*k/b*M;W.projectionMatrix.makePerspective(G,ht,ct,ft,M,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,D){D===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(D.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=L.near=A.near=W.near,v.far=L.far=A.far=W.far,(g!==v.near||C!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),g=v.near,C=v.far);let D=W.parent,z=v.cameras;Q(v,D);for(let V=0;V<z.length;V++)Q(z[V],D);z.length===2?tt(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),X(W,v,D)};function X(W,D,z){z===null?W.matrix.copy(D.matrixWorld):(W.matrix.copy(z.matrixWorld),W.matrix.invert(),W.matrix.multiply(D.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(D.projectionMatrix),W.projectionMatrixInverse.copy(D.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ks*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let rt=null;function B(W,D){if(h=D.getViewerPose(c||o),x=D,h!==null){let z=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let V=!1;z.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let K=0;K<z.length;K++){let j=z[K],N=null;if(d!==null)N=d.getViewport(j);else{let st=u.getViewSubImage(f,j);N=st.viewport,K===0&&(t.setRenderTargetTextures(p,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(p))}let k=Y[K];k===void 0&&(k=new Ze,k.layers.enable(K),k.viewport=new Le,Y[K]=k),k.matrix.fromArray(j.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(j.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(N.x,N.y,N.width,N.height),K===0&&(v.matrix.copy(k.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(k)}}for(let z=0;z<S.length;z++){let V=y[z],K=S[z];V!==null&&K!==void 0&&K.update(V,D,c||o)}rt&&rt(W,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),x=null}let ot=new _u;ot.setAnimationLoop(B),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}};function Zx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jx(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){let E=y.program;n.uniformBlockBinding(S,E)}function c(S,y){let E=i[S.id];E===void 0&&(x(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));let U=y.program;n.updateUBOMapping(S,U);let A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){let y=u();S.__bindingPointIndex=y;let E=s.createBuffer(),U=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,U,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=i[S.id],E=S.uniforms,U=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,L=E.length;A<L;A++){let Y=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,g=Y.length;v<g;v++){let C=Y[v];if(d(C,A,v,U)===!0){let Z=C.__offset,R=Array.isArray(C.value)?C.value:[C.value],P=0;for(let H=0;H<R.length;H++){let $=R[H],tt=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,Z+P,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,P),P+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,E,U){let A=S.value,L=y+"_"+E;if(U[L]===void 0)return typeof A=="number"||typeof A=="boolean"?U[L]=A:U[L]=A.clone(),!0;{let Y=U[L];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return U[L]=A,!0}else if(Y.equals(A)===!1)return Y.copy(A),!0}return!1}function x(S){let y=S.uniforms,E=0,U=16;for(let L=0,Y=y.length;L<Y;L++){let v=Array.isArray(y[L])?y[L]:[y[L]];for(let g=0,C=v.length;g<C;g++){let Z=v[g],R=Array.isArray(Z.value)?Z.value:[Z.value];for(let P=0,H=R.length;P<H;P++){let $=R[P],tt=_($),Q=E%U;Q!==0&&U-Q<tt.boundary&&(E+=U-Q),Z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=tt.storage}}}let A=E%U;return A>0&&(E+=U-A),S.__size=E,S.__cache={},this}function _(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var tr=class{constructor(t={}){let{canvas:e=rp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),x=new Int32Array(4),_=null,m=null,p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;let y=this,E=!1,U=0,A=0,L=null,Y=-1,v=null,g=new Le,C=new Le,Z=null,R=new It(0),P=0,H=e.width,$=e.height,tt=1,Q=null,X=null,rt=new Le(0,0,H,$),B=new Le(0,0,H,$),ot=!1,W=new Qs,D=!1,z=!1,V=null,K=new jt,j=new pt,N=new I,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return L===null?tt:1}let w=n;function lt(T,q){for(let it=0;it<T.length;it++){let at=T[it],et=e.getContext(at,q);if(et!==null)return et}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",_t,!1),w===null){let q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),w=lt(q,T),w===null)throw lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,ut,nt,Mt,O,M,b,G,ht,ct,ft,Et,xt,St,Ct,Ft,dt,Kt,qt,Nt,At,Tt,Ht,Qt;function ge(){J=new mg(w),ut=new cg(w,J,t),J.init(ut),Tt=new Yx(w,J,ut),nt=new Xx(w,J,ut),Mt=new _g(w),O=new Dx,M=new qx(w,J,nt,O,ut,Tt,Mt),b=new ug(y),G=new pg(y),ht=new wp(w,ut),Ht=new og(w,J,ht,ut),ct=new gg(w,ht,Mt,Ht),ft=new Mg(w,ct,ht,Mt),qt=new bg(w,ut,M),Ft=new hg(O),Et=new Ix(y,b,G,J,ut,Ht,Ft),xt=new Zx(y,O),St=new Nx,Ct=new kx(J,ut),Kt=new ag(y,b,G,nt,ft,f,l),dt=new Wx(y,ft,ut),Qt=new Jx(w,Mt,ut,nt),Nt=new lg(w,J,Mt,ut),At=new xg(w,J,Mt,ut),Mt.programs=Et.programs,y.capabilities=ut,y.extensions=J,y.properties=O,y.renderLists=St,y.shadowMap=dt,y.state=nt,y.info=Mt}ge();let Vt=new xl(y,w);this.xr=Vt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(H,$,!1))},this.getSize=function(T){return T.set(H,$)},this.setSize=function(T,q,it=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,$=q,e.width=Math.floor(T*tt),e.height=Math.floor(q*tt),it===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(H*tt,$*tt).floor()},this.setDrawingBufferSize=function(T,q,it){H=T,$=q,tt=it,e.width=Math.floor(T*it),e.height=Math.floor(q*it),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(g)},this.getViewport=function(T){return T.copy(rt)},this.setViewport=function(T,q,it,at){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,q,it,at),nt.viewport(g.copy(rt).multiplyScalar(tt).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,q,it,at){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,q,it,at),nt.scissor(C.copy(B).multiplyScalar(tt).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){nt.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(T=!0,q=!0,it=!0){let at=0;if(T){let et=!1;if(L!==null){let vt=L.texture.format;et=vt===hu||vt===cu||vt===lu}if(et){let vt=L.texture.type,wt=vt===ai||vt===ni||vt===Gl||vt===Ai||vt===au||vt===ou,Lt=Kt.getClearColor(),Ut=Kt.getClearAlpha(),Gt=Lt.r,Ot=Lt.g,Bt=Lt.b;wt?(d[0]=Gt,d[1]=Ot,d[2]=Bt,d[3]=Ut,w.clearBufferuiv(w.COLOR,0,d)):(x[0]=Gt,x[1]=Ot,x[2]=Bt,x[3]=Ut,w.clearBufferiv(w.COLOR,0,x))}else at|=w.COLOR_BUFFER_BIT}q&&(at|=w.DEPTH_BUFFER_BIT),it&&(at|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Ct.dispose(),O.dispose(),b.dispose(),G.dispose(),ft.dispose(),Ht.dispose(),Qt.dispose(),Et.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",We),Vt.removeEventListener("sessionend",ae),V&&(V.dispose(),V=null),Xe.stop()};function mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=Mt.autoReset,q=dt.enabled,it=dt.autoUpdate,at=dt.needsUpdate,et=dt.type;ge(),Mt.autoReset=T,dt.enabled=q,dt.autoUpdate=it,dt.needsUpdate=at,dt.type=et}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function yt(T){let q=T.target;q.removeEventListener("dispose",yt),Dt(q)}function Dt(T){Pt(T),O.remove(T)}function Pt(T){let q=O.get(T).programs;q!==void 0&&(q.forEach(function(it){Et.releaseProgram(it)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,it,at,et,vt){q===null&&(q=k);let wt=et.isMesh&&et.matrixWorld.determinant()<0,Lt=Gf(T,q,it,at,et);nt.setMaterial(at,wt);let Ut=it.index,Gt=1;if(at.wireframe===!0){if(Ut=ct.getWireframeAttribute(it),Ut===void 0)return;Gt=2}let Ot=it.drawRange,Bt=it.attributes.position,_e=Ot.start*Gt,tn=(Ot.start+Ot.count)*Gt;vt!==null&&(_e=Math.max(_e,vt.start*Gt),tn=Math.min(tn,(vt.start+vt.count)*Gt)),Ut!==null?(_e=Math.max(_e,0),tn=Math.min(tn,Ut.count)):Bt!=null&&(_e=Math.max(_e,0),tn=Math.min(tn,Bt.count));let Ce=tn-_e;if(Ce<0||Ce===1/0)return;Ht.setup(et,at,Lt,it,Ut);let Nn,fe=Nt;if(Ut!==null&&(Nn=ht.get(Ut),fe=At,fe.setIndex(Nn)),et.isMesh)at.wireframe===!0?(nt.setLineWidth(at.wireframeLinewidth*st()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(et.isLine){let Wt=at.linewidth;Wt===void 0&&(Wt=1),nt.setLineWidth(Wt*st()),et.isLineSegments?fe.setMode(w.LINES):et.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else et.isPoints?fe.setMode(w.POINTS):et.isSprite&&fe.setMode(w.TRIANGLES);if(et.isBatchedMesh)fe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)fe.renderInstances(_e,Ce,et.count);else if(it.isInstancedBufferGeometry){let Wt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,ho=Math.min(it.instanceCount,Wt);fe.renderInstances(_e,Ce,ho)}else fe.render(_e,Ce)};function se(T,q,it){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=He,T.needsUpdate=!0,Rr(T,q,it),T.side=oi,T.needsUpdate=!0,Rr(T,q,it),T.side=Ne):Rr(T,q,it)}this.compile=function(T,q,it=null){it===null&&(it=T),m=Ct.get(it),m.init(),S.push(m),it.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(m.pushLight(et),et.castShadow&&m.pushShadow(et))}),T!==it&&T.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(m.pushLight(et),et.castShadow&&m.pushShadow(et))}),m.setupLights(y._useLegacyLights);let at=new Set;return T.traverse(function(et){let vt=et.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){let Lt=vt[wt];se(Lt,it,et),at.add(Lt)}else se(vt,it,et),at.add(vt)}),S.pop(),m=null,at},this.compileAsync=function(T,q,it=null){let at=this.compile(T,q,it);return new Promise(et=>{function vt(){if(at.forEach(function(wt){O.get(wt).currentProgram.isReady()&&at.delete(wt)}),at.size===0){et(T);return}setTimeout(vt,10)}J.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let re=null;function Re(T){re&&re(T)}function We(){Xe.stop()}function ae(){Xe.start()}let Xe=new _u;Xe.setAnimationLoop(Re),typeof self!="undefined"&&Xe.setContext(self),this.setAnimationLoop=function(T){re=T,Vt.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},Vt.addEventListener("sessionstart",We),Vt.addEventListener("sessionend",ae),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(q),q=Vt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,q,L),m=Ct.get(T,S.length),m.init(),S.push(m),K.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W.setFromProjectionMatrix(K),z=this.localClippingEnabled,D=Ft.init(this.clippingPlanes,z),_=St.get(T,p.length),_.init(),p.push(_),wn(T,q,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Q,X),this.info.render.frame++,D===!0&&Ft.beginShadows();let it=m.state.shadowsArray;if(dt.render(it,T,q),D===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,T),m.setupLights(y._useLegacyLights),q.isArrayCamera){let at=q.cameras;for(let et=0,vt=at.length;et<vt;et++){let wt=at[et];uc(_,T,wt,wt.viewport)}}else uc(_,T,q);L!==null&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,q),Ht.resetDefaultState(),Y=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function wn(T,q,it,at){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){at&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);let wt=ft.update(T),Lt=T.material;Lt.visible&&_.push(T,wt,Lt,it,N.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let wt=ft.update(T),Lt=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),N.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),N.copy(wt.boundingSphere.center)),N.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Lt)){let Ut=wt.groups;for(let Gt=0,Ot=Ut.length;Gt<Ot;Gt++){let Bt=Ut[Gt],_e=Lt[Bt.materialIndex];_e&&_e.visible&&_.push(T,wt,_e,it,N.z,Bt)}}else Lt.visible&&_.push(T,wt,Lt,it,N.z,null)}}let vt=T.children;for(let wt=0,Lt=vt.length;wt<Lt;wt++)wn(vt[wt],q,it,at)}function uc(T,q,it,at){let et=T.opaque,vt=T.transmissive,wt=T.transparent;m.setupLightsView(it),D===!0&&Ft.setGlobalState(y.clippingPlanes,it),vt.length>0&&kf(et,vt,q,it),at&&nt.viewport(g.copy(at)),et.length>0&&Ar(et,q,it),vt.length>0&&Ar(vt,q,it),wt.length>0&&Ar(wt,q,it),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function kf(T,q,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;let vt=ut.isWebGL2;V===null&&(V=new Xn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Js:ai,minFilter:Zs,samples:vt?4:0})),y.getDrawingBufferSize(j),vt?V.setSize(j.x,j.y):V.setSize(ma(j.x),ma(j.y));let wt=y.getRenderTarget();y.setRenderTarget(V),y.getClearColor(R),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Lt=y.toneMapping;y.toneMapping=ri,Ar(T,it,at),M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V);let Ut=!1;for(let Gt=0,Ot=q.length;Gt<Ot;Gt++){let Bt=q[Gt],_e=Bt.object,tn=Bt.geometry,Ce=Bt.material,Nn=Bt.group;if(Ce.side===Ne&&_e.layers.test(at.layers)){let fe=Ce.side;Ce.side=He,Ce.needsUpdate=!0,fc(_e,it,at,tn,Ce,Nn),Ce.side=fe,Ce.needsUpdate=!0,Ut=!0}}Ut===!0&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),y.setRenderTarget(wt),y.setClearColor(R,P),y.toneMapping=Lt}function Ar(T,q,it){let at=q.isScene===!0?q.overrideMaterial:null;for(let et=0,vt=T.length;et<vt;et++){let wt=T[et],Lt=wt.object,Ut=wt.geometry,Gt=at===null?wt.material:at,Ot=wt.group;Lt.layers.test(it.layers)&&fc(Lt,q,it,Ut,Gt,Ot)}}function fc(T,q,it,at,et,vt){T.onBeforeRender(y,q,it,at,et,vt),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),et.onBeforeRender(y,q,it,at,T,vt),et.transparent===!0&&et.side===Ne&&et.forceSinglePass===!1?(et.side=He,et.needsUpdate=!0,y.renderBufferDirect(it,q,at,et,T,vt),et.side=oi,et.needsUpdate=!0,y.renderBufferDirect(it,q,at,et,T,vt),et.side=Ne):y.renderBufferDirect(it,q,at,et,T,vt),T.onAfterRender(y,q,it,at,et,vt)}function Rr(T,q,it){q.isScene!==!0&&(q=k);let at=O.get(T),et=m.state.lights,vt=m.state.shadowsArray,wt=et.state.version,Lt=Et.getParameters(T,et.state,vt,q,it),Ut=Et.getProgramCacheKey(Lt),Gt=at.programs;at.environment=T.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||at.environment),Gt===void 0&&(T.addEventListener("dispose",yt),Gt=new Map,at.programs=Gt);let Ot=Gt.get(Ut);if(Ot!==void 0){if(at.currentProgram===Ot&&at.lightsStateVersion===wt)return pc(T,Lt),Ot}else Lt.uniforms=Et.getUniforms(T),T.onBuild(it,Lt,y),T.onBeforeCompile(Lt,y),Ot=Et.acquireProgram(Lt,Ut),Gt.set(Ut,Ot),at.uniforms=Lt.uniforms;let Bt=at.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=Ft.uniform),pc(T,Lt),at.needsLights=Wf(T),at.lightsStateVersion=wt,at.needsLights&&(Bt.ambientLightColor.value=et.state.ambient,Bt.lightProbe.value=et.state.probe,Bt.directionalLights.value=et.state.directional,Bt.directionalLightShadows.value=et.state.directionalShadow,Bt.spotLights.value=et.state.spot,Bt.spotLightShadows.value=et.state.spotShadow,Bt.rectAreaLights.value=et.state.rectArea,Bt.ltc_1.value=et.state.rectAreaLTC1,Bt.ltc_2.value=et.state.rectAreaLTC2,Bt.pointLights.value=et.state.point,Bt.pointLightShadows.value=et.state.pointShadow,Bt.hemisphereLights.value=et.state.hemi,Bt.directionalShadowMap.value=et.state.directionalShadowMap,Bt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Bt.spotShadowMap.value=et.state.spotShadowMap,Bt.spotLightMatrix.value=et.state.spotLightMatrix,Bt.spotLightMap.value=et.state.spotLightMap,Bt.pointShadowMap.value=et.state.pointShadowMap,Bt.pointShadowMatrix.value=et.state.pointShadowMatrix),at.currentProgram=Ot,at.uniformsList=null,Ot}function dc(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=ps.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function pc(T,q){let it=O.get(T);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function Gf(T,q,it,at,et){q.isScene!==!0&&(q=k),M.resetTextureUnits();let vt=q.fog,wt=at.isMeshStandardMaterial?q.environment:null,Lt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Wn,Ut=(at.isMeshStandardMaterial?G:b).get(at.envMap||wt),Gt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ot=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Bt=!!it.morphAttributes.position,_e=!!it.morphAttributes.normal,tn=!!it.morphAttributes.color,Ce=ri;at.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ce=y.toneMapping);let Nn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,fe=Nn!==void 0?Nn.length:0,Wt=O.get(at),ho=m.state.lights;if(D===!0&&(z===!0||T!==v)){let ln=T===v&&at.id===Y;Ft.setState(at,T,ln)}let xe=!1;at.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ho.state.version||Wt.outputColorSpace!==Lt||et.isBatchedMesh&&Wt.batching===!1||!et.isBatchedMesh&&Wt.batching===!0||et.isInstancedMesh&&Wt.instancing===!1||!et.isInstancedMesh&&Wt.instancing===!0||et.isSkinnedMesh&&Wt.skinning===!1||!et.isSkinnedMesh&&Wt.skinning===!0||et.isInstancedMesh&&Wt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Wt.instancingColor===!1&&et.instanceColor!==null||Wt.envMap!==Ut||at.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ft.numPlanes||Wt.numIntersection!==Ft.numIntersection)||Wt.vertexAlphas!==Gt||Wt.vertexTangents!==Ot||Wt.morphTargets!==Bt||Wt.morphNormals!==_e||Wt.morphColors!==tn||Wt.toneMapping!==Ce||ut.isWebGL2===!0&&Wt.morphTargetsCount!==fe)&&(xe=!0):(xe=!0,Wt.__version=at.version);let xi=Wt.currentProgram;xe===!0&&(xi=Rr(at,q,et));let mc=!1,Is=!1,uo=!1,Fe=xi.getUniforms(),_i=Wt.uniforms;if(nt.useProgram(xi.program)&&(mc=!0,Is=!0,uo=!0),at.id!==Y&&(Y=at.id,Is=!0),mc||v!==T){Fe.setValue(w,"projectionMatrix",T.projectionMatrix),Fe.setValue(w,"viewMatrix",T.matrixWorldInverse);let ln=Fe.map.cameraPosition;ln!==void 0&&ln.setValue(w,N.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&Fe.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Fe.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Is=!0,uo=!0)}if(et.isSkinnedMesh){Fe.setOptional(w,et,"bindMatrix"),Fe.setOptional(w,et,"bindMatrixInverse");let ln=et.skeleton;ln&&(ut.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Fe.setValue(w,"boneTexture",ln.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(Fe.setOptional(w,et,"batchingTexture"),Fe.setValue(w,"batchingTexture",et._matricesTexture,M));let fo=it.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&ut.isWebGL2===!0)&&qt.update(et,it,xi),(Is||Wt.receiveShadow!==et.receiveShadow)&&(Wt.receiveShadow=et.receiveShadow,Fe.setValue(w,"receiveShadow",et.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(_i.envMap.value=Ut,_i.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Is&&(Fe.setValue(w,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Vf(_i,uo),vt&&at.fog===!0&&xt.refreshFogUniforms(_i,vt),xt.refreshMaterialUniforms(_i,at,tt,$,V),ps.upload(w,dc(Wt),_i,M)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ps.upload(w,dc(Wt),_i,M),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Fe.setValue(w,"center",et.center),Fe.setValue(w,"modelViewMatrix",et.modelViewMatrix),Fe.setValue(w,"normalMatrix",et.normalMatrix),Fe.setValue(w,"modelMatrix",et.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let ln=at.uniformsGroups;for(let po=0,Xf=ln.length;po<Xf;po++)if(ut.isWebGL2){let gc=ln[po];Qt.update(gc,xi),Qt.bind(gc,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Vf(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Wf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,q,it){O.get(T.texture).__webglTexture=q,O.get(T.depthTexture).__webglTexture=it;let at=O.get(T);at.__hasExternalTextures=!0,at.__hasExternalTextures&&(at.__autoAllocateDepthBuffer=it===void 0,at.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){let it=O.get(T);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,it=0){L=T,U=q,A=it;let at=!0,et=null,vt=!1,wt=!1;if(T){let Ut=O.get(T);Ut.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(w.FRAMEBUFFER,null),at=!1):Ut.__webglFramebuffer===void 0?M.setupRenderTarget(T):Ut.__hasExternalTextures&&M.rebindTextures(T,O.get(T.texture).__webglTexture,O.get(T.depthTexture).__webglTexture);let Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);let Ot=O.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[q])?et=Ot[q][it]:et=Ot[q],vt=!0):ut.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?et=O.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?et=Ot[it]:et=Ot,g.copy(T.viewport),C.copy(T.scissor),Z=T.scissorTest}else g.copy(rt).multiplyScalar(tt).floor(),C.copy(B).multiplyScalar(tt).floor(),Z=ot;if(nt.bindFramebuffer(w.FRAMEBUFFER,et)&&ut.drawBuffers&&at&&nt.drawBuffers(T,et),nt.viewport(g),nt.scissor(C),nt.setScissorTest(Z),vt){let Ut=O.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ut.__webglTexture,it)}else if(wt){let Ut=O.get(T.texture),Gt=q||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ut.__webglTexture,it||0,Gt)}Y=-1},this.readRenderTargetPixels=function(T,q,it,at,et,vt,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=O.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){nt.bindFramebuffer(w.FRAMEBUFFER,Lt);try{let Ut=T.texture,Gt=Ut.format,Ot=Ut.type;if(Gt!==Sn&&Tt.convert(Gt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=Ot===Js&&(J.has("EXT_color_buffer_half_float")||ut.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ot!==ai&&Tt.convert(Ot)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===ii&&(ut.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-at&&it>=0&&it<=T.height-et&&w.readPixels(q,it,at,et,Tt.convert(Gt),Tt.convert(Ot),vt)}finally{let Ut=L!==null?O.get(L).__webglFramebuffer:null;nt.bindFramebuffer(w.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(T,q,it=0){let at=Math.pow(2,-it),et=Math.floor(q.image.width*at),vt=Math.floor(q.image.height*at);M.setTexture2D(q,0),w.copyTexSubImage2D(w.TEXTURE_2D,it,0,0,T.x,T.y,et,vt),nt.unbindTexture()},this.copyTextureToTexture=function(T,q,it,at=0){let et=q.image.width,vt=q.image.height,wt=Tt.convert(it.format),Lt=Tt.convert(it.type);M.setTexture2D(it,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,it.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,it.unpackAlignment),q.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,at,T.x,T.y,et,vt,wt,Lt,q.image.data):q.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,at,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,wt,q.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,at,T.x,T.y,wt,Lt,q.image),at===0&&it.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(T,q,it,at,et=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=T.max.x-T.min.x+1,wt=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,Ut=Tt.convert(at.format),Gt=Tt.convert(at.type),Ot;if(at.isData3DTexture)M.setTexture3D(at,0),Ot=w.TEXTURE_3D;else if(at.isDataArrayTexture||at.isCompressedArrayTexture)M.setTexture2DArray(at,0),Ot=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,at.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,at.unpackAlignment);let Bt=w.getParameter(w.UNPACK_ROW_LENGTH),_e=w.getParameter(w.UNPACK_IMAGE_HEIGHT),tn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),Nn=w.getParameter(w.UNPACK_SKIP_IMAGES),fe=it.isCompressedTexture?it.mipmaps[et]:it.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,fe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,T.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,T.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,T.min.z),it.isDataTexture||it.isData3DTexture?w.texSubImage3D(Ot,et,q.x,q.y,q.z,vt,wt,Lt,Ut,Gt,fe.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(Ot,et,q.x,q.y,q.z,vt,wt,Lt,Ut,fe.data)):w.texSubImage3D(Ot,et,q.x,q.y,q.z,vt,wt,Lt,Ut,Gt,fe),w.pixelStorei(w.UNPACK_ROW_LENGTH,Bt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e),w.pixelStorei(w.UNPACK_SKIP_PIXELS,tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nn),et===0&&at.generateMipmaps&&w.generateMipmap(Ot),nt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),nt.unbindTexture()},this.resetState=function(){U=0,A=0,L=null,nt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Vl?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?Ci:fu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?ye:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},_l=class extends tr{};_l.prototype.isWebGL1Renderer=!0;var Aa=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vs=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=el,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new I,er=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},je=class extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Fs=new I,rs=new I,as=new I,os=new pt,Bs=new pt,Eu=new jt,Kr=new I,zs=new I,jr=new I,Fh=new pt,Wo=new pt,Bh=new pt,an=class extends be{constructor(t=new je){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ra(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new er(n,3,0,!1)),ss.setAttribute("uv",new er(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Eu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Qr(Kr.set(-.5,-.5,0),as,o,rs,i,r),Qr(zs.set(.5,-.5,0),as,o,rs,i,r),Qr(jr.set(.5,.5,0),as,o,rs,i,r),Fh.set(0,0),Wo.set(1,0),Bh.set(1,1);let a=t.ray.intersectTriangle(Kr,zs,jr,!1,Fs);if(a===null&&(Qr(zs.set(-.5,.5,0),as,o,rs,i,r),Wo.set(0,1),a=t.ray.intersectTriangle(Kr,jr,zs,!1,Fs),a===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:wi.getInterpolation(Fs,Kr,zs,jr,Fh,Wo,Bh,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Qr(s,t,e,n,i,r){os.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Bs.x=r*os.x-i*os.y,Bs.y=i*os.x+r*os.y):Bs.copy(os),s.copy(t),s.x+=Bs.x,s.y+=Bs.y,s.applyMatrix4(Eu)}var nr=class extends pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new jt,zh=new jt,ta=[],Hh=new qn,Kx=new jt,Hs=new Rt,ks=new Yn,ir=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Hh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),ks.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),zh.multiplyMatrices(n,ls),Hs.matrixWorld=zh,Hs.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var sr=class extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kh=new I,Gh=new I,Vh=new jt,Xo=new _s,ea=new Yn,yl=class extends be{constructor(t=new ie,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)kh.fromBufferAttribute(e,i-1),Gh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=kh.distanceTo(Gh);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;Vh.copy(i).invert(),Xo.copy(t.ray).applyMatrix4(Vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,f=new I,d=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let p=Math.max(0,o.start),S=Math.min(x.count,o.start+o.count);for(let y=p,E=S-1;y<E;y+=d){let U=x.getX(y),A=x.getX(y+1);if(c.fromBufferAttribute(m,U),h.fromBufferAttribute(m,A),Xo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let Y=t.ray.origin.distanceTo(f);Y<t.near||Y>t.far||e.push({distance:Y,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let y=p,E=S-1;y<E;y+=d){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Xo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Wh=new I,Xh=new I,Ca=class extends yl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Wh.fromBufferAttribute(e,i),Xh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wh.distanceTo(Xh);t.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Li=class extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qh=new jt,vl=new _s,na=new Yn,ia=new I,Ii=class extends be{constructor(t=new ie,e=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;qh.copy(i).invert(),vl.copy(t.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,_=d;x<_;x++){let m=c.getX(x);ia.fromBufferAttribute(u,m),Yh(ia,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,_=d;x<_;x++)ia.fromBufferAttribute(u,x),Yh(ia,x,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yh(s,t,e,n,i,r,o){let a=vl.distanceSqToPoint(s);if(a<e){let l=new I;vl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var bs=class extends fn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,l=new jt;for(let d=0;d<=t;d++){let x=d/t;i[d]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ue(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ue(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new pt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends rr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var sa=new I,qo=new ql,Yo=new ql,$o=new ql,Ms=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(sa.subVectors(i[0],i[1]).add(i[0]),c=sa);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(sa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),qo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,m),Yo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,m),$o.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,m)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),$o.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qo.calc(l),Yo.calc(l),$o.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $h(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function jx(s,t){let e=1-s;return e*e*t}function Qx(s,t){return 2*(1-s)*s*t}function t_(s,t){return s*s*t}function qs(s,t,e,n){return jx(s,t)+Qx(s,e)+t_(s,n)}function e_(s,t){let e=1-s;return e*e*e*t}function n_(s,t){let e=1-s;return 3*e*e*s*t}function i_(s,t){return 3*(1-s)*s*s*t}function s_(s,t){return s*s*s*t}function Ys(s,t,e,n,i){return e_(s,t)+n_(s,e)+i_(s,n)+s_(s,i)}var Pa=class extends dn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,i.x,r.x,o.x,a.x),Ys(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends dn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,i.x,r.x,o.x,a.x),Ys(t,i.y,r.y,o.y,a.y),Ys(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends dn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends dn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,i.x,r.x,o.x),qs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,i.x,r.x,o.x),qs(t,i.y,r.y,o.y),qs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set($h(a,l.x,c.x,h.x,u.x),$h(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new pt().fromArray(i))}return this}},Na=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Ms,CubicBezierCurve:Pa,CubicBezierCurve3:Ml,EllipseCurve:rr,LineCurve:La,LineCurve3:Sl,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Da,SplineCurve:Ua}),El=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Na[i.type]().fromJSON(i))}return this}},Oa=class extends El{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new La(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ia(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Pa(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ua(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new rr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Di=class s extends ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},on=class s extends ie{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],m=n/2,p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function S(){let E=new I,U=new I,A=0,L=(e-t)/n;for(let Y=0;Y<=r;Y++){let v=[],g=Y/r,C=g*(e-t)+t;for(let Z=0;Z<=i;Z++){let R=Z/i,P=R*l+a,H=Math.sin(P),$=Math.cos(P);U.x=C*H,U.y=-g*n+m,U.z=C*$,u.push(U.x,U.y,U.z),E.set(H,L,$).normalize(),f.push(E.x,E.y,E.z),d.push(R,1-g),v.push(x++)}_.push(v)}for(let Y=0;Y<i;Y++)for(let v=0;v<r;v++){let g=_[v][Y],C=_[v+1][Y],Z=_[v+1][Y+1],R=_[v][Y+1];h.push(g,C,R),h.push(C,Z,R),A+=6}c.addGroup(p,A,0),p+=A}function y(E){let U=x,A=new pt,L=new I,Y=0,v=E===!0?t:e,g=E===!0?1:-1;for(let Z=1;Z<=i;Z++)u.push(0,m*g,0),f.push(0,g,0),d.push(.5,.5),x++;let C=x;for(let Z=0;Z<=i;Z++){let P=Z/i*l+a,H=Math.cos(P),$=Math.sin(P);L.x=v*$,L.y=m*g,L.z=v*H,u.push(L.x,L.y,L.z),f.push(0,g,0),A.x=H*.5+.5,A.y=$*.5*g+.5,d.push(A.x,A.y),x++}for(let Z=0;Z<i;Z++){let R=U+Z,P=C+Z;E===!0?h.push(P,P+1,R):h.push(P+1,P,R),Y+=3}c.addGroup(p,Y,E===!0?1:2),p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=class s extends on{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tl=class s extends ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new I,E=new I,U=new I;for(let A=0;A<e.length;A+=3)d(e[A+0],y),d(e[A+1],E),d(e[A+2],U),l(y,E,U,S)}function l(S,y,E,U){let A=U+1,L=[];for(let Y=0;Y<=A;Y++){L[Y]=[];let v=S.clone().lerp(E,Y/A),g=y.clone().lerp(E,Y/A),C=A-Y;for(let Z=0;Z<=C;Z++)Z===0&&Y===A?L[Y][Z]=v:L[Y][Z]=v.clone().lerp(g,Z/C)}for(let Y=0;Y<A;Y++)for(let v=0;v<2*(A-Y)-1;v++){let g=Math.floor(v/2);v%2===0?(f(L[Y][g+1]),f(L[Y+1][g]),f(L[Y][g])):(f(L[Y][g+1]),f(L[Y+1][g+1]),f(L[Y+1][g]))}}function c(S){let y=new I;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(S),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function h(){let S=new I;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let E=m(S)/2/Math.PI+.5,U=p(S)/Math.PI+.5;o.push(E,1-U)}x(),u()}function u(){for(let S=0;S<o.length;S+=6){let y=o[S+0],E=o[S+2],U=o[S+4],A=Math.max(y,E,U),L=Math.min(y,E,U);A>.9&&L<.1&&(y<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),U<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){let E=S*3;y.x=t[E+0],y.y=t[E+1],y.z=t[E+2]}function x(){let S=new I,y=new I,E=new I,U=new I,A=new pt,L=new pt,Y=new pt;for(let v=0,g=0;v<r.length;v+=9,g+=6){S.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),A.set(o[g+0],o[g+1]),L.set(o[g+2],o[g+3]),Y.set(o[g+4],o[g+5]),U.copy(S).add(y).add(E).divideScalar(3);let C=m(U);_(A,g+0,S,C),_(L,g+2,y,C),_(Y,g+4,E,C)}}function _(S,y,E,U){U<0&&S.x===1&&(o[y]=S.x-1),E.x===0&&E.z===0&&(o[y]=U/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ss=class extends Oa{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Oa().fromJSON(i))}return this}},r_={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Tu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=h_(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let x=e;x<i;x+=e)u=s[x],f=s[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return ar(r,o,e,a,l,d,0),o}};function Tu(s,t,e,n,i){let r,o;if(i===b_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Zh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Zh(r,s[r],s[r+1],o);return o&&qa(o,o.next)&&(lr(o),o=o.next),o}function Ui(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(qa(e,e.next)||de(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(s,t,e,n,i,r,o){if(!s)return;!o&&r&&m_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?o_(s,n,i,r):a_(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),lr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=l_(Ui(s),t,e),ar(s,t,e,n,i,r,2)):o===2&&c_(s,t,e,n,i,r):ar(Ui(s),t,e,n,i,r,1);break}}}function a_(s){let t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&us(i,a,r,l,o,c,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function o_(s,t,e,n){let i=s.prev,r=s,o=s.next;if(de(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=wl(d,x,t,e,n),S=wl(_,m,t,e,n),y=s.prevZ,E=s.nextZ;for(;y&&y.z>=p&&E&&E.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=x&&y.y<=m&&y!==i&&y!==o&&us(a,h,l,u,c,f,y.x,y.y)&&de(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=d&&E.x<=_&&E.y>=x&&E.y<=m&&E!==i&&E!==o&&us(a,h,l,u,c,f,E.x,E.y)&&de(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=x&&y.y<=m&&y!==i&&y!==o&&us(a,h,l,u,c,f,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=S;){if(E.x>=d&&E.x<=_&&E.y>=x&&E.y<=m&&E!==i&&E!==o&&us(a,h,l,u,c,f,E.x,E.y)&&de(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function l_(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!qa(i,r)&&wu(i,n,n.next,r)&&or(i,r)&&or(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function c_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&__(o,a)){let l=Au(o,a);o=Ui(o,o.next),l=Ui(l,l.next),ar(o,t,e,n,i,r,0),ar(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function h_(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Tu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(x_(c));for(i.sort(u_),r=0;r<i.length;r++)e=f_(i[r],e);return e}function u_(s,t){return s.x-t.x}function f_(s,t){let e=d_(s,t);if(!e)return t;let n=Au(e,s);return Ui(n,n.next),Ui(e,e.next)}function d_(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&us(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),or(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&p_(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function p_(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function m_(s,t,e,n){let i=s;do i.z===0&&(i.z=wl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,g_(i)}function g_(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function wl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function x_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function us(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function __(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!y_(s,t)&&(or(s,t)&&or(t,s)&&v_(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||qa(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function qa(s,t){return s.x===t.x&&s.y===t.y}function wu(s,t,e,n){let i=aa(de(s,t,e)),r=aa(de(s,t,n)),o=aa(de(e,n,s)),a=aa(de(e,n,t));return!!(i!==r&&o!==a||i===0&&ra(s,e,t)||r===0&&ra(s,n,t)||o===0&&ra(e,s,n)||a===0&&ra(e,t,n))}function ra(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function aa(s){return s>0?1:s<0?-1:0}function y_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function or(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function v_(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Au(s,t){let e=new Al(s.i,s.x,s.y),n=new Al(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zh(s,t,e,n){let i=new Al(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Al(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var $s=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Jh(t),Kh(n,t);let o=t.length;e.forEach(Jh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Kh(n,e[l]);let a=r_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Kh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var cr=class s extends ie{constructor(t=new Ss([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:M_,y,E=!1,U,A,L,Y;p&&(y=p.getSpacedPoints(h),E=!0,f=!1,U=p.computeFrenetFrames(h,!1),A=new I,L=new I,Y=new I),f||(m=0,d=0,x=0,_=0);let v=a.extractPoints(c),g=v.shape,C=v.holes;if(!$s.isClockWise(g)){g=g.reverse();for(let w=0,lt=C.length;w<lt;w++){let J=C[w];$s.isClockWise(J)&&(C[w]=J.reverse())}}let R=$s.triangulateShape(g,C),P=g;for(let w=0,lt=C.length;w<lt;w++){let J=C[w];g=g.concat(J)}function H(w,lt,J){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(lt,J)}let $=g.length,tt=R.length;function Q(w,lt,J){let ut,nt,Mt,O=w.x-lt.x,M=w.y-lt.y,b=J.x-w.x,G=J.y-w.y,ht=O*O+M*M,ct=O*G-M*b;if(Math.abs(ct)>Number.EPSILON){let ft=Math.sqrt(ht),Et=Math.sqrt(b*b+G*G),xt=lt.x-M/ft,St=lt.y+O/ft,Ct=J.x-G/Et,Ft=J.y+b/Et,dt=((Ct-xt)*G-(Ft-St)*b)/(O*G-M*b);ut=xt+O*dt-w.x,nt=St+M*dt-w.y;let Kt=ut*ut+nt*nt;if(Kt<=2)return new pt(ut,nt);Mt=Math.sqrt(Kt/2)}else{let ft=!1;O>Number.EPSILON?b>Number.EPSILON&&(ft=!0):O<-Number.EPSILON?b<-Number.EPSILON&&(ft=!0):Math.sign(M)===Math.sign(G)&&(ft=!0),ft?(ut=-M,nt=O,Mt=Math.sqrt(ht)):(ut=O,nt=M,Mt=Math.sqrt(ht/2))}return new pt(ut/Mt,nt/Mt)}let X=[];for(let w=0,lt=P.length,J=lt-1,ut=w+1;w<lt;w++,J++,ut++)J===lt&&(J=0),ut===lt&&(ut=0),X[w]=Q(P[w],P[J],P[ut]);let rt=[],B,ot=X.concat();for(let w=0,lt=C.length;w<lt;w++){let J=C[w];B=[];for(let ut=0,nt=J.length,Mt=nt-1,O=ut+1;ut<nt;ut++,Mt++,O++)Mt===nt&&(Mt=0),O===nt&&(O=0),B[ut]=Q(J[ut],J[Mt],J[O]);rt.push(B),ot=ot.concat(B)}for(let w=0;w<m;w++){let lt=w/m,J=d*Math.cos(lt*Math.PI/2),ut=x*Math.sin(lt*Math.PI/2)+_;for(let nt=0,Mt=P.length;nt<Mt;nt++){let O=H(P[nt],X[nt],ut);K(O.x,O.y,-J)}for(let nt=0,Mt=C.length;nt<Mt;nt++){let O=C[nt];B=rt[nt];for(let M=0,b=O.length;M<b;M++){let G=H(O[M],B[M],ut);K(G.x,G.y,-J)}}}let W=x+_;for(let w=0;w<$;w++){let lt=f?H(g[w],ot[w],W):g[w];E?(L.copy(U.normals[0]).multiplyScalar(lt.x),A.copy(U.binormals[0]).multiplyScalar(lt.y),Y.copy(y[0]).add(L).add(A),K(Y.x,Y.y,Y.z)):K(lt.x,lt.y,0)}for(let w=1;w<=h;w++)for(let lt=0;lt<$;lt++){let J=f?H(g[lt],ot[lt],W):g[lt];E?(L.copy(U.normals[w]).multiplyScalar(J.x),A.copy(U.binormals[w]).multiplyScalar(J.y),Y.copy(y[w]).add(L).add(A),K(Y.x,Y.y,Y.z)):K(J.x,J.y,u/h*w)}for(let w=m-1;w>=0;w--){let lt=w/m,J=d*Math.cos(lt*Math.PI/2),ut=x*Math.sin(lt*Math.PI/2)+_;for(let nt=0,Mt=P.length;nt<Mt;nt++){let O=H(P[nt],X[nt],ut);K(O.x,O.y,u+J)}for(let nt=0,Mt=C.length;nt<Mt;nt++){let O=C[nt];B=rt[nt];for(let M=0,b=O.length;M<b;M++){let G=H(O[M],B[M],ut);E?K(G.x,G.y+y[h-1].y,y[h-1].x+J):K(G.x,G.y,u+J)}}}D(),z();function D(){let w=i.length/3;if(f){let lt=0,J=$*lt;for(let ut=0;ut<tt;ut++){let nt=R[ut];j(nt[2]+J,nt[1]+J,nt[0]+J)}lt=h+m*2,J=$*lt;for(let ut=0;ut<tt;ut++){let nt=R[ut];j(nt[0]+J,nt[1]+J,nt[2]+J)}}else{for(let lt=0;lt<tt;lt++){let J=R[lt];j(J[2],J[1],J[0])}for(let lt=0;lt<tt;lt++){let J=R[lt];j(J[0]+$*h,J[1]+$*h,J[2]+$*h)}}n.addGroup(w,i.length/3-w,0)}function z(){let w=i.length/3,lt=0;V(P,lt),lt+=P.length;for(let J=0,ut=C.length;J<ut;J++){let nt=C[J];V(nt,lt),lt+=nt.length}n.addGroup(w,i.length/3-w,1)}function V(w,lt){let J=w.length;for(;--J>=0;){let ut=J,nt=J-1;nt<0&&(nt=w.length-1);for(let Mt=0,O=h+m*2;Mt<O;Mt++){let M=$*Mt,b=$*(Mt+1),G=lt+ut+M,ht=lt+nt+M,ct=lt+nt+b,ft=lt+ut+b;N(G,ht,ct,ft)}}}function K(w,lt,J){l.push(w),l.push(lt),l.push(J)}function j(w,lt,J){k(w),k(lt),k(J);let ut=i.length/3,nt=S.generateTopUV(n,i,ut-3,ut-2,ut-1);st(nt[0]),st(nt[1]),st(nt[2])}function N(w,lt,J,ut){k(w),k(lt),k(ut),k(lt),k(J),k(ut);let nt=i.length/3,Mt=S.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);st(Mt[0]),st(Mt[1]),st(Mt[3]),st(Mt[1]),st(Mt[2]),st(Mt[3])}function k(w){i.push(l[w*3+0]),i.push(l[w*3+1]),i.push(l[w*3+2])}function st(w){r.push(w.x),r.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return S_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Na[i.type]().fromJSON(i)),new s(n,t.options)}},M_={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],x=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(f,1-x),new pt(_,1-p)]:[new pt(a,1-l),new pt(h,1-u),new pt(d,1-x),new pt(m,1-p)]}};function S_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hr=class s extends Tl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ba=class s extends ie{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new I,x=new pt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,y=S,E=S+n+1,U=S+n+2,A=S+1;a.push(y,E,A),a.push(E,U,A)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zn=class s extends ie{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],x=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],y=p/n,E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let U=0;U<=e;U++){let A=U/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+E,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let y=h[p][S+1],E=h[p][S],U=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(y,E,A),(p!==n-1||l<Math.PI)&&d.push(E,U,A)}this.setIndex(d),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oe=class s extends ie{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let x=0;x<=i;x++){let _=x/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=i;x++){let _=(i+1)*d+x-1,m=(i+1)*(d-1)+x-1,p=(i+1)*(d-1)+x,S=(i+1)*d+x;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ur=class s extends ie{constructor(t=new Da(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new pt,h=new I,u=[],f=[],d=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),p()}function m(y){h=t.getPointAt(y/e,h);let E=o.normals[y],U=o.binormals[y];for(let A=0;A<=i;A++){let L=A/i*Math.PI*2,Y=Math.sin(L),v=-Math.cos(L);l.x=v*E.x+Y*U.x,l.y=v*E.y+Y*U.y,l.z=v*E.z+Y*U.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let E=1;E<=i;E++){let U=(i+1)*(y-1)+(E-1),A=(i+1)*y+(E-1),L=(i+1)*y+E,Y=(i+1)*(y-1)+E;x.push(U,A,Y),x.push(A,L,Y)}}function S(){for(let y=0;y<=e;y++)for(let E=0;E<=i;E++)c.x=y/e,c.y=E/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},za=class extends ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new I,r=new I;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let x=f,_=f+d;x<_;x+=3)for(let m=0;m<3;m++){let p=a.getX(x+m),S=a.getX(x+(m+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,S),jh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),jh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new zt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function jh(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var pn=class extends Pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function oa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function E_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:r=t,a=2*e-n;break;case Jc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=t,l=2*n-e;break;case Jc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(i-e),_=x*x,m=_*x,p=-f*m+2*f*_-f*x,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-d)*m+(1.5+d)*_+.5*x,E=d*m-d*_;for(let U=0;U!==a;++U)r[U]=p*o[h+U]+S*o[c+U]+y*o[l+U]+E*o[u+U];return r}},Cl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Pl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oa(e,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oa(t.times,Array),values:oa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&E_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[f+x]||_!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ha;var Ni=class extends En{};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ca;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends En{};Ll.prototype.ValueTypeName="color";var Il=class extends En{};Il.prototype.ValueTypeName="number";var Dl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},fr=class extends En{InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.DefaultInterpolation=ha;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends En{};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ca;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends En{};Ul.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},T_=new Nl,Ol=class{constructor(t){this.manager=t!==void 0?t:T_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ts=class extends Ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zo=new jt,Qh=new I,tu=new I,Fl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bl=class extends Fl{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ci=class extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ka=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function eu(){return(typeof performance=="undefined"?Date:performance).now()}var Yl="\\[\\]\\.:\\/",w_=new RegExp("["+Yl+"]","g"),$l="[^"+Yl+"]",A_="[^"+Yl.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",$l),C_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),I_=new RegExp("^"+R_+C_+P_+L_+"$"),D_=["material","materials","bones","map"],zl=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(t){let e=I_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=zl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var Ga=class{constructor(t,e,n=0,i=1/0){this.ray=new _s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Hl(t[i],this,n,e);return n.sort(nu),n}};function nu(s,t){return s.distance-t.distance}function Hl(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Hl(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Cu(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ie,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ru(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let x=Ru(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Ru(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new pe(o,e,n);return i!==void 0&&(l.gpuType=i),l}function Ie(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ln='"Poppins","Segoe UI",system-ui,Arial,sans-serif',In=(s,t)=>{let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]},Dn=(s,t=4)=>{let e=new bs(s);return e.colorSpace=ye,e.anisotropy=t,e};function Zl(s,t,e,n,i,r){s.beginPath(),s.roundRect?s.roundRect(t,e,n,i,r):s.rect(t,e,n,i)}function pr(){let[s,t]=In(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.55,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Dn(s,1)}function As(s){let[t,e]=In(1024,256),n={nupa:"rgba(70,200,255,.75)",sliit:"rgba(190,170,255,.55)",labs:"rgba(170,110,255,.8)"}[s],i={nupa:["#080e20","#122042"],sliit:["#1d2268","#0f1240"],labs:["#1d1046","#2b1760"]}[s],r=e.createLinearGradient(0,0,0,256);if(r.addColorStop(0,i[0]),r.addColorStop(1,i[1]),Zl(e,6,6,1012,244,26),e.fillStyle=r,e.fill(),e.lineWidth=4,e.strokeStyle=n,e.stroke(),e.textBaseline="alphabetic",s==="nupa"){let o=e.createLinearGradient(70,60,190,200);o.addColorStop(0,"#40f0ff"),o.addColorStop(1,"#2a7bff"),e.save(),e.shadowColor="#2fd6ff",e.shadowBlur=24,e.lineWidth=36,e.lineJoin="round",e.lineCap="round",e.strokeStyle=o,e.beginPath(),e.moveTo(92,190),e.lineTo(92,66),e.lineTo(188,190),e.lineTo(188,66),e.stroke(),e.restore(),e.fillStyle="#fff",e.font=`700 118px ${Ln}`,e.fillText("NupaStack",250,178)}if(s==="sliit"){e.save(),e.translate(44,28),e.beginPath(),e.moveTo(0,0),e.lineTo(150,0),e.lineTo(150,120),e.quadraticCurveTo(150,190,75,204),e.quadraticCurveTo(0,190,0,120),e.closePath(),e.fillStyle="#fff",e.fill(),e.clip();let o=["#3a3fb8","#7a4fd0","#2c8fe0"],a=Ie(5);for(let l=0;l<4;l++)for(let c=0;c<4;c++)e.fillStyle=(l+c)%2?"#fff":o[Math.floor(a()*3)],e.fillRect(12+l*32,14+c*32,30,30);e.fillStyle="#2c2f93",e.fillRect(12,148,126,40),e.restore(),e.fillStyle="#fff",e.font=`700 100px ${Ln}`,e.fillText("SLIIT",235,120),e.fillStyle="#e7e5ff",e.font=`600 78px ${Ln}`,e.fillText("University",235,212)}return s==="labs"&&(e.save(),e.shadowColor="#b58cff",e.shadowBlur=26,e.fillStyle="#d6c4ff",e.font='700 118px "Consolas","Courier New",monospace',e.fillText("</>",36,168),e.restore(),e.fillStyle="#fff",e.font=`700 84px ${Ln}`,e.fillText("My Projects",330,118),e.fillStyle="#e4d8ff",e.font=`700 88px ${Ln}`,e.fillText("Lab",330,212)),Dn(t,8)}function Pu(){let[s,t]=In(256,768);t.clearRect(0,0,256,768),t.beginPath(),t.moveTo(8,0),t.lineTo(248,0),t.lineTo(248,740),t.lineTo(128,690),t.lineTo(8,740),t.closePath();let e=t.createLinearGradient(0,0,0,768);e.addColorStop(0,"#2a3aa8"),e.addColorStop(1,"#0f1648"),t.fillStyle=e,t.fill(),t.lineWidth=8,t.strokeStyle="#e9d9a8",t.stroke(),t.save(),t.translate(128,250),t.fillStyle="#fff",t.beginPath(),t.moveTo(0,20),t.quadraticCurveTo(-50,-10,-96,10),t.lineTo(-96,90),t.quadraticCurveTo(-50,70,0,100),t.closePath(),t.fill(),t.beginPath(),t.moveTo(0,20),t.quadraticCurveTo(50,-10,96,10),t.lineTo(96,90),t.quadraticCurveTo(50,70,0,100),t.closePath(),t.fill(),t.strokeStyle="#7d86ff",t.lineWidth=5;for(let n=0;n<3;n++)t.beginPath(),t.moveTo(-80,34+n*16),t.lineTo(-18,38+n*16),t.moveTo(80,34+n*16),t.lineTo(18,38+n*16),t.stroke();return t.restore(),t.fillStyle="#fff",t.textAlign="center",t.font=`600 40px ${Ln}`,t.fillText("Education",128,480),t.fillText("& Learning",128,530),Dn(s,4)}function Lu(){let[s,t]=In(512,512);t.textAlign="center",t.textBaseline="middle",t.font=`700 250px ${Ln}`;let e=t.createLinearGradient(0,130,0,380);return e.addColorStop(0,"#7ffbff"),e.addColorStop(1,"#2c8bff"),t.shadowColor="#22d4ff",t.shadowBlur=50,t.fillStyle=e,t.fillText("KP",256,270),t.fillText("KP",256,270),t.shadowBlur=0,t.fillText("KP",256,270),Dn(s,4)}function Iu(s,t){let[e,n]=In(768,220);Zl(n,6,6,756,208,34),n.fillStyle="rgba(14,22,62,.82)",n.fill(),n.lineWidth=3,n.strokeStyle="rgba(120,205,255,.7)",n.stroke(),n.textAlign="center",n.fillStyle="#fff";let i=72;for(n.font=`600 ${i}px ${Ln}`;n.measureText(s).width>690&&i>30;)i-=2,n.font=`600 ${i}px ${Ln}`;return n.fillText(s,384,100),n.fillStyle="#cfe4ff",n.font=`400 56px ${Ln}`,n.fillText(t,384,176),Dn(e,4)}function Du(){let[s,t]=In(256,256);t.translate(128,128);let e=9,n=100,i=76;t.beginPath();for(let o=0;o<e*2;o++){let a=o/(e*2)*Math.PI*2,l=(o+1)/(e*2)*Math.PI*2,c=o%2?i:n;t.lineTo(Math.cos(a+.08)*c,Math.sin(a+.08)*c),t.lineTo(Math.cos(l-.08)*c,Math.sin(l-.08)*c)}t.closePath(),t.arc(0,0,34,0,Math.PI*2,!0);let r=t.createLinearGradient(-100,-100,100,100);return r.addColorStop(0,"#d6c0ff"),r.addColorStop(1,"#8a4dff"),t.shadowColor="#b27dff",t.shadowBlur=30,t.fillStyle=r,t.fill("evenodd"),Dn(s,4)}function Uu(){let[t,e]=In(1024,1024),n=Ie(11);e.fillStyle="#8f8cab",e.fillRect(0,0,1024,1024);let i=[70,140,230,330,420,480,512],r=[1,14,22,32,44,56,64];e.translate(1024/2,1024/2);for(let l=1;l<i.length;l++){let c=i[l-1],h=i[l],u=r[l],f=l%2?0:Math.PI/u;for(let d=0;d<u;d++){let x=f+d/u*Math.PI*2,_=f+(d+1)/u*Math.PI*2,m=56+n()*10+(l===6?8:0);e.beginPath(),e.arc(0,0,h,x,_),e.arc(0,0,c,_,x,!0),e.closePath(),e.fillStyle=`hsl(250,${14+n()*6}%,${m}%)`,e.fill(),e.lineWidth=3,e.strokeStyle="rgba(40,30,80,.5)",e.stroke()}}let o=e.createRadialGradient(0,0,60,0,0,300);return o.addColorStop(0,"rgba(150,230,255,.28)"),o.addColorStop(1,"rgba(150,230,255,0)"),e.fillStyle=o,e.fillRect(-1024/2,-1024/2,1024,1024),Dn(t,8)}function Nu(){let[s,t]=In(512,512),e=Ie(3);t.fillStyle="#2f6e45",t.fillRect(0,0,512,512);for(let i=0;i<420;i++)t.fillStyle=e()>.5?"rgba(80,170,90,.10)":"rgba(10,50,60,.12)",t.beginPath(),t.arc(e()*512,e()*512,6+e()*26,0,7),t.fill();for(let i=0;i<2600;i++){t.strokeStyle=e()>.5?"rgba(120,210,120,.35)":"rgba(10,60,50,.35)";let r=e()*512,o=e()*512;t.beginPath(),t.moveTo(r,o),t.lineTo(r+e()*4-2,o-3-e()*5),t.stroke()}let n=Dn(s,4);return n.wrapS=n.wrapT=Pi,n.repeat.set(10,7),n}function Ou(){let[s,t]=In(512,128),e=Ie(9);for(let n=0;n<46;n++){let i=70+e()*372,r=64+(e()-.5)*34,o=22+e()*34,a=t.createRadialGradient(i,r,0,i,r,o);a.addColorStop(0,"rgba(255,255,255,.28)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(i-o,r-o,o*2,o*2)}return Dn(s,1)}function Rs(s){let[n,i]=In(1024,512),r=Ie(s.length*31+7),o={nupa:{cols:8,rows:2,top:"#fff3cf",bot:"#ffb55a",frame:"#0c1326"},sliit:{cols:5,rows:2,top:"#fff7e0",bot:"#ffc272",frame:"#8a6a4c"},labs:{cols:6,rows:2,top:"#7a45ff",bot:"#2a1070",frame:"#100829"}}[s];i.fillStyle=o.frame,i.fillRect(0,0,1024,512);let a=12,l=(1024-a)/o.cols,c=(512-a)/o.rows;for(let u=0;u<o.rows;u++)for(let f=0;f<o.cols;f++){let d=a/2+f*l+a/2,x=a/2+u*c+a/2,_=l-a,m=c-a,p=i.createLinearGradient(0,x,0,x+m);if(p.addColorStop(0,o.top),p.addColorStop(1,o.bot),i.fillStyle=p,i.fillRect(d,x,_,m),r()<.14&&s!=="sliit"&&(i.fillStyle="rgba(8,12,30,.5)",i.fillRect(d,x,_,m)),s==="nupa")i.fillStyle="rgba(255,255,255,.9)",i.fillRect(d+_*.2,x+6,_*.6,5),i.fillStyle="rgba(15,22,48,.85)",i.fillRect(d+6,x+m*.66,_-12,10),i.fillStyle="#58d3ff",i.fillRect(d+_*.2,x+m*.5,_*.22,m*.16),i.fillStyle="rgba(15,22,48,.85)",r()>.4&&(i.beginPath(),i.arc(d+_*.68,x+m*.42,9,0,7),i.fill(),Zl(i,d+_*.68-14,x+m*.48,28,m*.22,8),i.fill());else if(s==="sliit"){for(let S=0;S<6;S++)i.fillStyle=["#8a4b2a","#c0803f","#5a3a66","#3d6a8a"][Math.floor(r()*4)],i.fillRect(d+8+S*9,x+m*.3,7,m*.62),i.fillRect(d+_-14-S*9,x+m*.3,7,m*.62);i.fillStyle="rgba(255,255,255,.7)",i.beginPath(),i.arc(d+_/2,x+18,8,0,7),i.fill(),i.fillStyle="rgba(70,40,20,.75)",i.fillRect(d+_*.3,x+m*.7,_*.4,9)}else{for(let S=0;S<3;S++){let y=i.createLinearGradient(0,0,0,1);i.fillStyle=r()>.5?"#8fe9ff":"#b9a0ff",i.fillRect(d+8+S*(_/3),x+m*.38,_/3-12,m*.22)}i.fillStyle="rgba(10,6,30,.9)",i.fillRect(d+4,x+m*.64,_-8,9),i.beginPath(),i.arc(d+_*(.3+r()*.4),x+m*.6,8,0,7),i.fill()}}let h=i.createLinearGradient(0,0,1024,512);return h.addColorStop(.3,"rgba(255,255,255,0)"),h.addColorStop(.45,"rgba(255,255,255,.12)"),h.addColorStop(.6,"rgba(255,255,255,0)"),i.fillStyle=h,i.fillRect(0,0,1024,512),Dn(n,8)}var Ve={name:"Kavidu_H_Premasiri",fullName:"G.K.H. Premasiri",initials:"KP",tagline:"3D Portfolio",role:"Software Engineering Intern",links:{github:"https://github.com/Kavidu-h-Premasiri",linkedin:"https://lk.linkedin.com/in/kavidu-h-premasiri",email:"mailto:kavindupremasiri272@gmail.com"},places:{about:{label:"About me",kicker:"G.K.H. Premasiri \xB7 Software Engineering Intern",title:"Kavidu_H_Premasiri",text:"I'm a Software Engineering Intern and a third-year, first-semester undergraduate pursuing a BSc (Hons) in Computer Science. I'm passionate about software development, modern web technologies, 3D experiences, and DevOps, with a strong drive to build innovative solutions and continuously grow as a software engineer.",groups:[{title:"Programming & Frameworks",items:["Spring Boot","React","Go","Node.js","Java","Python","R","C#","Tailwind CSS","HTML","CSS3","JavaScript","PHP"]},{title:"Cloud Computing",items:["AWS","Railway","Vercel","Netlify"]},{title:"Containerization & Orchestration",items:["Docker"]},{title:"Testing",items:["Playwright","JMeter","JUnit","Mockito"]},{title:"Code Quality",items:["SonarQube"]},{title:"Databases",items:["MongoDB","MySQL","PostgreSQL","Supabase"]},{title:"Authentication & Security",items:["Keycloak"]},{title:"Version Control",items:["Git","GitLab"]},{title:"Soft Skills",items:["Team Collaboration","Project Management","Analytical Thinking","Documentation"]}],buttons:[{label:"GitHub",href:"github"},{label:"LinkedIn",href:"linkedin"},{label:"Email",href:"email"}]},sliit:{label:"SLIIT University",kicker:"Education & Learning",title:"SLIIT University",text:"Pursuing a BSc (Hons) in Computer Science, now in the final year.",points:["Degree: BSc (Hons) Computer Science","Current year: 3rd year, 1st semester (final year)","Expected graduation: April 2027"],tags:["Software Development","Modern Web","3D Experiences","DevOps"],buttons:[{label:"Enter the SLIIT Showroom \u2192",action:"sliitlab"}]},nupa:{label:"NupaStack",kicker:"Software Engineering Intern",title:"NupaStack",text:"I work as a Software Engineering Intern at NupaStack, a cloud and DevOps delivery firm focused on AWS. NupaStack designs, builds and operates cloud infrastructure so clients can ship without an in-house DevOps team.",points:["Role: Software Engineering Intern","Cloud Audit \u2013 review of AWS architecture, security and spend","Implementation \u2013 migrations, infrastructure as code, CI/CD","DevOps Retainer \u2013 ongoing infrastructure management","Custom Software \u2013 cloud-native apps, APIs and tools"],tags:["AWS","DevOps","Cloud","Custom Software"],projects:[{title:"NupaStack Website \u2013 3D Enhancement",room:"nupa",href:"https://nupastack.netlify.app",bullets:["Integrated Three.js into the NupaStack website to create an interactive and modern 3D experience.","NupaStack is a cloud and DevOps consultancy site (cloud audits, DevOps retainers, implementation) \u2013 the 3D layer was added without changing its fast, plain HTML/CSS/JS foundation."],details:[{heading:"My contributions",items:["Built page-specific 3D hero scenes with Three.js r160 for Home, About, How We Work, Blog, Cloud Audit and Founder pages.","Created reusable procedural 3D components and a shared scene toolkit (rounded boxes, glow materials, reflection environment).","Modelled the NupaStack hero in Blender (Python/bpy script) and exported it as an optimised GLB loaded with GLTFLoader.","Optimised performance: lazy-start scenes, pixel-ratio limits, and static WebP/PNG fallbacks when WebGL is unavailable.","Automated checks with Node.js, Puppeteer and Playwright, plus captures of the rendered scenes.","Improved the user experience with responsive layouts and an SEO-ready setup (sitemap, robots, Open Graph)."]},{heading:"How it is built",text:"Plain HTML, CSS and JavaScript \u2013 no framework. Three.js r160 is served locally through an import map, so every page loads only the 3D code it needs. The site is deployed on Netlify with custom headers and redirects."}],stack:["HTML5","CSS3","JavaScript (ES Modules)","Three.js r160","WebGL","GLTF / GLB","Blender + Python (bpy)","Node.js","Puppeteer","Playwright","Netlify"]}],buttons:[{label:"Enter the NupaStack Showroom \u2192",action:"nupalab"},{label:"Visit nupastack.com",href:"https://nupastack.com/"}]},labs:{label:"My Projects Lab",kicker:"Projects",title:"My Projects Lab",text:"A selection of the websites and systems I have built.",projects:[{title:"Leads Preschool Website (MERN)",room:"preschool",year:"2025",href:"https://leads-preschool.vercel.app/",bullets:["Preschool learning and classroom management web app supporting lesson planning, student engagement activities and basic progress tracking for early childhood education.","Full-stack system using React, CSS, Node.js and MongoDB to manage educational content and store student-related data efficiently.","Extra features: an AI chatbot for user assistance and a QR code-based attendance system."],stack:["React","CSS","Node.js","MongoDB","Docker","AWS (basic hands-on)","Vercel","Railway"]},{title:"Randu Salon Website"},{title:"TaskFlow \u2013 Full-Stack Team Collaboration & Task Management System",year:"2026",bullets:["Collaborative full-stack task management web app using React, TypeScript and Tailwind CSS on the frontend and Go (Golang) on the backend, with real-time team messaging and role-based access control (Admin/Member).","Secure Go backend using Gin and GORM with PostgreSQL, Amazon S3 for profile media and file attachments, and an automated AWS CI/CD pipeline with CodePipeline and Docker for seamless cloud deployments."],stack:["React","TypeScript","Go","PostgreSQL","AWS (S3 / CodePipeline)","Docker","Tailwind CSS","Git","Docker Hub"]},{title:"New Year Auspicious Time Website",room:"avurudu",year:"2026",href:"https://kaviduhpremasiri-nine.vercel.app/",bullets:['Responsive "Nakath Charithra" web app that displays traditional Sri Lankan auspicious times.',"Client-side time calculations and dynamic updates in JavaScript to determine and show accurate Nakath (auspicious) time information in a user-friendly interface."],stack:["React","CSS","JavaScript","Vercel"]},{title:"Poker Game Website"}],buttons:[{label:"Enter the 3D Lab \u2192",action:"lab"},{label:"More on GitHub",href:"github"}]}}};var Jl={ax:30,az:17,water:-2.6},Je={z:3,r:8},$a=14246031,U_=s=>new I((s>>16&255)/255,(s>>8&255)/255,(s&255)/255),mr=s=>{let t=s.index?s.toNonIndexed():s;for(let e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t},Tn={box:mr(new ke(1,1,1)),cyl:mr(new on(1,1,1,12)),cone:mr(new Fa(1,1,8)),ico:mr(new hr(1,1))},Bu=new jt,zu=new sn,Hu=new $n,ku=new I,Gu=new I,Ya=new It,Fi=class{constructor(){this.parts={lit:[],glow:[]},this.base=new jt,this.stack=[]}push(t){this.stack.push(this.base.clone()),this.base.multiply(t)}pop(){this.base=this.stack.pop()}add(t,e,n,i={}){var l,c,h;let r=mr(e.clone());Hu.set(i.rx||0,i.ry||0,i.rz||0),zu.setFromEuler(Hu),ku.set(i.x||0,i.y||0,i.z||0),Gu.set((l=i.sx)!=null?l:1,(c=i.sy)!=null?c:1,(h=i.sz)!=null?h:1),Bu.compose(ku,zu,Gu).premultiply(this.base),r.applyMatrix4(Bu);let o=r.attributes.position.count,a=new Float32Array(o*3);Ya.set(n);for(let u=0;u<o;u++)a[u*3]=Ya.r,a[u*3+1]=Ya.g,a[u*3+2]=Ya.b;r.setAttribute("color",new pe(a,3)),this.parts[t].push(r)}build(t,e){return new Rt(Cu(this.parts[t]),e)}},N_=`
varying vec3 vP;
void main(){
  vec3 n = normalize(vP);
  float h = n.y;
  vec3 top = vec3(0.09,0.06,0.30);
  vec3 mid = vec3(0.42,0.20,0.62);
  vec3 low = vec3(0.90,0.38,0.62);
  vec3 hor = vec3(1.0,0.60,0.46);
  vec3 col = mix(hor, low, smoothstep(0.0,0.10,h));
  col = mix(col, mid, smoothstep(0.06,0.34,h));
  col = mix(col, top, smoothstep(0.30,0.85,h));
  float sun = pow(max(dot(n, normalize(vec3(-0.45,0.07,-1.0))),0.0), 18.0);
  col += vec3(1.0,0.55,0.35)*sun*0.55;
  col = mix(col, vec3(0.85,0.24,0.56), smoothstep(0.0,-0.25,h)); // below horizon
  gl_FragColor = vec4(col,1.0);
}`,O_=`
uniform float uTime; uniform vec2 uL[20]; uniform vec2 uIsl; uniform vec3 uFog;
varying vec3 vW;
void main(){
  vec3 V = normalize(cameraPosition - vW);
  float t = uTime;
  float rip = sin(vW.x*1.3+t*0.8)+sin(vW.z*1.7-t*1.0)+sin((vW.x+vW.z)*2.6+t*0.6)+sin((vW.x-vW.z)*3.9-t*1.2);
  rip *= 0.25;
  vec3 deep = vec3(0.015,0.04,0.17);
  vec3 mid  = vec3(0.06,0.11,0.34);
  vec3 refl = mix(vec3(0.30,0.16,0.55), vec3(0.95,0.45,0.65), pow(1.0-V.y,6.0));
  float fres = pow(1.0 - clamp(V.y,0.0,1.0), 3.0);
  vec3 col = mix(deep, mid, 0.5+0.12*rip);
  col = mix(col, refl, clamp(fres*0.85 + rip*0.02, 0.0, 1.0));
  // island rim glow
  vec2 q = vW.xz / uIsl;
  float d = (length(q)-1.0) * min(uIsl.x,uIsl.y);
  col += vec3(0.05,0.55,1.0) * exp(-max(d,0.0)*0.55) * 0.5 * step(-0.2,d);
  col += vec3(1.0,0.55,0.25) * exp(-max(d,0.0)*0.25) * 0.10 * step(-0.2,d);
  // lamp reflections (long wobbly streaks toward the viewer)
  for(int i=0;i<20;i++){
    vec2 dd = vW.xz - uL[i];
    float s = exp(-dd.x*dd.x*2.2) * smoothstep(0.0,0.6,dd.y) * exp(-max(dd.y,0.0)*0.20);
    s *= 0.55 + 0.45*sin(dd.y*6.0 - t*1.8 + dd.x*3.0);
    col += vec3(1.0,0.62,0.25)*s*0.55;
  }
  float dist = length(vW - cameraPosition);
  col = mix(col, uFog, smoothstep(70.0, 320.0, dist)*0.75);
  gl_FragColor = vec4(col,1.0);
}`,F_=`
varying vec3 vN; varying vec3 vV; uniform float uTime;
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 2.2);
  vec3 c = mix(vec3(0.10,0.55,1.0), vec3(0.65,1.0,1.0), rim);
  float a = 0.06 + rim*0.8;
  gl_FragColor = vec4(c*a, a);
}`;function Vu(s,{mobile:t=!1}={}){let e=Ie(42),n=new Fi,i=[],r=[],o=[],a=[],l=Jl.water,c=Jl.ax,h=Jl.az,u=(D,z,V,K,j,N,k,st,w=0)=>n.add(D,Tn.box,z,{x:V,y:K,z:j,sx:N,sy:k,sz:st,ry:w}),f=(D,z,V,K,j,N,k,st=N)=>n.add(D,Tn.cyl,z,{x:V,y:K,z:j,sx:N,sy:k,sz:st}),d=(D,z,V,K,j,N,k=1)=>n.add(D,Tn.ico,z,{x:V,y:K,z:j,sx:N,sy:N*k,sz:N,ry:e()*6}),x=(D,z,V,K,j,N,k)=>n.add(D,Tn.cone,z,{x:V,y:K,z:j,sx:N,sy:k,sz:N}),_=(D,z,V=1)=>D*D/(c*V)**2+z*z/(h*V)**2<1,m=(D,z,V,K=0)=>new jt().compose(new I(D,z,V),new sn().setFromEuler(new $n(0,K,0)),new I(1,1,1)),p=(D,z={})=>new $t({map:D,toneMapped:!1,...z}),S=(D,z,V=1.5,K=0,j=16757829,N=!0,k=!1)=>{f("lit",3023664,D,K+V/2,z,.07,V),u("glow",j,D,K+V+.16,z,.26,.34,.26),i.push([D,K+V+.18,z,j,k?1.4:1]),N&&r.push([D,K+.06,z,k?4.2:3.2])};{let D=new Rt(new Zn(700,24,16),new Ge({side:He,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:N_}));D.renderOrder=-10,D.frustumCulled=!1,s.add(D),a.push((j,N,k)=>D.position.copy(k.position));let z=Ou(),V=[],K=[16751296,16757386,13077759,16744368];for(let j=0;j<(t?6:10);j++){let N=new $t({map:z,color:K[j%K.length],transparent:!0,opacity:.55+e()*.3,depthWrite:!1,fog:!1,toneMapped:!1}),k=new Rt(new rn(260+e()*160,65+e()*30),N);k.position.set(-320+e()*640,22+e()*45,-400-e()*100),s.add(k),V.push(k)}a.push((j,N)=>V.forEach((k,st)=>{k.position.x+=N*(1.2+st%3*.5),k.position.x>380&&(k.position.x=-380)}))}{let D=[{R:150,amp:30,top:4020904,bot:2506879,f:4.6},{R:215,amp:46,top:6970552,bot:4214938,f:3.6},{R:290,amp:62,top:10780620,bot:8020656,f:2.8}];for(let z of D){let V=t?90:160,K=[],j=[],N=[],k=[e()*6,e()*6,e()*6,e()*6],st=new It(z.top),w=new It(z.bot).lerp(new It(10121152),.45);for(let ut=0;ut<=V;ut++){let nt=-1.5+3*ut/V,Mt=.5+.22*Math.sin(nt*z.f+k[0])+.16*Math.sin(nt*z.f*2.7+k[1])+.1*Math.sin(nt*z.f*6.1+k[2])+.05*Math.sin(nt*z.f*13+k[3]),O=z.amp*(.3+.7*Mt),M=nt*z.R*1.15,b=-z.R+.12*z.R*nt*nt;K.push(M,-2.6+O,b,M,-8,b);let G=Math.min(1,O/z.amp),ht=w.clone().lerp(st,.25+.75*G);if(j.push(ht.r,ht.g,ht.b,w.r,w.g,w.b),ut<V){let ct=ut*2;N.push(ct,ct+1,ct+2,ct+1,ct+3,ct+2)}}let lt=new ie;lt.setAttribute("position",new zt(K,3)),lt.setAttribute("color",new zt(j,3)),lt.setIndex(N);let J=new Rt(lt,new $t({vertexColors:!0,side:Ne,toneMapped:!1}));J.frustumCulled=!1,s.add(J)}}let y=Array.from({length:20},()=>new pt(999,999)),E=new Ge({uniforms:{uTime:{value:0},uL:{value:y},uIsl:{value:new pt(c,h)},uFog:{value:U_($a)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:O_}),U=new Rt(new rn(1400,1e3,1,1).rotateX(-Math.PI/2),E);U.position.set(0,l,-150),s.add(U),a.push(D=>{E.uniforms.uTime.value=D});{let D=new Rt(new on(1,.86,3.6,64,1,!0).scale(c,1,h).translate(0,-1.8,0),new pn({color:4930389}));s.add(D);let z=Nu(),V=new Rt(new Di(1,72).rotateX(-Math.PI/2).scale(c-.1,1,h-.1),new pn({map:z,emissive:3832410,emissiveMap:z}));V.position.y=0,s.add(V);let K=new Rt(new Di(Je.r,72).rotateX(-Math.PI/2),(()=>{let O=Uu();return new pn({map:O,emissive:10131656,emissiveMap:O})})());K.position.set(0,.08,Je.z),s.add(K),f("lit",4867944,0,-.02,Je.z,Je.r+.35,.1),n.add("glow",new Oe(Je.r-.05,.07,6,120).rotateX(Math.PI/2),16751160,{x:0,y:.16,z:Je.z}),n.add("glow",new Oe(Je.r-1.5,.035,6,120).rotateX(Math.PI/2),16766880,{x:0,y:.12,z:Je.z});let j=t?90:150,N=new ir(new hr(1,0),new pn({flatShading:!0}),j),k=[1.97,1.17,2.95,.2],st=new be,w=new It,lt=0;for(let O=0;O<j*1.5&&lt<j;O++){let M=O/(j*1.5)*Math.PI*2+(e()-.5)*.03;if(k.some(ht=>Math.abs(Math.atan2(Math.sin(M-ht),Math.cos(M-ht)))<.085)||Math.abs(Math.cos(M))<.1&&Math.sin(M)>0)continue;let b=O%2,G=.7+e()*.95;st.position.set((c+.1+b*.7+e()*.5)*Math.cos(M),-.55-b*.9-e()*.5,(h+.1+b*.7+e()*.5)*Math.sin(M)),st.scale.set(G*(1+e()*.6),G*(.8+e()*.7),G*(1+e()*.6)),st.rotation.set(e()*.6,e()*6,e()*.6),st.updateMatrix(),N.setMatrixAt(lt,st.matrix),w.setHSL(.07+e()*.08,.06+e()*.08,.14+e()*.11),N.setColorAt(lt,w),lt++}N.count=lt,s.add(N);let J=[];for(let O=0;O<160;O++){let M=O/160*Math.PI*2;J.push(new I((c+1.4)*Math.cos(M),l+.12,(h+1.4)*Math.sin(M)))}let ut=new Rt(new ur(new Ms(J,!0),220,.1,5,!0),new $t({color:3524863,toneMapped:!1}));s.add(ut);let nt=new Rt(new ur(new Ms(J.map(O=>new I(O.x*1.012,O.y,O.z*1.012)),!0),220,.45,5,!0),new $t({color:2788607,transparent:!0,opacity:.22,blending:ve,depthWrite:!1,toneMapped:!1}));s.add(nt);let Mt=new Ge({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        void main(){
          float s = sin(vUv.x*38.0 + sin(vUv.y*6.0)*1.5)*0.5+0.5;
          float f = fract(vUv.y*2.4 + uTime*1.5 + s*0.5);
          float a = (0.40 + 0.45*smoothstep(0.35,1.0,f)*s) * smoothstep(0.0,0.05,vUv.x)*smoothstep(1.0,0.95,vUv.x);
          vec3 c = mix(vec3(0.55,0.85,1.0), vec3(1.0), smoothstep(0.5,1.0,f));
          gl_FragColor = vec4(c, a);
        }`});a.push(O=>{Mt.uniforms.uTime.value=O});for(let O of k){let M=(c+.9)*Math.cos(O),b=(h+.9)*Math.sin(O),G=Math.cos(O)/c,ht=Math.sin(O)/h,ct=new Rt(new rn(4.2,3.2),Mt);ct.position.set(M,-1.15,b),ct.rotation.y=Math.atan2(G,ht),ct.material.side=Ne,s.add(ct);for(let ft=-1;ft<=1;ft++)i.push([M+Math.cos(O)*.6+ft*1,l+.25,b+Math.sin(O)*.6,12577279,1.5])}}let A=Je.z;{f("lit",1845848,0,.32,A,3.7,.5),f("lit",2441338,0,.62,A,3.1,.25),n.add("glow",new Oe(3.6,.09,6,80).rotateX(Math.PI/2),3528959,{x:0,y:.6,z:A}),n.add("glow",new Oe(3.05,.07,6,80).rotateX(Math.PI/2),6988031,{x:0,y:.78,z:A}),f("glow",8317183,0,.84,A,1.9,.08),f("lit",1318986,0,.9,A,1,.5),f("glow",13170431,0,1.2,A,.7,.06);let D=[];[2.3,2.75,3.3,4.2].forEach((J,ut)=>{let nt=new Rt(new Ba(J,J+.1,72).rotateX(-Math.PI/2),new $t({color:ut%2?4892927:3794687,transparent:!0,opacity:.8,blending:ve,depthWrite:!1,toneMapped:!1}));nt.position.set(0,.95-ut*.02,A),s.add(nt),D.push(nt),ut===3&&(nt.position.y=.2)}),a.push(J=>D.forEach((ut,nt)=>{ut.material.opacity=.45+.4*Math.sin(J*2+nt*1.4)}));let z=new Rt(new on(1,1.5,5,28,1,!0),new Ge({transparent:!0,depthWrite:!1,blending:ve,side:Ne,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 vUv; uniform float uTime; void main(){ float a = (1.0-vUv.y)*0.55*(0.8+0.2*sin(vUv.x*40.0+uTime*3.0)); gl_FragColor = vec4(0.25,0.8,1.0, a); }"}));z.position.set(0,3.3,A),s.add(z),a.push(J=>{z.material.uniforms.uTime.value=J});let V=new Te;V.position.set(0,6,A),s.add(V);let K=new Rt(new Zn(3,40,28),new Ge({transparent:!0,depthWrite:!1,side:Ne,blending:ve,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv; }",fragmentShader:F_}));V.add(K);let j=new Ca(new za(new Zn(3.02,16,12)),new sr({color:6743807,transparent:!0,opacity:.22,blending:ve,depthWrite:!1}));V.add(j);let N=pr(),k=new an(new je({map:N,color:3983615,transparent:!0,opacity:.55,blending:ve,depthWrite:!1,fog:!1}));k.scale.set(11,11,1),V.add(k);let st=new an(new je({map:Lu(),transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));st.scale.set(4.2,4.2,1),st.material.depthTest=!1,st.renderOrder=10,V.add(st);let w=new an(new je({map:Iu(Ve.name,Ve.tagline),transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));w.scale.set(6.2,1.8,1),w.position.set(0,-2.9,.5),w.material.depthTest=!1,w.renderOrder=11,V.add(w),a.push(J=>{j.rotation.y=J*.25,K.rotation.y=J*.1,V.position.y=6+Math.sin(J*.9)*.12,k.material.opacity=.45+.1*Math.sin(J*1.6)});let lt=new Rt(new Zn(3.3,8,6),new $t);lt.visible=!1,lt.position.copy(V.position),s.add(lt),o.push({key:"about",mesh:lt,label:Ve.name,anchor:new I(0,9.5,A)})}let L={},Y=(D,z,V,K,j,N)=>{let k=new Te;k.position.set(z,0,V),k.rotation.y=K,k.scale.setScalar(j),k.updateMatrix(),s.add(k),n.push(k.matrix);let st=N(k);n.pop();let w=new Rt(new ke(...st.hit),new $t);return w.visible=!1,w.position.set(0,st.hit[1]/2,0),k.add(w),o.push({key:D,mesh:w,label:Ve.places[D].label,anchor:new I(z,st.top*j,V),sign:st.sign}),k},v=(D,z,V,K,j,N,k,st)=>{let w=new Rt(new rn(V,K),p(z,st));return w.position.set(j,N,k),D.add(w),w},g=(D,z,V,K,j,N)=>{for(let k=0;k<D;k++)u("lit",N,0,j*(D-k)/2,V+(k+.5)*K,z,j*(D-k),K)};Y("nupa",0,-11.5,0,1.1,D=>{let z=Rs("nupa");u("lit",2304578,0,.2,0,23,.4,10),u("lit",1777974,0,3.7,0,14,6.6,7),v(D,z,13.2,5.7,0,3.55,3.52);for(let j of[-1,1])u("lit",1777974,j*9,2.7,1.4,4.6,4.6,5.6),v(D,z,4,3.9,j*9,2.65,4.22),u("lit",2436166,j*9,5.2,1.4,5.2,.5,6.2),u("glow",3525119,j*9,4.95,4.55,5.2,.1,.1),u("glow",3525119,j*11.3,2.7,4.25,.1,4.6,.1);u("lit",2304578,0,7.3,.2,15.6,.6,8.4),u("glow",3920127,0,7,4.46,15.6,.12,.12),u("glow",3920127,-7.75,7,.2,.12,.12,8.4),u("glow",3920127,7.75,7,.2,.12,.12,8.4),u("glow",3898367,-7.8,7.3,4.46,.14,.7,.14),u("glow",3898367,7.8,7.3,4.46,.14,.7,.14),u("lit",791078,0,8.8,-.4,8.6,2.3,1.4),u("glow",3524863,0,7.72,.34,8.7,.08,.08),u("glow",3524863,0,9.98,.34,8.7,.08,.08),u("glow",3524863,-4.3,8.85,.34,.08,2.3,.08),u("glow",3524863,4.3,8.85,.34,.08,2.3,.08);let V=v(D,As("nupa"),8.2,2.05,0,8.85,.32);u("lit",1777974,0,3.2,4.6,5.2,.35,2.4),u("glow",4905215,0,3,5.78,5.2,.08,.08),u("glow",16769704,0,1.4,3.6,2.8,2.7,.06),u("lit",857126,-1.5,1.4,3.58,.14,2.8,.14),u("lit",857126,1.5,1.4,3.58,.14,2.8,.14),u("lit",857126,0,1.4,3.58,.1,2.8,.1),g(5,5.6,4,.55,.09,9999800);for(let j of[-1,1])u("lit",6973584,j*3.1,.35,5.4,.35,.7,2.8),u("glow",3525119,j*3.1,.75,5.4,.1,.06,2.7);let K=new Rt(new ke(9.4,2.8,1.4),new $t);return K.visible=!1,K.position.set(0,8.85,.9),D.add(K),o.push({key:"nupaInfo",mesh:K,label:"NupaStack \xB7 project details",priority:!0,sign:V,anchor:new I(0,10,-11.5)}),{hit:[24,11,10],top:10.8,sign:V}}),o[o.length-1].go="nupaLab",Y("sliit",-20,-3.5,.52,1,D=>{let z=Rs("sliit");u("lit",14207410,0,.3,0,15.5,.6,9),u("lit",13351843,0,2.9,-.2,12.5,4.6,6.2),v(D,z,9.6,3.9,0,2.85,2.93);for(let N=0;N<6;N++){let k=-5.5+N*2.2;f("lit",15655887,k,2.95,3.5,.36,4.6),u("lit",16050904,k,5.3,3.5,.95,.22,.95),u("lit",16050904,k,.72,3.5,.95,.22,.95)}u("lit",14075822,0,5.75,.6,14.4,.6,8.2),u("glow",16769192,0,5.4,4.72,14.4,.1,.1);for(let N of[-1,1])u("lit",13351843,N*6.9,2.9,-.2,1.4,4.6,6.2);u("lit",1448530,0,7.2,.4,9.6,2.5,1.3),u("glow",13219071,0,6,1.1,9.7,.09,.09),u("glow",13219071,0,8.46,1.1,9.7,.09,.09),u("glow",13219071,-4.8,7.25,1.1,.09,2.5,.09),u("glow",13219071,4.8,7.25,1.1,.09,2.5,.09);let V=v(D,As("sliit"),9.2,2.3,0,7.22,1.08),K=Pu();for(let N of[-1,1])v(D,K,1.25,3.75,N*3.3,2.6,4.15,{transparent:!0,alphaTest:.4}),u("lit",4864554,N*3.3,4.55,4.1,1.5,.1,.1);g(4,7.5,4.3,.55,.15,14471355);let j=new Rt(new ke(10,2.8,1.4),new $t);return j.visible=!1,j.position.set(0,7.2,1),D.add(j),o.push({key:"sliitInfo",mesh:j,label:"SLIIT University \xB7 education details",priority:!0,sign:V,anchor:new I(-20,9,-3.5)}),{hit:[15.5,10,9],top:9.8,sign:V}}),o[o.length-1].go="sliitLab",Y("labs",20,-3.5,-.52,1,D=>{let z=Rs("labs");u("lit",2366528,0,.2,0,14.5,.4,9.4),u("lit",2037816,0,2.6,0,12,4.4,6.6),v(D,z,9,3.7,-1.3,2.55,3.32),u("lit",1314858,4.4,2.6,3.3,2.6,4.4,.2);let V=v(D,Du(),2.3,2.3,4.4,2.7,3.45,{transparent:!0});u("lit",2366528,0,5,.2,13.4,.55,7.6),u("glow",10841087,0,4.78,4.02,13.4,.12,.12),u("glow",10841087,-6.7,4.78,.2,.12,.12,7.6),u("glow",8031487,-6,2.6,3.4,.1,4.4,.1),u("glow",8031487,6,2.6,3.4,.1,4.4,.1),u("lit",1182254,-.5,6.7,.4,8.8,2.7,1.4),u("glow",10841087,-.5,5.33,1.12,8.9,.09,.09),u("glow",10841087,-.5,8.07,1.12,8.9,.09,.09),u("glow",10841087,-4.9,6.7,1.12,.09,2.75,.09),u("glow",10841087,3.9,6.7,1.12,.09,2.75,.09);let K=v(D,As("labs"),8.4,2.1,-.5,6.7,1.14);g(3,6.5,3.9,.55,.15,9077936);let j=new Rt(new ke(9.2,3,1.4),new $t);return j.visible=!1,j.position.set(-.5,6.7,1),D.add(j),o.push({key:"labsInfo",mesh:j,label:"My Projects Lab \xB7 project details",priority:!0,sign:K,anchor:new I(20,9,-3.5)}),{hit:[14.5,9.5,9.4],top:9.4,sign:K,gear:V}}),o[o.length-1].go="labsLab";let C=(D,z,V,K,j,N=10855108)=>{let k=V-D,st=K-z,w=Math.hypot(k,st);u("lit",N,(D+V)/2,.05,(z+K)/2,j,.1,w,Math.atan2(k,st))};C(0,-4.6,0,-4,5.2),C(-14.4,.6,-6.6,2.4,3.2),C(14.4,.6,6.6,2.4,3.2),C(0,10.5,0,17,3.8,9267781);{let K=[10118968,8672557];for(let N=11;N<42;N+=.42)u("lit",K[Math.round(N/.42)%2],0,0,N,3.7,.14,.38);for(let N of[-1,1])u("lit",6175522,N*(3.7/2+.05),-.2,53/2,.22,.28,31),u("lit",7358250,N*(3.7/2+.05),.95,53/2,.14,.12,31),u("lit",7358250,N*(3.7/2+.05),.45,53/2,.1,.1,31);let j=0;for(let N=11+1.5;N<41;N+=3.1)for(let k of[-1,1]){let st=k*1.9000000000000001;u("lit",6175522,st,.55,N,.2,1.1,.2),u("glow",16757829,st,1.35,N,.24,.3,.24),i.push([st,1.38,N,16757829,1.5]),j<20&&y[j++].set(st,N)}for(let N=15;N<42;N+=7)for(let k of[-1,1])f("lit",4139550,k*1.5,l/2-.1,N,.18,Math.abs(l)+.4)}for(let D=0;D<20;D++){let z=D/20*Math.PI*2;[Math.PI/2,-Math.PI/2,0,Math.PI,Math.PI*1.5].some(K=>Math.abs(Math.atan2(Math.sin(z-K),Math.cos(z-K)))<.2)||S((Je.r+1.3)*Math.cos(z),Je.z+(Je.r+1.3)*Math.sin(z),1.5,0,16757829,!0,!0)}[[-3.6,-4.2],[3.6,-4.2],[-12.5,.8],[-9.5,2.2],[12.5,.8],[9.5,2.2],[-2.4,13.5],[2.4,13.5]].forEach(([D,z])=>S(D,z,1.3));for(let D=0;D<26;D++){let z=D/26*Math.PI*2;if([1.97,1.17,2.95,.2].some(j=>Math.abs(Math.atan2(Math.sin(z-j),Math.cos(z-j)))<.14))continue;let V=(c-1.6)*Math.cos(z),K=(h-1.6)*Math.sin(z);K<-8||S(V,K,.9,0,16754746,!0)}let Z=(D,z,V)=>{n.push(m(D,0,z,V)),u("lit",8014378,0,.55,0,1.9,.12,.55),u("lit",7028515,0,1,-.26,1.9,.5,.1);for(let K of[-1,1])u("lit",2892592,K*.8,.28,.05,.1,.56,.5),u("lit",2892592,K*.8,.8,-.26,.1,.9,.1);n.pop()};[[-9.5,7.5],[-13,10],[-18.5,7.5],[-14,13],[9.5,7.5],[13,10],[18.5,7.5],[14,13],[-24,5],[24,5]].forEach(([D,z])=>Z(D,z,Math.atan2(-D,Je.z-z+.001)+Math.PI));let R=[16748248,16740294,15755992,16757482,13660415,16751314],P=(D,z,V=1)=>{x("lit",5978672,D,1.6*V,z,.5*V,3.4*V);for(let j=0;j<2;j++){let N=e()*6;n.add("lit",Tn.cone,5978672,{x:D+Math.cos(N)*.5*V,y:3*V,z:z+Math.sin(N)*.5*V,sx:.16*V,sy:1.6*V,sz:.16*V,rx:Math.sin(N)*.6,rz:Math.cos(N)*.6})}let K=7;for(let j=0;j<K;j++){let N=j/K*6.28+e(),k=(.4+e()*1.5)*V;d("lit",R[Math.floor(e()*R.length)],D+Math.cos(N)*k,(3.5+e()*1.4)*V,z+Math.sin(N)*k,(1+e()*.7)*V,.8)}d("lit",16751583,D,4.9*V,z,1.3*V,.8)},H=[2055748,2783826,1526846,3115612],$=(D,z,V=1)=>{x("lit",4862760,D,3*V,z,.85*V,6.4*V);for(let K=0;K<9;K++){let j=e()*6.28,N=(.5+e()*3.2)*V;d("lit",H[Math.floor(e()*H.length)],D+Math.cos(j)*N,(6.4+e()*2)*V,z+Math.sin(j)*N,(1.9+e()*1.5)*V,.7)}};[[-27.5,3.5,1.25],[-21,-10.5,1.4],[-10.5,-2.5,.8],[10.5,-2.5,.8],[21,-10.5,1.4],[27.5,3.5,1.25],[10.5,1.8,.7],[-10.8,6.5,0],[22,10,1.1],[-22,9.5,1],[-16,12.5,.8],[16.5,12.5,.8]].forEach(([D,z,V])=>P(D,z,V)),[[-13.5,-15,1],[13.5,-15,1],[-26,-3,.9],[26,-3,.9]].forEach(([D,z,V])=>$(D,z,V));let tt=[2914892,3639893,2385482],Q=[10969343,16741584,12882175,16751328],X=(D,z)=>Math.hypot(D,z-Je.z)<Je.r+1||Math.abs(D)<2.6&&z>8||Math.abs(D)<8.5&&z<-3&&z>-18||Math.abs(Math.abs(D)-20)<9.2&&z>-10.5&&z<2.5;for(let D=0,z=0;D<900&&z<(t?55:90);D++){let V=(e()*2-1)*(c-2),K=(e()*2-1)*(h-2);if(!(!_(V,K,.93)||X(V,K)))if(z++,e()>.45)d("lit",tt[Math.floor(e()*3)],V,.4,K,.5+e()*.5,.8);else for(let j=0;j<4;j++)d("lit",Q[Math.floor(e()*4)],V+(e()-.5)*.9,.3,K+(e()-.5)*.9,.22+e()*.15)}s.add(n.build("lit",new pn({vertexColors:!0}))),s.add(n.build("glow",new $t({vertexColors:!0,toneMapped:!1})));{let D=pr(),z=new ir(new rn(1,1).rotateX(-Math.PI/2),new $t({map:D,color:16751168,transparent:!0,opacity:.55,blending:ve,depthWrite:!1,toneMapped:!1}),r.length),V=new be;r.forEach(([w,lt,J,ut],nt)=>{V.position.set(w,lt,J),V.scale.set(ut,1,ut),V.updateMatrix(),z.setMatrixAt(nt,V.matrix)}),s.add(z);let K=new Float32Array(i.length*3),j=new Float32Array(i.length*3),N=new It;i.forEach(([w,lt,J,ut],nt)=>{K.set([w,lt,J],nt*3),N.set(ut),j.set([N.r,N.g,N.b],nt*3)});let k=new ie;k.setAttribute("position",new pe(K,3)),k.setAttribute("color",new pe(j,3));let st=new Ii(k,new Li({size:1.9,map:D,vertexColors:!0,transparent:!0,opacity:.85,blending:ve,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}));st.frustumCulled=!1,s.add(st)}let rt=new Ge({transparent:!0,depthWrite:!1,blending:ve,uniforms:{uTime:{value:0},uScale:{value:300}},vertexShader:`attribute float aSeed; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC; varying float vA;
      void main(){ vec3 p = position; p.y += sin(uTime*0.6 + aSeed*20.0)*0.7; p.x += sin(uTime*0.4 + aSeed*13.0)*0.9; p.z += cos(uTime*0.35 + aSeed*9.0)*0.9;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = 0.55 + 0.45*sin(uTime*2.0 + aSeed*30.0); gl_PointSize = uScale*(0.5+0.5*fract(aSeed*7.0))/-mv.z; vC = aColor; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vC, a*a*vA); }"});{let D=t?70:170,z=new Float32Array(D*3),V=new Float32Array(D),K=new Float32Array(D*3),j=[[1,.7,.35],[.45,.9,1],[1,.55,.85]];for(let st=0;st<D;st++)z.set([(e()*2-1)*c*.95,.6+e()*7,(e()*2-1)*h*1.2+2],st*3),V[st]=e(),K.set(j[st%3],st*3);let N=new ie;N.setAttribute("position",new pe(z,3)),N.setAttribute("aSeed",new pe(V,1)),N.setAttribute("aColor",new pe(K,3));let k=new Ii(N,rt);k.frustumCulled=!1,s.add(k),a.push(st=>{rt.uniforms.uTime.value=st})}s.add(new Ts(16770815,9067176,3));let B=new ci(16757898,2.2);B.position.set(-30,25,-20),s.add(B);let ot=new ci(8038655,.9);ot.position.set(25,15,30),s.add(ot),s.fog=new Aa($a,140,520);let W=o.filter(D=>D.sign);return{pickables:o,update(D,z,V,K){for(let j of a)j(D,z,V);for(let j of W){let N=j.sign.scale.x,k=K===j.key?1.06:1;j.sign.scale.setScalar(N+(k-N)*Math.min(1,z*8))}},setPointScale(D,z){rt.uniforms.uScale.value=.9*D/(2*Math.tan(z*Math.PI/360))}}}var bt='"Poppins","Segoe UI",system-ui,Arial,sans-serif',Zt=(s,t)=>{let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]},Jt=(s,t=4)=>{let e=new bs(s);return e.colorSpace=ye,e.anisotropy=t,e},me=(s,t,e,n,i,r)=>{s.beginPath(),s.roundRect?s.roundRect(t,e,n,i,r):s.rect(t,e,n,i)};function Kl(){let[e,n]=Zt(2048,1024),i=Ie(21),r=n.createLinearGradient(0,0,0,1024*.72);r.addColorStop(0,"#2c2480"),r.addColorStop(.35,"#7a45b8"),r.addColorStop(.65,"#e467a0"),r.addColorStop(1,"#ffa56e"),n.fillStyle=r,n.fillRect(0,0,2048,1024);for(let c=0;c<14;c++){let h=i()*2048,u=120+i()*300,f=80+i()*160,d=n.createRadialGradient(h,u,0,h,u,f);d.addColorStop(0,"rgba(255,170,200,.35)"),d.addColorStop(1,"rgba(255,170,200,0)"),n.fillStyle=d,n.fillRect(h-f,u-f,f*2,f*2)}let o=(c,h,u,f,d)=>{n.beginPath(),n.moveTo(0,1024);for(let x=0;x<=128;x++){let _=x/128;n.lineTo(_*2048,c-h*(.5+.3*Math.sin(_*u+d)+.15*Math.sin(_*u*2.7+d*2)+.07*Math.sin(_*u*6+d)))}n.lineTo(2048,1024),n.closePath(),n.fillStyle=f,n.fill()};o(640,190,9,"#7a58a8",1),o(700,170,11,"#523f8a",3),o(770,120,14,"#34306c",5),n.fillStyle="#1c1a40",n.fillRect(0,800,2048,224);for(let c=0;c<220;c++){let h=i()*2048,u=790+i()*220,f=3+i()*9;n.fillStyle=i()>.5?"rgba(255,200,110,.85)":"rgba(255,150,210,.75)",n.beginPath(),n.arc(h,u,f,0,7),n.fill()}let a=(c,h,u,f)=>{n.strokeStyle="#2a1a3a",n.lineWidth=14,n.beginPath(),n.moveTo(c,1e3),n.quadraticCurveTo(c+20,h+250,c-10,h+100),n.stroke();for(let d=0;d<f;d++){let x=c+(i()-.5)*u,_=h+(i()-.5)*u*.7,m=14+i()*38;n.fillStyle=`rgba(${240+i()*15},${120+i()*70},${200+i()*40},${.55+i()*.4})`,n.beginPath(),n.arc(x,_,m,0,7),n.fill()}};a(120,560,420,140),a(420,620,300,70),a(1700,580,400,130),a(1950,540,320,90),n.fillStyle="rgba(14,10,34,.92)";for(let c=0;c<=8;c++)n.fillRect(c*(2048/8)-6,0,12,1024);for(let c of[.33,.66])n.fillRect(0,1024*c-5,2048,10);let l=n.createLinearGradient(0,0,2048,1024);return l.addColorStop(.35,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,.10)"),l.addColorStop(.65,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(0,0,2048,1024),Jt(e,4)}function jl(s=1){let[n,i]=Zt(1024,512),r=Ie(s*13+5);i.fillStyle="#1b1735",i.fillRect(0,0,1024,512),[[0,.5],[.5,1]].forEach(([a,l],c)=>{for(let h=0;h<12;h++){let u=8+h*85.33333333333333,f=1024/12-12,d=a*512+14,x=(l-a)*512-28,_=i.createLinearGradient(0,d,0,d+x),m=r()>.2;_.addColorStop(0,m?"#ffe6b0":"#6a5a90"),_.addColorStop(1,m?"#ff9f58":"#352a60"),i.fillStyle=_,i.fillRect(u,d,f,x),m&&(i.fillStyle="rgba(40,20,20,.6)",i.fillRect(u+f*.3,d+x*.55,f*.4,x*.08))}i.fillStyle="#ffd9a0",i.fillRect(0,l*512-16,1024,5)});for(let a=0;a<70;a++){i.strokeStyle=`rgba(60,${130+r()*60},80,.9)`,i.lineWidth=3+r()*3;let l=r()*1024,c=(r()>.5?.5:0)*512;i.beginPath(),i.moveTo(l,c+8),i.lineTo(l+(r()-.5)*14,c+30+r()*60),i.stroke()}return Jt(n,4)}function Wu(){let[t,e]=Zt(1024,1024),n=Ie(31),i=e.createLinearGradient(0,0,1024,1024);i.addColorStop(0,"#d9cdbd"),i.addColorStop(.5,"#c9bcb0"),i.addColorStop(1,"#bfb4b8"),e.fillStyle=i,e.fillRect(0,0,1024,1024);for(let o=0;o<40;o++)e.strokeStyle=`rgba(110,100,120,${.05+n()*.1})`,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(n()*1024,n()*1024),e.bezierCurveTo(n()*1024,n()*1024,n()*1024,n()*1024,n()*1024,n()*1024),e.stroke();e.strokeStyle="rgba(90,80,100,.45)",e.lineWidth=3,e.strokeRect(1,1,1022,1022);let r=Jt(t,8);return r.wrapS=r.wrapT=Pi,r.repeat.set(16,14),r}function gr(s){let[n,i]=Zt(800,560),r=Ie(s.length*9+2),o=(a,l,c,h,u="#c9cde6")=>{me(i,a,l,c,h,h/2),i.fillStyle=u,i.fill()};if(s==="home"){i.fillStyle="#eaf2ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,80,18,"#9a7aff"),o(600,16,60,14),o(680,16,60,14);let a=i.createLinearGradient(0,60,0,330);a.addColorStop(0,"#8fd0ff"),a.addColorStop(1,"#d6f0ff"),me(i,30,64,740,270,22),i.fillStyle=a,i.fill(),i.fillStyle="#7ccf6a",i.beginPath(),i.ellipse(400,330,380,70,0,Math.PI,0),i.fill(),i.fillStyle="#fff3e0",i.fillRect(300,190,200,100),i.fillStyle="#e8564a",i.beginPath(),i.moveTo(280,195),i.lineTo(400,120),i.lineTo(520,195),i.fill(),i.fillStyle="#ffcf5a",i.fillRect(380,235,40,55),i.fillStyle="#8bd0ff",i.fillRect(320,215,40,36),i.fillRect(440,215,40,36),i.fillStyle="#3f9a52",i.beginPath(),i.arc(200,240,46,0,7),i.arc(610,235,52,0,7),i.fill(),["#ff8fc0","#9a7aff","#8a6aff","#ffb85a"].forEach((l,c)=>{let h=30+c*188;me(i,h,360,170,170,26),i.fillStyle=l,i.fill(),i.fillStyle="rgba(255,255,255,.85)",i.beginPath(),i.arc(h+85,430,34,0,7),i.fill(),o(h+30,490,110,14,"rgba(255,255,255,.7)")})}else if(s==="gallery"){i.fillStyle="#eef1ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,100,18,"#6a8aff");for(let a=0;a<2;a++)for(let l=0;l<3;l++){let c=30+l*250,h=70+a*230,u=i.createLinearGradient(c,h,c+220,h+200);u.addColorStop(0,["#ffd9a0","#ffb0c8","#b0d0ff"][(l+a)%3]),u.addColorStop(1,["#ff9a60","#c070d0","#6a8aff"][(l+a)%3]),me(i,c,h,220,200,18),i.fillStyle=u,i.fill(),i.fillStyle="rgba(40,20,60,.35)",i.beginPath(),i.arc(c+70+r()*60,h+90,24,0,7),i.arc(c+130+r()*40,h+100,20,0,7),i.fill()}o(30,510,200,16,"#b0b8e8")}else if(s==="chart"){i.fillStyle="#f6f1ff",i.fillRect(0,0,800,560),i.fillStyle="#8a5cff",i.fillRect(0,0,90,560);for(let a=0;a<5;a++)i.fillStyle="rgba(255,255,255,.75)",i.beginPath(),i.arc(45,60+a*70,16,0,7),i.fill();o(120,24,220,20,"#7a5cd0"),["#ff7fb8","#9a7aff","#ffb04a","#6ad0b0","#8a8aff"].forEach((a,l)=>{let c=80+r()*160;me(i,140+l*56,380-c,40,c,8),i.fillStyle=a,i.fill()}),i.lineWidth=36,["#9a7aff","#ff7fb8","#ffb04a"].forEach((a,l)=>{i.strokeStyle=a,i.beginPath(),i.arc(600,170,78,l*2.1,l*2.1+1.9),i.stroke()});for(let a=0;a<4;a++)o(430,320+a*46,300,22,"#ddd2f6"),i.fillStyle="#9a7aff",i.beginPath(),i.arc(450,331+a*46,9,0,7),i.fill()}else{i.fillStyle="#f4f0ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,100,18,"#9a7aff");for(let a=0;a<5;a++)for(let l=0;l<7;l++)i.fillStyle=["#ff7fb8","#9a7aff","#ffb04a","#e4def5","#6ad0b0"][Math.floor(r()*5)],i.beginPath(),i.arc(70+l*55,100+a*55,18,0,7),i.fill();for(let a=0;a<6;a++)me(i,450,70+a*70,310,56,14),i.fillStyle="#fff",i.fill(),i.fillStyle=["#ff9ac8","#9a7aff","#ffb85a"][a%3],i.beginPath(),i.arc(480,98+a*70,17,0,7),i.fill(),o(510,86+a*70,180,14,"#ddd2f6"),o(510,108+a*70,120,10,"#ece6fa")}return Jt(n,4)}function Xu(s){let[n,i]=Zt(1400,160);i.strokeStyle="#7fe6ff",i.lineWidth=5,i.shadowColor="#37d7ff",i.shadowBlur=14,i.beginPath(),i.moveTo(110,100),i.lineTo(150,62),i.lineTo(190,100),i.moveTo(120,98),i.lineTo(120,128),i.lineTo(180,128),i.lineTo(180,98),i.stroke(),i.beginPath(),i.moveTo(150,46),i.lineTo(134,54),i.lineTo(150,62),i.lineTo(166,54),i.closePath(),i.stroke(),i.shadowBlur=0,i.fillStyle="#fff",i.font=`600 56px ${bt}`,i.textAlign="left",i.fillText(s,230,100);let r=i.measureText(s).width;return i.save(),i.translate(230+r+60,40),i.strokeStyle="#fff",i.fillStyle="rgba(255,255,255,.12)",i.lineWidth=4,i.beginPath(),i.roundRect?i.roundRect(10,28,44,52,14):i.rect(10,28,44,52),i.fill(),i.stroke(),i.beginPath(),i.roundRect?i.roundRect(14,0,14,44,7):i.rect(14,0,14,44),i.fill(),i.stroke(),i.strokeStyle="#7fe6ff",i.beginPath(),i.arc(0,0,14,0,7),i.stroke(),i.restore(),Jt(n,4)}function qu(){let[s,t]=Zt(256,768);t.beginPath(),t.moveTo(0,0),t.lineTo(256,0),t.lineTo(256,700),t.lineTo(128,590),t.lineTo(0,700),t.closePath();let e=t.createLinearGradient(0,0,0,768);e.addColorStop(0,"#1b2760"),e.addColorStop(1,"#101a48"),t.fillStyle=e,t.fill(),t.strokeStyle="#e9edff",t.lineWidth=3,t.stroke();let n=128,i=215;t.fillStyle="#fff";for(let r of[-1,1])for(let o=0;o<11;o++){let a=.35+o*.24,l=n+r*Math.sin(a)*86,c=i+Math.cos(a)*86-6;t.beginPath(),t.ellipse(l,c,17,7,Math.atan2(-Math.sin(a),r*Math.cos(a)),0,7),t.fill()}t.strokeStyle="#fff",t.lineWidth=4,t.lineJoin="round",t.beginPath(),t.moveTo(n,i-20),t.quadraticCurveTo(n-34,i-40,n-58,i-28),t.lineTo(n-58,i+26),t.quadraticCurveTo(n-32,i+12,n,i+34),t.stroke(),t.beginPath(),t.moveTo(n,i-20),t.quadraticCurveTo(n+34,i-40,n+58,i-28),t.lineTo(n+58,i+26),t.quadraticCurveTo(n+32,i+12,n,i+34),t.stroke(),t.lineWidth=3;for(let r=0;r<3;r++)t.beginPath(),t.moveTo(n-48,i-14+r*12),t.lineTo(n-10,i-8+r*12),t.moveTo(n+48,i-14+r*12),t.lineTo(n+10,i-8+r*12),t.stroke();return Jt(s,4)}function Yu(s="Student Projects Gallery"){let[t,e]=Zt(1024,192),n=e.createLinearGradient(0,0,0,192);return n.addColorStop(0,"#d8d0c8"),n.addColorStop(1,"#a8a0a8"),e.fillStyle=n,e.fillRect(0,0,1024,192),e.fillStyle="#ffe2a8",e.fillRect(0,0,1024,6),e.fillRect(0,186,1024,6),e.textAlign="center",e.font=`600 62px ${bt}`,e.shadowColor="#ffd27a",e.shadowBlur=16,e.fillStyle="#fff",e.fillText(s,512,118),e.shadowBlur=0,e.fillStyle="#ffd27a",e.fillRect(60,142,900,3),Jt(t,4)}function $u(){let[s,t]=Zt(512,192);return me(t,6,6,500,180,30),t.fillStyle="#fff8ea",t.fill(),t.lineWidth=8,t.strokeStyle="#f5a43a",t.stroke(),t.textAlign="center",t.fillStyle="#2a5fc8",t.font=`700 62px ${bt}`,t.fillText("Little Learners",256,96),t.fillStyle="#e8573a",t.font=`700 54px ${bt}`,t.fillText("Preschool",256,156),Jt(s,4)}function Zu(s,t){let[e,n]=Zt(128,128);return n.fillStyle=t,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(8,8,112,112),n.fillStyle="#fff",n.font=`800 96px ${bt}`,n.textAlign="center",n.fillText(s,64,100),Jt(e,2)}function Ju(){let[s,t]=Zt(256,256);return t.fillStyle="#26382f",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(40,70),t.lineTo(110,60),t.moveTo(40,110),t.lineTo(170,105),t.moveTo(40,150),t.lineTo(130,156),t.stroke(),t.beginPath(),t.arc(190,190,24,0,7),t.stroke(),Jt(s,2)}function Ku(){let[s,t]=Zt(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#2c2a36"),e.addColorStop(1,"#1b1a24"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.save(),t.translate(60,70),t.shadowColor="#7aa0ff",t.shadowBlur=18,t.beginPath(),t.moveTo(0,0),t.lineTo(150,0),t.lineTo(150,120),t.quadraticCurveTo(150,190,75,204),t.quadraticCurveTo(0,190,0,120),t.closePath(),t.fillStyle="#fff",t.fill(),t.clip(),t.shadowBlur=0;let n=["#2f45c0","#6a4fd0","#2c8fe0"],i=Ie(5);for(let r=0;r<4;r++)for(let o=0;o<4;o++)t.fillStyle=(r+o)%2?"#fff":n[Math.floor(i()*3)],t.fillRect(12+r*32,14+o*32,30,30);return t.restore(),t.fillStyle="#fff",t.shadowColor="#fff",t.shadowBlur=10,t.font=`700 130px ${bt}`,t.fillText("SLIIT",250,200),t.font=`600 110px ${bt}`,t.fillText("University",250,330),Jt(s,4)}function ju(){let[e,n]=Zt(1024,1280),i=1024/2,r=330;n.strokeStyle="#8a5a2a",n.lineWidth=10,n.beginPath(),n.moveTo(90,1220),n.lineTo(90,r+60),n.arc(i,r+60,i-90,Math.PI,0),n.lineTo(934,1220),n.closePath(),n.stroke(),n.strokeStyle="#d9a64a",n.lineWidth=4,n.stroke(),n.fillStyle="#e8b04a",n.shadowColor="#ffcf6a",n.shadowBlur=20;for(let a=0;a<28;a++){let l=a/28*Math.PI*2,c=130,h=a%2?190:235;n.beginPath(),n.moveTo(i+Math.cos(l-.1)*c,r+Math.sin(l-.1)*c),n.lineTo(i+Math.cos(l)*h,r+Math.sin(l)*h),n.lineTo(i+Math.cos(l+.1)*c,r+Math.sin(l+.1)*c),n.fill()}let o=n.createRadialGradient(i-20,r-20,10,i,r,140);return o.addColorStop(0,"#ffe8a0"),o.addColorStop(1,"#d99a30"),n.fillStyle=o,n.beginPath(),n.arc(i,r,135,0,7),n.fill(),n.shadowBlur=0,n.strokeStyle="#8a5a1a",n.lineWidth=6,n.lineCap="round",n.beginPath(),n.moveTo(i-62,r-20),n.quadraticCurveTo(i-40,r-38,i-18,r-20),n.moveTo(i+62,r-20),n.quadraticCurveTo(i+40,r-38,i+18,r-20),n.stroke(),n.beginPath(),n.moveTo(i,r-20),n.lineTo(i-8,r+30),n.lineTo(i+10,r+30),n.stroke(),n.beginPath(),n.arc(i,r+20,58,.3,Math.PI-.3),n.stroke(),n.textAlign="center",n.lineJoin="round",n.font=`800 128px ${bt}`,[["AVURUDU",640],["AUSPICIOUS",770],["TIMES",900]].forEach(([a,l])=>{n.strokeStyle="#5a3410",n.lineWidth=16,n.strokeText(a,i,l);let c=n.createLinearGradient(0,l-100,0,l);c.addColorStop(0,"#ffe9a8"),c.addColorStop(1,"#e0a030"),n.fillStyle=c,n.fillText(a,i,l)}),n.fillStyle="#d9a64a",n.fillRect(i-200,970,400,5),n.beginPath(),n.arc(i,972,14,0,7),n.fill(),Jt(e,8)}function Qu(){let[t,e]=Zt(512,512);e.translate(512/2,512/2);let n=(i,r,o,a,l)=>{e.fillStyle=l;for(let c=0;c<i;c++)e.save(),e.rotate(c/i*Math.PI*2),e.beginPath(),e.ellipse(0,-r,a,o,0,0,7),e.fill(),e.restore()};return e.fillStyle="#fff3d0",e.beginPath(),e.arc(0,0,250,0,7),e.fill(),n(16,200,44,18,"#e8365a"),n(16,150,40,16,"#ffd23a"),n(12,108,34,18,"#ff7ab8"),n(8,64,26,16,"#fff"),n(8,64,18,8,"#e8365a"),e.fillStyle="#ffd23a",e.beginPath(),e.arc(0,0,24,0,7),e.fill(),e.strokeStyle="#e8365a",e.lineWidth=6,e.beginPath(),e.arc(0,0,238,0,7),e.stroke(),Jt(t,4)}function tf(){let[t,e]=Zt(512,512),n=Ie(8);e.fillStyle="#9a7a54",e.fillRect(0,0,512,512);for(let i=0;i<300;i++)e.fillStyle=`rgba(${90+n()*70},${60+n()*50},40,.18)`,e.beginPath(),e.arc(n()*512,n()*512,4+n()*22,0,7),e.fill();e.strokeStyle="rgba(60,40,20,.55)",e.lineWidth=2;for(let i=0;i<40;i++){e.beginPath();let r=n()*512,o=n()*512;e.moveTo(r,o);for(let a=0;a<4;a++)r+=(n()-.5)*70,o+=(n()-.5)*70,e.lineTo(r,o);e.stroke()}return Jt(t,4)}function Cs(s,t,e,n="#58b8ff"){s.beginPath(),s.moveTo(26,0),s.lineTo(t-26,0),s.lineTo(t,26),s.lineTo(t,e-26),s.lineTo(t-26,e),s.lineTo(26,e),s.lineTo(0,e-26),s.lineTo(0,26),s.closePath();let r=s.createLinearGradient(0,0,t,e);r.addColorStop(0,"rgba(24,52,120,.82)"),r.addColorStop(1,"rgba(14,26,78,.86)"),s.fillStyle=r,s.fill(),s.lineWidth=5,s.strokeStyle=n,s.shadowColor=n,s.shadowBlur=16,s.stroke(),s.shadowBlur=0}function B_(s,t,e,n,i,r){let o="",a=n;for(let l of t.split(" ")){let c=o+l+" ";s.measureText(c).width>i&&o?(s.fillText(o,e,a),o=l+" ",a+=r):o=c}return s.fillText(o,e,a),a}var z_=s=>String(s).padStart(2,"0");function ef(s=new Date){let t=s.getFullYear(),e=new Date(t,3,14,0,0,0);return s>new Date(t,3,15)&&(e=new Date(t+1,3,14,0,0,0)),e}function nf(){let[e,n]=Zt(700,1500);return Cs(n,700,1500),n.strokeStyle="#fff",n.lineWidth=6,n.strokeRect(60,60,140,100),n.beginPath(),n.moveTo(30,175),n.lineTo(230,175),n.stroke(),n.fillStyle="#fff",n.font=`700 54px ${bt}`,n.fillText("</>",82,128),n.font=`700 62px ${bt}`,["Sri Lankan New Year","Auspicious Times","Website"].forEach((i,r)=>n.fillText(i,60,290+r*76)),n.fillStyle="#8fd0ff",n.fillRect(60,520,580,3),n.fillStyle="#e8f2ff",n.font=`400 40px ${bt}`,B_(n,"A web application that provides the Sinhala and Tamil New Year date, auspicious times, and traditional guidelines in a modern, user-friendly way.",60,600,580,56),["Avurudu Calendar","Auspicious Times","Reminders & Alerts","Location & Timezone","Cultural Information"].forEach((i,r)=>{let o=900+r*120;me(n,50,o,600,92,30),n.fillStyle="rgba(40,90,190,.55)",n.fill(),n.strokeStyle="#6ab8ff",n.lineWidth=3,n.stroke(),n.strokeStyle="#fff",n.lineWidth=4,n.beginPath(),n.arc(110,o+46,20,0,7),n.stroke(),n.fillStyle="#fff",n.font=`600 40px ${bt}`,n.fillText(i,165,o+58)}),Jt(e,4)}function sf(){let[e,n]=Zt(760,640);Cs(n,760,640);let i=ef(),r=i.getFullYear();n.fillStyle="#fff",n.font=`600 36px ${bt}`,n.fillText("Sinhala & Tamil New Year Calendar",60,62),n.textAlign="center",n.font=`600 42px ${bt}`,n.fillText(`April ${r}`,760/2,128),n.font=`500 26px ${bt}`,["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach((a,l)=>n.fillText(a,90+l*97,185));let o=new Date(r,3,1).getDay();n.font=`600 34px ${bt}`;for(let a=1;a<=30;a++){let l=o+a-1,c=l%7,h=Math.floor(l/7),u=90+c*97,f=248+h*62;a===14?(me(n,u-36,f-38,72,52,12),n.fillStyle="#e8a030",n.fill(),n.fillStyle="#fff"):n.fillStyle="#e8f2ff",n.fillText(String(a),u,f)}return Jt(e,4)}function rf(){let[e,n]=Zt(760,400);return Cs(n,760,400),n.fillStyle="#fff",n.font=`600 38px ${bt}`,n.fillText("Auspicious Time Schedule",70,66),[["Punya Kalaya","06:12 AM \u2013 07:00 AM"],["Anuradha Kalaya","10:24 AM \u2013 11:12 AM"],["Meal Preparation","11:48 AM \u2013 12:18 PM"],["Work Commencement","02:36 PM \u2013 03:12 PM"]].forEach(([r,o],a)=>{let l=135+a*66;n.fillStyle="#ffcf6a",n.beginPath(),n.arc(80,l-10,18,0,7),n.fill(),n.fillStyle="#e8f2ff",n.font=`500 25px ${bt}`,n.textAlign="left",n.fillText(r,120,l),n.textAlign="right",n.fillText(o,715,l)}),Jt(e,4)}function af(){let[e,n]=Zt(760,300),i=Jt(e,4),r=ef(),o=()=>{n.clearRect(0,0,760,300),Cs(n,760,300),n.fillStyle="#fff",n.font=`600 38px ${bt}`,n.textAlign="left",n.fillText("Time Until Avurudu",70,62);let a=Math.max(0,Math.floor((r-new Date)/1e3)),l=[Math.floor(a/86400),Math.floor(a%86400/3600),Math.floor(a%3600/60),a%60],c=["Days","Hours","Minutes","Seconds"];l.forEach((h,u)=>{let f=40+u*175;me(n,f,90,150,110,16),n.fillStyle="rgba(30,70,170,.7)",n.fill(),n.strokeStyle="#6ab8ff",n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.textAlign="center",n.font=`700 66px ${bt}`,n.fillText(u===0?String(h):z_(h),f+75,172),n.font=`500 26px ${bt}`,n.fillStyle="#cfe4ff",n.fillText(c[u],f+75,240)}),i.needsUpdate=!0};return o(),{tex:i,update:o}}function of(){let[e,n]=Zt(760,240),i=Jt(e,4),r=()=>{n.clearRect(0,0,760,240),Cs(n,760,240),n.fillStyle="#fff",n.textAlign="left",n.font=`600 36px ${bt}`,n.fillText("Your Location",120,62),n.strokeStyle="#fff",n.lineWidth=5,n.beginPath(),n.arc(70,52,15,0,7),n.stroke(),n.font=`500 34px ${bt}`,n.fillText("Kurunegala, Sri Lanka",70,128);let o="";try{o=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Colombo",hour:"2-digit",minute:"2-digit"})}catch{o="--:--"}n.fillText(`Time (IST) : ${o}`,70,188),i.needsUpdate=!0};return r(),{tex:i,update:r}}function lf(){let[e,n]=Zt(760,220);return Cs(n,760,220),n.fillStyle="#fff",n.font=`600 38px ${bt}`,n.fillText("Reminder",120,68),n.strokeStyle="#ffd27a",n.lineWidth=5,n.beginPath(),n.arc(70,56,16,Math.PI,0),n.lineTo(86,78),n.lineTo(54,78),n.closePath(),n.stroke(),me(n,590,36,110,52,26),n.fillStyle="#2fd16a",n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(674,62,20,0,7),n.fill(),n.font=`400 30px ${bt}`,n.fillStyle="#e8f2ff",n.fillText("Notify me before each auspicious time",60,160),Jt(e,4)}function cf(s,t="#5fb8ff"){let[i,r]=Zt(768,480),o=r.createLinearGradient(0,0,768,480);o.addColorStop(0,"#0e1740"),o.addColorStop(1,"#2a1654"),r.fillStyle=o,r.fillRect(0,0,768,480),r.fillStyle="rgba(255,255,255,.08)",r.fillRect(0,0,768,46),["#ff6b6b","#ffd23a","#4cd964"].forEach((h,u)=>{r.fillStyle=h,r.beginPath(),r.arc(30+u*30,23,8,0,6.3),r.fill()}),r.fillStyle="rgba(255,255,255,.14)",me(r,150,10,470,26,13),r.fill(),r.fillStyle="rgba(255,255,255,.7)",r.font=`500 17px ${bt}`,r.textAlign="left",r.fillText("project-details.md",170,29),r.fillStyle=t,r.font=`700 20px ${bt}`,r.fillText("MY PROJECTS LAB",44,100),r.fillStyle="#fff",r.font=`700 40px ${bt}`;let a=s.split(" "),l=[],c="";for(let h of a)r.measureText(c+" "+h).width>680&&c?(l.push(c),c=h):c=c?c+" "+h:h;l.push(c),l.slice(0,3).forEach((h,u)=>r.fillText(h,44,156+u*48));for(let h=0;h<3;h++)r.fillStyle="rgba(255,255,255,.16)",me(r,44,318+h*24,560-h*90,10,5),r.fill();return r.fillStyle=t,me(r,44,400,330,52,26),r.fill(),r.fillStyle="#0b1230",r.font=`700 22px ${bt}`,r.fillText("Click to read details",74,434),Jt(i,4)}function hf(s){let[n,i]=Zt(640,150);return i.fillStyle="rgba(14,10,40,.82)",me(i,8,8,624,96,48),i.fill(),i.strokeStyle="#6fd6ff",i.lineWidth=4,i.stroke(),i.fillStyle="#fff",i.font=`700 40px ${bt}`,i.textAlign="center",i.fillText(s,640/2,72),i.fillStyle="#6fd6ff",i.beginPath(),i.moveTo(640/2-22,108),i.lineTo(640/2+22,108),i.lineTo(640/2,142),i.closePath(),i.fill(),Jt(n,4)}function uf(){let[s,t]=Zt(1024,512),e=t.createLinearGradient(0,0,1024,512);return e.addColorStop(0,"#1a1040"),e.addColorStop(1,"#2d1b5e"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.strokeStyle="#a56bff",t.lineWidth=8,t.strokeRect(14,14,996,484),t.save(),t.shadowColor="#a56bff",t.shadowBlur=24,t.fillStyle="rgba(165,107,255,.18)",me(t,62,130,230,230,40),t.fill(),t.strokeStyle="#c9a8ff",t.lineWidth=8,t.stroke(),t.restore(),t.fillStyle="#fff",t.font=`700 112px ${bt}`,t.textAlign="center",t.fillText("</>",177,280),t.textAlign="left",t.shadowColor="#c9a8ff",t.shadowBlur=14,t.fillStyle="#fff",t.font=`700 118px ${bt}`,t.fillText("My Projects",330,240),t.font=`700 118px ${bt}`,t.fillText("Lab",330,365),t.shadowBlur=0,t.fillStyle="#ffd27a",t.fillRect(330,392,560,5),Jt(s,4)}function ff(){let[e,n]=Zt(2048,1024),i=Ie(33),r=n.createLinearGradient(0,0,0,1024*.75);r.addColorStop(0,"#3f86e0"),r.addColorStop(.55,"#8cc4f4"),r.addColorStop(1,"#ffe9bf"),n.fillStyle=r,n.fillRect(0,0,2048,1024);let o=n.createRadialGradient(1500,520,0,1500,520,420);o.addColorStop(0,"rgba(255,244,200,.9)"),o.addColorStop(1,"rgba(255,244,200,0)"),n.fillStyle=o,n.fillRect(0,0,2048,1024);for(let l=0;l<16;l++){let c=i()*2048,h=100+i()*330,u=70+i()*130,f=n.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,"rgba(255,255,255,.75)"),f.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=f,n.fillRect(c-u,h-u*.6,u*2,u*1.2)}let a=(l,c,h,u,f)=>{n.beginPath(),n.moveTo(0,1024);for(let d=0;d<=128;d++){let x=d/128;n.lineTo(x*2048,l-c*(.5+.3*Math.sin(x*h+f)+.12*Math.sin(x*h*2.7+f*2)))}n.lineTo(2048,1024),n.closePath(),n.fillStyle=u,n.fill()};a(660,170,8,"#7fae9e",1),a(720,150,10,"#5a9a7e",3),a(790,110,13,"#3d7f5c",5);for(let l=0;l<46;l++){let c=i()*2048,h=800+i()*150,u=30+i()*38;n.fillStyle=["#2f7048","#3a8654","#286040"][l%3],n.beginPath(),n.arc(c,h,u,0,7),n.fill()}n.fillStyle="#e9dcc2";for(let l=0;l<6;l++){let c=160+l*330+i()*60,h=150+i()*80,u=90+i()*60;n.fillRect(c,770-u,h,u),n.fillStyle="#c9b48e",n.fillRect(c-6,764-u,h+12,14),n.fillStyle="#e9dcc2"}return Jt(e,2)}function df(){let[e,n]=Zt(1024,512);n.fillStyle="#ebe2cf",n.fillRect(0,0,1024,512);for(let i=0;i<2;i++)for(let r=0;r<12;r++){let o=8+r*85.33333333333333,a=1024/12-12,l=i*256+14,c=228;n.fillStyle="#1c2a5c",n.fillRect(o-4,l-4,a+8,c+8);let h=n.createLinearGradient(0,l,0,l+c);h.addColorStop(0,"#9fd0ff"),h.addColorStop(1,"#e8f5ff"),n.fillStyle=h,n.fillRect(o,l,a,c),n.fillStyle="#1c2a5c",n.fillRect(o+a/2-2,l,4,c),n.fillRect(o,l+c*.4,a,4)}return n.fillStyle="#e8a23a",n.fillRect(0,240,1024,8),n.fillRect(0,496,1024,8),Jt(e,4)}function pf(){let[s,t]=Zt(256,768);t.beginPath(),t.moveTo(0,0),t.lineTo(256,0),t.lineTo(256,700),t.lineTo(128,590),t.lineTo(0,700),t.closePath();let e=t.createLinearGradient(0,0,0,768);return e.addColorStop(0,"#142a6e"),e.addColorStop(1,"#0b1a48"),t.fillStyle=e,t.fill(),t.strokeStyle="#f0b44a",t.lineWidth=6,t.stroke(),t.fillStyle="#f0b44a",t.strokeStyle="#f0b44a",t.lineWidth=5,t.beginPath(),t.moveTo(128,120),t.lineTo(220,165),t.lineTo(128,210),t.lineTo(36,165),t.closePath(),t.fill(),t.fillStyle="#142a6e",t.beginPath(),t.moveTo(84,190),t.lineTo(84,232),t.quadraticCurveTo(128,262,172,232),t.lineTo(172,190),t.lineTo(128,212),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.moveTo(220,165),t.lineTo(220,235),t.stroke(),t.fillStyle="#f0b44a",t.beginPath(),t.arc(220,242,9,0,7),t.fill(),t.textAlign="center",t.fillStyle="#fff",t.shadowColor="#f0b44a",t.shadowBlur=12,t.font=`700 62px ${bt}`,t.fillText("SLIIT",128,360),t.shadowBlur=0,t.font=`600 25px ${bt}`,t.fillStyle="#f6d28a",t.fillText("UNIVERSITY",128,402),t.fillStyle="#f0b44a",t.fillRect(58,428,140,3),t.fillStyle="#fff",t.font=`500 24px ${bt}`,t.fillText("Student",128,480),t.fillText("Projects",128,512),Jt(s,4)}var Bi=(s,t,e,n="#1b1450",i="#3a1f86")=>{let r=s.createLinearGradient(0,0,t,e);r.addColorStop(0,n),r.addColorStop(1,i),s.fillStyle=r,s.fillRect(0,0,t,e)},mf=(s,t,e,n,i="#35c8ff")=>{s.save(),s.translate(t,e),s.scale(n,n),s.fillStyle=i,s.beginPath(),s.moveTo(-34,30),s.lineTo(-34,-30),s.lineTo(-18,-30),s.lineTo(18,14),s.lineTo(18,-30),s.lineTo(34,-30),s.lineTo(34,30),s.lineTo(18,30),s.lineTo(-18,-14),s.lineTo(-18,30),s.closePath(),s.fill(),s.restore()};function gf(s,t,e,n=""){let[i,r]=Zt(256,768);if(Bi(r,256,768,"#241a66","#4a2ba8"),r.strokeStyle="rgba(255,255,255,.35)",r.lineWidth=4,r.strokeRect(10,10,236,748),r.textAlign="center",r.fillStyle="#fff",r.strokeStyle="#e9e1ff",r.lineWidth=6,r.lineJoin="round",e==="crest"){r.fillStyle="#e9e1ff",r.beginPath(),r.moveTo(78,120),r.lineTo(178,120),r.lineTo(178,210),r.quadraticCurveTo(178,262,128,286),r.quadraticCurveTo(78,262,78,210),r.closePath(),r.fill(),r.fillStyle="#4a2ba8";for(let a=0;a<4;a++)for(let l=0;l<4;l++)(a+l)%2===0&&r.fillRect(92+a*18,134+l*20,16,18)}e==="code"&&(r.beginPath(),r.moveTo(98,150),r.lineTo(64,190),r.lineTo(98,230),r.moveTo(158,150),r.lineTo(192,190),r.lineTo(158,230),r.moveTo(138,140),r.lineTo(118,240),r.stroke()),e==="book"&&(r.beginPath(),r.moveTo(128,170),r.lineTo(128,240),r.moveTo(128,170),r.quadraticCurveTo(100,150,66,158),r.lineTo(66,228),r.quadraticCurveTo(100,220,128,240),r.quadraticCurveTo(156,220,190,228),r.lineTo(190,158),r.quadraticCurveTo(156,150,128,170),r.stroke()),e==="bulb"&&(r.beginPath(),r.arc(128,188,36,0,7),r.stroke(),r.beginPath(),r.moveTo(110,232),r.lineTo(146,232),r.moveTo(114,246),r.lineTo(142,246),r.stroke());let o=(a,l,c)=>{r.beginPath(),r.arc(a-26*c,l+8*c,22*c,Math.PI*.5,Math.PI*1.5),r.arc(a-4*c,l-12*c,28*c,Math.PI,Math.PI*1.9),r.arc(a+28*c,l+8*c,22*c,Math.PI*1.5,Math.PI*.5),r.closePath()};return e==="cloud"&&(r.fillStyle="#e9e1ff",o(128,190,1.3),r.fill(),r.fillStyle="#4a2ba8",r.fillRect(108,190,40,6),r.fillRect(108,204,40,6)),e==="loop"&&(r.lineWidth=9,r.beginPath(),r.moveTo(128,190),r.bezierCurveTo(150,140,205,140,205,190),r.bezierCurveTo(205,240,150,240,128,190),r.bezierCurveTo(106,140,51,140,51,190),r.bezierCurveTo(51,240,106,240,128,190),r.stroke()),e==="shield"&&(r.fillStyle="#e9e1ff",r.beginPath(),r.moveTo(128,138),r.lineTo(184,158),r.lineTo(184,205),r.quadraticCurveTo(184,248,128,272),r.quadraticCurveTo(72,248,72,205),r.lineTo(72,158),r.closePath(),r.fill(),r.strokeStyle="#4a2ba8",r.lineWidth=10,r.beginPath(),r.moveTo(104,204),r.lineTo(122,226),r.lineTo(156,180),r.stroke()),e==="cube"&&(r.lineWidth=6,r.beginPath(),r.moveTo(128,130),r.lineTo(180,158),r.lineTo(180,218),r.lineTo(128,246),r.lineTo(76,218),r.lineTo(76,158),r.closePath(),r.moveTo(76,158),r.lineTo(128,188),r.lineTo(180,158),r.moveTo(128,188),r.lineTo(128,246),r.stroke()),r.fillStyle="#fff",r.font=`700 ${s.length>8?30:40}px ${bt}`,r.fillText(s,128,360),r.font=`600 ${t.length>10?25:30}px ${bt}`,r.fillStyle="#d9ccff",r.fillText(t,128,405),r.fillStyle="#9d7bff",r.fillRect(70,440,116,3),n&&(r.fillStyle="#fff",r.font=`500 22px ${bt}`,r.fillText(n,128,484,220)),Jt(i,4)}function xf(){let[e,n]=Zt(1400,330);n.beginPath(),n.moveTo(60,330),n.lineTo(20,120),n.lineTo(150,20),n.lineTo(1250,20),n.lineTo(1380,120),n.lineTo(1340,330),n.closePath(),Bi(n,1400,330,"#161a4a","#2c2478"),n.save(),n.clip(),n.fillStyle="rgba(255,255,255,.04)";for(let i=0;i<20;i++)n.fillRect(i*80,0,30,330);return n.restore(),n.beginPath(),n.moveTo(60,326),n.lineTo(24,122),n.lineTo(152,24),n.lineTo(1248,24),n.lineTo(1376,122),n.lineTo(1340,326),n.strokeStyle="#8f7bff",n.lineWidth=10,n.shadowColor="#8f7bff",n.shadowBlur=24,n.stroke(),n.shadowBlur=0,n.textAlign="center",n.fillStyle="#fff",n.shadowColor="#b9a8ff",n.shadowBlur=16,n.font=`700 118px ${bt}`,n.fillText("NupaStack Website",1400/2,168),n.shadowBlur=0,n.font=`600 76px ${bt}`,n.fillStyle="#e4dcff",n.fillText("3D Enhancement",1400/2,262),Jt(e,4)}function _f(){let[e,n]=Zt(700,1100);Bi(n,700,1100,"#10163f","#1d1b5c"),n.strokeStyle="rgba(143,123,255,.6)",n.lineWidth=6,n.strokeRect(8,8,684,1084),mf(n,190,190,1.5),n.fillStyle="#fff",n.font=`700 92px ${bt}`,n.textAlign="left",n.fillText("NupaStack",262,220),n.font=`500 34px ${bt}`,n.fillStyle="#9fd8ff",n.fillText("Cloud & DevOps, built and run for your team",40,340,620),n.fillStyle="rgba(255,255,255,.1)";for(let i=0;i<6;i++)me(n,40,420+i*100,620-i%3*120,54,14),n.fill();return Jt(e,4)}function yf(){let[e,n]=Zt(1280,780);Bi(n,1280,780,"#070d26","#12194a"),n.fillStyle="rgba(255,255,255,.06)",n.fillRect(0,0,1280,78),mf(n,70,40,.55),n.fillStyle="#fff",n.font=`700 32px ${bt}`,n.textAlign="left",n.fillText("NupaStack",106,52),n.font=`500 24px ${bt}`,n.fillStyle="rgba(255,255,255,.8)",["Services","How We Work","Pricing","Blog","About"].forEach((c,h)=>n.fillText(c,560+h*138-(h>1?12:0),50)),n.fillStyle="#35c8ff",n.font=`700 62px ${bt}`,n.fillStyle="#fff",["Enterprise-grade cloud,","built and run for","your team."].forEach((c,h)=>{n.fillStyle=h===2?"#5fd0ff":"#fff",n.fillText(c,70,250+h*80)}),n.fillStyle="rgba(255,255,255,.75)",n.font=`500 28px ${bt}`,n.fillText("Cloud & DevOps, built and run for your team",70,520),n.fillStyle="#35c8ff",me(n,70,580,330,70,35),n.fill(),n.fillStyle="#06122e",n.font=`700 26px ${bt}`,n.fillText("Book a Cloud Audit",104,625),n.strokeStyle="#35c8ff",n.lineWidth=3,me(n,424,580,250,70,35),n.stroke(),n.fillStyle="#fff",n.fillText("How We Work",462,625);let i=960,r=430,o=210,a=n.createRadialGradient(i-60,r-60,20,i,r,o);a.addColorStop(0,"#3a6bff"),a.addColorStop(1,"#0a1440"),n.fillStyle=a,n.beginPath(),n.arc(i,r,o,0,7),n.fill();let l=Ie(5);n.fillStyle="rgba(120,220,255,.9)";for(let c=0;c<520;c++){let h=l()*6.28,u=Math.acos(2*l()-1),f=Math.sin(u)*Math.cos(h),d=Math.cos(u);Math.sin(u)*Math.sin(h)>0&&n.fillRect(i+f*o*.97,r+d*o*.97,3,3)}return n.strokeStyle="#35c8ff",n.lineWidth=5,n.shadowColor="#35c8ff",n.shadowBlur=18,n.save(),n.translate(i,r),n.rotate(-.35),n.beginPath(),n.ellipse(0,0,o*1.35,o*.38,0,0,6.3),n.stroke(),n.restore(),n.shadowBlur=0,Jt(e,4)}function vf(){let[e,n]=Zt(720,1180);Bi(n,720,1180,"#10163f","#232066"),n.strokeStyle="rgba(143,123,255,.7)",n.lineWidth=6,n.strokeRect(8,8,704,1164),n.fillStyle="#fff",n.textAlign="left",n.font=`700 44px ${bt}`,n.fillText("Project Overview",44,90),n.fillStyle="rgba(255,255,255,.9)",n.font=`500 31px ${bt}`,["Integrated Three.js into the","NupaStack website to create","an interactive and modern","3D experience."].forEach((o,a)=>n.fillText(o,44,160+a*46)),n.fillStyle="#fff",n.font=`700 40px ${bt}`,n.fillText("Tech Stack",44,420);let i=(o,a)=>{let l=44+o*150;n.fillStyle="rgba(255,255,255,.1)",me(n,l,450,120,120,22),n.fill(),a(l+60,510)},r=(o,a,l)=>{n.fillStyle=l,n.font=`600 21px ${bt}`,n.textAlign="center",n.fillText(a,o,604),n.textAlign="left"};return i(0,(o,a)=>{n.fillStyle="#e44d26",n.beginPath(),n.moveTo(o-36,a-40),n.lineTo(o+36,a-40),n.lineTo(o+30,a+26),n.lineTo(o,a+40),n.lineTo(o-30,a+26),n.closePath(),n.fill(),n.fillStyle="#fff",n.font=`700 30px ${bt}`,n.textAlign="center",n.fillText("5",o,a+10),n.textAlign="left",r(o,"HTML5","#ffb199")}),i(1,(o,a)=>{n.fillStyle="#2965f1",n.beginPath(),n.moveTo(o-36,a-40),n.lineTo(o+36,a-40),n.lineTo(o+30,a+26),n.lineTo(o,a+40),n.lineTo(o-30,a+26),n.closePath(),n.fill(),n.fillStyle="#fff",n.font=`700 30px ${bt}`,n.textAlign="center",n.fillText("3",o,a+10),n.textAlign="left",r(o,"CSS3","#a9c2ff")}),i(2,(o,a)=>{n.fillStyle="#f7df1e",n.fillRect(o-38,a-38,76,76),n.fillStyle="#222",n.font=`700 38px ${bt}`,n.textAlign="center",n.fillText("JS",o+8,a+28),n.textAlign="left",r(o,"JavaScript","#fff3a0")}),i(3,(o,a)=>{n.strokeStyle="#fff",n.lineWidth=5,n.beginPath(),n.moveTo(o-30,a+34),n.lineTo(o+6,a-40),n.lineTo(o+36,a+34),n.closePath(),n.moveTo(o-12,a+4),n.lineTo(o+16,a+4),n.lineTo(o,a-22),n.closePath(),n.stroke(),r(o,"Three.js","#fff")}),n.fillStyle="rgba(255,255,255,.75)",n.font=`500 24px ${bt}`,n.fillText("+ WebGL \xB7 GLB \xB7 Blender \xB7 Node \xB7 Netlify",44,650),n.fillStyle="#fff",n.font=`700 40px ${bt}`,n.fillText("My Contributions",44,730),n.font=`500 31px ${bt}`,["Built 3D hero scenes in Three.js","Blender \u2192 GLB hero model","Lazy-load + static fallbacks","Reusable 3D components","Automated Puppeteer tests"].forEach((o,a)=>{let l=800+a*72;n.fillStyle="#3b82f6",me(n,44,l-30,40,40,8),n.fill(),n.strokeStyle="#fff",n.lineWidth=5,n.beginPath(),n.moveTo(52,l-10),n.lineTo(62,l),n.lineTo(78,l-22),n.stroke(),n.fillStyle="#fff",n.fillText(o,104,l+4,580)}),Jt(e,4)}function bf(){let[e,n]=Zt(700,420);return Bi(n,700,420,"#17194a","#2a2478"),n.strokeStyle="#8f7bff",n.lineWidth=10,n.shadowColor="#8f7bff",n.shadowBlur=20,n.strokeRect(8,8,684,404),n.shadowBlur=0,n.fillStyle="#fff",n.textAlign="center",n.font=`700 52px ${bt}`,n.fillText("View Project Details",700/2,250),n.fillStyle="#7cd6ff",n.fillText("\u2192",700/2,330),n.strokeStyle="#7cd6ff",n.lineWidth=7,n.lineCap="round",n.beginPath(),n.arc(700/2-6,110,30,0,6.3),n.moveTo(700/2-6,80),n.lineTo(700/2-6,150),n.stroke(),Jt(e,4)}function Mf(s){let[n,i]=Zt(640,900);Bi(i,640,900,"#10163f","#232066"),i.strokeStyle="rgba(143,123,255,.7)",i.lineWidth=6,i.strokeRect(8,8,624,884),i.textAlign="left";let r=(o,a=84)=>{i.fillStyle="#fff",i.font=`700 46px ${bt}`,i.fillText(o,40,a),i.fillStyle="#9d7bff",i.fillRect(40,a+16,90,5)};return s==="stack"?(r("Tech Stack"),[["Front end","HTML5 \xB7 CSS3 \xB7 JavaScript (ES Modules)"],["3D / graphics","Three.js r160 \xB7 WebGL \xB7 GLTFLoader \xB7 RoomEnvironment"],["3D modelling","Blender \xB7 Python (bpy) \u2192 optimised GLB"],["Testing","Node.js \xB7 Puppeteer \xB7 Playwright"],["Deploy","Netlify \xB7 _headers \xB7 redirects \xB7 sitemap"]].forEach(([o,a],l)=>{let c=170+l*135;i.fillStyle="rgba(255,255,255,.08)",me(i,36,c-40,568,112,18),i.fill(),i.fillStyle="#7cd6ff",i.font=`700 26px ${bt}`,i.fillText(o,58,c),i.fillStyle="#fff",i.font=`500 24px ${bt}`,i.fillText(a,58,c+44,530)}),i.fillStyle="#ffd47a",i.font=`600 26px ${bt}`,i.fillText("No framework \u2013 fast by design",40,860)):(r("3D Highlights"),[["6+","3D hero scenes"],["GLB","Blender-modelled hero"],["Lazy","start + WebP fallback"],["r160","Three.js, served locally"]].forEach(([o,a],l)=>{let c=40+l%2*290,h=150+Math.floor(l/2)*250;i.fillStyle="rgba(255,255,255,.08)",me(i,c,h,270,220,22),i.fill(),i.fillStyle="#a890ff",i.font=`700 78px ${bt}`,i.fillText(o,c+26,h+100),i.fillStyle="#fff",i.font=`500 26px ${bt}`,i.fillText(a,c+26,h+156,230)}),i.fillStyle="#fff",i.font=`700 34px ${bt}`,i.fillText("Site pages",40,700),i.fillStyle="rgba(255,255,255,.85)",i.font=`500 25px ${bt}`,["Home \xB7 About \xB7 How We Work","Cloud Audit \xB7 DevOps Retainer","Implementation \xB7 Blog \xB7 Contact"].forEach((o,a)=>i.fillText(o,40,750+a*42))),Jt(n,4)}var xr=()=>new pn({vertexColors:!0}),_r=()=>new $t({vertexColors:!0,toneMapped:!1}),Sf=(s,t={})=>new $t({map:s,toneMapped:!1,transparent:!0,...t});function Ql(s,t){let e={box:(n,i,r,o,a,l,c,h,u=0,f=0,d=0)=>s.add(n,Tn.box,i,{x:r,y:o,z:a,sx:l,sy:c,sz:h,ry:u,rx:f,rz:d}),cyl:(n,i,r,o,a,l,c,h=1,u=1)=>s.add(n,Tn.cyl,i,{x:r,y:o,z:a,sx:l*h,sy:c,sz:l*u}),cone:(n,i,r,o,a,l,c,h=0,u=0,f=0)=>s.add(n,Tn.cone,i,{x:r,y:o,z:a,sx:l,sy:c,sz:l,rx:h,rz:u,ry:f}),ico:(n,i,r,o,a,l,c=1,h=1)=>s.add(n,Tn.ico,i,{x:r,y:o,z:a,sx:l*h,sy:l*c,sz:l,ry:t()*6}),tor:(n,i,r,o,a,l,c,h=Math.PI*2,u=64)=>s.add(n,new Oe(r,o,6,u,h).rotateX(Math.PI/2),i,{x:a,y:l,z:c}),torV:(n,i,r,o,a,l,c,h=Math.PI,u=0)=>s.add(n,new Oe(r,o,6,32,h),i,{x:a,y:l,z:c,ry:u}),local(n,i,r,o,a){s.push(new jt().compose(new I(n,i,r),new sn().setFromEuler(new $n(0,o,0)),new I(1,1,1))),a(),s.pop()},roof(n,i,r,o,a,l,c,h,u,f=0){e.local(o,a,l,f,()=>{let d=Math.atan2(u,h/2),x=Math.hypot(h/2,u)+.3;e.box(n,i,0,u/2,h/4,c+.5,.2,x,0,d),e.box(n,r,0,u/2,-h/4,c+.5,.2,x,0,-d),e.box(n,r,0,u+.02,0,c+.6,.22,.34);let _=new Ss;_.moveTo(-h/2,0),_.lineTo(h/2,0),_.lineTo(0,u);for(let m of[-1,1])s.add(n,new cr(_,{depth:.16,bevelEnabled:!1}).translate(0,0,-.08).rotateY(Math.PI/2),16181974,{x:m*(c/2),y:.05,z:0})})}};return e}var ue=(s,t,e,n,i,r,o=0,a={})=>{let l=new Rt(new rn(t,e),Sf(s,a));return l.position.set(n,i,r),l.rotation.y=o,l};function k_(s,t,e,n,i){let r=e/s,o=new Rt(new on(s,s,t,40,1,!0,-r/2,r),n);return o.position.y=i,o}function Za(s){let t=new Te;t.add(s);let e=s.clone(!0);return e.traverse(n=>{(n.isSprite||n.isPoints)&&(n.visible=!1)}),e.scale.y=-1,t.add(e),t}function Ef({mobile:s=!1,theme:t="lab"}={}){let n=t==="sliit"?{bg:11125988,hemi:[16777215,15787730,2.9],key:[16773336,2],rim:[12375295,1],ceil:15854296,cove:16751162,dark:1845852,pillar:1845852,sofa:2767480,pool:16769704,sky:ff(),wall:df(),sign:Ku(),plate:"Student Projects Gallery",banner:pf()}:t==="nupa"?{bg:1708096,hemi:[16050943,12101848,2.8],key:[16769216,2],rim:[11057407,1.2],ceil:8017462,cove:10841087,dark:1973066,pillar:15328502,sofa:3814738,pool:12098815,sky:Kl(),wall:jl(1)}:{bg:1378607,hemi:[16770768,8021160,2.7],key:[16762512,2],rim:[9677055,1.3],ceil:5915768,cove:3836671,dark:1775154,pillar:2761264,sofa:13483950,pool:16756832,sky:Kl(),wall:jl(1),sign:uf(),plate:"My Projects Showcase",banner:qu()},i=new vs;i.background=new It(n.bg);let r=Ie(77),o=[],a=pr();i.add(new Ts(n.hemi[0],n.hemi[1],n.hemi[2]));let l=new ci(n.key[0],n.key[1]);l.position.set(0,12,18),i.add(l);let c=new ci(n.rim[0],n.rim[1]);c.position.set(0,6,-16),i.add(c);{let v=new Fi,g=Ql(v,r),C=new Te;C.add(ue(n.sky,60,22,0,10,-17.5,0,{transparent:!1}));let Z=n.wall;for(let X of[-1,1]){let rt=ue(Z,44,13,X*25,6.5,-4,-X*Math.PI/2,{transparent:!1});C.add(rt),g.box("lit",n.dark,X*20,6,-4,9,.5,30),g.box("glow",16767392,X*15.6,5.9,-4,.1,.12,30),g.box("glow",16769712,X*15.6,6.6,-4,.08,.7,30);for(let B=0;B<22;B++)g.cone("lit",3836490,X*15.4,5.2-r()*.9,-17+B*1.3,.12,1.2+r()*1.2,Math.PI,0);for(let B of[-9])g.box("lit",n.pillar,X*15.8,6.5,B,1.5,13,1.5),g.box("glow",16764810,X*15.8-X*.78,6.5,B,.06,12.4,.5)}g.box("lit",n.ceil,0,13.2,-4,60,.4,40);let R=[];for(let X=-18;X<=18;X+=6)for(let rt=-14;rt<=10;rt+=6)R.push(X,12.8,rt);let P=new ie;P.setAttribute("position",new zt(R,3)),C.add(Object.assign(new Ii(P,new Li({size:1.6,map:a,color:16767392,transparent:!0,blending:ve,depthWrite:!1,toneMapped:!1})),{frustumCulled:!1}));let H=(X,rt,B,ot)=>g.local(X,0,rt,B,()=>{g.box("lit",ot,0,.5,0,4.4,.8,1.7),g.box("lit",ot,0,1.15,-.7,4.4,1.1,.5);for(let W of[-1,1])g.box("lit",ot,W*2.2,.75,0,.5,1.2,1.7);g.box("lit",2896496,-1,1,.1,.9,.7,.3,.2),g.box("lit",3813210,1.1,1,.1,.9,.7,.3,-.2)}),$=(X,rt,B=1)=>{g.cyl("lit",2827315,X,.5*B,rt,.5*B,1*B);for(let ot=0;ot<9;ot++){let W=ot/9*6.28;g.cone("lit",ot%2?3045962:4168280,X+Math.cos(W)*.3*B,1.5*B+r()*.4,rt+Math.sin(W)*.3*B,.34*B,(1.6+r())*B,Math.sin(W)*.5,-Math.cos(W)*.5)}};H(-14,11,.7,n.sofa),H(15,11.5,-.7,n.sofa),g.cyl("lit",15261910,-11,.45,13,1.4,.18),g.cyl("lit",9071162,-11,.2,13,.3,.4),$(-17.5,12.5,1.1),$(18.5,11.5,1.2),$(-19,3,1.4),$(19.5,2,1.3);for(let X of[-1,1])for(let rt=0;rt<7;rt++){let B=r()*6.28;g.cone("lit",3115602,X*(17+r()*2),.8,17+r(),.5,2.8+r(),Math.sin(B)*.7,Math.cos(B)*.7)}C.add(v.build("lit",xr()),v.build("glow",_r())),i.add(Za(C));let tt=new Rt(new rn(260,220).rotateX(-Math.PI/2),new $t({map:Wu(),transparent:!0,opacity:.86,toneMapped:!1,depthWrite:!1}));tt.position.set(0,0,-4),tt.renderOrder=1,i.add(tt);let Q=new Rt(new rn(40,28).rotateX(-Math.PI/2),new $t({map:a,color:n.pool,transparent:!0,opacity:.45,blending:ve,depthWrite:!1,toneMapped:!1}));Q.position.set(0,.03,2),Q.renderOrder=2,i.add(Q)}let h=()=>{let v=new Fi;return{B:v,k:Ql(v,r),g:new Te}},u=(v,g,C)=>{let Z=new Rt(new Oe(v,.14,6,80).rotateX(Math.PI/2),new $t({color:C,transparent:!0,opacity:0,blending:ve,depthWrite:!1,toneMapped:!1}));return Z.position.y=g,Z},f=(v,g,C,Z,R,P,H,$,tt,Q)=>{let X=new Te;X.position.set(R,P,H),X.rotation.y=$,X.updateMatrix(),v.add(X),X.add(ue(Z,tt,Q,0,0,.04,0,{transparent:!1})),g.push(X.matrix),C.box("glow",6273279,0,Q/2+.05,0,tt+.2,.08,.12),C.box("glow",6273279,0,-Q/2-.05,0,tt+.2,.08,.12),C.box("glow",6273279,-tt/2-.05,0,0,.08,Q,.12),C.box("glow",6273279,tt/2+.05,0,0,.08,Q,.12),C.box("lit",2437226,0,-Q/2-.5,0,tt+.9,.7,.9),C.box("glow",6273279,0,-Q/2-.12,.46,tt+.9,.06,.05),g.pop()},d=(v,g,{x:C,z:Z,ry:R,title:P,accent:H,accentHex:$})=>{let tt=new Te;tt.position.set(C,0,Z),tt.rotation.y=R,v.add(tt),g.local(C,0,Z,R,()=>{g.box("lit",12159576,0,1.55,0,4.4,.16,2.4),g.box("glow",$,0,1.4,1.2,4.4,.05,.05),g.box("glow",$,0,1.4,-1.2,4.4,.05,.05);for(let ot of[-1,1])for(let W of[-1,1])g.box("lit",2761792,ot*1.95,.75,W*.95,.14,1.5,.14);g.box("lit",3813974,0,.45,0,3.8,.08,1.9),g.box("lit",12896468,0,1.68,.1,2.7,.1,1.7),g.box("lit",9080992,0,1.74,.5,1.2,.01,.6),g.cyl("lit",16052198,1.7,1.77,.7,.18,.28),g.torV("lit",16052198,.1,.035,1.9,1.77,.7,Math.PI*2),g.box("lit",15216684,-1.7,1.7,.6,.9,.1,.65,.2),g.box("lit",2784232,-1.7,1.8,.6,.8,.1,.58,.05),g.box("lit",16758810,-1.7,1.9,.6,.7,.1,.5,-.1),g.cyl("lit",2827315,-1.6,1.86,-.6,.25,.4);for(let ot=0;ot<6;ot++){let W=ot/6*6.28;g.cone("lit",ot%2?3045962:4168280,-1.6+Math.cos(W)*.15,2.3,-.6+Math.sin(W)*.15,.2,.9,Math.sin(W)*.6,-Math.cos(W)*.6)}});let Q=new Te;Q.position.set(0,1.73,-.72),Q.rotation.x=-.3,tt.add(Q);{let ot=new Rt(new ke(2.7,1.75,.08),new pn({color:12896468}));ot.position.set(0,.875,0),Q.add(ot)}Q.add(ue(cf(P,H),2.5,1.56,0,.875,.05,0,{transparent:!1}));let X=new an(new je({map:a,color:$,transparent:!0,opacity:.35,blending:ve,depthWrite:!1}));X.scale.set(6.5,4.6,1),X.position.set(0,2.5,-.2),tt.add(X);let rt=new an(new je({map:hf("READ PROJECT DETAILS"),transparent:!0,depthWrite:!1,toneMapped:!1}));rt.scale.set(3.6,.85,1),rt.position.set(0,4.6,.2),tt.add(rt);let B=new Rt(new ke(4.6,3.4,2.6),new $t);return B.visible=!1,B.position.set(0,1.9,0),B.userData.kind="laptop",tt.add(B),{hit:B,glow:X,label:rt,update(ot,W){X.material.opacity+=((W?.95:.34+.1*Math.sin(ot*3))-X.material.opacity)*.15,rt.position.y=4.6+Math.sin(ot*2)*.12,rt.scale.set(3.6*(W?1.08:1),.85*(W?1.08:1),1)}}},x=()=>{let{B:v,k:g,g:C}=h(),Z=[],R=1.36;g.cyl("lit",989768,0,.6,0,7,1.2),g.cyl("lit",5944648,0,1.28,0,6.7,.16),g.tor("glow",4765951,7,.08,0,1.2,0),g.tor("glow",16757576,7.35,.07,0,.1,0),g.tor("glow",4765951,7,.06,0,.3,0);let P=k_(7.04,1,8.6,Sf(Xu("Preschool Management System")),.62);C.add(P);for(let B=0;B<56;B++){let ot=B/56*6.28;Math.abs(Math.atan2(Math.sin(ot-Math.PI/2),Math.cos(ot-Math.PI/2)))<.2||g.box("lit",16777215,Math.cos(ot)*6.3,R+.38,Math.sin(ot)*6.3,.14,.76,.06,-ot+Math.PI/2)}g.tor("lit",16777215,6.3,.035,0,R+.6,0),g.tor("lit",16777215,6.3,.035,0,R+.25,0),g.box("lit",16773338,0,R+1.2,-1.4,5.4,2.4,3.4),g.box("lit",16773338,-3.3,R+1,-1.2,3,2,3),g.roof("lit",8017612,6176686,0,R+2.4,-1.4,5.4,3.6,1.5),g.roof("lit",8017612,6176686,-3.3,R+2,-1.2,3,3.2,1.3),g.roof("lit",15749679,14172703,0,R+2.4,.55,2.8,2.6,1.15,Math.PI/2),g.box("lit",16773338,0,R+1.2,.2,2.4,2.4,.3),[15216684,16751146,16767024,4503626,3837168].forEach((B,ot)=>g.torV("lit",B,.9-ot*.14,.07,0,R+3.8,.62,Math.PI)),g.ico("lit",16777215,-.95,R+3.8,.62,.22,.8),g.ico("lit",16777215,.95,R+3.8,.62,.22,.8),g.box("lit",16051424,-1.7,R+3.9,-1.6,.55,1.4,.55),g.box("lit",14172703,-1.7,R+4.65,-1.6,.7,.14,.7),g.box("lit",9067050,0,R+.8,.38,1.3,1.6,.12),g.box("glow",16767120,0,R+.85,.45,1,1.4,.04),g.box("lit",9067050,0,R+.85,.47,.06,1.4,.04);for(let B of[-1,1])g.box("lit",16777215,B*1.9,R+1.2,.1,1.1,1,.08),g.box("glow",16769184,B*1.9,R+1.2,.15,.9,.8,.04),g.box("lit",16751146,B*1.9,R+1.85,.2,1.3,.14,.4,0,.3);for(let B of[-1,1])g.box("lit",16777215,-3.3+B*.8,R+1,.4,1,.9,.08),g.box("glow",16769184,-3.3+B*.8,R+1,.45,.82,.72,.04);let H=ue($u(),1.9,.71,0,R+2.35,.82);C.add(H);for(let B=0;B<6;B++)g.cyl("lit",16052198,B%2?.3:-.3,R+.06,1+B*.85,.34,.1,1.2,.8);for(let B=0;B<26;B++){let ot=B%2?1:-1;g.ico("lit",[16740264,16765498,16742970,16777215,11563263][Math.floor(r()*5)],ot*(1.5+r()*1.2),R+.2,.9+r()*1,.16+r()*.1)}for(let B of[-1,1])g.ico("lit",4168274,B*2.6,R+.35,.7,.45,.8);g.local(-4.4,R,2,.3,()=>{for(let[B,ot]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])g.box("lit",15216684,B,1,ot,.14,2,.14);g.box("lit",16761402,0,1.45,0,1.4,.12,1.4),g.cone("lit",3837168,0,2.55,0,1.15,.9,0,0,Math.PI/4),g.box("lit",16765498,0,.95,1.9,.75,.1,2.9,0,.62),g.box("lit",15216684,-.4,1,1.9,.08,.3,2.9,0,.62),g.box("lit",15216684,.4,1,1.9,.08,.3,2.9,0,.62);for(let B=0;B<5;B++)g.box("lit",3837168,-1.05,.25+B*.3,-.2,.06,.06,.7);g.box("lit",3837168,-1.05,.8,-.2,.08,1.7,.08,0,0,.2)}),g.box("lit",9067050,-1.9,R+.75,2.45,1.1,1,.08,0,-.12);{let B=ue(Ju(),.95,.85,-1.9,R+.78,2.5,0,{transparent:!1});B.rotation.x=-.12,C.add(B)}g.box("lit",9067050,-2.3,R+.35,2.7,.08,.8,.08,0,.3),g.box("lit",9067050,-1.5,R+.35,2.7,.08,.8,.08,0,.3),g.cone("lit",6964520,3.5,R+1.5,-.9,.5,3.2);let $=[3115578,4171850,5815626,2783798];for(let B=0;B<9;B++){let ot=r()*6.28,W=r()*1.3;g.ico("lit",$[B%4],3.5+Math.cos(ot)*W,R+3.7+r()*1.3,-.9+Math.sin(ot)*W,.95+r()*.5,.85)}g.local(4.7,R,2,-.2,()=>{for(let B of[-1,1])g.box("lit",2784232,B*1.4,1.1,-.35,.1,2.3,.1,0,0,.18*B),g.box("lit",2784232,B*1.4,1.1,.35,.1,2.3,.1,0,0,.18*B);g.box("lit",2784232,0,2.15,0,3,.12,.12);for(let B of[-.6,.6])g.box("lit",6969920,B,1.4,0,.03,1.5,.03),g.box("lit",B>0?15216684:16761402,B,.62,0,.55,.07,.25)}),[["A","#f0522f",-.1,0,2.5,.15],["B","#2a7be8",.78,0,2.55,-.1],["C","#ffb81a",.34,.72,2.5,.05]].forEach(([B,ot,W,D,z,V],K)=>{let j=1.7+W;g.box("lit",[15749679,2784232,16758810][K],j,R+.36+D,z,.72,.72,.72,V);let N=ue(Zu(B,ot),.62,.62,j,R+.36+D,z+.37,V,{transparent:!1});C.add(N)});for(let B=0;B<40;B++){let ot=r()*6.28,W=5.2+r()*.8;g.ico("lit",[16740264,16765498,16742970,11563263,16777215][Math.floor(r()*5)],Math.cos(ot)*W,R+.18,Math.sin(ot)*W,.14+r()*.1)}f(C,v,g,gr("home"),-11.4,5.3,2,.5,6.4,4.5),f(C,v,g,gr("gallery"),-6.9,4.9,-3.4,.3,3.9,2.9),f(C,v,g,gr("chart"),6.9,4.9,-3.4,-.3,3.9,2.9),f(C,v,g,gr("list"),11.4,5.3,2,-.5,6.4,4.5);let tt=n.banner;for(let B of[-1,1])C.add(ue(tt,3.2,9.6,B*12.9,8.2,-5.5,-B*.18)),g.box("glow",16769192,B*12.9,13,-5.5,3.4,.14,.2);g.box("lit",659242,0,11,-13.2,9.6,3.6,.5),g.box("glow",5939455,0,12.82,-12.92,9.7,.08,.08),g.box("glow",5939455,0,9.18,-12.92,9.7,.08,.08),C.add(ue(n.sign,7.2,3.6,0,11,-12.9,0,{transparent:!1})),g.box("lit",12103848,0,8,-13.2,11,2,.6),C.add(ue(Yu(n.plate),10.6,1.95,0,8,-12.88,0,{transparent:!1})),g.tor("glow",16765562,4.6,.13,0,11.4,-1),g.tor("glow",16771512,3.3,.11,0,10.6,-1);for(let B of[.8,2.4,3.9,5.5])g.box("glow",16765562,Math.cos(B)*4,12.2,Math.sin(B)*4-1,.05,1.7,.05);for(let[B,ot,W,D,z]of[[32,.14,0,-12,n.cove],[32,.14,0,8,n.cove],[.14,20,-16,-2,n.cove],[.14,20,16,-2,n.cove]])g.box("glow",z,W,12.9,D,B,.14,ot);let Q=d(C,g,{x:8.4,z:6.2,ry:-.5,title:"Preschool Management System",accent:"#5fb8ff",accentHex:6273279});Z.push(Q.hit),C.add(v.build("lit",xr()),v.build("glow",_r()));let X=u(7.05,1.22,6738175);C.add(X);let rt=new Rt(new on(7.4,7.4,8,12),new $t);return rt.visible=!1,rt.position.y=4.8,rt.userData.kind="model",C.add(rt),Z.push(rt),{key:"preschool",group:Za(C),picks:Z,hover:X,desk:Q,cam:{x:0,y:4.6,d:24}}},_=()=>{let{B:v,k:g,g:C}=h(),Z=[],R=1.36,P=[];g.cyl("lit",2761520,0,.6,0,7.8,1.2),g.cyl("lit",5214010,0,1.28,0,7.5,.16),g.tor("glow",15775816,7.8,.09,0,1.2,0),g.tor("glow",4632831,8.25,.09,0,.1,0),g.tor("glow",4632831,7.85,.05,0,.35,0);let H=new Rt(new Di(5.6,40).rotateX(-Math.PI/2),new pn({map:tf()}));H.position.set(.4,1.38,1.2),C.add(H);let $=ue(Qu(),5.4,5.4,.2,1.4,2.2,0);$.rotation.x=-Math.PI/2,C.add($);let tt=new Ss;tt.moveTo(-2.9,0),tt.lineTo(2.9,0),tt.lineTo(2.9,4.4),tt.absarc(0,4.4,2.9,0,Math.PI,!1),tt.lineTo(-2.9,0),v.add("lit",new cr(tt,{depth:.9,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1,curveSegments:18}),10126962,{x:.8,y:R+1.1,z:-5.6,sx:1.4,sy:1.4,sz:1.4});for(let O of[-1,1])g.box("lit",6969416,.8+O*5,R+4.9,-5,.9,7.6,1),g.cone("lit",9074272,.8+O*5,R+9.1,-5,.65,1);C.add(ue(ju(),7.9,9.88,.8,R+6.6,-4.14,0));let Q=new an(new je({map:a,color:16758880,transparent:!0,opacity:.5,blending:ve,depthWrite:!1}));Q.scale.set(14,14,1),Q.position.set(.8,R+9.6,-3.8),C.add(Q),g.local(-2.3,R,.7,.12,()=>{g.box("lit",16050388,0,1.1,0,5.6,2.2,3.4),g.box("lit",8018490,0,.08,1.7,5.8,.16,1.7),g.roof("lit",11814190,10106406,0,2.2,0,5.6,4.6,1.6);for(let O of[-2.6,-.9,.9,2.6])g.cyl("lit",6962978,O,1.15,2.4,.12,2.3);g.box("lit",10895146,0,2.5,2,6.4,.16,2.6,0,.3);for(let O of[-1.9,1.9])g.box("lit",4860438,O,1.2,1.74,1.1,1,.1),g.box("glow",16758874,O,1.2,1.8,.9,.8,.04);g.box("lit",4860438,0,1,1.74,1.1,1.8,.1),g.box("glow",16754752,0,.95,1.8,.9,1.6,.04);for(let O of[-2.2,2.2])g.box("lit",8014372,O,.45,2.7,1.5,.1,.5),g.box("lit",8014372,O,.8,2.95,1.5,.5,.08),g.box("lit",8014372,O,.22,2.7,.1,.44,.4);for(let O of[-1.8,1.8])g.box("glow",16764778,O,2.1,2.4,.18,.28,.18)});let B=[16748248,16740294,15755992,16757482,13660415];g.cone("lit",5978672,-7.6,R+2,-1.8,.55,4.2),g.cone("lit",5978672,-6.7,R+4.2,-1.8,.2,2.2,0,.9);for(let O=0;O<18;O++){let M=r()*6.28,b=r()*2.6;g.ico("lit",B[O%5],-7.1+Math.cos(M)*b,R+4.4+r()*2.2,-1.8+Math.sin(M)*b*.8,.8+r()*.8,.8)}g.local(1.8,0,0,0,()=>{g.cone("lit",5913642,5.4,R+1.9,-1.6,.7,4),g.cone("lit",5913642,5,R+4.2,-1.6,.25,2.2,0,.5),g.cone("lit",5913642,6,R+4.1,-1.6,.22,2,0,-.5);for(let O=0;O<14;O++){let M=r()*6.28,b=r()*2.4;g.ico("lit",[6989882,9092682,5148724][O%3],5.5+Math.cos(M)*b,R+5+r()*1.4,-1.6+Math.sin(M)*b*.7,.7+r()*.5,.7)}for(let O=0;O<70;O++){let M=r()*6.28,b=.4+r()*2.8;g.cone("lit",O%3?16765466:16103424,5.5+Math.cos(M)*b,R+4.7-r()*.8,-1.6+Math.sin(M)*b*.7,.09,.5+r()*.9,Math.PI)}g.box("lit",6965802,6.5,R+3.5,.6,.22,.22,.22),g.box("lit",6965802,7.9,R+1.7,.6,.26,3.6,.26),g.box("lit",6965802,6.6,R+3.5,.6,3.2,.22,.22),g.box("lit",6965802,5.2,R+1.9,.6,.26,3.9,.26,0,0,.1);for(let O of[6,7.2])for(let M=0;M<10;M++)g.ico("lit",16765466,O,R+3.3-M*.2,.6,.1);g.box("lit",14169690,6.6,R+1.25,.6,1.6,.14,.5)});let ot=1.6,W=3.4;g.cyl("lit",14262842,ot,R+.08,W,.55,.14),g.tor("lit",15218266,.7,.1,ot,R+.16,W),g.cyl("lit",14262842,ot,R+1.2,W,.07,2.2);for(let O of[.4,1,1.7,2.2])g.ico("lit",15251530,ot,R+O,W,.17);for(let O=0;O<5;O++){let M=O/5*6.28;g.cone("lit",14262842,ot+Math.cos(M)*.34,R+2.42,W+Math.sin(M)*.34,.12,.2),g.box("glow",16765024,ot+Math.cos(M)*.34,R+2.6,W+Math.sin(M)*.34,.07,.16,.07)}g.box("glow",16765024,ot,R+2.65,W,.1,.22,.1);let D=new an(new je({map:a,color:16754752,transparent:!0,opacity:.9,blending:ve,depthWrite:!1}));D.scale.set(2.6,2.6,1),D.position.set(ot,R+2.7,W),C.add(D),P.push(O=>{D.material.opacity=.75+.2*Math.sin(O*9)*Math.sin(O*5.3)});for(let[O,M,b]of[[.95,14168108,0],[.75,16765498,.03],[.55,14168108,.06],[.35,16765498,.09]])v.add("lit",Tn.cyl,M,{x:3.1,y:R+1.5,z:.9+b,sx:O,sy:.06,sz:O,rx:Math.PI/2});g.box("lit",8014372,4.3,R+1,3.4,2.8,.14,1.4);for(let[O,M]of[[-1.2,-.5],[1.2,-.5],[-1.2,.5],[1.2,.5]])g.box("lit",6962978,4.3+O,R+.5,3.4+M,.12,1,.12);g.box("lit",16052198,4.3,R+.62,4.1,2.7,.8,.04);for(let O=0;O<6;O++)g.box("lit",13122106,3.2+O*.44,R+.62,4.13,.14,.8,.03);g.cyl("lit",14722362,4.8,R+1.2,3.3,.5,.3);for(let O=0;O<7;O++)g.ico("lit",[16742954,16765498,9092666,15216684][O%4],4.8+(r()-.5)*.7,R+1.5+r()*.2,3.3+(r()-.5)*.7,.2);for(let O=0;O<5;O++)g.box("lit",16765466,3.6+O*.1,R+1.15+O*.03,3.3+O*.07,.8,.14,.16,.1*O,0,.2);g.cyl("lit",14722362,3.9,R+1.14,3.9,.3,.2),g.ico("lit",16777215,3.9,R+1.3,3.9,.26,.6),g.box("lit",6962978,-3.3,R+.5,4.3,3.2,.16,1.5);for(let O of[-1.4,1.4])g.box("lit",5911576,-3.3+O,R+.25,4.3,.14,.5,1.2);g.cyl("lit",13148256,-3.3,R+.68,4.3,1.1,.2),g.tor("lit",11042880,1.1,.07,-3.3,R+.78,4.3);for(let O=0;O<9;O++){let M=O/9*6.28,b=O<7?.75:0;v.add("lit",new Oe(.26,.11,6,14).rotateX(Math.PI/2),[15773744,15243808][O%2],{x:-3.3+Math.cos(M)*b,y:R+.9+(O>6?.18:0),z:4.3+Math.sin(M)*b})}for(let O=0;O<12;O++)g.ico("lit",4860442,-3.9+r()*1.3,R+.95,4+r()*.9,.15,.8);for(let O=0;O<6;O++)g.box("lit",16183524,-2.9+r()*.9,R+.9,4+r()*.7,.24,.16,.24,r());g.ico("lit",9062954,-6.2,R+.9,3.8,.95,.9),g.cyl("lit",9062954,-6.2,R+1.75,3.8,.42,.4),g.tor("lit",8010266,.46,.08,-6.2,R+1.95,3.8),g.tor("lit",16050388,.93,.04,-6.2,R+.95,3.8),g.box("lit",9067050,-4.8,R+.6,2.4,1.3,1.2,1.2);for(let O=0;O<4;O++)g.box("lit",5911576,-4.8,R+.3+O*.28,3.02,1.2,.05,.03);for(let O=0;O<9;O++){let M=O*.7;g.cone("lit",O%2?3050058:4169816,-4.6+Math.cos(M)*.3,R+1,1.6+Math.sin(M)*.3,.4,2.2+r(),Math.sin(M)*.9,-Math.cos(M)*.9)}for(let O=0;O<9;O++){let M=.15+O*.1,b=M+.1,G=Math.sin(M)*6.9,ht=Math.cos(M)*6.9,ct=Math.sin(b)*6.9,ft=Math.cos(b)*6.9;g.box("lit",8014372,G,R+.5,ht,.14,1,.14),g.box("lit",8014372,(G+ct)/2,R+.75,(ht+ft)/2,Math.hypot(ct-G,ft-ht),.09,.07,Math.atan2(ct-G,ft-ht)+Math.PI/2),g.box("lit",8014372,(G+ct)/2,R+.4,(ht+ft)/2,Math.hypot(ct-G,ft-ht),.09,.07,Math.atan2(ct-G,ft-ht)+Math.PI/2)}g.box("lit",3814976,-15.2,7,-9.5,4.6,14,3.4),g.box("glow",16767392,-12.88,7,-9.5,.08,13.4,.4),C.add(ue(n.sign,4.2,2.1,-15.2,11.3,-7.76,0,{transparent:!1}));let z=(O,M,b,G,ht,ct,ft)=>{let Et=ue(O,M,b,G,ht,ct,ft);return C.add(Et),Et};z(nf(),3.9,8.36,-11.9,4.5,3,.42);let V=sf(),K=rf(),j=af(),N=of(),k=lf(),st=4.5,w=[V,K,j,N,k].map((O,M)=>st*[640,400,300,240,220][M]/760),lt=11.2;[V,K,j,N,k].forEach((O,M)=>{let b=z(O.tex||O,st,w[M],11.7,lt-w[M]/2,3,-.42);lt-=w[M]+.14});let J=-1;P.push(O=>{let M=Math.floor(O);M!==J&&(J=M,j.update(),N.update())});for(let O of[-1,1])g.box("glow",6273279,O*11.7-O*.1,.06,3,5.2,.08,.5,-O*.42);for(let[O,M,b,G]of[[32,.14,0,-12],[32,.14,0,8],[.14,20,-16,-2],[.14,20,16,-2]])g.box("glow",16764810,b,12.9,G,O,.14,M);let ut=d(C,g,{x:8.8,z:6.6,ry:-.5,title:"New Year Auspicious Time Website",accent:"#ffcf6a",accentHex:16764778});C.add(v.build("lit",xr()),v.build("glow",_r()));let nt=u(7.85,1.22,16765040);C.add(nt);let Mt=new Rt(new on(8,8,8.5,12),new $t);return Mt.visible=!1,Mt.position.y=5,Mt.userData.kind="model",C.add(Mt),o.push(O=>P.forEach(M=>M(O))),{key:"avurudu",group:Za(C),picks:[ut.hit,Mt],hover:nt,desk:ut,cam:{x:0,y:4.8,d:25}}},p=t==="nupa"?[(()=>{let{B:v,k:g,g:C}=h(),Z=[],R=.92,P=(N,k,st,w,lt=.8)=>v.add("glow",N,k,{x:0,y:st,z:0,sz:lt});g.cyl("lit",1841994,0,.46,0,8,.92,1,.8),g.cyl("lit",3486060,0,R-.04,0,7.7,.08,1,.8),P(new Oe(8,.09,6,90).rotateX(Math.PI/2),10841087,.86),P(new Oe(8,.07,6,90).rotateX(Math.PI/2),10841087,.3),P(new Oe(8.6,.08,6,90).rotateX(Math.PI/2),16757576,.1);let H=(N,k,st,w,lt,J=9403391)=>{g.box("glow",J,N,k+lt/2,st,w+.2,.08,.1),g.box("glow",J,N,k-lt/2,st,w+.2,.08,.1),g.box("glow",J,N-w/2,k,st,.08,lt,.1),g.box("glow",J,N+w/2,k,st,.08,lt,.1)};g.box("lit",1844056,-5.9,R+3.7,-2.7,4.4,7.4,.8),C.add(ue(_f(),4,6.3,-5.9,R+3.7,-2.28,0,{transparent:!1})),H(-5.9,R+3.7,-2.22,4,6.3),g.box("lit",1448778,.6,R+4.1,-3.3,8.6,6.9,.6),C.add(ue(yf(),7.4,4.5,.6,R+4.2,-2.98,0,{transparent:!1})),H(.6,R+4.2,-2.94,7.4,4.5,7319807),g.box("lit",1844056,6.4,R+3.7,-2.7,4.5,7.4,.8),C.add(ue(vf(),3.9,6.4,6.4,R+3.7,-2.28,0,{transparent:!1})),H(6.4,R+3.7,-2.22,3.9,6.4),C.add(ue(xf(),9.6,2.26,.6,R+8.5,-3.1)),g.box("glow",13221119,.6,R+7.4,-3,6.6,.07,.07);let $=-5.9,tt=R+.6,Q=2.2;g.cyl("lit",2894434,$,R+.3,Q+.2,3.2,.6),v.add("glow",new Oe(3.2,.07,6,60).rotateX(Math.PI/2),10841087,{x:$,y:R+.58,z:Q+.2});let X=new Te;X.position.set($,tt,Q),X.userData.anim={type:"bld"};{let N=new Fi,k=Ql(N,r);k.box("lit",2437230,0,1.5,0,3.8,3,2.2),k.box("lit",3095426,-2.1,2.1,-.2,1.4,4.2,1.8),k.box("lit",3491470,0,3.1,0,4,.22,2.4),k.box("glow",10841087,0,3.25,1.2,4,.07,.07),k.box("glow",10841087,0,3.25,-1.2,4,.07,.07),k.box("glow",10841087,0,.12,1.12,3.8,.07,.07);for(let st of[-1,1])for(let w=0;w<3;w++)k.box("glow",8181503,st*1.92,1+w*.7,.2-w*0,.05,.4,.8);for(let st=0;st<4;st++)k.box("glow",8181503,-1.3+st*.9,1.6,-1.12,.6,.9,.05);k.box("lit",1316922,0,.7,1.14,.9,1.2,.05),k.cyl("lit",4872864,-.8,3.55,0,.05,.8),k.cyl("lit",4872864,1.8,3.55,0,.05,.8),k.box("glow",10841087,.5,3.17,0,3.7,.05,.12),X.add(N.build("lit",xr()),N.build("glow",_r()))}X.add(ue(Rs("nupa"),3.6,2.5,0,1.55,1.13,0,{transparent:!1}));{let N=As("nupa");X.add(ue(N,3.6,.9,.5,4,.08,0,{side:Ne}),ue(N,3.6,.9,.5,4,-.08,Math.PI,{side:Ne}))}C.add(X);let rt=new Rt(new on(2.9,2.9,5.6,16),new $t);rt.visible=!1,rt.position.set($,tt+2.6,Q),rt.userData.kind="bld",C.add(rt),Z.push(rt),g.cyl("lit",2767450,$,tt+.05,Q+2.7,1.1,.12),g.cyl("glow",6279423,$,tt+.14,Q+2.7,.8,.04);for(let[N,k,st]of[[-3.9,3.2,1],[-7.9,3.2,1.05],[-3.6,1.2,.8],[-8.2,1.4,.85]]){g.cone("lit",6964520,N,tt+.55*st,k,.12*st,1.1*st);for(let w=0;w<5;w++){let lt=r()*6.28,J=r()*.45;g.ico("lit",[15764171,13925096,16756957][w%3],N+Math.cos(lt)*J,tt+(1.35+r()*.5)*st,k+Math.sin(lt)*J,(.42+r()*.2)*st,.85)}}g.box("lit",3815528,.9,R+.65,4,2.3,1.3,1.5),g.box("glow",9403391,.9,R+.08,4.76,2.3,.06,.05),g.box("glow",9403391,.9,R+1.3,3.25,2.3,.06,.05);{let N=ue(bf(),2.3,1.38,.9,R+1.58,4.05,0,{transparent:!1});N.rotation.x=-.95,C.add(N)}let B=new Rt(new ke(2.8,2.2,2),new $t);B.visible=!1,B.position.set(.9,R+1,4),B.userData.kind="laptop",C.add(B),Z.push(B);let ot=(N,k,st,w,lt,J)=>C.add(ue(gf(k,st,w,lt),2.7,8.1,N,8.2,-5.5,J));ot(-14.1,"Cloud","Audit","cloud","Cut cloud waste",.18),ot(-11.2,"DevOps","Retainer","loop","Run & improve",.18),g.box("glow",13221119,-12.65,12.4,-5.5,6,.14,.2),ot(11.2,"Secure","by Design","shield","Best practices",-.18),ot(14.1,"Build","& Deploy","cube","Implementation",-.18),g.box("glow",13221119,12.65,12.4,-5.5,6,.14,.2),g.tor("glow",16777215,6.2,.18,0,11.6,-1),g.tor("glow",13221119,5,.1,0,11,-1);for(let N of[.8,2.4,3.9,5.5])g.box("glow",13221119,Math.cos(N)*5.6,12.4,Math.sin(N)*5.6-1,.05,1.5,.05);for(let[N,k,st,w,lt]of[[32,.14,0,-12,n.cove],[32,.14,0,8,n.cove],[.14,20,-16,-2,n.cove],[.14,20,16,-2,n.cove]])g.box("glow",lt,st,12.9,w,N,.14,k);let W=(N,k)=>(N.userData.anim=k,N);for(let[N,k,st]of[[-12.6,-1.6,.35],[-14.4,-.4,.35]])g.local(N,0,k,st,()=>{g.box("lit",1777487,0,R+1.7,0,1.5,3.4,1.1),g.box("lit",2896496,0,R+3.45,0,1.6,.12,1.2);for(let w=0;w<6;w++)g.box("lit",922163,0,R+.5+w*.5,.57,1.3,.36,.05),g.box("glow",w%2?3007176:10841087,-.5,R+.5+w*.5,.61,.08,.08,.03),g.box("glow",8181503,.15,R+.5+w*.5,.61,.5,.05,.03)});{let N=new Te,k=new $t({color:15328511,toneMapped:!1});for(let[w,lt,J]of[[-1.1,0,.8],[0,.45,1.05],[1.15,.05,.85],[.1,-.25,1]]){let ut=new Rt(new Zn(J,14,10),k);ut.position.set(w,lt,0),N.add(ut)}N.scale.set(1,.8,.8),N.position.set(-13.6,R+7.2,3.2),N.userData.y0=N.position.y,W(N,{type:"bob",amp:.35,sp:.8,ph:0}),C.add(N);let st=new an(new je({map:a,color:10841087,transparent:!0,opacity:.55,blending:ve,depthWrite:!1}));st.scale.set(7,4.4,1),st.position.set(-13.6,R+7.2,3),C.add(st)}{let N=new Te,k=new $t({color:3007176,toneMapped:!1});for(let w of[-1,1]){let lt=new Rt(new Oe(.95,.12,8,40),k);lt.position.x=w*.95,N.add(lt)}N.position.set(14.2,R+7,1.6),N.userData.y0=N.position.y,W(N,{type:"spin",sp:.9,bob:.3}),C.add(N);let st=new an(new je({map:a,color:3007176,transparent:!0,opacity:.4,blending:ve,depthWrite:!1}));st.scale.set(6,3.6,1),st.position.set(14.2,R+7,1.4),C.add(st)}[[14961958,-9.9,9.4],[2713073,-8.3,10.4],[16244510,8.6,10.4],[16777215,10,9.4]].forEach(([N,k,st],w)=>{let lt=new Rt(new ke(.9,.9,.9),new $t({color:N,toneMapped:!1}));lt.position.set(k,R+st-1.2,-1),lt.userData.y0=lt.position.y,W(lt,{type:"spin",sp:.6+w*.1,bob:.25,ph:w}),C.add(lt)});for(let[N,k,st,w]of[[-10.6,7.4,.5,"stack"],[14.6,1,-.5,"high"]]){g.cyl("lit",2894434,N,R+.2,k,.9,.4),g.cyl("lit",4872864,N,R+1.3,k,.1,2.2);let lt=ue(Mf(w),2.6,3.65,N,R+3.6,k,st,{transparent:!1});C.add(lt),g.local(N,R+3.6,k,st,()=>{g.box("glow",9403391,0,3.65/2,.02,2.6+.14,.07,.05),g.box("glow",9403391,0,-3.65/2,.02,2.6+.14,.07,.05),g.box("glow",9403391,-2.6/2,0,.02,.07,3.65,.05),g.box("glow",9403391,2.6/2,0,.02,.07,3.65,.05)})}for(let[N,k]of[[-9,5.8],[12,4],[5,7.8]]){g.cyl("lit",2894434,N,R+.3,k,.5,.6);for(let st=0;st<6;st++){let w=st*1.05;g.cone("lit",4181914,N+Math.cos(w)*.18,R+.95,k+Math.sin(w)*.18,.14,.9+st%3*.2,Math.cos(w)*.35,-Math.sin(w)*.35)}}let D=d(C,g,{x:9.4,z:6.2,ry:-.5,title:"NupaStack Website \u2013 3D Enhancement",accent:"#a890ff",accentHex:10841087});Z.push(D.hit),C.add(v.build("lit",xr()),v.build("glow",_r()));let z=u(8,.9,12166399);z.scale.z=.8,C.add(z);let V=new Rt(new on(8,8,9,14).scale(1,1,.8),new $t);V.visible=!1,V.position.y=5,V.userData.kind="model",C.add(V),Z.push(V);let K=Za(C),j=[];return K.traverse(N=>{N.userData.anim&&j.push(N)}),{key:"nupa",group:K,picks:Z,hover:z,desk:D,cam:{x:0,y:5,d:27},anims:j}})()]:[x(),_()];p.forEach(v=>{v.group.visible=!1,i.add(v.group)});let S=0,y=-1,E=1,U=1,A=.5,L=-1e9;p[0].group.visible=!0;let Y=v=>1-Math.pow(1-v,3);return{scene:i,rooms:p,get current(){return S},setRoom(v,g=1,C=!1){if(!(v===S&&E>=1)){if(C){p.forEach((Z,R)=>{Z.group.visible=R===v,Z.group.position.x=0}),S=v,E=1;return}E<1&&p.forEach((Z,R)=>{Z.group.visible=R===S,Z.group.position.x=0}),y=S,S=v,U=g,E=0,p[S].group.visible=!0}},update(v,g,C,Z){for(let P of o)P(v,g);let R=p[S];if(R.anims){performance.now()-L>2200&&(A+=g*.35);for(let P of R.anims){let H=P.userData.anim;H.type==="bld"?P.rotation.y=A:H.type==="bob"?P.position.y=P.userData.y0+Math.sin(v*H.sp+(H.ph||0))*H.amp:H.type==="spin"&&(P.rotation.y=v*H.sp,P.rotation.x=v*H.sp*.5,H.bob&&(P.position.y=P.userData.y0+Math.sin(v*1.1+(H.ph||0))*H.bob))}}if(E<1){E=Math.min(1,E+g*1.6);let P=Y(E);p[y].group.position.x=-U*40*P,p[S].group.position.x=U*40*(1-P),E>=1&&(p[y].group.visible=!1,p[y].group.position.x=0,p[S].group.position.x=0)}p.forEach((P,H)=>{let $=H===S&&C?.55+.15*Math.sin(v*4):0;P.hover.material.opacity+=($-P.hover.material.opacity)*Math.min(1,g*8)}),p.forEach((P,H)=>{P.group.visible&&P.desk.update(v,H===S&&Z)})},pick(v){let g=v.intersectObjects(p[S].picks,!1);if(!g.length)return null;let C=g.map(Z=>Z.object.userData.kind);return C.includes("laptop")?"laptop":C.includes("bld")?"bld":C[0]},dragBld(v){A+=v,L=performance.now()},transitioning:()=>E<1}}var Yt=s=>document.querySelector(s),_n=Yt("#scene"),zi=matchMedia("(pointer:coarse)").matches,oo=zi||Math.min(innerWidth,innerHeight)<600,Pf=matchMedia("(prefers-reduced-motion: reduce)").matches,lo=50,Mr=1.2,mi;try{mi=new tr({canvas:_n,antialias:!oo,powerPreference:"high-performance",stencil:!1})}catch(s){throw Yt("#loader-text").textContent="Your browser/device does not support WebGL, so the 3D scene cannot start.",Yt("#loader-bar").classList.add("hidden"),s}mi.setClearColor($a);location.search.includes("debug")&&(window.__r=mi);var ac=Math.min(window.devicePixelRatio||1,oo?1.5:2),hi=ac,Lf=new vs,le=new Ze(lo,1,1,1600),Ke={yaw:0,pitch:.5,tx:0,ty:1.5,tz:3,zoom:1},Ee={...Ke},If=60,to=null,ki="home",Tr=-99,Un=!1,te={x:0,y:0,nx:0,ny:0,moved:!1,inside:!1},gn={x:0,y:0},G_=()=>{let s=le.aspect;return s>=1.2?1:mn.clamp(.42+(s-.5)/.7*.58,.42,1)},V_=()=>{let s=le.aspect;return Math.max(33/(Math.tan(lo*Math.PI/360)*s),40)*G_()*Mr},Df=()=>le.aspect<1.2?Math.pow(1.2/le.aspect,.65):1,Sr={home:{yaw:0,pitch:.31,tx:0,ty:2.5,tz:4},about:{yaw:0,pitch:.24,tx:0,ty:4.2,tz:3,d:30},nupa:{yaw:0,pitch:.26,tx:0,ty:4.4,tz:-9,d:36},sliit:{yaw:.5,pitch:.27,tx:-20,ty:3.6,tz:-3.5,d:31},labs:{yaw:-.5,pitch:.27,tx:20,ty:3.6,tz:-3.5,d:31},sliitDoor:{yaw:.52,pitch:.1,tx:-18.6,ty:2.6,tz:-.9,d:9},nupaDoor:{yaw:0,pitch:.1,tx:0,ty:2.6,tz:-7,d:9},labsDoor:{yaw:-.52,pitch:.1,tx:18.4,ty:2.6,tz:-.6,d:9}};function Ps(s){let t=Sr[s];t&&(ki=s,Ee.yaw=t.yaw,Ee.pitch=t.pitch,Ee.tx=t.tx,Ee.ty=t.ty,Ee.tz=t.tz,Ee.zoom=1,to=t.d?t.d*Df()*Mr:null,Tr=performance.now()/1e3,document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("is-active",e.dataset.view===s)))}var ja=Yt("#panel"),Er=!1;function tc(s){let t=Ve.places[s];if(!t)return;let e=n=>`<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${n}</span>`;Yt("#p-kicker").textContent=t.kicker,Yt("#p-title").textContent=t.title,Yt("#p-text").textContent=t.text,Yt("#p-points").innerHTML=(t.points||[]).map(n=>`<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span><span>${n}</span></li>`).join(""),Yt("#p-projects").innerHTML=(t.projects||[]).map(n=>`<div class="rounded-2xl border border-white/10 bg-white/5 p-4"><div class="flex items-start justify-between gap-3"><h3 class="text-sm font-semibold leading-snug">${n.title}</h3>${n.year?`<span class="shrink-0 text-xs text-cyan-300">${n.year}</span>`:""}</div>${n.bullets?`<ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-white/75">${n.bullets.map(i=>`<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300"></span><span>${i}</span></li>`).join("")}</ul>`:""}${n.stack?`<div class="mt-3 flex flex-wrap gap-1.5">${n.stack.map(i=>`<span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px]">${i}</span>`).join("")}</div>`:""}${(n.details||[]).map(i=>`<p class="mt-2 text-xs leading-relaxed text-white/75"><b class="text-white/90">${i.heading}:</b> ${i.items?i.items.join(" \xB7 "):i.text}</p>`).join("")}${n.href?`<a href="${n.href}" target="_blank" rel="noopener" class="mt-3 inline-block text-xs font-semibold text-cyan-300 hover:underline">Live site \u2197</a>`:""}</div>`).join(""),Yt("#p-groups").innerHTML=(t.groups||[]).map(n=>`<div><p class="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">${n.title}</p><div class="flex flex-wrap gap-2">${n.items.map(e).join("")}</div></div>`).join(""),Yt("#p-tags").innerHTML=(t.tags||[]).map(e).join(""),Yt("#p-buttons").innerHTML=(t.buttons||[]).map(n=>n.action?`<button data-action="${n.action}" class="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/20">${n.label}</button>`:`<a href="${Ve.links[n.href]||n.href}" target="_blank" rel="noopener" class="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#0b1230] transition hover:brightness-110">${n.label}</a>`).join(""),ja.querySelectorAll("[data-action]").forEach(n=>n.addEventListener("click",()=>gi({lab:"labsLab",sliitlab:"sliitLab",nupalab:"nupaLab"}[n.dataset.action]))),ja.scrollTop=0,ja.dataset.open="true",Er=!0}function Uf(){ja.dataset.open="false",Er=!1}function gi(s){if(Hi)return;if(s==="sliitInfo"){if(De==="lab")return;Ps("sliit"),tc("sliit");return}let t={labsLab:"lab",sliitLab:"sliit",nupaLab:"nupa"}[s];if(t){if(De==="lab"){t!==cc&&ao().then(()=>lc(!1,0,t));return}lc(!1,0,t);return}if(s==="nupaInfo"){if(De==="lab")return;Ps("nupa"),tc("nupa");return}if(s==="labsInfo"&&(s="labs"),De==="lab"){ao().then(()=>{s!=="home"&&gi(s)});return}Ps(s),s==="home"?Uf():tc(s)}document.querySelectorAll("[data-view]").forEach(s=>s.addEventListener("click",()=>gi(s.dataset.view)));Yt("#p-close").addEventListener("click",()=>gi("home"));addEventListener("keydown",s=>{if(s.key==="Escape"){pi?co():De==="lab"?ao():gi("home");return}De==="lab"&&!pi&&(s.key==="ArrowRight"&&ro(1),s.key==="ArrowLeft"&&ro(-1))});Yt("#social-gh").href=Ve.links.github;Yt("#social-in").href=Ve.links.linkedin;Yt("#social-mail").href=Ve.links.email;document.querySelectorAll("[data-name]").forEach(s=>s.textContent=Ve.name);document.title=`${Ve.name} \u2013 ${Ve.tagline}`;var Jn=new Map,Qe=null,vr=0,oc=1;_n.addEventListener("pointerdown",s=>{if(_n.setPointerCapture(s.pointerId),Jn.set(s.pointerId,{x:s.clientX,y:s.clientY}),Qe={x:s.clientX,y:s.clientY,t:performance.now(),moved:0,bld:De==="lab"&&Jn.size===1&&ce&&!pi&&hc(s.clientX,s.clientY)==="bld"},Jn.size===2){let[t,e]=[...Jn.values()];vr=Math.hypot(t.x-e.x,t.y-e.y),oc=De==="lab"?Se.zoom:Ee.zoom}Un=!0,Tr=performance.now()/1e3,Yt("#hint").classList.add("opacity-0")});_n.addEventListener("pointermove",s=>{te.x=s.clientX,te.y=s.clientY,te.nx=s.clientX/innerWidth*2-1,te.ny=s.clientY/innerHeight*2-1,te.moved=!0,te.inside=!0;let t=Jn.get(s.pointerId);if(!t)return;let e=s.clientX-t.x,n=s.clientY-t.y;if(t.x=s.clientX,t.y=s.clientY,Jn.size===2){let[i,r]=[...Jn.values()],o=Math.hypot(i.x-r.x,i.y-r.y);vr&&(De==="lab"?Se.zoom=mn.clamp(oc*(vr/o),.7,1.2):Ee.zoom=mn.clamp(oc*(vr/o),.45,1.25))}else Qe&&De==="lab"&&Qe.bld?(Qe.moved+=Math.abs(e)+Math.abs(n),Qe.moved>4&&(ce.dragBld(e*.012),_n.style.cursor="grabbing")):Qe&&De==="lab"?(Qe.moved+=Math.abs(e)+Math.abs(n),Se.dyaw=mn.clamp(Se.dyaw-e*.004,-.45,.45),Se.dpitch=mn.clamp(Se.dpitch+n*.003,-.05,.22)):Qe&&(Qe.moved+=Math.abs(e)+Math.abs(n),Ee.yaw=mn.clamp(Ee.yaw-e*.0055,Sr[ki].yaw-.95,Sr[ki].yaw+.95),Ee.pitch=mn.clamp(Ee.pitch+n*.0042,.16,1.05));Tr=performance.now()/1e3});var Nf=s=>{if(Jn.delete(s.pointerId),vr=0,Jn.size||(Un=!1),Qe&&Qe.moved<8&&performance.now()-Qe.t<450&&s.type==="pointerup"){if(De==="lab"){j_(s.clientX,s.clientY),Qe=null;return}let t=Of(s.clientX,s.clientY);t?gi(t.go||t.key):Er&&ki!=="home"&&gi("home")}Qe=null};_n.addEventListener("pointerup",Nf);_n.addEventListener("pointercancel",Nf);_n.addEventListener("pointerleave",()=>{te.inside=!1});_n.addEventListener("wheel",s=>{if(s.preventDefault(),De==="lab"){Se.zoom=mn.clamp(Se.zoom*Math.exp(s.deltaY*.0011),.7,1.2);return}Ee.zoom=mn.clamp(Ee.zoom*Math.exp(s.deltaY*.0011),.45,1.25),Tr=performance.now()/1e3},{passive:!1});var eo=new Ga,no=new pt,Ls,Tf=null;function Of(s,t){no.set(s/innerWidth*2-1,-(t/innerHeight)*2+1),eo.setFromCamera(no,le);let e=eo.intersectObjects(Ls.pickables.map(i=>i.mesh),!1);if(!e.length)return null;let n=i=>Ls.pickables.find(r=>r.mesh===i.object);return n(e.find(i=>n(i).priority)||e[0])}var xn=Yt("#tip"),ec=0,nc=0,ic=0,ui=1,fi=1;function io(){ui=innerWidth,fi=innerHeight,mi.setPixelRatio(hi),mi.setSize(ui,fi,!1),le.aspect=ui/fi,If=V_(),Ls&&Ls.setPointScale(fi*hi,lo),to&&(to=Sr[ki].d*Df()*Mr)}addEventListener("resize",io);var sc=0,Ja=0,wf=0,Ka=0;function W_(s){if(sc+=s,Ja++,Ja<45)return;let t=sc/Ja;sc=0,Ja=0,t>.028&&hi>.7?(hi=Math.max(.7,hi-.2),wf++,Ka=0,io()):t<.0185&&hi<ac&&wf<6?++Ka>4&&(hi=Math.min(ac,hi+.15),Ka=0,io()):Ka=0}var Af=new ka,Rf=!1,X_=0;function q_(){let s=Math.min(Af.getDelta(),.1),t=Af.elapsedTime,e=performance.now()/1e3;if(De==="lab"?ey(s,t):Y_(s,t,e),W_(s),!Rf&&++X_===2){Rf=!0;let n=Yt("#loader");n.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>n.remove(),900),setTimeout(()=>Yt("#hint").classList.add("opacity-0"),9e3),window.__ready=!0}}function Y_(s,t,e){let n=e-Tr,i=0;!Pf&&!Un&&ki==="home"&&(i=Math.sin(t*.22)*.035,le.aspect<1.1&&n>2.5&&(Ee.tx=Math.sin(t*.13)*15,Ee.yaw=Math.sin(t*.13)*.12));let r=!zi&&te.inside&&!Un?te.nx:0,o=!zi&&te.inside&&!Un?te.ny:0;gn.x+=(r-gn.x)*Math.min(1,s*3),gn.y+=(o-gn.y)*Math.min(1,s*3);let a=1-Math.exp(-s*4.5);for(let m of["yaw","pitch","tx","ty","tz","zoom"])Ke[m]+=(Ee[m]-Ke[m])*a;let l=(to||If)*Ke.zoom,c=Ke.yaw+i-gn.x*.05,h=Ke.pitch+gn.y*.025,u=Math.cos(h);le.position.set(Ke.tx+l*Math.sin(c)*u,Ke.ty+l*Math.sin(h),Ke.tz+l*Math.cos(c)*u),le.lookAt(Ke.tx,Ke.ty,Ke.tz);let f=Er&&ui>=900?230:0,d=Er&&ui<900?fi*.2:0;ec+=(f-ec)*a,nc+=(d-nc)*a,ic+=((ki==="home"&&le.aspect>=1.2?0:le.aspect<1.2?.62:.5)-ic)*a;let x=ui*Mr,_=fi*Mr;if(le.setViewOffset(x,_,(x-ui)/2+ec,(_-fi)*ic+nc,ui,fi),le.updateProjectionMatrix(),te.moved&&!zi&&!Un){te.moved=!1;let m=te.inside?Of(te.x,te.y):null;Tf=m?m.key:null,_n.style.cursor=m?"pointer":Un?"grabbing":"grab",m?(xn.textContent=m.label,xn.style.transform=`translate(${te.x+16}px, ${te.y+14}px)`,xn.classList.remove("opacity-0")):xn.classList.add("opacity-0")}Ls.update(t,s,le,Tf),mi.render(Lf,le)}var Ff=46,De="island",ce=null,cc="lab",Hi=!1,Qa=!1,yr=!1,$_=-1,Se={yaw:0,pitch:0,dyaw:0,dpitch:0,zoom:1},so=Yt("#fade"),Bf=Yt("#lab-ui"),Z_=Yt("#lab-card"),br=s=>new Promise(t=>setTimeout(t,s)),rc={},J_=()=>[...Ve.places.labs.projects,...Ve.places.nupa.projects||[]],zf=s=>J_().find(t=>t.room===s);var wr=()=>Z_.classList.add("opacity-0");function Hf(){let s=ce.rooms[ce.current],t=zf(s.key),e=ce.rooms.length;Yt("#lab-title").textContent=e>1?`${ce.current+1} / ${e} \xB7 ${t?t.title:s.key}`:t?t.title:s.key,["#lab-prev","#lab-next","#lab-dots"].forEach(n=>Yt(n).classList.toggle("hidden",e<2)),Yt("#lab-dots").innerHTML=ce.rooms.map((n,i)=>`<span class="h-2 rounded-full transition-all ${i===ce.current?"w-6 bg-cyan-300":"w-2 bg-white/40"}"></span>`).join(""),$_=-1,wr()}function ro(s){!ce||ce.transitioning()||(ce.setRoom((ce.current+s+ce.rooms.length)%ce.rooms.length,s),Se.dyaw=0,Se.dpitch=0,Hf())}Yt("#lab-prev").addEventListener("click",()=>ro(-1));Yt("#lab-next").addEventListener("click",()=>ro(1));Yt("#lab-exit").addEventListener("click",()=>ao());async function lc(s=!1,t=0,e="lab"){De==="lab"||Hi||(Hi=!0,Uf(),cc=e,s||(Ps({lab:"labsDoor",sliit:"sliitDoor",nupa:"nupaDoor"}[e]),document.querySelectorAll("[data-view]").forEach(n=>n.classList.toggle("is-active",n.dataset.view==={lab:"labs",sliit:"sliit",nupa:"nupa"}[e])),await br(Pf?150:1150)),so.classList.remove("opacity-0"),await br(s?0:480),rc[e]||(rc[e]=Ef({mobile:oo,theme:e})),ce=rc[e],ce.setRoom(t,1,!0),De="lab",le.fov=Ff,le.clearViewOffset(),le.updateProjectionMatrix(),Object.assign(Se,{yaw:0,pitch:0,dyaw:0,dpitch:0,zoom:1}),Bf.classList.remove("hidden"),Yt("#mnav").classList.add("hidden"),Yt("#hint").classList.add("opacity-0"),xn.classList.add("opacity-0"),Hf(),_n.style.cursor="grab",await br(60),so.classList.add("opacity-0"),Hi=!1)}async function ao(){De!=="lab"||Hi||(Hi=!0,so.classList.remove("opacity-0"),await br(480),De="island",le.fov=lo,le.updateProjectionMatrix(),Bf.classList.add("hidden"),Yt("#mnav").classList.remove("hidden"),wr(),co(),xn.classList.add("opacity-0"),Ps("home"),Object.assign(Ke,Ee),Qa=yr=!1,await br(60),so.classList.add("opacity-0"),Hi=!1)}function hc(s,t){return no.set(s/innerWidth*2-1,-(t/innerHeight)*2+1),eo.setFromCamera(no,le),ce.pick(eo)}function K_(s){s&&s.href&&window.open(s.href,"_blank","noopener")}function j_(s,t){let e=hc(s,t),n=zf(ce.rooms[ce.current].key);e==="laptop"?(wr(),ty(n)):(e==="model"||e==="bld")&&K_(n)}var di=Yt("#reader"),Cf=Yt("#r-body"),pi=!1;function Q_(s){let t=r=>`<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${r}</span>`,e=(r,o)=>`<h4 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-300">${r}</h4>${o}`,n='<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span>';return`<p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">${{lab:"My Projects Lab",sliit:"SLIIT University \xB7 Student Projects",nupa:"NupaStack \xB7 Project Showcase"}[cc]}${s.year?" \xB7 "+s.year:""}</p>
    <h3 class="mt-1 text-2xl font-bold leading-tight sm:text-3xl">${s.title}</h3>
    ${s.bullets?e("About this project",`<ul class="space-y-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">${s.bullets.map(r=>`<li class="flex gap-3">${n}<span>${r}</span></li>`).join("")}</ul>`):""}
    ${(s.details||[]).map(r=>e(r.heading,r.items?`<ul class="space-y-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">${r.items.map(o=>`<li class="flex gap-3">${n}<span>${o}</span></li>`).join("")}</ul>`:`<p class="text-sm leading-relaxed text-white/85 sm:text-[15px]">${r.text}</p>`)).join("")}
    ${s.stack?e("Tech stack",`<div class="flex flex-wrap gap-2">${s.stack.map(t).join("")}</div>`):""}
    ${s.href?`<div class="mt-8"><a href="${s.href}" target="_blank" rel="noopener" class="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#0b1230] transition hover:brightness-110">Visit live website \u2197</a></div>`:""}`}function ty(s){!s||pi||(Cf.innerHTML=Q_(s),Cf.scrollTop=0,Yt("#r-url").textContent=s.href?s.href.replace(/^https?:\/\//,""):"project-details.md",pi=!0,wr(),xn.classList.add("opacity-0"),di.classList.remove("hidden"),di.classList.add("flex"),requestAnimationFrame(()=>requestAnimationFrame(()=>di.classList.remove("opacity-0"))))}function co(){pi&&(pi=!1,di.classList.add("opacity-0"),setTimeout(()=>{pi||(di.classList.add("hidden"),di.classList.remove("flex"))},300))}Yt("#r-close").addEventListener("click",co);di.addEventListener("click",s=>{s.target===di&&co()});function ey(s,t){let e=1-Math.exp(-s*5),n=ce.rooms[ce.current];Se.yaw+=(Se.dyaw-Se.yaw)*e,Se.pitch+=(Se.dpitch-Se.pitch)*e;let i=!zi&&te.inside&&!Un?te.nx:0,r=!zi&&te.inside&&!Un?te.ny:0;gn.x+=(i-gn.x)*Math.min(1,s*3),gn.y+=(r-gn.y)*Math.min(1,s*3);let o=le.aspect,a=mn.lerp(9.5,15.5,mn.clamp((o-.6)/.6,0,1)),l=Math.max(n.cam.d,a/(Math.tan(Ff*Math.PI/360)*o))*Se.zoom,c=Se.yaw-gn.x*.04,h=.06+Se.pitch+gn.y*.02,u=Math.cos(h);if(le.position.set(l*Math.sin(c)*u,n.cam.y+l*Math.sin(h),l*Math.cos(c)*u),le.lookAt(0,n.cam.y,0),te.moved&&!zi&&!Un&&!ce.transitioning()){te.moved=!1;let f=te.inside?hc(te.x,te.y):null;yr=f==="laptop",Qa=f==="model"||f==="bld",_n.style.cursor=f==="bld"?"grab":f?"pointer":"grab",yr?(xn.textContent="Read project details",xn.style.transform=`translate(${te.x+16}px, ${te.y+14}px)`,xn.classList.remove("opacity-0")):xn.classList.add("opacity-0")}ce.transitioning()&&(Qa=yr=!1,wr(),xn.classList.add("opacity-0")),ce.update(t,s,Qa,yr),mi.render(ce.scene,le)}async function ny(){let s=Yt("#loader-fill");s.style.width="15%";try{await Promise.race([document.fonts.load("700 40px Poppins"),new Promise(n=>setTimeout(n,1200))])}catch{}s.style.width="45%",await new Promise(n=>requestAnimationFrame(()=>setTimeout(n,0))),Ls=Vu(Lf,{mobile:oo}),s.style.width="90%",io(),Ps("home"),Object.assign(Ke,Ee);let t=new URLSearchParams(location.search),e=t.get("view");e&&Sr[e]&&!e.endsWith("Door")&&(gi(e),Object.assign(Ke,Ee)),t.has("lab")&&await lc(!0,+t.get("lab")||0,["sliit","nupa"].includes(t.get("hall"))?t.get("hall"):"lab"),mi.setAnimationLoop(q_)}ny();})();

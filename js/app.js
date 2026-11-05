(()=>{var Lf=0,cc=1,If=2;var Zh=1,Uf=2,kn=3,ri=0,De=1,Ye=2;var ni=0,hs=1,be=2,hc=3,uc=4,Df=5,bi=100,Nf=101,Of=102,fc=103,dc=104,Ff=200,Bf=201,zf=202,Hf=203,Xo=204,qo=205,kf=206,Vf=207,Gf=208,Wf=209,Xf=210,qf=211,Yf=212,$f=213,Zf=214,Jf=0,Kf=1,jf=2,na=3,Qf=4,td=5,ed=6,nd=7,Ol=0,id=1,sd=2,ii=0,rd=1,ad=2,od=3,ld=4,cd=5,hd=6;var Jh=300,ds=301,ps=302,Yo=303,$o=304,Fa=306,Ri=1e3,_n=1001,Zo=1002,ke=1003,pc=1004;var co=1005;var sn=1006,ud=1007;var Xs=1008;var si=1009,fd=1010,dd=1011,Fl=1012,Kh=1013,ti=1014,ei=1015,qs=1016,jh=1017,Qh=1018,Ti=1020,pd=1021,yn=1023,md=1024,gd=1025,wi=1026,ms=1027,xd=1028,tu=1029,_d=1030,eu=1031,nu=1033,ho=33776,uo=33777,fo=33778,po=33779,mc=35840,gc=35841,xc=35842,_c=35843,iu=36196,yc=37492,vc=37496,Mc=37808,bc=37809,Sc=37810,Ec=37811,Tc=37812,wc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Lc=37818,Ic=37819,Uc=37820,Dc=37821,mo=36492,Nc=36494,Oc=36495,yd=36283,Fc=36284,Bc=36285,zc=36286;var ia=2300,sa=2301,go=2302,Hc=2400,kc=2401,Vc=2402;var su=3e3,Ai=3001,vd=3200,Md=3201,ru=0,bd=1,rn="",xe="srgb",Wn="srgb-linear",Bl="display-p3",Ba="display-p3-linear",ra="linear",se="srgb",aa="rec709",oa="p3";var Hi=7680;var Gc=519,Sd=512,Ed=513,Td=514,au=515,wd=516,Ad=517,Rd=518,Cd=519,Jo=35044;var Wc="300 es",Ko=1035,Gn=2e3,la=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Bs=Math.PI/180,Ys=180/Math.PI;function Rn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function zl(s,t){return(s%t+t)%t}function Pd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ld(s,t,e){return s!==t?(e-s)/(t-s):0}function zs(s,t,e){return(1-e)*s+e*t}function Id(s,t,e,n){return zs(s,t,1-Math.exp(-e*n))}function Ud(s,t=1){return t-Math.abs(zl(s,t*2)-t)}function Dd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Od(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Fd(s,t){return s+Math.random()*(t-s)}function Bd(s){return s*(.5-Math.random())}function zd(s){s!==void 0&&(Xc=s);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(s){return s*Bs}function kd(s){return s*Ys}function jo(s){return(s&s-1)===0&&s!==0}function Vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ca(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var fn={DEG2RAD:Bs,RAD2DEG:Ys,generateUUID:Rn,clamp:Ce,euclideanModulo:zl,mapLinear:Pd,inverseLerp:Ld,lerp:zs,damp:Id,pingpong:Ud,smoothstep:Dd,smootherstep:Nd,randInt:Od,randFloat:Fd,randFloatSpread:Bd,seededRandom:zd,degToRad:Hd,radToDeg:kd,isPowerOfTwo:jo,ceilPowerOfTwo:Vd,floorPowerOfTwo:ca,setQuaternionFromProperEuler:Gd,normalize:jt,denormalize:An},dt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],p=i[3],m=i[6],b=i[1],v=i[4],T=i[7],R=i[2],x=i[5],A=i[8];return r[0]=o*y+a*b+l*R,r[3]=o*p+a*v+l*x,r[6]=o*m+a*T+l*A,r[1]=c*y+h*b+u*R,r[4]=c*p+h*v+u*x,r[7]=c*m+h*T+u*A,r[2]=f*y+d*b+g*R,r[5]=f*p+d*v+g*x,r[8]=f*m+d*T+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(a*n-i*o)*y,t[3]=f*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xo=new Wt;function ou(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wd(){let s=ha("canvas");return s.style.display="block",s}var qc={};function Hs(s){s in qc||(qc[s]=!0,console.warn(s))}var Yc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[Wn]:{transfer:ra,primaries:aa,toReference:s=>s,fromReference:s=>s},[xe]:{transfer:se,primaries:aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ba]:{transfer:ra,primaries:oa,toReference:s=>s.applyMatrix3($c),fromReference:s=>s.applyMatrix3(Yc)},[Bl]:{transfer:se,primaries:oa,toReference:s=>s.convertSRGBToLinear().applyMatrix3($c),fromReference:s=>s.applyMatrix3(Yc).convertLinearToSRGB()}},Xd=new Set([Wn,Ba]),Qt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Xd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Sr[t].toReference,i=Sr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Sr[s].primaries},getTransfer:function(s){return s===rn?ra:Sr[s].transfer}};function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ki,ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=ha("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(yo(i[o].image)):r.push(yo(i[o]))}else r=yo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function yo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,an=class s extends ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=sn,o=Xs,a=yn,l=si,c=s.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Rn(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?xe:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?Ai:su}set encoding(t){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ai?xe:rn}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Jh;an.DEFAULT_ANISOTROPY=1;var Re=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,T=(d+1)/2,R=(m+1)/2,x=(h+f)/4,A=(u+y)/4,B=(g+p)/4;return v>T&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=x/n,r=A/n):T>R?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=x/i,r=B/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=B/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-y)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?xe:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},da=class extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*y,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let R=Math.sqrt(v),x=Math.atan2(R,m*b);p=Math.sin(p*x)/R,a=Math.sin(a*x)/R}let T=a*b;if(l=l*p+f*T,c=c*p+d*T,h=h*p+g*T,u=u*p+y*T,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new L,Zc=new Qe,qn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),Tr.subVectors(this.max,Cs),Vi.subVectors(t.a,Cs),Gi.subVectors(t.b,Cs),Wi.subVectors(t.c,Cs),Zn.subVectors(Gi,Vi),Jn.subVectors(Wi,Gi),xi.subVectors(Vi,Wi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-xi.y,xi.x,0];return!Mo(e,Vi,Gi,Wi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Vi,Gi,Wi,Tr))?!1:(wr.crossVectors(Zn,Jn),e=[wr.x,wr.y,wr.z],Mo(e,Vi,Gi,Wi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new L,new L,new L,new L,new L,new L,new L,new L],mn=new L,Er=new qn,Vi=new L,Gi=new L,Wi=new L,Zn=new L,Jn=new L,xi=new L,Cs=new L,Tr=new L,wr=new L,_i=new L;function Mo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_i.fromArray(s,r);let a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $d=new qn,Ps=new L,bo=new L,Yn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(bo)),this.expandByPoint(Ps.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new L,So=new L,Ar=new L,Kn=new L,Eo=new L,Rr=new L,To=new L,gs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){So.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(So);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ar),a=Kn.dot(this.direction),l=-Kn.dot(Ar),c=Kn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(So).addScaledVector(Ar,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,r){Eo.subVectors(e,t),Rr.subVectors(n,t),To.crossVectors(Eo,Rr);let o=this.direction.dot(To),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let l=a*this.direction.dot(Rr.crossVectors(Kn,Rr));if(l<0)return null;let c=a*this.direction.dot(Eo.cross(Kn));if(c<0||l+c>o)return null;let h=-a*Kn.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,y,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,y,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),jn.crossVectors(n,Ke),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),jn.crossVectors(n,Ke)),jn.normalize(),Cr.crossVectors(Ke,jn),i[0]=jn.x,i[4]=Cr.x,i[8]=Ke.x,i[1]=jn.y,i[5]=Cr.y,i[9]=Ke.y,i[2]=jn.z,i[6]=Cr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],b=n[3],v=n[7],T=n[11],R=n[15],x=i[0],A=i[4],B=i[8],_=i[12],E=i[1],z=i[5],K=i[9],it=i[13],I=i[2],O=i[6],W=i[10],N=i[14],k=i[3],Y=i[7],st=i[11],at=i[15];return r[0]=o*x+a*E+l*I+c*k,r[4]=o*A+a*z+l*O+c*Y,r[8]=o*B+a*K+l*W+c*st,r[12]=o*_+a*it+l*N+c*at,r[1]=h*x+u*E+f*I+d*k,r[5]=h*A+u*z+f*O+d*Y,r[9]=h*B+u*K+f*W+d*st,r[13]=h*_+u*it+f*N+d*at,r[2]=g*x+y*E+p*I+m*k,r[6]=g*A+y*z+p*O+m*Y,r[10]=g*B+y*K+p*W+m*st,r[14]=g*_+y*it+p*N+m*at,r[3]=b*x+v*E+T*I+R*k,r[7]=b*A+v*z+T*O+R*Y,r[11]=b*B+v*K+T*W+R*st,r[15]=b*_+v*it+T*N+R*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+y*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],b=u*p*c-y*f*c+y*l*d-a*p*d-u*l*m+a*f*m,v=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,T=h*y*c-g*u*c+g*a*d-o*y*d-h*a*m+o*u*m,R=g*u*l-h*y*l-g*a*f+o*y*f+h*a*p-o*u*p,x=e*b+n*v+i*T+r*R;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=b*A,t[1]=(y*f*r-u*p*r-y*i*d+n*p*d+u*i*m-n*f*m)*A,t[2]=(a*p*r-y*l*r+y*i*c-n*p*c-a*i*m+n*l*m)*A,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*A,t[4]=v*A,t[5]=(h*p*r-g*f*r+g*i*d-e*p*d-h*i*m+e*f*m)*A,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*A,t[8]=T*A,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*m-e*u*m)*A,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=R*A,t[13]=(h*y*i-g*u*i+g*n*f-e*y*f-h*n*p+e*u*p)*A,t[14]=(g*a*i-o*y*i-g*n*l+e*y*l+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,b=l*c,v=l*h,T=l*u,R=n.x,x=n.y,A=n.z;return i[0]=(1-(y+m))*R,i[1]=(d+T)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(d-T)*x,i[5]=(1-(f+m))*x,i[6]=(p+b)*x,i[7]=0,i[8]=(g+v)*A,i[9]=(p-b)*A,i[10]=(1-(f+y))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Xi.set(i[0],i[1],i[2]).length(),o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);let c=1/r,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===Gn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===la)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Gn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,g,y;if(a===Gn)g=(o+r)*u,y=-2*u;else if(a===la)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new L,gn=new $t,Zd=new L(0,0,0),Jd=new L(1,1,1),jn=new L,Cr=new L,Ke=new L,Jc=new $t,Kc=new Qe,$n=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,jc=new L,qi=new Qe,Bn=new $t,Pr=new L,Ls=new L,jd=new L,Qd=new Qe,Qc=new L(1,0,0),th=new L(0,1,0),eh=new L(0,0,1),tp={type:"added"},ep={type:"removed"},_e=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new $n,n=new Qe,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Wt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ls,Pr,this.up):Bn.lookAt(Pr,Ls,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};_e.DEFAULT_UP=new L(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new L,zn=new L,wo=new L,Hn=new L,Yi=new L,$i=new L,nh=new L,Ao=new L,Ro=new L,Co=new L,Lr=!1,Ei=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),zn.subVectors(n,e),wo.subVectors(t,e);let o=xn.dot(xn),a=xn.dot(zn),l=xn.dot(wo),c=zn.dot(zn),h=zn.dot(wo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),zn.subVectors(t,e),xn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Yi.subVectors(i,n),$i.subVectors(r,n),Ao.subVectors(t,n);let l=Yi.dot(Ao),c=$i.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,i);let h=Yi.dot(Ro),u=$i.dot(Ro);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Yi,o);Co.subVectors(t,r);let d=Yi.dot(Co),g=$i.dot(Co);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return nh.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(nh,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(Yi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Po(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=zl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Po(o,r,t+1/3),this.g=Po(o,r,t),this.b=Po(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ce(Ie.r*255,0,255))*65536+Math.round(Ce(Ie.g*255,0,255))*256+Math.round(Ce(Ie.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,r=Ie.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=xe){Qt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Ir);let n=zs(Qn.h,Ir.h,e),i=zs(Qn.s,Ir.s,e),r=zs(Qn.l,Ir.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Pt;Pt.NAMES=lu;var np=0,Cn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=hs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},re=class extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new L,Ur=new dt,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jo&&(t.usage=this.usage),t}};var pa=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ma=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ip=0,nn=new $t,Lo=new _e,Zi=new L,je=new qn,Is=new qn,Ae=new L,te=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?ma:pa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(je.min,Is.min),je.expandByPoint(Ae),Ae.addVectors(je.max,Is.max),je.expandByPoint(Ae)):(je.expandByPoint(Is.min),je.expandByPoint(Is.max))}je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),Ae.add(Zi)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new L,h[E]=new L;let u=new L,f=new L,d=new L,g=new dt,y=new dt,p=new dt,m=new L,b=new L;function v(E,z,K){u.fromArray(i,E*3),f.fromArray(i,z*3),d.fromArray(i,K*3),g.fromArray(o,E*2),y.fromArray(o,z*2),p.fromArray(o,K*2),f.sub(u),d.sub(u),y.sub(g),p.sub(g);let it=1/(y.x*p.y-p.x*y.y);isFinite(it)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-y.y).multiplyScalar(it),b.copy(d).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(it),c[E].add(m),c[z].add(m),c[K].add(m),h[E].add(b),h[z].add(b),h[K].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,z=T.length;E<z;++E){let K=T[E],it=K.start,I=K.count;for(let O=it,W=it+I;O<W;O+=3)v(n[O+0],n[O+1],n[O+2])}let R=new L,x=new L,A=new L,B=new L;function _(E){A.fromArray(r,E*3),B.copy(A);let z=c[E];R.copy(z),R.sub(A.multiplyScalar(A.dot(z))).normalize(),x.crossVectors(B,z);let it=x.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=it}for(let E=0,z=T.length;E<z;++E){let K=T[E],it=K.start,I=K.count;for(let O=it,W=it+I;O<W;O+=3)_(n[O+0]),_(n[O+1]),_(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new he(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new $t,yi=new gs,Dr=new Yn,sh=new L,Ji=new L,Ki=new L,ji=new L,Io=new L,Nr=new L,Or=new dt,Fr=new dt,Br=new dt,rh=new L,ah=new L,oh=new L,zr=new L,Hr=new L,Nt=class extends _e{constructor(t=new te,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Io.fromBufferAttribute(u,t),o?Nr.addScaledVector(Io,h):Nr.addScaledVector(Io.sub(e),h))}e.add(Nr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Dr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Dr,sh)===null||yi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),yi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let T=b,R=v;T<R;T+=3){let x=a.getX(T),A=a.getX(T+1),B=a.getX(T+2);i=kr(this,m,t,n,c,h,u,x,A,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let b=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);i=kr(this,o,t,n,c,h,u,b,v,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let T=b,R=v;T<R;T+=3){let x=T,A=T+1,B=T+2;i=kr(this,m,t,n,c,h,u,x,A,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let b=p,v=p+1,T=p+2;i=kr(this,o,t,n,c,h,u,b,v,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function sp(s,t,e,n,i,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ri,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:s}}function kr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ji),s.getVertexPosition(l,Ki),s.getVertexPosition(c,ji);let h=sp(s,t,e,n,Ji,Ki,ji,zr);if(h){i&&(Or.fromBufferAttribute(i,a),Fr.fromBufferAttribute(i,l),Br.fromBufferAttribute(i,c),h.uv=Ei.getInterpolation(zr,Ji,Ki,ji,Or,Fr,Br,new dt)),r&&(Or.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),Br.fromBufferAttribute(r,c),h.uv1=Ei.getInterpolation(zr,Ji,Ki,ji,Or,Fr,Br,new dt),h.uv2=h.uv1),o&&(rh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,l),oh.fromBufferAttribute(o,c),h.normal=Ei.getInterpolation(zr,Ji,Ki,ji,rh,ah,oh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Ei.getNormal(Ji,Ki,ji,u.normal),h.face=u}return h}var on=class s extends te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(y,p,m,b,v,T,R,x,A,B,_){let E=T/A,z=R/B,K=T/2,it=R/2,I=x/2,O=A+1,W=B+1,N=0,k=0,Y=new L;for(let st=0;st<W;st++){let at=st*z-it;for(let pt=0;pt<O;pt++){let Q=pt*E-K;Y[y]=Q*b,Y[p]=at*v,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[p]=0,Y[m]=x>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(pt/A),u.push(1-st/B),N+=1}}for(let st=0;st<B;st++)for(let at=0;at<A;at++){let pt=f+at+O*st,Q=f+at+O*(st+1),U=f+(at+1)+O*(st+1),F=f+(at+1)+O*st;l.push(pt,Q,F),l.push(Q,U,F),k+=6}a.addGroup(d,k,_),d+=k,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){let t={};for(let e=0;e<s.length;e++){let n=xs(s[e]);for(let i in n)t[i]=n[i]}return t}function rp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cu(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}var ap={clone:xs,merge:He},op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ga=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ve=class extends ga{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qi=-90,ts=1,el=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(Qi,ts,t,e);i.layers=this.layers,this.add(i);let r=new Ve(Qi,ts,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Qi,ts,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Qi,ts,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xa=class extends an{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ai?xe:rn),this.texture=new xa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ni});r.uniforms.tEquirect.value=e;let o=new Nt(i,r),a=e.minFilter;return e.minFilter===Xs&&(e.minFilter=sn),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Uo=new L,cp=new L,hp=new Wt,Vn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Uo.subVectors(n,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hp.getNormalMatrix(t),i=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Yn,Vr=new L,Zs=class{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],y=i[10],p=i[11],m=i[12],b=i[13],v=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,p-d,T-m).normalize(),n[1].setComponents(l+r,f+c,p+d,T+m).normalize(),n[2].setComponents(l+o,f+h,p+g,T+b).normalize(),n[3].setComponents(l-o,f-h,p-g,T-b).normalize(),n[4].setComponents(l-a,f-u,p-y,T-v).normalize(),e===Gn)n[5].setComponents(l+a,f+u,p+y,T+v).normalize();else if(e===la)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function up(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=s.SHORT;else if(u instanceof Uint32Array)y=s.UNSIGNED_INT;else if(u instanceof Int32Array)y=s.INT;else if(u instanceof Int8Array)y=s.BYTE;else if(u instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let y=0,p=g.length;y<p;y++){let m=g[y];e?s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var tn=class s extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let v=0;v<c;v++){let T=v*u-r;g.push(T,-b,0),y.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let v=b+c*m,T=b+c*(m+1),R=b+1+c*(m+1),x=b+1+c*m;d.push(v,T,x),d.push(T,R,x)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Np=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
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
}`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,y0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,B0=`#define TOON
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
}`,z0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:fp,alphahash_pars_fragment:dp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:yp,batching_pars_vertex:vp,batching_vertex:Mp,begin_vertex:bp,beginnormal_vertex:Sp,bsdfs:Ep,iridescence_fragment:Tp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Ip,color_pars_vertex:Up,color_vertex:Dp,common:Np,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:zp,emissivemap_fragment:Hp,emissivemap_pars_fragment:kp,colorspace_fragment:Vp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:$p,fog_vertex:Zp,fog_pars_vertex:Jp,fog_fragment:Kp,fog_pars_fragment:jp,gradientmap_pars_fragment:Qp,lightmap_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:om,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:dm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:_m,map_fragment:ym,map_pars_fragment:vm,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Em,morphcolor_vertex:Tm,morphnormal_vertex:wm,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Im,normal_vertex:Um,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:Hm,premultiplied_alpha_fragment:km,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:Zm,shadowmask_pars_fragment:Jm,skinbase_vertex:Km,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:t0,specularmap_fragment:e0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:h0,background_vert:u0,background_frag:f0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:x0,depth_frag:_0,distanceRGBA_vert:y0,distanceRGBA_frag:v0,equirect_vert:M0,equirect_frag:b0,linedashed_vert:S0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:w0,meshlambert_vert:A0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:P0,meshnormal_vert:L0,meshnormal_frag:I0,meshphong_vert:U0,meshphong_frag:D0,meshphysical_vert:N0,meshphysical_frag:O0,meshtoon_vert:F0,meshtoon_frag:B0,points_vert:z0,points_frag:H0,shadow_vert:k0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},gt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},wn={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};wn.physical={uniforms:He([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Gr={r:0,b:0,g:0};function X0(s,t,e,n,i,r,o){let a=new Pt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(p,m){let b=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),b=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fa)?(h===void 0&&(h=new Nt(new on(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:xs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nt(new tn(2,2),new Ne({name:"BackgroundMaterial",uniforms:xs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,m){p.getRGB(Gr,cu(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:g}}function q0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(I,O,W,N,k){let Y=!1;if(o){let st=y(N,W,O);c!==st&&(c=st,d(c.object)),Y=m(I,N,W,k),Y&&b(I,N,W,k)}else{let st=O.wireframe===!0;(c.geometry!==N.id||c.program!==W.id||c.wireframe!==st)&&(c.geometry=N.id,c.program=W.id,c.wireframe=st,Y=!0)}k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,B(I,O,W,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function y(I,O,W){let N=W.wireframe===!0,k=a[I.id];k===void 0&&(k={},a[I.id]=k);let Y=k[O.id];Y===void 0&&(Y={},k[O.id]=Y);let st=Y[N];return st===void 0&&(st=p(f()),Y[N]=st),st}function p(I){let O=[],W=[],N=[];for(let k=0;k<i;k++)O[k]=0,W[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:N,object:I,attributes:{},index:null}}function m(I,O,W,N){let k=c.attributes,Y=O.attributes,st=0,at=W.getAttributes();for(let pt in at)if(at[pt].location>=0){let U=k[pt],F=Y[pt];if(F===void 0&&(pt==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),pt==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),U===void 0||U.attribute!==F||F&&U.data!==F.data)return!0;st++}return c.attributesNum!==st||c.index!==N}function b(I,O,W,N){let k={},Y=O.attributes,st=0,at=W.getAttributes();for(let pt in at)if(at[pt].location>=0){let U=Y[pt];U===void 0&&(pt==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),pt==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));let F={};F.attribute=U,U&&U.data&&(F.data=U.data),k[pt]=F,st++}c.attributes=k,c.attributesNum=st,c.index=N}function v(){let I=c.newAttributes;for(let O=0,W=I.length;O<W;O++)I[O]=0}function T(I){R(I,0)}function R(I,O){let W=c.newAttributes,N=c.enabledAttributes,k=c.attributeDivisors;W[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),k[I]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),k[I]=O)}function x(){let I=c.newAttributes,O=c.enabledAttributes;for(let W=0,N=O.length;W<N;W++)O[W]!==I[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function A(I,O,W,N,k,Y,st){st===!0?s.vertexAttribIPointer(I,O,W,k,Y):s.vertexAttribPointer(I,O,W,N,k,Y)}function B(I,O,W,N){if(n.isWebGL2===!1&&(I.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let k=N.attributes,Y=W.getAttributes(),st=O.defaultAttributeValues;for(let at in Y){let pt=Y[at];if(pt.location>=0){let Q=k[at];if(Q===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){let U=Q.normalized,F=Q.itemSize,G=e.get(Q);if(G===void 0)continue;let $=G.buffer,tt=G.type,et=G.bytesPerElement,nt=n.isWebGL2===!0&&(tt===s.INT||tt===s.UNSIGNED_INT||Q.gpuType===Kh);if(Q.isInterleavedBufferAttribute){let ft=Q.data,C=ft.stride,lt=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let P=0;P<pt.locationSize;P++)R(pt.location+P,ft.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let P=0;P<pt.locationSize;P++)T(pt.location+P);s.bindBuffer(s.ARRAY_BUFFER,$);for(let P=0;P<pt.locationSize;P++)A(pt.location+P,F/pt.locationSize,tt,U,C*et,(lt+F/pt.locationSize*P)*et,nt)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<pt.locationSize;ft++)R(pt.location+ft,Q.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<pt.locationSize;ft++)T(pt.location+ft);s.bindBuffer(s.ARRAY_BUFFER,$);for(let ft=0;ft<pt.locationSize;ft++)A(pt.location+ft,F/pt.locationSize,tt,U,F*et,F/pt.locationSize*ft*et,nt)}}else if(st!==void 0){let U=st[at];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(pt.location,U);break;case 3:s.vertexAttrib3fv(pt.location,U);break;case 4:s.vertexAttrib4fv(pt.location,U);break;default:s.vertexAttrib1fv(pt.location,U)}}}}x()}function _(){K();for(let I in a){let O=a[I];for(let W in O){let N=O[W];for(let k in N)g(N[k].object),delete N[k];delete O[W]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;let O=a[I.id];for(let W in O){let N=O[W];for(let k in N)g(N[k].object),delete N[k];delete O[W]}delete a[I.id]}function z(I){for(let O in a){let W=a[O];if(W[I.id]===void 0)continue;let N=W[I.id];for(let k in N)g(N[k].object),delete N[k];delete W[I.id]}}function K(){it(),h=!0,c!==l&&(c=l,d(c.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:it,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:T,disableUnusedAttributes:x}}function Y0(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function $0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||t.has("OES_texture_float"),R=v&&T,x=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:x}}function Z0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Vn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,v=b*4,T=m.clippingState||null;l.value=T,T=h(g,f,v,d);for(let R=0;R!==v;++R)T[R]=e[R];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,T=d;v!==y;++v,T+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function J0(s){let t=new WeakMap;function e(o,a){return a===Yo?o.mapping=ds:a===$o&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yo||a===$o)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _a=class extends ga{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},os=4,lh=[.125,.215,.35,.446,.526,.582],Si=20,Do=new _a,ch=new Pt,No=null,Oo=0,Fo=0,Mi=(1+Math.sqrt(5))/2,es=1/Mi,hh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mi,es),new L(0,Mi,-es),new L(es,0,Mi),new L(-es,0,Mi),new L(Mi,es,0),new L(-Mi,es,0)],ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Oo,Fo),t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:qs,format:yn,colorSpace:Wn,depthBuffer:!1},i=uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=j0(r,t,e)}return i}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,i){let a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ch),h.toneMapping=ii,h.autoClear=!1;let d=new re({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Nt(new on,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(ch),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Wr(i,b*v,m>2?v:0,v,v),h.setRenderTarget(i),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ds||t.mapping===ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Do)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=hh[(i-1)%hh.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let m=[],b=0;for(let A=0;A<Si;++A){let B=A/y,_=Math.exp(-B*B/2);m.push(_),A===0?b+=_:A<p&&(b+=2*_)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let T=this._sizeLods[i],R=3*T*(i>v-os?i-v+os:0),x=4*(this._cubeSize-T);Wr(e,R,x,3*T,2*T),l.setRenderTarget(e),l.render(u,Do)}};function K0(s){let t=[],e=[],n=[],i=s,r=s-os+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-os?l=lh[o-s+os-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,p=2,m=1,b=new Float32Array(y*g*d),v=new Float32Array(p*g*d),T=new Float32Array(m*g*d);for(let x=0;x<d;x++){let A=x%3*2/3-1,B=x>2?0:-1,_=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];b.set(_,y*g*x),v.set(f,p*g*x);let E=[x,x,x,x,x,x];T.set(E,m*g*x)}let R=new te;R.setAttribute("position",new he(b,y)),R.setAttribute("uv",new he(v,p)),R.setAttribute("faceIndex",new he(T,m)),t.push(R),i>os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uh(s,t,e){let n=new Xn(s,t,e);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function j0(s,t,e){let n=new Float32Array(Si),i=new L(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function fh(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function dh(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function Q0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yo||l===$o,h=l===ds||l===ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ya(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ya(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eg(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let b=d.array;y=d.version;for(let v=0,T=b.length;v<T;v+=3){let R=b[v+0],x=b[v+1],A=b[v+2];f.push(R,x,x,A,A,R)}}else if(g!==void 0){let b=g.array;y=g.version;for(let v=0,T=b.length/3-1;v<T;v+=3){let R=v+0,x=v+1,A=v+2;f.push(R,x,x,A,A,R)}}else return;let p=new(ou(f)?ma:pa)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ng(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,y){if(y===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,d*l,y),e.update(g,r,y)}function f(d,g,y){if(y===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,d,0,y);let m=0;for(let b=0;b<y;b++)m+=g[b];e.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function ig(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sg(s,t){return s[0]-t[0]}function rg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ag(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,y=r.get(h);if(y===void 0||y.count!==g){let I=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],B=0;b===!0&&(B=1),v===!0&&(B=2),T===!0&&(B=3);let _=h.attributes.position.count*B,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let z=new Float32Array(_*E*4*g),K=new da(z,_,E,g);K.type=ei,K.needsUpdate=!0;let it=B*4;for(let O=0;O<g;O++){let W=R[O],N=x[O],k=A[O],Y=_*E*4*O;for(let st=0;st<W.count;st++){let at=st*it;b===!0&&(o.fromBufferAttribute(W,st),z[Y+at+0]=o.x,z[Y+at+1]=o.y,z[Y+at+2]=o.z,z[Y+at+3]=0),v===!0&&(o.fromBufferAttribute(N,st),z[Y+at+4]=o.x,z[Y+at+5]=o.y,z[Y+at+6]=o.z,z[Y+at+7]=0),T===!0&&(o.fromBufferAttribute(k,st),z[Y+at+8]=o.x,z[Y+at+9]=o.y,z[Y+at+10]=o.z,z[Y+at+11]=k.itemSize===4?o.w:1)}}y={count:g,texture:K,size:new dt(_,E)},r.set(h,y),h.addEventListener("dispose",I)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let T=g[v];T[0]=v,T[1]=f[v]}g.sort(rg);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(sg);let y=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let T=a[v],R=T[0],x=T[1];R!==Number.MAX_SAFE_INTEGER&&x?(y&&h.getAttribute("morphTarget"+v)!==y[R]&&h.setAttribute("morphTarget"+v,y[R]),p&&h.getAttribute("morphNormal"+v)!==p[R]&&h.setAttribute("morphNormal"+v,p[R]),i[v]=x,m+=x):(y&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let b=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function og(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var va=class extends an{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=ti),n===void 0&&h===ms&&(n=Ti),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uu=new an,fu=new va(1,1);fu.compareFunction=au;var du=new da,pu=new tl,mu=new xa,ph=[],mh=[],gh=new Float32Array(16),xh=new Float32Array(9),_h=new Float32Array(4);function Es(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ph[i];if(r===void 0&&(r=new Float32Array(i),ph[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function za(s,t){let e=mh[t];e===void 0&&(e=new Int32Array(t),mh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function fg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;_h.set(n),s.uniformMatrix2fv(this.addr,!1,_h),Ee(e,n)}}function dg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;xh.set(n),s.uniformMatrix3fv(this.addr,!1,xh),Ee(e,n)}}function pg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;gh.set(n),s.uniformMatrix4fv(this.addr,!1,gh),Ee(e,n)}}function mg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function _g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function yg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function Sg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?fu:uu;e.setTexture2D(t||r,i)}function Eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pu,i)}function Tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mu,i)}function wg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function Ag(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}function Rg(s,t){s.uniform1fv(this.addr,t)}function Cg(s,t){let e=Es(t,this.size,2);s.uniform2fv(this.addr,e)}function Pg(s,t){let e=Es(t,this.size,3);s.uniform3fv(this.addr,e)}function Lg(s,t){let e=Es(t,this.size,4);s.uniform4fv(this.addr,e)}function Ig(s,t){let e=Es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ug(s,t){let e=Es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dg(s,t){let e=Es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ng(s,t){s.uniform1iv(this.addr,t)}function Og(s,t){s.uniform2iv(this.addr,t)}function Fg(s,t){s.uniform3iv(this.addr,t)}function Bg(s,t){s.uniform4iv(this.addr,t)}function zg(s,t){s.uniform1uiv(this.addr,t)}function Hg(s,t){s.uniform2uiv(this.addr,t)}function kg(s,t){s.uniform3uiv(this.addr,t)}function Vg(s,t){s.uniform4uiv(this.addr,t)}function Gg(s,t,e){let n=this.cache,i=t.length,r=za(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uu,r[o])}function Wg(s,t,e){let n=this.cache,i=t.length,r=za(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pu,r[o])}function Xg(s,t,e){let n=this.cache,i=t.length,r=za(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mu,r[o])}function qg(s,t,e){let n=this.cache,i=t.length,r=za(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||du,r[o])}function Yg(s){switch(s){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ig;case 35675:return Ug;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Hg;case 36295:return kg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function yh(s,t){s.seq.push(t),s.map[t.id]=t}function $g(s,t,e){let n=s.name,i=n.length;for(Bo.lastIndex=0;;){let r=Bo.exec(n),o=Bo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){yh(e,c===void 0?new il(a,s,t):new sl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),yh(e,u)),e=u}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);$g(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function vh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Zg=37297,Jg=0;function Kg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jg(s){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s),n;switch(t===e?n="":t===oa&&e===aa?n="LinearDisplayP3ToLinearSRGB":t===aa&&e===oa&&(n="LinearSRGBToLinearDisplayP3"),s){case Wn:case Ba:return[n,"LinearTransferOETF"];case xe:case Bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Mh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Kg(s.getShaderSource(t),o)}else return i}function Qg(s,t){let e=jg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tx(s,t){let e;switch(t){case rd:e="Linear";break;case ad:e="Reinhard";break;case od:e="OptimizedCineon";break;case ld:e="ACESFilmic";break;case hd:e="AgX";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ex(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function nx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function ix(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ls(s){return s!==""}function bh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(s){return s.replace(rx,ox)}var ax=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ox(s,t){let e=Ht[t];if(e===void 0){let n=ax.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(s){return s.replace(lx,cx)}function cx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Th(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function ux(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ps&&(t="ENVMAP_MODE_REFRACTION"),t}function dx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case id:t="ENVMAP_BLENDING_MIX";break;case sd:t="ENVMAP_BLENDING_ADD";break}return t}function px(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hx(e),c=ux(e),h=fx(e),u=dx(e),f=px(e),d=e.isWebGL2?"":ex(e),g=nx(e),y=ix(r),p=i.createProgram(),m,b,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),m.length>0&&(m+=`
`),b=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),b.length>0&&(b+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),b=[d,Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ii?tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=al(o),o=bh(o,e),o=Sh(o,e),a=al(a),a=bh(a,e),a=Sh(a,e),o=Eh(o),a=Eh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let T=v+m+o,R=v+b+a,x=vh(i,i.VERTEX_SHADER,T),A=vh(i,i.FRAGMENT_SHADER,R);i.attachShader(p,x),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function B(K){if(s.debug.checkShaderErrors){let it=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(x).trim(),O=i.getShaderInfoLog(A).trim(),W=!0,N=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,x,A);else{let k=Mh(i,x,"vertex"),Y=Mh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+k+`
`+Y)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(I===""||O==="")&&(N=!1);N&&(K.diagnostics={runnable:W,programLog:it,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:b}})}i.deleteShader(x),i.deleteShader(A),_=new fs(i,p),E=sx(i,p)}let _;this.getUniforms=function(){return _===void 0&&B(this),_};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,Zg)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=A,this}var gx=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ll(t),e.set(t,n)),n}},ll=class{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}};function xx(s,t,e,n,i,r,o){let a=new $s,l=new ol,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function p(_,E,z,K,it){let I=K.fog,O=it.geometry,W=_.isMeshStandardMaterial?K.environment:null,N=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),k=N&&N.mapping===Fa?N.image.height:null,Y=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=st!==void 0?st.length:0,pt=0;O.morphAttributes.position!==void 0&&(pt=1),O.morphAttributes.normal!==void 0&&(pt=2),O.morphAttributes.color!==void 0&&(pt=3);let Q,U,F,G;if(Y){let Fe=wn[Y];Q=Fe.vertexShader,U=Fe.fragmentShader}else Q=_.vertexShader,U=_.fragmentShader,l.update(_),F=l.getVertexShaderID(_),G=l.getFragmentShaderID(_);let $=s.getRenderTarget(),tt=it.isInstancedMesh===!0,et=it.isBatchedMesh===!0,nt=!!_.map,ft=!!_.matcap,C=!!N,lt=!!_.aoMap,P=!!_.lightMap,q=!!_.bumpMap,X=!!_.normalMap,vt=!!_.displacementMap,ot=!!_.emissiveMap,S=!!_.metalnessMap,M=!!_.roughnessMap,H=_.anisotropy>0,ct=_.clearcoat>0,rt=_.iridescence>0,ht=_.sheen>0,Et=_.transmission>0,xt=H&&!!_.anisotropyMap,bt=ct&&!!_.clearcoatMap,At=ct&&!!_.clearcoatNormalMap,Ot=ct&&!!_.clearcoatRoughnessMap,ut=rt&&!!_.iridescenceMap,Yt=rt&&!!_.iridescenceThicknessMap,Xt=ht&&!!_.sheenColorMap,Ut=ht&&!!_.sheenRoughnessMap,wt=!!_.specularMap,St=!!_.specularColorMap,zt=!!_.specularIntensityMap,Jt=Et&&!!_.transmissionMap,fe=Et&&!!_.thicknessMap,Vt=!!_.gradientMap,mt=!!_.alphaMap,D=_.alphaTest>0,_t=!!_.alphaHash,yt=!!_.extensions,Lt=!!O.attributes.uv1,Rt=!!O.attributes.uv2,ee=!!O.attributes.uv3,ne=ii;return _.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ne=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:U,defines:_.defines,customVertexShaderID:F,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:et,instancing:tt,instancingColor:tt&&it.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wn,map:nt,matcap:ft,envMap:C,envMapMode:C&&N.mapping,envMapCubeUVHeight:k,aoMap:lt,lightMap:P,bumpMap:q,normalMap:X,displacementMap:f&&vt,emissiveMap:ot,normalMapObjectSpace:X&&_.normalMapType===bd,normalMapTangentSpace:X&&_.normalMapType===ru,metalnessMap:S,roughnessMap:M,anisotropy:H,anisotropyMap:xt,clearcoat:ct,clearcoatMap:bt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ot,iridescence:rt,iridescenceMap:ut,iridescenceThicknessMap:Yt,sheen:ht,sheenColorMap:Xt,sheenRoughnessMap:Ut,specularMap:wt,specularColorMap:St,specularIntensityMap:zt,transmission:Et,transmissionMap:Jt,thicknessMap:fe,gradientMap:Vt,opaque:_.transparent===!1&&_.blending===hs,alphaMap:mt,alphaTest:D,alphaHash:_t,combine:_.combine,mapUv:nt&&y(_.map.channel),aoMapUv:lt&&y(_.aoMap.channel),lightMapUv:P&&y(_.lightMap.channel),bumpMapUv:q&&y(_.bumpMap.channel),normalMapUv:X&&y(_.normalMap.channel),displacementMapUv:vt&&y(_.displacementMap.channel),emissiveMapUv:ot&&y(_.emissiveMap.channel),metalnessMapUv:S&&y(_.metalnessMap.channel),roughnessMapUv:M&&y(_.roughnessMap.channel),anisotropyMapUv:xt&&y(_.anisotropyMap.channel),clearcoatMapUv:bt&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:At&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&y(_.sheenRoughnessMap.channel),specularMapUv:wt&&y(_.specularMap.channel),specularColorMapUv:St&&y(_.specularColorMap.channel),specularIntensityMapUv:zt&&y(_.specularIntensityMap.channel),transmissionMapUv:Jt&&y(_.transmissionMap.channel),thicknessMapUv:fe&&y(_.thicknessMap.channel),alphaMapUv:mt&&y(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(X||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Rt,vertexUv3s:ee,pointsUvs:it.isPoints===!0&&!!O.attributes.uv&&(nt||mt),fog:!!I,useFog:_.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:nt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:yt&&_.extensions.derivatives===!0,extensionFragDepth:yt&&_.extensions.fragDepth===!0,extensionDrawBuffers:yt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(b(E,_),v(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function b(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function T(_){let E=g[_.type],z;if(E){let K=wn[E];z=ap.clone(K.uniforms)}else z=_.uniforms;return z}function R(_,E){let z;for(let K=0,it=c.length;K<it;K++){let I=c[K];if(I.cacheKey===E){z=I,++z.usedTimes;break}}return z===void 0&&(z=new mx(s,E,_,r),c.push(z)),z}function x(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:R,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:B}}function _x(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function yx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ah(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,y,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function a(u,f,d,g,y,p){let m=o(u,f,d,g,y,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,g,y,p){let m=o(u,f,d,g,y,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||yx),n.length>1&&n.sort(f||wh),i.length>1&&i.sort(f||wh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function vx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ah,s.set(n,[o])):i>=r.length?(o=new Ah,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function bx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Sx=0;function Ex(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tx(s,t){let e=new Mx,n=bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,o=new $t,a=new $t;function l(h,u){let f=0,d=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let y=0,p=0,m=0,b=0,v=0,T=0,R=0,x=0,A=0,B=0,_=0;h.sort(Ex);let E=u===!0?Math.PI:1;for(let K=0,it=h.length;K<it;K++){let I=h[K],O=I.color,W=I.intensity,N=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=O.r*W*E,d+=O.g*W*E,g+=O.b*W*E;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],W);_++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){let st=I.shadow,at=n.get(I);at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,i.directionalShadow[y]=at,i.directionalShadowMap[y]=k,i.directionalShadowMatrix[y]=I.shadow.matrix,T++}i.directional[y]=Y,y++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(O).multiplyScalar(W*E),Y.distance=N,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[m]=Y;let st=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,st.updateMatrices(I),I.castShadow&&B++),i.spotLightMatrix[m]=st.matrix,I.castShadow){let at=n.get(I);at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,i.spotShadow[m]=at,i.spotShadowMap[m]=k,x++}m++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=Y,b++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*E),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let st=I.shadow,at=n.get(I);at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,i.pointShadow[p]=at,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=I.shadow.matrix,R++}i.point[p]=Y,p++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(W*E),Y.groundColor.copy(I.groundColor).multiplyScalar(W*E),i.hemi[v]=Y,v++}}b>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let z=i.hash;(z.directionalLength!==y||z.pointLength!==p||z.spotLength!==m||z.rectAreaLength!==b||z.hemiLength!==v||z.numDirectionalShadows!==T||z.numPointShadows!==R||z.numSpotShadows!==x||z.numSpotMaps!==A||z.numLightProbes!==_)&&(i.directional.length=y,i.spot.length=m,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=x+A-B,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=_,z.directionalLength=y,z.pointLength=p,z.spotLength=m,z.rectAreaLength=b,z.hemiLength=v,z.numDirectionalShadows=T,z.numPointShadows=R,z.numSpotShadows=x,z.numSpotMaps=A,z.numLightProbes=_,i.version=Sx++)}function c(h,u){let f=0,d=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let T=h[b];if(T.isDirectionalLight){let R=i.directional[f];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),f++}else if(T.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(T.isRectAreaLight){let R=i.rectArea[y];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let R=i.hemi[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Rh(s,t){let e=new Tx(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function wx(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Rh(s,t),e.set(r,[l])):o>=a.length?(l=new Rh(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var cl=class extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(s,t,e){let n=new Zs,i=new dt,r=new dt,o=new Re,a=new cl({depthPacking:Md}),l=new hl,c={},h=e.maxTextureSize,u={[ri]:De,[De]:ri,[Ye]:Ye},f=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new te;g.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let m=this.type;this.render=function(x,A,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;let _=s.getRenderTarget(),E=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(ni),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let it=m!==kn&&this.type===kn,I=m===kn&&this.type!==kn;for(let O=0,W=x.length;O<W;O++){let N=x[O],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Y=k.getFrameExtents();if(i.multiply(Y),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,k.mapSize.y=r.y)),k.map===null||it===!0||I===!0){let at=this.type!==kn?{minFilter:ke,magFilter:ke}:{};k.map!==null&&k.map.dispose(),k.map=new Xn(i.x,i.y,at),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let st=k.getViewportCount();for(let at=0;at<st;at++){let pt=k.getViewport(at);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),K.viewport(o),k.updateMatrices(N,at),n=k.getFrustum(),T(A,B,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&b(k,B),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(_,E,z)};function b(x,A){let B=t.update(y);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(A,null,B,f,y,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(A,null,B,d,y,null)}function v(x,A,B,_){let E=null,z=B.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(z!==void 0)E=z;else if(E=B.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let K=E.uuid,it=A.uuid,I=c[K];I===void 0&&(I={},c[K]=I);let O=I[it];O===void 0&&(O=E.clone(),I[it]=O,A.addEventListener("dispose",R)),E=O}if(E.visible=A.visible,E.wireframe=A.wireframe,_===kn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let K=s.properties.get(E);K.light=B}return E}function T(x,A,B,_,E){if(x.visible===!1)return;if(x.layers.test(A.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&E===kn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld);let it=t.update(x),I=x.material;if(Array.isArray(I)){let O=it.groups;for(let W=0,N=O.length;W<N;W++){let k=O[W],Y=I[k.materialIndex];if(Y&&Y.visible){let st=v(x,Y,_,E);x.onBeforeShadow(s,x,A,B,it,st,k),s.renderBufferDirect(B,null,it,st,x,k),x.onAfterShadow(s,x,A,B,it,st,k)}}}else if(I.visible){let O=v(x,I,_,E);x.onBeforeShadow(s,x,A,B,it,O,null),s.renderBufferDirect(B,null,it,O,x,null),x.onAfterShadow(s,x,A,B,it,O,null)}}let K=x.children;for(let it=0,I=K.length;it<I;it++)T(K[it],A,B,_,E)}function R(x){x.target.removeEventListener("dispose",R);for(let B in c){let _=c[B],E=x.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function Px(s,t,e){let n=e.isWebGL2;function i(){let D=!1,_t=new Re,yt=null,Lt=new Re(0,0,0,0);return{setMask:function(Rt){yt!==Rt&&!D&&(s.colorMask(Rt,Rt,Rt,Rt),yt=Rt)},setLocked:function(Rt){D=Rt},setClear:function(Rt,ee,ne,Te,Fe){Fe===!0&&(Rt*=Te,ee*=Te,ne*=Te),_t.set(Rt,ee,ne,Te),Lt.equals(_t)===!1&&(s.clearColor(Rt,ee,ne,Te),Lt.copy(_t))},reset:function(){D=!1,yt=null,Lt.set(-1,0,0,0)}}}function r(){let D=!1,_t=null,yt=null,Lt=null;return{setTest:function(Rt){Rt?et(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(Rt){_t!==Rt&&!D&&(s.depthMask(Rt),_t=Rt)},setFunc:function(Rt){if(yt!==Rt){switch(Rt){case Jf:s.depthFunc(s.NEVER);break;case Kf:s.depthFunc(s.ALWAYS);break;case jf:s.depthFunc(s.LESS);break;case na:s.depthFunc(s.LEQUAL);break;case Qf:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Rt}},setLocked:function(Rt){D=Rt},setClear:function(Rt){Lt!==Rt&&(s.clearDepth(Rt),Lt=Rt)},reset:function(){D=!1,_t=null,yt=null,Lt=null}}}function o(){let D=!1,_t=null,yt=null,Lt=null,Rt=null,ee=null,ne=null,Te=null,Fe=null;return{setTest:function(ie){D||(ie?et(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(ie){_t!==ie&&!D&&(s.stencilMask(ie),_t=ie)},setFunc:function(ie,Be,Tn){(yt!==ie||Lt!==Be||Rt!==Tn)&&(s.stencilFunc(ie,Be,Tn),yt=ie,Lt=Be,Rt=Tn)},setOp:function(ie,Be,Tn){(ee!==ie||ne!==Be||Te!==Tn)&&(s.stencilOp(ie,Be,Tn),ee=ie,ne=Be,Te=Tn)},setLocked:function(ie){D=ie},setClear:function(ie){Fe!==ie&&(s.clearStencil(ie),Fe=ie)},reset:function(){D=!1,_t=null,yt=null,Lt=null,Rt=null,ee=null,ne=null,Te=null,Fe=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,y=[],p=null,m=!1,b=null,v=null,T=null,R=null,x=null,A=null,B=null,_=new Pt(0,0,0),E=0,z=!1,K=null,it=null,I=null,O=null,W=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(st)[1]),k=Y>=1):st.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),k=Y>=2);let at=null,pt={},Q=s.getParameter(s.SCISSOR_BOX),U=s.getParameter(s.VIEWPORT),F=new Re().fromArray(Q),G=new Re().fromArray(U);function $(D,_t,yt,Lt){let Rt=new Uint8Array(4),ee=s.createTexture();s.bindTexture(D,ee),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<yt;ne++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(_t+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ee}let tt={};tt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(tt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),et(s.DEPTH_TEST),l.setFunc(na),ot(!1),S(cc),et(s.CULL_FACE),X(ni);function et(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function nt(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function ft(D,_t){return d[D]!==_t?(s.bindFramebuffer(D,_t),d[D]=_t,n&&(D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_t),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function C(D,_t){let yt=y,Lt=!1;if(D)if(yt=g.get(_t),yt===void 0&&(yt=[],g.set(_t,yt)),D.isWebGLMultipleRenderTargets){let Rt=D.texture;if(yt.length!==Rt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,ne=Rt.length;ee<ne;ee++)yt[ee]=s.COLOR_ATTACHMENT0+ee;yt.length=Rt.length,Lt=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function lt(D){return p!==D?(s.useProgram(D),p=D,!0):!1}let P={[bi]:s.FUNC_ADD,[Nf]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};if(n)P[fc]=s.MIN,P[dc]=s.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(P[fc]=D.MIN_EXT,P[dc]=D.MAX_EXT)}let q={[Ff]:s.ZERO,[Bf]:s.ONE,[zf]:s.SRC_COLOR,[Xo]:s.SRC_ALPHA,[Xf]:s.SRC_ALPHA_SATURATE,[Gf]:s.DST_COLOR,[kf]:s.DST_ALPHA,[Hf]:s.ONE_MINUS_SRC_COLOR,[qo]:s.ONE_MINUS_SRC_ALPHA,[Wf]:s.ONE_MINUS_DST_COLOR,[Vf]:s.ONE_MINUS_DST_ALPHA,[qf]:s.CONSTANT_COLOR,[Yf]:s.ONE_MINUS_CONSTANT_COLOR,[$f]:s.CONSTANT_ALPHA,[Zf]:s.ONE_MINUS_CONSTANT_ALPHA};function X(D,_t,yt,Lt,Rt,ee,ne,Te,Fe,ie){if(D===ni){m===!0&&(nt(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),D!==Df){if(D!==b||ie!==z){if((v!==bi||x!==bi)&&(s.blendEquation(s.FUNC_ADD),v=bi,x=bi),ie)switch(D){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case be:s.blendFunc(s.ONE,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case be:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,R=null,A=null,B=null,_.set(0,0,0),E=0,b=D,z=ie}return}Rt=Rt||_t,ee=ee||yt,ne=ne||Lt,(_t!==v||Rt!==x)&&(s.blendEquationSeparate(P[_t],P[Rt]),v=_t,x=Rt),(yt!==T||Lt!==R||ee!==A||ne!==B)&&(s.blendFuncSeparate(q[yt],q[Lt],q[ee],q[ne]),T=yt,R=Lt,A=ee,B=ne),(Te.equals(_)===!1||Fe!==E)&&(s.blendColor(Te.r,Te.g,Te.b,Fe),_.copy(Te),E=Fe),b=D,z=!1}function vt(D,_t){D.side===Ye?nt(s.CULL_FACE):et(s.CULL_FACE);let yt=D.side===De;_t&&(yt=!yt),ot(yt),D.blending===hs&&D.transparent===!1?X(ni):X(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);let Lt=D.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(D){K!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),K=D)}function S(D){D!==Lf?(et(s.CULL_FACE),D!==it&&(D===cc?s.cullFace(s.BACK):D===If?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),it=D}function M(D){D!==I&&(k&&s.lineWidth(D),I=D)}function H(D,_t,yt){D?(et(s.POLYGON_OFFSET_FILL),(O!==_t||W!==yt)&&(s.polygonOffset(_t,yt),O=_t,W=yt)):nt(s.POLYGON_OFFSET_FILL)}function ct(D){D?et(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function rt(D){D===void 0&&(D=s.TEXTURE0+N-1),at!==D&&(s.activeTexture(D),at=D)}function ht(D,_t,yt){yt===void 0&&(at===null?yt=s.TEXTURE0+N-1:yt=at);let Lt=pt[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},pt[yt]=Lt),(Lt.type!==D||Lt.texture!==_t)&&(at!==yt&&(s.activeTexture(yt),at=yt),s.bindTexture(D,_t||tt[D]),Lt.type=D,Lt.texture=_t)}function Et(){let D=pt[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){F.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),F.copy(D))}function Jt(D){G.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function fe(D,_t){let yt=u.get(_t);yt===void 0&&(yt=new WeakMap,u.set(_t,yt));let Lt=yt.get(D);Lt===void 0&&(Lt=s.getUniformBlockIndex(_t,D.name),yt.set(D,Lt))}function Vt(D,_t){let Lt=u.get(_t).get(D);h.get(_t)!==Lt&&(s.uniformBlockBinding(_t,Lt,D.__bindingPointIndex),h.set(_t,Lt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},at=null,pt={},d={},g=new WeakMap,y=[],p=null,m=!1,b=null,v=null,T=null,R=null,x=null,A=null,B=null,_=new Pt(0,0,0),E=0,z=!1,K=null,it=null,I=null,O=null,W=null,F.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:et,disable:nt,bindFramebuffer:ft,drawBuffers:C,useProgram:lt,setBlending:X,setMaterial:vt,setFlipSided:ot,setCullFace:S,setLineWidth:M,setPolygonOffset:H,setScissorTest:ct,activeTexture:rt,bindTexture:ht,unbindTexture:Et,compressedTexImage2D:xt,compressedTexImage3D:bt,texImage2D:wt,texImage3D:St,updateUBOMapping:fe,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Ut,texSubImage2D:At,texSubImage3D:Ot,compressedTexSubImage2D:ut,compressedTexSubImage3D:Yt,scissor:zt,viewport:Jt,reset:mt}}function Lx(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return d?new OffscreenCanvas(S,M):ha("canvas")}function y(S,M,H,ct){let rt=1;if((S.width>ct||S.height>ct)&&(rt=ct/Math.max(S.width,S.height)),rt<1||M===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let ht=M?ca:Math.floor,Et=ht(rt*S.width),xt=ht(rt*S.height);u===void 0&&(u=g(Et,xt));let bt=H?g(Et,xt):u;return bt.width=Et,bt.height=xt,bt.getContext("2d").drawImage(S,0,0,Et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Et+"x"+xt+")."),bt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return jo(S.width)&&jo(S.height)}function m(S){return a?!1:S.wrapS!==_n||S.wrapT!==_n||S.minFilter!==ke&&S.minFilter!==sn}function b(S,M){return S.generateMipmaps&&M&&S.minFilter!==ke&&S.minFilter!==sn}function v(S){s.generateMipmap(S)}function T(S,M,H,ct,rt=!1){if(a===!1)return M;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ht=M;if(M===s.RED&&(H===s.FLOAT&&(ht=s.R32F),H===s.HALF_FLOAT&&(ht=s.R16F),H===s.UNSIGNED_BYTE&&(ht=s.R8)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ht=s.R8UI),H===s.UNSIGNED_SHORT&&(ht=s.R16UI),H===s.UNSIGNED_INT&&(ht=s.R32UI),H===s.BYTE&&(ht=s.R8I),H===s.SHORT&&(ht=s.R16I),H===s.INT&&(ht=s.R32I)),M===s.RG&&(H===s.FLOAT&&(ht=s.RG32F),H===s.HALF_FLOAT&&(ht=s.RG16F),H===s.UNSIGNED_BYTE&&(ht=s.RG8)),M===s.RGBA){let Et=rt?ra:Qt.getTransfer(ct);H===s.FLOAT&&(ht=s.RGBA32F),H===s.HALF_FLOAT&&(ht=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ht=Et===se?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(S,M,H){return b(S,H)===!0||S.isFramebufferTexture&&S.minFilter!==ke&&S.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function x(S){return S===ke||S===pc||S===co?s.NEAREST:s.LINEAR}function A(S){let M=S.target;M.removeEventListener("dispose",A),_(M),M.isVideoTexture&&h.delete(M)}function B(S){let M=S.target;M.removeEventListener("dispose",B),z(M)}function _(S){let M=n.get(S);if(M.__webglInit===void 0)return;let H=S.source,ct=f.get(H);if(ct){let rt=ct[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(S),Object.keys(ct).length===0&&f.delete(H)}n.remove(S)}function E(S){let M=n.get(S);s.deleteTexture(M.__webglTexture);let H=S.source,ct=f.get(H);delete ct[M.__cacheKey],o.memory.textures--}function z(S){let M=S.texture,H=n.get(S),ct=n.get(M);if(ct.__webglTexture!==void 0&&(s.deleteTexture(ct.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(H.__webglFramebuffer[rt]))for(let ht=0;ht<H.__webglFramebuffer[rt].length;ht++)s.deleteFramebuffer(H.__webglFramebuffer[rt][ht]);else s.deleteFramebuffer(H.__webglFramebuffer[rt]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[rt])}else{if(Array.isArray(H.__webglFramebuffer))for(let rt=0;rt<H.__webglFramebuffer.length;rt++)s.deleteFramebuffer(H.__webglFramebuffer[rt]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let rt=0;rt<H.__webglColorRenderbuffer.length;rt++)H.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[rt]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let rt=0,ht=M.length;rt<ht;rt++){let Et=n.get(M[rt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(M[rt])}n.remove(M),n.remove(S)}let K=0;function it(){K=0}function I(){let S=K;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),K+=1,S}function O(S){let M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function W(S,M){let H=n.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){let ct=S.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(H,S,M);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function N(S,M){let H=n.get(S);if(S.version>0&&H.__version!==S.version){F(H,S,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function k(S,M){let H=n.get(S);if(S.version>0&&H.__version!==S.version){F(H,S,M);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function Y(S,M){let H=n.get(S);if(S.version>0&&H.__version!==S.version){G(H,S,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}let st={[Ri]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Zo]:s.MIRRORED_REPEAT},at={[ke]:s.NEAREST,[pc]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[ud]:s.LINEAR_MIPMAP_NEAREST,[Xs]:s.LINEAR_MIPMAP_LINEAR},pt={[Sd]:s.NEVER,[Cd]:s.ALWAYS,[Ed]:s.LESS,[au]:s.LEQUAL,[Td]:s.EQUAL,[Rd]:s.GEQUAL,[wd]:s.GREATER,[Ad]:s.NOTEQUAL};function Q(S,M,H){if(H?(s.texParameteri(S,s.TEXTURE_WRAP_S,st[M.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,st[M.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,st[M.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,at[M.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,at[M.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==_n||M.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,x(M.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,x(M.minFilter)),M.minFilter!==ke&&M.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ke||M.minFilter!==co&&M.minFilter!==Xs||M.type===ei&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===qs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(S,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function U(S,M){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",A));let ct=M.source,rt=f.get(ct);rt===void 0&&(rt={},f.set(ct,rt));let ht=O(M);if(ht!==S.__cacheKey){rt[ht]===void 0&&(rt[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),rt[ht].usedTimes++;let Et=rt[S.__cacheKey];Et!==void 0&&(rt[S.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),S.__cacheKey=ht,S.__webglTexture=rt[ht].texture}return H}function F(S,M,H){let ct=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=s.TEXTURE_3D);let rt=U(S,M),ht=M.source;e.bindTexture(ct,S.__webglTexture,s.TEXTURE0+H);let Et=n.get(ht);if(ht.version!==Et.__version||rt===!0){e.activeTexture(s.TEXTURE0+H);let xt=Qt.getPrimaries(Qt.workingColorSpace),bt=M.colorSpace===rn?null:Qt.getPrimaries(M.colorSpace),At=M.colorSpace===rn||xt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Ot=m(M)&&p(M.image)===!1,ut=y(M.image,Ot,!1,i.maxTextureSize);ut=ot(M,ut);let Yt=p(ut)||a,Xt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),wt=T(M.internalFormat,Xt,Ut,M.colorSpace,M.isVideoTexture);Q(ct,M,Yt);let St,zt=M.mipmaps,Jt=a&&M.isVideoTexture!==!0&&wt!==iu,fe=Et.__version===void 0||rt===!0,Vt=R(M,ut,Yt);if(M.isDepthTexture)wt=s.DEPTH_COMPONENT,a?M.type===ei?wt=s.DEPTH_COMPONENT32F:M.type===ti?wt=s.DEPTH_COMPONENT24:M.type===Ti?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:M.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wi&&wt===s.DEPTH_COMPONENT&&M.type!==Fl&&M.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ti,Ut=r.convert(M.type)),M.format===ms&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,M.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ti,Ut=r.convert(M.type))),fe&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,wt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,wt,ut.width,ut.height,0,Xt,Ut,null));else if(M.isDataTexture)if(zt.length>0&&Yt){Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Vt,wt,zt[0].width,zt[0].height);for(let mt=0,D=zt.length;mt<D;mt++)St=zt[mt],Jt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,St.width,St.height,Xt,Ut,St.data):e.texImage2D(s.TEXTURE_2D,mt,wt,St.width,St.height,0,Xt,Ut,St.data);M.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(s.TEXTURE_2D,Vt,wt,ut.width,ut.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,Xt,Ut,ut.data)):e.texImage2D(s.TEXTURE_2D,0,wt,ut.width,ut.height,0,Xt,Ut,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Jt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,wt,zt[0].width,zt[0].height,ut.depth);for(let mt=0,D=zt.length;mt<D;mt++)St=zt[mt],M.format!==yn?Xt!==null?Jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,St.width,St.height,ut.depth,Xt,St.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,wt,St.width,St.height,ut.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,St.width,St.height,ut.depth,Xt,Ut,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,wt,St.width,St.height,ut.depth,0,Xt,Ut,St.data)}else{Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Vt,wt,zt[0].width,zt[0].height);for(let mt=0,D=zt.length;mt<D;mt++)St=zt[mt],M.format!==yn?Xt!==null?Jt?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,St.width,St.height,Xt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,wt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,St.width,St.height,Xt,Ut,St.data):e.texImage2D(s.TEXTURE_2D,mt,wt,St.width,St.height,0,Xt,Ut,St.data)}else if(M.isDataArrayTexture)Jt?(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,wt,ut.width,ut.height,ut.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Xt,Ut,ut.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,ut.width,ut.height,ut.depth,0,Xt,Ut,ut.data);else if(M.isData3DTexture)Jt?(fe&&e.texStorage3D(s.TEXTURE_3D,Vt,wt,ut.width,ut.height,ut.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Xt,Ut,ut.data)):e.texImage3D(s.TEXTURE_3D,0,wt,ut.width,ut.height,ut.depth,0,Xt,Ut,ut.data);else if(M.isFramebufferTexture){if(fe)if(Jt)e.texStorage2D(s.TEXTURE_2D,Vt,wt,ut.width,ut.height);else{let mt=ut.width,D=ut.height;for(let _t=0;_t<Vt;_t++)e.texImage2D(s.TEXTURE_2D,_t,wt,mt,D,0,Xt,Ut,null),mt>>=1,D>>=1}}else if(zt.length>0&&Yt){Jt&&fe&&e.texStorage2D(s.TEXTURE_2D,Vt,wt,zt[0].width,zt[0].height);for(let mt=0,D=zt.length;mt<D;mt++)St=zt[mt],Jt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Xt,Ut,St):e.texImage2D(s.TEXTURE_2D,mt,wt,Xt,Ut,St);M.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(s.TEXTURE_2D,Vt,wt,ut.width,ut.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,Ut,ut)):e.texImage2D(s.TEXTURE_2D,0,wt,Xt,Ut,ut);b(M,Yt)&&v(ct),Et.__version=ht.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function G(S,M,H){if(M.image.length!==6)return;let ct=U(S,M),rt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+H);let ht=n.get(rt);if(rt.version!==ht.__version||ct===!0){e.activeTexture(s.TEXTURE0+H);let Et=Qt.getPrimaries(Qt.workingColorSpace),xt=M.colorSpace===rn?null:Qt.getPrimaries(M.colorSpace),bt=M.colorSpace===rn||Et===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let At=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,ut=[];for(let mt=0;mt<6;mt++)!At&&!Ot?ut[mt]=y(M.image[mt],!1,!0,i.maxCubemapSize):ut[mt]=Ot?M.image[mt].image:M.image[mt],ut[mt]=ot(M,ut[mt]);let Yt=ut[0],Xt=p(Yt)||a,Ut=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),St=T(M.internalFormat,Ut,wt,M.colorSpace),zt=a&&M.isVideoTexture!==!0,Jt=ht.__version===void 0||ct===!0,fe=R(M,Yt,Xt);Q(s.TEXTURE_CUBE_MAP,M,Xt);let Vt;if(At){zt&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,St,Yt.width,Yt.height);for(let mt=0;mt<6;mt++){Vt=ut[mt].mipmaps;for(let D=0;D<Vt.length;D++){let _t=Vt[D];M.format!==yn?Ut!==null?zt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,0,0,_t.width,_t.height,Ut,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,St,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,0,0,_t.width,_t.height,Ut,wt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,St,_t.width,_t.height,0,Ut,wt,_t.data)}}}else{Vt=M.mipmaps,zt&&Jt&&(Vt.length>0&&fe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,St,ut[0].width,ut[0].height));for(let mt=0;mt<6;mt++)if(Ot){zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ut[mt].width,ut[mt].height,Ut,wt,ut[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,St,ut[mt].width,ut[mt].height,0,Ut,wt,ut[mt].data);for(let D=0;D<Vt.length;D++){let yt=Vt[D].image[mt].image;zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,0,0,yt.width,yt.height,Ut,wt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,St,yt.width,yt.height,0,Ut,wt,yt.data)}}else{zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ut,wt,ut[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,St,Ut,wt,ut[mt]);for(let D=0;D<Vt.length;D++){let _t=Vt[D];zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,0,0,Ut,wt,_t.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,St,Ut,wt,_t.image[mt])}}}b(M,Xt)&&v(s.TEXTURE_CUBE_MAP),ht.__version=rt.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function $(S,M,H,ct,rt,ht){let Et=r.convert(H.format,H.colorSpace),xt=r.convert(H.type),bt=T(H.internalFormat,Et,xt,H.colorSpace);if(!n.get(M).__hasExternalTextures){let Ot=Math.max(1,M.width>>ht),ut=Math.max(1,M.height>>ht);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,ht,bt,Ot,ut,M.depth,0,Et,xt,null):e.texImage2D(rt,ht,bt,Ot,ut,0,Et,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,rt,n.get(H).__webglTexture,0,q(M)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,rt,n.get(H).__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(S,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let ct=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||X(M)){let rt=M.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ei?ct=s.DEPTH_COMPONENT32F:rt.type===ti&&(ct=s.DEPTH_COMPONENT24));let ht=q(M);X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,ct,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,ct,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ct,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){let ct=q(M);H&&X(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,s.DEPTH24_STENCIL8,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let ct=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let rt=0;rt<ct.length;rt++){let ht=ct[rt],Et=r.convert(ht.format,ht.colorSpace),xt=r.convert(ht.type),bt=T(ht.internalFormat,Et,xt,ht.colorSpace),At=q(M);H&&X(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,bt,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,bt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,bt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let ct=n.get(M.depthTexture).__webglTexture,rt=q(M);if(M.depthTexture.format===wi)X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(M.depthTexture.format===ms)X(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function nt(S){let M=n.get(S),H=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,S)}else if(H){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]=s.createRenderbuffer(),tt(M.__webglDepthbuffer[ct],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),tt(M.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(S,M,H){let ct=n.get(S);M!==void 0&&$(ct.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&nt(S)}function C(S){let M=S.texture,H=n.get(S),ct=n.get(M);S.addEventListener("dispose",B),S.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=M.version,o.memory.textures++);let rt=S.isWebGLCubeRenderTarget===!0,ht=S.isWebGLMultipleRenderTargets===!0,Et=p(S)||a;if(rt){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let bt=0;bt<M.mipmaps.length;bt++)H.__webglFramebuffer[xt][bt]=s.createFramebuffer()}else H.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<M.mipmaps.length;xt++)H.__webglFramebuffer[xt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ht)if(i.drawBuffers){let xt=S.texture;for(let bt=0,At=xt.length;bt<At;bt++){let Ot=n.get(xt[bt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&X(S)===!1){let xt=ht?M:[M];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let bt=0;bt<xt.length;bt++){let At=xt[bt];H.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[bt]);let Ot=r.convert(At.format,At.colorSpace),ut=r.convert(At.type),Yt=T(At.internalFormat,Ot,ut,At.colorSpace,S.isXRRenderTarget===!0),Xt=q(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Yt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,H.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(H.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),Q(s.TEXTURE_CUBE_MAP,M,Et);for(let xt=0;xt<6;xt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)$(H.__webglFramebuffer[xt][bt],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt);else $(H.__webglFramebuffer[xt],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);b(M,Et)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){let xt=S.texture;for(let bt=0,At=xt.length;bt<At;bt++){let Ot=xt[bt],ut=n.get(Ot);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),Q(s.TEXTURE_2D,Ot,Et),$(H.__webglFramebuffer,S,Ot,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),b(Ot,Et)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?xt=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ct.__webglTexture),Q(xt,M,Et),a&&M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)$(H.__webglFramebuffer[bt],S,M,s.COLOR_ATTACHMENT0,xt,bt);else $(H.__webglFramebuffer,S,M,s.COLOR_ATTACHMENT0,xt,0);b(M,Et)&&v(xt),e.unbindTexture()}S.depthBuffer&&nt(S)}function lt(S){let M=p(S)||a,H=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ct=0,rt=H.length;ct<rt;ct++){let ht=H[ct];if(b(ht,M)){let Et=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xt=n.get(ht).__webglTexture;e.bindTexture(Et,xt),v(Et),e.unbindTexture()}}}function P(S){if(a&&S.samples>0&&X(S)===!1){let M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],H=S.width,ct=S.height,rt=s.COLOR_BUFFER_BIT,ht=[],Et=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(S),bt=S.isWebGLMultipleRenderTargets===!0;if(bt)for(let At=0;At<M.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let At=0;At<M.length;At++){ht.push(s.COLOR_ATTACHMENT0+At),S.depthBuffer&&ht.push(Et);let Ot=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Ot===!1&&(S.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),bt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[At]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Et]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Et])),bt){let ut=n.get(M[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,H,ct,0,0,H,ct,rt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let At=0;At<M.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,xt.__webglColorRenderbuffer[At]);let Ot=n.get(M[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function q(S){return Math.min(i.maxSamples,S.samples)}function X(S){let M=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(S){let M=o.render.frame;h.get(S)!==M&&(h.set(S,M),S.update())}function ot(S,M){let H=S.colorSpace,ct=S.format,rt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ko||H!==Wn&&H!==rn&&(Qt.getTransfer(H)===se?a===!1?t.has("EXT_sRGB")===!0&&ct===yn?(S.format=Ko,S.minFilter=sn,S.generateMipmaps=!1):M=ua.sRGBToLinear(M):(ct!==yn||rt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=I,this.resetTextureUnits=it,this.setTexture2D=W,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=ft,this.setupRenderTarget=C,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=X}function Ix(s,t,e){let n=e.isWebGL2;function i(r,o=rn){let a,l=Qt.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===fd)return s.BYTE;if(r===dd)return s.SHORT;if(r===Fl)return s.UNSIGNED_SHORT;if(r===Kh)return s.INT;if(r===ti)return s.UNSIGNED_INT;if(r===ei)return s.FLOAT;if(r===qs)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pd)return s.ALPHA;if(r===yn)return s.RGBA;if(r===md)return s.LUMINANCE;if(r===gd)return s.LUMINANCE_ALPHA;if(r===wi)return s.DEPTH_COMPONENT;if(r===ms)return s.DEPTH_STENCIL;if(r===Ko)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===xd)return s.RED;if(r===tu)return s.RED_INTEGER;if(r===_d)return s.RG;if(r===eu)return s.RG_INTEGER;if(r===nu)return s.RGBA_INTEGER;if(r===ho||r===uo||r===fo||r===po)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mc||r===gc||r===xc||r===_c)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_c)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===iu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yc||r===vc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yc)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mc||r===bc||r===Sc||r===Ec||r===Tc||r===wc||r===Ac||r===Rc||r===Cc||r===Pc||r===Lc||r===Ic||r===Uc||r===Dc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Mc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ec)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ac)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ic)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===Nc||r===Oc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===mo)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Fc||r===Bc||r===zc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===mo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ti?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ul=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ue=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ux={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fl=class extends ai{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=e.getContextAttributes(),p=null,m=null,b=[],v=[],T=new dt,R=null,x=new Ve;x.layers.enable(1),x.viewport=new Re;let A=new Ve;A.layers.enable(2),A.viewport=new Re;let B=[x,A],_=new ul;_.layers.enable(1),_.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let U=b[Q];return U===void 0&&(U=new ks,b[Q]=U),U.getTargetRaySpace()},this.getControllerGrip=function(Q){let U=b[Q];return U===void 0&&(U=new ks,b[Q]=U),U.getGripSpace()},this.getHand=function(Q){let U=b[Q];return U===void 0&&(U=new ks,b[Q]=U),U.getHandSpace()};function K(Q){let U=v.indexOf(Q.inputSource);if(U===-1)return;let F=b[U];F!==void 0&&(F.update(Q.inputSource,Q.frame,c||o),F.dispatchEvent({type:Q.type,data:Q.inputSource}))}function it(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",it),i.removeEventListener("inputsourceschange",I);for(let Q=0;Q<b.length;Q++){let U=v[Q];U!==null&&(v[Q]=null,b[Q].disconnect(U))}E=null,z=null,t.setRenderTarget(p),d=null,f=null,u=null,i=null,m=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",it),i.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let U={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Xn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let U=null,F=null,G=null;y.depth&&(G=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=y.stencil?ms:wi,F=y.stencil?Ti:ti);let $={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer($),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new Xn(f.textureWidth,f.textureHeight,{format:yn,type:si,depthTexture:new va(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let tt=t.properties.get(m);tt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Q){for(let U=0;U<Q.removed.length;U++){let F=Q.removed[U],G=v.indexOf(F);G>=0&&(v[G]=null,b[G].disconnect(F))}for(let U=0;U<Q.added.length;U++){let F=Q.added[U],G=v.indexOf(F);if(G===-1){for(let tt=0;tt<b.length;tt++)if(tt>=v.length){v.push(F),G=tt;break}else if(v[tt]===null){v[tt]=F,G=tt;break}if(G===-1)break}let $=b[G];$&&$.connect(F)}}let O=new L,W=new L;function N(Q,U,F){O.setFromMatrixPosition(U.matrixWorld),W.setFromMatrixPosition(F.matrixWorld);let G=O.distanceTo(W),$=U.projectionMatrix.elements,tt=F.projectionMatrix.elements,et=$[14]/($[10]-1),nt=$[14]/($[10]+1),ft=($[9]+1)/$[5],C=($[9]-1)/$[5],lt=($[8]-1)/$[0],P=(tt[8]+1)/tt[0],q=et*lt,X=et*P,vt=G/(-lt+P),ot=vt*-lt;U.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let S=et+vt,M=nt+vt,H=q-ot,ct=X+(G-ot),rt=ft*nt/M*S,ht=C*nt/M*S;Q.projectionMatrix.makePerspective(H,ct,rt,ht,S,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function k(Q,U){U===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(U.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;_.near=A.near=x.near=Q.near,_.far=A.far=x.far=Q.far,(E!==_.near||z!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,z=_.far);let U=Q.parent,F=_.cameras;k(_,U);for(let G=0;G<F.length;G++)k(F[G],U);F.length===2?N(_,x,A):_.projectionMatrix.copy(x.projectionMatrix),Y(Q,_,U)};function Y(Q,U,F){F===null?Q.matrix.copy(U.matrixWorld):(Q.matrix.copy(F.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(U.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(U.projectionMatrix),Q.projectionMatrixInverse.copy(U.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ys*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let st=null;function at(Q,U){if(h=U.getViewerPose(c||o),g=U,h!==null){let F=h.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let G=!1;F.length!==_.cameras.length&&(_.cameras.length=0,G=!0);for(let $=0;$<F.length;$++){let tt=F[$],et=null;if(d!==null)et=d.getViewport(tt);else{let ft=u.getViewSubImage(f,tt);et=ft.viewport,$===0&&(t.setRenderTargetTextures(m,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(m))}let nt=B[$];nt===void 0&&(nt=new Ve,nt.layers.enable($),nt.viewport=new Re,B[$]=nt),nt.matrix.fromArray(tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(et.x,et.y,et.width,et.height),$===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),G===!0&&_.cameras.push(nt)}}for(let F=0;F<b.length;F++){let G=v[F],$=b[F];G!==null&&$!==void 0&&$.update(G,U,c||o)}st&&st(Q,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let pt=new hu;pt.setAnimationLoop(at),this.setAnimationLoop=function(Q){st=Q},this.dispose=function(){}}};function Dx(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,v,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===De&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===De&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nx(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){let T=v.program;n.uniformBlockBinding(b,T)}function c(b,v){let T=i[b.id];T===void 0&&(g(b),T=h(b),i[b.id]=T,b.addEventListener("dispose",p));let R=v.program;n.updateUBOMapping(b,R);let x=t.render.frame;r[b.id]!==x&&(f(b),r[b.id]=x)}function h(b){let v=u();b.__bindingPointIndex=v;let T=s.createBuffer(),R=b.__size,x=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=i[b.id],T=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let x=0,A=T.length;x<A;x++){let B=Array.isArray(T[x])?T[x]:[T[x]];for(let _=0,E=B.length;_<E;_++){let z=B[_];if(d(z,x,_,R)===!0){let K=z.__offset,it=Array.isArray(z.value)?z.value:[z.value],I=0;for(let O=0;O<it.length;O++){let W=it[O],N=y(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,K+I,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,I),I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,T,R){let x=b.value,A=v+"_"+T;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:R[A]=x.clone(),!0;{let B=R[A];if(typeof x=="number"||typeof x=="boolean"){if(B!==x)return R[A]=x,!0}else if(B.equals(x)===!1)return B.copy(x),!0}return!1}function g(b){let v=b.uniforms,T=0,R=16;for(let A=0,B=v.length;A<B;A++){let _=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,z=_.length;E<z;E++){let K=_[E],it=Array.isArray(K.value)?K.value:[K.value];for(let I=0,O=it.length;I<O;I++){let W=it[I],N=y(W),k=T%R;k!==0&&R-k<N.boundary&&(T+=R-k),K.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=N.storage}}}let x=T%R;return x>0&&(T+=R-x),b.__size=T,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Js=class{constructor(t={}){let{canvas:e=Wd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let v=this,T=!1,R=0,x=0,A=null,B=-1,_=null,E=new Re,z=new Re,K=null,it=new Pt(0),I=0,O=e.width,W=e.height,N=1,k=null,Y=null,st=new Re(0,0,O,W),at=new Re(0,0,O,W),pt=!1,Q=new Zs,U=!1,F=!1,G=null,$=new $t,tt=new dt,et=new L,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return A===null?N:1}let C=n;function lt(w,V){for(let J=0;J<w.length;J++){let j=w[J],Z=e.getContext(j,V);if(Z!==null)return Z}return null}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",_t,!1),C===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),C=lt(V,w),C===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,q,X,vt,ot,S,M,H,ct,rt,ht,Et,xt,bt,At,Ot,ut,Yt,Xt,Ut,wt,St,zt,Jt;function fe(){P=new tg(C),q=new $0(C,P,t),P.init(q),St=new Ix(C,P,q),X=new Px(C,P,q),vt=new ig(C),ot=new _x,S=new Lx(C,P,X,ot,q,St,vt),M=new J0(v),H=new Q0(v),ct=new up(C,q),zt=new q0(C,P,ct,q),rt=new eg(C,ct,vt,zt),ht=new og(C,rt,ct,vt),Xt=new ag(C,q,S),Ot=new Z0(ot),Et=new xx(v,M,H,P,q,zt,Ot),xt=new Dx(v,ot),bt=new vx,At=new wx(P,q),Yt=new X0(v,M,H,X,ht,f,l),ut=new Cx(v,ht,q),Jt=new Nx(C,vt,q,X),Ut=new Y0(C,P,vt,q),wt=new ng(C,P,vt,q),vt.programs=Et.programs,v.capabilities=q,v.extensions=P,v.properties=ot,v.renderLists=bt,v.shadowMap=ut,v.state=X,v.info=vt}fe();let Vt=new fl(v,C);this.xr=Vt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(O,W,!1))},this.getSize=function(w){return w.set(O,W)},this.setSize=function(w,V,J=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,W=V,e.width=Math.floor(w*N),e.height=Math.floor(V*N),J===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(O*N,W*N).floor()},this.setDrawingBufferSize=function(w,V,J){O=w,W=V,N=J,e.width=Math.floor(w*J),e.height=Math.floor(V*J),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,V,J,j){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,V,J,j),X.viewport(E.copy(st).multiplyScalar(N).floor())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,V,J,j){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,V,J,j),X.scissor(z.copy(at).multiplyScalar(N).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){X.setScissorTest(pt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(w=!0,V=!0,J=!0){let j=0;if(w){let Z=!1;if(A!==null){let Mt=A.texture.format;Z=Mt===nu||Mt===eu||Mt===tu}if(Z){let Mt=A.texture.type,Tt=Mt===si||Mt===ti||Mt===Fl||Mt===Ti||Mt===jh||Mt===Qh,Ct=Yt.getClearColor(),It=Yt.getClearAlpha(),kt=Ct.r,Dt=Ct.g,Ft=Ct.b;Tt?(d[0]=kt,d[1]=Dt,d[2]=Ft,d[3]=It,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=kt,g[1]=Dt,g[2]=Ft,g[3]=It,C.clearBufferiv(C.COLOR,0,g))}else j|=C.COLOR_BUFFER_BIT}V&&(j|=C.DEPTH_BUFFER_BIT),J&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),bt.dispose(),At.dispose(),ot.dispose(),M.dispose(),H.dispose(),ht.dispose(),zt.dispose(),Jt.dispose(),Et.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Fe),Vt.removeEventListener("sessionend",ie),G&&(G.dispose(),G=null),Be.stop()};function mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=vt.autoReset,V=ut.enabled,J=ut.autoUpdate,j=ut.needsUpdate,Z=ut.type;fe(),vt.autoReset=w,ut.enabled=V,ut.autoUpdate=J,ut.needsUpdate=j,ut.type=Z}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yt(w){let V=w.target;V.removeEventListener("dispose",yt),Lt(V)}function Lt(w){Rt(w),ot.remove(w)}function Rt(w){let V=ot.get(w).programs;V!==void 0&&(V.forEach(function(J){Et.releaseProgram(J)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,J,j,Z,Mt){V===null&&(V=nt);let Tt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ct=Af(w,V,J,j,Z);X.setMaterial(j,Tt);let It=J.index,kt=1;if(j.wireframe===!0){if(It=rt.getWireframeAttribute(J),It===void 0)return;kt=2}let Dt=J.drawRange,Ft=J.attributes.position,ge=Dt.start*kt,Je=(Dt.start+Dt.count)*kt;Mt!==null&&(ge=Math.max(ge,Mt.start*kt),Je=Math.min(Je,(Mt.start+Mt.count)*kt)),It!==null?(ge=Math.max(ge,0),Je=Math.min(Je,It.count)):Ft!=null&&(ge=Math.max(ge,0),Je=Math.min(Je,Ft.count));let we=Je-ge;if(we<0||we===1/0)return;zt.setup(Z,j,Ct,J,It);let Nn,le=Ut;if(It!==null&&(Nn=ct.get(It),le=wt,le.setIndex(Nn)),Z.isMesh)j.wireframe===!0?(X.setLineWidth(j.wireframeLinewidth*ft()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(Z.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),X.setLineWidth(Gt*ft()),Z.isLineSegments?le.setMode(C.LINES):Z.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else Z.isPoints?le.setMode(C.POINTS):Z.isSprite&&le.setMode(C.TRIANGLES);if(Z.isBatchedMesh)le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)le.renderInstances(ge,we,Z.count);else if(J.isInstancedBufferGeometry){let Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ro=Math.min(J.instanceCount,Gt);le.renderInstances(ge,we,ro)}else le.render(ge,we)};function ee(w,V,J){w.transparent===!0&&w.side===Ye&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,br(w,V,J),w.side=ri,w.needsUpdate=!0,br(w,V,J),w.side=Ye):br(w,V,J)}this.compile=function(w,V,J=null){J===null&&(J=w),p=At.get(J),p.init(),b.push(p),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),w!==J&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(v._useLegacyLights);let j=new Set;return w.traverse(function(Z){let Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let Ct=Mt[Tt];ee(Ct,J,Z),j.add(Ct)}else ee(Mt,J,Z),j.add(Mt)}),b.pop(),p=null,j},this.compileAsync=function(w,V,J=null){let j=this.compile(w,V,J);return new Promise(Z=>{function Mt(){if(j.forEach(function(Tt){ot.get(Tt).currentProgram.isReady()&&j.delete(Tt)}),j.size===0){Z(w);return}setTimeout(Mt,10)}P.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ne=null;function Te(w){ne&&ne(w)}function Fe(){Be.stop()}function ie(){Be.start()}let Be=new hu;Be.setAnimationLoop(Te),typeof self!="undefined"&&Be.setContext(self),this.setAnimationLoop=function(w){ne=w,Vt.setAnimationLoop(w),w===null?Be.stop():Be.start()},Vt.addEventListener("sessionstart",Fe),Vt.addEventListener("sessionend",ie),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(V),V=Vt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,A),p=At.get(w,b.length),p.init(),b.push(p),$.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix($),F=this.localClippingEnabled,U=Ot.init(this.clippingPlanes,F),y=bt.get(w,m.length),y.init(),m.push(y),Tn(w,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(k,Y),this.info.render.frame++,U===!0&&Ot.beginShadows();let J=p.state.shadowsArray;if(ut.render(J,w,V),U===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(y,w),p.setupLights(v._useLegacyLights),V.isArrayCamera){let j=V.cameras;for(let Z=0,Mt=j.length;Z<Mt;Z++){let Tt=j[Z];ic(y,w,Tt,Tt.viewport)}}else ic(y,w,V);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,V),zt.resetDefaultState(),B=-1,_=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Tn(w,V,J,j){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){j&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);let Tt=ht.update(w),Ct=w.material;Ct.visible&&y.push(w,Tt,Ct,J,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){let Tt=ht.update(w),Ct=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),et.copy(Tt.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(Ct)){let It=Tt.groups;for(let kt=0,Dt=It.length;kt<Dt;kt++){let Ft=It[kt],ge=Ct[Ft.materialIndex];ge&&ge.visible&&y.push(w,Tt,ge,J,et.z,Ft)}}else Ct.visible&&y.push(w,Tt,Ct,J,et.z,null)}}let Mt=w.children;for(let Tt=0,Ct=Mt.length;Tt<Ct;Tt++)Tn(Mt[Tt],V,J,j)}function ic(w,V,J,j){let Z=w.opaque,Mt=w.transmissive,Tt=w.transparent;p.setupLightsView(J),U===!0&&Ot.setGlobalState(v.clippingPlanes,J),Mt.length>0&&wf(Z,Mt,V,J),j&&X.viewport(E.copy(j)),Z.length>0&&Mr(Z,V,J),Mt.length>0&&Mr(Mt,V,J),Tt.length>0&&Mr(Tt,V,J),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function wf(w,V,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Mt=q.isWebGL2;G===null&&(G=new Xn(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?qs:si,minFilter:Xs,samples:Mt?4:0})),v.getDrawingBufferSize(tt),Mt?G.setSize(tt.x,tt.y):G.setSize(ca(tt.x),ca(tt.y));let Tt=v.getRenderTarget();v.setRenderTarget(G),v.getClearColor(it),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Ct=v.toneMapping;v.toneMapping=ii,Mr(w,J,j),S.updateMultisampleRenderTarget(G),S.updateRenderTargetMipmap(G);let It=!1;for(let kt=0,Dt=V.length;kt<Dt;kt++){let Ft=V[kt],ge=Ft.object,Je=Ft.geometry,we=Ft.material,Nn=Ft.group;if(we.side===Ye&&ge.layers.test(j.layers)){let le=we.side;we.side=De,we.needsUpdate=!0,sc(ge,J,j,Je,we,Nn),we.side=le,we.needsUpdate=!0,It=!0}}It===!0&&(S.updateMultisampleRenderTarget(G),S.updateRenderTargetMipmap(G)),v.setRenderTarget(Tt),v.setClearColor(it,I),v.toneMapping=Ct}function Mr(w,V,J){let j=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Mt=w.length;Z<Mt;Z++){let Tt=w[Z],Ct=Tt.object,It=Tt.geometry,kt=j===null?Tt.material:j,Dt=Tt.group;Ct.layers.test(J.layers)&&sc(Ct,V,J,It,kt,Dt)}}function sc(w,V,J,j,Z,Mt){w.onBeforeRender(v,V,J,j,Z,Mt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(v,V,J,j,w,Mt),Z.transparent===!0&&Z.side===Ye&&Z.forceSinglePass===!1?(Z.side=De,Z.needsUpdate=!0,v.renderBufferDirect(J,V,j,Z,w,Mt),Z.side=ri,Z.needsUpdate=!0,v.renderBufferDirect(J,V,j,Z,w,Mt),Z.side=Ye):v.renderBufferDirect(J,V,j,Z,w,Mt),w.onAfterRender(v,V,J,j,Z,Mt)}function br(w,V,J){V.isScene!==!0&&(V=nt);let j=ot.get(w),Z=p.state.lights,Mt=p.state.shadowsArray,Tt=Z.state.version,Ct=Et.getParameters(w,Z.state,Mt,V,J),It=Et.getProgramCacheKey(Ct),kt=j.programs;j.environment=w.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||j.environment),kt===void 0&&(w.addEventListener("dispose",yt),kt=new Map,j.programs=kt);let Dt=kt.get(It);if(Dt!==void 0){if(j.currentProgram===Dt&&j.lightsStateVersion===Tt)return ac(w,Ct),Dt}else Ct.uniforms=Et.getUniforms(w),w.onBuild(J,Ct,v),w.onBeforeCompile(Ct,v),Dt=Et.acquireProgram(Ct,It),kt.set(It,Dt),j.uniforms=Ct.uniforms;let Ft=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Ot.uniform),ac(w,Ct),j.needsLights=Cf(w),j.lightsStateVersion=Tt,j.needsLights&&(Ft.ambientLightColor.value=Z.state.ambient,Ft.lightProbe.value=Z.state.probe,Ft.directionalLights.value=Z.state.directional,Ft.directionalLightShadows.value=Z.state.directionalShadow,Ft.spotLights.value=Z.state.spot,Ft.spotLightShadows.value=Z.state.spotShadow,Ft.rectAreaLights.value=Z.state.rectArea,Ft.ltc_1.value=Z.state.rectAreaLTC1,Ft.ltc_2.value=Z.state.rectAreaLTC2,Ft.pointLights.value=Z.state.point,Ft.pointLightShadows.value=Z.state.pointShadow,Ft.hemisphereLights.value=Z.state.hemi,Ft.directionalShadowMap.value=Z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ft.spotShadowMap.value=Z.state.spotShadowMap,Ft.spotLightMatrix.value=Z.state.spotLightMatrix,Ft.spotLightMap.value=Z.state.spotLightMap,Ft.pointShadowMap.value=Z.state.pointShadowMap,Ft.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=Dt,j.uniformsList=null,Dt}function rc(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=fs.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function ac(w,V){let J=ot.get(w);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Af(w,V,J,j,Z){V.isScene!==!0&&(V=nt),S.resetTextureUnits();let Mt=V.fog,Tt=j.isMeshStandardMaterial?V.environment:null,Ct=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wn,It=(j.isMeshStandardMaterial?H:M).get(j.envMap||Tt),kt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Dt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ft=!!J.morphAttributes.position,ge=!!J.morphAttributes.normal,Je=!!J.morphAttributes.color,we=ii;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(we=v.toneMapping);let Nn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=Nn!==void 0?Nn.length:0,Gt=ot.get(j),ro=p.state.lights;if(U===!0&&(F===!0||w!==_)){let en=w===_&&j.id===B;Ot.setState(j,w,en)}let de=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ro.state.version||Gt.outputColorSpace!==Ct||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Gt.envMap!==It||j.fog===!0&&Gt.fog!==Mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==kt||Gt.vertexTangents!==Dt||Gt.morphTargets!==Ft||Gt.morphNormals!==ge||Gt.morphColors!==Je||Gt.toneMapping!==we||q.isWebGL2===!0&&Gt.morphTargetsCount!==le)&&(de=!0):(de=!0,Gt.__version=j.version);let mi=Gt.currentProgram;de===!0&&(mi=br(j,V,Z));let oc=!1,Rs=!1,ao=!1,Pe=mi.getUniforms(),gi=Gt.uniforms;if(X.useProgram(mi.program)&&(oc=!0,Rs=!0,ao=!0),j.id!==B&&(B=j.id,Rs=!0),oc||_!==w){Pe.setValue(C,"projectionMatrix",w.projectionMatrix),Pe.setValue(C,"viewMatrix",w.matrixWorldInverse);let en=Pe.map.cameraPosition;en!==void 0&&en.setValue(C,et.setFromMatrixPosition(w.matrixWorld)),q.logarithmicDepthBuffer&&Pe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Rs=!0,ao=!0)}if(Z.isSkinnedMesh){Pe.setOptional(C,Z,"bindMatrix"),Pe.setOptional(C,Z,"bindMatrixInverse");let en=Z.skeleton;en&&(q.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Pe.setValue(C,"boneTexture",en.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Pe.setOptional(C,Z,"batchingTexture"),Pe.setValue(C,"batchingTexture",Z._matricesTexture,S));let oo=J.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&q.isWebGL2===!0)&&Xt.update(Z,J,mi),(Rs||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,Pe.setValue(C,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gi.envMap.value=It,gi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Rs&&(Pe.setValue(C,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Rf(gi,ao),Mt&&j.fog===!0&&xt.refreshFogUniforms(gi,Mt),xt.refreshMaterialUniforms(gi,j,N,W,G),fs.upload(C,rc(Gt),gi,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fs.upload(C,rc(Gt),gi,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pe.setValue(C,"center",Z.center),Pe.setValue(C,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(C,"normalMatrix",Z.normalMatrix),Pe.setValue(C,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let en=j.uniformsGroups;for(let lo=0,Pf=en.length;lo<Pf;lo++)if(q.isWebGL2){let lc=en[lo];Jt.update(lc,mi),Jt.bind(lc,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function Rf(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Cf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,V,J){ot.get(w.texture).__webglTexture=V,ot.get(w.depthTexture).__webglTexture=J;let j=ot.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){let J=ot.get(w);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,J=0){A=w,R=V,x=J;let j=!0,Z=null,Mt=!1,Tt=!1;if(w){let It=ot.get(w);It.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(C.FRAMEBUFFER,null),j=!1):It.__webglFramebuffer===void 0?S.setupRenderTarget(w):It.__hasExternalTextures&&S.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);let kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Tt=!0);let Dt=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[V])?Z=Dt[V][J]:Z=Dt[V],Mt=!0):q.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?Z=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?Z=Dt[J]:Z=Dt,E.copy(w.viewport),z.copy(w.scissor),K=w.scissorTest}else E.copy(st).multiplyScalar(N).floor(),z.copy(at).multiplyScalar(N).floor(),K=pt;if(X.bindFramebuffer(C.FRAMEBUFFER,Z)&&q.drawBuffers&&j&&X.drawBuffers(w,Z),X.viewport(E),X.scissor(z),X.setScissorTest(K),Mt){let It=ot.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,It.__webglTexture,J)}else if(Tt){let It=ot.get(w.texture),kt=V||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,J||0,kt)}B=-1},this.readRenderTargetPixels=function(w,V,J,j,Z,Mt,Tt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){X.bindFramebuffer(C.FRAMEBUFFER,Ct);try{let It=w.texture,kt=It.format,Dt=It.type;if(kt!==yn&&St.convert(kt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Dt===qs&&(P.has("EXT_color_buffer_half_float")||q.isWebGL2&&P.has("EXT_color_buffer_float"));if(Dt!==si&&St.convert(Dt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===ei&&(q.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-j&&J>=0&&J<=w.height-Z&&C.readPixels(V,J,j,Z,St.convert(kt),St.convert(Dt),Mt)}finally{let It=A!==null?ot.get(A).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(w,V,J=0){let j=Math.pow(2,-J),Z=Math.floor(V.image.width*j),Mt=Math.floor(V.image.height*j);S.setTexture2D(V,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,w.x,w.y,Z,Mt),X.unbindTexture()},this.copyTextureToTexture=function(w,V,J,j=0){let Z=V.image.width,Mt=V.image.height,Tt=St.convert(J.format),Ct=St.convert(J.type);S.setTexture2D(J,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,J.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,j,w.x,w.y,Z,Mt,Tt,Ct,V.image.data):V.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,j,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Tt,V.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,j,w.x,w.y,Tt,Ct,V.image),j===0&&J.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(w,V,J,j,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=w.max.x-w.min.x+1,Tt=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,It=St.convert(j.format),kt=St.convert(j.type),Dt;if(j.isData3DTexture)S.setTexture3D(j,0),Dt=C.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)S.setTexture2DArray(j,0),Dt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,j.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,j.unpackAlignment);let Ft=C.getParameter(C.UNPACK_ROW_LENGTH),ge=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Je=C.getParameter(C.UNPACK_SKIP_PIXELS),we=C.getParameter(C.UNPACK_SKIP_ROWS),Nn=C.getParameter(C.UNPACK_SKIP_IMAGES),le=J.isCompressedTexture?J.mipmaps[Z]:J.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),J.isDataTexture||J.isData3DTexture?C.texSubImage3D(Dt,Z,V.x,V.y,V.z,Mt,Tt,Ct,It,kt,le.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Dt,Z,V.x,V.y,V.z,Mt,Tt,Ct,It,le.data)):C.texSubImage3D(Dt,Z,V.x,V.y,V.z,Mt,Tt,Ct,It,kt,le),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,we),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nn),Z===0&&j.generateMipmaps&&C.generateMipmap(Dt),X.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),X.unbindTexture()},this.resetState=function(){R=0,x=0,A=null,X.reset(),zt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Bl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?Ai:su}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ai?xe:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},dl=class extends Js{};dl.prototype.isWebGL1Renderer=!0;var Ma=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_s=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ba=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ze=new L,Ks=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ln=class extends Cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ns,Us=new L,is=new L,ss=new L,rs=new dt,Ds=new dt,gu=new $t,Xr=new L,Ns=new L,qr=new L,Ch=new dt,zo=new dt,Ph=new dt,vn=class extends _e{constructor(t=new ln){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ba(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Ks(n,3,0,!1)),ns.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Yr(Xr.set(-.5,-.5,0),ss,o,is,i,r),Yr(Ns.set(.5,-.5,0),ss,o,is,i,r),Yr(qr.set(.5,.5,0),ss,o,is,i,r),Ch.set(0,0),zo.set(1,0),Ph.set(1,1);let a=t.ray.intersectTriangle(Xr,Ns,qr,!1,Us);if(a===null&&(Yr(Ns.set(-.5,.5,0),ss,o,is,i,r),zo.set(0,1),a=t.ray.intersectTriangle(Xr,qr,Ns,!1,Us),a===null))return;let l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:Ei.getInterpolation(Us,Xr,Ns,qr,Ch,zo,Ph,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yr(s,t,e,n,i,r){rs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ds.x=r*rs.x-i*rs.y,Ds.y=i*rs.x+r*rs.y):Ds.copy(rs),s.copy(t),s.x+=Ds.x,s.y+=Ds.y,s.applyMatrix4(gu)}var js=class extends he{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new $t,Lh=new $t,$r=[],Ih=new qn,Ox=new $t,Os=new Nt,Fs=new Yn,Qs=class extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Ih.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Fs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,as),Lh.multiplyMatrices(n,as),Os.matrixWorld=Lh,Os.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){let l=$r[o];l.instanceId=r,l.object=this,e.push(l)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uh=new L,Dh=new L,Nh=new $t,Ho=new gs,Zr=new Yn,pl=class extends _e{constructor(t=new te,e=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Uh.fromBufferAttribute(e,i-1),Dh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Uh.distanceTo(Dh);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Nh.copy(i).invert(),Ho.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,f=new L,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=m,T=b-1;v<T;v+=d){let R=g.getX(v),x=g.getX(v+1);if(c.fromBufferAttribute(p,R),h.fromBufferAttribute(p,x),Ho.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let B=t.ray.origin.distanceTo(f);B<t.near||B>t.far||e.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let v=m,T=b-1;v<T;v+=d){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Ho.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let x=t.ray.origin.distanceTo(f);x<t.near||x>t.far||e.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Oh=new L,Fh=new L,Sa=class extends pl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Oh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oh.distanceTo(Fh);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ci=class extends Cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bh=new $t,ml=new gs,Jr=new Yn,Kr=new L,Pi=class extends _e{constructor(t=new te,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Bh.copy(i).invert(),ml.copy(t.ray).applyMatrix4(Bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);Kr.fromBufferAttribute(u,p),zh(Kr,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Kr.fromBufferAttribute(u,g),zh(Kr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zh(s,t,e,n,i,r,o){let a=ml.distanceSqToPoint(s);if(a<e){let l=new L;ml.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var ys=class extends an{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new dt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,l=new $t;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ce(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ce(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},er=class extends cn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new dt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gl=class extends er{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var jr=new L,ko=new kl,Vo=new kl,Go=new kl,vs=class extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(jr.subVectors(i[0],i[1]).add(i[0]),c=jr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(jr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ko.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,p),Vo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,p),Go.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Vo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ko.calc(l),Vo.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Fx(s,t){let e=1-s;return e*e*t}function Bx(s,t){return 2*(1-s)*s*t}function zx(s,t){return s*s*t}function Vs(s,t,e,n){return Fx(s,t)+Bx(s,e)+zx(s,n)}function Hx(s,t){let e=1-s;return e*e*e*t}function kx(s,t){let e=1-s;return 3*e*e*s*t}function Vx(s,t){return 3*(1-s)*s*s*t}function Gx(s,t){return s*s*s*t}function Gs(s,t,e,n,i){return Hx(s,t)+kx(s,e)+Vx(s,n)+Gx(s,i)}var Ea=class extends cn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,r.x,o.x,a.x),Gs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xl=class extends cn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,r.x,o.x,a.x),Gs(t,i.y,r.y,o.y,a.y),Gs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends cn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends cn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,i.x,r.x,o.x),Vs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,i.x,r.x,o.x),Vs(t,i.y,r.y,o.y),Vs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Hh(a,l.x,c.x,h.x,u.x),Hh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:vs,CubicBezierCurve:Ea,CubicBezierCurve3:xl,EllipseCurve:er,LineCurve:Ta,LineCurve3:_l,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Aa,SplineCurve:Ra}),yl=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ca[i.type]().fromJSON(i))}return this}},Pa=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ta(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new wa(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ea(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new er(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Li=class s extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mn=class s extends te{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=n/2,m=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function b(){let T=new L,R=new L,x=0,A=(e-t)/n;for(let B=0;B<=r;B++){let _=[],E=B/r,z=E*(e-t)+t;for(let K=0;K<=i;K++){let it=K/i,I=it*l+a,O=Math.sin(I),W=Math.cos(I);R.x=z*O,R.y=-E*n+p,R.z=z*W,u.push(R.x,R.y,R.z),T.set(O,A,W).normalize(),f.push(T.x,T.y,T.z),d.push(it,1-E),_.push(g++)}y.push(_)}for(let B=0;B<i;B++)for(let _=0;_<r;_++){let E=y[_][B],z=y[_+1][B],K=y[_+1][B+1],it=y[_][B+1];h.push(E,z,it),h.push(z,K,it),x+=6}c.addGroup(m,x,0),m+=x}function v(T){let R=g,x=new dt,A=new L,B=0,_=T===!0?t:e,E=T===!0?1:-1;for(let K=1;K<=i;K++)u.push(0,p*E,0),f.push(0,E,0),d.push(.5,.5),g++;let z=g;for(let K=0;K<=i;K++){let I=K/i*l+a,O=Math.cos(I),W=Math.sin(I);A.x=_*W,A.y=p*E,A.z=_*O,u.push(A.x,A.y,A.z),f.push(0,E,0),x.x=O*.5+.5,x.y=W*.5*E+.5,d.push(x.x,x.y),g++}for(let K=0;K<i;K++){let it=R+K,I=z+K;T===!0?h.push(I,I+1,it):h.push(I+1,I,it),B+=3}c.addGroup(m,B,T===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},La=class s extends Mn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vl=class s extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new L,T=new L,R=new L;for(let x=0;x<e.length;x+=3)d(e[x+0],v),d(e[x+1],T),d(e[x+2],R),l(v,T,R,b)}function l(b,v,T,R){let x=R+1,A=[];for(let B=0;B<=x;B++){A[B]=[];let _=b.clone().lerp(T,B/x),E=v.clone().lerp(T,B/x),z=x-B;for(let K=0;K<=z;K++)K===0&&B===x?A[B][K]=_:A[B][K]=_.clone().lerp(E,K/z)}for(let B=0;B<x;B++)for(let _=0;_<2*(x-B)-1;_++){let E=Math.floor(_/2);_%2===0?(f(A[B][E+1]),f(A[B+1][E]),f(A[B][E])):(f(A[B][E+1]),f(A[B+1][E+1]),f(A[B+1][E]))}}function c(b){let v=new L;for(let T=0;T<r.length;T+=3)v.x=r[T+0],v.y=r[T+1],v.z=r[T+2],v.normalize().multiplyScalar(b),r[T+0]=v.x,r[T+1]=v.y,r[T+2]=v.z}function h(){let b=new L;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let T=p(b)/2/Math.PI+.5,R=m(b)/Math.PI+.5;o.push(T,1-R)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let v=o[b+0],T=o[b+2],R=o[b+4],x=Math.max(v,T,R),A=Math.min(v,T,R);x>.9&&A<.1&&(v<.2&&(o[b+0]+=1),T<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,v){let T=b*3;v.x=t[T+0],v.y=t[T+1],v.z=t[T+2]}function g(){let b=new L,v=new L,T=new L,R=new L,x=new dt,A=new dt,B=new dt;for(let _=0,E=0;_<r.length;_+=9,E+=6){b.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),T.set(r[_+6],r[_+7],r[_+8]),x.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),B.set(o[E+4],o[E+5]),R.copy(b).add(v).add(T).divideScalar(3);let z=p(R);y(x,E+0,b,z),y(A,E+2,v,z),y(B,E+4,T,z)}}function y(b,v,T,R){R<0&&b.x===1&&(o[v]=b.x-1),T.x===0&&T.z===0&&(o[v]=R/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ms=class extends Pa{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Pa().fromJSON(i))}return this}},Wx={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=xu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Zx(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return nr(r,o,e,a,l,d,0),o}};function xu(s,t,e,n,i){let r,o;if(i===a_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=kh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=kh(r,s[r],s[r+1],o);return o&&Ha(o,o.next)&&(sr(o),o=o.next),o}function Ii(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ha(e,e.next)||ce(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function nr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&t_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qx(s,n,i,r):Xx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),sr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Yx(Ii(s),t,e),nr(s,t,e,n,i,r,2)):o===2&&$x(s,t,e,n,i,r):nr(Ii(s),t,e,n,i,r,1);break}}}function Xx(s){let t=s.prev,e=s,n=s.next;if(ce(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&cs(i,a,r,l,o,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qx(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ce(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,y=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Ml(d,g,t,e,n),b=Ml(y,p,t,e,n),v=s.prevZ,T=s.nextZ;for(;v&&v.z>=m&&T&&T.z<=b;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&cs(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0||(v=v.prevZ,T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&cs(a,h,l,u,c,f,T.x,T.y)&&ce(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&cs(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;T&&T.z<=b;){if(T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&cs(a,h,l,u,c,f,T.x,T.y)&&ce(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Yx(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ha(i,r)&&_u(i,n,n.next,r)&&ir(i,r)&&ir(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),sr(n),sr(n.next),n=s=r),n=n.next}while(n!==s);return Ii(n)}function $x(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i_(o,a)){let l=yu(o,a);o=Ii(o,o.next),l=Ii(l,l.next),nr(o,t,e,n,i,r,0),nr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Zx(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=xu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(n_(c));for(i.sort(Jx),r=0;r<i.length;r++)e=Kx(i[r],e);return e}function Jx(s,t){return s.x-t.x}function Kx(s,t){let e=jx(s,t);if(!e)return t;let n=yu(e,s);return Ii(n,n.next),Ii(e,e.next)}function jx(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&cs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ir(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Qx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Qx(s,t){return ce(s.prev,s,t.prev)<0&&ce(t.next,s,s.next)<0}function t_(s,t,e,n){let i=s;do i.z===0&&(i.z=Ml(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,e_(i)}function e_(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ml(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function n_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function cs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function i_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!s_(s,t)&&(ir(s,t)&&ir(t,s)&&r_(s,t)&&(ce(s.prev,s,t.prev)||ce(s,t.prev,t))||Ha(s,t)&&ce(s.prev,s,s.next)>0&&ce(t.prev,t,t.next)>0)}function ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ha(s,t){return s.x===t.x&&s.y===t.y}function _u(s,t,e,n){let i=ta(ce(s,t,e)),r=ta(ce(s,t,n)),o=ta(ce(e,n,s)),a=ta(ce(e,n,t));return!!(i!==r&&o!==a||i===0&&Qr(s,e,t)||r===0&&Qr(s,n,t)||o===0&&Qr(e,s,n)||a===0&&Qr(e,t,n))}function Qr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ta(s){return s>0?1:s<0?-1:0}function s_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ir(s,t){return ce(s.prev,s,s.next)<0?ce(s,t,s.next)>=0&&ce(s,s.prev,t)>=0:ce(s,t,s.prev)<0||ce(s,s.next,t)<0}function r_(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function yu(s,t){let e=new bl(s.i,s.x,s.y),n=new bl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kh(s,t,e,n){let i=new bl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ws=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Vh(t),Gh(n,t);let o=t.length;e.forEach(Vh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Gh(n,e[l]);let a=Wx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var rr=class s extends te{constructor(t=new Ms([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Bt(i,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:o_,v,T=!1,R,x,A,B;m&&(v=m.getSpacedPoints(h),T=!0,f=!1,R=m.computeFrenetFrames(h,!1),x=new L,A=new L,B=new L),f||(p=0,d=0,g=0,y=0);let _=a.extractPoints(c),E=_.shape,z=_.holes;if(!Ws.isClockWise(E)){E=E.reverse();for(let C=0,lt=z.length;C<lt;C++){let P=z[C];Ws.isClockWise(P)&&(z[C]=P.reverse())}}let it=Ws.triangulateShape(E,z),I=E;for(let C=0,lt=z.length;C<lt;C++){let P=z[C];E=E.concat(P)}function O(C,lt,P){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(lt,P)}let W=E.length,N=it.length;function k(C,lt,P){let q,X,vt,ot=C.x-lt.x,S=C.y-lt.y,M=P.x-C.x,H=P.y-C.y,ct=ot*ot+S*S,rt=ot*H-S*M;if(Math.abs(rt)>Number.EPSILON){let ht=Math.sqrt(ct),Et=Math.sqrt(M*M+H*H),xt=lt.x-S/ht,bt=lt.y+ot/ht,At=P.x-H/Et,Ot=P.y+M/Et,ut=((At-xt)*H-(Ot-bt)*M)/(ot*H-S*M);q=xt+ot*ut-C.x,X=bt+S*ut-C.y;let Yt=q*q+X*X;if(Yt<=2)return new dt(q,X);vt=Math.sqrt(Yt/2)}else{let ht=!1;ot>Number.EPSILON?M>Number.EPSILON&&(ht=!0):ot<-Number.EPSILON?M<-Number.EPSILON&&(ht=!0):Math.sign(S)===Math.sign(H)&&(ht=!0),ht?(q=-S,X=ot,vt=Math.sqrt(ct)):(q=ot,X=S,vt=Math.sqrt(ct/2))}return new dt(q/vt,X/vt)}let Y=[];for(let C=0,lt=I.length,P=lt-1,q=C+1;C<lt;C++,P++,q++)P===lt&&(P=0),q===lt&&(q=0),Y[C]=k(I[C],I[P],I[q]);let st=[],at,pt=Y.concat();for(let C=0,lt=z.length;C<lt;C++){let P=z[C];at=[];for(let q=0,X=P.length,vt=X-1,ot=q+1;q<X;q++,vt++,ot++)vt===X&&(vt=0),ot===X&&(ot=0),at[q]=k(P[q],P[vt],P[ot]);st.push(at),pt=pt.concat(at)}for(let C=0;C<p;C++){let lt=C/p,P=d*Math.cos(lt*Math.PI/2),q=g*Math.sin(lt*Math.PI/2)+y;for(let X=0,vt=I.length;X<vt;X++){let ot=O(I[X],Y[X],q);$(ot.x,ot.y,-P)}for(let X=0,vt=z.length;X<vt;X++){let ot=z[X];at=st[X];for(let S=0,M=ot.length;S<M;S++){let H=O(ot[S],at[S],q);$(H.x,H.y,-P)}}}let Q=g+y;for(let C=0;C<W;C++){let lt=f?O(E[C],pt[C],Q):E[C];T?(A.copy(R.normals[0]).multiplyScalar(lt.x),x.copy(R.binormals[0]).multiplyScalar(lt.y),B.copy(v[0]).add(A).add(x),$(B.x,B.y,B.z)):$(lt.x,lt.y,0)}for(let C=1;C<=h;C++)for(let lt=0;lt<W;lt++){let P=f?O(E[lt],pt[lt],Q):E[lt];T?(A.copy(R.normals[C]).multiplyScalar(P.x),x.copy(R.binormals[C]).multiplyScalar(P.y),B.copy(v[C]).add(A).add(x),$(B.x,B.y,B.z)):$(P.x,P.y,u/h*C)}for(let C=p-1;C>=0;C--){let lt=C/p,P=d*Math.cos(lt*Math.PI/2),q=g*Math.sin(lt*Math.PI/2)+y;for(let X=0,vt=I.length;X<vt;X++){let ot=O(I[X],Y[X],q);$(ot.x,ot.y,u+P)}for(let X=0,vt=z.length;X<vt;X++){let ot=z[X];at=st[X];for(let S=0,M=ot.length;S<M;S++){let H=O(ot[S],at[S],q);T?$(H.x,H.y+v[h-1].y,v[h-1].x+P):$(H.x,H.y,u+P)}}}U(),F();function U(){let C=i.length/3;if(f){let lt=0,P=W*lt;for(let q=0;q<N;q++){let X=it[q];tt(X[2]+P,X[1]+P,X[0]+P)}lt=h+p*2,P=W*lt;for(let q=0;q<N;q++){let X=it[q];tt(X[0]+P,X[1]+P,X[2]+P)}}else{for(let lt=0;lt<N;lt++){let P=it[lt];tt(P[2],P[1],P[0])}for(let lt=0;lt<N;lt++){let P=it[lt];tt(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}n.addGroup(C,i.length/3-C,0)}function F(){let C=i.length/3,lt=0;G(I,lt),lt+=I.length;for(let P=0,q=z.length;P<q;P++){let X=z[P];G(X,lt),lt+=X.length}n.addGroup(C,i.length/3-C,1)}function G(C,lt){let P=C.length;for(;--P>=0;){let q=P,X=P-1;X<0&&(X=C.length-1);for(let vt=0,ot=h+p*2;vt<ot;vt++){let S=W*vt,M=W*(vt+1),H=lt+q+S,ct=lt+X+S,rt=lt+X+M,ht=lt+q+M;et(H,ct,rt,ht)}}}function $(C,lt,P){l.push(C),l.push(lt),l.push(P)}function tt(C,lt,P){nt(C),nt(lt),nt(P);let q=i.length/3,X=b.generateTopUV(n,i,q-3,q-2,q-1);ft(X[0]),ft(X[1]),ft(X[2])}function et(C,lt,P,q){nt(C),nt(lt),nt(q),nt(lt),nt(P),nt(q);let X=i.length/3,vt=b.generateSideWallUV(n,i,X-6,X-3,X-2,X-1);ft(vt[0]),ft(vt[1]),ft(vt[3]),ft(vt[1]),ft(vt[2]),ft(vt[3])}function nt(C){i.push(l[C*3+0]),i.push(l[C*3+1]),i.push(l[C*3+2])}function ft(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ca[i.type]().fromJSON(i)),new s(n,t.options)}},o_={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-u),new dt(f,1-g),new dt(y,1-m)]:[new dt(a,1-l),new dt(h,1-u),new dt(d,1-g),new dt(p,1-m)]}};function l_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ar=class s extends vl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ia=class s extends te{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new L,g=new dt;for(let y=0;y<=i;y++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<i;y++){let p=y*(n+1);for(let m=0;m<n;m++){let b=m+p,v=b,T=b+n+1,R=b+n+2,x=b+1;a.push(v,T,x),a.push(T,R,x)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ui=class s extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let b=[],v=m/n,T=0;m===0&&o===0?T=.5/e:m===n&&l===Math.PI&&(T=-.5/e);for(let R=0;R<=e;R++){let x=R/e;u.x=-t*Math.cos(i+x*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+x*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(x+T,1-v),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let v=h[m][b+1],T=h[m][b],R=h[m+1][b],x=h[m+1][b+1];(m!==0||o>0)&&d.push(v,T,x),(m!==n-1||l<Math.PI)&&d.push(T,R,x)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hn=class s extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let y=g/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let y=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,b=(i+1)*d+g;o.push(y,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var or=class s extends te{constructor(t=new Aa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new dt,h=new L,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),b(),m()}function p(v){h=t.getPointAt(v/e,h);let T=o.normals[v],R=o.binormals[v];for(let x=0;x<=i;x++){let A=x/i*Math.PI*2,B=Math.sin(A),_=-Math.cos(A);l.x=_*T.x+B*R.x,l.y=_*T.y+B*R.y,l.z=_*T.z+B*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let T=1;T<=i;T++){let R=(i+1)*(v-1)+(T-1),x=(i+1)*v+(T-1),A=(i+1)*v+T,B=(i+1)*(v-1)+T;g.push(R,x,B),g.push(x,A,B)}}function b(){for(let v=0;v<=e;v++)for(let T=0;T<=i;T++)c.x=v/e,c.y=T/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ua=class extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let g=f,y=f+d;g<y;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),b=a.getX(g+(p+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,b),Wh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Wh(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Bt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Wh(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var un=class extends Cn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ea(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function c_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kc:r=t,a=2*e-n;break;case Vc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:o=t,l=2*n-e;break;case Vc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,b=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*y+.5*g,T=d*p-d*y;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+b*o[c+R]+v*o[l+R]+T*o[u+R];return r}},El=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Tl=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ea(e,this.TimeBufferType),this.values=ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ea(t.times,Array),values:ea(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ia:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&c_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=sa;var Di=class extends bn{};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ia;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends bn{};wl.prototype.ValueTypeName="color";var Al=class extends bn{};Al.prototype.ValueTypeName="number";var Rl=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},lr=class extends bn{InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.DefaultInterpolation=sa;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends bn{};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ia;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends bn{};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},h_=new Pl,Ll=class{constructor(t){this.manager=t!==void 0?t:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ss=class extends Da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wo=new $t,Xh=new L,qh=new L,Il=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qh),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ul=class extends Il{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oi=class extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Na=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Yh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Yh(){return(typeof performance=="undefined"?Date:performance).now()}var Vl="\\[\\]\\.:\\/",u_=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",f_="[^"+Vl.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Gl),p_=/(WCOD+)?/.source.replace("WCOD",f_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),x_=new RegExp("^"+d_+p_+m_+g_+"$"),__=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(t){let e=x_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Dl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var Oa=class{constructor(t,e,n=0,i=1/0){this.ray=new gs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Nl(t,this,n,e),n.sort($h),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Nl(t[i],this,n,e);return n.sort($h),n}};function $h(s,t){return s.distance-t.distance}function Nl(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Nl(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Mu(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new te,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=vu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new he(o,e,n);return i!==void 0&&(l.gpuType=i),l}function Ge(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Pn='"Poppins","Segoe UI",system-ui,Arial,sans-serif',Ln=(s,t)=>{let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]},In=(s,t=4)=>{let e=new ys(s);return e.colorSpace=xe,e.anisotropy=t,e};function Wl(s,t,e,n,i,r){s.beginPath(),s.roundRect?s.roundRect(t,e,n,i,r):s.rect(t,e,n,i)}function hr(){let[s,t]=Ln(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.55,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),In(s,1)}function ka(s){let[t,e]=Ln(1024,256),n={nupa:"rgba(70,200,255,.75)",sliit:"rgba(190,170,255,.55)",labs:"rgba(170,110,255,.8)"}[s],i={nupa:["#080e20","#122042"],sliit:["#1d2268","#0f1240"],labs:["#1d1046","#2b1760"]}[s],r=e.createLinearGradient(0,0,0,256);if(r.addColorStop(0,i[0]),r.addColorStop(1,i[1]),Wl(e,6,6,1012,244,26),e.fillStyle=r,e.fill(),e.lineWidth=4,e.strokeStyle=n,e.stroke(),e.textBaseline="alphabetic",s==="nupa"){let o=e.createLinearGradient(70,60,190,200);o.addColorStop(0,"#40f0ff"),o.addColorStop(1,"#2a7bff"),e.save(),e.shadowColor="#2fd6ff",e.shadowBlur=24,e.lineWidth=36,e.lineJoin="round",e.lineCap="round",e.strokeStyle=o,e.beginPath(),e.moveTo(92,190),e.lineTo(92,66),e.lineTo(188,190),e.lineTo(188,66),e.stroke(),e.restore(),e.fillStyle="#fff",e.font=`700 118px ${Pn}`,e.fillText("NupaStack",250,178)}if(s==="sliit"){e.save(),e.translate(44,28),e.beginPath(),e.moveTo(0,0),e.lineTo(150,0),e.lineTo(150,120),e.quadraticCurveTo(150,190,75,204),e.quadraticCurveTo(0,190,0,120),e.closePath(),e.fillStyle="#fff",e.fill(),e.clip();let o=["#3a3fb8","#7a4fd0","#2c8fe0"],a=Ge(5);for(let l=0;l<4;l++)for(let c=0;c<4;c++)e.fillStyle=(l+c)%2?"#fff":o[Math.floor(a()*3)],e.fillRect(12+l*32,14+c*32,30,30);e.fillStyle="#2c2f93",e.fillRect(12,148,126,40),e.restore(),e.fillStyle="#fff",e.font=`700 100px ${Pn}`,e.fillText("SLIIT",235,120),e.fillStyle="#e7e5ff",e.font=`600 78px ${Pn}`,e.fillText("University",235,212)}return s==="labs"&&(e.save(),e.shadowColor="#b58cff",e.shadowBlur=26,e.fillStyle="#d6c4ff",e.font='700 118px "Consolas","Courier New",monospace',e.fillText("</>",36,168),e.restore(),e.fillStyle="#fff",e.font=`700 84px ${Pn}`,e.fillText("My Projects",330,118),e.fillStyle="#e4d8ff",e.font=`700 88px ${Pn}`,e.fillText("Lab",330,212)),In(t,8)}function bu(){let[s,t]=Ln(256,768);t.clearRect(0,0,256,768),t.beginPath(),t.moveTo(8,0),t.lineTo(248,0),t.lineTo(248,740),t.lineTo(128,690),t.lineTo(8,740),t.closePath();let e=t.createLinearGradient(0,0,0,768);e.addColorStop(0,"#2a3aa8"),e.addColorStop(1,"#0f1648"),t.fillStyle=e,t.fill(),t.lineWidth=8,t.strokeStyle="#e9d9a8",t.stroke(),t.save(),t.translate(128,250),t.fillStyle="#fff",t.beginPath(),t.moveTo(0,20),t.quadraticCurveTo(-50,-10,-96,10),t.lineTo(-96,90),t.quadraticCurveTo(-50,70,0,100),t.closePath(),t.fill(),t.beginPath(),t.moveTo(0,20),t.quadraticCurveTo(50,-10,96,10),t.lineTo(96,90),t.quadraticCurveTo(50,70,0,100),t.closePath(),t.fill(),t.strokeStyle="#7d86ff",t.lineWidth=5;for(let n=0;n<3;n++)t.beginPath(),t.moveTo(-80,34+n*16),t.lineTo(-18,38+n*16),t.moveTo(80,34+n*16),t.lineTo(18,38+n*16),t.stroke();return t.restore(),t.fillStyle="#fff",t.textAlign="center",t.font=`600 40px ${Pn}`,t.fillText("Education",128,480),t.fillText("& Learning",128,530),In(s,4)}function Su(){let[s,t]=Ln(512,512);t.textAlign="center",t.textBaseline="middle",t.font=`700 250px ${Pn}`;let e=t.createLinearGradient(0,130,0,380);return e.addColorStop(0,"#7ffbff"),e.addColorStop(1,"#2c8bff"),t.shadowColor="#22d4ff",t.shadowBlur=50,t.fillStyle=e,t.fillText("KP",256,270),t.fillText("KP",256,270),t.shadowBlur=0,t.fillText("KP",256,270),In(s,4)}function Eu(s,t){let[e,n]=Ln(768,220);Wl(n,6,6,756,208,34),n.fillStyle="rgba(14,22,62,.82)",n.fill(),n.lineWidth=3,n.strokeStyle="rgba(120,205,255,.7)",n.stroke(),n.textAlign="center",n.fillStyle="#fff";let i=72;for(n.font=`600 ${i}px ${Pn}`;n.measureText(s).width>690&&i>30;)i-=2,n.font=`600 ${i}px ${Pn}`;return n.fillText(s,384,100),n.fillStyle="#cfe4ff",n.font=`400 56px ${Pn}`,n.fillText(t,384,176),In(e,4)}function Tu(){let[s,t]=Ln(256,256);t.translate(128,128);let e=9,n=100,i=76;t.beginPath();for(let o=0;o<e*2;o++){let a=o/(e*2)*Math.PI*2,l=(o+1)/(e*2)*Math.PI*2,c=o%2?i:n;t.lineTo(Math.cos(a+.08)*c,Math.sin(a+.08)*c),t.lineTo(Math.cos(l-.08)*c,Math.sin(l-.08)*c)}t.closePath(),t.arc(0,0,34,0,Math.PI*2,!0);let r=t.createLinearGradient(-100,-100,100,100);return r.addColorStop(0,"#d6c0ff"),r.addColorStop(1,"#8a4dff"),t.shadowColor="#b27dff",t.shadowBlur=30,t.fillStyle=r,t.fill("evenodd"),In(s,4)}function wu(){let[t,e]=Ln(1024,1024),n=Ge(11);e.fillStyle="#8f8cab",e.fillRect(0,0,1024,1024);let i=[70,140,230,330,420,480,512],r=[1,14,22,32,44,56,64];e.translate(1024/2,1024/2);for(let l=1;l<i.length;l++){let c=i[l-1],h=i[l],u=r[l],f=l%2?0:Math.PI/u;for(let d=0;d<u;d++){let g=f+d/u*Math.PI*2,y=f+(d+1)/u*Math.PI*2,p=56+n()*10+(l===6?8:0);e.beginPath(),e.arc(0,0,h,g,y),e.arc(0,0,c,y,g,!0),e.closePath(),e.fillStyle=`hsl(250,${14+n()*6}%,${p}%)`,e.fill(),e.lineWidth=3,e.strokeStyle="rgba(40,30,80,.5)",e.stroke()}}let o=e.createRadialGradient(0,0,60,0,0,300);return o.addColorStop(0,"rgba(150,230,255,.28)"),o.addColorStop(1,"rgba(150,230,255,0)"),e.fillStyle=o,e.fillRect(-1024/2,-1024/2,1024,1024),In(t,8)}function Au(){let[s,t]=Ln(512,512),e=Ge(3);t.fillStyle="#2f6e45",t.fillRect(0,0,512,512);for(let i=0;i<420;i++)t.fillStyle=e()>.5?"rgba(80,170,90,.10)":"rgba(10,50,60,.12)",t.beginPath(),t.arc(e()*512,e()*512,6+e()*26,0,7),t.fill();for(let i=0;i<2600;i++){t.strokeStyle=e()>.5?"rgba(120,210,120,.35)":"rgba(10,60,50,.35)";let r=e()*512,o=e()*512;t.beginPath(),t.moveTo(r,o),t.lineTo(r+e()*4-2,o-3-e()*5),t.stroke()}let n=In(s,4);return n.wrapS=n.wrapT=Ri,n.repeat.set(10,7),n}function Ru(){let[s,t]=Ln(512,128),e=Ge(9);for(let n=0;n<46;n++){let i=70+e()*372,r=64+(e()-.5)*34,o=22+e()*34,a=t.createRadialGradient(i,r,0,i,r,o);a.addColorStop(0,"rgba(255,255,255,.28)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(i-o,r-o,o*2,o*2)}return In(s,1)}function Va(s){let[n,i]=Ln(1024,512),r=Ge(s.length*31+7),o={nupa:{cols:8,rows:2,top:"#fff3cf",bot:"#ffb55a",frame:"#0c1326"},sliit:{cols:5,rows:2,top:"#fff7e0",bot:"#ffc272",frame:"#8a6a4c"},labs:{cols:6,rows:2,top:"#7a45ff",bot:"#2a1070",frame:"#100829"}}[s];i.fillStyle=o.frame,i.fillRect(0,0,1024,512);let a=12,l=(1024-a)/o.cols,c=(512-a)/o.rows;for(let u=0;u<o.rows;u++)for(let f=0;f<o.cols;f++){let d=a/2+f*l+a/2,g=a/2+u*c+a/2,y=l-a,p=c-a,m=i.createLinearGradient(0,g,0,g+p);if(m.addColorStop(0,o.top),m.addColorStop(1,o.bot),i.fillStyle=m,i.fillRect(d,g,y,p),r()<.14&&s!=="sliit"&&(i.fillStyle="rgba(8,12,30,.5)",i.fillRect(d,g,y,p)),s==="nupa")i.fillStyle="rgba(255,255,255,.9)",i.fillRect(d+y*.2,g+6,y*.6,5),i.fillStyle="rgba(15,22,48,.85)",i.fillRect(d+6,g+p*.66,y-12,10),i.fillStyle="#58d3ff",i.fillRect(d+y*.2,g+p*.5,y*.22,p*.16),i.fillStyle="rgba(15,22,48,.85)",r()>.4&&(i.beginPath(),i.arc(d+y*.68,g+p*.42,9,0,7),i.fill(),Wl(i,d+y*.68-14,g+p*.48,28,p*.22,8),i.fill());else if(s==="sliit"){for(let b=0;b<6;b++)i.fillStyle=["#8a4b2a","#c0803f","#5a3a66","#3d6a8a"][Math.floor(r()*4)],i.fillRect(d+8+b*9,g+p*.3,7,p*.62),i.fillRect(d+y-14-b*9,g+p*.3,7,p*.62);i.fillStyle="rgba(255,255,255,.7)",i.beginPath(),i.arc(d+y/2,g+18,8,0,7),i.fill(),i.fillStyle="rgba(70,40,20,.75)",i.fillRect(d+y*.3,g+p*.7,y*.4,9)}else{for(let b=0;b<3;b++){let v=i.createLinearGradient(0,0,0,1);i.fillStyle=r()>.5?"#8fe9ff":"#b9a0ff",i.fillRect(d+8+b*(y/3),g+p*.38,y/3-12,p*.22)}i.fillStyle="rgba(10,6,30,.9)",i.fillRect(d+4,g+p*.64,y-8,9),i.beginPath(),i.arc(d+y*(.3+r()*.4),g+p*.6,8,0,7),i.fill()}}let h=i.createLinearGradient(0,0,1024,512);return h.addColorStop(.3,"rgba(255,255,255,0)"),h.addColorStop(.45,"rgba(255,255,255,.12)"),h.addColorStop(.6,"rgba(255,255,255,0)"),i.fillStyle=h,i.fillRect(0,0,1024,512),In(n,8)}var We={name:"Kavidu_H_Premasiri",fullName:"G.K.H. Premasiri",initials:"KP",tagline:"3D Portfolio",role:"Software Engineering Intern",links:{github:"https://github.com/Kavidu-h-Premasiri",linkedin:"https://lk.linkedin.com/in/kavidu-h-premasiri",email:"mailto:kavindupremasiri272@gmail.com"},places:{about:{label:"About me",kicker:"G.K.H. Premasiri \xB7 Software Engineering Intern",title:"Kavidu_H_Premasiri",text:"I'm a Software Engineering Intern and a third-year, first-semester undergraduate pursuing a BSc (Hons) in Computer Science. I'm passionate about software development, modern web technologies, 3D experiences, and DevOps, with a strong drive to build innovative solutions and continuously grow as a software engineer.",groups:[{title:"Programming & Frameworks",items:["Spring Boot","React","Go","Node.js","Java","Python","R","C#","Tailwind CSS","HTML","CSS3","JavaScript","PHP"]},{title:"Cloud Computing",items:["AWS","Railway","Vercel","Netlify"]},{title:"Containerization & Orchestration",items:["Docker"]},{title:"Testing",items:["Playwright","JMeter","JUnit","Mockito"]},{title:"Code Quality",items:["SonarQube"]},{title:"Databases",items:["MongoDB","MySQL","PostgreSQL","Supabase"]},{title:"Authentication & Security",items:["Keycloak"]},{title:"Version Control",items:["Git","GitLab"]},{title:"Soft Skills",items:["Team Collaboration","Project Management","Analytical Thinking","Documentation"]}],buttons:[{label:"GitHub",href:"github"},{label:"LinkedIn",href:"linkedin"},{label:"Email",href:"email"}]},sliit:{label:"SLIIT University",kicker:"Education & Learning",title:"SLIIT University",text:"Pursuing a BSc (Hons) in Computer Science, now in the final year.",points:["Degree: BSc (Hons) Computer Science","Current year: 3rd year, 1st semester (final year)","Expected graduation: April 2027"],tags:["Software Development","Modern Web","3D Experiences","DevOps"]},nupa:{label:"NupaStack",kicker:"Software Engineering Intern",title:"NupaStack",text:"I work as a Software Engineering Intern at NupaStack, a cloud and DevOps delivery firm focused on AWS. NupaStack designs, builds and operates cloud infrastructure so clients can ship without an in-house DevOps team.",points:["Role: Software Engineering Intern","Cloud Audit \u2013 review of AWS architecture, security and spend","Implementation \u2013 migrations, infrastructure as code, CI/CD","DevOps Retainer \u2013 ongoing infrastructure management","Custom Software \u2013 cloud-native apps, APIs and tools"],tags:["AWS","DevOps","Cloud","Custom Software"],buttons:[{label:"Visit nupastack.com",href:"https://nupastack.com/"}]},labs:{label:"My Projects Lab",kicker:"Projects",title:"My Projects Lab",text:"A selection of the websites and systems I have built.",projects:[{title:"Leads Preschool Website (MERN)",room:"preschool",year:"2025",href:"https://leads-preschool.vercel.app/",bullets:["Preschool learning and classroom management web app supporting lesson planning, student engagement activities and basic progress tracking for early childhood education.","Full-stack system using React, CSS, Node.js and MongoDB to manage educational content and store student-related data efficiently.","Extra features: an AI chatbot for user assistance and a QR code-based attendance system."],stack:["React","CSS","Node.js","MongoDB","Docker","AWS (basic hands-on)","Vercel","Railway"]},{title:"Randu Salon Website"},{title:"TaskFlow \u2013 Full-Stack Team Collaboration & Task Management System",year:"2026",bullets:["Collaborative full-stack task management web app using React, TypeScript and Tailwind CSS on the frontend and Go (Golang) on the backend, with real-time team messaging and role-based access control (Admin/Member).","Secure Go backend using Gin and GORM with PostgreSQL, Amazon S3 for profile media and file attachments, and an automated AWS CI/CD pipeline with CodePipeline and Docker for seamless cloud deployments."],stack:["React","TypeScript","Go","PostgreSQL","AWS (S3 / CodePipeline)","Docker","Tailwind CSS","Git","Docker Hub"]},{title:"New Year Auspicious Time Website",room:"avurudu",year:"2026",href:"https://kaviduhpremasiri-nine.vercel.app/",bullets:['Responsive "Nakath Charithra" web app that displays traditional Sri Lankan auspicious times.',"Client-side time calculations and dynamic updates in JavaScript to determine and show accurate Nakath (auspicious) time information in a user-friendly interface."],stack:["React","CSS","JavaScript","Vercel"]},{title:"Poker Game Website"}],buttons:[{label:"Enter the 3D Lab \u2192",action:"lab"},{label:"More on GitHub",href:"github"}]}}};var Xl={ax:30,az:17,water:-2.6},Xe={z:3,r:8},Wa=14246031,y_=s=>new L((s>>16&255)/255,(s>>8&255)/255,(s&255)/255),ur=s=>{let t=s.index?s.toNonIndexed():s;for(let e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t},Sn={box:ur(new on(1,1,1)),cyl:ur(new Mn(1,1,1,12)),cone:ur(new La(1,1,8)),ico:ur(new ar(1,1))},Pu=new $t,Lu=new Qe,Iu=new $n,Uu=new L,Du=new L,Ga=new Pt,Ts=class{constructor(){this.parts={lit:[],glow:[]},this.base=new $t,this.stack=[]}push(t){this.stack.push(this.base.clone()),this.base.multiply(t)}pop(){this.base=this.stack.pop()}add(t,e,n,i={}){var l,c,h;let r=ur(e.clone());Iu.set(i.rx||0,i.ry||0,i.rz||0),Lu.setFromEuler(Iu),Uu.set(i.x||0,i.y||0,i.z||0),Du.set((l=i.sx)!=null?l:1,(c=i.sy)!=null?c:1,(h=i.sz)!=null?h:1),Pu.compose(Uu,Lu,Du).premultiply(this.base),r.applyMatrix4(Pu);let o=r.attributes.position.count,a=new Float32Array(o*3);Ga.set(n);for(let u=0;u<o;u++)a[u*3]=Ga.r,a[u*3+1]=Ga.g,a[u*3+2]=Ga.b;r.setAttribute("color",new he(a,3)),this.parts[t].push(r)}build(t,e){return new Nt(Mu(this.parts[t]),e)}},v_=`
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
}`,M_=`
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
}`,b_=`
varying vec3 vN; varying vec3 vV; uniform float uTime;
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 2.2);
  vec3 c = mix(vec3(0.10,0.55,1.0), vec3(0.65,1.0,1.0), rim);
  float a = 0.06 + rim*0.8;
  gl_FragColor = vec4(c*a, a);
}`;function Nu(s,{mobile:t=!1}={}){let e=Ge(42),n=new Ts,i=[],r=[],o=[],a=[],l=Xl.water,c=Xl.ax,h=Xl.az,u=(U,F,G,$,tt,et,nt,ft,C=0)=>n.add(U,Sn.box,F,{x:G,y:$,z:tt,sx:et,sy:nt,sz:ft,ry:C}),f=(U,F,G,$,tt,et,nt,ft=et)=>n.add(U,Sn.cyl,F,{x:G,y:$,z:tt,sx:et,sy:nt,sz:ft}),d=(U,F,G,$,tt,et,nt=1)=>n.add(U,Sn.ico,F,{x:G,y:$,z:tt,sx:et,sy:et*nt,sz:et,ry:e()*6}),g=(U,F,G,$,tt,et,nt)=>n.add(U,Sn.cone,F,{x:G,y:$,z:tt,sx:et,sy:nt,sz:et}),y=(U,F,G=1)=>U*U/(c*G)**2+F*F/(h*G)**2<1,p=(U,F,G,$=0)=>new $t().compose(new L(U,F,G),new Qe().setFromEuler(new $n(0,$,0)),new L(1,1,1)),m=(U,F={})=>new re({map:U,toneMapped:!1,...F}),b=(U,F,G=1.5,$=0,tt=16757829,et=!0,nt=!1)=>{f("lit",3023664,U,$+G/2,F,.07,G),u("glow",tt,U,$+G+.16,F,.26,.34,.26),i.push([U,$+G+.18,F,tt,nt?1.4:1]),et&&r.push([U,$+.06,F,nt?4.2:3.2])};{let U=new Nt(new Ui(700,24,16),new Ne({side:De,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:v_}));U.renderOrder=-10,U.frustumCulled=!1,s.add(U),a.push((tt,et,nt)=>U.position.copy(nt.position));let F=Ru(),G=[],$=[16751296,16757386,13077759,16744368];for(let tt=0;tt<(t?6:10);tt++){let et=new re({map:F,color:$[tt%$.length],transparent:!0,opacity:.55+e()*.3,depthWrite:!1,fog:!1,toneMapped:!1}),nt=new Nt(new tn(260+e()*160,65+e()*30),et);nt.position.set(-320+e()*640,22+e()*45,-400-e()*100),s.add(nt),G.push(nt)}a.push((tt,et)=>G.forEach((nt,ft)=>{nt.position.x+=et*(1.2+ft%3*.5),nt.position.x>380&&(nt.position.x=-380)}))}{let U=[{R:150,amp:30,top:4020904,bot:2506879,f:4.6},{R:215,amp:46,top:6970552,bot:4214938,f:3.6},{R:290,amp:62,top:10780620,bot:8020656,f:2.8}];for(let F of U){let G=t?90:160,$=[],tt=[],et=[],nt=[e()*6,e()*6,e()*6,e()*6],ft=new Pt(F.top),C=new Pt(F.bot).lerp(new Pt(10121152),.45);for(let q=0;q<=G;q++){let X=-1.5+3*q/G,vt=.5+.22*Math.sin(X*F.f+nt[0])+.16*Math.sin(X*F.f*2.7+nt[1])+.1*Math.sin(X*F.f*6.1+nt[2])+.05*Math.sin(X*F.f*13+nt[3]),ot=F.amp*(.3+.7*vt),S=X*F.R*1.15,M=-F.R+.12*F.R*X*X;$.push(S,-2.6+ot,M,S,-8,M);let H=Math.min(1,ot/F.amp),ct=C.clone().lerp(ft,.25+.75*H);if(tt.push(ct.r,ct.g,ct.b,C.r,C.g,C.b),q<G){let rt=q*2;et.push(rt,rt+1,rt+2,rt+1,rt+3,rt+2)}}let lt=new te;lt.setAttribute("position",new Bt($,3)),lt.setAttribute("color",new Bt(tt,3)),lt.setIndex(et);let P=new Nt(lt,new re({vertexColors:!0,side:Ye,toneMapped:!1}));P.frustumCulled=!1,s.add(P)}}let v=Array.from({length:20},()=>new dt(999,999)),T=new Ne({uniforms:{uTime:{value:0},uL:{value:v},uIsl:{value:new dt(c,h)},uFog:{value:y_(Wa)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:M_}),R=new Nt(new tn(1400,1e3,1,1).rotateX(-Math.PI/2),T);R.position.set(0,l,-150),s.add(R),a.push(U=>{T.uniforms.uTime.value=U});{let U=new Nt(new Mn(1,.86,3.6,64,1,!0).scale(c,1,h).translate(0,-1.8,0),new un({color:4930389}));s.add(U);let F=Au(),G=new Nt(new Li(1,72).rotateX(-Math.PI/2).scale(c-.1,1,h-.1),new un({map:F,emissive:3832410,emissiveMap:F}));G.position.y=0,s.add(G);let $=new Nt(new Li(Xe.r,72).rotateX(-Math.PI/2),(()=>{let ot=wu();return new un({map:ot,emissive:10131656,emissiveMap:ot})})());$.position.set(0,.08,Xe.z),s.add($),f("lit",4867944,0,-.02,Xe.z,Xe.r+.35,.1),n.add("glow",new hn(Xe.r-.05,.07,6,120).rotateX(Math.PI/2),16751160,{x:0,y:.16,z:Xe.z}),n.add("glow",new hn(Xe.r-1.5,.035,6,120).rotateX(Math.PI/2),16766880,{x:0,y:.12,z:Xe.z});let tt=t?90:150,et=new Qs(new ar(1,0),new un({flatShading:!0}),tt),nt=[1.97,1.17,2.95,.2],ft=new _e,C=new Pt,lt=0;for(let ot=0;ot<tt*1.5&&lt<tt;ot++){let S=ot/(tt*1.5)*Math.PI*2+(e()-.5)*.03;if(nt.some(ct=>Math.abs(Math.atan2(Math.sin(S-ct),Math.cos(S-ct)))<.085)||Math.abs(Math.cos(S))<.1&&Math.sin(S)>0)continue;let M=ot%2,H=.7+e()*.95;ft.position.set((c+.1+M*.7+e()*.5)*Math.cos(S),-.55-M*.9-e()*.5,(h+.1+M*.7+e()*.5)*Math.sin(S)),ft.scale.set(H*(1+e()*.6),H*(.8+e()*.7),H*(1+e()*.6)),ft.rotation.set(e()*.6,e()*6,e()*.6),ft.updateMatrix(),et.setMatrixAt(lt,ft.matrix),C.setHSL(.07+e()*.08,.06+e()*.08,.14+e()*.11),et.setColorAt(lt,C),lt++}et.count=lt,s.add(et);let P=[];for(let ot=0;ot<160;ot++){let S=ot/160*Math.PI*2;P.push(new L((c+1.4)*Math.cos(S),l+.12,(h+1.4)*Math.sin(S)))}let q=new Nt(new or(new vs(P,!0),220,.1,5,!0),new re({color:3524863,toneMapped:!1}));s.add(q);let X=new Nt(new or(new vs(P.map(ot=>new L(ot.x*1.012,ot.y,ot.z*1.012)),!0),220,.45,5,!0),new re({color:2788607,transparent:!0,opacity:.22,blending:be,depthWrite:!1,toneMapped:!1}));s.add(X);let vt=new Ne({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        void main(){
          float s = sin(vUv.x*38.0 + sin(vUv.y*6.0)*1.5)*0.5+0.5;
          float f = fract(vUv.y*2.4 + uTime*1.5 + s*0.5);
          float a = (0.40 + 0.45*smoothstep(0.35,1.0,f)*s) * smoothstep(0.0,0.05,vUv.x)*smoothstep(1.0,0.95,vUv.x);
          vec3 c = mix(vec3(0.55,0.85,1.0), vec3(1.0), smoothstep(0.5,1.0,f));
          gl_FragColor = vec4(c, a);
        }`});a.push(ot=>{vt.uniforms.uTime.value=ot});for(let ot of nt){let S=(c+.9)*Math.cos(ot),M=(h+.9)*Math.sin(ot),H=Math.cos(ot)/c,ct=Math.sin(ot)/h,rt=new Nt(new tn(4.2,3.2),vt);rt.position.set(S,-1.15,M),rt.rotation.y=Math.atan2(H,ct),rt.material.side=Ye,s.add(rt);for(let ht=-1;ht<=1;ht++)i.push([S+Math.cos(ot)*.6+ht*1,l+.25,M+Math.sin(ot)*.6,12577279,1.5])}}let x=Xe.z;{f("lit",1845848,0,.32,x,3.7,.5),f("lit",2441338,0,.62,x,3.1,.25),n.add("glow",new hn(3.6,.09,6,80).rotateX(Math.PI/2),3528959,{x:0,y:.6,z:x}),n.add("glow",new hn(3.05,.07,6,80).rotateX(Math.PI/2),6988031,{x:0,y:.78,z:x}),f("glow",8317183,0,.84,x,1.9,.08),f("lit",1318986,0,.9,x,1,.5),f("glow",13170431,0,1.2,x,.7,.06);let U=[];[2.3,2.75,3.3,4.2].forEach((P,q)=>{let X=new Nt(new Ia(P,P+.1,72).rotateX(-Math.PI/2),new re({color:q%2?4892927:3794687,transparent:!0,opacity:.8,blending:be,depthWrite:!1,toneMapped:!1}));X.position.set(0,.95-q*.02,x),s.add(X),U.push(X),q===3&&(X.position.y=.2)}),a.push(P=>U.forEach((q,X)=>{q.material.opacity=.45+.4*Math.sin(P*2+X*1.4)}));let F=new Nt(new Mn(1,1.5,5,28,1,!0),new Ne({transparent:!0,depthWrite:!1,blending:be,side:Ye,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec2 vUv; uniform float uTime; void main(){ float a = (1.0-vUv.y)*0.55*(0.8+0.2*sin(vUv.x*40.0+uTime*3.0)); gl_FragColor = vec4(0.25,0.8,1.0, a); }"}));F.position.set(0,3.3,x),s.add(F),a.push(P=>{F.material.uniforms.uTime.value=P});let G=new Ue;G.position.set(0,6,x),s.add(G);let $=new Nt(new Ui(3,40,28),new Ne({transparent:!0,depthWrite:!1,side:Ye,blending:be,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv; }",fragmentShader:b_}));G.add($);let tt=new Sa(new Ua(new Ui(3.02,16,12)),new tr({color:6743807,transparent:!0,opacity:.22,blending:be,depthWrite:!1}));G.add(tt);let et=hr(),nt=new vn(new ln({map:et,color:3983615,transparent:!0,opacity:.55,blending:be,depthWrite:!1,fog:!1}));nt.scale.set(11,11,1),G.add(nt);let ft=new vn(new ln({map:Su(),transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));ft.scale.set(4.2,4.2,1),ft.material.depthTest=!1,ft.renderOrder=10,G.add(ft);let C=new vn(new ln({map:Eu(We.name,We.tagline),transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));C.scale.set(6.2,1.8,1),C.position.set(0,-2.9,.5),C.material.depthTest=!1,C.renderOrder=11,G.add(C),a.push(P=>{tt.rotation.y=P*.25,$.rotation.y=P*.1,G.position.y=6+Math.sin(P*.9)*.12,nt.material.opacity=.45+.1*Math.sin(P*1.6)});let lt=new Nt(new Ui(3.3,8,6),new re);lt.visible=!1,lt.position.copy(G.position),s.add(lt),o.push({key:"about",mesh:lt,label:We.name,anchor:new L(0,9.5,x)})}let A={},B=(U,F,G,$,tt,et)=>{let nt=new Ue;nt.position.set(F,0,G),nt.rotation.y=$,nt.scale.setScalar(tt),nt.updateMatrix(),s.add(nt),n.push(nt.matrix);let ft=et(nt);n.pop();let C=new Nt(new on(...ft.hit),new re);return C.visible=!1,C.position.set(0,ft.hit[1]/2,0),nt.add(C),o.push({key:U,mesh:C,label:We.places[U].label,anchor:new L(F,ft.top*tt,G),sign:ft.sign}),nt},_=(U,F,G,$,tt,et,nt,ft)=>{let C=new Nt(new tn(G,$),m(F,ft));return C.position.set(tt,et,nt),U.add(C),C},E=(U,F,G,$,tt,et)=>{for(let nt=0;nt<U;nt++)u("lit",et,0,tt*(U-nt)/2,G+(nt+.5)*$,F,tt*(U-nt),$)};B("nupa",0,-11.5,0,1.1,U=>{let F=Va("nupa");u("lit",2304578,0,.2,0,23,.4,10),u("lit",1777974,0,3.7,0,14,6.6,7),_(U,F,13.2,5.7,0,3.55,3.52);for(let $ of[-1,1])u("lit",1777974,$*9,2.7,1.4,4.6,4.6,5.6),_(U,F,4,3.9,$*9,2.65,4.22),u("lit",2436166,$*9,5.2,1.4,5.2,.5,6.2),u("glow",3525119,$*9,4.95,4.55,5.2,.1,.1),u("glow",3525119,$*11.3,2.7,4.25,.1,4.6,.1);u("lit",2304578,0,7.3,.2,15.6,.6,8.4),u("glow",3920127,0,7,4.46,15.6,.12,.12),u("glow",3920127,-7.75,7,.2,.12,.12,8.4),u("glow",3920127,7.75,7,.2,.12,.12,8.4),u("glow",3898367,-7.8,7.3,4.46,.14,.7,.14),u("glow",3898367,7.8,7.3,4.46,.14,.7,.14),u("lit",791078,0,8.8,-.4,8.6,2.3,1.4),u("glow",3524863,0,7.72,.34,8.7,.08,.08),u("glow",3524863,0,9.98,.34,8.7,.08,.08),u("glow",3524863,-4.3,8.85,.34,.08,2.3,.08),u("glow",3524863,4.3,8.85,.34,.08,2.3,.08);let G=_(U,ka("nupa"),8.2,2.05,0,8.85,.32);u("lit",1777974,0,3.2,4.6,5.2,.35,2.4),u("glow",4905215,0,3,5.78,5.2,.08,.08),u("glow",16769704,0,1.4,3.6,2.8,2.7,.06),u("lit",857126,-1.5,1.4,3.58,.14,2.8,.14),u("lit",857126,1.5,1.4,3.58,.14,2.8,.14),u("lit",857126,0,1.4,3.58,.1,2.8,.1),E(5,5.6,4,.55,.09,9999800);for(let $ of[-1,1])u("lit",6973584,$*3.1,.35,5.4,.35,.7,2.8),u("glow",3525119,$*3.1,.75,5.4,.1,.06,2.7);return{hit:[24,11,10],top:10.8,sign:G}}),B("sliit",-20,-3.5,.52,1,U=>{let F=Va("sliit");u("lit",14207410,0,.3,0,15.5,.6,9),u("lit",13351843,0,2.9,-.2,12.5,4.6,6.2),_(U,F,9.6,3.9,0,2.85,2.93);for(let tt=0;tt<6;tt++){let et=-5.5+tt*2.2;f("lit",15655887,et,2.95,3.5,.36,4.6),u("lit",16050904,et,5.3,3.5,.95,.22,.95),u("lit",16050904,et,.72,3.5,.95,.22,.95)}u("lit",14075822,0,5.75,.6,14.4,.6,8.2),u("glow",16769192,0,5.4,4.72,14.4,.1,.1);for(let tt of[-1,1])u("lit",13351843,tt*6.9,2.9,-.2,1.4,4.6,6.2);u("lit",1448530,0,7.2,.4,9.6,2.5,1.3),u("glow",13219071,0,6,1.1,9.7,.09,.09),u("glow",13219071,0,8.46,1.1,9.7,.09,.09),u("glow",13219071,-4.8,7.25,1.1,.09,2.5,.09),u("glow",13219071,4.8,7.25,1.1,.09,2.5,.09);let G=_(U,ka("sliit"),9.2,2.3,0,7.22,1.08),$=bu();for(let tt of[-1,1])_(U,$,1.25,3.75,tt*3.3,2.6,4.15,{transparent:!0,alphaTest:.4}),u("lit",4864554,tt*3.3,4.55,4.1,1.5,.1,.1);return E(4,7.5,4.3,.55,.15,14471355),{hit:[15.5,10,9],top:9.8,sign:G}}),B("labs",20,-3.5,-.52,1,U=>{let F=Va("labs");u("lit",2366528,0,.2,0,14.5,.4,9.4),u("lit",2037816,0,2.6,0,12,4.4,6.6),_(U,F,9,3.7,-1.3,2.55,3.32),u("lit",1314858,4.4,2.6,3.3,2.6,4.4,.2);let G=_(U,Tu(),2.3,2.3,4.4,2.7,3.45,{transparent:!0});u("lit",2366528,0,5,.2,13.4,.55,7.6),u("glow",10841087,0,4.78,4.02,13.4,.12,.12),u("glow",10841087,-6.7,4.78,.2,.12,.12,7.6),u("glow",8031487,-6,2.6,3.4,.1,4.4,.1),u("glow",8031487,6,2.6,3.4,.1,4.4,.1),u("lit",1182254,-.5,6.7,.4,8.8,2.7,1.4),u("glow",10841087,-.5,5.33,1.12,8.9,.09,.09),u("glow",10841087,-.5,8.07,1.12,8.9,.09,.09),u("glow",10841087,-4.9,6.7,1.12,.09,2.75,.09),u("glow",10841087,3.9,6.7,1.12,.09,2.75,.09);let $=_(U,ka("labs"),8.4,2.1,-.5,6.7,1.14);E(3,6.5,3.9,.55,.15,9077936);let tt=new Nt(new on(9.2,3,1.4),new re);return tt.visible=!1,tt.position.set(-.5,6.7,1),U.add(tt),o.push({key:"labsInfo",mesh:tt,label:"My Projects Lab \xB7 project details",priority:!0,sign:$,anchor:new L(20,9,-3.5)}),{hit:[14.5,9.5,9.4],top:9.4,sign:$,gear:G}}),o[o.length-1].go="labsLab";let z=(U,F,G,$,tt,et=10855108)=>{let nt=G-U,ft=$-F,C=Math.hypot(nt,ft);u("lit",et,(U+G)/2,.05,(F+$)/2,tt,.1,C,Math.atan2(nt,ft))};z(0,-4.6,0,-4,5.2),z(-14.4,.6,-6.6,2.4,3.2),z(14.4,.6,6.6,2.4,3.2),z(0,10.5,0,17,3.8,9267781);{let $=[10118968,8672557];for(let et=11;et<42;et+=.42)u("lit",$[Math.round(et/.42)%2],0,0,et,3.7,.14,.38);for(let et of[-1,1])u("lit",6175522,et*(3.7/2+.05),-.2,53/2,.22,.28,31),u("lit",7358250,et*(3.7/2+.05),.95,53/2,.14,.12,31),u("lit",7358250,et*(3.7/2+.05),.45,53/2,.1,.1,31);let tt=0;for(let et=11+1.5;et<41;et+=3.1)for(let nt of[-1,1]){let ft=nt*1.9000000000000001;u("lit",6175522,ft,.55,et,.2,1.1,.2),u("glow",16757829,ft,1.35,et,.24,.3,.24),i.push([ft,1.38,et,16757829,1.5]),tt<20&&v[tt++].set(ft,et)}for(let et=15;et<42;et+=7)for(let nt of[-1,1])f("lit",4139550,nt*1.5,l/2-.1,et,.18,Math.abs(l)+.4)}for(let U=0;U<20;U++){let F=U/20*Math.PI*2;[Math.PI/2,-Math.PI/2,0,Math.PI,Math.PI*1.5].some($=>Math.abs(Math.atan2(Math.sin(F-$),Math.cos(F-$)))<.2)||b((Xe.r+1.3)*Math.cos(F),Xe.z+(Xe.r+1.3)*Math.sin(F),1.5,0,16757829,!0,!0)}[[-3.6,-4.2],[3.6,-4.2],[-12.5,.8],[-9.5,2.2],[12.5,.8],[9.5,2.2],[-2.4,13.5],[2.4,13.5]].forEach(([U,F])=>b(U,F,1.3));for(let U=0;U<26;U++){let F=U/26*Math.PI*2;if([1.97,1.17,2.95,.2].some(tt=>Math.abs(Math.atan2(Math.sin(F-tt),Math.cos(F-tt)))<.14))continue;let G=(c-1.6)*Math.cos(F),$=(h-1.6)*Math.sin(F);$<-8||b(G,$,.9,0,16754746,!0)}let K=(U,F,G)=>{n.push(p(U,0,F,G)),u("lit",8014378,0,.55,0,1.9,.12,.55),u("lit",7028515,0,1,-.26,1.9,.5,.1);for(let $ of[-1,1])u("lit",2892592,$*.8,.28,.05,.1,.56,.5),u("lit",2892592,$*.8,.8,-.26,.1,.9,.1);n.pop()};[[-9.5,7.5],[-13,10],[-18.5,7.5],[-14,13],[9.5,7.5],[13,10],[18.5,7.5],[14,13],[-24,5],[24,5]].forEach(([U,F])=>K(U,F,Math.atan2(-U,Xe.z-F+.001)+Math.PI));let it=[16748248,16740294,15755992,16757482,13660415,16751314],I=(U,F,G=1)=>{g("lit",5978672,U,1.6*G,F,.5*G,3.4*G);for(let tt=0;tt<2;tt++){let et=e()*6;n.add("lit",Sn.cone,5978672,{x:U+Math.cos(et)*.5*G,y:3*G,z:F+Math.sin(et)*.5*G,sx:.16*G,sy:1.6*G,sz:.16*G,rx:Math.sin(et)*.6,rz:Math.cos(et)*.6})}let $=7;for(let tt=0;tt<$;tt++){let et=tt/$*6.28+e(),nt=(.4+e()*1.5)*G;d("lit",it[Math.floor(e()*it.length)],U+Math.cos(et)*nt,(3.5+e()*1.4)*G,F+Math.sin(et)*nt,(1+e()*.7)*G,.8)}d("lit",16751583,U,4.9*G,F,1.3*G,.8)},O=[2055748,2783826,1526846,3115612],W=(U,F,G=1)=>{g("lit",4862760,U,3*G,F,.85*G,6.4*G);for(let $=0;$<9;$++){let tt=e()*6.28,et=(.5+e()*3.2)*G;d("lit",O[Math.floor(e()*O.length)],U+Math.cos(tt)*et,(6.4+e()*2)*G,F+Math.sin(tt)*et,(1.9+e()*1.5)*G,.7)}};[[-27.5,3.5,1.25],[-21,-10.5,1.4],[-10.5,-2.5,.8],[10.5,-2.5,.8],[21,-10.5,1.4],[27.5,3.5,1.25],[10.5,1.8,.7],[-10.8,6.5,0],[22,10,1.1],[-22,9.5,1],[-16,12.5,.8],[16.5,12.5,.8]].forEach(([U,F,G])=>I(U,F,G)),[[-13.5,-15,1],[13.5,-15,1],[-26,-3,.9],[26,-3,.9]].forEach(([U,F,G])=>W(U,F,G));let N=[2914892,3639893,2385482],k=[10969343,16741584,12882175,16751328],Y=(U,F)=>Math.hypot(U,F-Xe.z)<Xe.r+1||Math.abs(U)<2.6&&F>8||Math.abs(U)<8.5&&F<-3&&F>-18||Math.abs(Math.abs(U)-20)<9.2&&F>-10.5&&F<2.5;for(let U=0,F=0;U<900&&F<(t?55:90);U++){let G=(e()*2-1)*(c-2),$=(e()*2-1)*(h-2);if(!(!y(G,$,.93)||Y(G,$)))if(F++,e()>.45)d("lit",N[Math.floor(e()*3)],G,.4,$,.5+e()*.5,.8);else for(let tt=0;tt<4;tt++)d("lit",k[Math.floor(e()*4)],G+(e()-.5)*.9,.3,$+(e()-.5)*.9,.22+e()*.15)}s.add(n.build("lit",new un({vertexColors:!0}))),s.add(n.build("glow",new re({vertexColors:!0,toneMapped:!1})));{let U=hr(),F=new Qs(new tn(1,1).rotateX(-Math.PI/2),new re({map:U,color:16751168,transparent:!0,opacity:.55,blending:be,depthWrite:!1,toneMapped:!1}),r.length),G=new _e;r.forEach(([C,lt,P,q],X)=>{G.position.set(C,lt,P),G.scale.set(q,1,q),G.updateMatrix(),F.setMatrixAt(X,G.matrix)}),s.add(F);let $=new Float32Array(i.length*3),tt=new Float32Array(i.length*3),et=new Pt;i.forEach(([C,lt,P,q],X)=>{$.set([C,lt,P],X*3),et.set(q),tt.set([et.r,et.g,et.b],X*3)});let nt=new te;nt.setAttribute("position",new he($,3)),nt.setAttribute("color",new he(tt,3));let ft=new Pi(nt,new Ci({size:1.9,map:U,vertexColors:!0,transparent:!0,opacity:.85,blending:be,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}));ft.frustumCulled=!1,s.add(ft)}let st=new Ne({transparent:!0,depthWrite:!1,blending:be,uniforms:{uTime:{value:0},uScale:{value:300}},vertexShader:`attribute float aSeed; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC; varying float vA;
      void main(){ vec3 p = position; p.y += sin(uTime*0.6 + aSeed*20.0)*0.7; p.x += sin(uTime*0.4 + aSeed*13.0)*0.9; p.z += cos(uTime*0.35 + aSeed*9.0)*0.9;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = 0.55 + 0.45*sin(uTime*2.0 + aSeed*30.0); gl_PointSize = uScale*(0.5+0.5*fract(aSeed*7.0))/-mv.z; vC = aColor; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vC, a*a*vA); }"});{let U=t?70:170,F=new Float32Array(U*3),G=new Float32Array(U),$=new Float32Array(U*3),tt=[[1,.7,.35],[.45,.9,1],[1,.55,.85]];for(let ft=0;ft<U;ft++)F.set([(e()*2-1)*c*.95,.6+e()*7,(e()*2-1)*h*1.2+2],ft*3),G[ft]=e(),$.set(tt[ft%3],ft*3);let et=new te;et.setAttribute("position",new he(F,3)),et.setAttribute("aSeed",new he(G,1)),et.setAttribute("aColor",new he($,3));let nt=new Pi(et,st);nt.frustumCulled=!1,s.add(nt),a.push(ft=>{st.uniforms.uTime.value=ft})}s.add(new Ss(16770815,9067176,3));let at=new oi(16757898,2.2);at.position.set(-30,25,-20),s.add(at);let pt=new oi(8038655,.9);pt.position.set(25,15,30),s.add(pt),s.fog=new Ma(Wa,140,520);let Q=o.filter(U=>U.sign);return{pickables:o,update(U,F,G,$){for(let tt of a)tt(U,F,G);for(let tt of Q){let et=tt.sign.scale.x,nt=$===tt.key?1.06:1;tt.sign.scale.setScalar(et+(nt-et)*Math.min(1,F*8))}},setPointScale(U,F){st.uniforms.uScale.value=.9*U/(2*Math.tan(F*Math.PI/360))}}}var Zt='"Poppins","Segoe UI",system-ui,Arial,sans-serif',pe=(s,t)=>{let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]},me=(s,t=4)=>{let e=new ys(s);return e.colorSpace=xe,e.anisotropy=t,e},Oe=(s,t,e,n,i,r)=>{s.beginPath(),s.roundRect?s.roundRect(t,e,n,i,r):s.rect(t,e,n,i)};function Ou(){let[e,n]=pe(2048,1024),i=Ge(21),r=n.createLinearGradient(0,0,0,1024*.72);r.addColorStop(0,"#2c2480"),r.addColorStop(.35,"#7a45b8"),r.addColorStop(.65,"#e467a0"),r.addColorStop(1,"#ffa56e"),n.fillStyle=r,n.fillRect(0,0,2048,1024);for(let c=0;c<14;c++){let h=i()*2048,u=120+i()*300,f=80+i()*160,d=n.createRadialGradient(h,u,0,h,u,f);d.addColorStop(0,"rgba(255,170,200,.35)"),d.addColorStop(1,"rgba(255,170,200,0)"),n.fillStyle=d,n.fillRect(h-f,u-f,f*2,f*2)}let o=(c,h,u,f,d)=>{n.beginPath(),n.moveTo(0,1024);for(let g=0;g<=128;g++){let y=g/128;n.lineTo(y*2048,c-h*(.5+.3*Math.sin(y*u+d)+.15*Math.sin(y*u*2.7+d*2)+.07*Math.sin(y*u*6+d)))}n.lineTo(2048,1024),n.closePath(),n.fillStyle=f,n.fill()};o(640,190,9,"#7a58a8",1),o(700,170,11,"#523f8a",3),o(770,120,14,"#34306c",5),n.fillStyle="#1c1a40",n.fillRect(0,800,2048,224);for(let c=0;c<220;c++){let h=i()*2048,u=790+i()*220,f=3+i()*9;n.fillStyle=i()>.5?"rgba(255,200,110,.85)":"rgba(255,150,210,.75)",n.beginPath(),n.arc(h,u,f,0,7),n.fill()}let a=(c,h,u,f)=>{n.strokeStyle="#2a1a3a",n.lineWidth=14,n.beginPath(),n.moveTo(c,1e3),n.quadraticCurveTo(c+20,h+250,c-10,h+100),n.stroke();for(let d=0;d<f;d++){let g=c+(i()-.5)*u,y=h+(i()-.5)*u*.7,p=14+i()*38;n.fillStyle=`rgba(${240+i()*15},${120+i()*70},${200+i()*40},${.55+i()*.4})`,n.beginPath(),n.arc(g,y,p,0,7),n.fill()}};a(120,560,420,140),a(420,620,300,70),a(1700,580,400,130),a(1950,540,320,90),n.fillStyle="rgba(14,10,34,.92)";for(let c=0;c<=8;c++)n.fillRect(c*(2048/8)-6,0,12,1024);for(let c of[.33,.66])n.fillRect(0,1024*c-5,2048,10);let l=n.createLinearGradient(0,0,2048,1024);return l.addColorStop(.35,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,.10)"),l.addColorStop(.65,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(0,0,2048,1024),me(e,4)}function Fu(s=1){let[n,i]=pe(1024,512),r=Ge(s*13+5);i.fillStyle="#1b1735",i.fillRect(0,0,1024,512),[[0,.5],[.5,1]].forEach(([a,l],c)=>{for(let h=0;h<12;h++){let u=8+h*85.33333333333333,f=1024/12-12,d=a*512+14,g=(l-a)*512-28,y=i.createLinearGradient(0,d,0,d+g),p=r()>.2;y.addColorStop(0,p?"#ffe6b0":"#6a5a90"),y.addColorStop(1,p?"#ff9f58":"#352a60"),i.fillStyle=y,i.fillRect(u,d,f,g),p&&(i.fillStyle="rgba(40,20,20,.6)",i.fillRect(u+f*.3,d+g*.55,f*.4,g*.08))}i.fillStyle="#ffd9a0",i.fillRect(0,l*512-16,1024,5)});for(let a=0;a<70;a++){i.strokeStyle=`rgba(60,${130+r()*60},80,.9)`,i.lineWidth=3+r()*3;let l=r()*1024,c=(r()>.5?.5:0)*512;i.beginPath(),i.moveTo(l,c+8),i.lineTo(l+(r()-.5)*14,c+30+r()*60),i.stroke()}return me(n,4)}function Bu(){let[t,e]=pe(1024,1024),n=Ge(31),i=e.createLinearGradient(0,0,1024,1024);i.addColorStop(0,"#d9cdbd"),i.addColorStop(.5,"#c9bcb0"),i.addColorStop(1,"#bfb4b8"),e.fillStyle=i,e.fillRect(0,0,1024,1024);for(let o=0;o<40;o++)e.strokeStyle=`rgba(110,100,120,${.05+n()*.1})`,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(n()*1024,n()*1024),e.bezierCurveTo(n()*1024,n()*1024,n()*1024,n()*1024,n()*1024,n()*1024),e.stroke();e.strokeStyle="rgba(90,80,100,.45)",e.lineWidth=3,e.strokeRect(1,1,1022,1022);let r=me(t,8);return r.wrapS=r.wrapT=Ri,r.repeat.set(16,14),r}function fr(s){let[n,i]=pe(800,560),r=Ge(s.length*9+2),o=(a,l,c,h,u="#c9cde6")=>{Oe(i,a,l,c,h,h/2),i.fillStyle=u,i.fill()};if(s==="home"){i.fillStyle="#eaf2ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,80,18,"#9a7aff"),o(600,16,60,14),o(680,16,60,14);let a=i.createLinearGradient(0,60,0,330);a.addColorStop(0,"#8fd0ff"),a.addColorStop(1,"#d6f0ff"),Oe(i,30,64,740,270,22),i.fillStyle=a,i.fill(),i.fillStyle="#7ccf6a",i.beginPath(),i.ellipse(400,330,380,70,0,Math.PI,0),i.fill(),i.fillStyle="#fff3e0",i.fillRect(300,190,200,100),i.fillStyle="#e8564a",i.beginPath(),i.moveTo(280,195),i.lineTo(400,120),i.lineTo(520,195),i.fill(),i.fillStyle="#ffcf5a",i.fillRect(380,235,40,55),i.fillStyle="#8bd0ff",i.fillRect(320,215,40,36),i.fillRect(440,215,40,36),i.fillStyle="#3f9a52",i.beginPath(),i.arc(200,240,46,0,7),i.arc(610,235,52,0,7),i.fill(),["#ff8fc0","#9a7aff","#8a6aff","#ffb85a"].forEach((l,c)=>{let h=30+c*188;Oe(i,h,360,170,170,26),i.fillStyle=l,i.fill(),i.fillStyle="rgba(255,255,255,.85)",i.beginPath(),i.arc(h+85,430,34,0,7),i.fill(),o(h+30,490,110,14,"rgba(255,255,255,.7)")})}else if(s==="gallery"){i.fillStyle="#eef1ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,100,18,"#6a8aff");for(let a=0;a<2;a++)for(let l=0;l<3;l++){let c=30+l*250,h=70+a*230,u=i.createLinearGradient(c,h,c+220,h+200);u.addColorStop(0,["#ffd9a0","#ffb0c8","#b0d0ff"][(l+a)%3]),u.addColorStop(1,["#ff9a60","#c070d0","#6a8aff"][(l+a)%3]),Oe(i,c,h,220,200,18),i.fillStyle=u,i.fill(),i.fillStyle="rgba(40,20,60,.35)",i.beginPath(),i.arc(c+70+r()*60,h+90,24,0,7),i.arc(c+130+r()*40,h+100,20,0,7),i.fill()}o(30,510,200,16,"#b0b8e8")}else if(s==="chart"){i.fillStyle="#f6f1ff",i.fillRect(0,0,800,560),i.fillStyle="#8a5cff",i.fillRect(0,0,90,560);for(let a=0;a<5;a++)i.fillStyle="rgba(255,255,255,.75)",i.beginPath(),i.arc(45,60+a*70,16,0,7),i.fill();o(120,24,220,20,"#7a5cd0"),["#ff7fb8","#9a7aff","#ffb04a","#6ad0b0","#8a8aff"].forEach((a,l)=>{let c=80+r()*160;Oe(i,140+l*56,380-c,40,c,8),i.fillStyle=a,i.fill()}),i.lineWidth=36,["#9a7aff","#ff7fb8","#ffb04a"].forEach((a,l)=>{i.strokeStyle=a,i.beginPath(),i.arc(600,170,78,l*2.1,l*2.1+1.9),i.stroke()});for(let a=0;a<4;a++)o(430,320+a*46,300,22,"#ddd2f6"),i.fillStyle="#9a7aff",i.beginPath(),i.arc(450,331+a*46,9,0,7),i.fill()}else{i.fillStyle="#f4f0ff",i.fillRect(0,0,800,560),i.fillStyle="#fff",i.fillRect(0,0,800,46),o(20,14,100,18,"#9a7aff");for(let a=0;a<5;a++)for(let l=0;l<7;l++)i.fillStyle=["#ff7fb8","#9a7aff","#ffb04a","#e4def5","#6ad0b0"][Math.floor(r()*5)],i.beginPath(),i.arc(70+l*55,100+a*55,18,0,7),i.fill();for(let a=0;a<6;a++)Oe(i,450,70+a*70,310,56,14),i.fillStyle="#fff",i.fill(),i.fillStyle=["#ff9ac8","#9a7aff","#ffb85a"][a%3],i.beginPath(),i.arc(480,98+a*70,17,0,7),i.fill(),o(510,86+a*70,180,14,"#ddd2f6"),o(510,108+a*70,120,10,"#ece6fa")}return me(n,4)}function zu(s){let[n,i]=pe(1400,160);i.strokeStyle="#7fe6ff",i.lineWidth=5,i.shadowColor="#37d7ff",i.shadowBlur=14,i.beginPath(),i.moveTo(110,100),i.lineTo(150,62),i.lineTo(190,100),i.moveTo(120,98),i.lineTo(120,128),i.lineTo(180,128),i.lineTo(180,98),i.stroke(),i.beginPath(),i.moveTo(150,46),i.lineTo(134,54),i.lineTo(150,62),i.lineTo(166,54),i.closePath(),i.stroke(),i.shadowBlur=0,i.fillStyle="#fff",i.font=`600 56px ${Zt}`,i.textAlign="left",i.fillText(s,230,100);let r=i.measureText(s).width;return i.save(),i.translate(230+r+60,40),i.strokeStyle="#fff",i.fillStyle="rgba(255,255,255,.12)",i.lineWidth=4,i.beginPath(),i.roundRect?i.roundRect(10,28,44,52,14):i.rect(10,28,44,52),i.fill(),i.stroke(),i.beginPath(),i.roundRect?i.roundRect(14,0,14,44,7):i.rect(14,0,14,44),i.fill(),i.stroke(),i.strokeStyle="#7fe6ff",i.beginPath(),i.arc(0,0,14,0,7),i.stroke(),i.restore(),me(n,4)}function Hu(){let[s,t]=pe(256,768);t.beginPath(),t.moveTo(0,0),t.lineTo(256,0),t.lineTo(256,700),t.lineTo(128,590),t.lineTo(0,700),t.closePath();let e=t.createLinearGradient(0,0,0,768);e.addColorStop(0,"#1b2760"),e.addColorStop(1,"#101a48"),t.fillStyle=e,t.fill(),t.strokeStyle="#e9edff",t.lineWidth=3,t.stroke();let n=128,i=215;t.fillStyle="#fff";for(let r of[-1,1])for(let o=0;o<11;o++){let a=.35+o*.24,l=n+r*Math.sin(a)*86,c=i+Math.cos(a)*86-6;t.beginPath(),t.ellipse(l,c,17,7,Math.atan2(-Math.sin(a),r*Math.cos(a)),0,7),t.fill()}t.strokeStyle="#fff",t.lineWidth=4,t.lineJoin="round",t.beginPath(),t.moveTo(n,i-20),t.quadraticCurveTo(n-34,i-40,n-58,i-28),t.lineTo(n-58,i+26),t.quadraticCurveTo(n-32,i+12,n,i+34),t.stroke(),t.beginPath(),t.moveTo(n,i-20),t.quadraticCurveTo(n+34,i-40,n+58,i-28),t.lineTo(n+58,i+26),t.quadraticCurveTo(n+32,i+12,n,i+34),t.stroke(),t.lineWidth=3;for(let r=0;r<3;r++)t.beginPath(),t.moveTo(n-48,i-14+r*12),t.lineTo(n-10,i-8+r*12),t.moveTo(n+48,i-14+r*12),t.lineTo(n+10,i-8+r*12),t.stroke();return me(s,4)}function ku(s="Student Projects Gallery"){let[t,e]=pe(1024,192),n=e.createLinearGradient(0,0,0,192);return n.addColorStop(0,"#d8d0c8"),n.addColorStop(1,"#a8a0a8"),e.fillStyle=n,e.fillRect(0,0,1024,192),e.fillStyle="#ffe2a8",e.fillRect(0,0,1024,6),e.fillRect(0,186,1024,6),e.textAlign="center",e.font=`600 62px ${Zt}`,e.shadowColor="#ffd27a",e.shadowBlur=16,e.fillStyle="#fff",e.fillText(s,512,118),e.shadowBlur=0,e.fillStyle="#ffd27a",e.fillRect(60,142,900,3),me(t,4)}function Vu(){let[s,t]=pe(512,192);return Oe(t,6,6,500,180,30),t.fillStyle="#fff8ea",t.fill(),t.lineWidth=8,t.strokeStyle="#f5a43a",t.stroke(),t.textAlign="center",t.fillStyle="#2a5fc8",t.font=`700 62px ${Zt}`,t.fillText("Little Learners",256,96),t.fillStyle="#e8573a",t.font=`700 54px ${Zt}`,t.fillText("Preschool",256,156),me(s,4)}function Gu(s,t){let[e,n]=pe(128,128);return n.fillStyle=t,n.fillRect(0,0,128,128),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(8,8,112,112),n.fillStyle="#fff",n.font=`800 96px ${Zt}`,n.textAlign="center",n.fillText(s,64,100),me(e,2)}function Wu(){let[s,t]=pe(256,256);return t.fillStyle="#26382f",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(40,70),t.lineTo(110,60),t.moveTo(40,110),t.lineTo(170,105),t.moveTo(40,150),t.lineTo(130,156),t.stroke(),t.beginPath(),t.arc(190,190,24,0,7),t.stroke(),me(s,2)}function Xu(){let[e,n]=pe(1024,1280),i=1024/2,r=330;n.strokeStyle="#8a5a2a",n.lineWidth=10,n.beginPath(),n.moveTo(90,1220),n.lineTo(90,r+60),n.arc(i,r+60,i-90,Math.PI,0),n.lineTo(934,1220),n.closePath(),n.stroke(),n.strokeStyle="#d9a64a",n.lineWidth=4,n.stroke(),n.fillStyle="#e8b04a",n.shadowColor="#ffcf6a",n.shadowBlur=20;for(let a=0;a<28;a++){let l=a/28*Math.PI*2,c=130,h=a%2?190:235;n.beginPath(),n.moveTo(i+Math.cos(l-.1)*c,r+Math.sin(l-.1)*c),n.lineTo(i+Math.cos(l)*h,r+Math.sin(l)*h),n.lineTo(i+Math.cos(l+.1)*c,r+Math.sin(l+.1)*c),n.fill()}let o=n.createRadialGradient(i-20,r-20,10,i,r,140);return o.addColorStop(0,"#ffe8a0"),o.addColorStop(1,"#d99a30"),n.fillStyle=o,n.beginPath(),n.arc(i,r,135,0,7),n.fill(),n.shadowBlur=0,n.strokeStyle="#8a5a1a",n.lineWidth=6,n.lineCap="round",n.beginPath(),n.moveTo(i-62,r-20),n.quadraticCurveTo(i-40,r-38,i-18,r-20),n.moveTo(i+62,r-20),n.quadraticCurveTo(i+40,r-38,i+18,r-20),n.stroke(),n.beginPath(),n.moveTo(i,r-20),n.lineTo(i-8,r+30),n.lineTo(i+10,r+30),n.stroke(),n.beginPath(),n.arc(i,r+20,58,.3,Math.PI-.3),n.stroke(),n.textAlign="center",n.lineJoin="round",n.font=`800 128px ${Zt}`,[["AVURUDU",640],["AUSPICIOUS",770],["TIMES",900]].forEach(([a,l])=>{n.strokeStyle="#5a3410",n.lineWidth=16,n.strokeText(a,i,l);let c=n.createLinearGradient(0,l-100,0,l);c.addColorStop(0,"#ffe9a8"),c.addColorStop(1,"#e0a030"),n.fillStyle=c,n.fillText(a,i,l)}),n.fillStyle="#d9a64a",n.fillRect(i-200,970,400,5),n.beginPath(),n.arc(i,972,14,0,7),n.fill(),me(e,8)}function qu(){let[t,e]=pe(512,512);e.translate(512/2,512/2);let n=(i,r,o,a,l)=>{e.fillStyle=l;for(let c=0;c<i;c++)e.save(),e.rotate(c/i*Math.PI*2),e.beginPath(),e.ellipse(0,-r,a,o,0,0,7),e.fill(),e.restore()};return e.fillStyle="#fff3d0",e.beginPath(),e.arc(0,0,250,0,7),e.fill(),n(16,200,44,18,"#e8365a"),n(16,150,40,16,"#ffd23a"),n(12,108,34,18,"#ff7ab8"),n(8,64,26,16,"#fff"),n(8,64,18,8,"#e8365a"),e.fillStyle="#ffd23a",e.beginPath(),e.arc(0,0,24,0,7),e.fill(),e.strokeStyle="#e8365a",e.lineWidth=6,e.beginPath(),e.arc(0,0,238,0,7),e.stroke(),me(t,4)}function Yu(){let[t,e]=pe(512,512),n=Ge(8);e.fillStyle="#9a7a54",e.fillRect(0,0,512,512);for(let i=0;i<300;i++)e.fillStyle=`rgba(${90+n()*70},${60+n()*50},40,.18)`,e.beginPath(),e.arc(n()*512,n()*512,4+n()*22,0,7),e.fill();e.strokeStyle="rgba(60,40,20,.55)",e.lineWidth=2;for(let i=0;i<40;i++){e.beginPath();let r=n()*512,o=n()*512;e.moveTo(r,o);for(let a=0;a<4;a++)r+=(n()-.5)*70,o+=(n()-.5)*70,e.lineTo(r,o);e.stroke()}return me(t,4)}function ws(s,t,e,n="#58b8ff"){s.beginPath(),s.moveTo(26,0),s.lineTo(t-26,0),s.lineTo(t,26),s.lineTo(t,e-26),s.lineTo(t-26,e),s.lineTo(26,e),s.lineTo(0,e-26),s.lineTo(0,26),s.closePath();let r=s.createLinearGradient(0,0,t,e);r.addColorStop(0,"rgba(24,52,120,.82)"),r.addColorStop(1,"rgba(14,26,78,.86)"),s.fillStyle=r,s.fill(),s.lineWidth=5,s.strokeStyle=n,s.shadowColor=n,s.shadowBlur=16,s.stroke(),s.shadowBlur=0}function S_(s,t,e,n,i,r){let o="",a=n;for(let l of t.split(" ")){let c=o+l+" ";s.measureText(c).width>i&&o?(s.fillText(o,e,a),o=l+" ",a+=r):o=c}return s.fillText(o,e,a),a}var E_=s=>String(s).padStart(2,"0");function $u(s=new Date){let t=s.getFullYear(),e=new Date(t,3,14,0,0,0);return s>new Date(t,3,15)&&(e=new Date(t+1,3,14,0,0,0)),e}function Zu(){let[e,n]=pe(700,1500);return ws(n,700,1500),n.strokeStyle="#fff",n.lineWidth=6,n.strokeRect(60,60,140,100),n.beginPath(),n.moveTo(30,175),n.lineTo(230,175),n.stroke(),n.fillStyle="#fff",n.font=`700 54px ${Zt}`,n.fillText("</>",82,128),n.font=`700 62px ${Zt}`,["Sri Lankan New Year","Auspicious Times","Website"].forEach((i,r)=>n.fillText(i,60,290+r*76)),n.fillStyle="#8fd0ff",n.fillRect(60,520,580,3),n.fillStyle="#e8f2ff",n.font=`400 40px ${Zt}`,S_(n,"A web application that provides the Sinhala and Tamil New Year date, auspicious times, and traditional guidelines in a modern, user-friendly way.",60,600,580,56),["Avurudu Calendar","Auspicious Times","Reminders & Alerts","Location & Timezone","Cultural Information"].forEach((i,r)=>{let o=900+r*120;Oe(n,50,o,600,92,30),n.fillStyle="rgba(40,90,190,.55)",n.fill(),n.strokeStyle="#6ab8ff",n.lineWidth=3,n.stroke(),n.strokeStyle="#fff",n.lineWidth=4,n.beginPath(),n.arc(110,o+46,20,0,7),n.stroke(),n.fillStyle="#fff",n.font=`600 40px ${Zt}`,n.fillText(i,165,o+58)}),me(e,4)}function Ju(){let[e,n]=pe(760,640);ws(n,760,640);let i=$u(),r=i.getFullYear();n.fillStyle="#fff",n.font=`600 36px ${Zt}`,n.fillText("Sinhala & Tamil New Year Calendar",60,62),n.textAlign="center",n.font=`600 42px ${Zt}`,n.fillText(`April ${r}`,760/2,128),n.font=`500 26px ${Zt}`,["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach((a,l)=>n.fillText(a,90+l*97,185));let o=new Date(r,3,1).getDay();n.font=`600 34px ${Zt}`;for(let a=1;a<=30;a++){let l=o+a-1,c=l%7,h=Math.floor(l/7),u=90+c*97,f=248+h*62;a===14?(Oe(n,u-36,f-38,72,52,12),n.fillStyle="#e8a030",n.fill(),n.fillStyle="#fff"):n.fillStyle="#e8f2ff",n.fillText(String(a),u,f)}return me(e,4)}function Ku(){let[e,n]=pe(760,400);return ws(n,760,400),n.fillStyle="#fff",n.font=`600 38px ${Zt}`,n.fillText("Auspicious Time Schedule",70,66),[["Punya Kalaya","06:12 AM \u2013 07:00 AM"],["Anuradha Kalaya","10:24 AM \u2013 11:12 AM"],["Meal Preparation","11:48 AM \u2013 12:18 PM"],["Work Commencement","02:36 PM \u2013 03:12 PM"]].forEach(([r,o],a)=>{let l=135+a*66;n.fillStyle="#ffcf6a",n.beginPath(),n.arc(80,l-10,18,0,7),n.fill(),n.fillStyle="#e8f2ff",n.font=`500 25px ${Zt}`,n.textAlign="left",n.fillText(r,120,l),n.textAlign="right",n.fillText(o,715,l)}),me(e,4)}function ju(){let[e,n]=pe(760,300),i=me(e,4),r=$u(),o=()=>{n.clearRect(0,0,760,300),ws(n,760,300),n.fillStyle="#fff",n.font=`600 38px ${Zt}`,n.textAlign="left",n.fillText("Time Until Avurudu",70,62);let a=Math.max(0,Math.floor((r-new Date)/1e3)),l=[Math.floor(a/86400),Math.floor(a%86400/3600),Math.floor(a%3600/60),a%60],c=["Days","Hours","Minutes","Seconds"];l.forEach((h,u)=>{let f=40+u*175;Oe(n,f,90,150,110,16),n.fillStyle="rgba(30,70,170,.7)",n.fill(),n.strokeStyle="#6ab8ff",n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.textAlign="center",n.font=`700 66px ${Zt}`,n.fillText(u===0?String(h):E_(h),f+75,172),n.font=`500 26px ${Zt}`,n.fillStyle="#cfe4ff",n.fillText(c[u],f+75,240)}),i.needsUpdate=!0};return o(),{tex:i,update:o}}function Qu(){let[e,n]=pe(760,240),i=me(e,4),r=()=>{n.clearRect(0,0,760,240),ws(n,760,240),n.fillStyle="#fff",n.textAlign="left",n.font=`600 36px ${Zt}`,n.fillText("Your Location",120,62),n.strokeStyle="#fff",n.lineWidth=5,n.beginPath(),n.arc(70,52,15,0,7),n.stroke(),n.font=`500 34px ${Zt}`,n.fillText("Kurunegala, Sri Lanka",70,128);let o="";try{o=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Colombo",hour:"2-digit",minute:"2-digit"})}catch{o="--:--"}n.fillText(`Time (IST) : ${o}`,70,188),i.needsUpdate=!0};return r(),{tex:i,update:r}}function tf(){let[e,n]=pe(760,220);return ws(n,760,220),n.fillStyle="#fff",n.font=`600 38px ${Zt}`,n.fillText("Reminder",120,68),n.strokeStyle="#ffd27a",n.lineWidth=5,n.beginPath(),n.arc(70,56,16,Math.PI,0),n.lineTo(86,78),n.lineTo(54,78),n.closePath(),n.stroke(),Oe(n,590,36,110,52,26),n.fillStyle="#2fd16a",n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(674,62,20,0,7),n.fill(),n.font=`400 30px ${Zt}`,n.fillStyle="#e8f2ff",n.fillText("Notify me before each auspicious time",60,160),me(e,4)}function ef(s,t="#5fb8ff"){let[i,r]=pe(768,480),o=r.createLinearGradient(0,0,768,480);o.addColorStop(0,"#0e1740"),o.addColorStop(1,"#2a1654"),r.fillStyle=o,r.fillRect(0,0,768,480),r.fillStyle="rgba(255,255,255,.08)",r.fillRect(0,0,768,46),["#ff6b6b","#ffd23a","#4cd964"].forEach((h,u)=>{r.fillStyle=h,r.beginPath(),r.arc(30+u*30,23,8,0,6.3),r.fill()}),r.fillStyle="rgba(255,255,255,.14)",Oe(r,150,10,470,26,13),r.fill(),r.fillStyle="rgba(255,255,255,.7)",r.font=`500 17px ${Zt}`,r.textAlign="left",r.fillText("project-details.md",170,29),r.fillStyle=t,r.font=`700 20px ${Zt}`,r.fillText("MY PROJECTS LAB",44,100),r.fillStyle="#fff",r.font=`700 40px ${Zt}`;let a=s.split(" "),l=[],c="";for(let h of a)r.measureText(c+" "+h).width>680&&c?(l.push(c),c=h):c=c?c+" "+h:h;l.push(c),l.slice(0,3).forEach((h,u)=>r.fillText(h,44,156+u*48));for(let h=0;h<3;h++)r.fillStyle="rgba(255,255,255,.16)",Oe(r,44,318+h*24,560-h*90,10,5),r.fill();return r.fillStyle=t,Oe(r,44,400,330,52,26),r.fill(),r.fillStyle="#0b1230",r.font=`700 22px ${Zt}`,r.fillText("Click to read details",74,434),me(i,4)}function nf(s){let[n,i]=pe(640,150);return i.fillStyle="rgba(14,10,40,.82)",Oe(i,8,8,624,96,48),i.fill(),i.strokeStyle="#6fd6ff",i.lineWidth=4,i.stroke(),i.fillStyle="#fff",i.font=`700 40px ${Zt}`,i.textAlign="center",i.fillText(s,640/2,72),i.fillStyle="#6fd6ff",i.beginPath(),i.moveTo(640/2-22,108),i.lineTo(640/2+22,108),i.lineTo(640/2,142),i.closePath(),i.fill(),me(n,4)}function sf(){let[s,t]=pe(1024,512),e=t.createLinearGradient(0,0,1024,512);return e.addColorStop(0,"#1a1040"),e.addColorStop(1,"#2d1b5e"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.strokeStyle="#a56bff",t.lineWidth=8,t.strokeRect(14,14,996,484),t.save(),t.shadowColor="#a56bff",t.shadowBlur=24,t.fillStyle="rgba(165,107,255,.18)",Oe(t,62,130,230,230,40),t.fill(),t.strokeStyle="#c9a8ff",t.lineWidth=8,t.stroke(),t.restore(),t.fillStyle="#fff",t.font=`700 112px ${Zt}`,t.textAlign="center",t.fillText("</>",177,280),t.textAlign="left",t.shadowColor="#c9a8ff",t.shadowBlur=14,t.fillStyle="#fff",t.font=`700 118px ${Zt}`,t.fillText("My Projects",330,240),t.font=`700 118px ${Zt}`,t.fillText("Lab",330,365),t.shadowBlur=0,t.fillStyle="#ffd27a",t.fillRect(330,392,560,5),me(s,4)}var ql=()=>new un({vertexColors:!0}),Yl=()=>new re({vertexColors:!0,toneMapped:!1}),af=(s,t={})=>new re({map:s,toneMapped:!1,transparent:!0,...t});function rf(s,t){let e={box:(n,i,r,o,a,l,c,h,u=0,f=0,d=0)=>s.add(n,Sn.box,i,{x:r,y:o,z:a,sx:l,sy:c,sz:h,ry:u,rx:f,rz:d}),cyl:(n,i,r,o,a,l,c,h=1,u=1)=>s.add(n,Sn.cyl,i,{x:r,y:o,z:a,sx:l*h,sy:c,sz:l*u}),cone:(n,i,r,o,a,l,c,h=0,u=0,f=0)=>s.add(n,Sn.cone,i,{x:r,y:o,z:a,sx:l,sy:c,sz:l,rx:h,rz:u,ry:f}),ico:(n,i,r,o,a,l,c=1,h=1)=>s.add(n,Sn.ico,i,{x:r,y:o,z:a,sx:l*h,sy:l*c,sz:l,ry:t()*6}),tor:(n,i,r,o,a,l,c,h=Math.PI*2,u=64)=>s.add(n,new hn(r,o,6,u,h).rotateX(Math.PI/2),i,{x:a,y:l,z:c}),torV:(n,i,r,o,a,l,c,h=Math.PI,u=0)=>s.add(n,new hn(r,o,6,32,h),i,{x:a,y:l,z:c,ry:u}),local(n,i,r,o,a){s.push(new $t().compose(new L(n,i,r),new Qe().setFromEuler(new $n(0,o,0)),new L(1,1,1))),a(),s.pop()},roof(n,i,r,o,a,l,c,h,u,f=0){e.local(o,a,l,f,()=>{let d=Math.atan2(u,h/2),g=Math.hypot(h/2,u)+.3;e.box(n,i,0,u/2,h/4,c+.5,.2,g,0,d),e.box(n,r,0,u/2,-h/4,c+.5,.2,g,0,-d),e.box(n,r,0,u+.02,0,c+.6,.22,.34);let y=new Ms;y.moveTo(-h/2,0),y.lineTo(h/2,0),y.lineTo(0,u);for(let p of[-1,1])s.add(n,new rr(y,{depth:.16,bevelEnabled:!1}).translate(0,0,-.08).rotateY(Math.PI/2),16181974,{x:p*(c/2),y:.05,z:0})})}};return e}var $e=(s,t,e,n,i,r,o=0,a={})=>{let l=new Nt(new tn(t,e),af(s,a));return l.position.set(n,i,r),l.rotation.y=o,l};function w_(s,t,e,n,i){let r=e/s,o=new Nt(new Mn(s,s,t,40,1,!0,-r/2,r),n);return o.position.y=i,o}function $l(s){let t=new Ue;t.add(s);let e=s.clone(!0);return e.traverse(n=>{(n.isSprite||n.isPoints)&&(n.visible=!1)}),e.scale.y=-1,t.add(e),t}function of({mobile:s=!1,theme:t="lab"}={}){let e={bg:1378607,hemi:[16770768,8021160,2.7],key:[16762512,2],rim:[9677055,1.3],ceil:5915768,cove:3836671,dark:1775154,pillar:2761264,sofa:13483950,pool:16756832,sky:Ou(),wall:Fu(1),sign:sf(),plate:"My Projects Showcase",banner:Hu()},n=new _s;n.background=new Pt(e.bg);let i=Ge(77),r=[],o=hr();n.add(new Ss(e.hemi[0],e.hemi[1],e.hemi[2]));let a=new oi(e.key[0],e.key[1]);a.position.set(0,12,18),n.add(a);let l=new oi(e.rim[0],e.rim[1]);l.position.set(0,6,-16),n.add(l);{let R=new Ts,x=rf(R,i),A=new Ue;A.add($e(e.sky,60,22,0,10,-17.5,0,{transparent:!1}));let B=e.wall;for(let O of[-1,1]){let W=$e(B,44,13,O*25,6.5,-4,-O*Math.PI/2,{transparent:!1});A.add(W),x.box("lit",e.dark,O*20,6,-4,9,.5,30),x.box("glow",16767392,O*15.6,5.9,-4,.1,.12,30),x.box("glow",16769712,O*15.6,6.6,-4,.08,.7,30);for(let N=0;N<22;N++)x.cone("lit",3836490,O*15.4,5.2-i()*.9,-17+N*1.3,.12,1.2+i()*1.2,Math.PI,0);for(let N of[-9])x.box("lit",e.pillar,O*15.8,6.5,N,1.5,13,1.5),x.box("glow",16764810,O*15.8-O*.78,6.5,N,.06,12.4,.5)}x.box("lit",e.ceil,0,13.2,-4,60,.4,40);let _=[];for(let O=-18;O<=18;O+=6)for(let W=-14;W<=10;W+=6)_.push(O,12.8,W);let E=new te;E.setAttribute("position",new Bt(_,3)),A.add(Object.assign(new Pi(E,new Ci({size:1.6,map:o,color:16767392,transparent:!0,blending:be,depthWrite:!1,toneMapped:!1})),{frustumCulled:!1}));let z=(O,W,N,k)=>x.local(O,0,W,N,()=>{x.box("lit",k,0,.5,0,4.4,.8,1.7),x.box("lit",k,0,1.15,-.7,4.4,1.1,.5);for(let Y of[-1,1])x.box("lit",k,Y*2.2,.75,0,.5,1.2,1.7);x.box("lit",2896496,-1,1,.1,.9,.7,.3,.2),x.box("lit",3813210,1.1,1,.1,.9,.7,.3,-.2)}),K=(O,W,N=1)=>{x.cyl("lit",2827315,O,.5*N,W,.5*N,1*N);for(let k=0;k<9;k++){let Y=k/9*6.28;x.cone("lit",k%2?3045962:4168280,O+Math.cos(Y)*.3*N,1.5*N+i()*.4,W+Math.sin(Y)*.3*N,.34*N,(1.6+i())*N,Math.sin(Y)*.5,-Math.cos(Y)*.5)}};z(-14,11,.7,e.sofa),z(15,11.5,-.7,e.sofa),x.cyl("lit",15261910,-11,.45,13,1.4,.18),x.cyl("lit",9071162,-11,.2,13,.3,.4),K(-17.5,12.5,1.1),K(18.5,11.5,1.2),K(-19,3,1.4),K(19.5,2,1.3);for(let O of[-1,1])for(let W=0;W<7;W++){let N=i()*6.28;x.cone("lit",3115602,O*(17+i()*2),.8,17+i(),.5,2.8+i(),Math.sin(N)*.7,Math.cos(N)*.7)}A.add(R.build("lit",ql()),R.build("glow",Yl())),n.add($l(A));let it=new Nt(new tn(260,220).rotateX(-Math.PI/2),new re({map:Bu(),transparent:!0,opacity:.86,toneMapped:!1,depthWrite:!1}));it.position.set(0,0,-4),it.renderOrder=1,n.add(it);let I=new Nt(new tn(40,28).rotateX(-Math.PI/2),new re({map:o,color:e.pool,transparent:!0,opacity:.45,blending:be,depthWrite:!1,toneMapped:!1}));I.position.set(0,.03,2),I.renderOrder=2,n.add(I)}let c=()=>{let R=new Ts;return{B:R,k:rf(R,i),g:new Ue}},h=(R,x,A)=>{let B=new Nt(new hn(R,.14,6,80).rotateX(Math.PI/2),new re({color:A,transparent:!0,opacity:0,blending:be,depthWrite:!1,toneMapped:!1}));return B.position.y=x,B},u=(R,x,A,B,_,E,z,K,it,I)=>{let O=new Ue;O.position.set(_,E,z),O.rotation.y=K,O.updateMatrix(),R.add(O),O.add($e(B,it,I,0,0,.04,0,{transparent:!1})),x.push(O.matrix),A.box("glow",6273279,0,I/2+.05,0,it+.2,.08,.12),A.box("glow",6273279,0,-I/2-.05,0,it+.2,.08,.12),A.box("glow",6273279,-it/2-.05,0,0,.08,I,.12),A.box("glow",6273279,it/2+.05,0,0,.08,I,.12),A.box("lit",2437226,0,-I/2-.5,0,it+.9,.7,.9),A.box("glow",6273279,0,-I/2-.12,.46,it+.9,.06,.05),x.pop()},f=(R,x,{x:A,z:B,ry:_,title:E,accent:z,accentHex:K})=>{let it=new Ue;it.position.set(A,0,B),it.rotation.y=_,R.add(it),x.local(A,0,B,_,()=>{x.box("lit",12159576,0,1.55,0,4.4,.16,2.4),x.box("glow",K,0,1.4,1.2,4.4,.05,.05),x.box("glow",K,0,1.4,-1.2,4.4,.05,.05);for(let k of[-1,1])for(let Y of[-1,1])x.box("lit",2761792,k*1.95,.75,Y*.95,.14,1.5,.14);x.box("lit",3813974,0,.45,0,3.8,.08,1.9),x.box("lit",12896468,0,1.68,.1,2.7,.1,1.7),x.box("lit",9080992,0,1.74,.5,1.2,.01,.6),x.cyl("lit",16052198,1.7,1.77,.7,.18,.28),x.torV("lit",16052198,.1,.035,1.9,1.77,.7,Math.PI*2),x.box("lit",15216684,-1.7,1.7,.6,.9,.1,.65,.2),x.box("lit",2784232,-1.7,1.8,.6,.8,.1,.58,.05),x.box("lit",16758810,-1.7,1.9,.6,.7,.1,.5,-.1),x.cyl("lit",2827315,-1.6,1.86,-.6,.25,.4);for(let k=0;k<6;k++){let Y=k/6*6.28;x.cone("lit",k%2?3045962:4168280,-1.6+Math.cos(Y)*.15,2.3,-.6+Math.sin(Y)*.15,.2,.9,Math.sin(Y)*.6,-Math.cos(Y)*.6)}});let I=new Ue;I.position.set(0,1.73,-.72),I.rotation.x=-.3,it.add(I);{let k=new Nt(new on(2.7,1.75,.08),new un({color:12896468}));k.position.set(0,.875,0),I.add(k)}I.add($e(ef(E,z),2.5,1.56,0,.875,.05,0,{transparent:!1}));let O=new vn(new ln({map:o,color:K,transparent:!0,opacity:.35,blending:be,depthWrite:!1}));O.scale.set(6.5,4.6,1),O.position.set(0,2.5,-.2),it.add(O);let W=new vn(new ln({map:nf("READ PROJECT DETAILS"),transparent:!0,depthWrite:!1,toneMapped:!1}));W.scale.set(3.6,.85,1),W.position.set(0,4.6,.2),it.add(W);let N=new Nt(new on(4.6,3.4,2.6),new re);return N.visible=!1,N.position.set(0,1.9,0),N.userData.kind="laptop",it.add(N),{hit:N,glow:O,label:W,update(k,Y){O.material.opacity+=((Y?.95:.34+.1*Math.sin(k*3))-O.material.opacity)*.15,W.position.y=4.6+Math.sin(k*2)*.12,W.scale.set(3.6*(Y?1.08:1),.85*(Y?1.08:1),1)}}},d=(()=>{let{B:R,k:x,g:A}=c(),B=[],_=1.36;x.cyl("lit",989768,0,.6,0,7,1.2),x.cyl("lit",5944648,0,1.28,0,6.7,.16),x.tor("glow",4765951,7,.08,0,1.2,0),x.tor("glow",16757576,7.35,.07,0,.1,0),x.tor("glow",4765951,7,.06,0,.3,0);let E=w_(7.04,1,8.6,af(zu("Preschool Management System")),.62);A.add(E);for(let N=0;N<56;N++){let k=N/56*6.28;Math.abs(Math.atan2(Math.sin(k-Math.PI/2),Math.cos(k-Math.PI/2)))<.2||x.box("lit",16777215,Math.cos(k)*6.3,_+.38,Math.sin(k)*6.3,.14,.76,.06,-k+Math.PI/2)}x.tor("lit",16777215,6.3,.035,0,_+.6,0),x.tor("lit",16777215,6.3,.035,0,_+.25,0),x.box("lit",16773338,0,_+1.2,-1.4,5.4,2.4,3.4),x.box("lit",16773338,-3.3,_+1,-1.2,3,2,3),x.roof("lit",8017612,6176686,0,_+2.4,-1.4,5.4,3.6,1.5),x.roof("lit",8017612,6176686,-3.3,_+2,-1.2,3,3.2,1.3),x.roof("lit",15749679,14172703,0,_+2.4,.55,2.8,2.6,1.15,Math.PI/2),x.box("lit",16773338,0,_+1.2,.2,2.4,2.4,.3),[15216684,16751146,16767024,4503626,3837168].forEach((N,k)=>x.torV("lit",N,.9-k*.14,.07,0,_+3.8,.62,Math.PI)),x.ico("lit",16777215,-.95,_+3.8,.62,.22,.8),x.ico("lit",16777215,.95,_+3.8,.62,.22,.8),x.box("lit",16051424,-1.7,_+3.9,-1.6,.55,1.4,.55),x.box("lit",14172703,-1.7,_+4.65,-1.6,.7,.14,.7),x.box("lit",9067050,0,_+.8,.38,1.3,1.6,.12),x.box("glow",16767120,0,_+.85,.45,1,1.4,.04),x.box("lit",9067050,0,_+.85,.47,.06,1.4,.04);for(let N of[-1,1])x.box("lit",16777215,N*1.9,_+1.2,.1,1.1,1,.08),x.box("glow",16769184,N*1.9,_+1.2,.15,.9,.8,.04),x.box("lit",16751146,N*1.9,_+1.85,.2,1.3,.14,.4,0,.3);for(let N of[-1,1])x.box("lit",16777215,-3.3+N*.8,_+1,.4,1,.9,.08),x.box("glow",16769184,-3.3+N*.8,_+1,.45,.82,.72,.04);let z=$e(Vu(),1.9,.71,0,_+2.35,.82);A.add(z);for(let N=0;N<6;N++)x.cyl("lit",16052198,N%2?.3:-.3,_+.06,1+N*.85,.34,.1,1.2,.8);for(let N=0;N<26;N++){let k=N%2?1:-1;x.ico("lit",[16740264,16765498,16742970,16777215,11563263][Math.floor(i()*5)],k*(1.5+i()*1.2),_+.2,.9+i()*1,.16+i()*.1)}for(let N of[-1,1])x.ico("lit",4168274,N*2.6,_+.35,.7,.45,.8);x.local(-4.4,_,2,.3,()=>{for(let[N,k]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])x.box("lit",15216684,N,1,k,.14,2,.14);x.box("lit",16761402,0,1.45,0,1.4,.12,1.4),x.cone("lit",3837168,0,2.55,0,1.15,.9,0,0,Math.PI/4),x.box("lit",16765498,0,.95,1.9,.75,.1,2.9,0,.62),x.box("lit",15216684,-.4,1,1.9,.08,.3,2.9,0,.62),x.box("lit",15216684,.4,1,1.9,.08,.3,2.9,0,.62);for(let N=0;N<5;N++)x.box("lit",3837168,-1.05,.25+N*.3,-.2,.06,.06,.7);x.box("lit",3837168,-1.05,.8,-.2,.08,1.7,.08,0,0,.2)}),x.box("lit",9067050,-1.9,_+.75,2.45,1.1,1,.08,0,-.12);{let N=$e(Wu(),.95,.85,-1.9,_+.78,2.5,0,{transparent:!1});N.rotation.x=-.12,A.add(N)}x.box("lit",9067050,-2.3,_+.35,2.7,.08,.8,.08,0,.3),x.box("lit",9067050,-1.5,_+.35,2.7,.08,.8,.08,0,.3),x.cone("lit",6964520,3.5,_+1.5,-.9,.5,3.2);let K=[3115578,4171850,5815626,2783798];for(let N=0;N<9;N++){let k=i()*6.28,Y=i()*1.3;x.ico("lit",K[N%4],3.5+Math.cos(k)*Y,_+3.7+i()*1.3,-.9+Math.sin(k)*Y,.95+i()*.5,.85)}x.local(4.7,_,2,-.2,()=>{for(let N of[-1,1])x.box("lit",2784232,N*1.4,1.1,-.35,.1,2.3,.1,0,0,.18*N),x.box("lit",2784232,N*1.4,1.1,.35,.1,2.3,.1,0,0,.18*N);x.box("lit",2784232,0,2.15,0,3,.12,.12);for(let N of[-.6,.6])x.box("lit",6969920,N,1.4,0,.03,1.5,.03),x.box("lit",N>0?15216684:16761402,N,.62,0,.55,.07,.25)}),[["A","#f0522f",-.1,0,2.5,.15],["B","#2a7be8",.78,0,2.55,-.1],["C","#ffb81a",.34,.72,2.5,.05]].forEach(([N,k,Y,st,at,pt],Q)=>{let U=1.7+Y;x.box("lit",[15749679,2784232,16758810][Q],U,_+.36+st,at,.72,.72,.72,pt);let F=$e(Gu(N,k),.62,.62,U,_+.36+st,at+.37,pt,{transparent:!1});A.add(F)});for(let N=0;N<40;N++){let k=i()*6.28,Y=5.2+i()*.8;x.ico("lit",[16740264,16765498,16742970,11563263,16777215][Math.floor(i()*5)],Math.cos(k)*Y,_+.18,Math.sin(k)*Y,.14+i()*.1)}u(A,R,x,fr("home"),-11.4,5.3,2,.5,6.4,4.5),u(A,R,x,fr("gallery"),-6.9,4.9,-3.4,.3,3.9,2.9),u(A,R,x,fr("chart"),6.9,4.9,-3.4,-.3,3.9,2.9),u(A,R,x,fr("list"),11.4,5.3,2,-.5,6.4,4.5);let it=e.banner;for(let N of[-1,1])A.add($e(it,3.2,9.6,N*12.9,8.2,-5.5,-N*.18)),x.box("glow",16769192,N*12.9,13,-5.5,3.4,.14,.2);x.box("lit",659242,0,11,-13.2,9.6,3.6,.5),x.box("glow",5939455,0,12.82,-12.92,9.7,.08,.08),x.box("glow",5939455,0,9.18,-12.92,9.7,.08,.08),A.add($e(e.sign,7.2,3.6,0,11,-12.9,0,{transparent:!1})),x.box("lit",12103848,0,8,-13.2,11,2,.6),A.add($e(ku(e.plate),10.6,1.95,0,8,-12.88,0,{transparent:!1})),x.tor("glow",16765562,4.6,.13,0,11.4,-1),x.tor("glow",16771512,3.3,.11,0,10.6,-1);for(let N of[.8,2.4,3.9,5.5])x.box("glow",16765562,Math.cos(N)*4,12.2,Math.sin(N)*4-1,.05,1.7,.05);for(let[N,k,Y,st,at]of[[32,.14,0,-12,e.cove],[32,.14,0,8,e.cove],[.14,20,-16,-2,e.cove],[.14,20,16,-2,e.cove]])x.box("glow",at,Y,12.9,st,N,.14,k);let I=f(A,x,{x:8.4,z:6.2,ry:-.5,title:"Preschool Management System",accent:"#5fb8ff",accentHex:6273279});B.push(I.hit),A.add(R.build("lit",ql()),R.build("glow",Yl()));let O=h(7.05,1.22,6738175);A.add(O);let W=new Nt(new Mn(7.4,7.4,8,12),new re);return W.visible=!1,W.position.y=4.8,W.userData.kind="model",A.add(W),B.push(W),{key:"preschool",group:$l(A),picks:B,hover:O,desk:I,cam:{x:0,y:4.6,d:24}}})(),g=(()=>{let{B:R,k:x,g:A}=c(),B=[],_=1.36,E=[];x.cyl("lit",2761520,0,.6,0,7.8,1.2),x.cyl("lit",5214010,0,1.28,0,7.5,.16),x.tor("glow",15775816,7.8,.09,0,1.2,0),x.tor("glow",4632831,8.25,.09,0,.1,0),x.tor("glow",4632831,7.85,.05,0,.35,0);let z=new Nt(new Li(5.6,40).rotateX(-Math.PI/2),new un({map:Yu()}));z.position.set(.4,1.38,1.2),A.add(z);let K=$e(qu(),5.4,5.4,.2,1.4,2.2,0);K.rotation.x=-Math.PI/2,A.add(K);let it=new Ms;it.moveTo(-2.9,0),it.lineTo(2.9,0),it.lineTo(2.9,4.4),it.absarc(0,4.4,2.9,0,Math.PI,!1),it.lineTo(-2.9,0),R.add("lit",new rr(it,{depth:.9,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1,curveSegments:18}),10126962,{x:.8,y:_+1.1,z:-5.6,sx:1.4,sy:1.4,sz:1.4});for(let P of[-1,1])x.box("lit",6969416,.8+P*5,_+4.9,-5,.9,7.6,1),x.cone("lit",9074272,.8+P*5,_+9.1,-5,.65,1);A.add($e(Xu(),7.9,9.88,.8,_+6.6,-4.14,0));let I=new vn(new ln({map:o,color:16758880,transparent:!0,opacity:.5,blending:be,depthWrite:!1}));I.scale.set(14,14,1),I.position.set(.8,_+9.6,-3.8),A.add(I),x.local(-2.3,_,.7,.12,()=>{x.box("lit",16050388,0,1.1,0,5.6,2.2,3.4),x.box("lit",8018490,0,.08,1.7,5.8,.16,1.7),x.roof("lit",11814190,10106406,0,2.2,0,5.6,4.6,1.6);for(let P of[-2.6,-.9,.9,2.6])x.cyl("lit",6962978,P,1.15,2.4,.12,2.3);x.box("lit",10895146,0,2.5,2,6.4,.16,2.6,0,.3);for(let P of[-1.9,1.9])x.box("lit",4860438,P,1.2,1.74,1.1,1,.1),x.box("glow",16758874,P,1.2,1.8,.9,.8,.04);x.box("lit",4860438,0,1,1.74,1.1,1.8,.1),x.box("glow",16754752,0,.95,1.8,.9,1.6,.04);for(let P of[-2.2,2.2])x.box("lit",8014372,P,.45,2.7,1.5,.1,.5),x.box("lit",8014372,P,.8,2.95,1.5,.5,.08),x.box("lit",8014372,P,.22,2.7,.1,.44,.4);for(let P of[-1.8,1.8])x.box("glow",16764778,P,2.1,2.4,.18,.28,.18)});let N=[16748248,16740294,15755992,16757482,13660415];x.cone("lit",5978672,-7.6,_+2,-1.8,.55,4.2),x.cone("lit",5978672,-6.7,_+4.2,-1.8,.2,2.2,0,.9);for(let P=0;P<18;P++){let q=i()*6.28,X=i()*2.6;x.ico("lit",N[P%5],-7.1+Math.cos(q)*X,_+4.4+i()*2.2,-1.8+Math.sin(q)*X*.8,.8+i()*.8,.8)}x.local(1.8,0,0,0,()=>{x.cone("lit",5913642,5.4,_+1.9,-1.6,.7,4),x.cone("lit",5913642,5,_+4.2,-1.6,.25,2.2,0,.5),x.cone("lit",5913642,6,_+4.1,-1.6,.22,2,0,-.5);for(let P=0;P<14;P++){let q=i()*6.28,X=i()*2.4;x.ico("lit",[6989882,9092682,5148724][P%3],5.5+Math.cos(q)*X,_+5+i()*1.4,-1.6+Math.sin(q)*X*.7,.7+i()*.5,.7)}for(let P=0;P<70;P++){let q=i()*6.28,X=.4+i()*2.8;x.cone("lit",P%3?16765466:16103424,5.5+Math.cos(q)*X,_+4.7-i()*.8,-1.6+Math.sin(q)*X*.7,.09,.5+i()*.9,Math.PI)}x.box("lit",6965802,6.5,_+3.5,.6,.22,.22,.22),x.box("lit",6965802,7.9,_+1.7,.6,.26,3.6,.26),x.box("lit",6965802,6.6,_+3.5,.6,3.2,.22,.22),x.box("lit",6965802,5.2,_+1.9,.6,.26,3.9,.26,0,0,.1);for(let P of[6,7.2])for(let q=0;q<10;q++)x.ico("lit",16765466,P,_+3.3-q*.2,.6,.1);x.box("lit",14169690,6.6,_+1.25,.6,1.6,.14,.5)});let k=1.6,Y=3.4;x.cyl("lit",14262842,k,_+.08,Y,.55,.14),x.tor("lit",15218266,.7,.1,k,_+.16,Y),x.cyl("lit",14262842,k,_+1.2,Y,.07,2.2);for(let P of[.4,1,1.7,2.2])x.ico("lit",15251530,k,_+P,Y,.17);for(let P=0;P<5;P++){let q=P/5*6.28;x.cone("lit",14262842,k+Math.cos(q)*.34,_+2.42,Y+Math.sin(q)*.34,.12,.2),x.box("glow",16765024,k+Math.cos(q)*.34,_+2.6,Y+Math.sin(q)*.34,.07,.16,.07)}x.box("glow",16765024,k,_+2.65,Y,.1,.22,.1);let st=new vn(new ln({map:o,color:16754752,transparent:!0,opacity:.9,blending:be,depthWrite:!1}));st.scale.set(2.6,2.6,1),st.position.set(k,_+2.7,Y),A.add(st),E.push(P=>{st.material.opacity=.75+.2*Math.sin(P*9)*Math.sin(P*5.3)});for(let[P,q,X]of[[.95,14168108,0],[.75,16765498,.03],[.55,14168108,.06],[.35,16765498,.09]])R.add("lit",Sn.cyl,q,{x:3.1,y:_+1.5,z:.9+X,sx:P,sy:.06,sz:P,rx:Math.PI/2});x.box("lit",8014372,4.3,_+1,3.4,2.8,.14,1.4);for(let[P,q]of[[-1.2,-.5],[1.2,-.5],[-1.2,.5],[1.2,.5]])x.box("lit",6962978,4.3+P,_+.5,3.4+q,.12,1,.12);x.box("lit",16052198,4.3,_+.62,4.1,2.7,.8,.04);for(let P=0;P<6;P++)x.box("lit",13122106,3.2+P*.44,_+.62,4.13,.14,.8,.03);x.cyl("lit",14722362,4.8,_+1.2,3.3,.5,.3);for(let P=0;P<7;P++)x.ico("lit",[16742954,16765498,9092666,15216684][P%4],4.8+(i()-.5)*.7,_+1.5+i()*.2,3.3+(i()-.5)*.7,.2);for(let P=0;P<5;P++)x.box("lit",16765466,3.6+P*.1,_+1.15+P*.03,3.3+P*.07,.8,.14,.16,.1*P,0,.2);x.cyl("lit",14722362,3.9,_+1.14,3.9,.3,.2),x.ico("lit",16777215,3.9,_+1.3,3.9,.26,.6),x.box("lit",6962978,-3.3,_+.5,4.3,3.2,.16,1.5);for(let P of[-1.4,1.4])x.box("lit",5911576,-3.3+P,_+.25,4.3,.14,.5,1.2);x.cyl("lit",13148256,-3.3,_+.68,4.3,1.1,.2),x.tor("lit",11042880,1.1,.07,-3.3,_+.78,4.3);for(let P=0;P<9;P++){let q=P/9*6.28,X=P<7?.75:0;R.add("lit",new hn(.26,.11,6,14).rotateX(Math.PI/2),[15773744,15243808][P%2],{x:-3.3+Math.cos(q)*X,y:_+.9+(P>6?.18:0),z:4.3+Math.sin(q)*X})}for(let P=0;P<12;P++)x.ico("lit",4860442,-3.9+i()*1.3,_+.95,4+i()*.9,.15,.8);for(let P=0;P<6;P++)x.box("lit",16183524,-2.9+i()*.9,_+.9,4+i()*.7,.24,.16,.24,i());x.ico("lit",9062954,-6.2,_+.9,3.8,.95,.9),x.cyl("lit",9062954,-6.2,_+1.75,3.8,.42,.4),x.tor("lit",8010266,.46,.08,-6.2,_+1.95,3.8),x.tor("lit",16050388,.93,.04,-6.2,_+.95,3.8),x.box("lit",9067050,-4.8,_+.6,2.4,1.3,1.2,1.2);for(let P=0;P<4;P++)x.box("lit",5911576,-4.8,_+.3+P*.28,3.02,1.2,.05,.03);for(let P=0;P<9;P++){let q=P*.7;x.cone("lit",P%2?3050058:4169816,-4.6+Math.cos(q)*.3,_+1,1.6+Math.sin(q)*.3,.4,2.2+i(),Math.sin(q)*.9,-Math.cos(q)*.9)}for(let P=0;P<9;P++){let q=.15+P*.1,X=q+.1,vt=Math.sin(q)*6.9,ot=Math.cos(q)*6.9,S=Math.sin(X)*6.9,M=Math.cos(X)*6.9;x.box("lit",8014372,vt,_+.5,ot,.14,1,.14),x.box("lit",8014372,(vt+S)/2,_+.75,(ot+M)/2,Math.hypot(S-vt,M-ot),.09,.07,Math.atan2(S-vt,M-ot)+Math.PI/2),x.box("lit",8014372,(vt+S)/2,_+.4,(ot+M)/2,Math.hypot(S-vt,M-ot),.09,.07,Math.atan2(S-vt,M-ot)+Math.PI/2)}x.box("lit",3814976,-15.2,7,-9.5,4.6,14,3.4),x.box("glow",16767392,-12.88,7,-9.5,.08,13.4,.4),A.add($e(e.sign,4.2,2.1,-15.2,11.3,-7.76,0,{transparent:!1}));let at=(P,q,X,vt,ot,S,M)=>{let H=$e(P,q,X,vt,ot,S,M);return A.add(H),H};at(Zu(),3.9,8.36,-11.9,4.5,3,.42);let pt=Ju(),Q=Ku(),U=ju(),F=Qu(),G=tf(),$=4.5,tt=[pt,Q,U,F,G].map((P,q)=>$*[640,400,300,240,220][q]/760),et=11.2;[pt,Q,U,F,G].forEach((P,q)=>{let X=at(P.tex||P,$,tt[q],11.7,et-tt[q]/2,3,-.42);et-=tt[q]+.14});let nt=-1;E.push(P=>{let q=Math.floor(P);q!==nt&&(nt=q,U.update(),F.update())});for(let P of[-1,1])x.box("glow",6273279,P*11.7-P*.1,.06,3,5.2,.08,.5,-P*.42);for(let[P,q,X,vt]of[[32,.14,0,-12],[32,.14,0,8],[.14,20,-16,-2],[.14,20,16,-2]])x.box("glow",16764810,X,12.9,vt,P,.14,q);let ft=f(A,x,{x:8.8,z:6.6,ry:-.5,title:"New Year Auspicious Time Website",accent:"#ffcf6a",accentHex:16764778});A.add(R.build("lit",ql()),R.build("glow",Yl()));let C=h(7.85,1.22,16765040);A.add(C);let lt=new Nt(new Mn(8,8,8.5,12),new re);return lt.visible=!1,lt.position.y=5,lt.userData.kind="model",A.add(lt),r.push(P=>E.forEach(q=>q(P))),{key:"avurudu",group:$l(A),picks:[ft.hit,lt],hover:C,desk:ft,cam:{x:0,y:4.8,d:25}}})(),y=[d,g];y.forEach(R=>{R.group.visible=!1,n.add(R.group)});let p=0,m=-1,b=1,v=1;y[0].group.visible=!0;let T=R=>1-Math.pow(1-R,3);return{scene:n,rooms:y,get current(){return p},setRoom(R,x=1,A=!1){if(!(R===p&&b>=1)){if(A){y.forEach((B,_)=>{B.group.visible=_===R,B.group.position.x=0}),p=R,b=1;return}b<1&&y.forEach((B,_)=>{B.group.visible=_===p,B.group.position.x=0}),m=p,p=R,v=x,b=0,y[p].group.visible=!0}},update(R,x,A,B){for(let _ of r)_(R,x);if(b<1){b=Math.min(1,b+x*1.6);let _=T(b);y[m].group.position.x=-v*40*_,y[p].group.position.x=v*40*(1-_),b>=1&&(y[m].group.visible=!1,y[m].group.position.x=0,y[p].group.position.x=0)}y.forEach((_,E)=>{let z=E===p&&A?.55+.15*Math.sin(R*4):0;_.hover.material.opacity+=(z-_.hover.material.opacity)*Math.min(1,x*8)}),y.forEach((_,E)=>{_.group.visible&&_.desk.update(R,E===p&&B)})},pick(R){let x=R.intersectObjects(y[p].picks,!1);return x.length?x[0].object.userData.kind:null},transitioning:()=>b<1}}var qt=s=>document.querySelector(s),En=qt("#scene"),Oi=matchMedia("(pointer:coarse)").matches,eo=Oi||Math.min(innerWidth,innerHeight)<600,df=matchMedia("(prefers-reduced-motion: reduce)").matches,no=50,gr=1.2,di;try{di=new Js({canvas:En,antialias:!eo,powerPreference:"high-performance",stencil:!1})}catch(s){throw qt("#loader-text").textContent="Your browser/device does not support WebGL, so the 3D scene cannot start.",qt("#loader-bar").classList.add("hidden"),s}di.setClearColor(Wa);location.search.includes("debug")&&(window.__r=di);var tc=Math.min(window.devicePixelRatio||1,eo?1.5:2),li=tc,pf=new _s,ae=new Ve(no,1,1,1600),qe={yaw:0,pitch:.5,tx:0,ty:1.5,tz:3,zoom:1},Me={...qe},mf=60,Za=null,zi="home",yr=-99,Un=!1,Kt={x:0,y:0,nx:0,ny:0,moved:!1,inside:!1},dn={x:0,y:0},A_=()=>{let s=ae.aspect;return s>=1.2?1:fn.clamp(.42+(s-.5)/.7*.58,.42,1)},R_=()=>{let s=ae.aspect;return Math.max(33/(Math.tan(no*Math.PI/360)*s),40)*A_()*gr},gf=()=>ae.aspect<1.2?Math.pow(1.2/ae.aspect,.65):1,xr={home:{yaw:0,pitch:.31,tx:0,ty:2.5,tz:4},about:{yaw:0,pitch:.24,tx:0,ty:4.2,tz:3,d:30},nupa:{yaw:0,pitch:.26,tx:0,ty:4.4,tz:-9,d:36},sliit:{yaw:.5,pitch:.27,tx:-20,ty:3.6,tz:-3.5,d:31},labs:{yaw:-.5,pitch:.27,tx:20,ty:3.6,tz:-3.5,d:31},labsDoor:{yaw:-.52,pitch:.1,tx:18.4,ty:2.6,tz:-.6,d:9}};function io(s){let t=xr[s];t&&(zi=s,Me.yaw=t.yaw,Me.pitch=t.pitch,Me.tx=t.tx,Me.ty=t.ty,Me.tz=t.tz,Me.zoom=1,Za=t.d?t.d*gf()*gr:null,yr=performance.now()/1e3,document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("is-active",e.dataset.view===s)))}var Ya=qt("#panel"),_r=!1;function C_(s){let t=We.places[s];if(!t)return;let e=n=>`<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${n}</span>`;qt("#p-kicker").textContent=t.kicker,qt("#p-title").textContent=t.title,qt("#p-text").textContent=t.text,qt("#p-points").innerHTML=(t.points||[]).map(n=>`<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span><span>${n}</span></li>`).join(""),qt("#p-projects").innerHTML=(t.projects||[]).map(n=>`<div class="rounded-2xl border border-white/10 bg-white/5 p-4"><div class="flex items-start justify-between gap-3"><h3 class="text-sm font-semibold leading-snug">${n.title}</h3>${n.year?`<span class="shrink-0 text-xs text-cyan-300">${n.year}</span>`:""}</div>${n.bullets?`<ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-white/75">${n.bullets.map(i=>`<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300"></span><span>${i}</span></li>`).join("")}</ul>`:""}${n.stack?`<div class="mt-3 flex flex-wrap gap-1.5">${n.stack.map(i=>`<span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px]">${i}</span>`).join("")}</div>`:""}${(n.details||[]).map(i=>`<p class="mt-2 text-xs leading-relaxed text-white/75"><b class="text-white/90">${i.heading}:</b> ${i.text}</p>`).join("")}${n.href?`<a href="${n.href}" target="_blank" rel="noopener" class="mt-3 inline-block text-xs font-semibold text-cyan-300 hover:underline">Live site \u2197</a>`:""}</div>`).join(""),qt("#p-groups").innerHTML=(t.groups||[]).map(n=>`<div><p class="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">${n.title}</p><div class="flex flex-wrap gap-2">${n.items.map(e).join("")}</div></div>`).join(""),qt("#p-tags").innerHTML=(t.tags||[]).map(e).join(""),qt("#p-buttons").innerHTML=(t.buttons||[]).map(n=>n.action?`<button data-action="${n.action}" class="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/20">${n.label}</button>`:`<a href="${We.links[n.href]||n.href}" target="_blank" rel="noopener" class="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#0b1230] transition hover:brightness-110">${n.label}</a>`).join(""),Ya.querySelectorAll("[data-action]").forEach(n=>n.addEventListener("click",()=>pi("labsLab"))),Ya.scrollTop=0,Ya.dataset.open="true",_r=!0}function xf(){Ya.dataset.open="false",_r=!1}function pi(s){if(!Fi){if(s==="labsLab"){if(Ze==="lab")return;Ef(!1,0,"lab");return}if(s==="labsInfo"&&(s="labs"),Ze==="lab"){nc().then(()=>{s!=="home"&&pi(s)});return}io(s),s==="home"?xf():C_(s)}}document.querySelectorAll("[data-view]").forEach(s=>s.addEventListener("click",()=>pi(s.dataset.view)));qt("#p-close").addEventListener("click",()=>pi("home"));addEventListener("keydown",s=>{if(s.key==="Escape"){Bi?so():Ze==="lab"?nc():pi("home");return}Ze==="lab"&&!Bi&&(s.key==="ArrowRight"&&to(1),s.key==="ArrowLeft"&&to(-1))});qt("#social-gh").href=We.links.github;qt("#social-in").href=We.links.linkedin;qt("#social-mail").href=We.links.email;document.querySelectorAll("[data-name]").forEach(s=>s.textContent=We.name);document.title=`${We.name} \u2013 ${We.tagline}`;var ui=new Map,Dn=null,pr=0,ec=1;En.addEventListener("pointerdown",s=>{if(En.setPointerCapture(s.pointerId),ui.set(s.pointerId,{x:s.clientX,y:s.clientY}),Dn={x:s.clientX,y:s.clientY,t:performance.now(),moved:0},ui.size===2){let[t,e]=[...ui.values()];pr=Math.hypot(t.x-e.x,t.y-e.y),ec=Ze==="lab"?ve.zoom:Me.zoom}Un=!0,yr=performance.now()/1e3,qt("#hint").classList.add("opacity-0")});En.addEventListener("pointermove",s=>{Kt.x=s.clientX,Kt.y=s.clientY,Kt.nx=s.clientX/innerWidth*2-1,Kt.ny=s.clientY/innerHeight*2-1,Kt.moved=!0,Kt.inside=!0;let t=ui.get(s.pointerId);if(!t)return;let e=s.clientX-t.x,n=s.clientY-t.y;if(t.x=s.clientX,t.y=s.clientY,ui.size===2){let[i,r]=[...ui.values()],o=Math.hypot(i.x-r.x,i.y-r.y);pr&&(Ze==="lab"?ve.zoom=fn.clamp(ec*(pr/o),.7,1.2):Me.zoom=fn.clamp(ec*(pr/o),.45,1.25))}else Dn&&Ze==="lab"?(Dn.moved+=Math.abs(e)+Math.abs(n),ve.dyaw=fn.clamp(ve.dyaw-e*.004,-.45,.45),ve.dpitch=fn.clamp(ve.dpitch+n*.003,-.05,.22)):Dn&&(Dn.moved+=Math.abs(e)+Math.abs(n),Me.yaw=fn.clamp(Me.yaw-e*.0055,xr[zi].yaw-.95,xr[zi].yaw+.95),Me.pitch=fn.clamp(Me.pitch+n*.0042,.16,1.05));yr=performance.now()/1e3});var _f=s=>{if(ui.delete(s.pointerId),pr=0,ui.size||(Un=!1),Dn&&Dn.moved<8&&performance.now()-Dn.t<450&&s.type==="pointerup"){if(Ze==="lab"){z_(s.clientX,s.clientY),Dn=null;return}let t=yf(s.clientX,s.clientY);t?pi(t.go||t.key):_r&&zi!=="home"&&pi("home")}Dn=null};En.addEventListener("pointerup",_f);En.addEventListener("pointercancel",_f);En.addEventListener("pointerleave",()=>{Kt.inside=!1});En.addEventListener("wheel",s=>{if(s.preventDefault(),Ze==="lab"){ve.zoom=fn.clamp(ve.zoom*Math.exp(s.deltaY*.0011),.7,1.2);return}Me.zoom=fn.clamp(Me.zoom*Math.exp(s.deltaY*.0011),.45,1.25),yr=performance.now()/1e3},{passive:!1});var Ja=new Oa,Ka=new dt,As,lf=null;function yf(s,t){Ka.set(s/innerWidth*2-1,-(t/innerHeight)*2+1),Ja.setFromCamera(Ka,ae);let e=Ja.intersectObjects(As.pickables.map(i=>i.mesh),!1);if(!e.length)return null;let n=i=>As.pickables.find(r=>r.mesh===i.object);return n(e.find(i=>n(i).priority)||e[0])}var pn=qt("#tip"),Zl=0,Jl=0,Kl=0,ci=1,hi=1;function ja(){ci=innerWidth,hi=innerHeight,di.setPixelRatio(li),di.setSize(ci,hi,!1),ae.aspect=ci/hi,mf=R_(),As&&As.setPointScale(hi*li,no),Za&&(Za=xr[zi].d*gf()*gr)}addEventListener("resize",ja);var jl=0,Xa=0,cf=0,qa=0;function P_(s){if(jl+=s,Xa++,Xa<45)return;let t=jl/Xa;jl=0,Xa=0,t>.028&&li>.7?(li=Math.max(.7,li-.2),cf++,qa=0,ja()):t<.0185&&li<tc&&cf<6?++qa>4&&(li=Math.min(tc,li+.15),qa=0,ja()):qa=0}var hf=new Na,uf=!1,L_=0;function I_(){let s=Math.min(hf.getDelta(),.1),t=hf.elapsedTime,e=performance.now()/1e3;if(Ze==="lab"?V_(s,t):U_(s,t,e),P_(s),!uf&&++L_===2){uf=!0;let n=qt("#loader");n.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>n.remove(),900),setTimeout(()=>qt("#hint").classList.add("opacity-0"),9e3),window.__ready=!0}}function U_(s,t,e){let n=e-yr,i=0;!df&&!Un&&zi==="home"&&(i=Math.sin(t*.22)*.035,ae.aspect<1.1&&n>2.5&&(Me.tx=Math.sin(t*.13)*15,Me.yaw=Math.sin(t*.13)*.12));let r=!Oi&&Kt.inside&&!Un?Kt.nx:0,o=!Oi&&Kt.inside&&!Un?Kt.ny:0;dn.x+=(r-dn.x)*Math.min(1,s*3),dn.y+=(o-dn.y)*Math.min(1,s*3);let a=1-Math.exp(-s*4.5);for(let p of["yaw","pitch","tx","ty","tz","zoom"])qe[p]+=(Me[p]-qe[p])*a;let l=(Za||mf)*qe.zoom,c=qe.yaw+i-dn.x*.05,h=qe.pitch+dn.y*.025,u=Math.cos(h);ae.position.set(qe.tx+l*Math.sin(c)*u,qe.ty+l*Math.sin(h),qe.tz+l*Math.cos(c)*u),ae.lookAt(qe.tx,qe.ty,qe.tz);let f=_r&&ci>=900?230:0,d=_r&&ci<900?hi*.2:0;Zl+=(f-Zl)*a,Jl+=(d-Jl)*a,Kl+=((zi==="home"&&ae.aspect>=1.2?0:ae.aspect<1.2?.62:.5)-Kl)*a;let g=ci*gr,y=hi*gr;if(ae.setViewOffset(g,y,(g-ci)/2+Zl,(y-hi)*Kl+Jl,ci,hi),ae.updateProjectionMatrix(),Kt.moved&&!Oi&&!Un){Kt.moved=!1;let p=Kt.inside?yf(Kt.x,Kt.y):null;lf=p?p.key:null,En.style.cursor=p?"pointer":Un?"grabbing":"grab",p?(pn.textContent=p.label,pn.style.transform=`translate(${Kt.x+16}px, ${Kt.y+14}px)`,pn.classList.remove("opacity-0")):pn.classList.add("opacity-0")}As.update(t,s,ae,lf),di.render(pf,ae)}var vf=46,Ze="island",ue=null,D_="lab",Fi=!1,$a=!1,dr=!1,N_=-1,ve={yaw:0,pitch:0,dyaw:0,dpitch:0,zoom:1},Qa=qt("#fade"),Mf=qt("#lab-ui"),O_=qt("#lab-card"),mr=s=>new Promise(t=>setTimeout(t,s)),Ql={},F_=()=>We.places.labs.projects,bf=s=>F_().find(t=>t.room===s);var vr=()=>O_.classList.add("opacity-0");function Sf(){let s=ue.rooms[ue.current],t=bf(s.key),e=ue.rooms.length;qt("#lab-title").textContent=`${ue.current+1} / ${e} \xB7 ${t?t.title:s.key}`,qt("#lab-dots").innerHTML=ue.rooms.map((n,i)=>`<span class="h-2 rounded-full transition-all ${i===ue.current?"w-6 bg-cyan-300":"w-2 bg-white/40"}"></span>`).join(""),N_=-1,vr()}function to(s){!ue||ue.transitioning()||(ue.setRoom((ue.current+s+ue.rooms.length)%ue.rooms.length,s),ve.dyaw=0,ve.dpitch=0,Sf())}qt("#lab-prev").addEventListener("click",()=>to(-1));qt("#lab-next").addEventListener("click",()=>to(1));qt("#lab-exit").addEventListener("click",()=>nc());async function Ef(s=!1,t=0,e="lab"){Ze==="lab"||Fi||(Fi=!0,xf(),D_=e,s||(io("labsDoor"),document.querySelectorAll("[data-view]").forEach(n=>n.classList.toggle("is-active",n.dataset.view==="labs")),await mr(df?150:1150)),Qa.classList.remove("opacity-0"),await mr(s?0:480),Ql[e]||(Ql[e]=of({mobile:eo,theme:e})),ue=Ql[e],ue.setRoom(t,1,!0),Ze="lab",ae.fov=vf,ae.clearViewOffset(),ae.updateProjectionMatrix(),Object.assign(ve,{yaw:0,pitch:0,dyaw:0,dpitch:0,zoom:1}),Mf.classList.remove("hidden"),qt("#mnav").classList.add("hidden"),qt("#hint").classList.add("opacity-0"),pn.classList.add("opacity-0"),Sf(),En.style.cursor="grab",await mr(60),Qa.classList.add("opacity-0"),Fi=!1)}async function nc(){Ze!=="lab"||Fi||(Fi=!0,Qa.classList.remove("opacity-0"),await mr(480),Ze="island",ae.fov=no,ae.updateProjectionMatrix(),Mf.classList.add("hidden"),qt("#mnav").classList.remove("hidden"),vr(),so(),pn.classList.add("opacity-0"),io("home"),Object.assign(qe,Me),$a=dr=!1,await mr(60),Qa.classList.add("opacity-0"),Fi=!1)}function Tf(s,t){return Ka.set(s/innerWidth*2-1,-(t/innerHeight)*2+1),Ja.setFromCamera(Ka,ae),ue.pick(Ja)}function B_(s){s&&s.href&&window.open(s.href,"_blank","noopener")}function z_(s,t){let e=Tf(s,t),n=bf(ue.rooms[ue.current].key);e==="laptop"?(vr(),k_(n)):e==="model"&&B_(n)}var fi=qt("#reader"),ff=qt("#r-body"),Bi=!1;function H_(s){let t=i=>`<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${i}</span>`,e=(i,r)=>`<h4 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-300">${i}</h4>${r}`,n='<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span>';return`<p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">My Projects Lab${s.year?" \xB7 "+s.year:""}</p>
    <h3 class="mt-1 text-2xl font-bold leading-tight sm:text-3xl">${s.title}</h3>
    ${s.bullets?e("About this project",`<ul class="space-y-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">${s.bullets.map(i=>`<li class="flex gap-3">${n}<span>${i}</span></li>`).join("")}</ul>`):""}
    ${(s.details||[]).map(i=>e(i.heading,`<p class="text-sm leading-relaxed text-white/85 sm:text-[15px]">${i.text}</p>`)).join("")}
    ${s.stack?e("Tech stack",`<div class="flex flex-wrap gap-2">${s.stack.map(t).join("")}</div>`):""}
    ${s.href?`<div class="mt-8"><a href="${s.href}" target="_blank" rel="noopener" class="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#0b1230] transition hover:brightness-110">Visit live website \u2197</a></div>`:""}`}function k_(s){!s||Bi||(ff.innerHTML=H_(s),ff.scrollTop=0,qt("#r-url").textContent=s.href?s.href.replace(/^https?:\/\//,""):"project-details.md",Bi=!0,vr(),pn.classList.add("opacity-0"),fi.classList.remove("hidden"),fi.classList.add("flex"),requestAnimationFrame(()=>requestAnimationFrame(()=>fi.classList.remove("opacity-0"))))}function so(){Bi&&(Bi=!1,fi.classList.add("opacity-0"),setTimeout(()=>{Bi||(fi.classList.add("hidden"),fi.classList.remove("flex"))},300))}qt("#r-close").addEventListener("click",so);fi.addEventListener("click",s=>{s.target===fi&&so()});function V_(s,t){let e=1-Math.exp(-s*5),n=ue.rooms[ue.current];ve.yaw+=(ve.dyaw-ve.yaw)*e,ve.pitch+=(ve.dpitch-ve.pitch)*e;let i=!Oi&&Kt.inside&&!Un?Kt.nx:0,r=!Oi&&Kt.inside&&!Un?Kt.ny:0;dn.x+=(i-dn.x)*Math.min(1,s*3),dn.y+=(r-dn.y)*Math.min(1,s*3);let o=ae.aspect,a=fn.lerp(9.5,15.5,fn.clamp((o-.6)/.6,0,1)),l=Math.max(n.cam.d,a/(Math.tan(vf*Math.PI/360)*o))*ve.zoom,c=ve.yaw-dn.x*.04,h=.06+ve.pitch+dn.y*.02,u=Math.cos(h);if(ae.position.set(l*Math.sin(c)*u,n.cam.y+l*Math.sin(h),l*Math.cos(c)*u),ae.lookAt(0,n.cam.y,0),Kt.moved&&!Oi&&!Un&&!ue.transitioning()){Kt.moved=!1;let f=Kt.inside?Tf(Kt.x,Kt.y):null;dr=f==="laptop",$a=f==="model",En.style.cursor=f?"pointer":"grab",dr?(pn.textContent="Read project details",pn.style.transform=`translate(${Kt.x+16}px, ${Kt.y+14}px)`,pn.classList.remove("opacity-0")):pn.classList.add("opacity-0")}ue.transitioning()&&($a=dr=!1,vr(),pn.classList.add("opacity-0")),ue.update(t,s,$a,dr),di.render(ue.scene,ae)}async function G_(){let s=qt("#loader-fill");s.style.width="15%";try{await Promise.race([document.fonts.load("700 40px Poppins"),new Promise(n=>setTimeout(n,1200))])}catch{}s.style.width="45%",await new Promise(n=>requestAnimationFrame(()=>setTimeout(n,0))),As=Nu(pf,{mobile:eo}),s.style.width="90%",ja(),io("home"),Object.assign(qe,Me);let t=new URLSearchParams(location.search),e=t.get("view");e&&xr[e]&&!e.endsWith("Door")&&(pi(e),Object.assign(qe,Me)),t.has("lab")&&await Ef(!0,+t.get("lab")||0),di.setAnimationLoop(I_)}G_();})();

var lv=Object.defineProperty;var cv=(n,t,e)=>t in n?lv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Gd=(n,t,e)=>cv(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="170",uv=0,Vd=1,hv=2,A_=1,fv=2,ji=3,Nr=0,vn=1,Ji=2,ir=0,Js=1,Ol=2,Hd=3,Wd=4,dv=5,ss=100,pv=101,mv=102,_v=103,gv=104,vv=200,xv=201,Mv=202,Sv=203,ku=204,zu=205,yv=206,Ev=207,Tv=208,bv=209,Av=210,wv=211,Rv=212,Cv=213,Pv=214,Gu=0,Vu=1,Hu=2,aa=3,Wu=4,Xu=5,Yu=6,qu=7,w_=0,Dv=1,Lv=2,Pr=0,R_=1,C_=2,P_=3,uf=4,Iv=5,D_=6,L_=7,I_=300,oa=301,la=302,ju=303,Ku=304,ac=306,$u=1e3,os=1001,Zu=1002,_i=1003,Uv=1004,Wo=1005,Di=1006,Gc=1007,ls=1008,cr=1009,U_=1010,N_=1011,_o=1012,hf=1013,Ms=1014,er=1015,rr=1016,ff=1017,df=1018,ca=1020,F_=35902,O_=1021,B_=1022,mi=1023,k_=1024,z_=1025,Qs=1026,ua=1027,G_=1028,pf=1029,V_=1030,mf=1031,_f=1033,yl=33776,El=33777,Tl=33778,bl=33779,Ju=35840,Qu=35841,th=35842,eh=35843,nh=36196,ih=37492,rh=37496,sh=37808,ah=37809,oh=37810,lh=37811,ch=37812,uh=37813,hh=37814,fh=37815,dh=37816,ph=37817,mh=37818,_h=37819,gh=37820,vh=37821,Al=36492,xh=36494,Mh=36495,H_=36283,Sh=36284,yh=36285,Eh=36286,Nv=3200,Fv=3201,Ov=0,Bv=1,Tr="",Jn="srgb",wa="srgb-linear",oc="linear",re="srgb",Ps=7680,Xd=519,kv=512,zv=513,Gv=514,W_=515,Vv=516,Hv=517,Wv=518,Xv=519,Yd=35044,qd="300 es",nr=2e3,Bl=2001;class Ra{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jd=1234567;const ao=Math.PI/180,go=180/Math.PI;function Ca(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function fn(n,t,e){return Math.max(t,Math.min(e,n))}function gf(n,t){return(n%t+t)%t}function Yv(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function qv(n,t,e){return n!==t?(e-n)/(t-n):0}function oo(n,t,e){return(1-e)*n+e*t}function jv(n,t,e,i){return oo(n,t,1-Math.exp(-e*i))}function Kv(n,t=1){return t-Math.abs(gf(n,t*2)-t)}function $v(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Zv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Jv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Qv(n,t){return n+Math.random()*(t-n)}function t2(n){return n*(.5-Math.random())}function e2(n){n!==void 0&&(jd=n);let t=jd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n2(n){return n*ao}function i2(n){return n*go}function r2(n){return(n&n-1)===0&&n!==0}function s2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function a2(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function o2(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),h=s((t-i)/2),f=a((t-i)/2),p=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kd={DEG2RAD:ao,RAD2DEG:go,generateUUID:Ca,clamp:fn,euclideanModulo:gf,mapLinear:Yv,inverseLerp:qv,lerp:oo,damp:jv,pingpong:Kv,smoothstep:$v,smootherstep:Zv,randInt:Jv,randFloat:Qv,randFloatSpread:t2,seededRandom:e2,degToRad:n2,radToDeg:i2,isPowerOfTwo:r2,ceilPowerOfTwo:s2,floorPowerOfTwo:a2,setQuaternionFromProperEuler:o2,normalize:cn,denormalize:qs};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,r,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],T=r[1],E=r[4],v=r[7],R=r[2],w=r[5],b=r[8];return s[0]=a*_+o*T+l*R,s[3]=a*m+o*E+l*w,s[6]=a*d+o*v+l*b,s[1]=c*_+u*T+h*R,s[4]=c*m+u*E+h*w,s[7]=c*d+u*v+h*b,s[2]=f*_+p*T+g*R,s[5]=f*m+p*E+g*w,s[8]=f*d+p*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new Nt;function X_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l2(){const n=kl("canvas");return n.style.display="block",n}const $d={};function Ja(n){n in $d||($d[n]=!0,console.warn(n))}function c2(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function u2(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h2(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=sr(n.r),n.g=sr(n.g),n.b=sr(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=ta(n.r),n.g=ta(n.g),n.b=ta(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Tr?oc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zd=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],Qd=[.3127,.329],tp=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[wa]:{primaries:Zd,whitePoint:Qd,transfer:oc,toXYZ:tp,fromXYZ:ep,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:Zd,whitePoint:Qd,transfer:re,toXYZ:tp,fromXYZ:ep,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}});let Ds;class f2{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=kl("canvas")),Ds.width=t.width,Ds.height=t.height;const i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sr(e[i]/255)*255):e[i]=sr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d2=0;class Y_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Ca(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?f2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p2=0;class xn extends Ra{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,i=os,r=os,s=Di,a=ls,o=mi,l=cr,c=xn.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=Ca(),this.name="",this.source=new Y_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $u:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case Zu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $u:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case Zu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=I_;xn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,i=0,r=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,R=(d+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+m)/4;return E>v&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=b/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=C/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m2 extends Ra{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Y_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends m2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class q_ extends xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _2 extends xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,d*T);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*T;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(np.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(np.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new N,np=new Ss;class Do{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Va),Yo.subVectors(this.max,Va),Ls.subVectors(t.a,Va),Is.subVectors(t.b,Va),Us.subVectors(t.c,Va),gr.subVectors(Is,Ls),vr.subVectors(Us,Is),Yr.subVectors(Ls,Us);let e=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Yr.z,Yr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Yr.z,0,-Yr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Yr.y,Yr.x,0];return!Xc(e,Ls,Is,Us,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Xc(e,Ls,Is,Us,Yo))?!1:(qo.crossVectors(gr,vr),e=[qo.x,qo.y,qo.z],Xc(e,Ls,Is,Us,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hi=[new N,new N,new N,new N,new N,new N,new N,new N],hi=new N,Xo=new Do,Ls=new N,Is=new N,Us=new N,gr=new N,vr=new N,Yr=new N,Va=new N,Yo=new N,qo=new N,qr=new N;function Xc(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){qr.fromArray(n,s);const o=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=t.dot(qr),c=e.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const g2=new Do,Ha=new N,Yc=new N;class Lo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):g2.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ha.subVectors(t,this.center);const e=Ha.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ha.copy(t.center).add(Yc)),this.expandByPoint(Ha.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new N,qc=new N,jo=new N,xr=new N,jc=new N,Ko=new N,Kc=new N;class j_{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){qc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(qc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(jo),o=xr.dot(this.direction),l=-xr.dot(jo),c=xr.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qc).addScaledVector(jo,f),p}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,r,s){jc.subVectors(e,t),Ko.subVectors(i,t),Kc.crossVectors(jc,Ko);let a=this.direction.dot(Kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xr.subVectors(this.origin,t);const l=o*this.direction.dot(Ko.crossVectors(xr,Ko));if(l<0)return null;const c=o*this.direction.dot(jc.cross(xr));if(c<0||l+c>a)return null;const u=-o*xr.dot(Kc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,i,r,s,a,o,l,c,u,h,f,p,g,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,p,g,_,m)}set(t,e,i,r,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ns.setFromMatrixColumn(t,0).length(),s=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v2,t,x2)}lookAt(t,e,i){const r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Mr.crossVectors(i,Dn),Mr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Mr.crossVectors(i,Dn)),Mr.normalize(),$o.crossVectors(Dn,Mr),r[0]=Mr.x,r[4]=$o.x,r[8]=Dn.x,r[1]=Mr.y,r[5]=$o.y,r[9]=Dn.y,r[2]=Mr.z,r[6]=$o.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],E=i[7],v=i[11],R=i[15],w=r[0],b=r[4],C=r[8],x=r[12],S=r[1],P=r[5],z=r[9],F=r[13],X=r[2],Y=r[6],V=r[10],q=r[14],G=r[3],et=r[7],at=r[11],mt=r[15];return s[0]=a*w+o*S+l*X+c*G,s[4]=a*b+o*P+l*Y+c*et,s[8]=a*C+o*z+l*V+c*at,s[12]=a*x+o*F+l*q+c*mt,s[1]=u*w+h*S+f*X+p*G,s[5]=u*b+h*P+f*Y+p*et,s[9]=u*C+h*z+f*V+p*at,s[13]=u*x+h*F+f*q+p*mt,s[2]=g*w+_*S+m*X+d*G,s[6]=g*b+_*P+m*Y+d*et,s[10]=g*C+_*z+m*V+d*at,s[14]=g*x+_*F+m*q+d*mt,s[3]=T*w+E*S+v*X+R*G,s[7]=T*b+E*P+v*Y+R*et,s[11]=T*C+E*z+v*V+R*at,s[15]=T*x+E*F+v*q+R*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*p-i*l*p)+_*(+e*l*p-e*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+e*c*h-e*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,E=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,v=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,R=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=e*T+i*E+r*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=T*b,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*b,t[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*b,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*b,t[4]=E*b,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*b,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*b,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*p+e*l*p)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*i*p+e*_*p+u*i*d-e*h*d)*b,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*d+e*o*d)*b,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*p-e*o*p)*b,t[12]=R*b,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*b,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*m-e*o*m)*b,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*b,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,T=l*c,E=l*u,v=l*h,R=i.x,w=i.y,b=i.z;return r[0]=(1-(_+d))*R,r[1]=(p+v)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(f+d))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+E)*b,r[9]=(m-T)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ns.set(r[0],r[1],r[2]).length();const a=Ns.set(r[4],r[5],r[6]).length(),o=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fi.copy(this);const c=1/s,u=1/a,h=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,e.setFromRotationMatrix(fi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=nr){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,g;if(o===nr)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Bl)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=nr){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,p=(i+r)*u;let g,_;if(o===nr)g=(a+s)*h,_=-2*h;else if(o===Bl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ns=new N,fi=new Ue,v2=new N(0,0,0),x2=new N(1,1,1),Mr=new N,$o=new N,Dn=new N,ip=new Ue,rp=new Ss;class ur{constructor(t=0,e=0,i=0,r=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ip.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ip,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rp.setFromEuler(this),this.setFromQuaternion(rp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M2=0;const sp=new N,Fs=new Ss,Xi=new Ue,Zo=new N,Wa=new N,S2=new N,y2=new Ss,ap=new N(1,0,0),op=new N(0,1,0),lp=new N(0,0,1),cp={type:"added"},E2={type:"removed"},Os={type:"childadded",child:null},$c={type:"childremoved",child:null};class Mn extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new N,e=new ur,i=new Ss,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Nt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(ap,t)}rotateY(t){return this.rotateOnAxis(op,t)}rotateZ(t){return this.rotateOnAxis(lp,t)}translateOnAxis(t,e){return sp.copy(t).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ap,t)}translateY(t){return this.translateOnAxis(op,t)}translateZ(t){return this.translateOnAxis(lp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zo.copy(t):Zo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Wa,Zo,this.up):Xi.lookAt(Zo,Wa,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cp),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E2),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cp),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,t,S2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,y2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new N(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new N,Yi=new N,Zc=new N,qi=new N,Bs=new N,ks=new N,up=new N,Jc=new N,Qc=new N,tu=new N,eu=new Be,nu=new Be,iu=new Be;class pi{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),di.subVectors(t,e),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){di.subVectors(r,e),Yi.subVectors(i,e),Zc.subVectors(t,e);const a=di.dot(di),o=di.dot(Yi),l=di.dot(Zc),c=Yi.dot(Yi),u=Yi.dot(Zc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(a,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return eu.setScalar(0),nu.setScalar(0),iu.setScalar(0),eu.fromBufferAttribute(t,e),nu.fromBufferAttribute(t,i),iu.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(eu,s.x),a.addScaledVector(nu,s.y),a.addScaledVector(iu,s.z),a}static isFrontFacing(t,e,i,r){return di.subVectors(i,e),Yi.subVectors(t,e),di.cross(Yi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),di.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return pi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Bs.subVectors(r,i),ks.subVectors(s,i),Jc.subVectors(t,i);const l=Bs.dot(Jc),c=ks.dot(Jc);if(l<=0&&c<=0)return e.copy(i);Qc.subVectors(t,r);const u=Bs.dot(Qc),h=ks.dot(Qc);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Bs,a);tu.subVectors(t,s);const p=Bs.dot(tu),g=ks.dot(tu);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ks,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return up.subVectors(s,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(up,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(i).addScaledVector(Bs,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function ru(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=gf(t,1),e=fn(e,0,1),i=fn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ru(a,s,t+1/3),this.g=ru(a,s,t),this.b=ru(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jn){const i=$_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Yt.fromWorkingColorSpace(en.copy(this),t),Math.round(fn(en.r*255,0,255))*65536+Math.round(fn(en.g*255,0,255))*256+Math.round(fn(en.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(en.copy(this),e);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Jn){Yt.fromWorkingColorSpace(en.copy(this),t);const e=en.r,i=en.g,r=en.b;return t!==Jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL(Jo);const i=oo(Sr.h,Jo.h,e),r=oo(Sr.s,Jo.s,e),s=oo(Sr.l,Jo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new qt;qt.NAMES=$_;let T2=0;class Io extends Ra{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Ca(),this.name="",this.blending=Js,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=zu,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ku&&(i.blendSrc=this.blendSrc),this.blendDst!==zu&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vf extends Io{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new N,Qo=new Bt;class gn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yd&&(t.usage=this.usage),t}}class Z_ extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class J_ extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ar extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let b2=0;const qn=new Ue,su=new Mn,zs=new N,Ln=new Do,Xa=new Do,je=new N;class Bi extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X_(t)?J_:Z_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return su.lookAt(t),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ar(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Ln.min,Xa.min),Ln.expandByPoint(je),je.addVectors(Ln.max,Xa.max),Ln.expandByPoint(je)):(Ln.expandByPoint(Xa.min),Ln.expandByPoint(Xa.max))}Ln.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)je.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(je));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(t,c),je.add(zs)),r=Math.max(r,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new N,l[C]=new N;const c=new N,u=new N,h=new N,f=new Bt,p=new Bt,g=new Bt,_=new N,m=new N;function d(C,x,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[S].add(_),l[C].add(m),l[x].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,x=T.length;C<x;++C){const S=T[C],P=S.start,z=S.count;for(let F=P,X=P+z;F<X;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new N,v=new N,R=new N,w=new N;function b(C){R.fromBufferAttribute(r,C),w.copy(R);const x=o[C];E.copy(x),E.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(w,x);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,x=T.length;C<x;++C){const S=T[C],P=S.start,z=S.count;for(let F=P,X=P+z;F<X;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hp=new Ue,jr=new j_,tl=new Lo,fp=new N,el=new N,nl=new N,il=new N,au=new N,rl=new N,dp=new N,sl=new N;class Li extends Mn{constructor(t=new Bi,e=new vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(au.fromBufferAttribute(h,t),a?rl.addScaledVector(au,u):rl.addScaledVector(au.sub(e),u))}e.add(rl)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),jr.copy(t.ray).recast(t.near),!(tl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(tl,fp)===null||jr.origin.distanceToSquared(fp)>(t.far-t.near)**2))&&(hp.copy(s).invert(),jr.copy(t.ray).applyMatrix4(hp),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,jr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=E;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);r=al(this,d,t,i,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);r=al(this,a,t,i,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=E;v<R;v+=3){const w=v,b=v+1,C=v+2;r=al(this,d,t,i,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,E=m+1,v=m+2;r=al(this,a,t,i,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function A2(n,t,e,i,r,s,a,o){let l;if(t.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Nr,o),l===null)return null;sl.copy(o),sl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(sl);return c<e.near||c>e.far?null:{distance:c,point:sl.clone(),object:n}}function al(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,el),n.getVertexPosition(l,nl),n.getVertexPosition(c,il);const u=A2(n,t,e,i,el,nl,il,dp);if(u){const h=new N;pi.getBarycoord(dp,el,nl,il,h),r&&(u.uv=pi.getInterpolatedAttribute(r,o,l,c,h,new Bt)),s&&(u.uv1=pi.getInterpolatedAttribute(s,o,l,c,h,new Bt)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};pi.getNormal(el,nl,il,f.normal),u.face=f,u.barycoord=h}return u}class Uo extends Bi{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(h,2));function g(_,m,d,T,E,v,R,w,b,C,x){const S=v/b,P=R/C,z=v/2,F=R/2,X=w/2,Y=b+1,V=C+1;let q=0,G=0;const et=new N;for(let at=0;at<V;at++){const mt=at*P-F;for(let Ct=0;Ct<Y;Ct++){const Qt=Ct*S-z;et[_]=Qt*T,et[m]=mt*E,et[d]=X,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=w>0?1:-1,u.push(et.x,et.y,et.z),h.push(Ct/b),h.push(1-at/C),q+=1}}for(let at=0;at<C;at++)for(let mt=0;mt<b;mt++){const Ct=f+mt+Y*at,Qt=f+mt+Y*(at+1),W=f+(mt+1)+Y*(at+1),J=f+(mt+1)+Y*at;l.push(Ct,Qt,J),l.push(Qt,W,J),G+=6}o.addGroup(p,G,x),p+=G,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ha(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=ha(n[e]);for(const r in i)t[r]=i[r]}return t}function w2(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Q_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const vo={clone:ha,merge:un};var R2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Io{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R2,this.fragmentShader=C2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ha(t.uniforms),this.uniformsGroups=w2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tg extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=nr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new N,pp=new Bt,mp=new Bt;class Qn extends tg{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,e){return this.getViewBounds(t,pp,mp),e.subVectors(mp,pp)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,Vs=1;class P2 extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Gs,Vs,t,e);r.layers=this.layers,this.add(r);const s=new Qn(Gs,Vs,t,e);s.layers=this.layers,this.add(s);const a=new Qn(Gs,Vs,t,e);a.layers=this.layers,this.add(a);const o=new Qn(Gs,Vs,t,e);o.layers=this.layers,this.add(o);const l=new Qn(Gs,Vs,t,e);l.layers=this.layers,this.add(l);const c=new Qn(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eg extends xn{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:oa,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class D2 extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new eg(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Uo(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ir});s.uniforms.tEquirect.value=e;const a=new Li(r,s),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=Di),new P2(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const ou=new N,L2=new N,I2=new Nt;class es{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ou.subVectors(i,e).cross(L2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||I2.getNormalMatrix(t),r=this.coplanarPoint(ou).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Lo,ol=new N;class ng{constructor(t=new es,e=new es,i=new es,r=new es,s=new es,a=new es){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=nr){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],T=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,m-p,v-d).normalize(),i[1].setComponents(l+s,f+c,m+p,v+d).normalize(),i[2].setComponents(l+a,f+u,m+g,v+T).normalize(),i[3].setComponents(l-a,f-u,m-g,v-T).normalize(),i[4].setComponents(l-o,f-h,m-_,v-E).normalize(),e===nr)i[5].setComponents(l+o,f+h,m+_,v+E).normalize();else if(e===Bl)i[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(t){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ol.x=r.normal.x>0?t.max.x:t.min.x,ol.y=r.normal.y>0?t.max.y:t.min.y,ol.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ig(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function U2(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class lc extends Bi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let E=0;E<c;E++){const v=E*h-s;g.push(v,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const E=T+c*d,v=T+c*(d+1),R=T+1+c*(d+1),w=T+1+c*d;p.push(E,v,w),p.push(v,R,w)}this.setIndex(p),this.setAttribute("position",new ar(g,3)),this.setAttribute("normal",new ar(_,3)),this.setAttribute("uv",new ar(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.width,t.height,t.widthSegments,t.heightSegments)}}var N2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F2=`#ifdef USE_ALPHAHASH
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
#endif`,O2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G2=`#ifdef USE_AOMAP
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
#endif`,V2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H2=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,W2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j2=`#ifdef USE_IRIDESCENCE
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
#endif`,K2=`#ifdef USE_BUMPMAP
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
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ix=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ux=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iM=`#ifdef USE_NORMALMAP
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
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,vM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SM=`#ifdef USE_SKINNING
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
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
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
}`,GM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
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
}`,HM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
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
}`,qM=`uniform vec3 diffuse;
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
}`,jM=`#include <common>
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
}`,KM=`uniform vec3 diffuse;
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
}`,$M=`#define LAMBERT
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
}`,ZM=`#define LAMBERT
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
}`,JM=`#define MATCAP
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
}`,QM=`#define MATCAP
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
}`,t3=`#define NORMAL
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
}`,e3=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n3=`#define PHONG
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
}`,i3=`#define PHONG
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
}`,r3=`#define STANDARD
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
}`,s3=`#define STANDARD
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
}`,a3=`#define TOON
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
}`,o3=`#define TOON
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
}`,l3=`uniform float size;
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,h3=`uniform vec3 color;
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
}`,f3=`uniform float rotation;
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
}`,d3=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:N2,alphahash_pars_fragment:F2,alphamap_fragment:O2,alphamap_pars_fragment:B2,alphatest_fragment:k2,alphatest_pars_fragment:z2,aomap_fragment:G2,aomap_pars_fragment:V2,batching_pars_vertex:H2,batching_vertex:W2,begin_vertex:X2,beginnormal_vertex:Y2,bsdfs:q2,iridescence_fragment:j2,bumpmap_pars_fragment:K2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:Z2,clipping_planes_pars_vertex:J2,clipping_planes_vertex:Q2,color_fragment:tx,color_pars_fragment:ex,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:ux,colorspace_fragment:hx,colorspace_pars_fragment:fx,envmap_fragment:dx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:wx,envmap_vertex:gx,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:Mx,fog_pars_fragment:Sx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Ex,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:bx,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Px,lights_phong_pars_fragment:Dx,lights_physical_fragment:Lx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Ux,lights_fragment_maps:Nx,lights_fragment_end:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:zx,map_fragment:Gx,map_pars_fragment:Vx,map_particle_fragment:Hx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:qx,morphcolor_vertex:jx,morphnormal_vertex:Kx,morphtarget_pars_vertex:$x,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:tM,normal_pars_vertex:eM,normal_vertex:nM,normalmap_pars_fragment:iM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:aM,iridescence_pars_fragment:oM,opaque_fragment:lM,packing:cM,premultiplied_alpha_fragment:uM,project_vertex:hM,dithering_fragment:fM,dithering_pars_fragment:dM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:mM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:gM,shadowmap_vertex:vM,shadowmask_pars_fragment:xM,skinbase_vertex:MM,skinning_pars_vertex:SM,skinning_vertex:yM,skinnormal_vertex:EM,specularmap_fragment:TM,specularmap_pars_fragment:bM,tonemapping_fragment:AM,tonemapping_pars_fragment:wM,transmission_fragment:RM,transmission_pars_fragment:CM,uv_pars_fragment:PM,uv_pars_vertex:DM,uv_vertex:LM,worldpos_vertex:IM,background_vert:UM,background_frag:NM,backgroundCube_vert:FM,backgroundCube_frag:OM,cube_vert:BM,cube_frag:kM,depth_vert:zM,depth_frag:GM,distanceRGBA_vert:VM,distanceRGBA_frag:HM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:YM,linedashed_frag:qM,meshbasic_vert:jM,meshbasic_frag:KM,meshlambert_vert:$M,meshlambert_frag:ZM,meshmatcap_vert:JM,meshmatcap_frag:QM,meshnormal_vert:t3,meshnormal_frag:e3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:r3,meshphysical_frag:s3,meshtoon_vert:a3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:h3,sprite_vert:f3,sprite_frag:d3},nt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ri={basic:{uniforms:un([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:un([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:un([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:un([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:un([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:un([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:un([nt.points,nt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:un([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:un([nt.common,nt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:un([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:un([nt.sprite,nt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:un([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:un([nt.lights,nt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ri.physical={uniforms:un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ll={r:0,b:0,g:0},$r=new ur,p3=new Ue;function m3(n,t,e,i,r,s,a){const o=new qt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function _(T){let E=!1;const v=g(T);v===null?d(o,l):v&&v.isColor&&(d(v,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===ac)?(u===void 0&&(u=new Li(new Uo(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ha(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(E.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler($r)),u.material.toneMapped=Yt.getTransfer(v.colorSpace)!==re,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Li(new lc(2,2),new sn({name:"BackgroundMaterial",uniforms:ha(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,E){T.getRGB(ll,Q_(n)),i.buffers.color.setClear(ll.r,ll.g,ll.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:m}}function _3(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,P,z,F,X){let Y=!1;const V=h(F,z,P);s!==V&&(s=V,c(s.object)),Y=p(S,F,z,X),Y&&g(S,F,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(S,P,z,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,z){const F=z.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[P.id];Y===void 0&&(Y={},X[P.id]=Y);let V=Y[F];return V===void 0&&(V=f(l()),Y[F]=V),V}function f(S){const P=[],z=[],F=[];for(let X=0;X<e;X++)P[X]=0,z[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,P,z,F){const X=s.attributes,Y=P.attributes;let V=0;const q=z.getAttributes();for(const G in q)if(q[G].location>=0){const at=X[G];let mt=Y[G];if(mt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(S,P,z,F){const X={},Y=P.attributes;let V=0;const q=z.getAttributes();for(const G in q)if(q[G].location>=0){let at=Y[G];at===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),X[G]=mt,V++}s.attributes=X,s.attributesNum=V,s.index=F}function _(){const S=s.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const z=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;z[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),X[S]!==P&&(n.vertexAttribDivisor(S,P),X[S]=P)}function T(){const S=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==S[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function E(S,P,z,F,X,Y,V){V===!0?n.vertexAttribIPointer(S,P,z,X,Y):n.vertexAttribPointer(S,P,z,F,X,Y)}function v(S,P,z,F){_();const X=F.attributes,Y=z.getAttributes(),V=P.defaultAttributeValues;for(const q in Y){const G=Y[q];if(G.location>=0){let et=X[q];if(et===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const at=et.normalized,mt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const Qt=Ct.buffer,W=Ct.type,J=Ct.bytesPerElement,Mt=W===n.INT||W===n.UNSIGNED_INT||et.gpuType===hf;if(et.isInterleavedBufferAttribute){const rt=et.data,Rt=rt.stride,Lt=et.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)d(G.location+kt,rt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let kt=0;kt<G.locationSize;kt++)E(G.location+kt,mt/G.locationSize,W,at,Rt*J,(Lt+mt/G.locationSize*kt)*J,Mt)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,et.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let rt=0;rt<G.locationSize;rt++)E(G.location+rt,mt/G.locationSize,W,at,mt*J,mt/G.locationSize*rt*J,Mt)}}else if(V!==void 0){const at=V[q];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(G.location,at);break;case 3:n.vertexAttrib3fv(G.location,at);break;case 4:n.vertexAttrib4fv(G.location,at);break;default:n.vertexAttrib1fv(G.location,at)}}}}T()}function R(){C();for(const S in i){const P=i[S];for(const z in P){const F=P[z];for(const X in F)u(F[X].object),delete F[X];delete P[z]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const z in P){const F=P[z];for(const X in F)u(F[X].object),delete F[X];delete P[z]}delete i[S.id]}function b(S){for(const P in i){const z=i[P];if(z[S.id]===void 0)continue;const F=z[S.id];for(const X in F)u(F[X].object),delete F[X];delete z[S.id]}}function C(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function g3(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v3(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==mi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==cr&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==er&&!C)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function x3(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new es,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,E=T*4;let v=d.clippingState||null;l.value=v,v=u(g,f,E,p);for(let R=0;R!==E;++R)v[R]=e[R];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,v=p;E!==_;++E,v+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function M3(n){let t=new WeakMap;function e(a,o){return o===ju?a.mapping=oa:o===Ku&&(a.mapping=la),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ju||o===Ku)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new D2(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class rg extends tg{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const js=4,_p=[.125,.215,.35,.446,.526,.582],as=20,lu=new rg,gp=new qt;let cu=null,uu=0,hu=0,fu=!1;const ns=(1+Math.sqrt(5))/2,Hs=1/ns,vp=[new N(-ns,Hs,0),new N(ns,Hs,0),new N(-Hs,0,ns),new N(Hs,0,ns),new N(0,ns,-Hs),new N(0,ns,Hs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class xp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,uu,hu),this._renderer.xr.enabled=fu,t.scissorTest=!1,cl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oa||t.mapping===la?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:rr,format:mi,colorSpace:wa,depthBuffer:!1},r=Mp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S3(s)),this._blurMaterial=y3(s,t,e)}return r}_compileMaterial(t){const e=new Li(this._lodPlanes[0],t);this._renderer.compile(e,lu)}_sceneToCubeUV(t,e,i,r){const o=new Qn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gp),u.toneMapping=Pr,u.autoClear=!1;const p=new vf({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Li(new Uo,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(gp),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;cl(r,T*E,d>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===oa||t.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Li(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;cl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,lu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vp[(r-s-1)%vp.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Li(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*as-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const d=[];let T=0;for(let b=0;b<as;++b){const C=b/_,x=Math.exp(-C*C/2);d.push(x),b===0?T+=x:b<m&&(T+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const v=this._sizeLods[r],R=3*v*(r>E-js?r-E+js:0),w=4*(this._cubeSize-v);cl(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(h,lu)}}function S3(n){const t=[],e=[],i=[];let r=n;const s=n-js+1+_p.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-js?l=_p[a-n+js-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,x=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];T.set(x,_*g*w),E.set(f,m*g*w);const S=[w,w,w,w,w,w];v.set(S,d*g*w)}const R=new Bi;R.setAttribute("position",new gn(T,_)),R.setAttribute("uv",new gn(E,m)),R.setAttribute("faceIndex",new gn(v,d)),t.push(R),r>js&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Mp(n,t,e){const i=new gi(n,t,e);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function y3(n,t,e){const i=new Float32Array(as),r=new N(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xf(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Sp(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function yp(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function xf(){return`

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
	`}function E3(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ju||l===Ku,u=l===oa||l===la;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new xp(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new xp(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function T3(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ja("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b3(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let E=0,v=T.length;E<v;E+=3){const R=T[E+0],w=T[E+1],b=T[E+2];f.push(R,w,w,b,b,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const R=E+0,w=E+1,b=E+2;f.push(R,w,w,b,b,R)}}else return;const m=new(X_(f)?J_:Z_)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function A3(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function w3(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function R3(n,t,e){const i=new WeakMap,r=new Be;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*h),C=new q_(b,R,w,h);C.type=er,C.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const z=d[P],F=T[P],X=E[P],Y=R*w*4*P;for(let V=0;V<z.count;V++){const q=V*x;g===!0&&(r.fromBufferAttribute(z,V),b[Y+q+0]=r.x,b[Y+q+1]=r.y,b[Y+q+2]=r.z,b[Y+q+3]=0),_===!0&&(r.fromBufferAttribute(F,V),b[Y+q+4]=r.x,b[Y+q+5]=r.y,b[Y+q+6]=r.z,b[Y+q+7]=0),m===!0&&(r.fromBufferAttribute(X,V),b[Y+q+8]=r.x,b[Y+q+9]=r.y,b[Y+q+10]=r.z,b[Y+q+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Bt(R,w)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function C3(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class sg extends xn{constructor(t,e,i,r,s,a,o,l,c,u=Qs){if(u!==Qs&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=Ms),i===void 0&&u===ua&&(i=ca),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:_i,this.minFilter=l!==void 0?l:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ag=new xn,Ep=new sg(1,1),og=new q_,lg=new _2,cg=new eg,Tp=[],bp=[],Ap=new Float32Array(16),wp=new Float32Array(9),Rp=new Float32Array(4);function Pa(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cc(n,t){let e=bp[t];e===void 0&&(e=new Int32Array(t),bp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function P3(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function D3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function L3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function I3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function U3(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Rp.set(i),n.uniformMatrix2fv(this.addr,!1,Rp),qe(e,i)}}function N3(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;wp.set(i),n.uniformMatrix3fv(this.addr,!1,wp),qe(e,i)}}function F3(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),qe(e,i)}}function O3(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function B3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function k3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function z3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function G3(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function V3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function H3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function W3(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function X3(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ep.compareFunction=W_,s=Ep):s=ag,e.setTexture2D(t||s,r)}function Y3(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||lg,r)}function q3(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||cg,r)}function j3(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||og,r)}function K3(n){switch(n){case 5126:return P3;case 35664:return D3;case 35665:return L3;case 35666:return I3;case 35674:return U3;case 35675:return N3;case 35676:return F3;case 5124:case 35670:return O3;case 35667:case 35671:return B3;case 35668:case 35672:return k3;case 35669:case 35673:return z3;case 5125:return G3;case 36294:return V3;case 36295:return H3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return j3}}function $3(n,t){n.uniform1fv(this.addr,t)}function Z3(n,t){const e=Pa(t,this.size,2);n.uniform2fv(this.addr,e)}function J3(n,t){const e=Pa(t,this.size,3);n.uniform3fv(this.addr,e)}function Q3(n,t){const e=Pa(t,this.size,4);n.uniform4fv(this.addr,e)}function tS(n,t){const e=Pa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eS(n,t){const e=Pa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nS(n,t){const e=Pa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iS(n,t){n.uniform1iv(this.addr,t)}function rS(n,t){n.uniform2iv(this.addr,t)}function sS(n,t){n.uniform3iv(this.addr,t)}function aS(n,t){n.uniform4iv(this.addr,t)}function oS(n,t){n.uniform1uiv(this.addr,t)}function lS(n,t){n.uniform2uiv(this.addr,t)}function cS(n,t){n.uniform3uiv(this.addr,t)}function uS(n,t){n.uniform4uiv(this.addr,t)}function hS(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ag,s[a])}function fS(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||lg,s[a])}function dS(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||cg,s[a])}function pS(n,t,e){const i=this.cache,r=t.length,s=cc(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||og,s[a])}function mS(n){switch(n){case 5126:return $3;case 35664:return Z3;case 35665:return J3;case 35666:return Q3;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return aS;case 5125:return oS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}class _S{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=K3(e.type)}}class gS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mS(e.type)}}class vS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Cp(n,t){n.seq.push(t),n.map[t.id]=t}function xS(n,t,e){const i=n.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cp(e,c===void 0?new _S(o,n,t):new gS(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new vS(o),Cp(e,h)),e=h}}}class wl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xS(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Pp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const MS=37297;let SS=0;function yS(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Dp=new Nt;function ES(n){Yt._getMatrix(Dp,Yt.workingColorSpace,n);const t=`mat3( ${Dp.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case oc:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+yS(n.getShaderSource(t),a)}else return r}function TS(n,t){const e=ES(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bS(n,t){let e;switch(t){case R_:e="Linear";break;case C_:e="Reinhard";break;case P_:e="Cineon";break;case uf:e="ACESFilmic";break;case D_:e="AgX";break;case L_:e="Neutral";break;case Iv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ul=new N;function AS(){Yt.getLuminanceCoefficients(ul);const n=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function RS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function CS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qa(n){return n!==""}function Ip(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Up(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(n){return n.replace(PS,LS)}const DS=new Map;function LS(n,t){let e=Ot[t];if(e===void 0){const i=DS.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Th(e)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(n){return n.replace(IS,US)}function US(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function NS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===A_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function FS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oa:case la:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case la:t="ENVMAP_MODE_REFRACTION";break}return t}function BS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case w_:t="ENVMAP_BLENDING_MULTIPLY";break;case Dv:t="ENVMAP_BLENDING_MIX";break;case Lv:t="ENVMAP_BLENDING_ADD";break}return t}function kS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function zS(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=NS(e),c=FS(e),u=OS(e),h=BS(e),f=kS(e),p=wS(e),g=RS(s),_=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qa).join(`
`),d.length>0&&(d+=`
`)):(m=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),d=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pr?"#define TONE_MAPPING":"",e.toneMapping!==Pr?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Pr?bS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,TS("linearToOutputTexel",e.outputColorSpace),AS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qa).join(`
`)),a=Th(a),a=Ip(a,e),a=Up(a,e),o=Th(o),o=Ip(o,e),o=Up(o,e),a=Np(a),o=Np(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=T+m+a,v=T+d+o,R=Pp(r,r.VERTEX_SHADER,E),w=Pp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(P){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(w).trim();let Y=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,w);else{const q=Lp(r,R,"vertex"),G=Lp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+q+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||X==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(R),r.deleteShader(w),C=new wl(r,_),x=CS(r,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,MS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let GS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new HS(t),e.set(t,i)),i}}class HS{constructor(t){this.id=GS++,this.code=t,this.usedTimes=0}}function WS(n,t,e,i,r,s,a){const o=new K_,l=new VS,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,z,F){const X=z.fog,Y=F.geometry,V=x.isMeshStandardMaterial?z.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),G=q&&q.mapping===ac?q.image.height:null,et=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=at!==void 0?at.length:0;let Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let Qt,W,J,Mt;if(et){const ie=Ri[et];Qt=ie.vertexShader,W=ie.fragmentShader}else Qt=x.vertexShader,W=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),Mt=l.getFragmentShaderID(x);const rt=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Lt=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,Te=!!x.map,jt=!!x.matcap,Ne=!!q,U=!!x.aoMap,Xn=!!x.lightMap,Ht=!!x.bumpMap,Wt=!!x.normalMap,At=!!x.displacementMap,me=!!x.emissiveMap,bt=!!x.metalnessMap,A=!!x.roughnessMap,M=x.anisotropy>0,O=x.clearcoat>0,K=x.dispersion>0,Z=x.iridescence>0,j=x.sheen>0,yt=x.transmission>0,st=M&&!!x.anisotropyMap,ht=O&&!!x.clearcoatMap,Kt=O&&!!x.clearcoatNormalMap,Q=O&&!!x.clearcoatRoughnessMap,ft=Z&&!!x.iridescenceMap,wt=Z&&!!x.iridescenceThicknessMap,Pt=j&&!!x.sheenColorMap,dt=j&&!!x.sheenRoughnessMap,Xt=!!x.specularMap,Ft=!!x.specularColorMap,ue=!!x.specularIntensityMap,D=yt&&!!x.transmissionMap,it=yt&&!!x.thicknessMap,H=!!x.gradientMap,$=!!x.alphaMap,ct=x.alphaTest>0,ot=!!x.alphaHash,It=!!x.extensions;let Ce=Pr;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const Qe={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:W,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:Mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&F.instanceColor!==null,instancingMorph:Lt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:wa,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:jt,envMap:Ne,envMapMode:Ne&&q.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Xn,bumpMap:Ht,normalMap:Wt,displacementMap:f&&At,emissiveMap:me,normalMapObjectSpace:Wt&&x.normalMapType===Bv,normalMapTangentSpace:Wt&&x.normalMapType===Ov,metalnessMap:bt,roughnessMap:A,anisotropy:M,anisotropyMap:st,clearcoat:O,clearcoatMap:ht,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:dt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:ue,transmission:yt,transmissionMap:D,thicknessMap:it,gradientMap:H,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:ot,combine:x.combine,mapUv:Te&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:Xn&&_(x.lightMap.channel),bumpMapUv:Ht&&_(x.bumpMap.channel),normalMapUv:Wt&&_(x.normalMap.channel),displacementMapUv:At&&_(x.displacementMap.channel),emissiveMapUv:me&&_(x.emissiveMap.channel),metalnessMapUv:bt&&_(x.metalnessMap.channel),roughnessMapUv:A&&_(x.roughnessMap.channel),anisotropyMapUv:st&&_(x.anisotropyMap.channel),clearcoatMapUv:ht&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(x.sheenRoughnessMap.channel),specularMapUv:Xt&&_(x.specularMap.channel),specularColorMapUv:Ft&&_(x.specularColorMap.channel),specularIntensityMapUv:ue&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:it&&_(x.thicknessMap.channel),alphaMapUv:$&&_(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Wt||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Te||$),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:me&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ji,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:It&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&x.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(T(S,x),E(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function T(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const S=g[x.type];let P;if(S){const z=Ri[S];P=vo.clone(z.uniforms)}else P=x.uniforms;return P}function R(x,S){let P;for(let z=0,F=u.length;z<F;z++){const X=u[z];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new zS(n,S,x,s),u.push(P)),P}function w(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function XS(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function YS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Op(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||YS),i.length>1&&i.sort(f||Op),r.length>1&&r.sort(f||Op)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function qS(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Bp,n.set(i,[a])):r>=s.length?(a=new Bp,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function jS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new qt};break;case"SpotLight":e={position:new N,direction:new N,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function KS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $S=0;function ZS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function JS(n){const t=new jS,e=KS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Ue,a=new Ue;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,E=0,v=0,R=0,w=0,b=0;c.sort(ZS);for(let x=0,S=c.length;x<S;x++){const P=c[x],z=P.color,F=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*F,h+=z.g*F,f+=z.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],F);b++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=V,p++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(F),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[_]=V;const q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=q.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,v++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(z).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,i.version=$S++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const E=c[d];if(E.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function kp(n){const t=new JS(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function QS(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new kp(n),t.set(r,[o])):s>=a.length?(o=new kp(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class ty extends Io{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ey extends Io{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`;function ry(n,t,e){let i=new ng;const r=new Bt,s=new Bt,a=new Be,o=new ty({depthPacking:Fv}),l=new ey,c={},u=e.maxTextureSize,h={[Nr]:vn,[vn]:Nr,[Ji]:Ji},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bi;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Li(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let d=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ir),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=d!==ji&&this.type===ji,X=d===ji&&this.type!==ji;for(let Y=0,V=w.length;Y<V;Y++){const q=w[Y],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const et=G.getFrameExtents();if(r.multiply(et),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,G.mapSize.y=s.y)),G.map===null||F===!0||X===!0){const mt=this.type!==ji?{minFilter:_i,magFilter:_i}:{};G.map!==null&&G.map.dispose(),G.map=new gi(r.x,r.y,mt),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const at=G.getViewportCount();for(let mt=0;mt<at;mt++){const Ct=G.getViewport(mt);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),z.viewport(a),G.updateMatrices(q,mt),i=G.getFrustum(),v(b,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===ji&&T(G,C),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,P)};function T(w,b){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,C,p,_,null)}function E(w,b,C,x){let S=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=S.uuid,F=b.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let Y=X[F];Y===void 0&&(Y=S.clone(),X[F]=Y,b.addEventListener("dispose",R)),S=Y}if(S.visible=b.visible,S.wireframe=b.wireframe,x===ji?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=C}return S}function v(w,b,C,x,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),X=w.material;if(Array.isArray(X)){const Y=F.groups;for(let V=0,q=Y.length;V<q;V++){const G=Y[V],et=X[G.materialIndex];if(et&&et.visible){const at=E(w,et,x,S);w.onBeforeShadow(n,w,b,C,F,at,G),n.renderBufferDirect(C,null,F,at,w,G),w.onAfterShadow(n,w,b,C,F,at,G)}}}else if(X.visible){const Y=E(w,X,x,S);w.onBeforeShadow(n,w,b,C,F,Y,null),n.renderBufferDirect(C,null,F,Y,w,null),w.onAfterShadow(n,w,b,C,F,Y,null)}}const z=w.children;for(let F=0,X=z.length;F<X;F++)v(z[F],b,C,x,S)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const x=c[C],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const sy={[Gu]:Vu,[Hu]:Yu,[Wu]:qu,[aa]:Xu,[Vu]:Gu,[Yu]:Hu,[qu]:Wu,[Xu]:aa};function ay(n,t){function e(){let D=!1;const it=new Be;let H=null;const $=new Be(0,0,0,0);return{setMask:function(ct){H!==ct&&!D&&(n.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){D=ct},setClear:function(ct,ot,It,Ce,Qe){Qe===!0&&(ct*=Ce,ot*=Ce,It*=Ce),it.set(ct,ot,It,Ce),$.equals(it)===!1&&(n.clearColor(ct,ot,It,Ce),$.copy(it))},reset:function(){D=!1,H=null,$.set(-1,0,0,0)}}}function i(){let D=!1,it=!1,H=null,$=null,ct=null;return{setReversed:function(ot){if(it!==ot){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const Ce=ct;ct=null,this.setClear(Ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(ot){H!==ot&&!D&&(n.depthMask(ot),H=ot)},setFunc:function(ot){if(it&&(ot=sy[ot]),$!==ot){switch(ot){case Gu:n.depthFunc(n.NEVER);break;case Vu:n.depthFunc(n.ALWAYS);break;case Hu:n.depthFunc(n.LESS);break;case aa:n.depthFunc(n.LEQUAL);break;case Wu:n.depthFunc(n.EQUAL);break;case Xu:n.depthFunc(n.GEQUAL);break;case Yu:n.depthFunc(n.GREATER);break;case qu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),n.clearDepth(ot),ct=ot)},reset:function(){D=!1,H=null,$=null,ct=null,it=!1}}}function r(){let D=!1,it=null,H=null,$=null,ct=null,ot=null,It=null,Ce=null,Qe=null;return{setTest:function(ie){D||(ie?rt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ie){it!==ie&&!D&&(n.stencilMask(ie),it=ie)},setFunc:function(ie,ci,Gi){(H!==ie||$!==ci||ct!==Gi)&&(n.stencilFunc(ie,ci,Gi),H=ie,$=ci,ct=Gi)},setOp:function(ie,ci,Gi){(ot!==ie||It!==ci||Ce!==Gi)&&(n.stencilOp(ie,ci,Gi),ot=ie,It=ci,Ce=Gi)},setLocked:function(ie){D=ie},setClear:function(ie){Qe!==ie&&(n.clearStencil(ie),Qe=ie)},reset:function(){D=!1,it=null,H=null,$=null,ct=null,ot=null,It=null,Ce=null,Qe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,v=null,R=null,w=null,b=new qt(0,0,0),C=0,x=!1,S=null,P=null,z=null,F=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let et=null,at={};const mt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Qt=new Be().fromArray(mt),W=new Be().fromArray(Ct);function J(D,it,H,$){const ct=new Uint8Array(4),ot=n.createTexture();n.bindTexture(D,ot),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<H;It++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(it+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ot}const Mt={};Mt[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(aa),Ht(!1),Wt(Vd),rt(n.CULL_FACE),U(ir);function rt(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Rt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Lt(D,it){return h[D]!==it?(n.bindFramebuffer(D,it),h[D]=it,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(D,it){let H=p,$=!1;if(D){H=f.get(it),H===void 0&&(H=[],f.set(it,H));const ct=D.textures;if(H.length!==ct.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)H[ot]=n.COLOR_ATTACHMENT0+ot;H.length=ct.length,$=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,$=!0);$&&n.drawBuffers(H)}function Te(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const jt={[ss]:n.FUNC_ADD,[pv]:n.FUNC_SUBTRACT,[mv]:n.FUNC_REVERSE_SUBTRACT};jt[_v]=n.MIN,jt[gv]=n.MAX;const Ne={[vv]:n.ZERO,[xv]:n.ONE,[Mv]:n.SRC_COLOR,[ku]:n.SRC_ALPHA,[Av]:n.SRC_ALPHA_SATURATE,[Tv]:n.DST_COLOR,[yv]:n.DST_ALPHA,[Sv]:n.ONE_MINUS_SRC_COLOR,[zu]:n.ONE_MINUS_SRC_ALPHA,[bv]:n.ONE_MINUS_DST_COLOR,[Ev]:n.ONE_MINUS_DST_ALPHA,[wv]:n.CONSTANT_COLOR,[Rv]:n.ONE_MINUS_CONSTANT_COLOR,[Cv]:n.CONSTANT_ALPHA,[Pv]:n.ONE_MINUS_CONSTANT_ALPHA};function U(D,it,H,$,ct,ot,It,Ce,Qe,ie){if(D===ir){_===!0&&(Rt(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),D!==dv){if(D!==m||ie!==x){if((d!==ss||v!==ss)&&(n.blendEquation(n.FUNC_ADD),d=ss,v=ss),ie)switch(D){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,R=null,w=null,b.set(0,0,0),C=0,m=D,x=ie}return}ct=ct||it,ot=ot||H,It=It||$,(it!==d||ct!==v)&&(n.blendEquationSeparate(jt[it],jt[ct]),d=it,v=ct),(H!==T||$!==E||ot!==R||It!==w)&&(n.blendFuncSeparate(Ne[H],Ne[$],Ne[ot],Ne[It]),T=H,E=$,R=ot,w=It),(Ce.equals(b)===!1||Qe!==C)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Qe),b.copy(Ce),C=Qe),m=D,x=!1}function Xn(D,it){D.side===Ji?Rt(n.CULL_FACE):rt(n.CULL_FACE);let H=D.side===vn;it&&(H=!H),Ht(H),D.blending===Js&&D.transparent===!1?U(ir):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function Wt(D){D!==uv?(rt(n.CULL_FACE),D!==P&&(D===Vd?n.cullFace(n.BACK):D===hv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),P=D}function At(D){D!==z&&(V&&n.lineWidth(D),z=D)}function me(D,it,H){D?(rt(n.POLYGON_OFFSET_FILL),(F!==it||X!==H)&&(n.polygonOffset(it,H),F=it,X=H)):Rt(n.POLYGON_OFFSET_FILL)}function bt(D){D?rt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+Y-1),et!==D&&(n.activeTexture(D),et=D)}function M(D,it,H){H===void 0&&(et===null?H=n.TEXTURE0+Y-1:H=et);let $=at[H];$===void 0&&($={type:void 0,texture:void 0},at[H]=$),($.type!==D||$.texture!==it)&&(et!==H&&(n.activeTexture(H),et=H),n.bindTexture(D,it||Mt[D]),$.type=D,$.texture=it)}function O(){const D=at[et];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Qt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function dt(D){W.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Xt(D,it){let H=c.get(it);H===void 0&&(H=new WeakMap,c.set(it,H));let $=H.get(D);$===void 0&&($=n.getUniformBlockIndex(it,D.name),H.set(D,$))}function Ft(D,it){const $=c.get(it).get(D);l.get(it)!==$&&(n.uniformBlockBinding(it,$,D.__bindingPointIndex),l.set(it,$))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,at={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,v=null,R=null,w=null,b=new qt(0,0,0),C=0,x=!1,S=null,P=null,z=null,F=null,X=null,Qt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:Lt,drawBuffers:kt,useProgram:Te,setBlending:U,setMaterial:Xn,setFlipSided:Ht,setCullFace:Wt,setLineWidth:At,setPolygonOffset:me,setScissorTest:bt,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ft,texImage3D:wt,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:Q,texSubImage2D:j,texSubImage3D:yt,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Pt,viewport:dt,reset:ue}}function zp(n,t,e,i){const r=oy(i);switch(e){case O_:return n*t;case k_:return n*t;case z_:return n*t*2;case G_:return n*t/r.components*r.byteLength;case pf:return n*t/r.components*r.byteLength;case V_:return n*t*2/r.components*r.byteLength;case mf:return n*t*2/r.components*r.byteLength;case B_:return n*t*3/r.components*r.byteLength;case mi:return n*t*4/r.components*r.byteLength;case _f:return n*t*4/r.components*r.byteLength;case yl:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qu:case eh:return Math.max(n,16)*Math.max(t,8)/4;case Ju:case th:return Math.max(n,8)*Math.max(t,8)/2;case nh:case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Al:case xh:case Mh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case H_:case Sh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yh:case Eh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oy(n){switch(n){case cr:case U_:return{byteLength:1,components:1};case _o:case N_:case rr:return{byteLength:2,components:1};case ff:case df:return{byteLength:2,components:4};case Ms:case hf:case er:return{byteLength:4,components:1};case F_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ly(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):kl("canvas")}function _(A,M,O){let K=1;const Z=bt(A);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*Z.width),yt=Math.floor(K*Z.height);h===void 0&&(h=g(j,yt));const st=M?g(j,yt):h;return st.width=j,st.height=yt,st.getContext("2d").drawImage(A,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+yt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,M,O,K,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),M===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),M===n.RGBA){const yt=Z?oc:Yt.getTransfer(K);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=yt===re?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,M){let O;return A?M===null||M===Ms||M===ca?O=n.DEPTH24_STENCIL8:M===er?O=n.DEPTH32F_STENCIL8:M===_o&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===ca?O=n.DEPTH_COMPONENT24:M===er?O=n.DEPTH_COMPONENT32F:M===_o&&(O=n.DEPTH_COMPONENT16),O}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_i&&A.minFilter!==Di?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){const M=A.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&u.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),S(M)}function C(A){const M=i.get(A);if(M.__webglInit===void 0)return;const O=A.source,K=f.get(O);if(K){const Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(A),Object.keys(K).length===0&&f.delete(O)}i.remove(A)}function x(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const O=A.source,K=f.get(O);delete K[M.__cacheKey],a.memory.textures--}function S(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let K=0,Z=O.length;K<Z;K++){const j=i.get(O[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(A)}let P=0;function z(){P=0}function F(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Y(A,M){const O=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,A,M);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function V(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function q(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,M);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function G(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){J(O,A,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const et={[$u]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[Zu]:n.MIRRORED_REPEAT},at={[_i]:n.NEAREST,[Uv]:n.NEAREST_MIPMAP_NEAREST,[Wo]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[Gc]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},mt={[kv]:n.NEVER,[Xv]:n.ALWAYS,[zv]:n.LESS,[W_]:n.LEQUAL,[Gv]:n.EQUAL,[Wv]:n.GEQUAL,[Vv]:n.GREATER,[Hv]:n.NOTEQUAL};function Ct(A,M){if(M.type===er&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Di||M.magFilter===Gc||M.magFilter===Wo||M.magFilter===ls||M.minFilter===Di||M.minFilter===Gc||M.minFilter===Wo||M.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,et[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,et[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,et[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,at[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_i||M.minFilter!==Wo&&M.minFilter!==ls||M.type===er&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const K=M.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const j=X(M);if(j!==A.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[j].usedTimes++;const yt=Z[A.__cacheKey];yt!==void 0&&(Z[A.__cacheKey].usedTimes--,yt.usedTimes===0&&x(M)),A.__cacheKey=j,A.__webglTexture=Z[j].texture}return O}function W(A,M,O){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const Z=Qt(A,M),j=M.source;e.bindTexture(K,A.__webglTexture,n.TEXTURE0+O);const yt=i.get(j);if(j.version!==yt.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const st=Yt.getPrimaries(Yt.workingColorSpace),ht=M.colorSpace===Tr?null:Yt.getPrimaries(M.colorSpace),Kt=M.colorSpace===Tr||st===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Q=_(M.image,!1,r.maxTextureSize);Q=me(M,Q);const ft=s.convert(M.format,M.colorSpace),wt=s.convert(M.type);let Pt=E(M.internalFormat,ft,wt,M.colorSpace,M.isVideoTexture);Ct(K,M);let dt;const Xt=M.mipmaps,Ft=M.isVideoTexture!==!0,ue=yt.__version===void 0||Z===!0,D=j.dataReady,it=R(M,Q);if(M.isDepthTexture)Pt=v(M.format===ua,M.type),ue&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Pt,Q.width,Q.height,0,ft,wt,null));else if(M.isDataTexture)if(Xt.length>0){Ft&&ue&&e.texStorage2D(n.TEXTURE_2D,it,Pt,Xt[0].width,Xt[0].height);for(let H=0,$=Xt.length;H<$;H++)dt=Xt[H],Ft?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(n.TEXTURE_2D,H,Pt,dt.width,dt.height,0,ft,wt,dt.data);M.generateMipmaps=!1}else Ft?(ue&&e.texStorage2D(n.TEXTURE_2D,it,Pt,Q.width,Q.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,wt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,Q.width,Q.height,0,ft,wt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,Xt[0].width,Xt[0].height,Q.depth);for(let H=0,$=Xt.length;H<$;H++)if(dt=Xt[H],M.format!==mi)if(ft!==null)if(Ft){if(D)if(M.layerUpdates.size>0){const ct=zp(dt.width,dt.height,M.format,M.type);for(const ot of M.layerUpdates){const It=dt.data.subarray(ot*ct/dt.data.BYTES_PER_ELEMENT,(ot+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ot,dt.width,dt.height,1,ft,It)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,Q.depth,ft,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Pt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,Q.depth,ft,wt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,Pt,dt.width,dt.height,Q.depth,0,ft,wt,dt.data)}else{Ft&&ue&&e.texStorage2D(n.TEXTURE_2D,it,Pt,Xt[0].width,Xt[0].height);for(let H=0,$=Xt.length;H<$;H++)dt=Xt[H],M.format!==mi?ft!==null?Ft?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,H,Pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,wt,dt.data):e.texImage2D(n.TEXTURE_2D,H,Pt,dt.width,dt.height,0,ft,wt,dt.data)}else if(M.isDataArrayTexture)if(Ft){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,Q.width,Q.height,Q.depth),D)if(M.layerUpdates.size>0){const H=zp(Q.width,Q.height,M.format,M.type);for(const $ of M.layerUpdates){const ct=Q.data.subarray($*H/Q.data.BYTES_PER_ELEMENT,($+1)*H/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ft,wt,ct)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(M.isData3DTexture)Ft?(ue&&e.texStorage3D(n.TEXTURE_3D,it,Pt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(M.isFramebufferTexture){if(ue)if(Ft)e.texStorage2D(n.TEXTURE_2D,it,Pt,Q.width,Q.height);else{let H=Q.width,$=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(n.TEXTURE_2D,ct,Pt,H,$,0,ft,wt,null),H>>=1,$>>=1}}else if(Xt.length>0){if(Ft&&ue){const H=bt(Xt[0]);e.texStorage2D(n.TEXTURE_2D,it,Pt,H.width,H.height)}for(let H=0,$=Xt.length;H<$;H++)dt=Xt[H],Ft?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,ft,wt,dt):e.texImage2D(n.TEXTURE_2D,H,Pt,ft,wt,dt);M.generateMipmaps=!1}else if(Ft){if(ue){const H=bt(Q);e.texStorage2D(n.TEXTURE_2D,it,Pt,H.width,H.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,wt,Q)}else e.texImage2D(n.TEXTURE_2D,0,Pt,ft,wt,Q);m(M)&&d(K),yt.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,O){if(M.image.length!==6)return;const K=Qt(A,M),Z=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const j=i.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+O);const yt=Yt.getPrimaries(Yt.workingColorSpace),st=M.colorSpace===Tr?null:Yt.getPrimaries(M.colorSpace),ht=M.colorSpace===Tr||yt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Kt&&!Q?ft[$]=_(M.image[$],!0,r.maxCubemapSize):ft[$]=Q?M.image[$].image:M.image[$],ft[$]=me(M,ft[$]);const wt=ft[0],Pt=s.convert(M.format,M.colorSpace),dt=s.convert(M.type),Xt=E(M.internalFormat,Pt,dt,M.colorSpace),Ft=M.isVideoTexture!==!0,ue=j.__version===void 0||K===!0,D=Z.dataReady;let it=R(M,wt);Ct(n.TEXTURE_CUBE_MAP,M);let H;if(Kt){Ft&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Xt,wt.width,wt.height);for(let $=0;$<6;$++){H=ft[$].mipmaps;for(let ct=0;ct<H.length;ct++){const ot=H[ct];M.format!==mi?Pt!==null?Ft?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Xt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ot.width,ot.height,Pt,dt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Xt,ot.width,ot.height,0,Pt,dt,ot.data)}}}else{if(H=M.mipmaps,Ft&&ue){H.length>0&&it++;const $=bt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Xt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Ft?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Pt,dt,ft[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,ft[$].width,ft[$].height,0,Pt,dt,ft[$].data);for(let ct=0;ct<H.length;ct++){const It=H[ct].image[$].image;Ft?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,It.width,It.height,Pt,dt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Xt,It.width,It.height,0,Pt,dt,It.data)}}else{Ft?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,dt,ft[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,Pt,dt,ft[$]);for(let ct=0;ct<H.length;ct++){const ot=H[ct];Ft?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Pt,dt,ot.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Xt,Pt,dt,ot.image[$])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),j.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Mt(A,M,O,K,Z,j){const yt=s.convert(O.format,O.colorSpace),st=s.convert(O.type),ht=E(O.internalFormat,yt,st,O.colorSpace),Kt=i.get(M),Q=i.get(O);if(Q.__renderTarget=M,!Kt.__hasExternalTextures){const ft=Math.max(1,M.width>>j),wt=Math.max(1,M.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,ht,ft,wt,M.depth,0,yt,st,null):e.texImage2D(Z,j,ht,ft,wt,0,yt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Wt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,Q.__webglTexture,0,Ht(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,Q.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,j=v(M.stencilBuffer,Z),yt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=Ht(M);Wt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,j,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,j,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,A)}else{const K=M.textures;for(let Z=0;Z<K.length;Z++){const j=K[Z],yt=s.convert(j.format,j.colorSpace),st=s.convert(j.type),ht=E(j.internalFormat,yt,st,j.colorSpace),Kt=Ht(M);O&&Wt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,ht,M.width,M.height):Wt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,ht,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ht,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Z=K.__webglTexture,j=Ht(M);if(M.depthTexture.format===Qs)Wt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ua)Wt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=K}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),rt(M.__webglDepthbuffer[K],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),rt(M.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(A,M,O){const K=i.get(A);M!==void 0&&Mt(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Lt(A)}function Te(A){const M=A.texture,O=i.get(A),K=i.get(M);A.addEventListener("dispose",b);const Z=A.textures,j=A.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let ht=0;ht<M.mipmaps.length;ht++)O.__webglFramebuffer[st][ht]=n.createFramebuffer()}else O.__webglFramebuffer[st]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)O.__webglFramebuffer[st]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(yt)for(let st=0,ht=Z.length;st<ht;st++){const Kt=i.get(Z[st]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const ht=Z[st];O.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Kt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),ft=E(ht.internalFormat,Kt,Q,ht.colorSpace,A.isXRRenderTarget===!0),wt=Ht(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,O.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Mt(O.__webglFramebuffer[st][ht],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else Mt(O.__webglFramebuffer[st],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(M)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let st=0,ht=Z.length;st<ht;st++){const Kt=Z[st],Q=i.get(Kt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ct(n.TEXTURE_2D,Kt),Mt(O.__webglFramebuffer,A,Kt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),m(Kt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),Ct(st,M),M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Mt(O.__webglFramebuffer[ht],A,M,n.COLOR_ATTACHMENT0,st,ht);else Mt(O.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,st,0);m(M)&&d(st),e.unbindTexture()}A.depthBuffer&&Lt(A)}function jt(A){const M=A.textures;for(let O=0,K=M.length;O<K;O++){const Z=M[O];if(m(Z)){const j=T(A),yt=i.get(Z).__webglTexture;e.bindTexture(j,yt),d(j),e.unbindTexture()}}}const Ne=[],U=[];function Xn(A){if(A.samples>0){if(Wt(A)===!1){const M=A.textures,O=A.width,K=A.height;let Z=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(A),st=M.length>1;if(st)for(let ht=0;ht<M.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Kt=i.get(M[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,Z,n.NEAREST),l===!0&&(Ne.length=0,U.length=0,Ne.push(n.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ne.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let ht=0;ht<M.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Kt=i.get(M[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ht(A){return Math.min(r.maxSamples,A.samples)}function Wt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function me(A,M){const O=A.colorSpace,K=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==wa&&O!==Tr&&(Yt.getTransfer(O)===re?(K!==mi||Z!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Wt}function cy(n,t){function e(i,r=Tr){let s;const a=Yt.getTransfer(r);if(i===cr)return n.UNSIGNED_BYTE;if(i===ff)return n.UNSIGNED_SHORT_4_4_4_4;if(i===df)return n.UNSIGNED_SHORT_5_5_5_1;if(i===F_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===U_)return n.BYTE;if(i===N_)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===hf)return n.INT;if(i===Ms)return n.UNSIGNED_INT;if(i===er)return n.FLOAT;if(i===rr)return n.HALF_FLOAT;if(i===O_)return n.ALPHA;if(i===B_)return n.RGB;if(i===mi)return n.RGBA;if(i===k_)return n.LUMINANCE;if(i===z_)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===ua)return n.DEPTH_STENCIL;if(i===G_)return n.RED;if(i===pf)return n.RED_INTEGER;if(i===V_)return n.RG;if(i===mf)return n.RG_INTEGER;if(i===_f)return n.RGBA_INTEGER;if(i===yl||i===El||i===Tl||i===bl)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ju||i===Qu||i===th||i===eh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ju)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ih||i===rh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nh||i===ih)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh||i===_h||i===gh||i===vh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===xh||i===Mh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H_||i===Sh||i===yh||i===Eh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class uy extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class to extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hy={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new to;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new xn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new sn({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Li(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends Ra{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new py,m=e.getContextAttributes();let d=null,T=null;const E=[],v=[],R=new Bt;let w=null;const b=new Qn;b.viewport=new Be;const C=new Qn;C.viewport=new Be;const x=[b,C],S=new uy;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=E[W];return J===void 0&&(J=new pu,E[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=E[W];return J===void 0&&(J=new pu,E[W]=J),J.getGripSpace()},this.getHand=function(W){let J=E[W];return J===void 0&&(J=new pu,E[W]=J),J.getHandSpace()};function F(W){const J=v.indexOf(W.inputSource);if(J===-1)return;const Mt=E[J];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,c||a),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){const J=v[W];J!==null&&(v[W]=null,E[W].disconnect(J))}P=null,z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,T=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new gi(p.framebufferWidth,p.framebufferHeight,{format:mi,type:cr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,Mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?ua:Qs,Mt=m.stencil?ca:Ms);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Rt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new gi(f.textureWidth,f.textureHeight,{format:mi,type:cr,depthTexture:new sg(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let J=0;J<W.removed.length;J++){const Mt=W.removed[J],rt=v.indexOf(Mt);rt>=0&&(v[rt]=null,E[rt].disconnect(Mt))}for(let J=0;J<W.added.length;J++){const Mt=W.added[J];let rt=v.indexOf(Mt);if(rt===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=v.length){v.push(Mt),rt=Lt;break}else if(v[Lt]===null){v[Lt]=Mt,rt=Lt;break}if(rt===-1)break}const Rt=E[rt];Rt&&Rt.connect(Mt)}}const V=new N,q=new N;function G(W,J,Mt){V.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const rt=V.distanceTo(q),Rt=J.projectionMatrix.elements,Lt=Mt.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),Te=Rt[14]/(Rt[10]+1),jt=(Rt[9]+1)/Rt[5],Ne=(Rt[9]-1)/Rt[5],U=(Rt[8]-1)/Rt[0],Xn=(Lt[8]+1)/Lt[0],Ht=kt*U,Wt=kt*Xn,At=rt/(-U+Xn),me=At*-U;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(me),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Rt[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const bt=kt+At,A=Te+At,M=Ht-me,O=Wt+(rt-me),K=jt*Te/A*bt,Z=Ne*Te/A*bt;W.projectionMatrix.makePerspective(M,O,K,Z,bt,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,Mt=W.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),S.near=C.near=b.near=J,S.far=C.far=b.far=Mt,(P!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,S.layers.mask=b.layers.mask|C.layers.mask;const rt=W.parent,Rt=S.cameras;et(S,rt);for(let Lt=0;Lt<Rt.length;Lt++)et(Rt[Lt],rt);Rt.length===2?G(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),at(W,S,rt)};function at(W,J,Mt){Mt===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=go*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let mt=null;function Ct(W,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let rt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Lt=0;Lt<Mt.length;Lt++){const kt=Mt[Lt];let Te=null;if(p!==null)Te=p.getViewport(kt);else{const Ne=h.getViewSubImage(f,kt);Te=Ne.viewport,Lt===0&&(t.setRenderTargetTextures(T,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(T))}let jt=x[Lt];jt===void 0&&(jt=new Qn,jt.layers.enable(Lt),jt.viewport=new Be,x[Lt]=jt),jt.matrix.fromArray(kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Te.x,Te.y,Te.width,Te.height),Lt===0&&(S.matrix.copy(jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(jt)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Lt=h.getDepthInformation(Mt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,r.renderState)}}for(let Mt=0;Mt<E.length;Mt++){const rt=v[Mt],Rt=E[Mt];rt!==null&&Rt!==void 0&&Rt.update(rt,J,c||a)}mt&&mt(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Qt=new ig;Qt.setAnimationLoop(Ct),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Zr=new ur,_y=new Ue;function gy(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Q_(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,Zr.copy(v),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Zr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vy(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const v=E.program;i.uniformBlockBinding(T,v)}function c(T,E){let v=r[T.id];v===void 0&&(g(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(T,R);const w=t.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const E=h();T.__bindingPointIndex=E;const v=n.createBuffer(),R=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],v=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,S=C.length;x<S;x++){const P=C[x];if(p(P,w,x,R)===!0){const z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+X,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,X),X+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,v,R){const w=T.value,b=E+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(T){const E=T.uniforms;let v=0;const R=16;for(let b=0,C=E.length;b<C;b++){const x=Array.isArray(E[b])?E[b]:[E[b]];for(let S=0,P=x.length;S<P;S++){const z=x[S],F=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=F.length;X<Y;X++){const V=F[X],q=_(V),G=v%R,et=G%q.boundary,at=G+et;v+=et,at!==0&&R-at<q.storage&&(v+=R-at),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=q.storage}}}const w=v%R;return w>0&&(v+=R-w),T.__size=v,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class xy{constructor(t={}){const{canvas:e=l2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=Pr,this.toneMappingExposure=1;const v=this;let R=!1,w=0,b=0,C=null,x=-1,S=null;const P=new Be,z=new Be;let F=null;const X=new qt(0);let Y=0,V=e.width,q=e.height,G=1,et=null,at=null;const mt=new Be(0,0,V,q),Ct=new Be(0,0,V,q);let Qt=!1;const W=new ng;let J=!1,Mt=!1;const rt=new Ue,Rt=new Ue,Lt=new N,kt=new Be,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Ne(){return C===null?G:1}let U=i;function Xn(y,L){return e.getContext(y,L)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cf}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){const L="webgl2";if(U=Xn(L,y),U===null)throw Xn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ht,Wt,At,me,bt,A,M,O,K,Z,j,yt,st,ht,Kt,Q,ft,wt,Pt,dt,Xt,Ft,ue,D;function it(){Ht=new T3(U),Ht.init(),Ft=new cy(U,Ht),Wt=new v3(U,Ht,t,Ft),At=new ay(U,Ht),Wt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),me=new w3(U),bt=new XS,A=new ly(U,Ht,At,bt,Wt,Ft,me),M=new M3(v),O=new E3(v),K=new U2(U),ue=new _3(U,K),Z=new b3(U,K,me,ue),j=new C3(U,Z,K,me),Pt=new R3(U,Wt,A),Q=new x3(bt),yt=new WS(v,M,O,Ht,Wt,ue,Q),st=new gy(v,bt),ht=new qS,Kt=new QS(Ht),wt=new m3(v,M,O,At,j,p,l),ft=new ry(v,j,Wt),D=new vy(U,me,Wt,At),dt=new g3(U,Ht,me),Xt=new A3(U,Ht,me),me.programs=yt.programs,v.capabilities=Wt,v.extensions=Ht,v.properties=bt,v.renderLists=ht,v.shadowMap=ft,v.state=At,v.info=me}it();const H=new my(v,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Ht.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ht.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(V,q,!1))},this.getSize=function(y){return y.set(V,q)},this.setSize=function(y,L,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,q=L,e.width=Math.floor(y*G),e.height=Math.floor(L*G),B===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(y,L,B){V=y,q=L,G=B,e.width=Math.floor(y*B),e.height=Math.floor(L*B),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(mt)},this.setViewport=function(y,L,B,k){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,L,B,k),At.viewport(P.copy(mt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ct)},this.setScissor=function(y,L,B,k){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,L,B,k),At.scissor(z.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){At.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){et=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,L=!0,B=!0){let k=0;if(y){let I=!1;if(C!==null){const tt=C.texture.format;I=tt===_f||tt===mf||tt===pf}if(I){const tt=C.texture.type,lt=tt===cr||tt===Ms||tt===_o||tt===ca||tt===ff||tt===df,gt=wt.getClearColor(),vt=wt.getClearAlpha(),Dt=gt.r,Ut=gt.g,xt=gt.b;lt?(g[0]=Dt,g[1]=Ut,g[2]=xt,g[3]=vt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Dt,_[1]=Ut,_[2]=xt,_[3]=vt,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT),B&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Kt.dispose(),bt.dispose(),M.dispose(),O.dispose(),j.dispose(),ue.dispose(),D.dispose(),yt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Id),H.removeEventListener("sessionend",Ud),Xr.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=me.autoReset,L=ft.enabled,B=ft.autoUpdate,k=ft.needsUpdate,I=ft.type;it(),me.autoReset=y,ft.enabled=L,ft.autoUpdate=B,ft.needsUpdate=k,ft.type=I}function ot(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function It(y){const L=y.target;L.removeEventListener("dispose",It),Ce(L)}function Ce(y){Qe(y),bt.remove(y)}function Qe(y){const L=bt.get(y).programs;L!==void 0&&(L.forEach(function(B){yt.releaseProgram(B)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,B,k,I,tt){L===null&&(L=Te);const lt=I.isMesh&&I.matrixWorld.determinant()<0,gt=sv(y,L,B,k,I);At.setMaterial(k,lt);let vt=B.index,Dt=1;if(k.wireframe===!0){if(vt=Z.getWireframeAttribute(B),vt===void 0)return;Dt=2}const Ut=B.drawRange,xt=B.attributes.position;let Zt=Ut.start*Dt,he=(Ut.start+Ut.count)*Dt;tt!==null&&(Zt=Math.max(Zt,tt.start*Dt),he=Math.min(he,(tt.start+tt.count)*Dt)),vt!==null?(Zt=Math.max(Zt,0),he=Math.min(he,vt.count)):xt!=null&&(Zt=Math.max(Zt,0),he=Math.min(he,xt.count));const _e=he-Zt;if(_e<0||_e===1/0)return;ue.setup(I,k,gt,B,vt);let mn,te=dt;if(vt!==null&&(mn=K.get(vt),te=Xt,te.setIndex(mn)),I.isMesh)k.wireframe===!0?(At.setLineWidth(k.wireframeLinewidth*Ne()),te.setMode(U.LINES)):te.setMode(U.TRIANGLES);else if(I.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),At.setLineWidth(Et*Ne()),I.isLineSegments?te.setMode(U.LINES):I.isLineLoop?te.setMode(U.LINE_LOOP):te.setMode(U.LINE_STRIP)}else I.isPoints?te.setMode(U.POINTS):I.isSprite&&te.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)te.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))te.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Et=I._multiDrawStarts,Vi=I._multiDrawCounts,ee=I._multiDrawCount,ui=vt?K.get(vt).bytesPerElement:1,Cs=bt.get(k).currentProgram.getUniforms();for(let Pn=0;Pn<ee;Pn++)Cs.setValue(U,"_gl_DrawID",Pn),te.render(Et[Pn]/ui,Vi[Pn])}else if(I.isInstancedMesh)te.renderInstances(Zt,_e,I.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Vi=Math.min(B.instanceCount,Et);te.renderInstances(Zt,_e,Vi)}else te.render(Zt,_e)};function ie(y,L,B){y.transparent===!0&&y.side===Ji&&y.forceSinglePass===!1?(y.side=vn,y.needsUpdate=!0,Ho(y,L,B),y.side=Nr,y.needsUpdate=!0,Ho(y,L,B),y.side=Ji):Ho(y,L,B)}this.compile=function(y,L,B=null){B===null&&(B=y),d=Kt.get(B),d.init(L),E.push(d),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),y!==B&&y.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const k=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const tt=I.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];ie(gt,B,I),k.add(gt)}else ie(tt,B,I),k.add(tt)}),E.pop(),d=null,k},this.compileAsync=function(y,L,B=null){const k=this.compile(y,L,B);return new Promise(I=>{function tt(){if(k.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){I(y);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ci=null;function Gi(y){ci&&ci(y)}function Id(){Xr.stop()}function Ud(){Xr.start()}const Xr=new ig;Xr.setAnimationLoop(Gi),typeof self<"u"&&Xr.setContext(self),this.setAnimationLoop=function(y){ci=y,H.setAnimationLoop(y),y===null?Xr.stop():Xr.start()},H.addEventListener("sessionstart",Id),H.addEventListener("sessionend",Ud),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,L,C),d=Kt.get(y,E.length),d.init(L),E.push(d),Rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),W.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,J=Q.init(this.clippingPlanes,Mt),m=ht.get(y,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&zc(tt,L,-1/0,v.sortObjects)}zc(y,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,at),jt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,jt&&wt.addToRenderList(m,y),this.info.render.frame++,J===!0&&Q.beginShadows();const B=d.state.shadowsArray;ft.render(B,y,L),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(d.setupLights(),L.isArrayCamera){const tt=L.cameras;if(I.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const vt=tt[lt];Fd(k,I,y,vt)}jt&&wt.render(y);for(let lt=0,gt=tt.length;lt<gt;lt++){const vt=tt[lt];Nd(m,y,vt,vt.viewport)}}else I.length>0&&Fd(k,I,y,L),jt&&wt.render(y),Nd(m,y,L);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(v,y,L),ue.resetDefaultState(),x=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],J===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function zc(y,L,B,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Rt);const lt=j.update(y),gt=y.material;gt.visible&&m.push(y,lt,gt,B,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const lt=j.update(y),gt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),kt.copy(lt.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(Rt)),Array.isArray(gt)){const vt=lt.groups;for(let Dt=0,Ut=vt.length;Dt<Ut;Dt++){const xt=vt[Dt],Zt=gt[xt.materialIndex];Zt&&Zt.visible&&m.push(y,lt,Zt,B,kt.z,xt)}}else gt.visible&&m.push(y,lt,gt,B,kt.z,null)}}const tt=y.children;for(let lt=0,gt=tt.length;lt<gt;lt++)zc(tt[lt],L,B,k)}function Nd(y,L,B,k){const I=y.opaque,tt=y.transmissive,lt=y.transparent;d.setupLightsView(B),J===!0&&Q.setGlobalState(v.clippingPlanes,B),k&&At.viewport(P.copy(k)),I.length>0&&Vo(I,L,B),tt.length>0&&Vo(tt,L,B),lt.length>0&&Vo(lt,L,B),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Fd(y,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new gi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?rr:cr,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[k.id],lt=k.viewport||P;tt.setSize(lt.z,lt.w);const gt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),jt&&wt.render(B);const vt=v.toneMapping;v.toneMapping=Pr;const Dt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),J===!0&&Q.setGlobalState(v.clippingPlanes,k),Vo(y,B,k),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,Zt=L.length;xt<Zt;xt++){const he=L[xt],_e=he.object,mn=he.geometry,te=he.material,Et=he.group;if(te.side===Ji&&_e.layers.test(k.layers)){const Vi=te.side;te.side=vn,te.needsUpdate=!0,Od(_e,B,k,mn,te,Et),te.side=Vi,te.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}v.setRenderTarget(gt),v.setClearColor(X,Y),Dt!==void 0&&(k.viewport=Dt),v.toneMapping=vt}function Vo(y,L,B){const k=L.isScene===!0?L.overrideMaterial:null;for(let I=0,tt=y.length;I<tt;I++){const lt=y[I],gt=lt.object,vt=lt.geometry,Dt=k===null?lt.material:k,Ut=lt.group;gt.layers.test(B.layers)&&Od(gt,L,B,vt,Dt,Ut)}}function Od(y,L,B,k,I,tt){y.onBeforeRender(v,L,B,k,I,tt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(v,L,B,k,y,tt),I.transparent===!0&&I.side===Ji&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,v.renderBufferDirect(B,L,k,I,y,tt),I.side=Nr,I.needsUpdate=!0,v.renderBufferDirect(B,L,k,I,y,tt),I.side=Ji):v.renderBufferDirect(B,L,k,I,y,tt),y.onAfterRender(v,L,B,k,I,tt)}function Ho(y,L,B){L.isScene!==!0&&(L=Te);const k=bt.get(y),I=d.state.lights,tt=d.state.shadowsArray,lt=I.state.version,gt=yt.getParameters(y,I.state,tt,L,B),vt=yt.getProgramCacheKey(gt);let Dt=k.programs;k.environment=y.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(y.isMeshStandardMaterial?O:M).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",It),Dt=new Map,k.programs=Dt);let Ut=Dt.get(vt);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===lt)return kd(y,gt),Ut}else gt.uniforms=yt.getUniforms(y),y.onBeforeCompile(gt,v),Ut=yt.acquireProgram(gt,vt),Dt.set(vt,Ut),k.uniforms=gt.uniforms;const xt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(xt.clippingPlanes=Q.uniform),kd(y,gt),k.needsLights=ov(y),k.lightsStateVersion=lt,k.needsLights&&(xt.ambientLightColor.value=I.state.ambient,xt.lightProbe.value=I.state.probe,xt.directionalLights.value=I.state.directional,xt.directionalLightShadows.value=I.state.directionalShadow,xt.spotLights.value=I.state.spot,xt.spotLightShadows.value=I.state.spotShadow,xt.rectAreaLights.value=I.state.rectArea,xt.ltc_1.value=I.state.rectAreaLTC1,xt.ltc_2.value=I.state.rectAreaLTC2,xt.pointLights.value=I.state.point,xt.pointLightShadows.value=I.state.pointShadow,xt.hemisphereLights.value=I.state.hemi,xt.directionalShadowMap.value=I.state.directionalShadowMap,xt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,xt.spotShadowMap.value=I.state.spotShadowMap,xt.spotLightMatrix.value=I.state.spotLightMatrix,xt.spotLightMap.value=I.state.spotLightMap,xt.pointShadowMap.value=I.state.pointShadowMap,xt.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Bd(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=wl.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function kd(y,L){const B=bt.get(y);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function sv(y,L,B,k,I){L.isScene!==!0&&(L=Te),A.resetTextureUnits();const tt=L.fog,lt=k.isMeshStandardMaterial?L.environment:null,gt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wa,vt=(k.isMeshStandardMaterial?O:M).get(k.envMap||lt),Dt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,he=!!B.morphAttributes.color;let _e=Pr;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=v.toneMapping);const mn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=mn!==void 0?mn.length:0,Et=bt.get(k),Vi=d.state.lights;if(J===!0&&(Mt===!0||y!==S)){const Yn=y===S&&k.id===x;Q.setState(k,y,Yn)}let ee=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Vi.state.version||Et.outputColorSpace!==gt||I.isBatchedMesh&&Et.batching===!1||!I.isBatchedMesh&&Et.batching===!0||I.isBatchedMesh&&Et.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Et.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Et.instancing===!1||!I.isInstancedMesh&&Et.instancing===!0||I.isSkinnedMesh&&Et.skinning===!1||!I.isSkinnedMesh&&Et.skinning===!0||I.isInstancedMesh&&Et.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Et.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Et.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Et.instancingMorph===!1&&I.morphTexture!==null||Et.envMap!==vt||k.fog===!0&&Et.fog!==tt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==Dt||Et.vertexTangents!==Ut||Et.morphTargets!==xt||Et.morphNormals!==Zt||Et.morphColors!==he||Et.toneMapping!==_e||Et.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Et.__version=k.version);let ui=Et.currentProgram;ee===!0&&(ui=Ho(k,L,I));let Cs=!1,Pn=!1,za=!1;const ge=ui.getUniforms(),Ei=Et.uniforms;if(At.useProgram(ui.program)&&(Cs=!0,Pn=!0,za=!0),k.id!==x&&(x=k.id,Pn=!0),Cs||S!==y){At.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),u2(rt),h2(rt),ge.setValue(U,"projectionMatrix",rt)):ge.setValue(U,"projectionMatrix",y.projectionMatrix),ge.setValue(U,"viewMatrix",y.matrixWorldInverse);const mr=ge.map.cameraPosition;mr!==void 0&&mr.setValue(U,Lt.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Pn=!0,za=!0)}if(I.isSkinnedMesh){ge.setOptional(U,I,"bindMatrix"),ge.setOptional(U,I,"bindMatrixInverse");const Yn=I.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),ge.setValue(U,"boneTexture",Yn.boneTexture,A))}I.isBatchedMesh&&(ge.setOptional(U,I,"batchingTexture"),ge.setValue(U,"batchingTexture",I._matricesTexture,A),ge.setOptional(U,I,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",I._indirectTexture,A),ge.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",I._colorsTexture,A));const Ga=B.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0)&&Pt.update(I,B,ui),(Pn||Et.receiveShadow!==I.receiveShadow)&&(Et.receiveShadow=I.receiveShadow,ge.setValue(U,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ei.envMap.value=vt,Ei.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Ei.envMapIntensity.value=L.environmentIntensity),Pn&&(ge.setValue(U,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&av(Ei,za),tt&&k.fog===!0&&st.refreshFogUniforms(Ei,tt),st.refreshMaterialUniforms(Ei,k,G,q,d.state.transmissionRenderTarget[y.id]),wl.upload(U,Bd(Et),Ei,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wl.upload(U,Bd(Et),Ei,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(U,"center",I.center),ge.setValue(U,"modelViewMatrix",I.modelViewMatrix),ge.setValue(U,"normalMatrix",I.normalMatrix),ge.setValue(U,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Yn=k.uniformsGroups;for(let mr=0,_r=Yn.length;mr<_r;mr++){const zd=Yn[mr];D.update(zd,ui),D.bind(zd,ui)}}return ui}function av(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function ov(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,L,B){bt.get(y.texture).__webglTexture=L,bt.get(y.depthTexture).__webglTexture=B;const k=bt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const B=bt.get(y);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,B=0){C=y,w=L,b=B;let k=!0,I=null,tt=!1,lt=!1;if(y){const vt=bt.get(y);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(vt.__hasExternalTextures)A.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const xt=y.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(y.width!==xt.image.width||y.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);const Ut=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?I=Ut[L][B]:I=Ut[L],tt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?I=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[B]:I=Ut,P.copy(y.viewport),z.copy(y.scissor),F=y.scissorTest}else P.copy(mt).multiplyScalar(G).floor(),z.copy(Ct).multiplyScalar(G).floor(),F=Qt;if(At.bindFramebuffer(U.FRAMEBUFFER,I)&&k&&At.drawBuffers(y,I),At.viewport(P),At.scissor(z),At.setScissorTest(F),tt){const vt=bt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,vt.__webglTexture,B)}else if(lt){const vt=bt.get(y.texture),Dt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,Dt)}x=-1},this.readRenderTargetPixels=function(y,L,B,k,I,tt,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){At.bindFramebuffer(U.FRAMEBUFFER,gt);try{const vt=y.texture,Dt=vt.format,Ut=vt.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&B>=0&&B<=y.height-I&&U.readPixels(L,B,k,I,Ft.convert(Dt),Ft.convert(Ut),tt)}finally{const vt=C!==null?bt.get(C).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,L,B,k,I,tt,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const vt=y.texture,Dt=vt.format,Ut=vt.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-k&&B>=0&&B<=y.height-I){At.bindFramebuffer(U.FRAMEBUFFER,gt);const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(L,B,k,I,Ft.convert(Dt),Ft.convert(Ut),0);const Zt=C!==null?bt.get(C).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,Zt);const he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await c2(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(xt),U.deleteSync(he),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,B=0){y.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),I=Math.floor(y.image.width*k),tt=Math.floor(y.image.height*k),lt=L!==null?L.x:0,gt=L!==null?L.y:0;A.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,lt,gt,I,tt),At.unbindTexture()},this.copyTextureToTexture=function(y,L,B=null,k=null,I=0){y.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],L=arguments[2],I=arguments[3]||0,B=null);let tt,lt,gt,vt,Dt,Ut,xt,Zt,he;const _e=y.isCompressedTexture?y.mipmaps[I]:y.image;B!==null?(tt=B.max.x-B.min.x,lt=B.max.y-B.min.y,gt=B.isBox3?B.max.z-B.min.z:1,vt=B.min.x,Dt=B.min.y,Ut=B.isBox3?B.min.z:0):(tt=_e.width,lt=_e.height,gt=_e.depth||1,vt=0,Dt=0,Ut=0),k!==null?(xt=k.x,Zt=k.y,he=k.z):(xt=0,Zt=0,he=0);const mn=Ft.convert(L.format),te=Ft.convert(L.type);let Et;L.isData3DTexture?(A.setTexture3D(L,0),Et=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),Et=U.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Vi=U.getParameter(U.UNPACK_ROW_LENGTH),ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ui=U.getParameter(U.UNPACK_SKIP_PIXELS),Cs=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);const za=y.isDataArrayTexture||y.isData3DTexture,ge=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ei=bt.get(y),Ga=bt.get(L),Yn=bt.get(Ei.__renderTarget),mr=bt.get(Ga.__renderTarget);At.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let _r=0;_r<gt;_r++)za&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,I,Ut+_r),y.isDepthTexture?(ge&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(L).__webglTexture,I,he+_r),U.blitFramebuffer(vt,Dt,tt,lt,xt,Zt,tt,lt,U.DEPTH_BUFFER_BIT,U.NEAREST)):ge?U.copyTexSubImage3D(Et,I,xt,Zt,he+_r,vt,Dt,tt,lt):U.copyTexSubImage2D(Et,I,xt,Zt,he+_r,vt,Dt,tt,lt);At.bindFramebuffer(U.READ_FRAMEBUFFER,null),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Et,I,xt,Zt,he,tt,lt,gt,mn,te,_e.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,I,xt,Zt,he,tt,lt,gt,mn,_e.data):U.texSubImage3D(Et,I,xt,Zt,he,tt,lt,gt,mn,te,_e):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,xt,Zt,tt,lt,mn,te,_e.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,xt,Zt,_e.width,_e.height,mn,_e.data):U.texSubImage2D(U.TEXTURE_2D,I,xt,Zt,tt,lt,mn,te,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,Vi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ui),U.pixelStorei(U.UNPACK_SKIP_ROWS,Cs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),I===0&&L.generateMipmaps&&U.generateMipmap(Et),At.unbindTexture()},this.copyTextureToTexture3D=function(y,L,B=null,k=null,I=0){return y.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],L=arguments[3],I=arguments[4]||0),Ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,B,k,I)},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,At.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class My extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sy extends Io{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gp=new Ue,bh=new j_,hl=new Lo,fl=new N;class yy extends Mn{constructor(t=new Bi,e=new Sy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,t.ray.intersectsSphere(hl)===!1)return;Gp.copy(r).invert(),bh.copy(t.ray).applyMatrix4(Gp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);fl.fromBufferAttribute(h,m),Vp(fl,m,l,r,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)fl.fromBufferAttribute(h,g),Vp(fl,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vp(n,t,e,i,r,s,a){const o=bh.distanceSqToPoint(n);if(o<e){const l=new N;bh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ey extends sn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ug{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hp(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);const oe={particles:{COUNT:24e3,BASE_SIZE:.03,MORPH_DURATION:1},hand:{PREFERRED_DELEGATE:"GPU",NUM_HANDS:1,MIN_HAND_DETECTION_CONFIDENCE:.6,MIN_HAND_PRESENCE_CONFIDENCE:.6,MIN_TRACKING_CONFIDENCE:.6,INFERENCE_TARGET_HZ:30},filter:{MIN_CUTOFF:1,BETA:.3,D_CUTOFF:1},gesture:{CONFIRM_FRAMES:8},scene:{BACKGROUND_COLOR:0,CAMERA_FOV:50,CAMERA_NEAR:.1,CAMERA_FAR:100,CAMERA_Z:6},bloom:{ENABLED:!1,STRENGTH:1.1,RADIUS:.5,THRESHOLD:.4},colors:{NEON_BLUE:[.2,.55,1],CYAN:[.3,.95,1]}};class Ty{constructor(t){this.video=t,this.stream=null}async start(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("getUserMedia tidak tersedia. Pastikan halaman diakses via HTTPS atau localhost.");return this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480},frameRate:{ideal:30}},audio:!1}),this.video.srcObject=this.stream,await new Promise(t=>{this.video.onloadedmetadata=()=>{this.video.play(),t()}}),this.video}stop(){this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null)}}var ys=typeof self<"u"?self:{};function zl(n,t){t:{for(var e=["CLOSURE_FLAGS"],i=ys,r=0;r<e.length;r++)if((i=i[e[r]])==null){e=null;break t}e=i}return(n=e&&e[n])!=null?n:t}function Jr(){throw Error("Invalid UTF8")}function Wp(n,t){return t=String.fromCharCode.apply(null,t),n==null?t:n+t}let dl,mu;const by=typeof TextDecoder<"u";let Ay;const wy=typeof TextEncoder<"u";function hg(n){if(wy)n=(Ay||(Ay=new TextEncoder)).encode(n);else{let e=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var t=n.charCodeAt(r);if(t<128)i[e++]=t;else{if(t<2048)i[e++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<n.length){const s=n.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[e++]=t>>18|240,i[e++]=t>>12&63|128,i[e++]=t>>6&63|128,i[e++]=63&t|128;continue}r--}t=65533}i[e++]=t>>12|224,i[e++]=t>>6&63|128}i[e++]=63&t|128}}n=e===i.length?i:i.subarray(0,e)}return n}var xo,fg=zl(610401301,!1),Ry=zl(653718497,zl(1,!0)),dg=zl(660014094,!1);const Xp=ys.navigator;function Ah(n){return!!fg&&!!xo&&xo.brands.some(({brand:t})=>t&&t.indexOf(n)!=-1)}function ti(n){var t;return(t=ys.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(n)!=-1}function br(){return!!fg&&!!xo&&xo.brands.length>0}function _u(){return br()?Ah("Chromium"):(ti("Chrome")||ti("CriOS"))&&!(!br()&&ti("Edge"))||ti("Silk")}function Mf(n){return Mf[" "](n),n}xo=Xp&&Xp.userAgentData||null,Mf[" "]=function(){};var Cy=!br()&&(ti("Trident")||ti("MSIE"));!ti("Android")||_u(),_u(),ti("Safari")&&(_u()||!br()&&ti("Coast")||!br()&&ti("Opera")||!br()&&ti("Edge")||(br()?Ah("Microsoft Edge"):ti("Edg/"))||br()&&Ah("Opera"));var pg={},eo=null;function Py(n){var t=n.length,e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(n[t-1])!=-1&&(e="=.".indexOf(n[t-2])!=-1?e-2:e-1);var i=new Uint8Array(e),r=0;return function(s,a){function o(p){for(;l<s.length;){var g=s.charAt(l++),_=eo[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}mg();for(var l=0;;){var c=o(-1),u=o(0),h=o(64),f=o(64);if(f===64&&c===-1)break;a(c<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),f!=64&&a(h<<6&192|f))}}(n,function(s){i[r++]=s}),r!==e?i.subarray(0,r):i}function mg(){if(!eo){eo={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var i=n.concat(t[e].split(""));pg[e]=i;for(var r=0;r<i.length;r++){var s=i[r];eo[s]===void 0&&(eo[s]=r)}}}}var _g=typeof Uint8Array<"u",gg=!Cy&&typeof btoa=="function";function Yp(n){if(!gg){var t;t===void 0&&(t=0),mg(),t=pg[t];var e=Array(Math.floor(n.length/3)),i=t[64]||"";let l=0,c=0;for(;l<n.length-2;l+=3){var r=n[l],s=n[l+1],a=n[l+2],o=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|a>>6],a=t[63&a],e[c++]=o+r+s+a}switch(o=0,a=i,n.length-l){case 2:a=t[(15&(o=n[l+1]))<<2]||i;case 1:n=n[l],e[c]=t[n>>2]+t[(3&n)<<4|o>>4]+a+i}return e.join("")}for(t="",e=0,i=n.length-10240;e<i;)t+=String.fromCharCode.apply(null,n.subarray(e,e+=10240));return t+=String.fromCharCode.apply(null,e?n.subarray(e):n),btoa(t)}const qp=/[-_.]/g,Dy={"-":"+",_:"/",".":"="};function Ly(n){return Dy[n]||""}function vg(n){if(!gg)return Py(n);qp.test(n)&&(n=n.replace(qp,Ly)),n=atob(n);const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}function No(n){return _g&&n!=null&&n instanceof Uint8Array}var fa={};let Iy;function xg(n){if(n!==fa)throw Error("illegal external caller")}function Es(){return Iy||(Iy=new or(null,fa))}function Sf(n){xg(fa);var t=n.ba;return(t=t==null||No(t)?t:typeof t=="string"?vg(t):null)==null?t:n.ba=t}var or=class{constructor(n,t){if(xg(t),this.ba=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}ua(){return new Uint8Array(Sf(this)||0)}};function Mg(n,t){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=t}let Uy;function Ts(){const n=Error();Mg(n,"incident"),function(t){ys.setTimeout(()=>{throw t},0)}(n)}function wh(n){return Mg(n=Error(n),"warning"),n}function yf(){return typeof BigInt=="function"}function zn(n){return Array.prototype.slice.call(n)}var Da=typeof Symbol=="function"&&typeof Symbol()=="symbol";function uc(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var Fo=uc(),jp=uc("0di"),gu=uc("2ex"),Ya=uc("1oa"),hc=Da?(n,t)=>{n[Fo]|=t}:(n,t)=>{n.G!==void 0?n.G|=t:Object.defineProperties(n,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Gl=Da?(n,t)=>{n[Fo]&=~t}:(n,t)=>{n.G!==void 0&&(n.G&=~t)},ke=Da?n=>0|n[Fo]:n=>0|n.G,ne=Da?n=>n[Fo]:n=>n.G,we=Da?(n,t)=>{n[Fo]=t}:(n,t)=>{n.G!==void 0?n.G=t:Object.defineProperties(n,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})};function La(n){return hc(n,34),n}function Ny(n,t){we(t,-14591&(0|n))}function Rh(n,t){we(t,-14557&(34|n))}var Ef,Oo={},Sg={};function Kp(n){return!(!n||typeof n!="object"||n.La!==Sg)}function fc(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function Tf(n,t,e){if(n!=null){if(typeof n=="string")n=n?new or(n,fa):Es();else if(n.constructor!==or)if(No(n))n=n.length?new or(e?n:new Uint8Array(n),fa):Es();else{if(!t)throw Error();n=void 0}}return n}function Vl(n){return!(!Array.isArray(n)||n.length)&&!!(1&ke(n))}const $p=[];function pr(n){if(2&n)throw Error()}we($p,55),Ef=Object.freeze($p);class Hl{constructor(t,e,i){this.l=0,this.g=t,this.h=e,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Hl(this.g,this.h,this.m)}}let Dr;function yg(n,t){(t=Dr?t[Dr]:void 0)&&(n[Dr]=zn(t))}var Fy=Object.freeze({}),Oy=Object.freeze({});function dc(n){return n.Sa=!0,n}var By=dc(n=>typeof n=="number"),Zp=dc(n=>typeof n=="string"),ky=dc(n=>typeof n=="boolean"),pc=typeof ys.BigInt=="function"&&typeof ys.BigInt(0)=="bigint",Ch=dc(n=>pc?n>=Gy&&n<=Hy:n[0]==="-"?Jp(n,zy):Jp(n,Vy));const zy=Number.MIN_SAFE_INTEGER.toString(),Gy=pc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Vy=Number.MAX_SAFE_INTEGER.toString(),Hy=pc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Jp(n,t){if(n.length>t.length)return!1;if(n.length<t.length||n===t)return!0;for(let e=0;e<n.length;e++){const i=n[e],r=t[e];if(i>r)return!1;if(i<r)return!0}}const Wy=typeof Uint8Array.prototype.slice=="function";let Eg,ce=0,De=0;function Qp(n){const t=n>>>0;ce=t,De=(n-t)/4294967296>>>0}function da(n){if(n<0){Qp(-n);const[t,e]=Rf(ce,De);ce=t>>>0,De=e>>>0}else Qp(n)}function bf(n){const t=Eg||(Eg=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+n,!0),De=0,ce=t.getUint32(0,!0)}function Af(n,t){return 4294967296*t+(n>>>0)}function wf(n,t){const e=2147483648&t;return e&&(t=~t>>>0,(n=1+~n>>>0)==0&&(t=t+1>>>0)),n=Af(n,t),e?-n:n}function Wl(n,t){if(n>>>=0,(t>>>=0)<=2097151)var e=""+(4294967296*t+n);else yf()?e=""+(BigInt(t)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(e=16777215&(n>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,n>=1e7&&(e+=n/1e7>>>0,n%=1e7),e>=1e7&&(t+=e/1e7>>>0,e%=1e7),e=t+tm(e)+tm(n));return e}function tm(n){return n=String(n),"0000000".slice(n.length)+n}function mc(n){if(n.length<16)da(Number(n));else if(yf())n=BigInt(n),ce=Number(n&BigInt(4294967295))>>>0,De=Number(n>>BigInt(32)&BigInt(4294967295));else{const t=+(n[0]==="-");De=ce=0;const e=n.length;for(let i=t,r=(e-t)%6+t;r<=e;i=r,r+=6){const s=Number(n.slice(i,r));De*=1e6,ce=1e6*ce+s,ce>=4294967296&&(De+=Math.trunc(ce/4294967296),De>>>=0,ce>>>=0)}if(t){const[i,r]=Rf(ce,De);ce=i,De=r}}}function Rf(n,t){return t=~t,n?n=1+~n:t+=1,[n,t]}function Vr(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Tg(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const Xy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function _c(n){const t=typeof n;switch(t){case"bigint":return!0;case"number":return Number.isFinite(n)}return t==="string"&&Xy.test(n)}function Ia(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function Yy(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function em(n){return n[0]!=="-"&&(n.length<20||n.length===20&&Number(n.substring(0,6))<184467)}function Cf(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(da(n),n=wf(ce,De)),n}function Pf(n){var t=Math.trunc(Number(n));if(Number.isSafeInteger(t))return String(t);if((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),!(n[0]==="-"?n.length<20||n.length===20&&Number(n.substring(0,7))>-922337:n.length<19||n.length===19&&Number(n.substring(0,6))<922337))if(mc(n),n=ce,2147483648&(t=De))if(yf())n=""+(BigInt(0|t)<<BigInt(32)|BigInt(n>>>0));else{const[e,i]=Rf(n,t);n="-"+Wl(e,i)}else n=Wl(n,t);return n}function Xl(n){return n==null?n:typeof n=="bigint"?(Ch(n)?n=Number(n):(n=BigInt.asIntN(64,n),n=Ch(n)?Number(n):String(n)),n):_c(n)?typeof n=="number"?Cf(n):Pf(n):void 0}function qy(n){if(n==null)return n;var t=typeof n;if(t==="bigint")return String(BigInt.asUintN(64,n));if(_c(n)){if(t==="string")return t=Math.trunc(Number(n)),Number.isSafeInteger(t)&&t>=0?n=String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),em(n)||(mc(n),n=Wl(ce,De))),n;if(t==="number")return(n=Math.trunc(n))>=0&&Number.isSafeInteger(n)?n:function(e){if(e<0){da(e);const i=Wl(ce,De);return e=Number(i),Number.isSafeInteger(e)?e:i}return em(String(e))?e:(da(e),Af(ce,De))}(n)}}function bg(n){if(typeof n!="string")throw Error();return n}function Ua(n){if(n!=null&&typeof n!="string")throw Error();return n}function Lr(n){return n==null||typeof n=="string"?n:void 0}function Df(n,t,e,i){if(n!=null&&typeof n=="object"&&n.Y===Oo)return n;if(!Array.isArray(n))return e?2&i?(n=t[jp])?t=n:(La((n=new t).u),t=t[jp]=n):t=new t:t=void 0,t;let r=e=ke(n);return r===0&&(r|=32&i),r|=2&i,r!==e&&we(n,r),new t(n)}function jy(n,t,e){if(t)t:{if(!_c(t=n))throw wh("int64");switch(typeof t){case"string":t=Pf(t);break t;case"bigint":if(n=t=BigInt.asIntN(64,t),Zp(n)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(n))throw Error(String(n))}else if(By(n)&&!Number.isSafeInteger(n))throw Error(String(n));t=pc?BigInt(t):ky(t)?t?"1":"0":Zp(t)?t.trim()||"0":String(t);break t;default:t=Cf(t)}}else t=Xl(n);return typeof(e=(n=t)==null?e?0:void 0:n)=="string"&&(t=+e,Number.isSafeInteger(t))?t:e}function Ag(n){if(qa===void 0&&(qa=typeof Proxy=="function"?Cg(Proxy):null),!qa||!Rg())return n;let t=pa?.get(n);return t||(Math.random()>.01?n:(function(e){if(vu===void 0){const i=new qa([],{});vu=Array.prototype.concat.call([],i).length===1}vu&&typeof Symbol=="function"&&Symbol.isConcatSpreadable&&(e[Symbol.isConcatSpreadable]=!0)}(n),t=new qa(n,{set:(e,i,r)=>(Ts(),e[i]=r,!0)}),function(e,i){(pa||(pa=new ds)).set(e,i),(wg||(wg=new ds)).set(i,e)}(n,t),t))}let pa,wg,qa,ds,vu,Mo,Yl,Ky,$y;function Rg(){return ds===void 0&&(ds=typeof WeakMap=="function"?Cg(WeakMap):null),ds}function Cg(n){try{return n.toString().indexOf("[native code]")!==-1?n:null}catch{return null}}function Lf(n,t,e){if(Ry&&Rg()){if(Mo?.get(t)?.get(n)){if(e)return}else if(Math.random()>.01)return;var i=n.length;e={length:i};for(var r=0;r<Math.min(i,10);r++){if(i<=10)var s=r;else{s=i/10;const a=Math.floor(r*s);s=a+Math.floor(Math.random()*(Math.floor((r+1)*s)-a))}e[s]=n[s]}Pg(n,e)?((r=(i=Mo||(Mo=new ds)).get(t))||(r=new ds,i.set(t,r)),r.set(n,e)):(Ts(),So(n,t))}}function ql(n,t){const e=Mo?.get(t)?.get(n);e&&!Pg(n,e)&&(Ts(),So(n,t))}function Pg(n,t){if(n.length!==t.length)return!1;for(const r in t){var e,i=Number(r);if((e=Number.isInteger(i))&&(e=n[i],i=t[i],e=!(Number.isNaN(e)?Number.isNaN(i):e===i)),e)return!1}return!0}function gc(n){if(n&&Mo?.has(n)){var t=n.u;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(e===t.length-1&&fc(i))for(const r in i){const s=i[r];Array.isArray(s)&&ql(s,n)}else Array.isArray(i)&&ql(i,n)}}}function So(n,t){Mo?.get(t)?.delete(n)}function ps(n,t){return n=Dg(n,t[0],t[1]),hc(n,16384),n}function Dg(n,t,e){if(n==null&&(n=Yl),Yl=void 0,n==null){var i=96;e?(n=[e],i|=512):n=[],t&&(i=-33521665&i|(1023&t)<<15)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(i=ke(n)))throw Error("farr");if(64&i)return n;if(i|=64,e&&(i|=512,e!==n[0]))throw Error("mid");t:{const r=(e=n).length;if(r){const s=r-1;if(fc(e[s])){if((t=s-(+!!(512&(i|=256))-1))>=1024)throw Error("pvtlmt");i=-33521665&i|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,r-(+!!(512&i)-1)))>1024)throw Error("spvt");i=-33521665&i|(1023&t)<<15}}}return we(n,i),n}const Zy={};let Jy=function(){try{return Mf(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class xu{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const Qy=Jy?(Object.setPrototypeOf(xu.prototype,Map.prototype),Object.defineProperties(xu.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),xu):class extends Map{constructor(){super()}};function nm(n){return n}function Mu(n){if(2&n.M)throw Error("Cannot mutate an immutable Map")}var ri=class extends Qy{constructor(n,t,e=nm,i=nm){super();let r=ke(n);r|=64,we(n,r),this.M=r,this.U=t,this.T=e,this.aa=this.U?tE:i;for(let s=0;s<n.length;s++){const a=n[s],o=e(a[0],!1,!0);let l=a[1];t?l===void 0&&(l=null):l=i(a[1],!1,!0,void 0,void 0,r),super.set(o,l)}}pa(n=im){if(this.size!==0)return this.Z(n)}Z(n=im){const t=[],e=super.entries();for(var i;!(i=e.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),t.push(i);return t}clear(){Mu(this),super.clear()}delete(n){return Mu(this),super.delete(this.T(n,!0,!1))}entries(){var n=this.oa();return new Hl(n,eE,this)}keys(){return this.Ka()}values(){var n=this.oa();return new Hl(n,ri.prototype.get,this)}forEach(n,t){super.forEach((e,i)=>{n.call(t,this.get(i),i,this)})}set(n,t){return Mu(this),(n=this.T(n,!0,!1))==null?this:t==null?(super.delete(n),this):super.set(n,this.aa(t,!0,!0,this.U,!1,this.M))}Qa(n){const t=this.T(n[0],!1,!0);n=n[1],n=this.U?n===void 0?null:n:this.aa(n,!1,!0,void 0,!1,this.M),super.set(t,n)}has(n){return super.has(this.T(n,!1,!1))}get(n){n=this.T(n,!1,!1);const t=super.get(n);if(t!==void 0){var e=this.U;return e?((e=this.aa(t,!1,!0,e,this.va,this.M))!==t&&super.set(n,e),e):t}}oa(){return Array.from(super.keys())}Ka(){return super.keys()}[Symbol.iterator](){return this.entries()}};function tE(n,t,e,i,r,s){return n=Df(n,i,e,s),r&&(n=xc(n)),n}function im(n){return n}function eE(n){return[n,this.get(n)]}let nE;function rm(){return nE||(nE=new ri(La([]),void 0,void 0,void 0,Zy))}function If(n,t,e,i,r){if(n!=null){if(Array.isArray(n))n=Vl(n)?void 0:r&&2&ke(n)?n:vc(n,t,e,i!==void 0,r);else if(fc(n)){const s={};for(let a in n)s[a]=If(n[a],t,e,i,r);n=s}else n=t(n,i);return n}}function vc(n,t,e,i,r){const s=i||e?ke(n):0;i=i?!!(32&s):void 0;const a=zn(n);for(let o=0;o<a.length;o++)a[o]=If(a[o],t,e,i,r);return e&&(yg(a,n),e(s,a)),a}function iE(n){return If(n,Uf,void 0,void 0,!1)}function Uf(n){return n.Y===Oo?n.toJSON():n instanceof ri?n.pa(iE):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return Ch(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Vl(t))return}else{if(No(t))return Yp(t);if(t instanceof or){const e=t.ba;return e==null?"":typeof e=="string"?e:t.ba=Yp(e)}if(t instanceof ri)return t.pa()}}return t}(n)}function Ph(n,t,e=Rh){if(n!=null){if(_g&&n instanceof Uint8Array)return t?n:new Uint8Array(n);if(Array.isArray(n)){var i=ke(n);return 2&i?n:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(we(n,-12293&(34|i)),n):vc(n,Ph,4&i?Rh:e,!0,!0))}return n.Y===Oo?(e=n.u,n=2&(i=ne(e))?n:Nf(n,e,i,!0)):n instanceof ri&&!(2&n.M)&&(e=La(n.Z(Ph)),n=new ri(e,n.U,n.T,n.aa)),n}}function Nf(n,t,e,i){return gc(n),n=n.constructor,Yl=t=Lg(t,e,i),t=new n(t),Yl=void 0,t}function Lg(n,t,e){const i=e||2&t?Rh:Ny,r=!!(32&t);return n=function(s,a,o){const l=zn(s);var c=l.length;const u=256&a?l[c-1]:void 0;for(c+=u?-1:0,a=512&a?1:0;a<c;a++)l[a]=o(l[a]);if(u){a=l[a]={};for(const h in u)a[h]=o(u[h])}return yg(l,s),l}(n,t,s=>Ph(s,r,i)),hc(n,32|(e?2:0)),n}function xc(n){const t=n.u,e=ne(t);return 2&e?Nf(n,t,e,!1):n}function Ig(n,t,e,i){return!(4&t)||e!=null}function Fr(n,t){return ki(n=n.u,ne(n),t)}function sm(n,t,e,i){if(!((t=i+(+!!(512&t)-1))<0||t>=n.length||t>=e))return n[t]}function ki(n,t,e,i){if(e===-1)return null;const r=t>>15&1023||536870912;if(!(e>=r)){var s=n.length;return i&&256&t&&(i=n[s-1][e])!=null?(sm(n,t,r,e)&&gu!=null&&((t=(n=Uy??(Uy={}))[gu]||0)>=4||(n[gu]=t+1,Ts())),i):sm(n,t,r,e)}return 256&t?n[n.length-1][e]:void 0}function de(n,t,e){const i=n.u;let r=ne(i);return pr(r),ye(i,r,t,e),n}function ye(n,t,e,i){const r=t>>15&1023||536870912;if(e>=r){let s,a=t;if(256&t)s=n[n.length-1];else{if(i==null)return a;s=n[r+(+!!(512&t)-1)]={},a|=256}return s[e]=i,e<r&&(n[e+(+!!(512&t)-1)]=void 0),a!==t&&we(n,a),a}return n[e+(+!!(512&t)-1)]=i,256&t&&e in(n=n[n.length-1])&&delete n[e],t}function Na(n,t,e,i,r){var s=2&t;r=ki(n,t,e,r),Array.isArray(r)||(r=Ef);const a=!(2&i);i=!(1&i);const o=!!(32&t);let l=ke(r);return l!==0||!o||s||a?1&l||(l|=1,we(r,l)):(l|=33,we(r,l)),s?(n=!1,2&l||(La(r),n=!!(4&l)),(i||n)&&Object.freeze(r)):(s=!!(2&l)||!!(2048&l),i&&s?(r=zn(r),s=1,o&&!a&&(s|=32),we(r,s),ye(n,t,e,r)):a&&32&l&&!s&&Gl(r,32)),r}function Rl(n,t){n=n.u;let e=ne(n);const i=ki(n,e,t),r=Vr(i);return r!=null&&r!==i&&ye(n,e,t,r),r}function Ug(n){n=n.u;let t=ne(n);const e=ki(n,t,1),i=Tf(e,!0,!!(34&t));return i!=null&&i!==e&&ye(n,t,1,i),i}function cs(){return Fy===void 0?2:5}function us(n,t,e,i,r,s){const a=n.u;let o=ne(a);i=2&o?1:i,s=!!s,r=Ng(a,o,t,r);var l=ke(r),c=r;if(ql(c,n),i!==2&&i!==1||So(c,n),Ig(n,l,void 0)){4&l&&(r=zn(r),l=bs(l,o),o=ye(a,o,t,r));let h=c=0;for(;c<r.length;c++){const f=e(r[c]);f!=null&&(r[h++]=f)}h<c&&(r.length=h),l=-4097&(20|(l=Fg(l,o))),we(r,l&=-8193),2&l&&Object.freeze(r)}let u;return i===1||i===4&&32&l?Qi(l)||(n=l,(l|=2)!==n&&we(r,l),Object.freeze(r)):(e=i===5&&(!!(32&l)||Qi(l)||!!pa?.get(r)),(i===2||e)&&Qi(l)&&(r=zn(r),l=ma(l=bs(l,o),o,s),we(r,l),o=ye(a,o,t,r)),Qi(l)||(t=l,(l=ma(l,o,s))!==t&&we(r,l)),e?(u=Ag(r),Lf(r,n,!0)):i!==2||s||pa?.delete(r)),u||r}function Ng(n,t,e,i){return n=ki(n,t,e,i),Array.isArray(n)?n:Ef}function Fg(n,t){return n===0&&(n=bs(n,t)),1|n}function Qi(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function Og(n){n=zn(n);for(let t=0;t<n.length;t++){const e=n[t]=zn(n[t]);Array.isArray(e[1])&&(e[1]=La(e[1]))}return n}function Dh(n,t,e,i){n=n.u;let r=ne(n);pr(r),ye(n,r,t,(i==="0"?Number(e)===0:e===i)?void 0:e)}function Su(n,t){var e=g0;return Of(Ff(n=n.u),n,ne(n),e)===t?t:-1}function Ff(n){if(Da)return n[Ya]??(n[Ya]=new Map);if(Ya in n)return n[Ya];const t=new Map;return Object.defineProperty(n,Ya,{value:t}),t}function Bg(n,t,e,i){const r=Ff(n),s=Of(r,n,t,e);return s!==i&&(s&&(t=ye(n,t,s)),r.set(e,i)),t}function Of(n,t,e,i){let r=n.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];ki(t,e,a)!=null&&(r!==0&&(e=ye(t,e,r)),r=a)}return n.set(i,r),r}function Bf(n,t,e,i){let r,s=ne(n);if((i=ki(n,s,e,i))!=null&&i.Y===Oo)return(t=xc(i))!==i&&ye(n,s,e,t),t.u;if(Array.isArray(i)){const a=ke(i);r=2&a?Lg(i,a,!1):i,r=ps(r,t)}else r=ps(void 0,t);return r!==i&&ye(n,s,e,r),r}function kg(n,t,e,i){n=n.u;let r=ne(n);return(t=Df(i=ki(n,r,e,i),t,!1,r))!==i&&t!=null&&ye(n,r,e,t),t}function $t(n,t,e,i=!1){if((t=kg(n,t,e,i))==null)return t;if(n=n.u,!(2&(i=ne(n)))){const r=xc(t);r!==t&&ye(n,i,e,t=r)}return t}function zg(n,t,e,i,r,s,a){const o=n.u;var l=!!(2&t);r=l?1:r,s=!!s,a&&(a=!l),l=Ng(o,t,i);var c=ke(l),u=l;if(ql(u,n),r!==2&&r!==1||So(u,n),!(u=!!(4&c))){var h=l,f=t;const g=!!(2&(c=Fg(c,t)));g&&(f|=2);let _=!g,m=!0,d=0,T=0;for(;d<h.length;d++){const E=Df(h[d],e,!1,f);if(E instanceof e){if(!g){const v=!!(2&ke(E.u));_&&(_=!v),m&&(m=v)}h[T++]=E}}T<d&&(h.length=T),c|=4,c=m?16|c:-17&c,we(h,c=_?8|c:-9&c),g&&Object.freeze(h)}if(a&&!(8&c||!l.length&&(r===1||r===4&&32&c))){for(Qi(c)?(l=zn(l),c=bs(c,t),t=ye(o,t,i,l)):So(l,n),e=l,a=c,h=0;h<e.length;h++)(c=e[h])!==(f=xc(c))&&(e[h]=f);a|=8,a=e.length?-17&a:16|a,we(e,a),c=a}let p;return r===1||r===4&&32&c?Qi(c)||(n=c,(c|=!l.length||16&c&&(!u||32&c)?2:2048)!==n&&we(l,c),Object.freeze(l)):(u=r===5&&(!!(32&c)||Qi(c)||!!pa?.get(l)),(r===2||u)&&Qi(c)&&(l=zn(l),c=ma(c=bs(c,t),t,s),we(l,c),t=ye(o,t,i,l)),Qi(c)||(i=c,(c=ma(c,t,s))!==i&&we(l,c)),u?(p=Ag(l),Lf(l,n,!0)):r!==2||s||pa?.delete(l)),p||l}function hr(n,t,e){const i=ne(n.u);return zg(n,i,t,e,cs(),!1,!(2&i))}function Tt(n,t,e,i){return i==null&&(i=void 0),de(n,e,i)}function lo(n,t,e,i){i==null&&(i=void 0);t:{n=n.u;let r=ne(n);if(pr(r),i==null){const s=Ff(n);if(Of(s,n,r,e)!==t)break t;s.set(e,0)}else r=Bg(n,r,e,t);ye(n,r,t,i)}}function bs(n,t){return-2049&(n=32|(2&t?2|n:-3&n))}function ma(n,t,e){return 32&t&&e||(n&=-33),n}function jl(n,t,e,i){const r=ne(n.u);pr(r),n=zg(n,r,e,t,2,!0),e=i??new e,n.push(e),2&ke(e.u)?Gl(n,8):Gl(n,16)}function vi(n,t){return n??t}function ei(n,t){return Ia(Fr(n,t))}function Fe(n,t){return vi(Rl(n,t),0)}function Ni(n,t){return vi(Lr(Fr(n,t)),"")}function yo(n,t,e){if(e!=null&&typeof e!="boolean")throw n=typeof e,Error(`Expected boolean but got ${n!="object"?n:e?Array.isArray(e)?"array":n:"null"}: ${e}`);de(n,t,e)}function Fi(n,t,e){if(e!=null){if(typeof e!="number"||!Number.isFinite(e))throw wh("int32");e|=0}de(n,t,e)}function _t(n,t,e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);de(n,t,e)}function Kl(n,t,e){{const o=n.u;let l=ne(o);if(pr(l),e==null)ye(o,l,t);else{e=wg?.get(e)||e;var i,r=ke(e),s=r,a=!!(2&r)||Object.isFrozen(e);if((i=!a)&&(i=Oy===void 0||!1),Ig(n,r)){r=21,a&&(e=zn(e),s=0,r=ma(r=bs(r,l),l,!0));for(let c=0;c<e.length;c++)e[c]=bg(e[c])}i?(e=zn(e),s=0,r=ma(r=bs(r,l),l,!0)):a||Lf(e,n),r!==s&&we(e,r),ye(o,l,t,e)}}}function Mc(n,t,e){pr(ne(n.u)),us(n,t,Lr,2,void 0,!0).push(bg(e))}function Gg(n,t){return Error(`Invalid wire type: ${n} (at position ${t})`)}function kf(){return Error("Failed to read varint, encoding is invalid.")}function Vg(n,t){return Error(`Tried to read past the end of the data ${t} > ${n}`)}function zf(n){if(typeof n=="string")return{buffer:vg(n),O:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),O:!1};if(n.constructor===Uint8Array)return{buffer:n,O:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),O:!1};if(n.constructor===or)return{buffer:Sf(n)||new Uint8Array(0),O:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Gf(n,t){let e,i=0,r=0,s=0;const a=n.h;let o=n.g;do e=a[o++],i|=(127&e)<<s,s+=7;while(s<32&&128&e);for(s>32&&(r|=(127&e)>>4),s=3;s<32&&128&e;s+=7)e=a[o++],r|=(127&e)<<s;if(ms(n,o),e<128)return t(i>>>0,r>>>0);throw kf()}function Vf(n){let t=0,e=n.g;const i=e+10,r=n.h;for(;e<i;){const s=r[e++];if(t|=s,(128&s)==0)return ms(n,e),!!(127&t)}throw kf()}function Or(n){const t=n.h;let e=n.g,i=t[e++],r=127&i;if(128&i&&(i=t[e++],r|=(127&i)<<7,128&i&&(i=t[e++],r|=(127&i)<<14,128&i&&(i=t[e++],r|=(127&i)<<21,128&i&&(i=t[e++],r|=i<<28,128&i&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw kf();return ms(n,e),r}function Br(n){return Or(n)>>>0}function Lh(n){var t=n.h;const e=n.g,i=t[e],r=t[e+1],s=t[e+2];return t=t[e+3],ms(n,n.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function Ih(n){var t=Lh(n);n=2*(t>>31)+1;const e=t>>>23&255;return t&=8388607,e==255?t?NaN:n*(1/0):e==0?1401298464324817e-60*n*t:n*Math.pow(2,e-150)*(t+8388608)}function rE(n){return Or(n)}function yu(n,t,{ea:e=!1}={}){n.ea=e,t&&(t=zf(t),n.h=t.buffer,n.m=t.O,n.j=0,n.l=n.h.length,n.g=n.j)}function ms(n,t){if(n.g=t,t>n.l)throw Vg(n.l,t)}function Hg(n,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const e=n.g,i=e+t;if(i>n.l)throw Vg(t,n.l-e);return n.g=i,e}function Wg(n,t){if(t==0)return Es();var e=Hg(n,t);return n.ea&&n.m?e=n.h.subarray(e,e+t):(n=n.h,e=e===(t=e+t)?new Uint8Array(0):Wy?n.slice(e,t):new Uint8Array(n.subarray(e,t))),e.length==0?Es():new or(e,fa)}ri.prototype.toJSON=void 0,ri.prototype.La=Sg;var am=[];function Xg(n){var t=n.g;if(t.g==t.l)return!1;n.l=n.g.g;var e=Br(n.g);if(t=e>>>3,!((e&=7)>=0&&e<=5))throw Gg(e,n.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${n.l})`);return n.m=t,n.h=e,!0}function Cl(n){switch(n.h){case 0:n.h!=0?Cl(n):Vf(n.g);break;case 1:ms(n=n.g,n.g+8);break;case 2:if(n.h!=2)Cl(n);else{var t=Br(n.g);ms(n=n.g,n.g+t)}break;case 5:ms(n=n.g,n.g+4);break;case 3:for(t=n.m;;){if(!Xg(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=t)throw Error("Unmatched end-group tag");break}Cl(n)}break;default:throw Gg(n.h,n.l)}}function Bo(n,t,e){const i=n.g.l,r=Br(n.g),s=n.g.g+r;let a=s-i;if(a<=0&&(n.g.l=s,e(t,n,void 0,void 0,void 0),a=s-n.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,t}function Hf(n){var t=Br(n.g),e=Hg(n=n.g,t);if(n=n.h,by){var i,r=n;(i=mu)||(i=mu=new TextDecoder("utf-8",{fatal:!0})),t=e+t,r=e===0&&t===r.length?r:r.subarray(e,t);try{var s=i.decode(r)}catch(o){if(dl===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),dl=!0}catch{dl=!1}}throw!dl&&(mu=void 0),o}}else{t=(s=e)+t,e=[];let o,l=null;for(;s<t;){var a=n[s++];a<128?e.push(a):a<224?s>=t?Jr():(o=n[s++],a<194||(192&o)!=128?(s--,Jr()):e.push((31&a)<<6|63&o)):a<240?s>=t-1?Jr():(o=n[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[s++]))!=128?(s--,Jr()):e.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=t-2?Jr():(o=n[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,Jr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,e.push(55296+(a>>10&1023),56320+(1023&a)))):Jr(),e.length>=8192&&(l=Wp(l,e),e.length=0)}s=Wp(l,e)}return s}function Yg(n){const t=Br(n.g);return Wg(n.g,t)}function Sc(n,t,e){var i=Br(n.g);for(i=n.g.g+i;n.g.g<i;)e.push(t(n.g))}var pl=[];let $l;function Mi(n,t,e){t.g?t.m(n,t.g,t.h,e,!0):t.m(n,t.h,e,!0)}var pt=class{constructor(n,t){this.u=Dg(n,t)}toJSON(){return qg(this)}l(){var n=XE;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.u;return Nf(this,n,ne(n),!1)}O(){return!!(2&ke(this.u))}};function qg(n){gc(n),n=$l?n.u:vc(n.u,Uf,void 0,void 0,!1);{var t=!$l;let c=n.length;if(c){var e=n[c-1],i=fc(e);i?c--:e=void 0;var r=n;if(i){t:{var s,a=e,o=!1;if(a)for(let u in a)isNaN(+u)?(s??(s={}))[u]=a[u]:(i=a[u],Array.isArray(i)&&(Vl(i)||Kp(i)&&i.size===0)&&(i=null),i==null&&(o=!0),i!=null&&((s??(s={}))[u]=i));if(o||(s=a),s)for(let u in s){o=s;break t}o=null}a=o==null?e!=null:o!==e}for(;c>0&&((s=r[c-1])==null||Vl(s)||Kp(s)&&s.size===0);c--)var l=!0;(r!==n||a||l)&&(t?(l||a||o)&&(r.length=c):r=Array.prototype.slice.call(r,0,c),o&&r.push(o)),l=r}else l=n}return l}function om(n){return n?/^\d+$/.test(n)?(mc(n),new Uh(ce,De)):null:sE||(sE=new Uh(0,0))}pt.prototype.Y=Oo,pt.prototype.toString=function(){try{return $l=!0,qg(this).toString()}finally{$l=!1}};var Uh=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let sE;function lm(n){return n?/^-?\d+$/.test(n)?(mc(n),new Nh(ce,De)):null:aE||(aE=new Nh(0,0))}var Nh=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let aE;function ea(n,t,e){for(;e>0||t>127;)n.g.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;n.g.push(t)}function ko(n,t){for(;t>127;)n.g.push(127&t|128),t>>>=7;n.g.push(t)}function yc(n,t){if(t>=0)ko(n,t);else{for(let e=0;e<9;e++)n.g.push(127&t|128),t>>=7;n.g.push(1)}}function Eo(n,t){n.g.push(t>>>0&255),n.g.push(t>>>8&255),n.g.push(t>>>16&255),n.g.push(t>>>24&255)}function _a(n,t){t.length!==0&&(n.l.push(t),n.h+=t.length)}function ai(n,t,e){ko(n.g,8*t+e)}function Wf(n,t){return ai(n,t,2),t=n.g.end(),_a(n,t),t.push(n.h),t}function Xf(n,t){var e=t.pop();for(e=n.h+n.g.length()-e;e>127;)t.push(127&e|128),e>>>=7,n.h++;t.push(e),n.h++}function Ec(n,t,e){ai(n,t,2),ko(n.g,e.length),_a(n,n.g.end()),_a(n,e)}function Fh(n,t,e,i){e!=null&&(t=Wf(n,t),i(e,n),Xf(n,t))}class Fa{constructor(t,e,i){this.g=t,this.h=e,this.qa=i}}function jg(n){return Array.isArray(n)?n[0]instanceof Fa?n:[_E,n]:[n,void 0]}function Oa(n,t){if(Array.isArray(t)){var e=ke(t);if(4&e)return t;for(var i=0,r=0;i<t.length;i++){const s=n(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),we(t,-12289&(5|e)),2&e&&Object.freeze(t),t}}const cm=Symbol();function Yf(n){let t=n[cm];if(!t){const e=qf(n),i=e.h;t=i?(r,s)=>i(r,s,e):(r,s)=>{for(;Xg(s)&&s.h!=4;){var a=s.m;let c=e[a];const u=!c;let h=!1;if(!c){var o=e.X;if(o){var l=o[a];l&&(h=o.P?.[a],(!dg||h)&&(o=oE(l))&&(c=e[a]=o))}}c&&c(s,r,a)||(a=(o=s).l,Cl(o),o.ja?o=void 0:(l=o.g.g-a,o.g.g=a,o=Wg(o.g,l)),a=r,o&&(Dr||(Dr=Symbol()),(l=a[Dr])?l.push(o):a[Dr]=[o])),u&&c&&!h&&Oh++<5&&Ts()}},n[cm]=t}return t}function oE(n){const t=(n=jg(n))[0].g;if(n=n[1]){const e=Yf(n),i=qf(n).g;return(r,s,a)=>t(r,s,a,i,e)}return t}function lE(n,t,e){n[t]=e}function Kg(n,t,e,i){var r=lE;t.g=function(h){switch(typeof h){case"boolean":return Ky||(Ky=[0,void 0,!0]);case"number":return h>0?void 0:h===0?$y||($y=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}}(n[0]);let s=0;var a=n[++s];a&&a.constructor===Object&&(t.X=a,typeof(a=n[++s])=="function"&&(t.h=a,t.l=n[++s],a=n[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&a[0]>0;){for(var l=0;l<a.length;l++)o[a[l]]=a;a=n[++s]}for(l=1;a!==void 0;){let h;typeof a=="number"&&(l+=a,a=n[++s]);var c=void 0;if(a instanceof Fa?h=a:(h=gE,s--),h.qa){a=n[++s],c=n;var u=s;typeof a=="function"&&(a=a(),c[u]=a),c=a}for(u=l+1,typeof(a=n[++s])=="number"&&a<0&&(u-=a,a=n[++s]);l<u;l++){const f=o[l];r(t,l,c?i(h,c,f):e(h,f))}}return t}const um=Symbol();function $g(n){let t=n[um];if(!t){const e=Tc(n);t=(i,r)=>Zg(i,r,e),n[um]=t}return t}const hm=Symbol();function cE(n){return n.h}function uE(n,t){let e,i;const r=n.h;return(s,a,o)=>r(s,a,o,i||(i=Tc(t).g),e||(e=$g(t)))}function Tc(n){let t=n[hm];return t||(t=Kg(n,n[hm]={},cE,uE))}const fm=Symbol();function hE(n,t){const e=n.g;return t?(i,r,s)=>e(i,r,s,t):e}function fE(n,t,e){const i=n.g;let r,s;return(a,o,l)=>i(a,o,l,s||(s=qf(t).g),r||(r=Yf(t)),e)}function qf(n){let t=n[fm];return t||(t=Kg(n,n[fm]={},hE,fE))}function dm(n,t){var e=n[t];if(e)return e;if(e=n.X){var i=e[t];if(i){var r=(i=jg(i))[0].h;if(i=i[1],e=e.P?.[t],!dg||e){if(i){const s=$g(i),a=Tc(i).g;e=(e=n.l)?e(a,s):(o,l,c)=>r(o,l,c,a,s)}else e=r;return n[t]=e}}}}function Zg(n,t,e){for(var i=ne(n),r=+!!(512&i)-1,s=n.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const l=n[a];if(l==null)continue;const c=a-r,u=dm(e,c);if(!u)continue;const h=e.X;h?.[c]&&!h?.P?.[c]&&Oh++<5&&Ts(),u(t,l,c)}if(256&i){i=n[s-1];for(let l in i)r=+l,!Number.isNaN(r)&&(s=i[l])!=null&&(o=dm(e,r))&&((a=e.X)?.[r]&&!a?.P?.[r]&&Oh++<5&&Ts(),o(t,s,r))}if(n=Dr?n[Dr]:void 0)for(_a(t,t.g.end()),e=0;e<n.length;e++)_a(t,Sf(n[e])||new Uint8Array(0))}function wn(n,t){return new Fa(n,t,!1)}function Ba(n,t){return new Fa(n,t,!1)}function bc(n,t){return new Fa(n,t,!0)}function Rn(n,t,e){ye(n,ne(n),t,e)}var dE=bc(function(n,t,e,i,r){return n.h===2&&(n=Bo(n,ps([void 0,void 0],i),r),pr(i=ne(t)),(r=ki(t,i,e))instanceof ri?2&r.M?((r=r.Z()).push(n),ye(t,i,e,r)):r.Qa(n):Array.isArray(r)?(2&ke(r)&&ye(t,i,e,r=Og(r)),r.push(n)):ye(t,i,e,[n]),!0)},function(n,t,e,i,r){if(t instanceof ri)t.forEach((s,a)=>{Fh(n,e,ps([a,s],i),r)});else if(Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&Fh(n,e,ps(a,i),r)}});let Oh=0;function Jg(n,t,e){if(t=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(BigInt.asIntN(64,i));if(_c(i)){if(r==="string")return Pf(i);if(r==="number")return Cf(i)}}(t),t!=null&&(typeof t=="string"&&lm(t),t!=null))switch(ai(n,e,0),typeof t){case"number":n=n.g,da(t),ea(n,ce,De);break;case"bigint":e=BigInt.asUintN(64,t),e=new Nh(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),ea(n.g,e.h,e.g);break;default:e=lm(t),ea(n.g,e.h,e.g)}}function Qg(n,t,e){(t=Ia(t))!=null&&t!=null&&(ai(n,e,0),yc(n.g,t))}function t0(n,t,e){(t=Tg(t))!=null&&(ai(n,e,0),n.g.g.push(t?1:0))}function e0(n,t,e){(t=Lr(t))!=null&&Ec(n,e,hg(t))}function Ac(n,t,e,i,r){t instanceof pt?(gc(t),t=t.u):t=Array.isArray(t)?ps(t,i):void 0,Fh(n,e,t,r)}function n0(n,t,e){(t=t==null||typeof t=="string"||No(t)||t instanceof or?t:void 0)!=null&&Ec(n,e,zf(t).buffer)}function i0(n,t,e){return(n.h===5||n.h===2)&&(t=Na(t,ne(t),e,2,!1),n.h==2?Sc(n,Ih,t):t.push(Ih(n.g)),!0)}var Ve,$i=wn(function(n,t,e){if(n.h!==1)return!1;var i=n.g;n=Lh(i);const r=Lh(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,Rn(t,e,s==2047?n?NaN:i*(1/0):s==0?5e-324*i*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,t,e){(t=Vr(t))!=null&&(ai(n,e,1),n=n.g,(e=Eg||(Eg=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),ce=e.getUint32(0,!0),De=e.getUint32(4,!0),Eo(n,ce),Eo(n,De))}),Xe=wn(function(n,t,e){return n.h===5&&(Rn(t,e,Ih(n.g)),!0)},function(n,t,e){(t=Vr(t))!=null&&(ai(n,e,5),n=n.g,bf(t),Eo(n,ce))}),pE=Ba(i0,function(n,t,e){if((t=Oa(Vr,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(ai(i,r,5),i=i.g,bf(s),Eo(i,ce))}}),jf=Ba(i0,function(n,t,e){if((t=Oa(Vr,t))!=null&&t.length){ai(n,e,2),ko(n.g,4*t.length);for(let i=0;i<t.length;i++)e=n.g,bf(t[i]),Eo(e,ce)}}),kr=wn(function(n,t,e){return n.h===0&&(Rn(t,e,Gf(n.g,wf)),!0)},Jg),Eu=wn(function(n,t,e){return n.h===0&&(Rn(t,e,(n=Gf(n.g,wf))===0?void 0:n),!0)},Jg),mE=wn(function(n,t,e){return n.h===0&&(Rn(t,e,Gf(n.g,Af)),!0)},function(n,t,e){if((t=qy(t))!=null&&(typeof t=="string"&&om(t),t!=null))switch(ai(n,e,0),typeof t){case"number":n=n.g,da(t),ea(n,ce,De);break;case"bigint":e=BigInt.asUintN(64,t),e=new Uh(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),ea(n.g,e.h,e.g);break;default:e=om(t),ea(n.g,e.h,e.g)}}),Le=wn(function(n,t,e){return n.h===0&&(Rn(t,e,Or(n.g)),!0)},Qg),wc=Ba(function(n,t,e){return(n.h===0||n.h===2)&&(t=Na(t,ne(t),e,2,!1),n.h==2?Sc(n,Or,t):t.push(Or(n.g)),!0)},function(n,t,e){if((t=Oa(Ia,t))!=null&&t.length){e=Wf(n,e);for(let i=0;i<t.length;i++)yc(n.g,t[i]);Xf(n,e)}}),Ks=wn(function(n,t,e){return n.h===0&&(Rn(t,e,(n=Or(n.g))===0?void 0:n),!0)},Qg),Ae=wn(function(n,t,e){return n.h===0&&(Rn(t,e,Vf(n.g)),!0)},t0),co=wn(function(n,t,e){return n.h===0&&(Rn(t,e,(n=Vf(n.g))===!1?void 0:n),!0)},t0),nn=Ba(function(n,t,e){if(n.h!==2)return!1;n=Hf(n);const i=ne(t);return pr(i),Na(t,i,e,2).push(n),!0},function(n,t,e){if((t=Oa(Lr,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&Ec(i,r,hg(s))}}),Ar=wn(function(n,t,e){return n.h===2&&(Rn(t,e,(n=Hf(n))===""?void 0:n),!0)},e0),se=wn(function(n,t,e){return n.h===2&&(Rn(t,e,Hf(n)),!0)},e0),_E=bc(function(n,t,e,i,r){return n.h===2&&(Bo(n,Bf(t,i,e,!0),r),!0)},Ac),gE=bc(function(n,t,e,i,r){return n.h===2&&(Bo(n,Bf(t,i,e),r),!0)},Ac);Ve=new Fa(function(n,t,e,i,r){if(n.h!==2)return!1;i=ps(void 0,i);let s=ne(t);pr(s);let a=Na(t,s,e,3);return s=ne(t),4&ke(a)&&(a=zn(a),we(a,-2079&(1|ke(a))),ye(t,s,e,a)),a.push(i),Bo(n,i,r),!0},function(n,t,e,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)Ac(n,t[s],e,i,r)},!0);var ae=bc(function(n,t,e,i,r,s){return n.h===2&&(Bg(t,ne(t),s,e),Bo(n,t=Bf(t,i,e),r),!0)},Ac),r0=wn(function(n,t,e){return n.h===2&&(Rn(t,e,Yg(n)),!0)},n0),vE=Ba(function(n,t,e){return(n.h===0||n.h===2)&&(t=Na(t,ne(t),e,2,!1),n.h==2?Sc(n,Br,t):t.push(Br(n.g)),!0)},function(n,t,e){if((t=Oa(Yy,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(ai(i,r,0),ko(i.g,s))}}),xi=wn(function(n,t,e){return n.h===0&&(Rn(t,e,Or(n.g)),!0)},function(n,t,e){(t=Ia(t))!=null&&(t=parseInt(t,10),ai(n,e,0),yc(n.g,t))});class xE{constructor(t,e){this.h=t,this.g=e,this.l=$t,this.m=Tt,this.defaultValue=void 0}}function Si(n,t){return new xE(n,t)}function Hr(n,t){return(e,i)=>{if(pl.length){const s=pl.pop();s.o(i),yu(s.g,e,i),e=s}else e=new class{constructor(s,a){if(am.length){const o=am.pop();yu(o,s,a),s=o}else s=new class{constructor(o,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,yu(this,o,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ea=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ja:s=!1}={}){this.ja=s}}(e,i);try{const s=new n,a=s.u;Yf(t)(a,e);var r=s}finally{e.g.clear(),e.m=-1,e.h=-1,pl.length<100&&pl.push(e)}return r}}function Rc(n){return function(){gc(this);const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Zg(this.u,t,Tc(n)),_a(t,t.g.end());const e=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];e.set(o,s),s+=o.length}return t.l=[e],e}}var pm=class extends pt{constructor(n){super(n)}},mm=[0,Ar,wn(function(n,t,e){return n.h===2&&(Rn(t,e,(n=Yg(n))===Es()?void 0:n),!0)},function(n,t,e){if(t!=null){if(t instanceof pt){const i=t.Ta;return void(i&&(t=i(t),t!=null&&Ec(n,e,zf(t).buffer)))}if(Array.isArray(t))return}n0(n,t,e)})],s0=[0,Le,xi,Ae,-1,wc,xi,-1],ME=class extends pt{constructor(){super()}},a0=[0,Ae,se,Ae,xi,-1,Ba(function(n,t,e){return(n.h===0||n.h===2)&&(t=Na(t,ne(t),e,2,!1),n.h==2?Sc(n,rE,t):t.push(Or(n.g)),!0)},function(n,t,e){if((t=Oa(Ia,t))!=null&&t.length){e=Wf(n,e);for(let i=0;i<t.length;i++)yc(n.g,t[i]);Xf(n,e)}}),se,-1,[0,Ae,-1],xi,Ae,-1],o0=[0,se,-2],_m=class extends pt{constructor(){super()}},l0=[0],c0=[0,Le,Ae,1,Ae,-3],SE=[0,se,Ae,-1,Le,[0,[1,2,3,4,5,6,7],ae,l0,ae,a0,ae,o0,ae,c0,ae,s0,ae,[0,se,-2],ae,[0,se,xi]],[0,se],Ae,[0,[1,3],[2,4],ae,[0,wc],-1,ae,[0,nn],-1,Ve,[0,se,-1]],se],Gn=class extends pt{constructor(n){super(n,2)}},ve={},We=ve.P={};ve[336783863]=SE,We[336783863]=1;var gm=[0,Eu,-1,co,-3,Eu,wc,Ar,Ks,Eu,-1,co,Ks,co,-2,Ar];function Hn(n,t){Dh(n,2,Ua(t),"")}function pe(n,t){Mc(n,3,t)}function Gt(n,t){Mc(n,4,t)}var pn=class extends pt{constructor(n){super(n,500)}o(n){return Tt(this,0,7,n)}},uo=[-1,{P:{}}],vm=[0,se,1,uo],xm=[0,se,nn,uo];function Wn(n,t){jl(n,1,pn,t)}function xe(n,t){Mc(n,10,t)}function Jt(n,t){Mc(n,15,t)}var Cn=class extends pt{constructor(n){super(n,500)}o(n){return Tt(this,0,1001,n)}},u0=[-500,Ve,[-500,Ar,-1,nn,-3,[-2,ve,Ae],Ve,mm,Ks,-1,vm,xm,Ve,[0,Ar,co],Ar,gm,Ks,nn,987,nn],4,Ve,[-500,se,-1,[-1,{P:{}}],998,se],Ve,[-500,se,nn,-1,[-2,{P:{}},Ae],997,nn,-1],Ks,Ve,[-500,se,nn,uo,998,nn],nn,Ks,vm,xm,Ve,[0,Ar,-1,uo],nn,-2,gm,Ar,-1,co,979,uo,Ve,mm];Cn.prototype.g=Rc(u0);var yE=Hr(Cn,u0),EE=class extends pt{constructor(n){super(n)}},h0=class extends pt{constructor(n){super(n)}g(){return hr(this,EE,1)}},f0=[0,Ve,[0,Le,Xe,se,-1]],Cc=Hr(h0,f0),TE=class extends pt{constructor(n){super(n)}},bE=class extends pt{constructor(n){super(n)}},Tu=class extends pt{constructor(n){super(n)}h(){return $t(this,TE,2)}g(){return hr(this,bE,5)}},d0=Hr(class extends pt{constructor(n){super(n)}},[0,nn,wc,jf,[0,xi,[0,Le,-3],[0,Xe,-3],[0,Le,-1,[0,Ve,[0,Le,-2]]],Ve,[0,Xe,-1,se,Xe]],se,-1,kr,Ve,[0,Le,Xe],nn,kr]),p0=class extends pt{constructor(n){super(n)}},na=Hr(class extends pt{constructor(n){super(n)}},[0,Ve,[0,Xe,-4]]),m0=class extends pt{constructor(n){super(n)}},zo=Hr(class extends pt{constructor(n){super(n)}},[0,Ve,[0,Xe,-4]]),AE=class extends pt{constructor(n){super(n)}},wE=[0,Le,-1,jf,xi],_0=class extends pt{constructor(){super()}};_0.prototype.g=Rc([0,Xe,-4,kr]);var RE=class extends pt{constructor(n){super(n)}},CE=Hr(class extends pt{constructor(n){super(n)}},[0,Ve,[0,1,Le,se,f0],kr]),Mm=class extends pt{constructor(n){super(n)}},PE=class extends pt{constructor(n){super(n)}ra(){const n=Ug(this);return n??Es()}},DE=class extends pt{constructor(n){super(n)}},g0=[1,2],LE=Hr(class extends pt{constructor(n){super(n)}},[0,Ve,[0,g0,ae,[0,jf],ae,[0,r0],Le,se],kr]),Kf=class extends pt{constructor(n){super(n)}},v0=[0,se,Le,Xe,nn,-1],Sm=class extends pt{constructor(n){super(n)}},IE=[0,Ae,-1],ym=class extends pt{constructor(n){super(n)}},Pl=[1,2,3,4,5],Zl=class extends pt{constructor(n){super(n)}g(){return Ug(this)!=null}h(){return Lr(Fr(this,2))!=null}},Ee=class extends pt{constructor(n){super(n)}g(){return Tg(Fr(this,2))??!1}},x0=[0,r0,se,[0,Le,kr,-1],[0,mE,kr]],ze=[0,x0,Ae,[0,Pl,ae,c0,ae,a0,ae,s0,ae,l0,ae,o0],xi],Pc=class extends pt{constructor(n){super(n)}},$f=[0,ze,Xe,-1,Le],UE=Si(502141897,Pc);ve[502141897]=$f,We[502141897]=1;var M0=[0,x0];ve[512499200]=M0;var S0=[0,M0];ve[515723506]=S0;var NE=Hr(class extends pt{constructor(n){super(n)}},[0,[0,xi,-1,pE,vE],wE]),y0=[0,ze];ve[508981768]=y0;var E0=class extends pt{constructor(n){super(n)}},T0=class extends pt{constructor(n){super(n)}},Zf=[0,ze,Xe,y0,Ae],b0=[0,ze,$f,Zf,Xe,S0];ve[508968149]=Zf;var FE=Si(508968150,T0);ve[508968150]=b0,We[508968150]=1,We[508968149]=1;var A0=class extends pt{constructor(n){super(n)}},OE=Si(513916220,A0);ve[513916220]=[0,ze,b0,Le],We[513916220]=1;var Ws=class extends pt{constructor(n){super(n)}h(){return $t(this,Kf,2)}g(){de(this,2)}},w0=[0,ze,v0];ve[478825465]=w0,We[478825465]=1;var R0=[0,ze];ve[478825422]=R0;var BE=class extends pt{constructor(n){super(n)}},C0=class extends pt{constructor(n){super(n)}},Jf=class extends pt{constructor(n){super(n)}},Qf=class extends pt{constructor(n){super(n)}},P0=class extends pt{constructor(n){super(n)}},D0=[0,ze,R0,w0,-1],L0=[0,ze,Xe,Le],td=[0,ze,Xe],I0=[0,ze,L0,td,Xe],kE=[0,ze,I0,D0];ve[463370452]=D0,ve[464864288]=L0,ve[474472470]=td;var zE=Si(462713202,Qf);ve[462713202]=I0;var GE=Si(479097054,P0);ve[479097054]=kE,We[479097054]=1,We[463370452]=1,We[464864288]=1,We[462713202]=1,We[474472470]=1;var VE=class extends pt{constructor(n){super(n)}},U0=class extends pt{constructor(n){super(n)}},N0=class extends pt{constructor(n){super(n)}},F0=class extends pt{constructor(){super()}},Bh=[0,ze,Xe,-1,Le],kh=[0,ze,Xe,Ae];F0.prototype.g=Rc([0,ze,td,[0,ze],$f,Zf,Bh,kh]),ve[514774813]=Bh,ve[518928384]=kh;var O0=class extends pt{constructor(n){super(n)}},HE=Si(456383383,O0);ve[456383383]=[0,ze,v0],We[456383383]=1;var B0=class extends pt{constructor(n){super(n)}},WE=Si(476348187,B0);ve[476348187]=[0,ze,IE],We[476348187]=1;var k0=class extends pt{constructor(n){super(n)}},Em=class extends pt{constructor(n){super(n)}},z0=[0,xi,-1],XE=Si(458105876,class extends pt{constructor(n){super(n)}g(){var n=this.u;const t=ne(n),e=2&t;return n=function(i,r,s){var a=Em;const o=2&r;let l=!1;if(s==null){if(o)return rm();s=[]}else if(s.constructor===ri){if(!(2&s.M)||o)return s;s=s.Z()}else Array.isArray(s)?l=!!(2&ke(s)):s=[];if(o){if(!s.length)return rm();l||(l=!0,La(s))}else l&&(l=!1,s=Og(s));return l||(64&ke(s)?Gl(s,32):32&r&&hc(s,32)),ye(i,r,2,a=new ri(s,a,jy,void 0)),a}(n,t,ki(n,t,2)),!e&&Em&&(n.va=!0),n}});ve[458105876]=[0,z0,dE,[!0,kr,[0,se,-1,nn]]],We[458105876]=1;var ed=class extends pt{constructor(n){super(n)}},G0=Si(458105758,ed);ve[458105758]=[0,ze,se,z0],We[458105758]=1;var V0=class extends pt{constructor(n){super(n)}},YE=Si(443442058,V0);ve[443442058]=[0,ze,se,Le,Xe,nn,-1],We[443442058]=1,We[514774813]=1;var H0=class extends pt{constructor(n){super(n)}},qE=Si(516587230,H0);function zh(n,t){return t=t?t.clone():new Kf,n.displayNamesLocale!==void 0?de(t,1,Ua(n.displayNamesLocale)):n.displayNamesLocale===void 0&&de(t,1),n.maxResults!==void 0?Fi(t,2,n.maxResults):"maxResults"in n&&de(t,2),n.scoreThreshold!==void 0?_t(t,3,n.scoreThreshold):"scoreThreshold"in n&&de(t,3),n.categoryAllowlist!==void 0?Kl(t,4,n.categoryAllowlist):"categoryAllowlist"in n&&de(t,4),n.categoryDenylist!==void 0?Kl(t,5,n.categoryDenylist):"categoryDenylist"in n&&de(t,5),t}function nd(n,t=-1,e=""){return{categories:n.map(i=>({index:vi(ei(i,1),0)??-1,score:Fe(i,2)??0,categoryName:Ni(i,3)??"",displayName:Ni(i,4)??""})),headIndex:t,headName:e}}function W0(n){var t=us(n,3,Vr,cs()),e=us(n,2,Ia,cs()),i=us(n,1,Lr,cs()),r=us(n,9,Lr,cs());const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:e[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=$t(n,Tu,4)?.h())&&(s.boundingBox={originX:ei(t,1)??0,originY:ei(t,2)??0,width:ei(t,3)??0,height:ei(t,4)??0,angle:0}),$t(n,Tu,4)?.g().length)for(const a of $t(n,Tu,4).g())s.keypoints.push({x:Rl(a,1)??0,y:Rl(a,2)??0,score:Rl(a,4)??0,label:Lr(Fr(a,3))??""});return s}function Dc(n){const t=[];for(const e of hr(n,m0,1))t.push({x:Fe(e,1)??0,y:Fe(e,2)??0,z:Fe(e,3)??0,visibility:Fe(e,4)??0});return t}function ho(n){const t=[];for(const e of hr(n,p0,1))t.push({x:Fe(e,1)??0,y:Fe(e,2)??0,z:Fe(e,3)??0,visibility:Fe(e,4)??0});return t}function Tm(n){return Array.from(n,t=>t>127?t-256:t)}function bm(n,t){if(n.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${t.length}).`);let e=0,i=0,r=0;for(let s=0;s<n.length;s++)e+=n[s]*t[s],i+=n[s]*n[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(i*r)}let ml;ve[516587230]=[0,ze,Bh,kh,Xe],We[516587230]=1,We[518928384]=1;const jE=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function X0(){if(ml===void 0)try{await WebAssembly.instantiate(jE),ml=!0}catch{ml=!1}return ml}async function ja(n,t=""){const e=await X0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${n}_${e}.js`,wasmBinaryPath:`${t}/${n}_${e}.wasm`}}var is=class{};function Y0(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function Am(n){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=n.toString(),t.crossOrigin="anonymous",new Promise((e,i)=>{t.addEventListener("load",()=>{e()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}importScripts(n.toString())}function q0(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function St(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=n.i.stringToNewUTF8(t)),n.i._free(t)}function wm(n,t,e){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(e?n.i._bindTextureToStream(e):n.i._bindTextureToCanvas(),!(e=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=q0(t);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function Rm(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=n.i.stringToNewUTF8(t[r]);t=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,t>>2),e(t);for(const r of i)n.i._free(r);n.i._free(t)}function Ti(n,t,e){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=e}function Er(n,t,e){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=(r,s,a)=>{s?(e(i,a),i=[]):i.push(r)}}is.forVisionTasks=function(n){return ja("vision",n)},is.forTextTasks=function(n){return ja("text",n)},is.forGenAiExperimentalTasks=function(n){return ja("genai_experimental",n)},is.forGenAiTasks=function(n){return ja("genai",n)},is.forAudioTasks=function(n){return ja("audio",n)},is.isSimdSupported=function(){return X0()};async function KE(n,t,e,i){return n=await(async(r,s,a,o,l)=>{if(s&&await Am(s),!self.ModuleFactory||a&&(await Am(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(n,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&r.endsWith(".data")?e.assetBinaryPath.toString():r}),await n.o(i),n}function bu(n,t){const e=$t(n.baseOptions,Zl,1)||new Zl;typeof t=="string"?(de(e,2,Ua(t)),de(e,1)):t instanceof Uint8Array&&(de(e,1,Tf(t,!1,!1)),de(e,2)),Tt(n.baseOptions,0,1,e)}function Cm(n){try{const t=n.H.length;if(t===1)throw Error(n.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+n.H.map(e=>e.message).join(", "))}finally{n.H=[]}}function ut(n,t){n.B=Math.max(n.B,t)}function Lc(n,t){n.A=new pn,Hn(n.A,"PassThroughCalculator"),pe(n.A,"free_memory"),Gt(n.A,"free_memory_unused_out"),xe(t,"free_memory"),Wn(t,n.A)}function ga(n,t){pe(n.A,t),Gt(n.A,t+"_unused_out")}function Ic(n){n.g.addBoolToStream(!0,"free_memory",n.B)}var Dl=class{constructor(n){this.g=n,this.H=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(n,t=!0){if(t){const e=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!($t(this.baseOptions,Zl,1)?.g()||$t(this.baseOptions,Zl,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,r){let s=$t(i.baseOptions,ym,3);if(!s){var a=s=new ym,o=new _m;lo(a,4,Pl,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new ME,lo(r,2,Pl,a)):(r=s,a=new _m,lo(r,4,Pl,a))),Tt(i.baseOptions,0,3,s)}(this,e),e.modelAssetPath)return fetch(e.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${e.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),bu(this,"/model.dat"),this.m(),this.J()});if(e.modelAssetBuffer instanceof Uint8Array)bu(this,e.modelAssetBuffer);else if(e.modelAssetBuffer)return async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i}(e.modelAssetBuffer).then(i=>{bu(this,i),this.m(),this.J()})}return this.m(),this.J(),Promise.resolve()}J(){}ga(){let n;if(this.g.ga(t=>{n=yE(t)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,t){this.g.attachErrorListener((e,i)=>{this.H.push(Error(i))}),this.g.Oa(),this.g.setGraph(n,t),this.A=void 0,Cm(this)}finishProcessing(){this.g.finishProcessing(),Cm(this)}close(){this.A=void 0,this.g.closeGraph()}};function lr(n,t){if(!n)throw Error(`Unable to obtain required WebGL resource: ${t}`);return n}Dl.prototype.close=Dl.prototype.close,function(n,t){n=n.split(".");var e,i=ys;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(e=n.shift());)n.length||t===void 0?i=i[e]&&i[e]!==Object.prototype[e]?i[e]:i[e]={}:i[e]=t}("TaskRunner",Dl);class $E{constructor(t,e,i,r){this.g=t,this.h=e,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Pm(n,t,e){const i=n.g;if(e=lr(i.createShader(e),"Failed to create WebGL shader"),i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(e)}`);return i.attachShader(n.h,e),e}function Dm(n,t){const e=n.g,i=lr(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(i);const r=lr(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(n.R),e.vertexAttribPointer(n.R,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);const s=lr(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(n.J),e.vertexAttribPointer(n.J,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new $E(e,i,r,s)}function id(n,t){if(n.g){if(t!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=t}function rd(n,t,e,i){return id(n,t),n.h||(n.m(),n.C()),e?(n.s||(n.s=Dm(n,!0)),e=n.s):(n.v||(n.v=Dm(n,!1)),e=n.v),t.useProgram(n.h),e.bind(),n.l(),n=i(),e.g.bindVertexArray(null),n}function Uc(n,t,e){return id(n,t),n=lr(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),n}function Nc(n,t,e){id(n,t),n.A||(n.A=lr(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,n.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function sd(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var ad=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=lr(n.createProgram(),"Failed to create WebGL program"),this.da=Pm(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.ca=Pm(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.R=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.da),n.deleteShader(this.ca)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function tr(n,t){switch(t){case 0:return n.g.find(e=>e instanceof Uint8Array);case 1:return n.g.find(e=>e instanceof Float32Array);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Gh(n){var t=tr(n,1);if(!t){if(t=tr(n,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(n.width*n.height);const i=va(n);var e=od(n);if(Nc(e,i,j0(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){e=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,e);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=e[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,t)}n.g.push(t)}return t}function j0(n){let t=tr(n,2);if(!t){const e=va(n);t=$0(n);const i=Gh(n),r=K0(n);e.texImage2D(e.TEXTURE_2D,0,r,n.width,n.height,0,e.RED,e.FLOAT,i),Vh(n)}return t}function va(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=lr(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function K0(n){if(n=va(n),!_l)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))_l=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");_l=n.R16F}return _l}function od(n){return n.l||(n.l=new ad),n.l}function $0(n){const t=va(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=tr(n,2);return e||(e=Uc(od(n),t,n.m?t.LINEAR:t.NEAREST),n.g.push(e),n.j=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Vh(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var _l,Ke=class{constructor(n,t,e,i,r,s,a){this.g=n,this.m=t,this.j=e,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Lm===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ja(){return!!tr(this,0)}ma(){return!!tr(this,1)}S(){return!!tr(this,2)}la(){return(t=tr(n=this,0))||(t=Gh(n),t=new Uint8Array(t.map(e=>255*e)),n.g.push(t)),t;var n,t}ka(){return Gh(this)}N(){return j0(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=va(this),r=od(this);i.activeTexture(i.TEXTURE1),e=Uc(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,e);const s=K0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Nc(r,i,e),rd(r,i,!1,()=>{$0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Vh(this)}),sd(r),Vh(this)}}n.push(e)}return new Ke(n,this.m,this.S(),this.canvas,this.l,this.width,this.height)}close(){this.j&&va(this).deleteTexture(tr(this,2)),Lm=-1}};Ke.prototype.close=Ke.prototype.close,Ke.prototype.clone=Ke.prototype.clone,Ke.prototype.getAsWebGLTexture=Ke.prototype.N,Ke.prototype.getAsFloat32Array=Ke.prototype.ka,Ke.prototype.getAsUint8Array=Ke.prototype.la,Ke.prototype.hasWebGLTexture=Ke.prototype.S,Ke.prototype.hasFloat32Array=Ke.prototype.ma,Ke.prototype.hasUint8Array=Ke.prototype.Ja;var Lm=250;function Ci(n,t){switch(t){case 0:return n.g.find(e=>e instanceof ImageData);case 1:return n.g.find(e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Z0(n){var t=Ci(n,0);if(!t){t=xa(n);const e=Fc(n),i=new Uint8Array(n.width*n.height*4);Nc(e,t,Ll(n)),t.readPixels(0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,i),sd(e),t=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(t)}return t}function Ll(n){let t=Ci(n,2);if(!t){const e=xa(n);t=Il(n);const i=Ci(n,1)||Z0(n);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),no(n)}return t}function xa(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=lr(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Fc(n){return n.l||(n.l=new ad),n.l}function Il(n){const t=xa(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Ci(n,2);return e||(e=Uc(Fc(n),t),n.g.push(e),n.m=!0),t.bindTexture(t.TEXTURE_2D,e),e}function no(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function Im(n){const t=xa(n);return rd(Fc(n),t,!0,()=>function(e,i){const r=e.canvas;if(r.width===e.width&&r.height===e.height)return i();const s=r.width,a=r.height;return r.width=e.width,r.height=e.height,e=i(),r.width=s,r.height=a,e}(n,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}var $e=class{constructor(n,t,e,i,r,s,a){this.g=n,this.j=t,this.m=e,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Um===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ia(){return!!Ci(this,0)}na(){return!!Ci(this,1)}S(){return!!Ci(this,2)}Ga(){return Z0(this)}Fa(){var n=Ci(this,1);return n||(Ll(this),Il(this),n=Im(this),no(this),this.g.push(n),this.j=!0),n}N(){return Ll(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=xa(this),r=Fc(this);i.activeTexture(i.TEXTURE1),e=Uc(r,i),i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Nc(r,i,e),rd(r,i,!1,()=>{Il(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),no(this)}),sd(r),no(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Ll(this),Il(this),e=Im(this),no(this)}n.push(e)}return new $e(n,this.na(),this.S(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ci(this,1).close(),this.m&&xa(this).deleteTexture(Ci(this,2)),Um=-1}};$e.prototype.close=$e.prototype.close,$e.prototype.clone=$e.prototype.clone,$e.prototype.getAsWebGLTexture=$e.prototype.N,$e.prototype.getAsImageBitmap=$e.prototype.Fa,$e.prototype.getAsImageData=$e.prototype.Ga,$e.prototype.hasWebGLTexture=$e.prototype.S,$e.prototype.hasImageBitmap=$e.prototype.na,$e.prototype.hasImageData=$e.prototype.Ia;var Um=250;function yi(...n){return n.map(([t,e])=>({start:t,end:e}))}const ZE=function(n){return class extends n{Oa(){this.i._registerModelResourcesGraphService()}}}((Nm=class{constructor(n,t){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Y0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const t=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(t),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,t){const e=n.length,i=this.i._malloc(e);this.i.HEAPU8.set(n,i),t?this.i._changeBinaryGraph(e,i):this.i._changeTextGraph(e,i),this.i._free(i)}configureAudio(n,t,e,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),St(this,i||"input_audio",s=>{St(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,n,t,e)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ga(n){Ti(this,"__graph_config__",t=>{n(t)}),St(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=t}addAudioToStream(n,t,e){this.addAudioToStreamWithShape(n,0,0,t,e)}addAudioToStreamWithShape(n,t,e,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),St(this,i,a=>{this.i._addAudioToInputStream(this.g,t,e,a,r)})}addGpuBufferToStream(n,t,e){St(this,t,i=>{const[r,s]=wm(this,n,i);this.i._addBoundTextureToStream(i,r,s,e)})}addBoolToStream(n,t,e){St(this,t,i=>{this.i._addBoolToInputStream(n,i,e)})}addDoubleToStream(n,t,e){St(this,t,i=>{this.i._addDoubleToInputStream(n,i,e)})}addFloatToStream(n,t,e){St(this,t,i=>{this.i._addFloatToInputStream(n,i,e)})}addIntToStream(n,t,e){St(this,t,i=>{this.i._addIntToInputStream(n,i,e)})}addUintToStream(n,t,e){St(this,t,i=>{this.i._addUintToInputStream(n,i,e)})}addStringToStream(n,t,e){St(this,t,i=>{St(this,n,r=>{this.i._addStringToInputStream(r,i,e)})})}addStringRecordToStream(n,t,e){St(this,t,i=>{Rm(this,Object.keys(n),r=>{Rm(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,e)})})})}addProtoToStream(n,t,e,i){St(this,e,r=>{St(this,t,s=>{const a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(n,t){St(this,n,e=>{this.i._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,e)})}addDoubleVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,e)})}addFloatVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,e)})}addIntVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,e)})}addUintVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,e)})}addStringVectorToStream(n,t,e){St(this,t,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)St(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,e)})}addBoolToInputSidePacket(n,t){St(this,t,e=>{this.i._addBoolToInputSidePacket(n,e)})}addDoubleToInputSidePacket(n,t){St(this,t,e=>{this.i._addDoubleToInputSidePacket(n,e)})}addFloatToInputSidePacket(n,t){St(this,t,e=>{this.i._addFloatToInputSidePacket(n,e)})}addIntToInputSidePacket(n,t){St(this,t,e=>{this.i._addIntToInputSidePacket(n,e)})}addUintToInputSidePacket(n,t){St(this,t,e=>{this.i._addUintToInputSidePacket(n,e)})}addStringToInputSidePacket(n,t){St(this,t,e=>{St(this,n,i=>{this.i._addStringToInputSidePacket(i,e)})})}addProtoToInputSidePacket(n,t,e){St(this,e,i=>{St(this,t,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,e)})}addDoubleVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,e)})}addFloatVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,e)})}addIntVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,e)})}addUintVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,e)})}addStringVectorToInputSidePacket(n,t){St(this,t,e=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)St(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,e)})}attachBoolListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachBoolListener(e)})}attachBoolVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachBoolVectorListener(e)})}attachIntListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachIntListener(e)})}attachIntVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachIntVectorListener(e)})}attachUintListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachUintListener(e)})}attachUintVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachUintVectorListener(e)})}attachDoubleListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachDoubleListener(e)})}attachDoubleVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachDoubleVectorListener(e)})}attachFloatListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachFloatListener(e)})}attachFloatVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachFloatVectorListener(e)})}attachStringListener(n,t){Ti(this,n,t),St(this,n,e=>{this.i._attachStringListener(e)})}attachStringVectorListener(n,t){Er(this,n,t),St(this,n,e=>{this.i._attachStringVectorListener(e)})}attachProtoListener(n,t,e){Ti(this,n,t),St(this,n,i=>{this.i._attachProtoListener(i,e||!1)})}attachProtoVectorListener(n,t,e){Er(this,n,t),St(this,n,i=>{this.i._attachProtoVectorListener(i,e||!1)})}attachAudioListener(n,t,e){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ti(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),St(this,n,i=>{this.i._attachAudioListener(i,e||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Nm{get ia(){return this.i}ta(n,t,e){St(this,t,i=>{const[r,s]=wm(this,n,i);this.ia._addBoundTextureAsImageToStream(i,r,s,e)})}W(n,t){Ti(this,n,t),St(this,n,e=>{this.ia._attachImageListener(e)})}fa(n,t){Er(this,n,t),St(this,n,e=>{this.ia._attachImageVectorListener(e)})}}));var Nm,oi=class extends ZE{};async function zt(n,t,e){return async function(i,r,s,a){return KE(i,r,s,a)}(n,e.canvas??(Y0()?void 0:document.createElement("canvas")),t,e)}function J0(n,t,e,i){if(n.V){const s=new _0;if(e?.regionOfInterest){if(!n.sa)throw Error("This task doesn't support region-of-interest.");var r=e.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");_t(s,1,(r.left+r.right)/2),_t(s,2,(r.top+r.bottom)/2),_t(s,4,r.right-r.left),_t(s,3,r.bottom-r.top)}else _t(s,1,.5),_t(s,2,.5),_t(s,4,1),_t(s,3,1);if(e?.rotationDegrees){if(e?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(_t(s,5,-Math.PI*e.rotationDegrees/180),e?.rotationDegrees%180!=0){const[a,o]=q0(t);e=Fe(s,3)*o/a,r=Fe(s,4)*a/o,_t(s,4,e),_t(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.V,i)}n.g.ta(t,n.da,i??performance.now()),n.finishProcessing()}function li(n,t,e){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");J0(n,t,e,n.B+1)}function zi(n,t,e,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");J0(n,t,e,i)}function Ma(n,t,e,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return n=new Ke([r],e,!1,n.g.i.canvas,n.R,s,t),i?n.clone():n}var bn=class extends Dl{constructor(n,t,e,i){super(n),this.g=n,this.da=t,this.V=e,this.sa=i,this.R=new ad}l(n,t=!0){if("runningMode"in n&&yo(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,t)}close(){this.R.close(),super.close()}};bn.prototype.close=bn.prototype.close;var jn=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Tt(n=this.h=new Pc,0,1,t=new Ee),_t(this.h,2,.5),_t(this.h,3,.3)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&_t(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&_t(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}D(n,t){return this.j={detections:[]},li(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},zi(this,n,e,t),this.j}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect_in"),Jt(n,"detections");const t=new Gn;Mi(t,UE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect_in"),Gt(e,"DETECTIONS:detections"),e.o(t),Wn(n,e),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=d0(s),this.j.detections.push(W0(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};jn.prototype.detectForVideo=jn.prototype.F,jn.prototype.detect=jn.prototype.D,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=async function(n,t){return zt(jn,n,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(n,t){return zt(jn,n,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(n,t){return zt(jn,n,t)};var ld=yi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),cd=yi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ud=yi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Q0=yi([474,475],[475,476],[476,477],[477,474]),hd=yi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),fd=yi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),t1=yi([469,470],[470,471],[471,472],[472,469]),dd=yi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),e1=[...ld,...cd,...ud,...hd,...fd,...dd],n1=yi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Fm(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Pe=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Tt(n=this.h=new T0,0,1,t=new Ee),this.v=new E0,Tt(this.h,0,3,this.v),this.s=new Pc,Tt(this.h,0,2,this.s),Fi(this.s,4,1),_t(this.s,2,.5),_t(this.v,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return"numFaces"in n&&Fi(this.s,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&_t(this.s,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&_t(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&_t(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}D(n,t){return Fm(this),li(this,n,t),this.j}F(n,t,e){return Fm(this),zi(this,n,e,t),this.j}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"face_landmarks");const t=new Gn;Mi(t,FE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"NORM_LANDMARKS:face_landmarks"),e.o(t),Wn(n,e),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=zo(s),this.j.faceLandmarks.push(Dc(i));ut(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ut(this,i)}),this.outputFaceBlendshapes&&(Jt(n,"blendshapes"),Gt(e,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Cc(s),this.j.faceBlendshapes.push(nd(i.g()??[]));ut(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ut(this,i)})),this.outputFacialTransformationMatrixes&&(Jt(n,"face_geometry"),Gt(e,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=$t(NE(s),AE,2))&&this.j.facialTransformationMatrixes.push({rows:vi(ei(i,1),0)??0,columns:vi(ei(i,2),0)??0,data:us(i,3,Vr,cs()).slice()??[]});ut(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ut(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pe.prototype.detectForVideo=Pe.prototype.F,Pe.prototype.detect=Pe.prototype.D,Pe.prototype.setOptions=Pe.prototype.o,Pe.createFromModelPath=function(n,t){return zt(Pe,n,{baseOptions:{modelAssetPath:t}})},Pe.createFromModelBuffer=function(n,t){return zt(Pe,n,{baseOptions:{modelAssetBuffer:t}})},Pe.createFromOptions=function(n,t){return zt(Pe,n,t)},Pe.FACE_LANDMARKS_LIPS=ld,Pe.FACE_LANDMARKS_LEFT_EYE=cd,Pe.FACE_LANDMARKS_LEFT_EYEBROW=ud,Pe.FACE_LANDMARKS_LEFT_IRIS=Q0,Pe.FACE_LANDMARKS_RIGHT_EYE=hd,Pe.FACE_LANDMARKS_RIGHT_EYEBROW=fd,Pe.FACE_LANDMARKS_RIGHT_IRIS=t1,Pe.FACE_LANDMARKS_FACE_OVAL=dd,Pe.FACE_LANDMARKS_CONTOURS=e1,Pe.FACE_LANDMARKS_TESSELATION=n1;var bi=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!0),Tt(n=this.j=new A0,0,1,t=new Ee)}get baseOptions(){return $t(this.j,Ee,1)}set baseOptions(n){Tt(this.j,0,1,n)}o(n){return super.l(n)}Ra(n,t,e){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:e,li(this,n,i??{}),!this.h)return this.s}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"stylized_image");const t=new Gn;Mi(t,OE,this.j);const e=new pn;Hn(e,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"STYLIZED_IMAGE:stylized_image"),e.o(t),Wn(n,e),this.g.W("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const l=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*l){const c=new Uint8ClampedArray(4*l);for(let u=0;u<l;++u)c[4*u]=a[3*u],c[4*u+1]=a[3*u+1],c[4*u+2]=a[3*u+2],c[4*u+3]=255;a=new ImageData(c,o,i)}else{if(a.length!==4*l)throw Error("Unsupported channel count: "+a.length/l);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new $e([a],!1,!1,this.g.i.canvas,this.R,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),ut(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};bi.prototype.stylize=bi.prototype.Ra,bi.prototype.setOptions=bi.prototype.o,bi.createFromModelPath=function(n,t){return zt(bi,n,{baseOptions:{modelAssetPath:t}})},bi.createFromModelBuffer=function(n,t){return zt(bi,n,{baseOptions:{modelAssetBuffer:t}})},bi.createFromOptions=function(n,t){return zt(bi,n,t)};var pd=yi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Om(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Bm(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function km(n,t=!0){const e=[];for(const r of n){var i=Cc(r);n=[];for(const s of i.g())i=t&&ei(s,1)!=null?vi(ei(s,1),0):-1,n.push({score:Fe(s,2)??0,index:i,categoryName:Ni(s,3)??"",displayName:Ni(s,4)??""});e.push(n)}return e}var In=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Tt(n=this.j=new P0,0,1,t=new Ee),this.s=new Qf,Tt(this.j,0,2,this.s),this.C=new Jf,Tt(this.s,0,3,this.C),this.v=new C0,Tt(this.s,0,2,this.v),this.h=new BE,Tt(this.j,0,3,this.h),_t(this.v,2,.5),_t(this.s,4,.5),_t(this.C,2,.5)}get baseOptions(){return $t(this.j,Ee,1)}set baseOptions(n){Tt(this.j,0,1,n)}o(n){if(Fi(this.v,3,n.numHands??1),"minHandDetectionConfidence"in n&&_t(this.v,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&_t(this.s,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&_t(this.C,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var t=new Ws,e=t,i=zh(n.cannedGesturesClassifierOptions,$t(this.h,Ws,3)?.h());Tt(e,0,2,i),Tt(this.h,0,3,t)}else n.cannedGesturesClassifierOptions===void 0&&$t(this.h,Ws,3)?.g();return n.customGesturesClassifierOptions?(Tt(e=t=new Ws,0,2,i=zh(n.customGesturesClassifierOptions,$t(this.h,Ws,4)?.h())),Tt(this.h,0,4,t)):n.customGesturesClassifierOptions===void 0&&$t(this.h,Ws,4)?.g(),this.l(n)}Ma(n,t){return Om(this),li(this,n,t),Bm(this)}Na(n,t,e){return Om(this),zi(this,n,e,t),Bm(this)}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"hand_gestures"),Jt(n,"hand_landmarks"),Jt(n,"world_hand_landmarks"),Jt(n,"handedness");const t=new Gn;Mi(t,GE,this.j);const e=new pn;Hn(e,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"HAND_GESTURES:hand_gestures"),Gt(e,"LANDMARKS:hand_landmarks"),Gt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(e,"HANDEDNESS:handedness"),e.o(t),Wn(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=zo(s);const a=[];for(const o of hr(i,m0,1))a.push({x:Fe(o,1)??0,y:Fe(o,2)??0,z:Fe(o,3)??0,visibility:Fe(o,4)??0});this.landmarks.push(a)}ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=na(s);const a=[];for(const o of hr(i,p0,1))a.push({x:Fe(o,1)??0,y:Fe(o,2)??0,z:Fe(o,3)??0,visibility:Fe(o,4)??0});this.worldLandmarks.push(a)}ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...km(i,!1)),ut(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...km(i)),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function zm(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}In.prototype.recognizeForVideo=In.prototype.Na,In.prototype.recognize=In.prototype.Ma,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(n,t){return zt(In,n,{baseOptions:{modelAssetPath:t}})},In.createFromModelBuffer=function(n,t){return zt(In,n,{baseOptions:{modelAssetBuffer:t}})},In.createFromOptions=function(n,t){return zt(In,n,t)},In.HAND_CONNECTIONS=pd;var hn=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Tt(n=this.h=new Qf,0,1,t=new Ee),this.s=new Jf,Tt(this.h,0,3,this.s),this.j=new C0,Tt(this.h,0,2,this.j),Fi(this.j,3,1),_t(this.j,2,.5),_t(this.s,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return"numHands"in n&&Fi(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&_t(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&_t(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&_t(this.s,2,n.minHandPresenceConfidence??.5),this.l(n)}D(n,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],li(this,n,t),zm(this)}F(n,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],zi(this,n,e,t),zm(this)}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"hand_landmarks"),Jt(n,"world_hand_landmarks"),Jt(n,"handedness");const t=new Gn;Mi(t,zE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"LANDMARKS:hand_landmarks"),Gt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(e,"HANDEDNESS:handedness"),e.o(t),Wn(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=zo(s),this.landmarks.push(Dc(i));ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=na(s),this.worldLandmarks.push(ho(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=Cc(l);const c=[];for(const u of i.g())c.push({score:Fe(u,2)??0,index:vi(ei(u,1),0)??-1,categoryName:Ni(u,3)??"",displayName:Ni(u,4)??""});o.push(c)}a.call(s,...o),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};hn.prototype.detectForVideo=hn.prototype.F,hn.prototype.detect=hn.prototype.D,hn.prototype.setOptions=hn.prototype.o,hn.createFromModelPath=function(n,t){return zt(hn,n,{baseOptions:{modelAssetPath:t}})},hn.createFromModelBuffer=function(n,t){return zt(hn,n,{baseOptions:{modelAssetBuffer:t}})},hn.createFromOptions=function(n,t){return zt(hn,n,t)},hn.HAND_CONNECTIONS=pd;var i1=yi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Gm(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Vm(n){try{if(!n.C)return n.h;n.C(n.h)}finally{Ic(n)}}function gl(n,t){n=zo(n),t.push(Dc(n))}var Me=class extends bn{constructor(n,t){super(new oi(n,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Tt(n=this.j=new F0,0,1,t=new Ee),this.K=new Jf,Tt(this.j,0,2,this.K),this.ca=new VE,Tt(this.j,0,3,this.ca),this.s=new Pc,Tt(this.j,0,4,this.s),this.I=new E0,Tt(this.j,0,5,this.I),this.v=new U0,Tt(this.j,0,6,this.v),this.L=new N0,Tt(this.j,0,7,this.L),_t(this.s,2,.5),_t(this.s,3,.3),_t(this.I,2,.5),_t(this.v,2,.5),_t(this.v,3,.3),_t(this.L,2,.5),_t(this.K,2,.5)}get baseOptions(){return $t(this.j,Ee,1)}set baseOptions(n){Tt(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&_t(this.s,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&_t(this.s,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&_t(this.I,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&_t(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&_t(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&_t(this.L,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&_t(this.K,2,n.minHandLandmarksConfidence??.5),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:e,Gm(this),li(this,n,i),Vm(this)}F(n,t,e,i){const r=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:i,Gm(this),zi(this,n,r,t),Vm(this)}m(){var n=new Cn;xe(n,"input_frames_image"),Jt(n,"pose_landmarks"),Jt(n,"pose_world_landmarks"),Jt(n,"face_landmarks"),Jt(n,"left_hand_landmarks"),Jt(n,"left_hand_world_landmarks"),Jt(n,"right_hand_landmarks"),Jt(n,"right_hand_world_landmarks");const t=new Gn,e=new pm;Dh(e,1,Ua("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))de(r,2,vc(s,Uf,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof or||No(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Dh(r,2,Tf(s,!1,!1),Es())}}(e,this.j.g());const i=new pn;Hn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),jl(i,8,pm,e),pe(i,"IMAGE:input_frames_image"),Gt(i,"POSE_LANDMARKS:pose_landmarks"),Gt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Gt(i,"FACE_LANDMARKS:face_landmarks"),Gt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Gt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Gt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Gt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Wn(n,i),Lc(this,n),this.g.attachProtoListener("pose_landmarks",(r,s)=>{gl(r,this.h.poseLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=na(r),a.push(ho(r)),ut(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ut(this,r)}),this.outputPoseSegmentationMasks&&(Gt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ga(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Ma(this,r,!0,!this.C)],ut(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ut(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{gl(r,this.h.faceLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ut(this,r)}),this.outputFaceBlendshapes&&(Jt(n,"extra_blendshapes"),Gt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Cc(r),a.push(nd(r.g()??[]))),ut(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ut(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{gl(r,this.h.leftHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=na(r),a.push(ho(r)),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{gl(r,this.h.rightHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=na(r),a.push(ho(r)),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ut(this,r)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Me.prototype.detectForVideo=Me.prototype.F,Me.prototype.detect=Me.prototype.D,Me.prototype.setOptions=Me.prototype.o,Me.createFromModelPath=function(n,t){return zt(Me,n,{baseOptions:{modelAssetPath:t}})},Me.createFromModelBuffer=function(n,t){return zt(Me,n,{baseOptions:{modelAssetBuffer:t}})},Me.createFromOptions=function(n,t){return zt(Me,n,t)},Me.HAND_CONNECTIONS=pd,Me.POSE_CONNECTIONS=i1,Me.FACE_LANDMARKS_LIPS=ld,Me.FACE_LANDMARKS_LEFT_EYE=cd,Me.FACE_LANDMARKS_LEFT_EYEBROW=ud,Me.FACE_LANDMARKS_LEFT_IRIS=Q0,Me.FACE_LANDMARKS_RIGHT_EYE=hd,Me.FACE_LANDMARKS_RIGHT_EYEBROW=fd,Me.FACE_LANDMARKS_RIGHT_IRIS=t1,Me.FACE_LANDMARKS_FACE_OVAL=dd,Me.FACE_LANDMARKS_CONTOURS=e1,Me.FACE_LANDMARKS_TESSELATION=n1;var Kn=class extends bn{constructor(n,t){super(new oi(n,t),"input_image","norm_rect",!0),this.j={classifications:[]},Tt(n=this.h=new O0,0,1,t=new Ee)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return Tt(this.h,0,2,zh(n,$t(this.h,Kf,2))),this.l(n)}wa(n,t){return this.j={classifications:[]},li(this,n,t),this.j}xa(n,t,e){return this.j={classifications:[]},zi(this,n,e,t),this.j}m(){var n=new Cn;xe(n,"input_image"),xe(n,"norm_rect"),Jt(n,"classifications");const t=new Gn;Mi(t,HE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),pe(e,"IMAGE:input_image"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"CLASSIFICATIONS:classifications"),e.o(t),Wn(n,e),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:hr(s,RE,1).map(o=>nd($t(o,h0,4)?.g()??[],vi(ei(o,2),0),Ni(o,3)))};return Xl(Fr(s,2))!=null&&(a.timestampMs=vi(Xl(Fr(s,2)),0)),a}(CE(i)),ut(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Kn.prototype.classifyForVideo=Kn.prototype.xa,Kn.prototype.classify=Kn.prototype.wa,Kn.prototype.setOptions=Kn.prototype.o,Kn.createFromModelPath=function(n,t){return zt(Kn,n,{baseOptions:{modelAssetPath:t}})},Kn.createFromModelBuffer=function(n,t){return zt(Kn,n,{baseOptions:{modelAssetBuffer:t}})},Kn.createFromOptions=function(n,t){return zt(Kn,n,t)};var Un=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!0),this.h=new B0,this.embeddings={embeddings:[]},Tt(n=this.h,0,1,t=new Ee)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){var t=this.h,e=$t(this.h,Sm,2);return e=e?e.clone():new Sm,n.l2Normalize!==void 0?yo(e,1,n.l2Normalize):"l2Normalize"in n&&de(e,1),n.quantize!==void 0?yo(e,2,n.quantize):"quantize"in n&&de(e,2),Tt(t,0,2,e),this.l(n)}Da(n,t){return li(this,n,t),this.embeddings}Ea(n,t,e){return zi(this,n,e,t),this.embeddings}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"embeddings_out");const t=new Gn;Mi(t,WE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"EMBEDDINGS:embeddings_out"),e.o(t),Wn(n,e),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=LE(i),this.embeddings=function(s){return{embeddings:hr(s,DE,1).map(a=>{const o={headIndex:vi(ei(a,3),0)??-1,headName:Ni(a,4)??""};if(kg(a,Mm,Su(a,1))!==void 0)a=us(a=$t(a,Mm,Su(a,1)),1,Vr,cs()),o.floatEmbedding=a.slice();else{const l=new Uint8Array(0);o.quantizedEmbedding=$t(a,PE,Su(a,2))?.ra()?.ua()??l}return o}),timestampMs:vi(Xl(Fr(s,2)),0)}}(i),ut(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Un.cosineSimilarity=function(n,t){if(n.floatEmbedding&&t.floatEmbedding)n=bm(n.floatEmbedding,t.floatEmbedding);else{if(!n.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=bm(Tm(n.quantizedEmbedding),Tm(t.quantizedEmbedding))}return n},Un.prototype.embedForVideo=Un.prototype.Ea,Un.prototype.embed=Un.prototype.Da,Un.prototype.setOptions=Un.prototype.o,Un.createFromModelPath=function(n,t){return zt(Un,n,{baseOptions:{modelAssetPath:t}})},Un.createFromModelBuffer=function(n,t){return zt(Un,n,{baseOptions:{modelAssetBuffer:t}})},Un.createFromOptions=function(n,t){return zt(Un,n,t)};var Hh=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function Hm(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Wm(n){try{const t=new Hh(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return t;n.j(t)}finally{Ic(n)}}Hh.prototype.close=Hh.prototype.close;var _n=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ed,this.v=new k0,Tt(this.h,0,3,this.v),Tt(n=this.h,0,1,t=new Ee)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?de(this.h,2,Ua(n.displayNamesLocale)):"displayNamesLocale"in n&&de(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}J(){(function(n){const t=hr(n.ga(),pn,1).filter(e=>Ni(e,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&($t(t[0],Gn,7)?.l()?.g()??new Map).forEach((e,i)=>{n.s[Number(i)]=Ni(e,1)})})(this)}ha(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Hm(this),li(this,n,i),Wm(this)}Pa(n,t,e,i){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Hm(this),zi(this,n,r,t),Wm(this)}Ha(){return this.s}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect");const t=new Gn;Mi(t,G0,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),e.o(t),Wn(n,e),Lc(this,n),this.outputConfidenceMasks&&(Jt(n,"confidence_masks"),Gt(e,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.fa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ma(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&(Jt(n,"category_mask"),Gt(e,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Ma(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),Jt(n,"quality_scores"),Gt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_n.prototype.getLabels=_n.prototype.Ha,_n.prototype.segmentForVideo=_n.prototype.Pa,_n.prototype.segment=_n.prototype.ha,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(n,t){return zt(_n,n,{baseOptions:{modelAssetPath:t}})},_n.createFromModelBuffer=function(n,t){return zt(_n,n,{baseOptions:{modelAssetBuffer:t}})},_n.createFromOptions=function(n,t){return zt(_n,n,t)};var Wh=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Wh.prototype.close=Wh.prototype.close;var JE=class extends pt{constructor(n){super(n)}},Xs=[0,Le,-2],Jl=[0,$i,-3,Ae,$i,-1],Xm=[0,Jl],Ym=[0,Jl,Le,-1],Au=class extends pt{constructor(n){super(n)}},qm=[0,$i,-1,Ae],QE=class extends pt{constructor(){super()}},jm=class extends pt{constructor(n){super(n)}},Xh=[1,2,3,4,5,6,7,8,9,10,14,15],r1=class extends pt{constructor(){super()}};r1.prototype.g=Rc([0,Ve,[0,Xh,ae,Jl,ae,[0,Jl,Xs],ae,Xm,ae,[0,Xm,Xs],ae,qm,ae,[0,$i,-3,Ae,xi],ae,[0,$i,-3,Ae],ae,[0,se,$i,-2,Ae,Le,Ae,-1,2,$i,Xs],ae,Ym,ae,[0,Ym,Xs],$i,Xs,se,ae,[0,$i,-3,Ae,Xs,-1],ae,[0,Ve,qm]],se,[0,se,Le,-1,Ae]]);var Ai=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ed,this.s=new k0,Tt(this.h,0,3,this.s),Tt(n=this.h,0,1,t=new Ee)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ha(n,t,e,i){const r=typeof e!="function"?e:{};this.j=typeof e=="function"?e:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.B+1,i=new r1;const s=new jm;var a=new JE;if(Fi(a,1,255),Tt(s,0,12,a),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var o=new Au;yo(o,3,!0),_t(o,1,t.keypoint.x),_t(o,2,t.keypoint.y),lo(s,5,Xh,o)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new QE,t.scribble))yo(t=new Au,3,!0),_t(t,1,o.x),_t(t,2,o.y),jl(a,1,Au,t);lo(s,15,Xh,a)}jl(i,1,jm,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",e),li(this,n,r);t:{try{const c=new Wh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break t}this.j(c)}finally{Ic(this)}l=void 0}return l}m(){var n=new Cn;xe(n,"image_in"),xe(n,"roi_in"),xe(n,"norm_rect_in");const t=new Gn;Mi(t,G0,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),pe(e,"IMAGE:image_in"),pe(e,"ROI:roi_in"),pe(e,"NORM_RECT:norm_rect_in"),e.o(t),Wn(n,e),Lc(this,n),this.outputConfidenceMasks&&(Jt(n,"confidence_masks"),Gt(e,"CONFIDENCE_MASKS:confidence_masks"),ga(this,"confidence_masks"),this.g.fa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ma(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&(Jt(n,"category_mask"),Gt(e,"CATEGORY_MASK:category_mask"),ga(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=Ma(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),Jt(n,"quality_scores"),Gt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ai.prototype.segment=Ai.prototype.ha,Ai.prototype.setOptions=Ai.prototype.o,Ai.createFromModelPath=function(n,t){return zt(Ai,n,{baseOptions:{modelAssetPath:t}})},Ai.createFromModelBuffer=function(n,t){return zt(Ai,n,{baseOptions:{modelAssetBuffer:t}})},Ai.createFromOptions=function(n,t){return zt(Ai,n,t)};var $n=class extends bn{constructor(n,t){super(new oi(n,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Tt(n=this.h=new V0,0,1,t=new Ee)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?de(this.h,2,Ua(n.displayNamesLocale)):"displayNamesLocale"in n&&de(this.h,2),n.maxResults!==void 0?Fi(this.h,3,n.maxResults):"maxResults"in n&&de(this.h,3),n.scoreThreshold!==void 0?_t(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&de(this.h,4),n.categoryAllowlist!==void 0?Kl(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&de(this.h,5),n.categoryDenylist!==void 0?Kl(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&de(this.h,6),this.l(n)}D(n,t){return this.j={detections:[]},li(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},zi(this,n,e,t),this.j}m(){var n=new Cn;xe(n,"input_frame_gpu"),xe(n,"norm_rect"),Jt(n,"detections");const t=new Gn;Mi(t,YE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.ObjectDetectorGraph"),pe(e,"IMAGE:input_frame_gpu"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"DETECTIONS:detections"),e.o(t),Wn(n,e),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=d0(s),this.j.detections.push(W0(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};$n.prototype.detectForVideo=$n.prototype.F,$n.prototype.detect=$n.prototype.D,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=async function(n,t){return zt($n,n,{baseOptions:{modelAssetPath:t}})},$n.createFromModelBuffer=function(n,t){return zt($n,n,{baseOptions:{modelAssetBuffer:t}})},$n.createFromOptions=function(n,t){return zt($n,n,t)};var Yh=class{constructor(n,t,e){this.landmarks=n,this.worldLandmarks=t,this.segmentationMasks=e}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function Km(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function $m(n){try{const t=new Yh(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.s)return t;n.s(t)}finally{Ic(n)}}Yh.prototype.close=Yh.prototype.close;var Nn=class extends bn{constructor(n,t){super(new oi(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Tt(n=this.h=new H0,0,1,t=new Ee),this.v=new N0,Tt(this.h,0,3,this.v),this.j=new U0,Tt(this.h,0,2,this.j),Fi(this.j,4,1),_t(this.j,2,.5),_t(this.v,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,Ee,1)}set baseOptions(n){Tt(this.h,0,1,n)}o(n){return"numPoses"in n&&Fi(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&_t(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&_t(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&_t(this.v,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:e,Km(this),li(this,n,i),$m(this)}F(n,t,e,i){const r=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:i,Km(this),zi(this,n,r,t),$m(this)}m(){var n=new Cn;xe(n,"image_in"),xe(n,"norm_rect"),Jt(n,"normalized_landmarks"),Jt(n,"world_landmarks"),Jt(n,"segmentation_masks");const t=new Gn;Mi(t,qE,this.h);const e=new pn;Hn(e,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),pe(e,"IMAGE:image_in"),pe(e,"NORM_RECT:norm_rect"),Gt(e,"NORM_LANDMARKS:normalized_landmarks"),Gt(e,"WORLD_LANDMARKS:world_landmarks"),e.o(t),Wn(n,e),Lc(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=zo(s),this.landmarks.push(Dc(i));ut(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ut(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=na(s),this.worldLandmarks.push(ho(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ut(this,i)}),this.outputSegmentationMasks&&(Gt(e,"SEGMENTATION_MASK:segmentation_masks"),ga(this,"segmentation_masks"),this.g.fa("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Ma(this,s,!0,!this.s)),ut(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ut(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Nn.prototype.detectForVideo=Nn.prototype.F,Nn.prototype.detect=Nn.prototype.D,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=function(n,t){return zt(Nn,n,{baseOptions:{modelAssetPath:t}})},Nn.createFromModelBuffer=function(n,t){return zt(Nn,n,{baseOptions:{modelAssetBuffer:t}})},Nn.createFromOptions=function(n,t){return zt(Nn,n,t)},Nn.POSE_CONNECTIONS=i1;class tT{constructor(){this.landmarker=null,this.lastResult=null,this._lastInferenceTime=0,this._inferenceIntervalMs=1e3/oe.hand.INFERENCE_TARGET_HZ,this._running=!1}async init(){const t=await is.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17/wasm"),e={modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:oe.hand.PREFERRED_DELEGATE};try{this.landmarker=await hn.createFromOptions(t,{baseOptions:e,runningMode:"VIDEO",numHands:oe.hand.NUM_HANDS,minHandDetectionConfidence:oe.hand.MIN_HAND_DETECTION_CONFIDENCE,minHandPresenceConfidence:oe.hand.MIN_HAND_PRESENCE_CONFIDENCE,minTrackingConfidence:oe.hand.MIN_TRACKING_CONFIDENCE})}catch(i){console.warn("[HandTracker] GPU delegate gagal, fallback ke CPU delegate.",i),e.delegate="CPU",this.landmarker=await hn.createFromOptions(t,{baseOptions:e,runningMode:"VIDEO",numHands:oe.hand.NUM_HANDS,minHandDetectionConfidence:oe.hand.MIN_HAND_DETECTION_CONFIDENCE,minHandPresenceConfidence:oe.hand.MIN_HAND_PRESENCE_CONFIDENCE,minTrackingConfidence:oe.hand.MIN_TRACKING_CONFIDENCE})}}detect(t){if(!this.landmarker)return this.lastResult;const e=performance.now();if(e-this._lastInferenceTime<this._inferenceIntervalMs)return this.lastResult;if(this._lastInferenceTime=e,t.readyState<2)return this.lastResult;const i=this.landmarker.detectForVideo(t,e);return this.lastResult=i,i}dispose(){this.landmarker&&(this.landmarker.close(),this.landmarker=null)}}const Zm=new N,Jm=new N,Qm=new N,t_=new N,vl=new N,Ka=new N,xl=new N,e_=new Ue;function eT(n,t){return Zm.set(-n[0].x,-n[0].y,-n[0].z),Jm.set(-n[9].x,-n[9].y,-n[9].z),Qm.set(-n[5].x,-n[5].y,-n[5].z),t_.set(-n[17].x,-n[17].y,-n[17].z),vl.subVectors(Jm,Zm).normalize(),Ka.subVectors(t_,Qm).normalize(),xl.crossVectors(Ka,vl).normalize(),Ka.crossVectors(vl,xl).normalize(),xl.lengthSq()<1e-6||Ka.lengthSq()<1e-6?!1:(e_.makeBasis(Ka,xl,vl),t.setFromRotationMatrix(e_),!0)}function nT(n,t){const e=[0,5,9,13,17];let i=0,r=0,s=0;for(const o of e)i+=n[o].x,r+=n[o].y,s+=n[o].z;const a=e.length;return t.set(i/a,r/a,s/a),t}function n_(n,t){const e=2*Math.PI*t*n;return e/(e+1)}function iT(n,t,e){return e*t+(1-e)*n}class i_{constructor(){this.initialized=!1,this.hatXPrev=0}filter(t,e){if(!this.initialized)return this.hatXPrev=t,this.initialized=!0,t;const i=iT(this.hatXPrev,t,e);return this.hatXPrev=i,i}lastValue(){return this.hatXPrev}}class hs{constructor(t=1,e=.3,i=1){this.minCutoff=t,this.beta=e,this.dCutoff=i,this.xFilter=new i_,this.dxFilter=new i_,this.lastTime=null}filter(t,e){if(this.lastTime===null)return this.lastTime=e,this.xFilter.filter(t,1);let i=(e-this.lastTime)/1e3;this.lastTime=e,i<=0&&(i=1/30);const r=this.xFilter.initialized?this.xFilter.lastValue():t,s=(t-r)/i,a=this.dxFilter.filter(s,n_(i,this.dCutoff)),o=this.minCutoff+this.beta*Math.abs(a);return this.xFilter.filter(t,n_(i,o))}}class rT{constructor(t,e,i){this.fx=new hs(t,e,i),this.fy=new hs(t,e,i),this.fz=new hs(t,e,i)}filter(t,e){return t.x=this.fx.filter(t.x,e),t.y=this.fy.filter(t.y,e),t.z=this.fz.filter(t.z,e),t}}class sT{constructor(t,e,i){this.fx=new hs(t,e,i),this.fy=new hs(t,e,i),this.fz=new hs(t,e,i),this.fw=new hs(t,e,i)}filter(t,e){return t.x=this.fx.filter(t.x,e),t.y=this.fy.filter(t.y,e),t.z=this.fz.filter(t.z,e),t.w=this.fw.filter(t.w,e),t.normalize(),t}}const ln={THUMB_MCP:2,THUMB_IP:3,THUMB_TIP:4,INDEX_MCP:5,INDEX_PIP:6,INDEX_DIP:7,MIDDLE_MCP:9,MIDDLE_PIP:10,MIDDLE_DIP:11,RING_MCP:13,RING_PIP:14,RING_DIP:15,PINKY_MCP:17,PINKY_PIP:18,PINKY_DIP:19},r_=new N,wu=new N,s_=new N,a_=new N,o_=new N;function Ru(n,t,e){return e.set(n[t].x,n[t].y,n[t].z)}function aT(n,t,e,i){Ru(n,t,r_),Ru(n,e,wu),Ru(n,i,s_),a_.subVectors(r_,wu).normalize(),o_.subVectors(s_,wu).normalize();const r=Kd.clamp(a_.dot(o_),-1,1);return Kd.radToDeg(Math.acos(r))}const oT=150,lT=100;function $a(n,t,e,i){const r=aT(n,t,e,i);return r>oT?"open":r<lT?"closed":"ambiguous"}function cT(n){const t=n,e=$a(t,ln.THUMB_MCP,ln.THUMB_IP,ln.THUMB_TIP),i=$a(t,ln.INDEX_MCP,ln.INDEX_PIP,ln.INDEX_DIP),r=$a(t,ln.MIDDLE_MCP,ln.MIDDLE_PIP,ln.MIDDLE_DIP),s=$a(t,ln.RING_MCP,ln.RING_PIP,ln.RING_DIP),a=$a(t,ln.PINKY_MCP,ln.PINKY_PIP,ln.PINKY_DIP);return i==="closed"&&r==="closed"&&s==="closed"&&a==="closed"?"fist":i==="open"&&r==="open"&&s==="open"&&a==="open"?"open":i==="open"&&r==="open"&&s==="closed"&&a==="closed"?"peace":e==="open"&&i==="open"&&a==="open"&&r==="closed"&&s==="closed"?"iloveyou":"none"}class uT{constructor(t){this.currentState="none",this.candidateState="none",this.candidateCount=0,this.onChange=t}update(t){if(t===this.candidateState?this.candidateCount+=1:(this.candidateState=t,this.candidateCount=1),this.candidateCount>=oe.gesture.CONFIRM_FRAMES&&this.candidateState!==this.currentState){const e=this.currentState;this.currentState=this.candidateState,this.onChange&&this.onChange(this.currentState,e)}return this.currentState}}function Ki(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s1(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Sa={duration:.5,overwrite:!1,delay:0},md,an,Se,ni=1e8,fe=1/ni,qh=Math.PI*2,hT=qh/4,fT=0,a1=Math.sqrt,dT=Math.cos,pT=Math.sin,Je=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},fr=function(t){return typeof t=="number"},_d=function(t){return typeof t>"u"},Oi=function(t){return typeof t=="object"},Sn=function(t){return t!==!1},gd=function(){return typeof window<"u"},Ml=function(t){return Ie(t)||Je(t)},o1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,jh=/(?:-?\.?\d|\.)+/gi,l1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,c1=/[+-]=-?[.\d]+/,u1=/[^,'"\[\]\s]+/gi,mT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,wi,Kh,vd,Vn={},Ql={},h1,f1=function(t){return(Ql=As(t,Vn))&&An},xd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},To=function(t,e){return!e&&console.warn(t)},d1=function(t,e){return t&&(Vn[t]=e)&&Ql&&(Ql[t]=e)||Vn},bo=function(){return 0},_T={suppressEvents:!0,isStart:!0,kill:!1},Ul={suppressEvents:!0,kill:!1},gT={suppressEvents:!0},Md={},Ir=[],$h={},p1,Fn={},Pu={},l_=30,Nl=[],Sd="",yd=function(t){var e=t[0],i,r;if(Oi(e)||Ie(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Nl.length;r--&&!Nl[r].targetTest(e););i=Nl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new B1(t[r],i)))||t.splice(r,1);return t},_s=function(t){return t._gsap||yd(ii(t))[0]._gsap},m1=function(t,e,i){return(i=t[e])&&Ie(i)?t[e]():_d(i)&&t.getAttribute&&t.getAttribute(e)||i},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Ze=function(t){return Math.round(t*1e7)/1e7||0},ia=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},vT=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},tc=function(){var t=Ir.length,e=Ir.slice(0),i,r;for($h={},Ir.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_1=function(t,e,i,r){Ir.length&&!an&&tc(),t.render(e,i,an&&e<0&&(t._initted||t._startAt)),Ir.length&&!an&&tc()},g1=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(u1).length<2?e:Je(t)?t.trim():t},v1=function(t){return t},si=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},xT=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},As=function(t,e){for(var i in e)t[i]=e[i];return t},c_=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Oi(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},ec=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},fo=function(t){var e=t.parent||be,i=t.keyframes?xT(on(t.keyframes)):si;if(Sn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},MT=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},x1=function(t,e,i,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},Oc=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},zr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},ST=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Zh=function(t,e,i,r){return t._startAt&&(an?t._startAt.revert(Ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},yT=function n(t){return!t||t._ts&&n(t.parent)},u_=function(t){return t._repeat?ya(t._tTime,t=t.duration()+t._rDelay)*t:0},ya=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},nc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bc=function(t){return t._end=Ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||fe)||0))},kc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ze(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bc(t),i._dirty||gs(i,t)),t},M1=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=nc(t.rawTime(),e),(!e._dur||Go(0,e.totalDuration(),i)-e._tTime>fe)&&e.render(i,!0)),gs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-fe}},Pi=function(t,e,i,r){return e.parent&&zr(e),e._start=Ze((fr(i)?i:i||t!==be?Zn(t,i,e):t._time)+e._delay),e._end=Ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),x1(t,e,"_first","_last",t._sort?"_start":0),Jh(e)||(t._recent=e),r||M1(t,e),t._ts<0&&kc(t,t._tTime),t},S1=function(t,e){return(Vn.ScrollTrigger||xd("scrollTrigger",e))&&Vn.ScrollTrigger.create(e,t)},y1=function(t,e,i,r,s){if(Td(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!an&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&p1!==On.frame)return Ir.push(t),t._lazy=[s,r],1},ET=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Jh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},TT=function(t,e,i,r){var s=t.ratio,a=e<0||!e&&(!t._start&&ET(t)&&!(!t._initted&&Jh(t))||(t._ts<0||t._dp._ts<0)&&!Jh(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Go(0,t._tDur,e),u=ya(l,o),t._yoyo&&u&1&&(a=1-a),u!==ya(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||an||r||t._zTime===fe||!e&&t._zTime){if(!t._initted&&y1(t,e,r,i,l))return;for(h=t._zTime,t._zTime=e||(i?fe:0),i||(i=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Zh(t,e,i,!0),t._onUpdate&&!i&&Bn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&zr(t,1),!i&&!an&&(Bn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},bT=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ea=function(t,e,i,r){var s=t._repeat,a=Ze(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ze(a*(s+1)+t._rDelay*s):a,o>0&&!r&&kc(t,t._tTime=t._tDur*o),t.parent&&Bc(t),i||gs(t.parent,t),t},h_=function(t){return t instanceof dn?gs(t):Ea(t,t._dur)},AT={_start:0,endTime:bo,totalDuration:bo},Zn=function n(t,e,i){var r=t.labels,s=t._recent||AT,a=t.duration()>=ni?s.endTime(!1):t._dur,o,l,c;return Je(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(on(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},po=function(t,e,i){var r=fr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;a.immediateRender=Sn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new He(e[0],a,e[s+1])},Wr=function(t,e){return t||t===0?e(t):e},Go=function(t,e,i){return i<t?t:i>e?e:i},rn=function(t,e){return!Je(t)||!(e=mT.exec(t))?"":e[1]},wT=function(t,e,i){return Wr(i,function(r){return Go(t,e,r)})},Qh=[].slice,E1=function(t,e){return t&&Oi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Oi(t[0]))&&!t.nodeType&&t!==wi},RT=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Je(r)&&!e||E1(r,1)?(s=i).push.apply(s,ii(r)):i.push(r)})||i},ii=function(t,e,i){return Se&&!e&&Se.selector?Se.selector(t):Je(t)&&!i&&(Kh||!Ta())?Qh.call((e||vd).querySelectorAll(t),0):on(t)?RT(t,i):E1(t)?Qh.call(t,0):t?[t]:[]},tf=function(t){return t=ii(t)[0]||To("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ii(e,i.querySelectorAll?i:i===t?To("Invalid scope")||vd.createElement("div"):t)}},T1=function(t){return t.sort(function(){return .5-Math.random()})},b1=function(t){if(Ie(t))return t;var e=Oi(t)?t:{each:t},i=vs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,h=r;return Je(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,T,E,v,R,w,b,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,ni])[1],!x){for(b=-ni;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=l?Math.min(x,_)*u-.5:r%x,T=x===ni?0:l?_*h/x-.5:r/x|0,b=0,C=ni,w=0;w<_;w++)E=w%x-d,v=T-(w/x|0),m[w]=R=c?Math.abs(c==="y"?v:E):a1(E*E+v*v),R>b&&(b=R),R<C&&(C=R);r==="random"&&T1(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=rn(e.amount||e.each)||0,i=i&&_<0?N1(i):i}return _=(m[f]-m.min)/m.max||0,Ze(m.b+(i?i(_):_)*m.v)+m.u}},ef=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Ze(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(fr(i)?0:rn(i))}},A1=function(t,e){var i=on(t),r,s;return!i&&Oi(t)&&(r=i=t.radius||ni,t.values?(t=ii(t.values),(s=!fr(t[0]))&&(r*=r)):t=ef(t.increment)),Wr(e,i?Ie(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ni,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:a,s||u===a||fr(a)?u:u+rn(a)}:ef(t))},w1=function(t,e,i,r){return Wr(on(t)?!e:i===!0?!!(i=0):!r,function(){return on(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},CT=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,a){return a(s)},r)}},PT=function(t,e){return function(i){return t(parseFloat(i))+(e||rn(i))}},DT=function(t,e,i){return C1(t,e,0,1,i)},R1=function(t,e,i){return Wr(i,function(r){return t[~~e(r)]})},LT=function n(t,e,i){var r=e-t;return on(t)?R1(t,n(0,t.length),e):Wr(i,function(s){return(r+(s-t)%r)%r+t})},IT=function n(t,e,i){var r=e-t,s=r*2;return on(t)?R1(t,n(0,t.length-1),e):Wr(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Ao=function(t){for(var e=0,i="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?u1:jh),i+=t.substr(e,r-e)+w1(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},C1=function(t,e,i,r,s){var a=e-t,o=r-i;return Wr(s,function(l){return i+((l-t)/a*o||0)})},UT=function n(t,e,i,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Je(t),o={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),a)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=e}else r||(t=As(on(t)?[]:{},t));if(!u){for(l in e)Ed.call(o,t,l,"get",e[l]);s=function(g){return wd(g,o)||(a?t.p:t)}}}return Wr(i,s)},f_=function(t,e,i){var r=t.labels,s=ni,a,o,l;for(a in r)o=r[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Bn=function(t,e,i){var r=t.vars,s=r[e],a=Se,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&Ir.length&&tc(),o&&(Se=o),u=l?s.apply(c,l):s.call(c),Se=a,u},io=function(t){return zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!an),t.progress()<1&&Bn(t,"onInterrupt"),t},Zs,P1=[],D1=function(t){if(t)if(t=!t.name&&t.default||t,gd()||t.headless){var e=t.name,i=Ie(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:bo,render:wd,add:Ed,kill:$T,modifier:KT,rawVars:0},a={targetTest:0,get:0,getSetter:Ad,aliases:{},register:0};if(Ta(),t!==r){if(Fn[e])return;si(r,si(ec(t,s),a)),As(r.prototype,As(s,ec(t,a))),Fn[r.prop=e]=r,t.targetTest&&(Nl.push(r),Md[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}d1(e,r),t.register&&t.register(An,r,En)}else P1.push(t)},le=255,ro={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},Du=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*le+.5|0},L1=function(t,e,i){var r=t?fr(t)?[t>>16,t>>8&le,t&le]:0:ro.black,s,a,o,l,c,u,h,f,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ro[t])r=ro[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&le,r&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(jh),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Du(l+1/3,s,a),r[1]=Du(l,s,a),r[2]=Du(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(l1),i&&r.length<4&&(r[3]=1),r}else r=t.match(jh)||ro.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/le,a=r[1]/le,o=r[2]/le,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},I1=function(t){var e=[],i=[],r=-1;return t.split(Ur).forEach(function(s){var a=s.match($s)||[];e.push.apply(e,a),i.push(r+=a.length+1)}),e.c=i,e},d_=function(t,e,i){var r="",s=(t+r).match(Ur),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=L1(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=I1(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Ur,"1").split($s),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(Ur),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Ur=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ro)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),NT=/hsl[a]?\(/,U1=function(t){var e=t.join(" "),i;if(Ur.lastIndex=0,Ur.test(e))return i=NT.test(e),t[1]=d_(t[1],i),t[0]=d_(t[0],i,I1(t[1])),!0},wo,On=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=n()-r,T=m===!0,E,v,R,w;if((d>t||d<0)&&(i+=d-e),r+=d,R=r-i,E=R-a,(E>0||T)&&(w=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,a+=E+(E>=s?4:s-E),v=1),T||(l=c(_)),v)for(p=0;p<o.length;p++)o[p](R,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){h1&&(!Kh&&gd()&&(wi=Kh=window,vd=wi.document||{},Vn.gsap=An,(wi.gsapVersions||(wi.gsapVersions=[])).push(An.version),f1(Ql||wi.GreenSockGlobals||!wi.gsap&&wi||{}),P1.forEach(D1)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},wo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wo=0,c=bo},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,T){var E=d?function(v,R,w,b){m(v,R,w,b),h.remove(E)}:m;return h.remove(m),o[T?"unshift":"push"](E),Ta(),E},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Ta=function(){return!wo&&On.wake()},Vt={},FT=/^[\d.\-M][\d.\-,\s]/,OT=/["']/g,BT=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(OT,"").trim():+c,r=l.substr(o+1).trim();return e},kT=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},zT=function(t){var e=(t+"").split("("),i=Vt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[BT(e[1])]:kT(t).split(",").map(g1)):Vt._CE&&FT.test(t)?Vt._CE("",t):i},N1=function(t){return function(e){return 1-t(1-e)}},F1=function n(t,e){for(var i=t._first,r;i;)i instanceof dn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},vs=function(t,e){return t&&(Ie(t)?t:Vt[t]||zT(t))||e},Rs=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},a;return yn(t,function(o){Vt[o]=Vn[o]=s,Vt[a=o.toLowerCase()]=i;for(var l in s)Vt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Vt[o+"."+l]=s[l]}),s},O1=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lu=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/qh*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*pT((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:O1(o);return s=qh/s,l.config=function(c,u){return n(t,c,u)},l},Iu=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:O1(i);return r.config=function(s){return n(t,s)},r};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Rs(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;Rs("Elastic",Lu("in"),Lu("out"),Lu());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<r?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};Rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Rs("Circ",function(n){return-(a1(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-dT(n*hT)+1});Rs("Back",Iu("in"),Iu("out"),Iu());Vt.SteppedEase=Vt.steps=Vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,a=1-fe;return function(o){return((r*Go(0,a,o)|0)+s)*i}}};Sa.ease=Vt["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Sd+=n+","+n+"Params,"});var B1=function(t,e){this.id=fT++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:m1,this.set=e?e.getSetter:Ad},Ro=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ea(this,+e.duration,1,1),this.data=e.data,Se&&(this._ctx=Se,Se.data.push(this)),wo||On.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ta(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kc(this,i),!s._dp||s.parent||M1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===fe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),_1(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+u_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+u_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ya(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?nc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-fe?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this._tDur,s),r!==!1),Bc(this),ST(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pi(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nc(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=gT);var r=an;return an=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),an=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,h_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,h_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Zn(this,i),Sn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Sn(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-fe)},t.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this;return new Promise(function(s){var a=Ie(i)?i:v1,o=function(){var c=r.then;r.then=null,Ie(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){io(this)},n}();si(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var dn=function(n){s1(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Sn(i.sortChildren),be&&Pi(i.parent||be,Ki(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&S1(Ki(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return po(0,arguments,this),this},e.from=function(r,s,a){return po(1,arguments,this),this},e.fromTo=function(r,s,a,o){return po(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(r,s,Zn(this,a),1),this},e.call=function(r,s,a){return Pi(this,He.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new He(r,a,Zn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,fo(a).immediateRender=Sn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,fo(o).immediateRender=Sn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ze(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,_,m,d,T,E,v,R,w,b;if(this!==be&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,v=this._start,E=this._ts,d=!E,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=Ze(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),R=ya(this._tTime,m),!o&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(f=c-f,b=1),_!==R&&!this._lock){var C=w&&R&1,x=C===(w&&_&1);if(_<R&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Ze(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;F1(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=bT(this,Ze(o),Ze(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!s&&!_&&(Bn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=-fe);break}}p=g}else{p=this._last;for(var S=r<0?r:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,a||an&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=S?-fe:fe);break}}p=g}}if(T&&!s&&(this.pause(),T.render(f>=o?0:-fe)._zTime=f>=o?1:-1,this._ts))return this._start=v,Bc(this),this.render(r,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Bn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(fr(s)||(s=Zn(this,s,r)),!(r instanceof Ro)){if(on(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Je(r))return this.addLabel(r,s);if(Ie(r))r=He.delayedCall(0,r);else return this}return this!==r?Pi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof He?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Je(r)?this.removeLabel(r):Ie(r)?this.killTweensOf(r):(Oc(this,r),r===this._recent&&(this._recent=this._last),gs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ze(On.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Zn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=He.delayedCall(0,s||bo,a);return o.data="isPause",this._hasPause=1,Pi(this,o,Zn(this,r))},e.removePause=function(r){var s=this._first;for(r=Zn(this,r);s;)s._start===r&&s.data==="isPause"&&zr(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)wr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=ii(r),l=this._first,c=fr(s),u;l;)l instanceof He?vT(l._targets,o)&&(c?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=Zn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=He.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||fe,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ea(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,si({startAt:{time:Zn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),f_(this,Zn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),f_(this,Zn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+fe)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return gs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gs(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=ni,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ea(a,a===be&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(be._ts&&(_1(be,nc(r,be)),p1=On.frame),On.frame>=l_){l_+=kn.autoSleep||120;var s=be._first;if((!s||!s._ts)&&kn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},t}(Ro);si(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var GT=function(t,e,i,r,s,a,o){var l=new En(this._pt,t,e,0,1,W1,null,s),c=0,u=0,h,f,p,g,_,m,d,T;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Ao(r)),a&&(T=[i,r],a(T,t,e),i=T[0],r=T[1]),f=i.match(Cu)||[];h=Cu.exec(r);)g=h[0],_=r.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ia(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Cu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(c1.test(r)||d)&&(l.e=0),this._pt=l,l},Ed=function(t,e,i,r,s,a,o,l,c,u){Ie(r)&&(r=r(s||0,t,a));var h=t[e],f=i!=="get"?i:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Ie(h)?c?YT:V1:bd,g;if(Je(r)&&(~r.indexOf("random(")&&(r=Ao(r)),r.charAt(1)==="="&&(g=ia(f,r)+(rn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||nf)return!isNaN(f*r)&&r!==""?(g=new En(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?jT:H1,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&xd(e,r),GT.call(this,t,e,f,r,p,l||kn.stringFilter,c))},VT=function(t,e,i,r,s){if(Ie(t)&&(t=mo(t,s,e,i,r)),!Oi(t)||t.style&&t.nodeType||on(t)||o1(t))return Je(t)?mo(t,s,e,i,r):t;var a={},o;for(o in t)a[o]=mo(t[o],s,e,i,r);return a},k1=function(t,e,i,r,s,a){var o,l,c,u;if(Fn[t]&&(o=new Fn[t]).init(s,o.rawVars?e[t]:VT(e[t],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new En(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==Zs))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},wr,nf,Td=function n(t,e,i){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,T=d&&d.data==="nested"?d.vars.targets:m,E=t._overwrite==="auto"&&!md,v=t.timeline,R,w,b,C,x,S,P,z,F,X,Y,V,q;if(v&&(!f||!s)&&(s="none"),t._ease=vs(s,Sa.ease),t._yEase=h?N1(vs(h===!0?s:h,Sa.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(z=m[0]?_s(m[0]).harness:0,V=z&&r[z.prop],R=ec(r,Md),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?Ul:_T),_._lazy=0),a){if(zr(t._startAt=He.set(m,si({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an||!o&&!p)&&t._startAt.revert(Ul),o&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),b=si({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Sn(l),immediateRender:o,stagger:0,parent:d},R),V&&(b[z.prop]=V),zr(t._startAt=He.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an?t._startAt.revert(Ul):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,fe,fe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Sn(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||yd(m)[w]._gsap,t._ptLookup[w]=X={},$h[P.id]&&Ir.length&&tc(),Y=T===m?w:T.indexOf(x),z&&(F=new z).init(x,V||R,t,Y,T)!==!1&&(t._pt=C=new En(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){X[G]=C}),F.priority&&(S=1)),!z||V)for(b in R)Fn[b]&&(F=k1(b,R,t,Y,x,T))?F.priority&&(S=1):X[b]=C=Ed.call(t,x,b,"get",R[b],Y,T,0,r.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),E&&t._pt&&(wr=t,be.killTweensOf(x,X,t.globalTime(e)),q=!t.parent,wr=0),t._pt&&l&&($h[P.id]=1)}S&&X1(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,f&&e<=0&&v.render(ni,!0,!0)},HT=function(t,e,i,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return nf=1,t.vars[e]="+=0",Td(t,o),nf=0,l?To(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Oe(i)+rn(h.e)),h.b&&(h.b=u.s+rn(h.b))},WT=function(t,e){var i=t[0]?_s(t[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return e;s=As({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},XT=function(t,e,i,r){var s=e.ease||r||"power1.inOut",a,o;if(on(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},mo=function(t,e,i,r,s){return Ie(t)?t.call(e,i,r,s):Je(t)&&~t.indexOf("random(")?Ao(t):t},z1=Sd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",G1={};yn(z1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return G1[n]=1});var He=function(n){s1(t,n);function t(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:fo(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,T=r.parent||be,E=(on(i)||o1(i)?fr(i[0]):"length"in r)?[i]:ii(i),v,R,w,b,C,x,S,P;if(o._targets=E.length?yd(E):To("GSAP target "+i+" not found. https://gsap.com",!kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Ml(c)||Ml(u)){if(r=o.vars,v=o.timeline=new dn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),v.kill(),v.parent=v._dp=Ki(o),v._start=0,f||Ml(c)||Ml(u)){if(b=E.length,S=f&&b1(f),Oi(f))for(C in f)~z1.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(R=0;R<b;R++)w=ec(r,G1),w.stagger=0,d&&(w.yoyoEase=d),P&&As(w,P),x=E[R],w.duration=+mo(c,Ki(o),R,x,E),w.delay=(+mo(u,Ki(o),R,x,E)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,S?S(R,x,E):0),v._ease=Vt.none;v.duration()?c=u=0:o.timeline=0}else if(g){fo(si(v.vars.defaults,{ease:"none"})),v._ease=vs(g.ease||r.ease||"none");var z=0,F,X,Y;if(on(g))g.forEach(function(V){return v.to(E,V,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||XT(C,g[C],w,g.easeEach);for(C in w)for(F=w[C].sort(function(V,q){return V.t-q.t}),z=0,R=0;R<F.length;R++)X=F[R],Y={ease:X.e,duration:(X.t-(R?F[R-1].t:0))/100*c},Y[C]=X.v,v.to(E,Y,z),z+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!md&&(wr=Ki(o),be.killTweensOf(E),wr=0),Pi(T,Ki(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ze(T._time)&&Sn(h)&&yT(Ki(o))&&T.data!=="nested")&&(o._tTime=-fe,o.render(Math.max(0,-u)||0)),m&&S1(Ki(o),m),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-fe&&!u?l:r<fe?0:r,f,p,g,_,m,d,T,E,v;if(!c)TT(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(f=Ze(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Ze(h/_)&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(v=this._yEase,f=c-f),m=ya(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&F1(E,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Ze(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(y1(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(f/c),this._from&&(this.ratio=T=1-T),f&&!o&&!s&&!g&&(Bn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zh(this,r,s,a),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(u&&!o)&&(h||o||d)&&(Bn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){wo||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Td(this,c),u=this._ease(c/this._dur),HT(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(kc(this,0),this.parent||x1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?io(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wr&&wr.vars.overwrite!==!0)._first||io(this),this.parent&&a!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ii(r):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&MT(o,l))return s==="all"&&(this._pt=0),io(this);for(h=this._op=this._op||[],s!=="all"&&(Je(s)&&(_={},yn(s,function(T){return _[T]=1}),s=_),s=WT(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Oc(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&io(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return po(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return po(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return be.killTweensOf(r,s,a)},t}(Ro);si(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(n){He[n]=function(){var t=new dn,e=Qh.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var bd=function(t,e,i){return t[e]=i},V1=function(t,e,i){return t[e](i)},YT=function(t,e,i,r){return t[e](r.fp,i)},qT=function(t,e,i){return t.setAttribute(e,i)},Ad=function(t,e){return Ie(t[e])?V1:_d(t[e])&&t.setAttribute?qT:bd},H1=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},jT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},W1=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},wd=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},KT=function(t,e,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,i),s=a},$T=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Oc(this,e,"_pt"):e.dep||(i=1),e=r;return!i},ZT=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},X1=function(t){for(var e=t._pt,i,r,s,a;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=i}t._pt=s},En=function(){function n(e,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||H1,this.d=l||this,this.set=c||bd,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ZT,this.m=i,this.mt=s,this.tween=r},n}();yn(Sd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Md[n]=1});Vn.TweenMax=Vn.TweenLite=He;Vn.TimelineLite=Vn.TimelineMax=dn;be=new dn({sortChildren:!1,defaults:Sa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=U1;var xs=[],Fl={},JT=[],p_=0,QT=0,Uu=function(t){return(Fl[t]||JT).map(function(e){return e()})},rf=function(){var t=Date.now(),e=[];t-p_>2&&(Uu("matchMediaInit"),xs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=wi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),Uu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),p_=t,Uu("matchMedia"))},Y1=function(){function n(e,i){this.selector=i&&tf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QT++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ie(i)&&(s=r,r=i,i=Ie);var a=this,o=function(){var c=Se,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=tf(s)),Se=a,h=r.apply(a,arguments),Ie(h)&&a._r.push(h),Se=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Ie?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var r=Se;Se=null,i(this),Se=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof He&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=xs.length;a--;)xs[a].id===this.id&&xs.splice(a,1)},t.revert=function(i){this.kill(i||{})},n}(),tb=function(){function n(e){this.contexts=[],this.scope=e,Se&&Se.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Oi(i)||(i={matches:i});var a=new Y1(0,s||this.scope),o=a.conditions={},l,c,u;Se&&!a.selector&&(a.selector=Se.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=wi.matchMedia(i[c]),l&&(xs.indexOf(a)<0&&xs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rf):l.addEventListener("change",rf)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ic={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return D1(r)})},timeline:function(t){return new dn(t)},getTweensOf:function(t,e){return be.getTweensOf(t,e)},getProperty:function(t,e,i,r){Je(t)&&(t=ii(t)[0]);var s=_s(t||{}).get,a=i?v1:g1;return i==="native"&&(i=""),t&&(e?a((Fn[e]&&Fn[e].get||s)(t,e,i,r)):function(o,l,c){return a((Fn[o]&&Fn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=ii(t),t.length>1){var r=t.map(function(u){return An.quickSetter(u,e,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var a=Fn[e],o=_s(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Zs._pt=0,h.init(t,i?u+i:u,Zs,0,[t]),h.render(1,h),Zs._pt&&wd(1,Zs)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,e,i){var r,s=An.to(t,As((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,Sa.ease)),c_(Sa,t||{})},config:function(t){return c_(kn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Fn[o]&&!Vn[o]&&To(e+" effect requires "+o+" plugin.")}),Pu[e]=function(o,l,c){return i(ii(o),si(l||{},s),c)},a&&(dn.prototype[e]=function(o,l,c){return this.add(Pu[e](o,Oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Vt[t]=vs(e)},parseEase:function(t,e){return arguments.length?vs(t,e):Vt},getById:function(t){return be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new dn(t),r,s;for(i.smoothChildTiming=Sn(t.smoothChildTiming),be.remove(i),i._dp=0,i._time=i._tTime=be._time,r=be._first;r;)s=r._next,(e||!(!r._dur&&r instanceof He&&r.vars.onComplete===r._targets[0]))&&Pi(i,r,r._start-r._delay),r=s;return Pi(be,i,0),i},context:function(t,e){return t?new Y1(t,e):Se},matchMedia:function(t){return new tb(t)},matchMediaRefresh:function(){return xs.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||rf()},addEventListener:function(t,e){var i=Fl[t]||(Fl[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Fl[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:LT,wrapYoyo:IT,distribute:b1,random:w1,snap:A1,normalize:DT,getUnit:rn,clamp:wT,splitColor:L1,toArray:ii,selector:tf,mapRange:C1,pipe:CT,unitize:PT,interpolate:UT,shuffle:T1},install:f1,effects:Pu,ticker:On,updateRoot:dn.updateRoot,plugins:Fn,globalTimeline:be,core:{PropTween:En,globals:d1,Tween:He,Timeline:dn,Animation:Ro,getCache:_s,_removeLinkedListItem:Oc,reverting:function(){return an},context:function(t){return t&&Se&&(Se.data.push(t),t._ctx=Se),Se},suppressOverwrites:function(t){return md=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ic[n]=He[n]});On.add(dn.updateRoot);Zs=ic.to({},{duration:0});var eb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},nb=function(t,e){var i=t._targets,r,s,a;for(r in e)for(s=i.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=eb(a,r)),a&&a.modifier&&a.modifier(e[r],t,i[s],r))},Nu=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Je(s)&&(l={},yn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}nb(o,s)}}}},An=ic.registerPlugin({name:"attr",init:function(t,e,i,r,s){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)an?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Nu("roundProps",ef),Nu("modifiers"),Nu("snap",A1))||ic;He.version=dn.version=An.version="3.12.5";h1=1;gd()&&Ta();Vt.Power0;Vt.Power1;Vt.Power2;Vt.Power3;Vt.Power4;Vt.Linear;Vt.Quad;Vt.Cubic;Vt.Quart;Vt.Quint;Vt.Strong;Vt.Elastic;Vt.Back;Vt.SteppedEase;Vt.Bounce;Vt.Sine;Vt.Expo;Vt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var m_,Rr,ra,Rd,fs,__,Cd,ib=function(){return typeof window<"u"},dr={},rs=180/Math.PI,sa=Math.PI/180,Ys=Math.atan2,g_=1e8,Pd=/([A-Z])/g,rb=/(left|right|width|margin|padding|x)/i,sb=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ab=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ob=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},q1=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},j1=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},cb=function(t,e,i){return t.style[e]=i},ub=function(t,e,i){return t.style.setProperty(e,i)},hb=function(t,e,i){return t._gsap[e]=i},fb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},db=function(t,e,i,r,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},pb=function(t,e,i,r,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},Re="transform",Tn=Re+"Origin",mb=function n(t,e){var i=this,r=this.target,s=r.style,a=r._gsap;if(t in dr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Zi(r,o)}):this.tfm[t]=a.x?a[t]:Zi(r,t),t===Tn&&(this.tfm.zOrigin=a.zOrigin);else return Ii.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(Re)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},K1=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_b=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Pd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!i[Re]&&(K1(i),r.zOrigin&&i[Tn]&&(i[Tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$1=function(t,e){var i={target:t,props:[],revert:_b,save:mb};return t._gsap||An.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},Z1,af=function(t,e){var i=Rr.createElementNS?Rr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Rr.createElement(t);return i&&i.style?i:Rr.createElement(t)},Ui=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Pd,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,ba(e)||e,1)||""},v_="O,Moz,ms,Ms,Webkit".split(","),ba=function(t,e,i){var r=e||fs,s=r.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(v_[a]+t in s););return a<0?null:(a===3?"ms":a>=0?v_[a]:"")+t},of=function(){ib()&&window.document&&(m_=window,Rr=m_.document,ra=Rr.documentElement,fs=af("div")||{style:{}},af("div"),Re=ba(Re),Tn=Re+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z1=!!ba("perspective"),Cd=An.core.reverting,Rd=1)},Fu=function n(t){var e=af("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(ra.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),ra.removeChild(e),this.style.cssText=s,a},x_=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},J1=function(t){var e;try{e=t.getBBox()}catch{e=Fu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Fu||(e=Fu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+x_(t,["x","cx","x1"])||0,y:+x_(t,["y","cy","y1"])||0,width:0,height:0}:e},Q1=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&J1(t))},ws=function(t,e){if(e){var i=t.style,r;e in dr&&e!==Tn&&(e=Re),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Pd,"-$1").toLowerCase())):i.removeAttribute(e)}},Cr=function(t,e,i,r,s,a){var o=new En(t._pt,e,i,0,1,a?j1:q1);return t._pt=o,o.b=r,o.e=s,t._props.push(i),o},M_={deg:1,rad:1,turn:1},gb={grid:1,flex:1},Gr=function n(t,e,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=fs.style,l=rb.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;if(r===a||!s||M_[r]||M_[a])return s;if(a!=="px"&&!f&&(s=n(t,e,i,"px")),d=t.getCTM&&Q1(t),(p||a==="%")&&(dr[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],Oe(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Rr||!_.appendChild)&&(_=Rr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===On.time&&!m.uncache)return Oe(s/m.width*h);if(p&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=h+r,g=t[u],T?t.style[e]=T:ws(t,e)}else(p||a==="%")&&!gb[Ui(_,"display")]&&(o.position=Ui(t,"position")),_===t&&(o.position="static"),_.appendChild(fs),g=fs[u],_.removeChild(fs),o.position="absolute";return l&&p&&(m=_s(_),m.time=On.time,m.width=_[u]),Oe(f?g*s/h:g&&s?h/g*s:0)},Zi=function(t,e,i,r){var s;return Rd||of(),e in Ii&&e!=="transform"&&(e=Ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),dr[e]&&e!=="transform"?(s=Po(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:sc(Ui(t,Tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=rc[e]&&rc[e](t,e,i)||Ui(t,e)||m1(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gr(t,e,s,i)+i:s},vb=function(t,e,i,r){if(!i||i==="none"){var s=ba(e,t,1),a=s&&Ui(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=Ui(t,"borderTopColor"))}var o=new En(this._pt,t.style,e,0,1,W1),l=0,c=0,u,h,f,p,g,_,m,d,T,E,v,R;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Ui(t,e)||r,_?t.style[e]=_:ws(t,e)),u=[i,r],U1(u),i=u[0],r=u[1],f=i.match($s)||[],R=r.match($s)||[],R.length){for(;h=$s.exec(r);)m=h[0],T=r.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=ia(p,m)+v),d=parseFloat(m),E=m.substr((d+"").length),l=$s.lastIndex-E.length,E||(E=E||kn.units[e]||v,l===r.length&&(r+=E,o.e+=E)),v!==E&&(p=Gr(t,e,_,E)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?j1:q1;return c1.test(r)&&(o.e=0),this._pt=o,o},S_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xb=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=S_[i]||i,e[1]=S_[r]||r,e.join(" ")},Mb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],dr[o]&&(l=1,o=o==="transformOrigin"?Tn:Re),ws(i,o);l&&(ws(i,Re),a&&(a.svg&&i.removeAttribute("transform"),Po(i,1),a.uncache=1,K1(r)))}},rc={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var a=t._pt=new En(t._pt,e,i,0,0,Mb);return a.u=r,a.pr=-10,a.tween=s,t._props.push(i),1}}},Co=[1,0,0,1,0,0],tv={},ev=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},y_=function(t){var e=Ui(t,Re);return ev(e)?Co:e.substr(7).match(l1).map(Oe)},Dd=function(t,e){var i=t._gsap||_s(t),r=t.style,s=y_(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Co:s):(s===Co&&!t.offsetParent&&t!==ra&&!i.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,ra.appendChild(t)),s=y_(t),l?r.display=l:ws(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ra.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lf=function(t,e,i,r,s,a){var o=t._gsap,l=s||Dd(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],T=l[5],E=e.split(" "),v=parseFloat(E[0])||0,R=parseFloat(E[1])||0,w,b,C,x;i?l!==Co&&(b=p*m-g*_)&&(C=v*(m/b)+R*(-_/b)+(_*T-m*d)/b,x=v*(-g/b)+R*(p/b)-(p*T-g*d)/b,v=C,R=x):(w=J1(t),v=w.x+(~E[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(E[1]||E[0]).indexOf("%")?R/100*w.height:R)),r||r!==!1&&o.smooth?(d=v-c,T=R-u,o.xOffset=h+(d*p+T*_)-d,o.yOffset=f+(d*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=R,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[Tn]="0px 0px",a&&(Cr(a,o,"xOrigin",c,v),Cr(a,o,"yOrigin",u,R),Cr(a,o,"xOffset",h,o.xOffset),Cr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},Po=function(t,e){var i=t._gsap||new B1(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Ui(t,Tn)||"0",u,h,f,p,g,_,m,d,T,E,v,R,w,b,C,x,S,P,z,F,X,Y,V,q,G,et,at,mt,Ct,Qt,W,J;return u=h=f=_=m=d=T=E=v=0,p=g=1,i.svg=!!(t.getCTM&&Q1(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),r.scale=r.rotate=r.translate="none"),b=Dd(t,i.svg),i.svg&&(i.uncache?(G=t.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),lf(t,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,b)),R=i.xOrigin||0,w=i.yOrigin||0,b!==Co&&(P=b[0],z=b[1],F=b[2],X=b[3],u=Y=b[4],h=V=b[5],b.length===6?(p=Math.sqrt(P*P+z*z),g=Math.sqrt(X*X+F*F),_=P||z?Ys(z,P)*rs:0,T=F||X?Ys(F,X)*rs+_:0,T&&(g*=Math.abs(Math.cos(T*sa))),i.svg&&(u-=R-(R*P+w*F),h-=w-(R*z+w*X))):(J=b[6],Qt=b[7],at=b[8],mt=b[9],Ct=b[10],W=b[11],u=b[12],h=b[13],f=b[14],C=Ys(J,Ct),m=C*rs,C&&(x=Math.cos(-C),S=Math.sin(-C),q=Y*x+at*S,G=V*x+mt*S,et=J*x+Ct*S,at=Y*-S+at*x,mt=V*-S+mt*x,Ct=J*-S+Ct*x,W=Qt*-S+W*x,Y=q,V=G,J=et),C=Ys(-F,Ct),d=C*rs,C&&(x=Math.cos(-C),S=Math.sin(-C),q=P*x-at*S,G=z*x-mt*S,et=F*x-Ct*S,W=X*S+W*x,P=q,z=G,F=et),C=Ys(z,P),_=C*rs,C&&(x=Math.cos(C),S=Math.sin(C),q=P*x+z*S,G=Y*x+V*S,z=z*x-P*S,V=V*x-Y*S,P=q,Y=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Oe(Math.sqrt(P*P+z*z+F*F)),g=Oe(Math.sqrt(V*V+J*J)),C=Ys(Y,V),T=Math.abs(C)>2e-4?C*rs:0,v=W?1/(W<0?-W:W):0),i.svg&&(q=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ev(Ui(t,Re)),q&&t.setAttribute("transform",q))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Oe(p),i.scaleY=Oe(g),i.rotation=Oe(_)+o,i.rotationX=Oe(m)+o,i.rotationY=Oe(d)+o,i.skewX=T+o,i.skewY=E+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[Tn]=sc(c)),i.xOffset=i.yOffset=0,i.force3D=kn.force3D,i.renderTransform=i.svg?yb:Z1?nv:Sb,i.uncache=0,i},sc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ou=function(t,e,i){var r=rn(e);return Oe(parseFloat(e)+parseFloat(Gr(t,"x",i+"px",r)))+r},Sb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nv(t,e)},Qr="0deg",Za="0px",ts=") ",nv=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,T=i.target,E=i.zOrigin,v="",R=d==="auto"&&t&&t!==1||d===!0;if(E&&(h!==Qr||u!==Qr)){var w=parseFloat(u)*sa,b=Math.sin(w),C=Math.cos(w),x;w=parseFloat(h)*sa,x=Math.cos(w),a=Ou(T,a,b*x*-E),o=Ou(T,o,-Math.sin(w)*-E),l=Ou(T,l,C*x*-E+E)}m!==Za&&(v+="perspective("+m+ts),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||a!==Za||o!==Za||l!==Za)&&(v+=l!==Za||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ts),c!==Qr&&(v+="rotate("+c+ts),u!==Qr&&(v+="rotateY("+u+ts),h!==Qr&&(v+="rotateX("+h+ts),(f!==Qr||p!==Qr)&&(v+="skew("+f+", "+p+ts),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ts),T.style[Re]=v||"translate(0, 0)"},yb=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,T=i.forceCSS,E=parseFloat(a),v=parseFloat(o),R,w,b,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=sa,c*=sa,R=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=sa,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),R*=x,w*=x)),R=Oe(R),w=Oe(w),b=Oe(b),C=Oe(C)):(R=h,C=f,w=b=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=Gr(p,"x",a,"px"),v=Gr(p,"y",o,"px")),(g||_||m||d)&&(E=Oe(E+g-(g*R+_*b)+m),v=Oe(v+_-(g*w+_*C)+d)),(r||s)&&(x=p.getBBox(),E=Oe(E+r/100*x.width),v=Oe(v+s/100*x.height)),x="matrix("+R+","+w+","+b+","+C+","+E+","+v+")",p.setAttribute("transform",x),T&&(p.style[Re]=x)},Eb=function(t,e,i,r,s){var a=360,o=Je(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?rs:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*g_)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*g_)%a-~~(c/a)*a)),t._pt=f=new En(t._pt,e,i,r,c,ab),f.e=u,f.u="deg",t._props.push(i),f},E_=function(t,e){for(var i in e)t[i]=e[i];return t},Tb=function(t,e,i){var r=E_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,p,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Re]=e,o=Po(i,1),ws(i,Re),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Re],a[Re]=e,o=Po(i,1),a[Re]=c);for(l in dr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=rn(c),g=rn(u),h=p!==g?Gr(i,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new En(t._pt,o,l,h,f-h,sf),t._pt.u=g||0,t._props.push(l));E_(o,r)};yn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",a=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(o){return t<2?n+o:"border"+o+n});rc[t>1?"border"+n:n]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Zi(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var iv={name:"css",register:of,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var a=this._props,o=t.style,l=i.vars.startAt,c,u,h,f,p,g,_,m,d,T,E,v,R,w,b,C;Rd||of(),this.styles=this.styles||$1(t),C=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Fn[_]&&k1(_,e,i,r,t,s)))){if(p=typeof u,g=rc[_],p==="function"&&(u=u.call(i,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ao(u)),g)g(this,t,_,u,i)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ur.lastIndex=0,Ur.test(c)||(m=rn(c),d=rn(u)),d?m!==d&&(c=Gr(t,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Je(c)&&~c.indexOf("random(")&&(c=Ao(c)),rn(c+"")||c==="auto"||(c+=kn.units[_]||rn(Zi(t,_))||""),(c+"").charAt(1)==="="&&(c=Zi(t,_))):c=Zi(t,_),f=parseFloat(c),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in Ii&&(_==="autoAlpha"&&(f===1&&Zi(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Cr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in dr,E){if(this.styles.save(_),v||(R=t._gsap,R.renderTransform&&!e.parseTransform||Po(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new En(this._pt,o,Re,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new En(this._pt,R,"scaleY",R.scaleY,(T?ia(R.scaleY,T+h):h)-R.scaleY||0,sf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Tn,0,o[Tn]),u=xb(u),R.svg?lf(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==R.zOrigin&&Cr(this,R,"zOrigin",R.zOrigin,d),Cr(this,o,_,sc(c),sc(u)));continue}else if(_==="svgOrigin"){lf(t,u,1,w,0,this);continue}else if(_ in tv){Eb(this,R,_,f,T?ia(f,T+u):u);continue}else if(_==="smoothOrigin"){Cr(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){Tb(this,u,t);continue}}else _ in o||(_=ba(_)||_);if(E||(h||h===0)&&(f||f===0)&&!sb.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=rn(u)||(_ in kn.units?kn.units[_]:m),m!==d&&(f=Gr(t,_,c,d)),this._pt=new En(this._pt,E?R:o,_,f,(T?ia(f,T+h):h)-f,!E&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?lb:sf),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=ob);else if(_ in o)vb.call(this,t,_,c,T?T+u:u);else if(_ in t)this.add(t,_,c||t[_],T?T+u:u,r,s);else if(_!=="parseTransform"){xd(_,u);continue}E||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||t[_])),a.push(_)}}b&&X1(this)},render:function(t,e){if(e.tween._time||!Cd())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Zi,aliases:Ii,getSetter:function(t,e,i){var r=Ii[e];return r&&r.indexOf(",")<0&&(e=r),e in dr&&e!==Tn&&(t._gsap.x||Zi(t,"x"))?i&&__===i?e==="scale"?fb:hb:(__=i||{})&&(e==="scale"?db:pb):t.style&&!_d(t.style[e])?cb:~e.indexOf("-")?ub:Ad(t,e)},core:{_removeProperty:ws,_getMatrix:Dd}};An.utils.checkPrefix=ba;An.core.getStyleSaver=$1;(function(n,t,e,i){var r=yn(n+","+t+","+e,function(s){dr[s]=1});yn(t,function(s){kn.units[s]="deg",tv[s]=1}),Ii[r[13]]=n+","+t,yn(i,function(s){var a=s.split(":");Ii[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){kn.units[n]="px"});An.registerPlugin(iv);var so=An.registerPlugin(iv)||An;so.core.Tween;function bb(n){const t=new Float32Array(n*3),i=Math.floor(n*.2),r=n-i,s=Math.PI*(3-Math.sqrt(5)),a=1;for(let c=0;c<r;c++){const u=a*Math.cbrt(Math.random()),h=1-c/(r-1)*2,f=Math.sqrt(Math.max(0,1-h*h)),p=s*c,g=Math.cos(p)*f,_=Math.sin(p)*f,m=c*3;t[m]=g*u,t[m+1]=h*u,t[m+2]=_*u}const o=1.5,l=2.3;for(let c=0;c<i;c++){const u=Math.random()*Math.PI*2,h=Ab(o,l,Math.random()),f=Math.cos(u)*h,p=Math.sin(u)*h,g=(Math.random()-.5)*.05,_=(r+c)*3;t[_]=f,t[_+1]=g,t[_+2]=p}return t}function Ab(n,t,e){return n+(t-n)*e}function wb(n,t="I LOVE U"){const e=document.createElement("canvas"),i=1024;e.width=i,e.height=i/2;const r=e.getContext("2d");r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let s=160;r.font=`bold ${s}px 'Segoe UI', system-ui, sans-serif`;let a=r.measureText(t).width;const o=e.width*.85;a>o&&(s=Math.floor(s*(o/a)),r.font=`bold ${s}px 'Segoe UI', system-ui, sans-serif`),r.fillText(t,e.width/2,e.height/2);const l=r.getImageData(0,0,e.width,e.height).data,c=[];for(let p=0;p<e.height;p+=2)for(let g=0;g<e.width;g+=2){const _=(p*e.width+g)*4+3;l[_]>128&&c.push({x:g,y:p})}c.length===0&&console.warn("[TextShape] Tidak ada pixel valid terdeteksi, fallback ke posisi random.");const u=new Float32Array(n*3),h=6/e.width,f=1.2/e.width;for(let p=0;p<n;p++){let g,_;if(c.length>0){const v=c[Math.floor(Math.random()*c.length)];g=v.x+(Math.random()-.5)*4,_=v.y+(Math.random()-.5)*4}else g=Math.random()*e.width,_=Math.random()*e.height;const m=(g-e.width/2)*h,d=-(_-e.height/2)*h,T=(Math.random()-.5)*.15,E=p*3;u[E]=m+(Math.random()-.5)*f,u[E+1]=d,u[E+2]=T}return u}function Rb(n){const t=new Float32Array(n*3),e=[],i=200;for(let s=0;s<i;s++){const a=s/i*Math.PI*2,o=16*Math.pow(Math.sin(a),3),l=13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a);e.push({x:o,y:l})}const r=.11;for(let s=0;s<n;s++){const a=e[Math.floor(Math.random()*e.length)],o=-2,l=Math.cbrt(Math.random()),c=a.x*r*l,u=(a.y*r-o*r)*l+o*r,h=(Math.random()-.5)*.2,f=s*3;t[f]=c,t[f+1]=u,t[f+2]=h}return t}function Cb(n){const t=new Float32Array(n*3),e=3.4,i=1.6,s=Math.floor(n*.3),a=n-s;for(let o=0;o<a;o++){const l=e*Math.cbrt(Math.random()),c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(Math.max(0,1-c*c)),f=Math.cos(u)*h,p=c,g=Math.sin(u)*h,_=o*3;t[_]=f*l,t[_+1]=p*l,t[_+2]=g*l}for(let o=0;o<s;o++){const l=e+Math.random()*(e*i-e),c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(Math.max(0,1-c*c)),f=Math.cos(u)*h,p=c,g=Math.sin(u)*h,_=(a+o)*3;t[_]=f*l,t[_+1]=p*l,t[_+2]=g*l}return t}const Pb=`// particle.vert.glsl
//
// Morphing dilakukan DI SINI (GPU), bukan di CPU/JavaScript.
// Alasan (lihat diskusi sebelumnya): tween posisi ribuan partikel per-frame di CPU via GSAP/JS
// akan menyebabkan buffer upload cost tinggi + GC pressure. Dengan shader-based morph,
// JavaScript HANYA perlu men-tween satu scalar uniform (uMorphProgress), sisanya interpolasi
// posisi terjadi native di GPU untuk semua partikel sekaligus secara paralel.

attribute vec3 positionA;   // posisi shape asal
attribute vec3 positionB;   // posisi shape target
attribute float randomSeed; // seed unik per partikel untuk noise/turbulence independen

uniform float uMorphProgress; // 0.0 -> 1.0, di-drive oleh GSAP di JS (lihat ParticleSystem.js)
uniform float uTime;
uniform float uBaseSize;
uniform float uPulseAmount;   // dipakai untuk efek heartbeat saat shape = heart
uniform float uWaveAmount;    // dipakai untuk efek floating/wave saat shape = text
uniform float uTurbulenceAmount; // multiplier turbulence dasar, dinaikkan saat shape = scatter
uniform float uViewportHeight; // dalam piksel, di-update saat resize (lihat main.js)

varying float vAlpha;
varying vec3 vColor;

// Simple pseudo-random & noise function (hash-based, murah secara komputasi untuk per-vertex)
float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

vec3 curlNoise(vec3 p, float seed) {
  // Bukan true curl noise (yang butuh gradient field), tapi APPROXIMATION murah
  // menggunakan kombinasi sin/cos berbeda frekuensi per axis, cukup untuk kesan
  // "turbulence organik" tanpa cost computational curl noise sesungguhnya.
  float t = uTime * 0.6 + seed * 10.0;
  return vec3(
    sin(t + p.y * 2.0) * cos(t * 0.7 + p.z),
    cos(t * 0.8 + p.x * 2.0) * sin(t * 0.5 + p.z),
    sin(t * 0.65 + p.x + p.y)
  );
}

void main() {
  // Easing morph progress (smoothstep) di GPU — tidak perlu easing function terpisah di GSAP,
  // GSAP cukup drive linear 0->1, easing visual dilakukan di sini.
  float t = smoothstep(0.0, 1.0, uMorphProgress);

  vec3 morphedPos = mix(positionA, positionB, t);

  // Floating + wave effect (untuk teks "I LOVE U", spek minta terlihat "hidup")
  float wave = sin(uTime * 1.5 + morphedPos.x * 3.0 + randomSeed * 6.28) * uWaveAmount;
  morphedPos.y += wave;

  // Heartbeat pulse (radial scale terhadap centroid, dipakai saat shape = heart)
  float pulse = 1.0 + sin(uTime * 3.2) * 0.06 * uPulseAmount;
  morphedPos *= pulse;

  // Turbulence/noise halus agar partikel terasa "hidup", bukan statis kaku.
  // uTurbulenceAmount dinaikkan saat shape = scatter (lihat ParticleSystem.js) supaya
  // kesan "menyebar" tetap dinamis, bukan cuma bola besar yang diam.
  vec3 turbulence = curlNoise(morphedPos, randomSeed) * 0.02 * uTurbulenceAmount;
  morphedPos += turbulence;

vec4 mvPosition = modelViewMatrix * vec4(morphedPos, 1.0);
gl_Position = projectionMatrix * mvPosition;

// Formula perspective-correct point size berbasis viewport height, BUKAN magic constant.
// uBaseSize sekarang merepresentasikan RADIUS PARTIKEL DALAM WORLD-UNIT (~0.01-0.05),
// bukan skala arbitrer. Dengan kamera di z=6 dan viewport height ~800px, uBaseSize=0.03
// menghasilkan point diameter ~4px — proporsional dan tidak overlap masif seperti sebelumnya
// (bug lama: uBaseSize=2.4 + constant 300 menghasilkan ~120px per partikel, itu penyebab whiteout).
gl_PointSize = uBaseSize * uViewportHeight / -mvPosition.z;

  // Variasi alpha & warna kecil antar partikel berdasar randomSeed agar tidak terlihat monoton
  vAlpha = 0.6 + hash(randomSeed) * 0.4;

  // Interpolasi warna biru neon <-> cyan berdasar seed, bukan warna solid tunggal
  float colorMix = hash(randomSeed * 3.1);
  vColor = mix(vec3(0.2, 0.55, 1.0), vec3(0.3, 0.95, 1.0), colorMix);
}
`,Db=`// particle.frag.glsl
//
// Soft circular falloff (bukan hard square point default WebGL) supaya partikel
// terlihat seperti titik cahaya lembut, bukan kotak pixelated — penting untuk
// kesan "glow" sebelum masuk ke UnrealBloomPass.

varying float vAlpha;
varying vec3 vColor;

void main() {
  // gl_PointCoord: koordinat 0-1 dalam quad point. Hitung jarak dari pusat.
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);

  // Soft falloff dengan kernel gaussian-ish, dan discard di luar radius agar tidak ada
  // artefak kotak tajam di tepi quad point.
  if (dist > 0.5) discard;

  float falloff = smoothstep(0.5, 0.0, dist);
  float glow = pow(falloff, 1.8); // exponent > 1 -> inti lebih terang, tepi lebih lembut

  gl_FragColor = vec4(vColor, glow * vAlpha);
}
`;class Lb{constructor(t){this.scene=t,this.count=oe.particles.COUNT,this.shapes={planet:bb(this.count),text:wb(this.count,"I LOVE U WAWA <3"),heart:Rb(this.count),scatter:Cb(this.count)},this.currentShapeName="planet",this._morphTween=null,this._buildGeometry(),this._buildMaterial(),this.points=new yy(this.geometry,this.material),this.anchor=new to,this.anchor.add(this.points),this.scene.add(this.anchor)}_buildGeometry(){this.geometry=new Bi;const t=this.shapes.planet;this.geometry.setAttribute("positionA",new gn(t.slice(),3)),this.geometry.setAttribute("positionB",new gn(t.slice(),3)),this.geometry.setAttribute("position",new gn(t.slice(),3));const e=new Float32Array(this.count);for(let i=0;i<this.count;i++)e[i]=Math.random();this.geometry.setAttribute("randomSeed",new gn(e,1)),this.geometry.boundingSphere=new Lo(new N(0,0,0),3)}_buildMaterial(){this.material=new sn({vertexShader:Pb,fragmentShader:Db,transparent:!0,depthWrite:!1,blending:Ol,uniforms:{uMorphProgress:{value:0},uTime:{value:0},uBaseSize:{value:oe.particles.BASE_SIZE},uPulseAmount:{value:0},uWaveAmount:{value:0},uTurbulenceAmount:{value:1},uViewportHeight:{value:window.innerHeight}}})}setViewportHeight(t){this.material.uniforms.uViewportHeight.value=t}morphTo(t){if(t===this.currentShapeName)return;if(!this.shapes[t]){console.warn(`[ParticleSystem] Shape "${t}" tidak dikenal.`);return}const e=this.geometry.attributes.position,i=new Float32Array(e.array);this.geometry.attributes.positionA.array.set(i),this.geometry.attributes.positionA.needsUpdate=!0,this.geometry.attributes.positionB.array.set(this.shapes[t]),this.geometry.attributes.positionB.needsUpdate=!0,this._morphTween&&this._morphTween.kill(),this.material.uniforms.uMorphProgress.value=0,this._morphTween=so.to(this.material.uniforms.uMorphProgress,{value:1,duration:oe.particles.MORPH_DURATION,ease:"sine.inOut",onUpdate:()=>this._syncPositionAttributeForCulling(),onComplete:()=>this._syncPositionAttributeForCulling()}),this._setShapeEffects(t),this.currentShapeName=t}_syncPositionAttributeForCulling(){if(this.material.uniforms.uMorphProgress.value>=1){const t=this.geometry.attributes.position;t.array.set(this.geometry.attributes.positionB.array),t.needsUpdate=!0}}_setShapeEffects(t){so.to(this.material.uniforms.uPulseAmount,{value:t==="heart"?1:0,duration:.6,ease:"sine.inOut"}),so.to(this.material.uniforms.uWaveAmount,{value:t==="text"?.04:0,duration:.6,ease:"sine.inOut"}),so.to(this.material.uniforms.uTurbulenceAmount,{value:t==="scatter"?3.5:1,duration:.6,ease:"sine.inOut"})}update(t,e){this.material.uniforms.uTime.value=e,this.currentShapeName==="planet"&&(this.points.rotation.y+=t*.15)}dispose(){this.geometry.dispose(),this.material.dispose()}}const rv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ka{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ib=new rg(-1,1,1,-1,0,1);class Ub extends Bi{constructor(){super(),this.setAttribute("position",new ar([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ar([0,2,0,0,2,0],2))}}const Nb=new Ub;class Ld{constructor(t){this._mesh=new Li(Nb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ib)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fb extends ka{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vo.clone(t.uniforms),this.material=new sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ld(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class T_ extends ka{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Ob extends ka{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Bb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Bt);this._width=i.width,this._height=i.height,e=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rr}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fb(rv),this.copyPass.material.blending=ir,this.clock=new ug}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}T_!==void 0&&(a instanceof T_?i=!0:a instanceof Ob&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kb extends ka{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const zb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Aa extends ka{constructor(t,e,i,r){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new Bt(t.x,t.y):new Bt(256,256),this.clearColor=new qt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(s,a,{type:rr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new gi(s,a,{type:rr});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new gi(s,a,{type:rr});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=zb;this.highPassUniforms=vo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Bt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=rv;this.copyUniforms=vo.clone(u.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ol,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qt,this.oldClearAlpha=1,this.basic=new vf,this.fsQuad=new Ld(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Bt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Aa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Aa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new sn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Bt(.5,.5)},direction:{value:new Bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new sn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Aa.BlurDirectionX=new Bt(1,0);Aa.BlurDirectionY=new Bt(0,1);const Gb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Vb extends ka{constructor(){super();const t=Gb;this.uniforms=vo.clone(t.uniforms),this.material=new Ey({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ld(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===R_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===C_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===P_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===D_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===L_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hb{constructor(t,e,i){this.composer=new Bb(t);const r=new kb(e,i);this.composer.addPass(r),this.bloomPass=new Aa(new Bt(window.innerWidth,window.innerHeight),oe.bloom.STRENGTH,oe.bloom.RADIUS,oe.bloom.THRESHOLD),this.composer.addPass(new Vb)}setSize(t,e){this.composer.setSize(t,e),this.bloomPass.setSize(t,e)}render(){this.composer.render()}}const Sl=document.getElementById("status-overlay"),Bu=document.getElementById("loading-overlay"),Wb=document.getElementById("permission-error"),b_=document.getElementById("camera-video"),Xb=document.getElementById("three-canvas"),Yb={fist:"planet",peace:"text",iloveyou:"heart",open:"scatter",none:null};class qb{constructor(){Gd(this,"_renderLoop",()=>{requestAnimationFrame(this._renderLoop);const t=Math.min(this.clock.getDelta(),1/30),e=this.clock.getElapsedTime(),i=performance.now();this._processHandTracking(i),this.particleSystem.anchor.position.copy(this.mappedTargetPos),this.particleSystem.anchor.quaternion.copy(this.mappedQuat),this.particleSystem.update(t,e),this.bloomComposer.render()});this.clock=new ug,this.mappedTargetPos=new N,this.mappedQuat=new Ss,this.posFilter=new rT(oe.filter.MIN_CUTOFF,oe.filter.BETA,oe.filter.D_CUTOFF),this.quatFilter=new sT(oe.filter.MIN_CUTOFF,oe.filter.BETA,oe.filter.D_CUTOFF),this.handVisible=!1,this._rawPalmPos=new N,this._rawQuat=new Ss}async init(){this._initScene(),this._initParticles(),this._initPostProcessing(),this.gestureStateMachine=new uT(t=>{const e=Yb[t];e&&this.particleSystem.morphTo(e)});try{Sl.textContent="MEMINTA IZIN KAMERA...",this.videoStream=new Ty(b_),await this.videoStream.start()}catch(t){console.error("[App] Gagal mengakses kamera:",t),Wb.style.display="flex",Bu.classList.add("hidden");return}try{Sl.textContent="MEMUAT MODEL HAND LANDMARKER...",this.handTracker=new tT,await this.handTracker.init()}catch(t){console.error("[App] Gagal inisialisasi HandLandmarker:",t),Sl.textContent="GAGAL MEMUAT MODEL TRACKING",Bu.classList.add("hidden");return}Bu.classList.add("hidden"),Sl.textContent="TRACKING AKTIF",window.addEventListener("resize",()=>this._onResize()),this._renderLoop()}_initScene(){this.scene=new My,this.scene.background=new qt(oe.scene.BACKGROUND_COLOR),this.camera=new Qn(oe.scene.CAMERA_FOV,window.innerWidth/window.innerHeight,oe.scene.CAMERA_NEAR,oe.scene.CAMERA_FAR),this.camera.position.z=oe.scene.CAMERA_Z,this.renderer=new xy({canvas:Xb,antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=uf,this.renderer.toneMappingExposure=1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}_initParticles(){this.particleSystem=new Lb(this.scene)}_initPostProcessing(){this.bloomComposer=new Hb(this.renderer,this.scene,this.camera)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.bloomComposer.setSize(window.innerWidth,window.innerHeight),this.particleSystem.setViewportHeight(window.innerHeight)}_processHandTracking(t){const e=this.handTracker.detect(b_);if(!e||!e.landmarks||e.landmarks.length===0){this.handVisible=!1,this.gestureStateMachine.update("none");return}this.handVisible=!0;const i=e.landmarks[0];nT(i,this._rawPalmPos),this.mappedTargetPos.set((.5-this._rawPalmPos.x)*6,(.5-this._rawPalmPos.y)*6,-this._rawPalmPos.z*4),this.posFilter.filter(this.mappedTargetPos,t),eT(i,this._rawQuat)&&(this.quatFilter.filter(this._rawQuat,t),this.mappedQuat.copy(this._rawQuat));const s=cT(i);this.gestureStateMachine.update(s)}}const jb=new qb;jb.init();
//# sourceMappingURL=index-Cz04xdPW.js.map

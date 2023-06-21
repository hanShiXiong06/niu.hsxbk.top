import{cJ as l,cj as c,cD as G,c0 as _,cz as d,cK as K,bT as k,bS as R,cL as w,cM as y,cH as W,cN as u}from"./base-d2ce4248.js";var N=l(c,"WeakMap");const j=N;var q=9007199254740991;function z(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=q}function H(t){return t!=null&&z(t.length)&&!G(t)}var J=Object.prototype;function X(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||J;return t===e}function Y(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var Z="[object Arguments]";function $(t){return _(t)&&d(t)==Z}var D=Object.prototype,Q=D.hasOwnProperty,tt=D.propertyIsEnumerable,et=$(function(){return arguments}())?$:function(t){return _(t)&&Q.call(t,"callee")&&!tt.call(t,"callee")};const rt=et;function at(){return!1}var L=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S=L&&typeof module=="object"&&module&&!module.nodeType&&module,nt=S&&S.exports===L,x=nt?c.Buffer:void 0,ot=x?x.isBuffer:void 0,st=ot||at;const it=st;var ct="[object Arguments]",ut="[object Array]",pt="[object Boolean]",ft="[object Date]",gt="[object Error]",bt="[object Function]",yt="[object Map]",lt="[object Number]",dt="[object Object]",ht="[object RegExp]",Tt="[object Set]",jt="[object String]",vt="[object WeakMap]",mt="[object ArrayBuffer]",At="[object DataView]",_t="[object Float32Array]",wt="[object Float64Array]",$t="[object Int8Array]",St="[object Int16Array]",xt="[object Int32Array]",Ot="[object Uint8Array]",Pt="[object Uint8ClampedArray]",It="[object Uint16Array]",Mt="[object Uint32Array]",a={};a[_t]=a[wt]=a[$t]=a[St]=a[xt]=a[Ot]=a[Pt]=a[It]=a[Mt]=!0;a[ct]=a[ut]=a[mt]=a[pt]=a[At]=a[ft]=a[gt]=a[bt]=a[yt]=a[lt]=a[dt]=a[ht]=a[Tt]=a[jt]=a[vt]=!1;function Et(t){return _(t)&&z(t.length)&&!!a[d(t)]}function Ct(t){return function(r){return t(r)}}var V=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=V&&typeof module=="object"&&module&&!module.nodeType&&module,Bt=g&&g.exports===V,T=Bt&&K.process,Ut=function(){try{var t=g&&g.require&&g.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}();const O=Ut;var P=O&&O.isTypedArray,kt=P?Ct(P):Et;const zt=kt;var Dt=Object.prototype,Lt=Dt.hasOwnProperty;function Vt(t,r){var e=k(t),n=!e&&rt(t),s=!e&&!n&&it(t),p=!e&&!n&&!s&&zt(t),f=e||n||s||p,h=f?Y(t.length,String):[],F=h.length;for(var o in t)(r||Lt.call(t,o))&&!(f&&(o=="length"||s&&(o=="offset"||o=="parent")||p&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||R(o,F)))&&h.push(o);return h}function Ft(t,r){return function(e){return t(r(e))}}var Gt=Ft(Object.keys,Object);const Kt=Gt;var Rt=Object.prototype,Wt=Rt.hasOwnProperty;function Nt(t){if(!X(t))return Kt(t);var r=[];for(var e in Object(t))Wt.call(t,e)&&e!="constructor"&&r.push(e);return r}function qt(t){return H(t)?Vt(t):Nt(t)}function Ht(t,r){for(var e=-1,n=r.length,s=t.length;++e<n;)t[s+e]=r[e];return t}function Jt(){this.__data__=new w,this.size=0}function Xt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Yt(t){return this.__data__.get(t)}function Zt(t){return this.__data__.has(t)}var Qt=200;function te(t,r){var e=this.__data__;if(e instanceof w){var n=e.__data__;if(!y||n.length<Qt-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new W(n)}return e.set(t,r),this.size=e.size,this}function b(t){var r=this.__data__=new w(t);this.size=r.size}b.prototype.clear=Jt;b.prototype.delete=Xt;b.prototype.get=Yt;b.prototype.has=Zt;b.prototype.set=te;function ee(t,r){for(var e=-1,n=t==null?0:t.length,s=0,p=[];++e<n;){var f=t[e];r(f,e,t)&&(p[s++]=f)}return p}function re(){return[]}var ae=Object.prototype,ne=ae.propertyIsEnumerable,I=Object.getOwnPropertySymbols,oe=I?function(t){return t==null?[]:(t=Object(t),ee(I(t),function(r){return ne.call(t,r)}))}:re;const se=oe;function ie(t,r,e){var n=r(t);return k(t)?n:Ht(n,e(t))}function je(t){return ie(t,qt,se)}var ce=l(c,"DataView");const v=ce;var ue=l(c,"Promise");const m=ue;var pe=l(c,"Set");const A=pe;var M="[object Map]",fe="[object Object]",E="[object Promise]",C="[object Set]",B="[object WeakMap]",U="[object DataView]",ge=u(v),be=u(y),ye=u(m),le=u(A),de=u(j),i=d;(v&&i(new v(new ArrayBuffer(1)))!=U||y&&i(new y)!=M||m&&i(m.resolve())!=E||A&&i(new A)!=C||j&&i(new j)!=B)&&(i=function(t){var r=d(t),e=r==fe?t.constructor:void 0,n=e?u(e):"";if(n)switch(n){case ge:return U;case be:return M;case ye:return E;case le:return C;case de:return B}return r});const ve=i;var he=c.Uint8Array;const me=he;export{A as S,me as U,rt as a,Ht as b,ie as c,ve as d,Ct as e,it as f,se as g,b as h,z as i,je as j,qt as k,H as l,zt as m,O as n,X as o,Vt as p,Ft as q,re as s};
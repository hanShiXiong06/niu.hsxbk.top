import{d as Kt,r as U,R as Ot,w as $t,e as j,f as _t,g as S,Q as G,B as V,u as M,y as P,x as D,A as bt,v as At,H as qt}from"./base-d77b0726.js";/* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                 */import{E as Yt,v as Q}from"./index-331c6de1.js";import{t as v}from"./index-70af0995.js";import{u as jt}from"./vue-router-57155f94.js";import{g as Gt}from"./weapp-15d61761.js";import{B as Qt}from"./sys-394b27a4.js";import{e as Wt,a as Zt}from"./common-4a1cac58.js";import{l as Xt}from"./diy-bb47aa1e.js";import{a as st}from"./index-9e51ba8b.js";import{E as te}from"./index-c1eb81db.js";import{E as ee}from"./index-91bdda63.js";import{a as ne,E as oe}from"./index-68c5ad54.js";import{E as re}from"./index-435afe75.js";import"./index-e37943c3.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./event-e06a23af.js";import"./index-d1e433eb.js";import"./index-6245131d.js";import"./index-f2dc9b9f.js";import"./_Uint8Array-2fd72219.js";import"./_initCloneObject-22d1caee.js";import"./index-3b19c3d7.js";import"./index-a20d1a31.js";import"./debounce-8a1738b0.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";var x={},ie=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Nt={},T={};let wt;const se=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return se[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');wt=t};T.isKanjiModeEnabled=function(){return typeof wt<"u"};T.toSJIS=function(t){return wt(t)};var et={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(et);function St(){this.buffer=[],this.length=0}St.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ae=St;function Y(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Y.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};Y.prototype.get=function(e,t){return this.data[e*this.size+t]};Y.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};Y.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ue=Y,Mt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,u=[n-7];for(let a=1;a<o-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||o.push([n[u],n[a]]);return o}})(Mt);var Pt={};const le=T.getSymbolSize,It=7;Pt.getPositions=function(t){const i=le(t);return[[0,0],[i-It,0],[0,i-It]]};var Rt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,u=0,a=0,l=null,f=null;for(let C=0;C<n;C++){u=a=0,l=f=null;for(let m=0;m<n;m++){let g=o.get(C,m);g===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=g,u=1),g=o.get(m,C),g===f?a++:(a>=5&&(s+=t.N1+(a-5)),f=g,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const l=o.get(u,a)+o.get(u,a+1)+o.get(u+1,a)+o.get(u+1,a+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,u=0,a=0;for(let l=0;l<n;l++){u=a=0;for(let f=0;f<n;f++)u=u<<1&2047|o.get(l,f),f>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|o.get(f,l),f>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,i(o,a,u))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,o);const f=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),f<a&&(a=f,u=l)}return u}})(Rt);var nt={};const F=et,W=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];nt.getBlocksCount=function(t,i){switch(i){case F.L:return W[(t-1)*4+0];case F.M:return W[(t-1)*4+1];case F.Q:return W[(t-1)*4+2];case F.H:return W[(t-1)*4+3];default:return}};nt.getTotalCodewordsCount=function(t,i){switch(i){case F.L:return Z[(t-1)*4+0];case F.M:return Z[(t-1)*4+1];case F.Q:return Z[(t-1)*4+2];case F.H:return Z[(t-1)*4+3];default:return}};var Lt={},ot={};const $=new Uint8Array(512),X=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)$[i]=t,X[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)$[i]=$[i-255]})();ot.log=function(t){if(t<1)throw new Error("log("+t+")");return X[t]};ot.exp=function(t){return $[t]};ot.mul=function(t,i){return t===0||i===0?0:$[X[t]+X[i]]};(function(e){const t=ot;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let u=0;u<o.length;u++)n[s+u]^=t.mul(r[s],o[u]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Lt);const Dt=Lt;function yt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}yt.prototype.initialize=function(t){this.degree=t,this.genPoly=Dt.generateECPolynomial(this.degree)};yt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Dt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var ce=yt,Ut={},k={},Et={};Et.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var R={};const Ft="[0-9]+",fe="[A-Z $%*+\\-./:]+";let q="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";q=q.replace(/u/g,"\\u");const de="(?:(?![A-Z0-9 $%*+\\-./:]|"+q+`)(?:.|[\r
]))+`;R.KANJI=new RegExp(q,"g");R.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");R.BYTE=new RegExp(de,"g");R.NUMERIC=new RegExp(Ft,"g");R.ALPHANUMERIC=new RegExp(fe,"g");const ge=new RegExp("^"+q+"$"),he=new RegExp("^"+Ft+"$"),me=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");R.testKanji=function(t){return ge.test(t)};R.testNumeric=function(t){return he.test(t)};R.testAlphanumeric=function(t){return me.test(t)};(function(e){const t=Et,i=R;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(k);(function(e){const t=T,i=nt,r=et,o=k,n=Et,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(s);function a(m,g,p){for(let w=1;w<=40;w++)if(g<=e.getCapacity(w,p,m))return w}function l(m,g){return o.getCharCountIndicator(m,g)+4}function f(m,g){let p=0;return m.forEach(function(w){const b=l(w.mode,g);p+=b+w.getBitsLength()}),p}function C(m,g){for(let p=1;p<=40;p++)if(f(m,p)<=e.getCapacity(p,g,o.MIXED))return p}e.from=function(g,p){return n.isValid(g)?parseInt(g,10):p},e.getCapacity=function(g,p,w){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=o.BYTE);const b=t.getSymbolTotalCodewords(g),h=i.getTotalCodewordsCount(g,p),y=(b-h)*8;if(w===o.MIXED)return y;const c=y-l(w,g);switch(w){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(g,p){let w;const b=r.from(p,r.M);if(Array.isArray(g)){if(g.length>1)return C(g,b);if(g.length===0)return 1;w=g[0]}else w=g;return a(w.mode,w.getLength(),b)},e.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let p=g<<12;for(;t.getBCHDigit(p)-u>=0;)p^=s<<t.getBCHDigit(p)-u;return g<<12|p}})(Ut);var kt={};const dt=T,Vt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,pe=1<<14|1<<12|1<<10|1<<4|1<<1,Tt=dt.getBCHDigit(Vt);kt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;dt.getBCHDigit(o)-Tt>=0;)o^=Vt<<dt.getBCHDigit(o)-Tt;return(r<<10|o)^pe};var xt={};const we=k;function z(e){this.mode=we.NUMERIC,this.data=e.toString()}z.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var ye=z;const Ee=k,at=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function H(e){this.mode=Ee.ALPHANUMERIC,this.data=e}H.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=at.indexOf(this.data[i])*45;r+=at.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(at.indexOf(this.data[i]),6)};var Ce=H,Be=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const _e=Be,be=k;function J(e){this.mode=be.BYTE,typeof e=="string"&&(e=_e(e)),this.data=new Uint8Array(e)}J.getBitsLength=function(t){return t*8};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ae=J;const Ie=k,Te=T;function K(e){this.mode=Ie.KANJI,this.data=e}K.getBitsLength=function(t){return t*13};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Te.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ve=K,gt={},Ne={get exports(){return gt},set exports(e){gt=e}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var u=t.PriorityQueue.make();u.push(r,0);for(var a,l,f,C,m,g,p,w,b;!u.empty();){a=u.pop(),l=a.value,C=a.cost,m=i[l]||{};for(f in m)m.hasOwnProperty(f)&&(g=m[f],p=C+g,w=s[f],b=typeof s[f]>"u",(b||w>p)&&(s[f]=p,u.push(f,p),n[f]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var h=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ne);(function(e){const t=k,i=ye,r=Ce,o=Ae,n=ve,s=R,u=T,a=gt;function l(h){return unescape(encodeURIComponent(h)).length}function f(h,y,c){const d=[];let E;for(;(E=h.exec(c))!==null;)d.push({data:E[0],index:E.index,mode:y,length:E[0].length});return d}function C(h){const y=f(s.NUMERIC,t.NUMERIC,h),c=f(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,E;return u.isKanjiModeEnabled()?(d=f(s.BYTE,t.BYTE,h),E=f(s.KANJI,t.KANJI,h)):(d=f(s.BYTE_KANJI,t.BYTE,h),E=[]),y.concat(c,d,E).sort(function(_,A){return _.index-A.index}).map(function(_){return{data:_.data,mode:_.mode,length:_.length}})}function m(h,y){switch(y){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return r.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return o.getBitsLength(h)}}function g(h){return h.reduce(function(y,c){const d=y.length-1>=0?y[y.length-1]:null;return d&&d.mode===c.mode?(y[y.length-1].data+=c.data,y):(y.push(c),y)},[])}function p(h){const y=[];for(let c=0;c<h.length;c++){const d=h[c];switch(d.mode){case t.NUMERIC:y.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:y.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:y.push([d,{data:d.data,mode:t.BYTE,length:l(d.data)}]);break;case t.BYTE:y.push([{data:d.data,mode:t.BYTE,length:l(d.data)}])}}return y}function w(h,y){const c={},d={start:{}};let E=["start"];for(let B=0;B<h.length;B++){const _=h[B],A=[];for(let N=0;N<_.length;N++){const I=_[N],O=""+B+N;A.push(O),c[O]={node:I,lastCount:0},d[O]={};for(let it=0;it<E.length;it++){const L=E[it];c[L]&&c[L].node.mode===I.mode?(d[L][O]=m(c[L].lastCount+I.length,I.mode)-m(c[L].lastCount,I.mode),c[L].lastCount+=I.length):(c[L]&&(c[L].lastCount=I.length),d[L][O]=m(I.length,I.mode)+4+t.getCharCountIndicator(I.mode,y))}}E=A}for(let B=0;B<E.length;B++)d[E[B]].end=0;return{map:d,table:c}}function b(h,y){let c;const d=t.getBestModeForData(h);if(c=t.from(y,d),c!==t.BYTE&&c.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(c)+`.
 Suggested mode is: `+t.toString(d));switch(c===t.KANJI&&!u.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new r(h);case t.KANJI:return new n(h);case t.BYTE:return new o(h)}}e.fromArray=function(y){return y.reduce(function(c,d){return typeof d=="string"?c.push(b(d,null)):d.data&&c.push(b(d.data,d.mode)),c},[])},e.fromString=function(y,c){const d=C(y,u.isKanjiModeEnabled()),E=p(d),B=w(E,c),_=a.find_path(B.map,"start","end"),A=[];for(let N=1;N<_.length-1;N++)A.push(B.table[_[N]].node);return e.fromArray(g(A))},e.rawSplit=function(y){return e.fromArray(C(y,u.isKanjiModeEnabled()))}})(xt);const rt=T,ut=et,Se=ae,Me=ue,Pe=Mt,Re=Pt,ht=Rt,mt=nt,Le=ce,tt=Ut,De=kt,Ue=k,lt=xt;function Fe(e,t){const i=e.size,r=Re.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||i<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function ke(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Ve(e,t){const i=Pe.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(o+s,n+u,!0,!0):e.set(o+s,n+u,!1,!0)}}function xe(e,t){const i=e.size,r=tt.getEncodedBits(t);let o,n,s;for(let u=0;u<18;u++)o=Math.floor(u/3),n=u%3+i-8-3,s=(r>>u&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function ct(e,t,i){const r=e.size,o=De.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function ze(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let u=i-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,u-a)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(o,u-a,l),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function He(e,t,i){const r=new Se;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Ue.getCharCountIndicator(a.mode,e)),a.write(r)});const o=rt.getSymbolTotalCodewords(e),n=mt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const u=(s-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return Je(r,e,t)}function Je(e,t,i){const r=rt.getSymbolTotalCodewords(t),o=mt.getTotalCodewordsCount(t,i),n=r-o,s=mt.getBlocksCount(t,i),u=r%s,a=s-u,l=Math.floor(r/s),f=Math.floor(n/s),C=f+1,m=l-f,g=new Le(m);let p=0;const w=new Array(s),b=new Array(s);let h=0;const y=new Uint8Array(e.buffer);for(let _=0;_<s;_++){const A=_<a?f:C;w[_]=y.slice(p,p+A),b[_]=g.encode(w[_]),p+=A,h=Math.max(h,A)}const c=new Uint8Array(r);let d=0,E,B;for(E=0;E<h;E++)for(B=0;B<s;B++)E<w[B].length&&(c[d++]=w[B][E]);for(E=0;E<m;E++)for(B=0;B<s;B++)c[d++]=b[B][E];return c}function Ke(e,t,i,r){let o;if(Array.isArray(e))o=lt.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const f=lt.rawSplit(e);l=tt.getBestVersionForData(f,i)}o=lt.fromString(e,l||40)}else throw new Error("Invalid data");const n=tt.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=He(t,i,o),u=rt.getSymbolSize(t),a=new Me(u);return Fe(a,t),ke(a),Ve(a,t),ct(a,i,0),t>=7&&xe(a,t),ze(a,s),isNaN(r)&&(r=ht.getBestMask(a,ct.bind(null,a,i))),ht.applyMask(r,a),ct(a,i,r),{modules:a,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Nt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=ut.M,o,n;return typeof i<"u"&&(r=ut.from(i.errorCorrectionLevel,ut.M),o=tt.from(i.version),n=ht.from(i.maskPattern),i.toSJISFunc&&rt.setToSJISFunction(i.toSJISFunc)),Ke(t,o,r,n)};var zt={},Ct={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,u=o.modules.data,a=e.getScale(s,n),l=Math.floor((s+n.margin*2)*a),f=n.margin*a,C=[n.color.light,n.color.dark];for(let m=0;m<l;m++)for(let g=0;g<l;g++){let p=(m*l+g)*4,w=n.color.light;if(m>=f&&g>=f&&m<l-f&&g<l-f){const b=Math.floor((m-f)/a),h=Math.floor((g-f)/a);w=C[u[b*s+h]?1:0]}r[p++]=w.r,r[p++]=w.g,r[p++]=w.b,r[p]=w.a}}})(Ct);(function(e){const t=Ct;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,l=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(l=r()),a=t.getOptions(a);const f=t.getImageWidth(n.modules.size,a),C=l.getContext("2d"),m=C.createImageData(f,f);return t.qrToImageData(m.data,n,a),i(C,l,f),C.putImageData(m,0,0),l},e.renderToDataURL=function(n,s,u){let a=u;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const l=e.render(n,s,a),f=a.type||"image/png",C=a.rendererOpts||{};return l.toDataURL(f,C.quality)}})(zt);var Ht={};const Oe=Ct;function vt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ft(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function $e(e,t,i){let r="",o=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),l=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(r+=n?ft("M",a+i,.5+l+i):ft("m",o,0),o=0,n=!1),a+1<t&&e[u+1]||(r+=ft("h",s),s=0)):o++}return r}Ht.render=function(t,i,r){const o=Oe.getOptions(i),n=t.modules.size,s=t.modules.data,u=n+o.margin*2,a=o.color.light.a?"<path "+vt(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+vt(o.color.dark,"stroke")+' d="'+$e(s,n,o.margin)+'"/>',f='viewBox="0 0 '+u+" "+u+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+f+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof r=="function"&&r(null,m),m};const qe=ie,pt=Nt,Jt=zt,Ye=Ht;function Bt(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!qe())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(a,l){try{const f=pt.create(i,r);a(e(f,t,r))}catch(f){l(f)}})}try{const a=pt.create(i,r);o(null,e(a,t,r))}catch(a){o(a)}}x.create=pt.create;x.toCanvas=Bt.bind(null,Jt.render);x.toDataURL=Bt.bind(null,Jt.renderToDataURL);x.toString=Bt.bind(null,function(e,t,i){return Ye.render(e,i)});const je={class:"main-container w-[375px] mx-auto my-[20px] relative"},Ge={class:"flex h-full"},Qe=["src"],We={class:"w-[375px] border border-slate-100 bg-body pt-[20px] px-[20px]"},Ze={class:"font-bold text-xl mb-[40px]"},Xe={class:"mb-[20px] flex flex-col"},tn={class:"mb-[10px]"},en={key:0,class:"w-[400px] absolute bg-body top-[10%] -right-[450px]"},nn={class:"info-wrap mt-[20px]"},on={class:"px-[20px] pb-[10px] font-bold"},rn={class:"px-[20px] pb-[10px] font-bold mt-[40px]"},sn={class:"text-gray-400"},On=Kt({__name:"preview",setup(e){const t=U(""),i=U(""),r=U(""),o=U(""),n=U(!1),s=U(!1),u=U(0),a=U(0);new Date().getTime();const l=jt();l.query.id=l.query.id||0,l.query.name=l.query.name||"",l.query.url=l.query.url||"",Qt().then(c=>{t.value=c.data.wap_url,C()});const f=()=>{if(i.value.trim().length==0){st({type:"warning",message:`${v("wapDomainPlaceholder")}`});return}t.value=i.value+"/wap",C(),Zt.set({key:"wap_domain",data:t.value}),n.value=!0,s.value=!1},C=()=>{l.query.url?(o.value=`${t.value}${l.query.url}`,x.toDataURL(o.value,{errorCorrectionLevel:"L",margin:0,width:100}).then(c=>{r.value=c}),u.value=new Date().getTime(),setTimeout(()=>{a.value==0&&g()},1e3*2)):Xt({id:l.query.id,name:l.query.name}).then(c=>{let d=c.data;o.value=`${t.value}/${d.page}`,x.toDataURL(o.value,{errorCorrectionLevel:"L",margin:0,width:100}).then(E=>{r.value=E}),u.value=new Date().getTime(),m(),setTimeout(()=>{a.value==0&&g()},1e3*2)})};window.addEventListener("message",c=>{try{let E=JSON.parse(c.data);if(["appOnLaunch","appOnReady"].indexOf(E.type)!=-1){s.value=!1,n.value=!0;var d=new Date().getTime();a.value=d-u.value}}catch(E){g(),console.log("后台接受数据错误",E)}},!1);const m=()=>{let c=JSON.stringify({type:"appOnReady",message:"加载完成"});window.previewIframe&&window.previewIframe.contentWindow.postMessage(c,"*")},g=()=>{s.value=!0,n.value=!1,o.value="",r.value=""},p=Ot({qr_code:""});Gt().then(c=>{if(c.code==1){let d=c.data;p.qr_code=d.qr_code}});const{copy:w,isSupported:b,copied:h}=Yt(),y=c=>{b.value||st({message:v("notSupportCopy"),type:"warning"}),w(c)};return $t(h,()=>{h.value&&st({message:v("copySuccess"),type:"success"})}),(c,d)=>{const E=te,B=ee,_=ne,A=re,N=oe;return j(),_t("div",je,[S("div",Ge,[G(S("iframe",{class:"w-[375px]",src:o.value,frameborder:"0",id:"previewIframe"},null,8,Qe),[[Q,n.value]]),G(S("div",We,[S("div",Ze,V(M(v)("developTitle")),1),S("div",Xe,[S("text",tn,V(M(v)("wapDomain")),1),P(E,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=I=>i.value=I),placeholder:M(v)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),P(B,{type:"primary",onClick:f},{default:D(()=>[bt(V(M(v)("confirm")),1)]),_:1})],512),[[Q,s.value]]),n.value?(j(),_t("div",en,[S("div",nn,[S("div",on,V(M(v)("h5")),1),P(N,{"label-width":"40px",class:"px-[20px]"},{default:D(()=>[G(P(_,{label:M(v)("link")},{default:D(()=>[P(E,{readonly:"",value:o.value},{append:D(()=>[P(B,{onClick:d[1]||(d[1]=I=>y(o.value)),class:"bg-primary copy"},{default:D(()=>[bt(V(M(v)("copy")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),[[Q,o.value]]),G(P(_,{label:" "},{default:D(()=>[P(A,{src:r.value},null,8,["src"])]),_:1},512),[[Q,r.value]])]),_:1}),S("div",rn,V(M(v)("weapp")),1),P(N,{"label-width":"40px",class:"px-[20px]"},{default:D(()=>[p.qr_code?(j(),At(_,{key:0,label:" "},{default:D(()=>[P(A,{class:"w-[100px] h-[100px]",src:M(Wt)(p.qr_code)},null,8,["src"])]),_:1})):(j(),At(_,{key:1,label:" "},{default:D(()=>[S("span",sn,V(M(v)("weappNotSet")),1)]),_:1}))]),_:1})])])):qt("",!0)])])}}});export{On as default};

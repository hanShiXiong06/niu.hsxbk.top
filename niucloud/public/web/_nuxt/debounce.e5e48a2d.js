import{c2 as S,aH as _,c3 as U,__tla as X}from"./entry.9b92f05f.js";let M,q=Promise.all([(()=>{try{return X}catch{}})()]).then(async()=>{var O=/\s/;function W(t){for(var r=t.length;r--&&O.test(t.charAt(r)););return r}var A=/^\s+/;function D(t){return t&&t.slice(0,W(t)+1).replace(A,"")}var g=0/0,H=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,P=/^0o[0-7]+$/i,j=parseInt;function x(t){if(typeof t=="number")return t;if(S(t))return g;if(_(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=_(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=D(t);var a=I.test(t);return a||P.test(t)?j(t.slice(2),a?2:8):H.test(t)?g:+t}var k=function(){return U.Date.now()};const p=k;var z="Expected a function",B=Math.max,C=Math.min;M=function(t,r,a){var o,c,m,f,e,u,s=0,$=!1,v=!1,h=!0;if(typeof t!="function")throw new TypeError(z);r=x(r)||0,_(a)&&($=!!a.leading,v="maxWait"in a,m=v?B(x(a.maxWait)||0,r):m,h="trailing"in a?!!a.trailing:h);function y(i){var n=o,l=c;return o=c=void 0,s=i,f=t.apply(l,n),f}function F(i){return s=i,e=setTimeout(d,r),$?y(i):f}function L(i){var n=i-u,l=i-s,E=r-n;return v?C(E,m-l):E}function b(i){var n=i-u,l=i-s;return u===void 0||n>=r||n<0||v&&l>=m}function d(){var i=p();if(b(i))return w(i);e=setTimeout(d,L(i))}function w(i){return e=void 0,h&&o?y(i):(o=c=void 0,f)}function N(){e!==void 0&&clearTimeout(e),s=0,o=u=c=e=void 0}function R(){return e===void 0?f:w(p())}function T(){var i=p(),n=b(i);if(o=arguments,c=this,u=i,n){if(e===void 0)return F(u);if(v)return clearTimeout(e),e=setTimeout(d,r),y(u)}return e===void 0&&(e=setTimeout(d,r)),f}return T.cancel=N,T.flush=R,T}});export{q as __tla,M as d};
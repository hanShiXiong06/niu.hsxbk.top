import{B as Mt,d as B,i as we,c as Bt,am as ht,R as dn,b as Q,a1 as $e,C as It,z as yt}from"./index-e37943c3.js";import{c as P,W as _e,w as D,o as qe,P as vn,u as c,s as gn,r as j,O as xe,aF as mn,aK as hn,aW as yn,J as Te,d as N,h as ie,_ as se,b as Se,I as le,e as V,f as He,n as jt,j as bn,N as Ze,Q as Ft,b0 as wn,q as On,F as En,aG as Tn,b1 as Cn,y as Ce,v as ce,x as ee,C as Je,H as Re,l as _t,G as Rn,a7 as Le,a9 as An,aH as Pn,b2 as xn,B as Sn}from"./base-d77b0726.js";import{E as bt}from"./aria-60e0cdc6.js";import{u as Dt,v as kn,T as Mn,o as Bn}from"./index-331c6de1.js";import{c as In,b as jn}from"./index-6245131d.js";import{u as Fn}from"./index-de9bede2.js";import{E as _n}from"./focus-trap-98fda164.js";function Dn(e){return e===void 0}const X=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Xr=e=>t=>t.pointerType==="mouse"?e(t):void 0,Xe=Symbol("popper"),Lt=Symbol("popperContent"),Ye=Symbol("elTooltip"),Ln=Mt({type:B(Boolean),default:null}),Nn=Mt({type:B(Function)}),$n=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Ln,[n]:Nn};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:i,shouldProceed:l,onShow:f,onHide:g})=>{const h=vn(),{emit:v}=h,m=h.props,d=P(()=>_e(m[n])),E=P(()=>m[e]===null),p=O=>{s.value!==!0&&(s.value=!0,u&&(u.value=O),_e(f)&&f(O))},w=O=>{s.value!==!1&&(s.value=!1,u&&(u.value=O),_e(g)&&g(O))},T=O=>{if(m.disabled===!0||_e(l)&&!l())return;const R=d.value&&we;R&&v(t,!0),(E.value||!R)&&p(O)},y=O=>{if(m.disabled===!0||!we)return;const R=d.value&&we;R&&v(t,!1),(E.value||!R)&&w(O)},C=O=>{Bt(O)&&(m.disabled&&O?d.value&&v(t,!1):s.value!==O&&(O?p():w()))},A=()=>{s.value?y():T()};return D(()=>m[e],C),i&&h.appContext.config.globalProperties.$route!==void 0&&D(()=>({...h.proxy.$route}),()=>{i.value&&s.value&&y()}),qe(()=>{C(m[e])}),{hide:y,show:T,toggle:A,hasUpdateHandler:d}},useModelToggleProps:r,useModelToggleEmits:o}};var $="top",q="bottom",K="right",H="left",Qe="auto",ke=[$,q,K,H],fe="start",Ae="end",Hn="clippingParents",Nt="viewport",be="popper",Wn="reference",wt=ke.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+Ae])},[]),et=[].concat(ke,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+Ae])},[]),qn="beforeRead",Kn="read",Un="afterRead",zn="beforeMain",Vn="main",Zn="afterMain",Gn="beforeWrite",Jn="write",Xn="afterWrite",Yn=[qn,Kn,Un,zn,Vn,Zn,Gn,Jn,Xn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function W(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Qn(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!W(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(s){var u=r[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function eo(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},s=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=s.reduce(function(i,l){return i[l]="",i},{});!W(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(i){r.removeAttribute(i)}))})}}var $t={name:"applyStyles",enabled:!0,phase:"write",fn:Qn,effect:eo,requires:["computeStyles"]};function Z(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(W(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(o=ve(n.width)/s||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function nt(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Ht(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&tt(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Y(e){return U(e).getComputedStyle(e)}function to(e){return["table","td","th"].indexOf(G(e))>=0}function te(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ke(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||te(e)}function Ot(e){return!W(e)||Y(e).position==="fixed"?null:e.offsetParent}function no(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&W(e)){var o=Y(e);if(o.position==="fixed")return null}var r=Ke(e);for(tt(r)&&(r=r.host);W(r)&&["html","body"].indexOf(G(r))<0;){var a=Y(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Me(e){for(var t=U(e),n=Ot(e);n&&to(n)&&Y(n).position==="static";)n=Ot(n);return n&&(G(n)==="html"||G(n)==="body"&&Y(n).position==="static")?t:n||no(e)||t}function ot(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Oe(e,t,n){return ae(e,We(t,n))}function oo(e,t,n){var o=Oe(e,t,n);return o>n?n:o}function Wt(){return{top:0,right:0,bottom:0,left:0}}function qt(e){return Object.assign({},Wt(),e)}function Kt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var ro=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,qt(typeof e!="number"?e:Kt(e,ke))};function ao(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=Z(n.placement),i=ot(u),l=[H,K].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!s)){var g=ro(r.padding,n),h=nt(a),v=i==="y"?$:H,m=i==="y"?q:K,d=n.rects.reference[f]+n.rects.reference[i]-s[i]-n.rects.popper[f],E=s[i]-n.rects.reference[i],p=Me(a),w=p?i==="y"?p.clientHeight||0:p.clientWidth||0:0,T=d/2-E/2,y=g[v],C=w-h[f]-g[m],A=w/2-h[f]/2+T,O=Oe(y,A,C),R=i;n.modifiersData[o]=(t={},t[R]=O,t.centerOffset=O-A,t)}}function io(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Ht(t.elements.popper,r)||(t.elements.arrow=r))}var so={name:"arrow",enabled:!0,phase:"main",fn:ao,effect:io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var lo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function uo(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Et(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,s=e.offsets,u=e.position,i=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,g=e.isFixed,h=s.x,v=h===void 0?0:h,m=s.y,d=m===void 0?0:m,E=typeof f=="function"?f({x:v,y:d}):{x:v,y:d};v=E.x,d=E.y;var p=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),T=H,y=$,C=window;if(l){var A=Me(n),O="clientHeight",R="clientWidth";if(A===U(n)&&(A=te(n),Y(A).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),A=A,r===$||(r===H||r===K)&&a===Ae){y=q;var I=g&&A===C&&C.visualViewport?C.visualViewport.height:A[O];d-=I-o.height,d*=i?1:-1}if(r===H||(r===$||r===q)&&a===Ae){T=K;var x=g&&A===C&&C.visualViewport?C.visualViewport.width:A[R];v-=x-o.width,v*=i?1:-1}}var M=Object.assign({position:u},l&&lo),L=f===!0?uo({x:v,y:d}):{x:v,y:d};if(v=L.x,d=L.y,i){var k;return Object.assign({},M,(k={},k[y]=w?"0":"",k[T]=p?"0":"",k.transform=(C.devicePixelRatio||1)<=1?"translate("+v+"px, "+d+"px)":"translate3d("+v+"px, "+d+"px, 0)",k))}return Object.assign({},M,(t={},t[y]=w?d+"px":"",t[T]=p?v+"px":"",t.transform="",t))}function po(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,i=u===void 0?!0:u,l={placement:Z(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Et(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Et(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Ut={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:po,data:{}},De={passive:!0};function co(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,s=o.resize,u=s===void 0?!0:s,i=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",n.update,De)}),u&&i.addEventListener("resize",n.update,De),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",n.update,De)}),u&&i.removeEventListener("resize",n.update,De)}}var zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:co,data:{}},fo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return fo[t]})}var vo={start:"end",end:"start"};function Tt(e){return e.replace(/start|end/g,function(t){return vo[t]})}function rt(e){var t=U(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function at(e){return ge(te(e)).left+rt(e).scrollLeft}function go(e){var t=U(e),n=te(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,s=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:s+at(e),y:u}}function mo(e){var t,n=te(e),o=rt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+at(e),i=-o.scrollTop;return Y(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:s,x:u,y:i}}function it(e){var t=Y(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Vt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:W(e)&&it(e)?e:Vt(Ke(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Vt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=U(o),s=r?[a].concat(a.visualViewport||[],it(o)?o:[]):o,u=t.concat(s);return r?u:u.concat(Ee(Ke(s)))}function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ho(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ct(e,t){return t===Nt?Ge(go(e)):de(t)?ho(t):Ge(mo(te(e)))}function yo(e){var t=Ee(Ke(e)),n=["absolute","fixed"].indexOf(Y(e).position)>=0,o=n&&W(e)?Me(e):e;return de(o)?t.filter(function(r){return de(r)&&Ht(r,o)&&G(r)!=="body"}):[]}function bo(e,t,n){var o=t==="clippingParents"?yo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],s=r.reduce(function(u,i){var l=Ct(e,i);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Ct(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Zt(e){var t=e.reference,n=e.element,o=e.placement,r=o?Z(o):null,a=o?me(o):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,i;switch(r){case $:i={x:s,y:t.y-n.height};break;case q:i={x:s,y:t.y+t.height};break;case K:i={x:t.x+t.width,y:u};break;case H:i={x:t.x-n.width,y:u};break;default:i={x:t.x,y:t.y}}var l=r?ot(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:i[l]=i[l]-(t[f]/2-n[f]/2);break;case Ae:i[l]=i[l]+(t[f]/2-n[f]/2);break}}return i}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,s=a===void 0?Hn:a,u=n.rootBoundary,i=u===void 0?Nt:u,l=n.elementContext,f=l===void 0?be:l,g=n.altBoundary,h=g===void 0?!1:g,v=n.padding,m=v===void 0?0:v,d=qt(typeof m!="number"?m:Kt(m,ke)),E=f===be?Wn:be,p=e.rects.popper,w=e.elements[h?E:f],T=bo(de(w)?w:w.contextElement||te(e.elements.popper),s,i),y=ge(e.elements.reference),C=Zt({reference:y,element:p,strategy:"absolute",placement:r}),A=Ge(Object.assign({},p,C)),O=f===be?A:y,R={top:T.top-O.top+d.top,bottom:O.bottom-T.bottom+d.bottom,left:T.left-O.left+d.left,right:O.right-T.right+d.right},I=e.modifiersData.offset;if(f===be&&I){var x=I[r];Object.keys(R).forEach(function(M){var L=[K,q].indexOf(M)>=0?1:-1,k=[$,q].indexOf(M)>=0?"y":"x";R[M]+=x[k]*L})}return R}function wo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,i=n.allowedAutoPlacements,l=i===void 0?et:i,f=me(o),g=f?u?wt:wt.filter(function(m){return me(m)===f}):ke,h=g.filter(function(m){return l.indexOf(m)>=0});h.length===0&&(h=g);var v=h.reduce(function(m,d){return m[d]=Pe(e,{placement:d,boundary:r,rootBoundary:a,padding:s})[Z(d)],m},{});return Object.keys(v).sort(function(m,d){return v[m]-v[d]})}function Oo(e){if(Z(e)===Qe)return[];var t=Ne(e);return[Tt(e),t,Tt(t)]}function Eo(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!0:s,i=n.fallbackPlacements,l=n.padding,f=n.boundary,g=n.rootBoundary,h=n.altBoundary,v=n.flipVariations,m=v===void 0?!0:v,d=n.allowedAutoPlacements,E=t.options.placement,p=Z(E),w=p===E,T=i||(w||!m?[Ne(E)]:Oo(E)),y=[E].concat(T).reduce(function(oe,J){return oe.concat(Z(J)===Qe?wo(t,{placement:J,boundary:f,rootBoundary:g,padding:l,flipVariations:m,allowedAutoPlacements:d}):J)},[]),C=t.rects.reference,A=t.rects.popper,O=new Map,R=!0,I=y[0],x=0;x<y.length;x++){var M=y[x],L=Z(M),k=me(M)===fe,F=[$,q].indexOf(L)>=0,b=F?"width":"height",S=Pe(t,{placement:M,boundary:f,rootBoundary:g,altBoundary:h,padding:l}),_=F?k?K:H:k?q:$;C[b]>A[b]&&(_=Ne(_));var ne=Ne(_),z=[];if(a&&z.push(S[L]<=0),u&&z.push(S[_]<=0,S[ne]<=0),z.every(function(oe){return oe})){I=M,R=!1;break}O.set(M,z)}if(R)for(var Be=m?3:1,Ue=function(oe){var J=y.find(function(je){var ye=O.get(je);if(ye)return ye.slice(0,oe).every(function(ue){return ue})});if(J)return I=J,"break"},he=Be;he>0;he--){var Ie=Ue(he);if(Ie==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0)}}var To={name:"flip",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"],data:{_skip:!1}};function Rt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function At(e){return[$,K,q,H].some(function(t){return e[t]>=0})}function Co(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,s=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),i=Rt(s,o),l=Rt(u,r,a),f=At(i),g=At(l);t.modifiersData[n]={referenceClippingOffsets:i,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}var Ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Co};function Ao(e,t,n){var o=Z(e),r=[H,$].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*r,[H,K].indexOf(o)>=0?{x:u,y:s}:{x:s,y:u}}function Po(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,s=et.reduce(function(f,g){return f[g]=Ao(g,t.rects,a),f},{}),u=s[t.placement],i=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=s}var xo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function So(e){var t=e.state,n=e.name;t.modifiersData[n]=Zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Gt={name:"popperOffsets",enabled:!0,phase:"read",fn:So,data:{}};function ko(e){return e==="x"?"y":"x"}function Mo(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!1:s,i=n.boundary,l=n.rootBoundary,f=n.altBoundary,g=n.padding,h=n.tether,v=h===void 0?!0:h,m=n.tetherOffset,d=m===void 0?0:m,E=Pe(t,{boundary:i,rootBoundary:l,padding:g,altBoundary:f}),p=Z(t.placement),w=me(t.placement),T=!w,y=ot(p),C=ko(y),A=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,I=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,x=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(A){if(a){var k,F=y==="y"?$:H,b=y==="y"?q:K,S=y==="y"?"height":"width",_=A[y],ne=_+E[F],z=_-E[b],Be=v?-R[S]/2:0,Ue=w===fe?O[S]:R[S],he=w===fe?-R[S]:-O[S],Ie=t.elements.arrow,oe=v&&Ie?nt(Ie):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Wt(),je=J[F],ye=J[b],ue=Oe(0,O[S],oe[S]),an=T?O[S]/2-Be-ue-je-x.mainAxis:Ue-ue-je-x.mainAxis,sn=T?-O[S]/2+Be+ue+ye+x.mainAxis:he+ue+ye+x.mainAxis,ze=t.elements.arrow&&Me(t.elements.arrow),ln=ze?y==="y"?ze.clientTop||0:ze.clientLeft||0:0,lt=(k=M==null?void 0:M[y])!=null?k:0,un=_+an-lt-ln,pn=_+sn-lt,ut=Oe(v?We(ne,un):ne,_,v?ae(z,pn):z);A[y]=ut,L[y]=ut-_}if(u){var pt,cn=y==="x"?$:H,fn=y==="x"?q:K,re=A[C],Fe=C==="y"?"height":"width",ct=re+E[cn],ft=re-E[fn],Ve=[$,H].indexOf(p)!==-1,dt=(pt=M==null?void 0:M[C])!=null?pt:0,vt=Ve?ct:re-O[Fe]-R[Fe]-dt+x.altAxis,gt=Ve?re+O[Fe]+R[Fe]-dt-x.altAxis:ft,mt=v&&Ve?oo(vt,re,gt):Oe(v?vt:ct,re,v?gt:ft);A[C]=mt,L[C]=mt-re}t.modifiersData[o]=L}}var Bo={name:"preventOverflow",enabled:!0,phase:"main",fn:Mo,requiresIfExists:["offset"]};function Io(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jo(e){return e===U(e)||!W(e)?rt(e):Io(e)}function Fo(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function _o(e,t,n){n===void 0&&(n=!1);var o=W(t),r=W(t)&&Fo(t),a=te(t),s=ge(e,r),u={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||it(a))&&(u=jo(t)),W(t)?(i=ge(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=at(a))),{x:s.left+u.scrollLeft-i.x,y:s.top+u.scrollTop-i.y,width:s.width,height:s.height}}function Do(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var i=t.get(u);i&&r(i)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function Lo(e){var t=Do(e);return Yn.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function No(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function $o(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function xt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function st(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?Pt:r;return function(s,u,i){i===void 0&&(i=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},f=[],g=!1,h={state:l,setOptions:function(d){var E=typeof d=="function"?d(l.options):d;m(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:de(s)?Ee(s):s.contextElement?Ee(s.contextElement):[],popper:Ee(u)};var p=Lo($o([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),v(),h.update()},forceUpdate:function(){if(!g){var d=l.elements,E=d.reference,p=d.popper;if(xt(E,p)){l.rects={reference:_o(E,Me(p),l.options.strategy==="fixed"),popper:nt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var T=l.orderedModifiers[w],y=T.fn,C=T.options,A=C===void 0?{}:C,O=T.name;typeof y=="function"&&(l=y({state:l,options:A,name:O,instance:h})||l)}}}},update:No(function(){return new Promise(function(d){h.forceUpdate(),d(l)})}),destroy:function(){m(),g=!0}};if(!xt(s,u))return h;h.setOptions(i).then(function(d){!g&&i.onFirstUpdate&&i.onFirstUpdate(d)});function v(){l.orderedModifiers.forEach(function(d){var E=d.name,p=d.options,w=p===void 0?{}:p,T=d.effect;if(typeof T=="function"){var y=T({state:l,name:E,instance:h,options:w}),C=function(){};f.push(y||C)}})}function m(){f.forEach(function(d){return d()}),f=[]}return h}}st();var Ho=[zt,Gt,Ut,$t];st({defaultModifiers:Ho});var Wo=[zt,Gt,Ut,$t,xo,To,Bo,so,Ro],qo=st({defaultModifiers:Wo});const Ko=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:i})=>{const l=Uo(i);Object.assign(s.value,l)},requires:["computeStyles"]},r=P(()=>{const{onFirstUpdate:i,placement:l,strategy:f,modifiers:g}=c(n);return{onFirstUpdate:i,placement:l||"bottom",strategy:f||"absolute",modifiers:[...g||[],o,{name:"applyStyles",enabled:!1}]}}),a=gn(),s=j({styles:{popper:{position:c(r).strategy,left:"0",right:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return D(r,i=>{const l=c(a);l&&l.setOptions(i)},{deep:!0}),D([e,t],([i,l])=>{u(),!(!i||!l)&&(a.value=qo(i,l,c(r)))}),xe(()=>{u()}),{state:P(()=>{var i;return{...((i=c(a))==null?void 0:i.state)||{}}}),styles:P(()=>c(s).styles),attributes:P(()=>c(s).attributes),update:()=>{var i;return(i=c(a))==null?void 0:i.update()},forceUpdate:()=>{var i;return(i=c(a))==null?void 0:i.forceUpdate()},instanceRef:P(()=>c(a))}};function Uo(e){const t=Object.keys(e.elements),n=ht(t.map(r=>[r,e.styles[r]||{}])),o=ht(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function zo(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return dn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let St;const Jt=()=>{const e=hn("namespace",yn),t=In(),n=P(()=>`${e.value}-popper-container-${t.prefix}`),o=P(()=>`#${n.value}`);return{id:n,selector:o}},Vo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zo=()=>{mn(()=>{if(!we)return;const{id:e,selector:t}=Jt();!St&&!document.body.querySelector(t.value)&&(St=Vo(e.value))})},Go=Q({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),Jo=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=zo();return{onOpen:u=>{r(()=>{n(u)},c(e))},onClose:u=>{r(()=>{o(u)},c(t))}}},Xt=Symbol("elForwardRef"),Xo=e=>{Te(Xt,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),Qo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Yt=Q({role:{type:String,values:Qo,default:"tooltip"}}),er=N({name:"ElPopper",inheritAttrs:!1}),tr=N({...er,props:Yt,setup(e,{expose:t}){const n=e,o=j(),r=j(),a=j(),s=j(),u=P(()=>n.role),i={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:s,role:u};return t(i),Te(Xe,i),(l,f)=>ie(l.$slots,"default")}});var nr=se(tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Qt=Q({arrowOffset:{type:Number,default:5}}),or=N({name:"ElPopperArrow",inheritAttrs:!1}),rr=N({...or,props:Qt,setup(e,{expose:t}){const n=e,o=Se("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:s}=le(Lt,void 0);return D(()=>n.arrowOffset,u=>{r.value=u}),xe(()=>{a.value=void 0}),t({arrowRef:a}),(u,i)=>(V(),He("span",{ref_key:"arrowRef",ref:a,class:jt(c(o).e("arrow")),style:bn(c(s)),"data-popper-arrow":""},null,6))}});var ar=se(rr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const ir="ElOnlyChild",sr=N({name:ir,setup(e,{slots:t,attrs:n}){var o;const r=le(Xt),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Ze);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u||u.length>1)return null;const i=en(u);return i?Ft(wn(i,n),[[a]]):null}}});function en(e){if(!e)return null;const t=e;for(const n of t){if(On(n))switch(n.type){case Cn:continue;case Tn:case"svg":return kt(n);case En:return en(n.children);default:return n}return kt(n)}return null}function kt(e){const t=Se("only-child");return Ce("span",{class:t.e("content")},[e])}const tn=Q({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),lr=N({name:"ElPopperTrigger",inheritAttrs:!1}),ur=N({...lr,props:tn,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(Xe,void 0);Xo(r);const a=P(()=>u.value?n.id:void 0),s=P(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=P(()=>{if(o&&o.value!=="tooltip")return o.value}),i=P(()=>u.value?`${n.open}`:void 0);let l;return qe(()=>{D(()=>n.virtualRef,f=>{f&&(r.value=Dt(f))},{immediate:!0}),D(r,(f,g)=>{l==null||l(),l=void 0,$e(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(h=>{var v;const m=n[h];m&&(f.addEventListener(h.slice(2).toLowerCase(),m),(v=g==null?void 0:g.removeEventListener)==null||v.call(g,h.slice(2).toLowerCase(),m))}),l=D([a,s,u,i],h=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((v,m)=>{It(h[m])?f.removeAttribute(v):f.setAttribute(v,h[m])})},{immediate:!0})),$e(g)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(h=>g.removeAttribute(h))},{immediate:!0})}),xe(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(f,g)=>f.virtualTriggering?Re("v-if",!0):(V(),ce(c(sr),Je({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(s),"aria-expanded":c(i),"aria-haspopup":c(u)}),{default:ee(()=>[ie(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=se(ur,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const cr=["fixed","absolute"],fr=Q({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:et,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),nn=Q({...fr,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...mr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},gr=e=>{if(we)return Dt(e)};function mr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yr=0,br=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(Xe,void 0),a=j(),s=j(),u=P(()=>({name:"eventListeners",enabled:!!e.visible})),i=P(()=>{var p;const w=c(a),T=(p=c(s))!=null?p:yr;return{name:"arrow",enabled:!Dn(w),options:{element:w,padding:T}}}),l=P(()=>({onFirstUpdate:()=>{m()},...vr(e,[c(i),c(u)])})),f=P(()=>gr(e.referenceEl)||c(o)),{attributes:g,state:h,styles:v,update:m,forceUpdate:d,instanceRef:E}=Ko(f,n,l);return D(E,p=>t.value=p),qe(()=>{D(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:g,arrowRef:a,contentRef:n,instanceRef:E,state:h,styles:v,role:r,forceUpdate:d,update:m}},wr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=Fn(),a=Se("popper"),s=P(()=>c(t).popper),u=j(e.zIndex||r()),i=P(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=P(()=>[{zIndex:c(u)},e.popperStyle||{},c(n).popper]),f=P(()=>o.value==="dialog"?"false":void 0),g=P(()=>c(n).arrow||{});return{ariaModal:f,arrowStyle:g,contentAttrs:s,contentClass:i,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=e.zIndex||r()}}},Or=(e,t)=>{const n=j(!1),o=j();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Er=N({name:"ElPopperContent"}),Tr=N({...Er,props:nn,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:s,onFocusAfterTrapped:u,onFocusInTrap:i,onFocusoutPrevented:l,onReleaseRequested:f}=Or(o,n),{attributes:g,arrowRef:h,contentRef:v,styles:m,instanceRef:d,role:E,update:p}=br(o),{ariaModal:w,arrowStyle:T,contentAttrs:y,contentClass:C,contentStyle:A,updateZIndex:O}=wr(o,{styles:m,attributes:g,role:E}),R=le(yt,void 0),I=j();Te(Lt,{arrowStyle:T,arrowRef:h,arrowOffset:I}),R&&(R.addInputId||R.removeInputId)&&Te(yt,{...R,addInputId:Ze,removeInputId:Ze});let x;const M=(k=!0)=>{p(),k&&O()},L=()=>{M(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return qe(()=>{D(()=>o.triggerTargetEl,(k,F)=>{x==null||x(),x=void 0;const b=c(k||v.value),S=c(F||v.value);$e(b)&&(x=D([E,()=>o.ariaLabel,w,()=>o.id],_=>{["role","aria-label","aria-modal","id"].forEach((ne,z)=>{It(_[z])?b.removeAttribute(ne):b.setAttribute(ne,_[z])})},{immediate:!0})),S!==b&&$e(S)&&["role","aria-label","aria-modal","id"].forEach(_=>{S.removeAttribute(_)})},{immediate:!0}),D(()=>o.visible,L,{immediate:!0})}),xe(()=>{x==null||x(),x=void 0}),t({popperContentRef:v,popperInstanceRef:d,updatePopper:M,contentStyle:A}),(k,F)=>(V(),He("div",Je({ref_key:"contentRef",ref:v},c(y),{style:c(A),class:c(C),tabindex:"-1",onMouseenter:F[0]||(F[0]=b=>k.$emit("mouseenter",b)),onMouseleave:F[1]||(F[1]=b=>k.$emit("mouseleave",b))}),[Ce(c(_n),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(v),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(s),onFocusin:c(i),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:ee(()=>[ie(k.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Cr=se(Tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Rr=_t(nr),Ar=Se("tooltip"),on=Q({...Go,...nn,appendTo:{type:B([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:B(Boolean),default:null},transition:{type:String,default:`${Ar.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}}),rn=Q({...tn,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[bt.enter,bt.space]}}),{useModelToggleProps:Pr,useModelToggleEmits:xr,useModelToggle:Sr}=$n("visible"),kr=Q({...Yt,...Pr,...on,...rn,...Qt,showArrow:{type:Boolean,default:!0}}),Mr=[...xr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>Rn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Br(c(e),t)&&n(o)},Ir=N({name:"ElTooltipTrigger"}),jr=N({...Ir,props:rn,setup(e,{expose:t}){const n=e,o=Se("tooltip"),{controlled:r,id:a,open:s,onOpen:u,onClose:i,onToggle:l}=le(Ye,void 0),f=j(null),g=()=>{if(c(r)||n.disabled)return!0},h=Le(n,"trigger"),v=X(g,pe(h,"hover",u)),m=X(g,pe(h,"hover",i)),d=X(g,pe(h,"click",y=>{y.button===0&&l(y)})),E=X(g,pe(h,"focus",u)),p=X(g,pe(h,"focus",i)),w=X(g,pe(h,"contextmenu",y=>{y.preventDefault(),l(y)})),T=X(g,y=>{const{code:C}=y;n.triggerKeys.includes(C)&&(y.preventDefault(),l(y))});return t({triggerRef:f}),(y,C)=>(V(),ce(c(pr),{id:c(a),"virtual-ref":y.virtualRef,open:c(s),"virtual-triggering":y.virtualTriggering,class:jt(c(o).e("trigger")),onBlur:c(p),onClick:c(d),onContextmenu:c(w),onFocus:c(E),onMouseenter:c(v),onMouseleave:c(m),onKeydown:c(T)},{default:ee(()=>[ie(y.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Fr=se(jr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const _r=N({name:"ElTooltipContent",inheritAttrs:!1}),Dr=N({..._r,props:on,setup(e,{expose:t}){const n=e,{selector:o}=Jt(),r=j(null),a=j(!1),{controlled:s,id:u,open:i,trigger:l,onClose:f,onOpen:g,onShow:h,onHide:v,onBeforeShow:m,onBeforeHide:d}=le(Ye,void 0),E=P(()=>n.persistent);xe(()=>{a.value=!0});const p=P(()=>c(E)?!0:c(i)),w=P(()=>n.disabled?!1:c(i)),T=P(()=>n.appendTo||o.value),y=P(()=>{var b;return(b=n.style)!=null?b:{}}),C=P(()=>!c(i)),A=()=>{v()},O=()=>{if(c(s))return!0},R=X(O,()=>{n.enterable&&c(l)==="hover"&&g()}),I=X(O,()=>{c(l)==="hover"&&f()}),x=()=>{var b,S;(S=(b=r.value)==null?void 0:b.updatePopper)==null||S.call(b),m==null||m()},M=()=>{d==null||d()},L=()=>{h(),F=Bn(P(()=>{var b;return(b=r.value)==null?void 0:b.popperContentRef}),()=>{if(c(s))return;c(l)!=="hover"&&f()})},k=()=>{n.virtualTriggering||f()};let F;return D(()=>c(i),b=>{b||F==null||F()},{flush:"post"}),D(()=>n.content,()=>{var b,S;(S=(b=r.value)==null?void 0:b.updatePopper)==null||S.call(b)}),t({contentRef:r}),(b,S)=>(V(),ce(An,{disabled:!b.teleported,to:c(T)},[Ce(Mn,{name:b.transition,onAfterLeave:A,onBeforeEnter:x,onAfterEnter:L,onBeforeLeave:M},{default:ee(()=>[c(p)?Ft((V(),ce(c(Cr),Je({key:0,id:c(u),ref_key:"contentRef",ref:r},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":c(C),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,c(y)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:c(w),"z-index":b.zIndex,onMouseenter:c(R),onMouseleave:c(I),onBlur:k,onClose:c(f)}),{default:ee(()=>[a.value?Re("v-if",!0):ie(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[kn,c(w)]]):Re("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Lr=se(Dr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Nr=["innerHTML"],$r={key:1},Hr=N({name:"ElTooltip"}),Wr=N({...Hr,props:kr,emits:Mr,setup(e,{expose:t,emit:n}){const o=e;Zo();const r=jn(),a=j(),s=j(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},i=j(!1),l=j(),{show:f,hide:g,hasUpdateHandler:h}=Sr({indicator:i,toggleReason:l}),{onOpen:v,onClose:m}=Jo({showAfter:Le(o,"showAfter"),hideAfter:Le(o,"hideAfter"),open:f,close:g}),d=P(()=>Bt(o.visible)&&!h.value);Te(Ye,{controlled:d,id:r,open:Pn(i),trigger:Le(o,"trigger"),onOpen:p=>{v(p)},onClose:p=>{m(p)},onToggle:p=>{c(i)?m(p):v(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),D(()=>o.disabled,p=>{p&&i.value&&(i.value=!1)});const E=()=>{var p,w;const T=(w=(p=s.value)==null?void 0:p.contentRef)==null?void 0:w.popperContentRef;return T&&T.contains(document.activeElement)};return xn(()=>i.value&&g()),t({popperRef:a,contentRef:s,isFocusInsideContent:E,updatePopper:u,onOpen:v,onClose:m,hide:g}),(p,w)=>(V(),ce(c(Rr),{ref_key:"popperRef",ref:a,role:p.role},{default:ee(()=>[Ce(Fr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:ee(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Re("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ce(Lr,{ref_key:"contentRef",ref:s,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:ee(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(V(),He("span",{key:0,innerHTML:p.content},null,8,Nr)):(V(),He("span",$r,Sn(p.content),1))]),p.showArrow?(V(),ce(c(ar),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Re("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var qr=se(Wr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Yr=_t(qr);export{Yr as E,sr as O,Ye as T,et as a,Rr as b,X as c,rn as d,Jo as e,on as u,Xr as w,qo as y};

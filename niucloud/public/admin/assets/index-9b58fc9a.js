import{w as R,d as X}from"./index-331c6de1.js";import{m as w,d as F,b as $,c as u,r as I,w as V,o as x,e as o,f as d,g as S,u as a,n as r,v,x as b,Z as E,H as c,B as T,y as ee,j as U,_ as ae,P as te,E as ie,Y as A,l as ne}from"./base-d77b0726.js";import{b as oe,s as K,d as se,c as k,a as N,p as le,u as re,e as ce,E as g,l as ue}from"./index-e37943c3.js";import{i as de}from"./validator-7b087194.js";import{U as B,C as P,I as _,d as ve,t as fe}from"./event-e06a23af.js";import{u as pe,a as me}from"./index-6245131d.js";import{u as he}from"./index-f2dc9b9f.js";const ye=oe({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:K},inactiveIcon:{type:K},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:se(Function)},size:{type:String,validator:de},tabindex:{type:[String,Number]}}),be={[B]:s=>k(s)||w(s)||N(s),[P]:s=>k(s)||w(s)||N(s),[_]:s=>k(s)||w(s)||N(s)},ge=["onClick"],ke=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ce=["aria-hidden"],we=["aria-hidden"],Ie=["aria-hidden"],D="ElSwitch",Ve=F({name:D}),Se=F({...Ve,props:ye,emits:be,setup(s,{expose:H,emit:f}){const t=s,j=te(),{formItem:m}=pe(),G=le(),i=$("switch");he({from:'"value"',replacement:'"model-value" or "v-model"',scope:D,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=j.vnode.props)!=null&&e.value)}));const{inputId:L}=me(t,{formItemContext:m}),h=re(u(()=>t.loading)),C=I(t.modelValue!==!1),p=I(),W=I(),Y=u(()=>[i.b(),i.m(G.value),i.is("disabled",h.value),i.is("checked",n.value)]),Z=u(()=>({width:ce(t.width)}));V(()=>t.modelValue,()=>{C.value=!0}),V(()=>t.value,()=>{C.value=!1});const z=u(()=>C.value?t.modelValue:t.value),n=u(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(f(B,t.inactiveValue),f(P,t.inactiveValue),f(_,t.inactiveValue)),V(n,e=>{var l;p.value.checked=e,t.validateEvent&&((l=m==null?void 0:m.validate)==null||l.call(m,"change").catch(Q=>ve()))});const y=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(B,e),f(P,e),f(_,e),ie(()=>{p.value.checked=n.value})},M=()=>{if(h.value)return;const{beforeChange:e}=t;if(!e){y();return}const l=e();[A(l),k(l)].includes(!0)||fe(D,"beforeChange must return type `Promise<boolean>` or `boolean`"),A(l)?l.then(O=>{O&&y()}).catch(O=>{}):l&&y()},q=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),J=()=>{var e,l;(l=(e=p.value)==null?void 0:e.focus)==null||l.call(e)};return x(()=>{p.value.checked=n.value}),H({focus:J,checked:n}),(e,l)=>(o(),d("div",{class:r(a(Y)),style:U(a(q)),onClick:X(M,["prevent"])},[S("input",{id:a(L),ref_key:"input",ref:p,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:y,onKeydown:R(M,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),d("span",{key:0,class:r([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),d("span",{key:1,"aria-hidden":a(n)},T(e.inactiveText),9,Ce)):c("v-if",!0)],2)):c("v-if",!0),S("span",{ref_key:"core",ref:W,class:r(a(i).e("core")),style:U(a(Z))},[e.inlinePrompt?(o(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),v(a(g),{key:0,class:r(a(i).is("icon"))},{default:b(()=>[(o(),v(E(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},T(a(n)?e.activeText:e.inactiveText),11,we)):c("v-if",!0)],2)):c("v-if",!0),S("div",{class:r(a(i).e("action"))},[e.loading?(o(),v(a(g),{key:0,class:r(a(i).is("loading"))},{default:b(()=>[ee(a(ue))]),_:1},8,["class"])):c("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),d("span",{key:1,class:r([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),d("span",{key:1,"aria-hidden":!a(n)},T(e.activeText),9,Ie)):c("v-if",!0)],2)):c("v-if",!0)],14,ge))}});var Ee=ae(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Me=ne(Ee);export{Me as E};

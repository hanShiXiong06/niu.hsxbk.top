import{l as Z,m as ke,n as ge,U as F,f as X,p as w}from"./event-10eba222.js";import{o as Y,a as U,c as G,k as N,u as pe,p as P,q as A,B as _,b as xe,d as Ce}from"./index-2fcd1254.js";import{b0 as K,b1 as M,aG as j,b2 as ee,b3 as ye,aH as Se,b4 as Be,b5 as Le,m as H,I,c as g,w as ne,E as ae,P as le,r as T,G as E,q as Ee,an as q,d as B,K as te,b as D,e as C,v as oe,x as se,g as J,n as x,u as i,Q as $,f as y,i as V,h as O,F as Ie,A as ie,B as ue,H as z,Z as re,_ as R,j as we,J as $e,a4 as Ve,l as Fe,T as de}from"./base-06478700.js";import{i as Ge}from"./isEqual-42d4b10f.js";function Ne(e){return e}function Te(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var ze=800,Pe=16,De=Date.now;function Oe(e){var n=0,l=0;return function(){var a=De(),t=Pe-(a-l);if(l=a,t>0){if(++n>=ze)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Re(e){return function(){return e}}var Ue=K?function(e,n){return K(e,"toString",{configurable:!0,enumerable:!1,value:Re(n),writable:!0})}:Ne;const Ae=Ue;var Ke=Oe(Ae);const Me=Ke;var Q=Math.max;function He(e,n,l){return n=Q(n===void 0?e.length-1:n,0),function(){for(var a=arguments,t=-1,d=Q(a.length-n,0),c=Array(d);++t<d;)c[t]=a[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=a[t];return o[n]=l(c),Te(e,this,o)}}var W=M?M.isConcatSpreadable:void 0;function qe(e){return j(e)||Z(e)||!!(W&&e&&e[W])}function ce(e,n,l,a,t){var d=-1,c=e.length;for(l||(l=qe),t||(t=[]);++d<c;){var o=e[d];n>0&&l(o)?n>1?ce(o,n-1,l,a,t):ke(t,o):a||(t[t.length]=o)}return t}function Je(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function Qe(e){return Me(He(e,void 0,Je),e+"")}function We(e,n){return e!=null&&n in Object(e)}function Ze(e,n,l){n=ee(n,e);for(var a=-1,t=n.length,d=!1;++a<t;){var c=ye(n[a]);if(!(d=e!=null&&l(e,c)))break;e=e[c]}return d||++a!=t?d:(t=e==null?0:e.length,!!t&&ge(t)&&Se(c,t)&&(j(e)||Z(e)))}function Xe(e,n){return e!=null&&Ze(e,n,We)}function Ye(e,n,l){for(var a=-1,t=n.length,d={};++a<t;){var c=n[a],o=Be(e,c);l(o,c)&&Le(d,ee(c,e),o)}return d}function _e(e,n){return Ye(e,n,function(l,a){return Xe(e,a)})}var je=Qe(function(e,n){return e==null?{}:_e(e,n)});const en=je,L=Symbol("checkboxGroupContextKey"),be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ve={[F]:e=>H(e)||U(e)||G(e),change:e=>H(e)||U(e)||G(e)},nn=({model:e,isChecked:n})=>{const l=I(L,void 0),a=g(()=>{var d,c;const o=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(c=l==null?void 0:l.min)==null?void 0:c.value;return!N(o)&&e.value.length>=o&&!n.value||!N(m)&&e.value.length<=m&&n.value});return{isDisabled:pe(g(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},an=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:t,isLabeledByFormItem:d})=>{const c=I(L,void 0),{formItem:o}=P(),{emit:m}=le();function s(r){var b,v;return r===e.trueLabel||r===!0?(b=e.trueLabel)!=null?b:!0:(v=e.falseLabel)!=null?v:!1}function f(r,b){m("change",s(r),b)}function k(r){if(l.value)return;const b=r.target;m("change",s(b.checked),r)}async function S(r){l.value||!a.value&&!t.value&&d.value&&(r.composedPath().some(h=>h.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ae(),f(n.value,r)))}const u=g(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return ne(()=>e.modelValue,()=>{u.value&&(o==null||o.validate("change").catch(r=>X()))}),{handleChange:k,onClickRoot:S}},ln=e=>{const n=T(!1),{emit:l}=le(),a=I(L,void 0),t=g(()=>N(a)===!1),d=T(!1);return{model:g({get(){var o,m;return t.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(m=e.modelValue)!=null?m:n.value},set(o){var m,s;t.value&&E(o)?(d.value=((m=a==null?void 0:a.max)==null?void 0:m.value)!==void 0&&o.length>(a==null?void 0:a.max.value),d.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,o))):(l(F,o),n.value=o)}}),isGroup:t,isLimitExceeded:d}},tn=(e,n,{model:l})=>{const a=I(L,void 0),t=T(!1),d=g(()=>{const s=l.value;return G(s)?s:E(s)?Ee(e.label)?s.map(q).some(f=>Ge(f,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),c=A(g(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),o=A(g(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),m=g(()=>!!(n.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:t,checkboxSize:o,hasOwnLabel:m}},on=(e,{model:n})=>{function l(){E(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},me=(e,n)=>{const{formItem:l}=P(),{model:a,isGroup:t,isLimitExceeded:d}=ln(e),{isFocused:c,isChecked:o,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f}=tn(e,n,{model:a}),{isDisabled:k}=nn({model:a,isChecked:o}),{inputId:S,isLabeledByFormItem:u}=_(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:t}),{handleChange:r,onClickRoot:b}=an(e,{model:a,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:u});return on(e,{model:a}),{inputId:S,isLabeledByFormItem:u,isChecked:o,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f,model:a,handleChange:r,onClickRoot:b}},sn=["tabindex","role","aria-checked"],un=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],rn=["id","aria-hidden","disabled","value","name","tabindex"],dn=B({name:"ElCheckbox"}),cn=B({...dn,props:be,emits:ve,setup(e){const n=e,l=te(),{inputId:a,isLabeledByFormItem:t,isChecked:d,isDisabled:c,isFocused:o,checkboxSize:m,hasOwnLabel:s,model:f,handleChange:k,onClickRoot:S}=me(n,l),u=D("checkbox"),r=g(()=>[u.b(),u.m(m.value),u.is("disabled",c.value),u.is("bordered",n.border),u.is("checked",d.value)]),b=g(()=>[u.e("input"),u.is("disabled",c.value),u.is("checked",d.value),u.is("indeterminate",n.indeterminate),u.is("focus",o.value)]);return(v,h)=>(C(),oe(re(!i(s)&&i(t)?"span":"label"),{class:x(i(r)),"aria-controls":v.indeterminate?v.controls:null,onClick:i(S)},{default:se(()=>[J("span",{class:x(i(b)),tabindex:v.indeterminate?0:void 0,role:v.indeterminate?"checkbox":void 0,"aria-checked":v.indeterminate?"mixed":void 0},[v.trueLabel||v.falseLabel?$((C(),y("input",{key:0,id:i(a),"onUpdate:modelValue":h[0]||(h[0]=p=>V(f)?f.value=p:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",name:v.name,tabindex:v.tabindex,disabled:i(c),"true-value":v.trueLabel,"false-value":v.falseLabel,onChange:h[1]||(h[1]=(...p)=>i(k)&&i(k)(...p)),onFocus:h[2]||(h[2]=p=>o.value=!0),onBlur:h[3]||(h[3]=p=>o.value=!1)},null,42,un)),[[w,i(f)]]):$((C(),y("input",{key:1,id:i(a),"onUpdate:modelValue":h[4]||(h[4]=p=>V(f)?f.value=p:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",disabled:i(c),value:v.label,name:v.name,tabindex:v.tabindex,onChange:h[5]||(h[5]=(...p)=>i(k)&&i(k)(...p)),onFocus:h[6]||(h[6]=p=>o.value=!0),onBlur:h[7]||(h[7]=p=>o.value=!1)},null,42,rn)),[[w,i(f)]]),J("span",{class:x(i(u).e("inner"))},null,2)],10,sn),i(s)?(C(),y("span",{key:0,class:x(i(u).e("label"))},[O(v.$slots,"default"),v.$slots.default?z("v-if",!0):(C(),y(Ie,{key:0},[ie(ue(v.label),1)],64))],2)):z("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var bn=R(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const vn=["name","tabindex","disabled","true-value","false-value"],mn=["name","tabindex","disabled","value"],fn=B({name:"ElCheckboxButton"}),hn=B({...fn,props:be,emits:ve,setup(e){const n=e,l=te(),{isFocused:a,isChecked:t,isDisabled:d,checkboxButtonSize:c,model:o,handleChange:m}=me(n,l),s=I(L,void 0),f=D("checkbox"),k=g(()=>{var u,r,b,v;const h=(r=(u=s==null?void 0:s.fill)==null?void 0:u.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(v=(b=s==null?void 0:s.textColor)==null?void 0:b.value)!=null?v:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),S=g(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",t.value),f.is("focus",a.value)]);return(u,r)=>(C(),y("label",{class:x(i(S))},[u.trueLabel||u.falseLabel?$((C(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=b=>V(o)?o.value=b:null),class:x(i(f).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:r[1]||(r[1]=(...b)=>i(m)&&i(m)(...b)),onFocus:r[2]||(r[2]=b=>a.value=!0),onBlur:r[3]||(r[3]=b=>a.value=!1)},null,42,vn)),[[w,i(o)]]):$((C(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=b=>V(o)?o.value=b:null),class:x(i(f).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),value:u.label,onChange:r[5]||(r[5]=(...b)=>i(m)&&i(m)(...b)),onFocus:r[6]||(r[6]=b=>a.value=!0),onBlur:r[7]||(r[7]=b=>a.value=!1)},null,42,mn)),[[w,i(o)]]),u.$slots.default||u.label?(C(),y("span",{key:2,class:x(i(f).be("button","inner")),style:we(i(t)?i(k):void 0)},[O(u.$slots,"default",{},()=>[ie(ue(u.label),1)])],6)):z("v-if",!0)],2))}});var fe=R(hn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const kn=xe({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Y,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),gn={[F]:e=>E(e),change:e=>E(e)},pn=B({name:"ElCheckboxGroup"}),xn=B({...pn,props:kn,emits:gn,setup(e,{emit:n}){const l=e,a=D("checkbox"),{formItem:t}=P(),{inputId:d,isLabeledByFormItem:c}=_(l,{formItemContext:t}),o=async s=>{n(F,s),await ae(),n("change",s)},m=g({get(){return l.modelValue},set(s){o(s)}});return $e(L,{...en(Ve(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:o}),ne(()=>l.modelValue,()=>{l.validateEvent&&(t==null||t.validate("change").catch(s=>X()))}),(s,f)=>{var k;return C(),oe(re(s.tag),{id:i(d),class:x(i(a).b("group")),role:"group","aria-label":i(c)?void 0:s.label||"checkbox-group","aria-labelledby":i(c)?(k=i(t))==null?void 0:k.labelId:void 0},{default:se(()=>[O(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var he=R(xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Ln=Fe(bn,{CheckboxButton:fe,CheckboxGroup:he}),En=de(fe),In=de(he);export{Ln as E,In as a,ce as b,En as c,Je as f,Xe as h,Ne as i,He as o,en as p,Me as s};
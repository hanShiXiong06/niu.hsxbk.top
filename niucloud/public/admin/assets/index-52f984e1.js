import{k as w}from"./index-331c6de1.js";import{o as Z,a as U,c as F,k as G,u as ke,p as A,b as pe,d as ge}from"./index-e37943c3.js";import{U as V,d as X}from"./event-e06a23af.js";import{aN as K,aO as M,aP as Y,aQ as _,aR as xe,aS as Ce,aT as ye,aU as Se,m as H,I,c as p,w as j,E as ee,P as ne,r as T,G as E,q as Le,al as q,d as L,K as ae,b as z,e as C,v as le,x as te,g as Q,n as x,u as i,Q as $,f as y,i as N,h as D,F as Be,A as oe,B as se,H as P,Z as ie,_ as O,j as Ee,J as Ie,a4 as we,l as $e,T as ue}from"./base-d77b0726.js";import{u as R,a as re}from"./index-6245131d.js";import{i as Ne}from"./isEqual-030b54ca.js";import{i as de,a as Ve,b as Fe}from"./_Uint8Array-2fd72219.js";function Ge(e){return e}function Te(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var Pe=800,ze=16,De=Date.now;function Oe(e){var n=0,l=0;return function(){var a=De(),t=ze-(a-l);if(l=a,t>0){if(++n>=Pe)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Re(e){return function(){return e}}var Ue=K?function(e,n){return K(e,"toString",{configurable:!0,enumerable:!1,value:Re(n),writable:!0})}:Ge;const Ae=Ue;var Ke=Oe(Ae);const Me=Ke;var J=Math.max;function He(e,n,l){return n=J(n===void 0?e.length-1:n,0),function(){for(var a=arguments,t=-1,d=J(a.length-n,0),c=Array(d);++t<d;)c[t]=a[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=a[t];return o[n]=l(c),Te(e,this,o)}}var W=M?M.isConcatSpreadable:void 0;function qe(e){return Y(e)||de(e)||!!(W&&e&&e[W])}function ce(e,n,l,a,t){var d=-1,c=e.length;for(l||(l=qe),t||(t=[]);++d<c;){var o=e[d];n>0&&l(o)?n>1?ce(o,n-1,l,a,t):Ve(t,o):a||(t[t.length]=o)}return t}function Qe(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function Je(e){return Me(He(e,void 0,Qe),e+"")}function We(e,n){return e!=null&&n in Object(e)}function Ze(e,n,l){n=_(n,e);for(var a=-1,t=n.length,d=!1;++a<t;){var c=xe(n[a]);if(!(d=e!=null&&l(e,c)))break;e=e[c]}return d||++a!=t?d:(t=e==null?0:e.length,!!t&&Fe(t)&&Ce(c,t)&&(Y(e)||de(e)))}function Xe(e,n){return e!=null&&Ze(e,n,We)}function Ye(e,n,l){for(var a=-1,t=n.length,d={};++a<t;){var c=n[a],o=ye(e,c);l(o,c)&&Se(d,_(c,e),o)}return d}function _e(e,n){return Ye(e,n,function(l,a){return Xe(e,a)})}var je=Je(function(e,n){return e==null?{}:_e(e,n)});const en=je,B=Symbol("checkboxGroupContextKey"),be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Z,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ve={[V]:e=>H(e)||U(e)||F(e),change:e=>H(e)||U(e)||F(e)},nn=({model:e,isChecked:n})=>{const l=I(B,void 0),a=p(()=>{var d,c;const o=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(c=l==null?void 0:l.min)==null?void 0:c.value;return!G(o)&&e.value.length>=o&&!n.value||!G(m)&&e.value.length<=m&&n.value});return{isDisabled:ke(p(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},an=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:t,isLabeledByFormItem:d})=>{const c=I(B,void 0),{formItem:o}=R(),{emit:m}=ne();function s(r){var b,v;return r===e.trueLabel||r===!0?(b=e.trueLabel)!=null?b:!0:(v=e.falseLabel)!=null?v:!1}function f(r,b){m("change",s(r),b)}function k(r){if(l.value)return;const b=r.target;m("change",s(b.checked),r)}async function S(r){l.value||!a.value&&!t.value&&d.value&&(r.composedPath().some(h=>h.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ee(),f(n.value,r)))}const u=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return j(()=>e.modelValue,()=>{u.value&&(o==null||o.validate("change").catch(r=>X()))}),{handleChange:k,onClickRoot:S}},ln=e=>{const n=T(!1),{emit:l}=ne(),a=I(B,void 0),t=p(()=>G(a)===!1),d=T(!1);return{model:p({get(){var o,m;return t.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(m=e.modelValue)!=null?m:n.value},set(o){var m,s;t.value&&E(o)?(d.value=((m=a==null?void 0:a.max)==null?void 0:m.value)!==void 0&&o.length>(a==null?void 0:a.max.value),d.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,o))):(l(V,o),n.value=o)}}),isGroup:t,isLimitExceeded:d}},tn=(e,n,{model:l})=>{const a=I(B,void 0),t=T(!1),d=p(()=>{const s=l.value;return F(s)?s:E(s)?Le(e.label)?s.map(q).some(f=>Ne(f,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),c=A(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),o=A(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),m=p(()=>!!(n.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:t,checkboxSize:o,hasOwnLabel:m}},on=(e,{model:n})=>{function l(){E(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},me=(e,n)=>{const{formItem:l}=R(),{model:a,isGroup:t,isLimitExceeded:d}=ln(e),{isFocused:c,isChecked:o,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f}=tn(e,n,{model:a}),{isDisabled:k}=nn({model:a,isChecked:o}),{inputId:S,isLabeledByFormItem:u}=re(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:t}),{handleChange:r,onClickRoot:b}=an(e,{model:a,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:u});return on(e,{model:a}),{inputId:S,isLabeledByFormItem:u,isChecked:o,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f,model:a,handleChange:r,onClickRoot:b}},sn=["tabindex","role","aria-checked"],un=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],rn=["id","aria-hidden","disabled","value","name","tabindex"],dn=L({name:"ElCheckbox"}),cn=L({...dn,props:be,emits:ve,setup(e){const n=e,l=ae(),{inputId:a,isLabeledByFormItem:t,isChecked:d,isDisabled:c,isFocused:o,checkboxSize:m,hasOwnLabel:s,model:f,handleChange:k,onClickRoot:S}=me(n,l),u=z("checkbox"),r=p(()=>[u.b(),u.m(m.value),u.is("disabled",c.value),u.is("bordered",n.border),u.is("checked",d.value)]),b=p(()=>[u.e("input"),u.is("disabled",c.value),u.is("checked",d.value),u.is("indeterminate",n.indeterminate),u.is("focus",o.value)]);return(v,h)=>(C(),le(ie(!i(s)&&i(t)?"span":"label"),{class:x(i(r)),"aria-controls":v.indeterminate?v.controls:null,onClick:i(S)},{default:te(()=>[Q("span",{class:x(i(b)),tabindex:v.indeterminate?0:void 0,role:v.indeterminate?"checkbox":void 0,"aria-checked":v.indeterminate?"mixed":void 0},[v.trueLabel||v.falseLabel?$((C(),y("input",{key:0,id:i(a),"onUpdate:modelValue":h[0]||(h[0]=g=>N(f)?f.value=g:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",name:v.name,tabindex:v.tabindex,disabled:i(c),"true-value":v.trueLabel,"false-value":v.falseLabel,onChange:h[1]||(h[1]=(...g)=>i(k)&&i(k)(...g)),onFocus:h[2]||(h[2]=g=>o.value=!0),onBlur:h[3]||(h[3]=g=>o.value=!1)},null,42,un)),[[w,i(f)]]):$((C(),y("input",{key:1,id:i(a),"onUpdate:modelValue":h[4]||(h[4]=g=>N(f)?f.value=g:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",disabled:i(c),value:v.label,name:v.name,tabindex:v.tabindex,onChange:h[5]||(h[5]=(...g)=>i(k)&&i(k)(...g)),onFocus:h[6]||(h[6]=g=>o.value=!0),onBlur:h[7]||(h[7]=g=>o.value=!1)},null,42,rn)),[[w,i(f)]]),Q("span",{class:x(i(u).e("inner"))},null,2)],10,sn),i(s)?(C(),y("span",{key:0,class:x(i(u).e("label"))},[D(v.$slots,"default"),v.$slots.default?P("v-if",!0):(C(),y(Be,{key:0},[oe(se(v.label),1)],64))],2)):P("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var bn=O(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const vn=["name","tabindex","disabled","true-value","false-value"],mn=["name","tabindex","disabled","value"],fn=L({name:"ElCheckboxButton"}),hn=L({...fn,props:be,emits:ve,setup(e){const n=e,l=ae(),{isFocused:a,isChecked:t,isDisabled:d,checkboxButtonSize:c,model:o,handleChange:m}=me(n,l),s=I(B,void 0),f=z("checkbox"),k=p(()=>{var u,r,b,v;const h=(r=(u=s==null?void 0:s.fill)==null?void 0:u.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(v=(b=s==null?void 0:s.textColor)==null?void 0:b.value)!=null?v:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",t.value),f.is("focus",a.value)]);return(u,r)=>(C(),y("label",{class:x(i(S))},[u.trueLabel||u.falseLabel?$((C(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=b=>N(o)?o.value=b:null),class:x(i(f).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:r[1]||(r[1]=(...b)=>i(m)&&i(m)(...b)),onFocus:r[2]||(r[2]=b=>a.value=!0),onBlur:r[3]||(r[3]=b=>a.value=!1)},null,42,vn)),[[w,i(o)]]):$((C(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=b=>N(o)?o.value=b:null),class:x(i(f).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),value:u.label,onChange:r[5]||(r[5]=(...b)=>i(m)&&i(m)(...b)),onFocus:r[6]||(r[6]=b=>a.value=!0),onBlur:r[7]||(r[7]=b=>a.value=!1)},null,42,mn)),[[w,i(o)]]),u.$slots.default||u.label?(C(),y("span",{key:2,class:x(i(f).be("button","inner")),style:Ee(i(t)?i(k):void 0)},[D(u.$slots,"default",{},()=>[oe(se(u.label),1)])],6)):P("v-if",!0)],2))}});var fe=O(hn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const kn=pe({modelValue:{type:ge(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Z,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),pn={[V]:e=>E(e),change:e=>E(e)},gn=L({name:"ElCheckboxGroup"}),xn=L({...gn,props:kn,emits:pn,setup(e,{emit:n}){const l=e,a=z("checkbox"),{formItem:t}=R(),{inputId:d,isLabeledByFormItem:c}=re(l,{formItemContext:t}),o=async s=>{n(V,s),await ee(),n("change",s)},m=p({get(){return l.modelValue},set(s){o(s)}});return Ie(B,{...en(we(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:o}),j(()=>l.modelValue,()=>{l.validateEvent&&(t==null||t.validate("change").catch(s=>X()))}),(s,f)=>{var k;return C(),le(ie(s.tag),{id:i(d),class:x(i(a).b("group")),role:"group","aria-label":i(c)?void 0:s.label||"checkbox-group","aria-labelledby":i(c)?(k=i(t))==null?void 0:k.labelId:void 0},{default:te(()=>[D(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var he=O(xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const wn=$e(bn,{CheckboxButton:fe,CheckboxGroup:he}),$n=ue(fe),Nn=ue(he);export{wn as E,Nn as a,ce as b,$n as c,Qe as f,Xe as h,Ge as i,He as o,en as p,Me as s};

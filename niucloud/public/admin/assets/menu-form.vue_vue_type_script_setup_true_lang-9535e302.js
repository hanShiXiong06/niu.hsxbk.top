/* empty css             */import{a as T,E as q}from"./el-form-item-144bc604.js";/* empty css                  *//* empty css                       *//* empty css                 *//* empty css                 */import{v as f}from"./event-3e082a4a.js";import{t as a}from"./index-3862e13d.js";import{f as g}from"./common-a45d855f.js";import{E as C}from"./index-5f2625ed.js";import{E as R,b as F}from"./index-6ff31475.js";import{E as M}from"./index-6f670765.js";import{d as A,r as D,c as h,b as v,e as w,f as i,x as m,u as e,q as o,p as r,F as V,v as b,L as y,C as L}from"./runtime-core.esm-bundler-c17ab5bc.js";const S={class:"panel-title"},W={class:"form-tip"},j={class:"mt-[40px]"},te=A({__name:"menu-form",props:{data:{type:Object,default:()=>{}},index:{type:Number,default:0},subIndex:{type:Number,default:-1}},emits:["delete"],setup(N,{expose:x,emit:E}){const d=N,_=D(null),l=h({get(){return d.data},set(n){}}),P=h(()=>({name:[{required:!0,message:a("menuNamePlaceholder"),trigger:"blur"},{validator:(n,t,u)=>{l.value.sub_button&&g(t)>8?u(new Error(a("menuNameTips"))):!l.value.sub_button&&g(t)>16?u(new Error(a("subMenuNameTips"))):u()},trigger:["blur","change"]}],url:[{required:!l.value.sub_button||!l.value.sub_button.length,message:a("webpageUrlPlaceholder"),trigger:"blur"}],appid:[{required:(!l.value.sub_button||!l.value.sub_button.length)&&l.value.type=="miniprogram",message:a("weappAppidPlaceholder"),trigger:"blur"}],pagepath:[{required:(!l.value.sub_button||!l.value.sub_button.length)&&l.value.type=="miniprogram",message:a("weappPagePlaceholder"),trigger:"blur"}]})),U=()=>{E("delete")};return x({validate:async()=>{let n=!1;return await _.value.validate(async t=>{n=t}),n},index:d.index,subIndex:d.subIndex}),(n,t)=>{const u=C,s=T,c=R,I=F,k=M,B=q;return v(),w(V,null,[i("div",S,m(e(l).sub_button?e(a)("menuNameInfo"):e(a)("subMenuNameInfo")),1),o(B,{model:e(l),"label-width":"140px",ref_key:"formRef",ref:_,rules:e(P),class:"page-form mt-[30px]"},{default:r(()=>[o(s,{label:e(a)("menuName"),prop:"name"},{default:r(()=>[o(u,{modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=p=>e(l).name=p),placeholder:e(a)("menuNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),i("div",W,m(e(l).sub_button?e(a)("menuNameTips"):e(a)("subMenuNameTips")),1)]),_:1},8,["label"]),!e(l).sub_button||!e(l).sub_button.length?(v(),w(V,{key:0},[o(s,{label:e(a)("messageType")},{default:r(()=>[o(I,{modelValue:e(l).type,"onUpdate:modelValue":t[1]||(t[1]=p=>e(l).type=p)},{default:r(()=>[o(c,{label:"view"},{default:r(()=>[b(m(e(a)("skipWebpage")),1)]),_:1}),o(c,{label:"miniprogram"},{default:r(()=>[b(m(e(a)("skipWeapp")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(s,{label:e(a)("webpageUrl"),prop:"url"},{default:r(()=>[o(u,{modelValue:e(l).url,"onUpdate:modelValue":t[2]||(t[2]=p=>e(l).url=p),placeholder:e(a)("webpageUrlPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),y(o(s,{label:e(a)("weappAppid"),prop:"appid"},{default:r(()=>[o(u,{modelValue:e(l).appid,"onUpdate:modelValue":t[3]||(t[3]=p=>e(l).appid=p),placeholder:e(a)("weappAppidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),[[f,e(l).type=="miniprogram"]]),y(o(s,{label:e(a)("weappPage"),prop:"pagepath"},{default:r(()=>[o(u,{modelValue:e(l).pagepath,"onUpdate:modelValue":t[4]||(t[4]=p=>e(l).pagepath=p),placeholder:e(a)("weappPagePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),[[f,e(l).type=="miniprogram"]])],64)):L("",!0),i("div",j,[o(k,{type:"primary",link:"",onClick:U},{default:r(()=>[b(m(e(a)("deleteMemu")),1)]),_:1})])]),_:1},8,["model","rules"])],64)}}});export{te as _};
/* empty css             *//* empty css                   *//* empty css                 *//* empty css                *//* empty css                 *//* empty css                        */import{_ as E}from"./app_store_default-c4798c2d.js";import{g as C,y as S,z as A}from"./index-d5447f06.js";import{c as I}from"./common-a45d855f.js";import{a as j}from"./vue-router-9f815af7.js";import{t as B}from"./index-ebefdd26.js";import{E as V}from"./index-6701860e.js";import{E as D}from"./index-c5af06c2.js";import{E as F}from"./index-d64b2f0e.js";import{v as N}from"./directive-d226d53f.js";import{d as M,M as R,r as f,L as q,u as c,b as s,e as r,m as z,p as u,f as e,F as U,t as $,q as x,x as h,C as d,at as G,au as H}from"./runtime-core.esm-bundler-c17ab5bc.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import"./event-3e082a4a.js";import"./plugin-vue_export-helper-c018272e.js";import"./index-9ef6974e.js";import"./index-0d36ccbf.js";import"./el-main-03d12282.js";import"./index-e42600b8.js";import"./el-overlay-380df695.js";import"./index-93efb1b5.js";import"./focus-trap-c0148071.js";import"./index-4b62c73a.js";import"./index-332680c2.js";/* empty css                  */import"./el-form-item-144bc604.js";import"./_baseClone-37ba2e68.js";/* empty css                 *//* empty css                  */import"./index-a6ffcea0.js";import"./index-5f2625ed.js";import"./index-6f670765.js";import"./index-138bfa06.js";import"./index-72bf6cb5.js";import"./index-f6eed9e8.js";import"./debounce-196ce6a6.js";import"./position-0d02b322.js";const v=i=>(G("data-v-0fbcfcc4"),i=i(),H(),i),K={class:"main-container w-full bg-white"},O=v(()=>e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-[20px]"},"应用管理")],-1)),P={class:"flex flex-wrap plug-list pb-10 plug-large"},Q={key:0,class:"relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary"},T=["onClick"],W={class:"flex py-5 items-center"},X={class:"flex justify-center items-center"},Y=v(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[50px] h-[50px]",src:E})],-1)),Z={class:"flex flex-col justify-between text-left w-[190px]"},tt={class:"app-text w-[190px] text-[17px] text-[#222] pl-3"},et={class:"border-t-[1px] border-[#e8e9eb] py-3"},st={class:"app-text text-[14px] text-[#999] w-[200px]"},ot={key:1,class:"empty flex items-center justify-center"},rt=M({__name:"history",setup(i){const _=C(),y=j(),p=R({list:[]});let n=f(!0);(async()=>{const t=await S({});let l=_.appMenuList;p.list=t.data.filter(m=>l.includes(m.key)),n.value=!1})();const a=f({});(()=>{_.routers.forEach((t,l)=>{t.meta.app!=""&&(t.children&&t.children.length?a.value[t.meta.app]=A(t.children):a.value[t.meta.app]=t.name)})})();const g=t=>{y.push({name:a.value[t]})};return(t,l)=>{const m=V,b=D,k=F,w=N;return q((s(),r("div",K,[p.list.length?(s(),z(b,{key:0,class:"box-card !border-none",shadow:"never"},{default:u(()=>[O,e("div",P,[(s(!0),r(U,null,$(p.list,(o,L)=>(s(),r("div",{key:L+"b"},[a.value[o.key]?(s(),r("div",Q,[e("div",{onClick:at=>g(o.key)},[e("div",W,[e("div",X,[x(m,{class:"w-[50px] h-[50px]",src:c(I)(o.icon),fit:"contain"},{error:u(()=>[Y]),_:2},1032,["src"])]),e("div",Z,[e("p",tt,h(o.title),1)])]),e("div",et,[e("p",st,h(o.desc),1)])],8,T)])):d("",!0)]))),128))])]),_:1})):d("",!0),!c(n)&&!p.list.length?(s(),r("div",ot,[x(k,{description:c(B)("emptyData")},null,8,["description"])])):d("",!0)])),[[w,c(n)]])}}});const Tt=J(rt,[["__scopeId","data-v-0fbcfcc4"]]);export{Tt as default};
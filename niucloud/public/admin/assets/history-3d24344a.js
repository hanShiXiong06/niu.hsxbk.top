import{d as B,R as F,r as h,V,Q as j,u as p,e as o,f as r,v as z,x as m,g as e,F as D,z as N,y as c,B as v,n as R,H as f,bl as M,bm as $}from"./base-d77b0726.js";/* empty css                   *//* empty css                 *//* empty css                *//* empty css                *//* empty css                 *//* empty css                        */import{d as H}from"./index-331c6de1.js";import{_ as Q}from"./app_store_default-c4798c2d.js";import{g as U}from"./apply-d02b84fb.js";import{b as q,f as G,s as J}from"./index-e89181d8.js";import{d as K}from"./common-56ee0a80.js";import{b as O}from"./vue-router-57155f94.js";import{t as P}from"./index-f3c0482e.js";import{E as T}from"./index-435afe75.js";import{E as W}from"./index-e37943c3.js";import{E as X}from"./index-2cf73bf7.js";import{E as Y}from"./index-294b617f.js";import{v as Z}from"./directive-08cd03ab.js";import{_ as tt}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-704f0685.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-3b19c3d7.js";import"./index-a20d1a31.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";const y=i=>(M("data-v-cab98e8f"),i=i(),$(),i),et={class:"main-container w-full bg-white"},st=y(()=>e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-[20px]"},"应用管理")],-1)),ot={class:"flex flex-wrap plug-list pb-10 plug-large"},rt={key:0,class:"relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary"},it=["onClick"],at={class:"flex py-5 items-center"},nt={class:"flex justify-center items-center"},pt=y(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[50px] h-[50px]",src:Q})],-1)),ct={class:"flex flex-col justify-between text-left w-[190px]"},lt={class:"app-text w-[190px] text-[17px] text-[#222] pl-3"},dt={class:"border-t-[1px] border-[#e8e9eb] py-3"},_t={class:"app-text text-[14px] text-[#999] w-[200px]"},mt={class:"with-ite absolute top-0 right-0 flex flex-col hidden"},ft=["onClick"],ut={key:1,class:"empty flex items-center justify-center"},xt=B({__name:"history",setup(i){const u=q(),g=O(),a=F({list:[]});let l=h(!0);const x=async()=>{const t=await U({});let d=u.appMenuList;a.list=t.data.filter(_=>d.includes(_.key)),l.value=!1};x();const n=h({});(()=>{u.routers.forEach((t,d)=>{t.meta.app!=""&&(t.children&&t.children.length?n.value[t.meta.app]=G(t.children):n.value[t.meta.app]=t.name)})})();const b=t=>{g.push({name:n.value[t]})},k=t=>{J({key:t}).then(()=>{x()})};return(t,d)=>{const _=T,w=V("StarFilled"),E=W,C=X,S=Y,L=Z;return j((o(),r("div",et,[a.list.length?(o(),z(C,{key:0,class:"box-card !border-none",shadow:"never"},{default:m(()=>[st,e("div",ot,[(o(!0),r(D,null,N(a.list,(s,I)=>(o(),r("div",{key:I+"b"},[n.value[s.key]?(o(),r("div",rt,[e("div",{onClick:A=>b(s.key)},[e("div",at,[e("div",nt,[c(_,{class:"w-[50px] h-[50px]",src:p(K)(s.icon),fit:"contain"},{error:m(()=>[pt]),_:2},1032,["src"])]),e("div",ct,[e("p",lt,v(s.title),1)])]),e("div",dt,[e("p",_t,v(s.desc),1)])],8,it),e("div",mt,[e("span",{class:R(["block pr-4 mt-3",s.is_star==2?"text-primary":"text-[#999]"]),onClick:H(A=>k(s.key),["stop"])},[c(E,{size:"18px"},{default:m(()=>[c(w)]),_:1})],10,ft)])])):f("",!0)]))),128))])]),_:1})):f("",!0),!p(l)&&!a.list.length?(o(),r("div",ut,[c(S,{description:p(P)("emptyData")},null,8,["description"])])):f("",!0)])),[[L,p(l)]])}}});const Tt=tt(xt,[["__scopeId","data-v-cab98e8f"]]);export{Tt as default};
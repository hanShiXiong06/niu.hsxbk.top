import{d as C,r as A,R as B,Q as I,e as l,f as _,g as t,B as e,u as o,y as d,x as i,F as S,z as R,v as F,A as N,H as V,n as z,bl as D,bm as j}from"./base-d77b0726.js";/* empty css                   *//* empty css                 *//* empty css                 *//* empty css                        *//* empty css                  */import{_ as H}from"./app_store_default-c4798c2d.js";import{_ as P}from"./apply_empty-58e89635.js";import{t as p}from"./index-c7fb4804.js";import{b as Q,e as T}from"./index-822bfdfd.js";import{d as U}from"./common-56ee0a80.js";import{b as $}from"./vue-router-57155f94.js";import{E as q}from"./index-91bdda63.js";import{E as G}from"./index-435afe75.js";import{E as J}from"./index-f54b8a7b.js";import{E as K}from"./index-294b617f.js";import{v as M}from"./directive-08cd03ab.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-331c6de1.js";import"./index-e37943c3.js";import"./index-704f0685.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-f2dc9b9f.js";import"./index-6245131d.js";import"./index-3b19c3d7.js";import"./index-a20d1a31.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";const u=a=>(D("data-v-e9d3ce07"),a=a(),j(),a),W={class:"main-container"},X={class:"flex justify-between items-center"},Y={class:"font-600 text-[20px] text-[#222]"},Z=u(()=>t("span",{class:"iconfont iconanzhuang mr-[9px]"},null,-1)),tt={class:"flex flex-wrap mt-[28px]"},et=["onClick"],ot={class:"flex items-center"},st=u(()=>t("div",{class:"image-slot"},[t("img",{class:"w-[40px] h-[40px] rounded-[8px]",src:H})],-1)),it={class:"flex-1 font-600 text-[14px] text-[#222] ml-[12px]"},pt={class:"font-500 text-[13px] text-[#6D7278] mt-[14px]"},at=u(()=>t("div",{class:"w-[230px] mx-auto"},[t("img",{src:P,class:"max-w-full",alt:""})],-1)),rt={class:"flex items-center"},nt=C({__name:"overview",setup(a){const x=$(),v=Q(),s=A(!0),r=B({appList:[]});(()=>{s.value=!0,T().then(n=>{r.appList=n.data,s.value=!1}).catch(()=>{s.value=!1})})();const f=()=>{x.push("app/app_store")},h=n=>{let m=v.addonIndexRoute[n];m?x.push({name:m}):f()},g=()=>{window.open("https://www.niucloud.com/product/")};return(n,m)=>{const w=q,y=G,k=J,b=K,E=M;return I((l(),_("div",W,[t("div",{class:z(["h-[480px] box-border px-[60px] pt-[40px]",r.appList.length?"overview-top":""])},[t("div",X,[t("div",Y,e(o(p)("app")),1),d(w,{onClick:f},{default:i(()=>[Z,t("span",null,e(o(p)("installApp")),1)]),_:1})]),t("div",tt,[(l(!0),_(S,null,R(r.appList,(c,L)=>(l(),_("div",{key:L,class:"app-item w-[284px] box-border p-[18px] pb-[24px] bg-[#fff] rounded-[8px] cursor-pointer mr-[24px] mb-[24px]",onClick:lt=>h(c.key)},[t("div",ot,[d(y,{class:"w-[40px] h-[40px] rounded-[8px]",src:o(U)(c.icon),fit:"contain"},{error:i(()=>[st]),_:2},1032,["src"]),t("div",it,e(c.title),1)]),t("div",pt,e(c.desc),1)],8,et))),128)),!r.appList.length&&!s.value?(l(),F(b,{key:0,class:"mx-auto overview-empty"},{image:i(()=>[at]),description:i(()=>[t("p",rt,[t("span",null,e(o(p)("descriptionLeft")),1),d(k,{type:"primary",onClick:g},{default:i(()=>[N(e(o(p)("link")),1)]),_:1}),t("span",null,e(o(p)("descriptionRight")),1)])]),_:1})):V("",!0)])],2)])),[[E,s.value]])}}});const qt=O(nt,[["__scopeId","data-v-e9d3ce07"]]);export{qt as default};
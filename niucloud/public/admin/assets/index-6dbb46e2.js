import{d as u,R as g,r as v,e as r,f as p,y as n,x as a,g as e,F as k,z as w,u as b,B as c}from"./base-d77b0726.js";/* empty css                *//* empty css                 *//* empty css                        */import{_ as y}from"./app_store_default-c4798c2d.js";import{g as E}from"./apply-40cf9e38.js";import{e as L}from"./common-4a1cac58.js";import{b as A,f as C}from"./index-45ac90c3.js";import{b as B}from"./vue-router-57155f94.js";import{E as F}from"./index-435afe75.js";import{E as R}from"./index-2cf73bf7.js";import"./index-e37943c3.js";import"./index-331c6de1.js";import"./index-70af0995.js";import"./index-704f0685.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-3b19c3d7.js";import"./index-a20d1a31.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";const S={class:"main-container h-[500px] w-full p-5 bg-white"},V=e("div",{class:"card-header"},[e("span",{class:"text-[15px]"},"基本应用")],-1),N={class:"flex flex-wrap plug-list pb-10 plug-large"},j=["onClick"],z={class:"flex justify-center items-center"},D=e("div",{class:"image-slot"},[e("img",{class:"w-[240px] h-[120px]",src:y})],-1),I={class:"flex w-[240px] h-[46px]"},U={class:"text-left mt-2 w-[190px]"},$={class:"app-text text-[14px] text-[#222] pl-2"},q={class:"app-text text-[12px] text-[#999] pl-2"},ut=u({__name:"index",setup(G){const l=A(),m=B(),i=g({list:[]});(async()=>{const t=await E({});i.list=t.data})();const o=v({});(()=>{l.routers.forEach((t,_)=>{t.meta.app!=""&&(t.children&&t.children.length?o.value[t.meta.app]=C(t.children):o.value[t.meta.app]=t.name)})})();const d=t=>{m.push({name:o.value[t]})};return(t,_)=>{const f=F,x=R;return r(),p("div",S,[n(x,{class:"box-card !border-none",shadow:"never"},{header:a(()=>[V]),default:a(()=>[e("div",N,[(r(!0),p(k,null,w(i.list,(s,h)=>(r(),p("div",{key:h+"b",class:"app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]",onClick:K=>d(s.key)},[e("div",z,[n(f,{class:"w-[240px] h-[120px]",src:b(L)(s.icon),fit:"contain"},{error:a(()=>[D]),_:2},1032,["src"])]),e("div",I,[e("div",U,[e("p",$,c(s.title),1),e("p",q,c(s.desc),1)])])],8,j))),128))])]),_:1})])}}});export{ut as default};
import"./base-0e92f4db.js";/* empty css                *//* empty css                 *//* empty css                        */import{_ as u}from"./app_store_default-c4798c2d.js";import{g,y as v,z as k}from"./index-fac59425.js";import{c as w}from"./common-46715e7e.js";import{a as b}from"./vue-router-8b032575.js";import{E as L}from"./index-2b1dc445.js";import{E as y}from"./index-2668a8ea.js";import{d as E,M as A,r as C,b as r,e as p,q as n,p as i,f as s,F as B,t as F,u as S,x as c}from"./runtime-core.esm-bundler-67034826.js";import"./index-2d1c7ba3.js";import"./event-a537c4cb.js";import"./index-72686045.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-ebd2990f.js";import"./el-overlay-3eff2fc5.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";/* empty css                  */import"./el-form-item-c2dd2ffe.js";/* empty css                 *//* empty css                  */import"./index-e9d9b1a1.js";import"./index-8cefa3ab.js";import"./index-e09a20f5.js";import"./index-ef31373f.js";import"./index-de22cd40.js";import"./index-c7745eb3.js";import"./debounce-f6ba9d12.js";import"./position-c2e84b2a.js";const V={class:"main-container h-[500px] w-full p-5 bg-white"},N=s("div",{class:"card-header"},[s("span",{class:"text-[15px]"},"基本应用")],-1),R={class:"flex flex-wrap plug-list pb-10 plug-large"},j=["onClick"],q={class:"flex justify-center items-center"},z=s("div",{class:"image-slot"},[s("img",{class:"w-[240px] h-[120px]",src:u})],-1),D={class:"flex w-[240px] h-[46px]"},I={class:"text-left mt-2 w-[190px]"},M={class:"app-text text-[14px] text-[#222] pl-2"},U={class:"app-text text-[12px] text-[#999] pl-2"},At=E({__name:"index",setup($){const m=g(),l=b(),a=A({list:[]});(async()=>{const t=await v({});a.list=t.data})();const o=C({});(()=>{m.routers.forEach((t,_)=>{t.meta.app!=""&&(t.children&&t.children.length?o.value[t.meta.app]=k(t.children):o.value[t.meta.app]=t.name)})})();const d=t=>{l.push({name:o.value[t]})};return(t,_)=>{const x=L,f=y;return r(),p("div",V,[n(f,{class:"box-card !border-none",shadow:"never"},{header:i(()=>[N]),default:i(()=>[s("div",R,[(r(!0),p(B,null,F(a.list,(e,h)=>(r(),p("div",{key:h+"b",class:"app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]",onClick:J=>d(e.key)},[s("div",q,[n(x,{class:"w-[240px] h-[120px]",src:S(w)(e.icon),fit:"contain"},{error:i(()=>[z]),_:2},1032,["src"])]),s("div",D,[s("div",I,[s("p",M,c(e.title),1),s("p",U,c(e.desc),1)])])],8,j))),128))])]),_:1})])}}});export{At as default};
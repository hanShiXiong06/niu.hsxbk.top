import{d as B,R as F,r as h,V,Q as j,u as c,e as r,f as i,v as D,x as d,g as e,F as M,z as N,y as l,B as x,H as f,bl as R,bm as z}from"./base-d77b0726.js";/* empty css                   *//* empty css                 *//* empty css                *//* empty css                *//* empty css                 *//* empty css                        */import{d as $}from"./index-331c6de1.js";import{_ as H}from"./app_store_default-c4798c2d.js";import{g as Q}from"./apply-40cf9e38.js";import{b as U,f as q,s as G}from"./index-45ac90c3.js";import{e as J}from"./common-4a1cac58.js";import{b as K}from"./vue-router-57155f94.js";import{t as O}from"./index-70af0995.js";import{E as P}from"./index-435afe75.js";import{E as T}from"./index-e37943c3.js";import{E as W}from"./index-2cf73bf7.js";import{E as X}from"./index-294b617f.js";import{v as Y}from"./directive-08cd03ab.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-704f0685.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-3b19c3d7.js";import"./index-a20d1a31.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";const v=p=>(R("data-v-bc161813"),p=p(),z(),p),tt={class:"main-container w-full bg-white"},et=v(()=>e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-[20px]"},"应用管理")],-1)),st={class:"flex flex-wrap plug-list pb-10 plug-large"},ot={key:0,class:"relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary"},rt=["onClick"],it={class:"flex py-5 items-center"},pt={class:"flex justify-center items-center"},at=v(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[50px] h-[50px]",src:H})],-1)),nt={class:"flex flex-col justify-between text-left w-[190px]"},ct={class:"app-text w-[190px] text-[17px] text-[#222] pl-3"},lt={class:"border-t-[1px] border-[#e8e9eb] py-3"},_t={class:"app-text text-[14px] text-[#999] w-[200px]"},mt={class:"with-ite absolute top-0 right-0 flex flex-col hidden"},dt=["onClick"],ft={key:1,class:"empty flex items-center justify-center"},ut=B({__name:"concern",setup(p){const _=U(),g=K(),a=F({list:[]});let m=h(!0);const u=async()=>{const t=await Q({type:"tart"});a.list=t.data,m.value=!1};u();const n=h({});(()=>{_.routers.forEach((t,s)=>{t.meta.app!=""&&(t.children&&t.children.length?n.value[t.meta.app]=q(t.children):n.value[t.meta.app]=t.name)})})();const y=t=>{let s=_.appMenuList;s.length&&s.includes(t)||s.push(t),_.setAppMenuList(s),g.push({name:n.value[t]})},b=t=>{G({key:t}).then(()=>{u()})};return(t,s)=>{const k=P,w=V("StarFilled"),E=T,C=W,L=X,S=Y;return j((r(),i("div",tt,[a.list.length?(r(),D(C,{key:0,class:"box-card !border-none",shadow:"never"},{default:d(()=>[et,e("div",st,[(r(!0),i(M,null,N(a.list,(o,A)=>(r(),i("div",{key:A+"b"},[n.value[o.key]?(r(),i("div",ot,[e("div",{onClick:I=>y(o.key)},[e("div",it,[e("div",pt,[l(k,{class:"w-[50px] h-[50px]",src:c(J)(o.icon),fit:"contain"},{error:d(()=>[at]),_:2},1032,["src"])]),e("div",nt,[e("p",ct,x(o.title),1)])]),e("div",lt,[e("p",_t,x(o.desc),1)])],8,rt),e("div",mt,[e("span",{class:"block pr-4 mt-3 text-primary",onClick:$(I=>b(o.key),["stop"])},[l(E,{size:"18px"},{default:d(()=>[l(w)]),_:1})],8,dt)])])):f("",!0)]))),128))])]),_:1})):f("",!0),!c(m)&&!a.list.length?(r(),i("div",ft,[l(L,{description:c(O)("emptyData")},null,8,["description"])])):f("",!0)])),[[S,c(m)]])}}});const Pt=Z(ut,[["__scopeId","data-v-bc161813"]]);export{Pt as default};

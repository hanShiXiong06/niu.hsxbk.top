import{d as S,r as u,R as k,w as I,Q as q,e as B,f as R,g as a,B as n,u as t,y as s,x as r,bl as D,bm as N}from"./base-d77b0726.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";import{t as e}from"./index-c7fb4804.js";import{B as F}from"./sys-953663dd.js";import{E as V}from"./index-331c6de1.js";import{u as j,b as L}from"./vue-router-57155f94.js";import{a as d}from"./index-9e51ba8b.js";import{a as M,E as P}from"./index-68c5ad54.js";import{E as Q}from"./index-c1eb81db.js";import{E as U}from"./index-2cf73bf7.js";import{v as $}from"./directive-08cd03ab.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-822bfdfd.js";import"./common-56ee0a80.js";import"./index-e37943c3.js";import"./index-704f0685.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./event-e06a23af.js";import"./index-6245131d.js";import"./_Uint8Array-2fd72219.js";import"./_initCloneObject-22d1caee.js";import"./index-d1e433eb.js";const A="/admin/assets/preview-52aad803.png",G=i=>(D("data-v-3bfcd0e2"),i=i(),N(),i),H={class:"main-container"},J={class:"flex ml-[18px] justify-between items-center mt-[20px]"},K={class:"text-[20px]"},O=G(()=>a("img",{class:"w-[500px]",src:A,alt:""},null,-1)),T=S({__name:"config",setup(i){const f=j().meta.title,m=u(!0),o=k({is_open:!1,request_url:""}),v=u();L(),F().then(p=>{o.request_url=p.data.web_url+"/",m.value=!1});const{copy:g,isSupported:b,copied:c}=V(),w=p=>{if(!b.value){d({message:e("notSupportCopy"),type:"warning"});return}g(p)};I(c,()=>{c.value&&d({message:e("copySuccess"),type:"success"})});const x=()=>{window.open(o.request_url)};return(p,l)=>{const _=M,y=Q,h=U,E=P,C=$;return q((B(),R("div",H,[a("div",J,[a("span",K,n(t(f)),1)]),s(E,{model:o,"label-width":"150px",ref_key:"formRef",ref:v,class:"page-form"},{default:r(()=>[s(h,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[s(_,{label:t(e)("preview"),prop:"weapp_name"},{default:r(()=>[O]),_:1},8,["label"]),s(_,{label:t(e)("PCDomainName")},{default:r(()=>[s(y,{"model-value":o.request_url,class:"input-width",readonly:!0},{append:r(()=>[a("div",{class:"cursor-pointer",onClick:l[0]||(l[0]=X=>w(o.request_url))},n(t(e)("copy")),1)]),_:1},8,["model-value"]),a("span",{class:"ml-2 cursor-pointer visit-btn",onClick:x},n(t(e)("clickVisit")),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])])),[[C,m.value]])}}});const ke=z(T,[["__scopeId","data-v-3bfcd0e2"]]);export{ke as default};
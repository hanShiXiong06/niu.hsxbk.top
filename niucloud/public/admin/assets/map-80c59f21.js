import{g as k,r as c,a4 as w,m as d,n as x,a1 as b,D,E as r,F as s,q as i,L as _,u as m,K as V}from"./base-d2ce4248.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                 */import{t as n}from"./index-578c83eb.js";import{ah as B,ai as F}from"./index-057b5f2c.js";import{E as C}from"./index-9997ff5d.js";import{a as N,E as I}from"./index-f579a83b.js";import{E as K}from"./index-32160c2f.js";import{E as L}from"./index-953c712f.js";import{v as M}from"./directive-3f066692.js";import"./common-dd6d00bb.js";import"./common-2cf17469.js";import"./vue-router-d3dc2686.js";import"./el-overlay-7451f13b.js";import"./event-f83e96f5.js";import"./index-28969730.js";import"./focus-trap-b41dd321.js";import"./el-radio-b620ac73.js";import"./storage-e62e496d.js";import"./index-758a5fe7.js";import"./index-92c8bc76.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-tooltip-58212670.js";import"./el-avatar-4397f45a.js";import"./index-3118dac6.js";import"./_Uint8Array-6ca580e8.js";import"./_initCloneObject-5fe9c070.js";const R={class:"main-container"},S={class:"panel-title"},q={class:"fixed-footer-wrap"},T={class:"fixed-footer"},yt=k({__name:"map",setup(U){const t=c(!1),l=c(),o=w({key:""});(async()=>{const e=await(await B()).data;o.key=e.key})();const f=async e=>{t.value||!e||F(o).then(()=>{t.value=!1}).catch(()=>{t.value=!1})};return(e,a)=>{const u=C,v=N,y=K,E=I,g=L,h=M;return d(),x("div",R,[b((d(),D(E,{model:o,"label-width":"150px",ref_key:"formRef",ref:l,class:"page-form"},{default:r(()=>[s(y,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[i("h3",S,_(m(n)("mapSetting")),1),s(v,{label:m(n)("mapKey"),prop:"site_name"},{default:r(()=>[s(u,{modelValue:o.key,"onUpdate:modelValue":a[0]||(a[0]=p=>o.key=p),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[h,t.value]]),i("div",q,[i("div",T,[s(g,{type:"primary",loading:t.value,onClick:a[1]||(a[1]=p=>f(l.value))},{default:r(()=>[V(_(m(n)("save")),1)]),_:1},8,["loading"])])])])}}});export{yt as default};
import{g as w,a4 as y,m as c,n as E,F as o,E as a,q as l,L as m,u as t,a1 as x,D as k,K as d}from"./base-45eb5090.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-58212670.js";import{a8 as C}from"./index-ad71a852.js";/* empty css                  */import{t as i}from"./index-3694a2b2.js";import{u as B,a as D}from"./vue-router-fcbaaf02.js";import{a as L,E as N}from"./index-cbbcd330.js";import{E as T}from"./index-25c37860.js";import{E as A}from"./index-fc3020f4.js";import{v as V}from"./directive-9f485fe5.js";import"./el-overlay-616d6124.js";import"./event-4977bef7.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";/* empty css                 */import"./el-radio-2719e44c.js";import"./storage-4159d1ed.js";import"./index-9670e877.js";import"./index-4ce9333e.js";import"./index-3be486d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-avatar-bc58ad46.js";import"./index-aef37b98.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./_Uint8Array-e584e472.js";import"./_initCloneObject-983ff8c8.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./flatten-0fc8b7eb.js";import"./_isIterateeCall-104f1f93.js";const j={class:"main-container"},R={class:"flex justify-between items-center"},$={class:"text-[20px]"},q={class:"mt-[20px]"},xt=w({__name:"agreement",setup(z){const _=B().meta.title;let e=y({loading:!0,data:[]});(()=>{e.loading=!0,e.data=[],C().then(r=>{Object.keys(r.data).forEach(p=>e.data.push(r.data[p])),e.loading=!1}).catch(()=>{e.loading=!1})})();const u=D(),f=r=>{u.push(`/setting/agreement/edit?key=${r.agreement_key}`)};return(r,p)=>{const n=L,g=T,h=N,b=A,v=V;return c(),E("div",j,[o(b,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[l("div",R,[l("span",$,m(t(_)),1)]),l("div",q,[x((c(),k(h,{data:t(e).data,size:"large"},{empty:a(()=>[l("span",null,m(t(e).loading?"":t(i)("emptyData")),1)]),default:a(()=>[o(n,{prop:"type_name",label:t(i)("typeName"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),o(n,{prop:"title",label:t(i)("title"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),o(n,{label:t(i)("updateTime"),"min-width":"180",align:"center"},{default:a(({row:s})=>[d(m(s.update_time||""),1)]),_:1},8,["label"]),o(n,{label:t(i)("operation"),fixed:"right",width:"100"},{default:a(({row:s})=>[o(g,{type:"primary",link:"",onClick:O=>f(s)},{default:a(()=>[d(m(t(i)("config")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[v,t(e).loading]])])]),_:1})])}}});export{xt as default};

import{g as B,a4 as D,aa as L,m as d,n as g,F as a,E as o,q as l,L as n,u as t,K as _,a1 as N,D as q,I as A,J as S,r as F,G as V}from"./base-45eb5090.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-58212670.js";import"./index-ad71a852.js";/* empty css                 *//* empty css                  */import{t as e}from"./index-3694a2b2.js";import{a as j,b as z}from"./weapp-da3f9aae.js";import{e as I}from"./notice-fed9c625.js";import{u as W}from"./vue-router-fcbaaf02.js";import{E as $}from"./index-4cf48db5.js";import{E as G}from"./index-25c37860.js";import{E as J}from"./index-7c3a8eaa.js";import{a as K,E as O}from"./index-cbbcd330.js";import{E as R}from"./index-fc3020f4.js";import{v as U}from"./directive-9f485fe5.js";import"./el-overlay-616d6124.js";import"./event-4977bef7.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";/* empty css                 */import"./el-radio-2719e44c.js";import"./storage-4159d1ed.js";import"./index-9670e877.js";import"./index-4ce9333e.js";import"./index-3be486d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-avatar-bc58ad46.js";import"./index-aef37b98.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./_Uint8Array-e584e472.js";import"./_initCloneObject-983ff8c8.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./flatten-0fc8b7eb.js";import"./_isIterateeCall-104f1f93.js";const H={class:"main-container"},M={class:"flex justify-between items-center"},P={class:"text-[20px]"},Q={class:"flex"},X={class:"text-base"},Y={class:"text-base"},Jt=B({__name:"template",setup(Z){const h=W().meta.title,s=D({loading:!0,data:[]}),u=(r=1)=>{s.loading=!0,j().then(i=>{s.loading=!1,s.data=i.data}).catch(()=>{s.loading=!1})};u();const b=(r=null)=>{const i=$.service({lock:!0,background:"rgba(0, 0, 0, 0)"});z({keys:r?[r.key]:[]}).then(()=>{u(),i.close()}).catch(()=>{i.close()})},v=r=>{const i=F({key:"",type:"",status:0});i.value.status=r.is_weapp?0:1,i.value.key=r.key,i.value.type="weapp",s.loading=!0,I(i.value).then(m=>{u()}).catch(()=>{s.loading=!1})};return(r,i)=>{const m=G,y=L("Warning"),k=V,w=J,c=K,x=O,E=R,C=U;return d(),g("div",H,[a(E,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[l("div",M,[l("span",P,n(t(h)),1),a(m,{type:"primary",class:"w-[100px]",onClick:b},{default:o(()=>[_(n(t(e)("batchAcquisition")),1)]),_:1})]),a(w,{class:"warm-prompt !my-[20px]",type:"info"},{default:o(()=>[l("div",Q,[a(k,{class:"mr-2 mt-[2px]",size:"18"},{default:o(()=>[a(y)]),_:1}),l("div",null,[l("p",X,n(t(e)("operationTip"))+" 1、"+n(t(e)("operationTipOne")),1),l("p",Y,"2、"+n(t(e)("operationTipTwo")),1)])])]),_:1}),l("div",null,[N((d(),q(x,{data:s.data,size:"large"},{empty:o(()=>[l("span",null,n(s.loading?"":t(e)("emptyData")),1)]),default:o(()=>[a(c,{prop:"name","show-overflow-tooltip":!0,label:t(e)("name"),"min-width":"150"},null,8,["label"]),a(c,{label:t(e)("response"),"min-width":"180"},{default:o(({row:p})=>[(d(!0),g(A,null,S(p.weapp.content,(f,T)=>(d(),g("div",{key:"a"+T,class:"text-left"},n(f.join(":")),1))),128))]),_:1},8,["label"]),a(c,{label:t(e)("isStart"),"min-width":"100",align:"center"},{default:o(({row:p})=>[_(n(p.is_weapp==1?t(e)("startUsing"):t(e)("statusDeactivate")),1)]),_:1},8,["label"]),a(c,{prop:"weapp_template_id",label:t(e)("serialNumber"),"min-width":"180"},null,8,["label"]),a(c,{label:t(e)("operation"),fixed:"right",width:"200"},{default:o(({row:p})=>[a(m,{type:"primary",link:"",onClick:f=>v(p)},{default:o(()=>[_(n(p.is_weapp==1?t(e)("close"):t(e)("open")),1)]),_:2},1032,["onClick"]),a(m,{type:"danger",link:"",onClick:f=>b(p)},{default:o(()=>[_(n(t(e)("regain")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[C,s.loading]])])]),_:1})])}}});export{Jt as default};

import{g as y,r as f,a4 as b,m as _,n as E,q as m,L as d,u as t,a1 as D,D as k,E as s,F as l,K as U}from"./base-d2ce4248.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                 */import{t as o}from"./index-578c83eb.js";import{ad as q,ae as C}from"./index-057b5f2c.js";import{u as B}from"./vue-router-d3dc2686.js";import{E as P}from"./index-9997ff5d.js";import{a as R,E as F}from"./index-f579a83b.js";import{E as N}from"./index-32160c2f.js";import{E as S}from"./index-953c712f.js";import{v as I}from"./directive-3f066692.js";import"./common-dd6d00bb.js";import"./common-2cf17469.js";import"./el-overlay-7451f13b.js";import"./event-f83e96f5.js";import"./index-28969730.js";import"./focus-trap-b41dd321.js";import"./el-radio-b620ac73.js";import"./storage-e62e496d.js";import"./index-758a5fe7.js";import"./index-92c8bc76.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-tooltip-58212670.js";import"./el-avatar-4397f45a.js";import"./index-3118dac6.js";import"./_Uint8Array-6ca580e8.js";import"./_initCloneObject-5fe9c070.js";const T={class:"main-container"},j={class:"flex ml-[18px] justify-between items-center mt-[20px]"},A={class:"text-[24px]"},K={class:"panel-title !text-sm"},L={class:"panel-title !text-sm"},Q={class:"panel-title !text-sm"},M={class:"fixed-footer-wrap"},O={class:"fixed-footer"},Ee=y({__name:"wxoplatform",setup(W){const v=B().meta.title,p=f(!0),e=b({appid:"",appsecret:"",token:"",key:"",email:"",mobile:"",qq:"",wx:"",start_domain:"",receive_url:"",message_receive:"",host:""});(async(u=0)=>{const a=await(await q()).data;Object.keys(e).forEach(n=>{a[n]!=null&&(e[n]=a[n])}),p.value=!1})();const c=f();b({site_name:[{required:!0,message:o("siteNamePlaceholder"),trigger:"blur"}]});const V=async u=>{p.value||!u||await u.validate(async a=>{a&&(p.value=!0,C(e).then(()=>{p.value=!1}).catch(()=>{p.value=!1}))})};return(u,a)=>{const n=P,i=R,w=N,h=F,x=S,g=I;return _(),E("div",T,[m("div",j,[m("span",A,d(t(v)),1)]),D((_(),k(h,{model:e,"label-width":"150px",ref_key:"formRef",ref:c,class:"page-form"},{default:s(()=>[l(w,{class:"box-card !border-none mt-[5px]",shadow:"never"},{default:s(()=>[m("h3",K,d(t(o)("oplatformSetting")),1),l(i,{label:"APPID"},{default:s(()=>[l(n,{modelValue:e.appid,"onUpdate:modelValue":a[0]||(a[0]=r=>e.appid=r),placeholder:t(o)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),l(i,{label:"APPSECRET"},{default:s(()=>[l(n,{modelValue:e.appsecret,"onUpdate:modelValue":a[1]||(a[1]=r=>e.appsecret=r),placeholder:t(o)("appsecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),m("h3",L,d(t(o)("oplatformComm")),1),l(i,{label:t(o)("empowerStartDomain")},{default:s(()=>[m("span",null,d(e.start_domain),1)]),_:1},8,["label"]),l(i,{label:t(o)("empowerReceiveUrl")},{default:s(()=>[m("span",null,d(e.receive_url),1)]),_:1},8,["label"]),l(i,{label:t(o)("messageValidationToken")},{default:s(()=>[l(n,{modelValue:e.token,"onUpdate:modelValue":a[2]||(a[2]=r=>e.token=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:t(o)("messageDecryptKey")},{default:s(()=>[l(n,{modelValue:e.key,"onUpdate:modelValue":a[3]||(a[3]=r=>e.key=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:t(o)("messageReceiveUrl")},{default:s(()=>[m("span",null,d(e.message_receive),1)]),_:1},8,["label"]),l(i,{label:t(o)("wechatDomain")},{default:s(()=>[m("span",null,d(e.host),1)]),_:1},8,["label"]),l(i,{label:t(o)("weappDomain")},{default:s(()=>[m("span",null,d(e.host),1)]),_:1},8,["label"]),l(i,{label:t(o)("weappBusinessDomain")},{default:s(()=>[m("span",null,d(e.host),1)]),_:1},8,["label"]),m("h3",Q,d(t(o)("oplatformBuilder")),1),l(i,{label:t(o)("builderEmail")},{default:s(()=>[l(n,{modelValue:e.email,"onUpdate:modelValue":a[4]||(a[4]=r=>e.email=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:t(o)("builderMobile")},{default:s(()=>[l(n,{modelValue:e.mobile,"onUpdate:modelValue":a[5]||(a[5]=r=>e.mobile=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:t(o)("builderQQ")},{default:s(()=>[l(n,{modelValue:e.qq,"onUpdate:modelValue":a[6]||(a[6]=r=>e.qq=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:t(o)("builderWx")},{default:s(()=>[l(n,{modelValue:e.wx,"onUpdate:modelValue":a[7]||(a[7]=r=>e.wx=r),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[g,p.value]]),m("div",M,[m("div",O,[l(x,{type:"primary",loading:p.value,onClick:a[8]||(a[8]=r=>V(c.value))},{default:s(()=>[U(d(t(o)("save")),1)]),_:1},8,["loading"])])])])}}});export{Ee as default};
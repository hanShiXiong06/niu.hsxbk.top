import{d as A,r as v,o as I,V as B,e as R,f as q,g as s,B as l,u as e,y as o,x as t,i as z,D as u,A as g,aP as N,aQ as T}from"./base-06478700.js";/* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  */import"./index-80fd3793.js";/* empty css                    */import{a as F}from"./vue-router-d09a2c28.js";import{t as n}from"./index-81ed253c.js";import{d as D}from"./common-92a35870.js";import{g as M}from"./weapp-c2fec376.js";import{a as P,E as Q}from"./index-0d66b73c.js";import{E as $}from"./index-2fcd1254.js";import{E as U}from"./index-c2f001d3.js";import{a as W,E as G}from"./index-da6a2951.js";import{E as H,a as J}from"./index-c17093ae.js";import{E as K}from"./index-543fb162.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./event-10eba222.js";import"./index-adb89d14.js";import"./el-main-9a0960e7.js";import"./index-6b67c4ac.js";import"./el-overlay-42a687c6.js";import"./index-9fe5de95.js";import"./focus-trap-3e826cdc.js";import"./index-f27d6ce0.js";import"./index-818c0ce2.js";import"./el-form-item-314d006d.js";/* empty css                 */import"./el-tooltip-58212670.js";import"./index-b52d0f2a.js";import"./index-b68e8463.js";import"./index-2a269c7c.js";import"./index-e4abfaa5.js";import"./index-9ee9102c.js";import"./strings-fe930bc4.js";import"./index-b6a184ba.js";import"./debounce-1db848fd.js";import"./position-c3bcd0be.js";const O=d=>(N("data-v-83142c93"),d=d(),T(),d),X={class:"w-full p-5 bg-white"},Y={class:"flex justify-between items-center mb-[20px]"},Z={class:"text-[20px]"},ee={class:"p-[20px]"},te={class:"text-[16px] mb-[20px]"},se={class:"text-[14px] text-[#303133] font-[700]"},oe={class:"text-[#999]"},ne={class:"mt-[20px] mb-[40px] h-[32px]"},le={class:"text-[14px] text-[#303133] font-[700]"},ae={class:"text-[#999]"},pe={class:"mt-[20px] mb-[40px] h-[32px]"},ce={class:"text-[14px] text-[#303133] font-[700]"},ie={class:"text-[#999]"},re={class:"mt-[20px] mb-[40px] h-[32px]"},de={class:"text-[14px] text-[#303133] font-[700]"},me={class:"text-[#999]"},_e=O(()=>s("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),xe={class:"flex justify-center"},fe={class:"w-[100%] h-[100%] flex items-center justify-center bg-[#f5f7fa]"},ue={class:"mt-[22px] text-center"},be={class:"text-[14px] text-[#303133] font-[700]"},he=A({__name:"access",setup(d){const b=F();let c=v("/website/channel/weapp"),a=v(2),m=v("");I(async()=>{let i=await M();m.value=i.data.qr_code});const k=i=>{window.open(i,"_blank")},E=i=>{b.push({path:c.value})};return(i,p)=>{const h=P,C=Q,_=B("CircleCheckFilled"),x=$,w=U,f=W,S=G,y=H,V=K,j=J;return R(),q("div",X,[s("div",Y,[s("span",Z,l(e(n)("title")),1)]),o(C,{modelValue:e(c),"onUpdate:modelValue":p[0]||(p[0]=r=>z(c)?c.value=r:c=r),class:"demo-tabs",onTabChange:E},{default:t(()=>[o(h,{label:e(n)("weappAccessFlow"),name:"/website/channel/weapp"},null,8,["label"]),o(h,{label:e(n)("subscribeMessage"),name:"/website/channel/weapp/message"},null,8,["label"]),o(h,{label:e(n)("weappRelease"),name:"/website/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),s("div",ee,[s("p",te,l(e(n)("weappInlet")),1),o(j,null,{default:t(()=>[o(y,{span:20},{default:t(()=>[o(S,{direction:"vertical"},{default:t(()=>[o(f,null,u({title:t(()=>[s("p",se,l(e(n)("weappAttestation")),1)]),description:t(()=>[s("span",oe,l(e(n)("weappAttest")),1),s("div",ne,[o(w,{type:"primary",onClick:p[1]||(p[1]=r=>k("https://mp.weixin.qq.com/"))},{default:t(()=>[g(l(e(n)("clickAccess")),1)]),_:1})])]),_:2},[e(a)>1?{name:"icon",fn:t(()=>[o(x,{size:"25px",class:"text-color"},{default:t(()=>[o(_)]),_:1})]),key:"0"}:e(a)==1?{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[s("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"1")]),key:"2"}]),1024),o(f,null,u({title:t(()=>[s("p",le,l(e(n)("weappSetting")),1)]),description:t(()=>[s("span",ae,l(e(n)("emplace")),1),s("div",pe,[o(w,{type:"primary",plain:"",onClick:p[2]||(p[2]=r=>e(b).push("/website/channel/weapp/config"))},{default:t(()=>[g(l(e(n)("weappSettingBtn")),1)]),_:1})])]),_:2},[e(a)>2?{name:"icon",fn:t(()=>[o(x,{size:"25px"},{default:t(()=>[o(_)]),_:1})]),key:"0"}:e(a)==2?{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[s("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"2")]),key:"2"}]),1024),o(f,null,u({title:t(()=>[s("p",ce,l(e(n)("uploadVersion")),1)]),description:t(()=>[s("span",ie,l(e(n)("releaseCourse")),1),s("div",re,[o(w,{type:"primary",plain:"",onClick:p[3]||(p[3]=r=>e(b).push("/website/channel/weapp/code"))},{default:t(()=>[g(l(e(n)("weappRelease")),1)]),_:1})])]),_:2},[e(a)>3?{name:"icon",fn:t(()=>[o(x,{size:"25px"},{default:t(()=>[o(_)]),_:1})]),key:"0"}:e(a)==3?{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[s("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"3")]),key:"2"}]),1024),o(f,null,u({title:t(()=>[s("p",de,l(e(n)("completeAccess")),1)]),description:t(()=>[s("span",me,l(e(n)("releaseCourse")),1),_e]),_:2},[e(a)>4?{name:"icon",fn:t(()=>[o(x,{size:"25px"},{default:t(()=>[o(_)]),_:1})]),key:"0"}:e(a)==4?{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[s("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:t(()=>[s("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"4")]),key:"2"}]),1024)]),_:1})]),_:1}),o(y,{span:4},{default:t(()=>[s("div",xe,[o(V,{class:"w-[180px] h-[180px]",src:e(m)?e(D)(e(m)):""},{error:t(()=>[s("div",fe,[s("span",null,l(e(m)?e(n)("fileErr"):e(n)("emptyQrCode")),1)])]),_:1},8,["src"])]),s("div",ue,[s("p",be,l(e(n)("clickAccess2")),1)])]),_:1})]),_:1})])])}}});const lt=L(he,[["__scopeId","data-v-83142c93"]]);export{lt as default};

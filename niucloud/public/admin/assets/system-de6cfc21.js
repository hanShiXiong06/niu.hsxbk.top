import{g as C,r as f,a4 as g,m as h,n as D,q as d,L as p,u as a,a1 as I,D as v,E as s,F as o,T as B,K as F}from"./base-45eb5090.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                */import{_ as T}from"./index-1b934a92.js";/* empty css                 */import{t as l}from"./index-047041cb.js";import{an as V,a4 as R,ao as S}from"./index-341914e3.js";import{c as q,a as L}from"./storage-4159d1ed.js";import{u as j}from"./vue-router-fcbaaf02.js";import{E as W}from"./index-4ce9333e.js";import{a as A,E as K}from"./index-c4fd4c9d.js";import{E as O}from"./index-fc3020f4.js";import{E as $}from"./index-25c37860.js";import{v as z}from"./directive-9f485fe5.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-671f772c.js";import"./el-overlay-616d6124.js";import"./event-4977bef7.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./attachment-15395c63.js";/* empty css               *//* empty css                  *//* empty css                  */import"./el-tooltip-58212670.js";/* empty css                      *//* empty css                    *//* empty css                 *//* empty css                    */import"./index-aef37b98.js";import"./index-e29fff14.js";import"./index-9670e877.js";import"./index-0d830c44.js";import"./index-3be486d3.js";import"./index-a096e75b.js";import"./index-da8a1336.js";import"./index-719dad93.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./_Uint8Array-e584e472.js";import"./flatten-0fc8b7eb.js";import"./index-e841b684.js";import"./index-cc9a73f0.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./el-radio-2719e44c.js";import"./el-avatar-bc58ad46.js";import"./castArray-df7eff2c.js";import"./_initCloneObject-983ff8c8.js";const G={class:"main-container"},H={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},J={class:"text-[20px]"},M={class:"panel-title !text-sm"},Q={class:"text-[12px] text-[#a9a9a9]"},X={class:"text-[12px] text-[#a9a9a9]"},Y={class:"panel-title !text-sm"},Z={class:"panel-title !text-sm"},ee={class:"fixed-footer-wrap"},te={class:"fixed-footer"},rt=C({__name:"system",setup(oe){const x=j().meta.title,m=f(!0),b=f(),e=g({site_name:"",logo:"",desc:"",latitude:"",keywords:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",business_hours:"",phone:"",front_end_name:"",front_end_logo:"",icon:"",wechat_code:"",enterprise_wechat:"",tel:""});(async(u=0)=>{const t=await(await V()).data;Object.keys(e).forEach(n=>{t[n]!=null&&(e[n]=t[n])});const i=await(await R()).data;e.wechat_code=i.wechat_code,e.enterprise_wechat=i.enterprise_wechat,e.tel=i.tel,b.value=q(),m.value=!1})();const w=f(),y=g({site_name:[{required:!0,message:l("siteNamePlaceholder"),trigger:"blur"}],front_end_name:[{required:!0,message:l("frontEndNamePlaceholder"),trigger:"blur"}]}),E=async u=>{m.value||!u||await u.validate(async t=>{t&&(m.value=!0,S(e).then(()=>{m.value=!1,k()}).catch(()=>{m.value=!1}))})},k=async()=>{const u=await(await V()).data;L.set({key:"siteInfo",data:u})};return(u,t)=>{const i=W,n=A,c=T,_=O,N=K,U=$,P=z;return h(),D("div",G,[d("div",H,[d("span",J,p(a(x)),1)]),I((h(),v(N,{model:e,"label-width":"150px",ref_key:"formRef",ref:w,rules:y,class:"page-form"},{default:s(()=>[o(_,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[d("h3",M,p(a(l)("websiteInfo")),1),o(n,{label:a(l)("siteName"),prop:"site_name"},{default:s(()=>[o(i,{modelValue:e.site_name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.site_name=r),placeholder:a(l)("siteNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:a(l)("logo")},{default:s(()=>[d("div",null,[o(c,{modelValue:e.logo,"onUpdate:modelValue":t[1]||(t[1]=r=>e.logo=r)},null,8,["modelValue"]),d("p",Q,p(a(l)("logoPlaceholder")),1)])]),_:1},8,["label"]),o(n,{label:a(l)("icon")},{default:s(()=>[d("div",null,[o(c,{modelValue:e.icon,"onUpdate:modelValue":t[2]||(t[2]=r=>e.icon=r)},null,8,["modelValue"]),d("p",X,p(a(l)("iconPlaceholder")),1)])]),_:1},8,["label"]),o(n,{label:a(l)("keywords")},{default:s(()=>[o(i,{modelValue:e.keywords,"onUpdate:modelValue":t[3]||(t[3]=r=>e.keywords=r),placeholder:a(l)("keywordsPlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:a(l)("desc")},{default:s(()=>[o(i,{modelValue:e.desc,"onUpdate:modelValue":t[4]||(t[4]=r=>e.desc=r),type:"textarea",rows:"4",clearable:"",placeholder:a(l)("descPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(_,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[d("h3",Y,p(a(l)("frontEndInfo")),1),o(n,{label:a(l)("frontEndName")},{default:s(()=>[o(i,{modelValue:e.front_end_name,"onUpdate:modelValue":t[5]||(t[5]=r=>e.front_end_name=r),placeholder:a(l)("frontEndNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:a(l)("frontEndLogo")},{default:s(()=>[o(c,{modelValue:e.front_end_logo,"onUpdate:modelValue":t[6]||(t[6]=r=>e.front_end_logo=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),b.value=="admin"?(h(),v(_,{key:0,class:"box-card !border-none",shadow:"never"},{default:s(()=>[d("h3",Z,p(a(l)("serviceInformation")),1),o(n,{label:a(l)("contactsTel")},{default:s(()=>[o(i,{modelValue:e.tel,"onUpdate:modelValue":t[7]||(t[7]=r=>e.tel=r),placeholder:a(l)("contactsTelPlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:a(l)("wechatCode")},{default:s(()=>[o(c,{modelValue:e.wechat_code,"onUpdate:modelValue":t[8]||(t[8]=r=>e.wechat_code=r)},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a(l)("customerServiceCode")},{default:s(()=>[o(c,{modelValue:e.enterprise_wechat,"onUpdate:modelValue":t[9]||(t[9]=r=>e.enterprise_wechat=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):B("",!0)]),_:1},8,["model","rules"])),[[P,m.value]]),d("div",ee,[d("div",te,[o(U,{type:"primary",loading:m.value,onClick:t[10]||(t[10]=r=>E(w.value))},{default:s(()=>[F(p(a(l)("save")),1)]),_:1},8,["loading"])])])])}}});export{rt as default};

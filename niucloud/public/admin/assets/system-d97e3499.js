import"./base-0e92f4db.js";/* empty css                   *//* empty css                  */import{a as U,E as B}from"./el-form-item-c2dd2ffe.js";/* empty css                */import{_ as D}from"./index-48a4e5ef.js";/* empty css                 */import{t as o}from"./index-2d1c7ba3.js";import{ah as g,ai as I}from"./index-fac59425.js";import{h as F,a as R}from"./common-46715e7e.js";import{u as T}from"./vue-router-8b032575.js";import{E as q}from"./index-8cefa3ab.js";import{E as S}from"./index-2668a8ea.js";import{E as j}from"./index-e09a20f5.js";import{v as L}from"./directive-c6f70b8e.js";import{d as W,r as _,M as w,b as f,e as A,f as i,x as u,u as a,L as M,m as x,p as s,q as l,C as O,v as $}from"./runtime-core.esm-bundler-67034826.js";import"./index-72686045.js";import"./event-a537c4cb.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-17d8e4dc.js";import"./el-overlay-3eff2fc5.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";import"./attachment-f90dcf10.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                   */import"./index-e9d9b1a1.js";import"./index-8c8d61e8.js";import"./index-ef31373f.js";import"./index-a31d0a55.js";import"./aria-adfa05c5.js";import"./validator-9409f909.js";import"./index-de22cd40.js";import"./index-434046cb.js";import"./index-d23c70b3.js";import"./index-2b1dc445.js";import"./index-c7745eb3.js";import"./debounce-f6ba9d12.js";import"./position-c2e84b2a.js";import"./index-0caa5b89.js";import"./index-fd563016.js";import"./isEqual-97c7f2d5.js";import"./index-95382bd9.js";import"./index-757074f4.js";import"./index-66750d66.js";import"./strings-1130dd70.js";import"./index-c6aa1547.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./index-ebd2990f.js";const z={class:"main-container"},G={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},H={class:"text-[20px]"},J={class:"panel-title !text-sm"},K={class:"text-[12px] text-[#a9a9a9]"},Q={class:"text-[12px] text-[#a9a9a9]"},X={class:"panel-title !text-sm"},Y={class:"fixed-footer-wrap"},Z={class:"fixed-footer"},ut=W({__name:"system",setup(ee){const V=T().meta.title,d=_(!0),h=_(),t=w({site_name:"",logo:"",desc:"",latitude:"",keywords:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",business_hours:"",phone:"",front_end_name:"",front_end_logo:"",icon:"",tel:"",wechat_code:"",enterprise_wechat:""});(async(p=0)=>{const e=await(await g()).data;Object.keys(t).forEach(m=>{e[m]!=null&&(t[m]=e[m])}),h.value=F(),d.value=!1})();const b=_(),y=w({site_name:[{required:!0,message:o("siteNamePlaceholder"),trigger:"blur"}],front_end_name:[{required:!0,message:o("frontEndNamePlaceholder"),trigger:"blur"}]}),k=async p=>{d.value||!p||await p.validate(async e=>{e&&(d.value=!0,I(t).then(()=>{d.value=!1,E()}).catch(()=>{d.value=!1}))})},E=async()=>{const p=await(await g()).data;R.set({key:"siteInfo",data:p})};return(p,e)=>{const m=q,n=U,c=D,v=S,N=B,C=j,P=L;return f(),A("div",z,[i("div",G,[i("span",H,u(a(V)),1)]),M((f(),x(N,{model:t,"label-width":"150px",ref_key:"formRef",ref:b,rules:y,class:"page-form"},{default:s(()=>[l(v,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[i("h3",J,u(a(o)("websiteInfo")),1),l(n,{label:a(o)("siteName"),prop:"site_name"},{default:s(()=>[l(m,{modelValue:t.site_name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.site_name=r),placeholder:a(o)("siteNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:a(o)("logo")},{default:s(()=>[i("div",null,[l(c,{modelValue:t.logo,"onUpdate:modelValue":e[1]||(e[1]=r=>t.logo=r)},null,8,["modelValue"]),i("p",K,u(a(o)("logoPlaceholder")),1)])]),_:1},8,["label"]),l(n,{label:a(o)("icon")},{default:s(()=>[i("div",null,[l(c,{modelValue:t.icon,"onUpdate:modelValue":e[2]||(e[2]=r=>t.icon=r)},null,8,["modelValue"]),i("p",Q,u(a(o)("iconPlaceholder")),1)])]),_:1},8,["label"]),l(n,{label:a(o)("keywords")},{default:s(()=>[l(m,{modelValue:t.keywords,"onUpdate:modelValue":e[3]||(e[3]=r=>t.keywords=r),placeholder:a(o)("keywordsPlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:a(o)("desc")},{default:s(()=>[l(m,{modelValue:t.desc,"onUpdate:modelValue":e[4]||(e[4]=r=>t.desc=r),type:"textarea",rows:"4",clearable:"",placeholder:a(o)("descPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),h.value=="admin"?(f(),x(v,{key:0,class:"box-card !border-none",shadow:"never"},{default:s(()=>[i("h3",X,u(a(o)("serviceInformation")),1),l(n,{label:a(o)("contactsTel")},{default:s(()=>[l(m,{modelValue:t.tel,"onUpdate:modelValue":e[5]||(e[5]=r=>t.tel=r),placeholder:a(o)("contactsTelPlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:a(o)("wechatCode")},{default:s(()=>[l(c,{modelValue:t.wechat_code,"onUpdate:modelValue":e[6]||(e[6]=r=>t.wechat_code=r)},null,8,["modelValue"])]),_:1},8,["label"]),l(n,{label:a(o)("customerServiceCode")},{default:s(()=>[l(c,{modelValue:t.enterprise_wechat,"onUpdate:modelValue":e[7]||(e[7]=r=>t.enterprise_wechat=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):O("",!0)]),_:1},8,["model","rules"])),[[P,d.value]]),i("div",Y,[i("div",Z,[l(C,{type:"primary",loading:d.value,onClick:e[8]||(e[8]=r=>k(b.value))},{default:s(()=>[$(u(a(o)("save")),1)]),_:1},8,["loading"])])])])}}});export{ut as default};
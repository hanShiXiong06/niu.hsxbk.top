import{g as E,r as g,a4 as h,m as v,n as U,q as n,L as u,u as l,a1 as D,D as P,E as i,F as t,K as N}from"./base-45eb5090.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                 */import{_ as R}from"./index-a7c34c2b.js";import{t as a}from"./index-3694a2b2.js";import{af as C,ag as B}from"./index-ad71a852.js";import{u as F}from"./vue-router-fcbaaf02.js";import{a as L,E as S}from"./index-2bfbe5a7.js";import{E as j}from"./index-4ce9333e.js";import{E as q}from"./index-fc3020f4.js";import{E as I}from"./index-25c37860.js";import{v as O}from"./directive-9f485fe5.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-0436c5a5.js";import"./el-overlay-616d6124.js";import"./event-4977bef7.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./attachment-95048130.js";/* empty css               *//* empty css                  *//* empty css                  */import"./el-tooltip-58212670.js";/* empty css                      *//* empty css                    *//* empty css                 *//* empty css                    */import"./index-aef37b98.js";import"./index-47488199.js";import"./index-9670e877.js";import"./storage-4159d1ed.js";import"./index-0d830c44.js";import"./index-3be486d3.js";import"./index-a096e75b.js";import"./index-a2f15582.js";import"./index-719dad93.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./_Uint8Array-e584e472.js";import"./flatten-0fc8b7eb.js";import"./index-e841b684.js";import"./index-cc9a73f0.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./el-radio-2719e44c.js";import"./el-avatar-bc58ad46.js";import"./_initCloneObject-983ff8c8.js";const K={class:"main-container"},T={class:"flex ml-[18px] justify-between items-center mt-[20px]"},$={class:"text-[20px]"},z={class:"panel-title !text-sm"},A={class:"panel-title !text-sm"},G={class:"fixed-footer-wrap"},H={class:"fixed-footer"},Qe=E({__name:"copyright",setup(J){const b=F().meta.title,m=g(!0),o=h({icp:"",gov_record:"",gov_url:"",market_supervision_url:"",logo:"",company_name:"",copyright_link:"",copyright_desc:""});(async(c=0)=>{const e=await(await C()).data;Object.keys(o).forEach(d=>{e[d]!=null&&(o[d]=e[d])}),m.value=!1})();const _=g(),y=h({site_name:[{required:!0,message:a("siteNamePlaceholder"),trigger:"blur"}]}),V=async c=>{m.value||!c||await c.validate(async e=>{e&&(m.value=!0,B(o).then(()=>{m.value=!1}).catch(()=>{m.value=!1}))})};return(c,e)=>{const d=R,p=L,s=j,f=q,x=S,w=I,k=O;return v(),U("div",K,[n("div",T,[n("span",$,u(l(b)),1)]),D((v(),P(x,{model:o,"label-width":"150px",ref_key:"formRef",ref:_,rules:y,class:"page-form"},{default:i(()=>[t(f,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[n("h3",z,u(l(a)("copyrightEdit")),1),t(p,{label:l(a)("logo")},{default:i(()=>[t(d,{modelValue:o.logo,"onUpdate:modelValue":e[0]||(e[0]=r=>o.logo=r)},null,8,["modelValue"])]),_:1},8,["label"]),t(p,{label:l(a)("companyName"),prop:"company_name"},{default:i(()=>[t(s,{modelValue:o.company_name,"onUpdate:modelValue":e[1]||(e[1]=r=>o.company_name=r),placeholder:l(a)("companyNamePlaceholder"),class:"input-width",clearable:"",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:l(a)("copyrightLink")},{default:i(()=>[t(s,{modelValue:o.copyright_link,"onUpdate:modelValue":e[2]||(e[2]=r=>o.copyright_link=r),placeholder:l(a)("copyrightLinkPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:l(a)("copyrightDesc")},{default:i(()=>[t(s,{modelValue:o.copyright_desc,"onUpdate:modelValue":e[3]||(e[3]=r=>o.copyright_desc=r),type:"textarea",rows:"4",clearable:"",placeholder:l(a)("copyrightDescPlaceholder"),class:"input-width",maxlength:"150"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:i(()=>[n("h3",A,u(l(a)("putOnRecordEdit")),1),t(p,{label:l(a)("icp"),prop:"icp"},{default:i(()=>[t(s,{modelValue:o.icp,"onUpdate:modelValue":e[4]||(e[4]=r=>o.icp=r),placeholder:l(a)("icpPlaceholder"),class:"input-width",clearable:"",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:l(a)("govRecord")},{default:i(()=>[t(s,{modelValue:o.gov_record,"onUpdate:modelValue":e[5]||(e[5]=r=>o.gov_record=r),placeholder:l(a)("govRecordPlaceholder"),class:"input-width",clearable:"",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:l(a)("govUrl")},{default:i(()=>[t(s,{modelValue:o.gov_url,"onUpdate:modelValue":e[6]||(e[6]=r=>o.gov_url=r),placeholder:l(a)("govUrlPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:l(a)("marketSupervisionUrl")},{default:i(()=>[t(s,{modelValue:o.market_supervision_url,"onUpdate:modelValue":e[7]||(e[7]=r=>o.market_supervision_url=r),rows:"4",clearable:"",placeholder:l(a)("marketSupervisionUrlPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[k,m.value]]),n("div",G,[n("div",H,[t(w,{type:"primary",loading:m.value,onClick:e[8]||(e[8]=r=>V(_.value))},{default:i(()=>[N(u(l(a)("save")),1)]),_:1},8,["loading"])])])])}}});export{Qe as default};

import{d as T,r as f,R as I,Q as N,e as p,f as _,v as z,x as l,g as t,B as e,u as s,A as v,H as g,y as c,bl as q,bm as H}from"./base-d77b0726.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css               */import{t as a}from"./index-70af0995.js";import{g as L,a as U,s as j}from"./module-0464c2fd.js";import{u as M}from"./vue-router-57155f94.js";import{E as O,a as Q}from"./index-c314892b.js";import{E as $}from"./index-c1eb81db.js";import{a as G,E as J}from"./index-68c5ad54.js";import{E as K}from"./index-91bdda63.js";import{E as W}from"./index-2cf73bf7.js";import{v as X}from"./directive-08cd03ab.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./common-4a1cac58.js";import"./index-e37943c3.js";import"./index-331c6de1.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./event-e06a23af.js";import"./index-d1e433eb.js";import"./index-6245131d.js";import"./_Uint8Array-2fd72219.js";import"./_initCloneObject-22d1caee.js";import"./index-f2dc9b9f.js";const Z=u=>(q("data-v-c5b82cf7"),u=u(),H(),u),tt={class:"main main-container min-w-[1000px] min-h-[650px]"},et={class:"flex items-center"},at={class:"text-[20px]"},st={key:0,class:"text-[14px] ml-[20px] block"},ot={key:0,class:"mt-[50px]"},lt={class:"flex mt-[15px]"},ct={class:"text-[14px] w-[130px] text-right mr-[20px]"},rt={class:"text-[14px] text-[#666666]"},nt={class:"mt-[15px]"},it={class:"flex"},pt={class:"text-[14px] w-[130px] text-right mr-[20px]"},dt={class:"text-[14px] text-[#666666]"},mt={key:0,class:"flex"},_t=Z(()=>t("span",{class:"text-[14px] min-w-[130px] text-right mr-[20px]"},null,-1)),ut={class:"flex mt-[15px]"},xt={class:"text-[14px] w-[130px] text-right mr-[20px]"},ht={class:"text-[14px] text-[#666666]"},ft={class:"flex mt-[15px]"},vt={class:"text-[14px] w-[130px] text-right mr-[20px]"},gt={class:"text-[14px] text-[#666666]"},wt={key:1},bt={class:"mt-[20px]"},yt={class:"text-sm mt-[10px] text-info"},kt={class:"mt-[20px]"},Ct={class:"mt-[10px] text-right"},Et=T({__name:"authorize",setup(u){const B=M().meta.title,r=f(""),d=f(!0),m=f(!1),w=()=>{L().then(n=>{d.value=!1,n.data.data&&n.data.data.length!=0&&(r.value=n.data.data)}).catch(()=>{d.value=!1})};w();const i=I({auth_code:"",auth_secret:""}),b=f(),R=I({auth_code:[{required:!0,message:a("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:a("authSecretPlaceholder"),trigger:"blur"}]});(async()=>{const n=await(await U()).data;Object.keys(i).forEach(o=>{n[o]!=null&&(i[o]=n[o])})})();const S=async n=>{m.value||!n||await n.validate(async o=>{o&&(m.value=!0,j(i).then(()=>{m.value=!1,w()}).catch(()=>{m.value=!1}))})},y=()=>{r.value=""},D=()=>{window.open("https://www.niucloud.com/product")};return(n,o)=>{const x=O,F=Q,k=$,C=G,E=K,V=W,P=J,A=X;return N((p(),_("div",tt,[d.value?g("",!0):(p(),z(V,{key:0,class:"box-card !border-none",shadow:"never"},{default:l(()=>[t("div",et,[t("span",at,e(s(B)),1),r.value?(p(),_("span",st,[v(e(s(a)("authCode"))+"： "+e(r.value.auth_code)+" ",1),t("span",{class:"cursor-pointer text-primary",onClick:y},e(s(a)("updateCode")),1)])):g("",!0)]),r.value?(p(),_("div",ot,[c(F,null,{default:l(()=>[c(x,{span:8,class:"mb-[20px]"},{default:l(()=>[t("div",lt,[t("span",ct,e(s(a)("companyName")),1),t("span",rt,e(r.value.company_name),1)])]),_:1}),c(x,{span:8,class:"mb-[20px]"},{default:l(()=>[t("div",nt,[t("div",it,[t("span",pt,e(s(a)("siteAddress")),1),t("span",dt,e(r.value.site_address),1)]),r.value.address_type?g("",!0):(p(),_("div",mt,[_t,t("span",{class:"text-[14px] text-[#f10b0b] cursor-pointer",onClick:y},e(s(a)("siteAddressTips")),1)]))])]),_:1}),c(x,{span:8,class:"mb-[20px]"},{default:l(()=>[t("div",ut,[t("span",xt,e(s(a)("contactName")),1),t("span",ht,e(r.value.contact_name),1)])]),_:1}),c(x,{span:8,class:"mb-[20px]"},{default:l(()=>[t("div",ft,[t("span",vt,e(s(a)("authCode")),1),t("span",gt,e(r.value.auth_code),1)])]),_:1})]),_:1})])):(p(),_("div",wt,[N((p(),z(P,{model:i,"label-width":"0",ref_key:"formRef",ref:b,rules:R,class:"page-form mx-auto w-[340px] mt-[100px]"},{default:l(()=>[c(V,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[c(C,{prop:"auth_code"},{default:l(()=>[c(k,{modelValue:i.auth_code,"onUpdate:modelValue":o[0]||(o[0]=h=>i.auth_code=h),placeholder:s(a)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),t("div",bt,[c(C,{prop:"auth_secret"},{default:l(()=>[c(k,{modelValue:i.auth_secret,"onUpdate:modelValue":o[1]||(o[1]=h=>i.auth_secret=h),clearable:"",placeholder:s(a)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),t("div",yt,e(s(a)("authInfoTips")),1),t("div",kt,[c(E,{type:"primary",class:"w-full",size:"large",loading:m.value,onClick:o[2]||(o[2]=h=>S(b.value))},{default:l(()=>[v(e(s(a)("confirm")),1)]),_:1},8,["loading"])]),t("div",Ct,[c(E,{type:"primary",link:"",onClick:D},{default:l(()=>[v(e(s(a)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])),[[A,d.value]])]))]),_:1}))])),[[A,d.value]])}}});const re=Y(Et,[["__scopeId","data-v-c5b82cf7"]]);export{re as default};

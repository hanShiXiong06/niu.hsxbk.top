import{g as D,r as h,a4 as N,w as P,m as g,n as T,q as p,L as r,u as t,a1 as B,D as F,E as s,F as l,K as w}from"./base-45eb5090.js";/* empty css                   *//* empty css                  *//* empty css                     */import{_ as I}from"./index.vue_vue_type_style_index_0_lang-71783cb9.js";/* empty css                */import{_ as L}from"./index-a7c34c2b.js";/* empty css                 */import{t as e}from"./index-3694a2b2.js";import{D as f}from"./index-ad71a852.js";import{J as O}from"./event-4977bef7.js";import{u as R}from"./vue-router-fcbaaf02.js";import{a as V}from"./index-aef37b98.js";import{E as W}from"./index-4ce9333e.js";import{a as $,E as j}from"./index-2bfbe5a7.js";import{E as M}from"./index-fc3020f4.js";import{E as Q}from"./index-25c37860.js";import{v as J}from"./directive-9f485fe5.js";/* empty css                    */import"./storage-4159d1ed.js";import"./index-a096e75b.js";import"./focus-trap-318ae2e0.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-0436c5a5.js";import"./el-overlay-616d6124.js";import"./index-cd1661d3.js";import"./attachment-95048130.js";/* empty css               *//* empty css                  *//* empty css                  */import"./el-tooltip-58212670.js";/* empty css                      *//* empty css                    *//* empty css                 */import"./index-47488199.js";import"./index-9670e877.js";import"./index-0d830c44.js";import"./index-3be486d3.js";import"./index-a2f15582.js";import"./index-719dad93.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./_Uint8Array-e584e472.js";import"./flatten-0fc8b7eb.js";import"./index-e841b684.js";import"./index-cc9a73f0.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./el-radio-2719e44c.js";import"./el-avatar-bc58ad46.js";import"./_initCloneObject-983ff8c8.js";function z(){return f.get("aliapp/config")}function G(y){return f.put("aliapp/config",y,{showSuccessMessage:!0})}function H(){return f.get("aliapp/static")}const X={class:"main-container"},Y={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},Z={class:"text-[20px]"},ee={class:"panel-title !text-sm"},te={class:"form-tip"},le={class:"panel-title !text-sm"},ae={class:"input-width"},oe={class:"form-tip"},ie={class:"input-width"},pe={class:"form-tip"},se={class:"input-width"},re={class:"form-tip"},ne={class:"panel-title !text-sm"},de={class:"flex"},me={class:"panel-title !text-sm"},ue={class:"fixed-footer-wrap"},ce={class:"fixed-footer"},ft=D({__name:"config",setup(y){const x=R().meta.title,m=h(!0),a=N({name:"",qrcode:"",private_key:"",app_id:"",aes_key:"",public_key_crt:"",alipay_public_key_crt:"",alipay_with_crt:"",request_url:""}),b=h();z().then(d=>{Object.assign(a,d.data),m.value=!1}),H().then(d=>{a.request_url=d.data.domain});const{copy:k,isSupported:E,copied:v}=O(),S=d=>{if(!E.value){V({message:e("notSupportCopy"),type:"warning"});return}k(d)};P(v,()=>{v.value&&V({message:e("copySuccess"),type:"success"})});const C=async d=>{m.value||!d||await d.validate(async o=>{o&&(m.value=!0,G(a).then(()=>{m.value=!1}).catch(()=>{m.value=!1}))})};return(d,o)=>{const u=W,n=$,q=L,c=M,_=I,U=j,K=Q,A=J;return g(),T("div",X,[p("div",Y,[p("span",Z,r(t(x)),1)]),B((g(),F(U,{model:a,"label-width":"150px",ref_key:"formRef",ref:b,class:"page-form"},{default:s(()=>[l(c,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[p("h3",ee,r(t(e)("aliappSet")),1),l(n,{label:t(e)("aliappName")},{default:s(()=>[l(u,{modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=i=>a.name=i),placeholder:t(e)("aliappNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:t(e)("aliappQrcode")},{default:s(()=>[l(q,{modelValue:a.qrcode,"onUpdate:modelValue":o[1]||(o[1]=i=>a.qrcode=i)},null,8,["modelValue"]),p("div",te,r(t(e)("aliappQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),l(c,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:s(()=>[p("h3",le,r(t(e)("aliappDevelopInfo")),1),l(n,{label:t(e)("aliappOriginal")},{default:s(()=>[l(u,{modelValue:a.private_key,"onUpdate:modelValue":o[2]||(o[2]=i=>a.private_key=i),placeholder:t(e)("aliappOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:t(e)("aliappAppid")},{default:s(()=>[l(u,{modelValue:a.app_id,"onUpdate:modelValue":o[3]||(o[3]=i=>a.app_id=i),placeholder:t(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:t(e)("countersignType")},{default:s(()=>[w(r(t(e)("certificate")),1)]),_:1},8,["label"]),l(n,{label:t(e)("publicKey")},{default:s(()=>[p("div",ae,[l(_,{modelValue:a.public_key_crt,"onUpdate:modelValue":o[4]||(o[4]=i=>a.public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",oe,r(t(e)("publicKeyTips")),1)]),_:1},8,["label"]),l(n,{label:t(e)("alipayPublicKey")},{default:s(()=>[p("div",ie,[l(_,{modelValue:a.alipay_public_key_crt,"onUpdate:modelValue":o[5]||(o[5]=i=>a.alipay_public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",pe,r(t(e)("alipayPublicKeyTips")),1)]),_:1},8,["label"]),l(n,{label:t(e)("alipayWithCrt")},{default:s(()=>[p("div",se,[l(_,{modelValue:a.alipay_with_crt,"onUpdate:modelValue":o[6]||(o[6]=i=>a.alipay_with_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",re,r(t(e)("alipayWithCrtTips")),1)]),_:1},8,["label"])]),_:1}),l(c,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:s(()=>[p("h3",ne,r(t(e)("theServerSetting")),1),l(n,{label:"AESKey"},{default:s(()=>[l(u,{modelValue:a.aes_key,"onUpdate:modelValue":o[7]||(o[7]=i=>a.aes_key=i),placeholder:t(e)("AESKeyPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),l(c,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:s(()=>[p("div",de,[p("h3",me,r(t(e)("functionSetting")),1)]),l(n,{label:t(e)("serveWhiteList")},{default:s(()=>[l(u,{"model-value":a.request_url,class:"input-width",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:o[8]||(o[8]=i=>S(a.request_url))},r(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[A,m.value]]),p("div",ue,[p("div",ce,[l(K,{type:"primary",loading:m.value,onClick:o[9]||(o[9]=i=>C(b.value))},{default:s(()=>[w(r(t(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{ft as default};

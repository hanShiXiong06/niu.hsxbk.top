import{d as B,r as b,R as w,w as K,e as y,f as O,g as r,u as o,B as i,Q as D,v as I,x as p,y as l,A as f}from"./base-d77b0726.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import{_ as j}from"./index.vue_vue_type_style_index_0_lang-15491628.js";/* empty css                */import{_ as Q}from"./index-6cf4d125.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{t as e}from"./index-70af0995.js";import{g as k,c as F}from"./weapp-15d61761.js";import{E as L}from"./index-331c6de1.js";import{u as W,b as z}from"./vue-router-57155f94.js";import{a as x}from"./index-9e51ba8b.js";import{E as G}from"./index-c1eb81db.js";import{a as H,E as J}from"./index-68c5ad54.js";import{E as X}from"./index-2cf73bf7.js";import{E as Y,b as Z}from"./index-ee35aabd.js";import{E as ee}from"./index-91bdda63.js";import{v as oe}from"./directive-08cd03ab.js";/* empty css                    */import"./common-4a1cac58.js";import"./index-e37943c3.js";import"./index-bbf3e154.js";import"./event-e06a23af.js";import"./typescript-defaf979.js";import"./index-a20d1a31.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9f74eab2.js";/* empty css                   */import"./attachment-01140c65.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                         */import"./index-d7cd2cc3.js";import"./index-45cca80f.js";import"./aria-60e0cdc6.js";import"./index-6245131d.js";import"./index-de9bede2.js";import"./focus-trap-98fda164.js";import"./index-1aa3caaa.js";import"./index-74352d71.js";import"./index-6a54cf26.js";import"./index-b3418ddc.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./index-f2dc9b9f.js";import"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";/* empty css                */import"./sys-394b27a4.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5b262c6a.js";import"./aria-adfa05c5.js";import"./validator-7b087194.js";import"./index-c314892b.js";import"./index-435afe75.js";import"./index-3b19c3d7.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./index-294b617f.js";import"./index-52f984e1.js";import"./isEqual-030b54ca.js";import"./_Uint8Array-2fd72219.js";import"./index-f956e728.js";import"./index-a997ab1f.js";import"./index-45469947.js";import"./strings-6a15e170.js";import"./index-ef0eb7b1.js";import"./_initCloneObject-22d1caee.js";const le={class:"main-container"},te={class:"detail-head"},ae=r("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),pe={class:"ml-[1px]"},re=r("span",{class:"adorn"},"|",-1),ie={class:"right"},se={class:"panel-title !text-sm"},de={class:"form-tip"},ne={class:"panel-title !text-sm"},me={class:"form-tip"},ue={class:"form-tip"},ce={class:"panel-title !text-sm"},_e={class:"input-width"},fe={class:"form-tip"},ve={class:"panel-title !text-sm"},ge={class:"form-tip"},he={class:"form-tip"},be={class:"form-tip"},we={class:"form-tip"},ye={class:"form-tip"},ke={class:"flex"},xe={class:"panel-title !text-sm"},Ve={class:"fixed-footer-wrap"},Pe={class:"fixed-footer"},ll=B({__name:"config",setup(Ee){const V=W(),P=z(),E=V.meta.title,u=b(!0),a=w({weapp_name:"",weapp_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt",serve_url:"",request_url:"",socket_url:"",upload_url:"",download_url:"",upload_private_key:""}),g=b(),U=w({weapp_name:[{required:!0,message:e("weappNamePlaceholder"),trigger:"blur"}],weapp_original:[{required:!0,message:e("weappOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]});k().then(m=>{Object.assign(a,m.data),u.value=!1}),k().then(m=>{Object.assign(m.data)});const{copy:q,isSupported:C,copied:h}=L(),c=m=>{if(!C.value){x({message:e("notSupportCopy"),type:"warning"});return}q(m)};K(h,()=>{h.value&&x({message:e("copySuccess"),type:"success"})});const T=async m=>{u.value||!m||await m.validate(async t=>{t&&(u.value=!0,F(a).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return(m,t)=>{const n=G,d=H,S=Q,_=X,A=j,v=Y,R=Z,$=J,M=ee,N=oe;return y(),O("div",le,[r("div",te,[r("div",{class:"left",onClick:t[0]||(t[0]=s=>o(P).push({path:"/website/channel/weapp"}))},[ae,r("span",pe,i(o(e)("returnToPreviousPage")),1)]),re,r("span",ie,i(o(E)),1)]),D((y(),I($,{model:a,"label-width":"170px",ref_key:"formRef",ref:g,rules:U,class:"page-form"},{default:p(()=>[l(_,{class:"box-card !border-none",shadow:"never"},{default:p(()=>[r("h3",se,i(o(e)("weappInfo")),1),l(d,{label:o(e)("weappName"),prop:"weapp_name"},{default:p(()=>[l(n,{modelValue:a.weapp_name,"onUpdate:modelValue":t[1]||(t[1]=s=>a.weapp_name=s),placeholder:o(e)("weappNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:o(e)("weappOriginal"),prop:"weapp_original"},{default:p(()=>[l(n,{modelValue:a.weapp_original,"onUpdate:modelValue":t[2]||(t[2]=s=>a.weapp_original=s),placeholder:o(e)("weappOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:o(e)("weappQrcode"),prop:"qr_code"},{default:p(()=>[l(S,{modelValue:a.qr_code,"onUpdate:modelValue":t[3]||(t[3]=s=>a.qr_code=s)},null,8,["modelValue"]),r("div",de,i(o(e)("weappQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),l(_,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[r("h3",ne,i(o(e)("weappDevelopInfo")),1),l(d,{label:o(e)("weappAppid"),prop:"app_id"},{default:p(()=>[l(n,{modelValue:a.app_id,"onUpdate:modelValue":t[4]||(t[4]=s=>a.app_id=s),placeholder:o(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",me,i(o(e)("weappAppidTips")),1)]),_:1},8,["label"]),l(d,{label:o(e)("weappAppsecret"),prop:"app_secret"},{default:p(()=>[l(n,{modelValue:a.app_secret,"onUpdate:modelValue":t[5]||(t[5]=s=>a.app_secret=s),placeholder:o(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",ue,i(o(e)("weappAppsecretTips")),1)]),_:1},8,["label"])]),_:1}),l(_,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[r("h3",ce,i(o(e)("weappUpload")),1),l(d,{label:o(e)("uploadKey"),prop:"upload_private_key"},{default:p(()=>[r("div",_e,[l(A,{modelValue:a.upload_private_key,"onUpdate:modelValue":t[6]||(t[6]=s=>a.upload_private_key=s),api:"sys/document/wechat"},null,8,["modelValue"])]),r("div",fe,i(o(e)("uploadKeyTips")),1)]),_:1},8,["label"])]),_:1}),l(_,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[r("h3",ve,i(o(e)("theServerSetting")),1),l(d,{label:"URL"},{default:p(()=>[l(n,{"model-value":a.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:p(()=>[r("div",{class:"cursor-pointer",onClick:t[7]||(t[7]=s=>c(a.serve_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),l(d,{label:"Token",prop:"token"},{default:p(()=>[l(n,{modelValue:a.token,"onUpdate:modelValue":t[8]||(t[8]=s=>a.token=s),placeholder:o(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",ge,i(o(e)("tokenTips")),1)]),_:1}),l(d,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:p(()=>[l(n,{modelValue:a.encoding_aes_key,"onUpdate:modelValue":t[9]||(t[9]=s=>a.encoding_aes_key=s),placeholder:o(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",he,i(o(e)("encodingAESKeyTips")),1)]),_:1}),l(d,{label:o(e)("encryptionType"),prop:"encryption_type"},{default:p(()=>[l(R,{modelValue:a.encryption_type,"onUpdate:modelValue":t[10]||(t[10]=s=>a.encryption_type=s)},{default:p(()=>[l(v,{label:"not_encrypt"},{default:p(()=>[f(i(o(e)("cleartextMode")),1)]),_:1}),l(v,{label:"compatible"},{default:p(()=>[f(i(o(e)("compatibleMode")),1)]),_:1}),l(v,{label:"safe"},{default:p(()=>[f(i(o(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),r("div",be,i(o(e)("cleartextModeTips")),1),r("div",we,i(o(e)("compatibleModeTips")),1),r("div",ye,i(o(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),l(_,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[r("div",ke,[r("h3",xe,i(o(e)("functionSetting")),1)]),l(d,{label:o(e)("requestUrl")},{default:p(()=>[l(n,{"model-value":a.request_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:p(()=>[r("div",{class:"cursor-pointer",onClick:t[11]||(t[11]=s=>c(a.request_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),l(d,{label:o(e)("socketUrl")},{default:p(()=>[l(n,{"model-value":a.socket_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:p(()=>[r("div",{class:"cursor-pointer",onClick:t[12]||(t[12]=s=>c(a.socket_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),l(d,{label:o(e)("uploadUrl")},{default:p(()=>[l(n,{"model-value":a.upload_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:p(()=>[r("div",{class:"cursor-pointer",onClick:t[13]||(t[13]=s=>c(a.upload_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),l(d,{label:o(e)("downloadUrl")},{default:p(()=>[l(n,{"model-value":a.download_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:p(()=>[r("div",{class:"cursor-pointer",onClick:t[14]||(t[14]=s=>c(a.download_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[N,u.value]]),r("div",Ve,[r("div",Pe,[l(M,{type:"primary",loading:u.value,onClick:t[15]||(t[15]=s=>T(g.value))},{default:p(()=>[f(i(o(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{ll as default};

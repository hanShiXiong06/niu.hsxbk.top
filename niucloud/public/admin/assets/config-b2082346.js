import{d as N,r as y,R as b,w as j,e as x,f as B,g as r,u as o,B as i,Q as $,v as O,x as l,y as t,A as f}from"./base-d77b0726.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                */import{_ as I}from"./index-a77a3483.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{t as e}from"./index-c7fb4804.js";import{g as K,a as Q,e as W}from"./wechat-05398728.js";import{E as F}from"./index-331c6de1.js";import{u as L,b as z}from"./vue-router-57155f94.js";import{a as V}from"./index-9e51ba8b.js";import{E as G}from"./index-c1eb81db.js";import{a as H,E as J}from"./index-68c5ad54.js";import{E as X}from"./index-2cf73bf7.js";import{E as Y,b as Z}from"./index-ee35aabd.js";import{E as ee}from"./index-91bdda63.js";import{v as oe}from"./directive-08cd03ab.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-38d0a913.js";/* empty css                   */import"./attachment-ef5b04d9.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./index-6a46ef13.js";import"./index-45cca80f.js";import"./index-e37943c3.js";import"./aria-60e0cdc6.js";import"./index-6245131d.js";import"./index-de9bede2.js";import"./focus-trap-98fda164.js";import"./dropdown-2ff49e9b.js";import"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";/* empty css                */import"./sys-953663dd.js";import"./index-822bfdfd.js";import"./common-56ee0a80.js";import"./index-704f0685.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5b262c6a.js";import"./index-b3418ddc.js";import"./event-e06a23af.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./validator-7b087194.js";import"./index-a20d1a31.js";import"./index-6f5bf0a3.js";import"./index-74352d71.js";import"./index-6a54cf26.js";import"./index-f2dc9b9f.js";import"./index-bbf3e154.js";import"./typescript-defaf979.js";import"./index-c314892b.js";import"./index-435afe75.js";import"./index-3b19c3d7.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./index-294b617f.js";import"./index-52f984e1.js";import"./isEqual-030b54ca.js";import"./_Uint8Array-2fd72219.js";import"./index-f956e728.js";import"./index-a997ab1f.js";import"./index-45469947.js";import"./strings-6a15e170.js";import"./index-ef0eb7b1.js";import"./_initCloneObject-22d1caee.js";const te={class:"main-container"},ae={class:"detail-head"},le=r("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),re={class:"ml-[1px]"},ie=r("span",{class:"adorn"},"|",-1),se={class:"right"},pe={class:"panel-title !text-sm"},ne={class:"form-tip"},de={class:"panel-title !text-sm"},me={class:"form-tip"},ce={class:"form-tip"},ue={class:"panel-title !text-sm"},_e={class:"form-tip"},he={class:"form-tip"},fe={class:"form-tip"},ge={class:"form-tip"},be={class:"form-tip"},ve={class:"flex"},we={class:"panel-title !text-sm"},ye={class:"form-tip"},xe={class:"fixed-footer-wrap"},Ve={class:"fixed-footer"},ot=N({__name:"config",setup(ke){const k=L(),E=z(),P=k.meta.title,u=y(!0),p=b({wechat_name:"",wechat_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt"}),v=y(),S=b({wechat_name:[{required:!0,message:e("wechatNamePlaceholder"),trigger:"blur"}],wechat_original:[{required:!0,message:e("wechatOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]});K().then(c=>{Object.assign(p,c.data),u.value=!1});const m=b({business_domain:"",js_secure_domain:"",serve_url:"",web_auth_domain:""});Q().then(c=>{Object.assign(m,c.data),u.value=!1});const{copy:C,isSupported:T,copied:w}=F(),_=c=>{if(!T.value){V({message:e("notSupportCopy"),type:"warning"});return}C(c)};j(w,()=>{w.value&&V({message:e("copySuccess"),type:"success"})});const q=async c=>{u.value||!c||await c.validate(async a=>{a&&(u.value=!0,W(p).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return(c,a)=>{const d=G,n=H,A=I,h=X,g=Y,R=Z,U=J,D=ee,M=oe;return x(),B("div",te,[r("div",ae,[r("div",{class:"left",onClick:a[0]||(a[0]=s=>o(E).push({path:"/website/channel/wechat"}))},[le,r("span",re,i(o(e)("returnToPreviousPage")),1)]),ie,r("span",se,i(o(P)),1)]),$((x(),O(U,{model:p,"label-width":"150px",ref_key:"formRef",ref:v,rules:S,class:"page-form"},{default:l(()=>[t(h,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[r("h3",pe,i(o(e)("wechatInfo")),1),t(n,{label:o(e)("wechatName"),prop:"wechat_name"},{default:l(()=>[t(d,{modelValue:p.wechat_name,"onUpdate:modelValue":a[1]||(a[1]=s=>p.wechat_name=s),placeholder:o(e)("wechatNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:o(e)("wechatOriginal"),prop:"wechat_original"},{default:l(()=>[t(d,{modelValue:p.wechat_original,"onUpdate:modelValue":a[2]||(a[2]=s=>p.wechat_original=s),placeholder:o(e)("wechatOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:o(e)("wechatQrcode"),prop:"qr_code"},{default:l(()=>[t(A,{modelValue:p.qr_code,"onUpdate:modelValue":a[3]||(a[3]=s=>p.qr_code=s)},null,8,["modelValue"]),r("div",ne,i(o(e)("wechatQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),t(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("h3",de,i(o(e)("wechatDevelopInfo")),1),t(n,{label:o(e)("wechatAppid"),prop:"app_id"},{default:l(()=>[t(d,{modelValue:p.app_id,"onUpdate:modelValue":a[4]||(a[4]=s=>p.app_id=s),placeholder:o(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",me,i(o(e)("wechatAppidTips")),1)]),_:1},8,["label"]),t(n,{label:o(e)("wechatAppsecret"),prop:"app_secret"},{default:l(()=>[t(d,{modelValue:p.app_secret,"onUpdate:modelValue":a[5]||(a[5]=s=>p.app_secret=s),placeholder:o(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",ce,i(o(e)("wechatAppsecretTips")),1)]),_:1},8,["label"])]),_:1}),t(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("h3",ue,i(o(e)("theServerSetting")),1),t(n,{label:"URL"},{default:l(()=>[t(d,{"model-value":m.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[6]||(a[6]=s=>_(m.serve_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),t(n,{label:"Token",prop:"token"},{default:l(()=>[t(d,{modelValue:p.token,"onUpdate:modelValue":a[7]||(a[7]=s=>p.token=s),placeholder:o(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",_e,i(o(e)("tokenTips")),1)]),_:1}),t(n,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:l(()=>[t(d,{modelValue:p.encoding_aes_key,"onUpdate:modelValue":a[8]||(a[8]=s=>p.encoding_aes_key=s),placeholder:o(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",he,i(o(e)("encodingAESKeyTips")),1)]),_:1}),t(n,{label:o(e)("encryptionType"),prop:"encryption_type"},{default:l(()=>[t(R,{modelValue:p.encryption_type,"onUpdate:modelValue":a[9]||(a[9]=s=>p.encryption_type=s)},{default:l(()=>[t(g,{label:"not_encrypt"},{default:l(()=>[f(i(o(e)("cleartextMode")),1)]),_:1}),t(g,{label:"compatible"},{default:l(()=>[f(i(o(e)("compatibleMode")),1)]),_:1}),t(g,{label:"safe"},{default:l(()=>[f(i(o(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),r("div",fe,i(o(e)("cleartextModeTips")),1),r("div",ge,i(o(e)("compatibleModeTips")),1),r("div",be,i(o(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),t(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("div",ve,[r("h3",we,i(o(e)("functionSetting")),1)]),t(n,{label:""},{default:l(()=>[r("div",ye,i(o(e)("functionSettingTips")),1)]),_:1}),t(n,{label:o(e)("businessDomain")},{default:l(()=>[t(d,{"model-value":m.business_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[10]||(a[10]=s=>_(m.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),t(n,{label:o(e)("jsSecureDomain")},{default:l(()=>[t(d,{"model-value":m.js_secure_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[11]||(a[11]=s=>_(m.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),t(n,{label:o(e)("webAuthDomain")},{default:l(()=>[t(d,{"model-value":m.web_auth_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[12]||(a[12]=s=>_(m.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[M,u.value]]),r("div",xe,[r("div",Ve,[t(D,{type:"primary",loading:u.value,onClick:a[13]||(a[13]=s=>q(v.value))},{default:l(()=>[f(i(o(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{ot as default};
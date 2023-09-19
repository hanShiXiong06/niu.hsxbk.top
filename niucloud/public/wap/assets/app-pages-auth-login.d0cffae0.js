import{d as e,a as l,Y as a,a1 as r,r as o,c as s,i as t,j as u,w as n,k as d,K as i,L as p,n as m,F as c,H as b,G as g,m as _,l as f,v as x,a2 as y,a3 as h,a0 as v,x as j,q as k,t as w,N as V,Z as P,I as U}from"./index-f4365f98.js";import{_ as q,a as L,b as S}from"./u-form.50cf7388.js";import{_ as T}from"./sms-code.vue_vue_type_script_setup_true_lang.9942ea65.js";import{_ as A}from"./app-link.vue_vue_type_script_setup_true_lang.a0ec1379.js";import{_ as C}from"./u-button.86ec562d.js";import"./u-icon.47bf0917.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.33e04a4b.js";import"./u-modal.df76d526.js";import"./u-loading-icon.3d6a4740.js";import"./u-popup.78a3211f.js";import"./u-transition.dab525a8.js";import"./u-safe-bottom.d2c92feb.js";const N=e({__name:"login",setup(e){const N=l({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""});uni.getStorageSync("openid")&&Object.assign(N,{openid:uni.getStorageSync("openid")});const O=a(),R=r(),Y=o(!1),Z=o(""),B=s((()=>{const e=[];return R.login.is_username&&e.push({type:"username",title:P("usernameLogin")}),R.login.is_mobile&&e.push({type:"mobile",title:P("mobileLogin")}),Z.value=e[0]?e[0].type:"",e})),E=s((()=>({username:{type:"string",required:"username"==Z.value,message:P("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==Z.value,message:P("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:"mobile"==Z.value,message:P("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=Z.value||uni.$u.test.mobile(l),message:P("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==Z.value,message:P("codePlaceholder"),trigger:["blur","change"]}}))),F=o(null),G=()=>{F.value.validate().then((()=>{if(Y.value)return;Y.value=!0;("username"==Z.value?y:h)(N).then((e=>{O.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{Y.value=!1}))}))};return(e,l)=>{const a=j,r=k(w("u-input"),q),o=k(w("u-form-item"),L),s=k(w("sms-code"),T),y=V,h=k(w("app-link"),A),v=k(w("u-button"),C),O=k(w("u-form"),S);return t(),u(a,{class:"w-screen h-screen flex flex-col"},{default:n((()=>[d(a,{class:"flex-1"},{default:n((()=>[d(a,{class:"h-[100rpx]"}),d(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:n((()=>[d(a,{class:"font-bold text-xl"},{default:n((()=>[i(p(m(P)("login")),1)])),_:1})])),_:1}),m(B).length>1?(t(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:n((()=>[(t(!0),c(g,null,b(m(B),((e,l)=>(t(),c(g,null,[d(a,{class:U({"text-gray-300":e.type!=Z.value}),onClick:l=>Z.value=e.type},{default:n((()=>[i(p(e.title),1)])),_:2},1032,["class","onClick"]),f(d(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[x,0==l]])],64)))),256))])),_:1})):_("v-if",!0),d(a,{class:"px-[60rpx]"},{default:n((()=>[d(O,{labelPosition:"left",model:N,errorType:"toast",rules:m(E),ref_key:"formRef",ref:F},{default:n((()=>[f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"username","border-bottom":!0},{default:n((()=>[d(r,{modelValue:N.username,"onUpdate:modelValue":l[0]||(l[0]=e=>N.username=e),border:"none",clearable:"",placeholder:m(P)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"password","border-bottom":!0},{default:n((()=>[d(r,{modelValue:N.password,"onUpdate:modelValue":l[1]||(l[1]=e=>N.password=e),border:"none",type:"password",clearable:"",placeholder:m(P)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"username"==Z.value]]),f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"mobile","border-bottom":!0},{default:n((()=>[d(r,{modelValue:N.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>N.mobile=e),border:"none",clearable:"",placeholder:m(P)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"mobile_code","border-bottom":!0},{default:n((()=>[d(r,{modelValue:N.mobile_code,"onUpdate:modelValue":l[4]||(l[4]=e=>N.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(P)("codePlaceholder")},{suffix:n((()=>[d(s,{mobile:N.mobile,type:"login",modelValue:N.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>N.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"mobile"==Z.value]]),d(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:n((()=>[d(h,{url:"/app/pages/auth/register"},{default:n((()=>[i(p(m(P)("noAccount"))+" ",1),d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("toRegister")),1)])),_:1})])),_:1}),d(h,{url:"/app/pages/auth/resetpwd"},{default:n((()=>[i(p(m(P)("resetpwd")),1)])),_:1})])),_:1}),d(a,{class:"mt-[80rpx]"},{default:n((()=>[d(v,{type:"primary",loading:Y.value,loadingText:m(P)("logining"),onClick:G},{default:n((()=>[i(p(m(P)("login")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(R).login.agreement_show?(t(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:n((()=>[i(p(m(P)("agreeTips"))+" ",1),d(h,{url:"/app/pages/auth/agreement?key=service"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("userAgreement")),1)])),_:1})])),_:1}),i(" "+p(m(P)("and"))+" ",1),d(h,{url:"/app/pages/auth/agreement?key=privacy"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("v-if",!0)])),_:1})}}});export{N as default};
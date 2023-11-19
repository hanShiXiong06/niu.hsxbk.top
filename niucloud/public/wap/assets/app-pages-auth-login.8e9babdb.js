import{d as e,a as l,J as a,O as r,r as o,c as t,i as s,j as u,w as n,k as d,G as i,H as p,n as m,P as c,Q as b,R as g,m as _,l as f,v as x,S as y,T as h,N as v,x as k,q as j,t as w,I as V,K as P,D as q}from"./index-98826dc8.js";import{u as T,_ as S,a as U}from"./u-form.4859819c.js";import{_ as C}from"./sms-code.vue_vue_type_script_setup_true_lang.0d3cf828.js";import{_ as A}from"./app-link.vue_vue_type_script_setup_true_lang.4e7556e3.js";import{_ as L}from"./u-button.3ca081fb.js";import"./u-icon.f3535e52.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.04b866e6.js";import"./u-modal.ea30a17a.js";import"./u-loading-icon.9963a5a3.js";import"./u-popup.5ab022a0.js";import"./u-transition.b9a2700d.js";import"./u-safe-bottom.35e4ae97.js";const R=e({__name:"login",setup(e){const R=l({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""});uni.getStorageSync("openid")&&Object.assign(R,{openid:uni.getStorageSync("openid")});const B=a(),D=r(),E=o(!1),O=o(""),F=t((()=>{const e=[];return D.login.is_username&&e.push({type:"username",title:P("usernameLogin")}),D.login.is_mobile&&e.push({type:"mobile",title:P("mobileLogin")}),O.value=e[0]?e[0].type:"",e})),G=t((()=>({username:{type:"string",required:"username"==O.value,message:P("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==O.value,message:P("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:"mobile"==O.value,message:P("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=O.value||uni.$u.test.mobile(l),message:P("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==O.value,message:P("codePlaceholder"),trigger:["blur","change"]}}))),H=o(null),I=()=>{H.value.validate().then((()=>{if(E.value)return;E.value=!0;("username"==O.value?y:h)(R).then((e=>{B.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{E.value=!1}))}))};return(e,l)=>{const a=k,r=j(w("u-input"),T),o=j(w("u-form-item"),S),t=j(w("sms-code"),C),y=V,h=j(w("app-link"),A),v=j(w("u-button"),L),B=j(w("u-form"),U);return s(),u(a,{class:"w-screen h-screen flex flex-col"},{default:n((()=>[d(a,{class:"flex-1"},{default:n((()=>[d(a,{class:"h-[100rpx]"}),d(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:n((()=>[d(a,{class:"font-bold text-xl"},{default:n((()=>[i(p(m(P)("login")),1)])),_:1})])),_:1}),m(F).length>1?(s(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:n((()=>[(s(!0),c(g,null,b(m(F),((e,l)=>(s(),c(g,null,[d(a,{class:q({"text-gray-300":e.type!=O.value}),onClick:l=>O.value=e.type},{default:n((()=>[i(p(e.title),1)])),_:2},1032,["class","onClick"]),f(d(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[x,0==l]])],64)))),256))])),_:1})):_("v-if",!0),d(a,{class:"px-[60rpx]"},{default:n((()=>[d(B,{labelPosition:"left",model:R,errorType:"toast",rules:m(G),ref_key:"formRef",ref:H},{default:n((()=>[f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"username","border-bottom":!0},{default:n((()=>[d(r,{modelValue:R.username,"onUpdate:modelValue":l[0]||(l[0]=e=>R.username=e),border:"none",clearable:"",placeholder:m(P)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"password","border-bottom":!0},{default:n((()=>[d(r,{modelValue:R.password,"onUpdate:modelValue":l[1]||(l[1]=e=>R.password=e),border:"none",type:"password",clearable:"",placeholder:m(P)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"username"==O.value]]),f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"mobile","border-bottom":!0},{default:n((()=>[d(r,{modelValue:R.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>R.mobile=e),border:"none",clearable:"",placeholder:m(P)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"mobile_code","border-bottom":!0},{default:n((()=>[d(r,{modelValue:R.mobile_code,"onUpdate:modelValue":l[4]||(l[4]=e=>R.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(P)("codePlaceholder")},{suffix:n((()=>[d(t,{mobile:R.mobile,type:"login",modelValue:R.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>R.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"mobile"==O.value]]),d(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:n((()=>[d(h,{url:"/app/pages/auth/register"},{default:n((()=>[i(p(m(P)("noAccount"))+" ",1),d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("toRegister")),1)])),_:1})])),_:1}),d(h,{url:"/app/pages/auth/resetpwd"},{default:n((()=>[i(p(m(P)("resetpwd")),1)])),_:1})])),_:1}),d(a,{class:"mt-[80rpx]"},{default:n((()=>[d(v,{type:"primary",loading:E.value,loadingText:m(P)("logining"),onClick:I},{default:n((()=>[i(p(m(P)("login")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(D).login.agreement_show?(s(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:n((()=>[i(p(m(P)("agreeTips"))+" ",1),d(h,{url:"/app/pages/auth/agreement?key=service"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("userAgreement")),1)])),_:1})])),_:1}),i(" "+p(m(P)("and"))+" ",1),d(h,{url:"/app/pages/auth/agreement?key=privacy"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("v-if",!0)])),_:1})}}});export{R as default};
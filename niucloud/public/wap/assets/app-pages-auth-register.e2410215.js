import{d as e,a as l,Y as a,a1 as r,r as o,c as s,i as t,j as u,w as d,k as i,K as n,L as p,n as m,F as c,H as b,G as g,m as _,l as f,v as h,a4 as x,a5 as y,a0 as v,x as w,q as V,t as k,M as j,N as P,Z as q,I as U}from"./index-27e6e9c5.js";import{_ as T,a as S,b as A}from"./u-form.060df079.js";import{u as C,_ as R}from"./sms-code.vue_vue_type_script_setup_true_lang.d0214b39.js";import{_ as L}from"./app-link.vue_vue_type_script_setup_true_lang.bba24c62.js";import{_ as E}from"./u-button.f8346dad.js";import"./u-icon.831afa15.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.6b994b75.js";import"./u-modal.40a95ec5.js";import"./u-loading-icon.5226cdc0.js";import"./u-popup.5da93907.js";import"./u-transition.b265f543.js";import"./u-safe-bottom.5752cbcf.js";const F=e({__name:"register",setup(e){const F=l({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""});uni.getStorageSync("openid")&&Object.assign(F,{openid:uni.getStorageSync("openid")});const Y=C(F);Y.refresh();const Z=a(),B=r(),G=o(!1),H=o(""),I=s((()=>{const e=[];return B.login.is_username&&e.push({type:"username",title:q("usernameRegister")}),B.login.is_mobile&&!B.login.is_bind_mobile&&e.push({type:"mobile",title:q("mobileRegister")}),H.value=e[0]?e[0].type:"",e})),K=s((()=>({username:{type:"string",required:"username"==H.value,message:q("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==H.value,message:q("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==H.value,message:q("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==F.password,message:q("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:q("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=H.value&&!B.login.is_bind_mobile||uni.$u.test.mobile(l),message:q("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:q("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==H.value,message:q("captchaPlaceholder"),trigger:["blur","change"]}}))),M=o(null),N=()=>{M.value.validate().then((()=>{if(G.value)return;G.value=!0;("username"==H.value?x:y)(F).then((e=>{Z.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{G.value=!1,Y.refresh()}))}))};return(e,l)=>{const a=w,r=V(k("u-input"),T),o=V(k("u-form-item"),S),s=V(k("sms-code"),R),x=j,y=P,v=V(k("app-link"),L),C=V(k("u-button"),E),Z=V(k("u-form"),A);return t(),u(a,{class:"w-screen h-screen flex flex-col"},{default:d((()=>[i(a,{class:"flex-1"},{default:d((()=>[i(a,{class:"h-[100rpx]"}),i(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:d((()=>[i(a,{class:"font-bold text-xl"},{default:d((()=>[n(p(m(q)("register")),1)])),_:1})])),_:1}),m(I).length>1?(t(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:d((()=>[(t(!0),c(g,null,b(m(I),((e,l)=>(t(),c(g,null,[i(a,{class:U({"text-gray-300":e.type!=H.value}),onClick:l=>H.value=e.type},{default:d((()=>[n(p(e.title),1)])),_:2},1032,["class","onClick"]),f(i(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[h,0==l]])],64)))),256))])),_:1})):_("v-if",!0),i(a,{class:"px-[60rpx]"},{default:d((()=>[i(Z,{labelPosition:"left",model:F,errorType:"toast",rules:m(K),ref_key:"formRef",ref:M},{default:d((()=>[f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"username","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.username,"onUpdate:modelValue":l[0]||(l[0]=e=>F.username=e),border:"none",clearable:"",placeholder:m(q)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.password,"onUpdate:modelValue":l[1]||(l[1]=e=>F.password=e),border:"none",type:"password",clearable:"",placeholder:m(q)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"confirm_password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>F.confirm_password=e),border:"none",type:"password",clearable:"",placeholder:m(q)("confirmPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"mobile","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>F.mobile=e),border:"none",clearable:"",placeholder:m(q)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>F.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(q)("codePlaceholder")},{suffix:d((()=>[i(s,{mobile:F.mobile,type:"register",modelValue:F.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>F.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"mobile"==H.value||m(B).login.is_bind_mobile]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"captcha_code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.captcha_code,"onUpdate:modelValue":l[7]||(l[7]=e=>F.captcha_code=e),border:"none",clearable:"",placeholder:m(q)("captchaPlaceholder")},{suffix:d((()=>[i(x,{src:m(Y).image.value,class:"h-[48rpx] ml-[20rpx]",mode:"heightFix",onClick:l[6]||(l[6]=e=>m(Y).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),i(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:d((()=>[i(v,{url:"/app/pages/auth/login"},{default:d((()=>[n(p(m(q)("haveAccount"))+"，",1),i(y,{class:"text-primary"},{default:d((()=>[n(p(m(q)("toLogin")),1)])),_:1})])),_:1})])),_:1}),i(a,{class:"mt-[80rpx]"},{default:d((()=>[i(C,{type:"primary",loading:G.value,loadingText:m(q)("registering"),onClick:N},{default:d((()=>[n(p(m(q)("register")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(B).login.agreement_show?(t(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:d((()=>[n(p(m(q)("registerAgreeTips"))+" ",1),i(v,{url:"/app/pages/auth/agreement?key=service"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(p(m(q)("userAgreement")),1)])),_:1})])),_:1}),n(" "+p(m(q)("and"))+" ",1),i(v,{url:"/app/pages/auth/agreement?key=privacy"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(p(m(q)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("v-if",!0)])),_:1})}}});export{F as default};

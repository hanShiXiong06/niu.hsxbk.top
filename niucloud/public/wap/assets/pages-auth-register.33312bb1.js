import{d as e,a as l,U as a,Y as r,r as o,c as s,h as t,i as u,w as d,j as i,C as n,D as m,l as p,M as c,N as b,O as _,E as g,k as f,v as h,$ as x,a0 as y,X as v,q as w,m as V,p as k,a1 as j,H as P,J as U,F as q}from"./index-5bb08350.js";import{_ as T}from"./u-input.cefa6e75.js";import{_ as C,a as A}from"./u-form.267f755c.js";import{u as S,_ as E}from"./sms-code.vue_vue_type_script_setup_true_lang.bcc80d73.js";import{_ as R}from"./app-link.vue_vue_type_script_setup_true_lang.b08a40da.js";import{_ as $}from"./u-button.364aa63d.js";import"./u-icon.461524ba.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.0c46076e.js";import"./u-modal.64c62d33.js";import"./u-loading-icon.2e89024b.js";import"./u-popup.7d705de0.js";import"./u-transition.021c4c1c.js";import"./u-safe-bottom.6578a4de.js";const F=e({__name:"register",setup(e){const F=l({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""});uni.getStorageSync("openid")&&Object.assign(F,{openid:uni.getStorageSync("openid")});const L=S(F);L.refresh();const O=a(),B=r(),D=o(!1),H=o(""),J=s((()=>{const e=[];return B.login.is_username&&e.push({type:"username",title:U("usernameRegister")}),B.login.is_mobile&&!B.login.is_bind_mobile&&e.push({type:"mobile",title:U("mobileRegister")}),H.value=e[0]?e[0].type:"",e})),M=s((()=>({username:{type:"string",required:"username"==H.value,message:U("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==H.value,message:U("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==H.value,message:U("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==F.password,message:U("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:U("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=H.value&&!B.login.is_bind_mobile||uni.$u.test.mobile(l),message:U("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:U("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==H.value,message:U("captchaPlaceholder"),trigger:["blur","change"]}}))),N=o(null),W=()=>{N.value.validate().then((()=>{if(D.value)return;D.value=!0;("username"==H.value?x:y)(F).then((e=>{O.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{D.value=!1,L.refresh()}))}))};return(e,l)=>{const a=w,r=V(k("u-input"),T),o=V(k("u-form-item"),C),s=V(k("sms-code"),E),x=j,y=P,v=V(k("app-link"),R),S=V(k("u-button"),$),O=V(k("u-form"),A);return t(),u(a,{class:"w-screen h-screen flex flex-col"},{default:d((()=>[i(a,{class:"flex-1"},{default:d((()=>[i(a,{class:"h-[100rpx]"}),i(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:d((()=>[i(a,{class:"font-bold text-xl"},{default:d((()=>[n(m(p(U)("register")),1)])),_:1})])),_:1}),p(J).length>1?(t(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:d((()=>[(t(!0),c(_,null,b(p(J),((e,l)=>(t(),c(_,null,[i(a,{class:q({"text-gray-300":e.type!=H.value}),onClick:l=>H.value=e.type},{default:d((()=>[n(m(e.title),1)])),_:2},1032,["class","onClick"]),f(i(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[h,0==l]])],64)))),256))])),_:1})):g("",!0),i(a,{class:"px-[60rpx]"},{default:d((()=>[i(O,{labelPosition:"left",model:F,errorType:"toast",rules:p(M),ref_key:"formRef",ref:N},{default:d((()=>[f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"username","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.username,"onUpdate:modelValue":l[0]||(l[0]=e=>F.username=e),border:"none",clearable:"",placeholder:p(U)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.password,"onUpdate:modelValue":l[1]||(l[1]=e=>F.password=e),border:"none",type:"password",clearable:"",placeholder:p(U)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"confirm_password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>F.confirm_password=e),border:"none",type:"password",clearable:"",placeholder:p(U)("confirmPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"mobile","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>F.mobile=e),border:"none",clearable:"",placeholder:p(U)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>F.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:p(U)("codePlaceholder")},{suffix:d((()=>[i(s,{mobile:F.mobile,type:"register",modelValue:F.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>F.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"mobile"==H.value||p(B).login.is_bind_mobile]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"captcha_code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.captcha_code,"onUpdate:modelValue":l[7]||(l[7]=e=>F.captcha_code=e),border:"none",clearable:"",placeholder:p(U)("captchaPlaceholder")},{suffix:d((()=>[i(x,{src:p(L).image.value,class:"h-[48rpx] ml-[20rpx]",mode:"heightFix",onClick:l[6]||(l[6]=e=>p(L).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),i(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:d((()=>[i(v,{url:"/pages/auth/login"},{default:d((()=>[n(m(p(U)("haveAccount"))+"，",1),i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("toLogin")),1)])),_:1})])),_:1})])),_:1}),i(a,{class:"mt-[80rpx]"},{default:d((()=>[i(S,{type:"primary",loading:D.value,loadingText:p(U)("registering"),onClick:W},{default:d((()=>[n(m(p(U)("register")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),p(B).login.agreement_show?(t(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:d((()=>[n(m(p(U)("registerAgreeTips"))+" ",1),i(v,{url:"/pages/auth/agreement?key=service"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("userAgreement")),1)])),_:1})])),_:1}),n(" "+m(p(U)("and"))+" ",1),i(v,{url:"/pages/auth/agreement?key=privacy"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):g("",!0)])),_:1})}}});export{F as default};

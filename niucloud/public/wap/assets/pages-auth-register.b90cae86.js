import{d as e,a as l,R as a,W as r,r as o,c as s,e as t,f as u,w as d,h as i,A as n,B as m,j as p,K as c,L as b,M as _,C as g,i as f,v as h,Z as x,_ as y,V as v,m as w,k as V,l as k,$ as j,F as P,G as U,D as q}from"./index-854481f8.js";import{_ as T}from"./u-input.2687cb8f.js";import{_ as A,a as C}from"./u-form.47bf330a.js";import{u as R,_ as S}from"./sms-code.vue_vue_type_script_setup_true_lang.7333f692.js";import{_ as L}from"./app-link.vue_vue_type_script_setup_true_lang.b7a1fad9.js";import{_ as B}from"./u-button.7ae2995f.js";import"./u-icon.cd6e256c.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.e47e8cd8.js";import"./u-modal.d4001524.js";import"./u-loading-icon.45575251.js";import"./u-popup.4d9841e3.js";import"./u-transition.6dcd1331.js";import"./u-safe-bottom.a8c13903.js";const E=e({__name:"register",setup(e){const E=l({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""});uni.getStorageSync("openid")&&Object.assign(E,{openid:uni.getStorageSync("openid")});const F=R(E);F.refresh();const W=a(),Z=r(),$=o(!1),D=o(""),G=s((()=>{const e=[];return Z.login.is_username&&e.push({type:"username",title:U("usernameRegister")}),Z.login.is_mobile&&!Z.login.is_bind_mobile&&e.push({type:"mobile",title:U("mobileRegister")}),D.value=e[0]?e[0].type:"",e})),K=s((()=>({username:{type:"string",required:"username"==D.value,message:U("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==D.value,message:U("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==D.value,message:U("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==E.password,message:U("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==D.value||Z.login.is_bind_mobile,message:U("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=D.value&&!Z.login.is_bind_mobile||uni.$u.test.mobile(l),message:U("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==D.value||Z.login.is_bind_mobile,message:U("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==D.value,message:U("captchaPlaceholder"),trigger:["blur","change"]}}))),M=o(null),O=()=>{M.value.validate().then((()=>{if($.value)return;$.value=!0;("username"==D.value?x:y)(E).then((e=>{W.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{$.value=!1,F.refresh()}))}))};return(e,l)=>{const a=w,r=V(k("u-input"),T),o=V(k("u-form-item"),A),s=V(k("sms-code"),S),x=j,y=P,v=V(k("app-link"),L),R=V(k("u-button"),B),W=V(k("u-form"),C);return t(),u(a,{class:"w-screen h-screen flex flex-col"},{default:d((()=>[i(a,{class:"flex-1"},{default:d((()=>[i(a,{class:"h-[100rpx]"}),i(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:d((()=>[i(a,{class:"font-bold text-xl"},{default:d((()=>[n(m(p(U)("register")),1)])),_:1})])),_:1}),p(G).length>1?(t(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:d((()=>[(t(!0),c(_,null,b(p(G),((e,l)=>(t(),c(_,null,[i(a,{class:q({"text-gray-300":e.type!=D.value}),onClick:l=>D.value=e.type},{default:d((()=>[n(m(e.title),1)])),_:2},1032,["class","onClick"]),f(i(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[h,0==l]])],64)))),256))])),_:1})):g("",!0),i(a,{class:"px-[60rpx]"},{default:d((()=>[i(W,{labelPosition:"left",model:E,errorType:"toast",rules:p(K),ref_key:"formRef",ref:M},{default:d((()=>[f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"username","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.username,"onUpdate:modelValue":l[0]||(l[0]=e=>E.username=e),border:"none",clearable:"",placeholder:p(U)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.password,"onUpdate:modelValue":l[1]||(l[1]=e=>E.password=e),border:"none",type:"password",clearable:"",placeholder:p(U)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"confirm_password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>E.confirm_password=e),border:"none",type:"password",clearable:"",placeholder:p(U)("confirmPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==D.value]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"mobile","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>E.mobile=e),border:"none",clearable:"",placeholder:p(U)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>E.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:p(U)("codePlaceholder")},{suffix:d((()=>[i(s,{mobile:E.mobile,type:"register",modelValue:E.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>E.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"mobile"==D.value||p(Z).login.is_bind_mobile]]),f(i(a,null,{default:d((()=>[i(a,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"captcha_code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:E.captcha_code,"onUpdate:modelValue":l[7]||(l[7]=e=>E.captcha_code=e),border:"none",clearable:"",placeholder:p(U)("captchaPlaceholder")},{suffix:d((()=>[i(x,{src:p(F).image.value,class:"h-[48rpx] ml-[20rpx]",mode:"heightFix",onClick:l[6]||(l[6]=e=>p(F).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==D.value]]),i(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:d((()=>[i(v,{url:"/pages/auth/login"},{default:d((()=>[n(m(p(U)("haveAccount"))+"，",1),i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("toLogin")),1)])),_:1})])),_:1})])),_:1}),i(a,{class:"mt-[80rpx]"},{default:d((()=>[i(R,{type:"primary",loading:$.value,loadingText:p(U)("registering"),onClick:O},{default:d((()=>[n(m(p(U)("register")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),p(Z).login.agreement_show?(t(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:d((()=>[n(m(p(U)("registerAgreeTips"))+" ",1),i(v,{url:"/pages/auth/agreement?key=service"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("userAgreement")),1)])),_:1})])),_:1}),n(" "+m(p(U)("and"))+" ",1),i(v,{url:"/pages/auth/agreement?key=privacy"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(m(p(U)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):g("",!0)])),_:1})}}});export{E as default};

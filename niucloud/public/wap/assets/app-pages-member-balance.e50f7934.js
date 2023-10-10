import{d as e,af as a,r as t,ap as l,h as r,q as n,t as s,i as o,j as u,w as p,k as c,K as i,L as d,n as y,Z as m,aj as _,F as f,G as v,H as g,y as x,m as b,a9 as h,x as k,ao as S,Y as w,a as C,e as j,aq as E,ai as F,l as I,v as T,p as R,M as O,N as P}from"./index-27e6e9c5.js";import{_ as U}from"./u-loading-page.5f11bfc8.js";import{_ as A}from"./u-button.f8346dad.js";import{_ as H}from"./u-image.500403b2.js";import{_ as $}from"./u-icon.831afa15.js";import{_ as q}from"./u-popup.5da93907.js";import{p as N,g as Y}from"./pay.883b3fdb.js";import{w as Z}from"./wechat.458f5422.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.5226cdc0.js";import"./u-transition.b265f543.js";import"./u-safe-bottom.5752cbcf.js";const B=z(e({__name:"pay",emits:["close"],setup(e,{expose:w,emit:C}){a()&&Z.init();const j=t(!1),E=t(!1),F=t(null),I=t(""),T=()=>{var e,t;uni.$u.test.isEmpty(I.value)?h({title:m("pay.notHavePayType"),icon:"none"}):E.value||(E.value=!0,N({trade_type:null==(e=F.value)?void 0:e.trade_type,trade_id:null==(t=F.value)?void 0:t.trade_id,type:I.value}).then((e=>{var t,l,n,s,o,u;switch(I.value){case"wechatpay":a()?(e.data.timestamp=e.data.timeStamp,delete e.data.timeStamp,Z.pay({...e.data,success:()=>{R()},cancel:()=>{E.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(t=F.value)?void 0:t.trade_type,trade_id:null==(l=F.value)?void 0:l.trade_id}),location.href=e.data.h5_url);break;case"alipay":a()?r({url:"/app/pages/pay/browser",param:{trade_type:null==(n=F.value)?void 0:n.trade_type,trade_id:null==(s=F.value)?void 0:s.trade_id,alipay:encodeURIComponent(e.data.url)},mode:"redirectTo"}):(uni.setStorageSync("paymenting",{trade_type:null==(o=F.value)?void 0:o.trade_type,trade_id:null==(u=F.value)?void 0:u.trade_id}),location.href=e.data.url);break;default:R()}})).catch((()=>{E.value=!1})))};l("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&r({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const R=()=>{var e,a;r({url:"/app/pages/pay/result",param:{trade_type:null==(e=F.value)?void 0:e.trade_type,trade_id:null==(a=F.value)?void 0:a.trade_id},mode:"redirectTo"})},O=()=>{uni.removeStorageSync("paymenting"),j.value=!1;const e=decodeURIComponent(uni.getStorageSync("payReturn"));e&&r({url:e,mode:"redirectTo"}),C("close")};return w({open:(e,a,t="")=>{uni.setStorageSync("payReturn",encodeURIComponent(t)),Y(e,a).then((e=>{let{data:a}=e;F.value=a,uni.$u.test.isEmpty(a)?h({title:m("pay.notObtainedInfo"),icon:"none"}):0!=a.money?0==a.status?(I.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",j.value=!0):h({title:m("pay.paymentDocuments")+a.status_name,icon:"none"}):R()})).catch((()=>{}))}}),(e,a)=>{const t=k,l=n(s("u-image"),H),r=n(s("u-icon"),$),h=S,w=n(s("u-button"),A),C=n(s("u-popup"),q);return o(),u(C,{show:j.value,round:10,onClose:O,closeable:!0,bgColor:"#fff",zIndex:"10081",closeOnClickOverlay:!1},{default:p((()=>[F.value?(o(),u(t,{key:0,class:"flex flex-col h-[75vh]"},{default:p((()=>[c(t,{class:"head"},{default:p((()=>[c(t,{class:"text-center py-[26rpx]"},{default:p((()=>[i(d(y(m)("pay.payTitle")),1)])),_:1}),c(t,{class:"flex items-end justify-center w-full text-xl font-bold py-[20rpx]"},{default:p((()=>[c(t,{class:"text-base mr-[4rpx]"},{default:p((()=>[i(d(y(m)("currency")),1)])),_:1}),i(" "+d(y(_)(F.value.money)),1)])),_:1})])),_:1}),c(h,{"scroll-y":"true",class:"flex-1 pt-[20rpx]"},{default:p((()=>[c(t,{class:"flex text-sm px-[30rpx] py-[20rpx]"},{default:p((()=>[c(t,{class:"text-gray-500"},{default:p((()=>[i(d(y(m)("pay.orderInfo")),1)])),_:1}),c(t,{class:"text-right flex-1 pl-[30rpx] truncate"},{default:p((()=>[i(d(F.value.body),1)])),_:1})])),_:1}),c(t,{class:"mx-[30rpx] py-[10rpx] px-[30rpx] bg-white rounded-md bg-page"},{default:p((()=>[F.value.pay_type_list.length?(o(!0),f(v,{key:0},g(F.value.pay_type_list,((e,a)=>(o(),u(t,{class:"pay-item py-[18rpx] flex items-center border-0 border-b border-solid border-[#eee]",key:a,onClick:a=>I.value=e.key},{default:p((()=>[c(l,{src:y(x)(e.icon),width:"50rpx",height:"50rpx"},null,8,["src"]),c(t,{class:"flex-1 px-[20rpx] text-sm font-bold"},{default:p((()=>[i(d(e.name),1)])),_:2},1024),e.key==I.value?(o(),u(r,{key:0,name:"checkbox-mark",color:"var(--primary-color)"})):b("v-if",!0)])),_:2},1032,["onClick"])))),128)):(o(),u(t,{key:1,class:"py-[20rpx] text-center text-sm text-gray-subtitle"},{default:p((()=>[i(d(y(m)("pay.notHavePayType")),1)])),_:1}))])),_:1})])),_:1}),c(t,{class:"p-[30rpx]"},{default:p((()=>[c(w,{type:"primary",loading:E.value,text:y(m)("pay.confirmPay"),shape:"circle",onClick:T},null,8,["loading","text"])])),_:1})])),_:1})):b("v-if",!0)])),_:1},8,["show"])}}}),[["__scopeId","data-v-4fc9a620"]]),D=z(e({__name:"balance",setup(e){const a=w(),l=t(!1),g=t(null),h=C({is_auto_transfer:0,is_auto_verify:0,is_open:0,min:0,rate:0,transfer_type:[]}),S=t(!0);j((()=>{E("checkIsReturnAfterPayment"),F().then((e=>{for(let a in e.data)h[a]=e.data[a];S.value=!1}))}));const H=()=>{uni.setStorageSync("cashOutAccountType","money"),r({url:"/app/pages/member/apply_cash_out"})};return(e,t)=>{const w=n(s("u-loading-page"),U),C=k,j=O,E=P,F=n(s("u-button"),A),$=n(s("pay"),B);return o(),f(v,null,[c(w,{loading:S.value,loadingText:""},null,8,["loading"]),I(c(C,{class:"account-info-wrap"},{default:p((()=>[c(C,{class:"account-info-head",style:R({background:"url("+y(x)("static/resource/images/member/balance_bg.png")+") no-repeat 95% 30% / auto 250rpx, linear-gradient(314deg, #FE7849 0%, #FF1959 100%)"})},{default:p((()=>[c(C,{class:"name"},{default:p((()=>[i(d(y(m)("balanceInfo")),1)])),_:1}),c(C,{class:"content"},{default:p((()=>[c(C,{class:"money"},{default:p((()=>[i(d(y(a).info?y(_)((parseFloat(y(a).info.balance)+parseFloat(y(a).info.money)).toString()):"0.00"),1)])),_:1}),c(C,{class:"text"},{default:p((()=>[i(d(y(m)("accountBalance")),1)])),_:1}),c(C,{class:"money-wrap"},{default:p((()=>[c(C,{class:"money-item",onClick:t[0]||(t[0]=e=>y(r)({url:"/app/pages/member/detailed_account",param:{type:"balance"}}))},{default:p((()=>[c(C,{class:"money"},{default:p((()=>{var e;return[i(d(y(_)(null==(e=y(a).info)?void 0:e.balance)||"0.00"),1)]})),_:1}),c(C,{class:"text leading-none"},{default:p((()=>[i(d(y(m)("balance")),1)])),_:1})])),_:1}),c(C,{class:"money-item",onClick:t[1]||(t[1]=e=>y(r)({url:"/app/pages/member/detailed_account",param:{type:"money"}}))},{default:p((()=>[c(C,{class:"money"},{default:p((()=>{var e;return[i(d(y(_)(null==(e=y(a).info)?void 0:e.money)||"0.00"),1)]})),_:1}),c(C,{class:"text leading-none"},{default:p((()=>[i(d(y(m)("money")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]),c(C,{class:"account-info-btn"},{default:p((()=>[b(' <u-button type="primary" shape="circle" class="btn"\r\n\t\t\t\t:customStyle="{backgroundColor: \'#FE4E50\',color: \'#fff\', borderColor: \'#FE4E50\',width: \'calc(100vw - 64rpx)\'}"\r\n\t\t\t\t@click="topUpFn">\r\n\t\t\t\t<image class="max-w-[36rpx] max-h-[36rpx] mr-1" :src="img(\'static/resource/images/member/reset.png\')"/>\r\n\t\t\t\t<text>{{t(\'recharge\')}}</text>\r\n\t\t\t</u-button> '),1==h.is_open?(o(),u(F,{key:0,type:"primary",plain:!0,shape:"circle",class:"btn",customStyle:{backgroundColor:"#fff",color:"#FE4E50",borderColor:"#FE4E50",width:"calc(100vw - 64rpx)"},onClick:H},{default:p((()=>[c(j,{class:"max-w-[36rpx] max-h-[36rpx] mr-1",src:y(x)("static/resource/images/member/withdraw_deposit.png")},null,8,["src"]),c(E,null,{default:p((()=>[i(d(y(m)("cashOut")),1)])),_:1})])),_:1},8,["customStyle"])):b("v-if",!0)])),_:1}),c($,{ref_key:"payRef",ref:g,onClose:t[2]||(t[2]=e=>l.value=!1)},null,512)])),_:1},512),[[T,!S.value]])],64)}}}),[["__scopeId","data-v-1495d8e2"]]);export{D as default};

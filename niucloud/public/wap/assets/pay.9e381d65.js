import{d as e,az as a,r as t,bc as l,e as r,q as s,t as o,i as p,j as n,w as u,k as d,G as i,H as c,n as y,K as m,a2 as _,P as v,R as f,Q as x,y as g,m as h,_ as b,x as k,a7 as S}from"./index-c8487b3e.js";import{_ as w}from"./u-image.9b57fa1f.js";import{_ as j}from"./u-icon.e1505caa.js";import{_ as C}from"./u-button.a3ccbdc0.js";import{_ as I}from"./u-popup.41f7f1c4.js";import{p as T,g as R}from"./pay.116f472c.js";import{w as P}from"./wechat.8ecaae3c.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";const H=z(e({__name:"pay",emits:["close"],setup(e,{expose:z,emit:H}){a()&&P.init();const O=t(!1),U=t(!1),D=t(null),E=t(""),K=()=>{var e,t;uni.$u.test.isEmpty(E.value)?b({title:m("pay.notHavePayType"),icon:"none"}):U.value||(U.value=!0,T({trade_type:null==(e=D.value)?void 0:e.trade_type,trade_id:null==(t=D.value)?void 0:t.trade_id,type:E.value}).then((e=>{var t,l,s,o,p,n;switch(E.value){case"wechatpay":a()?(e.data.timestamp=e.data.timeStamp,delete e.data.timeStamp,P.pay({...e.data,success:()=>{$()},cancel:()=>{U.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(t=D.value)?void 0:t.trade_type,trade_id:null==(l=D.value)?void 0:l.trade_id}),location.href=e.data.h5_url);break;case"alipay":a()?r({url:"/app/pages/pay/browser",param:{trade_type:null==(s=D.value)?void 0:s.trade_type,trade_id:null==(o=D.value)?void 0:o.trade_id,alipay:encodeURIComponent(e.data.url)},mode:"redirectTo"}):(uni.setStorageSync("paymenting",{trade_type:null==(p=D.value)?void 0:p.trade_type,trade_id:null==(n=D.value)?void 0:n.trade_id}),location.href=e.data.url);break;default:$()}})).catch((()=>{U.value=!1})))};l("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&r({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const $=()=>{var e,a;r({url:"/app/pages/pay/result",param:{trade_type:null==(e=D.value)?void 0:e.trade_type,trade_id:null==(a=D.value)?void 0:a.trade_id},mode:"redirectTo"})},q=()=>{uni.removeStorageSync("paymenting"),O.value=!1;const e=decodeURIComponent(uni.getStorageSync("payReturn"));e&&r({url:e,mode:"redirectTo"}),H("close")};return z({open:(e,a,t="")=>{uni.setStorageSync("payReturn",encodeURIComponent(t)),R(e,a).then((e=>{let{data:a}=e;D.value=a,uni.$u.test.isEmpty(a)?b({title:m("pay.notObtainedInfo"),icon:"none"}):0!=a.money?0==a.status?(E.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",O.value=!0):b({title:m("pay.paymentDocuments")+a.status_name,icon:"none"}):$()})).catch((()=>{}))}}),(e,a)=>{const t=k,l=s(o("u-image"),w),r=s(o("u-icon"),j),b=S,T=s(o("u-button"),C),R=s(o("u-popup"),I);return p(),n(R,{show:O.value,round:10,onClose:q,closeable:!0,bgColor:"#fff",zIndex:"10081",closeOnClickOverlay:!1},{default:u((()=>[D.value?(p(),n(t,{key:0,class:"flex flex-col h-[75vh]"},{default:u((()=>[d(t,{class:"head"},{default:u((()=>[d(t,{class:"text-center py-[26rpx]"},{default:u((()=>[i(c(y(m)("pay.payTitle")),1)])),_:1}),d(t,{class:"flex items-end justify-center w-full text-xl font-bold py-[20rpx] price-font"},{default:u((()=>[d(t,{class:"text-base mr-[4rpx]"},{default:u((()=>[i(c(y(m)("currency")),1)])),_:1}),i(" "+c(y(_)(D.value.money)),1)])),_:1})])),_:1}),d(b,{"scroll-y":"true",class:"flex-1 pt-[20rpx]"},{default:u((()=>[d(t,{class:"flex text-sm px-[30rpx] py-[20rpx]"},{default:u((()=>[d(t,{class:"text-gray-500"},{default:u((()=>[i(c(y(m)("pay.orderInfo")),1)])),_:1}),d(t,{class:"text-right flex-1 pl-[30rpx] truncate"},{default:u((()=>[i(c(D.value.body),1)])),_:1})])),_:1}),d(t,{class:"mx-[30rpx] py-[10rpx] px-[30rpx] bg-white rounded-md bg-page"},{default:u((()=>[D.value.pay_type_list.length?(p(!0),v(f,{key:0},x(D.value.pay_type_list,((e,a)=>(p(),n(t,{class:"pay-item py-[18rpx] flex items-center border-0 border-b border-solid border-[#eee]",key:a,onClick:a=>E.value=e.key},{default:u((()=>[d(l,{src:y(g)(e.icon),width:"50rpx",height:"50rpx"},null,8,["src"]),d(t,{class:"flex-1 px-[20rpx] text-sm font-bold"},{default:u((()=>[i(c(e.name),1)])),_:2},1024),e.key==E.value?(p(),n(r,{key:0,name:"checkbox-mark",color:"var(--primary-color)"})):h("v-if",!0)])),_:2},1032,["onClick"])))),128)):(p(),n(t,{key:1,class:"py-[20rpx] text-center text-sm text-gray-subtitle"},{default:u((()=>[i(c(y(m)("pay.notHavePayType")),1)])),_:1}))])),_:1})])),_:1}),d(t,{class:"p-[30rpx]"},{default:u((()=>[d(T,{type:"primary",loading:U.value,text:y(m)("pay.confirmPay"),shape:"circle",onClick:K},null,8,["loading","text"])])),_:1})])),_:1})):h("v-if",!0)])),_:1},8,["show"])}}}),[["__scopeId","data-v-83ec189f"]]);export{H as _};
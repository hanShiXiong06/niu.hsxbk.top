import{d as e,az as a,r as t,ba as l,e as r,q as s,t as o,i as p,j as n,w as u,k as d,G as i,H as y,n as c,K as m,a2 as _,P as v,R as f,Q as x,y as g,m as h,_ as b,x as k,a7 as S}from"./index-19cdd642.js";import{_ as w}from"./u-image.28b481c5.js";import{_ as j}from"./u-icon.608fbfc2.js";import{_ as C}from"./u-button.16c348c3.js";import{_ as I}from"./u-popup.9c625195.js";import{p as R,g as T}from"./pay.cf1e9cdb.js";import{w as P}from"./wechat.e4f076c9.js";import{_ as O}from"./_plugin-vue_export-helper.1b428a4d.js";const z=O(e({__name:"pay",emits:["close"],setup(e,{expose:O,emit:z}){a()&&P.init();const H=t(!1),U=t(!1),q=t(null),E=t(""),K=()=>{var e,t;uni.$u.test.isEmpty(E.value)?b({title:m("pay.notHavePayType"),icon:"none"}):U.value||(U.value=!0,R({trade_type:null==(e=q.value)?void 0:e.trade_type,trade_id:null==(t=q.value)?void 0:t.trade_id,type:E.value}).then((e=>{var t,l,s,o,p,n;switch(E.value){case"wechatpay":a()?(e.data.timestamp=e.data.timeStamp,delete e.data.timeStamp,P.pay({...e.data,success:()=>{$()},cancel:()=>{U.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(t=q.value)?void 0:t.trade_type,trade_id:null==(l=q.value)?void 0:l.trade_id}),location.href=e.data.h5_url);break;case"alipay":a()?r({url:"/app/pages/pay/browser",param:{trade_type:null==(s=q.value)?void 0:s.trade_type,trade_id:null==(o=q.value)?void 0:o.trade_id,alipay:encodeURIComponent(e.data.url)},mode:"redirectTo"}):(uni.setStorageSync("paymenting",{trade_type:null==(p=q.value)?void 0:p.trade_type,trade_id:null==(n=q.value)?void 0:n.trade_id}),location.href=e.data.url);break;default:$()}})).catch((()=>{U.value=!1})))};l("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&r({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const $=()=>{var e,a;r({url:"/app/pages/pay/result",param:{trade_type:null==(e=q.value)?void 0:e.trade_type,trade_id:null==(a=q.value)?void 0:a.trade_id},mode:"redirectTo"})},A=()=>{uni.removeStorageSync("paymenting"),H.value=!1;const e=decodeURIComponent(uni.getStorageSync("payReturn"));e&&r({url:e,mode:"redirectTo"}),z("close")};return O({open:(e,a,t="")=>{uni.setStorageSync("payReturn",encodeURIComponent(t)),T(e,a).then((e=>{let{data:a}=e;q.value=a,uni.$u.test.isEmpty(a)?b({title:m("pay.notObtainedInfo"),icon:"none"}):0!=a.money?0==a.status?(E.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",H.value=!0):b({title:m("pay.paymentDocuments")+a.status_name,icon:"none"}):$()})).catch((()=>{}))}}),(e,a)=>{const t=k,l=s(o("u-image"),w),r=s(o("u-icon"),j),b=S,R=s(o("u-button"),C),T=s(o("u-popup"),I);return p(),n(T,{show:H.value,round:10,onClose:A,closeable:!0,bgColor:"#fff",zIndex:"10081",closeOnClickOverlay:!1},{default:u((()=>[q.value?(p(),n(t,{key:0,class:"flex flex-col h-[75vh]"},{default:u((()=>[d(t,{class:"head"},{default:u((()=>[d(t,{class:"text-center py-[26rpx]"},{default:u((()=>[i(y(c(m)("pay.payTitle")),1)])),_:1}),d(t,{class:"flex items-end justify-center w-full text-xl font-bold py-[20rpx] price-font"},{default:u((()=>[d(t,{class:"text-base mr-[4rpx]"},{default:u((()=>[i(y(c(m)("currency")),1)])),_:1}),i(" "+y(c(_)(q.value.money)),1)])),_:1})])),_:1}),d(b,{"scroll-y":"true",class:"flex-1 pt-[20rpx]"},{default:u((()=>[d(t,{class:"flex text-sm px-[30rpx] py-[20rpx]"},{default:u((()=>[d(t,{class:"text-gray-500"},{default:u((()=>[i(y(c(m)("pay.orderInfo")),1)])),_:1}),d(t,{class:"text-right flex-1 pl-[30rpx] truncate"},{default:u((()=>[i(y(q.value.body),1)])),_:1})])),_:1}),d(t,{class:"mx-[30rpx] py-[10rpx] px-[30rpx] bg-white rounded-md bg-page"},{default:u((()=>[q.value.pay_type_list.length?(p(!0),v(f,{key:0},x(q.value.pay_type_list,((e,a)=>(p(),n(t,{class:"pay-item py-[18rpx] flex items-center border-0 border-b border-solid border-[#eee]",key:a,onClick:a=>E.value=e.key},{default:u((()=>[d(l,{src:c(g)(e.icon),width:"50rpx",height:"50rpx"},null,8,["src"]),d(t,{class:"flex-1 px-[20rpx] text-sm font-bold"},{default:u((()=>[i(y(e.name),1)])),_:2},1024),e.key==E.value?(p(),n(r,{key:0,name:"checkbox-mark",color:"var(--primary-color)"})):h("v-if",!0)])),_:2},1032,["onClick"])))),128)):(p(),n(t,{key:1,class:"py-[20rpx] text-center text-sm text-gray-subtitle"},{default:u((()=>[i(y(c(m)("pay.notHavePayType")),1)])),_:1}))])),_:1})])),_:1}),d(t,{class:"p-[30rpx]"},{default:u((()=>[d(R,{type:"primary",loading:U.value,text:c(m)("pay.confirmPay"),shape:"circle",onClick:K},null,8,["loading","text"])])),_:1})])),_:1})):h("v-if",!0)])),_:1},8,["show"])}}}),[["__scopeId","data-v-83ec189f"]]);export{z as _};
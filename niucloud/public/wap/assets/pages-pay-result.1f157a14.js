import{d as a,r as t,o as e,s,G as l,e as o,K as u,f as r,w as n,h as c,D as i,A as p,B as m,j as d,C as f,M as x,P as y,b4 as _,F as v,m as j,k as h,l as b,ao as g}from"./index-854481f8.js";import{_ as w}from"./u-button.7ae2995f.js";import{_ as T}from"./u-loading-icon.45575251.js";import{_ as C}from"./u-modal.d4001524.js";import{g as k}from"./pay.88e91df6.js";import"./u-icon.cd6e256c.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.e47e8cd8.js";import"./u-popup.4d9841e3.js";import"./u-transition.6dcd1331.js";import"./u-safe-bottom.a8c13903.js";const F=a({__name:"result",setup(a){const F=t(null),P=t(!1);let S="",z=0;e((a=>{S=a.code,B()}));const B=()=>{k(S).then((a=>{if(!uni.$u.test.isEmpty(a.data)){if(1==a.data.status&&z<5)return P.value=!0,z++,void setTimeout((()=>{B()}),1e3);F.value=a.data,P.value=!1,s({title:2==F.value.status?l("pay.paySuccess"):l("pay.payFail")})}})).catch((()=>{}))},A=()=>{var a;y({url:_(),param:{code:null==(a=F.value)?void 0:a.out_trade_no},mode:"redirectTo"})};return(a,t)=>{const e=v,s=j,y=h(b("u-button"),w),_=h(b("u-loading-icon"),T),k=h(b("u-modal"),C);return o(),u(x,null,[F.value?(o(),r(s,{key:0,class:"w-screen h-screen flex flex-col items-center"},{default:n((()=>[c(s,{class:"flex-1 flex flex-col items-center w-full pt-[100rpx]"},{default:n((()=>[c(e,{class:i(["iconfont text-2xl",2==F.value.status?"text-primary iconduigou":"iconzhifushibai text-red"])},null,8,["class"]),c(s,{class:"text-sm"},{default:n((()=>[p(m(2==F.value.status?d(l)("pay.paySuccess"):d(l)("pay.payFail")),1)])),_:1}),c(s,{class:"text-xl font-bold pt-[30rpx]"},{default:n((()=>[c(e,{class:"text-base"},{default:n((()=>[p(m(d(l)("currency")),1)])),_:1}),c(e,null,{default:n((()=>[p(m(d(g)(F.value.money)),1)])),_:1})])),_:1})])),_:1}),c(s,{class:"pb-[200rpx] w-[240rpx]"},{default:n((()=>[c(y,{type:"primary",text:2==F.value.status?d(l)("complete"):d(l)("close"),plain:!0,onClick:A},null,8,["text"])])),_:1})])),_:1})):f("",!0),c(k,{show:P.value,showCancelButton:!0,confirmText:d(l)("pay.completePay"),cancelText:d(l)("pay.incompletePay"),onCancel:A},{default:n((()=>[c(s,{class:"py-[20rpx]"},{default:n((()=>[c(_,{text:d(l)("pay.getting"),textSize:"16",mode:"circle",vertical:!0},null,8,["text"])])),_:1})])),_:1},8,["show","confirmText","cancelText"])],64)}}});export{F as default};

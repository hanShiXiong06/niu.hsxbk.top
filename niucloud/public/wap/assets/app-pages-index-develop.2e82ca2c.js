import{d as e,a,i as s,j as t,w as l,k as o,K as r,L as p,n as i,ba as n,x,N as c,q as d,t as u,Z as m}from"./index-27e6e9c5.js";import{_ as f}from"./u-button.f8346dad.js";import"./u-loading-icon.5226cdc0.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.831afa15.js";const _=e({__name:"develop",setup(e){const _=a({baseUrl:`${location.origin}/api/`,imgUrl:""}),b=()=>{let e=uni.getStorageSync("develop_before_path")||"/app/pages/index/index";"/app/pages/index/develop"==e&&(e="/app/pages/index/index"),e=e.replace("/",""),uni.removeStorageSync("develop_before_path"),location.href=`${location.origin}${n.h5.router.base}${e}`};return(e,a)=>{const n=x,g=c,v=d(u("u-button"),f);return s(),t(n,{class:"mt-[80rpx] px-[60rpx]"},{default:l((()=>[o(n,{class:"font-bold text-xl mb-[80rpx]"},{default:l((()=>[r(p(i(m)("developTitle")),1)])),_:1}),o(n,{class:"mb-[40rpx] flex flex-col"},{default:l((()=>[o(g,{class:"mb-[10rpx]"},{default:l((()=>[r(p(i(m)("baseUrl")),1)])),_:1}),o(g,{class:"text-sm"},{default:l((()=>[r(p(_.baseUrl),1)])),_:1})])),_:1}),o(n,{class:"mb-[40rpx] flex flex-col"},{default:l((()=>[o(g,{class:"mb-[10rpx]"},{default:l((()=>[r(p(i(m)("imgUrl")),1)])),_:1}),o(g,{class:"text-sm"},{default:l((()=>[r(p(_.imgUrl),1)])),_:1})])),_:1}),o(v,{type:"primary",onClick:b,class:"mt-[80rpx]"},{default:l((()=>[r(p(i(m)("confirm")),1)])),_:1})])),_:1})}}});export{_ as default};

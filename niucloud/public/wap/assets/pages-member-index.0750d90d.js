import{d as a,r as e,u as o,a as t,c as l,o as r,b as s,g,s as i,R as p,e as n,f as d,w as u,h as m,i as b,v as c,j as _,n as v,k as j,l as f,m as x,p as y}from"./index-ee2590bd.js";import{_ as h}from"./u-loading-page.7764425a.js";import{_ as S}from"./index.cc3a7d77.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.fa1220a3.js";import"./u-transition.b582b4be.js";import"./u-icon.492c79f2.js";import"./tabbar.d30604fe.js";import"./u-image.fc128b89.js";import"./u-safe-bottom.67f16698.js";import"./article.7c006983.js";import"./app-link.vue_vue_type_script_setup_true_lang.f229acc6.js";import"./u-avatar.b6202644.js";const I=k(a({__name:"index",setup(a){const k=e(!0),I=o(),B=t({global:{},value:[]}),C=l((()=>"decorate"==I.mode?I:B));return r((a=>{I.mode=a.mode||"","decorate"==I.mode&&(k.value=!1)})),s((()=>{"decorate"==I.mode?I.init():g({name:"DIY_MEMBER_INDEX"}).then((a=>{if(a.data.value){let e=JSON.parse(a.data.value);B.global=e.global,B.value=e.value,B.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),i({title:B.global.title})}k.value=!1})),p().getMemberInfo()})),(a,e)=>{const o=j(f("u-loading-page"),h),t=j(f("diy-group"),S),l=x;return n(),d(l,null,{default:u((()=>[m(o,{loading:k.value,loadingText:""},null,8,["loading"]),b(m(l,{style:v({backgroundColor:_(C).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:_(C).global.bgUrl?"url("+_(y)(_(C).global.bgUrl)+")":""}),class:"bg-index"},{default:u((()=>[m(t,{data:_(C)},null,8,["data"])])),_:1},8,["style"]),[[c,!k.value]])])),_:1})}}}),[["__scopeId","data-v-d9ba8693"]]);export{I as default};
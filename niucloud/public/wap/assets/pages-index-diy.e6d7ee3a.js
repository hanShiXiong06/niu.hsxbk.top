import{d as a,r as e,u as o,a as t,c as l,o as r,b as s,g as i,s as p,e as g,f as n,w as u,h as d,i as m,v as b,j as c,n as v,k as _,l as h,m as j,p as f}from"./index-854481f8.js";import{_ as S}from"./u-loading-page.6a3c22e7.js";import{_ as x}from"./index.8c2c9758.js";import{u as y}from"./useShare.1139fa5f.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.45575251.js";import"./u-transition.6dcd1331.js";import"./u-icon.cd6e256c.js";import"./tabbar.857600d6.js";import"./u-image.e954c2ee.js";import"./u-safe-bottom.a8c13903.js";import"./article.a7566a2d.js";import"./u-avatar.65e9b9cc.js";import"./app-link.vue_vue_type_script_setup_true_lang.b7a1fad9.js";import"./wechat.dc3bce01.js";const C=k(a({__name:"diy",setup(a){const{setShare:k,onShareAppMessage:C,onShareTimeline:B}=y();C(),B();const T=e(!0),U=o(),w=t({global:{},value:[]}),I=l((()=>"decorate"==U.mode?U:w)),J=e(0),N=e("");return r((a=>{U.mode=a.mode||"","decorate"==U.mode&&(T.value=!1),J.value=a.id||"",N.value=a.name||""})),s((()=>{"decorate"==U.mode?U.init():i({id:J.value,name:N.value}).then((a=>{if(a.data.value){let e=JSON.parse(a.data.value);w.global=e.global,w.value=e.value,w.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),p({title:w.global.title})}let e=a.data.share?JSON.parse(a.data.share):null;k(e),T.value=!1}))})),(a,e)=>{const o=_(h("u-loading-page"),S),t=_(h("diy-group"),x),l=j;return g(),n(l,null,{default:u((()=>[d(o,{loading:T.value,loadingText:""},null,8,["loading"]),m(d(l,{style:v({backgroundColor:c(I).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:c(I).global.bgUrl?"url("+c(f)(c(I).global.bgUrl)+")":""}),class:"bg-index"},{default:u((()=>[d(t,{data:c(I)},null,8,["data"])])),_:1},8,["style"]),[[b,!T.value]])])),_:1})}}}),[["__scopeId","data-v-05756bba"]]);export{C as default};

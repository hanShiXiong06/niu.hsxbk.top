import{d as e,R as a,r as l,a as t,c as s,e as n,f as o,w as r,h as i,j as u,C as p,b4 as d,ag as c,m,k as g,l as v,G as f,ak as h,b5 as x}from"./index-6ae98f60.js";import{_,a as b,b as k}from"./u-action-sheet.1a2bf3c2.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.b8554ea8.js";import"./u-line.4b08f62d.js";import"./u-loading-icon.04545e1a.js";import"./u-popup.461051d8.js";import"./u-transition.092585d8.js";import"./u-safe-bottom.7a092736.js";const j=w(e({__name:"index",setup(e){const w=a(),j=l("1.0.1"),y=t({"zh-Hans":{name:"简体中文",fontSize:"14",value:"zh-Hans"},en:{name:"English",fontSize:"14",value:"en"}}),C=l(!1),z=s((()=>{const e=x();return y[e].name})),S=e=>{d.loadLocaleMessages("/"+c(),e.value)};return(e,a)=>{const l=m,t=g(v("u-cell"),_),s=g(v("u-cell-group"),b),d=g(v("u-action-sheet"),k);return n(),o(l,{class:"w-full h-screen bg-page"},{default:r((()=>[i(l,{class:"h-[30rpx]"}),i(l,{class:"m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]"},{default:r((()=>[i(s,{border:!1},{default:r((()=>[i(t,{title:u(f)("personalSettings"),"is-link":!0,url:"/pages/member/personal"},null,8,["title"]),i(t,{title:u(f)("switchLang"),"is-link":!0,value:u(z),onClick:a[0]||(a[0]=e=>C.value=!0)},null,8,["title","value"]),i(t,{title:u(f)("version"),value:j.value},null,8,["title","value"])])),_:1})])),_:1}),i(l,{class:"m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]"},{default:r((()=>[i(s,{border:!1},{default:r((()=>[i(t,{title:u(f)("userAgreement"),"is-link":!0,url:"/pages/auth/agreement?key=service"},null,8,["title"]),i(t,{title:u(f)("privacyAgreement"),"is-link":!0,url:"/pages/auth/agreement?key=privacy"},null,8,["title"])])),_:1})])),_:1}),u(h)()?p("",!0):(n(),o(l,{key:0,class:"m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx]"},{default:r((()=>[i(s,{border:!1},{default:r((()=>[i(t,{title:u(f)("logout"),class:"text-center",onClick:a[1]||(a[1]=e=>u(w).logout(!0))},null,8,["title"])])),_:1})])),_:1})),i(d,{actions:y,show:C.value,closeOnClickOverlay:!0,safeAreaInsetBottom:!0,onClose:a[2]||(a[2]=e=>C.value=!1),onSelect:S},null,8,["actions","show"])])),_:1})}}}),[["__scopeId","data-v-dbae4323"]]);export{j as default};
import{d as a,r as e,u as l,a as o,c as t,o as r,b as p,s,e as i,g as u,f as d,h as g,Y as n,i as m,j as f,w as b,k as v,l as _,v as c,m as x,n as j,p as y,q as h,t as S,x as k,y as w}from"./index-27e6e9c5.js";import{_ as M}from"./u-loading-page.5f11bfc8.js";import{_ as D,a as R}from"./index.f1faddaf.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.5226cdc0.js";import"./u-transition.b265f543.js";import"./u-icon.831afa15.js";import"./u-image.500403b2.js";import"./app-link.vue_vue_type_script_setup_true_lang.bba24c62.js";import"./u-avatar.7023dac2.js";import"./u-button.f8346dad.js";import"./u-popup.5da93907.js";import"./u-safe-bottom.5752cbcf.js";import"./u-tabbar.ef17630a.js";const B=I(a({__name:"index",setup(a){const I=e(!0),B=l(),C=e(0),E=e("DIY_MEMBER_INDEX"),N=o({pageMode:"diy",title:"",global:{},value:[]}),U=t((()=>"decorate"==B.mode?B:N));return r((a=>{B.mode=a.mode||"","decorate"==B.mode&&(I.value=!1)})),p((()=>{C.value++,s()})),i((()=>{"decorate"==B.mode?B.init():u({name:E.value}).then((a=>{let e=a.data;if(e.value){N.pageMode=e.mode,N.title=e.title;let a=JSON.parse(e.value);N.global=a.global,N.value=a.value,N.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),d({title:N.title}),I.value=!1}else"other"==e.mode&&g({url:e.page})})),n().getMemberInfo()})),(a,e)=>{const l=h(S("u-loading-page"),M),o=h(S("diy-group"),D),t=k,r=h(S("fixed-group"),R);return m(),f(t,null,{default:b((()=>[v(l,{loading:I.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),_(v(t,null,{default:b((()=>[x(" 自定义模板渲染 "),"fixed"!=j(U).pageMode?(m(),f(t,{key:0,class:"diy-template-wrap bg-index",style:y({backgroundColor:j(U).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:j(U).global.bgUrl?"url("+j(w)(j(U).global.bgUrl)+")":""})},{default:b((()=>[v(o,{data:j(U),pullDownRefresh:C.value},null,8,["data","pullDownRefresh"])])),_:1},8,["style"])):x("v-if",!0),x(" 固定模板渲染 "),"fixed"==j(U).pageMode?(m(),f(t,{key:1,class:"fixed-template-wrap"},{default:b((()=>[v(r,{data:j(U),pullDownRefresh:C.value},null,8,["data","pullDownRefresh"])])),_:1})):x("v-if",!0)])),_:1},512),[[c,!I.value]])])),_:1})}}}),[["__scopeId","data-v-e52d8d91"]]);export{B as default};

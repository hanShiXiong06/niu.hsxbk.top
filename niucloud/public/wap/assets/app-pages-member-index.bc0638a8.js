import{d as a,r as e,u as l,a as o,c as t,o as r,f as p,h as s,b as i,g as u,s as g,e as d,Y as n,i as m,j as f,w as v,k as b,l as c,v as _,m as x,n as y,p as h,q as j,t as C,x as S,y as k}from"./index-42b5dd66.js";import{_ as w}from"./u-loading-page.95b1c030.js";import{_ as M,a as D}from"./index.62f14a08.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.677af9c0.js";import"./u-transition.58dbc541.js";import"./u-icon.d822f266.js";import"./u-image.284b9a33.js";import"./app-link.vue_vue_type_script_setup_true_lang.a3708d03.js";import"./u-avatar.da6e1c9e.js";import"./u-popup.7c4d4b2a.js";import"./u-safe-bottom.6809b39f.js";import"./u-tabbar.5b3f4ea1.js";const I=R(a({__name:"index",setup(a){const R=e(!0),I=l(),B=e(0),E=e("DIY_MEMBER_INDEX"),U=o({pageMode:"diy",title:"",global:{},value:[]}),Y=t((()=>"decorate"==I.mode?I:U));return r((a=>{I.mode=a.mode||"","decorate"==I.mode&&(R.value=!1)})),p((()=>{B.value++,s()})),i((()=>{"decorate"==I.mode?I.init():u({name:E.value}).then((a=>{let e=a.data;if(e.value){U.pageMode=e.mode,U.title=e.title;let a=JSON.parse(e.value);U.global=a.global,U.value=a.value,U.value.forEach(((a,e)=>{a.pageStyle="",a.pageBgColor&&(a.pageStyle+="background-color:"+a.pageBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),g({title:U.title}),R.value=!1}else"other"==e.mode&&d({url:e.page})})),n().getMemberInfo()})),(a,e)=>{const l=j(C("u-loading-page"),w),o=j(C("diy-group"),M),t=S,r=j(C("fixed-group"),D);return m(),f(t,null,{default:v((()=>[b(l,{loading:R.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),c(b(t,null,{default:v((()=>[x(" 自定义模板渲染 "),"fixed"!=y(Y).pageMode?(m(),f(t,{key:0,class:"diy-template-wrap bg-index",style:h({backgroundColor:y(Y).global.pageBgColor,minHeight:"calc(100vh - 50px)",backgroundImage:y(Y).global.bgUrl?"url("+y(k)(y(Y).global.bgUrl)+")":""})},{default:v((()=>[b(o,{data:y(Y),pullDownRefreshCount:B.value},null,8,["data","pullDownRefreshCount"])])),_:1},8,["style"])):x("v-if",!0),x(" 固定模板渲染 "),"fixed"==y(Y).pageMode?(m(),f(t,{key:1,class:"fixed-template-wrap"},{default:v((()=>[b(r,{data:y(Y),pullDownRefreshCount:B.value},null,8,["data","pullDownRefreshCount"])])),_:1})):x("v-if",!0)])),_:1},512),[[_,!R.value]])])),_:1})}}}),[["__scopeId","data-v-8ec9ffd5"]]);export{I as default};
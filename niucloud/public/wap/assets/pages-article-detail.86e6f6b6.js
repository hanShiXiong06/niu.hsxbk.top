import{d as e,r as a,o as t,f as s,h as l,i as r,w as o,l as i,M as n,j as p,C as u,D as d,O as m,E as g,q as x,H as c,m as f,p as b,J as _}from"./index-5bb08350.js";import{_ as h}from"./u-parse.8f6deaed.js";import{_ as j}from"./u-loading-page.f2a7c1df.js";import{b as y}from"./article.1722ca18.js";import{u as v}from"./useShare.80667d20.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.2e89024b.js";import"./u-transition.021c4c1c.js";import"./wechat.eeef1e91.js";const S=e({__name:"detail",setup(e){const{setShare:S,onShareAppMessage:w,onShareTimeline:T}=v();w(),T();let M=a([]),k=a(!0),q={h2:"margin-bottom: 15px;",p:"margin-bottom: 10px;line-height: 1.5;",img:"margin: 10px 0;"};return t((e=>{k.value=!0,y(e.id).then((e=>{M.value=e.data,k.value=!1;let a={title:M.value.title,desc:M.value.intro,url:M.value.image};s({title:M.value.title}),S({wechat:{...a},weapp:{...a}})}))})),(e,a)=>{const t=x,s=c,y=f(b("u-parse"),h),v=f(b("u-loading-page"),j);return l(),r(t,{class:"bg-white"},{default:o((()=>[i(k)?g("",!0):(l(),n(m,{key:0},[p(t,{class:"border-solid border-t-0 border-l-0 border-r-0 border-b-[1px] border-gray-200 p-[10px]"},{default:o((()=>[p(t,{class:"text-[16px]"},{default:o((()=>[u(d(i(M).title),1)])),_:1}),p(t,{class:"flex align-center justify-between text-[12px] text-gray-400 mt-[15px]"},{default:o((()=>[p(s,null,{default:o((()=>[u(d(i(M).create_time),1)])),_:1})])),_:1})])),_:1}),p(t,{class:"mx-[10px] my-[10px] bg-gray-100 p-[8px] text-[14px] rounded-[5px] leading-[1.3]"},{default:o((()=>[u(d(i(_)("abstract"))+"："+d(i(M).summary),1)])),_:1}),p(t,{class:"px-[10px] pd-[10px]"},{default:o((()=>[p(y,{content:i(M).content,tagStyle:i(q)},null,8,["content","tagStyle"])])),_:1})],64)),p(v,{"bg-color":"rgb(248,248,248)",loading:i(k),fontSize:"16",color:"#333",loadingText:i(_)("loadingText")},null,8,["loading","loadingText"])])),_:1})}}});export{S as default};
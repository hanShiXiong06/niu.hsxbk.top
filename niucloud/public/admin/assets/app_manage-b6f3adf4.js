import"./base-0e92f4db.js";/* empty css                   *//* empty css                 */import{_ as B}from"./apply_empty-78684083.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                  */import{_ as M}from"./app_store_default-c4798c2d.js";import{t as p}from"./index-2d1c7ba3.js";import{g as N,Y as D,z as b,w as R}from"./index-fac59425.js";import{c as T,a as w}from"./common-46715e7e.js";import{a as z}from"./vue-router-8b032575.js";import{E as j}from"./index-e09a20f5.js";import{E as q}from"./index-2b1dc445.js";import{E as P}from"./index-ef31373f.js";import{E as U}from"./index-39b9f241.js";import{E as Y}from"./index-0caa5b89.js";import{v as $}from"./directive-c6f70b8e.js";import{d as G,r as v,M as H,L as J,b as l,e as d,f as t,x as o,u as a,q as x,p as i,F as K,t as O,m as Q,v as W,C as E,au as X,av as Z}from"./runtime-core.esm-bundler-67034826.js";import{_ as tt}from"./_plugin-vue_export-helper-c27b6911.js";import"./event-a537c4cb.js";import"./index-72686045.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./index-ebd2990f.js";import"./el-overlay-3eff2fc5.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";import"./el-form-item-c2dd2ffe.js";/* empty css                 */import"./index-e9d9b1a1.js";import"./index-8cefa3ab.js";import"./index-de22cd40.js";import"./index-c7745eb3.js";import"./debounce-f6ba9d12.js";import"./position-c2e84b2a.js";const h=m=>(X("data-v-c7be75af"),m=m(),Z(),m),et={class:"box-border pt-[68px] px-[76px] overview-top"},ot={key:0},st={class:"flex justify-between items-center"},at={class:"font-[600] text-[26px] text-[#222] leading-[37px]"},pt={class:"font-[500] text-[14px] text-[#222] leading-[20px] mt-[12px]"},nt=h(()=>t("div",{class:"mr-[9px] text-[#3F3F3F] iconfont iconxiazai01"},null,-1)),it={class:"font-[600] text-[14px] text-[#222] leading-[20px]"},rt={class:"flex flex-wrap mt-[40px]"},ct=["onClick"],lt={class:"flex items-center"},mt=h(()=>t("div",{class:"image-slot"},[t("img",{class:"w-[40px] h-[40px] rounded-[8px]",src:M})],-1)),_t={class:"ml-[12px] flex-1"},dt={class:"font-[600] text-[14px] text-[#222] leading-[20px]"},xt={class:"font-[500] text-[13px] text-[#6D7278] leading-[18px] mt-[6px] w-[160px] truncate"},ut=h(()=>t("div",{class:"w-[230px] mx-auto"},[t("img",{src:B,class:"max-w-full",alt:""})],-1)),ft={class:"flex items-center"},vt=G({__name:"app_manage",setup(m){const g=z(),u=N(),n=v(!0),_=H({appList:[]}),f=v({});(()=>{n.value=!0,D().then(s=>{s.data.forEach((e,r)=>{e.type=="app"&&_.appList.push(e)}),u.routers.forEach((e,r)=>{e.children&&e.children.length?(e.name=b(e.children),f.value[e.meta.app]=b(e.children)):f.value[e.meta.app]=e.name}),n.value=!1}).catch(()=>{n.value=!1})})();const L=s=>{w.set({key:"menuAppStorage",data:s.key}),w.set({key:"plugMenuTypeStorage",data:""});const e=u.appMenuList;e.push(s.key),u.setAppMenuList(e);let r=f.value[s.key];g.push({name:r})},y=()=>{g.push("/app_manage/app_store")},k=v("");return(()=>{R().then(s=>{k.value=s.data.version.version})})(),(s,e)=>{const r=j,S=q,V=P,C=U,F=Y,I=$;return J((l(),d("div",et,[_.appList&&!n.value?(l(),d("div",ot,[t("div",st,[t("div",null,[t("div",at,o(a(p)("app")),1),t("div",pt,o(a(p)("versionInfo"))+" "+o(a(p)("currentVersion"))+" "+o(k.value),1)]),x(r,{onClick:y,class:"px-[15px]"},{default:i(()=>[nt,t("span",it,o(a(p)("appStore")),1)]),_:1})]),t("div",rt,[(l(!0),d(K,null,O(_.appList,(c,A)=>(l(),d("div",{key:A,class:"app-item w-[280px] box-border py-[42px] px-[32px] bg-[#fff] rounded-[8px] cursor-pointer mr-[20px] mb-[20px]",onClick:yt=>L(c)},[t("div",lt,[x(S,{class:"w-[44px] h-[44px] rounded-[8px]",src:a(T)(c.icon),fit:"contain"},{error:i(()=>[mt]),_:2},1032,["src"]),t("div",_t,[t("div",dt,o(c.title),1),x(V,{class:"box-item",effect:"light",content:c.desc,placement:"bottom-start"},{default:i(()=>[t("div",xt,o(c.desc),1)]),_:2},1032,["content"])])])],8,ct))),128)),!_.appList.length&&!n.value?(l(),Q(F,{key:0,class:"mx-auto overview-empty"},{image:i(()=>[ut]),description:i(()=>[t("p",ft,[t("span",null,o(a(p)("descriptionLeft")),1),x(C,{type:"primary",onClick:y,class:"mx-[5px]"},{default:i(()=>[W(o(a(p)("link")),1)]),_:1}),t("span",null,o(a(p)("descriptionRight")),1)])]),_:1})):E("",!0)])])):E("",!0)])),[[I,n.value]])}}});const ie=tt(vt,[["__scopeId","data-v-c7be75af"]]);export{ie as default};
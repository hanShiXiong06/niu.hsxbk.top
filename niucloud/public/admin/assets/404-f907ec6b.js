import"./base-0e92f4db.js";/* empty css                  */import{a as l}from"./vue-router-8b032575.js";import{E as d}from"./index-e09a20f5.js";import{d as i,r as p,O as m,e as u,f as t,g as x,q as v,p as f,u as h,au as g,av as I,b as S,v as b,x as B}from"./runtime-core.esm-bundler-67034826.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-72686045.js";import"./index-d87ae4a2.js";const w="/admin/assets/error-da01d378.png",o=e=>(g("data-v-7728c846"),e=e(),I(),e),y={class:"error"},C={class:"flex items-center"},E=o(()=>t("div",null,[t("img",{class:"w-[300px]",src:w})],-1)),N={class:"text-left ml-[100px]"},V=o(()=>t("div",{class:"error-text text-[28px] font-bold"},"404错误！",-1)),R=o(()=>t("div",{class:"text-[#222] text-[20px] mt-[15px]"},"哎呀，出错了！您访问的页面不存在...",-1)),U=o(()=>t("div",{class:"text-[#c4c2c2] text-[12px] mt-[5px]"},"尝试检查URL的错误，然后点击浏览器刷新按钮。",-1)),$={class:"mt-[40px]"},q=i({__name:"404",setup(e){let s=null;const a=p(5),r=l();return s=setInterval(()=>{a.value===0?(clearInterval(s),r.go(-1)):a.value--},1e3),m(()=>{s&&clearInterval(s)}),(n,c)=>{const _=d;return S(),u("div",y,[t("div",C,[x(n.$slots,"content",{},()=>[E],!0),t("div",N,[V,R,U,t("div",$,[v(_,{class:"bottom",onClick:c[0]||(c[0]=D=>h(r).go(-1))},{default:f(()=>[b(B(a.value)+" 秒后返回上一页",1)]),_:1})])])])])}}});const H=k(q,[["__scopeId","data-v-7728c846"]]);export{H as default};
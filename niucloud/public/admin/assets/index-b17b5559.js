import{d as L,c as S,R as h,w as O,e as o,f as n,g as l,j as v,u as i,y as a,v as j,x as E,B as $,F as g,z as P,H as B,al as N}from"./base-d77b0726.js";/* empty css                        */import{_ as R}from"./index.vue_vue_type_style_index_0_lang-769942c6.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";/* empty css                 */import{d as y}from"./common-56ee0a80.js";import{t as D}from"./index-e064b265.js";import{E as H}from"./index-3b19c3d7.js";import{E as q}from"./index-435afe75.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const G={class:"flex flex-wrap"},J={key:0,class:"w-full h-full relative"},K={class:"w-full h-full flex items-center justify-center"},M={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},Q={class:"w-full h-full flex items-center justify-center flex-col"},U={class:"leading-none text-xs mt-[10px] text-secondary"},W={class:"w-full h-full relative"},X={class:"w-full h-full flex items-center justify-center"},Y={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},ee={class:"w-full h-full flex items-center justify-center flex-col"},te={class:"leading-none text-xs mt-[10px] text-secondary"},le=L({__name:"index",props:{modelValue:{type:String,default:""},width:{type:String,default:"100px"},height:{type:String,default:"100px"},imageText:{type:String},limit:{type:Number,default:1}},emits:["update:modelValue","change"],setup(s,{emit:w}){const m=s,r=S({get(){return m.modelValue},set(t){w("update:modelValue",t)}}),e=h({data:[]});let b=h([]);const f=()=>{r.value=N(e.data).toString(),b=N(e.data).map(t=>y(t))};O(()=>r.value,()=>{r.value.indexOf("data:image")!=-1?e.data[0]=r.value+"":e.data=[...r.value.split(",").filter(t=>t)],f()},{immediate:!0});const p=S(()=>({width:m.width,height:m.height})),k=t=>{m.limit==1?(e.data.splice(0,1),t&&e.data.push(t.url)):t.forEach(c=>{e.data.length<m.limit&&e.data.push(c.url)}),f(),w("change",r.value)},C=(t=0)=>{e.data.splice(t,1),f()},u=h({show:!1,index:0}),z=(t=0)=>{u.show=!0,u.index=t};return(t,c)=>{const V=q,d=Z,I=R,T=H;return o(),n(g,null,[l("div",G,[s.limit==1?(o(),n("div",{key:0,class:"cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px]",style:v(i(p))},[e.data.length?(o(),n("div",J,[l("div",K,[a(V,{src:e.data[0].indexOf("data:image")!=-1?e.data[0]:i(y)(e.data[0]),fit:"contain"},null,8,["src"])]),l("div",M,[a(d,{name:"element-ZoomIn",color:"#fff",size:"18px",class:"mr-[10px]",onClick:c[0]||(c[0]=_=>z())}),a(d,{name:"element-Delete",color:"#fff",size:"18px",onClick:C})])])):(o(),j(I,{key:1,limit:s.limit,onConfirm:k},{default:E(()=>[l("div",Q,[a(d,{name:"element-Plus",size:"20px",color:"var(--el-text-color-secondary)"}),l("div",U,$(s.imageText||i(D)("upload.root")),1)])]),_:1},8,["limit"]))],4)):(o(),n(g,{key:1},[(o(!0),n(g,null,P(e.data,(_,x)=>(o(),n("div",{class:"cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px]",style:v(i(p)),key:x},[l("div",W,[l("div",X,[a(V,{src:i(y)(_),fit:"contain"},null,8,["src"])]),l("div",Y,[a(d,{name:"element-ZoomIn",color:"#fff",size:"18px",class:"mr-[10px]",onClick:F=>z(x)},null,8,["onClick"]),a(d,{name:"element-Delete",color:"#fff",size:"18px",onClick:F=>C(x)},null,8,["onClick"])])])],4))),128)),e.data.length<s.limit?(o(),n("div",{key:0,class:"rounded cursor-pointer overflow-hidden relative border border-dashed border-color",style:v(i(p))},[a(I,{limit:s.limit,onConfirm:k},{default:E(()=>[l("div",ee,[a(d,{name:"element-Plus",size:"20px",color:"var(--el-text-color-secondary)"}),l("div",te,$(s.imageText||i(D)("upload.root")),1)])]),_:1},8,["limit"])],4)):B("",!0)],64))]),u.show?(o(),j(T,{key:0,"url-list":i(b),onClose:c[1]||(c[1]=_=>u.show=!1),"initial-index":u.index,"zoom-rate":1},null,8,["url-list","initial-index"])):B("",!0)],64)}}});const fe=A(le,[["__scopeId","data-v-8dae4fdf"]]);export{fe as _};
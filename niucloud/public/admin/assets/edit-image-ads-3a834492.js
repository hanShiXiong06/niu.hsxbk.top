import{g as B,w as T,r as A,o as F,P as R,m as h,n as f,a1 as c,u as o,q as d,L as b,F as l,E as m,K as v,I as x,J as $,t as N}from"./base-d2ce4248.js";/* empty css                     *//* empty css                  */import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-824053ab.js";import{C as z}from"./index-057b5f2c.js";import{_ as D}from"./index-4b7c0a63.js";/* empty css                 */import{v as g}from"./event-f83e96f5.js";import{t as n}from"./index-578c83eb.js";import{S as W}from"./sortable.esm-be94e56d.js";import{d as j}from"./storage-e62e496d.js";import{u as L}from"./diy-719a7cdf.js";import{r as M}from"./range-81f0ed8d.js";import{E as O}from"./index-9997ff5d.js";import{a as q,E as J}from"./index-f579a83b.js";import{E as K}from"./index-953c712f.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"content-wrap"},X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},Z={class:"text-sm text-gray-400 mb-[10px]"},ee=["onClick"],te={class:"style-wrap"},oe=B({__name:"edit-image-ads",setup(ie,{expose:w}){const t=L();t.editComponent.ignore=[],t.editComponent.verify=a=>{var e={code:!0,message:""};return t.value[a].imageHeight==0?(e.code=!1,e.message=n("imageHeightPlaceholder"),e):/^\d+.?\d{0,2}$/.test(t.value[a].imageHeight)?(t.value[a].list.forEach(s=>{if(s.imageUrl==="")return e.code=!1,e.message=n("imageUrlTip"),e}),e):(e.code=!1,e.message=n("imageHeightRegNum"),e)},t.editComponent.list.forEach(a=>{a.id||(a.id=t.generateRandom())}),T(()=>t.editComponent.list,(a,e)=>{_()},{deep:!0});const y=()=>{t.editComponent.list.push({id:t.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},H=a=>{_(!0)},_=(a=!1)=>{t.editComponent.list.forEach((e,s)=>{let i=new Image;i.src=j(e.imageUrl),i.onload=async()=>{if(e.imgWidth=i.width,e.imgHeight=i.height,a&&s==0){var u=e.imgHeight/e.imgWidth;e.width=375,e.height=e.width*u,t.editComponent.imageHeight=e.height}}})},V=()=>{t.editComponent.imageHeight=parseInt(t.editComponent.imageHeight)},C=A();return F(()=>{R(()=>{const a=W.create(C.value,{group:"item-wrap",animation:200,onEnd:e=>{const s=t.editComponent.list[e.oldIndex];t.editComponent.list.splice(e.oldIndex,1),t.editComponent.list.splice(e.newIndex,0,s),a.sort(M(t.editComponent.list.length).map(i=>i.toString())),_(!0)}})})}),w({}),(a,e)=>{const s=O,i=q,u=D,I=z,k=P,E=K,S=J;return h(),f(x,null,[c(d("div",Q,[d("div",X,[d("h3",Y,b(o(n)("imageSet")),1),l(S,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[l(i,{label:o(n)("imageHeight"),class:"display-block"},{default:m(()=>[l(s,{modelValue:o(t).editComponent.imageHeight,"onUpdate:modelValue":e[0]||(e[0]=r=>o(t).editComponent.imageHeight=r),placeholder:o(n)("imageHeightPlaceholder"),clearable:"",maxlength:"10",onBlur:V},{append:m(()=>[v("px")]),_:1},8,["modelValue","placeholder"]),d("div",Z,b(o(n)("imageAdsTips")),1)]),_:1},8,["label"]),d("div",{ref_key:"imageBoxRef",ref:C},[(h(!0),f(x,null,$(o(t).editComponent.list,(r,U)=>(h(),f("div",{key:r.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:o(n)("image")},{default:m(()=>[l(u,{modelValue:r.imageUrl,"onUpdate:modelValue":p=>r.imageUrl=p,limit:1,onChange:H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),c(d("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:p=>o(t).editComponent.list.splice(U,1)},[l(I,{name:"element-CircleCloseFilled",color:"#bbb",size:"20px"})],8,ee),[[g,o(t).editComponent.list.length>1]]),l(i,{label:o(n)("link")},{default:m(()=>[l(k,{modelValue:r.link,"onUpdate:modelValue":p=>r.link=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),c(l(E,{class:"w-full",onClick:y},{default:m(()=>[v(b(o(n)("addImageAd")),1)]),_:1},512),[[g,o(t).editComponent.list.length<10]])]),_:1})])],512),[[g,o(t).editTab=="content"]]),c(d("div",te,[N(a.$slots,"style",{},void 0,!0)],512),[[g,o(t).editTab=="style"]])],64)}}});const ae=G(oe,[["__scopeId","data-v-25a281dd"]]),we=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{we as _};
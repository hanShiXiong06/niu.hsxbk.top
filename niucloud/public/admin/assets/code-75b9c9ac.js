import{d as J,r as m,R as K,e as x,f as O,g as r,B as u,u as a,y as e,x as n,A as g,Q as U,v as z,H as X}from"./base-d77b0726.js";/* empty css                   *//* empty css                   *//* empty css                */import{_ as Y}from"./index.vue_vue_type_style_index_0_lang-15491628.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                         *//* empty css                    */import{a as Z,b as ee,s as te}from"./weapp-15d61761.js";import{t}from"./index-70af0995.js";import{u as oe,b as ae}from"./vue-router-57155f94.js";import{g as le}from"./module-0464c2fd.js";/* empty css                       */import{E as ne}from"./index-5b262c6a.js";import{a as pe,E as ie}from"./index-09449e3d.js";import{a as re,E as se}from"./index-136e79ad.js";import{E as me}from"./index-91bdda63.js";import{a as de,E as ue}from"./index-0d721416.js";import{E as ce}from"./index-45cca80f.js";import{E as _e}from"./index-f956e728.js";import{E as fe}from"./index-2cf73bf7.js";import{E as ge}from"./index-c1eb81db.js";import{a as ve,E as be}from"./index-68c5ad54.js";import{E as he}from"./index-6a54cf26.js";import{v as we}from"./directive-08cd03ab.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */import"./common-4a1cac58.js";import"./index-e37943c3.js";import"./index-331c6de1.js";import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-bbf3e154.js";import"./event-e06a23af.js";import"./index-a20d1a31.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./index-b3418ddc.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./focus-trap-98fda164.js";import"./validator-7b087194.js";import"./index-6245131d.js";import"./strings-6a15e170.js";import"./index-f2dc9b9f.js";import"./index-40fcecbc.js";import"./index-74352d71.js";import"./_Uint8Array-2fd72219.js";import"./_initCloneObject-22d1caee.js";import"./index-52f984e1.js";import"./isEqual-030b54ca.js";import"./_isIterateeCall-ff5ab0b5.js";import"./debounce-8a1738b0.js";import"./index-ef0eb7b1.js";import"./index-a997ab1f.js";import"./index-45469947.js";import"./index-d1e433eb.js";const xe={class:"main-container min-h-[300px] p-5"},Ee={class:"flex justify-between items-center mb-[20px]"},Ce={class:"text-[20px]"},ye={class:"indent-4"},Te={class:"mt-[50px]"},ke={class:""},Be={class:"mt-[16px] flex justify-end"},De={class:"dialog-footer"},Pe=["element-loading-text"],Ue=J({__name:"code",setup(ze){const N=oe(),E=ae(),F=N.meta.title,C=m("1"),v=m(!1),p=K({page:1,limit:10,total:0,loading:!1,data:[]}),s=m({desc:""}),b=m("");le().then(i=>{i.data.data&&i.data.data.auth_code&&(b.value=i.data.data.auth_code,W())}).catch(()=>{});const h=m("/website/channel/weapp/code"),R=i=>{E.push({path:h.value})},y=m(null),c=(i=1)=>{p.loading=!0,p.page=i,ee({page:p.page,limit:p.limit}).then(o=>{p.loading=!1,p.data=o.data.data,p.total=o.data.total}).catch(()=>{p.loading=!1})};c();const I=()=>{y.value.clearValidate()},d=m(!1),T=()=>{if(!b.value){ne.confirm(t("authTips"),t("warning"),{distinguishCancelAndClose:!0,confirmButtonText:t("toBind"),cancelButtonText:t("toNiucloud")}).then(()=>{E.push({path:"/app/authorize"})}).catch(i=>{i==="cancel"&&window.open("https://www.niucloud.com/product")});return}d.value||(d.value=!0,te(s.value).then(()=>{c(),d.value=!1}).catch(()=>{d.value=!1}))},k=m(""),W=()=>{b.value&&Z().then(i=>{}).catch()};return(i,o)=>{const w=pe,A=ie,j=re,L=se,_=me,f=de,S=ce,M=ue,$=_e,H=fe,B=ge,V=ve,Q=Y,q=be,D=he,P=we;return x(),O("div",xe,[r("div",Ee,[r("span",Ce,u(a(F)),1)]),e(A,{modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=l=>h.value=l),class:"demo-tabs",onTabChange:R},{default:n(()=>[e(w,{label:a(t)("weappAccessFlow"),name:"/website/channel/weapp"},null,8,["label"]),e(w,{label:a(t)("subscribeMessage"),name:"/website/channel/weapp/message"},null,8,["label"]),e(w,{label:a(t)("weappRelease"),name:"/website/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),e(H,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[e(L,{modelValue:C.value,"onUpdate:modelValue":o[1]||(o[1]=l=>C.value=l)},{default:n(()=>[e(j,{title:a(t)("operatePrompt"),name:"1"},{default:n(()=>[r("div",null,[r("p",ye,u(a(t)("operatePromptTipsTwo")),1)])]),_:1},8,["title"])]),_:1},8,["modelValue"]),r("div",Te,[e(_,{type:"primary",onClick:T},{default:n(()=>[g(u(a(t)("codeDownTwoDesc")),1)]),_:1})]),U((x(),z(M,{class:"mt-[15px]",data:p.data,size:"default"},{empty:n(()=>[r("span",null,u(a(t)("emptyData")),1)]),default:n(()=>[e(f,{prop:"version",label:a(t)("code"),align:"left"},null,8,["label"]),e(f,{prop:"status_name",label:a(t)("status"),align:"left"},null,8,["label"]),e(f,{prop:"create_time",label:a(t)("createTime"),align:"center"},null,8,["label"]),e(f,{label:a(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:l,$index:G})=>[r("div",ke,[e(S,{content:k.value,"raw-content":"",effect:"light"},{default:n(()=>[k.value&&G==0&&p.page==1?(x(),z(_,{key:0,type:"primary",link:""},{default:n(()=>[g(u(a(t)("preview")),1)]),_:1})):X("",!0)]),_:2},1032,["content"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,p.loading]]),r("div",Be,[e($,{"current-page":p.page,"onUpdate:currentPage":o[2]||(o[2]=l=>p.page=l),"page-size":p.limit,"onUpdate:pageSize":o[3]||(o[3]=l=>p.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:p.total,onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","total"])])]),_:1}),e(D,{modelValue:v.value,"onUpdate:modelValue":o[8]||(o[8]=l=>v.value=l),title:a(t)("codeDownTwoDesc"),width:"30%","before-close":I},{footer:n(()=>[r("span",De,[e(_,{onClick:o[7]||(o[7]=l=>v.value=!1)},{default:n(()=>[g(u(a(t)("cancel")),1)]),_:1}),e(_,{type:"primary",onClick:T},{default:n(()=>[g(u(a(t)("confirm")),1)]),_:1})])]),default:n(()=>[e(q,{ref_key:"ruleFormRef",ref:y,model:s.value,rules:i.rules,"label-width":"120px"},{default:n(()=>[e(V,{prop:"code",label:a(t)("code")},{default:n(()=>[e(B,{modelValue:s.value.code,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.code=l),placeholder:a(t)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(V,{prop:"path",label:a(t)("path")},{default:n(()=>[e(Q,{modelValue:s.value.path,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.path=l),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),e(V,{label:a(t)("content")},{default:n(()=>[e(B,{type:"textarea",modelValue:s.value.content,"onUpdate:modelValue":o[6]||(o[6]=l=>s.value.content=l),placeholder:a(t)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(D,{modelValue:d.value,"onUpdate:modelValue":o[9]||(o[9]=l=>d.value=l),title:"",width:"300px","show-close":!1,"align-center":!0,"close-on-click-modal":!1},{default:n(()=>[U(r("div",{class:"w-full h-[100px]","element-loading-text":a(t)("uploadingTips")},null,8,Pe),[[P,d.value]])]),_:1},8,["modelValue"])])}}});const Xt=Ve(Ue,[["__scopeId","data-v-a270ac48"]]);export{Xt as default};
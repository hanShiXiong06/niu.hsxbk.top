import{d as X,R as V,r as c,w as Y,c as Z,e as x,f as ee,y as o,x as i,g as _,B as s,u as t,A as g,Q as te,v as k,H as $}from"./base-d77b0726.js";/* empty css                   *//* empty css                   */import{_ as ae}from"./index-6cf4d125.js";/* empty css                    *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{t as r}from"./index-70af0995.js";import{f as le,m as oe,n as re,o as ie}from"./diy-bb47aa1e.js";import{b as pe,u as se}from"./vue-router-57155f94.js";import{E as ne}from"./index-331c6de1.js";import{B as me}from"./sys-394b27a4.js";import{a as B}from"./index-9e51ba8b.js";import{E as de}from"./index-c1eb81db.js";import{a as ue,E as ce}from"./index-68c5ad54.js";import{E as fe}from"./index-91bdda63.js";import{E as _e}from"./index-2cf73bf7.js";import{a as ge,E as he}from"./index-0d721416.js";import{E as ve}from"./index-f956e728.js";import{a as ye,E as be}from"./index-09449e3d.js";import{E as we}from"./index-6a54cf26.js";import{v as Ve}from"./directive-08cd03ab.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9f74eab2.js";import"./attachment-01140c65.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         */import"./index-d7cd2cc3.js";import"./index-45cca80f.js";import"./index-e37943c3.js";import"./aria-60e0cdc6.js";import"./index-6245131d.js";import"./index-de9bede2.js";import"./focus-trap-98fda164.js";import"./index-1aa3caaa.js";import"./index-74352d71.js";import"./event-e06a23af.js";import"./index-a20d1a31.js";import"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";/* empty css                */import"./common-4a1cac58.js";import"./index-5b262c6a.js";import"./index-b3418ddc.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./validator-7b087194.js";import"./index-bbf3e154.js";import"./typescript-defaf979.js";import"./index-c314892b.js";import"./index-435afe75.js";import"./index-3b19c3d7.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./index-294b617f.js";import"./index-52f984e1.js";import"./isEqual-030b54ca.js";import"./_Uint8Array-2fd72219.js";import"./index-a997ab1f.js";import"./index-45469947.js";import"./strings-6a15e170.js";import"./index-f2dc9b9f.js";import"./index-ef0eb7b1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./_initCloneObject-22d1caee.js";import"./_isIterateeCall-ff5ab0b5.js";const xe={class:"main-container"},Ee={class:"flex justify-between items-center"},ke={class:"text-[20px]"},Ce={class:"mr-[10px]"},De={class:"mr-[10px]"},Re={class:"mt-[16px] flex justify-end"},Se={class:"dialog-footer"},na=X({__name:"route",setup(Pe){const z=V({});pe();const I=se().meta.title;c(),c(!1);let p=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:""}});const E=c("");(async()=>{E.value=(await me()).data.wap_url})();const h=(a=1)=>{p.loading=!0,p.page=a,oe({page:p.page,limit:p.limit,...p.searchParam}).then(e=>{p.loading=!1;let d=Math.ceil(e.data.length/p.limit),f=JSON.parse(JSON.stringify(e.data)),u=[];for(var y=0;y<d;y++)u[y]=f.splice(0,p.limit);p.data=u[p.page-1],p.total=e.data.length}).catch(()=>{p.loading=!1})};h(),le({}).then(a=>{for(let e in a.data)z[e]=a.data[e]});const C=c(),{copy:J,isSupported:O,copied:D}=ne(),R=a=>{O.value||B({message:r("notSupportCopy"),type:"warning"}),J(a)};Y(D,()=>{D.value&&B({message:r("copySuccess"),type:"success"})});const n=c("wechat"),S=c(""),P=c(0),v=V({title:"",name:"",page:"",is_share:0,sort:0}),m=V({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),b=c(!1),j=Z(()=>({})),U=c(),L=async a=>{let e=(await re({name:a.name})).data;e.title&&(a.id=e.id,a.title=e.title,a.name=e.name,a.page=e.page,a.is_share=e.is_share,a.sort=e.sort,a.share=e.share),v.title=a.title,v.name=a.name,v.page=a.page,v.is_share=a.is_share,v.sort=a.sort,P.value=a.id,S.value=a.title;let d=a.share?JSON.parse(a.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};d&&(m.wechat=d.wechat,m.weapp=d.weapp),b.value=!0},A=async a=>{a&&await a.validate(async e=>{e&&ie({id:P.value,share:JSON.stringify(m),...v}).then(()=>{h(),b.value=!1}).catch(()=>{})})},M=a=>{a&&(a.resetFields(),h())};return(a,e)=>{const d=de,f=ue,u=fe,y=ce,F=_e,w=ge,G=he,H=ve,T=ye,Q=be,q=ae,K=we,W=Ve;return x(),ee("div",xe,[o(F,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[_("div",Ee,[_("span",ke,s(t(I)),1)]),o(F,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(y,{inline:!0,model:t(p).searchParam,ref_key:"searchFormDiyRouteRef",ref:C},{default:i(()=>[o(f,{label:t(r)("title"),prop:"title"},{default:i(()=>[o(d,{modelValue:t(p).searchParam.title,"onUpdate:modelValue":e[0]||(e[0]=l=>t(p).searchParam.title=l),placeholder:t(r)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,null,{default:i(()=>[o(u,{type:"primary",onClick:e[1]||(e[1]=l=>h())},{default:i(()=>[g(s(t(r)("search")),1)]),_:1}),o(u,{onClick:e[2]||(e[2]=l=>M(C.value))},{default:i(()=>[g(s(t(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),te((x(),k(G,{data:t(p).data,size:"large"},{empty:i(()=>[_("span",null,s(t(p).loading?"":t(r)("emptyData")),1)]),default:i(()=>[o(w,{prop:"title",label:t(r)("title"),"min-width":"70"},null,8,["label"]),o(w,{prop:"addon_title",label:t(r)("forAddon"),"min-width":"70"},null,8,["label"]),o(w,{prop:"page",label:t(r)("wapUrl"),"min-width":"170"},{default:i(({row:l})=>[_("span",Ce,s(E.value+l.page),1),o(u,{type:"primary",link:"",onClick:N=>R(E.value+l.page)},{default:i(()=>[g(s(t(r)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),o(w,{prop:"page",label:t(r)("weappUrl"),"min-width":"120"},{default:i(({row:l})=>[_("span",De,s(l.page),1),o(u,{type:"primary",link:"",onClick:N=>R(l.page)},{default:i(()=>[g(s(t(r)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),o(w,{label:t(r)("share"),fixed:"right",align:"right","min-width":"80"},{default:i(({row:l})=>[l.is_share==1?(x(),k(u,{key:0,type:"primary",link:"",onClick:N=>L(l)},{default:i(()=>[g(s(t(r)("shareSet")),1)]),_:2},1032,["onClick"])):$("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[W,t(p).loading]]),_("div",Re,[o(H,{"current-page":t(p).page,"onUpdate:currentPage":e[3]||(e[3]=l=>t(p).page=l),"page-size":t(p).limit,"onUpdate:pageSize":e[4]||(e[4]=l=>t(p).limit=l),layout:"total, sizes, prev, pager, next, jumper",total:t(p).total,onSizeChange:e[5]||(e[5]=l=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])]),_:1}),o(K,{modelValue:b.value,"onUpdate:modelValue":e[12]||(e[12]=l=>b.value=l),title:t(r)("shareSet"),width:"30%"},{footer:i(()=>[_("span",Se,[o(u,{onClick:e[10]||(e[10]=l=>b.value=!1)},{default:i(()=>[g(s(t(r)("cancel")),1)]),_:1}),o(u,{type:"primary",onClick:e[11]||(e[11]=l=>A(U.value))},{default:i(()=>[g(s(t(r)("confirm")),1)]),_:1})])]),default:i(()=>[o(Q,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value=l)},{default:i(()=>[o(T,{label:t(r)("wechat"),name:"wechat"},null,8,["label"]),o(T,{label:t(r)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),o(y,{model:m[n.value],"label-width":"90px",ref_key:"shareFormRef",ref:U,rules:t(j)},{default:i(()=>[o(f,{label:t(r)("sharePage")},{default:i(()=>[_("span",null,s(S.value),1)]),_:1},8,["label"]),o(f,{label:t(r)("shareTitle"),prop:"title"},{default:i(()=>[o(d,{modelValue:m[n.value].title,"onUpdate:modelValue":e[7]||(e[7]=l=>m[n.value].title=l),placeholder:t(r)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n.value=="wechat"?(x(),k(f,{key:0,label:t(r)("shareDesc"),prop:"desc"},{default:i(()=>[o(d,{modelValue:m[n.value].desc,"onUpdate:modelValue":e[8]||(e[8]=l=>m[n.value].desc=l),placeholder:t(r)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):$("",!0),o(f,{label:t(r)("shareImageUrl"),prop:"url"},{default:i(()=>[o(q,{modelValue:m[n.value].url,"onUpdate:modelValue":e[9]||(e[9]=l=>m[n.value].url=l),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{na as default};

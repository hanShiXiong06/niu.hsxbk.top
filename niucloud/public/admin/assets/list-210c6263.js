import{d as ne,R as D,c as F,r as _,e as g,f as C,y as a,x as r,g as b,B as s,u as t,A as d,F as S,z as R,v as h,Q as J,H as G}from"./base-d77b0726.js";/* empty css                   */import{_ as me}from"./index-6cf4d125.js";/* empty css                    *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{v as se}from"./index-331c6de1.js";import{t as o}from"./index-70af0995.js";import{f as de,h as ue,j as ce,k as fe}from"./diy-bb47aa1e.js";import{b as ge,u as ye}from"./vue-router-57155f94.js";import{B as _e}from"./sys-394b27a4.js";import{E as ve}from"./index-5b262c6a.js";import{E as be}from"./index-91bdda63.js";import{E as he}from"./index-c1eb81db.js";import{a as we,E as Ve}from"./index-68c5ad54.js";import{a as Pe,E as ke}from"./index-a997ab1f.js";import{E as Ee}from"./index-2cf73bf7.js";import{a as xe,E as De}from"./index-0d721416.js";import{E as Ce}from"./index-f956e728.js";import{E as Te}from"./index-6a54cf26.js";import{a as Ue,E as $e}from"./index-09449e3d.js";import{v as Fe}from"./directive-08cd03ab.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9f74eab2.js";import"./attachment-01140c65.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         */import"./index-9e51ba8b.js";import"./index-e37943c3.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-d7cd2cc3.js";import"./index-45cca80f.js";import"./index-6245131d.js";import"./focus-trap-98fda164.js";import"./index-1aa3caaa.js";import"./index-74352d71.js";import"./event-e06a23af.js";import"./index-a20d1a31.js";import"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";/* empty css                */import"./common-4a1cac58.js";import"./index-bbf3e154.js";import"./index-c314892b.js";import"./index-435afe75.js";import"./index-3b19c3d7.js";import"./debounce-8a1738b0.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./scroll-59301fd6.js";import"./index-294b617f.js";import"./index-52f984e1.js";import"./isEqual-030b54ca.js";import"./_Uint8Array-2fd72219.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./index-b3418ddc.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./validator-7b087194.js";import"./index-f2dc9b9f.js";import"./_initCloneObject-22d1caee.js";import"./index-45469947.js";import"./strings-6a15e170.js";import"./index-ef0eb7b1.js";import"./_isIterateeCall-ff5ab0b5.js";const Se={class:"main-container"},Re={class:"flex justify-between items-center"},Be={class:"text-[20px]"},Ne={class:"mt-[16px] flex justify-end"},ze={class:"dialog-footer"},Ie={class:"dialog-footer"},vl=ne({__name:"list",setup(je){const T=ge(),H=ye().meta.title,k=D({}),m=D({title:"",type:"",template:""}),M=F(()=>({title:[{required:!0,message:o("titlePlaceholder"),trigger:"blur"}],type:[{required:!0,message:o("pageTypePlaceholder"),trigger:"blur"}]})),B=F(()=>{let i="";return m.template="",m.type&&(i=k[m.type].template),i}),N=_(),w=_(!1),Q=async i=>{i&&await i.validate(async e=>{if(e){w.value=!1;let n=`/decorate/edit?type=${m.type}&title=${m.title}`;m.template&&(n+=`&template=${m.template}`),T.push(n)}})},Y=_("");(async()=>{Y.value=(await _e()).data.wap_url})(),de({mode:""}).then(i=>{for(let e in i.data)k[e]=i.data[e]});let p=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",mode:""}});const z=_(),v=(i=1)=>{p.loading=!0,p.page=i,ue({page:p.page,limit:p.limit,...p.searchParam}).then(e=>{p.loading=!1,p.data=e.data.data,p.total=e.data.total}).catch(()=>{p.loading=!1})};v();const K=i=>{let e=T.resolve({path:"/decorate/edit",query:{id:i.id}});window.open(e.href)},W=i=>{ve.confirm(o("diyPageDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{ce(i).then(()=>{v()}).catch(()=>{})})},X=i=>{let e={};i.id?e.id=i.id:i.name&&(e.name=i.name);let n=T.resolve({path:"/decorate/preview",query:e});window.open(n.href)},u=_("wechat"),I=_(""),j=_(0),c=D({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),V=_(!1),Z=F(()=>({})),q=_(),ee=async i=>{j.value=i.id,I.value=i.title;let e=i.share?JSON.parse(i.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};e&&(c.wechat=e.wechat,c.weapp=e.weapp),V.value=!0},te=async i=>{i&&await i.validate(async e=>{e&&fe({id:j.value,share:JSON.stringify(c)}).then(()=>{v(),V.value=!1}).catch(()=>{})})},le=i=>{i&&(i.resetFields(),v())};return(i,e)=>{const n=be,E=he,f=we,P=Pe,U=ke,$=Ve,L=Ee,x=xe,ae=De,oe=Ce,O=Te,A=Ue,re=$e,ie=me,pe=Fe;return g(),C("div",Se,[a(L,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[b("div",Re,[b("span",Be,s(t(H)),1),a(n,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=l=>w.value=!0)},{default:r(()=>[d(s(t(o)("addDiyPage")),1)]),_:1})]),a(L,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[a($,{inline:!0,model:t(p).searchParam,ref_key:"searchFormDiyPageRef",ref:z},{default:r(()=>[a(f,{label:t(o)("title"),prop:"title"},{default:r(()=>[a(E,{modelValue:t(p).searchParam.title,"onUpdate:modelValue":e[1]||(e[1]=l=>t(p).searchParam.title=l),placeholder:t(o)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:t(o)("typeName"),prop:"type"},{default:r(()=>[a(U,{modelValue:t(p).searchParam.type,"onUpdate:modelValue":e[2]||(e[2]=l=>t(p).searchParam.type=l),placeholder:t(o)("pageTypePlaceholder")},{default:r(()=>[a(P,{label:t(o)("all"),value:""},null,8,["label"]),(g(!0),C(S,null,R(k,(l,y)=>(g(),h(P,{label:l.title,value:y},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,null,{default:r(()=>[a(n,{type:"primary",onClick:e[3]||(e[3]=l=>v())},{default:r(()=>[d(s(t(o)("search")),1)]),_:1}),a(n,{onClick:e[4]||(e[4]=l=>le(z.value))},{default:r(()=>[d(s(t(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),J((g(),h(ae,{data:t(p).data,size:"large"},{empty:r(()=>[b("span",null,s(t(p).loading?"":t(o)("emptyData")),1)]),default:r(()=>[a(x,{prop:"title",label:t(o)("title"),"min-width":"120"},null,8,["label"]),a(x,{prop:"type_name",label:t(o)("typeName"),"min-width":"80"},null,8,["label"]),a(x,{prop:"update_time",label:t(o)("updateTime"),"min-width":"120"},null,8,["label"]),a(x,{label:t(o)("operation"),fixed:"right",align:"right","min-width":"160"},{default:r(({row:l})=>[a(n,{type:"primary",link:"",onClick:y=>X(l)},{default:r(()=>[d(s(t(o)("promote")),1)]),_:2},1032,["onClick"]),l.type=="DIY_PAGE"?(g(),h(n,{key:0,type:"primary",link:"",onClick:y=>ee(l)},{default:r(()=>[d(s(t(o)("shareSet")),1)]),_:2},1032,["onClick"])):G("",!0),a(n,{type:"primary",link:"",onClick:y=>K(l)},{default:r(()=>[d(s(t(o)("edit")),1)]),_:2},1032,["onClick"]),a(n,{type:"primary",link:"",onClick:y=>W(l.id)},{default:r(()=>[d(s(t(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[pe,t(p).loading]]),b("div",Ne,[a(oe,{"current-page":t(p).page,"onUpdate:currentPage":e[5]||(e[5]=l=>t(p).page=l),"page-size":t(p).limit,"onUpdate:pageSize":e[6]||(e[6]=l=>t(p).limit=l),layout:"total, sizes, prev, pager, next, jumper",total:t(p).total,onSizeChange:e[7]||(e[7]=l=>v()),onCurrentChange:v},null,8,["current-page","page-size","total"])])]),_:1}),a(O,{modelValue:w.value,"onUpdate:modelValue":e[13]||(e[13]=l=>w.value=l),title:t(o)("addPageTips"),width:"25%"},{footer:r(()=>[b("span",ze,[a(n,{onClick:e[11]||(e[11]=l=>w.value=!1)},{default:r(()=>[d(s(t(o)("cancel")),1)]),_:1}),a(n,{type:"primary",onClick:e[12]||(e[12]=l=>Q(N.value))},{default:r(()=>[d(s(t(o)("confirm")),1)]),_:1})])]),default:r(()=>[a($,{model:m,"label-width":"90px",ref_key:"formRef",ref:N,rules:t(M)},{default:r(()=>[a(f,{label:t(o)("title"),prop:"title"},{default:r(()=>[a(E,{modelValue:m.title,"onUpdate:modelValue":e[8]||(e[8]=l=>m.title=l),placeholder:t(o)("titlePlaceholder"),clearable:"",maxlength:"12","show-word-limit":"",class:"w-full"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:t(o)("addType"),prop:"type"},{default:r(()=>[a(U,{modelValue:m.type,"onUpdate:modelValue":e[9]||(e[9]=l=>m.type=l),placeholder:t(o)("pageTypePlaceholder"),class:"w-full"},{default:r(()=>[(g(!0),C(S,null,R(k,(l,y)=>(g(),h(P,{label:l.title,value:y},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),J(a(f,{label:t(o)("templateName"),prop:"template"},{default:r(()=>[a(U,{modelValue:m.template,"onUpdate:modelValue":e[10]||(e[10]=l=>m.template=l),class:"w-full"},{default:r(()=>[a(P,{label:t(o)("emptyTemplate"),value:""},null,8,["label"]),(g(!0),C(S,null,R(t(B),(l,y)=>(g(),h(P,{label:l.title,value:y},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[se,t(B)]])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),a(O,{modelValue:V.value,"onUpdate:modelValue":e[20]||(e[20]=l=>V.value=l),title:t(o)("shareSet"),width:"30%"},{footer:r(()=>[b("span",Ie,[a(n,{onClick:e[18]||(e[18]=l=>V.value=!1)},{default:r(()=>[d(s(t(o)("cancel")),1)]),_:1}),a(n,{type:"primary",onClick:e[19]||(e[19]=l=>te(q.value))},{default:r(()=>[d(s(t(o)("confirm")),1)]),_:1})])]),default:r(()=>[a(re,{modelValue:u.value,"onUpdate:modelValue":e[14]||(e[14]=l=>u.value=l)},{default:r(()=>[a(A,{label:t(o)("wechat"),name:"wechat"},null,8,["label"]),a(A,{label:t(o)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),a($,{model:c[u.value],"label-width":"90px",ref_key:"shareFormRef",ref:q,rules:t(Z)},{default:r(()=>[a(f,{label:t(o)("sharePage")},{default:r(()=>[b("span",null,s(I.value),1)]),_:1},8,["label"]),a(f,{label:t(o)("shareTitle"),prop:"title"},{default:r(()=>[a(E,{modelValue:c[u.value].title,"onUpdate:modelValue":e[15]||(e[15]=l=>c[u.value].title=l),placeholder:t(o)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u.value=="wechat"?(g(),h(f,{key:0,label:t(o)("shareDesc"),prop:"desc"},{default:r(()=>[a(E,{modelValue:c[u.value].desc,"onUpdate:modelValue":e[16]||(e[16]=l=>c[u.value].desc=l),placeholder:t(o)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):G("",!0),a(f,{label:t(o)("shareImageUrl"),prop:"url"},{default:r(()=>[a(ie,{modelValue:c[u.value].url,"onUpdate:modelValue":e[17]||(e[17]=l=>c[u.value].url=l),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{vl as default};

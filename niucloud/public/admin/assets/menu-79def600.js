import"./base-0e92f4db.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{L,M as z,N as F,O as I,_ as O}from"./index-fac59425.js";/* empty css                  */import{t as e}from"./index-2d1c7ba3.js";import{_ as R}from"./edit-menu.vue_vue_type_script_setup_true_lang-65f03921.js";import{u as S}from"./vue-router-8b032575.js";import{E as j}from"./index-a31d0a55.js";import{E as q}from"./index-e09a20f5.js";import{a as A,E as P}from"./index-395859da.js";import{E as U}from"./index-66750d66.js";import{a as G,E as H}from"./index-8ef7dff7.js";import{E as J}from"./index-2668a8ea.js";import{v as K}from"./directive-c6f70b8e.js";import{d as Q,M as W,r as X,b as l,e as u,q as i,p as o,f as b,x as m,u as t,v as c,L as C,m as s,C as p,F as N}from"./runtime-core.esm-bundler-67034826.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./common-46715e7e.js";import"./index-72686045.js";import"./event-a537c4cb.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./index-ebd2990f.js";import"./el-overlay-3eff2fc5.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";import"./el-form-item-c2dd2ffe.js";/* empty css                 */import"./index-e9d9b1a1.js";import"./index-8cefa3ab.js";import"./index-ef31373f.js";import"./index-de22cd40.js";/* empty css                        */import"./index-f55ea3bf.js";import"./index.vue_vue_type_style_index_0_lang-17d8e4dc.js";import"./attachment-f90dcf10.js";/* empty css                        *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                   */import"./index-8c8d61e8.js";import"./index-434046cb.js";import"./index-d23c70b3.js";import"./index-2b1dc445.js";import"./index-c7745eb3.js";import"./debounce-f6ba9d12.js";import"./position-c2e84b2a.js";import"./index-0caa5b89.js";import"./index-fd563016.js";import"./isEqual-97c7f2d5.js";import"./index-95382bd9.js";import"./index-757074f4.js";import"./strings-1130dd70.js";import"./index-c6aa1547.js";import"./validator-9409f909.js";/* empty css                *//* empty css                       *//* empty css                 */import"./tools-2d9c0188.js";import"./index-9aa10ae4.js";import"./index-5ba48958.js";import"./index-e63aa950.js";import"./index-97d638b4.js";import"./index-62f985cf.js";import"./index-b340b027.js";import"./aria-adfa05c5.js";import"./_isIterateeCall-7d0e706f.js";const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"text-[20px]"},ae={class:"mt-[20px]"},oe={key:0},ie={key:1},ne={key:2},le={key:0},me={key:1},re={key:2},pe=Q({__name:"menu",setup(se){const M=S().meta.title,r=W({loading:!0,systemData:[],applicationDate:[],data:[],activeName:"system"}),g=async()=>{r.loading=!0;let d=await L();r.systemData=d.data||[];let y=await z(),_=await F();r.data=_.data,r.applicationDate=y.data?y.data.map(n=>(n.menu_name=n.title,n.menu_key=n.key+"1",n)):[],r.loading=!1};g();const f=X(null),B=()=>{f.value.setFormData({app_type:"admin"}),f.value.showDialog=!0},v=d=>{f.value.setFormData(d),f.value.showDialog=!0},x=d=>{j.confirm(e("menuDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{I(d).then(y=>{g()}).catch(()=>{})})};return(d,y)=>{const _=q,n=A,D=O,k=U,E=P,T=G,V=H,$=J,w=K;return l(),u("div",Z,[i($,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[b("div",ee,[b("span",te,m(t(M)),1),i(_,{type:"primary",class:"w-[100px]",onClick:B},{default:o(()=>[c(m(t(e)("addMenu")),1)]),_:1})]),b("div",ae,[i(V,{modelValue:r.activeName,"onUpdate:modelValue":y[0]||(y[0]=a=>r.activeName=a)},{default:o(()=>[i(T,{label:t(e)("system"),name:"system"},{default:o(()=>[C((l(),s(E,{data:r.systemData,"row-key":"menu_key",size:"large"},{empty:o(()=>[b("span",null,m(r.loading?"":t(e)("emptyData")),1)]),default:o(()=>[i(n,{prop:"menu_name","show-overflow-tooltip":!0,label:t(e)("menuName"),"min-width":"150"},null,8,["label"]),i(n,{label:t(e)("icon"),width:"100",align:"center"},{default:o(({row:a})=>[a.icon?(l(),s(D,{key:0,name:a.icon,size:"18px"},null,8,["name"])):p("",!0)]),_:1},8,["label"]),i(n,{label:t(e)("menuType"),width:"80"},{default:o(({row:a})=>[a.menu_type||a.menu_type==0?(l(),u(N,{key:0},[a.menu_type==0?(l(),u("div",oe,m(t(e)("menuTypeDir")),1)):a.menu_type==1?(l(),u("div",ie,m(t(e)("menuTypeMenu")),1)):a.menu_type==2?(l(),u("div",ne,m(t(e)("menuTypeButton")),1)):p("",!0)],64)):p("",!0)]),_:1},8,["label"]),i(n,{prop:"api_url",label:t(e)("authId"),"min-width":"150",align:"center"},null,8,["label"]),i(n,{label:t(e)("status"),"min-width":"120",align:"center"},{default:o(({row:a})=>[a.status==1?(l(),s(k,{key:0,class:"ml-2",type:"success"},{default:o(()=>[c(m(t(e)("statusNormal")),1)]),_:1})):p("",!0),a.status==0?(l(),s(k,{key:1,class:"ml-2",type:"error"},{default:o(()=>[c(m(t(e)("statusDeactivate")),1)]),_:1})):p("",!0)]),_:1},8,["label"]),i(n,{prop:"sort",label:t(e)("sort"),"min-width":"100"},null,8,["label"]),i(n,{label:t(e)("operation"),fixed:"right",align:"right",width:"130"},{default:o(({row:a})=>[i(_,{type:"primary",link:"",onClick:h=>v(a)},{default:o(()=>[c(m(t(e)("edit")),1)]),_:2},1032,["onClick"]),i(_,{type:"primary",link:"",onClick:h=>x(a.menu_key)},{default:o(()=>[c(m(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[w,r.loading]])]),_:1},8,["label"]),i(T,{label:t(e)("application"),name:"application"},{default:o(()=>[C((l(),s(E,{data:r.applicationDate,"row-key":"menu_key",size:"large"},{empty:o(()=>[b("span",null,m(r.loading?"":t(e)("emptyData")),1)]),default:o(()=>[i(n,{prop:"menu_name","show-overflow-tooltip":!0,label:t(e)("menuName"),"min-width":"150"},null,8,["label"]),i(n,{label:t(e)("icon"),width:"100",align:"center"},{default:o(({row:a})=>[a.icon?(l(),s(D,{key:0,name:a.icon,size:"18px"},null,8,["name"])):p("",!0)]),_:1},8,["label"]),i(n,{label:t(e)("menuType"),width:"80"},{default:o(({row:a})=>[a.menu_type||a.menu_type==0?(l(),u(N,{key:0},[a.menu_type==0?(l(),u("div",le,m(t(e)("menuTypeDir")),1)):a.menu_type==1?(l(),u("div",me,m(t(e)("menuTypeMenu")),1)):a.menu_type==2?(l(),u("div",re,m(t(e)("menuTypeButton")),1)):p("",!0)],64)):p("",!0)]),_:1},8,["label"]),i(n,{prop:"api_url",label:t(e)("authId"),"min-width":"150",align:"center"},null,8,["label"]),i(n,{label:t(e)("status"),"min-width":"120",align:"center"},{default:o(({row:a})=>[a.status==1?(l(),s(k,{key:0,class:"ml-2",type:"success"},{default:o(()=>[c(m(t(e)("statusNormal")),1)]),_:1})):p("",!0),a.status==0?(l(),s(k,{key:1,class:"ml-2",type:"error"},{default:o(()=>[c(m(t(e)("statusDeactivate")),1)]),_:1})):p("",!0)]),_:1},8,["label"]),i(n,{prop:"sort",label:t(e)("sort"),"min-width":"100"},null,8,["label"]),i(n,{label:t(e)("operation"),fixed:"right",align:"right",width:"130"},{default:o(({row:a})=>[a.menu_key.indexOf("1")==-1?(l(),s(_,{key:0,type:"primary",link:"",onClick:h=>v(a)},{default:o(()=>[c(m(t(e)("edit")),1)]),_:2},1032,["onClick"])):p("",!0),a.menu_key.indexOf("1")==-1?(l(),s(_,{key:1,type:"primary",link:"",onClick:h=>x(a.menu_key)},{default:o(()=>[c(m(t(e)("delete")),1)]),_:2},1032,["onClick"])):p("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[w,r.loading]])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),i(R,{ref_key:"editMenuDialog",ref:f,"menu-tree":r.data,onComplete:g},null,8,["menu-tree"])]),_:1})])}}});const Rt=Y(pe,[["__scopeId","data-v-499bc687"]]);export{Rt as default};
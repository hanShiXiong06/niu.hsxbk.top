/* empty css             *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  */import"./index-1bbcede8.js";/* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                */import{a as T,E as $}from"./el-form-item-144bc604.js";/* empty css                  */import{t as o}from"./index-3862e13d.js";import{_ as S}from"./delivery-personnel-edit.vue_vue_type_style_index_0_lang-21b43636.js";import{n as M,o as R}from"./delivery-3b5821cf.js";import{u as j,a as U}from"./vue-router-9f815af7.js";import{E as I}from"./index-b74135ff.js";import{E as L}from"./index-6f670765.js";import{E as q}from"./index-5f2625ed.js";import{E as A}from"./index-c5af06c2.js";import{a as G,E as H}from"./index-6191b0b4.js";import{E as J}from"./index-cefc0b67.js";import{v as K}from"./directive-d226d53f.js";import{d as O,M as Q,r as b,b as y,e as W,q as a,p as i,f as n,u as l,x as m,v as u,L as X,m as Y}from"./runtime-core.esm-bundler-c17ab5bc.js";import"./common-a45d855f.js";import"./index-9ef6974e.js";import"./plugin-vue_export-helper-c018272e.js";import"./event-3e082a4a.js";import"./index-0d36ccbf.js";import"./el-main-03d12282.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-e42600b8.js";import"./el-overlay-380df695.js";import"./index-93efb1b5.js";import"./focus-trap-c0148071.js";import"./index-4b62c73a.js";import"./index-332680c2.js";import"./index-a6ffcea0.js";import"./index-138bfa06.js";import"./index-72bf6cb5.js";import"./_baseClone-37ba2e68.js";import"./aria-adfa05c5.js";import"./validator-f5e079db.js";import"./index-784d7581.js";import"./isEqual-ca98cf0c.js";import"./_isIterateeCall-797defa1.js";import"./debounce-196ce6a6.js";import"./index-bfecf17f.js";import"./index-b7b91fcb.js";import"./index-5c20ff8f.js";import"./strings-e72e60f7.js";const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"detail-head !m-0"},oe=n("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),ae={class:"ml-[1px]"},le=n("span",{class:"adorn"},"|",-1),re={class:"right"},ie={class:"mt-[10px]"},ne={class:"mt-[16px] flex justify-end"},mt=O({__name:"staff",setup(se){const x=j(),E=U(),C=x.meta.title,e=Q({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{deliver_name:"",deliver_mobile:""}}),v=b(),p=(s=1)=>{e.loading=!0,e.page=s,M({page:e.page,limit:e.limit,...e.searchParam}).then(t=>{e.loading=!1,e.data=t.data.data,e.total=t.data.total}).catch(()=>{e.loading=!1})};p();const d=b(null),k=()=>{d.value.setFormData(),d.value.showDialog=!0},D=s=>{d.value.setFormData(s),d.value.showDialog=!0},P=s=>{I.confirm(o("deliverDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{R(s).then(()=>{p()}).catch(()=>{})})},w=s=>{s&&(s.resetFields(),p())};return(s,t)=>{const c=L,g=q,_=T,F=$,h=A,f=G,V=H,B=J,z=K;return y(),W("div",Z,[a(h,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[n("div",ee,[n("div",te,[n("div",{class:"left",onClick:t[0]||(t[0]=r=>l(E).push("/shop/order/delivery"))},[oe,n("span",ae,m(l(o)("returnToPreviousPage")),1)]),le,n("span",re,m(l(C)),1)]),a(c,{type:"primary",onClick:k},{default:i(()=>[u(m(l(o)("addDeliveryPersonnel")),1)]),_:1})]),a(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[a(F,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:v},{default:i(()=>[a(_,{label:l(o)("deliverName"),prop:"deliver_name"},{default:i(()=>[a(g,{modelValue:e.searchParam.deliver_name,"onUpdate:modelValue":t[1]||(t[1]=r=>e.searchParam.deliver_name=r),placeholder:l(o)("deliverNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,{label:l(o)("deliverMobile"),prop:"deliver_mobile"},{default:i(()=>[a(g,{modelValue:e.searchParam.deliver_mobile,"onUpdate:modelValue":t[2]||(t[2]=r=>e.searchParam.deliver_mobile=r),placeholder:l(o)("deliverMobilePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,null,{default:i(()=>[a(c,{type:"primary",onClick:t[3]||(t[3]=r=>p())},{default:i(()=>[u(m(l(o)("search")),1)]),_:1}),a(c,{onClick:t[4]||(t[4]=r=>w(v.value))},{default:i(()=>[u(m(l(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n("div",ie,[X((y(),Y(V,{data:e.data,ref:"tableRef",size:"large"},{empty:i(()=>[n("span",null,m(e.loading?"":l(o)("emptyData")),1)]),default:i(()=>[a(f,{prop:"deliver_name",label:l(o)("deliverName")},null,8,["label"]),a(f,{prop:"deliver_mobile",label:l(o)("deliverMobile")},null,8,["label"]),a(f,{label:l(o)("operation"),fixed:"right",align:"right",width:"120"},{default:i(({row:r})=>[a(c,{type:"primary",link:"",onClick:N=>D(r)},{default:i(()=>[u(m(l(o)("edit")),1)]),_:2},1032,["onClick"]),a(c,{type:"primary",link:"",onClick:N=>P(r.deliver_id)},{default:i(()=>[u(m(l(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),n("div",ne,[a(B,{"current-page":e.page,"onUpdate:currentPage":t[5]||(t[5]=r=>e.page=r),"page-size":e.limit,"onUpdate:pageSize":t[6]||(t[6]=r=>e.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:t[7]||(t[7]=r=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1}),a(S,{ref_key:"editCategoryDialog",ref:d,onComplete:p},null,512)])}}});export{mt as default};
import"./base-0e92f4db.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  */import"./index-fac59425.js";/* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                */import{a as M,E as O}from"./el-form-item-c2dd2ffe.js";/* empty css                  *//* empty css                       */import{t}from"./index-2d1c7ba3.js";import{c as D}from"./notice-162d1c78.js";import{_ as H}from"./notice-records-info.vue_vue_type_script_setup_true_lang-93abd18b.js";import{u as K}from"./vue-router-8b032575.js";import{E as q}from"./index-8cefa3ab.js";import{a as G,b as A,E as J}from"./index-757074f4.js";import{E as Q}from"./index-d5039456.js";import{E as W}from"./index-e09a20f5.js";import{E as X}from"./index-2668a8ea.js";import{a as Z,E as ee}from"./index-395859da.js";import{E as te}from"./index-95382bd9.js";import{v as ae}from"./directive-c6f70b8e.js";import{d as oe,M as V,r as L,b as n,e as d,q as o,p as i,f,x as m,u as l,F as N,t as T,m as y,v as k,L as le,C as E}from"./runtime-core.esm-bundler-67034826.js";import"./common-46715e7e.js";import"./index-72686045.js";import"./event-a537c4cb.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-ebd2990f.js";import"./el-overlay-3eff2fc5.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";import"./index-e9d9b1a1.js";import"./index-ef31373f.js";import"./index-de22cd40.js";import"./index-66750d66.js";import"./strings-1130dd70.js";import"./isEqual-97c7f2d5.js";import"./debounce-f6ba9d12.js";import"./index-c6aa1547.js";import"./validator-9409f909.js";import"./index-fd563016.js";import"./index-b340b027.js";import"./_isIterateeCall-7d0e706f.js";const re={class:"main-container"},ie={class:"flex justify-between items-center"},ne={class:"text-[20px]"},me={class:"mt-[10px]"},se={key:0},pe={key:1},ce={key:2},de={class:"mt-[16px] flex justify-end"},ft=oe({__name:"notice_records",setup(ue){const F=K().meta.title,e=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",receiver:"",create_time:[]}}),h=V({buyer:{label:t("buyerNotice"),list:[]},seller:{label:t("sellerNotice"),list:[]}});(async()=>{await D().then(s=>{Object.keys(s.data).forEach(a=>{const b=s.data[a],p={value:a,name:b.name};b.receiver_type==0?h.buyer.list.push(p):h.seller.list.push(p)})}).catch(()=>{})})();const w=L(),u=(s=1)=>{e.loading=!0,e.page=s,D({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};u();const v=L(null),z=s=>{v.value.setFormData(s),v.value.showDialog=!0};return(s,a)=>{const b=q,p=M,x=G,B=A,U=J,$=Q,g=W,j=O,P=X,c=Z,R=ee,S=te,Y=ae;return n(),d("div",re,[o(P,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[f("div",ie,[f("span",ne,m(l(F)),1)]),o(P,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(j,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:w},{default:i(()=>[o(p,{label:l(t)("searchReceiver"),prop:"receiver"},{default:i(()=>[o(b,{modelValue:e.searchParam.receiver,"onUpdate:modelValue":a[0]||(a[0]=r=>e.searchParam.receiver=r),placeholder:l(t)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(p,{label:l(t)("noticeKey"),prop:"key"},{default:i(()=>[o(U,{modelValue:e.searchParam.key,"onUpdate:modelValue":a[1]||(a[1]=r=>e.searchParam.key=r),clearable:"",placeholder:l(t)("groupIdPlaceholder"),class:"input-width"},{default:i(()=>[o(x,{label:l(t)("selectPlaceholder"),value:""},null,8,["label"]),(n(!0),d(N,null,T(h,(r,_)=>(n(),y(B,{key:_,label:r.label},{default:i(()=>[(n(!0),d(N,null,T(r.list,(C,I)=>(n(),y(x,{label:C.name,value:C.value,key:I},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(p,{label:l(t)("createTime"),prop:"create_time"},{default:i(()=>[o($,{modelValue:e.searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=r=>e.searchParam.create_time=r),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),o(p,null,{default:i(()=>[o(g,{type:"primary",onClick:a[3]||(a[3]=r=>u())},{default:i(()=>[k(m(l(t)("search")),1)]),_:1}),o(g,{onClick:a[4]||(a[4]=r=>{var _;return(_=w.value)==null?void 0:_.resetFields()})},{default:i(()=>[k(m(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),f("div",me,[le((n(),y(R,{data:e.data,size:"large"},{empty:i(()=>[f("span",null,m(e.loading?"":l(t)("emptyData")),1)]),default:i(()=>[o(c,{prop:"name",label:l(t)("noticeKey"),"min-width":"120"},null,8,["label"]),o(c,{prop:"notice_type",label:l(t)("noticeType"),"min-width":"120"},{default:i(({row:r})=>[r.notice_type=="sms"?(n(),d("div",se,m(l(t)("sms")),1)):E("",!0),r.notice_type=="wechat"?(n(),d("div",pe,m(l(t)("wechat")),1)):E("",!0),r.notice_type=="weapp"?(n(),d("div",ce,m(l(t)("weapp")),1)):E("",!0)]),_:1},8,["label"]),o(c,{prop:"nickname",label:l(t)("nickname"),"min-width":"120"},null,8,["label"]),o(c,{prop:"receiver",label:l(t)("receiver"),"min-width":"120"},null,8,["label"]),o(c,{prop:"create_time",label:l(t)("createTime"),"min-width":"140"},null,8,["label"]),o(c,{label:l(t)("operation"),fixed:"right",align:"right",width:"100"},{default:i(({row:r})=>[o(g,{type:"primary",link:"",onClick:_=>z(r)},{default:i(()=>[k(m(l(t)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[Y,e.loading]]),f("div",de,[o(S,{"current-page":e.page,"onUpdate:currentPage":a[5]||(a[5]=r=>e.page=r),"page-size":e.limit,"onUpdate:pageSize":a[6]||(a[6]=r=>e.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[7]||(a[7]=r=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),o(H,{ref_key:"recordsDialog",ref:v,onComplete:u},null,512)]),_:1})])}}});export{ft as default};
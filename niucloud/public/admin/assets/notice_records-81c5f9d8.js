import{g as K,a4 as C,r as V,m as n,n as d,F as o,E as i,q as f,L as s,u as l,I as T,J as L,D as y,K as E,a1 as O,T as k}from"./base-45eb5090.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  */import"./index-ad71a852.js";import"./el-tooltip-58212670.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                     *//* empty css                  *//* empty css                       */import{t}from"./index-3694a2b2.js";import{c as N}from"./notice-fed9c625.js";import{_ as H}from"./notice-records-info.vue_vue_type_script_setup_true_lang-130fcdd9.js";import{u as M}from"./vue-router-fcbaaf02.js";import{E as q}from"./index-4ce9333e.js";import{a as G,E as J}from"./index-2bfbe5a7.js";import{a as A,b as Q,E as W}from"./index-cc9a73f0.js";import{E as X}from"./index-91e87b83.js";import{E as Z}from"./index-25c37860.js";import{E as ee}from"./index-fc3020f4.js";import{a as te,E as ae}from"./index-cbbcd330.js";import{E as oe}from"./index-e841b684.js";import{v as le}from"./directive-9f485fe5.js";import"./el-overlay-616d6124.js";import"./event-4977bef7.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./el-radio-2719e44c.js";import"./storage-4159d1ed.js";import"./index-9670e877.js";import"./index-3be486d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-avatar-bc58ad46.js";import"./index-aef37b98.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./_Uint8Array-e584e472.js";import"./_initCloneObject-983ff8c8.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./isEqual-f877b6c1.js";import"./flatten-0fc8b7eb.js";import"./index-f79599e2.js";import"./index-c0090d79.js";import"./_isIterateeCall-104f1f93.js";const re={class:"main-container"},ie={class:"flex justify-between items-center"},ne={class:"text-[20px]"},se={class:"mt-[10px]"},me={key:0},pe={key:1},ce={key:2},de={class:"mt-[16px] flex justify-end"},dt=K({__name:"notice_records",setup(ue){const F=M().meta.title,e=C({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",receiver:"",create_time:[]}}),h=C({buyer:{label:t("buyerNotice"),list:[]},seller:{label:t("sellerNotice"),list:[]}});(async()=>{await N().then(m=>{Object.keys(m.data).forEach(a=>{const b=m.data[a],p={value:a,name:b.name};b.receiver_type==0?h.buyer.list.push(p):h.seller.list.push(p)})}).catch(()=>{})})();const w=V(),u=(m=1)=>{e.loading=!0,e.page=m,N({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};u();const v=V(null),z=m=>{v.value.setFormData(m),v.value.showDialog=!0};return(m,a)=>{const b=q,p=G,x=A,B=Q,U=W,$=X,g=Z,j=J,P=ee,c=te,I=ae,R=oe,S=le;return n(),d("div",re,[o(P,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[f("div",ie,[f("span",ne,s(l(F)),1)]),o(P,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(j,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:w},{default:i(()=>[o(p,{label:l(t)("searchReceiver"),prop:"receiver"},{default:i(()=>[o(b,{modelValue:e.searchParam.receiver,"onUpdate:modelValue":a[0]||(a[0]=r=>e.searchParam.receiver=r),placeholder:l(t)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(p,{label:l(t)("noticeKey"),prop:"key"},{default:i(()=>[o(U,{modelValue:e.searchParam.key,"onUpdate:modelValue":a[1]||(a[1]=r=>e.searchParam.key=r),clearable:"",placeholder:l(t)("groupIdPlaceholder"),class:"input-width"},{default:i(()=>[o(x,{label:l(t)("selectPlaceholder"),value:""},null,8,["label"]),(n(!0),d(T,null,L(h,(r,_)=>(n(),y(B,{key:_,label:r.label},{default:i(()=>[(n(!0),d(T,null,L(r.list,(D,Y)=>(n(),y(x,{label:D.name,value:D.value,key:Y},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(p,{label:l(t)("createTime"),prop:"create_time"},{default:i(()=>[o($,{modelValue:e.searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=r=>e.searchParam.create_time=r),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),o(p,null,{default:i(()=>[o(g,{type:"primary",onClick:a[3]||(a[3]=r=>u())},{default:i(()=>[E(s(l(t)("search")),1)]),_:1}),o(g,{onClick:a[4]||(a[4]=r=>{var _;return(_=w.value)==null?void 0:_.resetFields()})},{default:i(()=>[E(s(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),f("div",se,[O((n(),y(I,{data:e.data,size:"large"},{empty:i(()=>[f("span",null,s(e.loading?"":l(t)("emptyData")),1)]),default:i(()=>[o(c,{prop:"name",label:l(t)("noticeKey"),"min-width":"120"},null,8,["label"]),o(c,{prop:"notice_type",label:l(t)("noticeType"),"min-width":"120"},{default:i(({row:r})=>[r.notice_type=="sms"?(n(),d("div",me,s(l(t)("sms")),1)):k("",!0),r.notice_type=="wechat"?(n(),d("div",pe,s(l(t)("wechat")),1)):k("",!0),r.notice_type=="weapp"?(n(),d("div",ce,s(l(t)("weapp")),1)):k("",!0)]),_:1},8,["label"]),o(c,{prop:"nickname",label:l(t)("nickname"),"min-width":"120"},null,8,["label"]),o(c,{prop:"receiver",label:l(t)("receiver"),"min-width":"120"},null,8,["label"]),o(c,{prop:"create_time",label:l(t)("createTime"),"min-width":"140"},null,8,["label"]),o(c,{label:l(t)("operation"),fixed:"right",width:"100"},{default:i(({row:r})=>[o(g,{type:"primary",link:"",onClick:_=>z(r)},{default:i(()=>[E(s(l(t)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[S,e.loading]]),f("div",de,[o(R,{"current-page":e.page,"onUpdate:currentPage":a[5]||(a[5]=r=>e.page=r),"page-size":e.limit,"onUpdate:pageSize":a[6]||(a[6]=r=>e.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[7]||(a[7]=r=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),o(H,{ref_key:"recordsDialog",ref:v,onComplete:u},null,512)]),_:1})])}}});export{dt as default};

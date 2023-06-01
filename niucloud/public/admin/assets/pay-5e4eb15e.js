import"./base-962c0c23.js";/* empty css                   *//* empty css                *//* empty css               */import{s as ElSwitch}from"./index-6ef4c1c3.js";/* empty css                  */import{t}from"./index-e4761856.js";import{K as getPayConfigList,L as setPatConfig}from"./sys-3f5fc53f.js";import{_ as _sfc_main$1}from"./pay-wechatpay.vue_vue_type_script_setup_true_lang-7a6130be.js";import{_ as _sfc_main$2}from"./pay-alipay.vue_vue_type_script_setup_true_lang-20cc16fc.js";import{d as img}from"./storage-abe718b1.js";import{S as Sortable}from"./sortable.esm-be94e56d.js";import{u as useRoute}from"./vue-router-79053937.js";import{a as ElMessage}from"./index-d57cc47d.js";import{E as ElButton}from"./index-bba9e58c.js";import{E as ElTag}from"./index-4f5c40a5.js";import{E as ElCard}from"./index-69523418.js";import{v as vLoading}from"./directive-c0c3e9a3.js";import{d as defineComponent,r as ref,w as watch,A as nextTick,L as withDirectives,u as unref,b as openBlock,m as createBlock,p as withCtx,e as createElementBlock,f as createBaseVNode,x as toDisplayString,q as createVNode,i as isRef,v as createTextVNode,C as createCommentVNode,F as Fragment,t as renderList}from"./runtime-core.esm-bundler-dc7a07d7.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-c27b6911.js";import"./el-overlay-60700377.js";import"./event-ff03ec12.js";import"./index-5d86eb33.js";import"./focus-trap-b8b5a003.js";/* empty css                 */import"./el-radio-bfd4b1ad.js";import"./index-8bcaafa6.js";import"./index-93f2c618.js";import"./index-7a123a20.js";import"./el-tooltip-58212670.js";import"./el-avatar-3bb47ce2.js";import"./common-6291c908.js";import"./common-2cf17469.js";/* empty css                     */import"./index.vue_vue_type_style_index_0_lang-de330f14.js";/* empty css                    */import"./index-a9dd5cf5.js";import"./index-61c777fa.js";import"./_Uint8Array-6ff3cafa.js";import"./_initCloneObject-28e6bdaa.js";const _hoisted_1={key:0,class:"flex justify-between items-center"},_hoisted_2={class:"text-[24px]"},_hoisted_3={class:"flex mb-3"},_hoisted_4={class:"text-base"},_hoisted_5={class:"pay-table"},_hoisted_6={class:"flex items-center pay-table-head table-bg table-item-pd table-item-border justify-between table-bg"},_hoisted_7={class:"text-base text-[#999] w-[150px]"},_hoisted_8={class:"text-base text-[#999] w-[110px] text-center"},_hoisted_9={key:0,class:"text-base text-[#999] w-[80px] text-center"},_hoisted_10=["data-key"],_hoisted_11=["id"],_hoisted_12={class:"table-item-flex w-[150px]"},_hoisted_13={key:0,class:"iconfont icontuodong mr-2 handle cursor-pointer"},_hoisted_14={class:"flex items-center select-none"},_hoisted_15={class:"mr-[15px] w-[30px] h-[30px]"},_hoisted_16=["src"],_hoisted_17={class:"text-base text-[#666]"},_hoisted_18={class:"table-item-flex w-[110px] justify-center select-none"},_hoisted_19={key:1},_hoisted_20={key:0,class:"table-item-flex w-[80px] justify-center select-none"},_hoisted_21=["onClick"],_hoisted_22={key:1},_hoisted_23={key:1,class:"fixed-footer-wrap"},_hoisted_24={class:"fixed-footer"},_sfc_main=defineComponent({__name:"pay",setup(__props){const route=useRoute(),pageName=route.meta.title,wechatpayDialog=ref(null),alipayDialog=ref(null);let payLoading=ref(!0),isEdit=ref(!1);const setConfigBtn=ref(),payConfigData=ref([]),checkPayConfigList=()=>{getPayConfigList().then(e=>{let o=e.data;for(let a in o){let s=o[a].pay_type,n=[],l="";s.forEach((i,c)=>{i.redio_key=o[a].key+"_"+i.key,i.defauit_key="",i.is_default==1&&(l=i.redio_key),i.status=Boolean(i.status),n.push(i)}),o[o[a].key].default_pay_type=l,o[o[a].key].pay_type=n}payConfigData.value=o,payLoading.value=!1,nextTick(()=>{fieldBoxRefs.value.forEach((a,s)=>{sortableFn(a)})})}).catch(()=>{})};checkPayConfigList();const setConfigInfo=e=>{payConfigData.value[e.channel].pay_type.forEach(o=>{o.key==e.type&&(o.config=e.config)})},configPayFn=data=>{eval(data.key+"Dialog.value.setFormData(data)"),eval(data.key+"Dialog.value.showDialog = true;")},enablePaymentMode=e=>{var o,a;if(e.key=="wechatpay"&&!((o=e==null?void 0:e.config)!=null&&o.mch_secret_cert)||e.key=="alipay"&&!((a=e==null?void 0:e.config)!=null&&a.alipay_root_cert_path))return e.status=!1,ElMessage(t("configurePaymentMethod")),!1},fieldBoxRefs=ref([]);watch(isEdit,(e,o)=>{e&&nextTick(()=>{fieldBoxRefs.value.forEach((a,s)=>{sortableFn(a)})})});const sortableFn=(e,o)=>{Sortable.create(e,{group:{put:!1},handle:".handle",animation:200,disabled:!1,onEnd:a=>{let s=a.target.getAttribute("data-key"),n=payConfigData.value[s].pay_type;n.splice(a.newIndex,0,...n.splice(a.oldIndex,1))}})},saveFn=()=>{payLoading.value=!0;let e=JSON.parse(JSON.stringify(payConfigData.value));Object.values(e).forEach((o,a)=>{o.pay_type.forEach((s,n)=>{s.sort=n,s.status=Number(s.status)})}),setPatConfig({config:e}).then(o=>{checkPayConfigList(),isEdit.value=!1,payLoading.value=!1})},cancelFn=()=>{location.reload()};return(e,o)=>{const a=ElButton,s=ElSwitch,n=ElTag,l=ElCard,i=vLoading;return withDirectives((openBlock(),createBlock(l,{class:"box-card !border-none",shadow:"never"},{default:withCtx(()=>[unref(payLoading)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("span",_hoisted_2,toDisplayString(unref(pageName)),1),createVNode(a,{type:"primary",onClick:o[0]||(o[0]=c=>isRef(isEdit)?isEdit.value=!0:isEdit=!0),ref_key:"setConfigBtn",ref:setConfigBtn},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("setConfig")),1)]),_:1},512)])),(openBlock(!0),createElementBlock(Fragment,null,renderList(payConfigData.value,(c,d)=>(openBlock(),createBlock(l,{class:"box-card box-pay-card !border-none mt-[20px]",shadow:"never",key:d},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3,[createBaseVNode("span",_hoisted_4,toDisplayString(c.name),1)]),createBaseVNode("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,[createBaseVNode("span",_hoisted_7,toDisplayString(unref(t)("payType")),1),createBaseVNode("span",_hoisted_8,toDisplayString(unref(t)("onState")),1),unref(isEdit)?(openBlock(),createElementBlock("span",_hoisted_9,toDisplayString(unref(t)("templateName")),1)):createCommentVNode("",!0)]),createBaseVNode("div",{ref_for:!0,ref_key:"fieldBoxRefs",ref:fieldBoxRefs,"data-key":d},[(openBlock(!0),createElementBlock(Fragment,null,renderList(c.pay_type,(r,_)=>(openBlock(),createElementBlock("div",{key:r.redio_key,class:"flex table-item-border table-item-pd justify-between",id:d+"_"+_},[createBaseVNode("div",_hoisted_12,[unref(isEdit)?(openBlock(),createElementBlock("span",_hoisted_13)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_14,[createBaseVNode("div",_hoisted_15,[createBaseVNode("img",{class:"w-[30px]",src:unref(img)(r.icon)},null,8,_hoisted_16)]),createBaseVNode("span",_hoisted_17,toDisplayString(r.name),1)])]),createBaseVNode("div",_hoisted_18,[unref(isEdit)?(openBlock(),createBlock(s,{key:0,modelValue:r.status,"onUpdate:modelValue":p=>r.status=p,"active-text":unref(t)("isEnable"),onChange:p=>enablePaymentMode(r)},null,8,["modelValue","onUpdate:modelValue","active-text","onChange"])):(openBlock(),createElementBlock("div",_hoisted_19,[r.status?(openBlock(),createBlock(n,{key:0,class:"ml-2",type:"success"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("open")),1)]),_:1})):(openBlock(),createBlock(n,{key:1,class:"ml-2",type:"info"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("notOpen")),1)]),_:1}))]))]),unref(isEdit)?(openBlock(),createElementBlock("div",_hoisted_20,[r.key!="balancepay"?(openBlock(),createElementBlock("button",{key:0,onClick:p=>configPayFn(r),class:"text-base"},toDisplayString(unref(t)("clickConfigure")),9,_hoisted_21)):(openBlock(),createElementBlock("button",_hoisted_22,"--"))])):createCommentVNode("",!0)],8,_hoisted_11))),128))],8,_hoisted_10)])]),_:2},1024))),128)),unref(isEdit)?(openBlock(),createElementBlock("div",_hoisted_23,[createBaseVNode("div",_hoisted_24,[createVNode(a,{type:"primary",loading:e.loading,onClick:cancelFn},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("cancel")),1)]),_:1},8,["loading"]),createVNode(a,{type:"primary",loading:e.loading,onClick:o[1]||(o[1]=c=>saveFn(e.formRef))},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("save")),1)]),_:1},8,["loading"])])])):createCommentVNode("",!0),createVNode(_sfc_main$1,{ref_key:"wechatpayDialog",ref:wechatpayDialog,onComplete:setConfigInfo},null,512),createVNode(_sfc_main$2,{ref_key:"alipayDialog",ref:alipayDialog,onComplete:setConfigInfo},null,512)]),_:1})),[[i,unref(payLoading)]])}}}),pay_vue_vue_type_style_index_0_scoped_e1e08dd0_lang="",pay=_export_sfc(_sfc_main,[["__scopeId","data-v-e1e08dd0"]]);export{pay as default};

/* empty css             *//* empty css                   */import{a as D,E as S}from"./el-form-item-144bc604.js";/* empty css                          *//* empty css                  */import"./index-d5447f06.js";/* empty css                       *//* empty css                 *//* empty css                *//* empty css                    *//* empty css                 */import{t as l}from"./index-ebefdd26.js";import{c as G,e as $}from"./order-42c6f6ce.js";import{u as q}from"./vue-router-9f815af7.js";import{E as z}from"./index-5f2625ed.js";import{E as A,a as H}from"./index-784d7581.js";import{E as J}from"./index-c5af06c2.js";import{E as K,b as M}from"./index-6ff31475.js";import{E as Q}from"./index-9ef6974e.js";import{E as W}from"./index-6f670765.js";import{v as X}from"./directive-d226d53f.js";import{d as Y,r as b,V as Z,b as f,e as V,f as i,x as s,u as n,L as ee,m as I,p as a,q as o,v as p,F as le,t as oe,n as te,C as L}from"./runtime-core.esm-bundler-c17ab5bc.js";import"./plugin-vue_export-helper-c018272e.js";import"./event-3e082a4a.js";import"./_baseClone-37ba2e68.js";import"./common-a45d855f.js";import"./index-0d36ccbf.js";import"./el-main-03d12282.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-e42600b8.js";import"./el-overlay-380df695.js";import"./index-93efb1b5.js";import"./focus-trap-c0148071.js";import"./index-4b62c73a.js";import"./index-332680c2.js";/* empty css                  */import"./index-a6ffcea0.js";import"./index-138bfa06.js";import"./index-72bf6cb5.js";import"./isEqual-ca98cf0c.js";const ne={class:"main-container pt-[20px]"},ae={class:"flex ml-[18px] justify-between items-center"},se={class:"text-[20px]"},ie={class:"panel-title !text-sm pl-[15px]"},re={class:"!text-sm"},ue={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},de={class:"panel-title !text-sm pl-[15px]"},pe={class:"!text-sm"},me={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},_e={class:"panel-title !text-sm pl-[15px]"},ce={class:"!text-sm"},ve={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},fe={class:"panel-title !text-sm pl-[15px]"},he={class:"panel-title !text-sm pl-[15px]"},xe={class:"flex"},ge={class:"mx-[10px]"},be={class:"mr-[10px]"},Ve={key:0,class:"fixed-footer-wrap"},Ee={class:"fixed-footer"},fl=Y({__name:"config",setup(we){const U=q().meta.title,t=b({close_length:"10",finish_length:"1",invoice_content:[""],invoice_type:[],is_close:"1",is_finish:"1",is_invoice:"1",no_allow_refund:"1",refund_length:"1",is_evaluate:1,evaluate_is_to_examine:1,evaluate_is_show:1}),R=b({close_length:[{validator:(m,e,r)=>t.value.is_close!="2"?e==""?r(new Error(l("CloseLengthPlaceholder"))):Number(e)>=10&&Number(e)<=1440?r():r(new Error(l("closeOrderInfoBottom"))):r(),trigger:"blur"}],finish_length:[{validator:(m,e,r)=>t.value.is_finish!="2"?e==""?r(new Error(l("finishLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?r():r(new Error(l("confirmBottom"))):r(),trigger:"blur"}],refund_length:[{validator:(m,e,r)=>t.value.no_allow_refund!="2"?e==""?r(new Error(l("validRefundLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?r():r(new Error(l("refundBottom"))):r(),trigger:"blur"}],invoice_content:[{validator:(m,e,r)=>t.value.is_invoice==="1"&&e.some(d=>d==="")?r(new Error(l("invoicePlaceholder1"))):r(),trigger:"blur"}],invoice_type:[{validator:(m,e,r)=>t.value.is_invoice==="1"?e.length?r():r(new Error(l("invoiceTypePlaceholder"))):r(),trigger:"change"}]}),c=b(!1),E=()=>{c.value=!0,G().then(m=>{Object.values(m.data).forEach(e=>{t.value=Object.assign(t.value,e)}),t.value.invoice_content.length||t.value.invoice_content.push(""),c.value=!1}).catch(()=>{c.value=!1})},B=()=>{t.value.invoice_content.push("")},N=m=>{t.value.invoice_content.splice(m,1)};E();const w=b(),O=async m=>{await m.validate(async e=>{e&&(c.value=!0,$(t.value).then(r=>{E()}).catch(()=>{c.value=!1}))})};return(m,e)=>{const r=z,d=D,h=A,x=J,_=K,g=M,F=Z("CircleCloseFilled"),T=Q,C=W,k=H,P=S,j=X;return f(),V("div",ne,[i("div",ae,[i("span",se,s(n(U)),1)]),ee((f(),I(P,{model:t.value,"label-width":"95",ref_key:"formRef",ref:w,rules:R.value,class:"page-form"},{default:a(()=>[o(x,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",ie,s(n(l)("closeOrderInfo")),1),o(d,{prop:"close_length"},{default:a(()=>[i("div",null,[i("p",re,[i("span",null,s(n(l)("closeOrderInfoLeft")),1),o(r,{modelValue:t.value.close_length,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value.close_length=u),class:"!w-[120px] mx-[10px]",onkeyup:"this.value = this.value.replace(/[^\\d]/g,'');",clearable:""},null,8,["modelValue"]),i("span",null,s(n(l)("closeOrderInfoRight")),1)]),i("p",ue,s(n(l)("closeOrderInfoBottom")),1)])]),_:1}),o(d,{prop:"is_close"},{default:a(()=>[o(h,{modelValue:t.value.is_close,"onUpdate:modelValue":e[1]||(e[1]=u=>t.value.is_close=u),label:n(l)("isClose"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),o(x,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",de,s(n(l)("confirm")),1),o(d,{prop:"finish_length"},{default:a(()=>[i("div",null,[i("p",pe,[i("span",null,s(n(l)("confirmLeft")),1),o(r,{modelValue:t.value.finish_length,"onUpdate:modelValue":e[2]||(e[2]=u=>t.value.finish_length=u),class:"!w-[120px] mx-[10px]",onkeyup:"this.value = this.value.replace(/[^\\d]/g,'');",clearable:""},null,8,["modelValue"]),i("span",null,s(n(l)("confirmRight")),1)]),i("p",me,s(n(l)("confirmBottom")),1)])]),_:1}),o(d,{prop:"is_finish"},{default:a(()=>[o(h,{modelValue:t.value.is_finish,"onUpdate:modelValue":e[3]||(e[3]=u=>t.value.is_finish=u),label:n(l)("isFinish"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),o(x,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",_e,s(n(l)("refund")),1),o(d,{prop:"refund_length"},{default:a(()=>[i("div",null,[i("p",ce,[i("span",null,s(n(l)("refundLeft")),1),o(r,{modelValue:t.value.refund_length,"onUpdate:modelValue":e[4]||(e[4]=u=>t.value.refund_length=u),class:"!w-[120px] mx-[10px]",onkeyup:"this.value = this.value.replace(/[^\\d]/g,'');",clearable:""},null,8,["modelValue"]),i("span",null,s(n(l)("refundRight")),1)]),i("p",ve,s(n(l)("refundBottom")),1)])]),_:1}),o(d,{prop:"no_allow_refund"},{default:a(()=>[o(h,{modelValue:t.value.no_allow_refund,"onUpdate:modelValue":e[5]||(e[5]=u=>t.value.no_allow_refund=u),label:n(l)("noAllowRefund"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),o(x,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",fe,s(n(l)("evaluate")),1),o(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(n(l)("isEvaluate")),1),o(g,{class:"mx-[10px]",modelValue:t.value.is_evaluate,"onUpdate:modelValue":e[6]||(e[6]=u=>t.value.is_evaluate=u)},{default:a(()=>[o(_,{label:1},{default:a(()=>[p(s(n(l)("isEvaluateOpen")),1)]),_:1}),o(_,{label:0},{default:a(()=>[p(s(n(l)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(n(l)("evaluateIsToExamine")),1),o(g,{class:"mx-[10px]",modelValue:t.value.evaluate_is_to_examine,"onUpdate:modelValue":e[7]||(e[7]=u=>t.value.evaluate_is_to_examine=u)},{default:a(()=>[o(_,{label:1},{default:a(()=>[p(s(n(l)("isEvaluateOpen")),1)]),_:1}),o(_,{label:0},{default:a(()=>[p(s(n(l)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(n(l)("evaluateIsShow")),1),o(g,{class:"mx-[10px]",modelValue:t.value.evaluate_is_show,"onUpdate:modelValue":e[8]||(e[8]=u=>t.value.evaluate_is_show=u)},{default:a(()=>[o(_,{label:1},{default:a(()=>[p(s(n(l)("isEvaluateOpen")),1)]),_:1}),o(_,{label:0},{default:a(()=>[p(s(n(l)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(x,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",he,s(n(l)("invoice")),1),o(d,null,{default:a(()=>[i("span",null,s(n(l)("isInvoice")),1),o(g,{class:"mx-[10px]",modelValue:t.value.is_invoice,"onUpdate:modelValue":e[9]||(e[9]=u=>t.value.is_invoice=u)},{default:a(()=>[o(_,{label:"2"},{default:a(()=>[p(s(n(l)("isInvoiceClose")),1)]),_:1}),o(_,{label:"1"},{default:a(()=>[p(s(n(l)("isInvoiceOpen")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{prop:"invoice_content"},{default:a(()=>[i("div",xe,[i("div",null,s(n(l)("invoiceContent")),1),i("div",ge,[(f(!0),V(le,null,oe(t.value.invoice_content,(u,v)=>(f(),V("div",{class:te(["w-[120px] relative",v?"mt-[15px]":""]),key:v},[o(r,{modelValue:t.value.invoice_content[v],"onUpdate:modelValue":y=>t.value.invoice_content[v]=y,class:"!w-[120px]",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),v?(f(),I(T,{key:0,color:"rgba(0, 0, 0, 0.3)",class:"!absolute right-[-6px] top-[-5px]",onClick:y=>N(v)},{default:a(()=>[o(F)]),_:2},1032,["onClick"])):L("",!0)],2))),128))]),o(C,{onClick:B},{default:a(()=>[p(s(n(l)("insert")),1)]),_:1})])]),_:1}),o(d,{prop:"invoice_type"},{default:a(()=>[i("span",be,s(n(l)("invoiceType")),1),o(k,{modelValue:t.value.invoice_type,"onUpdate:modelValue":e[10]||(e[10]=u=>t.value.invoice_type=u)},{default:a(()=>[o(h,{label:"1"},{default:a(()=>[p(s(n(l)("electronicInvoice")),1)]),_:1}),o(h,{label:"2"},{default:a(()=>[p(s(n(l)("paperInvoice")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[j,c.value]]),c.value?L("",!0):(f(),V("div",Ve,[i("div",Ee,[o(C,{type:"primary",onClick:e[11]||(e[11]=u=>O(w.value))},{default:a(()=>[p(s(n(l)("save")),1)]),_:1})])]))])}}});export{fl as default};
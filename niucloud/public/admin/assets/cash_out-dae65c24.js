import{g as A,r as g,a4 as E,m as i,n as x,q as b,L as m,u as s,a1 as I,D as u,E as o,F as n,T as f,K as _,I as O,J as S}from"./base-45eb5090.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                    */import{E as G,b as H}from"./el-radio-2719e44c.js";/* empty css                 */import{s as L}from"./index-341914e3.js";import{t as l}from"./index-047041cb.js";import{b as W,H as j,I as P}from"./member-35eedf02.js";import{u as q}from"./vue-router-fcbaaf02.js";import{a as J,E as K}from"./index-c4fd4c9d.js";import{E as M}from"./index-4ce9333e.js";import{E as $,a as Q}from"./index-c0090d79.js";import{E as X}from"./index-fc3020f4.js";import{E as Y}from"./index-25c37860.js";import{v as Z}from"./directive-9f485fe5.js";import"./event-4977bef7.js";import"./el-overlay-616d6124.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./storage-4159d1ed.js";import"./index-9670e877.js";import"./index-3be486d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-tooltip-58212670.js";import"./el-avatar-bc58ad46.js";import"./index-aef37b98.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./castArray-df7eff2c.js";import"./_Uint8Array-e584e472.js";import"./_initCloneObject-983ff8c8.js";import"./isEqual-f877b6c1.js";import"./flatten-0fc8b7eb.js";const ee={class:"main-container"},te={class:"flex ml-[18px] justify-between items-center mt-[20px]"},oe={class:"text-[20px]"},ae=b("span",{class:"ml-2"},"%",-1),re={class:"fixed-footer-wrap"},le={class:"fixed-footer"},Me=A({__name:"cash_out",setup(se){const k=q().meta.title,c=g(!0),y=g(),t=E({is_auto_transfer:"0",is_auto_verify:"0",is_open:"0",min:"0.01",rate:"0",transfer_type:[]}),h=g([]);(async()=>{h.value=await(await W()).data})(),(async(p=0)=>{const e=await(await j()).data;Object.keys(t).forEach(a=>{e[a]!=null&&(t[a]=e[a])}),t.is_open=Boolean(Number(t.is_open)),c.value=!1})();const C=E({min:[{validator:(p,e,a)=>{Number(e)<.01?a(new Error(l("cashWithdrawalAmountHint"))):a()},trigger:"blur"}],rate:[{validator:(p,e,a)=>{Number(e)>100||Number(e)<0?a(new Error(l("commissionRatioHint"))):a()},trigger:"blur"}]}),R=async p=>{c.value||!p||await p.validate(e=>{if(e){let a={...t};a.is_open=Number(a.is_open).toString(),P(a).then(()=>{c.value=!1}).catch(()=>{c.value=!1})}})};return(p,e)=>{const a=L,d=J,V=M,v=G,w=H,F=$,N=Q,T=X,B=K,D=Y,U=Z;return i(),x("div",ee,[b("div",te,[b("span",oe,m(s(k)),1)]),I((i(),u(B,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:y,rules:C,class:"page-form"},{default:o(()=>[n(T,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[n(d,{label:s(l)("isOpen")},{default:o(()=>[n(a,{modelValue:t.is_open,"onUpdate:modelValue":e[0]||(e[0]=r=>t.is_open=r)},null,8,["modelValue"])]),_:1},8,["label"]),t.is_open?(i(),u(d,{key:0,label:s(l)("cashWithdrawalAmount"),prop:"min"},{default:o(()=>[n(V,{modelValue:t.min,"onUpdate:modelValue":e[1]||(e[1]=r=>t.min=r),class:"w-60",type:"number",placeholder:s(l)("cashWithdrawalAmountPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),u(d,{key:1,label:s(l)("commissionRatio"),prop:"rate"},{default:o(()=>[n(V,{modelValue:t.rate,"onUpdate:modelValue":e[2]||(e[2]=r=>t.rate=r),type:"number",class:"w-60",placeholder:s(l)("commissionRatioPlaceholder")},null,8,["modelValue","placeholder"]),ae]),_:1},8,["label"])):f("",!0),t.is_open?(i(),u(d,{key:2,label:s(l)("audit"),class:"items-center"},{default:o(()=>[n(w,{modelValue:t.is_auto_verify,"onUpdate:modelValue":e[3]||(e[3]=r=>t.is_auto_verify=r)},{default:o(()=>[n(v,{label:"0",size:"large"},{default:o(()=>[_(m(s(l)("manualAudit")),1)]),_:1}),n(v,{label:"1",size:"large"},{default:o(()=>[_(m(s(l)("automaticAudit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),u(d,{key:3,label:s(l)("transfer"),class:"items-center"},{default:o(()=>[n(w,{modelValue:t.is_auto_transfer,"onUpdate:modelValue":e[4]||(e[4]=r=>t.is_auto_transfer=r)},{default:o(()=>[n(v,{label:"0",size:"large"},{default:o(()=>[_(m(s(l)("manualTransfer")),1)]),_:1}),n(v,{label:"1",size:"large"},{default:o(()=>[_(m(s(l)("automatedTransit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),u(d,{key:4,label:s(l)("transferMode"),class:"items-center"},{default:o(()=>[n(N,{modelValue:t.transfer_type,"onUpdate:modelValue":e[5]||(e[5]=r=>t.transfer_type=r),size:"large"},{default:o(()=>[(i(!0),x(O,null,S(h.value,(r,z)=>(i(),u(F,{label:r.key,key:"a"+z},{default:o(()=>[_(m(r.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0)]),_:1})]),_:1},8,["model","rules"])),[[U,c.value]]),b("div",re,[b("div",le,[n(D,{type:"primary",onClick:e[6]||(e[6]=r=>R(y.value))},{default:o(()=>[_(m(s(l)("save")),1)]),_:1})])])])}}});export{Me as default};

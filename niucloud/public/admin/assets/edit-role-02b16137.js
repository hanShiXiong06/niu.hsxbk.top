import"./base-0e92f4db.js";/* empty css                   */import{E as K}from"./el-overlay-3eff2fc5.js";import{a as L,E as J}from"./el-form-item-c2dd2ffe.js";import{G as z,H as Q,I as W,J as X}from"./index-fac59425.js";/* empty css                *//* empty css                    *//* empty css                  *//* empty css                 *//* empty css                 */import{t}from"./index-2d1c7ba3.js";import{e as Y}from"./common-46715e7e.js";import{E as Z}from"./index-8cefa3ab.js";import{E as ee,b as le}from"./index-9aa10ae4.js";import{E as oe}from"./index-fd563016.js";import{E as te}from"./index-e09a20f5.js";import{E as ae}from"./index-e63aa950.js";import{E as re}from"./index-de22cd40.js";import{v as se}from"./directive-c6f70b8e.js";import{d as ne,r as c,w as ie,af as ue,M as me,c as de,b as D,m as N,p as i,f as w,q as r,v as h,x as b,u as s,L as ce}from"./runtime-core.esm-bundler-67034826.js";import"./event-a537c4cb.js";import"./index-72686045.js";import"./index-defed8ff.js";import"./focus-trap-83769a43.js";import"./index-6cae7119.js";import"./index-d87ae4a2.js";import"./vue-router-8b032575.js";import"./index-81f2aa1e.js";import"./el-main-7a89c415.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-ebd2990f.js";/* empty css                  */import"./index-e9d9b1a1.js";import"./index-ef31373f.js";import"./isEqual-97c7f2d5.js";import"./index-97d638b4.js";const pe={class:"flex items-center justify-between w-11/12"},fe={class:"dialog-footer"},Ye=ne({__name:"edit-role",emits:["complete"],setup(_e,{expose:O,emit:U}){const _=c(!1),d=c(!1),g=c(!0);let k="";const f=c([]);z().then(l=>{f.value=l.data});const v=c(!1),E=c(!1),p=c(null);ie(v,()=>{v.value?p.value.setCheckedNodes(ue(f.value)):p.value.setCheckedNodes([])});const F=Y(l=>{a.rules=p.value.getCheckedKeys()}),S=()=>{g.value?(y(f.value),g.value=!1):(B(f.value),g.value=!0)},B=l=>{Object.keys(l).forEach(e=>{p.value.store.nodesMap[l[e].menu_key].expanded=!0,l[e].children&&l[e].children.length>0&&y(l[e].children)})},y=l=>{Object.keys(l).forEach(e=>{p.value.store.nodesMap[l[e].menu_key].expanded=!1,l[e].children&&l[e].children.length>0&&y(l[e].children)})},x={role_id:0,role_name:"",status:1,rules:[]},a=me({...x}),C=c(),I=de(()=>({role_name:[{required:!0,message:t("roleNamePlaceholder"),trigger:"blur"}],rules:[{validator:(l,e,o)=>{e.length?o():o(new Error(t("rulesPlaceholder")))},trigger:"blur"}]})),M=async l=>{if(d.value||!l)return;const e=a.role_id?Q:W;await l.validate(async o=>{if(o){d.value=!0;const u=Object.assign({},a);u.rules=u.rules.concat(p.value.getHalfCheckedKeys()),e(u).then(n=>{d.value=!1,_.value=!1,U("complete")}).catch(()=>{d.value=!1})}})},T=async(l=null)=>{if(d.value=!0,v.value=!1,Object.assign(a,x),k=t("addRole"),l){k=t("updateRole");const e=await(await X(l.role_id)).data;Object.keys(a).forEach(o=>{if(e[o]!=null)if(o=="rules"){e.rules;var u=[];Object.keys(e.rules).forEach(n=>{R(e.rules[n],f.value,u)}),a[o]=u}else a[o]=e[o]})}d.value=!1};function R(l,e,o){Object.keys(e).forEach(u=>{let n=e[u];n.menu_key==l?(!n.children||n.children.length==0)&&o.push(n.menu_key):n.children&&n.children.length>0&&R(l,n.children,o)})}return O({showDialog:_,setFormData:T}),(l,e)=>{const o=Z,u=L,n=ee,A=le,j=oe,V=te,P=ae,$=re,q=J,G=K,H=se;return D(),N(G,{modelValue:_.value,"onUpdate:modelValue":e[7]||(e[7]=m=>_.value=m),title:s(k),width:"500px","destroy-on-close":!0},{footer:i(()=>[w("span",fe,[r(V,{onClick:e[5]||(e[5]=m=>_.value=!1)},{default:i(()=>[h(b(s(t)("cancel")),1)]),_:1}),r(V,{type:"primary",loading:d.value,onClick:e[6]||(e[6]=m=>M(C.value))},{default:i(()=>[h(b(s(t)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[ce((D(),N(q,{model:a,"label-width":"90px",ref_key:"formRef",ref:C,rules:s(I),class:"page-form"},{default:i(()=>[r(u,{label:s(t)("roleName"),prop:"role_name"},{default:i(()=>[r(o,{modelValue:a.role_name,"onUpdate:modelValue":e[0]||(e[0]=m=>a.role_name=m),placeholder:s(t)("roleNamePlaceholder"),clearable:"",disabled:a.uid,class:"input-width",maxlength:"10","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),r(u,{label:s(t)("status")},{default:i(()=>[r(A,{modelValue:a.status,"onUpdate:modelValue":e[1]||(e[1]=m=>a.status=m)},{default:i(()=>[r(n,{label:1},{default:i(()=>[h(b(s(t)("startUsing")),1)]),_:1}),r(n,{label:0},{default:i(()=>[h(b(s(t)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(u,{label:s(t)("permission"),prop:"rules"},{default:i(()=>[w("div",pe,[w("div",null,[r(j,{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=m=>v.value=m),label:s(t)("selectAll")},null,8,["modelValue","label"]),r(j,{modelValue:E.value,"onUpdate:modelValue":e[3]||(e[3]=m=>E.value=m),label:s(t)("checkStrictly")},null,8,["modelValue","label"])]),r(V,{link:"",type:"primary",onClick:e[4]||(e[4]=m=>S())},{default:i(()=>[h(b(s(t)("foldText")),1)]),_:1})]),r($,{height:"35vh",class:"w-full"},{default:i(()=>[r(P,{data:f.value,props:{label:"menu_name"},"default-checked-keys":a.rules,"check-strictly":E.value,"show-checkbox":"","default-expand-all":"",onCheckChange:s(F),"node-key":"menu_key",ref_key:"treeRef",ref:p},null,8,["data","default-checked-keys","check-strictly","onCheckChange"])]),_:1})]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[H,d.value]])]),_:1},8,["modelValue","title"])}}});export{Ye as default};
import"./base-0e92f4db.js";/* empty css                *//* empty css                    */import{e as f}from"./common-46715e7e.js";import{E as i}from"./index-e63aa950.js";import{d as _,r as d,c as k,o as C,A as g,b as v,m as y,u as s}from"./runtime-core.esm-bundler-67034826.js";const R=_({__name:"addon-role",props:{data:{type:Object,default:()=>{}},modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(u,{emit:m}){const t=u;let r=d([]);r.value.push(t.data);const p=k({get(){return t.modelValue},set(e){m("update:modelValue",e)}}),c=d(null);C(()=>{g(()=>{var e=[];t.modelValue.forEach(a=>l(a,r.value,e)),c.value.setCheckedKeys(e)})});const l=(e,a,o)=>{a.forEach(n=>{e==n.menu_key?(!n.children||n.children.length==0)&&o.push(e):n.children&&n.children.length>0&&l(e,n.children,o)})},h=f(e=>{p.value=c.value.getCheckedNodes(!1,!0).map(a=>a.menu_key)});return(e,a)=>{const o=i;return v(),y(o,{data:s(r),props:{label:"menu_name"},"show-checkbox":"","expand-on-click-node":!1,onCheckChange:s(h),"node-key":"menu_key",ref_key:"treeRef",ref:c},null,8,["data","onCheckChange"])}}});export{R as _};
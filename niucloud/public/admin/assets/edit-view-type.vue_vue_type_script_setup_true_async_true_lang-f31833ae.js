import{d as T,r as s,c as A,e as p,v as _,x as l,g as N,y as n,A as v,B as y,u as i,f as L,F as O,z as P,an as S}from"./base-06478700.js";import{E as U}from"./el-overlay-42a687c6.js";/* empty css                  */import{a as $,E as j}from"./el-form-item-314d006d.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  */import"./index-80fd3793.js";import"./el-tooltip-58212670.js";import{t as c}from"./index-81ed253c.js";import{c as q}from"./dict-a587c715.js";import{c as z}from"./cloneDeep-9cc74b12.js";import{a as I,E as G}from"./index-35e821cc.js";import{E as H}from"./index-c2f001d3.js";const J={class:"dialog-footer"},ce=T({__name:"edit-view-type",emits:["complete"],setup(K,{expose:g,emit:b}){const a=s(!1),E=s(""),u={dict_type:""},r=s({...u}),m=s(),d=s([]),V=A(()=>({dict_type:[{required:!0,message:c("dictTypePlaceholder"),trigger:"change"}]})),k=()=>{q().then(t=>{d.value=t.data})},D=async t=>{t&&await t.validate(async e=>{e&&(b("complete",S(r.value)),a.value=!1)})},w=async(t=null)=>{r.value=z(Object.assign(u,t)),k(),a.value=!0},x=t=>{var e;(e=m.value)==null||e.clearValidate(),t()};return g({showDialog:a,setFormData:w}),(t,e)=>{const F=I,B=G,h=$,C=j,f=H,R=U;return p(),_(R,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),title:E.value,width:"480px","before-close":x,"destroy-on-close":!0},{footer:l(()=>[N("span",J,[n(f,{onClick:e[1]||(e[1]=o=>a.value=!1)},{default:l(()=>[v(y(i(c)("cancel")),1)]),_:1}),n(f,{type:"primary",onClick:e[2]||(e[2]=o=>D(m.value))},{default:l(()=>[v(y(i(c)("confirm")),1)]),_:1})])]),default:l(()=>[n(C,{model:r.value,"label-width":"130px",ref_key:"formRef",ref:m,rules:i(V),class:"page-form"},{default:l(()=>[n(h,{label:i(c)("dictType")},{default:l(()=>[n(B,{class:"input-width",placeholder:i(c)("dictTypePlaceholder"),modelValue:r.value.dict_type,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value.dict_type=o),filterable:"",remote:"",clearable:""},{default:l(()=>[(p(!0),L(O,null,P(d.value,o=>(p(),_(F,{label:o.name,value:o.key,key:o.key},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{ce as _};

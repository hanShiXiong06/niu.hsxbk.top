import{d as S,r as s,c as I,e as u,v as f,x as d,g as O,y as t,A as F,B as C,u as r,f as _,F as b,z as h,an as z}from"./base-06478700.js";import{E as j}from"./el-overlay-42a687c6.js";/* empty css                  */import{a as H,E as J}from"./el-form-item-314d006d.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  */import"./index-80fd3793.js";import"./el-tooltip-58212670.js";import{t as a}from"./index-81ed253c.js";import{g as Q,l as W,m as X}from"./tools-ddcb412e.js";import{c as q}from"./cloneDeep-9cc74b12.js";import{a as Y,E as Z}from"./index-35e821cc.js";import{E as ee}from"./index-b68e8463.js";import{E as le}from"./index-c2f001d3.js";const ae={class:"dialog-footer"},Ve=S({__name:"edit-associated",props:{table_name:{type:String,required:!0}},emits:["complete"],setup(x,{expose:K,emit:U}){const A=x,m=s(!1);s(!1);const B=s(""),V={type:"has_one",name:"",addon:"system",model:"",local_key:"",foreign_key:""},o=s({...V}),g=s(),M=I(()=>({type:[{required:!0,message:a("associatedTypePlaceholder"),trigger:"change"}],name:[{required:!0,message:a("associatedNamePlaceholder"),trigger:"blur"}],addon:[{required:!0,message:a("addonsPlaceholder"),trigger:"change"}],model:[{required:!0,message:a("associatedModelPlaceholder"),trigger:"change"}],local_key:[{required:!0,message:a("localKeyPlaceholder"),trigger:"change"}],foreign_key:[{required:!0,message:a("foreignKeyPlaceholder"),trigger:"blur"}]})),k=s([]),w=n=>{W(n).then(e=>{k.value=e.data})},E=s([]),N=n=>{X({table_name:n}).then(e=>{E.value=e.data})},v=s([]);(async()=>{let{data:n}=await Q({});v.value=[{title:"系统",key:"system"}],v.value.push(...n),w({addon:"system"})})();const T=n=>{o.value.model="",w({addon:n})},G=n=>{var e;(e=g.value)==null||e.clearValidate(),n()},L=async n=>{n&&await n.validate(async e=>{e&&(U("complete",z(o.value)),m.value=!1)})};return K({showDialog:m,setFormData:async(n=null)=>{N(A.table_name),n?o.value=q(n):o.value=q(V),m.value=!0}}),(n,e)=>{const p=Y,c=Z,i=H,P=ee,R=J,D=le,$=j;return u(),f($,{modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=l=>m.value=l),title:B.value,width:"500px","before-close":G,"destroy-on-close":!0},{footer:d(()=>[O("span",ae,[t(D,{onClick:e[6]||(e[6]=l=>m.value=!1)},{default:d(()=>[F(C(r(a)("cancel")),1)]),_:1}),t(D,{type:"primary",onClick:e[7]||(e[7]=l=>L(g.value))},{default:d(()=>[F(C(r(a)("confirm")),1)]),_:1})])]),default:d(()=>[t(R,{model:o.value,"label-width":"120px",ref_key:"formRef",ref:g,rules:r(M),class:"page-form"},{default:d(()=>[t(i,{label:r(a)("associatedType"),prop:"type"},{default:d(()=>[t(c,{placeholder:r(a)("associatedTypePlaceholder"),modelValue:o.value.type,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.type=l),class:"input-width"},{default:d(()=>[t(p,{label:r(a)("hasOne"),value:"has_one"},null,8,["label"]),t(p,{label:r(a)("hasMany"),value:"has_many"},null,8,["label"])]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{label:r(a)("associatedName"),prop:"name"},{default:d(()=>[t(P,{modelValue:o.value.name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.name=l),placeholder:r(a)("associatedNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:r(a)("addons"),prop:"addon"},{default:d(()=>[t(c,{modelValue:o.value.addon,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.addon=l),placeholder:r(a)("addonsPlaceholder"),class:"input-width",onChange:T},{default:d(()=>[(u(!0),_(b,null,h(v.value,(l,y)=>(u(),f(p,{label:l.title,value:l.key,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:r(a)("associatedModel"),prop:"model"},{default:d(()=>[t(c,{placeholder:r(a)("associatedModelPlaceholder"),modelValue:o.value.model,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.model=l),class:"input-width"},{default:d(()=>[(u(!0),_(b,null,h(k.value,l=>(u(),f(p,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{prop:"local_key",label:r(a)("localKey")},{default:d(()=>[t(c,{class:"input-width",placeholder:r(a)("localKeyPlaceholder"),modelValue:o.value.local_key,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.local_key=l)},{default:d(()=>[(u(!0),_(b,null,h(E.value,(l,y)=>(u(),f(p,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),t(i,{label:r(a)("foreignKey"),prop:"foreign_key"},{default:d(()=>[t(P,{modelValue:o.value.foreign_key,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.foreign_key=l),placeholder:r(a)("foreignKeyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{Ve as _};

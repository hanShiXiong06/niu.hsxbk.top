import{d as N,r as v,R as j,c as C,e as f,v as y,x as a,g as _,y as s,A as p,B as r,u as o,Q as L,f as E,F as U,z as O}from"./base-d77b0726.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{t as i}from"./index-70af0995.js";import{a as S}from"./notice-8b8746b3.js";import{E as $,b as z}from"./index-ee35aabd.js";import{a as A,E as G}from"./index-68c5ad54.js";import{E as I}from"./index-91bdda63.js";import{E as K}from"./index-6a54cf26.js";import{v as Q}from"./directive-08cd03ab.js";const T={class:"input-width"},q={class:"input-width"},H={class:"input-width"},J={class:"input-width"},M={class:"dialog-footer"},ue=N({__name:"notice-wechat",emits:["complete"],setup(P,{expose:k,emit:D}){const c=v(!1),n=v(!0),h={is_wechat:0,key:"",name:"",title:"",type:"",content:[],temp_key:"",keyword_name_list:""},t=j({...h}),b=v(),V=C(()=>({})),x=async l=>{n.value||!l||await l.validate(async e=>{if(e){n.value=!0;const d=t;d.status=d.is_wechat,S(d).then(g=>{n.value=!1,c.value=!1,D("complete")}).catch(()=>{n.value=!1})}})};return k({showDialog:c,setFormData:async(l=null)=>{n.value=!0,Object.assign(t,h),l&&Object.keys(t).forEach(e=>{l[e]!=null&&(t[e]=l[e]),l.wechat&&l.wechat[e]!=null&&(t[e]=l.wechat[e])}),n.value=!1}}),(l,e)=>{const d=$,g=z,u=A,F=G,w=I,B=K,R=Q;return f(),y(B,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=m=>c.value=m),title:o(i)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:a(()=>[_("span",M,[s(w,{onClick:e[1]||(e[1]=m=>c.value=!1)},{default:a(()=>[p(r(o(i)("cancel")),1)]),_:1}),s(w,{type:"primary",loading:n.value,onClick:e[2]||(e[2]=m=>x(b.value))},{default:a(()=>[p(r(o(i)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[L((f(),y(F,{model:t,"label-width":"110px",ref_key:"formRef",ref:b,rules:o(V),class:"page-form"},{default:a(()=>[s(u,{label:o(i)("status")},{default:a(()=>[s(g,{modelValue:t.is_wechat,"onUpdate:modelValue":e[0]||(e[0]=m=>t.is_wechat=m)},{default:a(()=>[s(d,{label:1},{default:a(()=>[p(r(o(i)("startUsing")),1)]),_:1}),s(d,{label:0},{default:a(()=>[p(r(o(i)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(u,{label:o(i)("name")},{default:a(()=>[_("div",T,r(t.name),1)]),_:1},8,["label"]),s(u,{label:o(i)("tempKey")},{default:a(()=>[_("div",q,r(t.temp_key),1)]),_:1},8,["label"]),s(u,{label:o(i)("keywordNameList")},{default:a(()=>[_("div",H,r(t.keyword_name_list?t.keyword_name_list.join("，"):""),1)]),_:1},8,["label"]),s(u,{label:o(i)("content")},{default:a(()=>[_("div",J,[(f(!0),E(U,null,O(t.content,(m,X)=>(f(),E("div",null,r(m.join("：")),1))),256))])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[R,n.value]])]),_:1},8,["modelValue","title"])}}});export{ue as _};

import{d as Y,c as q,r as _,V as E,e as d,f as m,g as p,h as G,y as t,x as a,u as s,v as N,A as I,B as x,F as g,z as U,n as B}from"./base-d77b0726.js";/* empty css                   *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                     *//* empty css                 *//* empty css                */import{d as H}from"./index-331c6de1.js";import{t as i}from"./index-70af0995.js";import{g as J}from"./diy-bb47aa1e.js";import{c as b}from"./cloneDeep-52d1ae6a.js";import{a as D}from"./index-9e51ba8b.js";import{E as Q}from"./index-e37943c3.js";import{E as W}from"./index-c1eb81db.js";import{E as X}from"./index-74352d71.js";import{a as Z}from"./index-68c5ad54.js";import{E as ee}from"./index-91bdda63.js";import{E as le}from"./index-6a54cf26.js";const te=["onClick"],ae={class:"flex items-start"},oe=["onClick"],se={class:"mb-[16px]"},re={class:"mb-[16px]"},ne=p("div",{class:"text-sm text-gray-400 select-text"},"路径必须以“/”开头，例：/app/pages/index/index",-1),ie=p("div",{class:"text-sm text-gray-400 select-text"},"跳转外部链接“/”开头，例：http://www.niucloud.com",-1),ue={key:1,class:"flex flex-wrap"},de=["onClick"],pe={class:"dialog-footer"},Ue=Y({__name:"index",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(P,{expose:S,emit:$}){const j=P,u=q({get(){return j.modelValue},set(o){$("update:modelValue",o)}}),c=_(!1),v=_([]),r=_(""),h=_([]),e=_([]);J({}).then(o=>{v.value=o.data,h.value=Object.values(v.value)[0].child_list,u.value.name!=""?e.value=b(u.value):e.value={parent:Object.values(v.value)[0].name},r.value=e.value.parent});const A=()=>{u.value.name!=""&&(e.value=b(u.value),r.value=e.value.parent,r.value&&V(v.value[r.value])),c.value=!0},V=o=>{h.value=o.child_list,r.value=o.name},F=o=>{delete o.is_share,Object.assign(e.value,o)},O=()=>{u.value={name:"",parent:"",title:"",url:""}},z=()=>{if(r.value==="DIY_LINK"){if(e.value.parent=r.value,e.value.name=r.value,!e.value.title){D({message:i("diyLinkNameNotEmpty"),type:"warning"});return}if(!e.value.url){D({message:i("diyLinkUrlNotEmpty"),type:"warning"});return}}u.value=b(e.value),c.value=!1};return S({showDialog:c}),(o,n)=>{const K=E("Close"),w=Q,M=E("ArrowRight"),k=W,C=X,f=Z,L=ee,R=le;return d(),m("div",null,[p("div",{onClick:A},[G(o.$slots,"default",{},()=>[t(k,{modelValue:s(u).title,"onUpdate:modelValue":n[0]||(n[0]=l=>s(u).title=l),placeholder:s(i)("linkPlaceholder"),readonly:""},{suffix:a(()=>[p("div",{onClick:H(O,["stop"])},[s(u).name?(d(),N(w,{key:0},{default:a(()=>[t(K)]),_:1})):(d(),N(w,{key:1},{default:a(()=>[t(M)]),_:1}))],8,te)]),_:1},8,["modelValue","placeholder"])])]),t(R,{modelValue:c.value,"onUpdate:modelValue":n[4]||(n[4]=l=>c.value=l),title:s(i)("selectLinkTips"),width:"40%","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:a(()=>[p("span",pe,[t(L,{onClick:n[3]||(n[3]=l=>c.value=!1)},{default:a(()=>[I(x(s(i)("cancel")),1)]),_:1}),t(L,{type:"primary",onClick:z},{default:a(()=>[I(x(s(i)("confirm")),1)]),_:1})])]),default:a(()=>[p("div",ae,[t(C,{class:"w-[140px] border-r h-[350px]"},{default:a(()=>[(d(!0),m(g,null,U(v.value,(l,y)=>(d(),m("div",{key:y,class:B(["h-[40px] leading-[40px] cursor-pointer hover:bg-primary-light-9 px-[10px] hover:text-primary",[l.name==r.value?"bg-primary-light-9 text-primary":""]]),onClick:T=>V(l)},x(l.title),11,oe))),128))]),_:1}),t(C,{class:"pl-4 h-[350px] flex-1"},{default:a(()=>[r.value=="DIY_LINK"?(d(),m(g,{key:0},[p("div",se,[t(f,{label:s(i)("diyLinkName")},{default:a(()=>[t(k,{modelValue:e.value.title,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value.title=l),placeholder:s(i)("diyLinkNamePlaceholder"),class:"w-6/12"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),p("div",re,[t(f,{label:s(i)("diyLinkUrl")},{default:a(()=>[t(k,{modelValue:e.value.url,"onUpdate:modelValue":n[2]||(n[2]=l=>e.value.url=l),placeholder:s(i)("diyLinkUrlPlaceholder"),class:"w-6/12"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),t(f,{label:" "},{default:a(()=>[ne]),_:1}),t(f,{label:" "},{default:a(()=>[ie]),_:1})],64)):(d(),m("div",ue,[(d(!0),m(g,null,U(h.value,(l,y)=>(d(),m("div",{key:y,class:B(["border border-br rounded-[3px] mr-[10px] mb-[10px] px-4 h-[32px] leading-[32px] cursor-pointer hover:bg-primary-light-9 px-[10px] hover:text-primary",[l.name==e.value.name?"border-primary text-primary":""]]),onClick:T=>F(l)},x(l.title),11,de))),128))]))]),_:1})])]),_:1},8,["modelValue","title"])])}}});export{Ue as _};

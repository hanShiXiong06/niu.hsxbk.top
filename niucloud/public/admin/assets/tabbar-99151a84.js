import{g as Q,r as g,a4 as $,o as W,P as X,aa as P,m as f,n as x,a1 as S,D as Y,E as r,q as n,x as B,I as N,J as T,F as o,u as s,L as m,T as Z,K as c,G as ee}from"./base-45eb5090.js";/* empty css                   *//* empty css                *//* empty css                     *//* empty css                    */import{d as te}from"./index-ad71a852.js";/* empty css                 *//* empty css                  */import{E as oe,b as le}from"./el-radio-2719e44c.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-7bcac385.js";import{_ as re}from"./index-a7c34c2b.js";/* empty css                        */import{v as se}from"./event-4977bef7.js";import{t as a}from"./index-3694a2b2.js";import{d as ne}from"./storage-4159d1ed.js";import{p as ie,s as me}from"./diy-5f64d5fc.js";import{S as de}from"./sortable.esm-be94e56d.js";/* empty css                        */import{r as pe}from"./range-d6f58b9e.js";import{E as D}from"./index-e14c3b1d.js";import{E as ce}from"./index-a2f15582.js";import{a as ue,E as _e}from"./index-2bfbe5a7.js";import{E as fe}from"./index-4ce9333e.js";import{E as xe}from"./index-25c37860.js";import{a as ve,E as be}from"./index-87ef16fc.js";import{E as ge}from"./index-fc3020f4.js";import{v as ye}from"./directive-9f485fe5.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-router-fcbaaf02.js";import"./el-overlay-616d6124.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./index-9670e877.js";import"./index-3be486d3.js";import"./el-tooltip-58212670.js";import"./el-avatar-bc58ad46.js";import"./index-aef37b98.js";import"./cloneDeep-9e500949.js";import"./index.vue_vue_type_style_index_0_lang-0436c5a5.js";import"./attachment-95048130.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 *//* empty css                    */import"./index-47488199.js";import"./index-0d830c44.js";import"./index-a096e75b.js";import"./index-719dad93.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./_Uint8Array-e584e472.js";import"./flatten-0fc8b7eb.js";import"./index-e841b684.js";import"./index-cc9a73f0.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./_isIterateeCall-104f1f93.js";import"./_initCloneObject-983ff8c8.js";const he={class:"main-container"},Ce={class:"flex"},ke={class:"w-[360px] h-[400px] absolute mr-[30px] border-[1px] border-gray-300"},Ee={class:"image-slot flex justify-center items-center mt-1"},we={class:"flex-1 ml-[430px]"},Fe={class:"flex items-center border-l-[3px] border-primary pl-[5px] leading-[1.1] mt-[10px]"},Ue={class:"text-[14px]"},Ie={class:"text-[12px] ml-[8px] text-gray-500"},$e=["data-id"],Pe={class:"flex align-center"},Se={class:"flex flex-col justify-center items-center"},Be={class:"mr-[10px] text-sm"},Ne={class:"flex flex-col justify-center items-center"},Te={class:"mr-[10px] text-sm"},De={class:"flex align-center"},He={class:"flex align-center"},je={class:"flex align-center"},Re={class:"fixed-footer-wrap"},Le={class:"fixed-footer"},ze=Q({__name:"tabbar",setup(Oe){const k=g("navPicture"),p=g(!1),t=$({backgroundColor:"#FFFFFF",textColor:"#333333",textHoverColor:"#333333",type:"1",list:[]}),H=$({text:"",link:{name:"",title:"",parent:"",url:""},iconSelectPath:"",iconPath:""}),E=()=>{t.list.length>=5||t.list.push({...H})};E();const j=()=>{const i=t.list;i.splice(i.length-1,1)},w=g();((i=1)=>{p.value=!0,ie({}).then(e=>{p.value=!1,Object.keys(t).forEach((d,v)=>{t[d]=e.data[d]})}).catch(()=>{p.value=!1})})();const R=async i=>{if(L())return!1;p.value||!i||await i.validate(async e=>{e&&(p.value=!0,me({menu:t}).then(d=>{p.value=!1}).catch(()=>{p.value=!1}))})},L=()=>{if(t.list.length<2)return D({type:"error",message:a("leastTwoNav")}),!0;try{const i=g("");t.list.forEach((e,d)=>{if(e.iconPath||(i.value=`${a("pleaseUpload")}${d+1}${a("navIcon")}`),e.iconSelectPath||(i.value=`${a("pleaseUpload")}${d+1}${a("navSelectIcon")}`),e.text||(i.value=`${a("pleaseEnter")}[${d+1}${a("navTitle")}`),e.link.url||(i.value=`${a("pleaseChoose")}${d+1}${a("navLink")}`),i.value)throw D({type:"error",message:i.value}),Error()})}catch{return!0}return!1},F=g();return W(()=>{const i=de.create(F.value,{group:"item-wrap",animation:200,onEnd:e=>{const d=t.list[e.oldIndex];t.list.splice(e.oldIndex,1),t.list.splice(e.newIndex,0,d),X(()=>{i.sort(pe(t.list.length).map(v=>v.toString()))})}})}),(i,e)=>{const d=P("Picture"),v=ee,z=ce,U=re,u=ue,y=fe,O=ae,G=P("CircleCloseFilled"),b=xe,I=ve,h=oe,q=le,C=te,J=be,K=_e,M=ge,A=ye;return f(),x("div",he,[S((f(),Y(M,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[n("div",Ce,[n("div",ke,[n("div",{class:"flex items-center justify-between absolute h-[60px] left-[0px] right-[0px] bottom-[0px] bg-white border-[1px] border-primary",style:B({backgroundColor:t.backgroundColor})},[(f(!0),x(N,null,T(t.list,(l,V)=>(f(),x("div",{class:"flex flex-1 flex-col items-center justify-center",key:"b"+V},[o(z,{class:"w-[22px] h-[22px] mb-[5px] leading-1",src:s(ne)(l.iconPath),fit:i.contain},{error:r(()=>[n("div",Ee,[o(v,null,{default:r(()=>[o(d,{class:"text-3xl text-gray-500"})]),_:1})])]),_:2},1032,["src","fit"]),["1","3"].includes(t.type)?(f(),x("span",{key:0,class:"text-[12px]",style:B({color:t.textColor})},m(l.text),5)):Z("",!0)]))),128))],4)]),n("div",we,[n("div",Fe,[n("span",Ue,m(s(a)("bottomNav")),1),n("span",Ie,m(s(a)("bottomNavHint")),1)]),o(K,{model:t,"label-width":"100px",ref_key:"formRef",ref:w},{default:r(()=>[o(J,{modelValue:k.value,"onUpdate:modelValue":e[10]||(e[10]=l=>k.value=l),class:"demo-tabs mt-[15px]"},{default:r(()=>[o(I,{label:s(a)("navImage"),name:"navPicture"},{default:r(()=>[n("div",{ref_key:"navItemRef",ref:F},[(f(!0),x(N,null,T(t.list,(l,V)=>(f(),x("div",{key:"a"+V,"data-id":V,class:"item-wrap border-2 border-dashed pt-[18px] m-[10px] mb-[15px] relative list-item"},[o(u,{label:s(a)("navIconOne")},{default:r(()=>[n("div",Pe,[n("div",Se,[o(U,{modelValue:l.iconPath,"onUpdate:modelValue":_=>l.iconPath=_,width:"60px",height:"60px",limit:1},null,8,["modelValue","onUpdate:modelValue"]),n("span",Be,m(s(a)("uploadImgUnselected")),1)]),n("div",Ne,[o(U,{modelValue:l.iconSelectPath,"onUpdate:modelValue":_=>l.iconSelectPath=_,width:"60px",height:"60px",limit:1},null,8,["modelValue","onUpdate:modelValue"]),n("span",Te,m(s(a)("uploadImgSelected")),1)])])]),_:2},1032,["label"]),o(u,{label:s(a)("navTitleOne")},{default:r(()=>[o(y,{class:"w-[215px]",modelValue:l.text,"onUpdate:modelValue":_=>l.text=_,placeholder:s(a)("titleContent"),maxlength:"5","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),o(u,{label:s(a)("navLinkOne")},{default:r(()=>[o(O,{modelValue:l.link,"onUpdate:modelValue":_=>l.link=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),o(v,{class:"close-icon cursor-pointer -top-[11px] -right-[8px]",onClick:j},{default:r(()=>[o(G)]),_:1})],8,$e))),128))],512),S(o(b,{type:"primary",class:"mt-[15px]",onClick:E},{default:r(()=>[c(m(s(a)("addnav")),1)]),_:1},512),[[se,t.list.length<5]])]),_:1},8,["label"]),o(I,{label:s(a)("styleSet"),name:"setStyle"},{default:r(()=>[o(u,{label:s(a)("navType")},{default:r(()=>[o(q,{modelValue:t.type,"onUpdate:modelValue":e[0]||(e[0]=l=>t.type=l),class:"ml-4"},{default:r(()=>[o(h,{label:"1",size:"large"},{default:r(()=>[c(m(s(a)("imageText")),1)]),_:1}),o(h,{label:"2",size:"large"},{default:r(()=>[c(m(s(a)("image")),1)]),_:1}),o(h,{label:"3",size:"large"},{default:r(()=>[c(m(s(a)("text")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(u,{label:s(a)("textColor")},{default:r(()=>[n("div",De,[o(C,{modelValue:t.textColor,"onUpdate:modelValue":e[1]||(e[1]=l=>t.textColor=l)},null,8,["modelValue"]),o(y,{class:"ml-[10px]",modelValue:t.textColor,"onUpdate:modelValue":e[2]||(e[2]=l=>t.textColor=l),disabled:""},null,8,["modelValue"]),o(b,{class:"ml-[10px]",type:"primary",onClick:e[3]||(e[3]=l=>t.textColor="#333333")},{default:r(()=>[c(m(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"]),o(u,{label:s(a)("textSelectColor")},{default:r(()=>[n("div",He,[o(C,{modelValue:t.textHoverColor,"onUpdate:modelValue":e[4]||(e[4]=l=>t.textHoverColor=l)},null,8,["modelValue"]),o(y,{class:"ml-[10px]",modelValue:t.textHoverColor,"onUpdate:modelValue":e[5]||(e[5]=l=>t.textHoverColor=l),disabled:""},null,8,["modelValue"]),o(b,{class:"ml-[10px]",type:"primary",onClick:e[6]||(e[6]=l=>t.textHoverColor="#333333")},{default:r(()=>[c(m(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"]),o(u,{label:s(a)("backgroundColor")},{default:r(()=>[n("div",je,[o(C,{modelValue:t.backgroundColor,"onUpdate:modelValue":e[7]||(e[7]=l=>t.backgroundColor=l)},null,8,["modelValue"]),o(y,{class:"ml-[10px]",modelValue:t.backgroundColor,"onUpdate:modelValue":e[8]||(e[8]=l=>t.backgroundColor=l),disabled:""},null,8,["modelValue"]),o(b,{class:"ml-[10px]",type:"primary",onClick:e[9]||(e[9]=l=>t.backgroundColor="#FFFFFF")},{default:r(()=>[c(m(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model"])])])]),_:1})),[[A,p.value]]),n("div",Re,[n("div",Le,[o(b,{type:"primary",onClick:e[11]||(e[11]=l=>R(w.value))},{default:r(()=>[c(m(s(a)("save")),1)]),_:1})])])])}}});const Zt=Ve(ze,[["__scopeId","data-v-00cf5d64"]]);export{Zt as default};

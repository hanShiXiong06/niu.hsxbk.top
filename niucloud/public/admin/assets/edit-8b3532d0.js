import{g as O,r as h,a4 as T,j as $,m as c,n as U,q as d,u as a,L as u,F as r,E as i,a1 as z,D as C,I as G,J,K as _}from"./base-45eb5090.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                     *//* empty css                        *//* empty css                 */import{E as K,b as M}from"./el-radio-2719e44c.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-c76ae400.js";import{_ as Q}from"./index-1b934a92.js";/* empty css               *//* empty css                  *//* empty css                  */import{P as W}from"./index-341914e3.js";import"./el-tooltip-58212670.js";import{u as X,t}from"./index-047041cb.js";import{c as Y,f as Z,h as ee,i as te}from"./article-4af479a6.js";import{u as oe,a as le}from"./vue-router-fcbaaf02.js";import{a as ae}from"./index-aef37b98.js";import{E as re}from"./index-4ce9333e.js";import{a as ie,E as se}from"./index-c4fd4c9d.js";import{a as ne,E as me}from"./index-cc9a73f0.js";import{E as de}from"./index-038ec88a.js";import{E as pe}from"./index-fc3020f4.js";import{E as ue}from"./index-25c37860.js";import{v as ce}from"./directive-9f485fe5.js";import"./event-4977bef7.js";import"./index.vue_vue_type_style_index_0_lang-671f772c.js";import"./el-overlay-616d6124.js";import"./index-cd1661d3.js";import"./focus-trap-318ae2e0.js";import"./attachment-15395c63.js";/* empty css                        *//* empty css                      *//* empty css                    *//* empty css                 *//* empty css                    */import"./index-e29fff14.js";import"./index-9670e877.js";import"./storage-4159d1ed.js";import"./index-0d830c44.js";import"./index-3be486d3.js";import"./index-a096e75b.js";import"./index-da8a1336.js";import"./index-719dad93.js";import"./index-c0090d79.js";import"./isEqual-f877b6c1.js";import"./_Uint8Array-e584e472.js";import"./flatten-0fc8b7eb.js";import"./index-e841b684.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./el-avatar-bc58ad46.js";import"./common-af78c857.js";import"./common-2cf17469.js";import"./castArray-df7eff2c.js";import"./_initCloneObject-983ff8c8.js";import"./index-201145a4.js";import"./strings-2444fdb3.js";import"./index-f79599e2.js";const _e={class:"main-container"},fe={class:"detail-head"},ge=d("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),be={class:"ml-[1px]"},he=d("span",{class:"adorn"},"|",-1),ve={class:"right"},Ve={class:"fixed-footer-wrap"},ye={class:"fixed-footer"},kt=O({__name:"edit",setup(we){const f=oe(),g=le(),b=parseInt(f.query.id||0),m=h(!1),v=h([]),I=W();X();const S=f.meta.title,V={id:"",category_id:"",title:"",intro:"",summary:"",image:"",author:"",content:"",visit:"",visit_virtual:"",is_show:1,sort:0},o=T({...V});b&&(async(p=0)=>{if(m.value=!0,Object.assign(o,V),p){const e=await(await Y(p)).data;if(!e||Object.keys(e).length==0)return ae.error(t("articleNull")),setTimeout(()=>{g.go(-1)},2e3),!1;Object.keys(o).forEach(s=>{e[s]!=null&&(o[s]=e[s])}),m.value=!1}else m.value=!1})(b),(async()=>{v.value=await(await Z({})).data})();const y=h(),k=$(()=>({title:[{required:!0,message:t("titlePlaceholder"),trigger:"blur"}],category_id:[{required:!0,message:t("categoryIdPlaceholder"),trigger:"blur"}],content:[{required:!0,message:t("contentPlaceholder"),trigger:"blur"},{validator:(p,e,s)=>{!e.replace(/<[^<>]+>/g,"").replace(/&nbsp;/gi,"")&&e.indexOf("img")===-1?s(new Error(t("contentPlaceholder"))):s()},trigger:["blur","change"]}]})),D=async p=>{m.value||!p||await p.validate(async e=>{e&&(m.value=!0,(b?ee:te)(o).then(E=>{m.value=!1,w()}).catch(()=>{m.value=!1}))})},w=()=>{I.removeTab(f.path),g.push({path:"/article/list"})};return(p,e)=>{const s=re,n=ie,E=ne,F=me,N=Q,R=H,x=K,A=M,L=de,j=se,q=pe,P=ue,B=ce;return c(),U("div",_e,[d("div",fe,[d("div",{class:"left",onClick:e[0]||(e[0]=l=>a(g).push({path:"/article/list"}))},[ge,d("span",be,u(a(t)("returnToPreviousPage")),1)]),he,d("span",ve,u(a(S)),1)]),r(q,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[z((c(),C(j,{model:o,"label-width":"90px",ref_key:"formRef",ref:y,rules:a(k),class:"page-form"},{default:i(()=>[r(n,{label:a(t)("title"),prop:"title"},{default:i(()=>[r(s,{modelValue:o.title,"onUpdate:modelValue":e[1]||(e[1]=l=>o.title=l),clearable:"",placeholder:a(t)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("categoryName"),prop:"category_id"},{default:i(()=>[r(F,{modelValue:o.category_id,"onUpdate:modelValue":e[2]||(e[2]=l=>o.category_id=l),clearable:"",placeholder:a(t)("categoryIdPlaceholder"),class:"input-width"},{default:i(()=>[(c(!0),U(G,null,J(v.value,l=>(c(),C(E,{label:l.name,value:l.category_id},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("intro"),prop:"intro"},{default:i(()=>[r(s,{modelValue:o.intro,"onUpdate:modelValue":e[3]||(e[3]=l=>o.intro=l),type:"textarea",rows:"4",clearable:"",placeholder:a(t)("introPlaceholder"),class:"input-width",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("summary"),prop:"summary"},{default:i(()=>[r(s,{modelValue:o.summary,"onUpdate:modelValue":e[4]||(e[4]=l=>o.summary=l),type:"textarea",rows:"4",clearable:"",placeholder:a(t)("summaryPlaceholder"),class:"input-width",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("image")},{default:i(()=>[r(N,{modelValue:o.image,"onUpdate:modelValue":e[5]||(e[5]=l=>o.image=l)},null,8,["modelValue"])]),_:1},8,["label"]),r(n,{label:a(t)("author"),prop:"author"},{default:i(()=>[r(s,{modelValue:o.author,"onUpdate:modelValue":e[6]||(e[6]=l=>o.author=l),clearable:"",placeholder:a(t)("authorPlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("content"),prop:"content"},{default:i(()=>[r(R,{modelValue:o.content,"onUpdate:modelValue":e[7]||(e[7]=l=>o.content=l)},null,8,["modelValue"])]),_:1},8,["label"]),r(n,{label:a(t)("visitVirtual")},{default:i(()=>[r(s,{modelValue:o.visit_virtual,"onUpdate:modelValue":e[8]||(e[8]=l=>o.visit_virtual=l),clearable:"",placeholder:a(t)("visitVirtualPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("isShow")},{default:i(()=>[r(A,{modelValue:o.is_show,"onUpdate:modelValue":e[9]||(e[9]=l=>o.is_show=l),placeholder:a(t)("isShowPlaceholder")},{default:i(()=>[r(x,{label:1},{default:i(()=>[_(u(a(t)("show")),1)]),_:1}),r(x,{label:0},{default:i(()=>[_(u(a(t)("hidden")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(n,{label:a(t)("sort"),prop:"sort"},{default:i(()=>[r(L,{modelValue:o.sort,"onUpdate:modelValue":e[10]||(e[10]=l=>o.sort=l),min:0},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,m.value]])]),_:1}),d("div",Ve,[d("div",ye,[r(P,{type:"primary",onClick:e[11]||(e[11]=l=>D(y.value))},{default:i(()=>[_(u(a(t)("save")),1)]),_:1}),r(P,{onClick:e[12]||(e[12]=l=>w())},{default:i(()=>[_(u(a(t)("cancel")),1)]),_:1})])])])}}});export{kt as default};

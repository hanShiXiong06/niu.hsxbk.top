import{d as fe,r as h,o as ve,R as ye,c as T,e as u,f as x,Q as he,g as r,u as o,B as _,y as a,x as d,F as E,z as U,v,H as A,A as b,E as ge,bl as Ve,bm as xe}from"./base-d77b0726.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                    *//* empty css                       *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                */import"./el-form-item-4ed993c7.js";import{t}from"./index-70af0995.js";import{e as ke}from"./common-4a1cac58.js";import{_ as we}from"./edit-associated.vue_vue_type_script_setup_true_async_true_lang-4df83833.js";import{g as Ee,n as Ce,o as Te,p as Ue,q as $e}from"./tools-cb251091.js";import{n as Se,o as Ne}from"./sys-394b27a4.js";import{u as Fe,b as De}from"./vue-router-57155f94.js";import{S as Pe}from"./sortable.esm-be94e56d.js";import{F as Ie}from"./index-331c6de1.js";import{c as Re}from"./cloneDeep-52d1ae6a.js";import{a as ae}from"./index-9e51ba8b.js";import{E as qe}from"./index-5b262c6a.js";import{E as Me}from"./index-c1eb81db.js";import{a as Ae,E as Be}from"./index-68c5ad54.js";import{a as Le,E as Oe}from"./index-a997ab1f.js";import{a as ze,E as je}from"./index-09449e3d.js";import{a as Ge,E as Ke}from"./index-0d721416.js";import{E as Je}from"./index-52f984e1.js";import{E as He,b as Qe}from"./index-ee35aabd.js";import{E as We}from"./index-64698630.js";import{E as Xe}from"./index-91bdda63.js";import{E as Ye}from"./index-2cf73bf7.js";import{v as Ze}from"./directive-08cd03ab.js";import{_ as el}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-e37943c3.js";/* empty css                   */import"./index-6a54cf26.js";import"./index-b3418ddc.js";import"./event-e06a23af.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./index-a20d1a31.js";import"./focus-trap-98fda164.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./index-6245131d.js";import"./index-f2dc9b9f.js";import"./index-45ac90c3.js";import"./index-704f0685.js";import"./typescript-defaf979.js";import"./aria-adfa05c5.js";import"./validator-7b087194.js";import"./index-d1e433eb.js";import"./_Uint8Array-2fd72219.js";import"./_initCloneObject-22d1caee.js";import"./index-45cca80f.js";import"./index-74352d71.js";import"./index-45469947.js";import"./strings-6a15e170.js";import"./isEqual-030b54ca.js";import"./debounce-8a1738b0.js";import"./index-ef0eb7b1.js";import"./_isIterateeCall-ff5ab0b5.js";import"./index-5ee2b751.js";import"./index-40fcecbc.js";const g=$=>(Ve("data-v-607c65dd"),$=$(),xe(),$),ll={class:"main-container mb-80"},al={class:"detail-head !mb-[10px]"},tl=g(()=>r("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),ol={class:"ml-[1px]"},nl=g(()=>r("span",{class:"adorn"},"|",-1)),dl={class:"right"},ml=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"}," 生成代码所属功能模块，对应路由名称，例如会员模块，充值模块，订单模块等",-1)),sl=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"}," 生成代码所属文件名称，controller，model，service，等类型文件名",-1)),rl=g(()=>r("i",{class:"iconfont iconfenlei vab-rank cursor-pointer"},null,-1)),il=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"}," 物理删除：从表中把记录移除。软删除：通过标识使得这条记录在系统逻辑层面上不可见",-1)),ul=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},"弹出：弹出框编辑。新页面：跳转页面编辑。",-1)),pl=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},"列表排序规则字段。",-1)),cl=g(()=>r("p",{class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},"列表排序规则。",-1)),_l={class:"mb-[20px]"},bl={class:"fixed-footer-wrap"},fl={class:"fixed-footer"},vl=fe({__name:"edit",setup($){const B=Fe(),L=De(),te=B.meta.title,O=parseInt(B.query.id||0),f=h(!0),F=Ie();let D=h(0);const z=h("basicSettings"),j={id:"",table_name:"",table_content:"",module_name:"",class_name:"",edit_type:1,table_column:[],editFiledIndex:0},oe=["=","!=",">",">=","<","<=","LIKE","BETWEEN"],ne=[{label:t("formInput"),value:"input"},{label:t("formTextarea"),value:"textarea"},{label:t("formSelect"),value:"select"},{label:t("formRadio"),value:"radio"},{label:t("formCheckbox"),value:"checkbox"},{label:t("formDateTime"),value:"datetime"},{label:t("formImageSelect"),value:"imageSelect"},{label:t("formEditor"),value:"editor"}],G=h([]),K=m=>{Ee({search:m}).then(n=>{G.value=n.data})},J=()=>{const m=F.value.$el.querySelector(".el-table__body-wrapper tbody");Pe.create(m,{handle:".vab-rank",animation:300,onEnd({newIndex:n,oldIndex:p}){const c=e.table_column,y=c.splice(p,1)[0];c.splice(n,0,y),D.value+=1,ge(()=>{J()})}})};ve(()=>{J(),K("")});const de=m=>{e.delete_column_name=m?e.table_column[e.table_column.length-1].column_name:""},me=m=>{e.order_type=m?1:0},e=ye({...j});T(()=>e.addon_name?`addon${e.addon_name?"\\"+e.addon_name:""}\\app\\adminapi\\controller${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`:`app\\adminapi\\controller${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`),T(()=>e.addon_name?`addon${e.addon_name?"\\"+e.addon_name:""}\\app\\model${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`:`app\\model${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`),T(()=>e.addon_name?`addon${e.addon_name?"\\"+e.addon_name:""}\\app\\validate${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`:`app\\validate${e.module_name?"\\"+e.module_name:""}${e.class_name?"\\"+e.class_name:""}`),T(()=>e.addon_name?`addon${e.addon_name?"\\"+e.addon_name:""}\\admin\\src`:"admin\\src"),T(()=>e.addon_name?`addon${e.addon_name?"\\"+e.addon_name:""}\\app\\adminapi\\route${e.module_name?"\\"+e.module_name:""}`:`app\\adminapi\\route${e.module_name?"\\"+e.module_name:""}`),O&&(async(m=0)=>{Object.assign(e,j);const n=await(await Ce(m)).data;Object.keys(n).forEach(p=>{n[p]!=null&&(e[p]=n[p])}),e.addon_name!=""&&H(e.addon_name),f.value=!1})(O);const se=h(),P=h([]),I=h([]);(async()=>{let{data:m}=await Se();P.value=[{menu_name:"顶级",menu_key:""}],P.value.push(...m)})();const H=async m=>{let{data:n}=await Ne(m);I.value=n},re=async m=>{e.parent_menu="",m!=""&&(await H(m),e.parent_menu=I.value[0].menu_key)},R=h(0),Q=h(),W=(m,n)=>{R.value=n,Q.value.setFormData(m)},ie=m=>{R.value?e.relations.splice(R.value,1,m):e.relations.unshift(m)},ue=m=>{e.relations.splice(m,1)},q=async m=>{f.value=!0;const n=Re(e);n.table_column=JSON.stringify(n.table_column.map(p=>(p.is_search||(p.query_type=""),p))),n.relations=JSON.stringify(n.relations),Te(n).then(p=>{m===3?pe():m===2?X(m):(f.value=!1,ae({type:"success",message:"操作成功"}),setTimeout(()=>{window.codeActiveName="codeList",M()},650))}).catch(()=>{f.value=!1})},pe=()=>{Ue({id:e.id}).then(m=>{f.value=!1,qe.confirm(m.msg!="2"?t("saveAndSyncText"):t("saveAndSyncText1"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel")}).then(()=>{f.value=!0,X(3)}).catch(()=>{})}).catch(()=>{f.value=!1})},X=m=>{$e({id:e.id,generate_type:m}).then(n=>{f.value=!1,ae({type:"success",message:"操作成功"}),window.open(ke(n.data.file),"_blank"),setTimeout(()=>{window.codeActiveName="codeList",M()},650)}).catch(()=>{f.value=!1})},M=()=>{L.push({path:"/tools/code"})};return(m,n)=>{const p=Me,c=Ae,y=Le,k=Oe,Y=Be,S=ze,i=Ge,w=Je,Z=Ke,N=He,ee=Qe,le=We,V=Xe,ce=je,_e=Ye,be=Ze;return u(),x(E,null,[he((u(),x("div",ll,[r("div",al,[r("div",{class:"left",onClick:n[0]||(n[0]=l=>o(L).push({path:"/tools/code"}))},[tl,r("span",ol,_(o(t)("returnToPreviousPage")),1)]),nl,r("span",dl,_(o(te)),1)]),a(_e,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[a(ce,{modelValue:z.value,"onUpdate:modelValue":n[15]||(n[15]=l=>z.value=l),class:"demo-tabs"},{default:d(()=>[a(S,{label:o(t)("basicSettings"),name:"basicSettings"},{default:d(()=>[a(Y,{model:e,"label-width":"70px",class:"page-form"},{default:d(()=>[a(c,{label:o(t)("tableName")},{default:d(()=>[a(p,{modelValue:e.table_name,"onUpdate:modelValue":n[1]||(n[1]=l=>e.table_name=l),disabled:"",placeholder:o(t)("tableNamePlaceholder"),class:"input-width",maxlength:"64"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(c,{label:o(t)("tableContent")},{default:d(()=>[a(p,{modelValue:e.table_content,"onUpdate:modelValue":n[2]||(n[2]=l=>e.table_content=l),clearable:"",placeholder:o(t)("tableContentPlaceholder"),class:"input-width",maxlength:"64"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(c,{label:o(t)("addon")},{default:d(()=>[a(k,{class:"input-width",placeholder:o(t)("addonPlaceholder"),modelValue:e.addon_name,"onUpdate:modelValue":n[3]||(n[3]=l=>e.addon_name=l),filterable:"",remote:"",clearable:"","remote-method":K,onChange:re},{default:d(()=>[(u(!0),x(E,null,U(G.value,l=>(u(),v(y,{label:l.title,value:l.key,key:l.key},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),a(c,{label:o(t)("moduleName")},{default:d(()=>[r("div",null,[a(p,{modelValue:e.module_name,"onUpdate:modelValue":n[4]||(n[4]=l=>e.module_name=l),clearable:"",placeholder:o(t)("moduleNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),ml])]),_:1},8,["label"]),a(c,{label:o(t)("className")},{default:d(()=>[r("div",null,[a(p,{modelValue:e.class_name,"onUpdate:modelValue":n[5]||(n[5]=l=>e.class_name=l),clearable:"",placeholder:o(t)("classNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),sl])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["label"]),a(S,{label:o(t)("fieldSettings"),name:"fieldSettings"},{default:d(()=>[(u(),v(Z,{data:e.table_column,size:"large",ref_key:"tableRef",ref:F,key:o(D)},{default:d(()=>[a(i,{align:"center",label:"操作",width:"80"},{default:d(()=>[rl]),_:1}),a(i,{label:o(t)("columnName"),prop:"column_name","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("columnComment"),prop:"","min-width":"230px"},{default:d(({row:l})=>[a(p,{class:"",modelValue:l.column_comment,"onUpdate:modelValue":s=>l.column_comment=s,placeholder:o(t)("columnCommentPlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),a(i,{label:o(t)("columnType"),prop:"column_type",width:"100px"},null,8,["label"]),a(i,{label:o(t)("isPk"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_pk,"onUpdate:modelValue":s=>l.is_pk=s,disabled:"","true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("isRequired"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_required,"onUpdate:modelValue":s=>l.is_required=s,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("isInsert"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_insert,"onUpdate:modelValue":s=>l.is_insert=s,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("isUpdate"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_update,"onUpdate:modelValue":s=>l.is_update=s,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("isLists"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_lists,"onUpdate:modelValue":s=>l.is_lists=s,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("isSearch"),prop:"",align:"center",width:"80px"},{default:d(({row:l})=>[a(w,{modelValue:l.is_search,"onUpdate:modelValue":s=>l.is_search=s,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(i,{label:o(t)("queryType"),prop:"","min-width":"170px"},{default:d(({row:l})=>[l.is_search?(u(),v(k,{key:0,placeholder:o(t)("selectPlaceholder"),modelValue:l.query_type,"onUpdate:modelValue":s=>l.query_type=s},{default:d(()=>[(u(),x(E,null,U(oe,(s,C)=>a(y,{label:s,value:s,key:C},null,8,["label","value"])),64))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue"])):A("",!0)]),_:1},8,["label"]),a(i,{label:o(t)("formType"),prop:"","min-width":"170px"},{default:d(({row:l})=>[a(k,{placeholder:o(t)("selectPlaceholder"),modelValue:l.view_type,"onUpdate:modelValue":s=>l.view_type=s},{default:d(()=>[(u(),x(E,null,U(ne,(s,C)=>a(y,{label:s.label,value:s.value,key:C},null,8,["label","value"])),64))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"]))]),_:1},8,["label"]),a(S,{label:o(t)("generationSettings"),name:"generationSettings"},{default:d(()=>[a(Y,{model:e,class:"page-form","label-width":"140px",ref_key:"formRef",ref:se,rules:m.rules},{default:d(()=>[a(c,{label:o(t)("deleteType")},{default:d(()=>[r("div",null,[a(ee,{modelValue:e.is_delete,"onUpdate:modelValue":n[6]||(n[6]=l=>e.is_delete=l),onChange:de},{default:d(()=>[a(N,{label:0},{default:d(()=>[b(_(o(t)("physicalDeletion")),1)]),_:1}),a(N,{label:1},{default:d(()=>[b(_(o(t)("softDeletion")),1)]),_:1})]),_:1},8,["modelValue"]),il])]),_:1},8,["label"]),e.is_delete?(u(),v(c,{key:0,prop:"delete_column_name",label:o(t)("deleteField")},{default:d(()=>[a(k,{class:"input-width",placeholder:o(t)("deleteFieldPlaceholder"),modelValue:e.delete_column_name,"onUpdate:modelValue":n[7]||(n[7]=l=>e.delete_column_name=l)},{default:d(()=>[(u(!0),x(E,null,U(e.table_column,(l,s)=>(u(),v(y,{label:`${l.column_name}:${l.column_comment}`,value:l.column_name,key:s},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):A("",!0),a(c,{label:o(t)("editType")},{default:d(()=>[r("div",null,[a(ee,{modelValue:e.edit_type,"onUpdate:modelValue":n[8]||(n[8]=l=>e.edit_type=l),placeholder:o(t)("editTypePlaceholder")},{default:d(()=>[a(N,{label:1},{default:d(()=>[b(_(o(t)("popup")),1)]),_:1}),a(N,{label:2},{default:d(()=>[b(_(o(t)("page")),1)]),_:1})]),_:1},8,["modelValue","placeholder"]),ul])]),_:1},8,["label"]),a(c,{label:o(t)("orderColumnName")},{default:d(()=>[r("div",null,[a(k,{class:"input-width",placeholder:o(t)("orderColumnNamePlaceholder"),modelValue:e.order_column_name,"onUpdate:modelValue":n[9]||(n[9]=l=>e.order_column_name=l),clearable:"",onChange:me},{default:d(()=>[(u(!0),x(E,null,U(e.table_column,(l,s)=>(u(),v(y,{label:`${l.column_name}:${l.column_comment}`,value:l.column_name,key:s},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"]),pl])]),_:1},8,["label"]),e.order_column_name?(u(),v(c,{key:1,label:o(t)("orderType")},{default:d(()=>[r("div",null,[a(k,{class:"input-width",placeholder:o(t)("orderTypePlaceholder"),modelValue:e.order_type,"onUpdate:modelValue":n[10]||(n[10]=l=>e.order_type=l),onChange:n[11]||(n[11]=()=>{})},{default:d(()=>[a(y,{label:"正序 asc",value:1}),a(y,{label:"倒序 desc",value:2})]),_:1},8,["placeholder","modelValue"]),cl])]),_:1},8,["label"])):A("",!0),a(c,{label:o(t)("menuType")},{default:d(()=>[e.addon_name!=""?(u(),v(le,{key:0,class:"input-width",modelValue:e.parent_menu,"onUpdate:modelValue":n[12]||(n[12]=l=>e.parent_menu=l),props:{label:"menu_name",value:"menu_key"},data:I.value,"check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"])):(u(),v(le,{key:1,class:"input-width",modelValue:e.parent_menu,"onUpdate:modelValue":n[13]||(n[13]=l=>e.parent_menu=l),props:{label:"menu_name",value:"menu_key"},data:P.value,"check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"]))]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["label"]),a(S,{label:o(t)("associatedConfiguration"),name:"associatedConfiguration"},{default:d(()=>[r("div",_l,[a(V,{type:"primary",class:"w-[100px]",onClick:n[14]||(n[14]=l=>W(null,0))},{default:d(()=>[b(_(o(t)("insertAssociated")),1)]),_:1})]),(u(),v(Z,{data:e.relations,size:"large",ref_key:"tableRef",ref:F,key:o(D)},{default:d(()=>[a(i,{label:o(t)("associatedType"),prop:"type","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("associatedName"),prop:"name","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("addons"),prop:"addon","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("associatedModel"),prop:"model","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("localKey"),prop:"local_key","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("foreignKey"),prop:"foreign_key","min-width":"130px"},null,8,["label"]),a(i,{label:o(t)("operation"),align:"right","min-width":"130px"},{default:d(({row:l,$index:s})=>[a(V,{type:"primary",link:"",onClick:C=>W(l,s)},{default:d(()=>[b(_(o(t)("edit")),1)]),_:2},1032,["onClick"]),a(V,{type:"primary",link:"",onClick:C=>ue(s)},{default:d(()=>[b(_(o(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]))]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})])),[[be,f.value]]),a(we,{ref_key:"editDialog",ref:Q,table_name:e.table_name,onComplete:ie},null,8,["table_name"]),r("div",bl,[r("div",fl,[a(V,{type:"primary",onClick:n[16]||(n[16]=l=>q(1))},{default:d(()=>[b(_(o(t)("save")),1)]),_:1}),a(V,{type:"primary",onClick:n[17]||(n[17]=l=>q(3))},{default:d(()=>[b(_(o(t)("saveAndSync")),1)]),_:1}),a(V,{type:"primary",onClick:n[18]||(n[18]=l=>q(2))},{default:d(()=>[b(_(o(t)("saveAndDownload")),1)]),_:1}),a(V,{onClick:n[19]||(n[19]=l=>M())},{default:d(()=>[b(_(o(t)("cancel")),1)]),_:1})])])],64)}}});const Aa=el(vl,[["__scopeId","data-v-607c65dd"]]);export{Aa as default};

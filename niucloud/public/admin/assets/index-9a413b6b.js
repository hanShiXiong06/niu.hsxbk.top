import{d as Y,r as L,c as N,e,f as s,g as t,y as p,x as l,B as d,u as m,i as re,bl as he,bm as fe,v as i,A as Z,V as ve,o as Ie,w as ye,H as o,z as S,F as c,Q as Te,n as q,Z as Le}from"./base-d77b0726.js";import{E as ke,a as je,c as De,d as Ae}from"./index-704f0685.js";/* empty css                     *//* empty css                   *//* empty css                  *//* empty css               */import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";import{h as Fe,G as Re,g as Be}from"./index-331c6de1.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                 */import{u as le,b as ge,f as xe}from"./index-5f1a84ac.js";import{s as pe,a as U,d as de}from"./common-56ee0a80.js";import{t as W,a as Ue,u as be}from"./index-e064b265.js";import{E as We,b as qe}from"./index-ee35aabd.js";import{E as Ne}from"./index-9b58fc9a.js";import{E as He}from"./index-b1914892.js";import{E as me}from"./index-74352d71.js";import{b as Ge,a as Ke,E as Oe,d as Pe,f as Qe,c as Ze}from"./index-008fac09.js";import{O as Je,ax as Xe}from"./index-e37943c3.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                         *//* empty css                  */import{u as ue,b as Ce}from"./vue-router-57155f94.js";import{a as Se,b as $e,E as Ee}from"./index-6f5bf0a3.js";/* empty css                  */import{E as Ye}from"./index-3322df72.js";import{aa as Me,ab as et}from"./sys-bccc402c.js";import{E as tt,a as lt}from"./index-c314892b.js";import{E as Ve}from"./index-6a54cf26.js";import{E as st}from"./index-91bdda63.js";import"./el-tooltip-4ed993c7.js";import{g as at}from"./apply-9f9974aa.js";/* empty css                */import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./event-e06a23af.js";import"./index-6245131d.js";import"./validator-7b087194.js";import"./index-f2dc9b9f.js";import"./index-45cca80f.js";import"./focus-trap-98fda164.js";import"./index-c1eb81db.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./index-a20d1a31.js";import"./index-ef0eb7b1.js";import"./debounce-8a1738b0.js";import"./index-b3418ddc.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./index-40fcecbc.js";import"./dropdown-2ff49e9b.js";const nt="/admin/assets/one_type-2dda01b9.png",ot="/admin/assets/two_type-36c0a3bd.png",it="/admin/assets/three_type-439cb2c8.png",_e=R=>(he("data-v-03a04936"),R=R(),fe(),R),ct={class:"h-[100%] w-[100%] flex items-center justify-center px-[8px]"},rt={class:"setting-item flex items-baseline justify-between mb-[10px]"},pt={class:"title text-base text-tx-secondary whitespace-nowrap"},dt={class:""},mt=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:nt,alt:""},null,-1)),ut=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:ot,alt:""},null,-1)),_t=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:it,alt:""},null,-1)),xt={class:"setting-item flex items-center justify-between mb-[10px]"},ht={class:"title text-base text-tx-secondary"},ft={class:""},vt={class:"setting-item flex items-center justify-between mb-[10px]"},yt={class:"title text-base text-tx-secondary"},kt={class:""},gt=Y({__name:"layout-setting",setup(R){const V=L(!1),k=le(),j=Fe(),B=Je(j),$=N({get(){return k.dark},set(f){k.setTheme("dark",f),B(f),pe(k.theme,k.dark?"dark":"light")}}),v=N({get(){return k.sidebar},set(f){k.setTheme("sidebar",f),pe(k.theme,k.dark?"dark":"light")}}),A=N({get(){return k.theme},set(f){k.setTheme("theme",f),pe(k.theme,k.dark?"dark":"light")}});return(f,g)=>{const z=te,H=We,D=qe,G=Ne,K=He,F=me,M=Ge;return e(),s("div",{class:"flex w-[100%] h-[100%]",onClick:g[4]||(g[4]=I=>V.value=!0)},[t("div",ct,[p(z,{name:"element-Setting"})]),p(M,{modelValue:V.value,"onUpdate:modelValue":g[3]||(g[3]=I=>V.value=I),title:m(W)("layout.layoutSetting"),size:"300px"},{default:l(()=>[p(F,null,{default:l(()=>[t("div",rt,[t("div",pt,d(m(W)("layout.sidebarMode")),1),t("div",dt,[p(D,{modelValue:m(v),"onUpdate:modelValue":g[0]||(g[0]=I=>re(v)?v.value=I:null),class:"ml-4"},{default:l(()=>[p(H,{label:"oneType",size:"large"},{default:l(()=>[mt]),_:1}),p(H,{label:"twoType",size:"large"},{default:l(()=>[ut]),_:1}),p(H,{label:"threeType",size:"large"},{default:l(()=>[_t]),_:1})]),_:1},8,["modelValue"])])]),t("div",xt,[t("div",ht,d(m(W)("layout.darkMode")),1),t("div",ft,[p(G,{modelValue:m($),"onUpdate:modelValue":g[1]||(g[1]=I=>re($)?$.value=I:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),t("div",vt,[t("div",yt,d(m(W)("layout.themeColor")),1),t("div",kt,[p(K,{modelValue:m(A),"onUpdate:modelValue":g[2]||(g[2]=I=>re(A)?A.value=I:null)},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const bt=we(gt,[["__scopeId","data-v-03a04936"]]),wt={class:"h-[100%] w-[100%] flex items-center justify-center px-[8px]"},Ct=Y({__name:"switch-lang",setup(R){const V=ue(),k=le(),j=B=>{k.$patch($=>{$.lang=B,U.set({key:"lang",data:B})}),Ue.loadLocaleMessages(V.meta.app||"",V.path,k.lang),location.reload()};return(B,$)=>{const v=te,A=Se,f=$e,g=Ee;return e(),i(g,{onCommand:j,tabindex:1,class:"h-[100%] w-[100%]"},{dropdown:l(()=>[p(f,null,{default:l(()=>[p(A,{command:"zh-cn",disabled:m(k).lang=="zh-cn"},{default:l(()=>[Z("简体中文")]),_:1},8,["disabled"]),p(A,{command:"en",disabled:m(k).lang=="en"},{default:l(()=>[Z("English")]),_:1},8,["disabled"])]),_:1})]),default:l(()=>[t("div",wt,[p(v,{name:"iconfont-iconfanyi"})])]),_:1})}}}),St={class:"userinfo flex h-full items-center"},$t={class:"user-name pl-[8px]"},Et=Y({__name:"user-info",setup(R){const V=ge(),k=j=>{switch(j){case"logout":V.logout();break}};return(j,B)=>{const $=Ye,v=te,A=ve("router-link"),f=Se,g=$e,z=Ee;return e(),i(z,{onCommand:k,tabindex:1},{dropdown:l(()=>[p(g,null,{default:l(()=>[p(f,{command:"usercenter"},{default:l(()=>[p(A,{to:"/user/center"},{default:l(()=>[Z("个人中心")]),_:1})]),_:1}),p(f,{command:"logout"},{default:l(()=>[Z("退出登录")]),_:1})]),_:1})]),default:l(()=>[t("div",St,[p($,{size:25,icon:m(Xe)},null,8,["icon"]),t("div",$t,d(m(V).userInfo.username),1),p(v,{name:"element-ArrowDown",class:"ml-[5px]"})])]),_:1})}}}),Vt=R=>(he("data-v-cac7a501"),R=R(),fe(),R),zt={class:"left-panel h-full flex items-center"},It=Vt(()=>t("a",{href:"javascript:;",title:"切换",class:"iconfont iconqiehuan2"},null,-1)),Tt=[It],Lt={class:"flex items-center h-full pl-[10px] hidden-xs-only"},jt={class:"right-panel h-full flex items-center justify-end"},Dt=["title"],At={class:"navbar-item !px-[0] flex items-center h-full cursor-pointer"},Ft={class:"navbar-item !px-[0] flex items-center h-full cursor-pointer"},Rt={class:"navbar-item flex items-center h-full cursor-pointer"},Bt={class:"dialog-footer"},Ut={class:"flex flex-wrap"},Wt=["onClick"],qt=["onClick"],Nt={class:"dialog-footer"},Ht=Y({__name:"index",setup(R){const V=Ce(),k=U.get("app_type"),{toggle:j,isFullscreen:B}=Re(),$=le(),v=be(),A=ue(),f=L(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),g=N(()=>$.dark);Ie(()=>{window.onresize=()=>(()=>{f.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()}),ye(f,()=>{f.value<992?$.menuIsCollapse||$.toggleMenuCollapse(!0):$.menuIsCollapse&&$.toggleMenuCollapse(!1)});const z=()=>{v.routeRefreshTag&&v.refreshRouterView()},H=N(()=>{const u=A.matched.filter(E=>E.meta.title);return u[0]&&u[0].path=="/"&&u.splice(0,1),u}),D=L(),G=L(!1),K=()=>{Me().then(u=>{G.value=!0,D.value=u.data;for(let E=0;E<D.value.length;E++)D.value[E].is_use==1&&(F.value=D.value[E].view_path)})},F=L(""),M=()=>{et({view_path:F.value}).then(()=>{G.value=!1,V.go(0)})};let I=L(!1);I.value=U.get("floatMenuStyle")||!1;const J=u=>{I.value=u,U.set({key:"floatMenuStyle",data:u}),location.reload()};return(u,E)=>{const b=te,ne=Ke,oe=Oe,_=tt,h=lt,w=st,O=Ve,se=ke;return e(),i(se,{class:q(["h-full px-[10px]",{"layout-header border-b border-color":!m(g)}])},{default:l(()=>[p(h,{class:"w-100 h-full w-full"},{default:l(()=>[p(_,{span:12},{default:l(()=>[t("div",zt,[m(I)?(e(),s("div",{key:0,class:"navbar-item flex items-center h-full cursor-pointer",onClick:E[0]||(E[0]=x=>J(!1))},Tt)):o("",!0),t("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:z},[p(b,{name:"element-Refresh"})]),t("div",Lt,[p(oe,{separator:"/"},{default:l(()=>[(e(!0),s(c,null,S(m(H),(x,T)=>(e(),i(ne,{key:T},{default:l(()=>[Z(d(x.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),p(_,{span:12},{default:l(()=>[t("div",jt,[m(k)=="site"?(e(),s("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:m(W)("newInfo")},null,8,Dt)):o("",!0),m(k)=="site"?(e(),s("div",{key:1,class:"navbar-item flex items-center h-full cursor-pointer",onClick:K},[p(b,{name:"iconfont-iconqiehuan",title:m(W)("indexSwitch")},null,8,["title"])])):o("",!0),t("div",At,[p(Ct)]),t("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:E[1]||(E[1]=(...x)=>m(j)&&m(j)(...x))},[m(B)?(e(),i(b,{key:0,name:"iconfont-icontuichuquanping"})):(e(),i(b,{key:1,name:"iconfont-iconquanping"}))]),t("div",Ft,[p(bt)]),t("div",Rt,[p(Et)])])]),_:1})]),_:1}),Te(t("input",{type:"hidden","onUpdate:modelValue":E[2]||(E[2]=x=>u.comparisonToken=x)},null,512),[[Be,u.comparisonToken]]),p(O,{modelValue:u.detectionLoginDialog,"onUpdate:modelValue":E[3]||(E[3]=x=>u.detectionLoginDialog=x),title:m(W)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:l(()=>[t("span",Bt,[p(w,{onClick:u.detectionLoginFn},{default:l(()=>[Z(d(m(W)("layout.detectionLoginOperation")),1)]),_:1},8,["onClick"])])]),default:l(()=>[t("span",null,d(m(W)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),p(O,{modelValue:G.value,"onUpdate:modelValue":E[4]||(E[4]=x=>G.value=x),title:m(W)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:l(()=>[t("span",Nt,[p(w,{type:"primary",onClick:M},{default:l(()=>[Z(d(m(W)("confirm")),1)]),_:1})])]),default:l(()=>[t("div",Ut,[F.value==""?(e(!0),s(c,{key:0},S(D.value,(x,T)=>(e(),s("div",{key:T},[t("div",{onClick:ie=>F.value=x.view_path,class:q(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",x.is_use==1?"bg-primary text-[#fff]":""])},[t("span",null,d(x.name),1)],10,Wt)]))),128)):(e(!0),s(c,{key:1},S(D.value,(x,T)=>(e(),s("div",{key:T},[t("div",{onClick:ie=>F.value=x.view_path,class:q(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",F.value==x.view_path?"bg-primary text-[#fff]":""])},[t("span",null,d(x.name),1)],10,qt)]))),128))])]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const Gt=we(Ht,[["__scopeId","data-v-cac7a501"]]);const Kt={key:0,class:"w-[65px] overflow-hidden"},Ot={class:"h-full flex flex-col relative"},Pt=t("span",{class:"iconfont icontuodong !text-[30px]"},null,-1),Qt=[Pt],Zt=t("span",{class:"iconfont iconshouye !text-[24px]"},null,-1),Jt=[Zt],Xt={class:"mb-[20px]"},Yt=["onClick"],Mt={class:"one-menus-float-style"},el={key:0,class:"flex bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap box-border shadow-lg one-menus-wrap"},tl=["onClick"],ll=["src","title"],sl={key:0,class:"flex-1 text-center"},al={class:"group flex flex-col items-center justify-center h-[64px] border-b-[1px] border-solid second-head cursor-pointer relative"},nl={class:"flex items-center"},ol=["src"],il={key:1,class:"flex items-center justify-center w-[30px] h-[30px]"},cl={key:0,class:"hidden group-hover:flex absolute bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap left-0 top-[65px] z-[5555] box-border shadow-lg"},rl=["onClick"],pl=["src","title"],dl={key:0,class:"flex-1 text-center"},ml={class:"w-[16px] h-[16px] relative flex items-center"},ul={class:"ml-[11px] text-[15px]"},_l={class:"w-[16px] h-[16px] relative flex items-center"},xl={key:1,class:"iconfont icondian !text-[25px]"},hl={class:"ml-[11px] text-[15px]"},fl=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),vl={class:"ml-[11px] text-[15px]"},yl={class:"text-[14px]"},kl={class:"text-[14px]"},gl={class:"text-[14px]"},bl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},wl={class:"ml-[11px] text-[15px]"},Cl=["onClick"],Sl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},$l={class:"ml-[11px] text-[15px]"},El=t("div",{class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},null,-1),Vl={class:"w-[16px] h-[16px] relative flex items-center"},zl={class:"ml-[11px] text-[15px]"},Il={class:"w-[16px] h-[16px] relative flex items-center"},Tl={class:"ml-[11px] text-[15px]"},Ll=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),jl={class:"ml-[11px] text-[15px]"},Dl={class:"text-[14px]"},Al={class:"text-[14px]"},Fl={class:"text-[14px]"},Rl={class:"w-[16px] h-[16px] relative flex items-center"},Bl={class:"ml-[11px] text-[15px]"},Ul=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),Wl={class:"ml-[11px] text-[15px]"},ql={class:"text-[14px]"},Nl={class:"text-[14px]"},Hl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},Gl={class:"ml-[11px] text-[15px]"},Kl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},Ol={class:"ml-[11px] text-[15px]"},Pl={class:"w-[16px] h-[16px] relative flex items-center"},Ql={class:"ml-[11px] text-[15px]"},Zl={class:"w-[16px] h-[16px] relative flex items-center"},Jl={class:"ml-[11px] text-[15px]"},Xl=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),Yl={class:"ml-[11px] text-[15px]"},Ml={class:"text-[14px]"},es={class:"text-[14px]"},ts={class:"text-[14px]"},ls=["onClick"],ss={class:"text-[15px]"},as={key:0,class:"w-[16px] h-[16px] relative flex items-center"},ns={class:"ml-[11px] text-[15px]"},os=Y({__name:"index",setup(R){const V=ge(),k=le(),j=ue(),B=Ce(),$=L(""),v=L("");$.value=U.get("menuAppStorage"),v.value=U.get("menuAppStorage");const A=L(!1),f=L([]),g=L([]),z=L([]);(async()=>{const _=await at();f.value=f.value.concat(_.data),f.value.forEach((h,w)=>{h.type=="app"&&g.value.push(h.key),h.type=="addon"&&z.value.push(h.key)}),z.value=z.value.concat(["member","app_center"]),A.value=!0})();const D=L(!1),G=()=>{const _=U.get("menuAppStorage");_?B.push({name:K.value[_]}):B.push({path:"/"})},K=L({}),F=N(()=>{const _=[];return V.routers.forEach((h,w)=>{h.children&&h.children.length?(h.name=xe(h.children),K.value[h.meta.app]=xe(h.children),_.push(h)):(K.value[h.meta.app]=h.name,_.push(h))}),f.value&&f.value.length&&f.value.forEach((h,w)=>{_.forEach((O,se)=>{h.key==O.meta.key&&(O.meta.parentTitle=h.title,O.meta.parentIcon=h.icon)})}),_}),M=N(()=>k.dark),I=L(""),J=L("");ye(j,()=>{I.value=U.get("plugMenuTypeStorage");const _=j.matched[1];J.value=j.matched[1],v.value=_.meta.key,k.$patch(h=>{h.menuDrawer=!1})},{immediate:!0});const u=_=>{if(!_.meta&&_.type=="app"||_.meta.key!="official_market"){let h=_.name;if(_.type=="app"){$.value=_.key,v.value=_.key,U.set({key:"menuAppStorage",data:_.key}),U.set({key:"plugMenuTypeStorage",data:""});const w=V.appMenuList;w.push(_.key),V.setAppMenuList(w),D.value=!1,h=K.value[_.key]}B.push({name:h})}else window.open("https://www.niucloud.com/product/","_blank")},E=N(()=>k.sidebar),b=L(!1);b.value=U.get("floatMenuStyle")||!1;const ne=()=>{b.value=!0,U.set({key:"floatMenuStyle",data:!0}),location.reload()},oe=_=>z.value.includes(v.value)&&$.value==_.meta.app||b.value&&!g.value.includes(v.value)&&!z.value.includes(v.value)&&$.value==_.meta.app||b.value&&g.value.includes(v.value)&&(_.meta.key==v.value||_.meta.app==v.value)||b.value&&!g.value.length&&(_.meta.key==v.value||_.meta.app==v.value)||!b.value&&!z.value.includes(v.value)&&(_.meta.key==v.value||_.meta.app==v.value);return(_,h)=>{const w=te,O=je,se=Ve,x=Pe,T=Qe,ie=Ze,ze=me;return A.value?(e(),s("div",{key:0,class:q(["flex",{"two-type":m(E)=="twoType"},{"three-type":m(E)=="threeType"}])},[b.value?o("",!0):(e(),s("div",Kt,[p(O,{class:q(["h-screen layout-aside w-[65px] pb-[30px] bg-[#F7F8FA] ease-in duration-200",{bright:!m(M)}])},{default:l(()=>[t("div",Ot,[t("div",{class:"flex items-center justify-center h-[64px] cursor-pointer cut-style",onClick:h[0]||(h[0]=y=>D.value=!D.value)},Qt),t("div",{onClick:G,class:"flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap"},Jt),t("div",Xt,[(e(!0),s(c,null,S(m(F),(y,ee)=>(e(),s(c,{key:ee},[y.meta.app==""&&y.meta.attr=="common"?(e(),s("div",{key:0,onClick:a=>u(y),class:q(["flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap",{"bg-[#f1f2f6] text-color menu-item-active ":y.path==J.value.path||J.value.path=="/admin"&&y.path=="/index"||J.value.meta.app&&y.path=="/index"}])},[y.meta.icon?(e(),i(w,{key:0,name:y.meta.icon,class:"!w-auto",size:"24px",title:y.meta.title},null,8,["name","title"])):o("",!0)],10,Yt)):o("",!0)],64))),128))]),t("a",{href:"javascript:;",class:"absolute -bottom-[20px] left-[50%] cut-style iconfont icongengduo !text-[30px] qx",onClick:ne,title:"切换"})])]),_:1},8,["class"])])),t("div",Mt,[p(se,{modelValue:D.value,"onUpdate:modelValue":h[1]||(h[1]=y=>D.value=y),"show-close":!1},{default:l(()=>[!b.value&&f.value.filter(y=>y.type==="app").length?(e(),s("div",el,[(e(!0),s(c,null,S(f.value,(y,ee)=>(e(),s(c,{key:ee},[y.type=="app"?(e(),s("div",{key:0,onClick:a=>u(y),class:"flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px] box-border w-[165px]"},[t("img",{src:m(de)(y.icon),class:"w-[44px] h-[44px] rounded-full mr-[5px]",alt:"",title:y.title},null,8,ll),t("span",null,d(y.title),1)],8,tl)):o("",!0)],64))),128)),f.value.length?o("",!0):(e(),s("div",sl,"暂无安装应用"))])):o("",!0)]),_:1},8,["modelValue"])]),(e(!0),s(c,null,S(m(F),(y,ee)=>(e(),s(c,{key:ee},[oe(y)?(e(),s("div",{key:0,class:q([b.value?"w-[210px]":"w-[189px]","box-border border-r-[1px] border-solid second-menu"])},[t("div",al,[t("div",nl,[b.value?(e(),s(c,{key:0},[y.meta.parentIcon?(e(),s("img",{key:0,src:m(de)(y.meta.parentIcon),class:"w-[40px] h-[40px] mr-[8px]",alt:""},null,8,ol)):(e(),s("div",il,[y.meta.icon?(e(),i(w,{key:0,name:y.meta.icon,class:"!w-auto",size:"24px"},null,8,["name"])):o("",!0)]))],64)):o("",!0),t("span",null,d(y.meta.app?y.meta.parentTitle:y.meta.title),1)]),b.value&&f.value.filter(a=>a.type==="app").length?(e(),s("div",cl,[(e(!0),s(c,null,S(f.value,(a,ae)=>(e(),s(c,{key:ae},[a.type=="app"?(e(),s("div",{key:0,onClick:n=>u(a),class:"flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px] w-[165px] box-border"},[t("img",{src:m(de)(a.icon),class:"w-[44px] h-[44px] rounded-full mr-[5px]",alt:"",title:a.title},null,8,pl),t("span",null,d(a.title),1)],8,rl)):o("",!0)],64))),128)),f.value.length?o("",!0):(e(),s("div",dl,"暂无安装应用"))])):o("",!0)]),p(ze,{class:"overflow-y-auto menus-wrap"},{default:l(()=>[p(ie,{class:"apply-menu !border-0",router:!0,"unique-opened":"true","default-active":String(m(j).name)},{default:l(()=>[!b.value||b.value&&g.value.length?(e(),s(c,{key:0},[(e(!0),s(c,null,S(y.children,(a,ae)=>(e(),s(c,null,[a.children&&a.meta.show?(e(),i(T,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",ml,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",ul,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,X)=>(e(),s(c,{key:X},[n.children&&n.meta.show?(e(),i(T,{key:0,index:String(n.meta.title),class:"three-menu"},{title:l(()=>[t("div",_l,[n.meta.icon&&b.value?(e(),i(w,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0),b.value?o("",!0):(e(),s("span",xl))]),t("span",hl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,P)=>(e(),s(c,{key:P},[r.children&&r.meta.show?(e(),i(T,{key:0,index:String(r.meta.title)},{title:l(()=>[fl,t("span",vl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(C,Q)=>(e(),s(c,{key:Q},[C.meta.show?(e(),i(x,{key:0,class:"!h-[52px] !pl-[55px]",index:String(C.name),onClick:ce=>u(C)},{title:l(()=>[t("span",yl,d(C.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(x,{key:1,class:"!h-[52px] !pl-[35px]",index:String(r.name),onClick:C=>u(r)},{title:l(()=>[t("span",kl,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.show?(e(),i(x,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",gl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):a.meta.show&&a.meta.key!="official_market"?(e(),i(x,{key:1,class:"!pl-[25px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",bl,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",wl,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):a.meta.show&&a.meta.key=="official_market"?(e(),s("div",{key:2,class:"flex items-center !px-[25px] h-[56px] cursor-pointer text-[#333] el-menu-item",onClick:n=>u(a)},[a.meta.icon?(e(),s("div",Sl,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",$l,d(a.meta.title),1)],8,Cl)):o("",!0)],64))),256)),g.value.includes(v.value)||z.value.includes(v.value)||b.value?(e(),s(c,{key:0},[El,(e(!0),s(c,null,S(m(F),(a,ae)=>(e(),s(c,null,[a.meta.attr=="system"&&!a.meta.app&&a.children?(e(),i(T,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",Vl,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",zl,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,X)=>(e(),s(c,{key:X},[n.meta.app&&n.children?(e(),i(T,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",Il,[n.meta.icon?(e(),i(w,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Tl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,P)=>(e(),s(c,{key:P},[r.children&&r.meta.show?(e(),i(T,{key:0,index:String(r.meta.title)},{title:l(()=>[Ll,t("span",jl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(C,Q)=>(e(),s(c,{key:Q},[C.meta.show?(e(),i(x,{key:0,class:"!h-[52px] !pl-[55px]",index:String(C.name),onClick:ce=>u(C)},{title:l(()=>[t("span",Dl,d(C.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(x,{key:1,class:"!ml-[30px] !h-[52px] !pl-[35px]",index:String(r.name),onClick:C=>u(r)},{title:l(()=>[t("span",Al,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):o("",!0),n.meta.show?(e(),i(x,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",Fl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128)),z.value.includes(v.value)&&I.value?(e(!0),s(c,{key:0},S(m(F),(n,X)=>(e(),s(c,null,[n.meta.app&&n.meta.app==I.value&&n.children?(e(),i(T,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",Rl,[n.meta.icon?(e(),i(w,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Bl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,P)=>(e(),s(c,{key:P},[r.children&&r.meta.show?(e(),i(T,{key:0,index:String(r.meta.title)},{title:l(()=>[Ul,t("span",Wl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(C,Q)=>(e(),s(c,{key:Q},[C.meta.show?(e(),i(x,{key:0,class:"!h-[52px] !pl-[55px]",index:String(C.name),onClick:ce=>u(C)},{title:l(()=>[t("span",ql,d(C.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(x,{key:1,class:"!ml-[30px] !h-[52px] !pl-[35px]",index:String(r.name),onClick:C=>u(r)},{title:l(()=>[t("span",Nl,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.app&&n.meta.app==I.value?(e(),i(x,{key:1,class:"!pl-[25px] text-[#333]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[n.meta.icon?(e(),s("div",Hl,[n.meta.icon?(e(),i(w,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",Gl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256)):o("",!0)]),_:2},1032,["index"])):a.meta.attr=="system"&&!a.meta.app?(e(),i(x,{key:1,class:"!pl-[25px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",Kl,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",Ol,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256))],64)):o("",!0)],64)):o("",!0),b.value?(e(),s(c,{key:1},[t("div",{class:q(["!border-0 border-solid mx-[25px] bg-[#f7f7f7] my-[5px]",b.value&&!g.value.length?"":"!border-t-[1px]"])},null,2),(e(!0),s(c,null,S(m(F),(a,ae)=>(e(),s(c,null,[a.meta.attr=="common"&&!a.meta.app&&a.children?(e(),i(T,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",Pl,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Ql,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,X)=>(e(),s(c,{key:X},[n.children&&n.meta.show?(e(),i(T,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",Zl,[n.meta.icon?(e(),i(w,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Jl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,P)=>(e(),s(c,{key:P},[r.children&&r.meta.show?(e(),i(T,{key:0,index:String(r.meta.title)},{title:l(()=>[Xl,t("span",Yl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(C,Q)=>(e(),s(c,{key:Q},[C.meta.show?(e(),i(x,{key:0,class:"!h-[52px] !pl-[55px]",index:String(C.name),onClick:ce=>u(C)},{title:l(()=>[t("span",Ml,d(C.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(x,{key:1,class:"!h-[52px] !pl-[55px]",index:String(r.name),onClick:C=>u(r)},{title:l(()=>[t("span",es,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.show&&n.meta.key!="official_market"?(e(),i(x,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",ts,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):n.meta.show&&n.meta.key=="official_market"?(e(),s("div",{key:2,class:"flex items-center !px-[52px] h-[56px] cursor-pointer text-[#333] el-menu-item",onClick:r=>u(n)},[t("span",ss,d(a.meta.title),1)],8,ls)):o("",!0)],64))),128))]),_:2},1032,["index"])):a.meta.attr=="common"?(e(),i(x,{key:1,class:"!pl-[35px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",as,[a.meta.icon?(e(),i(w,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",ns,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256))],64)):o("",!0)]),_:2},1032,["default-active"])]),_:2},1024)],2)):o("",!0)],64))),128))],2)):o("",!0)}}});const is={class:"common-layout min-w-[1200px]"},da=Y({__name:"index",setup(R){const V=be(),k=le(),j=N(()=>k.dark);return(B,$)=>{const v=De,A=ve("router-view"),f=me,g=Ae,z=ke;return e(),s("div",is,[p(z,{class:"w-100 h-screen"},{default:l(()=>[p(os),p(z,null,{default:l(()=>[p(v,null,{default:l(()=>[p(Gt)]),_:1}),p(g,{class:q(["main-wrap h-full p-0",{"bg-page":m(j)}])},{default:l(()=>[p(f,null,{default:l(()=>[t("div",null,[m(V).routeRefreshTag?(e(),i(A,{key:0},{default:l(({Component:H,route:D})=>[(e(),i(Le(H),{key:D.fullPath}))]),_:1})):o("",!0)])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})])}}});export{da as default};
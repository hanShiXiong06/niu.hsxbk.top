import{d as M,r as L,c as q,e,f as s,g as t,y as p,x as l,B as d,u as m,i as re,bl as he,bm as fe,v as i,A as J,V as ve,o as ze,w as ye,H as o,z as S,F as c,Q as Ve,n as O,Z as Ie}from"./base-d77b0726.js";import{E as ke,a as Te,c as Le,d as je}from"./index-704f0685.js";/* empty css                     *//* empty css                   *//* empty css                  *//* empty css               */import{_ as le}from"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";import{h as De,G as Ae,g as Fe}from"./index-331c6de1.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                 */import{u as se,b as ge,f as xe}from"./index-e89181d8.js";import{s as pe,a as U,d as de}from"./common-56ee0a80.js";import{t as W,a as Re,u as be}from"./index-f3c0482e.js";import{E as Be,b as Ue}from"./index-ee35aabd.js";import{E as We}from"./index-9b58fc9a.js";import{E as qe}from"./index-b1914892.js";import{E as me}from"./index-74352d71.js";import{b as Ne,a as He,E as Ge,d as Ke,f as Oe,c as Pe}from"./index-008fac09.js";import{O as Qe,ax as Ze}from"./index-e37943c3.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                         *//* empty css                  */import{u as ue,b as Ce}from"./vue-router-57155f94.js";import{a as Se,b as $e,E as Ee}from"./index-6f5bf0a3.js";/* empty css                  */import{E as Je}from"./index-3322df72.js";import{aa as Xe,ab as Ye}from"./sys-0e75e991.js";import{E as Me,a as et}from"./index-c314892b.js";import{E as tt}from"./index-6a54cf26.js";import{E as lt}from"./index-91bdda63.js";import"./el-tooltip-4ed993c7.js";import{g as st}from"./apply-d02b84fb.js";/* empty css                */import"./index-9e51ba8b.js";import"./typescript-defaf979.js";import"./aria-60e0cdc6.js";import"./index-de9bede2.js";import"./event-e06a23af.js";import"./index-6245131d.js";import"./validator-7b087194.js";import"./index-f2dc9b9f.js";import"./index-45cca80f.js";import"./focus-trap-98fda164.js";import"./index-c1eb81db.js";import"./index-d1e433eb.js";import"./position-09adcf79.js";import"./index-a20d1a31.js";import"./index-ef0eb7b1.js";import"./debounce-8a1738b0.js";import"./index-b3418ddc.js";import"./scroll-59301fd6.js";import"./vnode-5920e7a9.js";import"./aria-adfa05c5.js";import"./index-40fcecbc.js";import"./dropdown-2ff49e9b.js";const at="/admin/assets/one_type-2dda01b9.png",nt="/admin/assets/two_type-36c0a3bd.png",ot="/admin/assets/three_type-439cb2c8.png",_e=R=>(he("data-v-03a04936"),R=R(),fe(),R),it={class:"h-[100%] w-[100%] flex items-center justify-center px-[8px]"},ct={class:"setting-item flex items-baseline justify-between mb-[10px]"},rt={class:"title text-base text-tx-secondary whitespace-nowrap"},pt={class:""},dt=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:at,alt:""},null,-1)),mt=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:nt,alt:""},null,-1)),ut=_e(()=>t("img",{class:"w-[35px] h-[35px]",src:ot,alt:""},null,-1)),_t={class:"setting-item flex items-center justify-between mb-[10px]"},xt={class:"title text-base text-tx-secondary"},ht={class:""},ft={class:"setting-item flex items-center justify-between mb-[10px]"},vt={class:"title text-base text-tx-secondary"},yt={class:""},kt=M({__name:"layout-setting",setup(R){const V=L(!1),y=se(),j=De(),B=Qe(j),$=q({get(){return y.dark},set(v){y.setTheme("dark",v),B(v),pe(y.theme,y.dark?"dark":"light")}}),x=q({get(){return y.sidebar},set(v){y.setTheme("sidebar",v),pe(y.theme,y.dark?"dark":"light")}}),D=q({get(){return y.theme},set(v){y.setTheme("theme",v),pe(y.theme,y.dark?"dark":"light")}});return(v,g)=>{const I=le,N=Be,A=Ue,H=We,G=qe,F=me,ee=Ne;return e(),s("div",{class:"flex w-[100%] h-[100%]",onClick:g[4]||(g[4]=T=>V.value=!0)},[t("div",it,[p(I,{name:"element-Setting"})]),p(ee,{modelValue:V.value,"onUpdate:modelValue":g[3]||(g[3]=T=>V.value=T),title:m(W)("layout.layoutSetting"),size:"300px"},{default:l(()=>[p(F,null,{default:l(()=>[t("div",ct,[t("div",rt,d(m(W)("layout.sidebarMode")),1),t("div",pt,[p(A,{modelValue:m(x),"onUpdate:modelValue":g[0]||(g[0]=T=>re(x)?x.value=T:null),class:"ml-4"},{default:l(()=>[p(N,{label:"oneType",size:"large"},{default:l(()=>[dt]),_:1}),p(N,{label:"twoType",size:"large"},{default:l(()=>[mt]),_:1}),p(N,{label:"threeType",size:"large"},{default:l(()=>[ut]),_:1})]),_:1},8,["modelValue"])])]),t("div",_t,[t("div",xt,d(m(W)("layout.darkMode")),1),t("div",ht,[p(H,{modelValue:m($),"onUpdate:modelValue":g[1]||(g[1]=T=>re($)?$.value=T:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),t("div",ft,[t("div",vt,d(m(W)("layout.themeColor")),1),t("div",yt,[p(G,{modelValue:m(D),"onUpdate:modelValue":g[2]||(g[2]=T=>re(D)?D.value=T:null)},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const gt=we(kt,[["__scopeId","data-v-03a04936"]]),bt={class:"h-[100%] w-[100%] flex items-center justify-center px-[8px]"},wt=M({__name:"switch-lang",setup(R){const V=ue(),y=se(),j=B=>{y.$patch($=>{$.lang=B,U.set({key:"lang",data:B})}),Re.loadLocaleMessages(V.meta.app||"",V.path,y.lang),location.reload()};return(B,$)=>{const x=le,D=Se,v=$e,g=Ee;return e(),i(g,{onCommand:j,tabindex:1,class:"h-[100%] w-[100%]"},{dropdown:l(()=>[p(v,null,{default:l(()=>[p(D,{command:"zh-cn",disabled:m(y).lang=="zh-cn"},{default:l(()=>[J("简体中文")]),_:1},8,["disabled"]),p(D,{command:"en",disabled:m(y).lang=="en"},{default:l(()=>[J("English")]),_:1},8,["disabled"])]),_:1})]),default:l(()=>[t("div",bt,[p(x,{name:"iconfont-iconfanyi"})])]),_:1})}}}),Ct={class:"userinfo flex h-full items-center"},St={class:"user-name pl-[8px]"},$t=M({__name:"user-info",setup(R){const V=ge(),y=j=>{switch(j){case"logout":V.logout();break}};return(j,B)=>{const $=Je,x=le,D=ve("router-link"),v=Se,g=$e,I=Ee;return e(),i(I,{onCommand:y,tabindex:1},{dropdown:l(()=>[p(g,null,{default:l(()=>[p(v,{command:"usercenter"},{default:l(()=>[p(D,{to:"/user/center"},{default:l(()=>[J("个人中心")]),_:1})]),_:1}),p(v,{command:"logout"},{default:l(()=>[J("退出登录")]),_:1})]),_:1})]),default:l(()=>[t("div",Ct,[p($,{size:25,icon:m(Ze)},null,8,["icon"]),t("div",St,d(m(V).userInfo.username),1),p(x,{name:"element-ArrowDown",class:"ml-[5px]"})])]),_:1})}}}),Et=R=>(he("data-v-cac7a501"),R=R(),fe(),R),zt={class:"left-panel h-full flex items-center"},Vt=Et(()=>t("a",{href:"javascript:;",title:"切换",class:"iconfont iconqiehuan2"},null,-1)),It=[Vt],Tt={class:"flex items-center h-full pl-[10px] hidden-xs-only"},Lt={class:"right-panel h-full flex items-center justify-end"},jt=["title"],Dt={class:"navbar-item !px-[0] flex items-center h-full cursor-pointer"},At={class:"navbar-item !px-[0] flex items-center h-full cursor-pointer"},Ft={class:"navbar-item flex items-center h-full cursor-pointer"},Rt={class:"dialog-footer"},Bt={class:"flex flex-wrap"},Ut=["onClick"],Wt=["onClick"],qt={class:"dialog-footer"},Nt=M({__name:"index",setup(R){const V=Ce(),y=U.get("app_type"),{toggle:j,isFullscreen:B}=Ae(),$=se(),x=be(),D=ue(),v=L(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),g=q(()=>$.dark);ze(()=>{window.onresize=()=>(()=>{v.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()}),ye(v,()=>{v.value<992?$.menuIsCollapse||$.toggleMenuCollapse(!0):$.menuIsCollapse&&$.toggleMenuCollapse(!1)});const I=()=>{x.routeRefreshTag&&x.refreshRouterView()},N=q(()=>{const u=D.matched.filter(E=>E.meta.title);return u[0]&&u[0].path=="/"&&u.splice(0,1),u}),A=L(),H=L(!1),G=()=>{Xe().then(u=>{H.value=!0,A.value=u.data;for(let E=0;E<A.value.length;E++)A.value[E].is_use==1&&(F.value=A.value[E].view_path)})},F=L(""),ee=()=>{Ye({view_path:F.value}).then(()=>{H.value=!1,V.go(0)})};let T=L(!1);T.value=U.get("floatMenuStyle")||!1;const X=u=>{T.value=u,U.set({key:"floatMenuStyle",data:u}),location.reload()};return(u,E)=>{const C=le,ne=He,oe=Ge,_=Me,h=et,b=lt,K=tt,z=ke;return e(),i(z,{class:O(["h-full px-[10px]",{"layout-header border-b border-color":!m(g)}])},{default:l(()=>[p(h,{class:"w-100 h-full w-full"},{default:l(()=>[p(_,{span:12},{default:l(()=>[t("div",zt,[m(T)?(e(),s("div",{key:0,class:"navbar-item flex items-center h-full cursor-pointer",onClick:E[0]||(E[0]=f=>X(!1))},It)):o("",!0),t("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:I},[p(C,{name:"element-Refresh"})]),t("div",Tt,[p(oe,{separator:"/"},{default:l(()=>[(e(!0),s(c,null,S(m(N),(f,P)=>(e(),i(ne,{key:P},{default:l(()=>[J(d(f.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),p(_,{span:12},{default:l(()=>[t("div",Lt,[m(y)=="site"?(e(),s("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:m(W)("newInfo")},null,8,jt)):o("",!0),m(y)=="site"?(e(),s("div",{key:1,class:"navbar-item flex items-center h-full cursor-pointer",onClick:G},[p(C,{name:"iconfont-iconqiehuan",title:m(W)("indexSwitch")},null,8,["title"])])):o("",!0),t("div",Dt,[p(wt)]),t("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:E[1]||(E[1]=(...f)=>m(j)&&m(j)(...f))},[m(B)?(e(),i(C,{key:0,name:"iconfont-icontuichuquanping"})):(e(),i(C,{key:1,name:"iconfont-iconquanping"}))]),t("div",At,[p(gt)]),t("div",Ft,[p($t)])])]),_:1})]),_:1}),Ve(t("input",{type:"hidden","onUpdate:modelValue":E[2]||(E[2]=f=>u.comparisonToken=f)},null,512),[[Fe,u.comparisonToken]]),p(K,{modelValue:u.detectionLoginDialog,"onUpdate:modelValue":E[3]||(E[3]=f=>u.detectionLoginDialog=f),title:m(W)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:l(()=>[t("span",Rt,[p(b,{onClick:u.detectionLoginFn},{default:l(()=>[J(d(m(W)("layout.detectionLoginOperation")),1)]),_:1},8,["onClick"])])]),default:l(()=>[t("span",null,d(m(W)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),p(K,{modelValue:H.value,"onUpdate:modelValue":E[4]||(E[4]=f=>H.value=f),title:m(W)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:l(()=>[t("span",qt,[p(b,{type:"primary",onClick:ee},{default:l(()=>[J(d(m(W)("confirm")),1)]),_:1})])]),default:l(()=>[t("div",Bt,[F.value==""?(e(!0),s(c,{key:0},S(A.value,(f,P)=>(e(),s("div",{key:P},[t("div",{onClick:ie=>F.value=f.view_path,class:O(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",f.is_use==1?"bg-primary text-[#fff]":""])},[t("span",null,d(f.name),1)],10,Ut)]))),128)):(e(!0),s(c,{key:1},S(A.value,(f,P)=>(e(),s("div",{key:P},[t("div",{onClick:ie=>F.value=f.view_path,class:O(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",F.value==f.view_path?"bg-primary text-[#fff]":""])},[t("span",null,d(f.name),1)],10,Wt)]))),128))])]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const Ht=we(Nt,[["__scopeId","data-v-cac7a501"]]);const Gt={key:0,class:"w-[65px] overflow-hidden"},Kt={class:"h-full flex flex-col relative"},Ot=t("span",{class:"iconfont icontuodong !text-[30px]"},null,-1),Pt=[Ot],Qt=t("span",{class:"iconfont iconshouye !text-[24px]"},null,-1),Zt=[Qt],Jt={class:"mb-[20px]"},Xt=["onClick"],Yt={key:1,class:"flex absolute bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap left-0 top-[65px] z-50 box-border shadow-lg"},Mt=["onClick"],el=["src","title"],tl={key:0,class:"w-[189px] box-border border-r-[1px] border-solid second-menu"},ll={class:"group flex flex-col items-center justify-center h-[64px] border-b-[1px] border-solid second-head cursor-pointer relative"},sl={class:"flex items-center"},al=["src"],nl={key:1,class:"flex items-center justify-center w-[30px] h-[30px]"},ol={key:0,class:"hidden group-hover:flex absolute bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap left-0 top-[65px] z-[5555] box-border shadow-lg"},il=["onClick"],cl=["src","title"],rl={class:"w-[16px] h-[16px] relative flex items-center"},pl={class:"ml-[11px] text-[15px]"},dl={class:"w-[16px] h-[16px] relative flex items-center"},ml={key:1,class:"iconfont icondian !text-[25px]"},ul={class:"ml-[11px] text-[15px]"},_l=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),xl={class:"ml-[11px] text-[15px]"},hl={class:"text-[14px]"},fl={class:"text-[14px]"},vl={class:"text-[14px]"},yl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},kl={class:"ml-[11px] text-[15px]"},gl=["onClick"],bl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},wl={class:"ml-[11px] text-[15px]"},Cl=t("div",{class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},null,-1),Sl={class:"w-[16px] h-[16px] relative flex items-center"},$l={class:"ml-[11px] text-[15px]"},El={class:"w-[16px] h-[16px] relative flex items-center"},zl={class:"ml-[11px] text-[15px]"},Vl=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),Il={class:"ml-[11px] text-[15px]"},Tl={class:"text-[14px]"},Ll={class:"text-[14px]"},jl={class:"text-[14px]"},Dl={class:"w-[16px] h-[16px] relative flex items-center"},Al={class:"ml-[11px] text-[15px]"},Fl=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),Rl={class:"ml-[11px] text-[15px]"},Bl={class:"text-[14px]"},Ul={class:"text-[14px]"},Wl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},ql={class:"ml-[11px] text-[15px]"},Nl={key:0,class:"w-[16px] h-[16px] relative flex items-center"},Hl={class:"ml-[11px] text-[15px]"},Gl={class:"w-[16px] h-[16px] relative flex items-center"},Kl={class:"ml-[11px] text-[15px]"},Ol={class:"w-[16px] h-[16px] relative flex items-center"},Pl={class:"ml-[11px] text-[15px]"},Ql=t("div",{class:"w-[16px] h-[16px] relative flex items-center justify-center"},[t("span",{class:"iconfont icondian !text-[25px]"})],-1),Zl={class:"ml-[11px] text-[15px]"},Jl={class:"text-[14px]"},Xl={class:"text-[14px]"},Yl={class:"text-[14px]"},Ml=["onClick"],es={class:"text-[15px]"},ts={key:0,class:"w-[16px] h-[16px] relative flex items-center"},ls={class:"ml-[11px] text-[15px]"},ss=M({__name:"index",setup(R){const V=ge(),y=se(),j=ue(),B=Ce(),$=L(""),x=L("");$.value=U.get("menuAppStorage"),x.value=U.get("menuAppStorage");const D=L(!1),v=L([]),g=L([]),I=L([]);(async()=>{const _=await st();v.value=v.value.concat(_.data),v.value.forEach((h,b)=>{h.type=="app"&&g.value.push(h.key),h.type=="addon"&&I.value.push(h.key)}),I.value=I.value.concat(["member","app_center"]),D.value=!0})();const A=L(!1),H=()=>{const _=U.get("menuAppStorage");_?B.push({name:G.value[_]}):B.push({path:"/"})},G=L({}),F=q(()=>{const _=[];return V.routers.forEach((h,b)=>{h.children&&h.children.length?(h.name=xe(h.children),G.value[h.meta.app]=xe(h.children),_.push(h)):(G.value[h.meta.app]=h.name,_.push(h))}),v.value&&v.value.length&&v.value.forEach((h,b)=>{_.forEach((K,z)=>{h.key==K.meta.key&&(K.meta.parentTitle=h.title,K.meta.parentIcon=h.icon)})}),_}),ee=q(()=>y.dark),T=L(""),X=L("");ye(j,()=>{T.value=U.get("plugMenuTypeStorage");const _=j.matched[1];X.value=j.matched[1],x.value=_.meta.key,y.$patch(h=>{h.menuDrawer=!1})},{immediate:!0});const u=_=>{if(!_.meta&&_.type=="app"||_.meta.key!="official_market"){let h=_.name;if(_.type=="app"){$.value=_.key,x.value=_.key,U.set({key:"menuAppStorage",data:_.key}),U.set({key:"plugMenuTypeStorage",data:""});const b=V.appMenuList;b.push(_.key),V.setAppMenuList(b),A.value=!1,h=G.value[_.key]}B.push({name:h})}else window.open("https://www.niucloud.com/product/","_blank")},E=q(()=>y.sidebar),C=L(!1);C.value=U.get("floatMenuStyle")||!1;const ne=()=>{C.value=!0,U.set({key:"floatMenuStyle",data:!0}),location.reload()},oe=_=>I.value.includes(x.value)&&$.value==_.meta.app||C.value&&!g.value.includes(x.value)&&!I.value.includes(x.value)&&$.value==_.meta.app||C.value&&g.value.includes(x.value)&&(_.meta.key==x.value||_.meta.app==x.value)||C.value&&!g.value.length&&(_.meta.key==x.value||_.meta.app==x.value)||!C.value&&!I.value.includes(x.value)&&(_.meta.key==x.value||_.meta.app==x.value);return(_,h)=>{const b=le,K=Te,z=Ke,f=Oe,P=Pe,ie=me;return D.value?(e(),s("div",{key:0,class:O(["flex",{"two-type":m(E)=="twoType"},{"three-type":m(E)=="threeType"}])},[C.value?o("",!0):(e(),s("div",Gt,[p(K,{class:O(["h-screen layout-aside w-[65px] pb-[30px] bg-[#F7F8FA] ease-in duration-200",{bright:!m(ee)}])},{default:l(()=>[t("div",Kt,[t("div",{class:"flex items-center justify-center h-[64px] cursor-pointer cut-style",onClick:h[0]||(h[0]=k=>A.value=!A.value)},Pt),t("div",{onClick:H,class:"flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap"},Zt),t("div",Jt,[(e(!0),s(c,null,S(m(F),(k,te)=>(e(),s(c,{key:te},[k.meta.app==""&&k.meta.attr=="common"?(e(),s("div",{key:0,onClick:a=>u(k),class:O(["flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap",{"bg-[#f1f2f6] text-color menu-item-active ":k.path==X.value.path||X.value.path=="/admin"&&k.path=="/index"||X.value.meta.app&&k.path=="/index"}])},[k.meta.icon?(e(),i(b,{key:0,name:k.meta.icon,class:"!w-auto",size:"24px",title:k.meta.title},null,8,["name","title"])):o("",!0)],10,Xt)):o("",!0)],64))),128))]),t("a",{href:"javascript:;",class:"absolute -bottom-[20px] left-[50%] cut-style iconfont icongengduo !text-[30px] qx",onClick:ne,title:"切换"})])]),_:1},8,["class"])])),!C.value&&A.value&&v.value.filter(k=>k.type==="app").length?(e(),s("div",Yt,[(e(!0),s(c,null,S(v.value,(k,te)=>(e(),s(c,{key:te},[k.type=="app"?(e(),s("div",{key:0,onClick:a=>u(k),class:"flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px] box-border w-[165px]"},[t("img",{src:m(de)(k.icon),class:"w-[44px] h-[44px] rounded-full mr-[5px]",alt:"",title:k.title},null,8,el),t("span",null,d(k.title),1)],8,Mt)):o("",!0)],64))),128))])):o("",!0),(e(!0),s(c,null,S(m(F),(k,te)=>(e(),s(c,{key:te},[oe(k)?(e(),s("div",tl,[t("div",ll,[t("div",sl,[C.value?(e(),s(c,{key:0},[k.meta.parentIcon?(e(),s("img",{key:0,src:m(de)(k.meta.parentIcon),class:"w-[40px] h-[40px] mr-[8px]",alt:""},null,8,al)):(e(),s("div",nl,[k.meta.icon?(e(),i(b,{key:0,name:k.meta.icon,class:"!w-auto",size:"24px"},null,8,["name"])):o("",!0)]))],64)):o("",!0),t("span",null,d(k.meta.app?k.meta.parentTitle:k.meta.title),1)]),C.value&&v.value.filter(a=>a.type==="app").length?(e(),s("div",ol,[(e(!0),s(c,null,S(v.value,(a,ae)=>(e(),s(c,{key:ae},[a.type=="app"?(e(),s("div",{key:0,onClick:n=>u(a),class:"flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px] w-[165px] box-border"},[t("img",{src:m(de)(a.icon),class:"w-[44px] h-[44px] rounded-full mr-[5px]",alt:"",title:a.title},null,8,cl),t("span",null,d(a.title),1)],8,il)):o("",!0)],64))),128))])):o("",!0)]),p(ie,{class:"overflow-y-auto menus-wrap"},{default:l(()=>[p(P,{class:"apply-menu !border-0",router:!0,"unique-opened":"true","default-active":String(m(j).name)},{default:l(()=>[!C.value||C.value&&g.value.length?(e(),s(c,{key:0},[(e(!0),s(c,null,S(k.children,(a,ae)=>(e(),s(c,null,[a.children&&a.meta.show?(e(),i(f,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",rl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",pl,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,Y)=>(e(),s(c,{key:Y},[n.children&&n.meta.show?(e(),i(f,{key:0,index:String(n.meta.title),class:"three-menu"},{title:l(()=>[t("div",dl,[n.meta.icon&&C.value?(e(),i(b,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0),C.value?o("",!0):(e(),s("span",ml))]),t("span",ul,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,Q)=>(e(),s(c,{key:Q},[r.children&&r.meta.show?(e(),i(f,{key:0,index:String(r.meta.title)},{title:l(()=>[_l,t("span",xl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(w,Z)=>(e(),s(c,{key:Z},[w.meta.show?(e(),i(z,{key:0,class:"!h-[52px] !pl-[55px]",index:String(w.name),onClick:ce=>u(w)},{title:l(()=>[t("span",hl,d(w.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(z,{key:1,class:"!h-[52px] !pl-[35px]",index:String(r.name),onClick:w=>u(r)},{title:l(()=>[t("span",fl,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.show?(e(),i(z,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",vl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):a.meta.show&&a.meta.key!="official_market"?(e(),i(z,{key:1,class:"!pl-[25px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",yl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",kl,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):a.meta.show&&a.meta.key=="official_market"?(e(),s("div",{key:2,class:"flex items-center !px-[25px] h-[56px] cursor-pointer text-[#333] el-menu-item",onClick:n=>u(a)},[a.meta.icon?(e(),s("div",bl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",wl,d(a.meta.title),1)],8,gl)):o("",!0)],64))),256)),g.value.includes(x.value)||I.value.includes(x.value)||C.value?(e(),s(c,{key:0},[Cl,(e(!0),s(c,null,S(m(F),(a,ae)=>(e(),s(c,null,[a.meta.attr=="system"&&!a.meta.app&&a.children?(e(),i(f,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",Sl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",$l,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,Y)=>(e(),s(c,{key:Y},[n.meta.app&&n.children?(e(),i(f,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",El,[n.meta.icon?(e(),i(b,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",zl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,Q)=>(e(),s(c,{key:Q},[r.children&&r.meta.show?(e(),i(f,{key:0,index:String(r.meta.title)},{title:l(()=>[Vl,t("span",Il,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(w,Z)=>(e(),s(c,{key:Z},[w.meta.show?(e(),i(z,{key:0,class:"!h-[52px] !pl-[55px]",index:String(w.name),onClick:ce=>u(w)},{title:l(()=>[t("span",Tl,d(w.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(z,{key:1,class:"!ml-[30px] !h-[52px] !pl-[35px]",index:String(r.name),onClick:w=>u(r)},{title:l(()=>[t("span",Ll,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):o("",!0),n.meta.show?(e(),i(z,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",jl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128)),I.value.includes(x.value)&&T.value?(e(!0),s(c,{key:0},S(m(F),(n,Y)=>(e(),s(c,null,[n.meta.app&&n.meta.app==T.value&&n.children?(e(),i(f,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",Dl,[n.meta.icon?(e(),i(b,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Al,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,Q)=>(e(),s(c,{key:Q},[r.children&&r.meta.show?(e(),i(f,{key:0,index:String(r.meta.title)},{title:l(()=>[Fl,t("span",Rl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(r.children,(w,Z)=>(e(),s(c,{key:Z},[w.meta.show?(e(),i(z,{key:0,class:"!h-[52px] !pl-[55px]",index:String(w.name),onClick:ce=>u(w)},{title:l(()=>[t("span",Bl,d(w.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(z,{key:1,class:"!ml-[30px] !h-[52px] !pl-[35px]",index:String(r.name),onClick:w=>u(r)},{title:l(()=>[t("span",Ul,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.app&&n.meta.app==T.value?(e(),i(z,{key:1,class:"!pl-[25px] text-[#333]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[n.meta.icon?(e(),s("div",Wl,[n.meta.icon?(e(),i(b,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",ql,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256)):o("",!0)]),_:2},1032,["index"])):a.meta.attr=="system"&&!a.meta.app?(e(),i(z,{key:1,class:"!pl-[25px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",Nl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",Hl,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256))],64)):o("",!0)],64)):o("",!0),C.value?(e(),s(c,{key:1},[t("div",{class:O(["!border-0 border-solid mx-[25px] bg-[#f7f7f7] my-[5px]",C.value&&!g.value.length?"":"!border-t-[1px]"])},null,2),(e(!0),s(c,null,S(m(F),(a,ae)=>(e(),s(c,null,[a.meta.attr=="common"&&!a.meta.app&&a.children?(e(),i(f,{key:0,index:String(a.meta.title)},{title:l(()=>[t("div",Gl,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Kl,d(a.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(a.children,(n,Y)=>(e(),s(c,{key:Y},[n.children&&n.meta.show?(e(),i(f,{key:0,index:String(n.meta.title)},{title:l(()=>[t("div",Ol,[n.meta.icon?(e(),i(b,{key:0,name:n.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)]),t("span",Pl,d(n.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(r,Q)=>(e(),s(c,{key:Q},[r.children&&r.meta.show?(e(),i(f,{key:0,index:String(r.meta.title)},{title:l(()=>[Ql,t("span",Zl,d(r.meta.title),1)]),default:l(()=>[(e(!0),s(c,null,S(n.children,(w,Z)=>(e(),s(c,{key:Z},[w.meta.show?(e(),i(z,{key:0,class:"!h-[52px] !pl-[55px]",index:String(w.name),onClick:ce=>u(w)},{title:l(()=>[t("span",Jl,d(w.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):r.meta.show?(e(),i(z,{key:1,class:"!h-[52px] !pl-[55px]",index:String(r.name),onClick:w=>u(r)},{title:l(()=>[t("span",Xl,d(r.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),128))]),_:2},1032,["index"])):n.meta.show&&n.meta.key!="official_market"?(e(),i(z,{key:1,class:"!h-[52px] !pl-[52px]",index:String(n.name),onClick:r=>u(n)},{title:l(()=>[t("span",Yl,d(n.meta.title),1)]),_:2},1032,["index","onClick"])):n.meta.show&&n.meta.key=="official_market"?(e(),s("div",{key:2,class:"flex items-center !px-[52px] h-[56px] cursor-pointer text-[#333] el-menu-item",onClick:r=>u(n)},[t("span",es,d(a.meta.title),1)],8,Ml)):o("",!0)],64))),128))]),_:2},1032,["index"])):a.meta.attr=="common"?(e(),i(z,{key:1,class:"!pl-[35px] text-[#333]",index:String(a.name),onClick:n=>u(a)},{title:l(()=>[a.meta.icon?(e(),s("div",ts,[a.meta.icon?(e(),i(b,{key:0,name:a.meta.icon,class:"absolute !w-auto",size:"18px"},null,8,["name"])):o("",!0)])):o("",!0),t("span",ls,d(a.meta.title),1)]),_:2},1032,["index","onClick"])):o("",!0)],64))),256))],64)):o("",!0)]),_:2},1032,["default-active"])]),_:2},1024)])):o("",!0)],64))),128))],2)):o("",!0)}}});const as={class:"common-layout min-w-[1200px]"},ca=M({__name:"index",setup(R){const V=be(),y=se(),j=q(()=>y.dark);return(B,$)=>{const x=Le,D=ve("router-view"),v=me,g=je,I=ke;return e(),s("div",as,[p(I,{class:"w-100 h-screen"},{default:l(()=>[p(ss),p(I,null,{default:l(()=>[p(x,null,{default:l(()=>[p(Ht)]),_:1}),p(g,{class:O(["main-wrap h-full p-0",{"bg-page":m(j)}])},{default:l(()=>[p(v,null,{default:l(()=>[t("div",null,[m(V).routeRefreshTag?(e(),i(D,{key:0},{default:l(({Component:N,route:A})=>[(e(),i(Ie(N),{key:A.fullPath}))]),_:1})):o("",!0)])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})])}}});export{ca as default};
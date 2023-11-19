import{d as fe,U as Ne,C as Ee,f as yt,j as Ct,e as Nt,w as Et,g as wt,v as Ae}from"./event-3e082a4a.js";import{d as de,Q as $t,D as Ze,c as k,V as U,b as h,e as _,C as G,m as F,p as M,q as X,n as T,F as re,f as oe,r as S,t as he,v as St,x as se,K as Tt,T as He,N as Vt,E as Lt,M as Pt,w as ae,ap as Dt,o as Ge,A as ie,l as Mt,aE as _t,L as ke,u as d,h as It,i as zt,g as Ft}from"./runtime-core.esm-bundler-c17ab5bc.js";import{E as Xe}from"./index-72bf6cb5.js";import{E as ve,a6 as Ye,l as Je,j as Bt,G as _e,k as xt,b as Qe,d as me,i as et,A as At,c as Ht,r as Kt,v as Ot,p as qt,W as Rt}from"./index-9ef6974e.js";import{b as Ut,E as Wt}from"./index-784d7581.js";import{E as jt}from"./index-6ff31475.js";import{u as ce,_ as we}from"./plugin-vue_export-helper-c018272e.js";import{u as tt,E as H}from"./index-4b62c73a.js";import{g as Zt}from"./rand-14326ce1.js";import{c as Ke}from"./strings-e72e60f7.js";import{i as ge}from"./isEqual-ca98cf0c.js";import{i as Gt,f as be,g as nt}from"./aria-adfa05c5.js";import{u as Oe,c as qe}from"./arrays-e667dc24.js";import{s as Xt}from"./focus-trap-c0148071.js";import{c as st}from"./cloneDeep-028669bf.js";import{E as Yt,i as Jt}from"./index-5f2625ed.js";import{u as Qt,E as Re}from"./index-138bfa06.js";import{t as en,E as Ue}from"./index-5c20ff8f.js";import{C as tn}from"./index-bfecf17f.js";import{d as nn}from"./debounce-196ce6a6.js";var sn=1/0;function an(e){var t=e==null?0:e.length;return t?Ut(e,sn):[]}var ln=de({name:"NodeContent",setup(){return{ns:ce("cascader-node")}},render(){const{ns:e}=this,{node:t,panel:a}=this.$parent,{data:s,label:o}=t,{renderLabelFn:p}=a;return $t("span",{class:e.e("label")},p?p({node:t,data:s}):o)}});const ze=Symbol(),on=de({name:"ElCascaderNode",components:{ElCheckbox:Wt,ElRadio:jt,NodeContent:ln,ElIcon:ve,Check:Ye,Loading:Je,ArrowRight:Bt},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:t}){const a=Ze(ze),s=ce("cascader-node"),o=k(()=>a.isHoverMenu),p=k(()=>a.config.multiple),c=k(()=>a.config.checkStrictly),v=k(()=>{var m;return(m=a.checkedNodes[0])==null?void 0:m.uid}),u=k(()=>e.node.isDisabled),b=k(()=>e.node.isLeaf),w=k(()=>c.value&&!b.value||!u.value),P=k(()=>I(a.expandingNode)),D=k(()=>c.value&&a.checkedNodes.some(I)),I=m=>{var V;const{level:O,uid:te}=e.node;return((V=m==null?void 0:m.pathNodes[O-1])==null?void 0:V.uid)===te},x=()=>{P.value||a.expandNode(e.node)},Y=m=>{const{node:V}=e;m!==V.checked&&a.handleCheckChange(V,m)},$=()=>{a.lazyLoad(e.node,()=>{b.value||x()})},K=m=>{o.value&&(L(),!b.value&&t("expand",m))},L=()=>{const{node:m}=e;!w.value||m.loading||(m.loaded?x():$())},W=()=>{o.value&&!b.value||(b.value&&!u.value&&!c.value&&!p.value?A(!0):L())},B=m=>{c.value?(Y(m),e.node.loaded&&x()):A(m)},A=m=>{e.node.loaded?(Y(m),!c.value&&x()):$()};return{panel:a,isHoverMenu:o,multiple:p,checkStrictly:c,checkedNodeId:v,isDisabled:u,isLeaf:b,expandable:w,inExpandingPath:P,inCheckedPath:D,ns:s,handleHoverExpand:K,handleExpand:L,handleClick:W,handleCheck:A,handleSelectCheck:B}}}),rn=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],cn=oe("span",null,null,-1);function un(e,t,a,s,o,p){const c=U("el-checkbox"),v=U("el-radio"),u=U("check"),b=U("el-icon"),w=U("node-content"),P=U("loading"),D=U("arrow-right");return h(),_("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:T([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:t[2]||(t[2]=(...I)=>e.handleHoverExpand&&e.handleHoverExpand(...I)),onFocus:t[3]||(t[3]=(...I)=>e.handleHoverExpand&&e.handleHoverExpand(...I)),onClick:t[4]||(t[4]=(...I)=>e.handleClick&&e.handleClick(...I))},[G(" prefix "),e.multiple?(h(),F(c,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:t[0]||(t[0]=fe(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(h(),F(v,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:t[1]||(t[1]=fe(()=>{},["stop"]))},{default:M(()=>[G(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),cn]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(h(),F(b,{key:2,class:T(e.ns.e("prefix"))},{default:M(()=>[X(u)]),_:1},8,["class"])):G("v-if",!0),G(" content "),X(w),G(" postfix "),e.isLeaf?G("v-if",!0):(h(),_(re,{key:3},[e.node.loading?(h(),F(b,{key:0,class:T([e.ns.is("loading"),e.ns.e("postfix")])},{default:M(()=>[X(P)]),_:1},8,["class"])):(h(),F(b,{key:1,class:T(["arrow-right",e.ns.e("postfix")])},{default:M(()=>[X(D)]),_:1},8,["class"]))],64))],42,rn)}var dn=we(on,[["render",un],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);const pn=de({name:"ElCascaderMenu",components:{Loading:Je,ElIcon:ve,ElScrollbar:Xe,ElCascaderNode:dn},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const t=Tt(),a=ce("cascader-menu"),{t:s}=tt(),o=Zt();let p=null,c=null;const v=Ze(ze),u=S(null),b=k(()=>!e.nodes.length),w=k(()=>!v.initialLoaded),P=k(()=>`cascader-menu-${o}-${e.index}`),D=$=>{p=$.target},I=$=>{if(!(!v.isHoverMenu||!p||!u.value))if(p.contains($.target)){x();const K=t.vnode.el,{left:L}=K.getBoundingClientRect(),{offsetWidth:W,offsetHeight:B}=K,A=$.clientX-L,m=p.offsetTop,V=m+p.offsetHeight;u.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${A} ${m} L${W} 0 V${m} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${A} ${V} L${W} ${B} V${V} Z" />
        `}else c||(c=window.setTimeout(Y,v.config.hoverThreshold))},x=()=>{c&&(clearTimeout(c),c=null)},Y=()=>{u.value&&(u.value.innerHTML="",x())};return{ns:a,panel:v,hoverZone:u,isEmpty:b,isLoading:w,menuId:P,t:s,handleExpand:D,handleMouseMove:I,clearHoverZone:Y}}});function fn(e,t,a,s,o,p){const c=U("el-cascader-node"),v=U("loading"),u=U("el-icon"),b=U("el-scrollbar");return h(),F(b,{key:e.menuId,tag:"ul",role:"menu",class:T(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:M(()=>{var w;return[(h(!0),_(re,null,he(e.nodes,P=>(h(),F(c,{key:P.uid,node:P,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(h(),_("div",{key:0,class:T(e.ns.e("empty-text"))},[X(u,{size:"14",class:T(e.ns.is("loading"))},{default:M(()=>[X(v)]),_:1},8,["class"]),St(" "+se(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(h(),_("div",{key:1,class:T(e.ns.e("empty-text"))},se(e.t("el.cascader.noData")),3)):(w=e.panel)!=null&&w.isHoverMenu?(h(),_("svg",{key:2,ref:"hoverZone",class:T(e.ns.e("hover-zone"))},null,2)):G("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var hn=we(pn,[["render",fn],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);let vn=0;const mn=e=>{const t=[e];let{parent:a}=e;for(;a;)t.unshift(a),a=a.parent;return t};class ue{constructor(t,a,s,o=!1){this.data=t,this.config=a,this.parent=s,this.root=o,this.uid=vn++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:p,label:c,children:v}=a,u=t[v],b=mn(this);this.level=o?0:s?s.level+1:1,this.value=t[p],this.label=t[c],this.pathNodes=b,this.pathValues=b.map(w=>w.value),this.pathLabels=b.map(w=>w.label),this.childrenData=u,this.children=(u||[]).map(w=>new ue(w,a,this)),this.loaded=!a.lazy||this.isLeaf||!_e(u)}get isDisabled(){const{data:t,parent:a,config:s}=this,{disabled:o,checkStrictly:p}=s;return(He(o)?o(t,this):!!t[o])||!p&&(a==null?void 0:a.isDisabled)}get isLeaf(){const{data:t,config:a,childrenData:s,loaded:o}=this,{lazy:p,leaf:c}=a,v=He(c)?c(t,this):t[c];return xt(v)?p&&!o?!1:!(Array.isArray(s)&&s.length):!!v}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(t){const{childrenData:a,children:s}=this,o=new ue(t,this.config,this);return Array.isArray(a)?a.push(t):this.childrenData=[t],s.push(o),o}calcText(t,a){const s=t?this.pathLabels.join(a):this.label;return this.text=s,s}broadcast(t,...a){const s=`onParent${Ke(t)}`;this.children.forEach(o=>{o&&(o.broadcast(t,...a),o[s]&&o[s](...a))})}emit(t,...a){const{parent:s}=this,o=`onChild${Ke(t)}`;s&&(s[o]&&s[o](...a),s.emit(t,...a))}onParentCheck(t){this.isDisabled||this.setCheckState(t)}onChildCheck(){const{children:t}=this,a=t.filter(o=>!o.isDisabled),s=a.length?a.every(o=>o.checked):!1;this.setCheckState(s)}setCheckState(t){const a=this.children.length,s=this.children.reduce((o,p)=>{const c=p.checked?1:p.indeterminate?.5:0;return o+c},0);this.checked=this.loaded&&this.children.filter(o=>!o.isDisabled).every(o=>o.loaded&&o.checked)&&t,this.indeterminate=this.loaded&&s!==a&&s>0}doCheck(t){if(this.checked===t)return;const{checkStrictly:a,multiple:s}=this.config;a||!s?this.checked=t:(this.broadcast("check",t),this.setCheckState(t),this.emit("check"))}}const Ie=(e,t)=>e.reduce((a,s)=>(s.isLeaf?a.push(s):(!t&&a.push(s),a=a.concat(Ie(s.children,t))),a),[]);class We{constructor(t,a){this.config=a;const s=(t||[]).map(o=>new ue(o,this.config));this.nodes=s,this.allNodes=Ie(s,!1),this.leafNodes=Ie(s,!0)}getNodes(){return this.nodes}getFlattedNodes(t){return t?this.leafNodes:this.allNodes}appendNode(t,a){const s=a?a.appendChild(t):new ue(t,this.config);a||this.nodes.push(s),this.allNodes.push(s),s.isLeaf&&this.leafNodes.push(s)}appendNodes(t,a){t.forEach(s=>this.appendNode(s,a))}getNodeByValue(t,a=!1){return!t&&t!==0?null:this.getFlattedNodes(a).find(o=>ge(o.value,t)||ge(o.pathValues,t))||null}getSameNode(t){return t&&this.getFlattedNodes(!1).find(({value:s,level:o})=>ge(t.value,s)&&t.level===o)||null}}const at=Qe({modelValue:{type:me([Number,String,Array])},options:{type:me(Array),default:()=>[]},props:{type:me(Object),default:()=>({})}}),gn={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:Vt,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},kn=e=>k(()=>({...gn,...e.props})),je=e=>{if(!e)return 0;const t=e.id.split("-");return Number(t[t.length-2])},bn=e=>{if(!e)return;const t=e.querySelector("input");t?t.click():Gt(e)&&e.click()},yn=(e,t)=>{const a=t.slice(0),s=a.map(p=>p.uid),o=e.reduce((p,c)=>{const v=s.indexOf(c.uid);return v>-1&&(p.push(c),a.splice(v,1),s.splice(v,1)),p},[]);return o.push(...a),o},Cn=de({name:"ElCascaderPanel",components:{ElCascaderMenu:hn},props:{...at,border:{type:Boolean,default:!0},renderLabel:Function},emits:[Ne,Ee,"close","expand-change"],setup(e,{emit:t,slots:a}){let s=!1;const o=ce("cascader"),p=kn(e);let c=null;const v=S(!0),u=S([]),b=S(null),w=S([]),P=S(null),D=S([]),I=k(()=>p.value.expandTrigger==="hover"),x=k(()=>e.renderLabel||a.default),Y=()=>{const{options:i}=e,f=p.value;s=!1,c=new We(i,f),w.value=[c.getNodes()],f.lazy&&_e(e.options)?(v.value=!1,$(void 0,g=>{g&&(c=new We(g,f),w.value=[c.getNodes()]),v.value=!0,O(!1,!0)})):O(!1,!0)},$=(i,f)=>{const g=p.value;i=i||new ue({},g,void 0,!0),i.loading=!0;const C=E=>{const y=i,q=y.root?null:y;E&&(c==null||c.appendNodes(E,q)),y.loading=!1,y.loaded=!0,y.childrenData=y.childrenData||[],f&&f(E)};g.lazyLoad(i,C)},K=(i,f)=>{var g;const{level:C}=i,E=w.value.slice(0,C);let y;i.isLeaf?y=i.pathNodes[C-2]:(y=i,E.push(i.children)),((g=P.value)==null?void 0:g.uid)!==(y==null?void 0:y.uid)&&(P.value=i,w.value=E,!f&&t("expand-change",(i==null?void 0:i.pathValues)||[]))},L=(i,f,g=!0)=>{const{checkStrictly:C,multiple:E}=p.value,y=D.value[0];s=!0,!E&&(y==null||y.doCheck(!1)),i.doCheck(f),V(),g&&!E&&!C&&t("close"),!g&&!E&&!C&&W(i)},W=i=>{i&&(i=i.parent,W(i),i&&K(i))},B=i=>c==null?void 0:c.getFlattedNodes(i),A=i=>{var f;return(f=B(i))==null?void 0:f.filter(g=>g.checked!==!1)},m=()=>{D.value.forEach(i=>i.doCheck(!1)),V()},V=()=>{var i;const{checkStrictly:f,multiple:g}=p.value,C=D.value,E=A(!f),y=yn(C,E),q=y.map(z=>z.valueByOption);D.value=y,b.value=g?q:(i=q[0])!=null?i:null},O=(i=!1,f=!1)=>{const{modelValue:g}=e,{lazy:C,multiple:E,checkStrictly:y}=p.value,q=!y;if(!(!v.value||s||!f&&ge(g,b.value)))if(C&&!i){const J=Oe(an(qe(g))).map(j=>c==null?void 0:c.getNodeByValue(j)).filter(j=>!!j&&!j.loaded&&!j.loading);J.length?J.forEach(j=>{$(j,()=>O(!1,f))}):O(!0,f)}else{const z=E?qe(g):[g],J=Oe(z.map(j=>c==null?void 0:c.getNodeByValue(j,q)));te(J,f),b.value=st(g)}},te=(i,f=!0)=>{const{checkStrictly:g}=p.value,C=D.value,E=i.filter(z=>!!z&&(g||z.isLeaf)),y=c==null?void 0:c.getSameNode(P.value),q=f&&y||E[0];q?q.pathNodes.forEach(z=>K(z,!0)):P.value=null,C.forEach(z=>z.doCheck(!1)),E.forEach(z=>z.doCheck(!0)),D.value=E,ie(ne)},ne=()=>{et&&u.value.forEach(i=>{const f=i==null?void 0:i.$el;if(f){const g=f.querySelector(`.${o.namespace.value}-scrollbar__wrap`),C=f.querySelector(`.${o.b("node")}.${o.is("active")}`)||f.querySelector(`.${o.b("node")}.in-active-path`);Xt(g,C)}})},$e=i=>{const f=i.target,{code:g}=i;switch(g){case H.up:case H.down:{i.preventDefault();const C=g===H.up?-1:1;be(nt(f,C,`.${o.b("node")}[tabindex="-1"]`));break}case H.left:{i.preventDefault();const C=u.value[je(f)-1],E=C==null?void 0:C.$el.querySelector(`.${o.b("node")}[aria-expanded="true"]`);be(E);break}case H.right:{i.preventDefault();const C=u.value[je(f)+1],E=C==null?void 0:C.$el.querySelector(`.${o.b("node")}[tabindex="-1"]`);be(E);break}case H.enter:bn(f);break}};return Lt(ze,Pt({config:p,expandingNode:P,checkedNodes:D,isHoverMenu:I,initialLoaded:v,renderLabelFn:x,lazyLoad:$,expandNode:K,handleCheckChange:L})),ae([p,()=>e.options],Y,{deep:!0,immediate:!0}),ae(()=>e.modelValue,()=>{s=!1,O()},{deep:!0}),ae(()=>b.value,i=>{ge(i,e.modelValue)||(t(Ne,i),t(Ee,i))}),Dt(()=>u.value=[]),Ge(()=>!_e(e.modelValue)&&O()),{ns:o,menuList:u,menus:w,checkedNodes:D,handleKeyDown:$e,handleCheckChange:L,getFlattedNodes:B,getCheckedNodes:A,clearCheckedNodes:m,calculateCheckedValue:V,scrollToExpandingNode:ne}}});function Nn(e,t,a,s,o,p){const c=U("el-cascader-menu");return h(),_("div",{class:T([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:t[0]||(t[0]=(...v)=>e.handleKeyDown&&e.handleKeyDown(...v))},[(h(!0),_(re,null,he(e.menus,(v,u)=>(h(),F(c,{key:u,ref_for:!0,ref:b=>e.menuList[u]=b,index:u,nodes:[...v]},null,8,["index","nodes"]))),128))],34)}var ye=we(Cn,[["render",Nn],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);ye.install=e=>{e.component(ye.name,ye)};const lt=ye,Jn=lt,En=Qe({...at,size:At,placeholder:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:me(Function),default:(e,t)=>e.text.includes(t)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:me(Function),default:()=>!0},popperClass:{type:String,default:""},teleported:Qt.teleported,tagType:{...en.type,default:"info"},validateEvent:{type:Boolean,default:!0}}),wn={[Ne]:e=>!!e||e===null,[Ee]:e=>!!e||e===null,focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,visibleChange:e=>Ht(e),expandChange:e=>!!e,removeTag:e=>!!e},$n={key:0},Sn=["placeholder","onKeydown"],Tn=["onClick"],Vn="ElCascader",Ln=de({name:Vn}),Pn=de({...Ln,props:En,emits:wn,setup(e,{expose:t,emit:a}){const s=e,o={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:n})=>{const{modifiersData:l,placement:r}=n;["right","left","bottom","top"].includes(r)||(l.arrow.x=35)},requires:["arrow"]}]},p=Mt();let c=0,v=0;const u=ce("cascader"),b=ce("input"),{t:w}=tt(),{form:P,formItem:D}=Kt(),I=S(null),x=S(null),Y=S(null),$=S(null),K=S(null),L=S(!1),W=S(!1),B=S(!1),A=S(""),m=S(""),V=S([]),O=S([]),te=S([]),ne=S(!1),$e=k(()=>p.style),i=k(()=>s.disabled||(P==null?void 0:P.disabled)),f=k(()=>s.placeholder||w("el.cascader.placeholder")),g=k(()=>m.value||V.value.length>0||ne.value?"":f.value),C=Ot(),E=k(()=>["small"].includes(C.value)?"small":"default"),y=k(()=>!!s.props.multiple),q=k(()=>!s.filterable||y.value),z=k(()=>y.value?m.value:A.value),J=k(()=>{var n;return((n=$.value)==null?void 0:n.checkedNodes)||[]}),j=k(()=>!s.clearable||i.value||B.value||!W.value?!1:!!J.value.length),Se=k(()=>{const{showAllLevels:n,separator:l}=s,r=J.value;return r.length?y.value?"":r[0].calcText(n,l):""}),Te=k({get(){return st(s.modelValue)},set(n){a(Ne,n),a(Ee,n),s.validateEvent&&(D==null||D.validate("change").catch(l=>yt()))}}),Fe=k(()=>{var n,l;return(l=(n=I.value)==null?void 0:n.popperRef)==null?void 0:l.contentRef}),ot=k(()=>[u.b(),u.m(C.value),u.is("disabled",i.value),p.class]),it=k(()=>[b.e("icon"),"icon-arrow-down",u.is("reverse",L.value)]),R=n=>{var l,r,N;i.value||(n=n??!L.value,n!==L.value&&(L.value=n,(r=(l=x.value)==null?void 0:l.input)==null||r.setAttribute("aria-expanded",`${n}`),n?(pe(),ie((N=$.value)==null?void 0:N.scrollToExpandingNode)):s.filterable&&De(),a("visibleChange",n)))},pe=()=>{ie(()=>{var n;(n=I.value)==null||n.updatePopper()})},Ve=()=>{B.value=!1},Le=n=>{const{showAllLevels:l,separator:r}=s;return{node:n,key:n.uid,text:n.calcText(l,r),hitState:!1,closable:!i.value&&!n.isDisabled,isCollapseTag:!1}},Pe=n=>{var l;const r=n.node;r.doCheck(!1),(l=$.value)==null||l.calculateCheckedValue(),a("removeTag",r.valueByOption)},rt=()=>{if(!y.value)return;const n=J.value,l=[],r=[];if(n.forEach(N=>r.push(Le(N))),O.value=r,n.length){const[N,...Q]=n,ee=Q.length;l.push(Le(N)),ee&&(s.collapseTags?l.push({key:-1,text:`+ ${ee}`,closable:!1,isCollapseTag:!0}):Q.forEach(Z=>l.push(Le(Z))))}V.value=l},Be=()=>{var n,l;const{filterMethod:r,showAllLevels:N,separator:Q}=s,ee=(l=(n=$.value)==null?void 0:n.getFlattedNodes(!s.props.checkStrictly))==null?void 0:l.filter(Z=>Z.isDisabled?!1:(Z.calcText(N,Q),r(Z,z.value)));y.value&&(V.value.forEach(Z=>{Z.hitState=!1}),O.value.forEach(Z=>{Z.hitState=!1})),B.value=!0,te.value=ee,pe()},ct=()=>{var n;let l;B.value&&K.value?l=K.value.$el.querySelector(`.${u.e("suggestion-item")}`):l=(n=$.value)==null?void 0:n.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`),l&&(l.focus(),!B.value&&l.click())},xe=()=>{var n,l;const r=(n=x.value)==null?void 0:n.input,N=Y.value,Q=(l=K.value)==null?void 0:l.$el;if(!(!et||!r)){if(Q){const ee=Q.querySelector(`.${u.e("suggestion-list")}`);ee.style.minWidth=`${r.offsetWidth}px`}if(N){const{offsetHeight:ee}=N,Z=V.value.length>0?`${Math.max(ee+6,c)}px`:`${c}px`;r.style.height=Z,pe()}}},ut=n=>{var l;return(l=$.value)==null?void 0:l.getCheckedNodes(n)},dt=n=>{pe(),a("expandChange",n)},le=n=>{var l;const r=(l=n.target)==null?void 0:l.value;if(n.type==="compositionend")ne.value=!1,ie(()=>Me(r));else{const N=r[r.length-1]||"";ne.value=!Jt(N)}},pt=n=>{if(!ne.value)switch(n.code){case H.enter:R();break;case H.down:R(!0),ie(ct),n.preventDefault();break;case H.esc:L.value===!0&&(n.preventDefault(),n.stopPropagation(),R(!1));break;case H.tab:R(!1);break}},ft=()=>{var n;(n=$.value)==null||n.clearCheckedNodes(),!L.value&&s.filterable&&De(),R(!1)},De=()=>{const{value:n}=Se;A.value=n,m.value=n},ht=n=>{var l,r;const{checked:N}=n;y.value?(l=$.value)==null||l.handleCheckChange(n,!N,!1):(!N&&((r=$.value)==null||r.handleCheckChange(n,!0,!1)),R(!1))},vt=n=>{const l=n.target,{code:r}=n;switch(r){case H.up:case H.down:{const N=r===H.up?-1:1;be(nt(l,N,`.${u.e("suggestion-item")}[tabindex="-1"]`));break}case H.enter:l.click();break}},mt=()=>{const n=V.value,l=n[n.length-1];v=m.value?0:v+1,!(!l||!v||s.collapseTags&&n.length>1)&&(l.hitState?Pe(l):l.hitState=!0)},gt=n=>{a("focus",n)},kt=n=>{a("blur",n)},bt=nn(()=>{const{value:n}=z;if(!n)return;const l=s.beforeFilter(n);_t(l)?l.then(Be).catch(()=>{}):l!==!1?Be():Ve()},s.debounce),Me=(n,l)=>{!L.value&&R(!0),!(l!=null&&l.isComposing)&&(n?bt():Ve())};return ae(B,pe),ae([J,i],rt),ae(V,()=>{ie(()=>xe())}),ae(Se,De,{immediate:!0}),Ge(()=>{const n=x.value.input,l=Number.parseFloat(Ct(b.cssVarName("input-height"),n).value)-2;c=n.offsetHeight||l,Nt(n,xe)}),t({getCheckedNodes:ut,cascaderPanelRef:Fe}),(n,l)=>(h(),F(d(Re),{ref_key:"tooltipRef",ref:I,visible:L.value,teleported:n.teleported,"popper-class":[d(u).e("dropdown"),n.popperClass],"popper-options":o,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${d(u).namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:Ve},{default:M(()=>[ke((h(),_("div",{class:T(d(ot)),style:It(d($e)),onClick:l[5]||(l[5]=()=>R(d(q)?void 0:!0)),onKeydown:pt,onMouseenter:l[6]||(l[6]=r=>W.value=!0),onMouseleave:l[7]||(l[7]=r=>W.value=!1)},[X(d(Yt),{ref_key:"input",ref:x,modelValue:A.value,"onUpdate:modelValue":l[1]||(l[1]=r=>A.value=r),placeholder:d(g),readonly:d(q),disabled:d(i),"validate-event":!1,size:d(C),class:T(d(u).is("focus",L.value)),onCompositionstart:le,onCompositionupdate:le,onCompositionend:le,onFocus:gt,onBlur:kt,onInput:Me},{suffix:M(()=>[d(j)?(h(),F(d(ve),{key:"clear",class:T([d(b).e("icon"),"icon-circle-close"]),onClick:fe(ft,["stop"])},{default:M(()=>[X(d(qt))]),_:1},8,["class","onClick"])):(h(),F(d(ve),{key:"arrow-down",class:T(d(it)),onClick:l[0]||(l[0]=fe(r=>R(),["stop"]))},{default:M(()=>[X(d(Rt))]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class"]),d(y)?(h(),_("div",{key:0,ref_key:"tagWrapper",ref:Y,class:T(d(u).e("tags"))},[(h(!0),_(re,null,he(V.value,r=>(h(),F(d(Ue),{key:r.key,type:n.tagType,size:d(E),hit:r.hitState,closable:r.closable,"disable-transitions":"",onClose:N=>Pe(r)},{default:M(()=>[r.isCollapseTag===!1?(h(),_("span",$n,se(r.text),1)):(h(),F(d(Re),{key:1,disabled:L.value||!n.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:M(()=>[oe("span",null,se(r.text),1)]),content:M(()=>[oe("div",{class:T(d(u).e("collapse-tags"))},[(h(!0),_(re,null,he(O.value.slice(1),(N,Q)=>(h(),_("div",{key:Q,class:T(d(u).e("collapse-tag"))},[(h(),F(d(Ue),{key:N.key,class:"in-tooltip",type:n.tagType,size:d(E),hit:N.hitState,closable:N.closable,"disable-transitions":"",onClose:ee=>Pe(N)},{default:M(()=>[oe("span",null,se(N.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))],2))),128))],2)]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),n.filterable&&!d(i)?ke((h(),_("input",{key:0,"onUpdate:modelValue":l[2]||(l[2]=r=>m.value=r),type:"text",class:T(d(u).e("search-input")),placeholder:d(Se)?"":d(f),onInput:l[3]||(l[3]=r=>Me(m.value,r)),onClick:l[4]||(l[4]=fe(r=>R(!0),["stop"])),onKeydown:Et(mt,["delete"]),onCompositionstart:le,onCompositionupdate:le,onCompositionend:le},null,42,Sn)),[[wt,m.value]]):G("v-if",!0)],2)):G("v-if",!0)],38)),[[d(tn),()=>R(!1),d(Fe)]])]),content:M(()=>[ke(X(d(lt),{ref_key:"panel",ref:$,modelValue:d(Te),"onUpdate:modelValue":l[8]||(l[8]=r=>zt(Te)?Te.value=r:null),options:n.options,props:s.props,border:!1,"render-label":n.$slots.default,onExpandChange:dt,onClose:l[9]||(l[9]=r=>n.$nextTick(()=>R(!1)))},null,8,["modelValue","options","props","render-label"]),[[Ae,!B.value]]),n.filterable?ke((h(),F(d(Xe),{key:0,ref_key:"suggestionPanel",ref:K,tag:"ul",class:T(d(u).e("suggestion-panel")),"view-class":d(u).e("suggestion-list"),onKeydown:vt},{default:M(()=>[te.value.length?(h(!0),_(re,{key:0},he(te.value,r=>(h(),_("li",{key:r.uid,class:T([d(u).e("suggestion-item"),d(u).is("checked",r.checked)]),tabindex:-1,onClick:N=>ht(r)},[oe("span",null,se(r.text),1),r.checked?(h(),F(d(ve),{key:0},{default:M(()=>[X(d(Ye))]),_:1})):G("v-if",!0)],10,Tn))),128)):Ft(n.$slots,"empty",{key:1},()=>[oe("li",{class:T(d(u).e("empty-text"))},se(d(w)("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class"])),[[Ae,B.value]]):G("v-if",!0)]),_:3},8,["visible","teleported","popper-class","transition"]))}});var Ce=we(Pn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);Ce.install=e=>{e.component(Ce.name,Ce)};const Dn=Ce,Qn=Dn;export{Qn as E,Jn as a};
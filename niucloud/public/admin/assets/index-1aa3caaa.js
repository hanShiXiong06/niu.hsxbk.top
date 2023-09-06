import{E as de}from"./index-91bdda63.js";import{c as N,d as he,u as le,E as ye,O as Te,w as se}from"./index-45cca80f.js";import{E as $e}from"./index-74352d71.js";import{b as W,d as P,s as Oe,E as ue,r as Fe,e as Se,p as ke}from"./index-e37943c3.js";import{E as g}from"./aria-60e0cdc6.js";import{_ as K,d as D,h as R,r as C,J as z,I as h,o as Ne,u as y,O as Re,c as T,aH as Pe,a7 as U,w as Be,V as E,e as B,v as Y,x as I,y as S,M as Ke,a6 as De,E as Me,b as x,P as ce,f as j,D as Le,C as J,n as Q,H as X,g as Ae,Z as Ge,F as ze,j as Ye,l as He,T as pe}from"./base-d77b0726.js";import{c as Ue}from"./index-331c6de1.js";import{u as Je}from"./index-a20d1a31.js";import{b as fe}from"./index-6245131d.js";import{c as me}from"./index-6a54cf26.js";import{F as Ve}from"./focus-trap-98fda164.js";const je=D({inheritAttrs:!1});function We(e,o,s,t,a,c){return R(e.$slots,"default")}var qe=K(je,[["render",We],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Ze=D({name:"ElCollectionItem",inheritAttrs:!1});function Qe(e,o,s,t,a,c){return R(e.$slots,"default")}var Xe=K(Ze,[["render",Qe],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ve="data-el-collection-item",ge=e=>{const o=`El${e}Collection`,s=`${o}Item`,t=Symbol(o),a=Symbol(s),c={...qe,name:o,setup(){const r=C(null),d=new Map;z(t,{itemMap:d,getItems:()=>{const f=y(r);if(!f)return[];const p=Array.from(f.querySelectorAll(`[${ve}]`));return[...d.values()].sort((n,u)=>p.indexOf(n.ref)-p.indexOf(u.ref))},collectionRef:r})}},l={...Xe,name:s,setup(r,{attrs:d}){const v=C(null),f=h(t,void 0);z(a,{collectionItemRef:v}),Ne(()=>{const p=y(v);p&&f.itemMap.set(p,{ref:p,...d})}),Re(()=>{const p=y(v);f.itemMap.delete(p)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:c,ElCollectionItem:l}},xe=W({style:{type:P([String,Array,Object])},currentTabId:{type:P(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:P(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:eo,ElCollectionItem:oo,COLLECTION_INJECTION_KEY:ee,COLLECTION_ITEM_INJECTION_KEY:no}=ge("RovingFocusGroup"),oe=Symbol("elRovingFocusGroup"),we=Symbol("elRovingFocusGroupItem"),to={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},ro=(e,o)=>{if(o!=="rtl")return e;switch(e){case g.right:return g.left;case g.left:return g.right;default:return e}},lo=(e,o,s)=>{const t=ro(e.key,s);if(!(o==="vertical"&&[g.left,g.right].includes(t))&&!(o==="horizontal"&&[g.up,g.down].includes(t)))return to[t]},so=(e,o)=>e.map((s,t)=>e[(t+o)%e.length]),ne=e=>{const{activeElement:o}=document;for(const s of e)if(s===o||(s.focus(),o!==document.activeElement))return},ie="currentTabIdChange",ae="rovingFocusGroup.entryFocus",io={bubbles:!1,cancelable:!0},ao=D({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:xe,emits:[ie,"entryFocus"],setup(e,{emit:o}){var s;const t=C((s=e.currentTabId||e.defaultCurrentTabId)!=null?s:null),a=C(!1),c=C(!1),l=C(null),{getItems:r}=h(ee,void 0),d=T(()=>[{outline:"none"},e.style]),v=i=>{o(ie,i)},f=()=>{a.value=!0},p=N(i=>{var w;(w=e.onMousedown)==null||w.call(e,i)},()=>{c.value=!0}),_=N(i=>{var w;(w=e.onFocus)==null||w.call(e,i)},i=>{const w=!y(c),{target:M,currentTarget:$}=i;if(M===$&&w&&!y(a)){const L=new Event(ae,io);if($==null||$.dispatchEvent(L),!L.defaultPrevented){const b=r().filter(F=>F.focusable),k=b.find(F=>F.active),O=b.find(F=>F.id===y(t)),G=[k,O,...b].filter(Boolean).map(F=>F.ref);ne(G)}}c.value=!1}),n=N(i=>{var w;(w=e.onBlur)==null||w.call(e,i)},()=>{a.value=!1}),u=(...i)=>{o("entryFocus",...i)};z(oe,{currentTabbedId:Pe(t),loop:U(e,"loop"),tabIndex:T(()=>y(a)?-1:0),rovingFocusGroupRef:l,rovingFocusGroupRootStyle:d,orientation:U(e,"orientation"),dir:U(e,"dir"),onItemFocus:v,onItemShiftTab:f,onBlur:n,onFocus:_,onMousedown:p}),Be(()=>e.currentTabId,i=>{t.value=i??null}),Ue(l,ae,u)}});function uo(e,o,s,t,a,c){return R(e.$slots,"default")}var co=K(ao,[["render",uo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const po=D({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:eo,ElRovingFocusGroupImpl:co}});function fo(e,o,s,t,a,c){const l=E("el-roving-focus-group-impl"),r=E("el-focus-group-collection");return B(),Y(r,null,{default:I(()=>[S(l,Ke(De(e.$attrs)),{default:I(()=>[R(e.$slots,"default")]),_:3},16)]),_:3})}var mo=K(po,[["render",fo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const vo=D({components:{ElRovingFocusCollectionItem:oo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:s,loop:t,onItemFocus:a,onItemShiftTab:c}=h(oe,void 0),{getItems:l}=h(ee,void 0),r=fe(),d=C(null),v=N(n=>{o("mousedown",n)},n=>{e.focusable?a(y(r)):n.preventDefault()}),f=N(n=>{o("focus",n)},()=>{a(y(r))}),p=N(n=>{o("keydown",n)},n=>{const{key:u,shiftKey:i,target:w,currentTarget:M}=n;if(u===g.tab&&i){c();return}if(w!==M)return;const $=lo(n);if($){n.preventDefault();let b=l().filter(k=>k.focusable).map(k=>k.ref);switch($){case"last":{b.reverse();break}case"prev":case"next":{$==="prev"&&b.reverse();const k=b.indexOf(M);b=t.value?so(b,k+1):b.slice(k+1);break}}Me(()=>{ne(b)})}}),_=T(()=>s.value===y(r));return z(we,{rovingFocusGroupItemRef:d,tabIndex:T(()=>y(_)?0:-1),handleMousedown:v,handleFocus:f,handleKeydown:p}),{id:r,handleKeydown:p,handleFocus:f,handleMousedown:v}}});function go(e,o,s,t,a,c){const l=E("el-roving-focus-collection-item");return B(),Y(l,{id:e.id,focusable:e.focusable,active:e.active},{default:I(()=>[R(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var wo=K(vo,[["render",go],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const bo=W({trigger:he.trigger,effect:{...le.effect,default:"light"},type:{type:P(String)},placement:{type:P(String),default:"bottom"},popperOptions:{type:P(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:P([Number,String]),default:0},maxHeight:{type:P([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:P(Object)},teleported:le.teleported}),be=W({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Oe}}),Io=W({onKeydown:{type:P(Function)}}),Eo=[g.down,g.pageDown,g.home],Ie=[g.up,g.pageUp,g.end],_o=[...Eo,...Ie],{ElCollection:Co,ElCollectionItem:ho,COLLECTION_INJECTION_KEY:yo,COLLECTION_ITEM_INJECTION_KEY:To}=ge("Dropdown"),q=Symbol("elDropdown"),{ButtonGroup:$o}=de,Oo=D({name:"ElDropdown",components:{ElButton:de,ElButtonGroup:$o,ElScrollbar:$e,ElDropdownCollection:Co,ElTooltip:ye,ElRovingFocusGroup:mo,ElOnlyChild:Te,ElIcon:ue,ArrowDown:Fe},props:bo,emits:["visible-change","click","command"],setup(e,{emit:o}){const s=ce(),t=x("dropdown"),{t:a}=Je(),c=C(),l=C(),r=C(null),d=C(null),v=C(null),f=C(null),p=C(!1),_=[g.enter,g.space,g.down],n=T(()=>({maxHeight:Se(e.maxHeight)})),u=T(()=>[t.m(b.value)]),i=fe().value,w=T(()=>e.id||i);function M(){$()}function $(){var m;(m=r.value)==null||m.onClose()}function L(){var m;(m=r.value)==null||m.onOpen()}const b=ke();function k(...m){o("command",...m)}function O(){}function A(){const m=y(d);m==null||m.focus(),f.value=null}function G(m){f.value=m}function F(m){p.value||(m.preventDefault(),m.stopImmediatePropagation())}function te(){o("visible-change",!0)}function V(m){(m==null?void 0:m.type)==="keydown"&&d.value.focus()}function H(){o("visible-change",!1)}return z(q,{contentRef:d,role:T(()=>e.role),triggerId:w,isUsingKeyboard:p,onItemEnter:O,onItemLeave:A}),z("elDropdown",{instance:s,dropdownSize:b,handleClick:M,commandHandler:k,trigger:U(e,"trigger"),hideOnClick:U(e,"hideOnClick")}),{t:a,ns:t,scrollbar:v,wrapStyle:n,dropdownTriggerKls:u,dropdownSize:b,triggerId:w,triggerKeys:_,currentTabId:f,handleCurrentTabIdChange:G,handlerMainButtonClick:m=>{o("click",m)},handleEntryFocus:F,handleClose:$,handleOpen:L,handleBeforeShowTooltip:te,handleShowTooltip:V,handleBeforeHideTooltip:H,onFocusAfterTrapped:m=>{var Z,re;m.preventDefault(),(re=(Z=d.value)==null?void 0:Z.focus)==null||re.call(Z,{preventScroll:!0})},popperRef:r,contentRef:d,triggeringElementRef:c,referenceElementRef:l}}});function Fo(e,o,s,t,a,c){var l;const r=E("el-dropdown-collection"),d=E("el-roving-focus-group"),v=E("el-scrollbar"),f=E("el-only-child"),p=E("el-tooltip"),_=E("el-button"),n=E("arrow-down"),u=E("el-icon"),i=E("el-button-group");return B(),j("div",{class:Q([e.ns.b(),e.ns.is("disabled",e.disabled)])},[S(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(l=e.referenceElementRef)==null?void 0:l.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Le({content:I(()=>[S(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I(()=>[S(d,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I(()=>[S(r,null,{default:I(()=>[R(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:I(()=>[S(f,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:I(()=>[R(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(B(),Y(i,{key:0},{default:I(()=>[S(_,J({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I(()=>[R(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),S(_,J({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I(()=>[S(u,{class:Q(e.ns.e("icon"))},{default:I(()=>[S(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):X("v-if",!0)],2)}var So=K(Oo,[["render",Fo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const ko=D({name:"DropdownItemImpl",components:{ElIcon:ue},props:be,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const s=x("dropdown"),{role:t}=h(q,void 0),{collectionItemRef:a}=h(To,void 0),{collectionItemRef:c}=h(no,void 0),{rovingFocusGroupItemRef:l,tabIndex:r,handleFocus:d,handleKeydown:v,handleMousedown:f}=h(we,void 0),p=me(a,c,l),_=T(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=N(u=>{const{code:i}=u;if(i===g.enter||i===g.space)return u.preventDefault(),u.stopImmediatePropagation(),o("clickimpl",u),!0},v);return{ns:s,itemRef:p,dataset:{[ve]:""},role:_,tabIndex:r,handleFocus:d,handleKeydown:n,handleMousedown:f}}}),No=["aria-disabled","tabindex","role"];function Ro(e,o,s,t,a,c){const l=E("el-icon");return B(),j(ze,null,[e.divided?(B(),j("li",J({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):X("v-if",!0),Ae("li",J({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=r=>e.$emit("clickimpl",r)),onFocus:o[1]||(o[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:o[2]||(o[2]=(...r)=>e.handleKeydown&&e.handleKeydown(...r)),onMousedown:o[3]||(o[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:o[4]||(o[4]=r=>e.$emit("pointermove",r)),onPointerleave:o[5]||(o[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(B(),Y(l,{key:0},{default:I(()=>[(B(),Y(Ge(e.icon)))]),_:1})):X("v-if",!0),R(e.$slots,"default")],16,No)],64)}var Po=K(ko,[["render",Ro],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Ee=()=>{const e=h("elDropdown",{}),o=T(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Bo=D({name:"ElDropdownItem",components:{ElDropdownCollectionItem:ho,ElRovingFocusItem:wo,ElDropdownItemImpl:Po},inheritAttrs:!1,props:be,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:s}){const{elDropdown:t}=Ee(),a=ce(),c=C(null),l=T(()=>{var n,u;return(u=(n=y(c))==null?void 0:n.textContent)!=null?u:""}),{onItemEnter:r,onItemLeave:d}=h(q,void 0),v=N(n=>(o("pointermove",n),n.defaultPrevented),se(n=>{var u;e.disabled?d(n):(r(n),n.defaultPrevented||(u=n.currentTarget)==null||u.focus())})),f=N(n=>(o("pointerleave",n),n.defaultPrevented),se(n=>{d(n)})),p=N(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var u,i,w;if(e.disabled){n.stopImmediatePropagation();return}(u=t==null?void 0:t.hideOnClick)!=null&&u.value&&((i=t.handleClick)==null||i.call(t)),(w=t.commandHandler)==null||w.call(t,e.command,a,n)}),_=T(()=>({...e,...s}));return{handleClick:p,handlePointerMove:v,handlePointerLeave:f,textContent:l,propsAndAttrs:_}}});function Ko(e,o,s,t,a,c){var l;const r=E("el-dropdown-item-impl"),d=E("el-roving-focus-item"),v=E("el-dropdown-collection-item");return B(),Y(v,{disabled:e.disabled,"text-value":(l=e.textValue)!=null?l:e.textContent},{default:I(()=>[S(d,{focusable:!e.disabled},{default:I(()=>[S(r,J(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I(()=>[R(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var _e=K(Bo,[["render",Ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Do=D({name:"ElDropdownMenu",props:Io,setup(e){const o=x("dropdown"),{_elDropdownSize:s}=Ee(),t=s.value,{focusTrapRef:a,onKeydown:c}=h(Ve,void 0),{contentRef:l,role:r,triggerId:d}=h(q,void 0),{collectionRef:v,getItems:f}=h(yo,void 0),{rovingFocusGroupRef:p,rovingFocusGroupRootStyle:_,tabIndex:n,onBlur:u,onFocus:i,onMousedown:w}=h(oe,void 0),{collectionRef:M}=h(ee,void 0),$=T(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),L=me(l,v,a,p,M),b=N(O=>{var A;(A=e.onKeydown)==null||A.call(e,O)},O=>{const{currentTarget:A,code:G,target:F}=O;if(A.contains(F),g.tab===G&&O.stopImmediatePropagation(),O.preventDefault(),F!==y(l)||!_o.includes(G))return;const V=f().filter(H=>!H.disabled).map(H=>H.ref);Ie.includes(G)&&V.reverse(),ne(V)});return{size:t,rovingFocusGroupRootStyle:_,tabIndex:n,dropdownKls:$,role:r,triggerId:d,dropdownListWrapperRef:L,handleKeydown:O=>{b(O),c(O)},onBlur:u,onFocus:i,onMousedown:w}}}),Mo=["role","aria-labelledby"];function Lo(e,o,s,t,a,c){return B(),j("ul",{ref:e.dropdownListWrapperRef,class:Q(e.dropdownKls),style:Ye(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:o[1]||(o[1]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:o[2]||(o[2]=(...l)=>e.handleKeydown&&e.handleKeydown(...l)),onMousedown:o[3]||(o[3]=(...l)=>e.onMousedown&&e.onMousedown(...l))},[R(e.$slots,"default")],46,Mo)}var Ce=K(Do,[["render",Lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Xo=He(So,{DropdownItem:_e,DropdownMenu:Ce}),xo=pe(_e),en=pe(Ce);export{Xo as E,xo as a,en as b,bo as d};
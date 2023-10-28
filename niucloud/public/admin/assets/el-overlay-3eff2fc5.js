import{U as H,v as le,T as se}from"./event-a537c4cb.js";import{u as te,b as ae,c as ne,E as re}from"./index-defed8ff.js";import{b as Q,t as ie,E as ue,a2 as de,d as ce,c as fe,O as _,e as me,N as G,i as pe}from"./index-72686045.js";import{_ as W,n as ye,o as ve,u as ge,w as Ce}from"./base-0e92f4db.js";import{u as be}from"./index-6cae7119.js";import{F as he,u as ke,E as Ee}from"./focus-trap-83769a43.js";import{R as De,d as N,D as Z,c as F,b as I,e as q,f as R,g as E,n as C,u as e,x as Ie,q as O,p as k,m as K,U as Fe,C as j,h as X,r as D,w as J,A as Be,o as we,K as Ae,G as Te,E as Se,L as $e,y as Pe,z as Re,a1 as Oe}from"./runtime-core.esm-bundler-67034826.js";import{u as Y}from"./index-d87ae4a2.js";const Ne=(...o)=>a=>{o.forEach(i=>{De(i)?i(a):i.value=a})},x=Symbol("dialogInjectionKey"),ee=Q({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:ie},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Le={close:()=>!0},Me=["aria-label"],ze=["id"],Ue=N({name:"ElDialogContent"}),Ve=N({...Ue,props:ee,emits:Le,setup(o){const a=o,{t:i}=be(),{Close:u}=de,{dialogRef:c,headerRef:p,bodyId:B,ns:t,style:n}=Z(x),{focusTrapRef:y}=Z(he),f=Ne(y,c),v=F(()=>a.draggable);return te(c,p,v),(s,d)=>(I(),q("div",{ref:e(f),class:C([e(t).b(),e(t).is("fullscreen",s.fullscreen),e(t).is("draggable",e(v)),e(t).is("align-center",s.alignCenter),{[e(t).m("center")]:s.center},s.customClass]),style:X(e(n)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:p,class:C(e(t).e("header"))},[E(s.$slots,"header",{},()=>[R("span",{role:"heading",class:C(e(t).e("title"))},Ie(s.title),3)]),s.showClose?(I(),q("button",{key:0,"aria-label":e(i)("el.dialog.close"),class:C(e(t).e("headerbtn")),type:"button",onClick:d[0]||(d[0]=S=>s.$emit("close"))},[O(e(ue),{class:C(e(t).e("close"))},{default:k(()=>[(I(),K(Fe(s.closeIcon||e(u))))]),_:1},8,["class"])],10,Me)):j("v-if",!0)],2),R("div",{id:e(B),class:C(e(t).e("body"))},[E(s.$slots,"default")],10,ze),s.$slots.footer?(I(),q("footer",{key:0,class:C(e(t).e("footer"))},[E(s.$slots,"footer")],2)):j("v-if",!0)],6))}});var qe=W(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ke=Q({...ee,appendToBody:{type:Boolean,default:!1},beforeClose:{type:ce(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),je={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[H]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},_e=(o,a)=>{const u=Ae().emit,{nextZIndex:c}=ke();let p="";const B=_(),t=_(),n=D(!1),y=D(!1),f=D(!1),v=D(o.zIndex||c());let s,d;const S=ye("namespace",ve),L=F(()=>{const r={},h=`--${S.value}-dialog`;return o.fullscreen||(o.top&&(r[`${h}-margin-top`]=o.top),o.width&&(r[`${h}-width`]=me(o.width))),r}),M=F(()=>o.alignCenter?{display:"flex"}:{});function z(){u("opened")}function $(){u("closed"),u(H,!1),o.destroyOnClose&&(f.value=!1)}function U(){u("close")}function P(){d==null||d(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=G(()=>m(),o.openDelay):m()}function w(){s==null||s(),d==null||d(),o.closeDelay&&o.closeDelay>0?{stop:d}=G(()=>T(),o.closeDelay):T()}function A(){function r(h){h||(y.value=!0,n.value=!1)}o.beforeClose?o.beforeClose(r):w()}function V(){o.closeOnClickModal&&A()}function m(){pe&&(n.value=!0)}function T(){n.value=!1}function l(){u("openAutoFocus")}function g(){u("closeAutoFocus")}function b(r){var h;((h=r.detail)==null?void 0:h.focusReason)==="pointer"&&r.preventDefault()}o.lockScroll&&ae(n);function oe(){o.closeOnPressEscape&&A()}return J(()=>o.modelValue,r=>{r?(y.value=!1,P(),f.value=!0,v.value=o.zIndex?v.value++:c(),Be(()=>{u("open"),a.value&&(a.value.scrollTop=0)})):n.value&&w()}),J(()=>o.fullscreen,r=>{a.value&&(r?(p=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=p)}),we(()=>{o.modelValue&&(n.value=!0,f.value=!0,P())}),{afterEnter:z,afterLeave:$,beforeLeave:U,handleClose:A,onModalClick:V,close:w,doClose:T,onOpenAutoFocus:l,onCloseAutoFocus:g,onCloseRequested:oe,onFocusoutPrevented:b,titleId:B,bodyId:t,closed:y,style:L,overlayDialogStyle:M,rendered:f,visible:n,zIndex:v}},Ge=["aria-label","aria-labelledby","aria-describedby"],Ze=N({name:"ElDialog",inheritAttrs:!1}),Je=N({...Ze,props:Ke,emits:je,setup(o,{expose:a}){const i=o,u=Te();Y({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},F(()=>!!u.title)),Y({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},F(()=>!!i.customClass));const c=ge("dialog"),p=D(),B=D(),t=D(),{visible:n,titleId:y,bodyId:f,style:v,overlayDialogStyle:s,rendered:d,zIndex:S,afterEnter:L,afterLeave:M,beforeLeave:z,handleClose:$,onModalClick:U,onOpenAutoFocus:P,onCloseAutoFocus:w,onCloseRequested:A,onFocusoutPrevented:V}=_e(i,p);Se(x,{dialogRef:p,headerRef:B,bodyId:f,ns:c,rendered:d,style:v});const m=ne(U),T=F(()=>i.draggable&&!i.fullscreen);return a({visible:n,dialogContentRef:t}),(l,g)=>(I(),K(Oe,{to:"body",disabled:!l.appendToBody},[O(se,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(M),onBeforeLeave:e(z),persisted:""},{default:k(()=>[$e(O(e(re),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(S)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(y),"aria-describedby":e(f),class:C(`${e(c).namespace.value}-overlay-dialog`),style:X(e(s)),onClick:g[0]||(g[0]=(...b)=>e(m).onClick&&e(m).onClick(...b)),onMousedown:g[1]||(g[1]=(...b)=>e(m).onMousedown&&e(m).onMousedown(...b)),onMouseup:g[2]||(g[2]=(...b)=>e(m).onMouseup&&e(m).onMouseup(...b))},[O(e(Ee),{loop:"",trapped:e(n),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(w),onFocusoutPrevented:e(V),onReleaseRequested:e(A)},{default:k(()=>[e(d)?(I(),K(qe,Pe({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(T),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e($)}),Re({header:k(()=>[l.$slots.title?E(l.$slots,"title",{key:1}):E(l.$slots,"header",{key:0,close:e($),titleId:e(y),titleClass:e(c).e("title")})]),default:k(()=>[E(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[E(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ge)]),_:3},8,["mask","overlay-class","z-index"]),[[le,e(n)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ye=W(Je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const so=Ce(Ye);export{so as E,je as a,Ne as c,Ke as d,_e as u};
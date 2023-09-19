import{d,u as a,E as R}from"./index-45cca80f.js";import{b as U,c as $,e as T}from"./index-e37943c3.js";import{d as f}from"./dropdown-2ff49e9b.js";import{d as g,c as n,b as D,r as V,u as p,e as u,v as H,x as c,f as O,n as I,B as v,H as b,h as m,A as L,C as z,_ as F,a$ as K,l as j}from"./base-d77b0726.js";const q=U({trigger:d.trigger,placement:f.placement,disabled:d.disabled,visible:a.visible,transition:a.transition,popperOptions:f.popperOptions,tabindex:f.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),G={"update:visible":t=>$(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},J="onUpdate:visible",M=g({name:"ElPopover"}),Q=g({...M,props:q,emits:G,setup(t,{expose:r,emit:s}){const o=t,w=n(()=>o[J]),l=D("popover"),i=V(),y=n(()=>{var e;return(e=p(i))==null?void 0:e.popperRef}),C=n(()=>[{width:T(o.width)},o.popperStyle]),E=n(()=>[l.b(),o.popperClass,{[l.m("plain")]:!!o.content}]),P=n(()=>o.transition===`${l.namespace.value}-fade-in-linear`),k=()=>{var e;(e=i.value)==null||e.hide()},B=()=>{s("before-enter")},S=()=>{s("before-leave")},A=()=>{s("after-enter")},N=()=>{s("update:visible",!1),s("after-leave")};return r({popperRef:y,hide:k}),(e,_)=>(u(),H(p(R),z({ref_key:"tooltipRef",ref:i},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(E),"popper-style":p(C),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(P),"onUpdate:visible":p(w),onBeforeShow:B,onBeforeHide:S,onShow:A,onHide:N}),{content:c(()=>[e.title?(u(),O("div",{key:0,class:I(p(l).e("title")),role:"title"},v(e.title),3)):b("v-if",!0),m(e.$slots,"default",{},()=>[L(v(e.content),1)])]),default:c(()=>[e.$slots.reference?m(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var W=F(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const h=(t,r)=>{const s=r.arg||r.value,o=s==null?void 0:s.popperRef;o&&(o.triggerRef=t)};var X={mounted(t,r){h(t,r)},updated(t,r){h(t,r)}};const Y="popover",Z=K(X,Y),re=j(W,{directive:Z});export{re as E,Z as a};

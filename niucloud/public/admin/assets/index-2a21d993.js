import{v as N,T as I}from"./event-3e082a4a.js";import{b as V,X as h,E as k,a0 as $}from"./index-9ef6974e.js";import{k as A,u as D,_ as P,w as F}from"./plugin-vue_export-helper-c018272e.js";import{d as E,G as M,r as q,c as p,b as o,m as l,p as u,L as z,f as C,n as a,u as e,P as G,C as n,e as r,g as b,v as g,x as f,F as L,q as O}from"./runtime-core.esm-bundler-c17ab5bc.js";const X=["light","dark"],_=V({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:A(h),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:X,default:"light"}}),j={close:i=>i instanceof MouseEvent},H=E({name:"ElAlert"}),J=E({...H,props:_,emits:j,setup(i,{emit:S}){const c=i,{Close:T}=$,d=M(),t=D("alert"),m=q(!0),v=p(()=>h[c.type]),w=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!d.default}]),B=p(()=>({[t.is("bold")]:c.description||d.default})),y=s=>{m.value=!1,S("close",s)};return(s,Q)=>(o(),l(I,{name:e(t).b("fade"),persisted:""},{default:u(()=>[z(C("div",{class:a([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(v)?(o(),l(e(k),{key:0,class:a(e(w))},{default:u(()=>[(o(),l(G(e(v))))]),_:1},8,["class"])):n("v-if",!0),C("div",{class:a(e(t).e("content"))},[s.title||s.$slots.title?(o(),r("span",{key:0,class:a([e(t).e("title"),e(B)])},[b(s.$slots,"title",{},()=>[g(f(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(o(),r("p",{key:1,class:a(e(t).e("description"))},[b(s.$slots,"default",{},()=>[g(f(s.description),1)])],2)):n("v-if",!0),s.closable?(o(),r(L,{key:2},[s.closeText?(o(),r("div",{key:0,class:a([e(t).e("close-btn"),e(t).is("customed")]),onClick:y},f(s.closeText),3)):(o(),l(e(k),{key:1,class:a(e(t).e("close-btn")),onClick:y},{default:u(()=>[O(e(T))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[N,m.value]])]),_:3},8,["name"]))}});var K=P(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const Z=F(K);export{Z as E};
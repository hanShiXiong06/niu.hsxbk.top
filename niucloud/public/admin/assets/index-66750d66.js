import{d as f,T}from"./event-a537c4cb.js";import{b as w,I as N,q as I,a7 as g,E as k}from"./index-72686045.js";import{u as M,_ as V,w as $}from"./base-0e92f4db.js";import{d as v,c as q,b as l,e as P,f as n,g as C,n as o,u as a,m as c,p as r,q as b,C as h,h as y}from"./runtime-core.esm-bundler-67034826.js";const j=w({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:N,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),A={close:t=>t instanceof MouseEvent,click:t=>t instanceof MouseEvent},D=v({name:"ElTag"}),F=v({...D,props:j,emits:A,setup(t,{emit:i}){const _=t,E=I(),s=M("tag"),u=q(()=>{const{type:e,hit:m,effect:S,closable:B,round:z}=_;return[s.b(),s.is("closable",B),s.m(e),s.m(E.value),s.m(S),s.is("hit",m),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,m)=>e.disableTransitions?(l(),P("span",{key:0,class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[C(e.$slots,"default")],2),e.closable?(l(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:f(p,["stop"])},{default:r(()=>[b(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(l(),c(T,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[n("span",{class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[C(e.$slots,"default")],2),e.closable?(l(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:f(p,["stop"])},{default:r(()=>[b(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var G=V(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const O=$(G);export{O as E,j as t};
import{d as m,T}from"./event-10eba222.js";import{b as w,I as N,q as I,a9 as g,E as k}from"./index-2fcd1254.js";import{d as v,b as M,c as V,e as t,f as $,g as n,h as y,n as o,u as a,v as c,x as r,y as C,H as b,j as h,_ as P,l as j}from"./base-06478700.js";const q=w({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:N,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),H={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},A=v({name:"ElTag"}),D=v({...A,props:q,emits:H,setup(l,{emit:i}){const _=l,E=I(),s=M("tag"),u=V(()=>{const{type:e,hit:f,effect:S,closable:B,round:z}=_;return[s.b(),s.is("closable",B),s.m(e),s.m(E.value),s.m(S),s.is("hit",f),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(t(),$("span",{key:0,class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[y(e.$slots,"default")],2),e.closable?(t(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:m(p,["stop"])},{default:r(()=>[C(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(t(),c(T,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[n("span",{class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[y(e.$slots,"default")],2),e.closable?(t(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:m(p,["stop"])},{default:r(()=>[C(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)]),_:3},8,["name"]))}});var F=P(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const L=j(F);export{L as E,q as t};

import{a as n,a$ as w,q as c,s as d,o as i,e as u,x as p,y as _,u as s,B as m,z as h,C,Q as f}from"./entry.ba885acf.js";const S=n({name:"ElContainer"}),b=n({...S,props:{direction:{type:String}},setup(a){const t=a,e=w(),o=c("container"),r=d(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(g=>{const k=g.type.name;return k==="ElHeader"||k==="ElFooter"}):!1);return(l,g)=>(i(),u("section",{class:_([s(o).b(),s(o).is("vertical",s(r))])},[p(l.$slots,"default")],2))}});var B=m(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const H=n({name:"ElAside"}),z=n({...H,props:{width:{type:String,default:null}},setup(a){const t=a,e=c("aside"),o=d(()=>t.width?e.cssVarBlock({width:t.width}):{});return(r,l)=>(i(),u("aside",{class:_(s(e).b()),style:h(s(o))},[p(r.$slots,"default")],6))}});var v=m(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const F=n({name:"ElFooter"}),M=n({...F,props:{height:{type:String,default:null}},setup(a){const t=a,e=c("footer"),o=d(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(i(),u("footer",{class:_(s(e).b()),style:h(s(o))},[p(r.$slots,"default")],6))}});var $=m(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const N=n({name:"ElHeader"}),V=n({...N,props:{height:{type:String,default:null}},setup(a){const t=a,e=c("header"),o=d(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(i(),u("header",{class:_(s(e).b()),style:h(s(o))},[p(r.$slots,"default")],6))}});var y=m(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const x=n({name:"ElMain"}),A=n({...x,setup(a){const t=c("main");return(e,o)=>(i(),u("main",{class:_(s(t).b())},[p(e.$slots,"default")],2))}});var E=m(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const q=C(B,{Aside:v,Footer:$,Header:y,Main:E});f(v);f($);const Q=f(y),j=f(E);export{q as E,Q as a,j as b};
import{d as F,r as E,c as I,e as h,f as u,Q as w,u as t,g as d,B as f,y as p,x as c,F as W,z as C,n as S,j as $,h as D}from"./base-d77b0726.js";/* empty css                  *//* empty css                        *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-4539d0e8.js";import{_ as j}from"./index-b17b5559.js";/* empty css                */import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-8d43c28e.js";import"./el-form-item-4ed993c7.js";import{v as H}from"./index-331c6de1.js";import{t as r}from"./index-e064b265.js";import{u as q}from"./diy-b03a3bbd.js";import{d as N}from"./common-56ee0a80.js";import{a as M,E as P}from"./index-68c5ad54.js";import{E as Q}from"./index-6fe3a7fa.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const X={class:"content-wrap rubik-cube"},Y={class:"edit-attr-item-wrap"},Z={class:"mb-[10px]"},ee={class:"selected-template-list"},ie=["onClick"],ae={class:"edit-attr-item-wrap"},le={class:"mb-[10px]"},te={class:"layout"},oe={class:"have-preview-image"},se=["src"],ne={class:"style-wrap"},me={class:"edit-attr-item-wrap"},de={class:"mb-[10px]"},pe=F({__name:"edit-rubik-cube",setup(ce,{expose:k}){const o=q();o.editComponent.ignore=[],o.editComponent.verify=a=>{var e={code:!0,message:""};return o.value[a].list.forEach(i=>{if(i.imageUrl==="")return e.code=!1,e.message=r("imageUrlTip"),e}),e};const x=E([{name:"1行2个",src:"iconyihangliangge",className:"row1-of2",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1行3个",src:"iconyihangsange",className:"row1-of3",dimensionScale:[{desc:"宽度33.33%",size:"200px * 200px",name:"图一"},{desc:"宽度33.33%",size:"200px * 200px",name:"图二"},{desc:"宽度33.33%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：130px"},{name:"1行4个",src:"iconyihangsige",className:"row1-of4",dimensionScale:[{desc:"宽度25%",size:"200px * 200px",name:"图一"},{desc:"宽度25%",size:"200px * 200px",name:"图二"},{desc:"宽度25%",size:"200px * 200px",name:"图三"},{desc:"宽度25%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：100px"},{name:"2左2右",src:"iconmofang-liangzuoliangyou",className:"row2-lt-of2-rt",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50%",size:"200px * 200px",name:"图三"},{desc:"宽度50%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1左2右",src:"iconmofang-yizuoliangyou",className:"row1-lt-of2-rt",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，宽度最小建议为：200px，右侧两张图片高度一致，左侧图片高度为右侧两张图片高度之和（例：左侧图片尺寸：200px * 300px，右侧两张图片尺寸：200px * 150px）"},{name:"1上2下",src:"iconmofang-yishangliangxia",className:"row1-tp-of2-bm",dimensionScale:[{desc:"宽度100% * 高度50%",size:"400px * 200px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，上方一张图片的宽度为下方两张图片宽度之和，下放两张图片尺寸一致，高度可根据实际需求自行确定（例：上方图片尺寸：400px * 150px，下方两张图片尺寸：200px * 150px）"},{name:"1左3右",src:"iconxuanzemoban-yizuosanyou",className:"row1-lt-of1-tp-of2-bm",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图三"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，左右两侧内容宽高相同，右侧上下区域高度各占50%，右侧内容下半部分两张图片的宽度相同，各占右侧内容宽度的50%（例：左侧图片尺寸：200px * 400px，右侧上半部分图片尺寸：200px * 200px，右侧下半部分两张图片尺寸：100px * 200px）"}]);let s=E([]);const v=I(()=>{var a;return x.value.forEach(e=>{e.className==o.editComponent.mode&&(a=e,s.value=JSON.parse(JSON.stringify(o.editComponent.list)),e.className=="row2-lt-of2-rt"?T():e.className=="row1-lt-of2-rt"?A():e.className=="row1-tp-of2-bm"?L():e.className=="row1-lt-of1-tp-of2-bm"?B():O(e.className))}),a}),V=a=>{for(var e=0;e<x.value.length;e++)if(e==a){o.editComponent.mode=x.value[e].className;var i=x.value[e].dimensionScale.length;if(i>o.editComponent.list.length)for(var l=0;l<i;l++)l+1>o.editComponent.list.length&&o.editComponent.list.push({imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}});else if(i!=o.editComponent.list.length)for(var l=0;l<o.editComponent.list.length;l++)l+1>i&&(o.editComponent.list.splice(l,1),l=0)}},U=a=>{R(!0)},R=(a=!1)=>{o.editComponent.list.forEach((e,i)=>{let l=new Image;l.src=N(e.imageUrl),l.onload=async()=>{e.imgWidth=l.width,e.imgHeight=l.height}})};k({});const O=a=>{let e=0;var i=2,l="calc(100% / 2)";a=="row1-of3"&&(i=3,l="calc(100% / 3)"),a=="row1-of4"&&(i=4,l="calc(100% / 4)"),s.value.forEach((m,z)=>{var y=m.imgHeight/m.imgWidth;let _=330;m.imgWidth=_/i,m.imgHeight=m.imgWidth*y,(e==0||e<m.imgHeight)&&(e=m.imgHeight)}),s.value.forEach((m,z)=>{m.widthStyle=l,m.imgHeight=e})},T=()=>{let a=0,e=0;s.value.forEach((i,l)=>{var m=i.imgHeight/i.imgWidth;i.imgWidth=330,i.imgWidth=i.imgWidth/2,i.imgHeight=i.imgWidth*m,l<=1?(a==0||a<i.imgHeight)&&(a=i.imgHeight):l>1&&(e==0||e<i.imgHeight)&&(e=i.imgHeight)}),s.value.forEach((i,l)=>{i.imgWidth="calc(100% / 2)",i.widthStyle=i.imgWidth,l<=1?i.imgHeight=a:l>1&&(i.imgHeight=e)})},A=()=>{let a=0;s.value[1].imgWidth,s.value[2].imgWidth,s.value.forEach((e,i)=>{if(i==0){var l=e.imgHeight/e.imgWidth;e.imgWidth=330,e.imgWidth=e.imgWidth/2,e.imgHeight=e.imgWidth*l,a=e.imgHeight/2,e.imgWidth+="px"}else e.imgWidth=s.value[0].imgWidth,e.imgHeight=a})},L=()=>{var a=0;s.value.forEach((e,i)=>{var l=e.imgHeight/e.imgWidth;i==0?e.imgWidth=330:i>0&&(e.imgWidth=330,e.imgWidth=e.imgWidth/2),e.imgHeight=e.imgWidth*l,i>0&&(a==0||a<e.imgHeight)&&(a=e.imgHeight)}),s.value.forEach((e,i)=>{e.imgWidth+="px",e.widthStyle=e.imgWidth,i>0&&(e.imgHeight=a)})},B=()=>{s.value.forEach((a,e)=>{if(e==0){var i=a.imgHeight/a.imgWidth;a.imgWidth=330,a.imgWidth=a.imgWidth/2,a.imgHeight=a.imgWidth*i}else e==1?(a.imgWidth=s.value[0].imgWidth,a.imgHeight=s.value[0].imgHeight/2):e>1&&(a.imgWidth=s.value[0].imgWidth/2,a.imgHeight=s.value[1].imgHeight)}),s.value.forEach((a,e)=>{a.imgWidth+="px",a.imgHeight})};return(a,e)=>{const i=M,l=J,m=P,z=j,y=G,_=Q;return h(),u(W,null,[w(d("div",X,[d("div",Y,[d("h3",Z,f(t(r)("selectStyle")),1),p(m,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[p(i,{label:t(r)("template")},{default:c(()=>[d("span",null,f(t(v).name),1)]),_:1},8,["label"]),d("ul",ee,[(h(!0),u(W,null,C(x.value,(n,g)=>(h(),u("li",{class:S([n.className==t(o).editComponent.mode?"selected":""]),onClick:b=>V(g)},[p(l,{name:"iconfont-"+n.src,size:"16px"},null,8,["name"])],10,ie))),256))])]),_:1})]),d("div",ae,[d("h3",le,f(t(r)("rubikCubeLayout")),1),p(m,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[d("ul",te,[(h(!0),u(W,null,C(t(v).dimensionScale,(n,g)=>(h(),u("li",{class:S([t(v).className]),style:$({width:t(s)[g].widthStyle,height:t(s)[g].imgHeight+"px"})},[w(d("div",oe,[d("img",{class:"!w-full !h-full",src:t(N)(t(o).editComponent.list[g].imageUrl)},null,8,se)],512),[[H,t(o).editComponent.list[g].imageUrl]]),w(d("div",{class:S(["empty",[t(v).className]])},[d("p",null,f(n.name),1),d("p",null,f(n.desc),1)],2),[[H,!t(o).editComponent.list[g].imageUrl]])],6))),256))]),(h(!0),u(W,null,C(t(o).editComponent.list,(n,g)=>(h(),u("div",{key:n.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[p(i,{label:t(r)("image")},{default:c(()=>[p(z,{modelValue:n.imageUrl,"onUpdate:modelValue":b=>n.imageUrl=b,limit:1,onChange:U},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),p(i,{label:t(r)("link")},{default:c(()=>[p(y,{modelValue:n.link,"onUpdate:modelValue":b=>n.link=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))]),_:1})])],512),[[H,t(o).editTab=="content"]]),w(d("div",ne,[d("div",me,[d("h3",de,f(t(r)("rubikCubeStyle")),1),p(m,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[p(i,{label:t(r)("imageGap")},{default:c(()=>[p(_,{modelValue:t(o).editComponent.imageGap,"onUpdate:modelValue":e[0]||(e[0]=n=>t(o).editComponent.imageGap=n),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:30},null,8,["modelValue"])]),_:1},8,["label"]),p(i,{label:t(r)("topRounded")},{default:c(()=>[p(_,{modelValue:t(o).editComponent.topElementRounded,"onUpdate:modelValue":e[1]||(e[1]=n=>t(o).editComponent.topElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),p(i,{label:t(r)("bottomRounded")},{default:c(()=>[p(_,{modelValue:t(o).editComponent.bottomElementRounded,"onUpdate:modelValue":e[2]||(e[2]=n=>t(o).editComponent.bottomElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),D(a.$slots,"style",{},void 0,!0)],512),[[H,t(o).editTab=="style"]])],64)}}});const re=K(pe,[["__scopeId","data-v-7bedf028"]]),Ve=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Ve as _};
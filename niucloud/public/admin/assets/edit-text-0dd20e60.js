import{d as y,r as M,V as N,e as h,f as D,Q as I,u as e,g as n,B as d,y as t,x as i,A as g,n as R,h as T,F as W}from"./base-06478700.js";import{E as j}from"./el-overlay-42a687c6.js";/* empty css                  *//* empty css                  *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                        */import"./el-tooltip-58212670.js";/* empty css                 */import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-e2b813f3.js";import{a as J,E as F}from"./el-form-item-314d006d.js";import"./index-80fd3793.js";import{v as u}from"./event-10eba222.js";import{t as m}from"./index-81ed253c.js";import{u as L}from"./diy-81c73356.js";import{E as O}from"./index-2fcd1254.js";import{E as X}from"./index-b68e8463.js";import{E as S,b as k}from"./index-6290cf08.js";import{E as P}from"./index-be5bff6d.js";import{E as _}from"./index-b12abbd4.js";import{E as H}from"./index-f84999b2.js";import{E as q}from"./index-c2f001d3.js";const K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADcCAYAAACrgL6aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0zMVQxMjowOTozNyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMzFUMTI6MTA6MTgrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDMtMzFUMTI6MTA6MTgrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzZkNmUxM2YtYjFiYS0zMjRjLWEzMDktNmJlM2UyZmIzOGI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3MTFBODAwRUJEMDExRUNCQzUyQTRFNThGN0RGMjdGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzcxMUE4MDBFQkQwMTFFQ0JDNTJBNEU1OEY3REYyN0YiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzExQTdGREVCRDAxMUVDQkM1MkE0RTU4RjdERjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzExQTdGRUVCRDAxMUVDQkM1MkE0RTU4RjdERjI3RiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNmQ2ZTEzZi1iMWJhLTMyNGMtYTMwOS02YmUzZTJmYjM4YjUiIHN0RXZ0OndoZW49IjIwMjMtMDMtMzFUMTI6MTA6MTgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6l98EvAAAHhUlEQVR4nO3cQXIT2R3H8T+p7MdHcG7QjdiPOMGYE9gsMqupAk5gZpE1oSqrbGJOMOYEFpvsVOqcYDwnCDkBWfQTbjeW7QF+EOLPp8ol67m71Sz05b1W2/fevXtXAAl/+NonAPz/EhggRmCAGIEBYgQGiBEYIEZggBiBAWIEBogRGCBGYIAYgQFiBAaIERggRmCAGIEBYgQGiBEYIEZggBiBAWIEBogRGCBGYIAYgQFiBAaIERggRmCAGIEBYgQGiBEYIEZggBiBAWIEBogRGCBGYIAYgQFi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",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADcCAYAAACrgL6aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3MTFBN0ZGRUJEMDExRUNCQzUyQTRFNThGN0RGMjdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3MTFBODAwRUJEMDExRUNCQzUyQTRFNThGN0RGMjdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzcxMUE3RkRFQkQwMTFFQ0JDNTJBNEU1OEY3REYyN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzcxMUE3RkVFQkQwMTFFQ0JDNTJBNEU1OEY3REYyN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74HfJeAAAJzUlEQVR42uzc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",ee={class:"content-wrap"},le={class:"edit-attr-item-wrap"},te={class:"mb-[10px]"},oe={class:"edit-attr-item-wrap"},Ae={class:"mb-[10px]"},ie={class:"edit-attr-item-wrap"},me={class:"mb-[10px]"},ne={class:"edit-attr-item-wrap"},ae={class:"mb-[10px]"},de={class:"flex flex-wrap"},se=n("img",{class:"max-w-[280px] max-h-[220px]",src:K},null,-1),ge=[se],re=n("img",{class:"max-w-[280px] max-h-[220px]",src:$},null,-1),pe=[re],Ie={class:"dialog-footer"},ue={class:"style-wrap"},Ee={class:"edit-attr-item-wrap"},Be={class:"mb-[10px]"},Ge=y({__name:"edit-text",setup(be,{expose:f}){const l=L();l.editComponent.ignore=[];const r=M(!1),v=()=>{r.value=!0},s=M(l.editComponent.style),V=()=>{switch(s.value){case"style-1":l.editComponent.subTitle.control=!1,l.editComponent.more.control=!1,l.editComponent.styleName="风格1";break;case"style-2":l.editComponent.subTitle.control=!0,l.editComponent.more.control=!0,l.editComponent.styleName="风格2";break}l.editComponent.style=s.value,r.value=!1};return f({}),(w,o)=>{const z=N("ArrowRight"),Z=O,a=J,p=F,B=X,b=U,E=S,c=k,Y=P,G=_,Q=H,C=q,x=j;return h(),D(W,null,[I(n("div",ee,[n("div",le,[n("h3",te,d(e(m)("styleSet")),1),t(p,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:e(m)("selectStyle"),class:"flex"},{default:i(()=>[n("span",{class:"text-primary flex-1 cursor-pointer",onClick:v},d(e(l).editComponent.styleName),1),t(Z,null,{default:i(()=>[t(z)]),_:1})]),_:1},8,["label"])]),_:1})]),n("div",oe,[n("h3",Ae,d(e(m)("titleContent")),1),t(p,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:e(m)("title")},{default:i(()=>[t(B,{modelValue:e(l).editComponent.text,"onUpdate:modelValue":o[0]||(o[0]=A=>e(l).editComponent.text=A),placeholder:e(m)("titlePlaceholder"),clearable:"",maxlength:"15","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(a,{label:e(m)("link")},{default:i(()=>[t(b,{modelValue:e(l).editComponent.link,"onUpdate:modelValue":o[1]||(o[1]=A=>e(l).editComponent.link=A)},null,8,["modelValue"])]),_:1},8,["label"]),I(t(a,{label:e(m)("textAlign")},{default:i(()=>[t(c,{modelValue:e(l).editComponent.textAlign,"onUpdate:modelValue":o[2]||(o[2]=A=>e(l).editComponent.textAlign=A)},{default:i(()=>[t(E,{label:"left"},{default:i(()=>[g(d(e(m)("textAlignLeft")),1)]),_:1}),t(E,{label:"center"},{default:i(()=>[g(d(e(m)("textAlignCenter")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[u,e(l).editComponent.style=="style-1"]])]),_:1})]),I(n("div",ie,[n("h3",me,d(e(m)("subTitleContent")),1),t(p,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:e(m)("subTitle")},{default:i(()=>[t(B,{modelValue:e(l).editComponent.subTitle.text,"onUpdate:modelValue":o[3]||(o[3]=A=>e(l).editComponent.subTitle.text=A),placeholder:e(m)("subTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(a,{label:e(m)("textFontSize")},{default:i(()=>[t(Y,{modelValue:e(l).editComponent.subTitle.fontSize,"onUpdate:modelValue":o[4]||(o[4]=A=>e(l).editComponent.subTitle.fontSize=A),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:12,max:16},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{label:e(m)("textColor")},{default:i(()=>[t(G,{modelValue:e(l).editComponent.subTitle.color,"onUpdate:modelValue":o[5]||(o[5]=A=>e(l).editComponent.subTitle.color=A)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})],512),[[u,e(l).editComponent.subTitle.control]]),I(n("div",ne,[n("h3",ae,d(e(m)("moreContent")),1),t(p,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:e(m)("more")},{default:i(()=>[t(B,{modelValue:e(l).editComponent.more.text,"onUpdate:modelValue":o[6]||(o[6]=A=>e(l).editComponent.more.text=A),placeholder:e(m)("morePlaceholder"),clearable:"",maxlength:"8","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(a,{label:e(m)("link")},{default:i(()=>[t(b,{modelValue:e(l).editComponent.more.link,"onUpdate:modelValue":o[7]||(o[7]=A=>e(l).editComponent.more.link=A)},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{label:e(m)("moreIsShow")},{default:i(()=>[t(Q,{modelValue:e(l).editComponent.more.isShow,"onUpdate:modelValue":o[8]||(o[8]=A=>e(l).editComponent.more.isShow=A)},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{label:e(m)("textColor")},{default:i(()=>[t(G,{modelValue:e(l).editComponent.more.color,"onUpdate:modelValue":o[9]||(o[9]=A=>e(l).editComponent.more.color=A)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})],512),[[u,e(l).editComponent.more.control]]),t(x,{modelValue:r.value,"onUpdate:modelValue":o[13]||(o[13]=A=>r.value=A),title:e(m)("selectStyle"),width:"40%"},{footer:i(()=>[n("span",Ie,[t(C,{onClick:o[12]||(o[12]=A=>r.value=!1)},{default:i(()=>[g(d(e(m)("cancel")),1)]),_:1}),t(C,{type:"primary",onClick:V},{default:i(()=>[g(d(e(m)("confirm")),1)]),_:1})])]),default:i(()=>[n("div",de,[n("div",{class:R(["flex items-center justify-center overflow-hidden w-[280px] h-[100px] mr-[12px] cursor-pointer border bg-gray-50",{"border-primary":s.value=="style-1"}]),onClick:o[10]||(o[10]=A=>s.value="style-1")},ge,2),n("div",{class:R(["flex items-center justify-center overflow-hidden w-[280px] h-[100px] mr-[12px] cursor-pointer border bg-gray-50",{"border-primary":s.value=="style-2"}]),onClick:o[11]||(o[11]=A=>s.value="style-2")},pe,2)])]),_:1},8,["modelValue","title"])],512),[[u,e(l).editTab=="content"]]),I(n("div",ue,[n("div",Ee,[n("h3",Be,d(e(m)("titleStyle")),1),t(p,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:e(m)("textFontSize")},{default:i(()=>[t(Y,{modelValue:e(l).editComponent.fontSize,"onUpdate:modelValue":o[14]||(o[14]=A=>e(l).editComponent.fontSize=A),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:12,max:20},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{label:e(m)("textFontWeight")},{default:i(()=>[t(c,{modelValue:e(l).editComponent.fontWeight,"onUpdate:modelValue":o[15]||(o[15]=A=>e(l).editComponent.fontWeight=A)},{default:i(()=>[t(E,{label:"normal"},{default:i(()=>[g(d(e(m)("fontWeightNormal")),1)]),_:1}),t(E,{label:"bold"},{default:i(()=>[g(d(e(m)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(a,{label:e(m)("textColor")},{default:i(()=>[t(G,{modelValue:e(l).editComponent.textColor,"onUpdate:modelValue":o[16]||(o[16]=A=>e(l).editComponent.textColor=A)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),T(w.$slots,"style")],512),[[u,e(l).editTab=="style"]])],64)}}});const Le=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"}));export{Le as _};

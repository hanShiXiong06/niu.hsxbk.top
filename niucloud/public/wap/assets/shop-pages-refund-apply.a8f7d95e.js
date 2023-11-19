import{d as e,r as a,o as l,c as t,i as s,j as r,w as u,k as o,n as d,G as n,H as i,m as p,bh as c,p as x,P as f,Q as m,R as _,aj as v,_ as y,e as g,q as h,t as b,x as j,I as w,a7 as k,aL as C,a6 as V,aI as L,aM as I,y as U,a2 as D}from"./index-98826dc8.js";import{_ as E}from"./u-icon.f3535e52.js";import{_ as M}from"./u--image.6ab34ad7.js";import{_ as O}from"./u-upload.d7afaa2b.js";import{_ as P}from"./u-button.3ca081fb.js";import{_ as R,a as S}from"./u-radio-group.d08f6a32.js";import{_ as T}from"./u-popup.5ab022a0.js";import{g as q}from"./order.f5c4f493.js";import{g as z,a as A}from"./refund.2e113ea5.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.0f87688c.js";import"./u-transition.b9a2700d.js";import"./u-loading-icon.9963a5a3.js";import"./u-safe-bottom.35e4ae97.js";const F=B(e({__name:"apply",setup(e){var B;const F=a(null),G=a({}),H=a(0),Q=a(0);let W=a(!1);const X=a({order_id:null==(B=F.value)?void 0:B.order_id,order_goods_id:H.value,refund_type:"",apply_money:"",reason:"",remark:"",voucher:[]}),J=a([]),K=a("");z().then((({data:e})=>{J.value=e,J.value&&J.value.length&&(K.value=J.value[0])})).catch(),l((e=>{H.value=e.order_goods_id||0,X.value.order_goods_id=H.value,X.value.order_id=e.order_id||0,q(e.order_id).then((({data:e})=>{F.value=e,F.value.order_goods.forEach(((e,a)=>{H.value==e.order_goods_id&&(G.value=e)})),X.value.apply_money=N.value})).catch((()=>{}))}));const N=t((()=>{let e=0;return e=G.value.goods_money-G.value.discount_money,D(e)})),Y=t((e=>function(e){return""==e||0==e?"6rpx":17*String(e).length+"rpx"})),Z=e=>{X.value.refund_type=e,Q.value=1},$=t((()=>X.value.voucher.map((e=>({url:U(e)}))))),ee=e=>{e.file.forEach((e=>{v({filePath:e.url,name:"file"}).then((e=>{X.value.voucher.length<5&&X.value.voucher.push(e.data.url)})).catch((()=>{}))}))},ae=e=>{X.value.voucher.splice(e.index,1)},le=a(!1),te=()=>{if(!X.value.reason)return y({title:"请选择退款原因",icon:"none"}),!1;le.value||(le.value=!0,A(X.value).then((e=>{le.value=!1,setTimeout((()=>{g({url:"/shop/pages/order/detail",param:{order_id:X.value.order_id}})}),1e3)})).catch((()=>{le.value=!1})))},se=()=>{X.value.reason=K.value,W.value=!1};return(e,a)=>{const l=h(b("u-icon"),E),t=h(b("u--image"),M),v=j,y=w,g=k,D=C,q=V,z=h(b("u-upload"),O),A=L,B=h(b("u-button"),P),H=h(b("u-radio"),R),re=h(b("u-radio-group"),S),ue=h(b("u-popup"),T),oe=I;return F.value?(s(),r(oe,{key:0,"indicator-dots":!1,autoplay:!1,"disable-touch":!0,current:Q.value,class:"h-screen",duration:300},{default:u((()=>[o(D,null,{default:u((()=>[o(g,{"scroll-y":"true",class:"bg-page h-screen"},{default:u((()=>[o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"flex py-[30rpx] border-0 !border-b !border-[#f5f5f5] border-solid"},{default:u((()=>[o(t,{width:"120rpx",height:"120rpx",src:d(U)(G.value.sku_image),model:"aspectFill"},{error:u((()=>[o(l,{name:"photo",color:"#999",size:"50"})])),_:1},8,["src"]),o(v,{class:"flex flex-1 w-0 flex-col justify-between ml-[20rpx]"},{default:u((()=>[o(v,null,{default:u((()=>[o(v,{class:"text-ellipsis text-[#333] text-sm leading-normal font-bold"},{default:u((()=>[n(i(G.value.goods_name),1)])),_:1}),o(v,{class:"mt-[10rpx] text-[26rpx] text-gray-subtitle"},{default:u((()=>[n(i(G.value.sku_name),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"py-[24rpx] flex items-center",onClick:a[0]||(a[0]=e=>Z(1))},{default:u((()=>[o(v,{class:"flex-1"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("仅退款")])),_:1}),o(v,{class:"text-xs mt-[10rpx] text-gray-subtitle"},{default:u((()=>[n("未收到货，或与商家协商一致不用退货只退款")])),_:1})])),_:1}),o(y,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1}),G.value.delivery_status&&"wait_delivery"==G.value.delivery_status?p("v-if",!0):(s(),r(v,{key:0,class:"py-[24rpx] flex items-center border-0 !border-t !border-[#f5f5f5] border-solid",onClick:a[1]||(a[1]=e=>Z(2))},{default:u((()=>[o(v,{class:"flex-1"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("退货退款")])),_:1}),o(v,{class:"text-xs mt-[10rpx] text-gray-subtitle"},{default:u((()=>[n("已收到货，需退还收到的货物")])),_:1})])),_:1}),o(y,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1}))])),_:1})])),_:1})])),_:1}),o(D,null,{default:u((()=>[o(g,{"scroll-y":"true",class:"bg-page h-screen"},{default:u((()=>[o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"py-[24rpx] flex justify-between items-center"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("退款原因")])),_:1}),o(v,{class:"flex items-center",onClick:a[2]||(a[2]=e=>c(W)?W.value=!0:W=!0)},{default:u((()=>[o(v,{class:"flex-1 text-right"},{default:u((()=>[o(v,{class:"text-xs text-gray-subtitle truncate w-[460rpx]"},{default:u((()=>[n(i(X.value.reason||"请选择"),1)])),_:1})])),_:1}),o(y,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1})])),_:1})])),_:1}),o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"py-[24rpx] flex items-center"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("退款金额")])),_:1}),o(v,{class:"flex-1 text-right"},{default:u((()=>[o(v,{class:"flex justify-end items-center"},{default:u((()=>[o(y,{class:"font-bold text-sm leading-none"},{default:u((()=>[n("￥")])),_:1}),o(q,{type:"number",modelValue:X.value.apply_money,"onUpdate:modelValue":a[3]||(a[3]=e=>X.value.apply_money=e),modelModifiers:{number:!0},class:"font-bold text-sm leading-none",style:x({width:d(Y)(X.value.apply_money)})},null,8,["modelValue","style"])])),_:1}),o(v,{class:"text-xs text-gray-subtitle mt-[10rpx]"},{default:u((()=>[n("最多可输入金额￥"+i(d(N)),1)])),_:1})])),_:1})])),_:1})])),_:1}),o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"py-[24rpx]"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("上传凭证"),o(y,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[n("选填")])),_:1})])),_:1}),o(v,{class:"p-[20rpx] bg-[#f5f5f5] rounded mt-[20rpx]"},{default:u((()=>[o(z,{fileList:d($),onAfterRead:ee,onDelete:ae,multiple:"",maxCount:5},null,8,["fileList"])])),_:1})])),_:1})])),_:1}),o(v,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(v,{class:"py-[24rpx]"},{default:u((()=>[o(v,{class:"text-sm"},{default:u((()=>[n("补充描述"),o(y,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[n("选填")])),_:1})])),_:1}),o(v,{class:"p-[20rpx] bg-[#f5f5f5] rounded mt-[20rpx] h-[200rpx]"},{default:u((()=>[o(A,{modelValue:X.value.remark,"onUpdate:modelValue":a[4]||(a[4]=e=>X.value.remark=e),cols:"30",rows:"5",placeholder:"补充描述,有助于更好的处理售后问题","placeholder-class":"text-sm"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(v,{class:"mt-[40rpx] m-[24rpx]"},{default:u((()=>[o(B,{type:"primary",shape:"circle",text:"提交",onClick:te,loading:le.value},null,8,["loading"])])),_:1}),p(" 退款原因 "),o(ue,{show:d(W),onClose:e.close,onOpen:e.open},{default:u((()=>[o(v,{class:"px-[30rpx] pb-[30rpx]"},{default:u((()=>[o(v,{class:"flex items-center h-[90rpx] justify-between"},{default:u((()=>[o(y,null,{default:u((()=>[n("退款原因")])),_:1}),o(y,{class:"iconfont iconguanbi",onClick:a[5]||(a[5]=e=>c(W)?W.value=!1:W=!1)})])),_:1}),o(g,{"scroll-y":"true",class:"h-[450rpx] mt-[20rpx]"},{default:u((()=>[o(re,{modelValue:K.value,"onUpdate:modelValue":a[6]||(a[6]=e=>K.value=e),placement:"column"},{default:u((()=>[(s(!0),f(_,null,m(J.value,((e,a)=>(s(),r(H,{customStyle:{marginBottom:"8px"},key:a,label:e,name:e},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(B,{type:"primary",class:"mt-[40rpx]",shape:"circle",onClick:se},{default:u((()=>[n("确定")])),_:1})])),_:1})])),_:1},8,["show","onClose","onOpen"])])),_:1})])),_:1})])),_:1},8,["current"])):p("v-if",!0)}}}),[["__scopeId","data-v-c83954c3"]]);export{F as default};
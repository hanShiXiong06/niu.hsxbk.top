import{d as e,r as t,J as r,c as l,i as a,j as p,w as s,k as o,P as d,Q as x,R as n,n as c,m as u,a9 as i,aa as f,x as _,D as m,G as b,H as g,y as v,E as h,N as y,e as w,I as k,W as F,aH as E}from"./index-19cdd642.js";import{g as C,a as j}from"./coupon.b9c638a1.js";import{u as T,M as D}from"./useMescroll.566e88d0.js";import{M as I}from"./mescroll-empty.118d7584.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";/* empty css                                                                       */const R=M(e({__name:"list",setup(e){const{mescrollInit:M,downCallback:R,getMescroll:A}=T(f,i),H=t([]),P=t(!0),Q=r(),q=l((()=>Q.info)),z=e=>{P.value=!0;let t={page:e.num,limit:e.size};C(t).then((t=>{let r=t.data.data.map((e=>(-1!=e.sum_count&&e.receive_count===e.sum_count&&(e.btnType="collected"),q.value&&e.is_receive&&e.limit_count===e.member_receive_count?e.btnType="using":e.btnType="collecting",e)));1==e.num&&(H.value=[]),H.value=H.value.concat(r),e.endSuccess(r.length),P.value=!1})).catch((()=>{P.value=!1,e.endErr()}))},B=e=>{w({url:"/shop/pages/coupon/detail",param:{coupon_id:e}})};return(e,t)=>{const r=k,l=_,i=F,f=E;return a(),p(l,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:s((()=>[o(D,{ref:"mescrollRef",onInit:c(M),onDown:c(R),onUp:z},{default:s((()=>[o(l,{class:"py-[20rpx] px-[24rpx]"},{default:s((()=>[(a(!0),d(n,null,x(H.value,((e,t)=>(a(),d(n,null,["collected"===e.btnType?(a(),p(l,{key:0,class:m(["flex items-center relative w-[100%] rounded-[12rpx] overflow-hidden bg-[#EEEEEE]",{"mt-[20rpx]":t}]),onClick:t=>B(e.id)},{default:s((()=>[o(l,{class:"relative pt-[50rpx] w-[244rpx] h-[222rpx] bg-[#93979D] text-[#fff] text-center box-border px-[40rpx] box-border"},{default:s((()=>[o(l,{class:"w-[100%]"},{default:s((()=>[o(l,{class:"leading-[40rpx] font-500 price-font"},{default:s((()=>[o(r,{class:"text-[28rpx]"},{default:s((()=>[b("￥")])),_:1}),o(r,{class:"text-[50rpx]"},{default:s((()=>[b(g(e.coupon_price),1)])),_:2},1024)])),_:2},1024),o(l,{class:"mt-[35rpx] text-[23rpx] leading-[32rpx] font-500"},{default:s((()=>["0.00"===e.min_condition_money?(a(),p(r,{key:0},{default:s((()=>[b("无门槛")])),_:1})):(a(),p(r,{key:1},{default:s((()=>[b("满"+g(e.coupon_min_price)+"元可用",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),o(i,{class:"w-[10rpx] h-[222rpx] absolute right-[-2rpx] top-0",src:c(v)("addon/shop/coupon/coupon_border.png"),mode:"aspectFill"},null,8,["src"])])),_:2},1024),o(l,{class:"h-[222rpx] flex flex-1 flex-wrap pt-[24rpx] box-border ml-[19rpx] mr-[9rpx]"},{default:s((()=>[o(l,{class:"text-[27rpx] text-[#303133] leading-[38rpx] w-[100%]"},{default:s((()=>[o(l,null,{default:s((()=>[b(g(e.title),1)])),_:2},1024),o(l,{class:"flex mt-[5rpx]"},{default:s((()=>[o(r,{class:"flex items-center bg-[#93979D] text-[#fff] text-[20rpx] h-[32rpx] px-[16rpx] rounded-[16rpx]"},{default:s((()=>[b(g(e.type_name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"self-end w-[100%] pt-[19rpx] pb-[20rpx] text-[22rpx] leading-[30rpx] text-[#90939A] border-0 border-t-[1px] border-dashed border-[#ccc]"},{default:s((()=>[1==e.valid_type?(a(),p(r,{key:0},{default:s((()=>[b("领取之日起"+g(e.length||"")+"天内有效",1)])),_:2},1024)):(a(),p(r,{key:1},{default:s((()=>[b(" 有效期至"+g(e.valid_end_time?e.valid_end_time.slice(0,10):""),1)])),_:2},1024))])),_:2},1024)])),_:2},1024),o(f,{class:"!w-[128rpx] !h-[50rpx] text-[23rpx] !text-[#93979D] !mr-[34rpx] !border-0 !bg-[#EEEEEE] !border-0 rounded-full text-white leading-[50rpx] remove-border",disabled:""},{default:s((()=>[b("已领完")])),_:1}),o(l,{class:"absolute top-[50%] left-0 mt-[-20rpx] h-[40rpx] w-[20rpx] rounded-tr-[20rpx] rounded-br-[20rpx] bg-[#fff]"}),o(l,{class:"absolute top-[50%] right-0 mt-[-20rpx] h-[40rpx] w-[20rpx] rounded-tl-[20rpx] rounded-bl-[20rpx] bg-[#fff]"})])),_:2},1032,["class","onClick"])):(a(),p(l,{key:1,class:m(["flex items-center relative w-[100%] rounded-[16rpx] overflow-hidden bg-[#FFF4F4]",{"mt-[20rpx]":t}]),onClick:t=>B(e.id)},{default:s((()=>[o(l,{class:"relative pt-[50rpx] w-[244rpx] h-[222rpx] bg-[#FF4646] text-[#fff] text-center box-border px-[40rpx] box-border"},{default:s((()=>[o(l,{class:"w-[100%]"},{default:s((()=>[o(l,{class:"leading-[40rpx] font-500 price-font"},{default:s((()=>[o(r,{class:"text-[28rpx]"},{default:s((()=>[b("￥")])),_:1}),o(r,{class:"text-[50rpx]"},{default:s((()=>[b(g(e.coupon_price),1)])),_:2},1024)])),_:2},1024),o(l,{class:"mt-[35rpx] text-[23rpx] leading-[32rpx] font-500"},{default:s((()=>["0.00"===e.min_condition_money?(a(),p(r,{key:0},{default:s((()=>[b("无门槛")])),_:1})):(a(),p(r,{key:1},{default:s((()=>[b("满"+g(e.coupon_min_price)+"元可用",1)])),_:2},1024))])),_:2},1024)])),_:2},1024),o(i,{class:"w-[10rpx] h-[222rpx] absolute right-[-2rpx] top-0",src:c(v)("addon/shop/coupon/coupon_border_active.png"),mode:"aspectFill"},null,8,["src"])])),_:2},1024),o(l,{class:"h-[222rpx] flex flex-1 flex-wrap pt-[24rpx] box-border ml-[19rpx] mr-[9rpx]"},{default:s((()=>[o(l,{class:"text-[27rpx] text-[#303133] leading-[38rpx] w-[100%]"},{default:s((()=>[o(l,null,{default:s((()=>[b(g(e.title),1)])),_:2},1024),o(l,{class:"flex mt-[5rpx]"},{default:s((()=>[o(r,{class:"flex items-center bg-[#FF4646] text-[#fff] text-[20rpx] h-[32rpx] px-[16rpx] rounded-[16rpx]"},{default:s((()=>[b(g(e.type_name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"self-end w-[100%] pt-[19rpx] pb-[20rpx] text-[20rpx] leading-[30rpx] text-[#90939A] border-0 border-t-[1px] border-dashed border-[#ccc]"},{default:s((()=>[1==e.valid_type?(a(),p(r,{key:0},{default:s((()=>[b("领取之日起"),o(r,{class:"text-[#FF4543]"},{default:s((()=>[b(g(e.length||""),1)])),_:2},1024),b("天内有效")])),_:2},1024)):(a(),p(r,{key:1},{default:s((()=>[b(" 有效期至"),o(r,{class:"text-[#FF4543]"},{default:s((()=>[b(g(e.valid_end_time?e.valid_end_time.slice(0,10):""),1)])),_:2},1024)])),_:2},1024))])),_:2},1024)])),_:2},1024),"collecting"===e.btnType?(a(),p(l,{key:0,onClick:h((r=>((e,t)=>{if(!q.value)return y().setLoginBack({url:"/shop/pages/coupon/list"}),!1;j({coupon_id:e,number:1,type:"receive"}).then((e=>{H.value[t].btnType="using"}))})(e.id,t)),["stop"]),class:"!mr-[34rpx]"},{default:s((()=>[o(f,{class:"w-[128rpx] h-[50rpx] text-[23rpx] !border-0 !bg-[#FF4646] rounded-full text-white leading-[50rpx] remove-border"},{default:s((()=>[b("领取")])),_:1})])),_:2},1032,["onClick"])):u("v-if",!0),"using"===e.btnType?(a(),p(l,{key:1,onClick:h((t=>{return r=e.id,void w({url:"/shop/pages/goods/list",param:{coupon_id:r}});var r}),["stop"]),class:"!mr-[34rpx]"},{default:s((()=>[o(f,{class:"w-[128rpx] h-[50rpx] text-[23rpx] !border-0 !bg-[#FF4646] rounded-full text-white leading-[50rpx] remove-border"},{default:s((()=>[b("去使用")])),_:1})])),_:2},1032,["onClick"])):u("v-if",!0),o(l,{class:"absolute top-[50%] left-0 mt-[-20rpx] h-[40rpx] w-[20rpx] rounded-tr-[20rpx] rounded-br-[20rpx] bg-[#fff]"}),o(l,{class:"absolute top-[50%] right-0 mt-[-20rpx] h-[40rpx] w-[20rpx] rounded-tl-[20rpx] rounded-bl-[20rpx] bg-[#fff]"})])),_:2},1032,["class","onClick"]))],64)))),256))])),_:1}),H.value.length||P.value?u("v-if",!0):(a(),p(I,{key:0,option:{icon:c(v)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit","onDown"])])),_:1})}}}),[["__scopeId","data-v-1b1b41c5"]]);export{R as default};
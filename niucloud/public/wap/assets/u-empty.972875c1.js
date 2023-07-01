import{_ as t}from"./u-icon.461524ba.js";import{x as e,y as i,z as o,m as s,p as a,h as n,i as r,w as d,n as l,j as m,C as p,D as u,B as y,E as c,a1 as f,H as h,q as S}from"./index-5bb08350.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const x=g({name:"u-empty",mixins:[i,o,{props:{icon:{type:String,default:e.empty.icon},text:{type:String,default:e.empty.text},textColor:{type:String,default:e.empty.textColor},textSize:{type:[String,Number],default:e.empty.textSize},iconColor:{type:String,default:e.empty.iconColor},iconSize:{type:[String,Number],default:e.empty.iconSize},mode:{type:String,default:e.empty.mode},width:{type:[String,Number],default:e.empty.width},height:{type:[String,Number],default:e.empty.height},show:{type:Boolean,default:e.empty.show},marginTop:{type:[String,Number],default:e.empty.marginTop}}}],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const t={};return t.marginTop=uni.$u.addUnit(this.marginTop),uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),t)},textStyle(){const t={};return t.color=this.textColor,t.fontSize=uni.$u.addUnit(this.textSize),t},isSrc(){return this.icon.indexOf("/")>=0}}},[["render",function(e,i,o,g,x,_){const w=s(a("u-icon"),t),$=f,z=h,b=S;return e.show?(n(),r(b,{key:0,class:"u-empty",style:l([_.emptyStyle])},{default:d((()=>[_.isSrc?(n(),r($,{key:1,style:l({width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}),src:e.icon,mode:"widthFix"},null,8,["style","src"])):(n(),r(w,{key:0,name:"message"===e.mode?"chat":`empty-${e.mode}`,size:e.iconSize,color:e.iconColor,"margin-top":"14"},null,8,["name","size","color"])),m(z,{class:"u-empty__text",style:l([_.textStyle])},{default:d((()=>[p(u(e.text?e.text:x.icons[e.mode]),1)])),_:1},8,["style"]),e.$slots.default||e.$slots.$default?(n(),r(b,{key:2,class:"u-empty__wrap"},{default:d((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3})):c("",!0)])),_:3},8,["style"])):c("",!0)}],["__scopeId","data-v-bdfabab8"]]);export{x as _};

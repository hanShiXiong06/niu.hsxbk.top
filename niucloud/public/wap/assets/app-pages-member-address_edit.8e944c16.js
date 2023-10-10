import{_ as e,a as t,b as a}from"./u-form.060df079.js";import{V as l,W as i,X as s,q as r,t as d,i as o,j as c,w as u,k as n,p,I as m,x as h,d as v,r as f,a as y,b0 as b,ag as _,b1 as g,K as x,L as k,m as C,l as V,F as w,G as $,H as S,v as z,ao as A,o as j,b2 as U,c as P,n as N,b3 as B,b4 as I,Z as q}from"./index-27e6e9c5.js";import{_ as H}from"./u-loading-icon.5226cdc0.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as T}from"./u-button.f8346dad.js";import{_ as X}from"./u-popup.5da93907.js";import"./u-icon.831afa15.js";import"./u-line.6b994b75.js";import"./u-transition.b265f543.js";import"./u-safe-bottom.5752cbcf.js";const E=R({name:"u-switch",mixins:[i,s,{props:{loading:{type:Boolean,default:l.switch.loading},disabled:{type:Boolean,default:l.switch.disabled},size:{type:[String,Number],default:l.switch.size},activeColor:{type:String,default:l.switch.activeColor},inactiveColor:{type:String,default:l.switch.inactiveColor},modelValue:{type:[Boolean,String,Number],default:l.switch.value},activeValue:{type:[String,Number,Boolean],default:l.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:l.switch.inactiveValue},asyncChange:{type:Boolean,default:l.switch.asyncChange},space:{type:[String,Number],default:l.switch.space}}}],watch:{modelValue:{immediate:!0,handler(e){e!==this.inactiveValue&&e!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:()=>({bgColor:"#ffffff"}),computed:{isActive(){return this.modelValue===this.activeValue},switchStyle(){let e={};return e.width=uni.$u.addUnit(2*this.size+2),e.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(e.borderColor="rgba(0, 0, 0, 0)"),e.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,e},nodeStyle(){let e={};e.width=uni.$u.addUnit(this.size-this.space),e.height=uni.$u.addUnit(this.size-this.space);const t=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return e.transform=`translateX(-${t})`,e},bgStyle(){let e={};return e.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),e.height=uni.$u.addUnit(this.size),e.backgroundColor=this.inactiveColor,e.transform=`scale(${this.isActive?0:1})`,e},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},emits:["update:modelValue","change"],methods:{clickHandler(){if(!this.disabled&&!this.loading){const e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("update:modelValue",e),this.$nextTick((()=>{this.$emit("change",e)}))}}}},[["render",function(e,t,a,l,i,s){const v=h,f=r(d("u-loading-icon"),H);return o(),c(v,{class:m(["u-switch",[e.disabled&&"u-switch--disabled"]]),style:p([s.switchStyle,e.$u.addStyle(e.customStyle)]),onClick:s.clickHandler},{default:u((()=>[n(v,{class:"u-switch__bg",style:p([s.bgStyle])},null,8,["style"]),n(v,{class:m(["u-switch__node",[e.modelValue&&"u-switch__node--on"]]),style:p([s.nodeStyle]),ref:"u-switch__node"},{default:u((()=>[n(f,{show:e.loading,mode:"circle",timingFunction:"linear",color:e.modelValue?e.activeColor:"#AAABAD",size:.6*e.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-a17af18d"]]),F=v({__name:"area-select",props:{areaId:{type:Number,default:0}},emits:["complete"],setup(e,{expose:t,emit:a}){const l=e,i=f(!1),s=y({province:[],city:[],district:[]}),p=f("province"),v=y({province:null,city:null,district:null});b(0).then((({data:e})=>{s.province=e})).catch(),_((()=>l.areaId),((e,t)=>{e&&!t&&g(e).then((({data:e})=>{e.province&&(v.province=e.province),e.city&&(v.city=e.city),e.district&&(v.district=e.district)})).catch()})),_((()=>v.province),(()=>{b(v.province.id).then((({data:e})=>{if(s.city=e,p.value="city",v.city){let t=!1;for(let a=0;a<e.length;a++)if(v.city.id==e[a].id){t=!0;break}t||(v.city=null)}})).catch()}),{deep:!0}),_((()=>v.city),(e=>{e?b(v.city.id).then((({data:e})=>{if(s.district=e,p.value="district",v.district){let t=!1;for(let a=0;a<e.length;a++)if(v.district.id==e[a].id){t=!0;break}t||(v.district=null)}})).catch():(s.district=[],v.district=null)}),{deep:!0}),_((()=>v.district),(e=>{e&&(p.value="district",a("complete",v),i.value=!1)}),{deep:!0});return t({open:()=>{i.value=!0}}),(e,t)=>{const a=h,l=A,f=r(d("u-popup"),X);return o(),c(f,{show:i.value,onClose:t[3]||(t[3]=e=>i.value=!1),mode:"bottom",round:10,closeable:!0},{default:u((()=>[n(a,{class:"text-center p-[30rpx]"},{default:u((()=>[x("请选择地区")])),_:1}),n(a,{class:"flex p-[30rpx] text-sm font-semibold"},{default:u((()=>[s.province.length?(o(),c(a,{key:0,class:m(["pr-[50rpx]",{"text-[red]":"province"==p.value}]),onClick:t[0]||(t[0]=e=>p.value="province")},{default:u((()=>[v.province?(o(),c(a,{key:0},{default:u((()=>[x(k(v.province.name),1)])),_:1})):(o(),c(a,{key:1},{default:u((()=>[x("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0),s.city.length?(o(),c(a,{key:1,class:m(["pr-[50rpx]",{"text-[red]":"city"==p.value}]),onClick:t[1]||(t[1]=e=>p.value="city")},{default:u((()=>[v.city?(o(),c(a,{key:0},{default:u((()=>[x(k(v.city.name),1)])),_:1})):(o(),c(a,{key:1},{default:u((()=>[x("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0),s.district.length?(o(),c(a,{key:2,class:m(["pr-[50rpx]",{"text-[red]":"district"==p.value}]),onClick:t[2]||(t[2]=e=>p.value="district")},{default:u((()=>[v.district?(o(),c(a,{key:0},{default:u((()=>[x(k(v.district.name),1)])),_:1})):(o(),c(a,{key:1},{default:u((()=>[x("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0)])),_:1}),n(l,{"scroll-y":"true",class:"h-[50vh]"},{default:u((()=>[n(a,{class:"flex p-[30rpx] pt-0 text-sm"},{default:u((()=>[s.province.length?V((o(),c(a,{key:0},{default:u((()=>[(o(!0),w($,null,S(s.province,(e=>(o(),c(a,{class:m(["leading-loose",{"text-[red]":v.province&&v.province.id==e.id}]),onClick:t=>v.province=e},{default:u((()=>[x(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[z,"province"==p.value]]):C("v-if",!0),s.city.length?V((o(),c(a,{key:1},{default:u((()=>[(o(!0),w($,null,S(s.city,(e=>(o(),c(a,{class:m(["leading-loose",{"text-[red]":v.city&&v.city.id==e.id}]),onClick:t=>v.city=e},{default:u((()=>[x(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[z,"city"==p.value]]):C("v-if",!0),s.district.length?V((o(),c(a,{key:2},{default:u((()=>[(o(!0),w($,null,S(s.district,(e=>(o(),c(a,{class:m(["leading-loose",{"text-[red]":v.district&&v.district.id==e.id}]),onClick:t=>v.district=e},{default:u((()=>[x(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[z,"district"==p.value]]):C("v-if",!0)])),_:1})])),_:1})])),_:1},8,["show"])}}}),W=v({__name:"address_edit",setup(l){const i=f({id:0,name:"",mobile:"",province_id:0,city_id:0,district_id:0,address:"",full_address:"",is_default:0,area:"",type:"address"});j((e=>{e.id&&U(e.id).then((({data:e})=>{e&&Object.assign(i.value,e)})).catch()}));const s=f(),p=f(null),m=P((()=>({name:{type:"string",required:!0,message:q("namePlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:q("mobilePlaceholder"),trigger:["blur","change"]},{validator:()=>uni.$u.test.mobile(i.value.mobile),message:q("mobileError")}],area:{validator:()=>!uni.$u.test.isEmpty(i.value.area),message:q("selectAreaPlaceholder")},address:{type:"string",required:!0,message:q("addressPlaceholder"),trigger:["blur","change"]}}))),v=()=>{s.value.open()},y=e=>{i.value.province_id=e.province.id||0,i.value.city_id=e.city.id||0,i.value.district_id=e.district.id||0,i.value.area=`${e.province.name||""}${e.city.name||""}${e.district.name||""}`},b=f(!1),_=()=>{const e=i.id?B:I;p.value.validate().then((()=>{b.value||(b.value=!0,i.value.full_address=i.value.area+i.value.address,e(i.value).then((e=>{b.value=!1})).catch((()=>{b.value=!1})))}))};return(l,f)=>{const g=r(d("u-input"),e),C=r(d("u-form-item"),t),V=h,S=r(d("u-switch"),E),z=r(d("u-button"),T),A=r(d("u-form"),a),j=r(d("area-select"),F);return o(),w($,null,[n(V,{class:"px-[30rpx]"},{default:u((()=>[n(A,{labelPosition:"left",model:i.value,labelWidth:"200rpx",errorType:"toast",rules:N(m),ref_key:"formRef",ref:p},{default:u((()=>[n(V,{class:"mt-[10rpx]"},{default:u((()=>[n(C,{label:N(q)("name"),prop:"name","border-bottom":!0},{default:u((()=>[n(g,{modelValue:i.value.name,"onUpdate:modelValue":f[0]||(f[0]=e=>i.value.name=e),border:"none",clearable:"",placeholder:N(q)("namePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(V,{class:"mt-[10rpx]"},{default:u((()=>[n(C,{label:N(q)("mobile"),prop:"mobile","border-bottom":!0},{default:u((()=>[n(g,{modelValue:i.value.mobile,"onUpdate:modelValue":f[1]||(f[1]=e=>i.value.mobile=e),border:"none",clearable:"",placeholder:N(q)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(V,{class:"mt-[10rpx]"},{default:u((()=>[n(C,{label:N(q)("selectArea"),prop:"area","border-bottom":!0,onClick:v},{default:u((()=>[i.value.area?(o(),c(V,{key:1,class:"text-[30rpx]"},{default:u((()=>[x(k(i.value.area),1)])),_:1})):(o(),c(V,{key:0,class:"text-gray-placeholder text-[30rpx]"},{default:u((()=>[x(k(N(q)("selectAreaPlaceholder")),1)])),_:1}))])),_:1},8,["label"])])),_:1}),n(V,{class:"mt-[10rpx]"},{default:u((()=>[n(C,{label:N(q)("address"),prop:"address","border-bottom":!0},{default:u((()=>[n(g,{modelValue:i.value.address,"onUpdate:modelValue":f[2]||(f[2]=e=>i.value.address=e),border:"none",clearable:"",placeholder:N(q)("addressPlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(V,{class:"mt-[10rpx]"},{default:u((()=>[n(C,{label:N(q)("defaultAddress"),prop:"name","border-bottom":!0},{default:u((()=>[n(S,{modelValue:i.value.is_default,"onUpdate:modelValue":f[3]||(f[3]=e=>i.value.is_default=e),size:"20",activeValue:1,inactiveValue:0},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),n(V,{class:"mt-[40rpx]"},{default:u((()=>[n(z,{type:"primary",shape:"circle",text:N(q)("save"),onClick:_,loading:b.value},null,8,["text","loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1}),n(j,{ref_key:"areaRef",ref:s,onComplete:y,"area-id":i.value.district_id},null,8,["area-id"])],64)}}});export{W as default};

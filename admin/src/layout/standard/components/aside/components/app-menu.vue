<template>
    <div :class="[{'group-hover:flex': props.isShowHover},'hidden fixed left-0 top-[65px] z-[5555] bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap box-border shadow-lg ']">
        <div v-for="(item, index) in data" :key="index" @click="toLink(item, props.hoverType)" class="flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px] box-border w-[165px]">
            <img :src="img(item.icon)" class="w-[44px] h-[44px] rounded-full mr-[5px]" alt="" :title="item.title">
            <span>{{ item.title }}</span>
        </div>
        <div v-if="!data.length" class="flex-1 flex flex-col justify-center items-center pb-[30px]">
            <div class="w-[130px]"><img src="@/app/assets/images/index/apply_empty.png" class="max-w-full" alt=""></div>
            <div class="text-[14px] text-[#909399]">暂无安装任何应用或插件，马上去<a href="https://www.niucloud.com/product/" target="_blank" class="text-[var(--el-color-primary)]">官方应用市场</a>逛逛</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { img } from '@/utils/common'
const props = defineProps(['isShowHover','data','hoverType'])
let data = ref([]);
if(props.data){
    props.data.forEach((item,index) => {
        if(item.type == "app"){
            data.value.push(item);            
        }
    });
}
const emit = defineEmits(['child-click'])
const toLink = (data,type)=>{
    emit('child-click',data,type)
}
</script>

<style lang="scss"></style>

<template>
    <div class="main-container w-full bg-white" v-loading="loading">
    
        <div v-for="(item, index) in detail.appList">

            <el-card class="box-card !border-none" shadow="never" v-if="item.child != ''">
                <div class="flex justify-between items-center">
                    <span class="text-[20px]">{{item.name}}</span>
                </div>
                <div class="flex flex-wrap plug-list pb-10 plug-large">
                    <div v-for="(ite, ind) in item.child">
                        <div class="relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary">
                            <div @click="toLink(ite.url)"  class="flex py-5 items-center">
                                <div class="flex justify-center items-center">
                                    <el-image class="w-[40px] h-[40px]" :src="img(ite.icon)" fit="contain">
                                        <template #error>
                                            <div class="image-slot">
                                                <img class="w-[50px] h-[50px]" src="@/app/assets/images/index/app_default.png" />
                                            </div>
                                        </template>
                                    </el-image>
                                </div>
                                <div class="flex flex-col justify-between text-left w-[190px]">
                                    <p class="app-text w-[190px] text-[17px] text-[#222] pl-3">{{ ite.title }}</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getMarketingIndex } from '@/shop/api/marketing'
import { img } from '@/utils/common'
import { findFirstValidRoute } from '@/router/routers'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
import { t } from '@/lang'
import storage from '@/utils/storage'

const userStore = useUserStore()
const router = useRouter()
let loading = ref(true)
const detail = reactive({
    appList: []
})

const getAppList = async () => {
    const addon = storage.get('menuAppStorage');
    const res = await getMarketingIndex({addon: addon})
   
    detail.appList = res.data
        loading.value = false
}

getAppList();

const toLink = (link) => {
    router.push(link)
}

</script>

<style lang="scss" scoped>
.main-container,.empty{
    min-height: calc(100vh - 84px);
}
	.app-text {
	    overflow: hidden; /* 超出部分隐藏 */
	    white-space: nowrap; /* 禁止文本换行 */
	    text-overflow: ellipsis; /* 显示省略号 */
	}
    .app-item:hover .with-ite {
		display: block;
	}
	.el-form-item {
		margin-bottom: 0px !important;
	}
</style>

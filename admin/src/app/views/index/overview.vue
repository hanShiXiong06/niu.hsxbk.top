<template>
    <div class="main-container" v-loading="loading">
        <div :class="['h-[480px] box-border px-[60px] pt-[40px]',detail.appList.length?'overview-top':'']">
            <div class="flex justify-between items-center">
                <div class="font-600 text-[20px] text-[#222]">{{ t('app') }}</div>
                <el-button @click="installApp">
                    <span class="iconfont iconanzhuang mr-[9px]"></span><span>{{ t('installApp') }}</span>
                </el-button>
            </div>
            <div class="flex flex-wrap mt-[28px]">
                <template v-for="(item, index) in detail.appList" :key="index">
                    <div class="app-item w-[284px] box-border p-[18px] pb-[24px] bg-[#fff] rounded-[8px] cursor-pointer mr-[24px] mb-[24px]"
                        @click="itemPath(item.key)">
                        <div class="flex items-center">
                            <el-image class="w-[40px] h-[40px]  rounded-[8px]" :src="img(item.icon)" fit="contain">
                                <template #error>
                                    <div class="image-slot">
                                        <img class="w-[40px] h-[40px] rounded-[8px]"
                                            src="@/app/assets/images/app_store/app_store_default.png" />
                                    </div>
                                </template>
                            </el-image>
                            <div class="flex-1 font-600 text-[14px] text-[#222] ml-[12px]">{{ item.title }}</div>
                        </div>
                        <div class="font-500 text-[13px] text-[#6D7278] mt-[14px]">{{ item.desc }}</div>
                    </div>
                </template> 
                <el-empty v-if="!detail.appList.length && !loading" class="mx-auto overview-empty">
                    <template #image>
                        <div class="w-[230px] mx-auto"><img src="@/app/assets/images/index/apply_empty.png" class="max-w-full" alt=""></div>
                    </template>
                    <template #description>
                        <p class="flex items-center"><span>{{ t('descriptionLeft') }}</span><el-link type="primary" @click="goRouter">{{ t('link') }}</el-link><span>{{ t('descriptionRight') }}</span></p>
                    </template>
                </el-empty>
            </div>
            
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { t } from '@/lang'
import { getAuthaddon } from '@/app/api/auth'
import { img } from '@/utils/common'
import { useRouter } from 'vue-router'
const router = useRouter()
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
const loading = ref(true)
const detail = reactive({
    appList: []
})
const getAuthaddonFn = () => {
    loading.value = true
    getAuthaddon().then(res => {
        detail.appList = res.data
        loading.value = false
    }).catch(()=>{
        loading.value = false

    })
}
getAuthaddonFn()
const installApp = () => {
    router.push('tools/app_store')
}
const itemPath = (key: any) => {
    let name = userStore.addonIndexRoute[key]
    if (name) {
        router.push({ name })
    } else {
        installApp()
    }

}
const goRouter = ()=>{
    window.open('https://www.niucloud.com/app')
}
</script>

<style lang="scss" scoped>
.main-container{
    background: linear-gradient(180deg, rgba(253,253,253,0.24) 0%, #FAFAFA 100%);
    min-height: calc(100vh - 64px);
}
.overview-top {
    background-image: url('@/app/assets/images/index/overview.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.app-item {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.18);
}
</style>
<style>
.overview-empty .el-empty__image{
    width: auto !important;
}
</style>

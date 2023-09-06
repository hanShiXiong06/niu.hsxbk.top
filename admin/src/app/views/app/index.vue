<template>
    <div class="main-container h-[500px] w-full p-5 bg-white">
        <el-card class="box-card !border-none" shadow="never">
            <template #header>
                <div class="card-header">
                    <span class="text-[15px]">基本应用</span>
                </div>
            </template>

            <div class="flex flex-wrap plug-list pb-10 plug-large">
                <div v-for="(item, index) in applyList.list" :key="index + 'b'" class="app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]" @click="toLink(item.key)">
                    <div class="flex justify-center items-center">
                        <el-image class="w-[240px] h-[120px]" :src="img(item.icon)" fit="contain">
                            <template #error>
                                <div class="image-slot">
                                    <img class="w-[240px] h-[120px]" src="@/app/assets/images/app_store/app_store_default.png" />
                                </div>
                            </template>
                        </el-image>
                    </div>
                    <div class="flex w-[240px] h-[46px]">
                        <div class="text-left mt-2 w-[190px]">
                            <p class="app-text text-[14px] text-[#222] pl-2">{{ item.title }}</p>
                            <p class="app-text text-[12px] text-[#999] pl-2">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getApply } from '@/app/api/apply'
import { img } from '@/utils/common'
import { findFirstValidRoute } from '@/router/routers'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const applyList = reactive({
    list: []
})

const getApplelist = async () => {
    const res = await getApply({})
    applyList.list = res.data
}
getApplelist()

const appLink = ref({})
const getAppLink = () => {
    userStore.routers.forEach((item, index) => {
        if (item.meta.app != '') {
            if (item.children && item.children.length) {
                appLink.value[item.meta.app] = findFirstValidRoute(item.children)
            } else {
                appLink.value[item.meta.app] = item.name
            }
        }
    })
}
getAppLink()

const toLink = (addon: string) => {
    router.push({ name: appLink.value[addon] })
}
</script>

<style lang="scss" scoped></style>

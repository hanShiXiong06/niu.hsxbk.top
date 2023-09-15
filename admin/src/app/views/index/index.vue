<template>
    <div class="main-container w-full bg-white" v-loading="loading">
        <el-card class="box-card !border-none" shadow="never" >
            <div class="flex justify-between items-center">
                <span class="text-[20px]">应用管理</span>
				<el-form :inline="true" :model="applyList.search" ref="searchFormRef">
				    <el-form-item :label="t('appName')" prop="title">
				        <el-input v-model="applyList.search.title" :placeholder="t('appNamePlaceholder')" />
				    </el-form-item>
				    <el-form-item>
				        <el-button type="primary" @click="getApplelist()">{{ t('search') }}</el-button>
				    </el-form-item>
				</el-form>
            </div>
            <div class="flex flex-wrap plug-list pb-10 plug-large" v-if="applyList.list.length">
                <div v-for="(item, index) in applyList.list" :key="index + 'b'">
                    <div v-if="appLink[item.key] && item.type == 'addon'" class="relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary">
                        <div @click="toLink(item.key)"  class="flex py-5 items-center">
                            <div class="flex justify-center items-center">
                                <el-image class="w-[40px] h-[40px]" :src="img(item.icon)" fit="contain">
                                    <template #error>
                                        <div class="image-slot">
                                            <img class="w-[50px] h-[50px]" src="@/app/assets/images/index/app_default.png" />
                                        </div>
                                    </template>
                                </el-image>
                            </div>
                            <div class="flex flex-col justify-between text-left w-[190px]">
                                <p class="app-text w-[190px] text-[17px] text-[#222] pl-3">{{ item.title }}</p>
                            </div>
                        </div>
                        <!-- <div class="with-ite absolute top-0 right-0 flex flex-col hidden">
                            <span class="block pr-4 mt-3" :class="item.is_star == 2 ? 'text-primary' : 'text-[#999]'" @click.stop="withEvent(item.key)"><el-icon size="18px"><StarFilled /></el-icon></span>
                        </div> -->
                    </div>
                </div>
            </div>
			<div class="empty flex items-center  justify-center" v-if="!loading&&!applyList.list.length" >
			    <el-empty :description="t('emptyData')" />
			</div>
        </el-card>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getApply } from '@/app/api/apply'
import { setStarAddon } from '@/app/api/auth'
import { img } from '@/utils/common'
import { findFirstValidRoute } from '@/router/routers'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
import { t } from '@/lang'
import storage from '@/utils/storage'
const userStore = useUserStore()
const router = useRouter()
const applyList = reactive({
    list: [],
	search: {
		title: ""
	}
})
let loading = ref(true)
const getApplelist = async () => {
    const res = await getApply({title: applyList.search.title})
    applyList.list = res.data
    loading.value = false
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
    storage.set({ key: 'plugMenuTypeStorage', data: addon })
    let data = userStore.appMenuList
    if(!data.length){
        data.push(addon)
    }else if(!data.includes(addon)) {
        data.push(addon)
    }
    userStore.setAppMenuList(data)
    router.push({ name: appLink.value[addon] })
}

const withEvent = (key: string) => {
	setStarAddon({key: key}).then(() => {
		getApplelist()
	})
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

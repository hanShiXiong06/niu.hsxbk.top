<template>
	<div class="h-[480px] box-border pt-[20px] px-[20px]" v-loading="loading">
		<div class="flex justify-between items-center">
			<div class="font-600 text-[20px] text-[#222]">{{ t('app') }}</div>
            <el-button @click="toAppStore">
                <el-icon class="mr-[2px]"><Download /></el-icon>
                <span>{{t('appStore')}}</span>
            </el-button>
		</div>
		<div class="flex flex-wrap mt-[28px]">
			<template v-for="(item, index) in detail.appList" :key="index">
				<div class="app-item w-[284px] box-border p-[18px] pb-[24px] bg-[#fff] rounded-[8px] cursor-pointer mr-[24px] mb-[24px]"
						@click="itemPath(item)">
					<div class="flex items-center">
						<el-image class="w-[40px] h-[40px]  rounded-[8px]" :src="img(item.icon)" fit="contain">
							<template #error>
								<div class="image-slot">
									<img class="w-[40px] h-[40px] rounded-[8px]"
											src="@/app/assets/images/app_store/app_store_default.png"/>
								</div>
							</template>
						</el-image>
						<div class="flex-1 font-600 text-[14px] text-[#222] ml-[12px]">{{ item.title }}</div>
					</div>
					<div class="font-500 text-[13px] text-[#6D7278] mt-[14px]">{{ item.desc }}</div>
				</div>
			</template>

			<el-empty  class="mx-auto overview-empty" v-if="!detail.appList.length && !loading">
				<template #image>
					<div class="w-[230px] mx-auto">
						<img src="@/app/assets/images/index/apply_empty.png" class="max-w-full" alt="">
					</div>
				</template>
				<template #description>
					<p class="flex items-center">
						<span>{{ t('descriptionLeft') }}</span>
						<el-link type="primary" @click="toAppStore" class="mx-[5px]">{{ t('link') }}</el-link>
						<span>{{ t('descriptionRight') }}</span>
					</p>
				</template>
			</el-empty>

		</div>

	</div>
</template>

<script lang="ts" setup>
    import {reactive, ref, onMounted, computed} from 'vue'
    import {t} from '@/lang'
    import {getAuthaddon} from '@/app/api/auth'
    import {img} from '@/utils/common'
    import {useRouter} from 'vue-router'
    import storage from '@/utils/storage'
    import {findFirstValidRoute} from '@/router/routers'
    import {UserFilled} from '@element-plus/icons-vue'
    import useUserStore from '@/stores/modules/user'
    const router = useRouter()

    const userStore = useUserStore()
    const loading = ref(true)
    const detail = reactive({
        appList: []
    })
    const appLink: any = ref({})

    const getAuthaddonFn = () => {
        loading.value = true
        getAuthaddon().then(res => {
            res.data.forEach((item: any, index) => {
                if (item.type == 'app') {
                    detail.appList.push(item)
                }
            })

            userStore.routers.forEach((item, index) => {
                if (item.children && item.children.length) {
                    item.name = findFirstValidRoute(item.children)
                    appLink.value[item.meta.app] = findFirstValidRoute(item.children)
                } else {
                    appLink.value[item.meta.app] = item.name
                }
            })
            loading.value = false
        }).catch(() => {
            loading.value = false

        })
    }

    getAuthaddonFn()

    const itemPath = (data: any) => {
        storage.set({key: 'menuAppStorage', data: data.key})
        storage.set({key: 'plugMenuTypeStorage', data: ''})

        const appMenuList = userStore.appMenuList
        appMenuList.push(data.key)
        userStore.setAppMenuList(appMenuList)

        let name: any = appLink.value[data.key];

        router.push({name: name})

    }

    const goAppManage = () => {
        router.push('/app_manage')
    }

    const goRouter = () => {
        window.open('https://www.niucloud.com/product')
    }

    // 跳转至开发者
    const toAppStore = () => {
        router.push('/app_manage/app_store')
    }

    const goNiucloud = () => {
        window.open('https://www.niucloud.com')
    }

    const logout = () => {
        userStore.logout();
    }

</script>

<style lang="scss" scoped>
	.main-container {
		background: linear-gradient(180deg, rgba(253, 253, 253, 0.24) 0%, #FAFAFA 100%);
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
	.overview-empty .el-empty__image {
		width: auto !important;
	}
</style>

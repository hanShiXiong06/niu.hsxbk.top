<template>
	<div class="box-border px-[30px] pt-[60px]" v-loading="loading">
		<div class="flex justify-between items-center">
			<div class="font-600 text-[20px] text-[#222]">工具管理</div>
		</div>
		<div class="flex flex-wrap mt-[28px]">
			<template v-for="(item, index) in menus" :key="index">
				<div class="app-item w-[284px] box-border p-[15px] bg-[#fff] rounded-[8px] cursor-pointer mr-[24px] mb-[24px]" @click="toLink(item)">
					<div class="flex items-center">
						<icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto" size="40px" :title="item.meta.title" />
						<img v-else class="w-[40px] h-[40px] rounded-[8px]" src="@/app/assets/images/app_store/app_store_default.png"/>
						<div class="flex-1 font-600 text-[14px] text-[#222] ml-[12px]">{{ item.meta.title }}</div>
					</div>
				</div>
			</template>

			<el-empty v-if="!menus.length && !loading" class="mx-auto overview-empty">
				<template #image>
					<div class="w-[230px] mx-auto">
						<img src="@/app/assets/images/index/apply_empty.png" class="max-w-full" alt="">
					</div>
				</template>
				<template #description>
					<p class="flex items-center">
						<span>{{ t('descriptionLeft') }}</span>
						<el-link type="primary" @click="goRouter" class="mx-[5px]">{{ t('link') }}</el-link>
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

    const router = useRouter()
    import useUserStore from '@/stores/modules/user'

    const userStore = useUserStore()
    const loading = ref(true)
    const detail = reactive({
        appList: []
    })
	const appLink: any = ref({})
		
	const menus = computed(() => {
        let obj = []
        loading.value = true;
		userStore.routers.forEach((item, index) => {
			if (item.meta.key == 'tool' && item.children && item.children.length) {
				item.children.forEach((childItem,childIndex) => {
					if(childItem.meta.show == 1){
						obj.push(childItem);
					}
				});
			} 
        })
        loading.value = false;
		return obj
	})

	const toLink = (data)=>{
		router.push({ name: data.name })
	}

    const goRouter = () => {
        window.open('https://www.niucloud.com/product')
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

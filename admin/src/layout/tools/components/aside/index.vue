<template>
    <div class="mt-[20px] mb-[15px] mx-[10px] app-aside-wrap bg-[#fff]">
        <div class="flex flex-wrap items-center">
            <div v-for="(item, index) in menus" :key="index" :class="['border-[1px] border-solid my-[5px] border-[#E0E0E0] rounded-full py-[5px] px-[10px] cursor-pointer',{'mr-[20px]': index != menus.length-1},{'text-[#fff] bg-[#000] border-[#000]': item.name == route.name}]"  @click="toLink(item)">
                <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto mr-[4px]" size="14px" :title="item.meta.title" />
                <span class="text-[14px]">{{ item.meta.title }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { img } from '@/utils/common'
import useUserStore from '@/stores/modules/user'

    const router = useRouter()
    const route = useRoute()
    const userStore = useUserStore()
    const loading = ref(true)

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
        if(data.meta.key != 'official_market'){
    		router.push({ name: data.name })
        }else{
            window.open('https://www.niucloud.com/product/', '_blank')
        }
	}
</script>

<style lang="scss">
.app-aside-wrap{
    .el-menu-item{
        border-bottom: 1px solid #f1f1f1;
    }
}
</style>

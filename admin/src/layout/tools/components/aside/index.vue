<template>
    <div class="m-[25px] w-[200px] bg-[#fff] aside-shadow app-aside-wrap">
        <el-menu  :router="true" unique-opened="true" :default-active="String(route.name)">
            <template v-for="(item, index) in menus" :key="index">
                <el-menu-item v-if="item.meta.key != 'official_market'" @click="toLink(item)"  :index="String(item.name)">
                    <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto mr-[6px]" size="16px" :title="item.meta.title" />
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
                <div class="el-menu-item" v-else @click="toLink(item)">
                    <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto mr-[6px]" size="16px" :title="item.meta.title" />
                    <span class="text-[14px]">{{ item.meta.title }}</span>
                </div>
            </template>
        </el-menu>
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
.aside-shadow{
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
}
.app-aside-wrap{
    .el-menu-item{
        border-bottom: 1px solid #f1f1f1;
    }
}
</style>

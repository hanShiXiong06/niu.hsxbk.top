<template>
	<div class="box-border px-[64px] pt-[64px]">
		<div class="font-600 text-[22px] text-[#222] mb-[32px] pl-[14px]">工具管理</div>
		<div class="flex flex-wrap mt-[28px]">
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/addon')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">插件开发</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">点击新建插件，生成插件后系统会生成对应插</p>
				</div>
				<img src="@/app/assets/images/tools/addon_develop.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/code')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">代码生成</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">代码生成</p>
				</div>
				<img src="@/app/assets/images/tools/code.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/list')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">数据字典</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">数据字典</p>
				</div>
				<img src="@/app/assets/images/tools/sys_dict_list.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/update')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">更新缓存</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">更新缓存</p>
				</div>
				<img src="@/app/assets/images/tools/tools_Update_cache.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/detection')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">环境监测</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">环境监测</p>
				</div>
				<img src="@/app/assets/images/tools/tools_check_environment.png" class="w-[256px] h-[148px] cursor-pointer" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/schedule')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">计划任务</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">计划任务</p>
				</div>
				<img src="@/app/assets/images/tools/tools_schedule.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/admin')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">菜单管理</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">菜单管理</p>
				</div>
				<img src="@/app/assets/images/tools/auth_menu.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="toLink('/tools/authorize')">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">授权信息</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">查看授权信息及重新认证授权</p>
				</div>
				<img src="@/app/assets/images/tools/app_auth.png" class="w-[256px] h-[148px]" />
			</div>
			<div class="w-[256px] h-[260px] tools-item-shadow mb-[24px] mx-[14px] rounded-[8px] flex flex-col cursor-pointer" @click="goRouter">
				<div class="flex-1 py-[19px] px-[24px] flex flex-col">
					<span class="text-[16px] text-[#222] font-bold">官方市场</span>
					<p class="text-[13px] text-[#666] mt-[8px] multi-hidden">官方市场</p>
				</div>
				<img src="@/app/assets/images/tools/official_market.png" class="w-[256px] h-[148px]" />
			</div>
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

	const toLink = (link)=>{
		router.push(link)
	}
    const goRouter = () => {
        window.open('https://www.niucloud.com/app')
    }
</script>

<style lang="scss" scoped></style>
<style>
	.tools-item-shadow{
		box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
	}
	/* 多行超出隐藏 */
	.multi-hidden {
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>

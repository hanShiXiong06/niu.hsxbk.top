<template>
	<view class="mt-[80rpx] px-[60rpx]">
		<view class="font-bold text-xl mb-[80rpx]">{{t('developTitle')}}</view>
		<view class="mb-[40rpx] flex flex-col">  
			<text class="mb-[10rpx]">{{ t('baseUrl') }}</text>
			<text class="text-sm">{{formData.baseUrl}}</text>
		</view>
		<view class="mb-[40rpx] flex flex-col">
			<text class="mb-[10rpx]">{{ t('imgUrl') }}</text>
			<text class="text-sm">{{formData.imgUrl}}</text>
		</view>
		<u-button type="primary" @click="save" class="mt-[80rpx]">
			{{ t('confirm') }}
		</u-button>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive, computed } from 'vue'
	import { img, redirect } from '@/utils/common'
	import { t } from '@/locale'
	import manifestJson from '@/manifest.json'
	
	const formData = reactive({
		baseUrl: import.meta.env.VITE_APP_BASE_URL || `${location.origin}/api/`,
		imgUrl: import.meta.env.VITE_IMG_DOMAIN
	})

	const save = () => {
		let url = uni.getStorageSync('develop_before_path') || '/app/pages/index/index';
		if (url == '/app/pages/index/develop') url = '/app/pages/index/index';
		url = url.replace('/','')
		
		uni.removeStorageSync('develop_before_path');
		
		// 跳转到之前的页面
		location.href = `${location.origin}${manifestJson.h5.router.base}${url}`
	}
</script>

<style lang="scss" scoped></style>
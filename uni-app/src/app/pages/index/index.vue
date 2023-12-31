<template>
	<view>
		<u-loading-page :loading="loading" loadingText="" bg-color="#f7f7f7"></u-loading-page>

		<view v-show="!loading">

			<!-- 自定义模板渲染 -->
			<view class="diy-template-wrap bg-index" v-if="data.pageMode != 'fixed'"
				:style="{ backgroundColor: data.global.pageBgColor,minHeight: 'calc(100vh - 50px)',backgroundImage : data.global.bgUrl ? 'url(' +  img(data.global.bgUrl) + ')' : '' }">

				<diy-group :data="data" :pullDownRefreshCount="pullDownRefreshCount"></diy-group>

			</view>

			<!-- 固定模板渲染 -->
			<view class="fixed-template-wrap" v-if="data.pageMode == 'fixed'">

				<fixed-group :data="data" :pullDownRefreshCount="pullDownRefreshCount"></fixed-group>

			</view>

		</view>

		<!-- #ifdef MP-WEIXIN -->
		<!-- 小程序隐私协议 -->
		<wx-privacy-popup ref="wxPrivacyPopup"></wx-privacy-popup>
		<!-- #endif -->
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive, computed } from 'vue';
	import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';
	import { getDiyInfo } from '@/app/api/diy';
	import useDiyStore from '@/app/stores/diy';
	import { useShare } from '@/hooks/useShare'
	import { img, redirect } from '@/utils/common';

	const { setShare, onShareAppMessage, onShareTimeline } = useShare()
	const loading = ref(true);
	const diyStore = useDiyStore();
	const pullDownRefreshCount = ref(0)

	const id = ref(0)
	const name = ref('DIY_INDEX')
	const template = ref('')

	// 自定义页面 数据
	const diyData = reactive({
		pageMode: 'diy',
		title: '',
		global: {},
		value: []
	})

	const data = computed(() => {
		if (diyStore.mode == 'decorate') {
			return diyStore;
		} else {
			return diyData;
		}
	})

	setShare();
	onShareAppMessage()
	onShareTimeline()

	// 监听页面加载
	onLoad(option => {
		// #ifdef H5
		// 装修模式
		diyStore.mode = option.mode || '';
		if (diyStore.mode == 'decorate') {
			loading.value = false;
		}
		// #endif
		id.value = option.id || '';
		template.value = option.template || '';
	});

	// 监听页面显示
	onShow(() => {
		// 装修模式
		if (diyStore.mode == 'decorate') {
			diyStore.init();
		} else {
			getDiyInfo({
				id: id.value,
				name: name.value,
				template: template.value
			}).then((res : any) => {
				let data = res.data;
				if (data.value) {
					diyData.pageMode = data.mode;
					diyData.title = data.title;

					let sources = JSON.parse(data.value);
					diyData.global = sources.global;
					diyData.value = sources.value;
					diyData.value.forEach((item, index) => {
						item.pageStyle = '';
						if (item.pageBgColor) item.pageStyle += 'background-color:' + item.pageBgColor + ';';
						if (item.margin) {
							item.pageStyle += 'padding-top:' + item.margin.top * 2 + 'rpx' + ';';
							item.pageStyle += 'padding-bottom:' + item.margin.bottom * 2 + 'rpx' + ';';
							item.pageStyle += 'padding-right:' + item.margin.both * 2 + 'rpx' + ';';
							item.pageStyle += 'padding-left:' + item.margin.both * 2 + 'rpx' + ';';
						}
					});
					uni.setNavigationBarTitle({
						title: diyData.title
					});
					loading.value = false;

				} else if (data.mode == 'other') {
					// 跳转到其他页面
					redirect({ url: data.page })
				}

			});
		}

	});

	// 监听下拉刷新事件
	onPullDownRefresh(() => {
		pullDownRefreshCount.value++;
		uni.stopPullDownRefresh();
	})
</script>
<style lang="scss" scoped>
	@import '@/styles/diy.scss';
</style>
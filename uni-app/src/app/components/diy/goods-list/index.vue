<template>
	<view :style="warpCss">
		<div class="flex flex-wrap justify-between">
			<view class="w-[332rpx] bg-[#fff] box-border rounded-[10rpx] mb-[24rpx] overflow-hidden">
				<u--image width="332rpx" height="332rpx" src="" model="aspectFill">
					<template #error>
						<u-icon name="photo" color="#999" size="50"></u-icon>
					</template>
				</u--image>
				<view class="px-[16rpx] mt-[18rpx] h-[80rpx] leading-[40rpx] text-[28rpx] font-bold multi-hidden">
					山茶花保湿美白淡斑补水乳护肤化妆品补水更高效
				</view>
				<view class="px-[16rpx] pb-[20rpx] flex justify-between items-end mt-[12rpx]" >
					<text class="text-[28rpx] font-bold text-[#FF3223]">￥100.00</text>
					<text class="text-[22rpx] text-[#888] leading-[31rpx]">已售100件</text>
				</view>
			</view>
		</div>
	</view>
</template>

<script setup lang="ts">
	// 应用列表
	import { ref, computed, watch, onMounted } from 'vue';
	import { redirect, img } from '@/utils/common';
	import useDiyStore from '@/app/stores/diy';
	import { getWapIndexList } from '@/app/api/system';

	const props = defineProps(['component', 'index', 'pullDownRefresh']);
	const diyStore = useDiyStore();

	const diyComponent = computed(() => {
		if (diyStore.mode == 'decorate') {
			return diyStore.value[props.index];
		} else {
			return props.component;
		}
	})

	const warpCss = computed(() => {
		var style = '';
		if (diyComponent.value.componentBgColor) style += 'background-color:' + diyComponent.value.componentBgColor + ';';
		if (diyComponent.value.topRounded) style += 'border-top-left-radius:' + diyComponent.value.topRounded * 2 + 'rpx;';
		if (diyComponent.value.topRounded) style += 'border-top-right-radius:' + diyComponent.value.topRounded * 2 + 'rpx;';
		if (diyComponent.value.bottomRounded) style += 'border-bottom-left-radius:' + diyComponent.value.bottomRounded * 2 + 'rpx;';
		if (diyComponent.value.bottomRounded) style += 'border-bottom-right-radius:' + diyComponent.value.bottomRounded * 2 + 'rpx;';
		return style;
	})

	const list = ref([])

	watch(
		() => props.pullDownRefresh,
		(newValue, oldValue) => {
			// 处理下拉刷新业务
		}
	)

	onMounted(() => {
		refresh();
		// 装修模式下刷新
		if (diyStore.mode == 'decorate') {
			watch(
				() => diyComponent.value,
				(newValue, oldValue) => {
					if (newValue && newValue.componentName == 'AddonList') {
						refresh();
					}
				}
			)
		}
	});

	const refresh = () => {
		// 装修模式下设置默认图
		if (diyStore.mode == 'decorate') {
			diyComponent.value.list.forEach((item : any, index) => {
				if (item.icon == '') {
					item.icon = 'static/resource/images/diy/figure.png';
				}
				if (item.title == '') {
					item.title = '应用名称';
				}
			});
		}

		if (diyComponent.value.list.length == 0) {
			getWapIndexList().then((res) => {
				list.value = res.data;
			})
		} else {
			list.value = diyComponent.value.list;
		}
	}

	const toLink = (url : string) => {
		redirect({ url })
	}
</script>

<style lang="scss" scoped>
	/* 单行超出隐藏 */
	.using-hidden {
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		white-space: break-spaces;
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
<template>
	<view :style="warpCss">
		固定模板示例，我也可以装修
		我定义的数据源：{{ diyComponent.componentName }}
	</view>
</template>

<script setup lang="ts">
	import { computed, watch } from 'vue';
	import useDiyStore from '@/stores/diy';

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
		style += 'height:' + diyComponent.value.height * 2 + 'rpx;';
		if (diyComponent.value.componentBgColor) style += 'background-color:' + diyComponent.value.componentBgColor + ';';
		return style;
	})

	watch(
		() => props.pullDownRefresh,
		(newValue, oldValue) => {
			// 处理下拉刷新业务
		}
	)
</script>

<style></style>
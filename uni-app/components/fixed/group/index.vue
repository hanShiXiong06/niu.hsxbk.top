<template>
	<view class="fixed-group">
	</view>
</template>
<script lang="ts" setup>
	import { computed } from 'vue';
	const props = defineProps(['data']);

	const data = computed(() => {
		return props.data.value;
	})
</script>
<style lang="scss" scoped>
	@import './index.scss';
</style>
<template>
	<view class="fixed-group">
		<template v-if="props.component.componentName == 'DemoIndex'">
			<fixed-demo-index :component="props.component" :index="props.index"
				:pullDownRefresh="props.pullDownRefresh"></fixed-demo-index>
		</template>
	</view>
</template>
<script lang="ts" setup>
	import { computed, watch } from 'vue';
	const props = defineProps(['component', 'index', 'pullDownRefresh']);
</script>
<style lang="scss" scoped>
	@import './index.scss';
</style>
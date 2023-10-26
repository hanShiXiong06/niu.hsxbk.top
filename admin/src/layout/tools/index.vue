<template>
	<el-container class="w-screen h-screen min-w-[1200px] flex flex-col">
		<el-header class="h-[60px]">
			<layout-header></layout-header>
		</el-header>
		<el-container class="flex flex-col px-[64px]">
			<layout-aside></layout-aside>

			<el-main class="p-0 ml-0">
				<el-scrollbar class="main-height">
					<router-view></router-view>
				</el-scrollbar>
			</el-main>

		</el-container>
		
	</el-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import layoutHeader from './components/header/index.vue'
import layoutAside from './components/aside/index.vue'
</script>

<style lang="scss" scoped>
.overview-top {
	background-image: url('@/app/assets/images/index/overview.png');
	background-repeat: no-repeat;
	background-size: cover;
}
.main-height{
	height: calc(100vh - 175px);
}
</style>

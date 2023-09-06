<template>
	<el-config-provider :locale="locale">
		<NuxtLayout>
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>
	</el-config-provider>
</template>

<script lang="ts" setup>
import useConfigStore from '@/stores/config'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import Language from '~~/utils/language'
import useSystemStore from '@/stores/system'
import useMemberStore from '@/stores/member'
// 引入全局样式
import '@/assets/styles/index.scss'

if (process.client) {
	const match = location.href.match(/\/web\/(\d*)\//)
	const cookie = useCookie('siteId')
	match ? cookie.value = match[1] : cookie.value = null
}

// 初始化设置语言
const systemStore = useSystemStore()
const locale = computed(() => (systemStore.lang === 'zh-cn' ? zhCn : en))

// 初始化查询一些配置
const configStore = useConfigStore()
configStore.getLoginConfig()

// 如果已登录
getToken() && useMemberStore().setToken(getToken())

const route = useRoute()
watch(route, (nval, oval) => {
	// 加载语言包
	const fileinfo = nval.matched[0].components.default.__file.split('/pages/')
	const file = fileinfo[1].replace('.vue', '')
	const app = fileinfo[0].substring(fileinfo[0].lastIndexOf('/') + 1)

	const language = new Language(useNuxtApp().$getI18n())
	language.loadLocaleMessages(app, file, useSystemStore().lang)

	// 设置页面title
	let path = route.path == '/' ? '/index' : route.path
	path = !path.lastIndexOf('/') ? `${path}/index` : path
	let key = path.replace('/', '').replaceAll('/', '.')

	setTimeout(() => {
		useHead({
			title: t(`pages.${key}`)
		})
	}, !oval ? 500 : 0)
}, { immediate: true })

// 设置title模板
useHead({
	titleTemplate: (title) => {
		const siteTitle = systemStore.site.front_end_name || systemStore.site.site_name
		return title ? `${title} - ${siteTitle}` : siteTitle
	}
})
</script>
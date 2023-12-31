<script setup lang="ts">
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
	import manifest from '@/manifest.json'
	import { redirectInterceptor, launchInterceptor } from '@/utils/interceptor'
	import { getToken, isWeixinBrowser } from '@/utils/common'
	import useMemberStore from '@/stores/member'
	import useConfigStore from '@/stores/config'
	import { useLogin } from '@/hooks/useLogin'
	import { language } from './locale'

	// #ifdef H5
	if (import.meta.env.VITE_APP_DEBUG) {
		new window.VConsole()
	}
	// #endif

	onLaunch(async (data) => {
		// 添加初始化拦截器
		launchInterceptor()
		// 添加页面跳转拦截器
		redirectInterceptor()

		// #ifdef H5
		uni.getSystemInfoSync().platform == 'ios' && (uni.setStorageSync('initUrl', location.href))

		// 传输给后台数据
		window.parent.postMessage(JSON.stringify({
			type: 'appOnLaunch',
			message: '初始化加载完成'
		}), '*');

		// 监听父页面发来的消息
		window.addEventListener('message', event => {
			try {
				let data = JSON.parse(event.data);
				if (data.type == 'appOnReady') {
					window.parent.postMessage(JSON.stringify({
						type: 'appOnReady',
						message: '加载完成'
					}), '*');
				}
			} catch (e) {
				console.log('uniapp app接受数据错误', e)
			}
		}, false);

		// #endif

		const configStore = useConfigStore()
		configStore.getTabbarConfig()
		await configStore.getLoginConfig()

		// 隐藏tabbar
		uni.hideTabBar()

		// 判断是否已登录
		if (getToken()) {
			const memberStore = useMemberStore()
			await memberStore.setToken(getToken())
		}

		if (!getToken()) {
			const login = useLogin()
			// 三方平台自动登录
			// #ifdef MP
			login.getAuthCode()
			// #endif
			// #ifdef H5
			if (isWeixinBrowser()) {
				data.query.code ? login.authLogin(data.query.code) : login.getAuthCode('snsapi_userinfo')
			}
			// #endif
		}

		// 监听浏览器返回
		// #ifdef H5
		window.addEventListener("popstate", function (e) {
			const path = '/' + location.pathname.replace(manifest.h5.router.base, '')
			language.loadLocaleMessages(path, uni.getLocale())
		}, false);
		// #endif
	})

	onShow(() => {

	})

	onHide(() => {
	})
</script>

<style>
	uni-page-head {
		display: none !important;
	}
</style>
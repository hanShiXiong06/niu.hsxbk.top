import { language } from '@/locale'
import { checkNeedLogin } from '@/utils/auth'
import { redirect, urlDeconstruction, getToken } from '@/utils/common'
import { memberLog } from '@/app/api/auth'

/**
 * 页面跳转拦截器
 */
export const redirectInterceptor = () => {
	const routerApi : string[] = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']

	routerApi.forEach((name : string) => {
		uni.addInterceptor(name, {
			invoke(args) {
				const route = urlDeconstruction(args.url)
				// 加载语言包
				language.loadLocaleMessages(route.path, uni.getLocale())

				// 校验是否需要登录
				checkNeedLogin(route)
				
				let preRoute = getCurrentPages()[0] ? getCurrentPages()[0].route : '';
				// 添加会员访问日志
				if (getToken()) memberLog({ route: route.path, params: JSON.stringify(route.query), pre_route: preRoute })
			}
		})
	})
}

/**
 * 应用初始化拦截器
 */
export const launchInterceptor = () => {
	const launch = uni.getLaunchOptionsSync()
	launch.path = `/${launch.path}`
	// 加载语言包
	language.loadLocaleMessages(launch.path, uni.getLocale())

	// 校验是否需要登录
	checkNeedLogin(launch)

	// 存储分享会员id
	if (launch.query && launch.query.mid) {
		uni.setStorageSync('pid', launch.query.mid)
	}
	
	// 添加会员访问日志
	if (getToken()) memberLog({ route: launch.path, params: JSON.stringify(launch.query || {}), pre_route: '' })
}
import { createRouter, createWebHistory, RouteLocationRaw, RouteLocationNormalizedLoaded } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { STATIC_ROUTES, NO_LOGIN_ROUTES, ROOT_ROUTER, ADMIN_ROUTE, DECORATE_ROUTER,PREVIEW_ROUTER,APP_MANAGE_ROUTER,TOOL_ROUTER, findFirstValidRoute } from './routers'
import { language } from '@/lang'
import useSystemStore from '@/stores/modules/system'
import useUserStore from '@/stores/modules/user'
import { setWindowTitle, getAppType, urlToRouteRaw } from '@/utils/common'
import storage from '@/utils/storage'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [ADMIN_ROUTE, ...STATIC_ROUTES]
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    NProgress.configure({ showSpinner: false })
    NProgress.start()

    to.redirectedFrom && (to.query = to.redirectedFrom.query)

    const userStore = useUserStore()
    const siteInfo = storage.get('siteInfo') || false
    let title = (to.meta.title ? (to.meta.title + ' - ') : '') + (siteInfo.site_name ? siteInfo.site_name : '')

    // 设置网站标题
    setWindowTitle(title)

    // 加载语言包
    await language.loadLocaleMessages(to.meta.app || '', (to.meta.view || to.path), useSystemStore().lang);

    const loginPath = '/login'

    // 判断是否需登录
    if (NO_LOGIN_ROUTES.includes(to.path)) {
        next()
    } else if (userStore.token) {
        // 如果已加载路由
        if (userStore.routers.length) {
            if (to.path === loginPath) {
                next('/')
            } else {
                next()
            }
        } else {
            try {
                await userStore.getAuthMenus()

                // 设置首页路由 
                let currApp = storage.get('menuAppStorage')
                const firstRoute = findFirstValidRoute(userStore.routers)
                
                if (!currApp) {
                    await userStore.getAppList()
                    currApp = userStore.globalAppKey
                }
                
                if (currApp) {
                    ROOT_ROUTER.redirect = { name: userStore.addonIndexRoute[currApp] ?? firstRoute }
                } else {
                    ROOT_ROUTER.redirect = { name: firstRoute }
                }
                // console.log(currApp, ROOT_ROUTER.redirect)
                router.addRoute(ROOT_ROUTER)

                // 添加动态路由
                userStore.routers.forEach(route => {
                    // 页面装修
                    if (route.path == DECORATE_ROUTER.path) {
                        DECORATE_ROUTER.children = route.children
                        router.addRoute(DECORATE_ROUTER)
                        return
                    }

                    // 手机页面预览
                    if (route.path == PREVIEW_ROUTER.path) {
                        PREVIEW_ROUTER.children = route.children
                        router.addRoute(PREVIEW_ROUTER)
                        return
                    }

                    // 应用管理
                    if (route.path == APP_MANAGE_ROUTER.path) {
                        APP_MANAGE_ROUTER.children = route.children
                        router.addRoute(APP_MANAGE_ROUTER)
                        return
                    }
                    if (route.path == TOOL_ROUTER.path) {
                        TOOL_ROUTER.children = route.children
                        router.addRoute(TOOL_ROUTER)
                        return
                    }
                    if (!route.children) {
                        router.addRoute(ADMIN_ROUTE.children[0].name, route)
                        return
                    }

                    // 动态添加可访问路由表
                    router.addRoute(ADMIN_ROUTE.name, route)
                })

                next({ path: to.path, query: to.query, replace: true })
            } catch (err) {
                userStore.logout()
                next({ path: loginPath, query: { redirect: to.fullPath } })
            }
        }
    } else {
        if (to.path === loginPath) {
            next()
        } else {
            next({ path: loginPath, query: { redirect: to.fullPath } })
        }
    }
})

// 全局后置钩子
router.afterEach(() => {
    NProgress.done()
})

export default router

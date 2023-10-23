import {RouteRecordRaw, RouterView} from 'vue-router'
import Default from '@/layout/index.vue'
import Decorate from '@/layout/decorate/index.vue'
import Preview from '@/layout/preview/index.vue'
import AppManage from '@/layout/app_manage/index.vue'
import Tools from '@/layout/tools/index.vue'
import {Key} from '@element-plus/icons-vue'

// 静态路由
export const STATIC_ROUTES: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/app/views/error/404.vue')
    },
    {
        path: '/login',
        component: () => import('@/app/views/login/index.vue')
    },
    {
        path: '/user',
        component: AppManage,
        children: [
            {
                path: 'center',
                meta: {
                    type: 1,
                    title: '个人中心'
                },
                component: () => import('@/app/views/index/personal.vue')
            },
            {
                path: 'edit_center',
                meta: {
                    type: 1,
                    title: '编辑个人中心'
                },
                component: () => import('@/app/views/index/edit_personal.vue')
            }
        ]
    }
]

// 免登录路由
export const NO_LOGIN_ROUTES: string[] = [
    '/404'
]

// 根路由
export const ROOT_ROUTER: RouteRecordRaw = {
    path: '/',
    component: Default,
    name: Symbol()
}

// 平台端根路由
export const ADMIN_ROUTE: RouteRecordRaw = {
    path: '/admin',
    name: Symbol('admin'),
    children: [
        {
            path: '',
            name: Symbol('adminRoot'),
            component: Default
        }
    ]
}

// 装修路由
export const DECORATE_ROUTER: RouteRecordRaw = {
    path: '/decorate',
    component: Decorate,
    name: Symbol('decorate'),
    children: []
}

// 页面预览路由
export const PREVIEW_ROUTER: RouteRecordRaw = {
    path: '/preview',
    component: Preview,
    name: Symbol('preview'),
    children: []
}

// 切换应用路由
export const APP_MANAGE_ROUTER: RouteRecordRaw = {
    path: '/app_manage',
    component: AppManage,
    name: Symbol('app_manage'),
    children: []
}

// 切换应用路由
export const TOOL_ROUTER: RouteRecordRaw = {
    path: '/tools',
    component: Tools,
    name: Symbol('tools'),
    children: []
}
const modules = import.meta.glob('@/app/views/**/*.vue')
const addonModules = import.meta.glob('@/**/views/**/*.vue')

interface Route {
    menu_name: string,
    menu_short_name: string,
    router_path: string,
    view_path: string
    menu_type: number,
    menu_key: string,
    icon?: {
        name: string,
        type: string
    },
    children?: [],
    is_show: boolean,
    addon: string,
    menu_attr: string
}

/**
 * 创建路由
 * @param route
 * @param parentRoute
 */
const createRoute = function (route: Route, parentRoute: RouteRecordRaw | null = null): RouteRecordRaw {
    // parentRoute ? Symbol(`${parentRoute.path}/${route.router_path}`) : Symbol(`/${route.router_path}`)
    const record: RouteRecordRaw = {
        path: parentRoute ? route.router_path : `/${route.router_path}`,
        name: route.menu_key,
        meta: {
            title: route.menu_name,
            shortTitle: route.menu_short_name,
            icon: route.icon,
            type: route.menu_type,
            show: route.is_show,
            app: route.addon,
            view: route.view_path,
            key: route.menu_key,
            attr: route.menu_attr
        }
    }
    if (route.menu_type == 0) {
        record.component = parentRoute ? RouterView : () => Promise.resolve(Default)
        if (!route.children) record.component = RouterView
    } else {
        record.component = route.addon ? addonModules[`/src/${route.addon}/views/${route.view_path}.vue`] : modules[`/src/app/views/${route.view_path}.vue`]
    }
    return record
}

/**
 * 格式化路由
 * @param routes
 * @returns
 */
export function formatRouters(routes: Route[], parentRoute: RouteRecordRaw | null = null) {
    return routes.map((route) => {
        const routeRecord = createRoute(route, parentRoute)
        if (route.children != null && route.children && route.children.length) {
            routeRecord.children = formatRouters(route.children, routeRecord)
        }
        return routeRecord
    })
}

/**
 * 获取首条有效路由
 * @param routes
 * @returns
 */
export function findFirstValidRoute(routes: RouteRecordRaw[]): string | undefined {
    for (const route of routes) {
        if (route.meta?.type == 1) {
            return route.name as string
        }
        if (route.children) {
            const name = findFirstValidRoute(route.children)
            if (name) {
                return name
            }
        }
    }
}

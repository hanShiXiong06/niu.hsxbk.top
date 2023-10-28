import { defineStore } from 'pinia'
import { getToken, setToken, removeToken, getAppType } from '@/utils/common'
import { login, getAuthMenus } from '@/app/api/auth'
import storage from '@/utils/storage'
import router from '@/router'
import { getApply } from '@/app/api/apply'
import { formatRouters, findFirstValidRoute } from '@/router/routers'

interface User {
    token: string,
    userInfo: object,
    routers: any[],
    addonIndexRoute: Record<string, symbol>,
    rules: any[],
    appMenuList: any[],
    globalAppKey: string
}

const useUserStore = defineStore('user', {
    state: (): User => {
        return {
            token: getToken() || '',
            userInfo: storage.get('userinfo') || {},
            routers: [],
            addonIndexRoute: {},
            rules: [],
            globalAppKey: '',
            appMenuList: storage.get('appMenuList' + (storage.get('userinfo') ? storage.get('userinfo').username : '')) || []
        }
    },
    actions: {
        login(form: object) {
            return new Promise((resolve, reject) => {
                login(form)
                    .then((res) => {
                        this.token = res.data.token
                        this.userInfo = res.data.userinfo
                        setToken(res.data.token)
                        storage.set({ key: 'userinfo', data: res.data.userinfo })
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        clearRouters() {
            this.routers = []
        },
        logout() {
            this.token = ''
            this.userInfo = {}
            removeToken()
            storage.remove(['userinfo'])
            this.routers = []
            router.push('/login')
        },
        getAuthMenus() {
            return new Promise((resolve, reject) => {
                getAuthMenus()
                    .then((res) => {
                        this.routers = formatRouters(res.data)
                        // 获取插件的首个菜单
                        this.routers.forEach((item, index) => {
                            if (item.meta.app !== '') {
                                if (item.children && item.children.length) {
                                    this.addonIndexRoute[item.meta.app] = findFirstValidRoute(item.children)
                                } else {
                                    this.addonIndexRoute[item.meta.app] = item.name
                                }
                            }
                        })
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        setAppMenuList(data: any) {
            this.appMenuList = data
            storage.set({ key: 'appMenuList' + (this.userInfo.username ? this.userInfo.username : ''), data })
        },
        getAppList() {
            let appList:any = [];
            let appTypeList:any = [];
            let appKey = storage.get('menuAppStorage');
            return new Promise((resolve, reject) => {
                getApply()
                    .then((res) => {
                        appList = appList.concat(res.data);
                        appList.forEach((item, index) => {
                            if (item.type == 'app') { appTypeList.push(item.key) }
                        });
                        // 用于插件的卸载或安装
                        if (!appList.length) {
                            this.globalAppKey = '';
                        }
                        if (appList.length && !appKey) {
                            this.globalAppKey = appTypeList[0];
                        }
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
})

export default useUserStore

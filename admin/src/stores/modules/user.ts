import { defineStore } from 'pinia'
import { getToken, setToken, removeToken, getAppType } from '@/utils/common'
import { login, getAuthMenus } from '@/app/api/auth'
import storage from '@/utils/storage'
import router from '@/router'
import { formatRouters } from '@/router/routers'

interface User {
    token: string,
    userInfo: object,
    routers: any[],
    rules: any[],
    appMenuList: any[]
}

const useSystemStore = defineStore('user', {
    state: (): User => {
        return {
            token: getToken() || '',
            userInfo: storage.get('userinfo') || {},
            routers: [],
            rules: [],
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
        }
    }
})

export default useSystemStore

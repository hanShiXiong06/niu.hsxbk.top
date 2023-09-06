import request from '@/utils/request'

/**
 * 登录
 * @param params
 */
export function login(params: Record<string, any>) {
    return request.get('login', { params })
}

/**
 * 获取登录用户权限
 * @returns
 */
export function getAuthMenus() {
    return request.get('auth/authmenu')
}

/**
 * 获取登录用户权限
 * @returns
 */
export function getSiteInfo() {
    return request.get('auth/site')
}

/**
 * 获取登录配置信息
 * @returns
 */
export function getLoginConfig() {
    return request.get('login/config')
}

/**
 * 设置加星应用
 * @returns
 */
export function setStarAddon(params: Record<string, any>) {
    return request.post('auth/appstar', params)
}
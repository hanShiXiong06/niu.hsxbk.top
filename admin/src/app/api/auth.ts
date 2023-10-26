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
 * 获取默认页面应用列表
 */
export function getAuthaddon() {
    return request.get(`auth/authaddon`)
}
/**
 * 获取当前版本信息
 */
export function getVersions() {
    return request.get(`sys/info`)
}

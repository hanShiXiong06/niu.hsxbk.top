import request from '@/utils/request'

/**
 * 本地下载的插件列表
 * @returns
 */
export function getAddonLocal(params: Record<string, any>) {
    return request.get('addon/local', params)
}

/**
 * 插件详情
 * @returns
 */
export function getAddonDetial(id: number) {
    return request.get(`addon/${id}`)
}

/**
 * 插件信息
 * @returns
 */
export function getAddonByKey(key: string) {
    return request.get(`addon/addon_by_key/${key}`)
}

/**
 * 安装插件
 * @param params
 * @returns
 */
export function installAddon(params: Record<string, any>) {
    return request.post(`addon/install/${params.addon}`, params)
}

/**
 * 安装插件
 * @param params
 * @returns
 */
export function cloudInstallAddon(params: Record<string, any>) {
    return request.post(`addon/cloudinstall/${params.addon}`, params, { timeout: 60 * 1000 })
}

/**
 * 卸载插件
 * @param params
 * @returns
 */
export function uninstallAddon(params: Record<string, any>) {
    return request.post(`addon/uninstall/${params.addon}`, params, { showSuccessMessage: true })
}

/**
 * 插件安装前检测
 * @param addon
 * @returns
 */
export function preInstallCheck(addon: string) {
    return request.get(`addon/install/check/${addon}`, { timeout: 30 * 1000 })
}

/**
 * 获取正在安装的插件
 * @returns 
 */
export function getAddonInstalltask() {
    return request.get('addon/installtask')
}

/**
 * 获取插件云安装日志
 * @param addon 
 * @returns 
 */
export function getAddonCloudInstallLog(addon: string) {
    return request.get(`addon/cloudinstall/${addon}`)
}

/**
 * 插件卸载前检测
 * @param addon
 * @returns
 */
export function preUninstallCheck(addon: string) {
    return request.get(`addon/uninstall/check/${addon}`, { timeout: 30 * 1000 })
}
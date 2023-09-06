export function uniStorage() {
    const setStorageSync = uni.setStorageSync
    const setStorage = uni.setStorage
    const getStorage = uni.getStorage
    const getStorageSync = uni.getStorageSync
    const removeStorage = uni.removeStorage
    const removeStorageSync = uni.removeStorageSync

    uni.setStorage = (options: UniNamespace.SetStorageOptions) => {
        setStorage(options)
    }

    uni.setStorageSync = (key: string, data: any) => {
        setStorageSync(key, data)
    }

    uni.getStorage = (options: UniNamespace.GetStorageOptions) => {
        getStorage(options)
    }

    uni.getStorageSync = (key: string) => {
        return getStorageSync(key)
    }

    uni.removeStorage = (options: UniNamespace.RemoveStorageOptions) => {
        removeStorage(options)
    }

    uni.removeStorageSync = (key: string) => {
        return removeStorageSync(key)
    }
}
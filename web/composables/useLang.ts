import useAppStore from '~/stores/app'

export function t(message: string) {
    const i18n = useNuxtApp().$getI18n()
    const langKey = useAppStore().langKey
    const key = `${langKey}.${message}`
    return i18n.global.t(key) != key ? i18n.global.t(key) : i18n.global.t(message)
}
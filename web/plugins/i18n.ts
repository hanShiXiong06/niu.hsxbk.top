import { createI18n } from 'vue-i18n'

import zhCn from "~/lang/zh-cn/common.json";
import en from "~/lang/en/common.json"

export default defineNuxtPlugin((NuxtApp) => {
    const i18n = createI18n({
        globalInjection: true, //是否全局注入
        messages: {
            "zh-cn": zhCn,
            "en": en
        },
        silentFallbackWarn: true,
        silentTranslationWarn: true
    })
    NuxtApp.vueApp.use(i18n)

    return {
        provide: {
            getI18n: () => i18n
        }
    }
})
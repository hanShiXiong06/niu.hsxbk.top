import { nextTick } from 'vue'
import useAppStore from '~/stores/app'

class Language {
    private i18n: any;
    private loadLocale: Array<string> = []; //已加载的语言

    constructor(i18n: any) {
        this.i18n = i18n
    }

    /**
     * 
     * @param locale 设置语言
     */
    public setI18nLanguage(locale: string) {
        if (this.i18n.mode === 'legacy') {
            this.i18n.global.locale = locale
        } else {
            this.i18n.global.locale = locale
        }
        let html = document.querySelector('html')
        html && html.setAttribute('lang', locale)
    }

    /**
     * 加载语言包
     * @param path 
     * @param locale 
     * @returns 
     */
    public async loadLocaleMessages(app: string, path: string, locale: string) {
        try {
            const file = path.replaceAll('/', '.')

            if (this.loadLocale.includes(`${app}/${locale}/${file}`)) {
                return nextTick()
            }

            // 加载pages语言包
            if (!this.loadLocale.includes(`${app}/${locale}/pages`)) {
                // 引入语言包文件
                const pagesMessages = await import(`@/${app}/lang/${locale}/pages.json`)
                this.i18n.global.mergeLocaleMessage(locale, pagesMessages.default)
                this.loadLocale.push(`${app}/${locale}/pages`)
            }

            this.loadLocale.push(`${app}/${locale}/${file}`)

            // 引入语言包文件
            const messages = await import(`@/${app}/lang/${locale}/${file}.json`)

            let data: Record<string, string> = {}
            Object.keys(messages.default).forEach(key => {
                data[`${app}.${file}.${key}`] = messages.default[key]
            })

            useAppStore().$patch(state => {
                state.langKey = `${app}.${file}`
            })

            this.i18n.global.mergeLocaleMessage(locale, data)
            this.setI18nLanguage(locale)
            return nextTick()
        } catch (e) {
            console.log(e)
            this.setI18nLanguage(locale)
            return nextTick()
        }
    }
}

export default Language
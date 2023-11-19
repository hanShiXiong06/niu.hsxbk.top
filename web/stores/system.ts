import { defineStore } from 'pinia'
import storage from '@/utils/storage'

interface System {
    lang: string,
    site: Record<string, any>
}

const useSystemStore = defineStore('system', {
    state: (): System => {
        return {
            lang: storage.get('lang') ?? 'zh-cn',
            site: {
                front_end_name: '',
                site_name: ''
            }
        }
    },
    actions: {
        
    }
})

export default useSystemStore
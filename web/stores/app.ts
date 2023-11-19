import { defineStore } from 'pinia'

interface App {
    langKey: string
}

const useAppStore = defineStore('app', {
    state: (): App => {
        return {
            langKey: ''
        }
    },
    actions: {

    }
})

export default useAppStore
import { defineStore } from 'pinia'
import { redirect } from '@/utils/common'

interface System {
	site : AnyObject | null
}

const useSystemStore = defineStore('system', {
	state: () : System => {
		return {
			site: null
		}
	}
})

export default useSystemStore
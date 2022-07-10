import { getSystem } from '#/apis/system'
import { defineStore } from 'pinia'

export default defineStore('system', {
  state: () => {
    return {
      data: {} as SystemModel,
    }
  },
  actions: {
    async load() {
      this.data = await getSystem()
    },
  },
})

import { currentSite } from '#/apis/core'
import { defineStore } from 'pinia'

export default defineStore('siteStore', {
  state: () => {
    return {
      site: {} as SiteModel,
    }
  },
  actions: {
    async getCurrentSite() {
      this.site = await currentSite()
    },
  },
})

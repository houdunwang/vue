import { access } from '@@/utils/helper'
import { siteFind } from '@@/apis/site'

export default {
  async mounted(el: HTMLElement, binding: any) {
    let site: SiteModel
    if (binding.value instanceof Object) {
      site = binding.value
    } else if (typeof binding.value === 'number') {
      site = await siteFind(binding.value)
    } else {
      const { site: siteModel, currentSite } = useSite()
      await currentSite()
      site = siteModel.value!
    }

    const state = access(binding.arg as string, site)

    if (state === false) el.style.display = 'none'
  },
}

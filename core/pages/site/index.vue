<script setup lang="ts">
import { isSuperAdmin } from '#/utils/helper'

const { sites, del, load } = useSite()
await load()
</script>

<template>
  <ElButton
    type="primary"
    @click="$router.push({ name: 'site.add' })"
    class="mb-3 flex justify-between"
    v-if="isSuperAdmin()"
    >添加站点</ElButton
  >
  <div v-if="sites">
    <CoreSiteItem v-for="site in sites.data" class="mb-3" :site="site" @del="del(site.id)" />
    <CoreHdPagination :total="sites?.meta.total" :size="sites?.meta.per_page" @change="load" />
  </div>
  <div class="no-site" v-else>
    <icon-info theme="outline" class="mr-2" />
    暂无站点
  </div>
</template>

<style lang="scss" scoped>
.no-site {
  @apply flex justify-center items-center py-3 text-gray-600 text-sm font-bold border-gray-200 border rounded-md bg-white;
}
</style>

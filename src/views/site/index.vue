<script setup lang="ts">
import { getSiteList } from '@/apis/site'
import useRequest from '@/composables/useRequest'
import { isSuperAdmin } from '@/utils/helper'
const { collection, load, remove } = useRequest<SiteModel>()

const del = async (id: number) => {
  await remove(id)
  await load(getSiteList)
}
await load(getSiteList)
</script>

<template>
  <div class="">
    <div class="mb-3 flex justify-between" v-if="isSuperAdmin()">
      <ElButton type="primary" @click="$router.push({ name: 'site.add' })">添加站点</ElButton>
    </div>
    <div class="" v-if="collection?.data.length">
      <SiteItem v-for="site in collection?.data" class="mb-3" :site="site" @del="del" />
    </div>
    <div
      class="flex justify-center items-center py-3 text-gray-600 text-sm font-bold border-gray-200 border rounded-md bg-white"
      v-else>
      <icon-info theme="outline" class="mr-2" />
      暂无站点
    </div>
  </div>
</template>

<style lang="scss"></style>

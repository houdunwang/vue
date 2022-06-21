<script setup lang="ts">
import { siteFind, updateSite } from '@/apis/site'
import { systemForm } from '@/config/form'
import router from '@/router'
import { request } from '@/utils/helper'
const route = useRoute()
const model = $ref(await siteFind(route.params?.id))

const onSubmit = request(async () => {
  await updateSite(model)
  router.push({ name: 'site.index' })
})
const tabModel = ref('aliyun')
</script>

<template>
  <HdTab
    :tabs="[
      { label: '站点列表', route: { name: 'admin' } },
      { label: `站点【${model.title}】配置`, route: { name: 'site.config' } },
    ]" />
  <el-tabs v-model="tabModel" tab-position="top" class="tabs">
    <el-tab-pane label="阿里云" name="aliyun">
      <FormFieldList :model="model.config.aliyun" :fields="systemForm.aliyun" @submit="onSubmit" />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.tabs :deep(.el-tabs__nav-scroll) {
  @apply bg-white border border-gray-100 px-5;
}
</style>

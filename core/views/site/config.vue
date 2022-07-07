<script setup lang="ts">
import { siteForm } from '@@/config/form'

const { currentSite, site, update } = useSite()
await currentSite()

const tabsite = ref('aliyun')
</script>

<template>
  <CoreHdTab
    :tabs="[
      { label: '站点列表', route: { name: 'admin' } },
      { label: `站点【${site?.title}】配置`, route: { name: 'site.config' } },
    ]" />

  <el-tabs v-model="tabsite" tab-position="top" class="tabs">
    <el-tab-pane label="阿里云" name="aliyun">
      <CoreFormFieldList :site="site?.config.aliyun" :fields="siteForm.aliyun" @submit="update" />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.tabs :deep(.el-tabs__nav-scroll) {
  @apply bg-white border border-gray-100 px-5;
}
</style>

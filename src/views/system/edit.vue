<script setup lang="ts">
import { getSystem, updateSystem } from '@/apis/system'
import { systemForm } from '@/config/form'
import router from '@/router'
import systemStore from '@/store/systemStore'
import { useTitle } from '@vueuse/core'

const model = ref(await getSystem())

const store = systemStore()
const onSubmit = async () => {
  await updateSystem(model.value)
  await store.load()
  router.push({ name: 'system.index' })
  useTitle(model.value.title)
}

const tabModel = ref('base')
</script>

<template>
  <HdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '修改数据', route: { name: 'system.edit' } },
    ]" />
  <el-tabs v-model="tabModel" class="tabs">
    <el-tab-pane label="网站信息" name="base">
      <FormFieldList :model="model" :fields="systemForm.base" @submit="onSubmit" />
    </el-tab-pane>
    <el-tab-pane label="验证码" name="code">
      <FormFieldList :model="model.config.code" :fields="systemForm.code" @submit="onSubmit" />
    </el-tab-pane>
    <el-tab-pane label="阿里云" name="aliyun">
      <FormFieldList :model="model.config.aliyun" :fields="systemForm.aliyun" @submit="onSubmit" />
    </el-tab-pane>
    <el-tab-pane label="用户头像" name="avatar">
      <FormFieldList :model="model.config.avatar" :fields="systemForm.avatar" @submit="onSubmit" />
    </el-tab-pane>
    <el-tab-pane label="文件上传" name="upload">
      <FormFieldList :model="model.config.upload" :fields="systemForm.upload" @submit="onSubmit" />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.tabs :deep(.el-tabs__nav-scroll) {
  @apply bg-white border border-gray-100 px-5;
}
</style>

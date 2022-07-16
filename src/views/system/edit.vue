<script setup lang="ts">
import { systemForm } from '@/config/form'

const { find, system, update } = useSystem()
await find()

const tab = ref('base')
</script>

<template>
  <HdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '修改数据', route: { name: 'system.edit' } },
    ]" />
  <div class="tabs">
    <el-tabs v-model="tab">
      <el-tab-pane label="网站信息" name="base">
        <FormFieldList :model="system" :fields="systemForm.base" @submit="update" />
      </el-tab-pane>
      <el-tab-pane label="验证码" name="code">
        <FormFieldList :model="system?.config.code" :fields="systemForm.code" @submit="update" />
      </el-tab-pane>
      <el-tab-pane label="阿里云" name="aliyun">
        <FormFieldList :model="system?.config.aliyun" :fields="systemForm.aliyun" @submit="update" />
      </el-tab-pane>
      <el-tab-pane label="用户头像" name="avatar">
        <FormFieldList :model="system?.config.avatar" :fields="systemForm.avatar" @submit="update" />
      </el-tab-pane>
      <el-tab-pane label="文件上传" name="upload">
        <FormFieldList :model="system?.config.upload" :fields="systemForm.upload" @submit="update" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.tabs :deep(.el-tabs__nav-scroll) {
  @apply bg-white border border-gray-100 px-5;
}
</style>

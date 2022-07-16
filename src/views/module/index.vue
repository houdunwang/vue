<script setup lang="ts">
import { moduleTableColumns } from '@/config/table'
import Tab from './tab.vue'
const { load, modules, del } = useModule()
await load()
</script>

<template>
  <Tab />
  <el-alert title="如果模块文件过多，可能会删除失败，请刷新页面重试" show-icon type="warning" effect="light" />

  <HdTableComponent :data="modules?.data" :columns="moduleTableColumns" :button-width="100">
    <template #button="{ model }">
      <el-button-group>
        <el-button type="danger" size="default" @click="del(model.id)">删除</el-button>
      </el-button-group>
    </template>
  </HdTableComponent>

  <HdPagination :total="modules?.meta.total" :size="modules?.meta.per_page" />
</template>

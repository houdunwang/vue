<script setup lang="ts">
import { moduleTableColumns } from '@@/config/table'
import Tab from './tab.vue'
const { load, modules, del } = useModule()
await load()
</script>

<template>
  <Tab />
  <el-alert
    title="模块删除后请点击顶部【更新站点数据】按钮，如果删除失败请手动删除"
    show-icon
    type="warning"
    effect="light" />

  <CoreHdTableComponent :data="modules?.data" :columns="moduleTableColumns" :button-width="100">
    <template #button="{ model }">
      <el-button-group>
        <el-button type="danger" size="default" @click="del(model.id)">删除</el-button>
      </el-button-group>
    </template>
  </CoreHdTableComponent>

  <CoreHdPagination :total="modules?.meta.total" :size="modules?.meta.per_page" />
</template>

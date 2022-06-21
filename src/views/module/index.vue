<script setup lang="ts">
import { delModule, getModuleList } from '@/apis/module'
import { moduleTableColumns } from '@/config/table'
import { ElMessageBox } from 'element-plus'
let tableKey = $ref(0)
const del = async (module: ModuleModel) => {
  await ElMessageBox.confirm('确定删除吗')
  await delModule(module.id)
  tableKey++
}
</script>

<template>
  <HdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '模块列表', route: { name: 'module.index' } },
      { label: '设计模块', route: { name: 'module.design' } },
    ]" />

  <HdTableComponent :api="getModuleList" :columns="moduleTableColumns" :key="tableKey" :button-width="100">
    <template #button="{ model }">
      <el-button-group>
        <el-button type="danger" size="default" @click="del(model)">删除</el-button>
      </el-button-group>
    </template>
  </HdTableComponent>
</template>

<style lang="scss"></style>

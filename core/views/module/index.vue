<script setup lang="ts">
import { delModule, getModuleList } from '@@/apis/module'
import { moduleTableColumns } from '@@/config/table'
import { ElMessageBox } from 'element-plus'
let tableKey = $ref(0)
const del = async (module: ModuleModel) => {
  try {
    await ElMessageBox.confirm('确定删除吗?')
    await delModule(module.id)
    tableKey++
  } catch (error) {}
}
</script>

<template>
  <CoreHdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '模块列表', route: { name: 'module.index' } },
      { label: '设计模块', route: { name: 'module.design' } },
    ]" />
  <el-alert title="删除模块将删除模块的所有文件与数据" show-icon type="warning" effect="light"></el-alert>

  <CoreHdTableComponent :api="getModuleList" :columns="moduleTableColumns" :key="tableKey" :button-width="100">
    <template #button="{ model }">
      <el-button-group>
        <el-button type="danger" size="default" @click="del(model)">删除</el-button>
      </el-button-group>
    </template>
  </CoreHdTableComponent>
</template>

<style lang="scss"></style>

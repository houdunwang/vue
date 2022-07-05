<script setup lang="ts">
import { getModuleList } from '@@/apis/module'
import { moduleTableColumns } from '@@/config/table'

const emit = defineEmits<{ (e: 'select', module: any): void }>()

let dialog = $ref(false)
const select = (model: any) => {
  emit('select', model)
  dialog = false
}
</script>

<template>
  <div class="">
    <el-dialog title="选择模块" v-model="dialog" custom-class="dialog">
      <CoreHdTableComponent :columns="moduleTableColumns" :api="getModuleList">
        <template #button="{ model }">
          <el-button type="primary" size="default" @click="select(model)">选择模块</el-button>
        </template>
      </CoreHdTableComponent>
    </el-dialog>
    <el-button type="primary" size="default" @click="dialog = true">选择模块</el-button>
  </div>
</template>

<style lang="scss" scoped>
:deep(.dialog) {
  @apply w-[95%] md:w-[1000px];
}
</style>

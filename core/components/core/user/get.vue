<script setup lang="ts">
import { userTableColumns } from '#/config/table'
const { load, users } = useUser()
const emit = defineEmits(['select'])
await load()
//模态框状态
const dialog = ref(false)

const onSelect = (model: UserModel) => {
  emit('select', model)
  dialog.value = false
}
</script>

<template>
  <div>
    <el-dialog v-model="dialog" width="95%" top="20px" title="选择用户">
      <CoreHdTableComponent
        :data="users?.data"
        :columns="userTableColumns"
        :buttons="[{ command: 'select', title: '选择', type: 'primary' }]"
        button-type="default"
        :button-width="90">
        <template #button="{ model }">
          <el-button type="primary" size="default" @click="onSelect(model)">选择</el-button>
        </template>
      </CoreHdTableComponent>
    </el-dialog>
    <el-button type="primary" size="default" @click="dialog = !dialog"> 选择用户 </el-button>
  </div>
</template>

<style lang="scss" scoped></style>

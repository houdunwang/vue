<script setup lang="ts">
import { getUserList } from '@@/apis/user'
import { userTableColumns } from '@@/config/table'

const emit = defineEmits<{
  (e: 'select', user: UserModel): void
}>()

//模态框状态
const dialogTableVisible = ref(false)

const action = (model: any, type: string) => {
  emit('select', model as UserModel)
  dialogTableVisible.value = false
}

const getList = async (page = 1, params = {}) => {
  return await getUserList(page, params)
}
</script>

<template>
  <div class="">
    <el-dialog v-model="dialogTableVisible" width="95%" top="20px" title="选择用户">
      <CoreHdTableComponent
        :api="getList"
        :columns="userTableColumns"
        :buttons="[{ command: 'select', title: '选择', type: 'primary' }]"
        button-type="default"
        @action="action" />
    </el-dialog>
    <el-button type="primary" size="default" @click="dialogTableVisible = !dialogTableVisible">选择用户</el-button>
  </div>
</template>

<style lang="scss" scoped></style>

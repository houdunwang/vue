<script setup lang="ts">
import { getUser } from '@/apis/user'
import { userForm } from '@/config/form'

const { id } = defineProps<{
  id?: number
  dialogWidth?: string
}>()

let dialogState = $ref(false)
let user = $ref<UserModel>()

const loadUser = async () => {
  user = await getUser(id!)
  dialogState = true
}
</script>

<template>
  <teleport to="body">
    <div class="">
      <el-dialog v-model="dialogState" title="用户资料" custom-class="dialog" top="20px">
        <form-field-list :model="user" :fields="userForm" :show-button="false" />
      </el-dialog>
    </div>
  </teleport>

  <el-button type="primary" size="default" @click="loadUser">显示</el-button>
</template>

<style lang="scss" scoped>
:deep(.dialog) {
  @apply w-11/12 md:w-[1000px];
}
</style>

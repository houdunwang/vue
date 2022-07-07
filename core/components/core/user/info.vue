<script setup lang="ts">
import { userForm } from '@@/config/form'

const { user } = defineProps<{
  user?: UserModel
}>()

let dialog = ref(false)
</script>

<template>
  <teleport to="body">
    <div class="">
      <el-dialog v-model="dialog" title="用户资料" custom-class="dialog" top="20px">
        <CoreFormFieldList :model="user" :fields="userForm" :show-button="false" />
      </el-dialog>
    </div>
  </teleport>

  <el-button type="primary" size="default" @click="dialog = true">显示</el-button>
</template>

<style lang="scss" scoped>
:deep(.dialog) {
  @apply w-11/12 md:w-[1000px];
}
</style>

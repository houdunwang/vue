<script setup lang="ts">
const mobile = ref('')
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <FormInputComponent v-model="mobile" placeholder="请输入验证码" class="mr-1" required />
      <ElButton class="ml-1" plain size="large" shape="circle">
        <span>发送验证码</span>
      </ElButton>
    </div>
    <HdError name="code" />
  </div>
</template>

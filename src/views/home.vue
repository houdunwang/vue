<script setup lang="ts">
import useUtil from '@/composables/system/useUtil'
import { RouteName } from '@/enum/RouteName'
const { isLogin } = useUtil()
</script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/xj.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <FormButtonComponent @click="$router.push({ name: 'admin' })" class="danger ml-2"> 访问后台 </FormButtonComponent>
      <FormButtonComponent v-if="!isLogin()" class="primary ml-2" @click="$router.push({ name: RouteName.LOGIN })">
        用户登录
      </FormButtonComponent>
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">每晚八点直播，欢迎来共同学习技术</div>
  </div>
</template>

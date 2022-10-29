<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import { RouteName } from '@/enum/RouteName'
const { isLogin, logout } = useUtil()
</script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/xj.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <HdFormButton @click="$router.push({ name: 'admin' })" class="danger ml-2"> 访问后台 </HdFormButton>
      <HdFormButton v-if="!isLogin()" class="primary ml-2" @click="$router.push({ name: RouteName.LOGIN })">
        用户登录
      </HdFormButton>
      <HdFormButton v-if="isLogin()" class="bg-orange-600 text-white ml-2" @click="logout"> 退出登录 </HdFormButton>
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">每晚八点直播，欢迎来共同学习技术</div>
  </div>
</template>

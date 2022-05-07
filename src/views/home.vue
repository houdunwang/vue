<script setup lang="ts">
import utils from '@/utils'
import { RouteEnum } from '@/enum/routeEnum'
</script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/xj.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <FormButton @click="$router.push({ name: 'admin' })" class="danger">后台管理</FormButton>
      <FormButton v-if="!utils.user.isLogin()" class="primary ml-2" @click="$router.push({ name: RouteEnum.LOGIN })"
        >用户登录</FormButton
      >
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">每晚八点直播，欢迎来共同学习技术</div>
  </div>
</template>

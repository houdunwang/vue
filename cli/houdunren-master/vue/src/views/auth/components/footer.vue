<script lang="ts" setup>
import useUtil from '@/composables/hd/useUtil'

const { isWechat } = useUtil()
</script>
<template>
  <main>
    <div class="flex gap-3 justify-center mt-3 font-bold text-sm text-gray-700">
      <a href="/login" v-if="$route.name != 'login'">帐号登录</a>
      <!-- <a href="/register" v-if="$route.name != 'register' && !isWechat()" to="/register"> 会员注册 </a> -->
      <a href="/"> 网站首页 </a>
      <a href="/password" v-if="$route.name != 'password'"> 找回密码 </a>
    </div>
    <div class="text-center text-xs text-gray-500 mt-2">新朋友提供微信注册，请顶击上方微信图标</div>
  </main>
</template>

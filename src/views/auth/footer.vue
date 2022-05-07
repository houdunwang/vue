<script setup lang="ts"></script>

<template>
  <div class="flex gap-2 justify-center mt-5">
    <router-link v-if="$route.name != 'login'" to="/login" class="text-xs text-gray-700">用户登录</router-link>
    <router-link v-else to="/register" class="text-xs text-gray-700">会员注册</router-link>
    <router-link :to="{ name: 'forgetPassword' }" class="text-xs text-gray-700">找回密码</router-link>
    <router-link to="/" class="text-xs text-gray-700">网站首页</router-link>
  </div>
</template>

<style lang="scss"></style>

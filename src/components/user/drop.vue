<script setup lang="ts">
import userStore from '@/store/userStore'
import { logout } from '@/utils/helper'
const user = userStore()
</script>

<template>
  <div class="group relative">
    <div class="flex justify-center items-center">
      <ElImage
        v-if="user.info?.avatar"
        :src="user.info?.avatar"
        fit="cover"
        class="w-8 h-8 rounded-full border-white" />
      <span class="ml-1 text-sm">{{ user.info?.nickname }}</span>
    </div>
    <section
      class="group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden">
      <a href="https://doc.houdunren.com" target="_blank" class="flex items-center cursor-pointer border-b py-3">
        <icon-log theme="outline" size="18" fill="#333" />
        <span class="text-xs text-gray-600 ml-2">文档资料</span>
      </a>
      <a class="flex items-center cursor-pointer py-3" href="/">
        <icon-home theme="outline" size="18" fill="#333" />
        <span class="text-xs text-gray-600 ml-2">网站首页</span>
      </a>
      <div class="flex items-center cursor-pointer py-3" @click="logout()">
        <icon-logout theme="outline" size="18" fill="#333" />
        <span class="text-xs text-gray-600 ml-2">退出登录</span>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>

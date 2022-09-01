<script setup lang="ts">
import userStore from '@/store/userStore'
import { logout, open } from '@/utils/helper'
const { show } = useMenu()
const user = userStore()
</script>

<template>
  <div class="bg-white relative shadow-sm z-50 p-2 border-b-1 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div class="mr-2" @click.stop="show = !show">
        <icon-menu-unfold-one theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-if="show" />
        <icon-menu-fold-one theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-else />
      </div>
      <HdBreadcrumb class="hidden md:block" />
    </div>
    <div class="flex justify-center items-center relative cursor-pointer">
      <HdFullscreen class="hidden md:flex mr-3 text-gray-600" />
      <el-dropdown>
        <span class="el-dropdown-link flex items-center">
          <ElImage
            v-if="user.info?.avatar"
            :src="user.info?.avatar"
            fit="cover"
            class="w-8 h-8 rounded-full border-white" />
          <span class="ml-1 text-sm">{{ user.info?.nickname }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="open('https://doc.houdunren.com')">文档资料</el-dropdown-item>
            <el-dropdown-item @click="open('https://www.houdunren.com')">在线视频</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/')">网站首页</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

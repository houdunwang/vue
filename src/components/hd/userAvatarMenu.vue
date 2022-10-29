<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import userStore from '@/store/useUserStore'
import dayjs from 'dayjs'
const { isAdministrator, logout } = useUtil()
const storeUser = userStore()
</script>

<template>
  <main class="flex items-center">
    <HdFullscreen class="hidden md:flex mr-3 text-gray-600" />

    <section v-if="!!storeUser.user" class="flex items-center">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link flex items-center">
          <ElImage :src="storeUser.user.avatar" fit="cover" class="w-10 h-10 rounded-md" />
          <div class="flex flex-col text-sm ml-2 text-gray-600 font-light">
            {{ storeUser.user?.name }}
            <span>注册于 {{ dayjs(storeUser.user?.created_at).fromNow() }} </span>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-if="isAdministrator()">
              <router-link :to="{ name: 'admin' }"> 后台管理 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{ name: 'home' }"> 网站首页 </router-link>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
    <section v-else>
      <router-link
        to="/login"
        class="px-3 py-2 mr-2 border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        登录
      </router-link>
      <router-link
        to="/register"
        class="px-3 py-2 border shadow-sm rounded-md bg-slate-100 hover:bg-indigo-500 hover:!text-white duration-300">
        注册
      </router-link>
    </section>
  </main>
</template>

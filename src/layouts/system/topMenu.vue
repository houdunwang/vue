<script setup lang="ts">
import systemStore from '@/store/systemStore'
import { isSuperAdmin, logout } from '@/utils/helper'
const storeSystem = systemStore()
</script>

<template>
  <div class="py-5 md:px-5 md:grid grid-cols-10 items-center">
    <img :src="storeSystem.data.logo" class="col-span-4 hidden md:block" />
    <main>
      <router-link :to="{ name: 'site.index' }">
        <icon-network-tree theme="filled" :strokeWidth="2" />
        网站管理
      </router-link>
      <router-link :to="{ name: 'system.index' }" v-if="isSuperAdmin()">
        <icon-config theme="filled" :strokeWidth="2" />
        系统设置
      </router-link>
      <section class="" @click="logout">
        <icon-logout theme="filled" :strokeWidth="4" />
        退出登录
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  @apply md:col-span-6 md:flex md:justify-end grid grid-cols-3 gap-3 px-3;
  a,
  section {
    @apply flex flex-col justify-center items-center bg-white opacity-75 shadow-md py-5 md:px-8 px-6 rounded-lg cursor-pointer hover:opacity-90 duration-300 hover:shadow-lg text-gray-800;
    :first-child {
      @apply text-3xl;
    }
  }
}
</style>

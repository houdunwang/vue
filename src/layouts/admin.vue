<script setup lang="ts">
import userStore from '@/store/userStore'
import HistoryLink from './admin/historyLink.vue'
import MenuComponet from './admin/menu.vue'
import Navbar from './admin/navbar.vue'

const { getCurrentUser } = userStore()
await getCurrentUser()
</script>

<template>
  <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <MenuComponet />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr] overflow-hidden">
      <div>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

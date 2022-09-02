<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import userStore from '@/store/userStore'

await Promise.all([userStore().getUserInfo()])
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
          <Transition
            appear
            mode="out-in"
            class="animate__animated"
            :enter-active-class="route.meta.enterClass ?? ''"
            :leave-active-class="route.meta.leaveClass ?? ''">
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animate__fadeInRight {
  animation-duration: 0.5s;
}
.animate__fadeOutLeft {
  animation-duration: 0.3s;
}
</style>

<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import Navbar from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue'
import menu from '@/composables/menu';

const route = useRoute()
watch(route, () => {
  menu.addHistoryMenu(route)
}, { immediate: true })

</script>

<template>
  <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <MenuComponet />

    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div class>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <Transition
            appear
            class="animate__animated"
            :enter-active-class="route.meta.enterClass ?? 'animate__fadeInRight'"
            :leave-active-class="route.meta.leaveClass ?? 'animate__fadeOutLeft'"
          >
            <component :is="Component" class="absolute w-full" />
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
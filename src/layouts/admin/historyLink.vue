<script setup lang="ts">
import menu from '@/composables/useMenu'
</script>

<template>
  <div class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm" v-show="menu.history.value.length">
    <div class="grid grid-flow-col gap-3 justify-start">
      <div
        v-for="item of menu.history.value"
        class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm flex items-center justify-center"
        :class="{ 'bg-violet-600 text-white': $route.name == item.route }">
        <router-link :to="{ name: item.route }">{{ item.title }}</router-link>
        <icon-close-one
          theme="outline"
          size="16"
          strokeLinejoin="bevel"
          strokeLinecap="butt"
          class="cursor-pointer ml-2"
          :class="{ 'text-white': $route.name == item.route }"
          @click="menu.removeHistoryMenu(item)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menu from '@/composables/useMenu'
</script>

<template>
  <div class="hidden md:block p-2 border-t border-b bg-gray-50 shadow-sm" v-show="menu.history.value.length">
    <div class="grid grid-flow-col gap-2 justify-start">
      <div
        v-for="item of menu.history.value"
        class="border hover:bg-teal-600 hover:text-white duration-300 bg-white rounded-md shadow-sm py-2 px-3 flex items-center justify-center text-xs"
        :class="{ 'bg-teal-600 text-white': $route.name == item.route }">
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

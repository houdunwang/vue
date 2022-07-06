<script setup lang="ts">
const { history } = useMenu()
</script>

<template>
  <div class="hidden md:block p-2 border-t border-b bg-gray-50 shadow-sm" v-show="history.length">
    <div class="grid grid-flow-col gap-2 justify-start">
      <router-link
        :to="{ name: route.name as string }"
        v-for="route of history"
        class="border hover:bg-teal-600 hover:text-white duration-300 bg-white rounded-md shadow-sm py-2 px-3 flex items-center justify-center text-xs"
        :class="{ 'bg-teal-600 text-white': $route.name == route.name }">
        {{ route.meta?.menu?.title }}
      </router-link>
    </div>
  </div>
</template>

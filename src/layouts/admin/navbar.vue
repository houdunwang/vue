<script setup lang="ts">
import menuService from '@/composables/useMenu'
</script>

<template>
  <div class="bg-white relative shadow-sm z-50 p-2 border-b-1 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="menuService.toggleState" class="mr-2">
        <icon-menu-fold-one
          theme="filled"
          size="24"
          fill="#10ad57"
          v-if="menuService.close.value"
          class="cursor-pointer" />
        <icon-menu-unfold-one theme="filled" size="24" fill="#10ad57" v-else class="cursor-pointer" />
      </div>
      <HdBreadcrumb class="hidden md:block" />
    </div>
    <div class="flex justify-center items-center relative cursor-pointer">
      <HdFullscreen class="hidden md:flex" />
      <UserDrop class="text-gray-600" />
    </div>
  </div>
</template>

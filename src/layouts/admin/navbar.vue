<script setup lang="ts">
import UserAvatarMenu from '@/components/hd/userAvatarMenu.vue'
import useMenuStore from '@/layouts/admin/useMenuStore'
import { MenuFoldOne, MenuUnfoldOne } from '@icon-park/vue-next'
const menuStore = useMenuStore()
const { open } = useUtil()
</script>

<template>
  <div class="bg-white relative shadow-sm z-50 p-2 border-b-1 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div class="mr-2" @click.stop="menuStore.toggleMenu">
        <MenuUnfoldOne
          theme="filled"
          size="24"
          fill="#10ad57"
          class="cursor-pointer duration-300"
          v-if="menuStore.menuState" />
        <MenuFoldOne theme="filled" size="26" fill="#10ad57" class="cursor-pointer duration-300" v-else />
      </div>
      <HdBreadcrumb class="hidden md:block" />
    </div>
    <div class="flex justify-center gap-2 items-center relative cursor-pointer">
      <icon-people
        theme="outline"
        size="22"
        class="cursor-pointer text-gray-700 hover:text-gray-500"
        @click="open('/member')" />
      <HdFullScreen class="hidden 2xl:flex text-gray-600" />
      <UserAvatarMenu />
    </div>
  </div>
</template>

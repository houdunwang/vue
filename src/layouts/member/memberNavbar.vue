<script setup lang="ts">
import UserAvatarMenu from '@/components/hd/userAvatarMenu.vue'
import { Home } from '@icon-park/vue-next'

const { open } = useUtil()
</script>

<template>
  <main class="bg-white">
    <section class="2xl:w-page m-auto relative shadow-sm z-50 p-2 border-b-1 px-5 flex justify-between items-center">
      <div class="flex items-center">
        <home theme="outline" size="24" fill="#10ad57" @click="open('/')" class="cursor-pointer" />
      </div>
      <div class="flex justify-center items-center relative cursor-pointer">
        <UserAvatarMenu />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import navbarVue from './admin/navbar.vue'
import TopMenu from './admin/topMenu.vue'
import Copyright from './admin/copyright.vue'
import systemStore from '@@/store/systemStore'
import userStore from '@@/store/userStore'

await Promise.all([userStore().getUserInfo(), systemStore().load()])

const storeSystem = systemStore()
</script>

<template>
  <div class="admin grid grid-rows-[auto_auto_1fr] md:pb-32">
    <div>
      <navbarVue />
      <TopMenu />
    </div>
    <div class="md:mx-5 mx-3 p-5 bg-gray-50 rounded-lg overflow-hidden">
      <router-view #default="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <Copyright class="mb-5" />
  </div>
</template>

<style lang="scss">
.admin {
  min-height: 100vh;
  background-image: url('/images/admin.jpg');
  background-size: cover;
}
</style>

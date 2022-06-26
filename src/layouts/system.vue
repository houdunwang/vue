<script setup lang="ts">
import navbarVue from './system/navbar.vue'
import TopMenu from './system/topMenu.vue'
import Copyright from './system/copyright.vue'
import systemStore from '@/store/systemStore'
import { useTitle } from '@vueuse/core'

await Promise.all([systemStore().load()])

const storeSystem = systemStore()
useTitle(storeSystem.data.title)
const co = ref(null)
onMounted(() => {
  // watch(co, (component: any) => {
  console.log(co.value)
  // })
})
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

    <div class="" ref="co">
      <el-button type="primary" size="default" v-for="i of 10">{{ i }}</el-button>
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

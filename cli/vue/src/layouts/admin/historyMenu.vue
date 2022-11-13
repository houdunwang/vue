<script setup lang="ts">
import router from '@/router'
import useStorage from '@/composables/hd/useStorage'
// const storage = useStorage()
const routes = ref<{ title: string; name: string }[]>([])
router.beforeResolve(async (to) => {
  if (Object.keys(to.query).length > 0 || Object.keys(to.params).length > 0) return
  if (!to.meta.menu?.title || routes.value.find((r) => r.name == to.name)) return
  if (!to.fullPath.startsWith('/admin')) return
  if (routes.value.length > 10) {
    routes.value.splice(0, 10)
  }
  routes.value.unshift({ name: to.name as string, title: to.meta.menu?.title })
  // storage.set('admin-history-menu', routes.value)
})
</script>

<template>
  <div class="p-2 px-5 border-t border-b bg-gray-50 shadow-sm relative overflow-auto h-[50px]" v-show="routes.length">
    <div class="overflow-x-auto whitespace-pre absolute flex gap-2">
      <router-link
        v-for="(route, index) of routes"
        :key="index"
        :to="{ name: route.name }"
        class="border inline-flex items-center jusc hover:bg-teal-600 hover:text-white duration-300 bg-white rounded-md shadow-sm py-2 px-3 text-xs"
        :class="{ 'bg-teal-600 text-white': $route.name == route.name }">
        {{ route.title }}
      </router-link>
    </div>
  </div>
</template>

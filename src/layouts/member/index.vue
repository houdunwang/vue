<script setup lang="ts">
import memberNavbar from './memberNavbar.vue'
import UserBlock from './userBlock.vue'
import menuData from './menuData'
const active = ref('')
</script>
<template>
  <main class="flex flex-col flex-1 justify-start">
    <memberNavbar />
    <section class="2xl:w-page 2xl:mx-auto mt-5 flex flex-col md:flex-row md:items-start gap-5 p-2">
      <div class="md:w-[200px] hidden md:block">
        <UserBlock class="hidden lg:block" />
        <div class="menu lg:mt-5">
          <router-link
            v-for="(menu, index) of menuData"
            :key="index"
            :to="{ name: menu.routeName }"
            :class="{ active: $route.name == menu.routeName }"
            @click="active = menu.routeName">
            {{ menu.title }}
          </router-link>
        </div>
      </div>
      <RouterView #default="{ Component, route }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <component
                :is="Component"
                :key="route.fullPath"
                class="bg-white p-5 border rounded-lg flex-1 shadow-sm" />
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.menu {
  @apply border flex flex-col rounded-lg overflow-hidden;
  a {
    @apply bg-white flex py-3 px-5 border-b hover:bg-[#16a085] hover:text-white duration-300;
    &.active {
      @apply bg-[#16a085] text-white;
    }
  }
}
</style>

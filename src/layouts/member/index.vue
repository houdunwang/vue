<script setup lang="ts">
import navbar from './memberNavbar.vue'
import UserBlock from './userBlock.vue'

const active = ref('')
</script>
<template>
  <main class="flex flex-col flex-1 justify-start">
    <navbar />
    <section class="2xl:w-page 2xl:mx-auto mt-5 flex flex-col md:flex-row md:items-start gap-5 p-2">
      <div class="md:w-[200px]">
        <UserBlock class="hidden lg:block" />
        <div class="menu lg:mt-5">
          <router-link
            :to="{ name: 'member.info' }"
            :class="{ active: $route.name == 'member.info' }"
            @click="active = 'member.info'">
            资料修改
          </router-link>
          <router-link
            :to="{ name: 'member.password' }"
            :class="{ active: $route.name == 'member.password' }"
            @click="active = 'member.password'">
            修改密码
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

<script setup lang="ts">
import Footer from '@/components/footer.vue'
import UserBlock from '@/components/userBlock.vue'
import useUserStore from '@/store/hd/useUserStore'
const userStore = useUserStore()
const active = ref('member.info')
</script>
<template>
  <main class="flex flex-col flex-1 justify-start" v-if="userStore.user">
    <FrontTopMenu class="border-b-0" />
    <section class="2xl:w-page 2xl:mx-auto mt-5 flex flex-col md:flex-row md:items-start gap-5 p-2">
      <div class="md:w-[200px]">
        <UserBlock :user="userStore.user" />
        <div class="menu">
          <router-link
            :to="{ name: 'member.info' }"
            :class="{ active: active == 'member.info' }"
            @click="active = 'member.info'">
            资料修改
          </router-link>
          <router-link
            :to="{ name: 'member.password' }"
            :class="{ active: active == 'user.password' }"
            @click="active = 'user.password'">
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
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.menu {
  @apply border mt-5 flex flex-col rounded-lg overflow-hidden;
  a {
    @apply bg-white flex py-3 px-5 border-b hover:bg-[#16a085] hover:text-white duration-300;
    &.active {
      @apply bg-[#16a085] text-white;
    }
  }
}
</style>

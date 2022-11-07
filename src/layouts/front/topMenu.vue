<script setup lang="ts">
import useConfigStore from '@/store/hd/useConfigStore'
import MenuList from './menu-list.vue'
const configStore = useConfigStore()
const showMenu = ref(true)
document.addEventListener('click', () => (showMenu.value = true))
</script>

<template>
  <main class="flex items-center shadow-lg relative top-menu-bg overflow-hidden h-[65px]">
    <div class="flex justify-between items-center px-3 w-full 2xl:w-page 2xl:m-auto">
      <section class="flex flex-col items-center md:flex-row xl:items-center md:mr-6 text-gray-600">
        <!-- 网站 LOGO -->
        <div class="flex flex-row-reverse justify-between items-center">
          <div class="xl:hidden flex items-center" @click.stop="showMenu = !showMenu" id="menuToggle">
            <icon-all-application theme="filled" size="24" fill="#34495e" />
          </div>
          <router-link
            :to="{ name: 'home' }"
            class="font-bold items-center justify-between text-xl hidden 2xl:flex mr-2 text-[#574b90] hover:text-[#574b90]">
            <icon-youtobe theme="outline" size="24" class="mr-1" /> houdunren.com
          </router-link>
        </div>
        <!-- 网站 LOGO END-->
        <!-- 菜单项 -->
        <section>
          <Teleport to="body">
            <MenuList
              class="absolute top-[65px] w-full p-5 shadow-md border-b rounded-b-xl z-50 left-0 bg-white flex flex-col justify-center gap-3 xl:hidden"
              :class="{ hidden: showMenu }" />
          </Teleport>
          <MenuList class="justify-center gap-3 font-bold opacity-95 hidden xl:flex" />
        </section>
        <!-- 菜单项 END-->
      </section>
      <!-- 移动端中间标志 -->
      <router-link :to="{ name: 'home' }" class="items-center hidden md:flex xl:hidden font-bold text-xl text-hd-blue">
        <icon-youtobe theme="outline" size="20" class="mr-1" /> houdunren.com
      </router-link>
      <!-- 移动端中间标志 END-->
      <!-- 头像与站内消息 -->
      <section class="flex gap-3 items-center md:mt-0">
        <HdUserAvatarMenu />
      </section>
      <!-- 头像与站内消息 END-->
    </div>
    <!-- 下边线 -->
    <div class="h-1 bg-gradient-to-r from-[#7462cc] to-[#b86b47] absolute left-0 bottom-0 right-0 z-[-1]"></div>
    <!-- 菜单底图 -->
    <div class="top-bg-full absolute left-0 right-0 top-0"></div>
  </main>
</template>

<style lang="scss" scoped>
.top-menu-bg {
  &::after {
    content: '';
    display: block;
    overflow: hidden;
    position: absolute;
    z-index: -100;
    background-image: url('/images/top-menu.jpg');
    background-position: center;
    transform: scale(2);
    filter: blur(20px);
    opacity: 0.1;
    @apply top-0 left-0 right-0 bottom-0;
  }
}
.top-bg-full {
  overflow: hidden;
  position: absolute;
  z-index: -10;
  background-image: url('/images/space-top-bg.jpg');
  background-position: top;
  transform: scale(20);
  filter: blur(100px);
  opacity: 0.05;
  @apply top-0 left-0 right-0;
}
</style>

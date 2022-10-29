<script setup lang="ts">
const showMenu = ref(true)
document.addEventListener('click', () => (showMenu.value = true))
</script>

<template>
  <main class="top-menu shadow-lg border-gray-600 relative top-menu-bg overflow-hidden">
    <div class="flex justify-between items-start xl:items-center 2xl:w-page m-auto py-3 px-5">
      <section class="flex flex-col items-start xl:flex-row xl:items-center md:mr-6 text-gray-600">
        <div class="flex flex-row-reverse justify-between items-center">
          <div class="block xl:hidden mt-2" @click.stop="showMenu = !showMenu" id="menuToggle">
            <icon-all-application theme="filled" size="24" fill="#333" />
          </div>
          <router-link
            :to="{ name: 'home' }"
            class="font-bold items-center justify-between text-xl !text-hd-blue !hover:text-[#e84949] hidden xl:flex mr-2">
            <icon-youtobe theme="outline" size="24" class="mr-1" /> houdunren.com
          </router-link>
        </div>
        <div class="flex flex-col justify-center xl:flex-row gap-3 xl:!flex xl:mt-0 mt-3" :class="{ hidden: showMenu }">
          <a aria-current="page" href="/" class="router-link-active router-link-exact-active active xl:hidden">
            网站首页
          </a>
          <a href="https://www.houdunren.com"> 系统课程 </a>
          <a href="https://www.houdunren.com"> 实战项目 </a>
          <a href="https://www.houdunren.com/lesson"> 碎片课程 </a>
          <a href="https://www.houdunren.com"> 最新更新 </a>
          <a href="https://www.houdunren.com"> 话题讨论 </a>
          <a href="https://www.houdunren.com"> 签到打卡 </a>
          <a href="https://www.houdunren.com"> 早起少年 </a>
          <a href="https://doc.houdunren.com" target="_blank" class="flex items-center"> 在线文档 </a>
        </div>
      </section>
      <section class="flex gap-3 items-center md:mt-0">
        <HdUserAvatarMenu />
      </section>
    </div>
    <div class="h-1 bg-gradient-to-r from-[#7462cc] to-[#b86b47]"></div>
    <div class="top-bg-full"></div>
  </main>
</template>

<style lang="scss">
main.top-menu {
  div {
    section {
      a {
        @apply text-slate-600 hover:text-hd-blue font-bold opacity-90;
        &.active {
          @apply text-hd-blue font-bold opacity-100;
        }
      }
    }
  }
  .top-menu-bg {
    &::after {
      content: '';
      display: block;
      overflow: hidden;
      position: absolute;
      z-index: -1;
      background-image: url('/images/rodion-kutsaev-0VGG7cqTwCo-unsplash.jpg');
      background-position: center;
      transform: scale(3);
      filter: blur(30px);
      opacity: 0.3;
      @apply top-0 left-0 right-0 bottom-0;
    }
  }
  .top-bg-full {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    background-position: top;
    transform: scale(20);
    filter: blur(100px);
    opacity: 0.05;
    @apply top-0 left-0 right-0;
  }
}
</style>

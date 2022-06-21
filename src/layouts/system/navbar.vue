<script setup lang="ts">
import { updateAllSiteInitData } from '@/apis/site'
import { isSuperAdmin } from '@/utils/helper'
</script>

<template>
  <main>
    <section>
      <router-link :to="{ name: 'module.index' }" v-if="isSuperAdmin()">
        <icon-system theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
        模块管理
      </router-link>
      <a href="">
        <icon-right-user theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
        会员中心
      </a>
      <a href="https://www.houdunren.com" target="_blank">
        <icon-video-two theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
        视频教程
      </a>
    </section>

    <section>
      <!-- <HdNotification class="mr-5 text-[#7ed321] hidden md:block" /> -->
      <HdFullscreen class="text-[#7ed321] hidden md:flex" />
      <ElButton type="success" size="small" @click="updateAllSiteInitData"> 更新所有站点数据 </ElButton>
      <UserDrop class="text-gray-200 ml-2" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
a {
  @apply hover:text-white duration-300 text-gray-400 mr-5 flex items-center;
  span {
    @apply mr-1;
  }
}
main {
  @apply flex flex-col md:flex-row md:justify-between md:items-center  px-8 py-3 bg-[#333];

  > section:first-child {
    @apply text-[#7ed321] items-center md:flex hidden;
  }
  > :nth-child(2) {
    @apply flex flex-row-reverse md:flex-row justify-between md:justify-center items-center;
  }
}
</style>

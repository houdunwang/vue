<script setup lang="ts">
import { isSuperAdmin } from '@@/utils/helper'
</script>

<template>
  <div class="" v-if="isSuperAdmin()">
    <section>
      <h5>模块管理</h5>
      <ul>
        <li @click="$router.push({ name: 'module.index' })">
          <icon-blocks-and-arrows theme="outline" :strokeWidth="2" />
          模块列表
        </li>
        <li @click="$router.push({ name: 'module.design' })">
          <icon-graphic-design theme="outline" :strokeWidth="2" />
          设计模块
        </li>
      </ul>
    </section>
    <section>
      <h5>用户相关</h5>
      <ul>
        <li @click="$router.push({ name: 'user.index' })">
          <icon-classroom theme="outline" :strokeWidth="2" />
          用户列表
        </li>
      </ul>
    </section>
    <section>
      <h5>系统配置</h5>
      <ul>
        <li @click="$router.push({ name: 'system.edit' })">
          <icon-database-config theme="outline" :strokeWidth="2" />
          配置定义
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  @apply my-8;

  h5 {
    @apply pl-2 flex items-center text-gray-600 font-bold mb-2 text-lg;
    &::before {
      content: '';
      @apply w-1 h-[15px] bg-sky-800 block mr-2;
    }
  }
  ul {
    @apply flex items-center;
    li {
      @apply w-[120px] p-5 flex flex-col justify-center items-center bg-[#34495e] mr-4 rounded-md text-white cursor-pointer duration-300 opacity-70 hover:opacity-95 hover:shadow-lg font-sans;
      span {
        @apply text-3xl mb-2;
      }
    }
  }
}
</style>

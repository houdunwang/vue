<script setup lang="ts"></script>

<template>
  <main class="">
    <el-alert
      title="布局组件使用了Suspense组件，所以默认没有效果"
      type="warning"
      show-icon
      class="mb-3"
      :closable="false" />

    <HdAnimateList tag="ul" :duration="2" :delay="0.2">
      <li v-for="(num, index) of 10" :data-index="index" :key="index">
        {{ num }}
      </li>
    </HdAnimateList>
  </main>
</template>

<style lang="scss" scoped>
ul {
  li {
    @apply bg-purple-600 text-white p-2 mb-2;
  }
}
</style>

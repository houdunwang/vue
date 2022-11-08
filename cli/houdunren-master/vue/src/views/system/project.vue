<script setup lang="ts">
import SystemItem from '@/components/system-item.vue'
const { collection, findAll } = useSystem()
await findAll(1, { type: 'project' })
</script>

<template>
  <main v-if="collection">
    <div class="rounded-xl shadow-sm border bg-white">
      <section>
        <h1 class="text-center xl:py-8 text-2xl xl:text-4xl font-bold py-5">实战项目</h1>
        <div class="text-center xl:text-lg mx-5 mb-3">以下是提高你编程能力的实战项目，希望能够帮助到你</div>
      </section>
      <section class="grid grid-flow-row md:grid-cols-3 gap-5 p-5">
        <SystemItem v-for="item of collection" :key="item.id" :item="item" class="" />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

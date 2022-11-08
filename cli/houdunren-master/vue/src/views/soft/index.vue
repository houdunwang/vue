<script setup lang="ts">
import Card from '@/components/hd/card.vue'
const { collection, findAll } = useSoft()
const route = useRoute()
const page = ref(route.query.page || 1)
await findAll(page.value)
</script>

<template>
  <main>
    <HdCard>
      <template #header>
        <div class="">软件下载</div>
        <div class="text-base mt-3">你可以用在任何免费或商业项目，软件只供学习使用，产生的一切后果需要自已负责。</div>
      </template>
      <section class="grid grid-cols-4 gap-5 p-5" v-if="collection.data.length">
        <router-link
          :to="{ name: 'soft.show', params: { id: soft.id } }"
          class="flex flex-col border cursor-pointer"
          v-for="soft of collection.data"
          :key="soft.id">
          <el-image :src="soft.preview" fit="cover" class="h-48" :lazy="true"></el-image>
          <h2 class="truncate p-3 text-center">{{ soft.title }}</h2>
        </router-link>
      </section>
      <section class="p-3 flex justify-center pb-8" v-else>
        <el-tag type="success" size="large" effect="dark">软件即将发布...</el-tag>
      </section>
    </HdCard>
  </main>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import Card from '@/components/hd/card.vue'
const { model, findOne } = useSoft()
const route = useRoute()
await findOne(route.params.id)
</script>

<template>
  <main>
    <HdCard>
      <template #header>
        <div class="">{{ model.title }}</div>
      </template>
      <section class="px-5 py-3">
        <el-button type="primary" size="default" v-if="model.file">
          <a :href="model.file">下载软件</a>
        </el-button>
        <el-button type="danger" size="default" @click="$router.push({ name: 'subscribe.front' })" v-else="model.file">
          订阅网站后可以下载软件学习
        </el-button>

        <HdMarkdownPreview :text="model.content" class="topic-markdown" />
      </section>
    </HdCard>
  </main>
</template>

<style lang="scss"></style>

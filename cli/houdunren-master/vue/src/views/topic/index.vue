<script setup lang="ts">
import Tip from '@/components/tip.vue'
import TopicItem from '@/components/topic-item.vue'
const route = useRoute()
const { collection, findAll } = useTopic()
await findAll(route.query.page || 1)
</script>

<template>
  <main class="grid lg:grid-cols-12 gap-3 items-start">
    <section class="lg:col-span-9 overflow-hidden">
      <HdCard>
        <template #header>
          <div class="flex items-center justify-between">
            交流讨论
            <span class="text-base font-light md:flex items-center gap-1 hidden">
              <icon-emotion-happy theme="outline" size="24" class="text-green-700" />
              每次温暖的交流，都会让人身心愉悦
            </span>
          </div>
        </template>
        <section class="!-my-5">
          <TopicItem v-for="item of collection.data" :key="item.id" :item="item" />
        </section>
      </HdCard>

      <Pagination
        v-if="collection"
        :per_page="collection.meta.per_page"
        :total="collection.meta.total"
        @current-change="$router.push({ name: 'topic', query: { page: $event } })" />
    </section>
    <Tip class="mt-3 lg:col-span-3 md:mt-0" />
  </main>
</template>

<style lang="scss"></style>

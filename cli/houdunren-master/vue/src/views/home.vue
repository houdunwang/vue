<script setup lang="ts">
import ActivityItem from '@/components/activity-item.vue'
import LearningDynamic from '@/components/learning-dynamic.vue'
import Pagination from '@/components/pagination.vue'
import Tip from '@/components/tip.vue'
import TopicItem from '@/components/topic-item.vue'

const route = useRoute()
const page = ref(+(route.query.page || 1))
const { collection, findAll } = useActivity()
const { getRecommendList } = useTopic()
const [recommendTopics] = await Promise.all([getRecommendList(), findAll(page.value)])
</script>

<template>
  <main class="lg:grid lg:grid-cols-12 grid-flow-row gap-3 items-start">
    <section class="lg:col-span-9">
      <HdCard>
        <template #header> 社区动态 </template>
        <template #default>
          <section class="!-my-5">
            <section v-if="page == 1">
              <TopicItem v-for="topic of recommendTopics" :key="topic.id" :item="topic" />
            </section>
            <section>
              <ActivityItem v-for="item of collection.data" :key="item.id" :item="item" />
            </section>
          </section>
        </template>
      </HdCard>
      <Pagination
        :per_page="collection.meta.per_page"
        :total="collection.meta.total"
        @current-change="$router.push({ name: 'home', query: { page: $event } })" />
    </section>

    <section class="lg:w-full lg:col-span-3">
      <Tip />
      <LearningDynamic class="mt-5" />
    </section>
  </main>
</template>

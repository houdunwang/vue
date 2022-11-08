<script setup lang="ts">
import LessonItem from '@/components/lesson-item.vue'
import Pagination from '@/components/pagination.vue'
import SearchBox from '@/components/search-box.vue'
const { findAll, collection } = useLesson()
const route = useRoute()
await findAll(route.query.page)
</script>

<template>
  <main>
    <HdCard>
      <template #header>
        <section class="flex flex-col md:flex-row md:items-center justify-between 2xl:gap-5">
          实战课程
          <SearchBox class="2xl:w-4/12" />
        </section>
      </template>
      <section class="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white rounded-md" v-if="collection">
        <LessonItem v-for="item of collection.data" :key="item.id" :item="item" />
      </section>
    </HdCard>
    <Pagination
      v-if="collection"
      :per_page="collection.meta.per_page"
      :total="collection.meta.total"
      @current-change="$router.push({ name: 'lesson', query: { page: $event } })" />
  </main>
</template>

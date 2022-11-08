<script setup lang="ts">
import dayjs from 'dayjs'

const { item } = defineProps<{
  item: ActivityModel
}>()
const route = computed(() => {
  switch (item.subject_type) {
    case 'App\\Models\\Topic':
      return { name: 'topic.show', params: { id: item.subject_id } }
    case 'App\\Models\\Lesson':
      return { name: 'lesson.show', params: { id: item.subject_id } }
    case 'App\\Models\\Sign':
      return { name: 'sign' }
    case 'App\\Models\\Question':
      return { name: 'question.show', params: { id: item.subject_id } }
    case 'App\\Models\\Comment':
      return {
        name: `${item.properties.model}.show`,
        params: { id: item.properties.id },
        query: { commentId: item.subject_id },
      }
  }
})
</script>

<template>
  <main class="py-5 border-b flex gap-3 items-stretch">
    <HdUserAvatar :user="item.user" />
    <div class="flex flex-col justify-between overflow-hidden">
      <router-link :to="route!" class="font-bold opacity-90 truncate">
        {{ item.description }}
      </router-link>
      <div class="text-sm flex gap-2 font-light">
        <el-tag type="danger" size="small" effect="dark" v-if="item.subject_type == 'App\\Models\\Topic'">贴子</el-tag>
        <el-tag type="success" size="small" effect="dark" v-if="item.subject_type == 'App\\Models\\Lesson'">
          课程
        </el-tag>
        <el-tag type="warning" size="small" effect="dark" v-if="item.subject_type == 'App\\Models\\Sign'">
          签到
        </el-tag>
        <el-tag type="success" size="small" effect="dark" v-if="item.subject_type == 'App\\Models\\Comment'">
          评论
        </el-tag>
        <el-tag type="success" size="small" effect="dark" v-if="item.subject_type == 'App\\Models\\Question'">
          考试题
        </el-tag>
        <router-link
          :to="{ name: 'sign.space', params: { uid: item.user.id } }"
          class="text-indigo-800 font-bold opacity-70">
          {{ item.user.name }}
        </router-link>
        <span>更新于 {{ dayjs(item.updated_at).fromNow() }}</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
// a.description {
//   overflow-wrap: break-word;
//   width: 100%;
// }
</style>

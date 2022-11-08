<script setup lang="ts">
import dayjs from 'dayjs'

const { item } = defineProps<{
  item: TopicModel
}>()
</script>

<template>
  <main class="py-5 border-b flex gap-3 items-stretch">
    <HdUserAvatar :user="item.user" v-if="item.user" />
    <div class="flex flex-col justify-between">
      <router-link
        :to="{ name: 'topic.show', params: { id: item.id } }"
        class="font-bold opacity-90 flex items-center gap-2">
        <el-tag type="danger" size="small" effect="dark" v-if="item.recommend">推荐</el-tag>
        {{ item.title }}
      </router-link>
      <div class="text-sm flex gap-3 font-light">
        <router-link
          :to="{ name: 'sign.space', params: { uid: item.user_id } }"
          custom
          #default="{ href }"
          v-if="item.user">
          <a :href="href" class="text-indigo-800 font-bold opacity-70">{{ item.user.name }}</a>
        </router-link>
        <span class="hidden md:inline">更新于 {{ dayjs(item.updated_at).fromNow() }}</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>

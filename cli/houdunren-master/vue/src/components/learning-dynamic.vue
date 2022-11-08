<script setup lang="ts">
import dayjs from 'dayjs'
const { videoDynamics } = useLearnHistory()
const collection = await videoDynamics()

const timeId = setInterval(() => videoDynamics(), 60000)
onUnmounted(() => clearInterval(timeId))
</script>

<template>
  <HdCard>
    <template #header> 学习动态 </template>
    <template #default>
      <div class="!-my-5">
        <section v-for="item of collection.data" :key="item.id" class="border-b flex py-3 gap-3 items-stretch">
          <HdUserAvatar :user="item.user" />
          <div class="flex flex-col justify-between">
            <router-link :to="{ name: 'video.show', params: { id: item.video.id } }">
              {{ item.video.title.replace(/^\d+\s*/, '') }}
            </router-link>
            <small class="text-gray-800">
              <router-link :to="{ name: 'sign.space', params: { uid: item.user.id } }">
                {{ item.user.name }}
              </router-link>
              {{ dayjs(item.updated_at).fromNow() }}学习
            </small>
          </div>
        </section>
      </div>
    </template>
  </HdCard>
</template>

<style lang="scss"></style>

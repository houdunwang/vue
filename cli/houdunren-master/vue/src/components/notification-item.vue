<script setup lang="ts">
import router from '@/router'
import dayjs from 'dayjs'

const { item } = defineProps<{
  item: NotificationModel
}>()
const { read } = useNotification()
const isShow = ref(true)
const redirect = async (notification: NotificationModel) => {
  await read(notification)
  if (notification.data.type == 'comment') {
    const route = router.resolve({
      name: notification.data.model + '.show',
      params: { id: notification.data.model_id },
      query: { commentId: notification.data.id },
    })
    isShow.value = false
    window.open(route.fullPath)
  }
}
</script>

<template>
  <main class="flex-1" v-if="isShow">
    <div class="border p-2 flex justify-between cursor-pointer hover:bg-gray-100" @click="redirect(item)">
      <div class="truncate">{{ item.data.title }}</div>
      <span class="text-sm font-light">
        {{ dayjs(item.created_at).fromNow() }}
      </span>
    </div>
  </main>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import NotificationItem from './notification-item.vue'
const { collection, findAll } = useNotification()

findAll(1, 'unread')
const time = setInterval(() => findAll(1, 'unread'), 60000)
onUnmounted(() => clearInterval(time))
</script>

<template>
  <main class="max-w-[300px]">
    <el-dropdown trigger="hover" v-if="collection?.data.length">
      <icon-message-one theme="outline" size="24" class="cursor-pointer text-[#27ae60]" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="notification of collection.data" :key="notification.id">
            <notification-item :item="notification" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </main>
</template>

<style lang="scss"></style>

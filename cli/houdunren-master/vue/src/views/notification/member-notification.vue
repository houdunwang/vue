<script setup lang="ts">
import NotificationItem from '@/components/notification-item.vue'
const route = useRoute()
const { collection, findAll } = useNotification()

await findAll(route.query.page || 1, 'unread')
const tab = ref('unread')

const change = async (name: any) => {
  await findAll(1, name)
}
</script>

<template>
  <main>
    <el-tabs v-model="tab" type="card" tab-position="top" @tab-change="change">
      <el-tab-pane label="未读消息" name="unread"> </el-tab-pane>
      <el-tab-pane label="已读消息" name="read"> </el-tab-pane>
    </el-tabs>
    <section class="" v-if="collection.data.length">
      <NotificationItem
        v-for="notification of collection.data"
        :key="notification.id"
        :item="notification"
        class="py-1 text-sm" />
    </section>
    <section class="border p-5 bg-white flex items-center" v-else>
      <icon-info theme="outline" size="18" fill="#333" class="mr-2" /> 暂无新消息
    </section>

    <Pagination
      v-if="collection"
      :per_page="collection.meta.per_page"
      :total="collection.meta.total"
      @current-change="$router.push({ name: 'notification.member.index', query: { page: $event } })" />
  </main>
</template>

<style lang="scss"></style>

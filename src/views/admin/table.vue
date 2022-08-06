<script setup lang="ts">
import { userList } from '@/apis/user'
import TableComponent from '@/components/hd/tableComponent.vue'
import { userTableColumns } from '@/config/table'
import Pagination from '@/components/hd/pagination.vue'

const result = await userList()
console.log(result)
</script>

<template>
  <TableComponent
    :data="result.data.splice(0, 10)"
    :columns="userTableColumns"
    :button-type="'default'"
    :buttons="[
      { title: '查看', type: 'success' },
      { title: '删除', type: 'danger' },
    ]" />

  <Pagination :total="result.meta.total" :size="10" class="bg-white !py-2 rounded-sm rounded-md" />
</template>

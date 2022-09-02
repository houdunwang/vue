<script setup lang="ts">
import { userList } from '@/apis/user'
import { userTableColumns } from '@/config/table'

const result = await userList()
</script>

<template>
  <div class="">
    <HdTableRender
      :data="result.data.splice(0, 10)"
      :columns="userTableColumns"
      :button-type="'default'"
      :buttons="[
        { title: '查看', type: 'success' },
        { title: '删除', type: 'danger' },
      ]" />

    <el-pagination
      background
      layout="prev, pager, next"
      :total="result.meta.total"
      :hide-on-single-page="true"
      @current-change="userList"
      :page-size="10"
      class="bg-white !py-2 rounded-md" />
  </div>
</template>

<script setup lang="ts">
import SystemItem from '@/components/system-item.vue'
import draggable from 'vuedraggable'
const route = useRoute()
const { collection, findAll, order } = useSystem()
const type = ref(route.query.type || 'project')
await findAll(1, { type: type.value })
</script>

<template>
  <HdCard>
    <template #header>
      <div class="flex justify-between items-center">
        <div class="">
          <el-button
            :type="type == 'system' ? 'primary' : 'info'"
            size="default"
            @click="$router.push({ name: 'system.admin', query: { type: 'system' } })">
            系统课程
          </el-button>
          <el-button
            :type="type == 'project' ? 'primary' : 'info'"
            size="default"
            @click="$router.push({ name: 'system.admin', query: { type: 'project' } })">
            实战项目
          </el-button>
        </div>
        <el-button type="success" size="default" @click="$router.push({ name: 'system.create' })"> 添加课程 </el-button>
      </div>
    </template>
    <template #default>
      <draggable
        v-model="collection"
        group="people"
        @end="order(collection!)"
        item-key="id"
        class="grid 2xl:grid-cols-6 gap-3 p-5">
        <template #item="{ element }">
          <SystemItem :item="element">
            <template #footer> </template>
          </SystemItem>
        </template>
      </draggable>
    </template>
  </HdCard>
</template>

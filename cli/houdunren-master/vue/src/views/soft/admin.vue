<script setup lang="ts">
const { collection, findAll, remove } = useSoft()
const route = useRoute()
const page = ref(route.query.page || 1)
await findAll(page.value)
</script>

<template>
  <main class="w-page m-auto mt-10">
    <HdCard>
      <template #header>
        <div class="">软件列表</div>
      </template>
      <section class="grid grid-cols-6 gap-5 p-5" v-if="collection.data.length">
        <div class="flex flex-col border" v-for="soft of collection.data" :key="soft.id">
          <el-image :src="soft.preview" fit="cover" class="h-32" :lazy="true"></el-image>
          <h2 class="truncate p-3 text-center">{{ soft.title }}</h2>
          <div class="p-2 flex justify-center border-t bg-gray-100">
            <el-button
              type="primary"
              size="small"
              @click="$router.push({ name: 'soft.admin.edit', params: { id: soft.id } })">
              编辑
            </el-button>
            <el-button type="danger" size="small" @click="remove(soft.id)">删除</el-button>
          </div>
        </div>
      </section>
      <section class="p-3 flex justify-center pb-8" v-else>
        <el-tag type="success" size="small" effect="dark">软件即将更新...</el-tag>
      </section>
    </HdCard>
  </main>
</template>

<style lang="scss"></style>

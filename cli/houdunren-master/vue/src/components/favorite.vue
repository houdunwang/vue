<script setup lang="ts">
const { type, mid } = defineProps<{
  type: string
  mid: any
}>()

const { toggleFavorite, favorite, find } = useFavorite()

find(type, mid)
</script>

<template>
  <main v-if="favorite" class="flex gap-1">
    <el-button type="danger" size="default" @click="toggleFavorite(type, mid)" v-if="favorite.state" v-bind="$attrs">
      <icon-like theme="filled" class="mr-1 text-yellow-100" />
      已经收藏了
    </el-button>

    <el-button plain type="info" size="" @click="toggleFavorite(type, mid)" v-else v-bind="$attrs">
      <icon-like theme="outline" class="mr-1" />收藏
    </el-button>
  </main>
</template>

<style lang="scss"></style>

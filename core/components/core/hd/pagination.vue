<script setup lang="ts">
const { total, size } = defineProps<{
  total: any
  size: any
}>()

defineEmits(['change'])
</script>

<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :hide-on-single-page="true"
    :page-size="size"
    @current-change="$emit('change', $event)"
    class="mt-3" />
</template>

<style lang="scss"></style>

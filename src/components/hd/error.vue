<script setup lang="ts">
import errorStore from '@/store/errorStore'

const { name } = defineProps<{ name: string }>()
const store = errorStore()
</script>

<template>
  <div class="hd-error" v-show="store.getError(name)">
    {{ store.getError(name) }}
  </div>
</template>

<style lang="scss" scoped>
.hd-error {
  @apply rounded-md bg-pink-500 text-white text-xs px-2 py-1 mt-2;
}
</style>

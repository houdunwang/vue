<script setup lang="ts">
import errorStore from '@/store/useErrorStore.js'
const { name } = defineProps<{ name: string }>()
const store = errorStore()
</script>

<template>
  <div class="hd-error" v-show="store.getError(name)">
    <icon-info theme="outline" />
    {{ store.getError(name) }}
  </div>
</template>

<style lang="scss" scoped>
.hd-error {
  @apply rounded-sm bg-[#e74c3c] text-white py-1 px-2 text-xs mt-1 opacity-60  font-bold flex items-center gap-1;
}
</style>

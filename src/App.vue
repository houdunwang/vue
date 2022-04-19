<script setup lang="ts">
import { ElLoading } from 'element-plus'

const loadingInstance = ElLoading.service({
  background: 'rgba(0, 0, 0, 0.6)',
})
const resolve = () => {
  loadingInstance.close()
}
</script>

<template>
  <router-view #default="{ Component }">
    <suspense @resolve="resolve">
      <template #default>
        <component :is="Component" />
      </template>
    </suspense>
  </router-view>
</template>

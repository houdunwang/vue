<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import useUtil from '@/composables/hd/useUtil'
const init = ref(false)
useUtil()
  .initSite()
  .then(() => (init.value = true))
</script>

<template>
  <main v-if="init">
    <ElConfigProvider :locale="zhCn">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <component :is="Component"></component>
        </template>
      </RouterView>
    </ElConfigProvider>
  </main>
</template>

<script setup lang="ts">
import siteStore from '@/store/siteStore'

const store = siteStore()
await store.getCurrentSite()
</script>

<template>
  <router-view />
</template>

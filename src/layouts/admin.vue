<script setup lang="ts">
import CoreAdmin from '#/layouts/admin.vue'
import siteStore from '#/store/siteStore'

const store = siteStore()
await store.getCurrentSite()
</script>

<template>
  <CoreAdmin />
</template>

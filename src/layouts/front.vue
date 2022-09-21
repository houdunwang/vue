<script setup lang="ts">
import userStore from '@/store/userStore'

const { getCurrentUser } = userStore()
await getCurrentUser()
</script>

<template>
  <router-view />
</template>

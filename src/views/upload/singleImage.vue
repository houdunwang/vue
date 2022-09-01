<script setup lang="ts">
import SingleImage from '@/components/upload/singleImage.vue'
const file = ref('')
</script>

<template>
  <SingleImage v-model="file" />
</template>

<style lang="scss"></style>

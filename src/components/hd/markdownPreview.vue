<script setup lang="ts">
import VMdPreview from '@kangc/v-md-editor/lib/preview'

const { text } = defineProps<{
  text: string
}>()
</script>

<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<style lang="scss"></style>

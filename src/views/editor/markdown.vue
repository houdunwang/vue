<script setup lang="ts">
const text = ref('')
</script>

<template>
  <main>
    <HdMarkdown v-model="text" />
    <div class="p-3 border bg-gray-100">
      {{ text }}
    </div>
  </main>
</template>

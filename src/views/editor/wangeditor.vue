<script setup lang="ts">
import { ref } from 'vue'
const content = ref('后盾人')
</script>

<template>
  <div class>
    <HdWangEditor v-model="content" :height="300" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>

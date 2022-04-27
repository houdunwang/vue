<script setup lang="ts">
import { ref } from 'vue'
const content = ref('<p>后盾人</p>')
</script>

<template>
  <div class>
    <EditorWangEditor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>

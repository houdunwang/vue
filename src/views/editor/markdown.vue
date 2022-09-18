<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const previewContent = ref(`#后盾人
| props   | 说明       |
| ------- | ---------- |
| v-model | 编辑器数据 |`)
</script>

<template>
  <main>
    <HdMarkdown v-model="text" />
    <div class="p-3 border bg-gray-100">
      {{ text }}
    </div>

    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header> 预览 </template>
      <HdMarkdownPreview :text="previewContent" />
    </el-card>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const previewContent = ref(`#后盾人

> 向军大叔每晚八点在 [抖音](https://live.douyin.com/houdunren) 和 [bilibli](https://space.bilibili.com/282190994) 直播

| props   | 说明       |
| ------- | ---------- |
| v-model | 编辑器数据 |`)
</script>

<template>
  <main>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header> 编辑器 </template>
      <HdMarkdown v-model="text" />
      <div class="p-3 border bg-white mt-3">
        {{ text }}
      </div>
    </el-card>

    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
      <template #header> 预览 </template>
      <HdMarkdownPreview :text="previewContent" />
    </el-card>
  </main>
</template>

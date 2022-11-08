<script setup lang="ts">
const { add } = useSoft()
const form = reactive({ title: '', file: '', preview: '', content: '' })
</script>

<template>
  <HdCard>
    <template #header> 发布软件 </template>
    <section class="p-5">
      <el-form label-width="80px" :inline="false" size="large" label-position="top">
        <el-form-item label="软件名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="软件图片">
          <HdUploadSingleImage v-model="form.preview" />
        </el-form-item>
        <el-form-item label="压缩包链接">
          <el-input v-model="form.file"></el-input>
        </el-form-item>
        <el-form-item label="软件介绍">
          <HdMarkdownEditor v-model="form.content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add(form)">立即创建</el-button>
        </el-form-item>
      </el-form>
    </section>
  </HdCard>
</template>

<style lang="scss"></style>

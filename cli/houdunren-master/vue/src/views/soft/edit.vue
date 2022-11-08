<script setup lang="ts">
const route = useRoute()
const { update, findOne, model: form } = useSoft()
await findOne(route.params.id)
</script>

<template>
  <HdCard>
    <template #header> 编辑软件 </template>
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
          <HdMarkdownPreview v-model="form.content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="update(form)">保存提交</el-button>
        </el-form-item>
      </el-form>
    </section>
  </HdCard>
</template>

<style lang="scss"></style>

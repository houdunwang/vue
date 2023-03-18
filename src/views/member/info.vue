<script setup lang="ts">
const tab = ref('password')
</script>

<template>
  <main>
    <el-tabs v-model="tab" type="card" tab-position="top" @tab-click="">
      <el-tab-pane label="修改密码" name="password">
        <el-form label-width="80px" class="border p-5 rounded-lg">
          <el-form-item label="昵称">
            <el-input placeholder="起个有个性的昵称吧"></el-input>
            <HdError name="name" />
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input placeholder="用于活动邮寄礼品使用"></el-input>
            <HdError name="name" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input placeholder="用于参与网站活动，邮寄礼品等场景使用。请输入详细地址，包含省市县"></el-input>
            <HdError name="address" />
          </el-form-item>
          <el-form-item label="个人网站">
            <el-input>你的个人网站</el-input>
            <HdError name="home" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary">确定修改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="设置头像" name="avatar">
        <el-form label-width="80px" :inline="false" size="large" class="border p-5 rounded-2xl">
          <!-- <HdUploadSingleImage v-model="form.avatar" url="upload/avatar" @finish="avatarFinish" /> -->
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script setup lang="ts">
const tab = ref('password')
const form = reactive({ password: '', password_confirmation: '' })
</script>

<template>
  <main>
    <el-tabs v-model="tab" type="card" tab-position="top" @tab-click="">
      <el-tab-pane label="修改密码" name="password">
        <el-form label-width="80px" class="border p-5 rounded-lg">
          <el-form-item label="新密码">
            <el-input type="password" v-model="form.password"></el-input>
            <HdError name="password" />
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="form.password_confirmation"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">确定修改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<style lang="scss"></style>

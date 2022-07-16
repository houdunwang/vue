<script setup lang="ts">
import { databaseLinkTest } from '@/apis/install'
import router from '@/router/register'
import { ElMessage } from 'element-plus'
import Step from './step.vue'
const form = reactive({
  app: {
    name: '后盾人',
  },
  database: {
    host: '127.0.0.1',
    port: '3306',
    database: '',
    username: 'root',
    password: 'admin888',
  },
})

const onSubmit = async () => {
  try {
    await databaseLinkTest(form)
    ElMessage.success('数据库连接成功')
    router.push({ name: 'install.migrate' })
  } catch (error) {}
}
</script>

<template>
  <main>
    <section>
      <Step :step="2" />

      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header> 网站信息 </template>
        <el-form :model="form" label-width="80px" :inline="false" size="large">
          <el-form-item label="网站名称">
            <el-input v-model="form.app.name"></el-input>
          </el-form-item>
          <el-form-item label="主机">
            <el-input v-model="form.database.host"></el-input>
          </el-form-item>
          <el-form-item label="数据库">
            <el-input v-model="form.database.database"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.database.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.database.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="$router.go(-1)">上一步</el-button>
            <el-button type="primary" @click="onSubmit">测试连接</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply bg-gray-800 w-screen h-screen;
  section {
    @apply w-[800px] flex justify-center flex-col m-auto;
  }
}
</style>

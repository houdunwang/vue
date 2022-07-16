<script setup lang="ts">
import { RouteEnum } from '@/enum/RouteEnum'
import router from '@/router/register'
const route = router.currentRoute
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ name: RouteEnum.HOME }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: r.path }" v-for="(r, index) of route?.matched" :key="index">
      {{ r.meta.menu?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

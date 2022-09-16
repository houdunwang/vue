<script setup lang="ts">
import { RouteName } from '@/enum/RouteName'
import router from '@/router'
const route = router.currentRoute
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ name: RouteName.HOME }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: r.path }" v-for="(r, index) of route?.matched" :key="index">
      {{ r.meta.menu?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

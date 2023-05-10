<script setup lang="ts"></script>

<template>
  <div class="flex gap-2 justify-center mt-5">
    <router-link v-if="$route.name != RouteEnum.LOGIN" :to="{ name: RouteEnum.LOGIN }" class="text-xs text-gray-700">
      用户登录
    </router-link>
    <router-link
      v-if="$route.name != RouteEnum.REGISTER"
      :to="{ name: RouteEnum.REGISTER }"
      class="text-xs text-gray-700">
      会员注册
    </router-link>
    <router-link
      v-if="$route.name != RouteEnum.FORGOT_PASSWORD"
      :to="{ name: RouteEnum.FORGOT_PASSWORD }"
      class="text-xs text-gray-700">
      找回密码
    </router-link>
    <a href="/" class="text-xs text-gray-700">网站首页</a>
  </div>
</template>

<style lang="scss"></style>

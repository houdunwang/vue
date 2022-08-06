<script setup lang="ts"></script>

<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
const { user } = defineProps<{ user: UserModel }>()
</script>

<template>
  <router-link :to="{ name: 'sign.space', params: { uid: user.id } }">
    <el-image
      :src="user.avatar"
      fit="cover"
      :lazy="true"
      class="w-12 h-12 rounded-md cursor-pointer flex-shrink-0"
      v-bind="$attrs" />
  </router-link>
</template>

<script setup lang="ts">
const { download_address = '' } = defineProps<{
  download_address?: string
}>()

const dialog = ref(false)
</script>

<template>
  <main class="">
    <el-dialog title="下载地址" v-model="dialog">
      <div class="">
        {{ download_address }}
      </div>
    </el-dialog>

    <el-button type="primary" @click="dialog = true" v-bind="$attrs" v-if="download_address">
      <icon-download-one theme="outline" class="mr-1" />下载高清视频
    </el-button>
  </main>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import useConfigStore from '@/store/hd/useConfigStore'
const configStore = useConfigStore()
</script>

<template>
  <HdCard>
    <template #header> 社区小贴 </template>
    <template #default>
      <div class="mb-3 font-normal text-base">
        {{ configStore.config.base.name }}是一个主张友好、分享、自由的技术交流社区。
      </div>
      <div class="text-center">
        <span class="text-base font-normal">请记住我们的口号</span>
        <div class="text-orange-600 font-bold">{{ configStore.config.base.ad }}</div>
      </div>
    </template>
    <template #footer>
      <div class="flex items-center gap-2 justify-center">
        <router-link :to="{ name: 'topic.create' }">
          <el-button type="primary" size="default"> 发贴交流 </el-button>
        </router-link>
        <router-link :to="{ name: 'sign' }">
          <el-button type="success" size="default"> 签到打卡 </el-button>
        </router-link>
      </div>
    </template>
  </HdCard>
</template>

<style lang="scss"></style>

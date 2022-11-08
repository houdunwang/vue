<script setup lang="ts">
import Footer from './components/footer.vue'
import useUtil from '@/composables/hd/useUtil'
import WechatLogin from '@/components/wechat-login.vue'

const { isWechat } = useUtil()
if (isWechat()) {
  location.href = `/wechat/app/autologin`
}
</script>

<template>
  <div class="flex md:mt-32 mt-16 w-[400px] m-auto mb-32 border bg-gray-50 rounded-2xl shadow-lg" v-if="!isWechat()">
    <div class="p-6 flex flex-col justify-between">
      <h2 class="text-center text-gray-700 text-lg mt-3">微信登录</h2>
      <div class="mt-8 flex justify-center flex-col">
        <WechatLogin :use-dialog="false" type="register" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

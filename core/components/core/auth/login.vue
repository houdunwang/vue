<script setup lang="ts">
import { login } from '@@/apis/auth'
import useCaptcha from '@@/composables/useCaptcha'
import errorStore from '@@/store/errorStore'
import env from '@@/utils/env'
import { loginCallback, request } from '@@/utils/helper'
import Footer from './footer.vue'

const form = reactive({ account: '2300071698@qq.com', password: 'admin888', captcha_code: '', captcha_key: '' })

const storeError = errorStore()
const { loadCaptcha } = useCaptcha()

const onSubmit = request(async () => {
  if (!env.VITE_MOCK_ENABLE) loadCaptcha()

  const { data } = await login(form)
  loginCallback(data.token)
})
</script>

<template>
  <form class @submit.prevent="onSubmit">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <CoreFormInputComponent v-model="form.account" placeholder="请输入邮箱或手机号" />
            <CoreFormError name="account" />

            <CoreFormInputComponent
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="请输入登录密码"
              v-clearError="'password'" />
            <CoreFormError name="password" />

            <CoreHdCaptcha
              v-model:captcha_code="form.captcha_code"
              v-model:captcha_key="form.captcha_key"
              v-if="!env.VITE_MOCK_ENABLE"
              class="mt-2" />
          </div>

          <CoreFormButtonComponent class="w-full mt-3 primary">登录</CoreFormButtonComponent>

          <div class="flex justify-center mt-3">
            <icon-wechat
              theme="outline"
              size="24"
              fill="#fff"
              class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <Footer />
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>

<script setup lang="ts">
import WechatAuth from '@/components/wechat-login.vue'
import useAuth from '@/composables/hd/useAuth'
import useUtil from '@/composables/hd/useUtil'
import errorStore from '@/store/hd/useErrorStore'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import { Wechat } from '@icon-park/vue-next'
import Footer from './components/footer.vue'
import WechatLogin from '@/components/wechat-login.vue'

const { login } = useAuth()
const { request, isWechat } = useUtil()
const form = reactive({ account: '', password: null, captcha: '', captcha_key: '' })
const captchaComponent = ref()

const onSubmit = request(async () => {
  if (!form.account || !form.password) return ElMessage.error('帐号和密码不能为空')
  if (!form.captcha) return ElMessage.error('验证码不能为空')
  login(form).finally(() => captchaComponent.value.get())
})
</script>

<template>
  <form class @submit.prevent="onSubmit">
    <div class="w-[800px] md:translate-y-0 bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <HdFormInput
              v-model="form.account"
              placeholder="请输入邮箱或手机号"
              @focus="errorStore().clearError('account')" />
            <HdError name="account" />
            <HdFormInput
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="请输入登录密码"
              @focus="errorStore().clearError('password')"
              v-clearError="'password'" />
            <HdError name="password" />
          </div>
          <Captcha
            v-model:captcha="form.captcha"
            v-model:captcha_key="form.captcha_key"
            class="mt-3 captcha"
            ref="captchaComponent" />
          <div class="flex flex-col items-center">
            <HdFormButton class="w-full mt-3 primary">登录</HdFormButton>
            <a
              class="bg-green-700 rounded-full w-8 h-8 cursor-pointer flex justify-center items-center mt-3"
              v-if="isWechat()"
              href="/wechat/app/autologin">
              <wechat theme="outline" size="24" class="text-white" />
            </a>
            <WechatLogin class="mt-5" :use-dialog="true" type="login" v-else />
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
  @apply flex justify-center items-start md:items-center p-5;
}
</style>

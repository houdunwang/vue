<script setup lang="ts">
import useAuth from '@/composables/hd/useAuth'
import { Wechat } from '@icon-park/vue-next'
import { reactive } from 'vue'
import Footer from './components/footer.vue'
import CodeSend from '@/components/hd/codeSend.vue'
import useUtil from '@/composables/hd/useUtil'

const { isWechat } = useUtil()

const { forgetPassword } = useAuth()

const form = reactive({
  account: '',
  password: 'admin888',
  password_confirmation: 'admin888',
  code: '',
})

const onSubmit = async () => {
  await forgetPassword(form)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="w-[800px] bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">找回密码</h2>

          <div class="mt-5">
            <HdFormInput
              v-model="form.account"
              class="mt-3"
              placeholder="请输入登录邮箱或手机号"
              v-clearError="'account'" />
            <HdError name="account" />
            <CodeSend v-model:code="form.code" v-model:account="form.account" type="exists" class="mt-3" />
            <HdFormInput
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="密码"
              v-clearError="'password'" />
            <HdError name="password" />

            <HdFormInput
              v-model="form.password_confirmation"
              class="mt-3"
              type="password"
              placeholder="确认密码"
              v-clearError="'password_confirmation'" />
          </div>

          <HdFormButton class="w-full primary mt-2">确定修改</HdFormButton>

          <div class="flex justify-center mt-3">
            <a
              class="bg-green-700 rounded-full w-8 h-8 cursor-pointer flex justify-center items-center mt-3"
              v-if="isWechat()"
              href="/wechat/app/autologin">
              <wechat theme="outline" size="24" class="text-white" />
            </a>
            <Wechat
              v-else
              theme="outline"
              size="24"
              fill="#fff"
              class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <Footer />
      </div>
      <div class="hidden md:block relative">
        <img src="/images/forget-password.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply flex justify-center items-start md:items-center p-5;
}
</style>

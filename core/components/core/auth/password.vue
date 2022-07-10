<script setup lang="ts">
import { forgetPassword } from '#/apis/auth'
import errorStore from '#/store/errorStore'
import Footer from './footer.vue'

const form = reactive({
  account: '2300071698@qq.com',
  password: 'admin888',
  password_confirmation: 'admin888',
  code: '',
})

const store = errorStore()

watch(form, () => store.resetError())

const onSubmit = async () => {
  await forgetPassword(form)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">找回密码</h2>
          <div class="mt-8">
            <CoreFormInputComponent v-model="form.account" placeholder="邮箱或手机号" v-clearError="'account'" />
            <CoreFormError name="account" />

            <CoreFormInputComponent v-model="form.password" class="mt-3" type="password" placeholder="请输入新密码" />
            <CoreFormError name="password" />

            <CoreFormInputComponent
              v-model="form.password_confirmation"
              class="mt-3"
              type="password"
              placeholder="再次输入密码" />

            <HdValidateCode class="mt-2" :account="form.account" v-model:code="form.code" type="exist" />
          </div>

          <CoreFormButtonComponent class="w-full primary mt-2" :disabled="store.hasError"
            >确定修改</CoreFormButtonComponent
          >

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
        <img src="/images/forget-password.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>

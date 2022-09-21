<script setup lang="ts">
import useAuth from '@/composables/useAuth'
import errorStore from '@/store/errorStore'
import { Wechat } from '@icon-park/vue-next'
import { reactive, watch } from 'vue'
import Footer from './components/footer.vue'
const { register } = useAuth()

const form = reactive({
  mobile: '199999999999',
  password: 'admin888',
  password_confirmation: 'admin888',
  code: '',
})

const store = errorStore()

watch(form, () => store.resetError())

const onSubmit = async () => {
  await register(form)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">会员注册</h2>
          <div class="mt-8">
            <FormInputComponent v-model="form.mobile" placeholder="请输入手机号" v-clearError="'account'" />
            <HdError name="account" />

            <FormInputComponent v-model="form.password" class="mt-3" type="password" placeholder="密码" />
            <HdError name="password" />

            <FormInputComponent
              v-model="form.password_confirmation"
              class="mt-3"
              type="password"
              placeholder="确认密码" />
          </div>

          <FormButtonComponent class="w-full primary mt-2">注册</FormButtonComponent>

          <div class="flex justify-center mt-3">
            <Wechat
              theme="outline"
              size="24"
              fill="#fff"
              class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <Footer />
      </div>
      <div class="hidden md:block relative">
        <img src="/images/register.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>

<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import errorStore from '@/store/hd/useErrorStore'
import { ElMessage } from 'element-plus'
import Captcha from './captcha.vue'
const { isLogin } = useUtil()

const { add } = useSign()
const form = reactive({ content: '', mood: '', captcha_key: '', captcha: '' })
const signs = ['ch', 'fd', 'kx', 'ng', 'nu', 'shuai', 'wl', 'yl', 'ym']
const captchaComponent = ref()
const onSubmit = async () => {
  if (form.content.length < 5) return ElMessage.error('签到内容不能少于5个字')
  if (!form.captcha) return ElMessage.error('请输入验证码')
  if (!form.mood) return ElMessage.error('请选择心情')
  add(form)
    .then(() => location.reload())
    .finally(() => captchaComponent.value.get())
}
</script>

<template>
  <main>
    <HdCard v-if="isLogin()">
      <template #header> 签到快乐，再接再厉 </template>
      <div class="">
        <div class="2xl:w-2/3 px-5">
          <div class="mt-3">
            <el-input
              v-model="form.content"
              type="success"
              size="large"
              class="focus:ring-emerald-600"
              @focus="errorStore().clearError('content')"
              placeholder="你今天的心情或最想说的话" />
            <HdError name="content" />
            <Captcha
              v-model:captcha="form.captcha"
              v-model:captcha_key="form.captcha_key"
              class="mt-3 captcha"
              ref="captchaComponent" />
          </div>
          <div class="flex flex-col gap-3 mt-3 bg-white">
            <div class="flex flex-wrap gap-3" @click="errorStore().clearError('mood')">
              <el-image
                class="border-4 rounded-2xl w-12 h-12 box-content p-1 cursor-pointer hover:border-red-500 duration-300"
                :class="{ 'border-red-500': sign == form.mood }"
                @click="form.mood = sign"
                :src="`/assets/sign/${sign}.gif`"
                fit="cover"
                :lazy="true"
                v-for="(sign, index) of signs"
                :key="index" />
            </div>
            <HdError name="mood" />
          </div>
        </div>
        <div class="bg-gray-100 border-t p-5 py-3 mt-3 flex items-center">
          <el-button type="success" size="large" @click="onSubmit">开始签到</el-button>
          <span class="text-s text-gray-500 ml-3 flex items-center">
            <icon-alarm theme="outline" size="24" fill="#7ed321" class="mr-1" />
            无意义的灌水内容会被删除的
          </span>
        </div>
      </div>
    </HdCard>
    <section v-else class="bg-white shadow-sm rounded-lg mb-5 p-5">
      <el-button type="primary" size="default" @click="$router.push({ name: 'login' })">登录后签到</el-button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  @apply shadow-none p-0;
}

:deep(input) {
  border: solid 1px #ddd;
  @apply rounded-md  align-middle px-3 h-12 text-lg  border-gray-200 focus:ring-2 ring-offset-2 ring-violet-600 duration-500 shadow-sm focus:border-white focus:shadow-2xl;
}

:deep(.captcha img) {
  @apply h-12;
}
</style>

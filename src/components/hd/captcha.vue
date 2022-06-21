<script setup lang="ts">
import useCaptcha from '@/composables/useCaptcha'

const props = defineProps({
  captcha_code: String,
  captcha_key: String,
})

const emit = defineEmits(['update:captcha_code', 'update:captcha_key'])

const { captcha, loadCaptcha } = useCaptcha()

const code = ref('')
watch(captcha, () => {
  emit('update:captcha_key', captcha.value?.key)
})

watch(code, () => {
  emit('update:captcha_code', code.value)
})

loadCaptcha()
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <FormInputComponent placeholder="请输入验证码" v-model="code" v-clearError="'captcha_code'" />
      <img :src="captcha?.img" class="rounded-md cursor-pointer ml-1" @click="loadCaptcha" />
    </div>
    <FormError name="captcha_code" />
  </div>
</template>

<style lang="scss"></style>

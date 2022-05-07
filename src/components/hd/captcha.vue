<script setup lang="ts">
import useCaptcha from '@/composables/useCaptcha'

const props = defineProps({
  captcha_code: String,
  captcha_key: String,
})

const emit = defineEmits(['update:captcha_code', 'update:captcha_key'])

const { captcha, loadCaptcha } = useCaptcha()

watch(captcha, () => {
  emit('update:captcha_key', captcha.value?.key)
})

loadCaptcha()
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <FormInput
        placeholder="请输入验证码"
        :value="props.captcha_code"
        v-clearError="'captcha_code'"
        @input="emit('update:captcha_code',($event.target as HTMLInputElement).value)" />
      <img :src="captcha?.img" class="rounded-md cursor-pointer ml-1" @click="loadCaptcha" />
    </div>
    <FormError name="captcha_code" />
  </div>
</template>

<style lang="scss"></style>

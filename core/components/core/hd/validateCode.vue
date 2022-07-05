<script setup lang="ts">
import useCode, { ICodeSendType } from '@@/composables/useCode'

const props = withDefaults(defineProps<{ account: string; code: string; type?: ICodeSendType }>(), {
  account: '',
  code: '',
  type: 'any',
})

const emit = defineEmits(['update:code'])

const { sendCode, sendTime } = useCode()

const timeout = ref(0)

const timeoutId = setInterval(() => (timeout.value = sendTime()), 100)

onUnmounted(() => clearInterval(timeoutId))
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <CoreFormInputComponent
        placeholder="请输入验证码"
        v-model="props.code"
        class="mr-1"
        required
        v-clearError="'code'"
        @input="emit('update:code', ($event.target as HTMLInputElement).value)" />

      <ElButton
        :disabled="timeout > 0"
        @click="() => sendCode(props.account, props.type)"
        class="ml-1"
        plain
        size="large"
        shape="circle">
        <span v-if="timeout > 0">请{{ timeout }}后操作</span>
        <span v-else>发送验证码</span>
      </ElButton>
    </div>
    <CoreFormError name="code" />
  </div>
</template>

<style lang="scss"></style>

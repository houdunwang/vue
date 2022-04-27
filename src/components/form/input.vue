<script setup lang="ts">

const props = defineProps({
  modelValue: String
})
</script>

<template>
  <input
    type="text"
    class="hd-input"
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss">
.hd-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>

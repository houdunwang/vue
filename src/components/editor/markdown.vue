<script setup lang="ts">
import { uploadImage } from '@/apis/upload'
const { modelValue } = defineProps<{
  modelValue: any
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const text = ref(modelValue)

watch(text, (value) => {
  emit('update:modelValue', value)
})

const handleUploadImage = async (event: any, insertImage: any, files: any) => {
  const form = new FormData()
  form.append('file', files[0])
  const { data } = await uploadImage(form)

  insertImage({ url: data.url })
}
</script>

<template>
  <v-md-editor
    :value="modelValue"
    v-model="text"
    :disabled-menus="[]"
    height="400px"
    @upload-image="handleUploadImage" />
</template>

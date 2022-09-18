<script setup lang="ts">
import { uploadImage } from '@/apis/upload'
import { ref, watch } from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'

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
  <VueMarkdownEditor
    :value="modelValue"
    v-model="text"
    :disabled-menus="[]"
    height="400px"
    @upload-image="handleUploadImage" />
</template>

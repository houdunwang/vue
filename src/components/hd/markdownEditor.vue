<script setup lang="ts">
import VueMarkdownEditor from '@kangc/v-md-editor'
const { uploadImage } = useUpload()
const props = withDefaults(
  defineProps<{
    modelValue: any
    height?: number
  }>(),
  {
    height: 300,
  },
)
const { modelValue, height = 400 } = props

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const text = ref(modelValue)
watch(
  () => props.modelValue,
  (content) => {
    text.value = content
  },
)
watch(text, (value) => {
  emit('update:modelValue', value)
})

watch(
  () => modelValue,
  (n) => {
    text.value = n
  },
)

const handleUploadImage = async (event: any, insertImage: any, files: any) => {
  const form = new FormData()
  form.append('file', files[0])
  const { url } = await uploadImage(form)

  insertImage({ url })
}
</script>

<template>
  <VueMarkdownEditor
    :value="modelValue"
    v-model="text"
    :disabled-menus="[]"
    :height="height + 'px'"
    @upload-image="handleUploadImage" />
</template>

<style lang="scss" scoped>
:global(.v-md-editor) {
  box-shadow: none !important;
  @apply border;
}
</style>

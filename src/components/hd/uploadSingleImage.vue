<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
const { uploadImage } = useUpload()

const props = withDefaults(
  defineProps<{
    modelValue: string
    url?: string
    allow_width?: number
    allow_height?: number
    size_error?: string
    name?: string
  }>(),
  { url: `upload/image`, name: 'file', allow_width: 2000, allow_height: 2000, size_error: '文件尺寸过大' },
)

const imageUrl = ref(props.modelValue)
watch(
  () => props.modelValue,
  (url) => {
    imageUrl.value = url
  },
)
const emit = defineEmits<{
  (e: 'update:modelValue', url: string): void
  (e: 'finish'): void
}>()

//文件类型检测
const checkSize = (file: any, callback: (file: any) => void) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (e: any) => {
    const data = e.target.result
    const image = new Image()
    image.src = data
    image.onload = async () => {
      if (image.width > props.allow_width || image.height > props.allow_height) {
        return ElMessage.error(props.size_error)
      }
      callback(file)
    }
  }
}

//上传到服务器
const upload = async (file: any) => {
  const form = new FormData()
  form.append(props.name, file)

  const { url } = await uploadImage(form, props.url + `?name=${props.name}`)
  imageUrl.value = url
  emit('update:modelValue', imageUrl.value!)
  emit('finish')
}

const request = async (options: any) => {
  checkSize(options.file, upload)
}
</script>

<template>
  <el-upload action="" class="avatar-uploader" :http-request="request" :show-file-list="false">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
</template>

<style scoped>
.avatar-uploader .avatar {
  height: 178px;
  display: block;
  @apply bg-gray-200;
}
</style>

<style>
.avatar-uploader .el-upload {
  @apply border;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  min-width: 80px;
  height: 50px;
  text-align: center;
}
</style>

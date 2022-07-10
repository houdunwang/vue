<script lang="ts" setup>
import { uploadImage } from '#/apis/upload'
const { modelValue, height = '300px' } = defineProps<{ modelValue: string; height?: string }>()
const emit = defineEmits(['update:modelValue'])

const editorConfig: Partial<any> = {
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: any) {
        const form = new FormData()
        form.append('file', file, file.name)
        const response = await uploadImage(form)
        insertFn(response.data.url, '', '')
      },
    },
  },
  onChange: (editor: any) => {
    console.log('html', editor.getHtml())
    emit('update:modelValue', editor.getHtml())
  },
}
// 工具栏配置
const toolbarConfig: Partial<any> = {}
const win = window as any

nextTick(() => {
  // 创建编辑器
  const editor = win.wangEditor.createEditor({
    selector: '#editor-container',
    config: editorConfig,
    mode: 'default',
  })
  editor.setHtml(modelValue)
  // 创建工具栏
  const toolbar = win.wangEditor.createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default',
  })
})
</script>

<template>
  <div style="border: 1px solid #ccc">
    <div id="toolbar-container" class="border-b"></div>
    <div id="editor-container" :style="{ height }"></div>
  </div>
</template>

<style lang="scss" scoped>
.w-e-full-screen-container {
  z-index: 9999;
}
</style>

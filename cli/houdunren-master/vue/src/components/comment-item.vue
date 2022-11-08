<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import dayjs from 'dayjs'
import { ElMessageBox } from 'element-plus'
const { request, authorize } = useUtil()
const { add, remove } = useComment()
const { collection, comment, type, mid } = defineProps<{
  type: string
  mid: number
  collection: CommentModel[]
  comment: CommentModel
}>()
//表单数据
const form = reactive({ content: '', comment_id: comment.comment_id || comment.id, reply_user_id: comment.user_id })
//显示文本框DIV
const showInput = ref(false)
//发布
const onSubmit = request(async () => {
  const comment = await add(type, mid, form)
  collection.find((c) => c.id == form.comment_id)?.replys.push(comment)
  showInput.value = false
  form.content = ''
  //滚动到新评论
  nextTick(() => {
    document.querySelector(`#comment${comment.id}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })
})

const del = async (e: MouseEvent) => {
  await ElMessageBox.confirm('确定删除评论吗？')
  await remove(comment.id)
  const el = document.querySelector(`#comment${comment.id}`) as HTMLDivElement
  el.style.display = 'none'
}
</script>

<template>
  <section class="mb-3 overflow-hidden" :id="`comment${comment.id}`">
    <div class="flex items-center justify-between border py-3 px-5 bg-gray-100 border-l border-r">
      <div class="flex gap-2">
        <HdUserAvatar :user="comment.user" />
        <div class="flex flex-col justify-between">
          <div class="flex text-sm font-bold text-gray-500">
            <router-link :to="{ name: 'sign.space', params: { uid: comment.user_id } }">
              {{ comment.user.name }}
            </router-link>
            <div v-if="comment.comment_id" class="flex items-center">
              <icon-right theme="outline" />
              <router-link :to="{ name: 'sign.space', params: { uid: comment.reply_user_id } }">
                {{ comment.reply_user.name }}
              </router-link>
            </div>
          </div>
          <div class="text-gray-700 flex items-center gap-3 text-xs">
            <div class="flex items-center gap-1">
              <icon-time theme="outline" /> {{ dayjs(comment.created_at).fromNow() }}
            </div>
            <a href="javascript:void(0)" class="flex items-center gap-1 cursor-pointer" @click="showInput = !showInput">
              <icon-share-two theme="outline" /> 回复 #{{ comment.id }}
            </a>
          </div>
        </div>
      </div>
      <span
        class="cursor-pointer text-gray-600 hover:text-red-600 text-xs"
        @click="del"
        v-if="authorize(comment.user_id)">
        <icon-delete theme="outline" />
      </span>
    </div>
    <div class="flex flex-col justify-between px-5 opacity-90 border-l border-r border-b bg-gray-50 comment-content">
      <HdMarkdownPreview :text="comment.html" />
    </div>
    <div class="p-5 border-t py-3 input" v-show="showInput">
      <el-input v-model="form.content" :rows="5" type="textarea" placeholder="支持markdown语法" />
      <HdError name="content" />
      <el-button type="primary" size="default" @click="onSubmit" class="mt-2">发表</el-button>
    </div>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.comment-content {
  :deep(pre) {
    @apply md:-mx-5;
    code {
      @apply px-5;
    }
  }
}
</style>

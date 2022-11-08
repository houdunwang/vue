<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import CommentItem from './comment-item.vue'
const route = useRoute()
const { isLogin, request } = useUtil()
const { collection, findAll, add } = useComment()
const { type, mid } = defineProps<{
  type: string
  mid: number
}>()

await findAll(type, mid)

const form = reactive({ content: '' })

const onSubmit = request(async () => {
  const comment = await add(type, mid, form)
  collection.value!.push(comment)
  nextTick(() => {
    document.querySelector(`#comment${comment.id}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    form.content = ''
  })
})

onMounted(() => {
  const id = route.query.commentId
  if (id) {
    ;(document.querySelector(`#comment${id}`) as HTMLDivElement).scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
})

const scrollToEditor = () => {
  ;(document.querySelector('#editor') as HTMLDivElement)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
</script>

<template>
  <HdCard class="col-span-8 mb-5">
    <div
      class="fixed py-2 px-2 flex justify-center items-center bottom-56 right-3 cursor-pointer"
      @click="scrollToEditor">
      <icon-comment theme="filled" size="40" fill="#574b90" />
    </div>
    <template #header> <slot name="header">评论</slot> </template>
    <div v-if="collection">
      <CommentItem
        v-for="comment of collection"
        class="mb-3"
        :key="comment.id"
        :comment="comment"
        :collection="collection"
        :type="type"
        :id="`comment${comment.id}`"
        :mid="mid">
        <div class="border-t" v-show="comment.replys.length">
          <CommentItem
            v-for="reply of comment.replys"
            :key="reply.id"
            :comment="reply"
            :collection="collection"
            :type="type"
            :mid="mid"
            :id="`comment${reply.id}`"
            class="ml-10 my-2 bg-gray-50" />
        </div>
      </CommentItem>
    </div>
    <section v-if="isLogin()" class="mt-5" id="editor">
      <HdMarkdownEditor v-model="form.content" class="border" />
      <el-button type="primary" size="default" @click="onSubmit" class="mt-5">发表评论</el-button>
    </section>
    <section v-else class="flex justify-center mt-5 border">
      <el-button type="primary" size="default" @click="$router.push({ name: 'login' })">请登录后发表评论</el-button>
    </section>
  </HdCard>
</template>

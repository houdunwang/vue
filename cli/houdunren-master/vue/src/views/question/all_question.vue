<script setup lang="ts">
import useQuestion from '@/components/useQuestion'
import useUtil from '@/composables/hd/useUtil'
import Layout from './layout.vue'
import QuestionAvatar from './components/question-avatar.vue'

const util = useUtil()
const { collection, getAllQuestion } = useQuestion()
await getAllQuestion()
</script>

<template>
  <Layout>
    <template #tip> 下面是网站的所有考题，感谢每一位出题的朋友 </template>
    <section v-if="collection">
      <div class="border py-3 px-5 mt-3 bg-white rounded-md" v-for="item of collection.data" :key="item.id">
        <!-- <div class="border-b py-3 mb-3 border-b-gray-200">
          <QuestionAvatar :question="item">
            <el-button
              type="primary"
              size="default"
              plain
              @click="$router.push({ name: 'question.show', params: { id: item.id } })">
              查看考题
            </el-button>
          </QuestionAvatar>
        </div> -->
        <div class="border-b py-3 mb-3 border-b-gray-200">
          <el-button
            type="primary"
            size="default"
            plain
            @click="$router.push({ name: 'question.show', params: { id: item.id } })">
            查看考题
          </el-button>
        </div>
        <div class="truncate cursor-pointer" @click="$router.push({ name: 'question.show', params: { id: item.id } })">
          <HdMarkdownPreview :text="item.html" />
        </div>
      </div>
      <Pagination
        :per_page="collection.meta.per_page"
        :total="collection.meta.total"
        @current-change="$router.push({ name: 'question.all_question', query: { page: $event } })" />
    </section>
  </Layout>
</template>

<style lang="scss" scoped></style>

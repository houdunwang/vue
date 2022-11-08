<script setup lang="ts">
import DownloadLesson from '@/components/download-lesson.vue'
import LessonVideoList from '@/components/lesson-video-list.vue'
import SystemLessonDropdown from '@/components/system-lesson-dropdown.vue'
import useUtil from '@/composables/hd/useUtil'
import useVideo from '@/composables/useVideo'
const { open } = useUtil()
const route = useRoute()
const { findOne, model, nextVideo, preVideo } = useVideo()
await findOne(+route.params.id)

//下一集事件回调
const videoPlayer = ref()
const playNextVideo = (path: string) => {
  const video = model.value.lesson.videos.find((video) => video.path == path)
  if (video) findOne(video.id)
}
</script>

<template>
  <main v-if="model" class="!w-full !p-0 !-mt-0">
    <div class="bg-[#313848] -mt-1 relative" v-if="model.path">
      <HdVideoPlayer
        :url="model.path"
        :urlList="model.lesson.videos.map((v) => v.path) as string[]"
        ref="videoPlayer"
        @playNextVideo="playNextVideo"
        class="2xl:w-page mx-auto" />
    </div>
    <SubscribePay v-else />

    <div class="2xl:w-page 2xl:mx-auto mt-3 border rounded-lg bg-gray-50 p-5 mx-5">
      <h1 class="font-bold text-2xl mb-3 text-gray-700 opacity-90">{{ model.title }}</h1>
      <div class="flex flex-col justify-between items-start xl:flex-row xl:items-center">
        <div class="flex items-center text-gray-500 mb-2 xl:mb-0">
          <el-tag type="warning" size="small" effect="plain" class="mr-2">课程</el-tag>
          <router-link
            :to="{ name: 'system.show', params: { id: model?.lesson.system_id } }"
            v-if="model?.lesson?.system">
            {{ model?.lesson?.system.title }}
          </router-link>
          <div class="flex items-center" v-if="model?.lesson?.system">
            <icon-right theme="outline" />
          </div>
          <router-link :to="{ name: 'lesson.show', params: { id: model?.lesson_id } }">
            {{ model?.lesson.title }}
          </router-link>
        </div>
        <div class="flex flex-col md:flex-row gap-2">
          <div class="flex gap-1">
            <!-- 章节课程列表 -->
            <SystemLessonDropdown :lessons="model.lesson.system?.lessons" v-if="model.lesson.system?.lessons?.length" />
            <!-- 下载视频 -->
            <DownloadLesson :download_address="model?.lesson.system?.download_address" />
          </div>
          <div class="flex gap-2">
            <!-- 收藏  -->
            <Favorite size="default" type="Video" :mid="model.id" />
            <el-button
              :type="preVideo ? 'success' : 'info'"
              size="default"
              v-if="preVideo"
              @click="open({ name: 'video.show', params: { id: preVideo?.id } })">
              上一集
            </el-button>
            <el-button
              :type="nextVideo ? 'success' : 'info'"
              size="default"
              v-if="nextVideo"
              @click="open({ name: 'video.show', params: { id: nextVideo?.id } })"
              class="!ml-0">
              下一集
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <section class="2xl:w-page 2xl:mx-auto pt-5 grid grid-flow-row lg:grid-cols-12 gap-5 mx-5">
      <LessonVideoList
        :lessonId="model.lesson_id"
        :videos="model.lesson.videos"
        class="lg:col-span-4 2xl:col-span-4 md:m-0" />
      <CommentList
        type="Video"
        :mid="model?.id!"
        :key="model.id"
        class="lg:col-span-8 2xl:col-span-8 rounded-xl mx-3 md:m-0" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.bg {
  background: linear-gradient(150deg, #2d1582, #19a0ff);
}
</style>

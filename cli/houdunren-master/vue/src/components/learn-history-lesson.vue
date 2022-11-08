<script setup lang="ts">
import useUserStore from '@/store/hd/useUserStore'
const userStore = useUserStore()
const { userVideos } = useLearnHistory()
const videos = ref<VideoModel[]>()
const load = async () => {
  if (userStore.user?.id) {
    const { data } = await userVideos(userStore.user?.id)
    videos.value = data
  }
}
load()
const timeId = setInterval(load, 30000)
onUnmounted(() => clearInterval(timeId))
</script>

<template>
  <main class="fixed right-3 bottom-40 p-2 cursor-pointer z-20" v-if="videos">
    <el-dropdown trigger="click">
      <icon-play-two theme="filled" size="40" fill="#c44569" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(video, index) of videos" :key="video.id">
            <router-link :to="{ name: 'video.show', params: { id: video.id } }" target="_self">
              {{ video.title.replace(/^\d+\s*/, '') }}
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </main>
</template>

<style lang="scss"></style>

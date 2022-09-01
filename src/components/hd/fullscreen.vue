<script setup lang="ts">
const isFullScreen = ref<boolean>(false)
const fullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}

document.addEventListener('fullscreenchange', (e) => {
  isFullScreen.value = Boolean(document.fullscreenElement)
})
</script>

<template>
  <div class="flex items-center cursor-pointer">
    <icon-off-screen theme="outline" size="18" @click="fullScreen" v-if="isFullScreen" />
    <icon-full-screen-one theme="outline" size="18" @click="fullScreen" v-else />
  </div>
</template>

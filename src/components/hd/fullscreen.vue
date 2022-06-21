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
  <div class="flex items-center text-gray-600">
    <icon-off-screen theme="outline" size="20" @click="fullScreen" class="mr-5" v-if="isFullScreen" />
    <icon-full-screen-one theme="outline" size="20" @click="fullScreen" class="mr-5" v-else />
  </div>
</template>

<style lang="scss"></style>

<script setup lang="ts">
const { show } = useMenu()
watch(show, () => {
  console.log(show.value)
})
</script>

<template>
  <div class="bg-white relative shadow-sm z-50 p-2 border-b-1 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div class="mr-2" @click.stop="show = !show">
        <icon-menu-unfold-one theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-if="show" />
        <icon-menu-fold-one theme="filled" size="24" fill="#10ad57" class="cursor-pointer duration-300" v-else />
      </div>
      <CoreHdBreadcrumb class="hidden md:block" />
    </div>
    <div class="flex justify-center items-center relative cursor-pointer">
      <CoreHdFullscreen class="hidden md:flex" />
      <CoreUserDrop class="text-gray-600" />
    </div>
  </div>
</template>

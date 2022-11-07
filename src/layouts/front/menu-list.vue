<script setup lang="ts">
const router = useRouter()
const active = ref('')
</script>

<template>
  <main>
    <router-link
      :to="{ name: 'home' }"
      :class="{ active: active == 'home' }"
      @click="active = 'home'"
      class="hidden xl:flex 2xl:hidden">
      <icon-home-two theme="filled" size="20" fill="#574b90" />
    </router-link>
    <router-link :to="{ name: 'home' }" :class="{ active: active == 'system' }" @click="active = 'system'">
      系统课程
    </router-link>
    <router-link :to="{ name: 'home' }" :class="{ active: active == 'project' }" @click="active = 'project'">
      实战项目
    </router-link>
    <router-link :to="{ name: 'home' }" :class="{ active: active == 'lesson' }" @click="active = 'lesson'">
      碎片课程
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      :class="{ active: active == 'video' }"
      @click="active = 'video'"
      class="2xl:flex">
      最新更新
    </router-link>
    <router-link :to="{ name: 'home' }" :class="{ active: active == 'topic' }" @click="active = 'topic'">
      话题讨论
    </router-link>
    <router-link :to="{ name: 'home' }" :class="{ active: active == 'sign' }" @click="active = 'sign'">
      签到打卡
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      :class="{ active: active == 'morning' }"
      @click="active = 'morning'"
      class="lg:flex">
      早起少年
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      @click="active = 'subscribe'"
      :class="{ active: active == 'subscribe' }"
      class="2xl:flex items-start gap-1">
      订阅优惠
      <el-tag type="success" size="small" effect="dark">荐</el-tag>
    </router-link>
    <a href="https://doc.houdunren.com" target="_blank" class="flex items-center">
      在线文档
      <icon-doc-detail theme="outline" size="18" fill="#555" />
    </a>
    <router-link
      :to="{ name: 'home' }"
      @click="active = 'shot.comment'"
      :class="{ active: active == 'shot.comment' }"
      class="2xl:flex items-center">
      感谢陪伴
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      @click="active = 'question'"
      :class="{ active: active == 'question' }"
      class="flex items-center">
      金榜题名
      <icon-gold-medal theme="outline" size="20" fill="#d35400" />
    </router-link>

    <div class="" @click.stop="">
      <el-dropdown trigger="click" size="default" class="items-center 2xl:flex">
        <a href="javascript:void(0)" class="text-base"> 更多功能 </a>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="router.push({ name: 'home' })">
              <icon-play theme="outline" size="16" fill="#333" />&nbsp; 晚八点直播
            </el-dropdown-item>
            <el-dropdown-item @click="router.push({ name: 'home' })">
              <icon-folder-download theme="outline" size="16" fill="#333" />&nbsp; 软件下载
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </main>
</template>
<style lang="scss" scoped>
a {
  @apply text-slate-600 hover:text-hd-blue font-bold opacity-90;
  &.active {
    @apply text-hd-blue font-bold opacity-100;
  }
}
</style>

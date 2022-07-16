<script setup lang="ts">
import { RouteEnum } from '@/enum/RouteEnum'
const { routes, show, go } = useMenu()

onMounted(() => {
  document.documentElement.addEventListener('click', (e) => {
    if (document.documentElement.clientWidth < 640) show.value = false
  })
})
</script>

<template>
  <div class="admin-menu">
    <div class="menu" :class="{ hidden: !show }">
      <div class="logo cursor-pointer">
        <icon-application-one
          theme="outline"
          size="18"
          fill="#dcdcdc"
          class="mr-2"
          @click="$router.push({ name: RouteEnum.HOME })" />
        <span class="text-md cursor-pointer" @click="$router.push({ name: RouteEnum.ADMIN })">晚八点直播</span>
      </div>
      <!-- 菜单 -->
      <div class="container">
        <dl v-for="(route, index) of routes" :key="index">
          <dt>
            <section>
              <component :is="route.meta.menu?.icon" size="15" fill="#dcdcdc" class="mr-2" />
              <span class="text-md">{{ route.meta.menu?.title }}</span>
            </section>
          </dt>
          <dd>
            <div
              v-for="(r, key) of route.children"
              :key="key"
              @click="go(r)"
              :class="{ active: $route.name == r.name }"
              v-show="r.meta?.menu">
              {{ r.meta?.menu?.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg block md:hidden"></div>
  </div>
</template>
<style lang="scss">
.admin-menu {
  @apply z-10 bg-gray-800 h-full absolute md:relative overflow-auto;
  .menu {
    @apply z-30 w-[200px];
    .logo {
      @apply text-gray-300 flex items-center p-4;
    }
    .container {
      dl {
        @apply text-gray-300 text-sm relative p-4;
        dt {
          @apply text-sm flex justify-between cursor-pointer items-center opacity-80;
          section {
            @apply flex items-center duration-500;
          }
        }
        dd {
          div {
            @apply opacity-80 text-xs py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 hover:opacity-100 bg-gray-700;
            &.active {
              @apply bg-violet-700 opacity-100;
            }
          }
        }
      }
    }
  }
}
</style>

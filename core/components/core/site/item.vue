<script setup lang="ts">
import { isSuperAdmin } from '@@/utils/helper'
import dayjs from 'dayjs'

const emit = defineEmits(['del'])
const props = defineProps<{ site: SiteModel }>()
</script>

<template>
  <div class="site">
    <header>
      <section>
        <div class="">
          站长: <span>{{ site.master.name }}</span>
        </div>
        <div
          class="ml-2 text-gray-600 font-normal cursor-pointer"
          v-if="site.module"
          @click="$router.push({ name: 'site.module.index', query: { sid: props.site.id } })">
          <el-tag type="success" size="small" effect="dark">{{ site.module.title }}</el-tag>
        </div>
      </section>
      <section
        class="cursor-pointer"
        @click="$router.push({ name: 'site.module.index', query: { sid: props.site.id } })">
        <icon-config theme="outline" fill="#333" strokeLinejoin="bevel" strokeLinecap="butt" class="mr-1" />
        扩展模块
      </section>
    </header>
    <main>
      <el-image :src="props.site.logo" fit="cover" :lazy="true" class="w-10 rounded-md" v-if="props.site.logo" />
      <icon-connection-point theme="filled" :strokeWidth="2" v-else />
      <span class="truncate w-60 overflow-hidden block"> {{ props.site.title }} </span>
    </main>
    <footer class="">
      <section class="flex font-bold">
        #{{ props.site.id }} 创建时间
        <span class="flex justify-center items-center ml-1">
          <icon-time theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" class="mr-1" />
          {{ dayjs(props.site.created_at).format('YYYY-MM-DD HH:mm') }}
        </span>
      </section>

      <section class="footer-menu">
        <a :href="site.url" v-if="site.url" target="_blank">
          <icon-home theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
          访问首页
        </a>
        <router-link :to="{ name: 'role.index', query: { sid: site.id } }" v-access:role-list="site">
          <icon-permissions theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
          角色管理
        </router-link>
        <router-link :to="{ name: 'site.admin.index', query: { sid: site.id } }" v-access:admin-list="site">
          <icon-avatar theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
          管理员设置
        </router-link>
        <router-link :to="{ name: 'site.config', query: { sid: site.id } }" v-access:site-config="site">
          <icon-config theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" /> 站点配置
        </router-link>
        <router-link :to="{ name: 'site.edit', query: { sid: site.id } }" v-access:site-edit="site">
          <icon-editor theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" />
          编辑站点
        </router-link>
        <a href="javascript:void(0)" v-if="isSuperAdmin()">
          <el-popconfirm title="确定删除站点吗?" @confirm="emit('del', site.id)">
            <template #reference>
              <div class="flex items-center justify-center">
                <icon-delete theme="outline" strokeLinejoin="bevel" strokeLinecap="butt" /> 删除
              </div>
            </template>
          </el-popconfirm>
        </a>
      </section>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.site {
  @apply bg-gray-50 shadow-sm border hover:shadow-lg rounded-md duration-300;
  a:hover {
    @apply text-sky-700;
  }
  header {
    @apply shadow-sm border-b px-5 py-3 flex items-center justify-between text-gray-600 text-sm font-bold;
    :first-child {
      @apply font-bold flex;
    }
    :nth-child(2) {
      @apply flex items-center;
    }
  }
  main {
    @apply flex  items-center px-5 py-8 text-gray-600;
    :first-of-type {
      @apply mr-2 text-3xl text-gray-600;
    }
    span {
      @apply text-2xl font-light;
    }
  }
  footer {
    @apply py-3 px-5 font-bold text-xs opacity-90 flex md:flex-row flex-col md:justify-between md:items-center text-gray-600 border-t;
    :nth-of-type(2) {
      @apply flex flex-wrap;
      a {
        @apply flex justify-center items-center mr-2 cursor-pointer;
        :first-child {
          @apply mr-[2px];
        }
      }
    }
  }
}
</style>

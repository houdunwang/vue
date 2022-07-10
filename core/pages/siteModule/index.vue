<script setup lang="ts">
import env from '#/utils/env'
import { isSuperAdmin, access } from '#/utils/helper'

const { add, get, modules, setDefault, del } = useSiteModule()
const { currentSite, site } = useSite()
await Promise.all([currentSite(), get(), currentSite()])

//跳转到模块后台
const redirect = (url: string) => {
  window.open(url)
}

const setDefaultModule = async (id: any) => {
  await setDefault(id)
  currentSite()
}
</script>

<template>
  <CoreHdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: `【${site?.title}】站点模块设置`, route: { name: `site.module.index` } },
    ]" />

  <CoreModuleSelectModule @select="add" class="mb-2" v-if="isSuperAdmin()" />

  <section v-if="modules.data.length">
    <div v-for="module of modules.data" :key="module.id">
      <img :src="module.preview" class="rounded-full h-[60px] w-[60px] object-cover my-3" />
      <h4>{{ module.title }}</h4>
      <div class="py-2 bg-gray-200 border-t mt-3 w-full flex justify-center">
        <el-button-group>
          <el-button
            type="primary"
            size="small"
            @click="redirect(`/${module.name}/admin?sid=${site?.id}`)"
            v-if="module.admin">
            模块后台
          </el-button>
          <el-button
            type="success"
            size="small"
            @click="redirect(`/${module.name}?sid=${site?.id}`)"
            v-if="module.front">
            访问前台
          </el-button>
          <el-button type="danger" size="small" @click="del(module.id)" v-if="isSuperAdmin()"> 删除模块 </el-button>
          <template v-if="access('system-module-set-default', site!)">
            <el-button
              type="warning"
              size="small"
              @click="setDefaultModule(module.id)"
              v-if="module.id == site?.module_id">
              默认模块
            </el-button>
            <el-button type="info" size="small" @click="setDefaultModule(module.id)" v-else> 默认模块 </el-button>
          </template>
        </el-button-group>
      </div>
    </div>
  </section>
  <div class="border p-5 rounded-sm bg-white flex justify-center items-center text-gray-600 text-xs font-bold" v-else>
    <icon-info theme="outline" fill="#333" class="mr-1" /> 你还没有安装任何模块，请联系管理员
  </div>
</template>

<style lang="scss" scoped>
section {
  @apply grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2;
  > div {
    @apply border flex flex-col items-center rounded-md hover:shadow-lg duration-300;
    h4 {
      @apply font-bold text-sm text-gray-600;
    }
  }
}
</style>

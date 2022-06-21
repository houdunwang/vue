<script setup lang="ts">
import { siteFind } from '@/apis/site'
import { addSiteModule, getSiteModuleList, removeSiteModule, setSiteDefaultModule } from '@/apis/siteModule'
import { ElMessageBox } from 'element-plus'
const { sid } = defineProps<{ sid: any }>()
const [site] = await Promise.all([siteFind(sid)])

const response = ref(await getSiteModuleList(sid))

const loadModules = async () => {
  response.value = await getSiteModuleList(sid)
}

const addModule = async (module: any) => {
  await addSiteModule(sid, module.id)
  loadModules()
}

const del = async (module: any) => {
  try {
    await ElMessageBox.confirm('确定删除吗？删除模块将删除模块的所有数据，请谨慎操作！')
    // await removeSiteModule(sid, module.id)
    loadModules()
  } catch (error) {}
}

const defaultModule = async (module: ModuleModel) => {
  // await setSiteDefaultModule(sid, module.id)
  loadModules()
}

const redirectModule = (module: ModuleModel) => {
  // window.open(`/${module.name}/admin`)
  window.open(`/admin`)
}
</script>

<template>
  <HdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: `【${site.title}】站点模块设置`, route: { name: `site.module` } },
    ]" />
  <ModuleSelectModule @select="addModule" class="mb-2" />

  <section>
    <div v-for="module of response.data" :key="module.id">
      <img :src="module.preview" class="rounded-full h-[60px] object-cover my-3" />
      <h4>{{ module.title }}</h4>
      <div class="py-2 bg-gray-200 border-t mt-3 w-full flex justify-center">
        <el-button-group>
          <el-button type="primary" size="small" @click="redirectModule(module)">进入模块</el-button>
          <el-button type="danger" size="small" @click="del(module)">删除模块</el-button>
          <el-button type="success" size="small" @click="defaultModule(module)" v-if="module.pivot.is_default">
            取消默认模块
          </el-button>
          <el-button type="info" size="small" @click="defaultModule(module)" v-else> 设为默认模块</el-button>
        </el-button-group>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2;
  > div {
    @apply border flex flex-col items-center rounded-md hover:shadow-lg duration-300;
    h4 {
      @apply font-bold text-sm text-gray-600;
    }
  }
}
</style>

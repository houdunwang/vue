<script setup lang="ts">
import { siteFind } from '@/apis/site'
import { addSiteModule, getSiteModuleList, removeSiteModule, setSiteDefaultModule } from '@/apis/siteModule'
import { moduleTableColumns } from '@/config/table'
import { ElMessageBox } from 'element-plus'
const { sid } = defineProps<{ sid: any }>()

const [site] = await Promise.all([siteFind(sid)])

let tableKey = $ref(0)
const addModule = async (module: any) => {
  await addSiteModule(sid, module.id)
  tableKey++
}

const del = async (module: any) => {
  try {
    await ElMessageBox.confirm('确定删除吗？删除模块将删除模块的所有数据，请谨慎操作！')
    await removeSiteModule(sid, module.id)
    tableKey++
  } catch (error) {}
}

const getModuleList = async () => {
  return await getSiteModuleList(sid)
}

const defaultModule = async (module: ModuleModel) => {
  await setSiteDefaultModule(sid, module.id)
  tableKey++
}
</script>

<template>
  <HdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: `【${site.title}】站点模块设置`, route: { name: `site.module` } },
    ]" />
  <ModuleSelectModule @select="addModule" class="mb-2" />
  <HdTableComponent :columns="moduleTableColumns" :api="getModuleList" :key="tableKey" :button-width="250">
    <template #button="{ model }">
      <el-button-group>
        <el-button type="danger" size="default" @click="del(model)">删除模块</el-button>
        <el-button type="success" size="default" @click="defaultModule(model)" v-if="model.pivot.is_default">
          取消默认模块
        </el-button>
        <el-button type="info" size="default" @click="defaultModule(model)" v-else> 设为默认模块</el-button>
      </el-button-group>
    </template>
  </HdTableComponent>
</template>

<style lang="scss"></style>

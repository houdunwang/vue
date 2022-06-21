<script setup lang="ts">
import { getSitePermission } from '@/apis/sitePermission'
import { updateRolePermission } from '@/apis/rolePermission'
import TabVue from './tab.vue'
import { roleFind } from '@/apis/role'
import { updateAllSiteInitData } from '@/apis/site'

const router = useRouter()
const { sid, rid } = defineProps<{ sid: any; rid: any }>()

const [role, sitePermissionTable] = await Promise.all([roleFind(sid, rid), getSitePermission(sid)])

let permissions = $ref(role.permissions.map((p) => p.name))

const onSubmit = async () => {
  try {
    await updateRolePermission(sid, rid, permissions)
    router.push({ name: 'role.index' })
  } catch (error) {}
}
</script>

<template>
  <TabVue :role="role" :sid="sid" />
  <el-button type="warning" size="default" @click="updateAllSiteInitData"> 更新权限表 </el-button>
  <div class="my-2">
    <el-alert
      title="如果权限表为空，意味着站点没有任何模块，请联系系统管理员安装模块"
      type="info"
      show-icon
      class="border"></el-alert>
  </div>
  <div class="">
    <!-- 模块权限 -->
    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="module of sitePermissionTable.data" class="mb-3">
      <template #header>
        <h5>{{ module['title'] }}</h5>
      </template>

      <dl v-for="permission of module.permission" class="w-full">
        <dt class="text-gray-600 text-sm font-bold pb-2">{{ permission.title }}</dt>
        <dd class="grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 grid-cols-1 text-sm text-gray-600 mb-5">
          <div v-for="p of permission.items" class="flex items-center">
            <label class="text-sm flex items-center">
              <input type="checkbox" v-model="permissions" :value="p.name" class="mr-1" />
              {{ p.title }}
              <span class="text-xs text-gray-500">{{ p.name }}</span>
            </label>
          </div>
        </dd>
      </dl>
    </el-card>

    <el-button type="primary" size="default" @click="onSubmit">保存提交</el-button>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card__header) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>

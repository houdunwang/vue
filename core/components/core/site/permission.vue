<script setup lang="ts">
import { getSitePermission } from '@@/apis/sitePermission'
import { updateRolePermission } from '@@/apis/rolePermission'

const { site, role } = defineProps<{ site: SiteModel; role: RoleModel }>()
const emit = defineEmits(['submit'])

const dialog = ref(false)

const [sitePermissionTable] = await Promise.all([getSitePermission(site.id)])

let permissions = $ref(role.permissions.map((p) => p.name))

const onSubmit = async () => {
  try {
    await updateRolePermission(site.id, role.id, permissions)
    dialog.value = false
    emit('submit')
  } catch (error) {}
}
</script>

<template>
  <el-dialog title="角色权限 " v-model="dialog" width="70%" append-to-body>
    <div class="my-2">
      <el-alert
        title="如果权限表为空，意味着站点没有任何模块，请联系系统管理员安装模块"
        type="info"
        show-icon
        class="border"></el-alert>
    </div>
    <!-- 模块权限 -->
    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="module of sitePermissionTable.data" class="mb-3">
      <template #header>
        <h5>{{ module['title'] }}</h5>
      </template>

      <dl v-for="permission of module.permission" class="w-full">
        <dt class="text-gray-600 text-sm font-bold pb-2">{{ permission.title }}</dt>
        <dd class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 text-sm text-gray-600 mb-5">
          <div v-for="p of permission.items" class="flex items-center">
            <label class="text-sm flex items-center mb-1">
              <input type="checkbox" v-model="permissions" :value="p.name" class="mr-1" />
              {{ p.title }}
              <span class="text-xs text-gray-500">{{ p.name }}</span>
            </label>
          </div>
        </dd>
      </dl>
    </el-card>

    <el-button type="primary" size="default" @click="onSubmit">保存提交</el-button>
  </el-dialog>
  <el-button type="danger" size="default" @click="dialog = true"> 权限 </el-button>
</template>

<style lang="scss" scoped>
:deep(.el-card__header) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>

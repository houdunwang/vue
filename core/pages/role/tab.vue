<script setup lang="ts">
const { site, role } = defineProps<{ site?: SiteModel; role?: RoleModel }>()
</script>

<template>
  <CoreHdTab
    v-if="site"
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      {
        label: `站点角色列表`,
        route: { name: 'role.index', query: { sid: site.id } },
        permission: { name: 'role-list', site },
      },
      {
        label: `添加角色`,
        route: { name: 'role.add', query: { sid: site.id } },
        permission: { name: 'role-add', site },
      },
      {
        label: `编辑角色`,
        route: { name: 'role.edit' },
        current: true,
        permission: { name: 'edit-list', site },
      },
      {
        label: `设置角色权限`,
        route: { name: 'role.permission' },
        current: true,
        permission: { name: 'role-permission-set', site },
      },
      {
        label: `管理员列表`,
        route: { name: 'site.admin.index', query: { sid: site.id } },
        permission: { name: 'admin-list', site },
      },
      {
        label: `权限设置`,
        route: { name: 'site.role.permission', query: { sid: site.id } },
        permission: { name: 'admin-list', site },
        current: true,
      },
    ]" />
</template>

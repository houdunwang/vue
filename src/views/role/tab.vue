<script setup lang="ts">
const { sid, role } = defineProps<{ sid?: any; role?: any }>()
</script>

<template>
  <HdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: '角色列表', route: { name: 'role.index', params: { sid } } },
      { label: '添加角色', route: { name: 'role.add', params: { sid } } },
      { label: `编辑【${role?.title}】角色`, route: { name: 'role.edit' }, current: true },
      { label: `设置【${role?.title}】角色权限`, route: { name: 'role.permission' }, current: true },
      { label: '管理员列表', route: { name: 'site.admin.index', params: { sid } } },
    ]" />
</template>

<style lang="scss"></style>

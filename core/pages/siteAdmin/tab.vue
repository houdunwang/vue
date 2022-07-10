<script setup lang="ts">
const { site, admin } = defineProps<{ site: SiteModel; admin?: UserModel }>()
</script>

<template>
  <CoreHdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: `管理员列表`, route: { name: 'site.admin.index', query: { sid: site.id } } },
      { label: `设置【${admin?.name}】管理员的角色`, route: { name: 'site.admin.role' }, current: true },
      { label: `角色列表`, route: { name: 'role.index' } },
    ]" />
</template>

<style lang="scss"></style>

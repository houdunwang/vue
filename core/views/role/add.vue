<script setup lang="ts">
import { addRole } from '@@/apis/role'
import useSite from '@@/composables/useSite'
import { roleForm } from '@@/config/form'
import TabVue from './tab.vue'
const router = useRouter()

const { sid } = defineProps<{ sid: any }>()
const { site, getSiteByParams } = useSite()
await getSiteByParams()
const onSubmit = async (model: RoleModel) => {
  await addRole(sid, model)
  router.push({ name: 'role.index', params: { sid } })
}
</script>

<template>
  <TabVue :site="site" />
  <CoreFormFieldList :fields="roleForm" @submit="onSubmit" />
</template>

<style lang="scss"></style>

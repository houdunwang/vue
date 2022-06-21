<script setup lang="ts">
import { addRole } from '@/apis/role'
import { roleForm } from '@/config/form'
import TabVue from './tab.vue'

const { sid } = defineProps<{ sid: any }>()
const router = useRouter()

const onSubmit = async (model: RoleModel) => {
  await addRole(sid, model)
  router.push({ name: 'role.index', params: { sid } })
}
</script>

<template>
  <TabVue :sid="sid" />
  <FormFieldList :fields="roleForm" @submit="onSubmit" />
</template>

<style lang="scss"></style>

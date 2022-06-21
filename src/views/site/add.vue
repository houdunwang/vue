<script setup lang="ts">
import { request } from '@/utils/helper'
import { siteForm } from '@/config/form'
import Tab from './components/tab.vue'
import { addSite } from '@/apis/site'
import router from '@/router'

const onSubmit = request(async (model: any) => {
  await addSite(model)
  router.push({ name: 'site.index' })
})
</script>

<template>
  <Tab />
  <FormFieldList :fields="siteForm.base" @submit="onSubmit" />
</template>

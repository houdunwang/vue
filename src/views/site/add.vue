<script setup lang="ts">
import { siteForm } from '@/config/form'
import Tab from './components/tab.vue'

const { add } = useSite()
</script>

<template>
  <Tab />
  <FormFieldList :fields="siteForm.base" @submit="add" />
</template>

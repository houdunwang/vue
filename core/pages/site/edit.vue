<script setup lang="ts">
import { siteForm } from '@@/config/form'
import Tab from './components/tab.vue'

const { update, site, currentSite } = useSite()
await currentSite()
</script>

<template>
  <Tab />
  <CoreFormFieldList :model="site" :fields="siteForm.base" @submit="update" />
</template>

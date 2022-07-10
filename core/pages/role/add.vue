<script setup lang="ts">
import { roleForm } from '#/config/form'
import TabVue from './tab.vue'

const { site, currentSite } = useSite()
const { add } = useRole()
await currentSite()
</script>

<template>
  <TabVue :site="site" />
  <CoreFormFieldList :fields="roleForm" @submit="add" />
</template>

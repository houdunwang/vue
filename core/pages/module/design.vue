<script setup lang="ts">
import { moduleForm } from '@@/config/form'
import Tab from './tab.vue'
const { add } = useModule()
</script>

<template>
  <Tab />
  <CoreFormFieldList :fields="moduleForm" @submit="add" />
</template>

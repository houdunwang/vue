<script setup lang="ts">
import { addModule } from '@/apis/module'
import { moduleForm } from '@/config/form'
const router = useRouter()

const onSubmit = async (module: ModuleModel) => {
  try {
    await addModule(module)
    router.push({ name: 'module.index' })
  } catch (error) {}
}
</script>

<template>
  <HdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '模块列表', route: { name: 'module.index' } },
      { label: '模块设计', route: { name: 'module.design' } },
    ]" />
  <FormFieldList :fields="moduleForm" @submit="onSubmit" />
</template>

<style lang="scss"></style>

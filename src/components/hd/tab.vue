<script setup lang="ts">
import { TabsPaneContext } from 'element-plus'

const router = useRouter()
const route = useRoute()

const { tabs: propTabs } = defineProps<{
  tabs: {
    label: string
    active?: boolean
    event?: () => void
    route?: any
    current?: boolean
    permission?: { name: string }
  }[]
}>()

const tabs = $computed(() => {
  return propTabs.filter((tab) => {
    const state = tab.current ? tab.route?.name == route.name : true
    return state
  })
})

const active = computed(() => 'name' + tabs.findIndex((tab) => tab.route.name == route.name))

const change = (pane: TabsPaneContext) => {
  const tab = tabs[pane.index as unknown as number]
  if (tab.event) tab.event()
  if (tab.route) router.push(tab.route)
}
</script>

<template>
  <el-tabs type="card" v-model="active" @tab-click="change">
    <el-tab-pane :label="tab.label" :name="`name${index}`" v-for="(tab, index) of tabs" />
  </el-tabs>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__item) {
  @apply bg-white;
}
</style>

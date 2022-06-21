<script setup lang="ts"></script>

<template>
  <HdTab
    :tabs="[
      { label: '站点列表', route: { name: 'site.index' } },
      { label: '添加站点', route: { name: 'site.add' } },
      { label: '编辑站点', route: { name: 'site.edit' }, current: true },
    ]" />
</template>

<style lang="scss"></style>

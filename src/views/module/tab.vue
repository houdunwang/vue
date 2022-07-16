<script setup lang="ts"></script>

<template>
  <HdTab
    :tabs="[
      { label: '系统管理', route: { name: 'system.index' } },
      { label: '模块列表', route: { name: 'module.index' } },
      { label: '设计模块', route: { name: 'module.design' } },
    ]" />
</template>

<style lang="scss"></style>

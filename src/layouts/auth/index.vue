<script setup lang="ts"></script>

<template>
  <main>
    <FrontTopMenu />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" :key="route.fullPath" />
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
  </main>
</template>

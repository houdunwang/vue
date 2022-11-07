<script lang="ts" setup></script>
<template>
  <main>
    <FrontTopMenu />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" :key="route.fullPath" class="w-full 2xl:w-page mx-auto p-3 lg:mt-5" />
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
    <Footer />
  </main>
</template>

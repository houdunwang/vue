<template>
  <main>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Suspense>
          <div class="flex items-center justify-center h-screen bg-gray-700">
            <component :is="Component" :key="route.fullPath" />
          </div>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>

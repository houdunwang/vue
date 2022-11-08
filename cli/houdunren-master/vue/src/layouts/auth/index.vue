<template>
  <main>
    <FrontTopMenu />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component" :key="route.fullPath" />
        </Suspense>
      </template>
    </RouterView>
    <Footer />
  </main>
</template>

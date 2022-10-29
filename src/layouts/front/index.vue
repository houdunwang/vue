<template>
  <main class="flex flex-col flex-1 justify-start">
    <FrontTopMenu class="border-b-0" />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" :key="route.fullPath" />
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
    <Footer />
  </main>
</template>

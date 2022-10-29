<script setup lang="ts"></script>

<template>
  <section class="overflow-hidden">
    <div class="border overflow-hidden shadow-sm rounded-lg bg-white">
      <h1 class="p-5 py-3 opacity-90 text-lg font-normal border-b">
        <slot name="header" />
      </h1>
      <div>
        <slot />
      </div>
      <div>
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>

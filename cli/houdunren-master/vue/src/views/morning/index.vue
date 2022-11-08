<script setup lang="ts">
import MorningSubmit from './components/morning-submit.vue'
import MorningList from './components/morning-list.vue'
import MorningSigns from './components/morning-signs.vue'
import Warning from './components/warning.vue'
</script>

<template>
  <main>
    <div class="grid md:grid-cols-2 gap-5">
      <MorningSubmit />
      <div class="">
        <MorningSigns />
        <Warning class="mt-3" />
      </div>
    </div>
    <MorningList />
  </main>
</template>

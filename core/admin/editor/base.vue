<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue';
const content = ref('abc@@@')
</script>

<template>
	<div class>
		<Editor v-model="content" />
		<div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
	</div>
</template>

<style lang="scss">
</style>

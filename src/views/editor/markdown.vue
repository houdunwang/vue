<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue'
import { ref } from 'vue';
const content = ref('abc')
</script>

<template>
	<div class>
		<Editor v-model="content" :height="300" placeholder="请输入markdown内容" />
		{{ content }}
	</div>
</template>

<style lang="scss">
</style>

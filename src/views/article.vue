<script setup lang="ts">
import { article } from '@/apis/articleApi'
const articles = ref()
article().then(({ result }) => articles.value = result)
</script>

<template>
	<div class="article">
		<AnimateList tag="ul" :duration="1" :delay="2">
			<li :data-index="index" v-for="(article, index) of articles" :key="article.id">{{ article.title }}</li>
		</AnimateList>
	</div>
</template>

<style lang="scss" scoped>
.article {
	padding: 30px;
	width: 100vw;
	height: 100vh;
	position: relative;
	background-color: #34495e;
	ul {
		li {
			padding: 10px;
			margin-bottom: 20px;
			background: #f1c40f;
			color: #333;
			border-radius: 5px;
		}
	}
}
</style>

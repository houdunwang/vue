<script setup lang="ts">

</script>

<template>
	<div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
		<img src="/images/xj.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
		<div>
			<router-link :to="{ name: 'admin.home' }" class="hd-button">后台管理</router-link>
			<router-link :to="{ name: 'login' }" class="hd-button hd-danger ml-3">用户登录</router-link>
		</div>
		<div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">每晚八点直播，欢迎来共同学习技术</div>
	</div>
</template>

<style lang="scss"></style>

<script lang="ts">import { ElMessage } from 'element-plus';

export default {
	route: { name: 'home' }
}
</script>

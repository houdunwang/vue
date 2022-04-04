<script setup lang="ts">
import userStore from '@/store/userStroe';
import utils from '@/utils';
import menuService from '@/composables/menu'
import Notification from '@/components/notification.vue';
import Breadcrumb from '@/components/breadcrumb.vue';

const user = userStore();
// let isFullScreen = false;
const isFullScreen = ref<boolean>(false)
const fullScreen = () => {
	isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
	isFullScreen.value = !isFullScreen.value;
}
</script>

<template>
	<div class="bg-white p-3 px-5 flex justify-between items-center">
		<div class="flex items-center">
			<div @click="menuService.toggleState">
				<i class="fas fa-align-left mr-2 text-gray-700 cursor-pointer" v-if="menuService.close.value"></i>
				<i class="fas fa-align-right mr-2 text-gray-700 cursor-pointer" v-else></i>
			</div>
			<Breadcrumb class="hidden md:block" />
		</div>
		<div class="flex justify-center items-center relative cursor-pointer">
			<Notification class="mr-8" />
			<icon-off-screen theme="outline" size="24" fill="#333" @click="fullScreen" class="mr-5" v-if="isFullScreen" />
			<icon-full-screen-one theme="outline" size="24" fill="#333" @click="fullScreen" class="mr-5" v-else />
			<div class="group relative">
				<div class="flex justify-center items-center">
					<img :src="user.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
					<span class="ml-1 text-sm text-gray-600">{{ user.info?.name }}</span>
				</div>
				<section
					class="group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
				>
					<div class="flex items-center cursor-pointer border-b py-3">
						<icon-log theme="outline" size="18" fill="#333" />
						<span class="text-xs text-gray-600 ml-2">文档资料</span>
					</div>
					<div class="flex items-center cursor-pointer py-3">
						<icon-home theme="outline" size="18" fill="#333" />
						<span class="text-xs text-gray-600 ml-2">网站首页</span>
					</div>
					<div class="flex items-center cursor-pointer py-3" @click="utils.user.logout()">
						<icon-logout theme="outline" size="18" fill="#333" />
						<span class="text-xs text-gray-600 ml-2">退出登录</span>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>

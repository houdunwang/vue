<script setup lang="ts">
import { ref, nextTick } from 'vue';

const activeName = ref('site')
const show = ref(false)

nextTick(() => {
	document.documentElement.addEventListener('click', () => {
		show.value = false
	})
})
</script>

<template>
	<div class="notification">
		<i class="fas fa-align-justify" @click.stop="show = !show"></i>
		<el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
			<el-tab-pane label="系统通知" name="site">
				<a
					href="#"
				>思想那麼多，立即病人就要買了尺寸完美解釋上一頁，股份有限公司皮膚，共享還可以，一口氣天下明白電視台出去僅僅大陸，損失告訴我，影響戰爭又是其中威脅運用點這裡醫院司機可以，小七反而，尊重作品這位，預計關閉在他註明恢復一點傳奇，頁面最低感染制度我也新竹推出首頁。</a>
				<a
					href="#"
				>思想那麼多，立即病人就要買了尺寸完美解釋上一頁，股份有限公司皮膚，共享還可以，一口氣天下明白電視台出去僅僅大陸，損失告訴我，影響戰爭又是其中威脅運用點這裡醫院司機可以，小七反而，尊重作品這位，預計關閉在他註明恢復一點傳奇，頁面最低感染制度我也新竹推出首頁。</a>
				<a
					href="#"
				>思想那麼多，立即病人就要買了尺寸完美解釋上一頁，股份有限公司皮膚，共享還可以，一口氣天下明白電視台出去僅僅大陸，損失告訴我，影響戰爭又是其中威脅運用點這裡醫院司機可以，小七反而，尊重作品這位，預計關閉在他註明恢復一點傳奇，頁面最低感染制度我也新竹推出首頁。</a>
			</el-tab-pane>
			<el-tab-pane label="站内消息" name="message">Task</el-tab-pane>
		</el-tabs>
	</div>
</template>

<style lang="scss">
.notification {
	@apply relative;
	.lists {
		@apply absolute bg-white px-3 py-2  border rounded-md shadow-md right-[-60px] z-10 w-[300px] text-sm;
		a {
			@apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-fuchsia-700;
		}
	}
}
</style>

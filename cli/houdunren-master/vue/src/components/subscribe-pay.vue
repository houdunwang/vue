<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import usePay from '@/composables/usePay'
import useConfigStore from '@/store/hd/useConfigStore'
const { isWechat } = useUtil()
const { wechatNativePay, wepayQr, wechatMpPay, alipay } = usePay()

const showWepayDialog = ref(false)
const wechatNative = async () => {
  await wechatNativePay()
  showWepayDialog.value = true
}
</script>

<template>
  <main class="bg !z-10 h-[500px] py-10 box-content flex flex-col justify-center shadow-2xl -mt-1">
    <div>
      <h1 class="text-center p-10 text-5xl md:text-8xl font-semibold text-white">投资学习永远是最值得的</h1>
      <h2 class="text-center text-white opacity-80 pt-12 font-light text-4xl">订阅的朋友任意观看网站所有视频</h2>
    </div>
    <div class="flex justify-center z-20 gap-3 mt-5">
      <div v-if="isWechat()">
        <button
          @click="wechatMpPay"
          v-if="isWechat()"
          class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-8 py-3 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline text-2xl">
          微信支付
        </button>
      </div>
      <div v-else>
        <button
          type="button"
          @click="alipay"
          class="border border-green-500 bg-green-500 text-white rounded-md px-8 py-3 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline text-xl">
          支付宝付款
        </button>
        <button
          type="button"
          @click="wechatNative"
          class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-8 py-3 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline text-2xl">
          微信支付
        </button>

        <el-dialog title="" v-model="showWepayDialog" class="w-[400px]" :append-to-body="true">
          <div class="flex flex-col items-center justify-center rounded-lg">
            <el-image :src="wepayQr" fit="fill" :lazy="true" class="w-full" />
            <div class="text-base font-bold">支付完成点击下面按钮查看订单状态</div>
            <a
              href="/member/duration"
              class="bg-green-600 hover:text-white hover:bg-green-500 rounded-md flex justify-center items-center py-2 px-5 mt-3 text-white">
              查看订单信息
            </a>
          </div>
        </el-dialog>
      </div>
    </div>
    <div
      class="flex flex-col items-center md:flex-row md:justify-center md:items-end text-white mt-10 font-light gap-5">
      <div class="line-through text-2xl text-gray-200">
        原价: {{ useConfigStore().config.subscribe.original_price }} 元
      </div>
      <div class="flex text-2xl items-baseline">
        优惠期:
        <div clsas="text-6xl;text-5xl;" style="font-size: 50px; font-weight: bold; color: white; margin: 0 10px">
          {{ useConfigStore().config.subscribe.price }}
        </div>
        全年免费看
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.bg {
  background: linear-gradient(150deg, #2d1582, #19a0ff);
}
</style>

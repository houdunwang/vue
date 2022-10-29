<script setup lang="ts"></script>

<template>
  <main class="bg-slate-800">
    <div class="front-footer px-3 md:px-0">
      <!-- <div class="el-divider el-divider--horizontal">
        <div
          class="el-divider__text is-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-1 opacity-100">
          后盾人 人人做后盾
        </div>
      </div> -->
      <div class="flex flex-col items-center justify-center pt-5">
        <div class="text-center text-base font-bold">
          <span class="opacity-90 mr-2 text-gray-200">本站编码</span>
          <a href="https://www.houdunren.com" class="text-[#ff7675] font-bold">向军大叔</a><br /><button
            class="el-button el-button--success mt-3 flex items-center"
            type="button">
            <span><i class="fas fa-play-circle"></i> 晚八点直播，来直播间聊天吧 </span>
          </button>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <div
      class="text-center text-sm py-5 px-3 md:px-0 leading-9 opacity-80 font-normal text-white relative overflow-hidden"
      id="footer">
      <div class="">我们的使命：传播互联网前沿技术，帮助更多的人实现梦想 <br /></div>
      <div class="text-center">
        <div class="text-sm">
          <span class="pr-2"> 微信: houdunren2021 </span>
          <span class="pr-2"> 邮箱：2300071698@qq.com</span>
        </div>
        <div>Copyright © 2010-2022 houdunren.com All Rights Reserved</div>
        <a href="https://beian.miit.gov.cn/" target="_blank"> ICP证: 京 ICP 备 000000 </a>
      </div>
      <div class="footer-bg"></div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.footer-bg {
  overflow: hidden;
  position: absolute;
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(10);
  filter: blur(10px);
  opacity: 1;
  @apply top-0 left-0 right-0 bottom-0;
}
</style>

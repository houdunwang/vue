<script setup lang="ts">
import SignSubmit from '@/components/sign-submit.vue'
import useUtil from '@/composables/hd/useUtil'
import dayjs from 'dayjs'
const { authorize } = useUtil()
const { collection, getTodaySignList, todaySign, remove } = useSign()
await getTodaySignList()
</script>

<template>
  <main class="sign">
    <HdCard v-if="todaySign">
      <template #header> 签到快乐，再接再厉 </template>
      <div class="leading-8">
        您上次签到时间: {{ dayjs(todaySign.created_at).format('YYYY-MM-DD HH:mm') }} <br />
        您的总签到天数: {{ todaySign.sign_count?.total }} 天 <br />
        您本月签到天数: {{ todaySign.sign_count?.month }} 天
      </div>
    </HdCard>
    <SignSubmit v-else />
    <hdCard class="my-5">
      <section class="">
        使用微信签到更快，微信搜索 <span class="text-green-700">houdunren2022</span> 关注公众号，
        <!-- 扫码下方二维码或微信搜索【后盾云】添加公众号 <br /> -->
        <!-- <el-image src="/assets/wechat/qr.jpg" fit="fill" :lazy="true"></el-image> <br /> -->
        发送以『签到』开始的的内容。 <br />
        <el-image src="/assets/wechat/input.jpg" fit="fill" :lazy="true" class="w-full md:max-w-[400px]"></el-image>
      </section>
    </hdCard>
    <HdCard v-if="collection?.length">
      <template #header> 今日签到排行 </template>
      <div class="text-base">
        <el-table
          :data="collection"
          border
          stripe
          size="large"
          header-cell-class-name="text-base"
          cell-class-name="text-base py-4 text-center text-gray-600 "
          class="hidden md:flex">
          <el-table-column label="签到的朋友" :width="200" #default="{ row }" align="left">
            <div class="flex justify-start gap-2 items-center">
              <HdUserAvatar :user="row.user" />
              <router-link :to="{ name: 'sign.space', params: { uid: row.user.id } }">
                {{ row.user.name }}
              </router-link>
            </div>
          </el-table-column>
          <el-table-column label="签到时间" :width="100" #default="{ row }" align="center">
            {{ dayjs(row.created_at).format('HH:mm') }}
          </el-table-column>
          <el-table-column label="月签到天数" :width="120" #default="{ row }" align="center">
            {{ row.sign_count?.month }}
          </el-table-column>
          <el-table-column label="总签到天数" :width="120" #default="{ row }" align="center">
            {{ row.sign_count?.total }}
          </el-table-column>
          <el-table-column label="签到心情" #default="{ row }">
            <div class="flex items-center">
              <el-image
                class="w-12 h-12 box-content p-1"
                :src="`/assets/sign/${row.mood}.gif`"
                fit="cover"
                :lazy="true" />
              {{ row.content }}
              <el-button type="warning" size="small" plain @click="remove(+row.id)" v-if="authorize(row.user.id)">
                删除
              </el-button>
            </div>
          </el-table-column>
        </el-table>
        <!-- 移动端显示 -->
        <div class="md:hidden border-b py-3" v-for="item of collection" :key="item.id">
          <div class="flex">
            <HdUserAvatar :user="item.user" class="mr-2" />
            <div class="flex flex-col justify-between">
              {{ item.content }}
              <el-button type="warning" size="small" plain @click="remove(+item.id)" v-if="authorize(item.user.id)">
                删除
              </el-button>
              <div class="text-xs text-gray-600">
                <router-link
                  :to="{ name: 'sign.space', params: { uid: item.user_id } }"
                  class="text-indigo-800 font-bold opacity-70">
                  {{ item.user.name }}
                </router-link>
                <span> {{ dayjs(item.created_at).fromNow() }} 签到</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HdCard>
  </main>
</template>

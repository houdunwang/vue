<script setup lang="ts">
import SubscribePay from '@/components/subscribe-pay.vue'
const { taskMake } = useTask()
</script>

<template>
  <main class="z-50 mb-10 !-mt-0 !w-full !p-0">
    <subscribe-pay />
    <div class="bg-gray-200 py-10 shadow-lg">
      <div class="text-center text-lg text-gray-600 md:w-3/4 p-3 m-auto leading-8">
        视频属于虚拟物品，购买后不支持退款，支付的费用仅用于观看视频，并不包含其他服务（如在线解答）
        <br />
        有问题发到网站，热心的盾友会帮助你的，也可以加入微信群交流
        <br />
        祝你学有所成，加油少年！
      </div>
    </div>
    <div class="border-4 p-10 bg-gray-100 leading-8 shadow-2xl">
      <div class="2xl:w-page 2xl:mx-auto">
        <ol>
          <li>
            我有一部Android手机是三千多买的，买完一个星期后手机厂商就降价700元发布了新款手机。再比如我的一个显示器买完不到一个月就有了优惠200的价格，我有一个朋友买的fang几年时间降了一半价格，从市场经济的角度来看，这都是合理的。
          </li>
          <li>
            后盾人网站的运营收入减去带宽、服务器、维护等费用，基本挣不了什么钱，或者说挣得都是辛苦钱，因为毕竟技术群体人数太少了，打个比方，如果用户像腾讯视频用户数量那么多，成本就会低太多了。
          </li>
          <li>
            现在我们在视频压缩、运营商套餐费用上进行了优化选择，所以运营费用有所下降，我们也把价格降下来了。不过也有可能过段时间价格又涨上去了，因为后盾人网站运营成本受运营商影响很大。
          </li>
          现在我们决定违背市场规律，把还没有到期的用户时长，进行延长，也算是把兄弟这句话落实到地了。其实这也证明了感性从商是不能挣到钱的，不过心里舒服也算是另一个层面的回报吧。
          <li>
            再打个比喻，餐馆原来一份盖饭10元，成本8元，利润就是2元。现在材料成本降低了，变成了4元，餐馆把盖饭的价格调整到了6元，还是挣2元。如果餐馆给原来花10元的用户补4元，其实他就赔了2元。
            我们现在要做的延长时长就是这种场景，是违背商业运营的，可能就是赔钱的。
          </li>
        </ol>

        <div class="font-bold text-green-700 mb-2 text-lg mt-10">
          我们决定将没有过期的用户，在原结束时间基础上进行延时
        </div>
        <div class="mb-3">
          <h2 class="font-bold">活动说明：</h2>
          活动只针对2018年10月18日前的订阅 <br />
          订阅时的价格>=499元的订单 <br />
          网站活动获取的会员，没有支付行为的，不能参加活动 <br />
          会员还在有效期内 <br />
          本活动将在2023年1月1日结束
        </div>
        <div class="">
          <h2 class="font-bold">延时文案：</h2>
          半年会员延长10个月(原6个月+10个月=16个月）<br />
          一年会员延长15个月(原12个月+15个月=27个月）<br />
          2年会员延长21个月(原24个月+21个月=45个月）
        </div>

        <div class="flex justify-center">
          <el-button type="success" size="large" @click="taskMake" class="mt-3">
            我是老会员而且没到期，我要延长订阅时长
          </el-button>
        </div>
      </div>
    </div>
  </main>
</template>

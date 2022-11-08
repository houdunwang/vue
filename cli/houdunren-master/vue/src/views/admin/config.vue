<script setup lang="ts">
const { config, get, update } = useConfig()
await get()
const tab = ref('base')
console.log(config.value)
</script>

<template>
  <HdCard>
    <template #header> 网站配置 </template>
    <template #default>
      <el-tabs v-model="tab" type="card" tab-position="top" class="p-5">
        <el-tab-pane label="基础配置" name="base">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="网站名称">
              <el-input v-model="config.base.name"></el-input>
            </el-form-item>
            <el-form-item label="菜单域名">
              <el-input v-model="config.base.domain"></el-input>
            </el-form-item>
            <el-form-item label="广告语">
              <el-input v-model="config.base.ad"></el-input>
            </el-form-item>
            <el-form-item label="联系微信">
              <el-input v-model="config.base.weixin"></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱">
              <el-input v-model="config.base.email"></el-input>
            </el-form-item>
            <el-form-item label="icp">
              <el-input v-model="config.base.icp"></el-input>
            </el-form-item>
            <el-form-item label="图形验证码">
              <el-checkbox v-model="config.base.captcha_disable" label="开启" :indeterminate="false"></el-checkbox>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="阿里云" name="aliyun">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="aliyun_key">
              <el-input v-model="config.aliyun.aliyun_key" />
            </el-form-item>
            <el-form-item label="aliyun_secret">
              <el-input v-model="config.aliyun.aliyun_secret" />
            </el-form-item>
            <el-form-item label="aliyun_oss_block">
              <el-input v-model="config.aliyun.aliyun_oss_block" />
            </el-form-item>
            <el-form-item label="aliyun_oss_endpoint">
              <el-input v-model="config.aliyun.aliyun_oss_endpoint" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="短信" name="sms">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="sign">
              <el-input v-model="config.sms.aliyun_code_sign" />
            </el-form-item>
            <el-form-item label="template">
              <el-input v-model="config.sms.aliyun_code_template" />
            </el-form-item>
            <el-form-item label="有效期、单位秒">
              <el-input v-model="config.sms.code_timeout" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="邮箱" name="email">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="主机">
              <el-input v-model="config.email.host" />
            </el-form-item>
            <el-form-item label="邮箱帐号">
              <el-input v-model="config.email.username" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="config.email.password" />
            </el-form-item>
            <el-form-item label="端口">
              <el-input v-model="config.email.port" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="微信" name="wechat">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="appid">
              <el-input v-model="config.wechat.appid" />
            </el-form-item>
            <el-form-item label="appsecret">
              <el-input v-model="config.wechat.appsecret" />
            </el-form-item>
            <el-form-item label="token">
              <el-input v-model="config.wechat.token" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="订阅" name="subscribe">
          <el-form label-width="80px" :inline="false" size="large" label-position="top" class="border p-5">
            <el-form-item label="原价">
              <el-input v-model="config.subscribe.original_price" />
            </el-form-item>
            <el-form-item label="订阅价格">
              <el-input v-model="config.subscribe.price" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </template>

    <template #footer>
      <el-button type="primary" size="default" @click="update" class="mx-5 mb-5">保存提交</el-button>
    </template>
  </HdCard>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import _ from 'lodash'
const { fields, model: PropsModel } = defineProps<{
  fields: FormFieldType[]
  model?: any
}>()

const model = $ref(
  PropsModel ||
    _.zipObject(
      fields.map((f) => f.name),
      fields.map((f) => f.value ?? ''),
    ),
)

const emit = defineEmits<{
  (e: 'submit', model: any): void
}>()
</script>

<template>
  <el-form :model="model" label-width="100px" :inline="false" size="large">
    <el-form-item :label="f.title" v-for="f of fields">
      <template v-if="f.type == 'image'">
        <div class="flex flex-col">
          <UploadSingleImage v-model="model[f.name]" />
          <HdError :name="f.error_name || f.name" />
        </div>
      </template>
      <template v-else-if="f.type == 'radio'">
        <el-radio-group v-model="model[f.name]" class="ml-4" :disabled="f.disabled">
          <el-radio :label="val.value" size="large" v-for="val in f.options"> {{ val.label }} </el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="f.type == 'preview'">
        <div class="flex flex-col">
          <el-image
            preview-teleported
            :hide-on-click-modal="true"
            :preview-src-list="[model[f.name]!]"
            :src="model[f.name]"
            fit="cover"
            class="w-[200px] rounded-sm" />
        </div>
      </template>
      <template v-else-if="f.type == 'wangeditor'">
        <HdWangEditor v-model="model[f.name]" />
      </template>
      <template v-else>
        <el-input
          @keyup.enter="emit('submit', model)"
          v-model="model[f.name]"
          :type="f.type ?? 'input'"
          :placeholder="f.placeholder"
          :readonly="f.readonly"
          :disabled="f.disabled" />

        <HdError :name="f.error_name || f.name" />
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="button" v-if="$slots.button" />
      <el-button type="primary" @click="emit('submit', model)" v-else>保存提交</el-button>
    </el-form-item>
  </el-form>
</template>

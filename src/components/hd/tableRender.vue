<script setup lang="ts">
import dayjs from 'dayjs'
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const { data, buttons, buttonWidth, columns } = defineProps<{
  data?: Record<string, any>[]
  buttons?: TableButton[]
  buttonWidth?: number
  columns: TableColumnsType[]
}>()

const emit = defineEmits<{
  (e: 'action', model: any, command: string): void
  (e: 'search', params: { searchFields: string[]; searchContent: string }): void
}>()

//搜索
let searchFields = $ref(columns && columns.filter((item) => item.search == true).map((item) => item.prop))
let searchContent = $ref('')
const search = async () => {
  if (!searchFields.length) {
    return ElMessage({ type: 'error', message: '请选择搜索类型', grouping: true })
  }
  if (!searchContent) {
    return ElMessage({ type: 'error', message: '请输入搜索内容', grouping: true })
  }
  emit('search', { searchFields: searchFields, searchContent: searchContent })
}

//按钮事件
const buttonClientEvent = async (args: any) => {
  buttons?.[args.command]?.action?.call(null, args.model)
}
</script>

<template>
  <div v-if="data">
    <div class="grid grid-cols-[auto_1fr_auto] items-center bg-white p-2 border rounded-sm mb-2">
      <el-select v-model="searchFields" collapse-tags placeholder="请选择字段" filterable class="mr-1" multiple>
        <el-option
          v-for="item in columns"
          :key="item.prop"
          :label="item.label"
          :value="item.prop"
          v-show="item.search === true">
        </el-option>
      </el-select>
      <el-input
        v-model="searchContent"
        placeholder="请输入搜索内容"
        size="default"
        class="mr-1"
        @keyup.enter="search" />
      <el-button-group class="ml-1">
        <el-button type="success" size="default" @click="search">搜索</el-button>
        <slot name="search-button" />
      </el-button-group>
    </div>

    <el-table :data="data" border stripe :highlight-current-row="true" style="width: 100%">
      <el-table-column
        v-for="col in columns"
        :fixed="col.fixed || false"
        :prop="col.prop"
        :key="col.prop"
        :label="col.label"
        :width="col.width"
        :align="col.align"
        #default="{ row }">
        <template v-if="col.type === 'image'">
          <el-image
            preview-teleported
            :hide-on-click-modal="true"
            :preview-src-list="[row[col.prop]!]"
            :src="row[col.prop]"
            fit="cover"
            class="w-10 h-10 rounded-lg" />
        </template>
        <template v-else-if="col.type === 'radio'">
          <span v-for="c in col.options" v-show="c.value == row[col.prop]">
            <el-tag>{{ c.label }}</el-tag>
          </span>
        </template>
        <template v-else-if="col.type === 'tag'">
          <el-tag type="success" size="small" effect="dark" v-for="(b, key) of row[col.prop]" :key="key" class="m-1">
            {{ b[col.tag_field!] }}
          </el-tag>
        </template>
        <template v-else-if="col.type === 'date'">
          {{ dayjs(row[col.prop]).format('YYYY-mm-DD') }}
        </template>
        <template v-else>
          {{ row[col.prop] }}
        </template>
      </el-table-column>

      <el-table-column align="center" width="110" #default="{ row }" v-if="buttons" fixed="right" id="buttonGroup">
        <el-dropdown @command="buttonClientEvent">
          <el-button type="primary">
            操作
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <template v-for="(item, key) in buttons" :key="key">
                <el-dropdown-item :command="{ model: row, command: key }">
                  {{ item.title }}
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-table-column>

      <el-table-column :width="buttonWidth" #default="{ row }" v-if="$slots.button" align="center" fixed="right">
        <slot name="button" :model="row" v-if="row.id" />
      </el-table-column>
    </el-table>
  </div>
</template>

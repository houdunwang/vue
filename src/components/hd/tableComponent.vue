<script setup lang="ts">
import dayjs from 'dayjs'
import { tableButtonType, tableColumnsType } from '@/config/table'
import { ArrowDown } from '@element-plus/icons-vue'
const {
  api,
  buttons,
  buttonWidth,
  buttonType = 'drop',
  columns,
  searchShow = true,
} = defineProps<{
  api: (page: number, params?: Record<keyof any, any>) => Promise<ResponsePageResult<any>>
  buttons?: tableButtonType[]
  buttonWidth?: number
  buttonType?: 'drop' | 'default'
  columns: tableColumnsType[]
  searchShow?: boolean
}>()

const emit = defineEmits<{
  (e: 'action', model: any, command: string): void
}>()

// 加载分页数据
let response = $ref(await api(1))
const load = async (page: number = 1) => {
  response = await api(page)
}

//搜索
let searchFields = $ref(columns && columns.filter((item) => item.search == true).map((item) => item.prop))
let searchContent = $ref('')
const search = async () => {
  if (!searchFields.length) return ElMessage.error('请选择搜索类型')
  response = await api(1, { searchFields, searchContent })
}

//按钮事件
const buttonClientEvent = async (args: any) => {
  emit('action', args.model, args.command)
}

let buttonColumnWidth = computed(() => {
  if (!buttonWidth && buttons?.length) {
    return (
      [...buttons].reduce((width: number, btn: tableButtonType) => {
        return (width += btn.title.length * 15 + 32)
      }, 0) + 24
    )
  }
})
</script>

<template>
  <div class="">
    <div class="grid grid-cols-[auto_1fr_auto] items-center bg-white p-2 border rounded-sm mb-2" v-if="searchShow">
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

    <el-table :data="response.data" border stripe :highlight-current-row="true" style="width: 100%">
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
            class="rounded-md" />
        </template>
        <template v-else-if="col.type === 'radio'">
          <span v-for="c in col.options" v-show="c[1] == row[col.prop]">
            <el-tag>{{ c[0] }}</el-tag>
          </span>
        </template>
        <template v-else-if="col.type === 'alert'">
          <el-tag type="success" size="small" effect="dark" v-for="(b, key) of row[col.prop]" :key="key" class="m-1">
            {{ b }}
          </el-tag>
        </template>
        <template v-else-if="col.type === 'date'">
          {{ dayjs(row[col.prop]).format('YYYY-mm-DD') }}
        </template>
        <template v-else>
          {{ row[col.prop] }}
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="110"
        #default="{ row }"
        v-if="buttons && buttonType == 'drop'"
        fixed="right"
        id="buttonGroup">
        <el-dropdown @command="buttonClientEvent">
          <el-button type="primary">
            操作
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, key) in buttons"
                :key="key"
                :command="{ model: row, command: item.command }">
                {{ item.title }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-table-column>

      <el-table-column
        align="center"
        :width="buttonWidth || buttonColumnWidth"
        #default="{ row }"
        v-if="buttons && buttonType == 'default'"
        fixed="right"
        id="buttonGroup">
        <el-button-group>
          <el-button
            :type="item.type || 'default'"
            v-for="(item, key) in buttons"
            @click="emit('action', row, item.command)">
            {{ item.title }}
          </el-button>
        </el-button-group>
      </el-table-column>
      <el-table-column :width="buttonWidth" #default="{ row }" v-if="$slots.button" align="center" fixed="right">
        <slot name="button" :model="row" />
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="load"
      background
      layout="prev, pager, next"
      :total="response.meta.total"
      :page-size="response.meta.per_page"
      class="mt-3"
      :hide-on-single-page="true" />
  </div>
</template>

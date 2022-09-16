import AutoImport from 'unplugin-auto-import/vite'
// import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { Plugin } from 'vite'

//自动导入插件
export default (plugins: Plugin[]) => {
  plugins.push(
    AutoImport({
      //定义element-plus api按需加载
      // resolvers: [ElementPlusResolver()],
      // imports: ['vue', 'vue-router'],
      //composables目录文件按需加载
      // dirs: ['src/composables'],
      dts: 'types/system/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        //element-plus组件按需导入
        // ElementPlusResolver(),
        // VueUseComponentsResolver(),
        //针对iconpark图标按需导入
        // (componentName) => {
        //   if (componentName.startsWith('Icon')) {
        //     return { name: componentName.slice(4), from: '@icon-park/vue-next' }
        //   }
        // },
      ],
      extensions: ['vue', 'tsx'],
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'types/system/components.d.ts',
    }),
  )
}

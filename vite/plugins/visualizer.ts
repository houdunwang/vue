import { Plugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

//显示编译信息
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  plugins.push(visualizer())
}

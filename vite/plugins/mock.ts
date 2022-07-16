import { Plugin } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

//mockJs测试数据插件
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  if (env.VITE_MOCK_ENABLE && !isBuild) {
    plugins.push(
      viteMockServe({
        mockPath: 'mock',
        watchFiles: true,
      }),
    )
  }
}

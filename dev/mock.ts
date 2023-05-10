import { viteMockServe } from 'vite-plugin-mock'

//mockJs测试数据插件
export default (isBuild: boolean, env: ImportMetaEnv) => {
  return viteMockServe({
    mockPath: 'dev/mock',
    localEnabled: !isBuild && !env.VITE_API_URL,
  })
}

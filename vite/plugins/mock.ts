import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugin(isBuild: boolean, env: ImportMetaEnv) {
  return viteMockServe({
    mockPath: 'mock',
  })
}

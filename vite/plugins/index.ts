import { Plugin } from 'vite'
import autoImport from './autoImport'
import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = []

  if (env.VITE_MOCK_ENABLE) {
    plugins.push(setupMockPlugin(isBuild))
  }
  autoImport(plugins)
  return plugins
}

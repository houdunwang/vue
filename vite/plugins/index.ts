import { Plugin } from 'vite'
import autoImport from './autoImport'
import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = []

  if (!isBuild) plugins.push(setupMockPlugin(isBuild, env))

  autoImport(plugins)
  return plugins
}

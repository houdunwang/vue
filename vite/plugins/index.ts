import { Plugin } from 'vite'
import autoImport from './auto-import'
import setupMockPlugin from './mock'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  setupMockPlugin(plugins, isBuild, env)
  autoImport(plugins)

  return plugins
}

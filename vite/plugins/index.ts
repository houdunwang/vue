import { Plugin } from 'vite'
import autoImport from './autoImport'
import setupMockPlugin from './mock'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  setupMockPlugin(plugins, isBuild, env)
  autoImport(plugins, isBuild, env)

  return plugins
}

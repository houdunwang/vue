import { Plugin } from 'vite'
import autoImport from './autoImport'
import setupMockPlugin from './mock'
import setupVisualizer from './visualizer'
import setupVue from './vue'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  setupVue(plugins, isBuild, env)
  setupVisualizer(plugins, isBuild, env)
  setupMockPlugin(plugins, isBuild, env)
  autoImport(plugins, isBuild, env)

  return plugins
}

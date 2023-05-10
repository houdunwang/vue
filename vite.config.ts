import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import prismjs from 'vite-plugin-prismjs'
import autoImport from './core/auto-import'
import mock from './core/mock'
import { parseEnv } from './core/util'

export default defineConfig(({ command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))

  return {
    plugins: [
      ...autoImport,
      vue(),
      mock(isBuild, env),
      prismjs({
        languages: 'all',
      }),
    ],
    base: isBuild ? '/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    build: {
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.split('/node_modules/').pop()?.split('/')[0]
            }
          },
        },
      },
    },
    server: {
      host: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
        '/captcha': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})

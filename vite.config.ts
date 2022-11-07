import { defineConfig, loadEnv } from 'vite'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import prismjs from 'vite-plugin-prismjs'

export default defineConfig(({ command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))

  return {
    plugins: [
      ...setupPlugins(isBuild, env),
      vueJsx({}),
      vue({ reactivityTransform: true }),
      prismjs({
        languages: 'all',
      }),
    ],
    base: isBuild ? '/vue/' : '/',
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
        '/assets': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
        '/wechat/app/autologin': {
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

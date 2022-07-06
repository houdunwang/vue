import { defineConfig, loadEnv } from 'vite'
import alias from './core/vite/alias'
import { parseEnv } from './core/vite/util'
import setupPlugins from './core/vite/plugins'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))

  return {
    plugins: [
      ...setupPlugins(isBuild, env),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
    ],
    //静态文件 url 前缀
    base: isBuild ? '/core/' : '/',
    resolve: {
      alias,
    },
    build: {
      //编译文件生成目录
      outDir: 'dist',
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
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
        '/captcha/api/math': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})

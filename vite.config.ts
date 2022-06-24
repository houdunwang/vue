import { defineConfig, loadEnv, optimizeDeps } from 'vite'
import fs from 'fs'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'

//预构建的文件
const optimizeDepsIncludes = ['element-plus/es']
fs.readdirSync('node_modules/element-plus/es/components').map((dirname) => {
  fs.access(`node_modules/element-plus/es/components/${dirname}/style/css.mjs`, (err) => {
    if (!err) {
      optimizeDepsIncludes.push(`element-plus/es/components/${dirname}/style/css`)
    }
  })
})

export default defineConfig(({ command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))

  return {
    plugins: [vue({ reactivityTransform: true }), ...setupPlugins(isBuild, env), visualizer()],
    //静态文件 url 前缀
    base: isBuild ? '/dist/' : '/',
    resolve: {
      alias,
    },
    optimizeDeps: {
      include: optimizeDepsIncludes,
    },
    build: {
      //编译文件生成目录
      outDir: '../public/dist/',
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
      //open: true, //直接打开浏览器
      proxy: {
        '/api': {
          target: env.VITE_MOCK_ENABLE ? '/' : env.VITE_API_URL,
          changeOrigin: true,
        },
        '/captcha/api/math': {
          target: env.VITE_MOCK_ENABLE ? '/' : env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})

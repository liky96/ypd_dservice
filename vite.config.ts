/*
 * @Author: liky
 * @Date: 2021-07-07 15:28:51
 * @LastEditTime: 2021-07-13 09:09:44
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn", "axios"]
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
  * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
  * @default 'dist'
  */
  // outDir: 'dist',
  server: {
    // hostname: '0.0.0.0',
    host: "localhost",
    port: 3000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    // https: false,
    // 服务端渲染
    // ssr: false,
    proxy: {
      '/api': {
        // target: 'http://localhost:3333/',
        // changeOrigin: true,
        // ws: true,
        // rewrite: (pathStr) => pathStr.replace('/api', '')
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      page: path.resolve(__dirname, './src/page'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, "./src/less"),
      assets: path.resolve(__dirname, "./src/assets"),
      com: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
      mixins: path.resolve(__dirname, "./src/mixins")
    },
  }
})
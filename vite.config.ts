import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "@/styles/variables.scss"`
      }
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagou.com/api/', //代理的目标地址
        changeOrigin: true, //兼容基于名字的虚拟主机
        // rewrite: (path) => path.replace(/^\/api/, '') //路径重写
      }
    }
  }
})

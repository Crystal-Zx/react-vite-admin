import path from 'node:path'

import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()] // 添加 postcss 预设环境
    }
  }
})

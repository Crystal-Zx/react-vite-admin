import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式：区分开发环境与生产环境配置
const envResolver = {
  build: () => Object.assign({}, viteBaseConfig, viteProdConfig), // 这里使用函数形式是为了方便以后进行扩展（传参、打印）
  serve: () => Object.assign({}, viteBaseConfig, viteDevConfig)
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 此处需要访问环境变量的话，请放开下面一行的注释，并从 vite 导入 loadEnv API
  // const env = loadEnv(mode, process.cwd(), '')

  return envResolver[command]()
})

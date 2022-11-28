import { App, Plugin } from 'vue'
import { ButtonPlugin } from './Button'

const VintPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  },
}

// 全部引入所需
export default VintPlugin

// 按需引入所需
export * from './Button'

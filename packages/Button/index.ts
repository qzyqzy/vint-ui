import { App, Plugin } from 'vue'
import Button from './src/index.vue'

// 全量引入
export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('vint-button', Button)
  },
}

// 按需引入
export { Button }

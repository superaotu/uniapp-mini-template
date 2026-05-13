import { createSSRApp } from 'vue'
import { pinia } from '@/stores'
import App from './App.vue'
import router from './router'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(router)
  app.use(pinia)
  return {
    app,
  }
}

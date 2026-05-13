import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'

// TODO 按需导出
// export * from './modules'

export const pinia = createPinia()

pinia.use(piniaPersist)

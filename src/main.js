import { createApp } from 'vue'
import '@/style/index.scss'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/mock'


const app = createApp(App)

app.use(router).use(createPinia()).use(ElementPlus, {
  locale: zhCn,
})

router.isReady().then(() => {
  app.mount('#app')
})

router.onError((err) => {
  console.error(err)
})
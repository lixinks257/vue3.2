import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
// 必须引入样式，否则element样式会错乱
import 'element-plus/dist/index.css'
import SvgIcon from '@/icons'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册element Icons组件
for (const iconName in ElementPlusIconsVue) {
  app.component(iconName, (ElementPlusIconsVue as any)[iconName])
}

// 注册element Icons组件
// Object.keys(ElementPlusIconsVue).forEach((key) => {
//   app.component(
//     key,
//     ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]
//   )
// })
SvgIcon(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
// createApp(App).use(store).use(router).mount('#app')

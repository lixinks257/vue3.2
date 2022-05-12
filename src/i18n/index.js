import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'
const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
  // en: {
  //   msg: {
  //     title: 'user login'
  //   }
  // },
  // zh: {
  //   msg: {
  //     title: '用户登录'
  //   }
  // }
}

const getCurrentLanguage = () => {
  const UAlang = navigator.language // 默认zh-CN
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
  // return 'en'
}

const i18n = createI18n({
  legacy: false, // Composition API 模式
  globalInjection: true, // 全局注册 $t方法
  locale: getCurrentLanguage() || 'zh', // 语言
  messages // 数据源
})

export default i18n

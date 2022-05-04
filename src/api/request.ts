import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// axios请求拦截器
service.interceptors.request.use(
  (config) => {
    // 接口请求前，判断是否登录过
    if (localStorage.getItem('token')) {
      // token是否失效
      if (diffTokenTime()) {
        // 被动退出
        store.dispatch('app/logout')
        return Promise.reject(new Error('token 失效了'))
      }
    }
    // 为每一个请求设置token
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

// axios响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log('response', response)
    // 处理公共请求
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    console.log(error.response)
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)
export default service

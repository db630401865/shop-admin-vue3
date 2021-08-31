// src/utils/request.ts

import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL // 基础路径
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 统一设置用户身份 Token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 统一处理响应错误，例如 token 无效、服务端异常等
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
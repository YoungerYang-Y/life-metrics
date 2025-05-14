import type { ErrorCodeType } from '@/constants/error-codes'
import type { ApiResponse } from '@/types/api'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ERROR_MESSAGES, SUCCESS_CODE } from '@/constants/error-codes'
import { HTTP_STATUS_CODES } from '@/constants/http-status-codes'
import axios from 'axios'

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量获取
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送之前做一些处理，比如添加 token
    // 动态处理FormData
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // 获取http状态码与响应数据
    const { status, data } = response
    if (status >= HTTP_STATUS_CODES.SUCCESS.OK && status < HTTP_STATUS_CODES.CLIENT_ERROR.BadRequest) {
      // 处理成功响应
      if (data.code === SUCCESS_CODE) {
        return data.data
      }
      else {
        // 抛出业务错误
        const errorCode = data.code as ErrorCodeType
        return Promise.reject(new Error(ERROR_MESSAGES[errorCode] || '业务异常'))
      }
    }
    else {
      // 处理错误响应
      return Promise.reject(new Error(`HTTP Error: ${status}`))
    }
  },
  (error) => {
    // 处理网络层错误
    return Promise.reject(error)
  },
)

export default service

import type { InternalAxiosRequestConfig } from 'axios'
import service from '@/utils/http'

// 定义请求配置接口，继承自 Axios 的 InternalAxiosRequestConfig，并扩展了自定义参数
interface Config extends InternalAxiosRequestConfig {
  showLoading?: boolean // 是否显示加载动画
  mock?: boolean // 是否启用 mock 数据
  cache?: boolean // 是否启用缓存
}

// 定义 http 对象，封装常用的 HTTP 请求方法
const http = {
  /**
   * 发送 GET 请求到指定的 URL，可选地附带查询参数和额外配置。
   *
   * @template T - 预期的响应数据类型。
   * @param {string} url - 请求的目标 URL。
   * @param {object} [params] - 可选的查询参数。
   * @param {Config} [config] - 可选的额外请求配置。
   * @returns {Promise<T>} 返回一个 Promise，解析为类型为 `T` 的响应数据。
   */
  get<T>(url: string, params?: object, config?: Config): Promise<T> {
    return service.get(url, { params, ...config })
  },

  /**
   * 发送 POST 请求到指定的 URL，可选地附带请求体数据和额外配置。
   *
   * @template T - 预期的响应数据类型。
   * @param {string} url - 请求的目标 URL。
   * @param {object} [data] - 可选的请求体数据。
   * @param {Config} [config] - 可选的额外请求配置。
   * @returns {Promise<T>} 返回一个 Promise，解析为类型为 `T` 的响应数据。
   */
  post<T>(url: string, data?: object, config?: Config): Promise<T> {
    return service.post(url, data, config)
  },

  /**
   * 发送 PUT 请求到指定的 URL，可选地附带请求体数据和额外配置。
   *
   * @template T - 预期的响应数据类型。
   * @param {string} url - 请求的目标 URL。
   * @param {object} [data] - 可选的请求体数据。
   * @param {Config} [config] - 可选的额外请求配置。
   * @returns {Promise<T>} 返回一个 Promise，解析为类型为 `T` 的响应数据。
   */
  put<T>(url: string, data?: object, config?: Config): Promise<T> {
    return service.put(url, data, config)
  },

  /**
   * 发送 DELETE 请求到指定的 URL，可选地附带额外配置。
   *
   * @template T - 预期的响应数据类型。
   * @param {string} url - 请求的目标 URL。
   * @param {Config} [config] - 可选的额外请求配置。
   * @returns {Promise<T>} 返回一个 Promise，解析为类型为 `T` 的响应数据。
   */
  delete<T>(url: string, config?: Config): Promise<T> {
    return service.delete(url, config)
  },
}

export default http

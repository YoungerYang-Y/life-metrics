/**
 * 标准 API 响应结构
 * @template T - 业务数据泛型（默认 any）
 */
export interface ApiResponse<T = any> {
  code: number // 业务状态码 (必须)
  message: string // 人类可读信息 (必须)
  data?: T // 业务数据负载 (可选)
  timestamp?: number// 服务器时间戳 (可选)
}

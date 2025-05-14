/**
 * HTTP 状态码常量集合
 */
export const HTTP_STATUS_CODES = {
  // 成功响应
  SUCCESS: {
    OK: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
  },

  // 客户端错误
  CLIENT_ERROR: {
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
  },

  // 服务端错误
  SERVER_ERROR: {
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
  },
} as const

/**
 * HTTP 状态码类型定义（可选导出）
 */
export type HttpStatusCodeType = typeof HTTP_STATUS_CODES[keyof typeof HTTP_STATUS_CODES]

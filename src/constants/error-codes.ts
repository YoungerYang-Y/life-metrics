// 业务成功码常量
export const SUCCESS_CODE = 0

/**
 * 业务错误码常量（按模块分类）
 * 命名规范：模块_错误类型 (全大写蛇形命名)
 */
export const ERROR_CODES = {
  // ================= 通用错误 (1000-1999) =================
  COMMON: {
    INVALID_PARAMS: 1001, // 参数校验失败
    RESOURCE_NOT_FOUND: 1002, // 资源不存在
    UNAUTHORIZED_ACCESS: 1003, // 未授权访问
    RATE_LIMIT_EXCEEDED: 1004, // 请求频率过高
  } as const,

  // ================= 用户模块 (2000-2999) =================
  USER: {
    LOGIN_FAILED: 2001, // 登录失败
    USER_DISABLED: 2002, // 用户已禁用
    DUPLICATE_PHONE: 2003, // 手机号重复
    INVALID_CREDENTIALS: 2004, // 凭证无效
  } as const,
} as const

/**
 * 错误码类型定义
 * 生成所有错误码的联合类型
 */
export type ErrorCodeType = typeof ERROR_CODES[keyof typeof ERROR_CODES][keyof typeof ERROR_CODES[keyof typeof ERROR_CODES]]

/**
 * 错误码与消息映射
 */
export const ERROR_MESSAGES: Record<ErrorCodeType, string> = {
  // 通用错误
  1001: '参数校验失败，请检查输入',
  1002: '请求的资源不存在',
  1003: '未授权访问，请先登录',
  1004: '请求过于频繁，请稍后重试',

  // 用户模块
  2001: '用户名或密码错误',
  2002: '账户已被禁用，请联系管理员',
  2003: '该手机号已被注册',
  2004: '登录凭证已过期',

} as const

## 何时使用

- 需要统一的 HTTP 请求封装（基于 axios），支持参数序列化与结果/错误格式化、可选缓存。

## API

### Request 概览

- serializeParams(val, prefix?)
- get(url, params?, config?)
- post(url, params?, config?)

开发环境（NODE_ENV=development）默认 axios.baseURL = '/api'。

---

### get(url, params?, config?) / post(url, params?, config?)

封装 axios 的 GET/POST；当提供 `config.cacheKey` 时，优先读写本地缓存。

- config 关键字段

| 字段     | 类型   | 说明                            |
| -------- | ------ | ------------------------------- |
| cacheKey | string | 缓存 key，用于同 url 的缓存区分 |
| headers  | object | 常规请求头配置                  |

post 当 headers 的 Content-Type 含 `x-www-form-urlencoded` 时，会使用 serializeParams 对对象进行扁平化序列化。

返回 Promise，resolve 为已格式化数据（自动解包 axios.data，字符串尝试 JSON.parse），reject 为已格式化错误（直接返回 response）。

---

### serializeParams(val, prefix?)

对象序列化为 a=1&b.c=2 形式的查询串。

## 注意事项

1. 缓存依赖 Storage（localforage + LocalStorage/SessionStorage 的组合封装）。
2. getCache/setCache 以 url 为 key 存储 { cacheKey, data }，cacheKey 不一致会失效。

## 何时使用

- 需要统一的本地缓存封装：localforage 异步存储 + LocalStorage/SessionStorage 辅助方法 + React hook 的缓存状态。

## API

### Storage 概览

异步 KV：

- getItem(key) => Promise<any>
- setItem(key, value) => Promise<any>
- removeItem(key) => Promise<void>
- clear() => Promise<void>

LocalStorage：

- setLocalStorage(key, val)
- getLocalStorage(key)
- getLocalStorages()
- removeLocalStorage(key)
- removeLocalStorages(filter)
- clearLocalStorage()

SessionStorage：

- setSessionStorage(key, val)
- getSessionStorage(key)
- getSessionStorages()
- removeSessionStorage(key)
- removeSessionStorages(filter)
- clearSessionStorage()

React Hook：

- useCacheState(initialValue, { name, persist }) => [value, setValue]
- 以及辅助：clearCache(cacheName, { match?: 'prefix' }) / setCache / getCache

---

### useCacheState(initialValue, { name, persist })

页面数据缓存：

- name: 唯一缓存名（必填时才启用缓存能力）
- persist: true|'session'|false（默认 false）

返回 setter 会同步写入 window 与 Local/SessionStorage（取决于 persist），传入 undefined/null/'' 表示删除缓存。

## 注意事项

1. DataParse 将 number/boolean/object 等进行类型前缀封装与解析，保证还原原始类型。
2. clearCache 支持前缀清理（删除 window 与各存储中以 `name:` 开头的所有项）。

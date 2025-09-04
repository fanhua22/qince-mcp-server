## 何时使用

- 需要动态加载外部脚本（JS）或图片资源时。
- 需要快速获取资源文件扩展名时。

## API

### AssetUtil 概览

- getFileExtension(src)
- loadJs(src, options?)
- loadImage(src, options?)

以下为各方法详细说明。

---

### getFileExtension(src)

获取资源地址的扩展名。

- 参数

| 名称 | 类型   | 必填 | 说明                     |
| ---- | ------ | ---- | ------------------------ |
| src  | string | 是   | 资源地址（可含查询参数） |

- 返回

string | null（匹配不到返回 null，非字符串返回 ''）。

---

### loadJs(src, options?)

动态加载外部脚本，返回 Promise，成功时 resolve(script 元素)，失败时 resolve(null)。

- 参数

| 名称    | 类型   | 必填 | 说明        |
| ------- | ------ | ---- | ----------- |
| src     | string | 是   | JS 脚本地址 |
| options | object | 否   | 见下表      |

- options 说明

| 字段           | 类型       | 说明                                     |
| -------------- | ---------- | ---------------------------------------- |
| async          | boolean    | script.async                             |
| charset        | string     | script.charset                           |
| text           | string     | 以文本注入脚本内容                       |
| type           | string     | script.type，默认 'text/javascript'      |
| id             | string     | 设置 DOM id                              |
| defer          | boolean    | script.defer                             |
| crossorigin    | string     | script.crossorigin                       |
| integrity      | string     | script.integrity                         |
| referrerPolicy | string     | script.referrerPolicy                    |
| success        | () => void | 成功回调（同时 Promise resolve 非 null） |
| fail           | () => void | 失败回调（同时 Promise resolve null）    |

- 返回

Promise<HTMLScriptElement | null>。

---

### loadImage(src, options?)

动态加载图片资源。加载完成 resolve(true)，失败 resolve(false)。

- 参数

| 名称    | 类型   | 必填 | 说明     |
| ------- | ------ | ---- | -------- |
| src     | string | 是   | 图片地址 |
| options | object | 否   | 见下表   |

- options 说明

| 字段    | 类型                            | 说明             |
| ------- | ------------------------------- | ---------------- |
| success | (img: HTMLImageElement) => void | 图片加载成功回调 |
| fail    | () => void                      | 图片加载失败回调 |

- 返回

Promise<boolean>。

## 注意事项

1. loadJs 使用异步 Promise 包装第三方 load-script，错误不会 reject，而是 resolve(null)。
2. 重复加载同一脚本时请传入唯一 id，或自行判断 window 上的 SDK 对象以避免重复注入。
3. getFileExtension 对不规范地址可能返回 null，请做好兜底。

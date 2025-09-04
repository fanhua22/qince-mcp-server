## 何时使用

- 需要为组件或页面提供国际化能力：设置语言、按 key 渲染文案（含变量与 React 节点）、获取语言映射。

## API

### LocaleUtil 概览

- languageMap: Record<string, { dayjs: string, translate: { google: string, bing: string } }>
- setLocale(language, data)
- locale(remark, key?, variables?)

---

### setLocale(language, data)

设置当前语言与文案数据。

- 参数

| 名称     | 类型   | 必填 | 说明                                        |
| -------- | ------ | ---- | ------------------------------------------- |
| language | string | 是   | 语言代码（如 'zh_CN'、'en_US'，需在映射内） |
| data     | object | 是   | 国际化字典（key -> value）                  |

调用后会设置 `window.seedsLocaleLanguage` 与 `window.seedsLocaleData`。

---

### locale(remark, key?, variables?)

按 key 渲染国际化文案；若 key 未命中，则回退到 remark；支持变量替换与 React Node 嵌入。

- 参数

| 名称      | 类型              | 必填 | 说明                                                     |
| --------- | ----------------- | ---- | -------------------------------------------------------- |
| remark    | string\|ReactNode | 否   | 兜底文案或节点                                           |
| key       | string            | 否   | 国际化 key                                               |
| variables | Array<any>        | 否   | 变量数组，文案内使用 {0}{1}... 占位，含 Node 时返回 Node |

- 返回

string | ReactNode。

---

### languageMap

统一的语言映射（dayjs 与常见翻译服务代码）。

## 注意事项

1. locale 会优先读取 `window.seedsLocaleData`，如存在 `window.localeData` 将覆盖同名 key。
2. 变量替换：字符串文案中的 {0}{1}... 会按传入 variables 顺序替换；若包含 React 节点，将返回 Fragment。

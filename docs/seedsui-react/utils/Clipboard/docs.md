## 何时使用

- 需要在网页中一键复制文本到系统剪贴板时（含较老环境的兼容）。

## API

### Clipboard 概览

- copy(input, options?)

（内部还包含 selectContent / createElementForExecCommand 等工具方法，一般无需直接使用。）

---

### copy(input, options?)

复制文本到剪贴板，在现代与部分旧环境做了兼容处理。

- 参数

| 名称    | 类型   | 必填 | 说明           |
| ------- | ------ | ---- | -------------- |
| input   | string | 是   | 需要复制的文本 |
| options | object | 否   | 见下表         |

- options 说明

| 字段       | 类型                              | 说明                           |
| ---------- | --------------------------------- | ------------------------------ |
| success    | (msg?: string) => void            | 成功回调                       |
| fail       | (err: { errMsg: string }) => void | 失败回调                       |
| successMsg | string                            | 成功提示文案（默认国际化文案） |
| errorMsg   | string                            | 失败提示文案（默认国际化文案） |

- 返回

void。

## 注意事项

1. 旧版浏览器可能需要用户交互触发（click/tap）才能写入剪贴板。
2. 在受限环境（跨域 iframe / 特殊容器）可能无法访问剪贴板，fail 回调会触发。

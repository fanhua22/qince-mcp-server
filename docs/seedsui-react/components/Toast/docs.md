## 何时使用

- 需要在页面内以轻提示形式展示短信息时。
- 需要全局调用的提示能力（无需在 JSX 中显式挂载组件）时。

## 组件结构（index.js 导出）

- `Toast.show(options)` 显示提示
- `Toast.hide(options)` 关闭提示

## API

### Toast.show(options)

展示一条 Toast，数秒后自动关闭。

| 参数            | 说明                              | 类型                          | 默认值                 |
| --------------- | --------------------------------- | ----------------------------- | ---------------------- |
| content         | 文本内容（支持 HTML 文本）        | string                        | ''                     |
| duration        | 显示时长（毫秒）                  | number                        | 2000                   |
| position        | 出现位置                          | 'top' \| 'middle' \| 'bottom' | 'middle'               |
| maskClickable   | 遮罩是否可点透                    | boolean                       | false                  |
| id              | 根节点 id                         | string                        | '**SeedsUI_toast_el**' |
| maskProps       | 遮罩 props（className、style 等） | { className?, style? }        | -                      |
| className       | 内容容器额外类名                  | string                        | -                      |
| style           | 内容容器样式（背景、颜色等）      | CSSProperties                 | -                      |
| onVisibleChange | 显隐回调                          | (visible:boolean)=>void       | -                      |

返回值：`HTMLElement`（遮罩根节点）。

说明：可通过设置 `Toast.defaultProps = { ... }` 的方式配置全局默认样式（内部会优先合并默认项）。

---

### Toast.hide(options)

关闭当前（或指定 id 的）Toast。

| 参数            | 说明     | 类型                    | 默认值 |
| --------------- | -------- | ----------------------- | ------ |
| onVisibleChange | 显隐回调 | (visible:boolean)=>void | -      |

## 注意事项

1. `content` 支持字符串 HTML，请确保内容安全来源。
2. 若多次连续 `show`，后一次会覆盖前一次容器内容。
3. 若需自定义全局样式，可通过设置 `maskProps.style`、`style` 和 `className`。

## 示例

更多请参考同目录的 `examples.md`。

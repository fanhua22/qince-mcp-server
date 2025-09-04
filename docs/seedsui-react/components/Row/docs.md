## 何时使用

- 页面需要基于 24 栅格进行快速布局时。
- 表单、详情行等左右分栏布局场景。

## 组件结构

- `Row` 行容器
- `Row.Col` 列容器（通过 `span` 指定所占列数，1-24）

## API

### Row

| 参数      | 说明       | 类型          | 默认值 |
| --------- | ---------- | ------------- | ------ |
| className | 自定义类名 | string        | -      |
| style     | 自定义样式 | CSSProperties | -      |
| children  | 子节点     | ReactNode     | -      |

#### Ref（Row）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### Row.Col

| 参数      | 说明                   | 类型      | 默认值 |
| --------- | ---------------------- | --------- | ------ |
| span      | 栅格占位（1-24），必填 | number    | 0      |
| className | 自定义类名             | string    | -      |
| style     | 自定义样式             | object    | -      |
| children  | 列内容                 | ReactNode | -      |

> 当前实现中每个 `Row` 内置 24 列，`Row.Col` 会渲染 `col col-{span}` 类名，并通过样式计算宽度。

#### Ref（Row.Col）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. 组件样式通过特定类名与变量提供布局：`row`、`col`、`col-1` ~ `col-24`。
2. 请优先使用 CSS 变量与全局类名（参考 `src/library/assets/style/global-after.less` 与 `src/library/assets/seedsui/seedsui-react.min.css`）控制间距、颜色与排版。
3. 当前版本未内置列间距（gutter）逻辑，若需间距可自定义 `style`（如 `padding`）或为子内容添加内边距。

## 示例

更多请参考同目录的 `examples.md`。

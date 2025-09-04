## 何时使用

- 需要通用排版能力：文本省略、关键字高亮、金额格式化、表单排版等。

## 组件结构（index.js 导出）

- `Typography` 容器
- `Typography.Form` 表单排版容器（含 `Item/Label/Main`）
- `Typography.Amount` 金额展示
- `Typography.Paragraph` 段落
- `Typography.Text` 文本
- `Typography.Title` 标题
- 静态方法：`Typography.getDisplayValue(value, options)`

## API

### Typography（容器）

| 参数      | 说明       | 类型          | 默认值 |
| --------- | ---------- | ------------- | ------ |
| className | 自定义类名 | string        | -      |
| style     | 自定义样式 | CSSProperties | -      |
| children  | 子节点     | ReactNode     | -      |

---

### Typography.Amount（金额）

| 参数           | 说明               | 类型    | 默认值 |
| -------------- | ------------------ | ------- | ------ |
| precision      | 小数精度           | number  | 2      |
| currencySymbol | 货币符号（如 '¥'） | string  | -      |
| noStyle        | 是否不使用默认样式 | boolean | false  |
| children       | 数值（必填）       | number  | -      |

---

### Typography.Text / Paragraph / Title（通用）

| 参数      | 说明                                                      | 类型      | 默认值 |
| --------- | --------------------------------------------------------- | --------- | ------ |
| highlight | 关键字高亮                                                | string    | -      |
| ellipsis  | 省略配置：`{ rows,rowHeight,expandable,defaultExpanded }` | object    | -      |
| children  | 文本内容                                                  | ReactNode | -      |

说明：当 `ellipsis.expandable=true && children` 为字符串时，会自动计算可见内容并展示“展开/收起”。

---

### Typography.Form（布局）

- `Form`：`layout='horizontal'|'vertical'|'inline'`，`labelCol/mainCol` 指定栅格。
- `Form.Item`：`name`、`help`、`extra`、`inputExtra`、`rules` 等；自动拼接 id：`seed-form-item-${name}`。
- `Form.Label`：`span/ellipsis/required/help`。
- `Form.Main`：`span/ellipsis/inputExtra/extra/error`。

#### Form 额外能力

| 方法          | 说明                           |
| ------------- | ------------------------------ |
| scrollToField | 滚动到指定字段（依赖容器 DOM） |

---

### Typography.getDisplayValue(value, options)

常用展示值格式化（日期、日期范围、数组、数字精度等）。

## 注意事项

1. 使用 `ellipsis` 时建议显式设置 `rowHeight`，避免不同字体导致的计算偏差。
2. `Form` 的 `virtual` 模式用于长表单虚拟化，需要为可见项传入 `height` 才能正确监听。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Typography/demos/*`。

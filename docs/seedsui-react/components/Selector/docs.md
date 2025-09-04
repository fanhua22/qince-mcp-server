## 何时使用

- 需要将选项渲染为宫格按钮（支持多列），进行单选/多选。
- 需要轻量、无需弹窗的选择交互。

## 组件结构

- `Selector` 按钮选择器（宫格）

## API

### Selector

| 参数       | 说明                           | 类型          | 默认值 |
| ---------- | ------------------------------ | ------------- | ------ |
| columns    | 列数（宫格列数）               | number        | 2      |
| multiple   | 是否多选                       | boolean       | false  |
| allowClear | 单选时是否允许取消选择         | boolean       | false  |
| value      | 当前值（数组）                 | `{id,name}[]` | -      |
| list       | 选项列表（过滤无 id/name）     | `{id,name}[]` | -      |
| onChange   | 值变化回调                     | (value)=>void | -      |
| className  | 自定义类名                     | string        | -      |
| style      | 自定义样式（支持 `--columns`） | CSSProperties | -      |

项点击规则：

- 单选：点击直接替换，若 `allowClear` 且再次点击同一项则清空。
- 多选：点击切换当前项的选中状态。

#### Ref

| 方法        | 说明           |
| ----------- | -------------- |
| rootDOM     | 根节点         |
| getRootDOM  | 获取根节点     |
| instance    | { equalsItem } |
| getInstance | 获取实例       |

## 注意事项

1. `list` 内部会过滤空项或无 `id/name` 的项。
2. 推荐使用 seeds 变量控制配色与圆角：`--seed-primary`、`--seed-radius-s` 等。

## 示例

更多请参考同目录的 `examples.md`。

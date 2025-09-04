## 何时使用

- 需要展示基于 Seeds 图标字库的图标，或包裹自定义图标时。
- 控制图标尺寸（像素）且保持等比显示时。

## API

### Icon

| 参数      | 说明                       | 类型            | 默认值 |
| --------- | -------------------------- | --------------- | ------ |
| size      | 以像素为单位设置宽高与字体 | `number`        | `-`    |
| className | 自定义类名                 | `string`        | `-`    |
| style     | 自定义样式                 | `CSSProperties` | `-`    |
| children  | 嵌套节点（可选）           | `ReactNode`     | `-`    |

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. 若使用 Seeds 内置图标，请在 `className` 中加入对应 `seeds-icons seeds-icon-xxx` 类名。
2. `size` 会同时设置 `width/height/fontSize`，用于等比放大缩小。

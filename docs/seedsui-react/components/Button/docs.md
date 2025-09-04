## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
- 在表单中用于提交、重置等操作。
- 在各种界面中用于触发操作、导航等。

## API

### Button

按钮组件，支持多种颜色、变体、尺寸和形状。

| 参数      | 说明       | 类型                                                                   | 默认值    |
| --------- | ---------- | ---------------------------------------------------------------------- | --------- |
| color     | 按钮颜色   | 'default' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success' | 'default' |
| variant   | 按钮变体   | 'default' \| 'outline' \| 'text' \| 'fill'                             | 'default' |
| size      | 按钮尺寸   | 'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'                             | 'm'       |
| radius    | 按钮圆角   | 'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'                             | -         |
| shape     | 按钮形状   | 'square' \| 'circle' \| 'round'                                        | 'square'  |
| disabled  | 是否禁用   | boolean                                                                | false     |
| className | 自定义类名 | string                                                                 | -         |
| children  | 按钮内容   | ReactNode                                                              | -         |

### 颜色说明

- `default`: 默认颜色
- `primary`: 主要颜色
- `link`: 链接颜色
- `warning`: 警告颜色
- `danger`: 危险颜色
- `success`: 成功颜色

### 变体说明

- `default`: 默认变体
- `outline`: 描边变体
- `text`: 文本变体
- `fill`: 填充变体

### 尺寸说明

- `xxs`: 超超小尺寸
- `xs`: 超小尺寸
- `s`: 小尺寸
- `m`: 中等尺寸（默认）
- `l`: 大尺寸
- `xl`: 超大尺寸

### 圆角说明

- `xxs`: 超超小圆角
- `xs`: 超小圆角
- `s`: 小圆角
- `m`: 中等圆角
- `l`: 大圆角
- `xl`: 超大圆角

### 形状说明

- `square`: 方形
- `circle`: 圆形
- `round`: 圆角

### Ref 方法

| 方法       | 说明           | 参数 |
| ---------- | -------------- | ---- |
| rootDOM    | 获取根元素 DOM | -    |
| getRootDOM | 获取根元素 DOM | -    |

## 注意事项

1. 当 `color` 为 'default' 时，不会添加颜色相关的类名
2. 当 `variant` 为 'default' 时，不会添加变体相关的类名
3. 可以通过 `className` 属性自定义样式
4. 支持所有标准的 HTML 按钮属性（如 `onClick`、`type` 等）
5. 可以通过 `shape` 属性创建圆形或圆角按钮
6. 支持 `disabled` 状态，禁用时按钮不可点击

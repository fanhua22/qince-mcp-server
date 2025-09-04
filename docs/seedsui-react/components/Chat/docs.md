## 何时使用

- 需要展示聊天对话界面时。
- 需要显示消息列表，包含头像、作者、内容、时间等信息。
- 支持左右布局，可以区分发送者和接收者。
- 需要支持消息选择功能时。

## API

### Chat

Chat 是一个组合组件，包含以下子组件：

- `Chat.List`: 聊天列表组件，用于展示多条聊天消息
- `Chat.Item`: 聊天单项组件，用于展示单条聊天消息

### Chat.List

聊天列表组件，用于展示多条聊天消息。

| 参数             | 说明              | 类型                  | 默认值 |
| ---------------- | ----------------- | --------------------- | ------ |
| timeSpace        | 时间间隔，单位 ms | number                | 60000  |
| value            | 当前选中的消息    | array                 | -      |
| list             | 消息列表          | array                 | -      |
| checkable        | 是否显示复选框    | boolean               | false  |
| checkbox         | 自定义复选框      | function({ checked }) | -      |
| checkboxProps    | 复选框属性        | object                | -      |
| checkboxPosition | 复选框位置        | 'left' \| 'right'     | 'left' |
| onChange         | 选择变化回调      | function(value)       | -      |

### Chat.Item

聊天单项组件，用于展示单条聊天消息。

| 参数             | 说明           | 类型                  | 默认值 |
| ---------------- | -------------- | --------------------- | ------ |
| itemData         | 消息数据       | object                | -      |
| checkable        | 是否显示复选框 | boolean               | false  |
| checkbox         | 自定义复选框   | function({ checked }) | -      |
| checkboxProps    | 复选框属性     | object                | -      |
| checkboxPosition | 复选框位置     | 'left' \| 'right'     | 'left' |
| position         | 消息位置       | 'left' \| 'right'     | 'left' |
| avatar           | 头像地址       | string                | -      |
| author           | 作者名称       | string                | -      |
| content          | 消息内容       | ReactNode             | -      |
| checked          | 是否选中       | boolean               | false  |
| onChange         | 选择变化回调   | function(checked)     | -      |

### list 数据结构

```typescript
interface ChatMessage {
  id: string | number // 消息ID
  name: string // 作者名称
  content: string | ReactNode // 消息内容
  avatar?: string // 头像地址
  position?: 'left' | 'right' // 消息位置
  time?: Date // 消息时间
  checkbox?: function({ checked }) // 自定义复选框
  checkboxPosition?: 'left' | 'right' // 复选框位置
}
```

### checkbox 函数

```typescript
function checkbox({ checked }) {
  return <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
}
```

### Ref 方法

| 方法       | 说明           | 参数 |
| ---------- | -------------- | ---- |
| rootDOM    | 获取根元素 DOM | -    |
| getRootDOM | 获取根元素 DOM | -    |

## 注意事项

1. `timeSpace` 属性控制时间分栏的显示间隔，默认 1 分钟
2. 当消息时间超过 `timeSpace` 间隔时，会自动显示时间分栏
3. `position` 为 'left' 时显示为接收者消息，为 'right' 时显示为发送者消息
4. 可以通过 `checkbox` 属性自定义复选框的样式和行为
5. `checkboxPosition` 控制复选框在消息中的位置
6. 组件会自动处理时间分栏的显示逻辑
7. 支持通过 `onChange` 回调处理消息选择状态的变化
8. 可以通过 `avatar` 属性显示用户头像
9. 组件支持响应式布局，在不同屏幕尺寸下自动调整

## 何时使用

- 需要在两个列表之间移动数据项（已选/未选）时。
- 需要弹窗/组合器/主体三段式复用时。

## 组件结构（index.js 导出）

- `Transfer.Combo` 组合器（触发选择弹窗）
- `Transfer.Modal` 弹窗（受控）
- `Transfer.Main` 主体（仅渲染列表与交互）

## 数据结构

```ts
interface TransferItem {
  id: string | number
  name: string
}
```

值：`TransferItem[]`

## API

### Transfer.Combo

| 参数       | 说明                    | 类型           | 默认值 |
| ---------- | ----------------------- | -------------- | ------ |
| value      | 当前值（已选列表）      | TransferItem[] | -      |
| list       | 可选列表                | TransferItem[] | -      |
| allowClear | 是否允许清除            | boolean        | -      |
| modalProps | 透传给 `Transfer.Modal` | object         | -      |
| onChange   | 选择变化                | (value)=>void  | -      |

---

### Transfer.Modal

| 参数      | 说明               | 类型           | 默认值 |
| --------- | ------------------ | -------------- | ------ |
| visible   | 是否可见           | boolean        | -      |
| value     | 当前值（已选列表） | TransferItem[] | -      |
| list      | 可选列表           | TransferItem[] | -      |
| main      | 自定义主体组件     | Component      | Main   |
| mainProps | 主体属性           | object         | -      |
| onChange  | 选择变化           | (value)=>void  | -      |

---

### Transfer.Main

| 参数       | 说明               | 类型             | 默认值 |
| ---------- | ------------------ | ---------------- | ------ |
| value      | 当前值（已选列表） | TransferItem[]   | -      |
| list       | 可选列表           | TransferItem[]   | -      |
| titles     | 标题（已选/未选）  | string[]\|object | -      |
| allowClear | 允许删除           | boolean          | -      |
| onChange   | 变化回调           | (value)=>void    | -      |

## 注意事项

1. `Transfer.Main` 内部使用拖拽排序（sortablejs），在已选列表中可调整顺序。
2. `Transfer.Combo` 仅负责触发与承载 `Modal`；核心选择逻辑在 `Main`。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Transfer/demos/*`。

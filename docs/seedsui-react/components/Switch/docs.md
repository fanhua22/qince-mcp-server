## 何时使用

- 需要在两种状态之间进行即时切换（开/关、是/否）时。
- 表单项或设置项中的布尔值开关。

## 组件结构

- `Switch` 开关组件

## API

### Switch

| 参数      | 说明             | 类型                    | 默认值 |
| --------- | ---------------- | ----------------------- | ------ |
| checked   | 是否选中（受控） | boolean                 | false  |
| readOnly  | 是否只读         | boolean                 | false  |
| disabled  | 是否禁用         | boolean                 | false  |
| onChange  | 状态变更回调     | (checked:boolean)=>void | -      |
| className | 自定义类名       | string                  | -      |
| style     | 自定义样式       | CSSProperties           | -      |

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. `readOnly` 与 `disabled` 均会阻止切换；`disabled` 同时会呈现禁用样式。
2. 建议与明确的标签/说明文案一起使用，提升可理解性。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Switch/demos/demo1.jsx`。

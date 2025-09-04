## 何时使用

- 需要进行单个或多个布尔值（是/否）选择时。
- 用于表单、列表或设置项中快速切换选中状态。
- 与 Checkbox.Group 搭配可实现单选或多选列表。

## API

### Checkbox

| 参数         | 说明                                                      | 类型                                                                 | 默认值   |
| ------------ | --------------------------------------------------------- | -------------------------------------------------------------------- | -------- |
| icon         | 自定义图标，支持类名、ReactNode 或返回 ReactNode 的函数。 | `string \| ReactNode \| (option: { checked: boolean }) => ReactNode` | `-`      |
| iconPosition | 图标位置，`left` 在内容左侧，`right` 在内容右侧。         | `'left' \| 'right'`                                                  | `'left'` |
| checked      | 是否选中                                                  | `boolean`                                                            | `false`  |
| readOnly     | 是否只读，开启后不可修改选中状态                          | `boolean`                                                            | `false`  |
| disabled     | 是否禁用                                                  | `boolean`                                                            | `false`  |
| onChange     | 选中状态改变回调                                          | `(checked: boolean) => void`                                         | `-`      |
| children     | 显示内容                                                  | `ReactNode`                                                          | `-`      |
| className    | 自定义类名                                                | `string`                                                             | `-`      |
| style        | 自定义样式                                                | `CSSProperties`                                                      | `-`      |

#### Ref

| 属性       | 说明                | 类型                   |
| ---------- | ------------------- | ---------------------- |
| rootDOM    | 原生 `div` 节点     | `HTMLDivElement`       |
| getRootDOM | 获取原生 `div` 节点 | `() => HTMLDivElement` |

---

### Checkbox.Group

| 参数         | 说明                               | 类型                                        | 默认值   |
| ------------ | ---------------------------------- | ------------------------------------------- | -------- |
| icon         | 统一自定义图标，同 Checkbox `icon` | 同上                                        | `-`      |
| iconPosition | 图标位置                           | `'left' \| 'right'`                         | `'left'` |
| allowClear   | 单选时再次点击已选项是否允许清空   | `boolean`                                   | `false`  |
| multiple     | 是否多选，`false` 表示单选         | `boolean`                                   | `true`   |
| value        | 当前值数组                         | `{ id: string \| number, name?: string }[]` | `-`      |
| list         | 选项列表                           | 同 `value`                                  | `-`      |
| readOnly     | 是否只读                           | `boolean`                                   | `false`  |
| disabled     | 是否禁用                           | `boolean`                                   | `false`  |
| onChange     | 选项改变回调                       | `(value: any[] \| null) => void`            | `-`      |
| className    | 自定义类名                         | `string`                                    | `-`      |
| style        | 自定义样式                         | `CSSProperties`                             | `-`      |

#### Ref

| 属性       | 说明                | 类型                   |
| ---------- | ------------------- | ---------------------- |
| rootDOM    | 原生 `div` 节点     | `HTMLDivElement`       |
| getRootDOM | 获取原生 `div` 节点 | `() => HTMLDivElement` |

## 注意事项

1. 当 `disabled` 或 `readOnly` 为 `true` 时，组件不响应点击事件。
2. `icon` 支持三种写法：字符串类名、ReactNode、函数返回 ReactNode；函数会收到 `{ checked }` 参数。
3. Checkbox.Group 在 `multiple=false` 时表现为单选；配合 `allowClear` 可允许取消选择。

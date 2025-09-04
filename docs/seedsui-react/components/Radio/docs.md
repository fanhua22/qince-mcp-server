## 何时使用

- 需要在一组选项中进行单选时。
- 需要以列表的形式展示单选项，并支持允许清空的单选行为时。

## 组件结构

- `Radio` 单个单选输入（基于 Checkbox 渲染）
- `Radio.Group` 单选列表（内部以 `Checkbox.Group` 实现，`multiple=false`）

## API

### Radio

| 参数         | 说明                                    | 类型                                       | 默认值 |
| ------------ | --------------------------------------- | ------------------------------------------ | ------ |
| checked      | 是否选中                                | boolean                                    | false  |
| icon         | 自定义图标，类名 / ReactNode / 渲染函数 | string \| ReactNode \| ((o:{checked})=>RN) | -      |
| iconPosition | 图标位置                                | 'left' \| 'right'                          | 'left' |
| readOnly     | 只读                                    | boolean                                    | false  |
| disabled     | 禁用                                    | boolean                                    | false  |
| onChange     | 选中状态变更                            | (checked:boolean)=>void                    | -      |
| className    | 自定义类名                              | string                                     | -      |
| style        | 自定义样式                              | CSSProperties                              | -      |
| children     | 文本/自定义内容                         | ReactNode                                  | -      |

#### Ref（Radio）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### Radio.Group（单选列表）

| 参数         | 说明                     | 类型                                          | 默认值 |
| ------------ | ------------------------ | --------------------------------------------- | ------ |
| value        | 当前值（单选对象）       | `{ id: string\|number, name?: string }\|null` | -      |
| list         | 选项列表                 | 同上数组                                      | -      |
| allowClear   | 再次点击已选项时是否清空 | boolean                                       | false  |
| readOnly     | 只读                     | boolean                                       | false  |
| disabled     | 禁用                     | boolean                                       | false  |
| icon         | 统一自定义图标           | 同 `Radio.icon`                               | -      |
| iconPosition | 图标位置                 | 'left' \| 'right'                             | 'left' |
| onChange     | 值变化                   | (value:any\|null)=>void                       | -      |
| className    | 自定义类名               | string                                        | -      |
| style        | 自定义样式               | CSSProperties                                 | -      |

#### Ref（Radio.Group）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 样式说明

- 选中图标样式由 `Radio` 组件的样式表控制，选中时会应用 `checkbox checked .checkbox-icon.radio` 的主题色，支持 CSS 变量 `var(--seed-primary)` 等。

## 示例

更多请参考同目录的 `examples.md`。

## 何时使用

- 需要弹出确认 / 二次交互对话框时。
- 需要以组合方式快速构建包含图标、标题、内容、按钮的模态框时。

## 组件结构

Confirm 由以下子组件组成：

| 子组件           | 说明                                                     |
| ---------------- | -------------------------------------------------------- |
| `Confirm.Combo`  | 一键触发的组合组件，点击包裹元素后自动打开 Confirm.Modal |
| `Confirm.Modal`  | 核心模态框组件                                           |
| `Confirm.Header` | 头部容器，一般包含 Icon 和 Title                         |
| `Confirm.Main`   | 内容区域                                                 |
| `Confirm.Footer` | 底部操作区域                                             |
| `Confirm.Icon`   | 预设图标容器                                             |
| `Confirm.Title`  | 标题容器                                                 |
| `Confirm.Button` | 底部按钮                                                 |

下面分别介绍参数与用法。

### Confirm.Combo

| 参数          | 说明                                        | 类型                                                                 | 默认值       |
| ------------- | ------------------------------------------- | -------------------------------------------------------------------- | ------------ |
| icon          | 自定义图标，支持类名 / ReactNode / 渲染函数 | `string \| ReactNode \| (options)=>ReactNode`                        | `-`          |
| title         | 标题文本                                    | `string`                                                             | `-`          |
| content       | 弹窗内容                                    | `ReactNode`                                                          | `-`          |
| buttons       | 按钮列表                                    | `Array<{ id: string, name: string, onClick?: ()=>boolean \| void }>` | `[]`         |
| buttonsLayout | 按钮排布，`horizontal` / `vertical`         | `string`                                                             | `horizontal` |
| className     | 自定义类名                                  | `string`                                                             | `-`          |
| style         | 自定义样式                                  | `CSSProperties`                                                      | `-`          |

#### Ref

| 方法        | 说明         |
| ----------- | ------------ |
| open        | 打开弹窗     |
| close       | 关闭弹窗     |
| getComboDOM | 获取触发节点 |

---

### Confirm.Modal

| 参数            | 说明                     | 类型                                | 默认值   |
| --------------- | ------------------------ | ----------------------------------- | -------- |
| visible         | 是否可见                 | `boolean`                           | `false`  |
| onVisibleChange | 可见性变化回调           | `(visible:boolean)=>void`           | `-`      |
| maskClosable    | 点击遮罩是否关闭         | `boolean`                           | `true`   |
| animation       | 动画类型，同 seeds Modal | `'slideUp' \| 'zoom' \| 'fade' ...` | `'zoom'` |
| children        | 组成 Confirm 的各子组件  | `ReactNode`                         | `-`      |
| className       | 自定义类名               | `string`                            | `-`      |

#### Ref

| 方法        | 说明           |
| ----------- | -------------- |
| getModalDOM | 获取模态框节点 |
| getMaskDOM  | 获取遮罩节点   |

---

### 其余子组件

`Confirm.Header` / `Confirm.Main` / `Confirm.Footer` / `Confirm.Icon` / `Confirm.Title` / `Confirm.Button` 皆为样式包装容器，仅接收 `className`, `style`, `children` 三个常用属性以及 `ref` 暴露 `rootDOM`。

## 注意事项

1. 建议最多 2 个按钮，主次分明；可通过 `buttonsLayout="vertical"` 让按钮纵向排列。
2. `buttons[i].onClick` 支持返回 `boolean`，若返回 `true` 则自动关闭弹窗，返回其他值需手动调用 `close()`。
3. 通过完全自定义 `children` 可实现更复杂的布局。

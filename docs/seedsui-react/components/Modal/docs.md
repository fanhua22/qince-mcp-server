## 何时使用

- 需要在页面中以遮罩方式展示弹出内容、导航栏弹窗、下拉弹窗、选择弹窗等场景。
- 需要以 JS API 的方式快捷弹出确认/提示对话框时。

## 组件结构

默认导出 `Modal`，并扩展以下成员：

- 基础：`Modal`（容器组件）
- 导航类：`Modal.NavBar`、`Modal.NavBarCombo`、`Modal.NavBarModal`
- 下拉类：`Modal.DropdownCombo`、`Modal.DropdownModal`
- 选择类：`Modal.SelectCombo`、`Modal.SelectModal`
- 筛选类：`Modal.FilterModal`
- JS API：`Modal.alert`、`Modal.confirm`、`Modal.destroy`、`Modal.getClassNameByAnimation`

---

### Modal（容器）

| 参数            | 说明                                            | 类型                                                                          | 默认值   |
| --------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- | -------- |
| visible         | 是否可见                                        | `boolean`                                                                     | `false`  |
| onVisibleChange | 可见性变化回调                                  | `(visible:boolean)=>void`                                                     | `-`      |
| safeArea        | 是否适配安全区（或传 DOM 选择性适配）           | `boolean`                                                                     | `-`      |
| portal          | 挂载容器（不传默认 `#root` 或 `document.body`） | `HTMLElement`                                                                 | `-`      |
| animation       | 动画类型                                        | `'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade'` | `'zoom'` |
| referenceDOM    | 参照元素（用于 dropdown 场景定位）              | `HTMLElement \| ()=>HTMLElement`                                              | `-`      |
| offset          | 相对参照元素的偏移                              | `number`                                                                      | `-`      |
| maskClosable    | 点击遮罩是否关闭                                | `boolean`                                                                     | `true`   |
| maskProps       | 遮罩属性                                        | `object`                                                                      | `{}`     |
| className       | 自定义类名                                      | `string`                                                                      | `-`      |
| style           | 自定义样式                                      | `CSSProperties`                                                               | `-`      |
| children        | 弹窗内容                                        | `ReactNode`                                                                   | `-`      |

#### Ref

| 方法                   | 说明       |
| ---------------------- | ---------- |
| modalDOM / getModalDOM | 遮罩根节点 |

---

### Modal.NavBar / NavBarCombo / NavBarModal

- 基于导航栏的弹窗与组合器；支持 `ok/cancel/title` 及回调，`NavBarCombo` 提供“点我显示弹窗”的组合器能力。

---

### Modal.DropdownCombo / DropdownModal

- 下拉弹窗，基于 `referenceDOM` 进行定位，支持 `left/right/offset`，常用于筛选或操作面板。

---

### Modal.SelectCombo / SelectModal

- 选择器基础弹窗：`SelectCombo` 为组合器，`SelectModal` 为弹窗容器，常搭配 List/Picker 等使用。

---

### Modal.FilterModal

- 侧边筛选弹窗，内置头部 `NavBar` 与底部 `FooterBar`，支持 `onOk/onReset/onConfig`。

---

### JS API

#### Modal.alert(options)

| 关键参数        | 说明     |
| --------------- | -------- |
| title/content   | 文本内容 |
| onVisibleChange | 显隐回调 |

返回：遮罩实例（可与 `Modal.destroy` 结合使用）。

#### Modal.confirm(options)

| 关键参数      | 说明                                         |
| ------------- | -------------------------------------------- |
| title/content | 文本内容                                     |
| maskClosable  | 点击遮罩是否关闭                             |
| onOk/onCancel | 按钮回调，返回 `true` 关闭，返回其他阻止关闭 |

#### Modal.destroy(mask?)

销毁最近一次创建或指定的遮罩。

#### Modal.getClassNameByAnimation(animation)

根据动画类型返回位置信息类名，如 `'slideDown' -> 'top-center'`。

## 注意事项

1. 在 `Dropdown` 场景中需传 `referenceDOM` 定位，未显式指定 `maskProps.style.top/bottom` 时将自动定位。
2. `maskClosable=false` 可阻止点击遮罩关闭；若还需屏蔽冒泡，请在内容区域阻止事件冒泡。

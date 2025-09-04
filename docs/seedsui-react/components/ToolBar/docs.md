## 何时使用

- 需要在列表/页面顶部提供一组“筛选/排序/搜索/日期范围”等工具操作时。
- 需要按钮组、下拉面板、筛选侧栏等组合控件的统一外观与行为时。

## 组件结构（index.js 导出）

- `ToolBar` 容器
- `ToolBar.Dropdown` 下拉面板触发器
- `ToolBar.DateRange` 日期区间组合器
- `ToolBar.List` 下拉列表选择器
- `ToolBar.Search` 顶部搜索输入
- `ToolBar.SearchActive` 顶部激活态搜索条（占满）
- `ToolBar.Button` 工具按钮
- `ToolBar.Filter` 侧滑筛选面板触发器

## API

### ToolBar（容器）

| 参数      | 说明               | 类型          | 默认值 |
| --------- | ------------------ | ------------- | ------ |
| invert    | 反色模式           | boolean       | false  |
| className | 自定义类名         | string        | -      |
| style     | 自定义样式         | CSSProperties | -      |
| children  | 子元素（各子控件） | ReactNode     | -      |

---

### ToolBar.Dropdown

| 参数                | 说明                                | 类型                 | 默认值 |
| ------------------- | ----------------------------------- | -------------------- | ------ |
| title               | 组合器内容（string/ReactNode/函数） | ReactNode\|((p)=>RN) | ''     |
| arrow               | 右侧箭头（类名/节点/函数）          | ReactNode\|((p)=>RN) | 默认   |
| portal              | Modal 挂载节点                      | HTMLElement          | -      |
| offset,left,right   | 面板定位偏移/左右对齐               | object\|number       | -      |
| maskClassName/style | 遮罩类名/样式                       | string\|object       | -      |
| color,variant,shape | 按钮外观，同 Button                 | string               | -      |
| onOpen/onClose      | 打开/关闭回调                       | ()=>void             | -      |
| children            | 下拉面板内容                        | ReactNode            | -      |

Ref：与内部 Modal.DropdownCombo 对齐（`close/open/getRootDOM`）。

---

### ToolBar.DateRange（日期区间）

| 参数           | 说明                                   | 类型                 | 默认值             |
| -------------- | -------------------------------------- | -------------------- | ------------------ |
| portal         | 挂载节点                               | HTMLElement          | -                  |
| title,arrow    | 组合器标题/箭头，自定义见 Dropdown     | ReactNode\|((p)=>RN) | -                  |
| type           | 日期类型（date/week/month/quarter...） | string               | 'date'             |
| min,max        | 选择范围限制                           | Date                 | -                  |
| value          | 当前值（[start,end]）                  | Date[]               | -                  |
| rangeId        | 预设范围 id                            | string               | -                  |
| ranges         | 预设范围对象                           | object               | getDefaultRanges() |
| allowClear     | 允许清空                               | boolean              | -                  |
| onBeforeChange | 确认前拦截（返回 false 阻止）          | (val,info)=>any      | -                  |
| onChange       | 变更回调（value, { rangeId })          | (val,info)=>void     | -                  |

---

### ToolBar.List（下拉列表）

| 参数           | 说明            | 类型                      | 默认值 |
| -------------- | --------------- | ------------------------- | ------ |
| portal         | 挂载节点        | HTMLElement               | -      |
| title,arrow    | 组合器标题/箭头 | ReactNode\|((p)=>RN)      | -      |
| value          | 当前值          | `{ id,name }`             | -      |
| list           | 选项列表        | `{ id,name,disabled? }[]` | -      |
| onBeforeChange | 变更前拦截      | (val)=>boolean\|Promise   | -      |
| onChange       | 变更回调        | (val)=>void               | -      |

---

### ToolBar.Search / ToolBar.SearchActive

Search 接口同 `Input.Search`，额外 className：`toolbar-search-input`；
SearchActive 在激活态铺满容器，暴露 `onCancel()` 关闭。

---

### ToolBar.Button

外观属性同 `Button`（`color/variant/shape/size/radius`）。

---

### ToolBar.Filter（筛选侧栏）

| 参数                                     | 说明       | 类型              | 默认值 |
| ---------------------------------------- | ---------- | ----------------- | ------ |
| color/variant/shape/comboStyle           | 组合器外观 | 同 Button         | -      |
| maskClassName/style/modalClassName/style | 遮罩/面板  | object            | -      |
| onCancel/onOk/onReset/onConfig           | 操作回调   | ()=>void          | -      |
| onVisibleChange                          | 显隐回调   | (v:boolean)=>void | -      |
| children                                 | 面板内容   | ReactNode         | -      |

Ref：`open()/close()/rootDOM/getRootDOM`。

## 注意事项

1. 多个 `Dropdown` 同时存在时，打开一个会自动关闭其他（内部已管理）。
2. `invert` 模式会反转背景与输入框底色，适配深浅色区域。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/ToolBar/demos/common.jsx`。

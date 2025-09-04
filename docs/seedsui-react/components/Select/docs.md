## 何时使用

- 需要从列表中进行单选/多选，且支持在模态中选择与搜索时。
- 需要下拉选择器组合器（Combo）、弹窗（Modal）与列表主体（Main）分别复用时。

## 组件结构（index.js 导出）

- `Select.Combo` 组合器：触发并在弹窗中完成选择
- `Select.Modal` 弹窗：受控显示选择弹窗
- `Select.Main` 主体：只渲染可选择列表

## 通用数据结构

列表项（扁平或分组，分组可使用 `{ name, children: [] }`）：

```ts
interface SelectItem {
  id: string | number
  name?: any
  avatar?: string
  image?: string
  description?: React.ReactNode
  content?: React.ReactNode
  disabled?: boolean
  style?: React.CSSProperties
}
```

值（受控）：

```ts
type SelectValue = SelectItem[]
```

## API

### Select.Combo

| 参数             | 说明                                | 类型              | 默认值  |
| ---------------- | ----------------------------------- | ----------------- | ------- |
| list             | 选项列表（可分组/扁平）             | SelectItem[]      | -       |
| value            | 当前值（数组）                      | SelectValue       | -       |
| multiple         | 是否多选                            | boolean           | false   |
| allowClear       | 是否允许清除                        | boolean           | false   |
| separator        | 多选展示的连接符                    | string            | ','     |
| modalProps       | 透传给 `Select.Modal` 的 props      | object            | -       |
| wrapper/layout   | 列表外层与布局（透传给内部 List）   | any               | -       |
| checkable        | 是否显示复选框（透传 List）         | boolean           | true    |
| checkbox         | 自定义复选框（透传 List）           | ({checked})=>RN   | -       |
| checkboxProps    | 复选框属性（透传 List）             | object            | -       |
| checkboxPosition | 复选框位置（透传 List）             | 'left'\|'right'   | 'right' |
| onBeforeChange   | 变更前拦截（返回 Promise<boolean>） | (newVal)=>Promise | -       |
| onChange         | 变更回调                            | (value)=>void     | -       |

#### Ref（Combo）

| 方法        | 说明           |
| ----------- | -------------- |
| comboDOM    | 触发节点       |
| getComboDOM | 获取触发节点   |
| modalDOM    | 弹窗根节点     |
| getModalDOM | 获取弹窗根节点 |

---

### Select.Modal

| 参数                                              | 说明                                           | 类型            | 默认值      |
| ------------------------------------------------- | ---------------------------------------------- | --------------- | ----------- |
| visible                                           | 是否可见                                       | boolean         | false       |
| portal                                            | portal 节点                                    | HTMLElement     | body/root   |
| value                                             | 当前值                                         | SelectValue     | []          |
| header                                            | 自定义头部（不传且列表>15 项时会自动显示搜索） | ReactNode       | -           |
| list                                              | 选项列表                                       | SelectItem[]    | -           |
| wrapper/layout                                    | 列表外层与布局（透传给内部 List）              | any             | -           |
| checkable/checkbox/checkboxProps/checkboxPosition | 透传给 List                                    | 同上            | -           |
| main                                              | 自定义主体组件                                 | Component       | Select.Main |
| mainProps                                         | 主体属性                                       | object          | -           |
| onVisibleChange                                   | 显隐回调                                       | (visible)=>void | -           |

#### Ref（Modal）

| 方法        | 说明       |
| ----------- | ---------- |
| modalDOM    | 弹窗根节点 |
| getModalDOM | 获取弹窗根 |

---

### Select.Main

只渲染列表与选择逻辑。

| 参数             | 说明           | 类型            | 默认值  |
| ---------------- | -------------- | --------------- | ------- |
| value            | 当前值         | SelectValue     | -       |
| multiple         | 是否多选       | boolean         | false   |
| allowClear       | 是否允许清除   | boolean         | false   |
| list             | 选项列表       | SelectItem[]    | -       |
| checkable        | 是否显示复选框 | boolean         | true    |
| checkbox         | 自定义复选框   | ({checked})=>RN | -       |
| checkboxProps    | 复选框属性     | object          | -       |
| checkboxPosition | 复选框位置     | 'left'\|'right' | 'right' |
| onChange         | 变更回调       | (value)=>void   | -       |

#### Ref（Main）

| 方法       | 说明           |
| ---------- | -------------- |
| mainDOM    | 主体根节点     |
| getMainDOM | 获取主体根节点 |

## 注意事项

1. `Select.Modal` 默认在列表数量 > 15 且未自定义 `header` 时显示搜索框。
2. 分组/扁平列表都支持；多选场景返回数组。
3. 结合 `List` 的 `checkbox` 能自定义勾选 UI。

## 示例

更多请参考同目录的 `examples.md`。

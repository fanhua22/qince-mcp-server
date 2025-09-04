## 何时使用

- 需要以列表形式展示数据，支持单选/多选、带头像/图片/描述/操作等。
- 需要列表滚动容器、虚拟列表、下拉刷新、上拉加载、弹窗选择等能力时。

## 组件结构

默认导出 `List`，并附带以下子组件/工具：

- `List.List` 基础列表容器（别名：`List`）
- `List.Item` 列表项
- `List.Main` 带刷新/虚拟渲染/滚动容器的列表主体
- `List.InfiniteScroll` 底部加载状态组件
- `List.Combo` 组合器（选择弹窗）
- `List.Modal` 弹窗
- `List.searchList` 工具函数（关键字搜索）

下述 API 分几个层次说明：

## List（基础列表容器）

| 参数             | 说明                                 | 类型                         | 默认值    |
| ---------------- | ------------------------------------ | ---------------------------- | --------- |
| allowClear       | 是否允许清除                         | `boolean`                    | `false`   |
| multiple         | 是否多选                             | `boolean`                    | `false`   |
| value            | 当前值（单选：对象；多选：对象数组） | `any \| any[]`               | `-`       |
| list             | 数据源（可分组或扁平）               | `any[]`                      | `-`       |
| layout           | 列表布局                             | `'vertical' \| 'horizontal'` | `-`       |
| wrapper          | 自定义渲染外层节点                   | `Component`                  | `-`       |
| checkable        | 是否显示复选框                       | `boolean`                    | `false`   |
| checkbox         | 自定义复选框                         | `({ checked })=>ReactNode`   | `-`       |
| checkboxProps    | 复选框属性                           | `object`                     | `-`       |
| checkboxPosition | 复选框位置                           | `'left' \| 'right'`          | `'right'` |
| onChange         | 选择变化回调                         | `(value:any \| any[])=>void` | `-`       |

数据项结构（无分组时，单项可包含以下字段）：

```ts
interface ListItem {
  id: string | number
  name?: string
  avatar?: string
  image?: string
  description?: React.ReactNode
  content?: React.ReactNode
  action?: React.ReactNode
  checkbox?: ({ checked }) => React.ReactNode
  checkboxPosition?: 'left' | 'right'
}
```

## List.Item

| 参数                                                           | 说明                       | 类型                         | 默认值   |
| -------------------------------------------------------------- | -------------------------- | ---------------------------- | -------- |
| itemData                                                       | 对应数据项（用于内部渲染） | `any`                        | `-`      |
| layout                                                         | 布局                       | `'vertical' \| 'horizontal'` | `-`      |
| checkable                                                      | 选中状态可控               | `boolean`                    | `false`  |
| checkbox                                                       | 自定义复选框               | `({ checked })=>ReactNode`   | `-`      |
| checkboxProps                                                  | 复选框属性                 | `object`                     | `-`      |
| checkboxPosition                                               | 复选框位置                 | `'left' \| 'right'`          | `'left'` |
| disabled                                                       | 禁用                       | `boolean`                    | `false`  |
| image / avatar / title / description / note / content / action | 展示字段                   | `ReactNode`                  | `-`      |
| onChange                                                       | 勾选变化                   | `(checked:boolean)=>void`    | `-`      |

## List.Main（含刷新/虚拟列表）

| 参数                                                             | 说明              | 类型                     | 默认值  |
| ---------------------------------------------------------------- | ----------------- | ------------------------ | ------- |
| virtual                                                          | 是否开启虚拟渲染  | `boolean`                | `false` |
| onTopRefresh                                                     | 下拉刷新          | `() => Promise<boolean>` | `-`     |
| onBottomRefresh                                                  | 触底加载          | `() => Promise<boolean>` | `-`     |
| onScroll                                                         | 滚动事件          | `(e)=>void`              | `-`     |
| prepend / append                                                 | 头/尾部自定义区域 | `ReactNode`              | `-`     |
| list                                                             | 数据源            | `any[]`                  | `-`     |
| allowClear/multiple/value/onChange                               | 选择逻辑          | 同 List                  | -       |
| wrapper/layout/checkable/checkbox/checkboxProps/checkboxPosition | 透传              | 同 List                  | -       |

## List.InfiniteScroll

| 参数   | 说明     | 类型       |
| ------ | -------- | ---------- | -------- | ------- | ---------- |
| status | 底部状态 | `'loading' | 'nomore' | 'error' | undefined` |

## List.Combo / List.Modal

- 组合选择器与弹窗，API 与 `ActionSheet.Combo/Modal` 类似，支持列表选择与确认。

## 工具函数：List.searchList(list, keyword)

- 按 `name/title/description` 等字段进行关键字过滤，返回新数组。

## 注意事项

1. 分组数据结构：`[{ name:'组名', children:[item...] }]`；扁平结构：`[{ id,name,... }]`。
2. 勾选逻辑与 `allowClear/multiple` 配合使用；多选返回数组，单选返回当前项或 `null`。
3. 虚拟列表建议在大数据量场景开启，并提供固定行高以获得最佳性能。

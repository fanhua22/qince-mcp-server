## 何时使用

- 在页面右下角（或自定义位置）提供一组常驻快捷操作入口。
- 移动端需要可拖拽并自动贴边的悬浮按钮集。

## API

### FloatButton

| 参数      | 说明                             | 类型                                                           | 默认值                              |
| --------- | -------------------------------- | -------------------------------------------------------------- | ----------------------------------- |
| list      | 按钮数据列表                     | `Array<FloatButtonItem>`                                       | `[]`                                |
| safeArea  | 是否自动适配安全区域（刘海屏等） | `boolean`                                                      | `true`                              |
| draggable | 是否允许拖拽                     | `boolean`                                                      | `false`                             |
| gap       | 贴边时的边距                     | `{ top?:number; right?:number; bottom?:number; left?:number }` | `{ top:8,right:8,bottom:8,left:8 }` |
| portal    | 渲染容器                         | `HTMLElement`                                                  | `document.body`                     |
| onChange  | 点击按钮的回调                   | `(item: FloatButtonItem) => void`                              | `-`                                 |
| onDragEnd | 拖拽结束回调                     | `(e: { position:{top,right,bottom,left} }) => void`            | `-`                                 |
| className | 自定义类名                       | `string`                                                       | `-`                                 |
| style     | 自定义样式                       | `CSSProperties`                                                | `-`                                 |

#### FloatButtonItem 结构

```ts
interface FloatButtonItem {
  id: string | number
  name?: string
  icon?: string | ReactNode | ((options: { item: FloatButtonItem }) => ReactNode)
  className?: string
  style?: CSSProperties
  group?: boolean // false 表示不参与分组
  children?: FloatButtonItem[] // 若存在 children 则视为分组按钮
}
```

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根节点     | `HTMLDivElement`       |
| getRootDOM | 获取根节点 | `() => HTMLDivElement` |

## 注意事项

1. 若 `draggable` 为 `true`，组件内部通过 `touch` 事件实现拖拽，并在释放时自动贴边。
2. `list` 中若存在 `children` 字段，则会使用 `ActionSheet.Combo` 弹出二级菜单。
3. 点击事件在拖拽距离小于 5px 时才会触发，避免误触。

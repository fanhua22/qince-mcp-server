## 何时使用

- 需要在图片上进行矩形/多边形标注，支持预览、编辑与只读切换时。

## 组件结构

- `Vott` 标注组件

## 数据结构

标注项（示例）

```ts
interface VottItem {
  polygon: [number, number][] // 顶点坐标集合
  style?: string // 行内样式字符串（stroke 等）
  className?: string
  id?: string
  custom?: any
}
```

## API

### Vott

| 参数      | 说明                    | 类型                        | 默认值 |
| --------- | ----------------------- | --------------------------- | ------ |
| src       | 背景图片地址            | string                      | -      |
| data      | 标注数据                | VottItem[]                  | []     |
| readOnly  | 只读模式                | boolean                     | true   |
| params    | 底层实例初始化参数      | object                      | -      |
| preview   | 是否启用预览模式        | boolean                     | -      |
| onChange  | 变更回调（list, extra） | (list:any[],info:any)=>void | -      |
| className | 自定义类名              | string                      | -      |
| style     | 自定义样式              | CSSProperties               | -      |

#### Ref

| 方法       | 说明   |
| ---------- | ------ |
| rootDOM    | 根节点 |
| getRootDOM | 获取根 |

## 注意事项

1. 编辑模式下可新增/调整标注；只读模式下仅展示。
2. `params.shapeAttributes` 可用于统一设置样式（颜色、类名等）。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Vott/demos/demo1.jsx`。

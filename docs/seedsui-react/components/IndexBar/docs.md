## 何时使用

- 页面存在按字母或分组快速定位的长列表时。
- 需要右侧字母索引条辅助滚动定位与锚点高亮时。

## 组件结构

- `IndexBar` 主组件（右侧索引栏 + 提示气泡）
- `IndexBar.Anchor` 列表内锚点容器

## API

### IndexBar

| 参数          | 说明                                           | 类型                       | 默认值 |
| ------------- | ---------------------------------------------- | -------------------------- | ------ |
| anchors       | 外部指定的锚点列表（若传入则不自动扫描列表）   | `string[]`                 | `-`    |
| scrollerDOM   | 自定义滚动容器 DOM，不传则取自身前一个兄弟节点 | `HTMLElement`              | `-`    |
| onTouchAnchor | 触摸索引条并滚动到锚点后的回调                 | `(anchor: string) => void` | `-`    |
| className     | 自定义类名                                     | `string`                   | `-`    |
| style         | 自定义样式                                     | `CSSProperties`            | `-`    |
| children      | 一般与列表一起渲染在同级，用于放置索引条提示等 | `ReactNode`                | `-`    |

#### Ref

| 方法           | 说明               | 类型                       |
| -------------- | ------------------ | -------------------------- |
| rootDOM        | 获取索引条根节点   | `HTMLElement`              |
| getRootDOM     | 获取索引条根节点   | `() => HTMLElement`        |
| getTooltipDOM  | 获取提示气泡节点   | `() => HTMLElement`        |
| activeAnchor   | 主动高亮指定锚点   | `(anchor: string) => void` |
| update         | 重新扫描并更新锚点 | `() => void`               |
| scrollToAnchor | 滚动至指定锚点     | `(anchor: string) => void` |

---

### IndexBar.Anchor

用于在列表中声明一个可被 `IndexBar` 感知的锚点。

| 参数      | 说明                         | 类型            | 默认值 |
| --------- | ---------------------------- | --------------- | ------ |
| name      | 锚点名称（如 'A'、'B'）      | `string`        | `-`    |
| children  | 锚点内容（通常是分组标题行） | `ReactNode`     | `-`    |
| className | 自定义类名                   | `string`        | `-`    |
| style     | 自定义样式                   | `CSSProperties` | `-`    |

## 注意事项

1. `IndexBar` 需要包裹（或位于）实际滚动容器旁，默认会取自身前一个兄弟节点作为滚动容器。
2. 列表中的分组标题需使用 `IndexBar.Anchor name="A"` 包裹，内部会自动注入 `data-indexbar-anchor` 以供定位。
3. 支持触摸滑动在索引条上快速预览与跳转，当前锚点会在右侧浮动气泡中展示。
4. 如需自定义锚点集合，可通过 `anchors` 显式传入并调用 `update()` 更新。

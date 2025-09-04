## 何时使用

- 搭建页面基础结构（头部、侧边、主体、底部），并支持下拉/上拉刷新、吸顶区域等。
- 移动端页面需要占满视口并内置滚动区域与安全区适配时。

## 组件结构

- `Layout` 主组件
- `Layout.Header` 头部容器
- `Layout.Aside` 侧边容器
- `Layout.Main` 主体容器（内置滚动、下拉/上拉刷新能力）
- `Layout.Footer` 底部容器

## API

### Layout

| 参数      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| className | 自定义类名 | `string`        | `-`    |
| style     | 自定义样式 | `CSSProperties` | `-`    |
| children  | 子节点     | `ReactNode`     | `-`    |

#### Ref

| 方法       | 说明       | 类型                |
| ---------- | ---------- | ------------------- |
| rootDOM    | 根节点     | `HTMLElement`       |
| getRootDOM | 获取根节点 | `() => HTMLElement` |

---

### Layout.Header / Layout.Aside / Layout.Footer

这些是语义化容器，通常只透传 `className/style/children`，并暴露 `rootDOM/getRootDOM`。

---

### Layout.Main

主体滚动容器，支持下拉刷新、上拉加载、吸顶、滚动事件等。

| 参数            | 说明                                                 | 类型                     | 默认值 |
| --------------- | ---------------------------------------------------- | ------------------------ | ------ |
| onTopRefresh    | 下拉触发，返回 Promise（resolve(true) 表示刷新结束） | `() => Promise<boolean>` | `-`    |
| onBottomRefresh | 触底触发，返回 Promise                               | `() => Promise<boolean>` | `-`    |
| onScroll        | 滚动事件                                             | `(e: UIEvent) => void`   | `-`    |
| className       | 自定义类名                                           | `string`                 | `-`    |
| style           | 自定义样式                                           | `CSSProperties`          | `-`    |
| children        | 内容                                                 | `ReactNode`              | `-`    |

#### Ref（Main）

| 方法           | 说明             |
| -------------- | ---------------- |
| rootDOM        | 根节点           |
| getRootDOM     | 获取根节点       |
| getScrollerDOM | 获取内部滚动容器 |

## 使用建议

1. 一般结构：`<Layout className="full"><Layout.Header/>...<Layout.Main/>...<Layout.Footer/></Layout>`。
2. 在 `Layout.Main` 上配置刷新方法时，请确保返回 Promise 并在内部更新数据列表、重置加载状态。
3. 若需要与 `IndexBar` 联动，请将 `IndexBar` 放在 `Layout.Main` 之后，使其作为兄弟节点以便自动获取滚动容器。

## 何时使用

- 页面或局部需要展示加载状态时。
- 需要全局方法快速展示/隐藏 Loading，或使用多种动效风格时。

## 组件结构

默认导出 `Loading`，并附带以下子组件与静态方法：

- 变体组件：`Loading.SpinFade`、`Loading.Ouroboros`、`Loading.BallWave`
- 静态方法：`Loading.show`、`Loading.hide`、`Loading.exists`

## API

### Loading（容器）

承载图标、文案、遮罩等样式的容器。常与变体一起使用。

| 参数      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| className | 自定义类名 | `string`        | `-`    |
| style     | 自定义样式 | `CSSProperties` | `-`    |
| children  | 自定义内容 | `ReactNode`     | `-`    |

#### Ref

| 方法       | 说明       |
| ---------- | ---------- |
| rootDOM    | 根节点     |
| getRootDOM | 获取根节点 |

---

### 变体组件

- `Loading.SpinFade`
- `Loading.Ouroboros`
- `Loading.BallWave`

均为纯展示型动效组件，支持 `className/style`，可作为 `Loading` 的子节点或独立使用。

---

### 静态方法

#### Loading.show(options)

挂载并展示全局 Loading。

| 参数    | 说明                                                         | 类型     |
| ------- | ------------------------------------------------------------ | -------- |
| options | 配置，如 `{ icon, text, maskClosable, duration, container }` | `object` |

返回：`{ destroy(): void }` 实例控制器。

#### Loading.hide()

立即隐藏并销毁最近一次调用 `show` 的 Loading。

#### Loading.exists()

判断是否存在正在展示的全局 Loading，返回 `boolean`。

## 注意事项

1. 全局 `Loading.show` 默认挂载到 `document.body`，可通过 `container` 自定义挂载点。
2. 为避免遮挡点击事件，可设置 `maskClosable: true` 或自定义 `mask` 行为。
3. 局部加载可直接使用变体组件或在容器中组合文字与图标。

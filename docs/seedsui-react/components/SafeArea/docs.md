## 何时使用

- 需要适配异形屏（刘海/圆角）等安全区域，避免内容被遮挡。
- 在页面根节点或某个局部容器内自动或手动填充上下安全边距/高度/边框。

## 组件结构

- `SafeArea` 安全区域占位/适配组件
- 静态方法：`SafeArea.getSafeAreaClassName`、`SafeArea.autoSafeArea`、`SafeArea.needsSafeArea`、`SafeArea.onResize`

## API

### SafeArea

渲染一个安全区占位元素。通过类名控制位置（top/bottom）、模式（padding/margin/height/border/before/after）。

| 参数      | 说明                                          | 类型          | 默认值                                            |
| --------- | --------------------------------------------- | ------------- | ------------------------------------------------- |
| safeArea  | `'auto'` 使用自动安全区类，否则普通类         | `'auto'\|any` | -                                                 |
| className | 自定义类名（可组合如 `bottom height-bottom`） | string        | 'height-bottom' （当未传递 className 时默认追加） |
| style     | 自定义样式                                    | CSSProperties | -                                                 |

常用类组合：

- 位置：`top`、`bottom`
- 占位方式：`padding-top`、`padding-bottom`、`margin-top`、`margin-bottom`、`height-top`、`height-bottom`
- 边框填充：`border-top`、`border-bottom`
- 伪元素：`before`、`after`

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### SafeArea.getSafeAreaClassName(safeArea)

根据传入布尔值返回自动/清除安全区类名：`autoSafeArea` / `clearSafeArea` / 空串。

### SafeArea.autoSafeArea(options)

设置全局自动安全区（在 `document.documentElement`）：

| 参数       | 说明                                  | 类型          | 默认值                    |
| ---------- | ------------------------------------- | ------------- | ------------------------- |
| className  | 自动安全区根类名                      | string        | 'auto-safe-area-children' |
| isSafeArea | 自定义判定函数，返回 boolean          | () => boolean | -                         |
| debug      | 调试模式，强制设置顶部/底部安全区示例 | boolean       | false                     |

### SafeArea.needsSafeArea()

返回当前运行环境是否需要安全区（结合平台与设备判断）。

### SafeArea.onResize(handler)

注册单例监听，路由/历史变化时触发 `handler`，可用于重新计算安全区。

## 注意事项

1. 页面根元素适配可通过 `SafeArea.autoSafeArea()` 一次性开启。
2. `safeArea='auto'` 将渲染类名为 `auto-safe-area` 的占位元素，便于与全局类协同。
3. 推荐配合 seeds 的 CSS 变量使用：`--seed-safe-area-inset-top`、`--seed-safe-area-inset-bottom`。

## 示例

更多请参考同目录的 `examples.md`。

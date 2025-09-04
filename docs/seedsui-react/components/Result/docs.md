## 何时使用

- 需要向用户反馈结果状态（空数据、服务错误等）时。
- 需要在页面中部居中展示结果插画、标题、说明与操作时。

## 组件结构

- `Result` 结果展示容器

## API

### Result

| 参数        | 说明                                                     | 类型                                   | 默认值 |
| ----------- | -------------------------------------------------------- | -------------------------------------- | ------ |
| status      | 预设状态，内置 `empty`、`500` 两种（提供默认图片与标题） | 'empty' \| '500' \| string             | -      |
| title       | 标题文案                                                 | ReactNode                              | -      |
| description | 辅助说明                                                 | ReactNode                              | -      |
| image       | 图片内容：url 字符串 / ReactNode / 返回 ReactNode 的函数 | string \| ReactNode \| (()=>ReactNode) | -      |
| className   | 自定义类名                                               | string                                 | -      |
| style       | 自定义样式                                               | CSSProperties                          | -      |
| children    | 额外操作区域（如按钮）                                   | ReactNode                              | -      |

> 当 `status` 为 `empty` 或 `500` 且未显式传入 `image/title` 时，会使用内置默认值。

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 样式说明

- 根节点类名：`result`；全屏铺满可加 `result full`。
- 关键子元素类名：`result-image`、`result-title`、`result-description`、`result-button`。
- 推荐配色与间距使用 CSS 变量：如 `var(--seed-bg-default)`、`var(--seed-font-size-s)`、`var(--seed-space-m)` 等（参见 `seedsui-react.min.css`）。

## 注意事项

1. `image` 传入函数时应返回节点（便于按需渲染）。
2. 需要自定义插画时，可直接传入图片地址或自定义节点。

## 示例

更多请参考同目录的 `examples.md`。

## 何时使用

- 需要在一组组件之间添加统一的间距，保持排版整洁时。
- 需要纵向或横向对齐、自动换行与自定义分隔符的场景。

## 组件结构（index.js 导出）

- `Space` 间距容器
- `Space.Compact` 紧凑容器（相邻元素无间隙拼接）

## API

### Space

| 参数      | 说明                                        | 类型                                       | 默认值       |
| --------- | ------------------------------------------- | ------------------------------------------ | ------------ |
| direction | 布局方向                                    | 'horizontal' \| 'vertical'                 | 'horizontal' |
| align     | 对齐方式（仅横向有效）                      | 'start' \| 'center' \| 'end' \| 'baseline' | 'center'     |
| wrap      | 是否自动换行（仅横向有效）                  | boolean                                    | false        |
| size      | 间距大小（支持预设或数值）                  | 'xs' \| 's' \| 'm' \| 'l' \| number        | 'm'          |
| split     | 分隔元素（会插入到子元素之间）              | ReactNode                                  | -            |
| itemStyle | 子项样式（为每个直接子元素附加）            | CSSProperties                              | -            |
| className | 自定义类名                                  | string                                     | -            |
| style     | 自定义样式（可使用 CSS 变量调整间距与对齐） | CSSProperties                              | -            |
| children  | 子节点                                      | ReactNode                                  | -            |

支持的常用 CSS 变量（可按需使用）：

- `--seed-space-xs/s/m/l`：预设间距尺寸
- 也可直接通过 `size` 传入数字自定义像素间距

#### Ref（Space）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### Space.Compact（紧凑容器）

用于将一组相邻控件“无缝拼接”，常用于按钮组、输入框+按钮等。

| 参数             | 说明                                                         | 类型          | 默认值 |
| ---------------- | ------------------------------------------------------------ | ------------- | ------ |
| targetsBaseClass | 指定需要被紧凑处理的目标基础类名（用于去除相邻圆角与间隙等） | object        | {}     |
| className        | 自定义类名                                                   | string        | -      |
| style            | 自定义样式                                                   | CSSProperties | -      |
| children         | 子节点                                                       | ReactNode     | -      |

#### Ref（Compact）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. 横向布局时可开启 `wrap` 以在小屏自动换行。
2. 使用 `split` 在子元素之间插入分隔符，适合标签/操作列表。
3. 紧凑模式建议与按钮、输入类控件搭配，避免视觉断裂。

## 示例

更多请参考同目录的 `examples.md`。

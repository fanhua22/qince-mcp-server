## 何时使用

- 需要在页面底部提供 2 个以上的一级导航切换时。
- 需要标签式（Tabs）、菜单式（Menus）、分组式（Group）、滑动指示（Slide）等不同风格的底部导航。

## 组件结构（index.js 导出）

- `TabBar.Tabs` 标签式导航
- `TabBar.Menus` 菜单式导航
- `TabBar.Group` 分组式导航（支持单/多行）
- `TabBar.Slide` 带滑动指示的导航

## 数据结构

```ts
interface TabBarItem {
  id: string | number
  name?: React.ReactNode
  icon?: string | React.ReactNode
  badge?: React.ReactNode // 角标/数字
  disabled?: boolean
}
```

## API（通用）

以下子组件均支持相同的核心属性：

| 参数      | 说明               | 类型                               | 默认值 |
| --------- | ------------------ | ---------------------------------- | ------ |
| list      | 选项列表           | TabBarItem[]                       | []     |
| value     | 当前激活项（受控） | `{ id: string \| number }` \| null | -      |
| onChange  | 变化回调           | (value: TabBarItem \| null)=>void  | -      |
| className | 自定义类名         | string                             | -      |
| style     | 自定义样式         | CSSProperties                      | -      |

### 特有属性

| 组件         | 额外属性  | 说明               | 类型      | 默认值 |
| ------------ | --------- | ------------------ | --------- | ------ |
| TabBar.Group | columns   | 每行列数           | number    | 4      |
| TabBar.Slide | indicator | 自定义滑动指示节点 | ReactNode | -      |

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. 建议仅放置 3-5 个一级导航，保证点击区域与识别度。
2. `badge` 可传入数字或自定义节点，用于未读数/角标。
3. 当 `disabled=true` 时项目不响应点击。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/TabBar/demos/*`。

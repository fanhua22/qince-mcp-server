## 何时使用

- 需要在页面顶部展示导航条、标题与操作按钮时。
- 常与 `Modal.NavBar*`、`Layout.Header` 搭配，提供统一的头部交互区域。

## 组件结构

- `NavBar` 主组件
- `NavBar.Title` 标题
- `NavBar.Button` 按钮
- `NavBar.Icon` 图标

## API

### NavBar

| 参数      | 说明                                         | 类型            | 默认值 |
| --------- | -------------------------------------------- | --------------- | ------ |
| className | 自定义类名                                   | `string`        | `-`    |
| style     | 自定义样式                                   | `CSSProperties` | `-`    |
| children  | 子内容（`Title` 与 `Button` 一般为其子节点） | `ReactNode`     | `-`    |

#### Ref

| 方法       | 说明       |
| ---------- | ---------- |
| rootDOM    | 根节点     |
| getRootDOM | 获取根节点 |

---

### NavBar.Title

| 参数     | 说明     | 类型        |
| -------- | -------- | ----------- |
| children | 标题文本 | `ReactNode` |

---

### NavBar.Button

| 参数      | 说明                                 | 类型                  | 默认值 |
| --------- | ------------------------------------ | --------------------- | ------ |
| icon      | 自定义图标（类名或节点）             | `string \| ReactNode` | `-`    |
| iconShape | 图标形状（如 `circle`）              | `string`              | `-`    |
| onClick   | 点击回调                             | `(e)=>void`           | `-`    |
| children  | 文本内容（传 `text` 时优先展示文本） | `ReactNode`           | `-`    |

#### NavBar.Button 其它属性

| 参数         | 说明                                  | 类型                  | 默认值   |
| ------------ | ------------------------------------- | --------------------- | -------- |
| iconPosition | 图标相对文本的位置                    | `'left'` \| `'right'` | `'left'` |
| iconSize     | 图标尺寸（像素，同步宽/高与字体大小） | `number`              | `-`      |

---

### NavBar.Icon

| 参数     | 说明           | 类型        |
| -------- | -------------- | ----------- |
| icon     | 图标类名       | `string`    |
| children | 自定义图标内容 | `ReactNode` |

## 注意事项

1. 在弹窗场景中可搭配 `Modal.NavBar*` 系列使用；普通页面建议放置在 `Layout.Header` 内。
2. `NavBar.Button` 既可展示纯图标，也可展示文本或二者结合。

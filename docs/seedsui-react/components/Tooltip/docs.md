## 何时使用

- 需要在点击（或自定义触发）某元素时，展示相对定位的小型气泡卡片。
- 需要可配置动画方向、遮罩点击关闭与自定义样式时。

## 组件结构

- `Tooltip` 主组件（受控/非受控）
- 静态方法：`Tooltip.updatePositionByReferenceDOM(el, options)`（便捷工具）

## API

### Tooltip

| 参数            | 说明                                     | 类型                             | 默认值          |
| --------------- | ---------------------------------------- | -------------------------------- | --------------- |
| content         | 气泡内容                                 | ReactNode                        | -               |
| animation       | 动画方向（决定出现方位与箭头朝向）       | 'slideDownLeft' 等（参考 Modal） | 'slideDownLeft' |
| style           | 弹层样式（宽高/颜色/边框等）             | CSSProperties                    | -               |
| maskProps       | 遮罩属性（className、style、onClick 等） | object                           | -               |
| visible         | 显隐（受控）                             | boolean                          | -               |
| maskClosable    | 点击遮罩是否关闭                         | boolean                          | true            |
| referenceDOM    | 参考元素（不传则取子元素）               | HTMLElement \| ()=>HTMLElement   | -               |
| onVisibleChange | 显隐回调                                 | (visible:boolean)=>void          | -               |
| children        | 触发元素（非受控模式下自动绑定点击切换） | ReactNode                        | -               |

Ref：`rootDOM/getRootDOM`。

---

### Tooltip.updatePositionByReferenceDOM(dom, options)

根据参考元素计算定位（内部已自动使用，一般无需直接调用）。

## 注意事项

1. 非受控模式下会给子元素绑定点击事件切换显隐；受控模式需自行处理 `visible`。
2. 若传入 `style` 的 `top/left/right/bottom`，则使用自定义定位，不再自动计算。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Tooltip/demos/demo1.jsx`。

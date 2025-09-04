## 何时使用

- 从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作。
- 避免用户进行破坏性操作。

## API

### ActionSheet

ActionSheet 是一个组合组件，包含以下子组件：

- `ActionSheet.Combo`: 组合选择器，用于触发 ActionSheet 模态框
- `ActionSheet.Modal`: 模态框组件，用于展示操作选项

### ActionSheet.Combo

组合选择器，用于触发 ActionSheet 模态框。

| 参数            | 说明                    | 类型                   | 默认值        |
| --------------- | ----------------------- | ---------------------- | ------------- |
| modalProps      | 传递给 Modal 组件的属性 | object                 | -             |
| title           | 模态框标题              | string                 | -             |
| list            | 选项列表                | array                  | -             |
| value           | 当前选中的值            | object                 | -             |
| placeholder     | 占位符文本              | string                 | -             |
| allowClear      | 是否允许清除选择        | boolean                | false         |
| portal          | 渲染容器                | HTMLElement            | document.body |
| getComboDOM     | 获取组合器 DOM 元素     | function               | -             |
| onBeforeChange  | 值改变前的回调          | function(currentValue) | -             |
| onBeforeChecked | 选中前的回调            | function               | -             |
| onChange        | 值改变时的回调          | function(value)        | -             |
| onVisibleChange | 可见性改变时的回调      | function(visible)      | -             |

### ActionSheet.Modal

模态框组件，用于展示操作选项。

| 参数            | 说明                        | 类型                                                                        | 默认值        |
| --------------- | --------------------------- | --------------------------------------------------------------------------- | ------------- |
| safeArea        | 是否启用安全区域适配        | boolean                                                                     | true          |
| allowClear      | 是否允许清除选择            | boolean                                                                     | false         |
| portal          | 渲染容器                    | HTMLElement                                                                 | document.body |
| getComboDOM     | 获取组合器 DOM 元素         | function                                                                    | -             |
| value           | 当前选中的值                | object                                                                      | -             |
| list            | 选项列表                    | array                                                                       | -             |
| onBeforeChange  | 值改变前的回调              | function(currentValue)                                                      | -             |
| onBeforeChecked | 选中前的回调                | function                                                                    | -             |
| onChange        | 值改变时的回调              | function(value)                                                             | -             |
| visible         | 是否可见                    | boolean                                                                     | false         |
| maskClosable    | 点击遮罩是否关闭            | boolean                                                                     | true          |
| onVisibleChange | 可见性改变时的回调          | function(visible)                                                           | -             |
| title           | 模态框标题                  | string                                                                      | -             |
| cancel          | 取消按钮，可以是函数或 null | function \| null                                                            | -             |
| maskProps       | 遮罩层属性                  | object                                                                      | {}            |
| groupProps      | 选项组属性                  | object                                                                      | {}            |
| optionProps     | 选项属性                    | object                                                                      | {}            |
| animation       | 动画类型                    | 'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade' | 'slideUp'     |

### list 数据结构

```typescript
interface ActionSheetItem {
  id: string | number; // 选项ID
  name: string; // 选项名称
  disabled?: boolean; // 是否禁用
  onClick?: function; // 点击回调
}
```

### Ref 方法

| 方法        | 说明                | 参数 |
| ----------- | ------------------- | ---- |
| modalDOM    | 获取模态框 DOM 元素 | -    |
| getModalDOM | 获取模态框 DOM 元素 | -    |

## 注意事项

1. ActionSheet 组件会自动过滤无效的选项（没有 id 或 name 的项）
2. 当 `allowClear` 为 true 时，再次点击已选中的选项会清除选择
3. 可以通过 `onBeforeChange` 回调来阻止值改变或修改要改变的值
4. 组件支持安全区域适配，在刘海屏等设备上会自动调整位置
5. 可以通过 `animation` 属性自定义动画效果
6. 可以通过 `cancel` 属性自定义取消按钮，设置为 null 可以隐藏取消按钮

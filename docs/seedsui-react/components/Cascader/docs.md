## 何时使用

- 需要从一组相关联的数据集合中进行选择，例如省市区、公司层级、事物分类等。
- 需要选择的数据具有层级关系，且层级数量不固定。
- 支持动态加载子级数据，适合大数据量的级联选择场景。

## API

### Cascader

Cascader 是一个组合组件，包含以下子组件：

- `Cascader.Combo`: 级联选择器组合器，用于触发级联选择模态框
- `Cascader.Modal`: 级联选择模态框组件
- `Cascader.Main`: 级联选择主组件
- `Cascader.DistrictCombo`: 地区选择器组合器
- `Cascader.DistrictModal`: 地区选择模态框
- `Cascader.DistrictMain`: 地区选择主组件

### Cascader.Combo

级联选择器组合器，用于触发级联选择模态框。

| 参数            | 说明                    | 类型                   | 默认值        |
| --------------- | ----------------------- | ---------------------- | ------------- |
| modalProps      | 传递给 Modal 组件的属性 | object                 | -             |
| searchVisible   | 是否显示搜索框          | boolean                | -             |
| list            | 级联数据列表            | array                  | -             |
| loadData        | 动态加载子级数据        | function(tabs)         | -             |
| multiple        | 是否支持多选            | boolean                | false         |
| value           | 当前选中的值            | array                  | -             |
| placeholder     | 占位符文本              | string                 | -             |
| allowClear      | 是否允许清除选择        | boolean                | false         |
| portal          | 渲染容器                | HTMLElement            | document.body |
| getComboDOM     | 获取组合器 DOM 元素     | function               | -             |
| onBeforeChange  | 值改变前的回调          | function(currentValue) | -             |
| onBeforeChecked | 选中前的回调            | function               | -             |
| onChange        | 值改变时的回调          | function(value)        | -             |
| onVisibleChange | 可见性改变时的回调      | function(visible)      | -             |

### Cascader.Modal

级联选择模态框组件。

| 参数            | 说明                        | 类型                                                                        | 默认值        |
| --------------- | --------------------------- | --------------------------------------------------------------------------- | ------------- |
| safeArea        | 是否启用安全区域适配        | boolean                                                                     | true          |
| allowClear      | 是否允许清除选择            | boolean                                                                     | false         |
| portal          | 渲染容器                    | HTMLElement                                                                 | document.body |
| getComboDOM     | 获取组合器 DOM 元素         | function                                                                    | -             |
| value           | 当前选中的值                | array                                                                       | -             |
| list            | 级联数据列表                | array                                                                       | -             |
| loadData        | 动态加载子级数据            | function(tabs)                                                              | -             |
| searchVisible   | 是否显示搜索框              | boolean                                                                     | -             |
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
interface CascaderItem {
  id: string | number // 选项ID
  name: string // 选项名称
  parentid?: string | number // 父级ID
  children?: CascaderItem[] // 子级选项
  isLeaf?: boolean // 是否为叶子节点
}
```

### loadData 函数

```typescript
function loadData(tabs: CascaderItem[]): Promise<CascaderItem[] | null> {
  // tabs: 当前选中的路径数组
  // 返回 Promise，resolve 子级数据或 null
  return new Promise((resolve) => {
    // 异步加载逻辑
    resolve(childData)
  })
}
```

### Ref 方法

| 方法        | 说明                | 参数 |
| ----------- | ------------------- | ---- |
| modalDOM    | 获取模态框 DOM 元素 | -    |
| getModalDOM | 获取模态框 DOM 元素 | -    |

## 注意事项

1. `list` 属性支持静态数据和动态加载两种方式
2. 当使用 `loadData` 动态加载时，`list` 可以只包含第一级数据
3. `loadData` 函数必须返回 Promise，用于异步加载子级数据
4. 组件会自动处理父子级关系，通过 `parentid` 字段建立关联
5. 支持搜索功能，可以通过 `searchVisible` 属性控制搜索框的显示
6. 可以通过 `multiple` 属性支持多选模式
7. 组件支持安全区域适配，在刘海屏等设备上会自动调整位置
8. 可以通过 `animation` 属性自定义动画效果

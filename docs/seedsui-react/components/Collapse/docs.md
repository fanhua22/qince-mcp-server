## 何时使用

- 内容区域需要可折叠/展开时，例如 FAQ、面板列表。
- 需要手风琴效果，保证同一时间仅一个内容块展开。

## API

Collapse 由两部分组成：`Collapse.Group` 和 `Collapse.Item`。

### Collapse.Group

| 参数      | 说明                     | 类型                              | 默认值 |
| --------- | ------------------------ | --------------------------------- | ------ |
| value     | 当前激活面板索引（受控） | `number \| null`                  | `null` |
| onChange  | 面板切换回调             | `(index: number \| null) => void` | `-`    |
| className | 自定义类名               | `string`                          | `-`    |
| style     | 自定义样式               | `CSSProperties`                   | `-`    |

#### Ref

| 属性           | 说明         | 类型                      |
| -------------- | ------------ | ------------------------- |
| rootDOM        | 根节点       | `HTMLDivElement`          |
| getRootDOM     | 获取根节点   | `() => HTMLDivElement`    |
| getActiveIndex | 当前激活索引 | `() => number \| null`    |
| openIndex      | 打开指定索引 | `(index: number) => void` |
| close          | 关闭全部     | `() => void`              |

---

### Collapse.Item

| 参数            | 说明                                    | 类型                                          | 默认值                              |
| --------------- | --------------------------------------- | --------------------------------------------- | ----------------------------------- |
| title           | 默认标题文本                            | `string`                                      | `-`                                 |
| header          | 自定义 Header 渲染函数                  | `(options) => ReactNode`                      | `-`                                 |
| arrow           | 自定义箭头，类名 / ReactNode / 渲染函数 | `string \| ReactNode \| (options)=>ReactNode` | `'collapse-item-header-arrow-icon'` |
| arrowPosition   | 箭头位置                                | `'left' \| 'right'`                           | `'right'`                           |
| visible         | 是否展开（受控）                        | `boolean`                                     | `true`                              |
| onVisibleChange | 展开状态改变回调                        | `(visible:boolean)=>void`                     | `-`                                 |
| children        | 折叠内容                                | `ReactNode`                                   | `-`                                 |
| className       | 自定义类名                              | `string`                                      | `-`                                 |
| style           | 自定义样式                              | `CSSProperties`                               | `-`                                 |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根节点     | `HTMLDivElement`       |
| getRootDOM | 获取根节点 | `() => HTMLDivElement` |
| open       | 打开       | `() => void`           |
| close      | 关闭       | `() => void`           |

## 注意事项

1. 将多个 `Collapse.Item` 作为 `Collapse.Group` 的子元素即可实现手风琴效果，Group 会保证一次仅一个 Item 展开。
2. 若需要同时展开多个 Item，可直接单独使用 `Collapse.Item`，不放入 Group 中。
3. `arrow` 可传入类名或完全自定义节点/函数，函数会收到 `{ visible }` 参数。

## 何时使用

- 需要展示业务流程的阶段性进度，如下单、审批、发布等。
- 需要时间线/点状/带图标的步骤展示与当前步骤高亮时。

## 组件结构

- `Steps` 步骤条组件

## 数据结构

```ts
interface StepItem {
  id: string | number
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: string | React.ReactNode
  // 状态：当前/完成/错误/等待
  status?: 'active' | 'finish' | 'error' | 'wait'
}
```

## API

### Steps

| 参数      | 说明                                              | 类型                                                                             | 默认值              |
| --------- | ------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------- |
| list      | 步骤项列表                                        | StepItem[]                                                                       | []                  |
| value     | 当前步骤索引（受控）                              | number                                                                           | 0                   |
| layout    | 布局样式                                          | 'horizontal-left' \| 'horizontal-center' \| 'vertical-left' \| 'vertical-center' | 'horizontal-center' |
| shape     | 形态样式                                          | 'default' \| 'dot' \| 'circle' \| 'timeline'                                     | 'default'           |
| onChange  | 当前步骤变化回调（点击或程序变更时触发）          | (index:number, item:StepItem)=>void                                              | -                   |
| className | 自定义类名                                        | string                                                                           | -                   |
| style     | 自定义样式（可结合 CSS 变量调整颜色/尺寸/间距等） | CSSProperties                                                                    | -                   |

说明：

- 若未显式指定 `status`，组件会基于 `value` 自动推导：小于当前为 `finish`，等于当前为 `active`，大于当前为 `wait`。

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. `shape='timeline'` 通常与 `layout='vertical-*'` 搭配展示。
2. 图标可传入类名或自定义节点；当 `shape='circle'` 时更突出。
3. 建议步骤文案简洁，过长内容可放在 `description`。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Steps/demos/*`。

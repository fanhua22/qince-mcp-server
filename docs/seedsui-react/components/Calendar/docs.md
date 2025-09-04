## 何时使用

- 当用户需要选择日期时，点击日期打开日期选择面板。
- 当用户需要查看日历信息时，展示月视图或周视图。
- 当需要选择日期范围时，支持范围选择模式。
- 当需要自定义日期渲染时，可以通过 `dateRender` 属性自定义。

## API

### Calendar

日历组件，支持月视图和周视图，可配置选择模式和自定义渲染。

| 参数           | 说明             | 类型                                                  | 默认值                     |
| -------------- | ---------------- | ----------------------------------------------------- | -------------------------- |
| type           | 日历类型         | 'week' \| 'month'                                     | 'month'                    |
| value          | 当前选中的值     | Date \| Date[]                                        | -                          |
| selectionMode  | 选择模式         | 'single' \| 'range'                                   | -                          |
| weekStart      | 周起始日         | 'Monday' \| 'Sunday'                                  | 'Sunday'                   |
| titleFormatter | 标题日期格式化   | string \| function(date, info)                        | 'YYYY-MM'                  |
| min            | 禁用之前日期     | Date                                                  | -                          |
| max            | 禁用之后日期     | Date                                                  | -                          |
| draggable      | 是否允许拖动     | string[]                                              | ['horizontal', 'vertical'] |
| header         | 头部渲染         | boolean                                               | true                       |
| dateRender     | 单个日期渲染     | function(date, { isSelected, isDisabled, isCurrent }) | -                          |
| onLoad         | 日历加载完成回调 | function(drawDate, { action, type, monthDates })      | -                          |
| onChange       | 日期选择变化回调 | function(value)                                       | -                          |
| onSlideChange  | 视图滑动变化回调 | function(drawDate, { action, type, monthDates })      | -                          |
| onError        | 错误回调         | function(error)                                       | -                          |

### titleFormatter 说明

当 `titleFormatter` 为字符串时，使用 dayjs 格式化语法：

- `'YYYY-MM'`: 显示为 "2024-01"
- `'YYYY年MM月'`: 显示为 "2024 年 01 月"
- `'YYYY-MM-DD W周'`: 显示为 "2024-01-15 第 3 周"

当 `titleFormatter` 为函数时，可以自定义标题内容：

```typescript
function titleFormatter(date: Date, info: { type: 'week' | 'month' }) {
  if (info.type === 'month') {
    return DateUtil.format(date, 'YYYY年MM月')
  }
  return DateUtil.format(date, 'YYYY年MM月DD日 d 第W周')
}
```

### dateRender 说明

`dateRender` 函数接收日期对象和状态信息，返回要渲染的内容：

```typescript
function dateRender(date: Date, { isSelected, isDisabled, isCurrent }) {
  return (
    <div className="calendar-date-num">
      {date.getDate()}
      {isCurrent && <span className="calendar-date-dot"></span>}
    </div>
  )
}
```

### Ref 方法

| 方法          | 说明           | 参数 |
| ------------- | -------------- | ---- |
| rootDOM       | 获取根元素 DOM | -    |
| getRootDOM    | 获取根元素 DOM | -    |
| slideCollapse | 折叠视图       | -    |
| slideExpand   | 展开视图       | -    |
| slidePrevious | 上一页         | -    |
| slideNext     | 下一页         | -    |

### 工具方法

Calendar 组件还提供了一些静态工具方法：

| 方法           | 说明                         | 参数                                              |
| -------------- | ---------------------------- | ------------------------------------------------- |
| getWeekDates   | 获取指定日期所在周的所有日期 | (date: Date, weekStart: string)                   |
| isDisabledDate | 判断日期是否被禁用           | (date: Date, options: { min?: Date, max?: Date }) |

## 注意事项

1. 当 `type` 为 'week' 时，日历显示为周视图，适合选择周范围
2. 当 `type` 为 'month' 时，日历显示为月视图，适合选择月范围
3. `selectionMode` 为 'range' 时，`value` 应该是一个包含两个日期的数组
4. `min` 和 `max` 属性用于限制可选择的日期范围
5. `draggable` 属性控制日历的滑动方向，可以禁用某个方向的滑动
6. `dateRender` 函数可以完全自定义日期的显示内容
7. 组件支持触摸滑动和鼠标拖拽操作
8. 可以通过 `onLoad` 回调获取日历初始化完成后的数据

# DatePicker 日期选择器

DatePicker 是一个功能完整的日期选择组件，支持多种日期类型和选择模式。

## 组件结构

DatePicker 包含以下子组件：

- `DatePicker.Combo` - 基础日期选择器
- `DatePicker.Modal` - 日期选择弹窗
- `DatePicker.Main` - 日期选择主体
- `DatePicker.RangeCombo` - 日期范围选择器
- `DatePicker.RangeModal` - 日期范围选择弹窗
- `DatePicker.RangeMain` - 日期范围选择主体
- `DatePicker.RangeSelector` - 日期范围快速选择器
- `DatePicker.MultipleCombo` - 多选日期选择器
- `DatePicker.MultipleModal` - 多选日期选择弹窗
- `DatePicker.MultipleMain` - 多选日期选择主体
- `DatePicker.WeekCombo` - 周选择器
- `DatePicker.WeekModal` - 周选择弹窗
- `DatePicker.WeekMain` - 周选择主体
- `DatePicker.Types` - 日期类型切换器

## DatePicker.Combo

基础日期选择器组件。

### API

| 属性                 | 说明             | 类型                                                                         | 默认值   |
| -------------------- | ---------------- | ---------------------------------------------------------------------------- | -------- |
| `value`              | 当前选中的日期值 | `Date`                                                                       | -        |
| `type`               | 日期类型         | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'` |
| `min`                | 最小可选日期     | `Date`                                                                       | -        |
| `max`                | 最大可选日期     | `Date`                                                                       | -        |
| `hourStep`           | 小时选择步长     | `number`                                                                     | -        |
| `minuteStep`         | 分钟选择步长     | `number`                                                                     | -        |
| `defaultPickerValue` | 默认面板日期     | `Date`                                                                       | -        |
| `onError`            | 日期验证错误回调 | `(error: ErrorInfo) => boolean \| void`                                      | -        |
| `modalProps`         | 弹窗属性         | `object`                                                                     | -        |
| `onChange`           | 日期变化回调     | `(value: Date) => void`                                                      | -        |
| `onBeforeChange`     | 日期变化前回调   | `(value: Date) => boolean \| Promise<boolean>`                               | -        |
| `placeholder`        | 占位符文本       | `string`                                                                     | -        |
| `allowClear`         | 是否允许清空     | `boolean`                                                                    | -        |
| `className`          | 自定义类名       | `string`                                                                     | -        |
| `style`              | 自定义样式       | `CSSProperties`                                                              | -        |

### Ref 方法

| 方法         | 说明            | 参数 | 返回值        |
| ------------ | --------------- | ---- | ------------- |
| `rootDOM`    | 根 DOM 元素     | -    | `HTMLElement` |
| `getRootDOM` | 获取根 DOM 元素 | -    | `HTMLElement` |

## DatePicker.Modal

日期选择弹窗组件。

### API

| 属性                 | 说明             | 类型                                                                         | 默认值            |
| -------------------- | ---------------- | ---------------------------------------------------------------------------- | ----------------- |
| `value`              | 当前选中的日期值 | `Date`                                                                       | -                 |
| `type`               | 日期类型         | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'`          |
| `min`                | 最小可选日期     | `Date`                                                                       | -                 |
| `max`                | 最大可选日期     | `Date`                                                                       | -                 |
| `hourStep`           | 小时选择步长     | `number`                                                                     | -                 |
| `minuteStep`         | 分钟选择步长     | `number`                                                                     | -                 |
| `defaultPickerValue` | 默认面板日期     | `Date`                                                                       | -                 |
| `onError`            | 日期验证错误回调 | `(error: ErrorInfo) => boolean \| void`                                      | -                 |
| `onBeforeChange`     | 日期变化前回调   | `(value: Date) => boolean \| Promise<boolean>`                               | -                 |
| `main`               | 主体组件         | `ReactNode`                                                                  | `DatePicker.Main` |
| `mainProps`          | 主体组件属性     | `object`                                                                     | -                 |
| `className`          | 自定义类名       | `string`                                                                     | -                 |
| `style`              | 自定义样式       | `CSSProperties`                                                              | -                 |

### Ref 方法

| 方法         | 说明            | 参数 | 返回值        |
| ------------ | --------------- | ---- | ------------- |
| `rootDOM`    | 根 DOM 元素     | -    | `HTMLElement` |
| `getRootDOM` | 获取根 DOM 元素 | -    | `HTMLElement` |

## DatePicker.Main

日期选择主体组件。

### API

| 属性         | 说明             | 类型                                                                         | 默认值   |
| ------------ | ---------------- | ---------------------------------------------------------------------------- | -------- |
| `visible`    | 是否可见         | `boolean`                                                                    | `true`   |
| `value`      | 当前选中的日期值 | `Date`                                                                       | -        |
| `type`       | 日期类型         | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'` |
| `allowClear` | 是否允许清空     | `boolean`                                                                    | -        |
| `min`        | 最小可选日期     | `Date`                                                                       | -        |
| `max`        | 最大可选日期     | `Date`                                                                       | -        |
| `hourStep`   | 小时选择步长     | `number`                                                                     | -        |
| `minuteStep` | 分钟选择步长     | `number`                                                                     | -        |
| `onChange`   | 日期变化回调     | `(value: Date) => void`                                                      | -        |

### Ref 方法

| 方法       | 说明             | 参数 | 返回值   |
| ---------- | ---------------- | ---- | -------- |
| `getTitle` | 获取当前日期标题 | -    | `string` |
| `getValue` | 获取当前日期值   | -    | `Date`   |

## DatePicker.RangeCombo

日期范围选择器组件。

### API

| 属性                 | 说明                 | 类型                                                                         | 默认值               |
| -------------------- | -------------------- | ---------------------------------------------------------------------------- | -------------------- |
| `value`              | 当前选中的日期范围   | `[Date, Date]`                                                               | -                    |
| `type`               | 日期类型             | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'`             |
| `min`                | 最小可选日期         | `Date`                                                                       | -                    |
| `max`                | 最大可选日期         | `Date`                                                                       | -                    |
| `hourStep`           | 小时选择步长         | `number`                                                                     | -                    |
| `minuteStep`         | 分钟选择步长         | `number`                                                                     | -                    |
| `defaultPickerValue` | 默认面板日期         | `Date`                                                                       | -                    |
| `onError`            | 日期验证错误回调     | `(error: ErrorInfo) => boolean \| void`                                      | -                    |
| `diff`               | 日期范围差值限制     | `number`                                                                     | -                    |
| `disabledStart`      | 是否禁用开始日期选择 | `boolean`                                                                    | -                    |
| `disabledEnd`        | 是否禁用结束日期选择 | `boolean`                                                                    | -                    |
| `ranges`             | 快速选择范围         | `object`                                                                     | `getDefaultRanges()` |
| `rangeId`            | 当前选中的范围 ID    | `string`                                                                     | -                    |
| `titles`             | 范围选择器标题       | `object`                                                                     | -                    |
| `format`             | 显示格式             | `string`                                                                     | -                    |
| `separator`          | 日期分隔符           | `string`                                                                     | -                    |
| `portal`             | 弹窗挂载节点         | `HTMLElement`                                                                | -                    |
| `modalProps`         | 弹窗属性             | `object`                                                                     | -                    |
| `onChange`           | 日期范围变化回调     | `(value: [Date, Date], info: { rangeId: string, ranges: object }) => void`   | -                    |
| `onBeforeChange`     | 日期范围变化前回调   | `(value: [Date, Date]) => boolean \| Promise<boolean>`                       | -                    |
| `placeholder`        | 占位符文本           | `string`                                                                     | -                    |
| `allowClear`         | 是否允许清空         | `boolean`                                                                    | -                    |
| `className`          | 自定义类名           | `string`                                                                     | -                    |
| `style`              | 自定义样式           | `CSSProperties`                                                              | -                    |

### Ref 方法

| 方法         | 说明            | 参数 | 返回值        |
| ------------ | --------------- | ---- | ------------- |
| `rootDOM`    | 根 DOM 元素     | -    | `HTMLElement` |
| `getRootDOM` | 获取根 DOM 元素 | -    | `HTMLElement` |

## DatePicker.MultipleCombo

多选日期选择器组件。

### API

| 属性                 | 说明               | 类型                                                                         | 默认值   |
| -------------------- | ------------------ | ---------------------------------------------------------------------------- | -------- |
| `value`              | 当前选中的日期数组 | `Date[]`                                                                     | -        |
| `type`               | 日期类型           | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'` |
| `min`                | 最小可选日期       | `Date`                                                                       | -        |
| `max`                | 最大可选日期       | `Date`                                                                       | -        |
| `hourStep`           | 小时选择步长       | `number`                                                                     | -        |
| `minuteStep`         | 分钟选择步长       | `number`                                                                     | -        |
| `defaultPickerValue` | 默认面板日期       | `Date`                                                                       | -        |
| `onError`            | 日期验证错误回调   | `(error: ErrorInfo) => boolean \| void`                                      | -        |
| `separator`          | 日期分隔符         | `string`                                                                     | -        |
| `modalProps`         | 弹窗属性           | `object`                                                                     | -        |
| `onChange`           | 日期数组变化回调   | `(value: Date[]) => void`                                                    | -        |
| `placeholder`        | 占位符文本         | `string`                                                                     | -        |
| `allowClear`         | 是否允许清空       | `boolean`                                                                    | -        |
| `className`          | 自定义类名         | `string`                                                                     | -        |
| `style`              | 自定义样式         | `CSSProperties`                                                              | -        |

### Ref 方法

| 方法         | 说明            | 参数 | 返回值        |
| ------------ | --------------- | ---- | ------------- |
| `rootDOM`    | 根 DOM 元素     | -    | `HTMLElement` |
| `getRootDOM` | 获取根 DOM 元素 | -    | `HTMLElement` |

## DatePicker.Types

日期类型切换器组件。

### API

| 属性                   | 说明                   | 类型                                                               | 默认值                                    |
| ---------------------- | ---------------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| `value`                | 当前选中的日期类型和值 | `{ type: string, name: string, value: Date }`                      | -                                         |
| `list`                 | 日期类型列表           | `Array<{ type: string, id?: string, name: string, value?: Date }>` | 默认包含 date、week、month、quarter、year |
| `min`                  | 最小可选日期           | `Date`                                                             | -                                         |
| `max`                  | 最大可选日期           | `Date`                                                             | -                                         |
| `pickerRender`         | 自定义选择器渲染函数   | `(tab: object, { onChange: function }) => ReactNode`               | -                                         |
| `contentProps`         | 内容区域属性           | `object`                                                           | -                                         |
| `TabsProps`            | 标签页属性             | `object`                                                           | -                                         |
| `DatePickerComboProps` | 日期选择器属性         | `object`                                                           | -                                         |
| `onError`              | 日期验证错误回调       | `(error: ErrorInfo) => boolean \| void`                            | -                                         |
| `onChange`             | 日期类型或值变化回调   | `(value: { type: string, name: string, value: Date }) => void`     | -                                         |
| `className`            | 自定义类名             | `string`                                                           | -                                         |
| `style`                | 自定义样式             | `CSSProperties`                                                    | -                                         |

### Ref 方法

| 方法         | 说明            | 参数 | 返回值        |
| ------------ | --------------- | ---- | ------------- |
| `rootDOM`    | 根 DOM 元素     | -    | `HTMLElement` |
| `getRootDOM` | 获取根 DOM 元素 | -    | `HTMLElement` |

## 工具函数

### DatePicker.getDefaultRanges()

获取默认的日期范围配置。

**返回值：** `object` - 包含预设日期范围的配置对象

### DatePicker.validateMaxMin(value, options)

验证日期是否在指定范围内。

**参数：**

- `value` - 要验证的日期值
- `options` - 验证选项
  - `type` - 日期类型
  - `min` - 最小日期
  - `max` - 最大日期
  - `onError` - 错误回调函数

**返回值：** `Date | false | null` - 验证后的日期值

### DatePicker.validateRange(value, options)

验证日期范围是否有效。

**参数：**

- `value` - 日期范围值
- `options` - 验证选项

**返回值：** `boolean` - 验证结果

## 数据类型

### ErrorInfo

日期验证错误信息。

```typescript
interface ErrorInfo {
  errCode: string // 错误代码
  errMsg: string // 错误消息
  min?: Date // 最小日期限制
  max?: Date // 最大日期限制
  value: Date // 当前值
}
```

### DateType

支持的日期类型。

```typescript
type DateType = 'year' | 'quarter' | 'month' | 'date' | 'time' | 'datetime' | 'week'
```

## 注意事项

1. **日期类型**：不同的 `type` 值会影响日期的显示格式和选择精度
2. **日期限制**：设置 `min` 和 `max` 可以限制用户可选择的日期范围
3. **步长设置**：对于时间类型，可以通过 `hourStep` 和 `minuteStep` 设置选择步长
4. **错误处理**：通过 `onError` 回调可以自定义日期验证失败的处理逻辑
5. **变化确认**：使用 `onBeforeChange` 可以在日期变化前进行确认或验证
6. **国际化**：组件内置了多语言支持，可以通过 `LocaleUtil` 进行本地化配置
7. **快速选择**：`RangeCombo` 组件提供了预设的日期范围快速选择功能
8. **多选模式**：`MultipleCombo` 支持选择多个日期，适用于批量操作场景

# DatePicker 使用示例

本文档展示了 DatePicker 组件的各种使用方式和场景。

## 基础用法

### 基本日期选择

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return <DatePicker.Combo placeholder="请选择日期" value={value} onChange={setValue} allowClear />
}
```

### 不同日期类型

```tsx
import React, { useState } from 'react'
import { DatePicker, Layout, Card, Divider } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>年份选择</Divider>
          <DatePicker.Combo type="year" placeholder="选择年份" value={value} onChange={setValue} />
        </Card>

        <Card>
          <Divider>月份选择</Divider>
          <DatePicker.Combo type="month" placeholder="选择月份" value={value} onChange={setValue} />
        </Card>

        <Card>
          <Divider>日期选择</Divider>
          <DatePicker.Combo type="date" placeholder="选择日期" value={value} onChange={setValue} />
        </Card>

        <Card>
          <Divider>时间选择</Divider>
          <DatePicker.Combo type="time" placeholder="选择时间" value={value} onChange={setValue} />
        </Card>

        <Card>
          <Divider>日期时间选择</Divider>
          <DatePicker.Combo
            type="datetime"
            placeholder="选择日期时间"
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>周选择</Divider>
          <DatePicker.Combo type="week" placeholder="选择周" value={value} onChange={setValue} />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

## 日期范围选择

### 基础范围选择

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.RangeCombo
      placeholder="选择日期范围"
      value={value}
      onChange={(newValue) => {
        console.log('选择的日期范围:', newValue)
        setValue(newValue)
      }}
      allowClear
    />
  )
}
```

### 自定义范围选择器

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  // 自定义快速选择范围
  const customRanges = {
    最近7天: [new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), new Date()],
    最近30天: [new Date(Date.now() - 29 * 24 * 60 * 60 * 1000), new Date()],
    本月: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    上月: [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0)
    ]
  }

  return (
    <DatePicker.RangeCombo
      placeholder="选择日期范围"
      ranges={customRanges}
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

### 禁用特定日期

```tsx
import React, { useState } from 'react'
import { DatePicker, DateUtil } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.RangeCombo
      placeholder="选择日期范围"
      min={new Date()} // 不能选择今天之前的日期
      max={DateUtil.add(new Date(), 30, 'day')} // 不能选择30天后的日期
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

## 多选日期

### 基础多选

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  return (
    <DatePicker.MultipleCombo
      placeholder="选择多个日期"
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

### 多选时间

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  return (
    <DatePicker.MultipleCombo
      type="time"
      placeholder="选择多个时间"
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

## 日期类型切换

### 基础类型切换

```tsx
import React, { useState } from 'react'
import { DatePicker, LocaleUtil } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState()

  return (
    <DatePicker.Types
      value={value}
      list={[
        {
          type: 'date',
          id: 'date',
          name: LocaleUtil.locale('日', 'datetype_unit_date')
        },
        {
          type: 'month',
          id: 'month',
          name: LocaleUtil.locale('月', 'datetype_unit_month')
        },
        {
          type: 'quarter',
          id: 'quarter',
          name: LocaleUtil.locale('季', 'datetype_unit_quarter')
        },
        {
          type: 'year',
          id: 'year',
          name: LocaleUtil.locale('年', 'datetype_unit_year')
        },
        {
          type: 'week',
          id: 'week',
          name: LocaleUtil.locale('周', 'datetype_unit_week')
        }
      ]}
      onChange={(newValue) => {
        console.log('修改:', newValue)
        setValue(newValue)
      }}
      contentProps={{ className: 'flex flex-left' }}
    />
  )
}
```

### 自定义类型列表

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState()

  const customTypes = [
    {
      type: 'date',
      name: '具体日期',
      value: new Date()
    },
    {
      type: 'week',
      name: '周选择',
      value: new Date()
    },
    {
      type: 'month',
      name: '月份选择',
      value: new Date()
    }
  ]

  return (
    <DatePicker.Types
      value={value}
      list={customTypes}
      onChange={setValue}
      contentProps={{ className: 'flex flex-left' }}
    />
  )
}
```

## 高级功能

### 时间步长设置

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      type="datetime"
      placeholder="选择日期时间"
      hourStep={2} // 小时选择步长为2
      minuteStep={15} // 分钟选择步长为15
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

### 错误处理

```tsx
import React, { useState } from 'react'
import { DatePicker, Toast } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      placeholder="选择日期"
      min={new Date()}
      max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
      value={value}
      onChange={setValue}
      onError={(error) => {
        Toast.show({ content: error.errMsg })
      }}
      allowClear
    />
  )
}
```

### 变化前确认

```tsx
import React, { useState } from 'react'
import { DatePicker, Modal } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      placeholder="选择日期"
      value={value}
      onBeforeChange={(newValue) => {
        return new Promise((resolve) => {
          Modal.confirm({
            title: '确认修改',
            content: `确定要修改日期为 ${newValue.toLocaleDateString()} 吗？`,
            onOk() {
              resolve(true)
            },
            onCancel() {
              resolve(false)
            }
          })
        })
      }}
      onChange={setValue}
      allowClear
    />
  )
}
```

### 自定义弹窗标题

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      placeholder="选择日期"
      title="请选择您的生日"
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

## 周选择器

### 基础周选择

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return <DatePicker.WeekCombo placeholder="选择周" value={value} onChange={setValue} allowClear />
}
```

## 工具函数使用

### 获取默认范围

```tsx
import React from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const defaultRanges = DatePicker.getDefaultRanges()

  return (
    <div>
      <h3>默认日期范围：</h3>
      <ul>
        {Object.keys(defaultRanges).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  )
}
```

### 日期验证

```tsx
import React from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const validateDate = (date) => {
    const result = DatePicker.validateMaxMin(date, {
      type: 'date',
      min: new Date(),
      max: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      onError: (error) => {
        console.log('验证错误:', error.errMsg)
        return false
      }
    })

    if (result === false) {
      console.log('日期验证失败')
    } else if (result instanceof Date) {
      console.log('日期验证通过:', result)
    }

    return result
  }

  return <button onClick={() => validateDate(new Date())}>验证日期</button>
}
```

## 样式定制

### 自定义类名

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      className="custom-datepicker"
      placeholder="自定义样式"
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

### 内联样式

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <DatePicker.Combo
      style={{
        margin: '0 12px',
        border: '2px solid #1890ff',
        borderRadius: '8px'
      }}
      placeholder="自定义样式"
      value={value}
      onChange={setValue}
      allowClear
    />
  )
}
```

## 完整示例

### 综合使用场景

```tsx
import React, { useState } from 'react'
import { DatePicker, Layout, Card, Divider, Button, Space } from 'seedsui-react'

export default () => {
  const [singleDate, setSingleDate] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [multipleDates, setMultipleDates] = useState([])
  const [dateType, setDateType] = useState()

  const handleReset = () => {
    setSingleDate(null)
    setDateRange(null)
    setMultipleDates([])
    setDateType(null)
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>基础日期选择</Divider>
          <DatePicker.Combo
            placeholder="选择单个日期"
            value={singleDate}
            onChange={setSingleDate}
            allowClear
          />
        </Card>

        <Card>
          <Divider>日期范围选择</Divider>
          <DatePicker.RangeCombo
            placeholder="选择日期范围"
            value={dateRange}
            onChange={setDateRange}
            allowClear
          />
        </Card>

        <Card>
          <Divider>多选日期</Divider>
          <DatePicker.MultipleCombo
            placeholder="选择多个日期"
            value={multipleDates}
            onChange={setMultipleDates}
            allowClear
          />
        </Card>

        <Card>
          <Divider>日期类型切换</Divider>
          <DatePicker.Types
            value={dateType}
            onChange={setDateType}
            contentProps={{ className: 'flex flex-left' }}
          />
        </Card>

        <Card>
          <Divider>操作按钮</Divider>
          <Space>
            <Button onClick={handleReset}>重置所有选择</Button>
            <Button
              type="primary"
              onClick={() =>
                console.log({
                  singleDate,
                  dateRange,
                  multipleDates,
                  dateType
                })
              }
            >
              查看选择结果
            </Button>
          </Space>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

这些示例展示了 DatePicker 组件的各种使用方式和功能特性。你可以根据具体需求选择合适的组件和配置选项。


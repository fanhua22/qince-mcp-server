## Calendar 组件示例

### 基本使用

展示一个基本的周视图日历，支持日期选择和自定义渲染。

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Calendar } from 'seedsui-react'
import DateUtil from 'seedsui-react/utils/DateUtil'

const selectionMode = 'range'
const weekStart = 'Monday'

export default () => {
  const calendarRef = useRef(null)
  const [data, setData] = useState([])
  const [value, setValue] = useState()

  function handleChange(newValue) {
    console.log('修改', newValue)
    setValue(newValue)
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar
          type="week"
          ref={calendarRef}
          weekStart={weekStart}
          value={value}
          titleFormatter={(date, info) => {
            if (info.type === 'month') {
              return DateUtil.format(date, 'YYYY年MM月')
            }
            return DateUtil.format(date, `YYYY年MM月DD日 d 第W周`)
          }}
          dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
            return (
              <div className="calendar-date-num">
                {date.getDate()}
                {isCurrent && <span className="calendar-date-dot"></span>}
                {data[DateUtil.format(date, 'YYYY-MM-DD')] ? 'M' : ''}
              </div>
            )
          }}
          onChange={handleChange}
          onSlideChange={(drawDate, { action, type, monthDates }) => {
            console.log('视图变化:', { data: drawDate, action, type, monthDates })
            setData({ '2024-04-10': '1' })
          }}
          onLoad={(drawDate, { action, type, monthDates }) => {
            console.log('日历初始化', { data: drawDate, action, type, monthDates })
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 月视图日历

展示月视图日历，支持范围选择。

```tsx
import React, { useState } from 'react'
import { Layout, Calendar } from 'seedsui-react'
import DateUtil from 'seedsui-react/utils/DateUtil'

export default () => {
  const [value, setValue] = useState()

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar
          type="month"
          selectionMode="range"
          value={value}
          titleFormatter="YYYY年MM月"
          dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
            return (
              <div className="calendar-date-num">
                {date.getDate()}
                {isCurrent && <span className="calendar-date-dot"></span>}
                {isSelected && <span className="calendar-date-selected"></span>}
              </div>
            )
          }}
          onChange={(newValue) => {
            console.log('选择日期范围:', newValue)
            setValue(newValue)
          }}
          onSlideChange={(drawDate, { action, type, monthDates }) => {
            console.log('月份切换:', DateUtil.format(drawDate, 'YYYY年MM月'))
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 日期范围限制

展示如何限制可选择的日期范围。

```tsx
import React, { useState } from 'react'
import { Layout, Calendar } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState()

  // 设置最小和最大日期
  const minDate = new Date()
  const maxDate = new Date('2024-12-31')

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar
          type="month"
          value={value}
          min={minDate}
          max={maxDate}
          titleFormatter="YYYY年MM月"
          dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
            return (
              <div className={`calendar-date-num ${isDisabled ? 'disabled' : ''}`}>
                {date.getDate()}
                {isCurrent && <span className="calendar-date-dot"></span>}
              </div>
            )
          }}
          onChange={(newValue) => {
            console.log('选择日期:', newValue)
            setValue(newValue)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义标题格式

展示不同的标题格式化方式。

```tsx
import React, { useState } from 'react'
import { Layout, Calendar } from 'seedsui-react'
import DateUtil from 'seedsui-react/utils/DateUtil'

export default () => {
  const [value, setValue] = useState()

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar
          type="week"
          value={value}
          titleFormatter={(date, info) => {
            if (info.type === 'week') {
              const weekStart = new Date(date)
              weekStart.setDate(date.getDate() - date.getDay() + 1)
              const weekEnd = new Date(weekStart)
              weekEnd.setDate(weekStart.getDate() + 6)

              return `${DateUtil.format(weekStart, 'MM/DD')} - ${DateUtil.format(weekEnd, 'MM/DD')}`
            }
            return DateUtil.format(date, 'YYYY年MM月')
          }}
          onChange={(newValue) => {
            setValue(newValue)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 程序化控制

展示如何通过 ref 方法程序化控制日历。

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Calendar, Button } from 'seedsui-react'

export default () => {
  const calendarRef = useRef(null)
  const [value, setValue] = useState()

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar ref={calendarRef} value={value} onChange={(newValue) => setValue(newValue)} />

        <div style={{ marginTop: 'var(--seed-space-m)' }}>
          <Button
            onClick={() => calendarRef.current.slidePrevious()}
            style={{ marginRight: 'var(--seed-space-s)' }}
          >
            上一页
          </Button>

          <Button
            onClick={() => calendarRef.current.slideNext()}
            style={{ marginRight: 'var(--seed-space-s)' }}
          >
            下一页
          </Button>

          <Button
            onClick={() => calendarRef.current.slideCollapse()}
            style={{ marginRight: 'var(--seed-space-s)' }}
          >
            折叠
          </Button>

          <Button onClick={() => calendarRef.current.slideExpand()}>展开</Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 禁用拖动

展示如何禁用特定方向的拖动。

```tsx
import React, { useState } from 'react'
import { Layout, Calendar } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState()

  return (
    <Layout className="full">
      <Layout.Main>
        <Calendar
          value={value}
          // 只允许水平拖动
          draggable={['horizontal']}
          titleFormatter="YYYY年MM月"
          onChange={(newValue) => setValue(newValue)}
        />
      </Layout.Main>
    </Layout>
  )
}
```

## DateUtil 组件示例

### 1. 常用格式化/比较/加减

```tsx
import React from 'react'
import { Layout, Card, Divider, Space } from 'seedsui-react'
import DateUtil from '@/utils/DateUtil'

export default () => {
  const now = new Date()
  const plus7 = DateUtil.add(now, 7, 'day')
  const cmp = DateUtil.compare(plus7, now, 'date')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>format / add / compare</Divider>
        <Space direction="vertical" style={{ margin: 12 }}>
          <Card style={{ padding: 12 }}>now: {DateUtil.format(now, 'YYYY-MM-DD HH:mm:ss')}</Card>
          <Card style={{ padding: 12 }}>+7d: {DateUtil.format(plus7, 'YYYY-MM-DD')}</Card>
          <Card style={{ padding: 12 }}>compare(+7d, now): {cmp}</Card>
        </Space>
      </Layout.Main>
    </Layout>
  )
}
```

### 2. 周与月信息

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import DateUtil from '@/utils/DateUtil'

export default () => {
  const now = new Date()
  const weekDates = DateUtil.getWeekDates(now, 'Monday')
  const days = DateUtil.getDaysInMonth(now)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>week & month</Divider>
        <Card style={{ padding: 12 }}>
          week: {weekDates.map((d) => DateUtil.format(d, 'YYYY-MM-DD')).join(', ')}
        </Card>
        <Card style={{ padding: 12, marginTop: 8 }}>daysInMonth: {days}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 3. UTC 与时区

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import DateUtil from '@/utils/DateUtil'

export default () => {
  const zone = DateUtil.timeZonePlaceName()
  const offset = DateUtil.utcOffset()
  const offsetDesc = DateUtil.stringifyUtcOffset(offset)
  const utcDate = new Date('2025-05-09 01:01:36')
  const localFromUtc = DateUtil.utcToTimeZone(utcDate, offset)
  const utcPlusOne = DateUtil.betweenTimeZones(utcDate, DateUtil.parseUtcOffset('UTC+08:00'), DateUtil.parseUtcOffset('UTC+09:00'))

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>UTC / TimeZone</Divider>
        <Card style={{ padding: 12 }}>zone: {zone}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>offset: {offset} ({offsetDesc})</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>utc->local: {DateUtil.format(localFromUtc, 'YYYY-MM-DD HH:mm:ss')}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>UTC+8 -> UTC+9: {DateUtil.format(utcPlusOne, 'YYYY-MM-DD HH:mm:ss')}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

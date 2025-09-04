## MathUtil 组件示例

### 1. 数字处理

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import MathUtil from '@/utils/MathUtil'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Divider>number</Divider>
      <Card style={{ padding: 12 }}>isNumber('1.2e3'): {String(MathUtil.isNumber('1.2e3'))}</Card>
      <Card style={{ padding: 12 }}>
        extractNumber('a-12.3b'): {MathUtil.extractNumber('a-12.3b')}
      </Card>
      <Card style={{ padding: 12 }}>thousands(1234567.89): {MathUtil.thousands(1234567.89)}</Card>
      <Card style={{ padding: 12 }}>
        antiThousands('1,234,567.89'): {MathUtil.antiThousands('1,234,567.89')}
      </Card>
      <Card style={{ padding: 12 }}>fixed(1.2345, 2): {MathUtil.fixed(1.2345, 2)}</Card>
      <Card style={{ padding: 12 }}>round(1.005, 2): {MathUtil.round(1.005, 2)}</Card>
      <Card style={{ padding: 12 }}>strip(0.1 * 0.2): {MathUtil.strip(0.1 * 0.2)}</Card>
    </Layout.Main>
  </Layout>
)
```

### 2. 惯性计算

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import MathUtil from '@/utils/MathUtil'

export default () => {
  const res = MathUtil.inertia({
    cellSize: 36,
    distance: 300,
    duration: 200,
    currentPosition: 0,
    minPosition: 0,
    maxPosition: 360
  })
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>inertia</Divider>
        <Card style={{ padding: 12 }}>{JSON.stringify(res)}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

## ObjectUtil 组件示例

### 1. isEmpty 判定

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import ObjectUtil from '@/utils/ObjectUtil'

export default () => {
  const invalidDate = new Date('invalid')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>isEmpty</Divider>
        <Card style={{ padding: 12 }}>{String(ObjectUtil.isEmpty({}))}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>{String(ObjectUtil.isEmpty([]))}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>{String(ObjectUtil.isEmpty(''))}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>{String(ObjectUtil.isEmpty(invalidDate))}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

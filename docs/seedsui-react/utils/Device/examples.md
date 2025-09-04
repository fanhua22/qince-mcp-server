## Device 组件示例

### 1. 展示环境与版本信息

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import Device from '@/utils/Device'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Divider>Env</Divider>
      <Card style={{ padding: 12 }}>language: {Device.language}</Card>
      <Card style={{ padding: 12 }}>device: {Device.device}</Card>
      <Card style={{ padding: 12 }}>
        os: {Device.os} {Device.osVersion}
      </Card>
      <Card style={{ padding: 12 }}>
        platform: {Device.platform} {Device.platformVersion}
      </Card>
      <Card style={{ padding: 12 }}>kernel: {Device.kernel}</Card>
      <Card style={{ padding: 12 }}>model: {Device.model}</Card>
      <Card style={{ padding: 12 }}>
        screen: {Device.screenWidth} x {Device.screenHeight}
      </Card>
    </Layout.Main>
  </Layout>
)
```

### 2. 读取 URL 参数与版本比较

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import Device from '@/utils/Device'

export default () => {
  const v = Device.compareVersion('7.7.10', '7.7.5')
  const locale = Device.getUrlParameter('locale')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Utils</Divider>
        <Card style={{ padding: 12 }}>compareVersion: {v}</Card>
        <Card style={{ padding: 12 }}>locale param: {locale}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

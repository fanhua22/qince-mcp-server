## Bridge 组件示例

### 1. ready 与基础能力

```tsx
import React, { useEffect } from 'react'
import { Layout, Button, Space, Toast, Loading } from 'seedsui-react'
import Bridge from '@/utils/Bridge'

export default () => {
  useEffect(() => {
    Bridge.ready(() => {
      console.log('SDK ready')
    })
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <Space direction="vertical" style={{ margin: 12 }}>
          <Button onClick={() => Bridge.setTitle({ title: '自定义标题' })}>setTitle</Button>
          <Button onClick={() => Bridge.openWindow({ url: 'https://www.baidu.com' })}>
            openWindow
          </Button>
          <Button onClick={() => Bridge.closeWindow()}>closeWindow</Button>
        </Space>
      </Layout.Main>
    </Layout>
  )
}
```

### 2. 定位与地图

```tsx
import React from 'react'
import { Layout, Button, Loading } from 'seedsui-react'
import Bridge from '@/utils/Bridge'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button
        className="primary"
        style={{ margin: 12 }}
        onClick={() => {
          Loading.show({ content: '定位中...' })
          Bridge.getLocation({
            type: 'gcj02',
            success: (res) => {
              Loading.hide()
              alert(JSON.stringify(res))
            },
            fail: (err) => {
              Loading.hide()
              alert(JSON.stringify(err))
            }
          })
        }}
      >
        getLocation
      </Button>
      <Button
        style={{ margin: 12 }}
        onClick={() =>
          Bridge.openLocation({
            latitude: 39.81,
            longitude: 116.49,
            name: '终点',
            address: '终点地址'
          })
        }
      >
        openLocation
      </Button>
    </Layout.Main>
  </Layout>
)
```

### 3. 扫码/选图/预览

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Bridge from '@/utils/Bridge'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button style={{ margin: 12 }} onClick={() => Bridge.scanQRCode({ scanType: ['barCode'] })}>
        scanQRCode
      </Button>
      <Button
        style={{ margin: 12 }}
        onClick={() =>
          Bridge.previewImage({
            urls: [
              'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
            ],
            index: 0
          })
        }
      >
        previewImage
      </Button>
    </Layout.Main>
  </Layout>
)
```

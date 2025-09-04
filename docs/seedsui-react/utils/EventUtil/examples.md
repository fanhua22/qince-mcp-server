## EventUtil 组件示例

### 1. 发布订阅基础

```tsx
import React from 'react'
import { Layout, Button, Space } from 'seedsui-react'
import EventUtil from '@/utils/EventUtil'

export default () => {
  function sub() {
    EventUtil.on('ping', (msg) => alert('on ping: ' + msg))
  }
  function pub() {
    EventUtil.emit('ping', 'hello')
  }
  function off() {
    EventUtil.destroy('ping')
  }
  return (
    <Layout className="full">
      <Layout.Main>
        <Space style={{ margin: 12 }}>
          <Button onClick={sub}>subscribe</Button>
          <Button onClick={pub}>emit</Button>
          <Button onClick={off}>destroy</Button>
        </Space>
      </Layout.Main>
    </Layout>
  )
}
```

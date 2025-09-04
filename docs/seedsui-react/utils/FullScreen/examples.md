## FullScreen 组件示例

### 1. 进入/退出/切换全屏

```tsx
import React, { useRef } from 'react'
import { Layout, Button, Space, Toast } from 'seedsui-react'
import FullScreen from '@/utils/FullScreen'

export default () => {
  const boxRef = useRef(null)
  return (
    <Layout className="full">
      <Layout.Main>
        <div ref={boxRef} style={{ height: 180, margin: 12, background: '#f5f5f5' }} />
        <Space style={{ margin: 12 }}>
          <Button onClick={() => Toast.show({ content: String(FullScreen.support()) })}>
            support
          </Button>
          <Button onClick={() => FullScreen.enter(boxRef.current)}>enter</Button>
          <Button onClick={() => FullScreen.exit()}>exit</Button>
          <Button
            onClick={() =>
              FullScreen.toggle(boxRef.current, (v) => Toast.show({ content: 'isFull:' + v }))
            }
          >
            toggle
          </Button>
        </Space>
      </Layout.Main>
    </Layout>
  )
}
```

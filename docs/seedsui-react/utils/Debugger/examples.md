## Debugger 组件示例

### 1. 暗门触发 vConsole

```tsx
import React, { useEffect } from 'react'
import { Layout } from 'seedsui-react'
import Debugger from '@/utils/Debugger'

export default () => {
  useEffect(() => {
    // 左下角出现 24x100 的隐藏触发区，点击 10 次打开 vConsole
    Debugger.addTrigger()
  }, [])
  return (
    <Layout className="full">
      <Layout.Main>左下角点击 10 次呼出暗门</Layout.Main>
    </Layout>
  )
}
```

### 2. 直接拉起 vConsole

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Debugger from '@/utils/Debugger'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button className="primary" style={{ margin: 12 }} onClick={() => Debugger.showDebug()}>
        打开调试面板
      </Button>
    </Layout.Main>
  </Layout>
)
```

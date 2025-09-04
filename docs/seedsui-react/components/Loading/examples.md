## Loading 组件示例

### 全局 Loading（静态方法）

```tsx
import React from 'react'
import { Button, Loading } from 'seedsui-react'

export default () => (
  <Button
    className="primary"
    onClick={() => {
      const inst = Loading.show({ text: '加载中...' })
      setTimeout(() => inst.destroy(), 1000)
    }}
  >
    Show Loading
  </Button>
)
```

### 作为容器 + 变体

```tsx
import React from 'react'
import { Layout, Loading } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="flex flex-center" style={{ minHeight: 160 }}>
      <Loading>
        <Loading.SpinFade />
        <div style={{ marginTop: 8 }}>加载中...</div>
      </Loading>
    </Layout.Main>
  </Layout>
)
```

### 其它动效

```tsx
import React from 'react'
import { Loading, Space } from 'seedsui-react'

export default () => (
  <Space>
    <Loading.Ouroboros />
    <Loading.BallWave />
  </Space>
)
```

更多示例可参考 `src/components/Loading/demos/*`。

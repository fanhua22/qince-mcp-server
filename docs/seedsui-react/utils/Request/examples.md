## Request 组件示例

### 1. 普通 GET

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Request from '@/utils/Request'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button
        className="primary"
        style={{ margin: 12 }}
        onClick={async () => {
          const res = await Request.get(
            'https://res.waiqin365.com/p/platform/district/zh_CN/86.json.info'
          )
          console.log(res)
          alert('ok')
        }}
      >
        Request get
      </Button>
    </Layout.Main>
  </Layout>
)
```

### 2. 带缓存 GET（cacheKey）

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Request from '@/utils/Request'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button
        style={{ margin: 12 }}
        onClick={async () => {
          const res = await Request.get(
            'https://res.waiqin365.com/p/platform/district/en_US/86.json',
            null,
            {
              cacheKey: '0'
            }
          )
          console.log(res)
          alert('cached')
        }}
      >
        Request by cacheKey
      </Button>
    </Layout.Main>
  </Layout>
)
```

## Result 组件示例

### 空数据（empty）

```tsx
import React from 'react'
import { Layout, Result } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Result className="full" status="empty" />
      </Layout.Main>
    </Layout>
  )
}
```

### 服务器错误（500）并带操作

```tsx
import React from 'react'
import { Layout, Result, Button } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Result className="full" status="500">
          <Button
            className="result-button primary"
            style={{ marginTop: 77 }}
            onClick={() => window.location.reload()}
          >
            重试
          </Button>
          <Button className="result-button bg-white" onClick={() => history.back()}>
            返回
          </Button>
        </Result>
      </Layout.Main>
    </Layout>
  )
}
```

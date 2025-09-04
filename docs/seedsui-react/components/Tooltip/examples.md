## Tooltip 组件示例

### 基础用法

```tsx
import React from 'react'
import { Layout, Tooltip } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Tooltip content={<p>内容提示</p>}>
        <div style={{ margin: 100 }}>点击</div>
      </Tooltip>
    </Layout.Main>
  </Layout>
)
```

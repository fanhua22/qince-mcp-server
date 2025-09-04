## Icon 组件示例

### 基本用法

```tsx
import React from 'react'
import { Layout, Icon } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <p>Don't use seeds-icons, cause that className often changes</p>
      <Icon className="seeds-icons seeds-icon-signature" size={100}></Icon>
    </Layout.Main>
  </Layout>
)
```

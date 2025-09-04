## NavBar 组件示例

### 基础用法

```tsx
import React from 'react'
import { Layout, NavBar } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header>
      <NavBar>
        <NavBar.Button icon="seeds-icons seeds-icon-arrow-left" onClick={() => history.back()} />
        <NavBar.Title>标题</NavBar.Title>
        <NavBar.Button>操作</NavBar.Button>
      </NavBar>
    </Layout.Header>
    <Layout.Main>Content</Layout.Main>
  </Layout>
)
```

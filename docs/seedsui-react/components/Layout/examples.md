## Layout 组件示例

### 基础布局

```tsx
import React from 'react'
import { Layout, Divider } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header className="padding-l">Header</Layout.Header>
    <Layout.Main>
      <Divider>Content</Divider>
      <div style={{ height: 600 }}>Scroll Content</div>
    </Layout.Main>
    <Layout.Footer className="padding-l">Footer</Layout.Footer>
  </Layout>
)
```

### 下拉刷新 / 触底加载

```tsx
import React, { useState } from 'react'
import { Layout } from 'seedsui-react'

export default () => {
  const [list, setList] = useState([1, 2, 3, 4, 5])

  function onTopRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setList([1, 2, 3, 4, 5])
        resolve(true)
      }, 800)
    })
  }

  function onBottomRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setList((prev) => prev.concat([6, 7, 8]))
        resolve(true)
      }, 800)
    })
  }

  return (
    <Layout className="full">
      <Layout.Main onTopRefresh={onTopRefresh} onBottomRefresh={onBottomRefresh}>
        <ul>
          {list.map((i) => (
            <li key={i} className="padding-l">
              Item {i}
            </li>
          ))}
        </ul>
      </Layout.Main>
    </Layout>
  )
}
```

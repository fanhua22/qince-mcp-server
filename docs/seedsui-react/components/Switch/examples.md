## Switch 组件示例

### 受控用法

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Switch } from 'seedsui-react'

export default () => {
  const [checked, setChecked] = useState(false)
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Controlled</Divider>
        <Switch checked={checked} onChange={setChecked} />
        <div style={{ marginTop: 'var(--seed-space-s)' }}>当前：{checked ? '开' : '关'}</div>
      </Layout.Main>
    </Layout>
  )
}
```

### 只读与禁用

```tsx
import React from 'react'
import { Layout, Divider, Switch } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>ReadOnly</Divider>
      <Switch checked readOnly />

      <Divider>Disabled</Divider>
      <Switch checked={false} disabled />
    </Layout.Main>
  </Layout>
)
```

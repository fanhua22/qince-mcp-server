## Transfer 组件示例

### Transfer.Combo（组合器）

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Button, Transfer } from 'seedsui-react'

export default () => {
  const transferRef = useRef(null)
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <div className="demo-title">Transfer Combo</div>
        <Transfer.Combo
          ref={transferRef}
          placeholder="Select"
          allowClear
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' }
          ]}
          value={value}
          onChange={setValue}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### Transfer.Modal（受控弹窗）

```tsx
import React, { useState } from 'react'
import { Layout, Transfer } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <div className="demo-title">Transfer Modal</div>
        <Transfer.Modal
          visible
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' }
          ]}
          value={value}
          onChange={setValue}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### Transfer.Main（主体）

```tsx
import React, { useState } from 'react'
import { Layout, Transfer } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <div className="demo-title">Transfer List</div>
      <Transfer.Main
        list={[
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' }
        ]}
        value={value}
        titles={['已添加', '未添加']}
        onChange={setValue}
      />
    </Layout>
  )
}
```

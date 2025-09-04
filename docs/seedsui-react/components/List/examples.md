## List 组件示例

### 基础列表

```tsx
import React from 'react'
import { Layout, List } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <List
        list={[
          { id: '1', name: '选项1', description: '描述1' },
          { id: '2', name: '选项2', description: '描述2' }
        ]}
      />
    </Layout.Main>
  </Layout>
)
```

### 单选/多选

```tsx
import React, { useState } from 'react'
import { Layout, List } from 'seedsui-react'

export default () => {
  const [single, setSingle] = useState(null)
  const [multi, setMulti] = useState([])
  const data = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  return (
    <Layout className="full">
      <Layout.Main>
        <List multiple={false} value={single} list={data} onChange={setSingle} />
        <List multiple value={multi} list={data} onChange={setMulti} />
      </Layout.Main>
    </Layout>
  )
}
```

### 下拉刷新 / 触底加载（List.Main）

```tsx
import React, { useState } from 'react'
import { Layout, List } from 'seedsui-react'

export default () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => ({ id: i, name: `项${i}` }))
  )

  function onTopRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setItems(Array.from({ length: 20 }, (_, i) => ({ id: i, name: `项${i}` })))
        resolve(true)
      }, 600)
    })
  }

  function onBottomRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setItems((prev) =>
          prev.concat(Array.from({ length: 10 }, (_, i) => ({ id: 'N' + i, name: `新项${i}` })))
        )
        resolve(true)
      }, 600)
    })
  }

  return (
    <Layout className="full">
      <List.Main list={items} onTopRefresh={onTopRefresh} onBottomRefresh={onBottomRefresh} />
    </Layout>
  )
}
```

### 虚拟列表

```tsx
import React from 'react'
import { Layout, List } from 'seedsui-react'

export default () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Row ${i}` }))
  return (
    <Layout className="full">
      <List.Main virtual list={items} />
    </Layout>
  )
}
```

更多示例可参考 `src/components/List/demos/*`。

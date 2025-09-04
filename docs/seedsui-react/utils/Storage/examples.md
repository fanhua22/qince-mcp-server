## Storage 组件示例

### 1. useCacheState（持久化）

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Storage from '@/utils/Storage'

export default () => {
  const [data, setData] = Storage.useCacheState(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Layout className="full">
      <Layout.Main>
        <h3 style={{ margin: 12 }}>{JSON.stringify(data)}</h3>
        <Button
          className="primary"
          style={{ margin: 12 }}
          onClick={() => setData({ name: 'morpheus' })}
        >
          Set Cache
        </Button>
        <Button style={{ margin: 12 }} onClick={() => setData()}>
          Remove Cache
        </Button>
        <Button style={{ margin: 12 }} onClick={() => alert(JSON.stringify(data))}>
          Get Cache
        </Button>
      </Layout.Main>
    </Layout>
  )
}
```

### 2. Local/SessionStorage 工具

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import Storage from '@/utils/Storage'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button style={{ margin: 12 }} onClick={() => Storage.setLocalStorage('k', { a: 1 })}>
        setLocal
      </Button>
      <Button
        style={{ margin: 12 }}
        onClick={() => alert(JSON.stringify(Storage.getLocalStorage('k')))}
      >
        getLocal
      </Button>
      <Button style={{ margin: 12 }} onClick={() => Storage.removeLocalStorage('k')}>
        removeLocal
      </Button>
    </Layout.Main>
  </Layout>
)
```

## HistoryUtil 组件示例

### 1. 静态工具：新增一条可回退记录

```tsx
import React from 'react'
import { Layout, Button, Space, Toast } from 'seedsui-react'
import HistoryUtil from '@/utils/HistoryUtil'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Space style={{ margin: 12 }}>
        <Button
          className="primary"
          onClick={() =>
            HistoryUtil.navigate('nested=true', {
              onBack: () => Toast.show({ content: 'Nested back!' })
            })
          }
        >
          navigate (static)
        </Button>
        <Button onClick={() => HistoryUtil.back()}>back (static)</Button>
      </Space>
    </Layout.Main>
  </Layout>
)
```

### 2. 实例用法

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import History from '@/utils/HistoryUtil'

export default () => {
  const h = new History()
  return (
    <Layout className="full">
      <Layout.Main>
        <Button
          className="primary"
          style={{ margin: 12 }}
          onClick={() => h.navigate('nested2=true', { onBack: () => alert('Nested2 back!') })}
        >
          navigate (instance)
        </Button>
        <Button style={{ margin: 12 }} onClick={() => h.back()}>
          back (instance)
        </Button>
      </Layout.Main>
    </Layout>
  )
}
```

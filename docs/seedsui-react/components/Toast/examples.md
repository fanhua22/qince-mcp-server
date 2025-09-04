## Toast 组件示例

### 基础用法（show/hide）

```tsx
import React from 'react'
import { Layout, Button, Toast } from 'seedsui-react'

export default () => {
  function handleShow() {
    Toast.show({ content: 'Hello Toast', duration: 1500 })
  }
  function handleHide() {
    Toast.hide()
  }
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Button onClick={handleShow} style={{ margin: '12px' }}>
          Show Toast
        </Button>
        <Button onClick={handleHide} style={{ margin: '12px' }}>
          Hide Toast
        </Button>
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义样式与位置

```tsx
import React from 'react'
import { Layout, Button, Toast } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Button
        onClick={() =>
          Toast.show({
            content: 'Top Message',
            position: 'top',
            style: { backgroundColor: 'var(--seed-color-primary)' },
            maskProps: { style: { backgroundColor: 'transparent' } }
          })
        }
        style={{ margin: '12px' }}
      >
        Top with Color
      </Button>
    </Layout.Main>
  </Layout>
)
```

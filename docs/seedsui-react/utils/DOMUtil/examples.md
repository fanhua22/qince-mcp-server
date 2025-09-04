## DOMUtil 组件示例

### 1. classNames 拼接

```tsx
import React from 'react'
import { Layout, Button } from 'seedsui-react'
import DOMUtil from '@/utils/DOMUtil'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button
        style={{ margin: 12 }}
        onClick={() =>
          console.log(DOMUtil.classNames(undefined, null, 'a', ['b', 'c'], { d: true, e: false }))
        }
      >
        Print classNames
      </Button>
    </Layout.Main>
  </Layout>
)
```

### 2. getIconNode / getTextNode

```tsx
import React from 'react'
import { Layout } from 'seedsui-react'
import DOMUtil from '@/utils/DOMUtil'

export default () => {
  const Icon = DOMUtil.getIconNode('seed-icon', { className: 'seed-icon-base', children: 'ICON' })
  const Text = DOMUtil.getTextNode('Hello', { className: 'seed-text' })
  return (
    <Layout className="full">
      <Layout.Main>
        {Icon}
        {Text}
      </Layout.Main>
    </Layout>
  )
}
```

## Badge 组件示例

### 基本使用

显示数值标记，当数值超过指定长度时自动截断并添加省略号。

```tsx
import React from 'react'
import { Layout, Badge } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Badge maxLength={2} ellipsis={'+'}>
          1000
        </Badge>
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义省略符

可以自定义超出长度时显示的省略符。

```tsx
import React from 'react'
import { Layout, Badge } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <div style={{ display: 'flex', gap: 'var(--seed-space-m)' }}>
          <Badge maxLength={2} ellipsis={'...'}>
            999
          </Badge>
          <Badge maxLength={3} ellipsis={'***'}>
            12345
          </Badge>
          <Badge maxLength={1} ellipsis={'~'}>
            88
          </Badge>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 不同长度限制

展示不同 `maxLength` 设置的效果。

```tsx
import React from 'react'
import { Layout, Badge } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <div style={{ display: 'flex', gap: 'var(--seed-space-m)', alignItems: 'center' }}>
          <span>maxLength=1:</span>
          <Badge maxLength={1}>123</Badge>

          <span>maxLength=2:</span>
          <Badge maxLength={2}>123</Badge>

          <span>maxLength=3:</span>
          <Badge maxLength={3}>123</Badge>

          <span>maxLength=4:</span>
          <Badge maxLength={4}>123</Badge>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 字符串内容

Badge 组件也支持字符串内容。

```tsx
import React from 'react'
import { Layout, Badge } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <div style={{ display: 'flex', gap: 'var(--seed-space-m)', alignItems: 'center' }}>
          <Badge maxLength={5} ellipsis={'...'}>
            Hello World
          </Badge>

          <Badge maxLength={3} ellipsis={'***'}>
            Very Long Text
          </Badge>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 在按钮中使用

Badge 组件常用于按钮、图标等元素旁边显示数量。

```tsx
import React from 'react'
import { Layout, Badge, Button } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <div style={{ display: 'flex', gap: 'var(--seed-space-m)', alignItems: 'center' }}>
          <Button color="primary">
            消息
            <Badge maxLength={2} style={{ marginLeft: 'var(--seed-space-xs)' }}>
              99
            </Badge>
          </Button>

          <Button color="warning">
            通知
            <Badge maxLength={2} style={{ marginLeft: 'var(--seed-space-xs)' }}>
              1234
            </Badge>
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

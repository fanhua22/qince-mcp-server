## Row 组件示例

### 基础 24 栅格

```tsx
import React from 'react'
import { Layout, Divider, Row } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Each row has twenty-four columns</Divider>
        <Row>
          <Row.Col
            span={8}
            className="color-white"
            style={{
              backgroundColor: 'var(--seed-primary)',
              padding: 'var(--seed-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            span={16}
            className="color-white"
            style={{
              backgroundColor: 'var(--seed-primary)',
              padding: 'var(--seed-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span={8}
            className="color-white"
            style={{
              backgroundColor: 'var(--seed-primary)',
              padding: 'var(--seed-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            span={16}
            className="color-white"
            style={{
              backgroundColor: 'var(--seed-primary)',
              padding: 'var(--seed-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>
      </Layout.Main>
    </Layout>
  )
}
```

## Card 组件示例

### 基本使用

展示最基本的卡片用法。

```tsx
import React from 'react'
import { Layout, Card } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>1000</Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 包含复杂内容

展示卡片包含复杂内容的用法。

```tsx
import React from 'react'
import { Layout, Card, Button, Badge } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card className="demo-card">
          <div style={{ padding: 'var(--seed-space-m)' }}>
            <h3 style={{ margin: '0 0 var(--seed-space-s) 0' }}>卡片标题</h3>
            <p
              style={{
                margin: '0 0 var(--seed-space-m) 0',
                color: 'var(--seed-color-text-secondary)'
              }}
            >
              这是一个包含复杂内容的卡片示例，展示了卡片组件的灵活性。
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Badge maxLength={2}>99</Badge>
              <Button color="primary" size="s">
                操作按钮
              </Button>
            </div>
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 多个卡片

展示多个卡片的布局。

```tsx
import React from 'react'
import { Layout, Card } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--seed-space-m)'
          }}
        >
          <Card>
            <div style={{ padding: 'var(--seed-space-m)', textAlign: 'center' }}>
              <h4>卡片 1</h4>
              <p>内容描述</p>
            </div>
          </Card>

          <Card>
            <div style={{ padding: 'var(--seed-space-m)', textAlign: 'center' }}>
              <h4>卡片 2</h4>
              <p>内容描述</p>
            </div>
          </Card>

          <Card>
            <div style={{ padding: 'var(--seed-space-m)', textAlign: 'center' }}>
              <h4>卡片 3</h4>
              <p>内容描述</p>
            </div>
          </Card>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义样式

展示如何通过 className 自定义卡片样式。

```tsx
import React from 'react'
import { Layout, Card } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card className="custom-card">
          <div style={{ padding: 'var(--seed-space-m)' }}>
            <h3>自定义样式卡片</h3>
            <p>这个卡片使用了自定义的 CSS 类名来改变样式。</p>
          </div>
        </Card>

        <style jsx>{`
          .custom-card {
            border: 2px solid var(--seed-color-primary);
            border-radius: var(--seed-radius-l);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Layout.Main>
    </Layout>
  )
}
```

### 作为容器使用

展示卡片作为其他组件的容器。

```tsx
import React from 'react'
import { Layout, Card, Button, Input, Space } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <div style={{ padding: 'var(--seed-space-m)' }}>
            <h3>表单容器</h3>
            <Space direction="vertical" size="m" style={{ width: '100%' }}>
              <Input placeholder="请输入用户名" />
              <Input.Password placeholder="请输入密码" />
              <div style={{ display: 'flex', gap: 'var(--seed-space-s)' }}>
                <Button color="primary">提交</Button>
                <Button>取消</Button>
              </div>
            </Space>
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

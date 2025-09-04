## Space 组件示例

### 基础间距（横向/纵向）

```tsx
import React from 'react'
import { Layout, Divider, Space, Button } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>Horizontal</Divider>
      <Space size="m">
        <Button color="primary">Primary</Button>
        <Button>Default</Button>
        <Button color="danger" variant="outline">
          Danger
        </Button>
      </Space>

      <Divider>Vertical</Divider>
      <Space direction="vertical" size="s">
        <Button className="flex" color="primary">
          Block Button
        </Button>
        <Button className="flex" variant="outline">
          Outline Button
        </Button>
      </Space>
    </Layout.Main>
  </Layout>
)
```

### 自动换行与自定义分隔符

```tsx
import React from 'react'
import { Layout, Divider, Space, Button } from 'seedsui-react'

const tag = (text) => (
  <Button size="s" radius="l" variant="outline" style={{ margin: 0 }}>
    {text}
  </Button>
)

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>Wrap & Split</Divider>
      <Space wrap split={<span style={{ color: 'var(--seed-color-text-secondary)' }}>|</span>}>
        {tag('Tag-1')}
        {tag('Tag-2')}
        {tag('Tag-3')}
        {tag('Tag-4')}
        {tag('Tag-5')}
      </Space>
    </Layout.Main>
  </Layout>
)
```

### 紧凑模式（Space.Compact）

```tsx
import React from 'react'
import { Layout, Divider, Space, Input, Button } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>Compact</Divider>
      <Space.Compact>
        <Input.Text placeholder="搜索关键词" style={{ minWidth: 160 }} />
        <Button color="primary">搜索</Button>
      </Space.Compact>
    </Layout.Main>
  </Layout>
)
```

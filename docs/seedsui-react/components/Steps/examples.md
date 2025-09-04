## Steps 组件示例

### 基础（水平-居中）

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Steps, Button, Space } from 'seedsui-react'

export default () => {
  const [current, setCurrent] = useState(1)
  const list = [
    { id: '1', title: '提交订单' },
    { id: '2', title: '支付' },
    { id: '3', title: '发货' },
    { id: '4', title: '完成' }
  ]

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Horizontal Center</Divider>
        <Steps
          list={list}
          value={current}
          layout="horizontal-center"
          onChange={(i) => setCurrent(i)}
        />
        <Space size="s" style={{ marginTop: 'var(--seed-space-m)' }}>
          <Button disabled={current <= 0} onClick={() => setCurrent((v) => v - 1)}>
            上一步
          </Button>
          <Button
            color="primary"
            disabled={current >= list.length - 1}
            onClick={() => setCurrent((v) => v + 1)}
          >
            下一步
          </Button>
        </Space>
      </Layout.Main>
    </Layout>
  )
}
```

### 点状与圆形

```tsx
import React from 'react'
import { Layout, Divider, Steps } from 'seedsui-react'

const base = [
  { id: '1', title: '准备' },
  { id: '2', title: '进行中' },
  { id: '3', title: '收尾' }
]

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>Dot</Divider>
      <Steps list={base} value={1} shape="dot" />

      <Divider>Circle with Icon</Divider>
      <Steps
        list={[
          { id: '1', title: '校验', icon: 'seeds-icon-check', status: 'finish' },
          { id: '2', title: '处理中', icon: 'seeds-icon-config', status: 'active' },
          { id: '3', title: '完成', icon: 'seeds-icon-like', status: 'wait' }
        ]}
        value={1}
        shape="circle"
      />
    </Layout.Main>
  </Layout>
)
```

### 时间线（纵向）

```tsx
import React from 'react'
import { Layout, Divider, Steps } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main className="bg-white">
      <Divider>Timeline Vertical</Divider>
      <Steps
        layout="vertical-left"
        shape="timeline"
        value={2}
        list={[
          { id: '1', title: '创建订单', description: '2024-01-01 10:00' },
          { id: '2', title: '支付完成', description: '2024-01-01 10:05' },
          { id: '3', title: '仓库发货', description: '2024-01-01 12:20' },
          { id: '4', title: '用户签收', description: '待签收' }
        ]}
      />
    </Layout.Main>
  </Layout>
)
```

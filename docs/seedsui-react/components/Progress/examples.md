## Progress 组件示例

### Progress.Bar 基础/尺寸/颜色/动画

```tsx
import React, { useState } from 'react'
import { Layout, Progress, Divider, Card } from 'seedsui-react'

export default () => {
  const [percent, setPercent] = useState(60)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>基础用法</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar percent={75} />
        </Card>

        <Divider>Size</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar percent={60} style={{ '--seed-progress-track-width': '4px' }} />
          <Progress.Bar
            percent={60}
            style={{ '--seed-progress-track-width': '12px', margin: '12px 0' }}
          />
          <Progress.Bar percent={60} style={{ '--seed-progress-track-width': '20px' }} />
        </Card>

        <Divider>Color</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar
            percent={80}
            style={{
              '--seed-progress-fill-color': '#722ed1',
              '--seed-progress-bg-color': '#f9f0ff'
            }}
          />
          <Progress.Bar
            percent={45}
            style={{
              '--seed-progress-fill-color': '#fa8c16',
              '--seed-progress-bg-color': '#fff7e6',
              margin: '12px 0'
            }}
          />
          <Progress.Bar percent={100} className="success" style={{ margin: '12px 0' }} />
          <Progress.Bar percent={100} className="danger" />
        </Card>

        <Divider>动画</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar
            percent={percent}
            style={{ '--seed-progress-animation-duration': '0.1s' }}
          />
          <Progress.Bar
            percent={percent}
            style={{ '--seed-progress-animation-duration': '1s', margin: '12px 0' }}
          />
          <Progress.Bar percent={percent} style={{ '--seed-progress-animation-duration': '2s' }} />
          <div style={{ marginTop: 8 }}>
            Percent:
            <input
              type="range"
              min="0"
              max="100"
              value={percent}
              onChange={(e) => setPercent(Number(e.target.value))}
              style={{ marginLeft: 10 }}
            />
            {percent}%
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### Progress.Circle 基础/尺寸/颜色/动画

```tsx
import React, { useState } from 'react'
import { Layout, Progress, Divider, Card } from 'seedsui-react'

export default () => {
  const [percent, setPercent] = useState(60)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>基础用法</Divider>
        <Card>
          <Progress.Circle percent={75}>
            <span>75%</span>
          </Progress.Circle>
        </Card>

        <Divider>Size</Divider>
        <Card>
          <Progress.Circle percent={60} size={50}>
            <span>60%</span>
          </Progress.Circle>
          <Progress.Circle percent={60} size={80} style={{ '--seed-progress-track-width': '8px' }}>
            <span className="font-size-xl">60%</span>
          </Progress.Circle>
          <Progress.Circle
            percent={60}
            size={100}
            style={{ '--seed-progress-track-width': '10px' }}
          >
            <span className="font-size-xxl">60%</span>
          </Progress.Circle>
        </Card>

        <Divider>Color</Divider>
        <Card>
          <Progress.Circle
            percent={80}
            style={{
              '--seed-progress-fill-color': '#722ed1',
              '--seed-progress-bg-color': '#f9f0ff'
            }}
          >
            <span>80%</span>
          </Progress.Circle>
          <Progress.Circle
            percent={45}
            style={{
              '--seed-progress-fill-color': '#fa8c16',
              '--seed-progress-bg-color': '#fff7e6'
            }}
          >
            <span>45%</span>
          </Progress.Circle>
          <Progress.Circle percent={100} className="success">
            <span className="color-success">Ok</span>
          </Progress.Circle>
          <Progress.Circle percent={100} className="danger">
            <span className="color-danger">Error</span>
          </Progress.Circle>
        </Card>

        <Divider>动画</Divider>
        <Card>
          <Progress.Circle
            percent={percent}
            style={{ '--seed-progress-animation-duration': '0.1s' }}
          >
            <span>{percent}%</span>
          </Progress.Circle>
          <Progress.Circle percent={percent} style={{ '--seed-progress-animation-duration': '1s' }}>
            <span>{percent}%</span>
          </Progress.Circle>
          <Progress.Circle percent={percent} style={{ '--seed-progress-animation-duration': '2s' }}>
            <span>{percent}%</span>
          </Progress.Circle>
          <div style={{ marginTop: 8 }}>
            Percent:
            <input
              type="range"
              min="0"
              max="100"
              value={percent}
              onChange={(e) => setPercent(Number(e.target.value))}
              style={{ marginLeft: 10 }}
            />
            {percent}%
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

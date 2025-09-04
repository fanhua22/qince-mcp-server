## TabBar 组件示例

### Tabs（标签式）

```tsx
import React, { useState } from 'react'
import { Layout, Divider, TabBar, Icon } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState({ id: 'home' })
  const list = [
    { id: 'home', name: '首页', icon: <Icon className="seeds-icons seeds-icon-home" /> },
    {
      id: 'msg',
      name: '消息',
      icon: <Icon className="seeds-icons seeds-icon-message" />,
      badge: 12
    },
    { id: 'mine', name: '我的', icon: <Icon className="seeds-icons seeds-icon-user" /> }
  ]

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Tabs</Divider>
        <TabBar.Tabs list={list} value={value} onChange={setValue} />
      </Layout.Main>
    </Layout>
  )
}
```

### Menus（菜单式）

```tsx
import React, { useState } from 'react'
import { Layout, Divider, TabBar } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState({ id: 'task' })
  const list = [
    { id: 'task', name: '任务' },
    { id: 'plan', name: '计划' },
    { id: 'stat', name: '统计' }
  ]

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Menus</Divider>
        <TabBar.Menus list={list} value={value} onChange={setValue} />
      </Layout.Main>
    </Layout>
  )
}
```

### Group（分组宫格）

```tsx
import React, { useState } from 'react'
import { Layout, Divider, TabBar } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState({ id: 'a1' })
  const list = [
    { id: 'a1', name: 'A1' },
    { id: 'a2', name: 'A2' },
    { id: 'a3', name: 'A3' },
    { id: 'a4', name: 'A4' },
    { id: 'b1', name: 'B1' },
    { id: 'b2', name: 'B2' }
  ]

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Group</Divider>
        <TabBar.Group columns={4} list={list} value={value} onChange={setValue} />
      </Layout.Main>
    </Layout>
  )
}
```

### Slide（滑动指示）

```tsx
import React, { useState } from 'react'
import { Layout, Divider, TabBar } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState({ id: 'tab1' })
  const list = [
    { id: 'tab1', name: 'Tab1' },
    { id: 'tab2', name: 'Tab2' },
    { id: 'tab3', name: 'Tab3' }
  ]

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Slide</Divider>
        <TabBar.Slide list={list} value={value} onChange={setValue} />
      </Layout.Main>
    </Layout>
  )
}
```

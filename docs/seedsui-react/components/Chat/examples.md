## Chat 组件示例

### 基本使用

展示基本的聊天列表用法，包含多条消息。

```tsx
import React from 'react'
import { Layout, Chat } from 'seedsui-react'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Chat.List
          list={[
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
              id: '1',
              name: '1',
              content: 'content',
              position: 'left',
              time: new Date()
            },
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
              id: '2',
              name: '张三',
              content: 'content',
              position: 'right',
              time: new Date()
            },
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
              id: '3',
              name: '张三',
              content: 'content',
              position: 'right',
              time: new Date('2025-08-08')
            }
          ]}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 带选择功能

展示支持消息选择的聊天列表。

```tsx
import React, { useState } from 'react'
import { Layout, Chat, Button } from 'seedsui-react'

export default () => {
  const [selectedMessages, setSelectedMessages] = useState([])

  const messageList = [
    {
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      id: '1',
      name: 'Alice',
      content: '你好！今天天气怎么样？',
      position: 'left',
      time: new Date()
    },
    {
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
      id: '2',
      name: 'Bob',
      content: '天气很好，阳光明媚！',
      position: 'right',
      time: new Date()
    },
    {
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      id: '3',
      name: 'Alice',
      content: '那太好了，我们可以出去走走。',
      position: 'left',
      time: new Date()
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Chat.List
          checkable
          value={selectedMessages}
          list={messageList}
          onChange={(value) => {
            console.log('选中的消息:', value)
            setSelectedMessages(value)
          }}
        />

        <div style={{ marginTop: 'var(--seed-space-m)' }}>
          <Button
            onClick={() => console.log('选中的消息数量:', selectedMessages.length)}
            disabled={selectedMessages.length === 0}
          >
            查看选中消息 ({selectedMessages.length})
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义复选框

展示自定义复选框样式的聊天列表。

```tsx
import React, { useState } from 'react'
import { Layout, Chat, Button } from 'seedsui-react'

export default () => {
  const [selectedMessages, setSelectedMessages] = useState([])

  const messageList = [
    {
      id: '1',
      name: '系统消息',
      content: '这是一条系统通知',
      position: 'left',
      time: new Date()
    },
    {
      id: '2',
      name: '用户',
      content: '收到，谢谢！',
      position: 'right',
      time: new Date()
    }
  ]

  // 自定义复选框
  function CustomCheckbox({ checked }) {
    return (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid var(--seed-color-primary)',
          backgroundColor: checked ? 'var(--seed-color-primary)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        {checked && <span style={{ color: 'white', fontSize: '12px' }}>✓</span>}
      </div>
    )
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Chat.List
          checkable
          checkbox={CustomCheckbox}
          value={selectedMessages}
          list={messageList}
          onChange={(value) => setSelectedMessages(value)}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 不同时间间隔

展示不同时间间隔设置的效果。

```tsx
import React from 'react'
import { Layout, Chat, Divider } from 'seedsui-react'

export default () => {
  const messageList = [
    {
      id: '1',
      name: '用户A',
      content: '第一条消息',
      position: 'left',
      time: new Date('2024-01-01 10:00:00')
    },
    {
      id: '2',
      name: '用户B',
      content: '第二条消息',
      position: 'right',
      time: new Date('2024-01-01 10:00:30')
    },
    {
      id: '3',
      name: '用户A',
      content: '第三条消息',
      position: 'left',
      time: new Date('2024-01-01 10:02:00')
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>默认时间间隔 (1分钟)</Divider>
        <Chat.List list={messageList} />

        <Divider>自定义时间间隔 (30秒)</Divider>
        <Chat.List timeSpace={30000} list={messageList} />

        <Divider>自定义时间间隔 (5分钟)</Divider>
        <Chat.List timeSpace={300000} list={messageList} />
      </Layout.Main>
    </Layout>
  )
}
```

### 复选框位置

展示不同复选框位置的设置。

```tsx
import React, { useState } from 'react'
import { Layout, Chat, Divider, Button } from 'seedsui-react'

export default () => {
  const [leftPosition, setLeftPosition] = useState([])
  const [rightPosition, setRightPosition] = useState([])

  const messageList = [
    {
      id: '1',
      name: '用户A',
      content: '消息1',
      position: 'left',
      time: new Date()
    },
    {
      id: '2',
      name: '用户B',
      content: '消息2',
      position: 'right',
      time: new Date()
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>复选框在左侧</Divider>
        <Chat.List
          checkable
          checkboxPosition="left"
          value={leftPosition}
          list={messageList}
          onChange={(value) => setLeftPosition(value)}
        />

        <Divider>复选框在右侧</Divider>
        <Chat.List
          checkable
          checkboxPosition="right"
          value={rightPosition}
          list={messageList}
          onChange={(value) => setRightPosition(value)}
        />

        <div style={{ marginTop: 'var(--seed-space-m)' }}>
          <Button
            onClick={() => {
              console.log('左侧复选框选中:', leftPosition)
              console.log('右侧复选框选中:', rightPosition)
            }}
          >
            查看选择结果
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 复杂消息内容

展示包含复杂内容的聊天消息。

```tsx
import React from 'react'
import { Layout, Chat, Button, Badge } from 'seedsui-react'

export default () => {
  const messageList = [
    {
      id: '1',
      name: '系统',
      content: (
        <div style={{ padding: 'var(--seed-space-s)' }}>
          <h4 style={{ margin: '0 0 var(--seed-space-xs) 0' }}>系统通知</h4>
          <p style={{ margin: '0 0 var(--seed-space-s) 0' }}>您有新的消息提醒</p>
          <div style={{ display: 'flex', gap: 'var(--seed-space-xs)' }}>
            <Badge maxLength={2}>3</Badge>
            <Button size="xs" color="primary">
              查看
            </Button>
          </div>
        </div>
      ),
      position: 'left',
      time: new Date()
    },
    {
      id: '2',
      name: '用户',
      content: (
        <div style={{ padding: 'var(--seed-space-s)' }}>
          <p>这是一条包含富文本内容的消息</p>
          <ul style={{ margin: 'var(--seed-space-xs) 0', paddingLeft: 'var(--seed-space-m)' }}>
            <li>支持 HTML 标签</li>
            <li>支持 React 组件</li>
            <li>支持自定义样式</li>
          </ul>
        </div>
      ),
      position: 'right',
      time: new Date()
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Chat.List list={messageList} />
      </Layout.Main>
    </Layout>
  )
}
```

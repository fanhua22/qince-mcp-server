## Modal 组件示例

### 基础弹窗（受控）

```tsx
import React, { useState } from 'react'
import { Layout, Modal } from 'seedsui-react'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <Layout className="full">
      <Layout.Main>
        <div className="demo-title" onClick={() => setVisible(true)}>
          Open
        </div>
        <Modal visible={visible} onVisibleChange={setVisible} animation="slideDown">
          <div className="bg-white" style={{ height: '200px' }}>
            Content
          </div>
        </Modal>
      </Layout.Main>
    </Layout>
  )
}
```

### Dropdown 下拉弹窗

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Modal, Divider } from 'seedsui-react'

export default () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Dropdown Left</Divider>
        <div ref={ref} className="padding-l" onClick={() => setVisible((v) => !v)}>
          Toggle
        </div>
        <Modal.DropdownModal
          referenceDOM={ref.current}
          left={12}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div className="bg-white" style={{ height: '200px' }}>
            Dropdown Content
          </div>
        </Modal.DropdownModal>
      </Layout.Main>
    </Layout>
  )
}
```

### NavBar 组合器

```tsx
import React from 'react'
import { Layout, Modal, Card, Divider } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Card>
        <Divider>NavBarCombo</Divider>
        <Modal.NavBarCombo combo="Click to show" title="Title" onOk={({ close }) => close()}>
          <div className="bg-white" style={{ height: '200px' }}>
            Content
          </div>
        </Modal.NavBarCombo>
      </Card>
    </Layout.Main>
  </Layout>
)
```

### JS API：alert/confirm

```tsx
import React from 'react'
import { Layout, Modal, Button } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Button onClick={() => Modal.alert({ content: 'alert content' })}>Alert</Button>
      <Button
        onClick={() =>
          Modal.confirm({
            title: '确认',
            content: '确定继续吗？',
            onOk: () => true
          })
        }
      >
        Confirm
      </Button>
    </Layout.Main>
  </Layout>
)
```

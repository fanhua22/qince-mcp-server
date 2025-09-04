## Confirm 组件示例

### Confirm.Combo 快速调用

```tsx
import React from 'react'
import { Confirm, Button, Layout } from 'seedsui-react'

export default () => (
  <Layout>
    <Layout.Main>
      <Confirm.Combo
        icon="seeds-icon-config color-primary"
        title="Title"
        content={<div>Content</div>}
        buttonsLayout="vertical"
        buttons={[{ id: 'ok', name: 'OK', className: 'primary', onClick: () => true }]}
      >
        <Button className="flex primary">Click</Button>
      </Confirm.Combo>
    </Layout.Main>
  </Layout>
)
```

### Confirm.Modal 受控用法

```tsx
import React, { useState } from 'react'
import { Confirm, Button } from 'seedsui-react'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button className="primary" onClick={() => setVisible(true)}>
        Show Confirm
      </Button>
      <Confirm.Modal visible={visible} onVisibleChange={setVisible}>
        <Confirm.Header>
          <Confirm.Icon className="seeds-icon-warning color-warning" />
          <Confirm.Title>Delete</Confirm.Title>
        </Confirm.Header>
        <Confirm.Main>Are you sure to delete?</Confirm.Main>
        <Confirm.Footer>
          <Confirm.Button onClick={() => setVisible(false)}>Cancel</Confirm.Button>
          <Confirm.Button className="primary" onClick={() => setVisible(false)}>
            OK
          </Confirm.Button>
        </Confirm.Footer>
      </Confirm.Modal>
    </>
  )
}
```

更多完整演示可查看 `src/components/Confirm/demos` 目录中的 `Modal.jsx` 与 `Combo.jsx`。

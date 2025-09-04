## Collapse 组件示例

### 基础手风琴

```tsx
import React from 'react'
import { Collapse } from 'seedsui-react'

export default () => (
  <Collapse.Group>
    <Collapse.Item title="Section 1">Content 1</Collapse.Item>
    <Collapse.Item title="Section 2">Content 2</Collapse.Item>
    <Collapse.Item title="Section 3">Content 3</Collapse.Item>
  </Collapse.Group>
)
```

### 受控组件

```tsx
import React, { useState } from 'react'
import { Collapse, Button } from 'seedsui-react'

export default () => {
  const [active, setActive] = useState(null)
  return (
    <>
      <Button onClick={() => setActive(1)}>Open Second</Button>
      <Collapse.Group value={active} onChange={setActive}>
        <Collapse.Item title="One">One Content</Collapse.Item>
        <Collapse.Item title="Two">Two Content</Collapse.Item>
        <Collapse.Item title="Three">Three Content</Collapse.Item>
      </Collapse.Group>
    </>
  )
}
```

### 自定义箭头与 Header

更多完整演示请参考 `src/components/Collapse/demos/demo1.jsx`。

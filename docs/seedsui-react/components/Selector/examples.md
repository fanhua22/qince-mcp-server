## Selector 组件示例

### 基础用法（单选/可清除）

```tsx
import React, { useState } from 'react'
import { Layout, Selector } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([{ id: '1', name: '选项1' }])
  return (
    <Layout className="full bg-white">
      <Layout.Main>
        <Selector
          columns={3}
          allowClear
          placeholder="Please select"
          value={value}
          list={[
            { id: '1', name: '选项1' },
            { id: '2', name: 'Option 2 is very very very very very long' },
            { id: '3', name: '选项3' },
            { id: '4', name: '选项4' },
            { id: '5', name: '选项5' }
          ]}
          onChange={setValue}
        />
      </Layout.Main>
    </Layout>
  )
}
```

## FloatButton 组件示例

### 基础悬浮按钮

```tsx
import React from 'react'
import { FloatButton, Layout } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <FloatButton
        list={[{ id: 'add', icon: 'seeds-icon-plus', name: '新增' }]}
        onChange={(item) => alert(item.id)}
      />
    </Layout.Main>
  </Layout>
)
```

### 可拖拽 & 二级菜单

```tsx
import React from 'react'
import { FloatButton } from 'seedsui-react'

export default () => (
  <FloatButton
    draggable
    list={[
      {
        id: 'more',
        icon: 'float-button-icon-more',
        children: [
          { id: '1', name: '操作1' },
          { id: '2', name: '操作2' }
        ]
      },
      { id: 'scan', icon: <i className="seeds-icon seeds-icon-barcode"></i>, name: '扫码' }
    ]}
    onChange={(item) => console.log(item)}
    onDragEnd={(e) => console.log('pos', e.position)}
  />
)
```

更多使用方式请查看 `src/components/FloatButton/demos/index.jsx`。

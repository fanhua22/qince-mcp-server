## Typography 组件示例

### 金额与展示值

```tsx
import React from 'react'
import { Layout, Typography } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <div>
        {Typography.getDisplayValue([
          { id: 'option1', name: 'Option1' },
          { id: 'option2', name: 'Option2' }
        ])}
      </div>
      <Typography.Amount currencySymbol="¥">1111111.11111</Typography.Amount>
    </Layout.Main>
  </Layout>
)
```

### Form 布局（简化示例）

```tsx
import React from 'react'
import { Layout, Typography, Input } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Typography.Form labelCol={{ span: 8 }} mainCol={{ span: 16 }}>
        <Typography.Form.Item name="user">
          <Typography.Form.Label required>用户名</Typography.Form.Label>
          <Typography.Form.Main>
            <Input.Text placeholder="请输入" />
          </Typography.Form.Main>
        </Typography.Form.Item>
      </Typography.Form>
    </Layout.Main>
  </Layout>
)
```

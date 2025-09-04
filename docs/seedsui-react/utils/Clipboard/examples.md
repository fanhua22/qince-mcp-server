## Clipboard 组件示例

### 1. 基本复制

```tsx
import React from 'react'
import { Layout, Button, Toast } from 'seedsui-react'
import Clipboard from '@/utils/Clipboard'

export default () => {
  function handleCopy() {
    Clipboard.copy('https://res.waiqin365.com/d/waiqin365_h5/seedsui/', {
      success: () => Toast.show({ content: 'Copy success' }),
      fail: (e) => Toast.show({ content: e?.errMsg || 'Copy failed' })
    })
  }
  return (
    <Layout className="full">
      <Layout.Main>
        <Button className="primary" style={{ margin: 12 }} onClick={handleCopy}>
          Copy to clipboard
        </Button>
      </Layout.Main>
    </Layout>
  )
}
```

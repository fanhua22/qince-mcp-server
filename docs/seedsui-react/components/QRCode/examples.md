## QRCode 组件示例

### 基础用法（含中心 Logo）

```tsx
import React, { useState, useEffect } from 'react'
import { QRCode } from 'seedsui-react'

const Logo = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '50px',
  height: '50px',
  marginLeft: '-25px',
  marginTop: '-25px'
}

export default () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    setTimeout(() => setUrl('https://example.com'), 500)
  }, [])

  return (
    <QRCode text={url} style={{ width: '300px', height: '300px' }}>
      <img
        style={Logo}
        alt=""
        src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png"
      />
    </QRCode>
  )
}
```

### 自定义颜色与尺寸

```tsx
import React from 'react'
import { QRCode } from 'seedsui-react'

export default () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <QRCode
      text="SEED-1001"
      style={{ width: 160, height: 160, color: '#1890ff', backgroundColor: '#f0f5ff' }}
    />
    <QRCode
      text="SEED-1002"
      style={{ width: 200, height: 200, color: '#fa8c16', backgroundColor: '#fff7e6' }}
    />
  </div>
)
```

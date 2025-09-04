## Location 组件示例

### Location.Combo 基础用法

```tsx
import React, { useState, useRef } from 'react'
import { Location, Input } from 'seedsui-react'

export default () => {
  const comboRef = useRef(null)
  const [value, setValue] = useState({
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '南京烽火科技'
  })

  return (
    <>
      <Location.Combo
        ref={comboRef}
        type="gcj02"
        config={{ key: 'your-map-key', type: 'bmap' }}
        previewVisible
        chooseVisible
        locationVisible
        clickAction="choose"
        value={value}
        onChange={setValue}
      />

      <Input.Text value={value?.address || ''} readOnly />
    </>
  )
}
```

### Location.Modal 直接使用

```tsx
import React, { useState } from 'react'
import { Location } from 'seedsui-react'

export default () => {
  const [visible, setVisible] = useState('choose')
  const [value, setValue] = useState(null)

  return (
    <Location.Modal
      visible={visible}
      value={value}
      onVisibleChange={setVisible}
      onChange={(v) => setValue(v)}
      mainProps={{
        config: { key: 'your-map-key', type: 'bmap' },
        autoLocation: true
      }}
    />
  )
}
```

更多用法可参考 `src/components/Location/demos/*`。

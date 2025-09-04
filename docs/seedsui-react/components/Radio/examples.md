## Radio 组件示例

### 单个 Radio

```tsx
import React, { useState } from 'react'
import { Radio } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Radio checked={value} onChange={setValue}>
        Common
      </Radio>
      <br />
      <Radio checked={value} onChange={setValue} iconPosition="right">
        Common iconPosition=right
      </Radio>
      <br />
      <Radio checked={true}>选中</Radio>
      <br />
      <Radio checked={false} disabled>
        普通-禁用
      </Radio>
      <br />
      <Radio checked={true} disabled>
        选中-禁用
      </Radio>
    </>
  )
}
```

### Radio.Group 单选列表

```tsx
import React, { useRef, useState } from 'react'
import { Radio } from 'seedsui-react'

export default () => {
  const groupRef = useRef(null)
  const [list] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' }
  ])
  const [value, setValue] = useState(null)

  return (
    <Radio.Group
      ref={groupRef}
      multiple={false}
      value={value}
      list={list}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}
```

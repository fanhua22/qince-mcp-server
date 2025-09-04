## Checkbox 组件示例

### 基本使用

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <Checkbox checked={value} onChange={setValue}>
      Common
    </Checkbox>
  )
}
```

### 自定义图标与位置

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Checkbox checked={value} onChange={setValue} icon={'tick'}>
        Custom Icon
      </Checkbox>
      <br />
      <Checkbox checked={value} onChange={setValue} iconPosition="right">
        Icon Right
      </Checkbox>
    </>
  )
}
```

### Checkbox.Group 单选 / 多选

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(null)
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]

  return (
    <Checkbox.Group multiple={false} allowClear value={value} list={list} onChange={setValue} />
  )
}
```

> 以上示例代码均可在 `src/components/Checkbox/demos` 文件夹中找到更完整的演示。

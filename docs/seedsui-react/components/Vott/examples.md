## Vott 组件示例

### 基本标注与只读切换

```tsx
import React, { useState } from 'react'
import { Vott, Button } from 'seedsui-react'
import mock from 'src/components/Vott/demos/mock.jpg'

export default () => {
  const [data, setData] = useState([])
  const [readOnly, setReadOnly] = useState(true)

  function handleToggle() {
    setReadOnly(!readOnly)
  }

  return (
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Vott
        style={{ height: '300px' }}
        data={data}
        readOnly={readOnly}
        src={mock}
        onChange={(list, others) => console.log(list, others)}
        preview
      />
      <Button className="flex danger" onClick={handleToggle}>
        只读与绘制({readOnly ? '只读' : '绘制'})
      </Button>
    </div>
  )
}
```

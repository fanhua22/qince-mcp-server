## Input 组件示例

### Text 基础用法与清除

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Input } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState('Hello')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Text</Divider>
        <Input.Text
          value={value}
          placeholder="请输入"
          allowClear
          clear={({ triggerClear }) => <Input.IconClear onClick={triggerClear} />}
          rightIcon={({ value }) => (value ? null : <Input.IconRightArrow />)}
          onChange={setValue}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### AutoFit 与 Textarea

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Input } from 'seedsui-react'

export default () => {
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('多行\n多行')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>AutoFit</Divider>
        <Input.AutoFit
          placeholder="自动增高"
          value={v1}
          onChange={setV1}
          allowClear
          style={{ maxHeight: '100px', backgroundColor: '#f8f8f8' }}
        />
        <Divider>Textarea</Divider>
        <Input.Textarea value={v2} onChange={setV2} allowClear />
      </Layout.Main>
    </Layout>
  )
}
```

### Number 与 NumberBox

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Card, MathUtil, Input } from 'seedsui-react'

export default () => {
  const [num, setNum] = useState('2.10')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Number</Divider>
        <Input.Number
          value={num}
          precision={2}
          maxLength={8}
          allowClear
          formatter={(cur) => '$' + MathUtil.thousands(cur)}
          onChange={setNum}
        />

        <Divider>NumberBox</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
          <Input.NumberBox
            value={num}
            onChange={setNum}
            precision={2}
            min={0.1}
            max={99999999}
            maxLength={8}
            stepFocus
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### Password 与 PasswordStrength

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Input } from 'seedsui-react'

export default () => {
  const [pwd, setPwd] = useState('abcdefgAbcd$')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Password</Divider>
        <Input.Password value={pwd} onChange={setPwd} allowClear />
        <Divider>PasswordStrength</Divider>
        <Input.PasswordStrength value={pwd} />
      </Layout.Main>
    </Layout>
  )
}
```

### Range 与 Rate

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Input } from 'seedsui-react'

export default () => {
  const [range, setRange] = useState(40)
  const [rate, setRate] = useState(3)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Range</Divider>
        <Input.Range value={range} onChange={setRange} />

        <Divider>Rate</Divider>
        <Input.Rate value={rate} onChange={setRate} step={0.5} />
      </Layout.Main>
    </Layout>
  )
}
```

### Search / Tel / Url

```tsx
import React, { useState, useRef } from 'react'
import { Layout, Divider, Input } from 'seedsui-react'

export default () => {
  const [keyword, setKeyword] = useState('hello')
  const [tel, setTel] = useState('')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Search</Divider>
        <Input.Search
          value={keyword}
          onChange={setKeyword}
          onPressEnter={() => console.log('search:', keyword)}
        />
        <Divider>Tel</Divider>
        <Input.Tel value={tel} onChange={setTel} />

        <Divider>Url</Divider>
        <Input.Url value="www.baidu.com/" rightIcon={<div>点击左侧复制</div>} readOnly />
      </Layout.Main>
    </Layout>
  )
}
```

更多示例可参考 `src/components/Input/demos/*`。

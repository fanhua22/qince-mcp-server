## Signature 组件示例

### Signature.Combo（新增/预览/删除）

```tsx
import React, { useEffect, useState } from 'react'
import { Signature, Layout, Toast, Device, Bridge } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState(
    'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.ready()
  }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">手写签名</Layout.Header>
      <Layout.Main className="bg-white">
        <Signature.Combo
          value={value}
          modalProps={{ safeArea: 'auto' }}
          onChange={(newVal) => setValue(newVal)}
          onPreview={(src) => {
            if (
              Device.device === 'mobile' &&
              (Bridge.platform === 'wechat' ||
                Bridge.platform === 'wework' ||
                Bridge.platform === 'alipay' ||
                Bridge.platform === 'dingtalk' ||
                Bridge.platform === 'lark' ||
                Bridge.platform === 'wechatMiniprogram' ||
                Bridge.platform === 'weworkMiniprogram' ||
                Bridge.platform === 'alipayMiniprogram')
            ) {
              return 'nativeImage'
            }
            return 'browser'
          }}
          onBeforeChange={(newVal) => {
            if (!newVal) {
              Toast.show({ content: '签名不能为空' })
              return false
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### Signature.Modal（受控弹窗）

```tsx
import React from 'react'
import { Signature, Layout } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header className="text-center">手写签名</Layout.Header>
    <Layout.Main className="bg-white">
      <Signature.Modal
        visible={true}
        onChange={(base64) => {
          console.log(base64)
        }}
      />
    </Layout.Main>
  </Layout>
)
```

### Signature.Main（仅绘制区域）

```tsx
import React from 'react'
import { Signature, Layout } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header className="text-center">手写签名</Layout.Header>
    <Layout.Main className="bg-white">
      <Signature.Main
        style={{ height: 400 }}
        onChange={(base64) => {
          console.log(base64)
        }}
      />
    </Layout.Main>
  </Layout>
)
```

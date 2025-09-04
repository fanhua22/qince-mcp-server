## Share 组件示例

### Share.Combo（根据平台显示）

```tsx
import React, { useRef } from 'react'
import { Share, Layout } from 'seedsui-react'

export default () => {
  const shareComboRef = useRef(null)
  return (
    <Layout className="full">
      <Layout.Header>When this platform is not supported, nothing will appear</Layout.Header>
      <Layout.Main className="bg-white">
        <Share.Combo
          ref={shareComboRef}
          shareTo={{
            wechat: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### Share.Main（受控主体）

```tsx
import React from 'react'
import { Share, Layout } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header className="text-center">Share To</Layout.Header>
    <Layout.Main className="bg-white">
      <Share.Main
        shareTo={{
          wechat: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          wecom: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          dingtalk: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          lark: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          }
        }}
      />
    </Layout.Main>
  </Layout>
)
```

### Share.Modal（受控弹窗）

```tsx
import React from 'react'
import { Share, Layout } from 'seedsui-react'

export default () => (
  <Layout className="full">
    <Layout.Header className="text-center">Share To</Layout.Header>
    <Layout.Main className="bg-white">
      <Share.Modal
        visible
        shareTo={{
          wechat: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          wecom: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          dingtalk: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          },
          lark: {
            title: '标题',
            description: '描述',
            imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
            url: 'https://www.baidu.com'
          }
        }}
      />
    </Layout.Main>
  </Layout>
)
```

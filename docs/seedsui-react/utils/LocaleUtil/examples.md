## LocaleUtil 组件示例

### 1. 设置语言并渲染文案（含变量/节点）

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import LocaleUtil from '@/utils/LocaleUtil'
import dayjs from 'dayjs'

export default () => {
  // 设置英文
  require('dayjs/locale/zh-cn')
  const enUS = require('seedsui-react/locale/en_US.json')
  dayjs.locale('en')
  LocaleUtil.setLocale('en_US', enUS)

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>locale()</Divider>
        <Card style={{ padding: 12 }}>
          {LocaleUtil.locale('近{0}日', 'SeedsUI_last_days', [
            <span key="0" style={{ color: 'red' }}>
              7
            </span>
          ])}
        </Card>

        <Card style={{ padding: 12, marginTop: 8 }}>
          {LocaleUtil.locale('近x日', 'SeedsUI_last_days', ['7'])}
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

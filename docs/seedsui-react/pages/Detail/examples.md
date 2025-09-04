## Detail 页面示例

### 1. 页面挂载与路由接入

```tsx
// 以 React 路由为例，将 Detail 演示页挂载到你的应用中
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailForm from 'src/pages/Detail/demos/Form/index.jsx'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/detail" element={<DetailForm />} />
    </Routes>
  </BrowserRouter>
)
```

### 2. 详情页（含数据加载、空态/错误态、底部操作）

```tsx
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { LocaleUtil, Toast, Divider, Layout, Result, Typography, Card } from 'seedsui-react'
import { queryData, approveData } from 'src/pages/Detail/demos/Form/api'

const locale = LocaleUtil.locale
const { Item, Label, Main } = Typography.Form

export default () => {
  const [result, setResult] = useState(null)

  useEffect(() => {
    loadData()
    // eslint-disable-next-line
  }, [])

  async function loadData() {
    const data = await queryData()
    setResult(data)
  }

  async function handleApprove() {
    const res = await approveData()
    if (res.code === '1') {
      Toast.show({ content: locale('审批通过!') })
    } else {
      Toast.show({ content: res.message || locale('审批失败!') })
    }
  }

  const data = result?.data
  return (
    <Layout className="full">
      {data && (
        <Layout.Main>
          <Card>
            <Divider>Horizontal Layout</Divider>
            <Typography.Form style={{ marginLeft: '12px' }}>
              <Item>
                <Label help="Help info" ellipsis={{ rows: 1, expandable: true }}>
                  {locale(
                    'Input Overflow Label, It is very very very long,  It is really very very very long'
                  )}
                </Label>
                <Main ellipsis={{ rows: 2, expandable: true }}>
                  {locale(
                    'Value Overflow Main, It is very very very long,  It is really very very very long'
                  )}
                </Main>
              </Item>
              <Item>
                <Label ellipsis={{ rows: 1, expandable: true }}>{locale('Select')}</Label>
                <Main>{Typography.getDisplayValue(data?.select)}</Main>
              </Item>
            </Typography.Form>
          </Card>

          <Card>
            <Divider>Vertical Layout</Divider>
            <Typography.Form layout="vertical" style={{ marginLeft: '12px' }}>
              <Item>
                <Label>{locale('Input')}</Label>
                <Main>{Typography.getDisplayValue(data?.input)}</Main>
              </Item>
              <Item>
                <Label>{locale('Select')}</Label>
                <Main>{Typography.getDisplayValue(data?.select)}</Main>
              </Item>
            </Typography.Form>
          </Card>

          <div className="listpicker-footer border-t" style={{ position: 'sticky', bottom: 0 }}>
            <div className="footer-bar">
              <button className="primary" onClick={handleApprove}>
                {locale('确定')}
              </button>
            </div>
          </div>
        </Layout.Main>
      )}

      {result?.status && <Result className="full" status={result.status} title={result.message} />}
    </Layout>
  )
}
```

### 3. API 模板（根据实际后端替换）

```ts
// src/pages/Detail/demos/Form/api/queryData/index.js
import { LocaleUtil, Request, Device, Loading } from 'seedsui-react'
const locale = LocaleUtil.locale

export default function queryData() {
  return new Promise((resolve) => {
    // 示例：直接返回模拟数据
    resolve({
      data: {
        input: 'Input content',
        textarea: 'Textarea content',
        select: [{ id: '2', name: 'Option2' }]
      }
    })
  })
}
```

```ts
// src/pages/Detail/demos/Form/api/approveData/index.js
import { LocaleUtil, Request, Device, Loading } from 'seedsui-react'
const locale = LocaleUtil.locale

export default async function approveData() {
  Loading.show()
  let id = Device.getUrlParameter('id')
  try {
    const res = await Request.post('/platform/param/v1/getLoginUser.do', { id })
    Loading.hide()
    return res
  } catch (err) {
    Loading.hide()
    return { code: '0', message: err?.data?.message || locale('服务器繁忙，请稍后重试！') }
  }
}
```

### 4. 国际化接入

```ts
import dayjs from 'dayjs'
import LocaleUtil from 'seedsui-react/utils/LocaleUtil'
// 示例：设置英文
dayjs.locale('en')
LocaleUtil.setLocale('en_US', require('seedsui-react/locale/en_US.json'))
```

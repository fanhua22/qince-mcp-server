## Edit 页面示例

### 1. 路由挂载（Common/Virtual/Cache）

```tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditCommon from 'src/pages/Edit/demos/Common/index.jsx'
import EditVirtual from 'src/pages/Edit/demos/Virtual/index.jsx'
import EditCache from 'src/pages/Edit/demos/Cache/index.jsx'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/edit/common" element={<EditCommon />} />
      <Route path="/edit/virtual" element={<EditVirtual />} />
      <Route path="/edit/cache" element={<EditCache />} />
    </Routes>
  </BrowserRouter>
)
```

### 2. 表单提交与校验（节选）

```tsx
import React from 'react'
import { Form, Toast, LocaleUtil } from 'seedsui-react'
import { validateData, saveData } from 'src/pages/Edit/demos/Cache/api'

const locale = LocaleUtil.locale

export default () => {
  const [form] = Form.useForm()
  async function handleSave() {
    const data = await validateData({ form })
    if (!data) return
    const res = await saveData({ baseData: {}, data, token: '' + Date.now() })
    Toast.show({
      content: res.code === '1' ? locale('提交成功!') : res.message || locale('提交失败!')
    })
  }
  return null
}
```

### 3. 缓存滚动与表单（节选）

```tsx
// 监听 Layout.Main 的 onScroll，节流记录 scrollTop 到 Storage
<Layout.Main onScroll={(e)=>{
  if (timer) clearTimeout(timer)
  timer = setTimeout(()=>{
    Storage.setCache('form-cache:formData:scrollTop', e.target.scrollTop, { persist: 'session' })
  }, 500)
}}>
```

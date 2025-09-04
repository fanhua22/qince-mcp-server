## Report 页面示例

### 1. 路由挂载（Card1）

```tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card1 from 'src/pages/Report/demos/Card1/index.jsx'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/report/card1" element={<Card1 />} />
    </Routes>
  </BrowserRouter>
)
```

### 2. 初始化与筛选

```tsx
// 初始化：依次加载 tabs/slides，再以默认值触发数据加载
useEffect(() => {
  initData()
}, [])

async function initData() {
  const tabsRes = await queryTabs()
  setTabs(tabsRes.data)
  setTab(tabsRes.data[0])
  const slidesRes = await querySlides()
  setSlides(slidesRes.data)
  setSlide(slidesRes.data[0])
  updateData({ tabId: tabsRes.data[0].id, slideId: slidesRes.data[0].id })
}

function handleTabChange(newTab) {
  setTab(newTab[0])
  updateData({ tabId: newTab[0].id, slideId: slide?.id })
}
function handleSlideChange(newSlide) {
  setSlide(newSlide)
  updateData({ tabId: tab?.id, slideId: newSlide?.id })
}
```

### 3. 容器跳转

```tsx
Bridge.openWindow({ title, url: `xx?title=${encodeURIComponent(encodeURIComponent(title))}` })
```

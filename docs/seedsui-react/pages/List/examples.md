## List 页面示例

### 1. 路由挂载（Common/Cache/Virtual/IndexBar）

```tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListCommon from 'src/pages/List/demos/Common/index.jsx'
import ListCache from 'src/pages/List/demos/Cache/index.jsx'
import ListVirtual from 'src/pages/List/demos/Virtual/index.jsx'
import ListIndexBar from 'src/pages/List/demos/IndexBar/index.jsx'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/list/common" element={<ListCommon />} />
      <Route path="/list/cache" element={<ListCache />} />
      <Route path="/list/virtual" element={<ListVirtual />} />
      <Route path="/list/indexbar" element={<ListIndexBar />} />
    </Routes>
  </BrowserRouter>
)
```

### 2. 列表加载（分页）

```tsx
// Main 组件透传 loadList 给 List.Main
<Main loadList={({ page, action }) => queryData({ page, rows: 20, ...queryParams })} />
```

### 3. 索引条联动（虚拟滚动）

```tsx
// 请求成功后显示索引条
setIndexBarVisible(true)
// onLoad 后更新 anchors
const newAnchors = mainRef.current.getAnchors()
setAnchors(newAnchors)
// 触摸索引条滚动到锚点
<IndexBar anchors={anchors} onTouchAnchor={mainRef.current.scrollToAnchor} />
```

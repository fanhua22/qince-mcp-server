## IndexBar 组件示例

### 基础用法（与列表锚点联动）

```tsx
import React, { Fragment, useEffect, useState } from 'react'
import { Layout, IndexBar } from 'seedsui-react'

export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    setTimeout(() => setList(gen(['A', 'B', 'C'])), 300)
  }, [])

  function gen(letters) {
    const res = []
    letters.forEach((L) => {
      for (let i = 0; i < 10; i++) res.push({ letter: L, name: `${L}姓用户${i}` })
    })
    return res
  }

  function renderList() {
    const seen = {}
    return list.map((item, i) => {
      if (!seen[item.letter]) {
        seen[item.letter] = true
        return (
          <Fragment key={i}>
            <IndexBar.Anchor name={item.letter}>
              <li className="padding-l">{item.letter}</li>
            </IndexBar.Anchor>
            <li className="padding-l">{item.name}</li>
          </Fragment>
        )
      }
      return (
        <li key={i} className="padding-l">
          {item.name}
        </li>
      )
    })
  }

  return (
    <Layout className="full">
      <IndexBar onTouchAnchor={(a) => console.log('anchor:', a)}>
        <Layout.Main>
          <ul>{renderList()}</ul>
        </Layout.Main>
      </IndexBar>
    </Layout>
  )
}
```

### 指定滚动容器与自定义锚点集合

```tsx
import React, { useRef, useEffect } from 'react'
import { Layout, IndexBar } from 'seedsui-react'

export default () => {
  const ref = useRef(null)
  const anchors = ['A', 'B', 'C', 'D']

  useEffect(() => {
    // 首次渲染后主动高亮并滚到 C
    ref.current?.scrollToAnchor?.('C')
  }, [])

  return (
    <Layout className="full">
      <Layout.Main id="scroller" style={{ position: 'relative' }}>
        <ul>
          {anchors.map((a) => (
            <IndexBar.Anchor key={a} name={a}>
              <li className="padding-l">{a}</li>
            </IndexBar.Anchor>
          ))}
        </ul>
      </Layout.Main>
      <IndexBar ref={ref} scrollerDOM={document.getElementById('scroller')} anchors={anchors} />
    </Layout>
  )
}
```

更多示例可参考 `src/components/IndexBar/demos/demo1.jsx`。

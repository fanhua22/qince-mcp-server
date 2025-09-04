## GeoUtil 组件示例

### 1. 距离/境内/坐标转换

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import GeoUtil from '@/utils/GeoUtil'

export default () => {
  const p0 = [116.397451, 39.909187] // 北京
  const p1 = [121.473701, 31.230416] // 上海
  const km = GeoUtil.getDistance(p0, p1)
  const inChina = GeoUtil.isInChina(p0)
  const bd09 = GeoUtil.coordtransform(p0, 'gcj02', 'bd09')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Distance & Transform</Divider>
        <Card style={{ padding: 12 }}>distance(km): {km}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>isInChina: {String(inChina)}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>gcj02 -> bd09: {JSON.stringify(bd09)}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 2. 点在多边形 / 合法多边形

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import GeoUtil from '@/utils/GeoUtil'

export default () => {
  const polygon = [
    [0, 0],
    [0, 10],
    [10, 10],
    [10, 0]
  ]
  const point = [5, 5]
  const inside = GeoUtil.pointInsidePolygon(point, polygon)
  const legal = GeoUtil.isPolygon(polygon)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Polygon</Divider>
        <Card style={{ padding: 12 }}>inside: {String(inside)}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>isPolygon: {String(legal)}</Card>
      </Layout.Main>
    </Layout>
  )
}
```

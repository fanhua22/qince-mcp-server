## 何时使用

- 需要做地理空间计算：点/线/多边形关系、距离、点排序、坐标系转换、境内判断等。

## 数据结构

- Point: [lng, lat]
- Line: [[lng, lat], [lng, lat]]
- Polygon: [[lng, lat], [lng, lat], ...]

## API

### GeoUtil 概览

- polygonToLines(polygon, isRegular)
- pointInsidePolygon(point, polygon)
- lineIntersectLine(line0, line1)
- polygonInsidePolygon(py0, py1)
- isPoint(point)
- equalPoint(p0, p1)
- getMiddlePoint(p0, p1)
- isPolygon(polygon)
- pointOnLine(point, line)
- getDistance(p0, p1)
- sortPoints(points)
- coordtransform(point, from, to)
- coordstransform(points, from, to)
- isInChina(point)

---

### 典型方法说明

• getDistance(p0, p1): 计算两经纬度点间距离（km），错误返回 -1。

• coordtransform(point, from, to): 坐标系转换，支持 'wgs84'|'gcj02'|'bd09'。

• isInChina(point): 判断是否在中国边界盒内。

• pointInsidePolygon(point, polygon): 点在多边形内判定。

• isPolygon(polygon): 多边形合法性（不允许自交）。

## 注意事项

1. 坐标转换对境外坐标不偏移（WGS84 <-> GCJ02 时会基于国测局偏移规则）。

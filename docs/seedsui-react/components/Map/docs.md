## 何时使用

- 在页面中展示交互式地图（底层基于 Leaflet 渲染），并与第三方地图（Baidu/Google/OSM）API 交互。
- 需要完成定位、逆地理解析、附近搜索、标注点/折线/圆圈绘制、拖拽与缩放控制、选点与标注等场景。

## 导出成员

`Map` 默认导出一个对象，包含工具函数、基础组件与页面级组件：

- 工具函数：`coordsToWgs84`、`wgs84ToCoords`、`getAddress`、`getLocation`、`queryNearby`
- 组件：`APILoader`、`MapContainer`、`ZoomControl`、`SearchControl`、`CenterMarker`、`Markers`、`Circles`、`Polyline`、`LocationControl`、`NearbyControl`
- 页面组件：`MapChoose`、`MapMarkers`

---

### APILoader（地图资源加载器）

负责按配置加载 Leaflet 与第三方地图资源（Baidu/Google/OSM）并注入全局 `window.APILoaderConfig`，供内部组件读取。

| 参数      | 说明                                                 | 类型                        | 默认值 |
| --------- | ---------------------------------------------------- | --------------------------- | ------ |
| config    | 资源与地图配置，如 `{ key, type, markerIcons, ... }` | `object`                    | `-`    |
| loading   | 自定义加载态内容（节点或函数）                       | `ReactNode\|()=>ReactNode`  | `-`    |
| onError   | 资源加载失败回调，返回值可覆盖默认错误渲染           | `(err)=>ReactNode\|boolean` | `-`    |
| onSuccess | 资源加载成功回调                                     | `function`                  | `-`    |
| children  | 加载完成后的子内容                                   | `ReactNode`                 | `-`    |

> config.key 与 config.type（'bmap'/'google'/'osm'）是加载第三方资源的必要条件；Leaflet 资源也由 APILoader 注入。

#### APILoader.config 可选项（全量）

| 字段         | 说明                                                                                  | 类型       | 备注           |
| ------------ | ------------------------------------------------------------------------------------- | ---------- | -------------- |
| key          | 第三方地图 key（`bmap`/`google` 需要；`osm` 可不传）                                  | `string`   | -              |
| type         | 三方地图类型：`'bmap'`（百度）、`'google'`（谷歌）、`'osm'`（开放街图）               | `string`   | 必填           |
| center       | 默认中心点（未显式传入 `MapContainer.center` 时使用）                                 | `Coord`    | -              |
| markerIcons  | 默认图标配置（中心点与普通标注），供 `CenterMarker`/`Markers` 读取                    | `object`   | 见下           |
| openLocation | 自定义“打开第三方地图进行导航”的函数，供 `MapContainer` 透出并被 `NearbyControl` 使用 | `function` | (params)=>void |
| leaflet      | Leaflet 资源地址 `{ css, js }`（可自托管替换）                                        | `object`   | `{ css, js }`  |

- `markerIcons` 结构：

```ts
interface MarkerIcons {
  centerMarkerIcon?: LeafletIconOptions; // 中心点默认图标
  markerIcon?: LeafletIconOptions; // 普通标注默认图标
}
// 常见 LeafletIconOptions 字段：
// iconUrl, iconRetinaUrl, shadowUrl, shadowRetinaUrl, iconSize, iconAnchor, shadowSize...
```

- `leaflet` 结构：

```ts
interface LeafletSource {
  css?: string; // Leaflet 样式文件地址
  js?: string; // Leaflet 脚本文件地址
}
```

> 说明：不同 `type` 会自动装配对应的瓦片层与 CRS。若需自定义瓦片层，请在资源加载后重写 `window.L.tileLayer.currentTileLayer`（高级用法）。

---

### MapContainer（地图容器）

封装 Leaflet 地图实例，并通过 `ref` 暴露常用 API。

| 参数        | 说明                                            | 类型                                                             | 默认值                                             |
| ----------- | ----------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------- |
| center      | 初始中心点 `{ longitude, latitude, type }`      | `object`                                                         | `APILoaderConfig.center` 或默认北京天安门（gcj02） |
| zoom        | 初始缩放级别                                    | `number`                                                         | 13                                                 |
| minZoom     | 最小缩放级别                                    | `number`                                                         | 3                                                  |
| maxZoom     | 最大缩放级别                                    | `number`                                                         | 18                                                 |
| getAddress  | 自定义逆地理解析实现                            | `({ longitude, latitude, type })=>Promise`                       | 内置实现                                           |
| getLocation | 自定义定位实现                                  | `(options)=>Promise`                                             | 内置实现                                           |
| queryNearby | 自定义附近搜索实现                              | `({ map, keyword, longitude, latitude, type, radius })=>Promise` | 内置实现                                           |
| onLoad      | 加载完成回调（成功返回 APIRef，失败返回字符串） | `(mapOrErr)=>void`                                               | -                                                  |
| children    | 子组件（控件、标注等）                          | `ReactNode`                                                      | -                                                  |

#### Ref（MapContainer 暴露）

| 成员         | 说明                                            |
| ------------ | ----------------------------------------------- |
| rootDOM      | 根 DOM                                          |
| getRootDOM   | 获取根 DOM                                      |
| type         | 当前地图类型（'google'/'bmap'/'osm'）           |
| leafletMap   | Leaflet 地图实例                                |
| currentMap   | 第三方地图实例（Baidu/Google/...），供 API 调用 |
| openLocation | 打开第三方地图 App 或网页导航                   |
| getAddress   | 逆地理解析                                      |
| getLocation  | 获取定位                                        |
| queryNearby  | 附近搜索/模糊搜索                               |
| center       | 当前中心点（含 type）                           |
| setView      | 设置视图                                        |
| panTo        | 平移到目标坐标或坐标数组                        |
| getCenter    | 获取中心点（内部自动判断并补充 type）           |
| zoomIn/Out   | 放大/缩小                                       |
| getZoom      | 获取缩放级别                                    |
| setZoom      | 设置缩放级别                                    |

---

### ZoomControl（缩放控件）

| 参数      | 说明         | 类型          | 默认值 |
| --------- | ------------ | ------------- | ------ |
| onZoomIn  | 点击放大回调 | `(map)=>void` | -      |
| onZoomOut | 点击缩小回调 | `(map)=>void` | -      |
| className | 自定义类名   | `string`      | -      |
| style     | 自定义样式   | `object`      | -      |

#### Ref

- `rootDOM` / `getRootDOM`
- `zoomIn()` / `zoomOut()`

---

### SearchControl（搜索控件）

- 以独立页面方式展示搜索输入与搜索结果列表，调用 `map.queryNearby` 获取结果。

| 参数     | 说明                            | 类型           |
| -------- | ------------------------------- | -------------- |
| map      | 来自 `MapContainer` 的 API 引用 | `object`       |
| onChange | 选择某条搜索结果                | `(item)=>void` |

---

### CenterMarker（中心点标注）

- 在地图中心绘制一个标注；拖动地图时自动隐藏，拖拽结束显示并支持回调。

| 参数        | 说明                                   | 类型           | 默认值   |
| ----------- | -------------------------------------- | -------------- | -------- |
| map         | MapContainer API                       | `object`       | -        |
| value       | `{ longitude, latitude, type, icon? }` | `object`       | -        |
| icon        | 自定义 icon（Leaflet Icon 或配置）     | `any`          | 内置默认 |
| onClick     | 点击标注回调                           | `(info)=>void` | -        |
| onDragStart | 地图拖拽开始                           | `(map)=>void`  | -        |
| onDragEnd   | 地图拖拽结束                           | `(map)=>void`  | -        |

#### Ref

- `rootDOM` / `getRootDOM`

---

### Markers（批量标注）

- 批量渲染点位；当点位数量较多且所有点位都不是 HTML Icon 时，自动启用 Canvas 提升性能；提供聚焦（置顶）能力。

| 参数    | 说明                                     | 类型        |
| ------- | ---------------------------------------- | ----------- |
| map     | MapContainer API                         | `object`    |
| points  | 点位数组（见下）                         | `array`     |
| icon    | 默认图标（可被单点覆盖）                 | `any`       |
| onClick | 点击点位回调（含 `setIcon/remove` 能力） | `(e)=>void` |

点位结构（示例）：

```ts
interface Point {
  longitude: number;
  latitude: number;
  type: "wgs84" | "gcj02" | "bd09";
  name?: string;
  address?: string;
  icon?: any; // Leaflet Icon 配置或 divIcon 配置
  // 可选：用于批量转换/适配的辅助字段
  inChinaTo?: "gcj02" | "bd09" | "wgs84";
  outChinaTo?: "gcj02" | "bd09" | "wgs84";
}
```

#### Ref（Markers 暴露）

- `redraw()`：重绘
- `focus(point)`：聚焦某点（置顶显示）
- `blur()`：取消聚焦

---

### Circles（圆圈）

| 参数   | 说明                    | 类型     | 默认值    |
| ------ | ----------------------- | -------- | --------- |
| map    | MapContainer API        | `object` | -         |
| points | 圆圈数组（含半径/颜色） | `array`  | -         |
| color  | 默认颜色                | `string` | '#3388ff' |
| radius | 默认半径（米）          | `number` | 200       |

---

### Polyline（折线）

| 参数   | 说明             | 类型     | 默认值 |
| ------ | ---------------- | -------- | ------ |
| map    | MapContainer API | `object` | -      |
| points | 折线点数组       | `array`  | -      |
| color  | 颜色             | `string` | 'red'  |

---

### LocationControl（定位控件）

- 点击后获取当前位置（默认 `type='wgs84'`），并通过 `onChange` 返回；内部会显示全局 `Loading`。

| 参数     | 说明             | 类型            |
| -------- | ---------------- | --------------- |
| map      | MapContainer API | `object`        |
| onChange | 定位结束回调     | `(value)=>void` |

---

### NearbyControl（附近控件）

- 展开面板展示附近类别 tabs 与列表，调用 `map.queryNearby` 获取数据。

| 参数     | 说明                   | 类型           |
| -------- | ---------------------- | -------------- |
| map      | MapContainer API       | `object`       |
| value    | 当前点位               | `object`       |
| radius   | 搜索半径（米）         | `number`       |
| readOnly | 是否只读（不展示交互） | `boolean`      |
| onChange | 选择某条附近项         | `(item)=>void` |
| onLoad   | 列表加载回调           | `(list)=>void` |

---

### MapChoose（页面组件：选点）

- 集成搜索、中心标注、定位、附近、缩放等控件，适合“选择地址”场景。

| 参数                 | 说明                                            | 类型            | 默认值  |
| -------------------- | ----------------------------------------------- | --------------- | ------- |
| readOnly             | 只读模式                                        | `boolean`       | `false` |
| autoLocation         | 初次加载是否自动定位                            | `boolean`       | `true`  |
| getAddress           | 覆盖逆地理实现                                  | `function`      | 内置    |
| getLocation          | 覆盖定位实现                                    | `function`      | 内置    |
| queryNearby          | 覆盖附近搜索                                    | `function`      | 内置    |
| center               | 初始中心点                                      | `object`        | -       |
| value                | 受控值 `{ longitude, latitude, type, address }` | `object`        | -       |
| onLoad               | 地图加载完成回调                                | `(map)=>void`   | -       |
| onChange             | 值变化回调（内部已格式化为 wgs84）              | `(value)=>void` | -       |
| onMarkerClick        | 点击候选标注回调                                | `(e)=>void`     | -       |
| SearchControlProps   | 透传给 `SearchControl`                          | `object`        | -       |
| CenterMarkerProps    | 透传给 `CenterMarker`                           | `object`        | -       |
| MarkersProps         | 透传给 `Markers`                                | `object`        | -       |
| ZoomControlProps     | 透传给 `ZoomControl`                            | `object`        | -       |
| LocationControlProps | 透传给 `LocationControl`                        | `object`        | -       |
| NearbyControlProps   | 透传给 `NearbyControl`                          | `object`        | -       |

> 内部在触发 `onChange` 前已通过 `coordsToWgs84` 统一格式化坐标。

---

### MapMarkers（页面组件：标注）

- 快速在地图中展示批量标注/圆圈/折线，并提供缩放控件；通过 ref 可访问内部各模块引用。

| 参数             | 说明                 | 类型          |
| ---------------- | -------------------- | ------------- |
| markers          | 标注点数组           | `array`       |
| onMarkerClick    | 点击标注回调         | `(e)=>void`   |
| polyline         | 折线点数组           | `array`       |
| circles          | 圆圈数组             | `array`       |
| icon             | 默认标注图标         | `any`         |
| getAddress       | 覆盖逆地理实现       | `function`    |
| getLocation      | 覆盖定位实现         | `function`    |
| queryNearby      | 覆盖附近搜索         | `function`    |
| onLoad           | 地图加载完成回调     | `(map)=>void` |
| PolylineProps    | 透传给 `Polyline`    | `object`      |
| CirclesProps     | 透传给 `Circles`     | `object`      |
| ZoomControlProps | 透传给 `ZoomControl` | `object`      |

#### Ref（MapMarkers 暴露）

- 聚合了 `MapContainer` 的 ref 能力，并额外提供：`markersRef`、`polylineRef`、`circlesRef`、`zoomRef`。

---

## 工具函数

### coordsToWgs84(points, type?)

- 将输入坐标（支持单个或数组，支持 `gcj02`/`bd09`/`wgs84`）统一转换为 `wgs84`。

### wgs84ToCoords(points, type)

- 将 `wgs84` 转为目标坐标系（如 `gcj02`/`bd09`）。

### getAddress({ longitude, latitude, type })

- 逆地理解析，内部按 `APILoaderConfig.type` 选择 Google/Baidu/OSM 对应实现，返回 `{ address, province, city, district, ... }` 或错误字符串。

### getLocation(options)

- 获取定位（优先原生能力；否则回退浏览器）并返回 `{ longitude, latitude, type }` 或错误字符串。

### queryNearby({ map, keyword, longitude, latitude, type, radius })

- 根据当前地图类型调用对应附近搜索，返回地点数组或错误字符串。

---

## 坐标与点位字段定义（统一约定）

```ts
// 单点坐标（最小集）
interface Coord {
  longitude: number; // 经度
  latitude: number; // 纬度
  type: "wgs84" | "gcj02" | "bd09"; // 坐标系
  address?: string;
  name?: string;
}

// 标注点（Markers/Polyline/Circles 可识别）
interface MarkerPoint extends Coord {
  icon?: any; // Leaflet icon/divIcon 配置
  radius?: number; // Circles 使用，单位米
  color?: string; // Circles/Polyline 可用
  // 用于批量纠偏/适配的辅助字段，可选
  inChinaTo?: "wgs84" | "gcj02" | "bd09";
  outChinaTo?: "wgs84" | "gcj02" | "bd09";
}
```

> 约定：内部渲染统一使用 `wgs84`；如入参为 `gcj02/bd09`，可使用工具函数在业务层统一转换，或依赖页面组件内置的转换逻辑（如 `MapChoose`）。

---

## 注意事项

1. 内部渲染一律使用 `wgs84`；仅在瓦片与第三方搜索时做坐标纠偏。业务层建议统一入库为 `wgs84`，对接外部系统时再转换。
2. `APILoader.config.type` 需与三方资源一致：`bmap`（百度）、`google`（谷歌）、`osm`（开放街图）。
3. 如果需要自定义图标，优先使用 Leaflet `icon/divIcon` 配置；海量点建议避免 HTML Icon，以启用 Canvas 渲染获得更佳性能。

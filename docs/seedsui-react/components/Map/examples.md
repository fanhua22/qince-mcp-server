## Map 组件示例

### 资源加载（APILoader）

```tsx
import React from "react";
import { Layout, Loading } from "seedsui-react";
import Map from "seedsui-react/components/Map";

const { APILoader } = Map;

export default () => (
  <Layout className="full">
    <Layout.Main>
      <APILoader
        loading={<Loading content="Loading..." />}
        config={{
          key: "your-map-key",
          type: "bmap",
        }}
        onSuccess={() => {
          console.log("地图资源加载成功");
        }}
      >
        {/* 这里放入 MapContainer/MapChoose/MapMarkers 等 */}
        <div style={{ height: 300, background: "#f6f6f6" }} />
      </APILoader>
    </Layout.Main>
  </Layout>
);
```

### 地图选点（MapChoose）

```tsx
import React, { useRef, useState } from "react";
import { Layout } from "seedsui-react";
import Map from "seedsui-react/components/Map";

const { APILoader, MapChoose } = Map;

export default () => {
  const mapRef = useRef(null);
  const [value, setValue] = useState({
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: "gcj02",
    address: "南京烽火科技",
  });

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader config={{ key: "your-map-key", type: "bmap" }}>
          <div style={{ position: "relative", width: "100%", height: 420 }}>
            <MapChoose
              ref={mapRef}
              zoom={16}
              value={value}
              onChange={(v) => setValue(v)}
              onMarkerClick={(e) => {
                console.log("点击候选点:", e);
              }}
            />
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  );
};
```

### 批量标注/折线/圆圈（MapMarkers）

```tsx
import React, { useRef } from "react";
import { Layout, Button } from "seedsui-react";
import Map from "seedsui-react/components/Map";

const { APILoader, MapMarkers } = Map;

const markers = [
  { latitude: 31.982723, longitude: 118.735298, type: "gcj02", name: "点1" },
  { latitude: 31.982594, longitude: 118.735184, type: "gcj02", name: "点2" },
];

export default () => {
  const mapRef = useRef(null);

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader config={{ key: "your-map-key", type: "bmap" }}>
          <div style={{ position: "relative", width: "100%", height: 420 }}>
            <MapMarkers
              ref={mapRef}
              markers={markers}
              polyline={markers}
              circles={[{ ...markers[0], radius: 300 }]}
              onMarkerClick={(e) => console.log("点击 marker:", e)}
              onLoad={(map) => console.log("地图加载完成", map)}
            />
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  );
};
```

### 低阶容器与控件（MapContainer + Controls）

```tsx
import React, { useRef } from "react";
import { Layout } from "seedsui-react";
import Map from "seedsui-react/components/Map";

const { APILoader, MapContainer, ZoomControl, LocationControl, SearchControl } =
  Map;

export default () => {
  const mapRef = useRef(null);
  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader config={{ key: "your-map-key", type: "bmap" }}>
          <MapContainer
            ref={mapRef}
            center={{
              longitude: 116.397451,
              latitude: 39.909187,
              type: "gcj02",
            }}
            onLoad={(map) => console.log("onLoad", map)}
          >
            <SearchControl onChange={(item) => mapRef.current?.panTo?.(item)} />
            <ZoomControl style={{ bottom: 20 }} />
            <LocationControl onChange={(val) => mapRef.current?.panTo?.(val)} />
          </MapContainer>
        </APILoader>
      </Layout.Main>
    </Layout>
  );
};
```

### 工具方法（坐标转换）

```tsx
import React from "react";
import Map from "seedsui-react/components/Map";

const { coordsToWgs84, wgs84ToCoords } = Map;

export default () => {
  const wgs84 = coordsToWgs84({
    longitude: 116.3912,
    latitude: 39.90778,
    type: "gcj02",
  });
  const gcj02 = wgs84ToCoords(wgs84, "gcj02");
  console.log("标准化为 wgs84:", wgs84);
  console.log("转换到 gcj02:", gcj02);
  return null;
};
```

## AssetUtil 组件示例

### 1. 加载外部 JS（回调与 async 两种用法）

```tsx
import React from "react";
import { Layout, Button, Space } from "seedsui-react";
import AssetUtil from "@/utils/AssetUtil";

export default () => {
  async function handleAsync() {
    const script = await AssetUtil.loadJs(
      "//colaboy.github.io/seedsui-react/assets/plugin/leaflet/js/leaflet.js",
      {
        id: "leaflet-js",
      }
    );
    alert(script ? "Js load succeeded" : "Js load failed");
  }

  function handleCallback() {
    AssetUtil.loadJs(
      "//colaboy.github.io/seedsui-react/assets/plugin/leaflet/js/leaflet.js",
      {
        id: "leaflet-js",
        success: () => alert("Js load succeeded"),
        fail: () => alert("Js load failed"),
      }
    );
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Space direction="vertical" style={{ margin: 12 }}>
          <Button className="primary" onClick={handleCallback}>
            Load js by callback
          </Button>
          <Button onClick={handleAsync}>Load js by async</Button>
        </Space>
      </Layout.Main>
    </Layout>
  );
};
```

### 2. 获取文件扩展名

```tsx
import React from "react";
import { Layout, Card } from "seedsui-react";
import AssetUtil from "@/utils/AssetUtil";

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Card style={{ padding: 12 }}>{AssetUtil.getFileExtension("x.js")}</Card>
      <Card style={{ padding: 12 }}>
        {AssetUtil.getFileExtension("a/b/c/file.pdf")}
      </Card>
      <Card style={{ padding: 12 }}>
        {AssetUtil.getFileExtension("x.") || "No Extension"}
      </Card>
    </Layout.Main>
  </Layout>
);
```

### 3. 预加载图片

```tsx
import React from "react";
import { Layout, Button } from "seedsui-react";
import AssetUtil from "@/utils/AssetUtil";

export default () => {
  async function handleLoadImage() {
    const ok = await AssetUtil.loadImage(
      "https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png",
      {
        success: () => console.log("image loaded"),
        fail: () => console.log("image failed"),
      }
    );
    alert(ok ? "Image ok" : "Image fail");
  }
  return (
    <Layout className="full">
      <Layout.Main>
        <Button
          className="primary"
          style={{ margin: 12 }}
          onClick={handleLoadImage}
        >
          Preload Image
        </Button>
      </Layout.Main>
    </Layout>
  );
};
```

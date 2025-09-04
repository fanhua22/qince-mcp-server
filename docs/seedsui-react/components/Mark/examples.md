## Mark 组件示例

### 基础/描边/轻描边

```tsx
import React from "react";
import { Layout, Mark, Divider } from "seedsui-react";

const buttonStyle = { margin: "8px" };

export default () => (
  <Layout className="full">
    <Layout.Main>
      <Divider>Fill Mode</Divider>
      <Mark className="default" style={buttonStyle}>
        default
      </Mark>
      <Mark className="primary" style={buttonStyle}>
        primary
      </Mark>
      <Mark className="link" style={buttonStyle}>
        link
      </Mark>
      <Mark className="warning" style={buttonStyle}>
        warning
      </Mark>
      <Mark className="danger" style={buttonStyle}>
        danger
      </Mark>
      <Mark className="success" style={buttonStyle}>
        success
      </Mark>

      <Divider>Outline</Divider>
      <Mark className="default outline" style={buttonStyle}>
        default outline
      </Mark>
      <Mark className="primary outline" style={buttonStyle}>
        primary outline
      </Mark>

      <Divider>light-outline</Divider>
      <Mark className="default light-outline" style={buttonStyle}>
        default light-outline
      </Mark>
      <Mark className="primary light-outline" style={buttonStyle}>
        primary light-outline
      </Mark>
    </Layout.Main>
  </Layout>
);
```

该组件已在文档中标记为废弃，推荐使用 `Button` 替代。

## Button 组件示例

### 颜色和变体

展示不同颜色和变体的组合效果。

```tsx
import React from 'react'
import { Layout, Divider, Button } from 'seedsui-react'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Color & Variant</Divider>

        {/* Default 颜色 */}
        <div className="flex">
          <Button radius="m" style={buttonStyle}>
            default
          </Button>
          <Button variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Primary 颜色 */}
        <div className="flex">
          <Button color="primary" radius="m" style={buttonStyle}>
            primary
          </Button>
          <Button color="primary" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="primary" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="primary" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Link 颜色 */}
        <div className="flex">
          <Button color="link" radius="m" style={buttonStyle}>
            link
          </Button>
          <Button color="link" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="link" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="link" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Warning 颜色 */}
        <div className="flex">
          <Button color="warning" radius="m" style={buttonStyle}>
            warning
          </Button>
          <Button color="warning" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="warning" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="warning" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Danger 颜色 */}
        <div className="flex">
          <Button color="danger" radius="m" style={buttonStyle}>
            danger
          </Button>
          <Button color="danger" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="danger" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="danger" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Success 颜色 */}
        <div className="flex">
          <Button color="success" radius="m" style={buttonStyle}>
            success
          </Button>
          <Button color="success" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="success" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="success" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 禁用状态

展示不同颜色和变体在禁用状态下的效果。

```tsx
import React from 'react'
import { Layout, Divider, Button } from 'seedsui-react'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Disabled</Divider>

        {/* Default 颜色禁用状态 */}
        <div className="flex">
          <Button disabled radius="m" style={buttonStyle}>
            default
          </Button>
          <Button disabled variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button disabled variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button disabled variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        {/* Primary 颜色禁用状态 */}
        <div className="flex">
          <Button disabled color="primary" radius="m" style={buttonStyle}>
            primary
          </Button>
          <Button disabled color="primary" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button disabled color="primary" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button disabled color="primary" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 形状变化

展示不同形状的按钮效果。

```tsx
import React from 'react'
import { Layout, Divider, Button, Icon } from 'seedsui-react'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Shape</Divider>
        <div className="bg-body">
          <Button shape="round" color="primary" style={buttonStyle}>
            Round
          </Button>
          <Button shape="circle" size="s" color="primary" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <Button shape="square" size="s" radius="m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>

          <br />

          <Divider>Flex</Divider>
          <Button color="primary" radius="m" className="flex" style={buttonStyle}>
            primary flex
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

### 尺寸和圆角

展示不同尺寸和圆角的组合效果。

```tsx
import React from 'react'
import { Layout, Divider, Button } from 'seedsui-react'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Size & radius</Divider>

        <Button color="primary" size="xxs" radius="xxs" variant="outline" style={buttonStyle}>
          primary xxs
        </Button>
        <Button color="primary" size="xs" radius="xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button color="primary" size="s" radius="s" style={buttonStyle}>
          primary s
        </Button>
        <Button color="primary" size="m" radius="m" style={buttonStyle}>
          primary m
        </Button>
        <Button color="primary" size="l" radius="l" style={buttonStyle}>
          primary l
        </Button>
        <Button color="primary" size="xl" radius="xl" style={buttonStyle}>
          primary xl
        </Button>
      </Layout.Main>
    </Layout>
  )
}
```

### 图标按钮

创建包含图标的按钮。

```tsx
import React from 'react'
import { Layout, Button, Icon } from 'seedsui-react'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <div className="flex">
          <Button color="primary" shape="circle" size="s" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-search"></Icon>
          </Button>

          <Button color="success" shape="circle" size="m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-check"></Icon>
          </Button>

          <Button color="warning" shape="circle" size="l" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-warning"></Icon>
          </Button>

          <Button color="danger" shape="circle" size="xl" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-close"></Icon>
          </Button>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

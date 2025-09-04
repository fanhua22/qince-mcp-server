## ActionSheet 组件示例

### ActionSheet.Combo 基本使用

组合选择器，用于触发 ActionSheet 模态框。

```tsx
import React, { useEffect, useState } from 'react'
import { Layout, Device, ActionSheet, SafeArea } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '测试Node' },
    { id: '2', name: '测试1' },
    { id: '3', name: '测试2' },
    { id: '4', name: '测试3' },
    { id: '5', name: '测试4' },
    { id: '6', name: '测试4' },
    { id: '7', name: '测试5' },
    { id: '8', name: '测试6' },
    { id: '9', name: '测试7' },
    { id: '10', name: '测试8' },
    { id: '11', name: '测试9' },
    { id: '12', name: '测试10' },
    { id: '13', name: '测试11' },
    { id: '14', name: '测试12' },
    { id: '15', name: '测试13' },
    { id: '16', name: '测试14' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (Device.os === 'ios' && Device.compareVersion(Device.osVersion, '17') < 1) {
      alert('bad ios' + Device.osVersion)
    }
    if (Device.os === 'android' && Device.compareVersion(Device.osVersion, '9') < 1) {
      alert('bad android' + Device.osVersion)
    }
    if (Device.os === 'harmony' && Device.compareVersion(Device.osVersion, '19') < 1) {
      alert('bad harmony' + Device.osVersion)
    }
    SafeArea.autoSafeArea({ debug: true })
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <ActionSheet.Combo
          placeholder="Please select"
          value={value}
          title="Please select"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          modalProps={
            {
              // safeArea: true
              // cancel: null
            }
          }
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Combo 自定义配置

可以自定义模态框的各种配置。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3', disabled: true },
    { id: '4', name: '选项4' }
  ]
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <ActionSheet.Combo
          placeholder="请选择操作"
          value={value}
          title="选择操作"
          list={list}
          allowClear={true}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            animation: 'slideUp',
            maskClosable: true,
            cancel: () => <div className="custom-cancel">自定义取消</div>
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 基本使用

模态框组件，用于展示操作选项。

```tsx
import React, { useEffect, useState } from 'react'
import { Layout, ActionSheet, SafeArea } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '测试Node' },
    { id: '2', name: '测试1' },
    { id: '3', name: '测试2' },
    { id: '4', name: '测试3' },
    { id: '5', name: '测试4' },
    { id: '6', name: '测试4' },
    { id: '7', name: '测试5' },
    { id: '8', name: '测试6' },
    { id: '9', name: '测试7' },
    { id: '10', name: '测试8' },
    { id: '11', name: '测试9' },
    { id: '12', name: '测试10' },
    { id: '13', name: '测试11' },
    { id: '14', name: '测试12' },
    { id: '15', name: '测试13' },
    { id: '16', name: '测试14' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {
    SafeArea.autoSafeArea()
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        {JSON.stringify(value)}
        <ActionSheet.Modal
          visible={true}
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 自定义样式

可以自定义模态框的样式和动画效果。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet, Button } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '删除', onClick: () => console.log('删除操作') },
    { id: '2', name: '编辑' },
    { id: '3', name: '分享' },
    { id: '4', name: '收藏' }
  ]
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Button onClick={() => setVisible(true)} style={{ margin: '20px' }}>
          打开 ActionSheet
        </Button>

        <ActionSheet.Modal
          visible={visible}
          value={value}
          title="选择操作"
          list={list}
          animation="slideUp"
          maskClosable={true}
          safeArea={true}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
            setVisible(false)
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
            setVisible(visible)
          }}
          maskProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }
          }}
          groupProps={{
            style: { maxHeight: '300px', overflowY: 'auto' }
          }}
          optionProps={{
            style: {
              padding: '15px 20px',
              borderBottom: '1px solid #f0f0f0'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 禁用选项

可以禁用某些选项。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet, Button } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '正常选项' },
    { id: '2', name: '禁用选项', disabled: true },
    { id: '3', name: '另一个正常选项' },
    { id: '4', name: '另一个禁用选项', disabled: true }
  ]
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Button onClick={() => setVisible(true)} style={{ margin: '20px' }}>
          打开 ActionSheet（包含禁用选项）
        </Button>

        <ActionSheet.Modal
          visible={visible}
          value={value}
          title="选择操作"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
            setVisible(false)
          }}
          onVisibleChange={(visible) => {
            setVisible(visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 自定义取消按钮

可以自定义或隐藏取消按钮。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet, Button } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Button onClick={() => setVisible(true)} style={{ margin: '20px' }}>
          打开 ActionSheet（自定义取消按钮）
        </Button>

        <ActionSheet.Modal
          visible={visible}
          value={value}
          title="选择操作"
          list={list}
          cancel={() => (
            <div
              className="custom-cancel"
              style={{
                padding: '15px 20px',
                textAlign: 'center',
                color: '#ff4d4f',
                borderTop: '8px solid #f0f0f0',
                fontWeight: 'bold'
              }}
            >
              自定义取消按钮
            </div>
          )}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
            setVisible(false)
          }}
          onVisibleChange={(visible) => {
            setVisible(visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 隐藏取消按钮

可以隐藏取消按钮。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet, Button } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Button onClick={() => setVisible(true)} style={{ margin: '20px' }}>
          打开 ActionSheet（隐藏取消按钮）
        </Button>

        <ActionSheet.Modal
          visible={visible}
          value={value}
          title="选择操作"
          list={list}
          cancel={null}
          maskClosable={false}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
            setVisible(false)
          }}
          onVisibleChange={(visible) => {
            setVisible(visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### ActionSheet.Modal 不同动画效果

可以设置不同的动画效果。

```tsx
import React, { useState } from 'react'
import { Layout, ActionSheet, Button, Space } from 'seedsui-react'

export default () => {
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  const [visible, setVisible] = useState(false)
  const [animation, setAnimation] = useState('slideUp')
  const [value, setValue] = useState(null)

  const animations = ['slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoom', 'fade']

  return (
    <Layout className="full">
      <Layout.Main>
        <Space direction="vertical" style={{ margin: '20px' }}>
          <div>选择动画效果：</div>
          <Space wrap>
            {animations.map((anim) => (
              <Button
                key={anim}
                type={animation === anim ? 'primary' : 'default'}
                onClick={() => setAnimation(anim)}
              >
                {anim}
              </Button>
            ))}
          </Space>

          <Button onClick={() => setVisible(true)}>打开 ActionSheet（{animation} 动画）</Button>
        </Space>

        <ActionSheet.Modal
          visible={visible}
          value={value}
          title={`${animation} 动画效果`}
          list={list}
          animation={animation}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
            setVisible(false)
          }}
          onVisibleChange={(visible) => {
            setVisible(visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

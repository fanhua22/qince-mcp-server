## Select 组件示例

### Select.Combo：单选/多选/搜索/自定义头部/自定义复选框

```tsx
import React, { useState } from 'react'
import { Layout, Divider, Select, List, Checkbox, Modal, Card, ToolBar } from 'seedsui-react'
import list from 'src/components/Select/demos/Combo/listSimple'
import listData from 'src/components/Select/demos/Combo/listData'

export default () => {
  const [keyword, setKeyword] = useState('')
  const [value, setValue] = useState([
    { allowClear: true, id: '1', name: <div>Option1</div> },
    {
      id: '2',
      name: 'Option2',
      style: { color: 'red', padding: 0, backgroundColor: 'transparent' }
    },
    { id: '3', name: 'Option3', disabled: true, allowClear: true }
  ])

  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Single Select</Divider>
          <Select.Combo
            modalProps={{ title: 'Select', portal: document.body }}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select separator</Divider>
          <Select.Combo
            modalProps={{ title: 'Select' }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            separator="|"
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Single tags</Divider>
          <Select.Combo
            modalProps={{ title: 'Select' }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple={false}
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Checkbox</Divider>
          <Select.Combo
            modalProps={{ title: 'Select' }}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
            checkbox={({ checked }) => <Checkbox checked={checked} />}
            checkboxPosition="left"
          />
        </Card>

        <Card>
          <Divider>Custom Header with Search</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            modalProps={{
              title: 'Select',
              header: () => (
                <ToolBar invert>
                  <ToolBar.Search value={keyword} onSearch={setKeyword} />
                </ToolBar>
              )
            }}
            allowClear
            value={value}
            list={List.searchList(list, keyword)}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>List count more than 15, show Search</Divider>
          <Select.Combo
            modalProps={{ title: 'Select' }}
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            allowClear
            value={value}
            list={listData}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setValue(newValue)
            }}
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### Select.Modal：受控弹窗

```tsx
import React, { useState } from 'react'
import { Select, Layout } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([{ id: '1', name: '选项1' }])
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Select.Modal
          visible={true}
          value={value}
          list={[
            { id: '1', name: '选项1' },
            { id: '2', name: '选项2' }
          ]}
          onChange={setValue}
          onVisibleChange={(v) => console.log(v)}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### Select.Main：只渲染可选列表

```tsx
import React, { useState } from 'react'
import { Select } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([{ id: '1', name: '选项1' }])
  return (
    <Select.Main
      multiple={false}
      value={value}
      list={[
        { id: '1', name: '选项1' },
        { id: '2', name: '选项2' }
      ]}
      onChange={(newValue) => {
        console.log('onChange:', newValue)
        setValue(newValue)
      }}
    />
  )
}
```

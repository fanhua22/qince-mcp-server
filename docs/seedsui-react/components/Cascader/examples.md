## Cascader 组件示例

### 基本使用

展示基本的级联选择器用法，支持动态加载子级数据。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader, Loading, Input } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '根节点',
      parentid: null
    },
    {
      id: '1-1',
      name: '子节点',
      parentid: '1'
    },
    {
      parentid: '1-1',
      name: '孙子节点',
      id: '1-1-1',
      isLeaf: true
    }
  ])

  // 加载街道
  function loadData(tabs) {
    return new Promise((resolve) => {
      if (!Array.isArray(tabs) || !tabs.length) {
        resolve(null)
        return
      }
      let lastTab = tabs[tabs.length - 1]
      if (lastTab.id !== '1-1') {
        resolve(null)
        return
      }
      Loading.show()
      let streets = [
        {
          parentid: lastTab.id,
          name: '孙子节点',
          id: '1-1-1'
        }
      ]
      setTimeout(() => {
        Loading.hide()
      }, 100)
      resolve(streets)
    })
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          allowClear
          list={[
            {
              id: '1',
              name: '根节点',
              children: [
                {
                  id: '1-1',
                  name: '子节点'
                }
              ]
            }
          ]}
          loadData={loadData}
          value={value}
          placeholder={`Select`}
          onChange={(newValue) => {
            console.log('修改:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            safeArea: true,
            title: '级联选择'
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          clear={({ clearable, triggerClear }) => {
            return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 静态数据

展示使用静态数据的级联选择器。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  const staticData = [
    {
      id: '1',
      name: '技术部',
      children: [
        {
          id: '1-1',
          name: '前端组',
          children: [
            { id: '1-1-1', name: 'React 团队' },
            { id: '1-1-2', name: 'Vue 团队' }
          ]
        },
        {
          id: '1-2',
          name: '后端组',
          children: [
            { id: '1-2-1', name: 'Java 团队' },
            { id: '1-2-2', name: 'Python 团队' }
          ]
        }
      ]
    },
    {
      id: '2',
      name: '产品部',
      children: [
        {
          id: '2-1',
          name: '产品设计',
          children: [
            { id: '2-1-1', name: 'UI 设计' },
            { id: '2-1-2', name: 'UX 设计' }
          ]
        }
      ]
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          list={staticData}
          value={value}
          placeholder="请选择部门"
          onChange={(newValue) => {
            console.log('选择部门:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            title: '选择部门',
            safeArea: true
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 多选模式

展示支持多选的级联选择器。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  const categoryData = [
    {
      id: '1',
      name: '电子产品',
      children: [
        {
          id: '1-1',
          name: '手机',
          children: [
            { id: '1-1-1', name: '智能手机' },
            { id: '1-1-2', name: '功能手机' }
          ]
        },
        {
          id: '1-2',
          name: '电脑',
          children: [
            { id: '1-2-1', name: '笔记本电脑' },
            { id: '1-2-2', name: '台式电脑' }
          ]
        }
      ]
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          multiple={true}
          list={categoryData}
          value={value}
          placeholder="请选择产品类别（可多选）"
          onChange={(newValue) => {
            console.log('选择类别:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            title: '选择产品类别',
            safeArea: true
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 搜索功能

展示启用搜索功能的级联选择器。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  const locationData = [
    {
      id: '1',
      name: '北京市',
      children: [
        {
          id: '1-1',
          name: '朝阳区',
          children: [
            { id: '1-1-1', name: '三里屯街道' },
            { id: '1-1-2', name: '建外街道' }
          ]
        },
        {
          id: '1-2',
          name: '海淀区',
          children: [
            { id: '1-2-1', name: '中关村街道' },
            { id: '1-2-2', name: '学院路街道' }
          ]
        }
      ]
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          searchVisible={true}
          list={locationData}
          value={value}
          placeholder="请选择地区（支持搜索）"
          onChange={(newValue) => {
            console.log('选择地区:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            title: '选择地区',
            safeArea: true
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 自定义清除按钮

展示自定义清除按钮的级联选择器。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader, Input, Button } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  const data = [
    {
      id: '1',
      name: '选项1',
      children: [
        { id: '1-1', name: '子选项1' },
        { id: '1-2', name: '子选项2' }
      ]
    }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          allowClear
          list={data}
          value={value}
          placeholder="请选择"
          onChange={(newValue) => setValue(newValue)}
          clear={({ clearable, triggerClear }) => {
            if (clearable) {
              return (
                <Button size="xs" color="danger" variant="text" onClick={triggerClear}>
                  清除
                </Button>
              )
            }
            return <Input.IconRightArrow />
          }}
          modalProps={{
            title: '自定义清除按钮',
            safeArea: true
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

### 异步加载数据

展示异步加载子级数据的级联选择器。

```tsx
import React, { useState } from 'react'
import { Layout, Cascader, Loading } from 'seedsui-react'

export default () => {
  const [value, setValue] = useState([])

  // 模拟异步加载数据
  function loadData(tabs) {
    return new Promise((resolve) => {
      Loading.show()

      setTimeout(() => {
        Loading.hide()

        if (tabs.length === 0) {
          // 加载第一级数据
          resolve([
            { id: '1', name: '分类1' },
            { id: '2', name: '分类2' }
          ])
        } else if (tabs.length === 1) {
          // 加载第二级数据
          const parentId = tabs[0].id
          resolve([
            { id: `${parentId}-1`, name: `${tabs[0].name}子分类1` },
            { id: `${parentId}-2`, name: `${tabs[0].name}子分类2` }
          ])
        } else if (tabs.length === 2) {
          // 加载第三级数据
          const parentId = tabs[1].id
          resolve([
            { id: `${parentId}-1`, name: `${tabs[1].name}子分类1`, isLeaf: true },
            { id: `${parentId}-2`, name: `${tabs[1].name}子分类2`, isLeaf: true }
          ])
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          list={[]}
          loadData={loadData}
          value={value}
          placeholder="异步加载数据"
          onChange={(newValue) => {
            console.log('选择结果:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            title: '异步加载级联选择',
            safeArea: true
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
```

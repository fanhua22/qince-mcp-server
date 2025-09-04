## ArrayUtil 组件示例

### 1. 扁平转深度与搜索

```tsx
import React, { useMemo, useState } from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import ArrayUtil from '@/utils/ArrayUtil'

export default () => {
  const flat = useMemo(
    () => [
      { id: '1', name: '根-1' },
      { id: '1-1', name: '子-1-1', parentid: '1' },
      { id: '1-2', name: '子-1-2', parentid: '1' },
      { id: '2', name: '根-2' },
      { id: '2-1', name: '子-2-1', parentid: '2' }
    ],
    []
  )

  const tree = useMemo(() => ArrayUtil.deepTree(flat), [flat])
  const [keyword, setKeyword] = useState('子-1')
  const result = useMemo(() => ArrayUtil.searchDeepTree(tree, keyword), [tree, keyword])

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>deepTree & searchDeepTree</Divider>
        <Card style={{ padding: 12 }}>
          <div>keyword: {keyword}</div>
          <div>matched: {result.length}</div>
          <div style={{ marginTop: 8 }}>{result.map((r) => r?.name).join('、')}</div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 2. 深度树节点读写

```tsx
import React, { useMemo, useState } from 'react'
import { Layout, Card, Button, Divider } from 'seedsui-react'
import ArrayUtil from '@/utils/ArrayUtil'

export default () => {
  const flat = useMemo(
    () => [
      { id: 'a', name: 'A' },
      { id: 'a-1', name: 'A-1', parentid: 'a' },
      { id: 'a-2', name: 'A-2', parentid: 'a' }
    ],
    []
  )
  const [tree, setTree] = useState(ArrayUtil.deepTree(flat))

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>getDeepTreeNode / setDeepTreeNode / setDeepTreeNodes</Divider>
        <Card style={{ padding: 12 }}>
          <div style={{ marginBottom: 8 }}>
            节点 a-1: {ArrayUtil.getDeepTreeNode(tree, 'a-1')?.name}
          </div>
          <Button
            className="primary"
            onClick={() => {
              const next = JSON.parse(JSON.stringify(tree))
              ArrayUtil.setDeepTreeNode(next, 'a-1', (node) => (node.name = 'A-1-Updated'))
              setTree(next)
            }}
          >
            更新 a-1 名称
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => {
              const next = JSON.parse(JSON.stringify(tree))
              ArrayUtil.setDeepTreeNodes(next, (node) => (node.flag = true))
              setTree(next)
            }}
          >
            所有节点加 flag
          </Button>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 3. 祖先/叶子节点

```tsx
import React, { useMemo } from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import ArrayUtil from '@/utils/ArrayUtil'

export default () => {
  const tree = useMemo(
    () => [
      {
        id: '1',
        name: '1',
        children: [
          { id: '1-1', name: '1-1' },
          { id: '1-2', name: '1-2', children: [{ id: '1-2-1', name: '1-2-1' }] }
        ]
      }
    ],
    []
  )
  const ancestors = ArrayUtil.getDeepTreePredecessorNodes(tree, '1-2-1')
  const leafs = ArrayUtil.getDeepTreeLeafNodes(tree)

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>先辈与末级</Divider>
        <Card style={{ padding: 12 }}>先辈: {ancestors.map((i) => i.name).join(' / ')}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>
          末级: {leafs.map((i) => i.name).join('、')}
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 4. 深度转扁平、父链/后代

```tsx
import React, { useMemo } from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import ArrayUtil from '@/utils/ArrayUtil'

export default () => {
  const tree = useMemo(
    () => [
      {
        id: 'r',
        name: '根',
        children: [
          { id: 'r-1', name: '子-1' },
          { id: 'r-2', name: '子-2', children: [{ id: 'r-2-1', name: '子-2-1' }] }
        ]
      }
    ],
    []
  )
  const flat = ArrayUtil.flattenTree(tree)
  const parents = ArrayUtil.getFlatTreePredecessorNodes(flat, 'r-2-1')
  const descendants = ArrayUtil.getFlatTreeDescendantNodes(flat, 'r')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>flattenTree / 前驱 / 后代</Divider>
        <Card style={{ padding: 12 }}>flat: {flat.map((i) => i.id).join(', ')}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>
          父链: {parents.map((i) => i.id).join(' > ')}
        </Card>
        <Card style={{ padding: 12, marginTop: 8 }}>
          后代: {descendants.map((i) => i.id).join(', ')}
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

### 5. 数组比较（isEqual）

```tsx
import React from 'react'
import { Layout, Card, Divider } from 'seedsui-react'
import ArrayUtil from '@/utils/ArrayUtil'

export default () => {
  const a1 = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ]
  const a2 = [
    { id: 1, name: 'AX' },
    { id: 2, name: 'BX' }
  ]
  const a3 = [
    { id: 1, name: 'A' },
    { id: 3, name: 'C' }
  ]

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>isEqual</Divider>
        <Card style={{ padding: 12 }}>a1 vs a2 (by id): {String(ArrayUtil.isEqual(a1, a2))}</Card>
        <Card style={{ padding: 12, marginTop: 8 }}>
          a1 vs a3 (by id): {String(ArrayUtil.isEqual(a1, a3))}
        </Card>
        <Card style={{ padding: 12, marginTop: 8 }}>
          a1 vs a2 (by ['id','name']): {String(ArrayUtil.isEqual(a1, a2, ['id', 'name']))}
        </Card>
      </Layout.Main>
    </Layout>
  )
}
```

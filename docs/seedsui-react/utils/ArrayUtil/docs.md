## 何时使用

- 需要处理树形数据结构时。
- 需要深度遍历和搜索树形数据时。
- 需要获取、设置树形节点时。
- 需要扁平化树形数据时。
- 需要比较数组是否相等时。
- 需要处理复杂的数组操作时。

## API

### ArrayUtil 概览

树结构相关：

- deepTree(flattenList)
- searchDeepTree(tree, keyword)
- getDeepTreeNode(tree, id)
- getDeepTreeNodes(tree, filter)
- getDeepTreePredecessorNodes(tree, id)
- getDeepTreeLeafNodes(tree)
- setDeepTreeLeafNode(tree, updateNode)
- setDeepTreeNode(tree, id, updateNode)
- setDeepTreeNodes(tree, updateNode)
- updateDeepTreeParentId(tree, parentid?)

扁平结构相关：

- flattenTree(tree)
- getFlatTreeNode(list, id)
- getFlatTreeNodes(list, filter)
- getFlatTreePredecessorNodes(list, id)
- getFlatTreeDescendantNodes(list, id)

数组比较：

- isEqual(array1, array2, fieldNames?)

以下为各方法详细说明。

---

### deepTree(flattenList)

将扁平树（包含 id/parentid）转为嵌套的 children 结构。

- 参数

| 名称        | 类型                                                                       | 必填 | 说明         |
| ----------- | -------------------------------------------------------------------------- | ---- | ------------ |
| flattenList | Array<{ id: string\|number, parentid?: string\|number, [k: string]: any }> | 是   | 扁平数据列表 |

- 返回

Array<TreeNode>，每个节点形如 { id, parentid?, name?, children? }。

---

### searchDeepTree(tree, keyword)

在深度树中按 name 包含关键字进行搜索，并返回匹配节点以及“从根到该节点”的完整路径。

- 参数

| 名称    | 类型            | 必填 | 说明                |
| ------- | --------------- | ---- | ------------------- |
| tree    | Array<TreeNode> | 是   | 深度树              |
| keyword | string          | 是   | 关键字（将会 trim） |

- 返回

Array<{ ...node, value: Array<TreeNode> }>，value 为祖先到当前节点的路径。

---

### getDeepTreeNode(tree, id)

在深度树中按 id 查找并返回单个节点。

- 参数

| 名称 | 类型            | 必填 | 说明    |
| ---- | --------------- | ---- | ------- |
| tree | Array<TreeNode> | 是   | 深度树  |
| id   | string\|number  | 是   | 目标 id |

- 返回

TreeNode \| null。

---

### getDeepTreeNodes(tree, filter)

在深度树中遍历并收集满足条件的节点集合。

- 参数

| 名称   | 类型                        | 必填 | 说明                       |
| ------ | --------------------------- | ---- | -------------------------- |
| tree   | Array<TreeNode>             | 是   | 深度树                     |
| filter | (node: TreeNode) => boolean | 是   | 过滤函数，返回 true 则收集 |

- 返回

Array<TreeNode>。

---

### getDeepTreePredecessorNodes(tree, id)

获取指定节点的全部先辈（从根到父链）。

- 参数

| 名称 | 类型            | 必填 | 说明    |
| ---- | --------------- | ---- | ------- |
| tree | Array<TreeNode> | 是   | 深度树  |
| id   | string\|number  | 是   | 目标 id |

- 返回

Array<TreeNode>（顺序为从根到目标父链）。

---

### getDeepTreeLeafNodes(tree)

获取深度树中所有末级节点（无 children）。

- 参数

| 名称 | 类型            | 必填 | 说明   |
| ---- | --------------- | ---- | ------ |
| tree | Array<TreeNode> | 是   | 深度树 |

- 返回

Array<TreeNode>。

---

### setDeepTreeLeafNode(tree, updateNode)

遍历深度树的全部末级节点，并对其执行 updateNode 回调（原地修改）。

- 参数

| 名称       | 类型                     | 必填 | 说明                   |
| ---------- | ------------------------ | ---- | ---------------------- |
| tree       | Array<TreeNode>          | 是   | 深度树（会被原地修改） |
| updateNode | (node: TreeNode) => void | 否   | 对末级节点进行更新     |

- 返回

原 tree 引用。

---

### setDeepTreeNode(tree, id, updateNode)

在深度树中按 id 定位节点并执行 updateNode（原地修改）。

- 参数

| 名称       | 类型                     | 必填 | 说明                   |
| ---------- | ------------------------ | ---- | ---------------------- |
| tree       | Array<TreeNode>          | 是   | 深度树（会被原地修改） |
| id         | string\|number           | 是   | 目标 id                |
| updateNode | (node: TreeNode) => void | 否   | 更新逻辑               |

- 返回

原 tree 引用。

---

### setDeepTreeNodes(tree, updateNode)

递归遍历深度树，对每个节点执行 updateNode（原地修改）。

- 参数

| 名称       | 类型                     | 必填 | 说明                   |
| ---------- | ------------------------ | ---- | ---------------------- |
| tree       | Array<TreeNode>          | 是   | 深度树（会被原地修改） |
| updateNode | (node: TreeNode) => void | 否   | 更新逻辑               |

- 返回

原 tree 引用。

---

### updateDeepTreeParentId(tree, parentid?)

为深度树每个节点补充 parentid 字段（原地修改）。

- 参数

| 名称     | 类型                 | 必填 | 说明                   |
| -------- | -------------------- | ---- | ---------------------- |
| tree     | Array<TreeNode>      | 是   | 深度树（会被原地修改） |
| parentid | string\|number\|null | 否   | 顶层父 id，默认 null   |

- 返回

原 tree 引用。

---

### flattenTree(tree)

将深度树转为扁平结构数组，保留 id/name/parentid 三元关系。

- 参数

| 名称 | 类型            | 必填 | 说明   |
| ---- | --------------- | ---- | ------ |
| tree | Array<TreeNode> | 是   | 深度树 |

- 返回

Array<{ id: string\|number, name?: string, parentid: string\|number\|null }>。

---

### getFlatTreeNode(list, id)

在扁平结构数组中按 id 查找并返回单个节点。

- 参数

| 名称 | 类型           | 必填 | 说明                       |
| ---- | -------------- | ---- | -------------------------- |
| list | Array<Item>    | 是   | 扁平列表（含 id/parentid） |
| id   | string\|number | 是   | 目标 id                    |

- 返回

Item \| null。

---

### getFlatTreeNodes(list, filter)

在扁平结构数组中过滤并返回满足条件的节点集合。

- 参数

| 名称   | 类型                    | 必填 | 说明     |
| ------ | ----------------------- | ---- | -------- |
| list   | Array<Item>             | 是   | 扁平列表 |
| filter | (item: Item) => boolean | 是   | 过滤函数 |

- 返回

Array<Item>。

---

### getFlatTreePredecessorNodes(list, id)

在扁平结构数组中，利用 id→ 节点映射，向上追溯父链并返回先辈集合。

- 参数

| 名称 | 类型           | 必填 | 说明     |
| ---- | -------------- | ---- | -------- |
| list | Array<Item>    | 是   | 扁平列表 |
| id   | string\|number | 是   | 目标 id  |

- 返回

Array<Item>（顺序为从根到目标父链）。

---

### getFlatTreeDescendantNodes(list, id)

在扁平结构数组中，根据 parentid 关系获取指定 id 的所有后代集合。

- 参数

| 名称 | 类型           | 必填 | 说明                            |
| ---- | -------------- | ---- | ------------------------------- |
| list | Array<Item>    | 是   | 扁平列表                        |
| id   | string\|number | 是   | 起点 id（内部会转为字符串对比） |

- 返回

Array<Item>。

---

### isEqual(array1, array2, fieldNames?)

判断两个数组在指定字段集合上的“逐项相等”。默认比较 id 字段。

- 参数

| 名称       | 类型          | 必填 | 说明                          |
| ---------- | ------------- | ---- | ----------------------------- |
| array1     | Array<any>    | 是   | 数组 1                        |
| array2     | Array<any>    | 是   | 数组 2                        |
| fieldNames | Array<string> | 否   | 需要比较的字段名，默认 ['id'] |

- 返回

boolean。

## 注意事项

1. setDeepTreeNode/setDeepTreeNodes/setDeepTreeLeafNode/updateDeepTreeParentId 会“原地修改”传入的树；如需保持不可变，请先深拷贝。
2. searchDeepTree 的匹配逻辑为 String(node.name).includes(keyword)。
3. getFlatTreeDescendantNodes 会将 id 转为字符串再比较，确保扁平数据中 id/parentid 类型一致可避免潜在对比问题。
4. flattenTree 仅输出 id/name/parentid 三项（基于当前实现），如需携带更多信息可自行扩展。
5. isEqual 需要数组长度一致且指定字段逐项相等才返回 true。

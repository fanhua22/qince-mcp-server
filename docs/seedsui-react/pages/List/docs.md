## 何时使用

- 需要“列表页”参考实现：包含搜索、筛选、分页、缓存、虚拟滚动与索引条联动。

## 页面概览

目录：`src/pages/List`

- 入口文档：`index.zh-CN.md` / `index.en-US.md`
- 演示代码：`demos/Common`、`demos/Cache`、`demos/Virtual`、`demos/IndexBar`
- 页面依赖：`Layout`、`ToolBar`、`List`、`Storage`、`IndexBar`、`Request` 等

包含能力：

- Common：普通列表（搜索 + 筛选弹窗 + 分页加载）
- Cache：查询参数/列表缓存与快速恢复
- Virtual：虚拟滚动（自定义行高）
- IndexBar：索引条与虚拟/实体滚动容器联动

---

## 页面结构

- 头部：`<Layout.Header>` 内使用 `ToolBar.Search / SearchActive / Filter`
- 主体：`<Main>` 包装 `List.Main`，支持 `pagination`、`virtual`、`cache`、`onLoad`
- 尾部（可选）：操作按钮、清理缓存等

`List.Main` 常用属性：

- `pagination={{ rows: 20 }}` 开启分页
- `loadList={({ page, action }) => Promise<list|string> }`
- `virtual={{ getItemHeight(item) }}`
- `cache={{ name,persist }}`
- `onLoad`：请求结束后回调（如刷新 IndexBar 的 anchors）

---

## 数据流与交互

1. 搜索与筛选

- `ToolBar.Search` 点击进入 `SearchActive`；完成后调用 `onSearch` 刷新列表
- `ToolBar.Filter` 表单收集条件，确定后触发 `onSearch`

2. 列表加载

- `Main` 将 `loadList` 透传给 `List.Main`，内部处理分页、重试、重新加载等动作
- `queryData(params,{ success })` 负责请求与适配列表项字段

3. 索引条（IndexBar）

- 虚拟滚动：使用 `mainRef.current.getAnchors()` 获取锚点；`onTouchAnchor` 绑定 `scrollToAnchor`
- 实体滚动：`scrollerDOM={mainRef.current.rootDOM}`

4. 缓存

- 列表页可结合 `Storage.useCacheState` 记忆查询参数与结果

---

## 接入步骤

1. 路由接入：挂载 `demos/Common` / `Cache` / `Virtual` / `IndexBar` 对应页面
2. 接口联调：调整 `queryData` 的接口地址、headers 与返回结构适配
3. UI 定制：覆盖列表项样式（`index.less`），或使用自定义 `renderItem`
4. 性能优化：海量列表建议启用 `virtual` 并提供稳定行高

---

## 关键依赖与用法

- `List.Main`：分页/虚拟滚动/缓存/加载中渲染（骨架/Loading）
- `ToolBar`：搜索与筛选能力
- `IndexBar`：索引条联动
- `Storage`：页面级缓存
- `Request`：请求封装

---

## 注意事项

1. `loadList` 需返回数组或错误字符串；错误将触发内置错误视图。
2. 使用 `IndexBar` 时，确保列表项含有可识别的分组锚点（如字母标题）。
3. 虚拟滚动场景请提供准确的 `getItemHeight` 以避免跳动。

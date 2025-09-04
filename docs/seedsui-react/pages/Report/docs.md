## 何时使用

- 需要“报表/卡片”页面参考实现：包含头部 Tabs + 滑块筛选 + 数据卡片展示与跳转。

## 页面概览

目录：`src/pages/Report`

- 入口文档：`index.zh-CN.md` / `index.en-US.md`
- 演示代码：`demos/Card1`
- 页面依赖：`Device`、`Bridge`、`Result`、`LocaleUtil`、`ToolBar`、`TabBar`
- 业务 API：`./demos/Card1/api/{queryTabs,querySlides,queryData}`

包含能力：

- 动态加载 `tabs/slides` 后再发起报表查询
- 数据为空/异常时统一以 `Result` 呈现
- 点击卡片可通过 `Bridge.openWindow` 跳转（H5/容器）

---

## 页面结构

- 头部：`Head` 组件，包含标题（URL 解码获取）+ `ToolBar.List` 作为 tabs + `TabBar.Slide`
- 内容：`Content` 组件承载报表展示（示例为占位）
- 数据：状态对象 `result` 统一 `{ status,message,data }`

---

## 数据流与交互

1. 初始化

- 读取标题：`Device.getUrlParameter('title')`
- 加载 `tabs` 与 `slides`，若失败则直接设置 `result` 为空/错误态
- 取第一项作为默认筛选并触发 `updateData`

2. 交互

- 切换 `tab/slide` → 调用 `updateData({ tabId, slideId })`
- 点击卡片 → `Bridge.openWindow({ title,url })`

3. 查询

- `queryData(params)` 处理后端返回：
  - 成功：`{ data: list }`（空数组 → `empty`）
  - 失败：`{ status:'500', message }`

---

## 接入步骤

1. 路由接入：在你的路由中挂载 `demos/Card1/index.jsx`
2. 接口联调：替换 `queryTabs/querySlides/queryData` 内部请求与字段映射
3. 容器跳转：如处于容器内，保证 `Bridge` 对应平台能力已 `ready`

---

## 关键依赖与用法

- `ToolBar.List`：顶部分类切换
- `TabBar.Slide`：周/月等滑块切换
- `Bridge`：跨端打开页面/小程序/外链
- `Result`：空/错态兜底展示

---

## 注意事项

1. 从 URL 读取的标题需做 `decodeURIComponent` 两次以兼容多重编码。
2. `Bridge` 的能力随平台而异；浏览器环境会回退为普通 `window.open`。

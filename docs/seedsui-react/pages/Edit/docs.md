## 何时使用

- 需要一个“编辑/创建表单”页面的参考实现：包含表单校验、提交、滚动缓存与多组件协同。
- 需要在移动端 H5 中基于 `Form` 与 Seeds 生态组件快速搭建表单页。

## 页面概览

目录：`src/pages/Edit`

- 入口文档：`index.zh-CN.md` / `index.en-US.md`
- 演示代码：`demos/Common/index.jsx`、`demos/Virtual/index.jsx`、`demos/Cache/index.jsx`
- 页面依赖：`LocaleUtil`、`Request`、`Storage`、`Loading`、`Toast`、`Layout`、`Form` 等
- 业务 API：`./demos/Cache/api/{queryData,validateData,saveData}`

包含能力：

- Common：常规表单布局（水平/垂直）、多种输入组件示例
- Virtual：长表单虚拟滚动（`Form virtual`）
- Cache：滚动位置与表单数据缓存（`Storage.useCacheState` / `Storage.setCache`）

---

## 页面结构

以 `demos/Cache/index.jsx` 为例：

- 布局：`<Layout className="full">` + `<Layout.Main>` + `<Layout.Footer>`
- 表单：`<Form>`（支持 `useForm`、`validateFields`、`scrollToField`）
- 组件：`Input/Select/Picker/Switch/Checkbox/Radio/Selector/DatePicker/Cascader/Location/Signature/Upload/Image` 等
- 底部：`<Footer>` 使用 `FooterBar` 承载“确定/取消”

---

## 数据流与交互

1. 初始化

- `queryData()` → 返回 `{ baseData, formData }` 或 `{ status,message }`
- 若有 `formData`，通过 `form.setFieldsValue(formData)` 初始化

2. 缓存（可选）

- 滚动：监听 `Layout.Main` `onScroll`，节流记录 `scrollTop` 至 `Storage`
- 数据：`onValuesChange` 防抖写入表单数据缓存

3. 校验与提交

- `validateData({ form })` → `form.validateFields()` → 错误滚动到字段或聚焦错误 DOM
- `saveData({ baseData, data, token })` → `Request.post`，并处理重复提交令牌

---

## 业务 API 约定

位于 `demos/Cache/api`：

- `queryData()`：新增场景返回本地缓存数据；编辑场景发起请求获取详情
- `validateData({ form })`：封装校验与错误定位（`scrollToErrorDOM`）
- `saveData({ baseData, data, token })`：根据是否包含 `id` 走新增/编辑分支

---

## 接入步骤（示例）

1. 路由接入：在应用路由中挂载 `demos/Common` / `demos/Virtual` / `demos/Cache`
2. 接口联调：替换 `saveData/queryData` 内部地址与头信息（如 `tokenDup`、防重）
3. 表单规则：在 `Form.Item` 的 `rules` 中配置必填与信息提示
4. 性能优化：长表单开启 `virtual`；大体积组件按需渲染
5. 缓存策略：使用 `Storage.clearCache(cacheName,{match:'prefix'})` 管理页面缓存

---

## 关键依赖与用法

- `Form`：`useForm/validateFields/scrollToField`，`rules/getValueProps/valuePropName`
- `Storage`：`useCacheState/setCache/getCache/clearCache`
- `Layout`：页面结构与滚动容器
- `Toast/Loading`：交互提示与全局加载
- `Request`：请求封装（GET/POST/headers/缓存）

---

## 注意事项

1. 移动端输入法会影响视口高度，建议在真机联调观察滚动与吸底行为。
2. 缓存的键名建议以页面名为前缀，避免与其他页面冲突。
3. 提交接口如有防重需求，请在服务端与前端共同校验 `token`。

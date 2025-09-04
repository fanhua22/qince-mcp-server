## 何时使用

- 需要一个“详情/编辑”页面的参考实现：含数据获取、状态提示、底部操作区与国际化。
- 需要在移动端 H5 中基于 `Layout` 与 `Typography.Form` 快速搭建信息展示/编辑页。

## 页面概览

目录：`src/pages/Detail`

- 入口文档：`index.zh-CN.md` / `index.en-US.md`
- 演示代码：`demos/Form/index.jsx`
- 页面依赖：`LocaleUtil`、`Request`、`Device`、`Loading`、`Toast`、`Layout`、`Result`、`Typography`
- 业务 API：`./api/queryData`、`./api/approveData`

该页面演示了：

- 初始化加载数据并展示（含空态/错误态）
- 国际化文案渲染（`LocaleUtil.locale`）
- 提交操作（审批通过）与结果提示（`Toast`）
- 移动端布局：`Layout.Main` + `Layout.Footer`、安全区和滚动容器

---

## 页面结构

核心文件：`demos/Form/index.jsx`

- 布局：`<Layout className="full">` + `<Layout.Main>` + `<Layout.Footer>`
- 内容：`<Typography.Form>` 以水平/垂直两种布局展示字段
- 操作区：`<FooterBar>` 放置“确定/取消”等操作按钮
- 状态：
  - 成功：展示内容卡片
  - 失败/空：使用 `Result` 显示全屏提示

字段展示示例：

```tsx
<Typography.Form>
  <Typography.Form.Item>
    <Typography.Form.Label>{locale('Input')}</Typography.Form.Label>
    <Typography.Form.Main>...</Typography.Form.Main>
  </Typography.Form.Item>
</Typography.Form>
```

---

## 数据流与交互

1. 初始化

- `useEffect` → `loadData()`
- `loadData` 调用 `queryData()` 获取详情数据并设置到 `result`

2. 保存/审批

- 点击底部“确定”→ 调用 `approveData()`
- 根据返回结果通过 `Toast.show` 提示成功/失败

3. 网络与异常

- API 内部使用 `Request.get/post`，在请求前/后通过 `Loading.show/hide` 管理全局加载态
- 异常通过 `catch` 或格式化后的错误对象处理，并以国际化文案兜底

---

## 业务 API 约定

位于 `src/pages/Detail/demos/Form/api`：

- `queryData()`：获取详情；根据业务可返回：

  - `{ data: {...} }` 正常数据
  - `{ status: 'empty', message: '暂无数据' }` 空态
  - `{ status: '500', message: '错误信息' }` 异常态

- `approveData()`：提交/审批；约定返回：
  - `{ code: '1', ... }` 成功
  - `{ code: '0', message }` 失败

可直接替换为你的后端接口；示例使用 `Request.post('/platform/param/v1/getLoginUser.do', ...)`。

---

## 接入步骤（示例）

1. 路由接入

- 在你的路由系统中注册一个路径指向 `demos/Form/index.jsx` 页

2. 接口联调

- 将 `api/queryData`、`api/approveData` 中的接口地址替换为实际后端
- 如需统一网关前缀，在 `Request` 层配置 `baseURL`

3. 国际化

- 使用 `LocaleUtil.setLocale(language, data)` 设置语言与字典
- 页面内通过 `LocaleUtil.locale('Ok')` 输出文案

4. UI/样式

- 页面容器使用 `Layout`，确保滚动在 `Layout.Main` 内
- 底部操作固定在 `Layout.Footer` 内的 `FooterBar`

5. URL 参数

- 通过 `Device.getUrlParameter('id')` 获取业务主键（新增/编辑/复制场景均可复用）

---

## 关键依赖与用法

- `Layout`：页面布局与滚动容器
- `Typography.Form`：信息展示/编辑表单布局
- `Result`：全屏状态页（空/错误）
- `Loading`：全局加载提示（`show/hide/exists`）
- `Toast`：轻提示（提交结果/错误信息）
- `Request`：请求封装（`get/post/serializeParams`，支持缓存）
- `LocaleUtil`：国际化（`setLocale/locale`）
- `Device`：环境与工具（取 URL 参数、平台识别）

---

## 注意事项

1. 移动端交互建议在真实设备上联调，注意安全区与键盘弹起对布局影响。
2. 将接口错误信息统一在 `Request.formatError` 处格式化，提升一致性。
3. 页面级 Loading 建议使用全局 `Loading.show()`，避免局部闪跳。
4. 若脚手架支持 `code src` 引用，`index.zh-CN.md` 已内置演示代码挂载方式。

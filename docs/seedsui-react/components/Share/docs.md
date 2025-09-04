## 何时使用

- 需要在不同平台（微信/企业微信/钉钉/飞书等）发起分享操作时。
- 需要在不支持的平台显示“暂不支持分享”的提示结果页时。

## 组件结构（index.js 导出）

- `Share.Combo` 组合按钮：检测支持后直接分享/或打开弹窗
- `Share.Modal` 分享弹窗：底部弹出，列出可分享的平台
- `Share.Main` 分享主体：根据平台渲染可用的分享项
- `Share.Item` 渲染单个平台图标与文本
- `Share.support` 工具函数：判断 `shareTo` 在当前平台是否受支持

## API

### 共用配置 shareTo

```ts
interface ShareChannel {
  title?: string
  description?: string
  imageUrl?: string
  url?: string
  onSuccess?: () => void
  onFail?: (err: any) => void
}

interface ShareTo {
  wechat?: ShareChannel
  moments?: ShareChannel
  miniprogram?: ShareChannel
  wecom?: ShareChannel
  dingtalk?: ShareChannel
  lark?: ShareChannel
  extensions?: Array<{
    isVisible?: ({ shareTo }) => boolean
    render?: ({ shareTo }) => React.ReactNode
  }>
}
```

---

### Share.Combo

| 参数         | 说明                                | 类型                 | 默认值 |
| ------------ | ----------------------------------- | -------------------- | ------ |
| shareTo      | 分享配置                            | ShareTo              | -      |
| onBeforeOpen | 点击分享前回调（可返回 false 阻止） | ()=>boolean\|Promise | -      |
| modalProps   | 透传给 `Share.Modal`                | object               | -      |
| portal       | Modal portal                        | HTMLElement          | body   |
| onError      | 错误回调                            | (e:any)=>void        | -      |
| onSuccess    | 成功回调                            | ()=>void             | -      |

#### Ref（Combo）

| 方法        | 说明           |
| ----------- | -------------- |
| comboDOM    | 触发节点       |
| getComboDOM | 获取触发节点   |
| modalDOM    | 弹窗根节点     |
| getModalDOM | 获取弹窗根节点 |

---

### Share.Modal

| 参数            | 说明         | 类型              | 默认值    |
| --------------- | ------------ | ----------------- | --------- |
| visible         | 是否可见     | boolean           | false     |
| shareTo         | 分享配置     | ShareTo           | -         |
| mainProps       | 主体属性     | object            | -         |
| onVisibleChange | 弹窗显隐回调 | (v:boolean)=>void | -         |
| animation       | 动画类型     | string            | 'slideUp' |
| className       | 自定义类名   | string            | -         |
| onError         | 错误回调     | (e:any)=>void     | -         |
| onSuccess       | 成功回调     | ()=>void          | -         |

---

### Share.Main

根据 `Bridge.platform` 判断渲染 `WeChat/WeCom/DingTalk/Lark` 等项。

| 参数    | 说明     | 类型    |
| ------- | -------- | ------- |
| shareTo | 分享配置 | ShareTo |

#### Ref（Main）

| 方法       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| mainDOM    | 主体根节点                                                 |
| getMainDOM | 获取主体根节点                                             |
| support    | `(externalShareTo?:ShareTo)=>boolean` 是否支持当前平台分享 |

---

### Share.Item

| 参数    | 说明           | 类型     |
| ------- | -------------- | -------- |
| type    | 平台类型 class | string   |
| onClick | 点击回调       | ()=>void |

### Share.support(shareTo)

根据当前平台返回是否支持。

## 注意事项

1. 不同平台的 JS SDK 调用需在对应容器内可用（如 WeChat 需注入 `wx`）。
2. 不支持的平台会显示 `Result` 为空提示。

## 示例

更多请参考同目录的 `examples.md`。

## 何时使用

- 需要在移动端/触摸屏完成手写签名，并导出图片 Base64 时。
- 需要支持“新增/编辑/预览/删除”签名的组合交互时。

## 组件结构（index.js 导出）

- `Signature.Combo` 组合组件：未签名显示“添加签名”按钮；已签名显示缩略图并可删除/预览
- `Signature.Modal` 弹窗：受控显示签名面板
- `Signature.Main` 主体：绘制区域与操作按钮

## API

### Signature.Combo

| 参数            | 说明                                             | 类型                       | 默认值 |
| --------------- | ------------------------------------------------ | -------------------------- | ------ |
| value           | 当前签名（base64 字符串）                        | string                     | -      |
| allowClear      | 已签名时是否允许删除                             | boolean                    | true   |
| onBeforeChange  | 确认前校验/拦截（返回 false 阻止）               | (base64)=>boolean\|Promise | -      |
| onChange        | 修改签名回调                                     | (base64)=>void             | -      |
| onPreview       | 预览拦截：返回 `'nativeImage'\|'browser'\|false` | (src)=>any                 | -      |
| modalProps      | 透传给 `Signature.Modal`                         | object                     | -      |
| color           | 画笔颜色                                         | string                     | '#000' |
| backgroundColor | 背景色（导出与旋转时使用）                       | string                     | '#fff' |

#### Ref（Combo）

| 方法        | 说明            |
| ----------- | --------------- |
| comboDOM    | 触发/缩略根节点 |
| getComboDOM | 获取节点        |

---

### Signature.Modal

| 参数            | 说明            | 类型            | 默认值 |
| --------------- | --------------- | --------------- | ------ |
| visible         | 是否可见        | boolean         | false  |
| value           | 当前签名        | string          | -      |
| onBeforeChange  | 确认前校验/拦截 | (base64)=>any   | -      |
| onChange        | 修改签名        | (base64)=>void  | -      |
| onVisibleChange | 显隐回调        | (visible)=>void | -      |
| color           | 画笔颜色        | string          | '#000' |
| backgroundColor | 背景色          | string          | '#fff' |
| mainProps       | 主体属性        | object          | -      |

#### Ref（Modal）

| 方法        | 说明           |
| ----------- | -------------- |
| modalDOM    | 弹窗根节点     |
| getModalDOM | 获取弹窗根节点 |

---

### Signature.Main

| 参数            | 说明                       | 类型           | 默认值 |
| --------------- | -------------------------- | -------------- | ------ |
| onBeforeChange  | 确认前校验/拦截            | (base64)=>any  | -      |
| onChange        | 确认后回调                 | (base64)=>void | -      |
| onCancel        | 取消回调                   | ()=>void       | -      |
| color           | 画笔颜色                   | string         | '#000' |
| backgroundColor | 背景色                     | string         | '#fff' |
| style           | 容器样式（决定绘图区大小） | CSSProperties  | -      |

#### Ref（Main）

| 方法       | 说明            |
| ---------- | --------------- |
| rootDOM    | 根节点          |
| getRootDOM | 获取根节点      |
| getBase64  | 获取签名 base64 |
| clear      | 清空画布        |

## 实现说明

1. 导出图片时使用 `CanvasUtil.toBase64`，并支持 `rotateBase64` 将图片逆时针旋转 90° 以适配纵向签名展示。
2. 支持 `onPreview` 返回 `'nativeImage'`，在移动端调用系统预览；返回 `'browser'` 使用内置 `Image.PreviewModal`。

## 示例

更多请参考同目录的 `examples.md`。

## 何时使用

- H5 运行于微信、企业微信、支付宝、钉钉、飞书或浏览器中，需要调用端能力（定位、扫码、图片等）。
- 需要统一的跨端桥接 API（自动根据运行环境选择实现）。

## 平台说明

Bridge 会根据 `Device.platform` 自动选择实现：wechat/wework/(miniProgram)、alipay/(miniProgram)、dingtalk、lark、browser。

## API

### Bridge 概览

通用能力（所有平台均可调用，或内部做降级）：

- ready(callback, options?)
- back(backLvl?, options?)
- openWindow(params?)
- closeWindow()
- onHistoryBack(handler?)
- setTitle(params)
- getLocation(params)
- openLocation(params)
- scanQRCode(params)
- chooseImage(params)
- uploadImage(params)
- previewImage(params)
- previewFile(params)
- logOut()
- goHome()
- getAppVersion()

以下为关键方法说明。不同平台的差异已在实现中处理，如受限平台会提示或降级。

---

### ready(callback, options?)

按平台动态注入对应 JS-SDK，加载完成后执行 callback。

- options（按平台可选）：

| 字段                    | 说明                           |
| ----------------------- | ------------------------------ |
| wechatLibSrc            | 微信 JS-SDK 地址               |
| weworkLibSrc            | 企微 JS-SDK 地址               |
| alipayLibSrc            | 支付宝 JS-SDK 地址             |
| alipayMiniprogramLibSrc | 支付宝小程序 web-view 适配脚本 |
| dingtalkLibSrc          | 钉钉 JS-SDK 地址               |
| larkLibSrc              | 飞书 JS-SDK 地址               |
| fail                    | (err) => void，加载失败回调    |

---

### back(backLvl?, options?)

统一的返回控制：可触发 h5 监听、确认弹窗、关闭页或浏览器历史返回。

- 参数

| 字段            | 类型       | 说明                  |
| --------------- | ---------- | --------------------- |
| backLvl         | number     | 历史回退层级，默认 -1 |
| options.success | () => void | 成功回调              |
| options.fail    | () => void | 失败或被拦截回调      |

---

### openWindow(params?) / closeWindow()

打开新窗口或关闭当前窗口，Bridge 内部做平台兼容（如小程序使用 navigateBack）。

- openWindow(params)

| 字段   | 类型                | 说明                                 |
| ------ | ------------------- | ------------------------------------ |
| url    | string              | 目标地址，支持 h5:/webview: 前缀清理 |
| target | '\_self'\|'\_blank' | 打开方式                             |

---

### setTitle({ title })

修改原生标题或 document.title。

---

### getLocation(params)

获取定位，自动做坐标系与境内境外处理（部分平台可能需要鉴权）。

- 参数（按平台对齐）

| 字段     | 类型             | 说明                                                      |
| -------- | ---------------- | --------------------------------------------------------- |
| type     | 'wgs84'\|'gcj02' | 期望坐标系，默认 gcj02                                    |
| success  | (res) => void    | 成功回调：{ errMsg, longitude, latitude, type, accuracy } |
| fail     | (err) => void    | 失败回调                                                  |
| complete | () => void       | 完成回调（部分平台）                                      |

---

### openLocation(params)

在端内打开地图查看位置，自动坐标转换（境内用 gcj02，境外用 wgs84）。

- 参数

| 字段      | 类型   | 说明                           |
| --------- | ------ | ------------------------------ |
| latitude  | number | 终点纬度                       |
| longitude | number | 终点经度                       |
| name      | string | 名称                           |
| address   | string | 地址                           |
| scale     | number | 缩放级别（支持平台范围有差异） |

---

### scanQRCode(params)

扫码能力统一封装，结果结构按平台做兼容。

- 参数（按平台对齐）

| 字段     | 类型          | 说明                                         |
| -------- | ------------- | -------------------------------------------- |
| scanType | string[]      | ['qrCode','barCode'] 等                      |
| success  | (res) => void | 成功回调：通常返回 { resultStr } 或 { text } |
| fail     | (err) => void | 失败回调                                     |

---

### chooseImage(params) / uploadImage(params)

端内选图与上传能力统一封装：不同平台形态不同（如钉钉返回 localFiles）。

---

### previewImage(params) / previewFile(params)

图片与文件预览，部分平台/PC 可能限制或降级提示。

## 注意事项

1. ready 仅负责动态注入 SDK，不做鉴权签名；按平台自行完成后再调用对应能力。
2. PC 端能力有限（如微信 PC 不支持扫码/定位/预览），Bridge 内部会提示或降级。
3. 坐标转换依赖 `GeoUtil.coordtransform`，并根据是否在中国自动选择坐标系。

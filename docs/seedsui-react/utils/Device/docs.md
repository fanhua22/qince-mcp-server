## 何时使用

- 需要识别浏览器/设备/系统/平台环境与版本信息。
- 需要读取屏幕宽高、URL 参数、在线状态等环境能力。

## API

### Device 概览

环境属性：

- language: string
- protocol: string
- host: string
- domain: string
- kernel: 'trident'|'presto'|'webkit'|'gecko'|''
- device: 'mobile'|'pc'
- os: 'android'|'ios'|'harmony'|''
- osVersion: string
- model: string
- platform: 'browser'|'wechat'|'wework'|'wechatMiniprogram'|'weworkMiniprogram'|'alipay'|'alipayMiniprogram'|'dingtalk'|'lark'|'qq'|'uc'
- platformVersion: string
- isOnLine: boolean
- userAgent: string
- screenWidth: number
- screenHeight: number

方法：

- getUrlParameter(name, search?) => string|object|''
- compareVersion(v1, v2, separator='.') => -1|0|1

---

### getUrlParameter(name, search?)

解析地址栏参数；不传 name 返回对象，传 name 返回对应值，未命中返回空字符串。

---

### compareVersion(v1, v2, separator='.')

比较两个版本号，返回 -1（小于）/0（等于）/1（大于）。

## 注意事项

1. ios 机型 `model` 取法为“iPhone + iOS 版本”，Android 解析 UA 中 Build 字段。
2. 小程序、企微等平台通过 UA 关键字识别；如嵌入其他容器，请确认 UA 标识是否符合预期。

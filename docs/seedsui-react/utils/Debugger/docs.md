## 何时使用

- 需要在移动 H5 中快速拉起 vConsole 调试面板，或留“暗门”触发调试。

## API

### Debugger 概览

- addTrigger(container?)
- showDebug()

---

### addTrigger(container?)

为页面绑定一个隐藏触发器：默认在页面左下角创建一个 24×100 的透明触发区，连续点击 10 次后自动调用 showDebug 打开 vConsole。

- 参数

| 名称      | 类型        | 必填 | 说明                                     |
| --------- | ----------- | ---- | ---------------------------------------- |
| container | HTMLElement | 否   | 自定义触发容器（不传则自动创建隐藏元素） |

- 返回

void。

---

### showDebug()

动态 import vconsole 并显示调试面板，返回 Promise<boolean>，表示是否成功打开。

## 注意事项

1. 首次打开会在 window.sessionStorage 记录 `_debug_`，刷新后默认保留调试模式。
2. vconsole 为按需加载，若加载失败会进行 toast 提示。

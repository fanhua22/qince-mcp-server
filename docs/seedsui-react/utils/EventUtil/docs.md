## 何时使用

- 需要简单的发布-订阅（事件总线）来解耦模块通信。

## API

### EventUtil（Observer）概览

- on(eventName, fn)
- emit(eventName, ...args)
- off(eventName, fn)
- destroy(eventName?)

---

### on(eventName, fn)

订阅事件。

---

### emit(eventName, ...args)

发布事件，按订阅顺序执行回调。

---

### off(eventName, fn)

取消指定回调的订阅。

---

### destroy(eventName?)

销毁指定事件（不传则清空全部）。

## 注意事项

1. emit 若无订阅返回 false；有订阅将逐一执行回调。
2. 该实现为轻量内存版事件总线，不做跨页/持久化。

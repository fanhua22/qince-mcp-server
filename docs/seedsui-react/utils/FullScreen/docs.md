## 何时使用

- 需要检测/进入/退出/切换全屏，以及监听全屏状态变化时。

## API

### FullScreen 概览

- support() => boolean
- getFullscreenElement() => Element | null
- isFull(el?) => boolean
- enter(el?)
- exit(el?)
- toggle(el?, handler?)
- on(element, fn)

---

### support()

是否支持全屏 API。

---

### getFullscreenElement()

当前处于全屏的元素。

---

### isFull(el?)

是否处于全屏（检测 webkitIsFullScreen 或 fullscreenElement）。

---

### enter(el?) / exit(el?)

进入/退出全屏；内部做了各前缀兼容。

---

### toggle(el?, handler?)

在全屏与非全屏间切换，handler(true/false) 通知切换结果。

---

### on(element, fn)

监听全屏变化事件（webkitfullscreenchange/mozfullscreenchange/fullscreenchange/MSFullscreenChange）。

## 注意事项

1. 在浏览器安全策略下，全屏通常需要用户手势触发。
2. IE ActiveX 分支仅用于极旧环境，现代浏览器不会触发。

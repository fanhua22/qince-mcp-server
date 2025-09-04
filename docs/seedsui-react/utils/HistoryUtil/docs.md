## 何时使用

- 需要在单页应用中为“嵌套路由/临时页面”增加一条可回退的历史记录，并在返回时执行回调。

## API

### HistoryUtil（静态工具）

- navigate(urlParameter, { onBack })
- back()
- onBack: (() => void) | null

说明：navigate 会在当前 URL 追加参数并 pushState，一旦触发浏览器返回，将执行 onBack。

---

### History（实例）

与 HistoryUtil 等效，但作用于实例：

- new History()
  - navigate(urlParameter, { onBack })
  - back()
  - onBack: (() => void) | null

## 使用约定

1. urlParameter 仅作为区分该“子页面”的标记，如 `nested=true`。
2. 返回触发后内部会移除 popstate 监听，避免重复触发。

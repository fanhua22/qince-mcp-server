## 何时使用

- 需要拼接 classNames、将自定义节点/文本渲染为 ReactNode、阻止默认事件等 DOM/React 相关工具。

## API

### DOMUtil 概览

- preventDefault(e)
- classNames(...args)
- getIconNode(node, options?)
- getTextNode(text, options?)
- getComboNode(params)

---

### preventDefault(e)

阻止默认事件。

---

### classNames(...args)

安全拼接类名：支持字符串、数组、对象（truthy）与自定义 toString。

---

### getIconNode(node, options?)

将传入的 node 统一转换为 ReactElement：

- node 为函数：调用并返回结果
- node 为 ReactElement：原样返回
- node 为字符串：包装为 div，自动合并 className 与 style

- options

| 字段       | 类型                | 说明                   |
| ---------- | ------------------- | ---------------------- |
| ParentNode | ReactComponent      | 可选包裹父节点         |
| children   | ReactNode           | 子节点                 |
| className  | string              | 字符串节点时附加的类名 |
| style      | React.CSSProperties | 内联样式               |
| ...params  | any                 | 透传给函数节点         |

---

### getTextNode(text, options?)

将文本/函数/ReactElement 规范为 ReactNode；当提供 className 或 style 时，字符串会被包裹为 div。

---

### getComboNode({ comboRef, combo, comboChildren, onClick, id, className, style })

根据 combo（函数或节点）返回组合渲染结果；若 combo 为函数，传入 { comboRef, onClick } 调用。

## 注意事项

1. classNames 对对象类型仅收集 truthy 的 key。
2. getIconNode/getTextNode 返回 null 表示无内容。

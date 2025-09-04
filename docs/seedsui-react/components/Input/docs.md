## 何时使用

- 需要通用文本/数字/密码/搜索等输入能力时。
- 需要受控输入、清除按钮、自定义左右图标、格式化展示值、数值精度与范围约束时。

## 组件结构

`Input` 默认导出一个对象，包含以下子组件：

- `Input.Text` 基础单行输入
- `Input.AutoFit` 自增高输入（textarea 自动适配高度）
- `Input.Textarea` 多行输入
- `Input.Number` 数值输入
- `Input.NumberBox` 数值步进器（带 + / - 按钮）
- `Input.Password` 密码输入
- `Input.PasswordStrength` 密码强度条
- `Input.Range` 滑动输入条
- `Input.Rate` 评分输入
- `Input.Tel` 手机号输入
- `Input.Search` 搜索输入
- `Input.Url` URL 输入（点击左侧区域复制链接）
- `Input.Node` 展示型输入（不可编辑，支持清除与格式化）
- 图标组件：`Input.IconClear`、`Input.IconRightArrow`、`Input.IconLeftArrow`

以下为核心 API（未特别标注时，均适用于 `Text/Number/Password/Search/Tel` 等基于 `Input.Text` 的组件）。

## 通用 API（基于 Input.Text）

| 参数         | 说明                             | 类型                                                                                | 默认值  |
| ------------ | -------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| value        | 输入值（受控）                   | `string`                                                                            | `''`    |
| onChange     | 值变化回调                       | `(value: string, info?: { action: 'change'   \| 'blur'  \| 'clickClear' }) => void` | `-`     |
| placeholder  | 占位符                           | `string`                                                                            | `-`     |
| maxLength    | 最大长度                         | `number`                                                                            | `-`     |
| readOnly     | 只读                             | `boolean`                                                                           | `false` |
| disabled     | 禁用                             | `boolean`                                                                           | `false` |
| formatter    | 展示值格式化（失焦覆盖层显示）   | `(value:string)=>ReactNode`                                                         | `-`     |
| leftIcon     | 左侧图标/节点                    | `ReactNode \| ({ value })=>ReactNode`                                               | `-`     |
| rightIcon    | 右侧图标/节点                    | `ReactNode \| ({ value })=>ReactNode`                                               | `-`     |
| allowClear   | 是否显示清除按钮                 | `boolean`                                                                           | `false` |
| clear        | 自定义清除渲染                   | `ReactNode \| ({ triggerClear })=>ReactNode`                                        | `-`     |
| autoFocus    | 自动聚焦                         | `boolean`                                                                           | `false` |
| autoSelect   | 自动选中文本（需先聚焦）         | `boolean`                                                                           | `false` |
| inputMode    | 输入模式                         | `string`                                                                            | `-`     |
| enterKeyHint | 回车键提示                       | `string`                                                                            | `-`     |
| className    | 自定义类名                       | `string`                                                                            | `-`     |
| style        | 容器样式（支持设置文本相关样式） | `CSSProperties`                                                                     | `-`     |

数值相关扩展（`Input.Number` 适用）：

| 参数      | 说明                                          | 类型      | 默认值 |
| --------- | --------------------------------------------- | --------- | ------ |
| precision | 小数精度                                      | `number`  | `-`    |
| trim      | 数值是否去除小数末尾 0（Text 中影响首尾空格） | `boolean` | `-`    |
| min       | 最小值                                        | `number`  | `-`    |
| max       | 最大值                                        | `number`  | `-`    |

#### Ref

| 方法         | 说明                         | 类型                                            |
| ------------ | ---------------------------- | ----------------------------------------------- |
| rootDOM      | 根节点                       | `HTMLElement`                                   |
| inputDOM     | 原生输入节点                 | `HTMLInputElement \| HTMLTextAreaElement`       |
| getRootDOM   | 获取根节点                   | `() => HTMLElement`                             |
| getInputDOM  | 获取输入节点                 | `() => HTMLInputElement \| HTMLTextAreaElement` |
| correctValue | 纠正值（长度/数值范围/精度） | `(val:string\|number)=>string`                  |
| focus        | 聚焦输入并处理光标/选中      | `() => void`                                    |

---

### Input.AutoFit（自增高）

在 `Text` 的基础上改为 `textarea`，高度自适应。

| 额外说明 | 内容                                                            |
| -------- | --------------------------------------------------------------- |
| 类型     | 渲染为 `textarea` 与预渲染 `pre`，使用相同受控 `value` 同步高度 |

---

### Input.Textarea（多行）

与 `Text` 基本一致，仅渲染为原生 `textarea`。

---

### Input.Number

基于 `Text`，`type="number"`，输入阶段限制小数精度与最大长度，失焦时再进行 `min/max/precision` 纠正。

---

### Input.NumberBox（步进器）

| 参数       | 说明                          | 类型               | 默认值  |
| ---------- | ----------------------------- | ------------------ | ------- |
| value      | 值（受控）                    | `string \| number` | `-`     |
| onChange   | 值变化回调                    | `(value) => void`  | `-`     |
| precision  | 小数精度                      | `number`           | `-`     |
| trim       | 小数末尾 0 处理               | `boolean`          | `-`     |
| min        | 最小值                        | `number`           | `-`     |
| max        | 最大值                        | `number`           | `-`     |
| maxLength  | 最大长度                      | `number`           | `-`     |
| stepFocus  | 点击 + / - 后是否聚焦到输入框 | `boolean`          | `false` |
| plusProps  | 自定义加号按钮属性            | `object`           | `{}`    |
| minusProps | 自定义减号按钮属性            | `object`           | `{}`    |

#### Ref（NumberBox）

| 方法        | 说明                               |
| ----------- | ---------------------------------- |
| rootDOM     | 根节点                             |
| inputDOM    | 内部 `Input.Number` 的原生输入节点 |
| getInputRef | 获取内部 `Input.Number` 的 `ref`   |

---

### Input.Password

同 `Text`，但 `type="password"`。

---

### Input.PasswordStrength

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| value | 密码文本 | `string` | `''`   |

#### Ref

| 方法        | 说明                      | 类型                          |
| ----------- | ------------------------- | ----------------------------- |
| rootDOM     | 根节点                    | `HTMLElement`                 |
| getStrength | 计算指定值的强度（1/2/3） | `(value?:string)=>1\|2\|3\|0` |

---

### Input.Range（滑块）

| 参数     | 说明   | 类型                   | 默认值  |
| -------- | ------ | ---------------------- | ------- |
| value    | 当前值 | `number`               | `0`     |
| min      | 最小值 | `number`               | `0`     |
| max      | 最大值 | `number`               | `100`   |
| step     | 步长   | `number`               | `1`     |
| readOnly | 只读   | `boolean`              | `false` |
| disabled | 禁用   | `boolean`              | `false` |
| onChange | 值变化 | `(value:number)=>void` | `-`     |

#### Ref

| 方法       | 说明       |
| ---------- | ---------- |
| rootDOM    | 根节点     |
| getRootDOM | 获取根节点 |

---

### Input.Rate（评分）

| 参数     | 说明             | 类型                   | 默认值  |
| -------- | ---------------- | ---------------------- | ------- |
| value    | 当前值           | `number`               | `-`     |
| min      | 最小值           | `number`               | `0`     |
| max      | 最大值           | `number`               | `5`     |
| step     | 步长（支持小数） | `number`               | `1`     |
| icon     | 自定义图标类名   | `string`               | `-`     |
| readOnly | 只读             | `boolean`              | `false` |
| disabled | 禁用             | `boolean`              | `false` |
| onChange | 值变化           | `(value:number)=>void` | `-`     |

---

### Input.Tel / Input.Search / Input.Url

- `Tel`：同 `Text` 的受控输入，用于手机号场景。
- `Search`：在按下 Enter 时会触发 `onPressEnter`，常用于 `onSearch` 逻辑。
- `Url`：显示链接，左侧区域点击可复制链接；支持传入 `rightIcon`。

---

### Input.Node（展示型输入）

仅展示/占位，不可编辑，支持清除与格式化。

#### Ref

| 方法                     | 说明                    |
| ------------------------ | ----------------------- |
| rootDOM                  | 根节点                  |
| inputDOM                 | 内部文本容器            |
| getRootDOM / getInputDOM | 分别返回根节点/文本容器 |

---

### 图标组件

- `Input.IconClear`：清除按钮（默认用于 allowClear）。
- `Input.IconRightArrow`：右箭头图标。
- `Input.IconLeftArrow`：左箭头图标。

以上图标组件均支持 `className/style/onClick` 等常规属性。

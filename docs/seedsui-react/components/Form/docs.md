## 何时使用

- 构建表单，支持水平/垂直布局、字段校验与受控数据管理。
- 需要与 `rc-field-form` 能力结合的场景（验证、取值、滚动到字段）。

## 组件结构

`Form` 暴露以下能力：

- `Form` 主组件
- `Form.Item` 表单项
- `Form.useForm()` 创建表单实例
- `Form.useWatch()` 监听字段变化

### Form

| 参数        | 说明                                     | 类型                                     | 默认值         |
| ----------- | ---------------------------------------- | ---------------------------------------- | -------------- |
| layout      | 布局模式                                 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol    | 标签列栅格（透传给内部 Typography.Form） | `object`                                 | `-`            |
| mainCol     | 内容列栅格（透传给内部 Typography.Form） | `object`                                 | `-`            |
| scrollerDOM | 外部滚动容器 DOM，用于滚动到字段         | `HTMLElement`                            | `-`            |
| virtual     | 是否虚拟滚动（透传）                     | `boolean`                                | `-`            |
| className   | 自定义类名                               | `string`                                 | `-`            |
| style       | 自定义样式                               | `CSSProperties`                          | `-`            |

> 其余 `rc-field-form` 原生属性（如 `initialValues`、`onFinish`、`onValuesChange` 等）均透传给内部 `Form`。

#### Ref

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### Form.Item

| 参数            | 说明                                  | 类型                                     | 默认值   |
| --------------- | ------------------------------------- | ---------------------------------------- | -------- |
| name            | 字段名（必填）                        | `string`                                 | `-`      |
| label           | 标签文本                              | `ReactNode`                              | `-`      |
| help            | 帮助信息                              | `ReactNode`                              | `-`      |
| extra           | 额外信息区域（展示在主内容右侧/下方） | `ReactNode`                              | `-`      |
| inputExtra      | 输入区额外信息（紧贴输入控件右侧）    | `ReactNode`                              | `-`      |
| layout          | 覆盖父级布局                          | `'horizontal' \| 'vertical' \| 'inline'` | `-`      |
| labelCol        | 标签列栅格                            | `object`                                 | `-`      |
| mainCol         | 内容列栅格                            | `object`                                 | `-`      |
| rules           | 校验规则                              | `any[]`                                  | `-`      |
| valuePropName   | 子组件值属性名（如 `checked`）        | `string`                                 | `-`      |
| getValueProps   | 将值转为子组件属性                    | `(value)=>object`                        | `-`      |
| validateTrigger | 触发校验的时机                        | `string \| string[]`                     | `onBlur` |
| initialValue    | 初始值                                | `any`                                    | `-`      |

> Item 会将 `rc-field-form` 的 `control` 注入到你传入的子组件中（克隆并合并 `onChange`）。

---

### Form.useForm

创建或复用表单实例。

```ts
const [form] = Form.useForm()
// 扩展能力：form.scrollToField(name, options)
```

- `scrollToField(name, options)`：定位滚动至 `id=seed-form-item-${name}` 的元素。

---

### Form.useWatch

监听某个字段或字段组的值变化（透传自 rc-field-form）。

```ts
const value = Form.useWatch(fieldName, form)
```

## 注意事项

1. `Form.Item` 的 `name` 必填，且建议保证唯一性。
2. 子组件若为自定义组件（非原生元素），`Form.Item` 会自动克隆并注入 `value`/`onChange`。
3. 使用 `scrollerDOM` 时，`scrollToField` 会在该容器内定位字段位置。

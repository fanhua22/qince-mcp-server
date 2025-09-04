## 何时使用

- 需要从一列或多列选项中进行滚动选择时（如日期/时间/字典型数据）。
- 需要以弹窗/组合器的形式快速完成单列或多列的选择时。

## 组件结构

默认导出 `Picker`，包含以下子组件：

- `Picker.Combo` 组合器（点击触发弹窗选择）
- `Picker.Modal` 弹窗容器
- `Picker.Main` 选择主体（支持 1-N 列）

---

### Picker.Combo

| 参数            | 说明                                                                       | 类型                                        | 默认值  |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------- | ------- |
| value           | 当前选中值                                                                 | `Array<{ id:string\|number, name:string }>` | `[]`    |
| list            | 选项数据（支持一维/二维）                                                  | `Array\|Array<Array>`                       | `[]`    |
| modalProps      | 传递给 `Picker.Modal` 的属性（如 `title/defaultPickerValue/ok/cancel` 等） | `object`                                    | `-`     |
| placeholder     | 占位提示                                                                   | `string`                                    | `-`     |
| allowClear      | 是否允许清除                                                               | `boolean`                                   | `false` |
| onChange        | 选中变化                                                                   | `(value)=>void`                             | `-`     |
| onVisibleChange | 显隐回调                                                                   | `(visible:boolean)=>void`                   | `-`     |

> 其余组合器通用属性（如 `className/style/clear` 等）可参见 `Modal.SelectCombo`。

---

### Picker.Modal

| 参数                                    | 说明         | 类型                  | 默认值        |
| --------------------------------------- | ------------ | --------------------- | ------------- |
| value                                   | 当前值       | `Array`               | `[]`          |
| list                                    | 选项数据     | `Array\|Array<Array>` | `[]`          |
| defaultPickerValue                      | 默认值       | `Array`               | `[]`          |
| main                                    | 主体组件     | `Component`           | `Picker.Main` |
| mainProps                               | 主体组件属性 | `object`              | `-`           |
| className/style/visible/onVisibleChange | 弹窗通用属性 | `-`                   | `-`           |

---

### Picker.Main

| 参数       | 说明                     | 类型                  | 默认值  |
| ---------- | ------------------------ | --------------------- | ------- |
| value      | 当前值                   | `Array<{ id, name }>` | `[]`    |
| list       | 选项数据（可一维或二维） | `Array\|Array<Array>` | `[]`    |
| allowClear | 是否允许清除             | `boolean`             | `false` |
| onChange   | 变化回调                 | `(value)=>void`       | `-`     |

#### 值与数据说明（Main）

- 支持一维数组：`[{ id, name }, ...]`；二维数组：`[[{ id, name }], [{ id, name }], ...]`。
- 若传入值项数小于列数会自动填充为每列第一项，若多于列数将裁剪。

## 注意事项

1. `Picker.Combo` 建议在表单中使用，方便以受控方式管理值。
2. 大数据量时可考虑结合虚拟列表方案（非内置）。

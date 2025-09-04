## 何时使用

- 需要进行数值合法性判断、提取数值、四舍五入/修整、千分位、反千分位、惯性计算等。

## API

### MathUtil 概览

- isNumber(str)
- extractNumber(str)
- thousands(number, decimalThousands?)
- fixed(number, precision)
- round(number, precision)
- strip(number, precision=12)
- antiThousands(number)
- inertia({ cellSize, distance, duration, currentPosition, minPosition, maxPosition })

---

### isNumber(str)

判断字符串是否为合法数值（含科学计数法）。

---

### extractNumber(str)

从字符串中提取首个数值（含小数），未匹配返回空串。

---

### thousands(number, decimalThousands?) / antiThousands(number)

千分位与反千分位；`decimalThousands=true` 时小数部分也加千分位。

---

### fixed(number, precision) / round(number, precision) / strip(number, precision=12)

数值显示修整、四舍五入与精度丢失修正。

---

### inertia(params)

滚动/选择器的惯性计算。

- 参数

| 字段            | 类型   | 说明                     |
| --------------- | ------ | ------------------------ |
| cellSize        | number | 单项高度                 |
| distance        | number | 滚动总距离（负值为反向） |
| duration        | number | 滚动总时长               |
| currentPosition | number | 当前像素位置             |
| minPosition     | number | 最小像素位置             |
| maxPosition     | number | 最大像素位置             |

- 返回：{ duration: number, position: number, index: number }

## 注意事项

1. fixed 是截断到指定小数位的字符串，不是四舍五入；需要四舍五入用 round。
2. inertia 内置摩擦系数与吸附逻辑，需与 UI 滚动实现保持一致的单位与方向。

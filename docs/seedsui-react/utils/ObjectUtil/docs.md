## 何时使用

- 需要判断对象是否“空”，并兼容 Date 类型（无效日期视为空）。

## API

### ObjectUtil 概览

- isEmpty(value)

---

### isEmpty(value)

判断空对象/空数组/空字符串/undefined/null/NaN 等；Date 类型会判断 getTime 是否为 NaN。

## 注意事项

1. 该实现基于 lodash 的 isEmpty，并补充 Date 的判定逻辑。

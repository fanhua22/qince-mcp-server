## 何时使用

- 需要统一的日期/时间处理：格式化、加减、比较、区间、周/月/季度、UTC 与时区转换等。

## API

### DateUtil 概览

- plugin()
- toDate(input)
- startOrEnd(date, type, boundary?)
- getWeekDates(currentDate, weekStart)
- previousWeek(date)
- nextWeek(date)
- getDaysInMonth(date)
- compare(d1, d2, unit)
- diff(d1, d2, unit)
- add(date, count, unit)
- format(date, type)
- quarter(date)
- timeZonePlaceName()
- utcOffset()
- utcToTimeZone(utcDate, offset)
- betweenTimeZones(utcDate, fromOffset, toOffset)
- timeZoneToUtc(date, offset)
- parseUtcOffset(desc)
- stringifyUtcOffset(offset)

以下为常用方法说明。

---

### toDate(input)

将输入转为 Date 对象。若传入 'HH:mm' 或 'HH:mm:ss'，会拼接当日日期。

---

### startOrEnd(date, type, boundary?)

返回指定粒度的起止时间。

- 参数

| 字段     | 类型                                                   | 说明                     |
| -------- | ------------------------------------------------------ | ------------------------ |
| type     | 'year'\|'quarter'\|'month'\|'week'\|'date'\|'datetime' | 粒度                     |
| boundary | 'start'\|'end'                                         | 起始或结束，默认 'start' |

---

### getWeekDates(currentDate, weekStart)

获取一周 7 天的日期数组。

- 参数：weekStart='Monday' 表示周一为一周开始，否则按周日。

---

### compare(d1, d2, unit)

按单位比较两个时间：返回 1/0/-1。

- unit：'year'|'quarter'|'month'|'week'|'date'|'hour'|'minute'|'second'|'partHourMinute'|'datetime'。

---

### diff(d1, d2, unit)

按单位计算差值（整数）。支持同 compare 的单位（除 week）。

---

### add(date, count, unit)

对时间做加减（count 可负）。unit 同 dayjs：'year'|'quarter'|'month'|'week'|'day'|'hour'|'minute'|'second'。

---

### format(date, type)

格式化日期。内置快捷：'year'|'quarter'|'month'|'date'|'datetime'|'time'|'week'，或自定义 dayjs 格式串。

---

### UTC/时区相关

- timeZonePlaceName(): 返回当前时区名（如 'Asia/Shanghai'）。
- utcOffset(): 返回当前时区相对 UTC 的偏移（分钟）。
- parseUtcOffset('UTC+08:00'): 解析偏移为分钟数。
- stringifyUtcOffset(offset): 偏移分钟转为 'UTC±HH:mm'。
- utcToTimeZone(utcDate, offset): UTC -> 指定时区时间。
- timeZoneToUtc(date, offset): 指定时区时间 -> UTC。
- betweenTimeZones(utcDate, fromOffset, toOffset): 在两个时区间做转换。

## 注意事项

1. 所有入参期望为 Date 对象（除 toDate/format 等），否则将返回空或默认值。
2. 使用前会自动注入 dayjs 插件（仅一次），无需手动初始化。
3. 周的起止使用 ISO 周（isoWeek）。

## Picker 组件示例

### 组合器（Combo）

```tsx
import React, { useEffect, useRef, useState } from "react";
import { Picker } from "seedsui-react";

export default () => {
  const pickerRef = useRef(null);
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setList([
        { id: "1", name: "1" },
        { id: "2", name: "2" },
        { id: "3", name: "3" },
      ]);
      setValue([{ id: "2", name: "2" }]);
    }, 1000);
  }, []);

  return (
    <Picker.Combo
      ref={pickerRef}
      allowClear
      placeholder="Please select"
      value={value}
      list={list}
      modalProps={{ safeArea: true, title: "标题", cancel: null, ok: "" }}
      onChange={setValue}
      onVisibleChange={(visible) => console.log("visible:", visible)}
    />
  );
};
```

### 弹窗（Modal）

```tsx
import React, { useEffect, useState } from "react";
import { Picker } from "seedsui-react";

export default () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setList([
        { id: "1", name: "1" },
        { id: "2", name: "2" },
      ]);
    }, 500);
  }, []);

  return (
    <Picker.Modal visible={true} value={[{ id: "1", name: "1" }]} list={list} />
  );
};
```

### 主体（Main）

```tsx
import React, { useState } from "react";
import { Picker } from "seedsui-react";

export default () => {
  const list = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
  ];
  const [value, setValue] = useState(null);

  return <Picker.Main value={value} list={list} onChange={setValue} />;
};
```

### 多列联动（二维数据）

```tsx
import React, { useState, useMemo } from "react";
import { Picker } from "seedsui-react";

// 第一列：省；第二列：市，根据省动态变化
const provinces = [
  { id: "js", name: "江苏" },
  { id: "zj", name: "浙江" },
];
const citiesMap = {
  js: [
    { id: "nj", name: "南京" },
    { id: "sz", name: "苏州" },
  ],
  zj: [
    { id: "hz", name: "杭州" },
    { id: "nb", name: "宁波" },
  ],
};

export default () => {
  const [value, setValue] = useState([
    { id: "js", name: "江苏" },
    { id: "nj", name: "南京" },
  ]);

  // 根据首列的选择，动态计算第二列候选
  const lists = useMemo(() => {
    const p = value?.[0]?.id || provinces[0].id;
    const cities = citiesMap[p] || [];
    return [provinces, cities];
  }, [value]);

  return (
    <Picker.Main
      value={value}
      list={lists}
      onChange={(newValue) => {
        // 若省份变化但第二列不在对应城市列表中，则自动修正第二列为第一项
        if (newValue?.[0]?.id !== value?.[0]?.id) {
          const candidateCities = citiesMap[newValue[0].id] || [];
          const city = candidateCities[0];
          setValue([newValue[0], city]);
        } else {
          setValue(newValue);
        }
      }}
    />
  );
};
```

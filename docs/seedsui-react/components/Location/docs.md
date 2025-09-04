## 何时使用

- 需要处理定位、地址选择、地址预览等与地图交互相关的场景。
- 需要在表单中录入或预览经纬度与地址文本，并可通过弹窗进行选择或预览。

## 组件结构

默认导出 `Location`，包含以下子组件：

- `Location.Combo` 定位/选择/预览的组合器（基于 `Input.Text` 显示，右侧含操作按钮）
- `Location.Modal` 包装的弹窗组件（内部使用 `Modal.SelectModal`）
- `Location.Main` 地图主体（`visible='choose'`/`'preview'`）

---

### Location.Combo

| 参数                   | 说明                                                 | 类型                                                                                  | 默认值            |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------- |
| type                   | 坐标类型                                             | `'gcj02' \| 'wgs84'`                                                                  | `'gcj02'`         |
| config                 | 地图/定位服务配置（透传至内部地图）                  | `object`                                                                              | `-`               |
| getAddress             | 逆地理解析函数（返回 Promise）                       | `(data)=>Promise`                                                                     | `Map.getAddress`  |
| getLocation            | 获取定位函数（返回 Promise）                         | `(opts)=>Promise`                                                                     | `Map.getLocation` |
| locationVisible        | 是否显示“定位”按钮                                   | `boolean`                                                                             | `true`            |
| autoLocation           | 是否自动定位                                         | `boolean`                                                                             | `false`           |
| chooseVisible          | 是否显示“选点”按钮                                   | `boolean`                                                                             | `false`           |
| previewVisible         | 是否显示“预览”按钮                                   | `boolean`                                                                             | `false`           |
| clickAction            | 点击整行触发动作                                     | `'location' \| 'choose' \| 'preview'`                                                 | `-`               |
| editable               | 是否允许编辑文本框                                   | `boolean`                                                                             | `false`           |
| disabled               | 是否禁用                                             | `boolean`                                                                             | `false`           |
| value                  | 值对象                                               | `{ longitude:number, latitude:number, value?:string, address?:string, type?:string }` | `-`               |
| portal                 | 弹窗挂载节点                                         | `HTMLElement`                                                                         | `document.body`   |
| modal                  | 自定义 Modal 组件                                    | `Component`                                                                           | `Location.Modal`  |
| modalProps             | 传递给 Modal 的属性（如 `mainProps`、`safeArea` 等） | `object`                                                                              | `-`               |
| onVisibleChange        | 组合器内部弹窗显隐回调                               | `(visible:string\|boolean)=>void`                                                     | `-`               |
| onLocationStatusChange | 定位状态变化回调（'-1'定位中，'0'失败，'1'成功）     | `(status:string)=>void`                                                               | `-`               |
| onChange               | 值变化回调                                           | `(value\|null)=>void`                                                                 | `-`               |
| onError                | 错误回调（定位/逆解析失败）                          | `(error)=>void`                                                                       | `-`               |

#### Ref（Combo）

| 方法        | 说明                                       |
| ----------- | ------------------------------------------ |
| comboDOM    | 组合器根节点（或内部 `Input.Text` 根节点） |
| getComboDOM | 获取组合器根节点                           |

---

### Location.Modal

弹窗容器，内部默认使用 `Modal.SelectModal` 与 `Location.Main`。

| 参数      | 说明         | 类型                                        | 默认值          |
| --------- | ------------ | ------------------------------------------- | --------------- |
| visible   | 显示类型     | `'choose' \| 'preview' \| boolean`          | `false`         |
| value     | 地址/坐标值  | `{ longitude, latitude, value?, address? }` | `-`             |
| main      | 主体组件     | `Component`                                 | `Location.Main` |
| mainProps | 主体组件属性 | `object`                                    | `-`             |

> 另外支持 `className/style/portal/maskClosable/onVisibleChange` 等通用弹窗属性。

---

### Location.Main

地图主体，根据 `visible` 渲染为选择或预览模式。

| 参数         | 说明                           | 类型                                        | 默认值            |
| ------------ | ------------------------------ | ------------------------------------------- | ----------------- |
| visible      | 显示类型                       | `'choose' \| 'preview'`                     | `'choose'`        |
| config       | 地图配置（如密钥、地图类型等） | `object`                                    | `-`               |
| autoLocation | 是否自动定位                   | `boolean`                                   | `true`            |
| getLocation  | 获取定位函数                   | `(opts)=>Promise`                           | `Map.getLocation` |
| getAddress   | 逆地理解析函数                 | `(data)=>Promise`                           | `Map.getAddress`  |
| value        | 值对象                         | `{ longitude, latitude, value?, address? }` | `-`               |
| onChange     | 值变化回调                     | `(value\|null)=>void`                       | `-`               |

#### Ref（Main）

| 方法                 | 说明               |
| -------------------- | ------------------ |
| mainDOM / getMainDOM | 主体根节点         |
| 其余地图实例方法     | 由内部地图组件透出 |

## 注意事项

1. `Location.Combo` 内部右侧提供“定位/预览/选点”按钮，是否展示由 `locationVisible/previewVisible/chooseVisible` 控制。
2. 当传入 `value` 仅包含经纬度时，组件会尝试调用 `getAddress` 进行逆解析补全地址。
3. 组件内部在必要时进行坐标系转换（`wgs84` 与 `gcj02`）。

### 坐标系与转换说明（wgs84 与 gcj02）

- `type` 用于声明与外部交互的坐标系：
  - `wgs84`：国际通用 GPS 坐标。
  - `gcj02`：国内常用火星坐标（高德、腾讯等）。
- 建议：
  - 若你的后端/存量数据为 `wgs84`，则 `Location.Combo` 的 `type` 设为 `wgs84`，并在 `config` 或 `getLocation/getAddress` 中完成到内部地图坐标的转换；
  - 若你的业务主要依赖国内互联网地图（gcj02），则统一设置为 `gcj02`，仅在与外部系统交互时转换为 `wgs84`。
- 转换入口：
  - 通过自定义 `getLocation`/`getAddress`，在函数内部完成坐标的转换与格式统一；
  - 也可在 `onChange` 中落库前就地转换，保证存储/传输坐标的一致性。
- 常见策略：在 UI 层统一使用 `gcj02` 提高对第三方地图 SDK 的兼容性；在网关/服务层做输入输出的坐标映射，降低前端切换地图供应商的成本。

## 何时使用

- 需要展示与上传图片/视频，支持预览、删除、重传与异步上传。
- 需要浏览器/原生能力预览、分页预览与安全区适配时。

## 组件结构

`Image` 组件及其静态成员：

- `Image` 主组件（带上传/预览能力）
- `Image.Mark` 照片标记层
- `Image.PreviewModal` 预览弹窗
- `Image.PreviewMain` 预览主体
- `Image.List` 仅渲染资源列表
- 静态方法：`Image.validateImageSrc`、`Image.validateListStatus`

### Image

| 参数           | 说明                                                                       | 类型                                                             | 默认值               |
| -------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------- |
| allowChoose    | 是否显示选择按钮                                                           | `boolean`                                                        | `false`              |
| allowClear     | 是否允许删除                                                               | `boolean`                                                        | `false`              |
| uploadPosition | 选择按钮位置                                                               | `'start' \| 'end'`                                               | `'end'`              |
| upload         | 自定义上传按钮内容（节点或函数）                                           | `ReactNode \| (opts)=>RN`                                        | `-`                  |
| uploading      | 自定义“上传中”覆盖层（节点或函数）                                         | `ReactNode \| (item)=>RN`                                        | `-`                  |
| preview        | 预览配置，透传给 PreviewModal/PreviewMain                                  | `object`                                                         | `-`                  |
| async          | 是否异步上传（选择后先入列，稍后手动触发上传）                             | `boolean`                                                        | `false`              |
| reUpload       | 上传失败是否允许重新上传                                                   | `boolean`                                                        | `true`               |
| count          | 最大资源数量限制                                                           | `number`                                                         | `-`                  |
| visibleCount   | 列表最多可见数量，超出以“+N”显示                                           | `number`                                                         | `-`                  |
| type           | 资源类型                                                                   | `'video' \| 'image'`                                             | `'image'`            |
| sourceType     | 选择来源                                                                   | `('album' \| 'camera')[]`                                        | `['album','camera']` |
| sizeType       | 图片尺寸类型                                                               | `('original' \| 'compressed')[]`                                 | `['compressed']`     |
| maxWidth       | 压缩时的最大宽度（像素）                                                   | `number`                                                         | `1279`（内部默认）   |
| list           | 资源列表                                                                   | `Array<{ thumb, src, path, status, children, ... }>`             | `[]`                 |
| onBeforeChoose | 选择前回调（返回 `false` 阻止）                                            | `(e)=>boolean\|Promise`                                          | `-`                  |
| onChoose       | 选择文件（非 file input）时回调，返回待入列的数组                          | `()=>Promise<Array>`                                             | `-`                  |
| onFileChange   | 使用 file input 选择时回调，返回待入列的数组                               | `({ fileURL, fileData })=>Promise<Array>`                        | `-`                  |
| onUpload       | 上传单个条目的回调，返回 serverItem 或错误字符串                           | `(item)=>Promise<object                              \| string>` | `-`                  |
| onChange       | 列表变化回调（新增/删除/上传完成/重传完成等）                              | `(newList, info)=>void`                                          | `-`                  |
| onPreview      | 打开预览前回调，返回 `'browser' \| 'nativeImage' \| 'nativeFile' \| false` | `(item, index)=>any`                                             | `-`                  |

#### Ref

| 方法              | 说明                            |
| ----------------- | ------------------------------- |
| rootDOM           | 获取根元素 DOM                  |
| getRootDOM        | 获取根元素 DOM                  |
| updateStatus      | 触发内部状态刷新                |
| chooseFile/choose | 手动触发选择（file 或原生能力） |
| uploadList        | 触发同步上传流程                |
| showLoading       | 显示 Loading 覆盖               |
| hideLoading       | 隐藏 Loading 覆盖               |
| setPreviewVisible | 设置预览显隐（浏览器预览模式）  |

---

### Image.PreviewModal

| 参数                                                   | 说明                       | 类型                      | 默认值  |
| ------------------------------------------------------ | -------------------------- | ------------------------- | ------- |
| visible                                                | 是否可见                   | `boolean`                 | `-`     |
| type                                                   | 资源类型                   | `'video' \| 'image'`      | `-`     |
| current                                                | 当前预览资源索引或资源 src | `number \| string`        | `-`     |
| modal                                                  | `'page'` 为页面级预览      | `string`                  | `-`     |
| portal                                                 | 渲染容器                   | `HTMLElement`             | `-`     |
| allowChoose                                            | 是否允许在预览中新增       | `boolean`                 | `false` |
| allowClear                                             | 是否允许在预览中删除       | `boolean`                 | `false` |
| count,sourceType,sizeType,maxWidth,list                | 同主组件                   | `-`                       | `-`     |
| onBeforeChoose,onChoose,onFileChange,onUpload,onChange | 同主组件                   | `-`                       | `-`     |
| onVisibleChange                                        | 预览显隐回调               | `(visible:boolean)=>void` | `-`     |
| modalProps,mainProps                                   | 透传各自容器属性           | `object`                  | `-`     |

---

### Image.List

仅渲染列表。

| 参数         | 说明         | 类型                      |
| ------------ | ------------ | ------------------------- |
| list         | 资源列表     | `Array`                   |
| uploading    | 上传中覆盖层 | `ReactNode \| (item)=>RN` |
| visibleCount | 最多可见数量 | `number`                  |
| allowClear   | 是否允许删除 | `boolean`                 |
| onChange     | 列表变化回调 | `(newList, info)=>void`   |
| onReUpload   | 触发某项重传 | `(item, index)=>void`     |
| onPreview    | 触发预览     | `(item, index)=>void`     |

---

### 静态方法

- `Image.validateImageSrc(src: string): Promise<boolean>` 校验图片地址有效性。
- `Image.validateListStatus(list: any[]): true | string` 检查列表是否存在未上传完成项。

## 注意事项

1. 同步上传模式下，选择完成即触发 `uploadList`；异步模式需自行调用 `uploadList`。
2. 预览 `type='video'` 时使用 `<VideoPlayer>` 进行播放，非视频则支持缩放。
3. 当 `count` 有限制且已满时，选择将被阻止并提示。

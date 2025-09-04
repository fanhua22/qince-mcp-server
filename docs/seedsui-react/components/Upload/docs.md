## 何时使用

- 需要上传图片/视频/文件，并在列表中展示上传中、失败、成功等状态时。
- 需要异步/同步上传、预览、删除、重新上传等完整流程时。

## 组件结构（index.js 导出）

- `Upload` 主组件（上传 + 列表）
- 静态成员：`Upload.supportTypes`、`Upload.validateListStatus`、`Upload.List`、`Upload.Button`、`Upload.Uploading`

## 列表项结构

```ts
interface UploadItem {
  name?: string
  src?: string // 预览或下载地址
  path?: string // 服务端路径
  status?: 'choose' | 'uploading' | 'fail' | 'success'
  localId?: string // 本地预览地址（未上传时）
  children?: React.ReactNode
}
```

## API

### Upload

| 参数           | 说明                                            | 类型                            | 默认值 |
| -------------- | ----------------------------------------------- | ------------------------------- | ------ |
| allowChoose    | 是否显示选择按钮                                | boolean                         | false  |
| allowClear     | 是否允许删除                                    | boolean                         | false  |
| uploadPosition | 上传按钮位置（列表前/后）                       | 'start' \| 'end'                | 'end'  |
| async          | 是否异步上传                                    | boolean                         | false  |
| reUpload       | 上传失败是否允许重新上传                        | boolean                         | true   |
| count          | 最大数量限制                                    | number                          | -      |
| extension      | 允许的扩展名/类别                               | string[]                        | -      |
| maxSize        | 最大大小（字节）                                | number                          | -      |
| list           | 列表数据                                        | UploadItem[]                    | []     |
| upload         | 自定义上传按钮节点/函数                         | ReactNode \| ((p)=>RN)          | -      |
| uploading      | 自定义“上传中”节点/函数                         | ReactNode \| ((item)=>RN)       | -      |
| onBeforeChoose | 选择前拦截                                      | (e)=>boolean\|Promise           | -      |
| onChoose       | 自定义选择（非 file input）返回待入列数组       | ()=>Promise<UploadItem[]>       | -      |
| onFileChange   | file input 选择回调，返回待入列数组             | (e)=>Promise<UploadItem[]>      | -      |
| onUpload       | 上传单项回调，返回 serverItem 或错误字符串      | (item)=>Promise<object\|string> | -      |
| onChange       | 列表变化回调                                    | (newList, info)=>void           | -      |
| onPreview      | 预览前拦截：返回 'nativeFile'\|'browser'\|false | (item,index)=>any               | -      |

#### Ref（Upload）

| 方法                    | 说明              |
| ----------------------- | ----------------- |
| rootDOM                 | 根元素            |
| getRootDOM              | 获取根元素        |
| chooseFile/choose       | 手动触发选择      |
| uploadList              | 触发同步上传流程  |
| showLoading/hideLoading | 显示/隐藏加载状态 |

### 工具函数

- `Upload.supportTypes(src, types)`：校验文件类型
- `Upload.validateListStatus(list)`：校验是否存在未完成上传项

## 注意事项

1. 同步上传模式下，入列即触发 `uploadList`；异步模式需手动调用。
2. 受限于浏览器安全策略，`onFileChange` 返回的对象里需要包含 `fileData` 以供上传。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/Upload/demos/FileUpload/index.jsx`。

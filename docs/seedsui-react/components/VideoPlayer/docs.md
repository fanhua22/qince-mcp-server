## 何时使用

- 需要在页面中播放视频，支持 H5 播放器、控制栏、封面与全屏等能力时。

## 组件结构

- `VideoPlayer` 视频播放器

## API

### VideoPlayer

| 参数      | 说明                                 | 类型          | 默认值 |
| --------- | ------------------------------------ | ------------- | ------ |
| portal    | 渲染容器（不传则渲染在当前树）       | HTMLElement   | -      |
| poster    | 封面图                               | string        | ''     |
| src       | 视频地址（必填）                     | string        | -      |
| autoPlay  | 是否自动播放                         | boolean       | true   |
| isLive    | 是否直播                             | boolean       | -      |
| params    | 透传底层播放器的扩展参数             | object        | -      |
| header    | 顶部自定义区域（显示于控制栏可见时） | ReactNode     | -      |
| onError   | 播放器加载/初始化异常回调            | (e)=>void     | -      |
| className | 自定义类名                           | string        | -      |
| style     | 自定义样式                           | CSSProperties | -      |

#### Ref

| 方法       | 说明   |
| ---------- | ------ |
| play       | 播放   |
| pause      | 暂停   |
| rootDOM    | 根元素 |
| getRootDOM | 获取根 |

## 注意事项

1. 组件内部按需加载阿里播放器 SDK，需网络可访问对应 CDN。
2. `src` 为空会触发错误回调并在控制台输出警告。

## 示例

更多请参考同目录的 `examples.md` 与 `src/components/VideoPlayer/demos/demo1.jsx`。

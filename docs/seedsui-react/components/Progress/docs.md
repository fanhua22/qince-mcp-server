## 何时使用

- 需要展示任务或流程的完成进度时。
- 需要条形或环形两种样式，支持动画、不同颜色与尺寸时。

## 组件结构

- `Progress.Bar` 条形进度条
- `Progress.Circle` 环形进度条

## API

### Progress.Bar

| 参数      | 说明                        | 类型          | 默认值 |
| --------- | --------------------------- | ------------- | ------ |
| percent   | 进度百分比（0-100）         | number        | 0      |
| className | 自定义类名                  | string        | -      |
| style     | 自定义样式（支持 CSS 变量） | CSSProperties | -      |

支持的 CSS 变量：

| 变量名                             | 说明     | 默认值  |
| ---------------------------------- | -------- | ------- |
| --seed-progress-fill-color         | 进度颜色 | #1890ff |
| --seed-progress-bg-color           | 背景色   | #f0f0f0 |
| --seed-progress-track-width        | 轨道高度 | 8px     |
| --seed-progress-animation-duration | 动画时长 | 0.3s    |
| --seed-progress-animation-timing   | 动画曲线 | ease    |

预设颜色类名：`primary`、`link`、`warning`、`danger`、`success`。

#### Ref（Bar）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

---

### Progress.Circle

| 参数      | 说明                          | 类型          | 默认值 |
| --------- | ----------------------------- | ------------- | ------ |
| percent   | 进度百分比（0-100）           | number        | 0      |
| size      | 组件尺寸（宽高一致，单位 px） | number        | 50     |
| className | 自定义类名                    | string        | -      |
| style     | 自定义样式（支持 CSS 变量）   | CSSProperties | -      |
| children  | 内容（会在环形中居中显示）    | ReactNode     | -      |

支持的 CSS 变量：

| 变量名                             | 说明         | 默认值  |
| ---------------------------------- | ------------ | ------- |
| --seed-progress-fill-color         | 进度颜色     | #1890ff |
| --seed-progress-bg-color           | 背景色       | #f0f0f0 |
| --seed-progress-animation-duration | 动画时长     | 0.3s    |
| --seed-progress-animation-timing   | 动画曲线     | ease    |
| --seed-progress-track-width        | 轨道宽度(px) | 4       |

预设颜色类名：`primary`、`link`、`warning`、`danger`、`success`。

#### Ref（Circle）

| 方法       | 说明           |
| ---------- | -------------- |
| rootDOM    | 获取根元素 DOM |
| getRootDOM | 获取根元素 DOM |

## 注意事项

1. `percent` 将被限制在 0-100 范围内。
2. 动画可通过 CSS 变量控制持续时间与缓动曲线。
3. 建议使用 seedsui 提供的 CSS 变量控制颜色与间距，符合主题规范。

## 示例

更多请参考同目录的 `examples.md`。

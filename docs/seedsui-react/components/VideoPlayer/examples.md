## VideoPlayer 组件示例

### 基础播放与控制

```tsx
import React, { useRef } from 'react'
import { Layout, VideoPlayer, Button } from 'seedsui-react'

export default () => {
  const videoPlayerRef = useRef(null)
  return (
    <Layout className="full">
      <Layout.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'}
          src={'https://player.alicdn.com/video/aliyunmedia.mp4'}
          autoPlay={false}
          header={
            <div
              className="videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          }
        />
      </Layout.Main>
      <Layout.Footer>
        <Button onClick={() => videoPlayerRef.current.play()}>Play</Button>
        <Button onClick={() => videoPlayerRef.current.pause()}>Pause</Button>
      </Layout.Footer>
    </Layout>
  )
}
```

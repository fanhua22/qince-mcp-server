## Image 组件示例

### 照片：选择、上传与预览

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Divider, HistoryUtil, Toast, Button, Image, Input } from 'seedsui-react'
import uploadItem from 'src/components/Image/demos/Image/browser/uploadItem'

export default () => {
  const imageUploaderRef = useRef(null)
  const [list, setList] = useState([
    {
      id: '1',
      thumb: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      status: 'fail'
    }
  ])

  async function handleAsyncUpload() {
    const isOK = Image.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      const result = await imageUploaderRef.current.uploadList()
      console.log('上传结果：', result)
    }
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Default Image</Divider>
        <Image
          ref={imageUploaderRef}
          allowClear
          allowChoose
          uploadPosition="start"
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          count={9}
          onFileChange={async ({ fileURL, fileData }) => {
            // 待传文件
            return [
              {
                status: 'choose',
                localId: fileURL,
                fileData,
                thumb: fileURL,
                src: fileURL,
                path: ''
              }
            ]
          }}
          onChange={(newList) => setList(newList)}
          onUpload={uploadItem}
        />

        <Divider>Preview Operate</Divider>
        <Image
          ref={imageUploaderRef}
          upload={<div style={{ width: '100%', height: '100%', backgroundColor: 'ref' }}>1</div>}
          allowChoose={list?.length ? false : true}
          visibleCount={1}
          style={{ '--cell-width': '32px', '--cell-height': '32px', '--cell-radius': '6px' }}
          preview={{ modal: 'page', allowChoose: true, allowClear: true }}
          onPreview={(item, index) => {
            HistoryUtil.navigate('imagePreview=1', {
              onBack: () => imageUploaderRef.current?.setPreviewVisible?.(null)
            })
            return 'browser'
          }}
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          count={9}
          onFileChange={async ({ fileURL, fileData }) => {
            return [
              {
                status: 'choose',
                localId: fileURL,
                fileData,
                thumb: fileURL,
                src: fileURL,
                path: ''
              }
            ]
          }}
          onChange={(newList) => setList(newList)}
          onUpload={uploadItem}
        />
      </Layout.Main>
      <Layout.Footer>
        <Button className="flex primary" onClick={handleAsyncUpload}>
          Sync Upload
        </Button>
      </Layout.Footer>
    </Layout>
  )
}
```

### 视频：基础预览

```tsx
import React, { useRef, useState } from 'react'
import { Image } from 'seedsui-react'

export default () => {
  const videosRef = useRef(null)
  const [list, setList] = useState([
    {
      id: '1',
      thumb: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
      status: 'success'
    }
  ])

  return (
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Image ref={videosRef} type="video" list={list} />
    </div>
  )
}
```

## Upload 组件示例

### 默认上传（异步演示）

```tsx
import React, { useEffect, useState, useRef } from 'react'
import { Toast, Layout, Divider, Button, Upload, Bridge } from 'seedsui-react'
import uploadItem from 'src/components/Upload/demos/FileUpload/browser/uploadItem'

export default () => {
  const uploadRef = useRef(null)
  const [list, setList] = useState([
    {
      name: '1',
      src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      status: 'fail'
    },
    { name: '2', src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png' }
  ])

  useEffect(() => {
    Bridge.ready(() => {})
  }, [])

  async function handleAsyncUpload() {
    let isOK = Upload.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      let result = await uploadRef.current.uploadList()
      console.log('上传结果：', result)
    }
  }

  return (
    <Layout className="full bg-white">
      <Layout.Main>
        <Divider>Default Upload</Divider>
        <Upload
          ref={uploadRef}
          allowChoose
          allowClear
          uploadPosition="start"
          list={list}
          count={9}
          onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
            // 待传文件
            return [
              { status: 'choose', name: fileName, size: fileSize, src: fileURL, path: '', fileData }
            ]
          }}
          onChange={setList}
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

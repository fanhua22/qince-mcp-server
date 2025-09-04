## Form 组件示例

### 基本布局与校验（horizontal & vertical）

```tsx
import React from 'react'
import { Layout, Form, Divider, Select, Input, FooterBar, LocaleUtil, Button } from 'seedsui-react'

export default () => {
  const [form] = Form.useForm()

  async function handleSave() {
    form
      .validateFields()
      .then(() => {
        console.log('Right!')
      })
      .catch((err) => {
        console.log('Wrong!', err)
      })
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Horizontal</Divider>
        <Form
          layout="horizontal"
          form={form}
          initialValues={{ input: '123' }}
          labelCol={{ span: 10 }}
          mainCol={{ span: 14 }}
        >
          <Form.Item
            name="input"
            label={LocaleUtil.locale('单行文本框')}
            help="Help info"
            extra={<div>Main Extra Info</div>}
            inputExtra={<div>Input Extra Info</div>}
            rules={[{ required: true, message: LocaleUtil.locale('单行文本框不能为空') }]}
          >
            <Input.Text placeholder={LocaleUtil.locale('请输入')} maxLength={50} />
          </Form.Item>

          <Form.Item name="select" label={LocaleUtil.locale('下拉选择框')}>
            <Select.Combo
              placeholder={LocaleUtil.locale('请选择')}
              list={[
                { id: '1', name: '选项1' },
                { id: '2', name: '选项2' }
              ]}
              clear={({ clearable, triggerClear }) =>
                clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
              }
            />
          </Form.Item>

          <Form.Item name="textarea" label={LocaleUtil.locale('多行文本框')}>
            <Input.AutoFit placeholder={LocaleUtil.locale('请输入')} />
          </Form.Item>
        </Form>

        <Divider>Vertical</Divider>
        <Form layout="vertical" form={form}>
          <Form.Item
            name="input2"
            label={LocaleUtil.locale('单行文本框')}
            help="提示信息"
            rules={[{ required: true, message: LocaleUtil.locale('单行文本框不能为空') }]}
          >
            <Input.Text placeholder={LocaleUtil.locale('请输入')} maxLength={50} />
          </Form.Item>

          <Form.Item name="select2" label={LocaleUtil.locale('下拉选择框')}>
            <Select.Combo
              placeholder={LocaleUtil.locale('请选择')}
              list={[
                { id: '1', name: '选项1' },
                { id: '2', name: '选项2' }
              ]}
              clear={({ clearable, triggerClear }) =>
                clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
              }
            />
          </Form.Item>

          <Form.Item name="textarea2" label={LocaleUtil.locale('多行文本框')}>
            <Input.AutoFit placeholder={LocaleUtil.locale('请输入')} />
          </Form.Item>
        </Form>
      </Layout.Main>

      <Layout.Footer className="listpicker-footer border-t">
        <FooterBar>
          <FooterBar.Button className="primary" onClick={handleSave}>
            {LocaleUtil.locale('确定')}
          </FooterBar.Button>
        </FooterBar>
      </Layout.Footer>
    </Layout>
  )
}
```

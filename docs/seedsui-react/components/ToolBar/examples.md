## ToolBar 组件示例

### 常用组合：Dropdown / DateRange / List / Search / Button / Filter

```tsx
import React, { useRef, useState } from 'react'
import { Layout, Divider, ToolBar, Space, Icon } from 'seedsui-react'

export default () => {
  const dropdownRef = useRef(null)
  const [mainDOM, setMainDOM] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [item, setItem] = useState(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)

  function getDropdownModalNode({ close } = {}) {
    return (
      <div>
        <div style={{ height: '300px' }}>Modal Content</div>
        <div style={{ padding: 12, textAlign: 'right' }}>
          <span
            onClick={() => (typeof close === 'function' ? close() : dropdownRef.current?.close?.())}
          >
            关闭
          </span>
        </div>
      </div>
    )
  }

  return (
    <Layout className="full">
      <Layout.Main
        ref={(current) => {
          if (!current?.rootDOM) return
          setMainDOM(current.rootDOM)
        }}
      >
        <Divider>Dropdown / DateRange / List</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Dropdown title="Dropdown" ref={dropdownRef} portal={mainDOM}>
              {getDropdownModalNode({})}
            </ToolBar.Dropdown>
            <ToolBar.DateRange
              portal={mainDOM}
              title={!dateRange ? 'DateRange' : undefined}
              value={dateRange}
              onChange={setDateRange}
            />
            <ToolBar.List
              portal={mainDOM}
              title={!item ? 'List' : undefined}
              value={item}
              onChange={setItem}
              list={[
                { id: '1', name: 'Option1' },
                { id: '2', name: 'Option2' }
              ]}
            />
          </ToolBar>
        </div>

        <Divider>Search / Button / Filter</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Search value={search} onChange={setSearch} />
            <Space.Compact>
              <ToolBar.Button shape="square">
                <Icon className="seeds-icons seeds-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter variant="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
          </ToolBar>
        </div>

        <Divider>Search Active</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Search value={search} readOnly onClick={() => setSearchActive(true)} />
            {searchActive && (
              <ToolBar.SearchActive
                value={search}
                onSearch={(keyword) => {
                  setSearch(keyword)
                  setSearchActive(false)
                }}
                onBlur={() => setSearchActive(false)}
              />
            )}
          </ToolBar>
        </div>
      </Layout.Main>
    </Layout>
  )
}
```

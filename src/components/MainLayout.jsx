import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Button} from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './../App.css'

const MainLayout = () => {

  const { Header, Sider, Content } = Layout
  
  const [collapsed,setCollapsed] = useState(false)
  
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return<Layout>
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className='logo' />      
    </Sider>
    <Layout className='site-layout'>
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <Button>Log Out</Button>
    </Header>
    <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
}
export default MainLayout

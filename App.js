import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css'
import Patientrecord from './components/Patient__record';
import './components/Legend';
import Dashboard from './components/Dashboard';

const App = () => {
const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();
const [dashHidden, sethidden] = useState(true);
const [patientHidden, setpatientHidden] = useState(false);
  
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const items2 = [
  {
    key: 1,
    label: 'Patient',
    children: [{
      subkey: "1-1",
      label: "patient dashboard",
    },
    {
      subkey: "1-2",
      label: "Patient details",
    }]
  },
  {
    key: 2,
    label: 'doctor',
    children: [{
      subkey: "2-1",
      label: 'doctors dashboard',
    },
    {
      subkey: "2-2",
      label: 'doctors details',
    }]
  }
];

const dashboard1 = () => { 
  return (navigate('Legend'));
}

  return(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} trigger={null} collapsed={collapsed} collapsible className="site-layout-background">
        <Button onClick={() => {sethidden(!dashHidden); setpatientHidden(true)}} style={{
          border: 0,
          width: '100%',
        }}>Dashboard</Button>
        <Button onClick={() => {sethidden(true); setpatientHidden(false)}} style={{
          border: 0,
          width: '100%',
        }}>Patient details</Button>
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <div style={{marginRight: 4, color: '#000'}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          </div>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {!patientHidden? <Patientrecord/>: null}
          {!dashHidden? <Dashboard/>: null}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
}

export default App;
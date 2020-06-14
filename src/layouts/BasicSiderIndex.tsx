import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, HashRouter as Router } from 'react-router-dom'
import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import workbench from '../Routers/path/workbench'
import MainSider from '../components/MainSider'
import './BasicSiderIndex.scss'


const { Sider, Header, Content } = Layout;

function BasicSiderIndex(props: any) {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        console.log(workbench)
    }, [])

    return (
        <div className='app-basicsider-layouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Sider trigger={null} collapsible collapsed={collapsed} width={200} style={{ height: document.body.clientHeight }}>
                    <div className="app-logo">
                        <Link to='/workbench' className='logo'>
                            <img src={require('../assets/images/logo.svg')} alt="" />
                            {!collapsed && <div className='text'>犇牛科技</div>}
                        </Link>
                    </div>
                    <MainSider isCollapsed={collapsed} background='#2f4050' />
                </Sider>
                <Layout>
                    <Header className='app-header'>
                        <div className='app-header-left'>
                            <Button 
                                size='middle' 
                                type='primary' 
                                onClick={() => setCollapsed(!collapsed)}
                                icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: 16 }} /> : <MenuFoldOutlined style={{ fontSize: 16 }} />} />
                        </div>
                        <div style={{ flex: 1 }}></div>
                        <div className='app-header-right'>
                            
                        </div>
                    </Header>
                    <Content style={{ padding: '0 20px' }}>
                        <React.Fragment>
                            <Router>
                                <Switch>
                                    {workbench.children.map((route:any) => {
                                        return (
                                            route.children ? (
                                                route.children.map((ele:any) => (
                                                    <Route 
                                                        exact
                                                        key={ele.path}
                                                        path={ele.path} 
                                                        component={ele.component} />
                                                ))
                                            ) : (
                                                <Route 
                                                    exact
                                                    key={route.path}
                                                    path={route.path} 
                                                    component={route.component} />
                                            )
                                        )
                                    })}
                                </Switch>
                            </Router>
                        </React.Fragment>
                    </Content>
                    {/* <Footer style={{ textAlign:'center', background:props.background||'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        </div>
    )
}

export default BasicSiderIndex
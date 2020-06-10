import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, Link, useHistory } from 'react-router-dom'
import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import MainSider from '../components/MainSider'
// import workbench from '../Routers/path/workbench'
import './BasicSiderIndex.scss'


const { Sider, Header, Content } = Layout;

function BasicSiderIndex(props: any) {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const { initPath } = props;

        (history.location.pathname !== initPath) && history.push(initPath);
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
                        {props.children}
                        {/* <Switch>
                            <Redirect from='/workbench' to='/workbench/dashboard' exact />
                            {workbench.map((route:any) => {
                                return route.children ? route.children.map((ele:any) => (
                                            <Route 
                                                key={ele.type} 
                                                path={ele.path}
                                                component={ele.component}
                                            />
                                        )): <Route 
                                            key={route.type} 
                                            path={route.path}
                                            component={route.component}
                                        />
                            })}
                        </Switch> */}
                    </Content>
                    {/* <Footer style={{ textAlign:'center', background:props.background||'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        </div>
    )
}

export default BasicSiderIndex
import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import BasicSider from '../components/BasicSider'
import AsyncLoad from '../Routers/AsyncLoad'
import routes from '../Routers/routes'
import './BasicSiderIndex.scss'


// 工作台
const WorkbenchUser = AsyncLoad({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Workbench/User/User')
})

const WorkbenchDashboard = AsyncLoad({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Workbench/Dashboard/Dashboard')
})

const { Sider, Header, Content } = Layout;

function BasicSiderIndex(props: any) {
    const [collapsed, setCollapsed] = useState(false);

    // 获取工作台路由
    const RouteWorkbench: any = () => {
        let route = routes.find((v: any) => {
            return v.type === 'workbench';
        })

        return route ? route.routes : [];
    }

    useEffect(() => {
        console.log(RouteWorkbench())

    }, [])

    return (
        <div className='app-basicsider-layouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Sider trigger={null} collapsible collapsed={collapsed} width={256} style={{ height: document.body.clientHeight, background: '#001529' }}>
                    <div className="app-logo">
                        <Link to='/workbench' className='logo'>
                            {/* <img src={require('../assets/images/logo.svg')} alt="" /> */}
                            <img src='http://qdimg.qizhuyun.com/20/05/07/531a5cdcf9b4ef729ac31fc936da86e8.png' alt='' />
                            {!collapsed && <h1>Ant Design Pro</h1>}
                        </Link>
                    </div>
                    <BasicSider isCollapsed={collapsed} />
                </Sider>
                <Layout>
                    <Header className='app-header' style={{ background: '#fff' }}>
                        <div className='app-header-left'>
                            <span onClick={() => setCollapsed(!collapsed)}>
                                {collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} />}
                            </span>
                        </div>
                        <div style={{ flex: 1 }}></div>
                        <div className='app-header-right'>

                        </div>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Switch>
                            <Redirect from='/workbench' to='/workbench/dashboard' exact />
                            <Route path="/workbench/dashboard" component={WorkbenchDashboard} />
                            <Route path="/workbench/user" component={WorkbenchUser} />
                            {/* <PrivateRoute isAuthenticated={logged} component={CustomHome} /> */}
                        </Switch>
                    </Content>
                    {/* <Footer style={{ textAlign:'center', background:props.background||'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        </div>
    )
}

export default BasicSiderIndex
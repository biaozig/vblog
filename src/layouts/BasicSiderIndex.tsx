import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'

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

const { Sider, Content } = Layout;

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
        <div className='app-basiclayouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Sider width={200} style={{ height: document.body.clientHeight, background: '#001529' }}>
                    <BasicSider />
                </Sider>
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
        </div>
    )
}

export default BasicSiderIndex
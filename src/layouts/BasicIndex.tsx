import React, { useEffect } from 'react'
import { useHistory, Route, Redirect, Switch } from 'react-router-dom'
import { Layout } from 'antd'

// import Error404 from '../pages/Error/Error404'
// import MarkDown from '../pages/Platform/MarkDown/MarkDown'
// import AccountForgot from '../pages/Platform/Account/Forgot' // 忘记密码
// import AccountCenter from '../pages/Platform/Account/Center' // 个人中心
// import AccountProfile from '../pages/Platform/Account/Profile' // 个人资料
// import AccountRegister from '../pages/Platform/Account/Register' // 注册账号

import AccountProfile from '../pages/Platform/Account/Profile'
import MainHeader from '../components/MainHeader'
import AsyncLoad from '../Routers/AsyncLoad'
import platformRoutes from '../Routers/path/platform'
import './BasicIndex.scss'

const { Header, Content, Footer } = Layout;


function BasicIndex(props: any) {

    useEffect(() => { }, [])

    return (
        <div className='app-basiclayouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Header style={{ position: 'fixed', zIndex: 999, width: '100%', background: '#fff' }}>
                    <MainHeader />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Switch>
                        <Redirect from='/' to='/article' exact /> 
                        {platformRoutes.map((route:any) => (
                            <Route 
                                exact
                                key={route.type}
                                path={route.path} 
                                component={route.component} 
                            />
                        ))}
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center', background: props.background || 'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default BasicIndex
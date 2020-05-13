import React, { useEffect } from 'react'
import { useHistory, Route, Redirect, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'

// import Error404 from '../pages/Error/Error404'
// import MarkDown from '../pages/Platform/MarkDown/MarkDown'
// import AccountForgot from '../pages/Platform/Account/Forgot' // 忘记密码
// import AccountCenter from '../pages/Platform/Account/Center' // 个人中心
// import AccountProfile from '../pages/Platform/Account/Profile' // 个人资料
// import AccountRegister from '../pages/Platform/Account/Register' // 注册账号

import AccountProfile from '../pages/Platform/Account/Profile'
import BasicHeader from '../components/BasicHeader'
import AsyncLoad from '../Routers/AsyncLoad'
import routers from '../Routers/routes'
import './BasicIndex.scss'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Article = AsyncLoad({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Article/List')
})

const ArticleDetail = AsyncLoad({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Article/Detail')
})

function BasicIndex(props: any) {
    

    // 获取路由
    const filterRoutes = (type: string) => {
        let route = routers.find((v: any) => { return v.type === type });

        console.log(route)
        return route ? route.routes : [];
    }

    useEffect(() => {
        console.log(filterRoutes('platform'))

    }, [])

    return (
        <div className='app-basiclayouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Header style={{ position: 'fixed', zIndex: 999, width: '100%', background: '#fff' }}>
                    <BasicHeader />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Switch>
                        <Route path="/" component={Article} exact />
                        <Route path="/:id/info" component={ArticleDetail} exact />
                        <Route path="/account/profile" component={AccountProfile} />
                        {/* <PrivateRoute isAuthenticated={logged} component={CustomHome} /> */}
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center', background: props.background || 'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default BasicIndex
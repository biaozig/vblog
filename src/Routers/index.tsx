import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// import Layout from './Layout'
import BasicIndex from '../layouts/BasicIndex'
import Login from '../pages/Platform/Account/Login'


// 配置路由
function AppRouter(props: any) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route component={BasicIndex} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
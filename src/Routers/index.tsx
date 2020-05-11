import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import AuthRouter from './AuthRouter'
import Layout from '../layouts'

import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Account/Login'


// 配置路由
function AppRouter() {

    return (
        <div className='app-router'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/login' component={Login} exact />
                    <Route path='/detail/:id' component={Detail} exact />
                    <AuthRouter path="/" component={Layout} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
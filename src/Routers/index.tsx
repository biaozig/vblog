import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


// import Layout from '../layouts'
import AuthRouter from './AuthRouter'
import BlockRouter from './BlockRouter'
import BasicIndex from '../layouts/BasicIndex'
import BasicSiderIndex from '../layouts/BasicSiderIndex'

import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/platform/Account/Login'


// 配置路由
function AppRouter() {

    return (
        <div className='app-router'>
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/' component={Home} exact /> */}
                    <Route path='/login' component={Login} exact />
                    <Route path='/detail/:id' component={Detail} exact />

                    {/* <BlockRouter path='/platform' layout={BasicIndex} />
                    <BlockRouter path='/workbench' layout={BasicSiderIndex} /> */}

                    <AuthRouter path='/' component={BasicIndex} exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
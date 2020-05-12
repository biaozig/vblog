import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'


import Layout from '../layouts'
import AuthRouter from './AuthRouter'
import BlockRouter from './BlockRouter'
import BasicIndex from '../layouts/BasicIndex'
import BasicSiderIndex from '../layouts/BasicSiderIndex'

import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Platform/Account/Login'


// 配置路由
function AppRouter() {

    return (
        <div className='app-router'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/login' component={Login} exact />
                    <Route path='/:id/info' component={Detail} exact />

                    <BlockRouter path='/platform' layout={BasicIndex} />
                    <BlockRouter path='/workbench' layout={BasicSiderIndex} />

                    {/* <BasicIndex>
                        <Route path='/:id/detail/1' component={Detail} exact />
                        <Route path='/:id/detail/2' component={Detail} exact />
                    </BasicIndex>

                    <BasicSiderIndex>
                        <Route path='/:id/detail/3' component={Detail} exact />
                        <Route path='/:id/detail/4' component={Detail} exact />
                    </BasicSiderIndex> */}
                    {/* <BlockRouter path='/platform' layout={BasicIndex} />
                    <BlockRouter path='/workbench' layout={BasicSiderIndex} /> */}

                    {/* <AuthRouter path='/' component={BasicIndex} exact /> */}
                    {/* <AuthRouter component={Layout} exact /> */}
                    <Redirect to="/error/404" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Found from '../pages/Found/Found'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Account/Login'
import NotFound from '../pages/NotFound/404'
import MarkDown from '../pages/MarkDown/MarkDown'
import AccountCenter from '../pages/Account/Center'
import AccountProfile from '../pages/Account/Profile'


// 配置路由
function AppRouter () {

    return (
        <div className='app-router'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/404' component={NotFound} />
                    <Route path='/login' component={Login} exact/>
                    <Route path='/detail/:id' component={Detail} exact/>
                    <Route path='/markdown' component={MarkDown} />
                    <Route path='/account' component={AccountCenter} exact/>
                    <Route path='/account/profile' component={AccountProfile} exact/>

                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
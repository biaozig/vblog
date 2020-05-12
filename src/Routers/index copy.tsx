import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import AuthRouter from './AuthRouter'

import Home from '../pages/Home/Home'
// import Found from '../pages/Found/Found'
import Detail from '../pages/Detail/Detail'
import Login from '../pages/platform/Account/Login'
import NotFound from '../pages/Error/Error404'
import MarkDown from '../pages/platform/MarkDown/MarkDown'
import AccountCenter from '../pages/platform/Account/Center'
import AccountProfile from '../pages/platform/Account/Profile'

// 工作台
import WorkbenchUser from '../pages/workbench/User/User'
import WorkbenchDashboard from '../pages/workbench/Dashboard/Dashboard'


// 配置路由
function AppRouter() {

    return (
        <div className='app-router'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/404' component={NotFound} />
                    <Route path='/login' component={Login} exact />
                    <Route path='/detail/:id' component={Detail} exact />
                    <Route path='/markdown' component={MarkDown} />
                    <Route path='/account' component={AccountCenter} exact />
                    <Route path='/account/profile' component={AccountProfile} exact />

                    <Route path='/workspace/user' component={WorkbenchUser} exact />
                    <Route path='/workspace/dashboard' component={WorkbenchDashboard} exact />

                    {/* <AuthRouter path="/" component={Layout} /> */}

                    {/* <Redirect to="/404" /> */}
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/404' component={NotFound} />
                        <Route path='/login/111' component={Login} exact />
                        <Route path='/detail/:id' component={Detail} exact />
                        <Route path='/markdown' component={MarkDown} />
                        <Route path='/account' component={AccountCenter} exact />
                        <Route path='/account/profile' component={AccountProfile} exact />

                        <Route path='/workspace/user' component={WorkbenchUser} exact />
                        <Route path='/workspace/dashboard' component={WorkbenchDashboard} exact />

                        {/* <AuthRouter path="/" component={Layout} /> */}

                        <Redirect to="/404" />
                    </Switch>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
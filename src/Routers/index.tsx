import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Layout from './Layout'


// 配置路由
function AppRouter(props:any) {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Layout} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
import React, { } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../pages/Platform/Account/Login'
import BasicIndex from '../layouts/BasicIndex'
import BlockRouter from './BlockRouter'
import PrivateRoute from './PrivateRoute'
import BasicSiderIndex from '../layouts/BasicSiderIndex'


function LayoutRoute ({logged}:any) {

    return (
        <Switch>
            <Route path='/home' component={Login} />
            <Route path='/login' component={Login} />

            {/* 平台 */}
            {/* <BlockRouter component={BasicIndex} /> */}
            {/* 工作台 */}
            <PrivateRoute isAuthenticated={logged || true} component={BasicSiderIndex} />
        </Switch>
    )

}

export default LayoutRoute
import React, { } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../pages/Platform/Account/Login'

// import BasicLayout from '../layouts'
import BasicIndex from '../layouts/BasicIndex'
// import BlockRoute from './BlockRoute'
import PrivateRoute from './PrivateRoute'
import BasicSiderIndex from '../layouts/BasicSiderIndex'


function LayoutRoute({ logged }: any) { 

    return (
        <Switch>
            <Route path='/login' component={Login} />
            {/* 平台 */}
            {/* <BlockRoute component={BlockRoute} /> */}
            {/* 工作台 */}
            <PrivateRoute isAuthenticated={logged || true} component={BasicSiderIndex} />
        </Switch>
    )

}

export default LayoutRoute
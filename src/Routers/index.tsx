import React, { useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Layout from './Layout'
import PrivateRoute from './PrivateRoute'
import BasicIndex from '../layouts/BasicIndex'
import BasicSiderIndex from '../layouts/BasicSiderIndex'
import Login from '../pages/Platform/Account/Login';



// 配置路由
function AppRouter({ logged }:{ logged?:boolean }) {
    // const [bgColor, setBgColor] = useStore();
    useEffect(() => {

        // console.log(bgColor)
    })

    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route component={Layout} />
                {/* <Route path='/BasicIndex' component={() => (
                    <BasicIndex>
                        <Route path='/BasicIndex/login1' component={Login} />
                        <Route path='/BasicIndex/login2' component={Login} />
                        <Route path='/BasicIndex/login3' component={Login} />
                    </BasicIndex>
                )} />
                <Route path='/BasicSiderIndex' component={() =>(
                    <BasicSiderIndex>
                        <Route path='/BasicSiderIndex/login1' component={Login} />
                        <Route path='/BasicSiderIndex/login2' component={Login} />
                        <Route path='/BasicSiderIndex/login3' component={Login} />
                    </BasicSiderIndex>
                )} /> */}
                {/* <Route component={BasicIndex} exact /> */}
                {/* <PrivateRoute isAuthenticated={logged || true} component={BasicIndex} /> */}
            </Switch>
        </Router>
    )
}

export default AppRouter
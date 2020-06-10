import React, { useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

// import Layout from './Layout'
import PrivateRoute from './PrivateRoute'
import BasicIndex from '../layouts/BasicIndex'
import Login from '../pages/Platform/Account/Login'


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
                {/* <Route component={BasicIndex} exact /> */}
                <PrivateRoute isAuthenticated={logged || true} component={BasicIndex} />
            </Switch>
        </Router>
    )
}

export default AppRouter
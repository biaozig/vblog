import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Routes from '../Routers/routes'


// 路由
function BasicLayout() {
    useEffect(() => {
        console.log(Routes)
        // document.title = `You clicked layouts times`;
    }, [])

    return (
        <Switch>
            {Routes.map((ele: any) => (
                <Route
                    exact
                    key={ele.type}
                    path={ele.path}
                    render={(rest) => { return <ele.Component {...rest} /> }}
                />
            ))}

            {/* <Redirect from='/' to='/home' /> */}
            {/* <Redirect path='' to='/home' /> */}
        </Switch>
    )
}

export default BasicLayout;
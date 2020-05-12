import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import BasicSiderIndex from '../layouts/BasicSiderIndex'
import BasicIndex from '../layouts/BasicIndex'
import Routes from '../Routers/routes'


// 路由
function BasicLayout() {
    useEffect(() => {
        console.log(Routes)
        // document.title = `You clicked layouts times`;
    }, [])

    return (
        <Switch>
            {Routes.map((route) => (
                <Route
                    exact
                    key={route.path}
                    path={route.path}
                    render={() => (
                        <route.component>
                            {route.routes.map((ele: any) => (
                                <Route
                                    exact
                                    key={ele.path}
                                    path={ele.path}
                                    render={(rest) => { return <ele.component {...rest} /> }}
                                />
                            ))}
                        </route.component>
                    )}
                />
            ))}
            {/* <Route
                exact
                path='/platform'
                render={(rest) => { return <BasicIndex {...rest} /> }}
            /> */}
            {/* <Route
                exact
                path='/workbench'
                render={(rest) => { return <BasicSiderIndex {...rest} /> }}
            /> */}

            {/* <Redirect from='/' to='/home' /> */}
            {/* <Redirect path='' to='/home' /> */}
        </Switch>
    )
}

export default BasicLayout;
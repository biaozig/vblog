import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Error404 from '../pages/Error/Error404'
import Routes from '../Routers/routes'

function BasicLayout() {
    useEffect(() => {
        console.log(Routes)
        document.title = `You clicked layouts times`;
    }, [])

    return (
        <Switch>
            {Routes.map((ele: any) => {
                console.log(ele)
                return (
                    <Route
                        exact
                        key={ele.path}
                        path={ele.path}
                        render={(props) => { return <ele.component {...props} /> }}
                    />
                )
            })}

            {/* <Redirect from='/' to='' /> */}
            {/* <Route path="*" render={() => { return <Error404 /> }} /> */}
            {/* <Route path="*" render={() => { return <Redirect to='/' /> }} /> */}
        </Switch>
    )
}

export default BasicLayout;
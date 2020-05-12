import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Routes from '../../Routers/routes'

/**
 *  @params 
 *    layout 模板
 *          
 **/
function BlockRouter(props: any) {
    useEffect(() => {
        console.log(props)
    })

    // 筛选路由
    const filterRoutes = (): Array<any> => {
        let route = Routes.find((v: any) => (v.path === props.path));

        console.log(route)
        return route ? route.routes : [];
    }

    return (
        <props.layout>
            {/* <Switch> */}
            {filterRoutes().map((route: any) => (
                <Route
                    key={route.path}
                    render={(rest) => { return <route.component {...rest} /> }}
                    {...props}
                    exact
                />
            ))}
            {/* </Switch> */}
        </props.layout>
    )

    return <Route {...props} render={(rest) => { return <props.layout {...rest} /> }} />
}

export default withRouter(BlockRouter)
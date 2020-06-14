import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import platform from '../Routers/path/platform';
import workbench from '../Routers/path/workbench';

import BasicIndex from '../layouts/BasicIndex';
import PrivateRoute from './PrivateRoute';
import BasicSiderIndex from '../layouts/BasicSiderIndex';
import ArticleDetail from '../pages/Platform/Article/Detail';
import ArticleList from '../pages/Platform/Article/List';


// 筛选需要验证登录的组件
const PlatformAuthRoutes = platform.filter((v:any) => { return v.auth !== false }) || [];

function LayoutRoute({ logged }: any) { 

    return (
        <Switch>
            <Route path='/' component={() => (
                <BasicIndex initPath='/article'>
                    <Route path='/article' component={ArticleList} />
                    <Route path='/article/:id/info' component={ArticleDetail} />
                </BasicIndex>
            )} />
            {/* <PrivateRoute path='/platform' component={() => (
                <BasicIndex initPath='/platform/article'>
                    {PlatformAuthRoutes.map((route:any) => (
                        <Route 
                            key={route.type} 
                            path={route.path}
                            component={route.component} 
                        />
                    ))}
                </BasicIndex>
            )} /> */}
            <PrivateRoute path='/workbench' component={() =>(
                <BasicSiderIndex initPath='/workbench/dashboard'>
                    {workbench.map((route:any) => {
                        return route.children ? route.children.map((ele:any) => (
                                    <Route 
                                        key={ele.type} 
                                        path={ele.path}
                                        component={ele.component}
                                    />
                                )): <Route 
                                    key={route.type} 
                                    path={route.path}
                                    component={route.component}
                                />
                    })}
                    {/* <Route path='/workbench/dashboard' component={Login} /> */}
                    {/* <Redirect from='/workbench' to='/workbench/dashboard' exact /> */}
                    {/* <Redirect from='/workbench' to='/workbench/dashboard' /> */}
                    {/* <Route path='/BasicSiderIndex/login1' component={Login} />
                    <Route path='/BasicSiderIndex/login2' component={Login} />
                    <Route path='/BasicSiderIndex/login3' component={Login} /> */}
                </BasicSiderIndex>
            )} />
        </Switch>
    )

}

export default LayoutRoute
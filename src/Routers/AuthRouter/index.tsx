import React from 'react'
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom'

// 配置路由
function AuthRouter (props:any) {
    // let Component = props.component;
    let token = localStorage.getItem('token');
    let isLogined = token ? true : false;
	console.log(isLogined, props)
    return <Route {...props} render={(rest) => (isLogined ? <props.component {...rest} /> : <Redirect to={'/login'} />)} />;
}

export default withRouter(AuthRouter);
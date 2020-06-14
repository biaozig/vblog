import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
// import BasicIndex from '../layouts/BasicIndex';
// import BasicSiderIndex from '../layouts/BasicSiderIndex';

function LayoutRoute({ logged }: any) { 
    return (
        <Switch>
            {/* <Route path='/' component={() => (
                <BasicIndex initPath='/article'>
                    <Route path='/article' component={ArticleList} />
                    <Route path='/article/:id/info' component={ArticleDetail} />
                </BasicIndex>
            )} />
            <PrivateRoute path='/platform' component={BasicSiderIndex} /> */}
        </Switch>
    )

}

export default LayoutRoute
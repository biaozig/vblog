import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
  path: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired
};

function PrivateRoute({ component: Component, isAuthenticated = true, ...rest }: any) {
  return (
    <Route
      {...rest}
      exact
      render={_props =>
        isAuthenticated ? <Component {..._props} />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: _props.location }
            }}
          />
      }
    />
  );
}

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;

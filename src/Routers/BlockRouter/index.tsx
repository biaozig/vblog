import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
const propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired
};

function BlockRouter({ component: Component, isAuthenticated = false, ...rest }:any) {
  return (
    <Route {...rest} render={_props => (<Component {..._props} />)} />
  );
}

BlockRouter.propTypes = propTypes;

export default BlockRouter;

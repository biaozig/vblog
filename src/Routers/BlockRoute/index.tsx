import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import BasicIndex from '../../layouts/BasicIndex'

const propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired
};

function BlockRouter({ component: Component, path: string, ...rest }: any) {
  return (
    <Route path='/platform' {...rest} render={_props => (<BasicIndex {..._props} />)} exact />
  );
}

BlockRouter.propTypes = propTypes;

export default BlockRouter;

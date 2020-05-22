import { Action, State } from './types';
import React from 'react';
import reducer, { initialState } from './reducers';
import applyMiddleware from './middleware'
import { Props } from '../types';

/**
 * 初始化上下文
 * storeContext：store 数据
 * dispatchContext：dispatch 函数
 **/
const StoreContext = React.createContext({});


const Provider = (props: Props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
  
    // 让 dispatch 支持 middleware
    const enhancedDispatch = applyMiddleware(state, dispatch);
  
    return (
        <StoreContext.Provider value={state}>{props.children}</StoreContext.Provider>
    );
};


export default Provider;
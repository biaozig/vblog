// https://www.jianshu.com/p/d1dea4e2d51d
import * as React from 'react';

interface IState { // 共享数据结构
  background: string;
}

interface IAction { // dispatch派发的action结构
  type: string;
  value: string;
}

export interface IStore { // 由React.createContext所创建的store的数据机构，这里与BgContext.Provider 组件上的 value 是相对应的
  state: {
    background: string
  };
  dispatch?: React.Dispatch<IAction>;
}

export const BgContext = React.createContext<IStore>({
  state: {
    background: '#eee'
  }
});


const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BG':
      return {...state, background: action.value};
    default:
      return state;
  }
};

export const BgSore: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, {background: '#eee'}); // 创建reducer
  return (
    <BgContext.Provider value={{state, dispatch}}>
      {children}
    </BgContext.Provider>
  );
};
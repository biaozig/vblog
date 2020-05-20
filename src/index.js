import React from 'react';
import ReactDOM from 'react-dom';
import ReactHookRedux from 'react-hooks-redux';
import AppRouter from './Routers';
import './index.css';

import * as serviceWorker from './serviceWorker';

// 通过 ReactHookRedux 获得 Provider 组件和一个 sotre 对象
const { Provider, store } = ReactHookRedux({
  isDev: true, // 打印日志
  initialState: { name: 'dog', age: 0 },
});

ReactDOM.render(
  // <React.StrictMode>
  <Provider>
    <AppRouter />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

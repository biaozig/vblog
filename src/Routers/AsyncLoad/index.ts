import Loadable from 'react-loadable'
import Loading from './Loading'

// 异步加载模块
function AsyncLoad(opts:any) {
  return Loadable({
    ...opts,
    loading: Loading,
    delay: 200,
    timeout: 2000,
  })
};

export default AsyncLoad

import Detail from '../../pages/Detail/Detail'
import MarkDown from '../../pages/MarkDown/MarkDown'
import AccountCenter from '../../pages/Account/Center'
import AccountProfile from '../../pages/Account/Profile'


// 定义平台路由
export const platform = [
    { path: '/markdown', component: MarkDown, },
    { path: '/account', component: AccountCenter, },
    { path: '/account/profile', component: AccountProfile, },

]
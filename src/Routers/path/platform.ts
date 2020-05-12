import MarkDown from '../../pages/platform/MarkDown/MarkDown'
import AccountForgot from '../../pages/platform/Account/Forgot' // 忘记密码
import AccountCenter from '../../pages/platform/Account/Center' // 个人中心
import AccountProfile from '../../pages/platform/Account/Profile' // 个人资料
import AccountRegister from '../../pages/platform/Account/Register' // 注册账号


// 定义平台路由
export const platform = [
    { path: '/markdown', component: MarkDown, },
    { path: '/account', component: AccountCenter, },
    { path: '/account/forgot', component: AccountForgot, },
    { path: '/account/profile', component: AccountProfile, },
    { path: '/account/register', component: AccountRegister, },
    // { path: '/account/profile', component: AccountProfile, },


]
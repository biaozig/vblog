import MarkDown from '../../pages/Platform/MarkDown/MarkDown'
import AccountForgot from '../../pages/Platform/Account/Forgot' // 忘记密码
import AccountCenter from '../../pages/Platform/Account/Center' // 个人中心
import AccountProfile from '../../pages/Platform/Account/Profile' // 个人资料
import AccountRegister from '../../pages/Platform/Account/Register' // 注册账号


// 定义平台路由
export const platform = [
    { path: '/platform/markdown', component: MarkDown, },
    { path: '/platform/account', component: AccountCenter, },
    { path: '/platform/account/forgot', component: AccountForgot, },
    { path: '/platform/account/profile', component: AccountProfile, },
    { path: '/platform/account/register', component: AccountRegister, },
    // { path: '/account/profile', component: AccountProfile, },


]
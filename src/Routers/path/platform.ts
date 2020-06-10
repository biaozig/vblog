import { asyncComponent } from '../AsyncComponent'; // 异步加载组件


const ArticleList = asyncComponent(() => import('../../pages/Platform/Article/List')); // 文章列表
const ArticleDetail = asyncComponent(() => import('../../pages/Platform/Article/Detail')); // 文章详情
const ArticleUpdate = asyncComponent(() => import('../../pages/Platform/Article/Update')); // 文章编辑、添加



const MarkDown = asyncComponent(() => import('../../pages/Platform/MarkDown/MarkDown')); // 编辑器
const AccountForgot = asyncComponent(() => import('../../pages/Platform/Account/Forgot')); // 忘记密码
const AccountCenter = asyncComponent(() => import('../../pages/Platform/Account/Center')); // 个人中心
const AccountProfile = asyncComponent(() => import('../../pages/Platform/Account/Profile')); // 个人资料
const AccountRegister = asyncComponent(() => import('../../pages/Platform/Account/Register')); // 注册账号

// 定义平台路由
export default [
    { 
        icon: '',
        title: '文章列表',
        type: 'ArticleList',
        path: '/article', 
        auth: false,
        component: ArticleList
    }, { 
        icon: '',
        title: '文章详情',
        type: 'ArticleDetail',
        path: '/article/:id/info', 
        auth: false,
        component: ArticleDetail
    }, { 
        icon: '',
        title: '文章编辑',
        type: 'ArticleUpdate',
        path: '/article/update', 
        component: ArticleUpdate
    }, 



    { 
        icon: '',
        title: '编辑器',
        type: 'MarkDown',
        path: '/markdown', 
        component: MarkDown
    }, { 
        icon: '',
        title: '个人中心',
        type: 'AccountCenter',
        path: '/account', 
        component: AccountCenter
    }, { 
        icon: '',
        title: '个人资料',
        type: 'AccountProfile',
        path: '/account/profile', 
        component: AccountProfile
    }, { 
        icon: '',
        title: '账号注册',
        type: 'AccountRegister',
        path: '/account/register', 
        component: AccountRegister
    }, { 
        icon: '',
        title: '忘记密码',
        type: 'AccountForgot',
        path: '/account/forgot', 
        component: AccountForgot
    },
]

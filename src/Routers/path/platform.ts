import { asyncComponent } from '../AsyncComponent'; // 异步加载组件
import BasicIndex from "../../layouts/BasicIndex";


const ArticleList = asyncComponent(() => import('../../pages/Platform/Article/List')); // 文章列表
const ArticleDetail = asyncComponent(() => import('../../pages/Platform/Article/Detail')); // 文章详情
const ArticleUpdate = asyncComponent(() => import('../../pages/Platform/Article/Update')); // 文章编辑、添加


const MarkDown = asyncComponent(() => import('../../pages/Platform/MarkDown/MarkDown')); // 编辑器
const AccountForgot = asyncComponent(() => import('../../pages/Platform/Account/Forgot')); // 忘记密码
const AccountCenter = asyncComponent(() => import('../../pages/Platform/Account/Center')); // 个人中心
const AccountProfile = asyncComponent(() => import('../../pages/Platform/Account/Profile')); // 个人资料
const AccountRegister = asyncComponent(() => import('../../pages/Platform/Account/Register')); // 注册账号


const Error404 = asyncComponent(() => import('../../pages/Error/Error404')); // 404
// const Error500 = asyncComponent(() => import('../../pages/Error/Error500')); // 500

// 定义平台路由
export default {
    title: '',
    path: '/platform',
    layoutComponent: BasicIndex,
    children: [
        { 
            icon: '',
            path: '/', 
            title: '文章列表',
            component: ArticleList
        }, 
        { 
            icon: '',
            path: '/article/:id/info', 
            title: '文章详情',
            component: ArticleDetail
        }, 
        { 
            icon: '',
            path: '/article/update', 
            title: '文章编辑',
            component: ArticleUpdate
        }, 
        { 
            icon: '',
            path: '/found', 
            title: '发现',
            component: ArticleUpdate
        }, 
        { 
            icon: '',
            path: '/attent', 
            title: '关注',
            component: ArticleUpdate
        }, 
    
    
        { 
            icon: '',
            path: '/markdown', 
            title: '编辑器',
            component: MarkDown
        }, { 
            icon: '',
            path: '/account', 
            title: '个人中心',
            component: AccountCenter
        }, { 
            icon: '',
            path: '/account/profile', 
            title: '个人资料',
            component: AccountProfile
        }, { 
            icon: '',
            path: '/account/register',
            title: '账号注册',
            component: AccountRegister
        }, { 
            icon: '',
            path: '/account/forgot',
            title: '忘记密码',
            component: AccountForgot
        },
        { 
            path: '*',
            title: '404',
            component: Error404
        }
    ]
};
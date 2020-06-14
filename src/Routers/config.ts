import { asyncComponent } from './AsyncComponent'; // 异步加载组件

// 路由配置
// const UserInfo = asyncComponent(() => import('../../pages/Workbench/User/UserInfo')); // 用户信息
export default {
    localApi: '', // 接口地址
    proxy: '', // 代理
    routes: [
        {
            path: '/workbench',
            title: 'workbench',
            type: 'workbench',
            component: asyncComponent(() => import('../layouts/BasicSiderIndex')),
            routes: [
                {
                    title: '首页',
                    type: 'workbench.dashboard',
                    icon: '',
                    path: '/workbench/dashboard',
                    component: asyncComponent(() => import('../pages/Workbench/Dashboard/Dashboard')),
                }, {
                    title: '发布',
                    type: 'workbench.publish',
                    icon: '',
                    path: '/workbench/publish',
                    component: asyncComponent(() => import('../pages/Workbench/Publish/Publish')),
                }, {
                    title: '收藏',
                    type: 'workbench.collect',
                    icon: '',
                    path: '/workbench/collect',
                    component: asyncComponent(() => import('../pages/Workbench/Collection/Collection')),
                }, {
                    title: '关注',
                    type: 'workbench.attent',
                    icon: '',
                    path: '/workbench/attent',
                    component: asyncComponent(() => import('../pages/Workbench/Attention/Attention')),
                }, {
                    title: '用户管理',
                    type: 'workbench.user',
                    icon: '',
                    path: '/workbench/user',
                    component: asyncComponent(() => import('../pages/Workbench/User/User')),
                }, {
                    title: '用户信息',
                    type: 'workbench.userinfo',
                    icon: '',
                    path: '/workbench/user/:id/info',
                    menuHide: true,
                    component: asyncComponent(() => import('../pages/Workbench/User/UserInfo')),
                },
            ],
        },
        {
            path: '/',
            title: 'platform',
            type: 'platform',
            component: asyncComponent(() => import('../layouts/BasicIndex')),
            routes: [
                {
                    path: '/',
                    type: '.article',
                    redirect: '/article',
                },
                {
                    title: 'articleList',
                    type: '.article.list',
                    path: '/article',
                    auth: false,
                    component: asyncComponent(() => import('../pages/Platform/Article/List')),
                },  {
                    title: 'articleDetail',
                    type: '.article.detail',
                    path: '/article/:id/info',
                    auth: false,
                    component: asyncComponent(() => import('../pages/Platform/Article/Detail')),
                },  {
                    title: 'articleUpdate',
                    type: '.article.update',
                    path: '/article/update/:id',
                    authority: ['user'],
                    component: asyncComponent(() => import('../pages/Platform/Article/Update')),
                },
            ],
        }, 
        
    ]
}
import { asyncComponent } from '../AsyncComponent'
import BasicSiderIndex from "../../layouts/BasicSiderIndex";

// 配置工作台路由
const Dashboard = asyncComponent(() => import('../../pages/Workbench/Dashboard/Dashboard')); // 工作台

// 内容管理
const Like = asyncComponent(() => import('../../pages/Workbench/Like/Like')); // 喜欢
const Publish = asyncComponent(() => import('../../pages/Workbench/Publish/Publish')); // 发布
const Collection = asyncComponent(() => import('../../pages/Workbench/Collection/Collection')); // 收藏
const Attention = asyncComponent(() => import('../../pages/Workbench/Attention/Attention')); // 关注

// 用户管理
const User = asyncComponent(() => import('../../pages/Workbench/User/User')); // 用户管理
const UserInfo = asyncComponent(() => import('../../pages/Workbench/User/UserInfo')); // 用户信息

// 404/500
export const Error404 = asyncComponent(() => import('../../pages/Error/Error404')); // 404
export const Error500 = asyncComponent(() => import('../../pages/Error/Error500')); // 500


// Collection
export const routers = [
    {
        path: '/',
        component: '',
        routes: [
            // { path: '/', redirect: '/dashboard/analysis' },
            {
                path: '/workbench',
                name: 'workbench',
                icon: 'workbench',
                redirect: '/workbench/analysis',
                routes: [
                    { 
                        name: '工作台', 
                        type: 'analysis', 
                        path: '/workbench/analysis', 
                        component: '../../pages/Workbench/Dashboard/Dashboard' 
                    }, { 
                        name: '发布',
                        type: 'public', 
                        path: '/workbench/public', 
                        component: '../../pages/Workbench/Publish/Publish' 
                    }, { 
                        name: '收藏', 
                        type: 'collect', 
                        path: '/workbench/collect', 
                        component: '../../pages/Workbench/Collection/Collection' 
                    }, { 
                        name: '关注', 
                        type: 'attent', 
                        path: '/workbench/attent', 
                        component: '../../pages/Workbench/Attention/Attention' 
                    }, { 
                        name: 'monitor', 
                        type: 'monitor', 
                        path: '/workbench/monitor', 
                        component: '../../pages/Workbench/Dashboard/Dashboard' 
                    }, { 
                        name: 'workplace', 
                        type: 'workplace', 
                        path: '/workbench/workplace', 
                        component: '../../pages/Workbench/Dashboard/Dashboard' 
                    }
                ],
            },
        ]
    }, 
    // {
    //     path: '/',
    //     component: '',
    //     routes: [
    //         { path: '/', redirect: '/dashboard/analysis' },
    //         {
    //             path: '/dashboard',
    //             name: 'dashboard',
    //             icon: 'dashboard',
    //             routes: [
    //               { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
    //               { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
    //               { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
    //             ],
    //         },
    //     ]
    // }
];


// 工作台路由
export default {
    title: '工作台',
    path: '/workbench',
    layoutComponent: BasicSiderIndex,
    children: [
        {
            path: '/',
            title: '工作台',
            component: Dashboard
        },
        {
            type: 'nr-management',
            title: '内容管理',
            children: [
                { 
                    icon: '',
                    type: 'collect',
                    title: '收藏',
                    path: '/collect', 
                    component: Collection
                }, { 
                    icon: '',
                    type: 'attent',
                    title: '关注',
                    path: '/attent', 
                    component: Attention
                }, { 
                    icon: '',
                    type: 'like',
                    title: '喜欢',
                    path: '/like', 
                    component: Like
                }, { 
                    icon: '',
                    type: 'collect',
                    title: 'public',
                    path: '/public', 
                    component: Publish
                },
            ]
        }, 
        {
            type: 'us-management',
            title: '用户管理',
            children: [
                { 
                    icon: '',
                    type: 'user',
                    title: '用户列表',
                    path: '/user', 
                    component: User
                }, { 
                    icon: '',
                    type: 'userInfo',
                    title: '关注',
                    path: '/user/:id', 
                    component: UserInfo
                }
            ]
        }, 
        {
            type: 'life-art',
            title: '生活与艺术',
            children: []
        }, 
        {
            type: 'nature-science',
            title: '自然与科学',
            children: []
        },
        { 
            path: '*', 
            title: '404',
            component: Error404 
        }
    ]
}
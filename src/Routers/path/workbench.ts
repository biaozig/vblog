// 工作台
import WorkbenchDashboard from '../../pages/workbench/Dashboard/Dashboard'; // 工作台
import WorkbenchUser from '../../pages/workbench/User/User'; // 用户管理
import WorkbenchUserDetail from '../../pages/workbench/User/UserDetail'; // 用户信息

// 定义工作台路由
export const workbench = [
    { path: '/workbench/dashboard', component: WorkbenchDashboard, },
    { path: '/workbench/user', component: WorkbenchUser, },
    { path: '/workbench/user/:id', component: WorkbenchUserDetail, },

];
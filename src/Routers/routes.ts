import { platform } from "./path/platform"
import { workbench } from "./path/workbench"

import BasicSiderIndex from '../layouts/BasicSiderIndex'
import BasicIndex from '../layouts/BasicIndex'

// 导出路由
export default  [
    {
        type: 'platform',
        path: '/platform',
        routes: platform,
        component: BasicIndex
    }, {
        type: 'workbench',
        path: '/workbench',
        routes: workbench,
        component: BasicSiderIndex
    }
];
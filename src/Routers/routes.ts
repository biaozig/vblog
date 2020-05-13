import { platform } from "./path/platform"
import { workbench } from "./path/workbench"

import BasicIndex from '../layouts/BasicIndex'
import BasicSiderIndex from '../layouts/BasicSiderIndex'

console.log(BasicIndex)
console.log(BasicSiderIndex)
// 导出路由
export default  [
    {
    //     type: 'basic',
    //     path: '/basic',
    //     routes: [],
    //     component: BasicIndex
    // }, {
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
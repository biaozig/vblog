import { platform } from "./path/platform"
import { workbench } from "./path/workbench"


const routes = [
    {
        mode: 'platform',
        routes: platform
    }, {
        mode: 'workbench',
        routes: workbench
    }
];

export default routes;
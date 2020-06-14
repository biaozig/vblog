import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import { ClusterOutlined } from '@ant-design/icons';

import workbench from '../../Routers/path/workbench'
// import AsyncLoad from '../../Routers/AsyncLoad'
import './index.scss'

const { SubMenu } = Menu;


// 渲染路由
// async function renderRoute (path:string) {

//     let r = await import('../../pages/Workbench/Dashboard/Dashboard')
//     console.log(r.default)
//     return r;
// }

function BasicSider(props: any) {
    const history = useHistory();
    // const [collapsed, setCollapsed] = useState(false);

    // 设置默认路由
    const setdefaultOpen = ():string => {
        // return (workbench.children && workbench.children.length) ? workbench.children[0].path : '';
        return '';
    }

    useEffect(() => {
        // console.log(workbench)
    }, [])

    return (
        <div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[setdefaultOpen()]}
                defaultOpenKeys={[setdefaultOpen()]}
                // inlineCollapsed={collapsed}
            >
                {workbench.children.map((route:any) => {
                    return route.children ? (
                        <SubMenu key={route.type} icon={<ClusterOutlined />} title={route.title}>
                            {route.children.map((ele:any) => (
                                <Menu.Item 
                                    key={ele.path} 
                                    icon={<ClusterOutlined />}
                                    onClick={() => history.push(ele.path)}> 
                                    {ele.title}
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item 
                            key={route.path} 
                            icon={<ClusterOutlined />}
                            onClick={() => history.push(route.path)}>
                            {route.title}
                        </Menu.Item>
                    )
                })}
            </Menu>
        </div>
    )
}

export default BasicSider
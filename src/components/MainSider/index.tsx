import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import { ClusterOutlined } from '@ant-design/icons';

import workbenchRoutes, { routers } from '../../Routers/path/workbench'
import AsyncLoad from '../../Routers/AsyncLoad'
import './index.scss'

const { SubMenu } = Menu;


// 渲染路由
async function renderRoute (path:string) {

    let r = await import('../../pages/Workbench/Dashboard/Dashboard')
    
    console.log(r.default)
    return r;
}

function BasicSider(props: any) {
    const history = useHistory();
    // const [collapsed, setCollapsed] = useState(false);

    // 设置默认路由
    const setdefaultOpen = ():string => {
        let R = (workbenchRoutes[0] && workbenchRoutes[0].children && workbenchRoutes[0].children.length) ? (workbenchRoutes[0].children[0].path||'')
                : workbenchRoutes[0] ? (workbenchRoutes[0].path||'') : '';

        return R;
    }

    useEffect(() => {
        setdefaultOpen();

        console.log(routers)
        renderRoute('')
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
                {workbenchRoutes.map((route:any) => {
                    return (route.children && route.children.length) ? (
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
                            key={route.type} 
                            icon={<ClusterOutlined />}
                            onClick={() => history.push(route.path)}>
                            {console.log(route)}
                            {route.title}
                        </Menu.Item>
                    )
                })}
            </Menu>
        </div>
    )
}

export default BasicSider
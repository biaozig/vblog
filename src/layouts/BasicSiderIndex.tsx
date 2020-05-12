import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons'

import Error404 from '../pages/Error/Error404'
import routes from '../Routers/routes'
import './BasicSiderIndex.scss'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function BasicSiderIndex(props: any) {
    const [collapsed, setCollapsed] = useState(false);

    // 获取工作台路由
    const RouteWorkbench: any = () => {
        let route = routes.find((v: any) => {
            return v.type === 'workbench';
        })

        console.log(route)
        return route ? route.routes : [];
    }

    useEffect(() => {
        console.log(RouteWorkbench())

    }, [])

    
    return (
        <div className='app-basiclayouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Sider width={200} style={{ height: document.body.clientHeight }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            Option 3
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                    <div onClick={() => setCollapsed(!collapsed)}>

                    </div>
                </Sider>
                <Content style={{ padding: '0 50px' }}>
                    {/* {RouteWorkbench()}
                    <Switch>
                        {RouteWorkbench().map((ele: any) => (
                            <Route
                                key={ele.path}
                                path={ele.path}
                                render={(props) => { return <ele.component {...props} />}}
                                exact
                            />
                        ))}

                        <Redirect from="/workbench" to='/workbench/dashboard' />
                        <Route path="*" render={() => <Error404 />} />
                    </Switch> */}
                </Content>
                {/* <Footer style={{ textAlign:'center', background:props.background||'transparent' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        </div>
    )
}

export default BasicSiderIndex
import React, { useEffect } from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import MainHeader from '../components/MainHeader'
import './BasicIndex.scss'

import platform from '../Routers/path/platform'
const { Header, Content, Footer } = Layout;


function BasicIndex(props: any) {

    useEffect(() => { 

        // console.log(props, platform)
    }, [])

    return (
        <div className='app-basiclayouts'>
            <Layout className="layout" style={{ background: props.background }}>
                <Header style={{ position: 'fixed', zIndex: 999, width: '100%', background: '#fff' }}>
                    <MainHeader />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <React.Fragment>
                        <Router>
                            <Switch>
                                {platform.children && platform.children.map((route:any) => (
                                    <Route 
                                        exact
                                        key={route.path}
                                        path={route.path} 
                                        component={route.component} 
                                    />
                                ))}
                            </Switch>
                        </Router>
                    </React.Fragment>
                </Content>
                <Footer style={{ textAlign: 'center', background: props.background || 'transparent' }}>
                    内容发布平台 ©2020 Created by ZCC AUTH.
                </Footer>
            </Layout>
        </div>
    )
}

export default BasicIndex
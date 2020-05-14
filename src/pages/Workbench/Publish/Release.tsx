import React, { useState } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import './Release.scss'

const { Content, Footer } = Layout;

// 文档编辑器
function Release () {
    // 创建一个空的editorState作为初始值
    const [editorState, setEditorState] = useState(null);

    // 提交到发布
    const submitContent = () => {
        
    }

    return (
        <div className='app-markdown'>
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><HomeOutlined /> 首页</Breadcrumb.Item>
                        <Breadcrumb.Item>写文章</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {/* 编辑文章 */}
                        <BraftEditor
                            value={editorState}
                            onChange={(editorState) => setEditorState(editorState)}
                            onSave={submitContent}
                        />

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default Release
import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { SketchOutlined, CommentOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

import './User.scss'

const { Content, Header } = Layout;

function WorkSpaceUserDetail() {

  // 跳转
  // const history = useHistory();
  // const historyPush = (path: string) => {
  //   history.push(path)
  // }

  return (
    <div className='app-work-dashboard'>
      <Layout className='container'>
        <Content>
          用户详情
        </Content>
      </Layout>
    </div>
  )
}

export default WorkSpaceUserDetail
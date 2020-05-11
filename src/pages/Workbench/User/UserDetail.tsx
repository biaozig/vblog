import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Layout, Table } from 'antd'
import { SketchOutlined, CommentOutlined } from '@ant-design/icons'

import BasicSiderIndex from '../../../layouts/BasicSiderIndex'
import './User.scss'

const { Content, Header } = Layout;

function WorkSpaceUserDetail() {
  const history = useHistory();

  // 跳转
  const historyPush = (path: string) => {
    history.push(path)
  }

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div className='app-work-dashboard'>
      <BasicSiderIndex background='#fff' initTab={['1']}>
        <Layout className='container'>
          <Header>
            增删改查
          </Header>
          <Content>

          </Content>
        </Layout>
      </BasicSiderIndex>
    </div>
  )
}

export default WorkSpaceUserDetail
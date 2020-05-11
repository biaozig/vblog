import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Layout, Table } from 'antd'
import { SketchOutlined, CommentOutlined } from '@ant-design/icons'

import BasicSiderIndex from '../../../layouts/BasicSiderIndex'
import './User.scss'

const { Content, Header } = Layout;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a:any, b:any) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a:any, b:any) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a:any, b:any) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

function WorkSpaceUser () {
    const history = useHistory();

    // 跳转
    const historyPush = (path: string) => {
        history.push(path)
    }

    const onChange = (pagination:any, filters:any, sorter:any, extra:any) => {
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
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </Content>
                </Layout>
            </BasicSiderIndex>
        </div>
    )
}

export default WorkSpaceUser
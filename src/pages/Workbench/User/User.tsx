import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { SketchOutlined, CommentOutlined } from '@ant-design/icons'
import { Table, Modal, Tag, Layout, Space, Button } from 'antd'
import { ColumnProps } from 'antd/es/table';

import './User.scss'

// 声明
interface User {
  id: string | number;
  key?: number;
  name: string;
  age: number;
  sex: '0' | '1';
  phone: string;
}

// 数据列
const columns: ColumnProps<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id' }, 
  { key: 'name', title: '名称', dataIndex: 'name' }, 
  { key: 'age', title: '年龄',  dataIndex: 'age' }, 
  { 
    key: 'sex', 
    title: '性别',  
    dataIndex: 'sex',
    render: (val?:string) => (val === '1' ? <Tag color='success'>男</Tag> : val === '0' ? <Tag color='warning'>女</Tag> : '-')
  }, 
  { key: 'phone', title: '电话', dataIndex: 'phone' }, 
  {
    title: '操作',
    key: 'action',
    render: (info:any) => (
      <span>
        <Link to={`/workbench/user/${info.id}`}>详情</Link>
        <Button type="link">编辑</Button>
        <Button type="link" danger>删除</Button>
      </span>
    ),
  },
];

// 数据
const data: User[] = [
  {
    key: 0,
    id: 1,
    name: 'Jack',
    age: 17,
    sex: '1',
    phone: '18516323721'
  }, {
    key: 1,
    id: 2,
    name: 'Katyly',
    age: 17,
    sex: '1',
    phone: '18516323723'
  },
];

// 用户列表
function WorkSpaceUser () {
    const [addVisible, setAddVisible] = useState(false);
    
    const onChange = (pagination:any, filters:any, sorter:any, extra:any) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    // 提交表单
    const handleSubmit = () => {
      setAddVisible(false)
    }

    // 取消
    const handleCancel = () => {
      setAddVisible(false)

      
    }

    return (
        <div className='app-work-dashboard'>
          <Layout className='container'>
              <div style={{background:'transparent',margin: '15px 0',}}>
                <Space>
                  <Button type="primary">添加用户</Button>
                </Space>
              </div>
              <Layout.Content>
                  <Table<User> 
                    columns={columns} 
                    dataSource={data} 
                    onChange={onChange} /> 
              </Layout.Content>

              <Modal
                title="Basic Modal"
                visible={addVisible}
                onOk={()=>handleSubmit()}
                onCancel={()=>handleCancel()}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>

          </Layout>
        </div>
    )
}

export default WorkSpaceUser
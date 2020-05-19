import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Modal, Button, message } from 'antd';

import MarkDown from '../../../components/MarkDown';
import { createArticle } from '../../../models/article';
import './Update.scss';

export default function ArticleUpdate (props: any) {
    const history = useHistory();
    const [form] = Form.useForm();
    const [initFormValues, setInitFormValues] = useState({});
    const [content, setContent] = useState('');
    
    // 提交数据
    const onFinish = (values:any) => {
        console.log('Success:', values, content);
        values['desc'] = content;
        
        if(!values['desc']){
            message.warning('文章内容不能为空！');
            return;
        }

        // 创建
        createArticle({ ...values }).then((res:any) => {
            message.info('文章发布成功！', 2, function(){
                history.replace('/article')
            });
        })
    }
    
    // 异常
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className='app-article-update'>
            <div className='container'>
                <Form
                    form={form}
                    layout='vertical'
                    initialValues={initFormValues}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item style={{textAlign:'right'}}>
                        <Button type="default" htmlType="submit">提交发布</Button>
                    </Form.Item>
                    <Form.Item 
                        label="标 题"
                        name='title' 
                        rules={[{ required: true, message: '输入文章标题!' }]}>
                        <Input placeholder="输入文章标题"/>
                    </Form.Item>
                    <Form.Item 
                        label="简 介"
                        name='resume' 
                        rules={[{ required: true, message: '输入文章简介!' }]}>
                        <Input.TextArea 
                            rows={4}
                            placeholder="输入文章简介"/>
                    </Form.Item>
                    <Form.Item 
                        label="详 情"
                        name='desc'
                        // rules={[{ required: true, message: '输入文章内容!' }]}
                        >
                        <MarkDown 
                            defaultValue={content}
                            onChange={(val:string) => setContent(val)}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
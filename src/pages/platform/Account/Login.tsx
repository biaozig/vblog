import React, { } from 'react';
import { useHistory } from "react-router-dom";
import { Avatar, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { userLoginIn } from '../../../models/login';
import './Login.scss';


// 文档编辑器
function MarkDown() {
    const history = useHistory();
    const onFinish = (values: any) => {
        userLoginIn({username: values['username'], password: values['password']}).then((res:any) => {
            console.log(res)
            localStorage.setItem('loginInfo', res.info)
            history.push('/platform/account/profile')
        })
    };

    return (
        <div className='account-login'>
            <div className='login-box'>
                <div className='login-title'>
                    系统平台登录
                </div>
                <div className='login-avatar'>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <div className='nickname'>一条咸鱼精.</div>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账户名!' }]}
                    >
                        <Input placeholder="登录用户名/邮箱" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            type="password"
                            placeholder="密码"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <a href="" className="login-form-forgot">忘记密码</a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        <br />
                        <br />
                        没有账号？ <a href="">立即注册</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default MarkDown
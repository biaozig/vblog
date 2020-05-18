import React from 'react';
import { Avatar, Button } from 'antd';
import { 
    SyncOutlined, 
    UserOutlined, 
    PlusOutlined, 
    CheckOutlined, 
    CloseOutlined, 
    RightOutlined,
  } from '@ant-design/icons';
import './index.scss';

// 推荐作者
export default function RecomUser (props:any) {

    return (
        <div className='RecomUser'>
            <div className='RecomUser_header'>
                <div className='title'>推荐作者</div>
                <div className='refer'>
                    <SyncOutlined /> <span>换一批</span>
                </div>
            </div>
            <div className='RecomUser_body'>
                <div className='RecomUser-item'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='content'>
                        <div className='nickname'>东坪吴彦祖</div>
                        <div className='desc'>写了961.9k字 · 3.7k喜欢</div>
                    </div>
                    <div className='btn attented'>
                        <div className='unhover'><CheckOutlined /> 已关注</div>
                        <div className='hovered'><CloseOutlined /> 取消关注</div>
                    </div>
                </div>
                <div className='RecomUser-item'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='content'>
                        <div className='nickname'>东坪吴彦祖</div>
                        <div className='desc'>写了961.9k字 · 3.7k喜欢</div>
                    </div>
                    <div className='btn attent'>
                        <PlusOutlined /> 关注
                    </div>
                </div>
                <div className='RecomUser-item'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='content'>
                        <div className='nickname'>东坪吴彦祖</div>
                        <div className='desc'>写了961.9k字 · 3.7k喜欢</div>
                    </div>
                    <div className='btn attent'>
                        <PlusOutlined /> 关注
                    </div>
                </div>
                <div className='RecomUser-item'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='content'>
                        <div className='nickname'>东坪吴彦祖</div>
                        <div className='desc'>写了961.9k字 · 3.7k喜欢</div>
                    </div>
                    <div className='btn attent'>
                        <PlusOutlined /> 关注
                    </div>
                </div>
                <div className='RecomUser-item'>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='content'>
                        <div className='nickname'>东坪吴彦祖</div>
                        <div className='desc'>写了961.9k字 · 3.7k喜欢</div>
                    </div>
                    <div className='btn attent'>
                        <PlusOutlined /> 关注
                    </div>
                </div>
            </div>
            <div className='RecomUser_footer'>
                <Button size='middle' block>查看更多 <RightOutlined /></Button>
            </div>
        </div>
    )
}


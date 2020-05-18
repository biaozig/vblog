import React from 'react';
import { Link } from 'react-router-dom';
import { SketchOutlined, CommentOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import './index.scss'

interface PropsType {
    data: any;
}

// 文章卡片 
export default function ArticleItem ({ data }: PropsType) {
    
    return (
        <div className="app-article-item">
            <div className='content'>
                <div className='title'>
                    <Link to={`/article/${data.id}/info`}>{data.title}</Link>
                </div>
                <div className='abstract'>{data.desc}</div>
                <div className='meta'>
                    <Space>
                        <span><SketchOutlined /> {data.zan}</span>
                        <span><CommentOutlined /> {data.recommend}</span>
                        <span><CommentOutlined /> {data.share}</span>
                        <span><CommentOutlined /> {data.like}</span>
                    </Space>
                </div>
            </div>
            <div className='image'>
                <img src={data.image} alt={data.image}/>
            </div>
        </div>
    )
}
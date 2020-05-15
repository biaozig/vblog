import React from 'react';
import { Link } from 'react-router-dom';
import { SketchOutlined, CommentOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import './index.scss'

interface PropsType {
    data: any;
}
export default function ArticleItem ({ data }: PropsType) {
    
    return (
        <div className="app-article-item">
            <div className='content'>
                <div className='title'>
                    <Link to={`/article/${111}`}>实战：Vue刷新当前页面</Link>
                </div>
                <div className='abstract'>
                    问题 最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。...
                </div>
                <div className='meta'>
                    <Space>
                        <span><SketchOutlined /> 0</span>
                        <span><CommentOutlined /> 0</span>
                        <span><CommentOutlined /> 0</span>
                        <span><CommentOutlined /> 0</span>
                    </Space>
                </div>
            </div>
            <div className='image'>
                <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面"/>
            </div>
        </div>
    )
}
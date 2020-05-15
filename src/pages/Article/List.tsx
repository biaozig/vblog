import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SketchOutlined, CommentOutlined } from '@ant-design/icons'
import { Layout, Space } from 'antd';
import request from '../../api/request';
import './List.scss'

const { Content, Sider } = Layout;

function ArticleList() {
    // 跳转
    // const history = useHistory();
    // const historyPush = (path: string) => {
    //     history.push(path)
    // }
    const [dataList, setDataList] = useState([]);

    const getRequest = async () => {
        console.log(111111111111111111111)

        let data:any = await request({ url: '/' });

        console.log(data)
        setDataList(data)
    }

    useEffect(() => {
        console.log(111111111111111111111)
        getRequest();

    }, [])

    return (
        <div className='app-article_list'>
            <Layout className='container'>
                <Content>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    实战：Vue刷新当前页面
                                </Link>
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    以“好贱”出名的41岁沈腾，得了不该得的病，负了不该负的人
                                </Link>
                            </div>
                            <div className='abstract'>
                                文/欣易 编辑/小麦 3月21日，喜剧演员沈腾更新微博，挑战最近兴起的反手涂口红。 作为国民喜剧大师，光是听到沈腾的名字就让人浮现笑意，更不要说...
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    实战：Vue刷新当前页面
                                </Link>
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    实战：Vue刷新当前页面
                                </Link>
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    实战：Vue刷新当前页面
                                </Link>
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                    <div className="app-article-item">
                        <div className='content'>
                            <div className='title'>
                                <Link to={`/12345/info`}>
                                    实战：Vue刷新当前页面
                                </Link>
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
                            <img src="https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="实战：Vue刷新当前页面" />
                        </div>
                    </div>
                </Content>
                <Sider width={350} style={{ background: '#fff' }}>
                    <div className='aside'>
                        right sidebar
                        <div className='board'>
                            <div></div>
                        </div>
                    </div>
                </Sider>
            </Layout>
        </div>
    )
}

export default ArticleList